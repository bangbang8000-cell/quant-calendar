#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""择时 Overlay (v7.5 FR-7.5-1/2)

择时输出仓位系数(0~1)注入持仓矩阵, 共用单一回测引擎, 不新增执行引擎。
- buy/add → 1.0 (放行满仓)
- reduce → 0.5 (半仓)
- sell → 0.0 (空仓)
- hold → 1.0 (无信号不改原决策)
"""
import pandas as pd

from timing.base import TimingSignal

_EXPOSURE = {"buy": 1.0, "add": 1.0, "reduce": 0.5, "sell": 0.0, "hold": 1.0}


def action_to_exposure(action: str, strength: float = 0.0) -> float:
    base = _EXPOSURE.get(action, 1.0)
    # reduce 可按强度进一步下调(0.5→0.25), 其余保持档位
    if action == "reduce":
        return round(base * (1.0 - 0.5 * min(max(strength, 0.0), 1.0)), 4)
    return base


def signal_to_exposure(sig: TimingSignal) -> float:
    """优先用策略声明的 target_exposure, 否则按 action 映射"""
    if sig is None:
        return 1.0
    if sig.action == "hold":
        return 1.0
    return sig.target_exposure if sig.target_exposure is not None else action_to_exposure(sig.action, sig.strength)


def apply_timing_overlay(holdings: pd.DataFrame, exposure: float) -> pd.DataFrame:
    """把仓位系数乘到持仓矩阵的权重上(值>0的cell缩放; 二值化前保留比例供PTrade导出)"""
    if holdings is None or holdings.empty:
        return holdings
    out = holdings.copy()
    return out * float(exposure)


def build_exposure_series(points, dates, default=1.0):
    """买卖点序列 → 逐日仓位系数 (信号次日生效, 与回测 T-1 口径一致)"""
    by_date = {str(p["date"]): float(p["exposure"]) for p in points}
    series = pd.Series(float(default), index=[str(d) for d in dates], dtype=float)
    for i in range(len(series) - 1):
        value = by_date.get(str(series.index[i]))
        if value is not None:
            series.iloc[i + 1] = value
    return series


def apply_exposure_series(holdings, exposure):
    """按日期对齐把仓位系数乘到持仓矩阵 (兼容 YYYY-MM-DD / YYYYMMDD)"""
    if holdings is None or holdings.empty:
        return holdings
    out = holdings.copy()
    lookup = {str(d).replace("-", "")[:8]: float(v) for d, v in exposure.items()}
    for d in out.index:
        key = str(d).replace("-", "")[:8]
        if key in lookup:
            out.loc[d] = out.loc[d] * lookup[key]
    return out
