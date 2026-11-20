#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""B1 形态特征抽取 (v7.6 FR-7.6-1) — 移植 KHunter pattern_feature_extractor

改造点:
- 数据入口为 T1 OHLCV DataFrame(DataPortal), 不依赖高积分 Tushare 字段。
- 修正上游缺陷: KHunter 先截 25 日再算 MA114 导致多空线全 NaN; 本实现用全量预热指标,
  只在最近 lookback_days 窗口上汇总形态特征。
- 枚举标签英文化(low/mid/high, up/down/range), 与产品 i18n 解耦。
"""
from typing import Dict, List

import numpy as np
import pandas as pd

DIMENSIONS = ("trend_structure", "kdj_state", "volume_pattern", "price_shape")
DEFAULT_LOOKBACK = 25
_EMA_FAST = 10
_MA_PERIODS = (14, 28, 57, 114)
_MIN_WARMUP = max(_MA_PERIODS) + 1


def _empty_features() -> Dict:
    return {dim: {} for dim in DIMENSIONS}


def _ascending(df: pd.DataFrame) -> pd.DataFrame:
    """统一正序(最旧在前); 无 date 列时假定调用方已正序"""
    out = df.copy()
    if "date" in out.columns:
        out["date"] = out["date"].astype(str).str.slice(0, 10)
        return out.sort_values("date").reset_index(drop=True)
    return out.reset_index(drop=True)


def _zhixing_trend(close: pd.Series) -> pd.DataFrame:
    """知行趋势线: short=EMA(EMA(C,10),10); bullbear=均值(MA14/28/57/114)"""
    short = close.ewm(span=_EMA_FAST, adjust=False).mean()
    short = short.ewm(span=_EMA_FAST, adjust=False).mean()
    bullbear = sum(close.rolling(n).mean() for n in _MA_PERIODS) / len(_MA_PERIODS)
    return pd.DataFrame({"short": short, "bullbear": bullbear})


def _kdj(df: pd.DataFrame, n: int = 9, m1: int = 3, m2: int = 3) -> pd.DataFrame:
    """标准 KDJ: RSV→SMA(RSV,m1,1)→SMA(K,m2,1)→J=3K-2D"""
    low_n = df["low"].rolling(n).min()
    high_n = df["high"].rolling(n).max()
    denom = (high_n - low_n).replace(0, np.nan)
    rsv = (df["close"] - low_n) / denom * 100.0
    rsv = rsv.fillna(50.0)
    k = rsv.ewm(alpha=1.0 / m1, adjust=False).mean()
    d = k.ewm(alpha=1.0 / m2, adjust=False).mean()
    j = 3.0 * k - 2.0 * d
    return pd.DataFrame({"K": k, "D": d, "J": j})


def _volume_trend(volumes: np.ndarray) -> str:
    if len(volumes) < 6:
        return "stable"
    head = float(np.mean(volumes[: len(volumes) // 2]))
    tail = float(np.mean(volumes[len(volumes) // 2:]))
    if head <= 0:
        return "stable"
    ratio = tail / head
    if ratio > 1.2:
        return "expand"
    if ratio < 0.8:
        return "shrink"
    return "stable"


def _shrink_then_expand(volumes: np.ndarray) -> bool:
    if len(volumes) < 10:
        return False
    first = float(np.mean(volumes[: len(volumes) // 2]))
    last = float(np.mean(volumes[-3:]))
    return first > 0 and last > first * 1.3


class PatternFeatureExtractor:
    """从 T1 OHLCV 正序面板提取四维形态特征"""

    def __init__(self, lookback_days: int = DEFAULT_LOOKBACK):
        self.lookback_days = max(10, int(lookback_days))

    def extract(self, df: pd.DataFrame, lookback_days: int = None) -> Dict:
        """输入至少 _MIN_WARMUP 根 K 线; 数据不足返回空四维(诚实, 不造特征)"""
        if df is None or len(df) < _MIN_WARMUP or not {"open", "high", "low", "close", "volume"}.issubset(df.columns):
            return _empty_features()
        full = _ascending(df)
        trend = _zhixing_trend(full["close"])
        kdj = _kdj(full)
        full["short"] = trend["short"]
        full["bullbear"] = trend["bullbear"]
        full["K"] = kdj["K"]
        full["D"] = kdj["D"]
        full["J"] = kdj["J"]
        window = full.tail(lookback_days or self.lookback_days).reset_index(drop=True)
        return {
            "trend_structure": self._trend(window),
            "kdj_state": self._kdj_state(window),
            "volume_pattern": self._volume(window),
            "price_shape": self._shape(window),
        }

    @staticmethod
    def _trend(w: pd.DataFrame) -> Dict:
        last = w.iloc[-1]
        short, bull = float(last["short"]), float(last["bullbear"])
        ratio = short / bull if bull else 1.0
        short_prev = float(w["short"].iloc[-5])
        bull_prev = float(w["bullbear"].iloc[-5])
        short_slope = (short / short_prev - 1) * 100 if short_prev else 0.0
        bull_slope = (bull / bull_prev - 1) * 100 if bull_prev else 0.0
        price = float(last["close"])
        avg = (short + bull) / 2
        return {
            "short_vs_bullbear": round(ratio, 4),
            "short_slope": round(short_slope, 4),
            "bullbear_slope": round(bull_slope, 4),
            "price_vs_short_pct": round((price - short) / short * 100, 4) if short else 0.0,
            "price_vs_bullbear_pct": round((price - bull) / bull * 100, 4) if bull else 0.0,
            "is_in_bowl": bool(short > price > bull),
            "trend_spread_pct": round((short - bull) / bull * 100, 4) if bull else 0.0,
            "price_bias_pct": round((price - avg) / avg * 100, 4) if avg else 0.0,
        }

    @staticmethod
    def _kdj_state(w: pd.DataFrame) -> Dict:
        j_vals = w["J"].to_numpy(dtype=float)
        latest = w.iloc[-1]
        prev = w.iloc[-2]
        j = float(latest["J"])
        j_pos = "low" if j <= 20 else "high" if j >= 80 else "mid"
        k_cross = bool(prev["K"] < prev["D"] and latest["K"] > latest["D"])
        trend = float(np.polyfit(np.arange(5), j_vals[-5:], 1)[0]) if len(j_vals) >= 5 else 0.0
        rebound = bool(len(j_vals) >= 3 and j_vals[-1] > j_vals[-3])
        return {
            "j_value": round(j, 2),
            "j_trend": round(trend, 4),
            "j_min_lookback": round(float(np.nanmin(j_vals)), 2),
            "k_cross_d": k_cross,
            "j_position": j_pos,
            "j_rebound": rebound,
        }

    @staticmethod
    def _volume(w: pd.DataFrame) -> Dict:
        vols = w["volume"].to_numpy(dtype=float)
        recent = float(np.mean(vols[-10:]))
        before = float(np.mean(vols[-20:-10])) if len(vols) >= 20 else recent
        avg_ratio = recent / before if before > 0 else 1.0
        ratios = [vols[i] / vols[i - 1] for i in range(1, min(len(vols), 20)) if vols[i - 1] > 0]
        key_candles = sum(
            1 for i in range(1, len(w))
            if w["volume"].iloc[i] > w["volume"].iloc[i - 1] * 2
            and w["close"].iloc[i] > w["open"].iloc[i]
        )
        return {
            "avg_volume_ratio": round(avg_ratio, 2),
            "max_volume_ratio": round(max(ratios) if ratios else 1.0, 2),
            "volume_trend": _volume_trend(vols),
            "key_candles_count": int(key_candles),
            "shrink_then_expand": _shrink_then_expand(vols),
        }

    @staticmethod
    def _shape(w: pd.DataFrame) -> Dict:
        closes = w["close"].to_numpy(dtype=float)
        low, high = float(closes.min()), float(closes.max())
        curve: List[float] = ((closes - low) / (high - low)).tolist() if high > low else [0.0] * len(closes)
        peak = np.maximum.accumulate(closes)
        drawdown = (peak - closes) / np.where(peak > 0, peak, np.nan)
        rets = np.diff(closes) / closes[:-1]
        last = float(closes[-1])
        first = float(closes[0])
        overall = "up" if last > first * 1.05 else "down" if last < first * 0.95 else "range"
        return {
            "consolidation_days": int(max(0, len(w) - int(np.sum(np.abs(rets) > 0.02)))),
            "max_drawdown": round(float(np.nanmax(drawdown) * 100), 2),
            "breakout_strength": round((last / float(closes[-2]) - 1) * 100, 2),
            "normalized_curve": [round(float(x), 6) for x in curve],
            "volatility": round(float(np.std(rets) * 100), 4),
            "overall_trend": overall,
        }
