#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""派生指标计算工具 (v7.12 / FR-7.7-3 指标回填与 ADX 自检的公共实现)

为什么单独成模块:
- `timing.market_state.adx_tier` 用的是"简单滚动均值"近似 ADX(够快, 但非 Wilder 原式);
- 指标回填与 ADX 自检都需要一个**独立实现**做对拍, 否则"用同一段代码验证自己"没有意义。
- 这里统一提供 Wilder 原式 ADX/ATR 与 SMA, 供 scripts/ 下的工具链与测试复用,
  生产链路(timing)不动, 避免为了自检去改线上口径。
"""
from typing import List, Optional, Sequence

import numpy as np
import pandas as pd


def sma(values: Sequence[float], window: int) -> pd.Series:
    """简单移动平均(前 window-1 个为 NaN, 不填充)"""
    s = pd.Series(list(values), dtype="float64")
    return s.rolling(int(window), min_periods=int(window)).mean()


def true_range(high: Sequence[float], low: Sequence[float], close: Sequence[float]) -> pd.Series:
    """真实波幅 TR = max(H-L, |H-C_prev|, |L-C_prev|)"""
    h = pd.Series(list(high), dtype="float64")
    lo = pd.Series(list(low), dtype="float64")
    c = pd.Series(list(close), dtype="float64")
    prev = c.shift(1)
    return pd.concat([h - lo, (h - prev).abs(), (lo - prev).abs()], axis=1).max(axis=1)


def wilder_smooth(series: pd.Series, period: int) -> pd.Series:
    """Wilder 平滑(等价于 alpha=1/period 的 EMA, 首值取前 period 个均值)"""
    s = pd.Series(series, dtype="float64").reset_index(drop=True)
    out = pd.Series(np.nan, index=s.index, dtype="float64")
    if len(s) < period:
        return out
    first = s.iloc[:period].mean()
    if pd.isna(first):
        return out
    out.iloc[period - 1] = first
    prev = first
    for i in range(period, len(s)):
        cur = s.iloc[i]
        if pd.isna(cur):
            out.iloc[i] = prev
            continue
        prev = (prev * (period - 1) + cur) / period
        out.iloc[i] = prev
    return out


def atr(high: Sequence[float], low: Sequence[float], close: Sequence[float],
        period: int = 14) -> pd.Series:
    """Wilder ATR"""
    return wilder_smooth(true_range(high, low, close), period)


def wilder_adx(high: Sequence[float], low: Sequence[float], close: Sequence[float],
               period: int = 14) -> Optional[float]:
    """Wilder 原式 ADX 末值; 数据不足返回 None。

    步骤: +DM/-DM(Wilder 平滑) → +DI/-DI → DX → ADX(Wilder 平滑)
    """
    period = int(period)
    h = pd.Series(list(high), dtype="float64").reset_index(drop=True)
    lo = pd.Series(list(low), dtype="float64").reset_index(drop=True)
    c = pd.Series(list(close), dtype="float64").reset_index(drop=True)
    if len(h) < period * 2 or h.isna().any() or lo.isna().any():
        return None

    up = h.diff()
    down = -lo.diff()
    plus_dm = pd.Series(np.where((up > down) & (up > 0), up, 0.0), dtype="float64")
    minus_dm = pd.Series(np.where((down > up) & (down > 0), down, 0.0), dtype="float64")

    tr_s = wilder_smooth(true_range(h, lo, c), period)
    plus_s = wilder_smooth(plus_dm, period)
    minus_s = wilder_smooth(minus_dm, period)

    with np.errstate(divide="ignore", invalid="ignore"):
        plus_di = 100 * plus_s / tr_s.replace(0, np.nan)
        minus_di = 100 * minus_s / tr_s.replace(0, np.nan)
        dx = 100 * (plus_di - minus_di).abs() / (plus_di + minus_di).replace(0, np.nan)
    dx = dx.dropna()
    if len(dx) < period:
        return None
    adx_series = wilder_smooth(dx.reset_index(drop=True), period).dropna()
    if adx_series.empty:
        return None
    val = float(adx_series.iloc[-1])
    return None if pd.isna(val) else round(val, 2)


def adx_tier_of(adx_value: Optional[float]) -> str:
    """ADX 数值 → 档位(与 timing.market_state.adx_tier 的阈值口径一致)"""
    if adx_value is None:
        return "ranging"
    if adx_value >= 25:
        return "clear"
    if adx_value >= 20:
        return "emerging"
    return "ranging"


def indicator_frame(high: Sequence[float], low: Sequence[float], close: Sequence[float],
                    volume: Sequence[float] = None,
                    windows: Sequence[int] = (5, 10, 20, 60)) -> pd.DataFrame:
    """一次算出回填所需的全部派生指标(按行对齐, 前段为 NaN 不填充)"""
    close_s = pd.Series(list(close), dtype="float64")
    out = pd.DataFrame({"close": close_s})
    for w in windows:
        out[f"ma{int(w)}"] = sma(close_s, int(w))
    out["atr14"] = atr(high, low, close, 14)
    if volume is not None:
        vol_s = pd.Series(list(volume), dtype="float64")
        out["vol_ma5"] = sma(vol_s, 5)
        out["vol_ma10"] = sma(vol_s, 10)
    adx_val = wilder_adx(high, low, close, 14)
    out.attrs["adx14"] = adx_val
    out.attrs["adx_tier"] = adx_tier_of(adx_val)
    return out


def missing_dates(actual: Sequence[str], expected: Sequence[str]) -> List[str]:
    """期望交易日里缺失的日期(升序返回)"""
    have = {str(d)[:10] for d in actual or []}
    return sorted(str(d)[:10] for d in expected or [] if str(d)[:10] not in have)
