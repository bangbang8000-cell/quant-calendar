#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.3 T-5.0.31: 组合风险指标 (risk.py)

波动率(年化)/VaR(历史模拟+参数法双实现交叉核对)/CVaR/最大回撤/夏普/Sortino/Calmar/Beta。
- 独立纯函数: volatility_annual / max_drawdown_of / var_historical / var_parametric /
  cvar_of / beta_vs_benchmark
- compute_risk_metrics(returns, ...): 汇总指标字典 (收益/净值输入均可)
- 输入: 日收益序列; is_equity=True 时输入为累计净值序列 (自动转日收益)

测试: tests/test_risk_metrics.py (与独立计算对拍, TEST-PLAN 4.1)。
"""
import logging
import math

import numpy as np

logger = logging.getLogger(__name__)

ANNUAL_DAYS = 252
_Z = {0.95: 1.6448536269514722, 0.99: 2.3263478740408408}


def _norm_z(level):
    z = _Z.get(round(float(level), 2))
    if z is None:
        # 通用: 标准正态分位数近似 (Abramowitz-Stegun)
        p = float(level)
        a = [2.515517, 0.802853, 0.010328]
        b = [1.432788, 0.189269, 0.001308]
        t = math.sqrt(-2.0 * math.log(1.0 - p))
        x = t - (a[0] + a[1] * t + a[2] * t * t) / (1.0 + b[0] * t + b[1] * t * t + b[2] * t * t * t)
        return x
    return z


def volatility_annual(returns, annual_days=ANNUAL_DAYS):
    rets = [float(r) for r in (returns or []) if r is not None]
    if len(rets) < 2:
        return 0.0
    return float(np.std(rets, ddof=0) * math.sqrt(annual_days))


def max_drawdown_of(equity):
    """净值序列最大回撤 (负值, %): min(eq/cummax - 1)。"""
    eq = [float(e) for e in equity if e is not None]
    if not eq:
        return 0.0
    peak = eq[0]
    worst = 0.0
    for e in eq:
        peak = max(peak, e)
        if peak > 0:
            worst = min(worst, (e - peak) / peak)
    return float(worst)


def var_historical(returns, level=0.95):
    """VaR 历史模拟法: -收益序列 (1-level) 分位数 (正值表示损失)。"""
    rets = [float(r) for r in (returns or []) if r is not None]
    if not rets:
        return 0.0
    return -float(np.percentile(rets, (1.0 - level) * 100.0))


def var_parametric(returns, level=0.95):
    """VaR 参数法 (正态): -(mean - z*std), 正值表示损失。"""
    rets = [float(r) for r in (returns or []) if r is not None]
    if not rets:
        return 0.0
    mu = float(np.mean(rets))
    sd = float(np.std(rets, ddof=0))
    z = _norm_z(level)
    return -(mu - z * sd)


def cvar_of(returns, level=0.95):
    """CVaR/ES: 历史法 VaR 尾部均值 (正值表示损失)。"""
    rets = [float(r) for r in (returns or []) if r is not None]
    if not rets:
        return 0.0
    v = var_historical(rets, level)
    tail = [r for r in rets if r <= -v]
    if not tail:
        return v
    return -float(np.mean(tail))


def beta_vs_benchmark(strategy_returns, benchmark_returns):
    """Beta = cov(strat, bench)/var(bench) (对齐到共同长度)。"""
    s = [float(r) for r in (strategy_returns or []) if r is not None]
    b = [float(r) for r in (benchmark_returns or []) if r is not None]
    n = min(len(s), len(b))
    if n < 2:
        return None
    s, b = np.asarray(s[:n]), np.asarray(b[:n])
    var_b = float(b.var(ddof=0))
    if var_b < 1e-12:
        return None
    return float(np.cov(s, b)[0, 1] / var_b)


def _equity_to_returns(equity):
    rets = []
    prev = None
    for e in equity:
        if prev is not None and prev > 0:
            rets.append(float(e) / prev - 1.0)
        prev = float(e)
    return rets


def compute_risk_metrics(returns, annual_days=ANNUAL_DAYS, risk_free_rate=0.03,
                         var_level=0.95, benchmark_returns=None,
                         is_equity=False):
    """组合风险指标字典。

    输入 returns 为日收益序列 (is_equity=False) 或累计净值序列 (is_equity=True)。
    返回 {volatility, downside_volatility, annual_return, max_drawdown,
          var_historical, var_parametric, cvar, sharpe_ratio, sortino_ratio,
          calmar_ratio, beta, total_days} (波动/收益/回撤为 %, VaR 为损失 % 正数)。
    """
    if is_equity:
        rets = _equity_to_returns(returns or [])
        total_days = len(returns or [])
    else:
        rets = [float(r) for r in (returns or []) if r is not None]
        total_days = len(returns or [])
    n = len(rets)
    if n == 0:
        return {"volatility": 0.0, "downside_volatility": 0.0, "annual_return": 0.0,
                "max_drawdown": 0.0, "var_historical": 0.0, "var_parametric": 0.0,
                "cvar": 0.0, "sharpe_ratio": 0.0, "sortino_ratio": 0.0,
                "calmar_ratio": 0.0, "beta": None, "total_days": total_days}
    arr = np.asarray(rets)
    mu = float(arr.mean())
    sd = float(arr.std(ddof=0))
    vol = sd * math.sqrt(annual_days)
    # 年化收益 (复利): 净值^(252/n) - 1
    cum_eq = float(np.prod(1.0 + arr))
    annual_return = ((cum_eq ** (annual_days / n) - 1.0) * 100.0)
    max_dd = max_drawdown_of(np.concatenate([[1.0], np.cumprod(1.0 + arr)]))
    rf_daily = risk_free_rate / annual_days
    sharpe = ((mu - rf_daily) / sd * math.sqrt(annual_days)) if sd > 1e-12 else 0.0
    neg = arr[arr < 0]
    ds_sd = float(neg.std(ddof=0)) if len(neg) > 1 else 0.0
    downside_vol = ds_sd * math.sqrt(annual_days)
    sortino = ((mu - rf_daily) / ds_sd * math.sqrt(annual_days)) if ds_sd > 1e-12 else 0.0
    calmar = (annual_return / abs(max_dd * 100.0)) if abs(max_dd) > 1e-12 else None
    beta = beta_vs_benchmark(rets, benchmark_returns) if benchmark_returns is not None else None
    return {"volatility": float(vol * 100.0), "downside_volatility": float(downside_vol * 100.0),
            "annual_return": float(annual_return), "max_drawdown": float(max_dd * 100.0),
            "var_historical": float(var_historical(rets, var_level) * 100.0),
            "var_parametric": float(var_parametric(rets, var_level) * 100.0),
            "cvar": float(cvar_of(rets, var_level) * 100.0),
            "sharpe_ratio": float(sharpe), "sortino_ratio": float(sortino),
            "calmar_ratio": float(calmar) if calmar is not None else None,
            "beta": beta, "total_days": total_days}
# ─── V5.0.3 T-5.0.32: 仓位建议 (Kelly 修正 / 风险平价 / 波动率目标 / 上限约束) ───


def kelly_fraction(win_rate, odds):
    """Kelly 单笔仓位: f = (b*p - q)/b; 负值归 0 (不押负期望)。"""
    p = float(win_rate)
    b = float(odds)
    if b <= 0 or p <= 0 or p >= 1:
        return 0.0
    f = (b * p - (1.0 - p)) / b
    return max(0.0, f)


def half_kelly(win_rate, odds):
    """半 Kelly: 实盘常用 (满 Kelly 波动难以拿住, 估计误差放大下注)。"""
    return kelly_fraction(win_rate, odds) / 2.0


def quarter_kelly(win_rate, odds):
    return kelly_fraction(win_rate, odds) / 4.0


def vol_target_position(est_vol_annual, target_vol=0.12):
    """波动率目标仓位 = target/est, 上限 1.0 (无杠杆); 仓位随波动缩放。"""
    if est_vol_annual is None or float(est_vol_annual) <= 0:
        return 1.0
    return min(float(target_vol) / float(est_vol_annual), 1.0)


def risk_parity_weights(vols, max_position=1.0):
    """等风险贡献 (风险平价) 权重 ∝ 1/σ, 归一化, 单标的上限 max_position。"""
    vols = [float(v) for v in vols]
    inv = [1.0 / v if v > 1e-12 else 0.0 for v in vols]
    s = sum(inv)
    if s <= 1e-12:
        return [0.0] * len(vols)
    w = [x / s for x in inv]
    if max_position < 1.0:
        w = [min(x, max_position) for x in w]
    return w


def position_sizing(vols, target_vol=0.12, max_position=0.2, method="vol_target"):
    """组合仓位建议。

    vols: {名称: 年化波动}; method: vol_target|risk_parity|equal
    返回 {positions: {名称: 权重}, total, method, max_position}
    """
    names = list(vols.keys())
    if method == "risk_parity":
        w = risk_parity_weights([vols[k] for k in names], max_position=max_position)
        positions = dict(zip(names, [float(x) for x in w]))
    elif method == "equal":
        n = max(1, len(names))
        w = min(1.0 / n, max_position)
        positions = {k: float(w) for k in names}
    else:  # vol_target (应用单标的上限 max_position)
        positions = {k: float(min(vol_target_position(vols[k], target_vol), max_position)) for k in names}
    total = float(sum(positions.values()))
    return {"positions": positions, "total": total, "method": method,
            "max_position": max_position}


# ─── V5.1.3 T-5.1.33: 风险报告 (回撤区间标注 + 尾部风险) ───


def drawdown_period(equity):
    """最大回撤区间标注: 净值序列 → {start, end, depth} (None 无回撤)。

    从净值峰值跌至谷底的起始/结束索引与深度 (depth = (peak-valley)/peak)。
    """
    eq = [float(x) for x in equity if x is not None]
    if not eq:
        return None
    peak_idx, valley_idx = 0, 0
    peak = eq[0]
    max_depth = 0.0
    cur_valley, cur_valley_idx = eq[0], 0
    for i, v in enumerate(eq):
        if v > peak:
            peak = v
            peak_idx = i
            cur_valley, cur_valley_idx = v, i
        else:
            depth = (peak - v) / peak if peak > 0 else 0.0
            if depth > max_depth:
                max_depth = depth
                valley_idx = i
                cur_valley_idx = i
    if max_depth <= 0:
        return None
    return {'start': peak_idx, 'end': valley_idx,
            'depth': max_depth, 'peak': eq[peak_idx],
            'valley': eq[valley_idx]}  # 全精度; 展示层负责舍入 (数值纪律)


def tail_risk_summary(returns, var_level=0.95):
    """尾部风险专项: VaR95/CVaR + 说明 (损失 % 正数)。"""
    rets = [float(r) for r in (returns or []) if r is not None]
    if not rets:
        return {'var_95': 0.0, 'cvar': 0.0, 'note': '样本不足'}
    v = var_historical(rets, var_level) * 100.0
    c = cvar_of(rets, var_level) * 100.0
    return {
        'var_95': round(v, 2),
        'cvar': round(c, 2),
        'level': var_level,
        'note': '尾部风险: 95%% 置信度单日最大损失约 %.2f%%, 极端条件下平均损失约 %.2f%%'
                % (v, c),
    }


def risk_report(equity, is_equity=True, var_level=0.95,
                benchmark_returns=None):
    """综合风险报告: {metrics, drawdown_period, tail, summary}。

    equity 为净值序列 (is_equity=True) 或日收益序列 (is_equity=False)。
    """
    metrics = compute_risk_metrics(equity, is_equity=is_equity,
                                   var_level=var_level,
                                   benchmark_returns=benchmark_returns)
    dd = drawdown_period(equity) if is_equity else None
    if not is_equity:
        # 从收益构造净值反推回撤区间
        nav = 1.0
        eq = []
        for r in (equity or []):
            nav *= (1 + float(r))
            eq.append(nav)
        dd = drawdown_period(eq)
    tail = tail_risk_summary(
        _equity_to_returns(equity) if is_equity else equity, var_level)
    summary = ('最大回撤 %.2f%% (区间 第%d日→第%d日), VaR95 %.2f%%, Calmar %s'
               % (metrics.get('max_drawdown', 0.0),
                  (dd['start'] + 1) if dd else 0,
                  (dd['end'] + 1) if dd else 0,
                  tail['var_95'],
                  ('%.2f' % metrics['calmar_ratio'])
                  if metrics.get('calmar_ratio') is not None else '—'))
    return {
        'metrics': metrics,
        'drawdown_period': dd,
        'tail': tail,
        'summary': summary,
    }

