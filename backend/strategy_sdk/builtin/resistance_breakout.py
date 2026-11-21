#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
阻力位突破形态选股策略 (v7.4 FR-7.4-1 / v7.12 补齐, 移植自 KHunter resistance_breakout.py)
形态: 前 N 日窄幅平台(振幅<=阈值) + 平台高点"陈旧"(距今 >= min_peak_days)
     + 今日放量长阳 100% 突破平台高点(突破日即选股日)。
数据: 仅 T1 OHLCV; 持有期 hold_days 参数化。
"""
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import (descending_dates_from_panel,
                                                 expand_holding_window,
                                                 panel_to_desc_df,
                                                 pct_change_desc,
                                                 rolling_stat_desc)


def _resistance_breakout_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序, iloc0=最新=突破日)是否命中阻力位突破。"""
    lookback = int(p["lookback_days"])
    vol_period = int(p["volume_ma_period"])
    if df is None or len(df) < max(lookback + 2, vol_period + 2):
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    close = pd.to_numeric(d["close"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    if close.isna().any() or vol.isna().any():
        return False

    c0 = float(close.iloc[0])
    v0 = float(vol.iloc[0])
    if c0 <= 0 or v0 <= 0:
        return False

    # 平台窗口 = 今日之前 lookback 日(不含今日)
    win = d.iloc[1:lookback + 1]
    if len(win) < lookback:
        return False
    win_high = float(pd.to_numeric(win["high"], errors="coerce").max())
    win_low = float(pd.to_numeric(win["low"], errors="coerce").min())
    if win_high <= 0 or win_low <= 0 or pd.isna(win_high) or pd.isna(win_low):
        return False

    # C0 平台最高点必须"陈旧": 距今 >= min_peak_days 个交易日
    peak_min_days = int(p["min_peak_days"])
    highs = pd.to_numeric(win["high"], errors="coerce").reset_index(drop=True)
    peak_pos_in_win = int(highs.idxmax())        # 0 = 平台最旧
    days_since_peak = len(win) - peak_pos_in_win  # 距今日的交易日数(今日=0)
    if peak_min_days > 0 and days_since_peak < peak_min_days:
        return False

    # C1 平台振幅
    max_range = float(p["max_range_pct"])
    range_pct = (win_high - win_low) / win_low * 100
    if max_range > 0 and range_pct > max_range:
        return False

    # C2 突破
    if c0 < win_high * (1 + float(p["breakout_ratio"])):
        return False

    # C3 今日涨幅
    chg = pct_change_desc(close).iloc[0]
    if pd.isna(chg) or float(chg) * 100 <= float(p["min_change_pct"]) * 100:
        return False

    # C4 放量
    vol_window = pd.to_numeric(d["volume"].iloc[1:vol_period + 1], errors="coerce")
    if len(vol_window) < vol_period:
        return False
    vol_ma = float(vol_window.mean())
    if vol_ma <= 0 or pd.isna(vol_ma):
        return False
    if v0 / vol_ma < float(p["volume_ratio"]):
        return False

    # C5 均线多头排列(可选)
    if bool(p["enable_ma_bullish"]):
        ma_s = float(rolling_stat_desc(close, int(p["ma_short_period"]), "mean").iloc[0])
        ma_m = float(rolling_stat_desc(close, int(p["ma_mid_period"]), "mean").iloc[0])
        ma_l = float(rolling_stat_desc(close, int(p["ma_long_period"]), "mean").iloc[0])
        if any(pd.isna(x) for x in (ma_s, ma_m, ma_l)):
            return False
        if not (ma_s > ma_m > ma_l):
            return False
    return True


class ResistanceBreakoutStrategy(BaseStrategy):
    id = "resistance_breakout"
    name = "阻力位突破"
    version = "0.1.0"
    description = "前N日窄幅平台+平台高点陈旧+今日放量长阳突破平台高点, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="lookback_days", label="平台回溯交易日", type="int", default=70, min=20, max=180, step=5),
        ParamSpec(key="min_peak_days", label="平台高点最小陈旧度(交易日)", type="int", default=10, min=0, max=60, step=1),
        ParamSpec(key="max_range_pct", label="平台振幅上限(%)", type="float", default=25.0, min=5.0, max=60.0, step=1.0),
        ParamSpec(key="breakout_ratio", label="突破阈值(-0.02=允许98%)", type="float", default=0.0, min=-0.1, max=0.05, step=0.01),
        ParamSpec(key="min_change_pct", label="突破日最小涨幅", type="float", default=0.05, min=0.01, max=0.2, step=0.005),
        ParamSpec(key="volume_ratio", label="突破日量比下限", type="float", default=1.8, min=1.0, max=6.0, step=0.1),
        ParamSpec(key="volume_ma_period", label="量能基准窗口", type="int", default=5, min=3, max=20, step=1),
        ParamSpec(key="enable_ma_bullish", label="要求均线多头排列", type="bool", default=False),
        ParamSpec(key="ma_short_period", label="短期均线", type="int", default=5, min=3, max=20, step=1),
        ParamSpec(key="ma_mid_period", label="中期均线", type="int", default=10, min=5, max=40, step=1),
        ParamSpec(key="ma_long_period", label="长期均线", type="int", default=20, min=10, max=120, step=5),
        ParamSpec(key="hold_days", label="持有交易日", type="int", default=3, min=1, max=20, step=1),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        ctx.params = self.validate_params(ctx.params)
        panel = ctx.panel(self.fields, start=_start(ctx.as_of, 400))
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
            if _resistance_breakout_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
