#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""回测口径重跑与差异量化 (v7.11 FR-7.11-8)

背景: v7.10 修掉事件引擎两处真实缺陷 ——
  ① 用「当日权重 × 当日收益」计算 (前视), 应为「t 日收益 × t-1 日权重」;
  ② 换手成本按全量日期算好后 zip 到已过滤的收益序列 (跳日错位), 应为逐日配对。
修复后 v7.4 以来经该引擎产出的年化/夏普/回撤都会变, 方向更保守。

本脚本做两件事:
  1. 在同一权重矩阵上对比「修正口径」与「旧口径(等价复现)」, 给出可复算的差异数字;
     旧口径用 holdings.shift(-1) 喂给同一向量内核等价复现 —— 引擎取 w[t-1],
     移位后即取到原矩阵的 w[t], 与旧实现"当日权重乘当日收益"一致。
  2. 清点库内既有归档结论(research_experiments)条数, 判定"是否需要覆盖":
     0 条即无数字需要作废, 只需在文档层面标注口径分界日。

用法:
    python3 scripts/recalib_backtest.py                     # 真实行情(不可用则模拟), 4 标的
    python3 scripts/recalib_backtest.py --synthetic         # 强制模拟数据(离线可跑)
    python3 scripts/recalib_backtest.py --symbols 600000.SH,000001.SZ --days 300
输出: stdout 表格 + docs/samples/backtest-recalib-v7.11.0.json
"""
import argparse
import json
import os
import sys
from datetime import date, timedelta

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

FIELDS = ("open", "high", "low", "close", "volume")


def _panel(symbols, days, synthetic):
    """返回 (df_long, source): 长表含 date/symbol/close"""
    import pandas as pd

    end = date.today()
    start = end - timedelta(days=int(days * 1.6) + 40)
    if not synthetic:
        try:
            from strategy_sdk.data_portal import RealDataPortal
            panel = RealDataPortal().get_panel(list(FIELDS), start.isoformat(),
                                               end.isoformat(), universe=symbols)
            if panel is not None and not panel.empty:
                return panel, "realtime"
        except Exception as exc:  # 真实行情不可用: 如实标注来源为 simulated
            print("[recalib] 真实行情不可用, 降级模拟: %s" % exc)

    from strategy_sdk.testsupport import FakePortal
    dates = pd.bdate_range(end=end.isoformat(), periods=days).strftime("%Y-%m-%d").tolist()
    panel = FakePortal(dates=dates, symbols=symbols, seed=711).get_panel(
        list(FIELDS), start.isoformat(), end.isoformat(), universe=symbols)
    return panel, "simulated"


def _matrices(panel, symbols):
    """长表 → (holdings, returns) 宽表; 权重按 5 日动量 top2 等权, 每 5 日调仓"""
    import numpy as np
    import pandas as pd

    close = panel.pivot_table(index="date", columns="symbol", values="close").sort_index()
    close = close.dropna(how="all").ffill()
    rets = close.pct_change().fillna(0.0)

    mom = close.pct_change(5)
    w = pd.DataFrame(0.0, index=close.index, columns=close.columns)
    step = 5
    held = []
    for i, dt in enumerate(close.index):
        if i % step == 0:
            row = mom.loc[dt].dropna()
            held = list(row.sort_values(ascending=False).head(2).index) if len(row) else []
        if held:
            w.loc[dt, held] = 1.0 / len(held)
    return w, rets


def _metrics(res):
    """引擎指标字段口径: backtest.compute_period_metrics(百分比为单位)"""
    m = res.get("metrics") or {}
    return {
        "total_return": m.get("total_return"),
        "annual_return": m.get("annual_return"),
        "sharpe_ratio": m.get("sharpe_ratio"),
        "max_drawdown": m.get("max_drawdown"),
        "volatility": m.get("volatility"),
        "win_rate": m.get("win_rate"),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--symbols", default="600000.SH,000001.SZ,600519.SH,000858.SZ")
    ap.add_argument("--days", type=int, default=320)
    ap.add_argument("--synthetic", action="store_true")
    ap.add_argument("--out", default="",
                    help="产物路径(默认 docs/samples/backtest-recalib-v7.11.0.json); "
                         "测试用临时路径, 避免覆盖归档样例")
    args = ap.parse_args()

    symbols = [s.strip() for s in args.symbols.split(",") if s.strip()]
    panel, source = _panel(symbols, args.days, args.synthetic)
    holdings, returns = _matrices(panel, symbols)

    from vector_backtest import vector_backtest

    fixed = vector_backtest(holdings, returns)
    # 旧口径等价复现: 引擎取 w[t-1] → 传入 shift(-1) 后取到原 w[t]
    legacy_w = holdings.shift(-1).fillna(0.0)
    legacy = vector_backtest(legacy_w, returns)

    rows = []
    for key in ("total_return", "annual_return", "sharpe_ratio",
                "max_drawdown", "volatility", "win_rate"):
        a = _metrics(legacy).get(key)
        b = _metrics(fixed).get(key)
        delta = None if (a is None or b is None) else round(b - a, 4)
        rows.append({"metric": key, "legacy_same_day_weight": a,
                     "fixed_t_minus_1": b, "delta": delta})

    # 库内归档结论清点: 决定"是否需要覆盖旧数字"
    archived = None
    try:
        import db
        conn = db.get_conn()
        try:
            archived = conn.execute("SELECT COUNT(*) AS n FROM research_experiments").fetchone()["n"]
        finally:
            conn.close()
    except Exception as exc:
        print("[recalib] 归档清点跳过: %s" % exc)

    out = {
        "generated_at": date.today().isoformat(),
        "engine": "vector (numpy)",
        "data_source": source,
        "symbols": symbols,
        "days": args.days,
        "weights_rule": "5 日动量 top2 等权, 每 5 交易日调仓",
        "comparison": rows,
        "archived_experiments": archived,
        "note": ("差异来源于前视: 旧口径用当日权重乘当日收益, 相当于提前知道当日仓位. "
                 "幅度取决于标的收益自相关, 单日调仓越频繁、自相关越强, 差异越大; "
                 "本表是样例矩阵实测, 不等于任一具体策略的历史误差."),
    }

    print("=" * 68)
    print("回测口径对比  数据来源=%s  标的=%s  天数=%d" % (source, ",".join(symbols), args.days))
    print("=" * 68)
    print("%-16s %18s %18s %12s" % ("指标", "旧口径(当日权重)", "修正(t-1 权重)", "差值"))
    for r in rows:
        print("%-16s %18s %18s %12s" % (r["metric"], r["legacy_same_day_weight"],
                                        r["fixed_t_minus_1"], r["delta"]))
    print("-" * 68)
    print("库内归档结论(research_experiments): %s 条" % archived)
    if archived == 0:
        print("结论: 无历史数字需要作废/覆盖; 口径分界日 = %s, 此后新回测一律新口径." % out["generated_at"])
    else:
        print("结论: 存在 %s 条归档结论, 需按新口径重跑并覆盖(见文档流程)." % archived)

    out_dir = os.path.join(BASE, "docs", "samples")
    path = args.out or os.path.join(out_dir, "backtest-recalib-v7.11.0.json")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print("[written] %s" % path)


if __name__ == "__main__":
    main()
