#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.2 T-5.0.23: walk-forward 滚动回测 (walkforward.py)

样本内外严格分离 + 滚动/扩展窗口 + 跨折样本外稳定性 (无前视, PIT 联动)。
- walkforward_folds(total_days, train_frac, n_folds, expanding): 折叠索引
    训练段严格在测试段之前, 测试段连续不相交; expanding=扩展窗口 / rolling=固定窗口
- evaluate_walkforward(returns, predict_fn, ...): predict_fn(训练段) -> OOS 收益序列
    (仅用训练信息, 结构上无前视), 每折 OOS 绩效复用 backtest.compute_period_metrics
- stability_report / walkforward_summary: 跨折 CV 稳定性 (CV<threshold → stable)

测试: tests/test_walkforward.py (无前视断言 + 稳定性, TEST-PLAN 3.2)。
"""
import logging

import numpy as np

from backtest import compute_period_metrics

logger = logging.getLogger(__name__)


def walkforward_folds(total_days, train_frac=0.6, n_folds=3, expanding=True):
    """生成 [(train_slice, test_slice), ...]。

    - 每折训练段严格在测试段之前 (train.stop <= test.start), 样本内外不相交
    - 测试段连续且互不重叠; expanding=True 训练从起点累积扩展, False 固定窗口滚动
    """
    if int(n_folds) != n_folds or n_folds < 1:
        raise ValueError(f"n_folds 必须为正整数, 收到 {n_folds!r}")
    n = int(total_days)
    if n < 2:
        raise ValueError("总天数过短")
    base = int(n * train_frac)
    chunk = (n - base + n_folds - 1) // n_folds  # ceil
    if chunk < 1:
        raise ValueError("训练占比过大或折数过多, 测试段无有效长度")
    folds = []
    for f in range(n_folds):
        test_start = base + f * chunk
        test_end = min(base + (f + 1) * chunk, n)
        if test_end - test_start < 1:
            raise ValueError(f"第 {f + 1} 折测试段为空")
        if expanding:
            tr = slice(0, test_start)
        else:
            tr = slice(f * chunk, f * chunk + base)
        folds.append((tr, slice(test_start, test_end)))
    return folds


def evaluate_walkforward(returns, predict_fn, train_frac=0.6, n_folds=3,
                         expanding=True):
    """滚动样本外评估。

    predict_fn(train_rets) -> OOS 收益序列 (长度≈本折测试段; 仅用训练段信息, 无前视)
    返回 {"folds": [每折 OOS 指标], "summary": 跨折稳定性汇总}
    """
    n = len(returns)
    folds = walkforward_folds(n, train_frac, n_folds, expanding)
    out = {"folds": []}
    for tr, te in folds:
        train_rets = [returns[i] for i in range(*tr.indices(n))]
        pred = predict_fn(train_rets)
        pred = list(pred) if pred is not None else []
        if len(pred) == 0:
            m = {"total_return": 0.0, "annual_return": 0.0, "max_drawdown": 0.0,
                 "volatility": 0.0, "sharpe_ratio": None, "win_rate": 0.0}
        else:
            m = compute_period_metrics(pred)
        fold = {
            "train_start": tr.start, "train_end": tr.stop,
            "test_start": te.start, "test_end": te.stop,
            "oos_total_return": m["total_return"],
            "oos_annual_return": m["annual_return"],
            "oos_max_drawdown": m["max_drawdown"],
            "oos_volatility": m["volatility"],
            "oos_sharpe_ratio": m["sharpe_ratio"],
            "oos_win_rate": m["win_rate"],
        }
        out["folds"].append(fold)
    out["summary"] = walkforward_summary(out["folds"])
    return out


def _cv_of(totals):
    arr = np.asarray(totals, dtype=float)
    mean = float(arr.mean()) if len(arr) else 0.0
    std = float(arr.std()) if len(arr) else 0.0
    if abs(mean) > 1e-12:
        cv = std / abs(mean)
    else:
        cv = 0.0 if std < 1e-12 else float("inf")
    return mean, std, cv


def walkforward_summary(oos_metrics_list, cv_threshold=0.5):
    """跨折 OOS 稳定性汇总: mean/std/CV/stable/mean_sharpe。"""
    totals = [f.get("oos_total_return") or 0.0 for f in oos_metrics_list]
    sharpes = [f.get("oos_sharpe_ratio") for f in oos_metrics_list]
    sharpes = [s for s in sharpes if s is not None]
    mean, std, cv = _cv_of(totals)
    return {
        "mean_oos_total": mean,
        "std_oos_total": std,
        "cv": cv,
        "stable": cv < cv_threshold,
        "mean_oos_sharpe": float(np.mean(sharpes)) if sharpes else None,
        "n_folds": len(oos_metrics_list),
    }


def stability_report(oos_metrics_list, cv_threshold=0.5):
    """折稳定性报告 (与 walkforward_summary 同口径, 供参数稳定性/过拟合诊断复用)。"""
    totals = [o.get("oos_total_return") or 0.0 for o in oos_metrics_list]
    mean, std, cv = _cv_of(totals)
    return {"mean": mean, "std": std, "cv": cv,
            "stable": cv < cv_threshold, "n_folds": len(oos_metrics_list)}


def walkforward_evaluate_result(bt_result, train_frac=0.6, n_folds=3,
                                expanding=True):
    """从回测结果 dict (equity_curve) 计算 walk-forward OOS 稳定性。

    将策略净值曲线还原为日收益 → 按折叠切分 → 每折 OOS 简单总收益 (项目口径 ×100)
    → stability_report 跨折 CV。供参数扫描/研究台直接调用 (sweep.py 接入)。
    无 equity_curve 时返回 {"wf_supported": False}。
    """
    eq = bt_result.get("equity_curve")
    if not eq or len(eq) < 2:
        return {"wf_supported": False}
    rets = [eq[0] - 1.0] + [eq[i] / eq[i - 1] - 1.0 for i in range(1, len(eq))]
    folds = walkforward_folds(len(rets), train_frac, n_folds, expanding)
    oos = []
    for tr, te in folds:
        seg = rets[te.start:te.stop]
        oos.append({"oos_total_return": sum(seg) * 100.0})
    rep = stability_report(oos)
    return {"wf_supported": True, "wf_stable": rep["stable"], "wf_cv": rep["cv"],
            "wf_mean_oos_total": rep["mean"], "wf_std_oos_total": rep["std"],
            "wf_n_folds": rep["n_folds"]}


def build_walkforward_report(returns, predict_fn, train_frac=0.6, n_folds=3,
                             expanding=True, cv_threshold=0.5) -> Dict:
    """Walk-forward 报告 (T-5.1.24 / FR-5.1.2.4): 滚动 OOS 各折明细 + 稳定性诊断 + 结论。

    复用 evaluate_walkforward (各折指标) + walkforward_summary (跨折 CV 稳定性)。
    返回 {folds: [...], summary: {...}, verdict, note}。
    """
    result = evaluate_walkforward(returns, predict_fn, train_frac=train_frac,
                                  n_folds=n_folds, expanding=expanding)
    summary = result["summary"]
    folds = result["folds"]
    if not folds or len(folds) < 2:
        verdict = '样本不足'
        note = '折叠数 <2, 无法做跨折稳定性诊断'
    else:
        stable = summary.get("stable", False)
        cv = summary.get("cv")
        verdict = '稳定' if stable else '不稳定'
        note = ('各折 OOS 收益 CV=%.3f (<%s), 跨折稳定' % (cv, cv_threshold)) if stable else             ('各折 OOS 收益 CV=%.3f (≥%s), 跨折不稳定, 策略可能依赖特定行情段'
             % (cv, cv_threshold))
    return {
        'folds': folds,
        'summary': summary,
        'verdict': verdict,
        'note': note,
        'params': {'train_frac': train_frac, 'n_folds': n_folds,
                   'expanding': expanding, 'cv_threshold': cv_threshold},
    }
