#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
仙人指路形态选股策略 (v7.4 FR-7.4-1 / v7.12 补齐, 移植自 KHunter immortal_guidance_strategy.py)
形态: T 日冲高(>=8%)留长上影(上影/最高>=4%)+放量+均线多头 → T+1~T+3 反包
     (今日收盘收复 T 日上影线 50% 位置)且站上 MA5, 期间不得提前反包。
数据: 仅 T1 OHLCV; 持有期 hold_days 参数化。
"""
from typing import List

import numpy as np
import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import (descending_dates_from_panel,
                                                 expand_holding_window,
                                                 panel_to_desc_df,
                                                 rolling_stat_desc)


def _trend_metrics(df_desc: pd.DataFrame, lookback: int):
    """倒序 df 的最近 lookback 日收盘线性回归: (slope, r_squared)"""
    if len(df_desc) < lookback or lookback < 2:
        return 0.0, 0.0
    window = df_desc.iloc[:lookback].iloc[::-1].reset_index(drop=True)
    y = pd.to_numeric(window["close"], errors="coerce").values.astype(float)
    if np.isnan(y).any():
        return 0.0, 0.0
    x = np.arange(len(y), dtype=float)
    x_mean, y_mean = x.mean(), y.mean()
    denom = float(((x - x_mean) ** 2).sum())
    if denom == 0:
        return 0.0, 0.0
    slope = float(((x - x_mean) * (y - y_mean)).sum() / denom)
    y_pred = y_mean + slope * (x - x_mean)
    ss_res = float(((y - y_pred) ** 2).sum())
    ss_tot = float(((y - y_mean) ** 2).sum())
    if ss_tot == 0:
        return 0.0, 0.0
    return slope, max(0.0, 1.0 - ss_res / ss_tot)


def _immortal_guidance_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序, iloc0=最新=反包确认日)是否命中仙人指路。"""
    need = max(int(p["trend_lookback_days"]) + 2, 30)
    if df is None or len(df) < need:
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    opn = pd.to_numeric(d["open"], errors="coerce")
    high = pd.to_numeric(d["high"], errors="coerce")
    close = pd.to_numeric(d["close"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    if opn.isna().any() or high.isna().any() or close.isna().any() or vol.isna().any():
        return False

    ma5 = rolling_stat_desc(close, 5, "mean")
    ma10 = rolling_stat_desc(close, 10, "mean")
    ma20 = rolling_stat_desc(close, 20, "mean")
    # T 日量比基准 = 该日之前 5 日均量(不含当日)
    vol_ma5_prev = rolling_stat_desc(vol, 5, "mean").shift(1)

    today_close = float(close.iloc[0])
    today_vol = float(vol.iloc[0])
    if today_vol <= 0 or pd.isna(today_close):
        return False
    if pd.isna(ma5.iloc[0]) or today_close < float(ma5.iloc[0]):
        return False

    slope, r2 = _trend_metrics(d, int(p["trend_lookback_days"]))
    if not (slope > 0 and r2 >= float(p["trend_r_squared_threshold"])):
        return False

    lookback = min(int(p["lookback_days"]), len(d) - 2, 3)
    for offset in range(1, lookback + 1):
        prev_close = float(close.iloc[offset + 1])
        if prev_close <= 0 or pd.isna(prev_close):
            continue
        s_high = float(high.iloc[offset])
        s_open = float(opn.iloc[offset])
        s_close = float(close.iloc[offset])
        if s_high <= 0:
            continue

        # 冲高幅度
        if (s_high - prev_close) / prev_close < float(p["surge_threshold"]):
            continue
        # 长上影
        upper_shadow = max(0.0, s_high - s_close) if s_close > s_open else max(0.0, s_high - s_open)
        if upper_shadow / s_high < float(p["upper_shadow_ratio"]):
            continue
        # 放量
        vm = vol_ma5_prev.iloc[offset]
        if pd.isna(vm) or float(vm) <= 0:
            continue
        if float(vol.iloc[offset]) / float(vm) < float(p["volume_ratio_min"]):
            continue
        # 均线多头
        s_ma5, s_ma10, s_ma20 = ma5.iloc[offset], ma10.iloc[offset], ma20.iloc[offset]
        if any(pd.isna(x) for x in (s_ma5, s_ma10, s_ma20)):
            continue
        if not (float(s_ma5) > float(s_ma10) > float(s_ma20) > 0):
            continue

        # 上影线 50% 位置(反包目标)
        target = (s_close + s_high) / 2 if s_close > s_open else (s_open + s_high) / 2

        # 期间不得提前反包(否则不是"回踩后再反包")
        early = False
        for check_idx in range(1, offset):
            if float(close.iloc[check_idx]) >= target:
                early = True
                break
        if early:
            continue

        if today_close >= target:
            return True

    return False


class ImmortalGuidanceStrategy(BaseStrategy):
    id = "immortal_guidance"
    name = "仙人指路"
    version = "0.1.0"
    description = "冲高留长上影+放量+均线多头, T+1~T+3 反包上影50%位置并站上MA5, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="surge_threshold", label="冲高幅度下限", type="float", default=0.08, min=0.02, max=0.2, step=0.005),
        ParamSpec(key="upper_shadow_ratio", label="上影线占最高价下限", type="float", default=0.04, min=0.01, max=0.15, step=0.005),
        ParamSpec(key="volume_ratio_min", label="T日量比下限", type="float", default=1.5, min=0.8, max=5.0, step=0.1),
        ParamSpec(key="trend_lookback_days", label="趋势回归窗口", type="int", default=20, min=10, max=60, step=5),
        ParamSpec(key="trend_r_squared_threshold", label="趋势R²下限", type="float", default=0.5, min=0.0, max=1.0, step=0.05),
        ParamSpec(key="lookback_days", label="信号回溯交易日(<=3)", type="int", default=3, min=1, max=3, step=1),
        ParamSpec(key="hold_days", label="持有交易日", type="int", default=3, min=1, max=20, step=1),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        ctx.params = self.validate_params(ctx.params)
        panel = ctx.panel(self.fields, start=_start(ctx.as_of, 200))
        if panel is None or panel.empty:
            return pd.DataFrame()
        dates = descending_dates_from_panel(panel)
        symbols = panel.index.get_level_values("symbol").unique().tolist() \
            if isinstance(panel.index, pd.MultiIndex) else []
        if not dates or not symbols:
            return pd.DataFrame()
        signals = {}
        for sym in symbols:
            df = panel_to_desc_df(panel, sym, self.fields)
            if _immortal_guidance_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
