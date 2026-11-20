#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""VaR 风控与风险预算 (v7.8 FR-7.8-4)

三口径 VaR(默认置信度 0.99):
- 历史模拟: 直接取收益分位(复用 risk.var_historical 的"正值表示损失"口径)
- EWMA 参数法: 波动率按 RiskMetrics λ=0.94 指数加权, 再乘正态分位
- 混合法(BRW): 历史样本按时间衰减加权后的加权分位, 兼顾厚尾与近期敏感性

风险等级 → 仓位上限/止损幅度; 叠加"连续降温"守卫(市场温度连续下滑时强制降杠杆)。
上游对应: KHunter 的温度仓位映射(_get_temp_constraints)与连续温度风控。
差异: 上游阈值散落在 generator 里且只认温度, 这里把"温度降温"与"波动率 VaR"两路统一成
一个风险预算出口(suggested_exposure 取两者更严者), 供执行计划直接消费。
"""
import math
from typing import Dict, List, Optional

import risk

VAR_LEVEL = 0.99
EWMA_LAMBDA = 0.94
HYBRID_DECAY = 0.99

# 日 VaR(99%) → 风险等级/仓位上限/止损幅度
GRADE_TABLE = (
    (0.020, "极低", 1.00, 0.05),
    (0.035, "低", 0.80, 0.05),
    (0.050, "中", 0.60, 0.04),
    (0.080, "高", 0.40, 0.03),
    (float("inf"), "极高", 0.20, 0.02),
)

COOLING_DAYS = 3
COOLING_MIN_DROP = 15.0
COOLING_STEP = 5.0


def _clean(returns) -> List[float]:
    out = []
    for r in returns or []:
        try:
            v = float(r)
        except (TypeError, ValueError):
            continue
        if math.isfinite(v):
            out.append(v)
    return out


def ewma_sigma(returns, lam: float = EWMA_LAMBDA) -> float:
    """EWMA 日波动率: σ²_t = λσ²_{t-1} + (1-λ)r²_t, 初始取首值平方"""
    rets = _clean(returns)
    if len(rets) < 2:
        return 0.0
    var = rets[0] ** 2
    for r in rets[1:]:
        var = lam * var + (1.0 - lam) * r * r
    return math.sqrt(max(var, 0.0))


def var_ewma(returns, level: float = VAR_LEVEL, lam: float = EWMA_LAMBDA) -> float:
    """EWMA 参数法 VaR(正值表示损失)"""
    sigma = ewma_sigma(returns, lam)
    if sigma <= 0:
        return 0.0
    return max(risk._norm_z(level) * sigma, 0.0)


def var_hybrid(returns, level: float = VAR_LEVEL, decay: float = HYBRID_DECAY) -> float:
    """混合法 VaR: 时间衰减加权分位(近期样本权重更高)"""
    rets = _clean(returns)
    if not rets:
        return 0.0
    n = len(rets)
    weights = [decay ** (n - 1 - i) for i in range(n)]
    total = sum(weights)
    pairs = sorted(zip(rets, weights), key=lambda p: p[0])
    target = 1.0 - level
    cum = 0.0
    for value, weight in pairs:
        cum += weight / total
        if cum >= target:
            return max(-value, 0.0)
    return max(-pairs[-1][0], 0.0)


def risk_grade(var_pct: Optional[float]) -> Dict:
    """日 VaR → 风险等级 + 仓位上限 + 止损幅度; 缺失返回 unknown(不给建议上限)"""
    if var_pct is None or not math.isfinite(float(var_pct)):
        return {"grade": "unknown", "var_pct": None, "position_cap": 1.0,
                "stop_loss_pct": 0.05, "note": "样本不足, 按默认上限执行"}
    v = abs(float(var_pct))
    for threshold, grade, cap, stop in GRADE_TABLE:
        if v <= threshold:
            return {"grade": grade, "var_pct": round(v, 4), "position_cap": cap,
                    "stop_loss_pct": stop,
                    "note": f"日 VaR {v:.2%} → 仓位上限 {cap:.0%}, 止损 {stop:.0%}"}
    return {"grade": "极高", "var_pct": round(v, 4), "position_cap": 0.2,
            "stop_loss_pct": 0.02, "note": "极端波动, 建议空仓观察"}


def cooling_guard(temps, days: int = COOLING_DAYS, min_drop: float = COOLING_MIN_DROP,
                  step: float = COOLING_STEP) -> Dict:
    """连续降温守卫: 最近 days 个交易日温度逐日下滑且累计降幅达标 → 降低暴露"""
    series = _clean(temps)
    if len(series) < days + 1:
        return {"cooling": False, "days": 0, "total_drop": 0.0, "exposure": 1.0,
                "note": "温度样本不足, 不触发降温守卫"}
    tail = series[-(days + 1):]
    drops = [tail[i - 1] - tail[i] for i in range(1, len(tail))]
    total = sum(drops)
    cooling = all(d >= step for d in drops) and total >= min_drop
    exposure = 0.5 if cooling else 1.0
    note = (f"连续 {days} 日降温, 累计 -{total:.0f}° → 暴露降至 {exposure:.0%}"
            if cooling else "温度未连续降温, 守卫不触发")
    return {"cooling": cooling, "days": days if cooling else 0,
            "total_drop": round(total, 2), "exposure": exposure, "note": note}


def risk_budget(returns=None, equity=None, level: float = VAR_LEVEL,
                temps=None) -> Dict:
    """风险预算出口: 三口径 VaR + 等级 + 降温守卫 → 建议暴露(取更严者)

    Args:
        returns: 日收益序列(与 equity 二选一, equity 优先换算)
        equity: 净值序列
        level: VaR 置信度, 默认 0.99
        temps: 近期市场温度序列(升序), 用于降温守卫
    """
    series = _clean(risk._equity_to_returns(equity)) if equity else _clean(returns)
    sample = len(series)
    if sample < 20:
        metrics = {"var_historical": None, "var_ewma": None, "var_hybrid": None,
                   "var_parametric": None, "cvar": None}
        grade = risk_grade(None)
    else:
        metrics = {
            "var_historical": round(risk.var_historical(series, level), 4),
            "var_ewma": round(var_ewma(series, level), 4),
            "var_hybrid": round(var_hybrid(series, level), 4),
            "var_parametric": round(risk.var_parametric(series, level), 4),
            "cvar": round(risk.cvar_of(series, level), 4),
        }
        grade = risk_grade(metrics["var_hybrid"])
    cooling = cooling_guard(temps)
    suggested = round(min(grade["position_cap"], cooling["exposure"]), 4)
    return {
        "level": level,
        "sample_size": sample,
        "metrics": metrics,
        "grade": grade,
        "cooling": cooling,
        "suggested_exposure": suggested,
        "vol_annual": round(risk.volatility_annual(series), 4) if sample >= 2 else 0.0,
        "max_drawdown": round(risk.max_drawdown_of(equity), 4) if equity else None,
    }
