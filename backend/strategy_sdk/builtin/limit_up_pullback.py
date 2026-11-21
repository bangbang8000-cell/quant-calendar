#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
涨停回马枪形态选股策略 (v7.4 FR-7.4-1 / v7.12 补齐, 移植自 KHunter limit_up_pullback_strategy.py)
形态: 近 N 日内出现放量涨停 → 涨停后 1~9 日缩量回调且不破涨停收盘价 95%
     → 选股日放量重回 5 日线。
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


def _limit_up_pullback_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序, iloc0=最新)是否命中涨停回马枪。"""
    need = max(int(p["limit_up_lookback_days"]) + 6, int(p["pullback_days_max"]) + 6, 12)
    if df is None or len(df) < need:
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    close = pd.to_numeric(d["close"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    if close.isna().any() or vol.isna().any():
        return False

    # 日涨跌幅(倒序: 相对下一行 = 前一交易日)
    chg = pct_change_desc(close)
    # 涨停确认: 放量(前 5 日均量倍数)
    vol_ma5 = rolling_stat_desc(vol, 5, "mean")
    lu_thr = float(p["limit_up_threshold"])
    lu_vol_thr = float(p["volume_ratio_threshold"])

    lookback = int(p["limit_up_lookback_days"])
    pb_min, pb_max = int(p["pullback_days_min"]), int(p["pullback_days_max"])
    support = float(p["support_ratio"])
    resist = float(p["resistance_ratio"])
    shrink = float(p["volume_shrinkage_ratio"])
    rng_min, rng_max = float(p["pullback_range_min"]), float(p["pullback_range_max"])

    today_close = float(close.iloc[0])
    prev_close = float(close.iloc[1]) if len(d) > 1 else 0.0
    today_vol = float(vol.iloc[0])
    prev_vol = float(vol.iloc[1]) if len(d) > 1 else 0.0
    if today_close <= 0 or prev_close <= 0 or today_vol <= 0 or prev_vol <= 0:
        return False

    # 选股日条件(先做便宜的判断)
    if (today_close - prev_close) / prev_close <= float(p["selection_day_rise_threshold"]):
        return False
    if today_vol / prev_vol < float(p["selection_day_volume_ratio"]):
        return False
    ma5_today = float(rolling_stat_desc(close, 5, "mean").iloc[0])
    if pd.isna(ma5_today) or today_close <= ma5_today:
        return False

    # 遍历回溯窗口内的涨停日
    for lu_idx in range(1, min(lookback, len(d) - 1) + 1):
        c = chg.iloc[lu_idx]
        vm = vol_ma5.iloc[lu_idx]
        if pd.isna(c) or pd.isna(vm) or vm <= 0:
            continue
        if c < lu_thr:
            continue
        if float(vol.iloc[lu_idx]) / float(vm) < lu_vol_thr:
            continue

        lu_close = float(close.iloc[lu_idx])
        lu_vol = float(vol.iloc[lu_idx])
        # 回调窗口 = 涨停日之后到选股日(不含涨停日)
        end_idx = min(lu_idx, pb_max)
        if end_idx < 1:
            continue
        pb = d.iloc[0:end_idx]
        pb_days = end_idx
        if pb_days < pb_min:
            continue

        pb_high = float(pb["high"].max())
        pb_low = float(pb["low"].min())
        if pb_high <= 0 or pb_low <= 0:
            continue
        rng = (pb_high - pb_low) / pb_high
        if rng < rng_min or rng > rng_max:
            continue

        pb_closes = pd.to_numeric(pb["close"], errors="coerce").values
        if any(pd.isna(x) for x in pb_closes):
            continue
        if any(x < lu_close * support for x in pb_closes):
            continue
        if any(x > lu_close * resist for x in pb_closes):
            continue
        # 至少一日收盘低于涨停收盘价(确有回调, 而非一路走高)
        if not any(x < lu_close for x in pb_closes):
            continue
        # 至少一日缩量
        if not any(float(v) <= lu_vol * shrink for v in pd.to_numeric(pb["volume"], errors="coerce").values):
            continue
        return True

    return False


class LimitUpPullbackStrategy(BaseStrategy):
    id = "limit_up_pullback"
    name = "涨停回马枪"
    version = "0.1.0"
    description = "近N日放量涨停→缩量回调不破涨停收盘95%→选股日放量重回5日线, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="limit_up_lookback_days", label="涨停回溯交易日", type="int", default=6, min=2, max=20, step=1),
        ParamSpec(key="limit_up_threshold", label="涨停阈值", type="float", default=0.095, min=0.05, max=0.2, step=0.005),
        ParamSpec(key="volume_ratio_threshold", label="涨停日量比下限", type="float", default=2.2, min=1.0, max=6, step=0.1),
        ParamSpec(key="pullback_days_min", label="最小回调天数", type="int", default=1, min=1, max=10, step=1),
        ParamSpec(key="pullback_days_max", label="最大回调天数", type="int", default=9, min=1, max=20, step=1),
        ParamSpec(key="pullback_range_min", label="回调幅度下限", type="float", default=0.0, min=0.0, max=0.3, step=0.01),
        ParamSpec(key="pullback_range_max", label="回调幅度上限", type="float", default=0.15, min=0.02, max=0.5, step=0.01),
        ParamSpec(key="volume_shrinkage_ratio", label="缩量比例", type="float", default=0.5, min=0.1, max=1.0, step=0.05),
        ParamSpec(key="support_ratio", label="支撑位(涨停收盘比例)", type="float", default=0.95, min=0.7, max=1.0, step=0.01),
        ParamSpec(key="resistance_ratio", label="阻力位(涨停收盘比例)", type="float", default=1.05, min=1.0, max=1.3, step=0.01),
        ParamSpec(key="selection_day_rise_threshold", label="选股日最小涨幅", type="float", default=0.02, min=0.0, max=0.2, step=0.005),
        ParamSpec(key="selection_day_volume_ratio", label="选股日量比下限", type="float", default=1.5, min=0.8, max=5, step=0.1),
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
            if _limit_up_pullback_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
