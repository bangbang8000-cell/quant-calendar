#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
启明星形态选股策略 (v7.4 FR-7.4-1 / v7.12 补齐, 移植自 KHunter morning_star.py)
形态: 三根K线底部反转 —— Day-2 长阴线(实体>=3%) + Day-1 小实体犹豫 + Day-0 放量长阳
     (涨幅>5% 且收盘站上 MA5)。
数据: 仅 T1 OHLCV; 持有期 hold_days 参数化。
"""
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import (descending_dates_from_panel,
                                                 expand_holding_window,
                                                 panel_to_desc_df,
                                                 rolling_stat_desc)


def _morning_star_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序, iloc0=最新)是否命中启明星。"""
    if df is None or len(df) < 7:
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    opn = pd.to_numeric(d["open"], errors="coerce")
    close = pd.to_numeric(d["close"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    if opn.isna().any() or close.isna().any() or vol.isna().any():
        return False
    if float(opn.iloc[0]) <= 0 or float(opn.iloc[1]) <= 0 or float(opn.iloc[2]) <= 0:
        return False

    c0, o0, v0 = float(close.iloc[0]), float(opn.iloc[0]), float(vol.iloc[0])   # Day-0 确认阳线
    c1, o1, v1 = float(close.iloc[1]), float(opn.iloc[1]), float(vol.iloc[1])   # Day-1 小实体
    c2, o2, _ = float(close.iloc[2]), float(opn.iloc[2]), float(vol.iloc[2])    # Day-2 长阴线

    # Day-0: 阳线 + 涨幅达标
    if not c0 > o0:
        return False
    if (c0 - o0) / o0 * 100 <= float(p["third_candle_rise_pct"]):
        return False
    # Day-0: 站上 MA5
    ma5 = float(rolling_stat_desc(close, 5, "mean").iloc[0])
    if pd.isna(ma5) or c0 <= ma5:
        return False
    # Day-2: 长阴线
    body2 = abs(c2 - o2) / o2
    if not c2 < o2 or body2 < float(p["first_body_threshold"]):
        return False
    # Day-1: 小实体(相对 Day-2 实体)
    body1 = abs(c1 - o1) / o1
    if body1 > body2 * float(p["small_body_ratio"]):
        return False
    # Day-0 放量
    if v1 <= 0 or v0 / v1 < float(p["volume_ratio"]):
        return False
    return True


class MorningStarStrategy(BaseStrategy):
    id = "morning_star"
    name = "启明星"
    version = "0.1.0"
    description = "长阴线+小实体星线+放量长阳站上MA5 的三K线底部反转, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="first_body_threshold", label="长阴线实体下限", type="float", default=0.03, min=0.005, max=0.1, step=0.005),
        ParamSpec(key="small_body_ratio", label="星线实体占比上限", type="float", default=0.3, min=0.05, max=1.0, step=0.05),
        ParamSpec(key="third_candle_rise_pct", label="确认阳线最小涨幅(%)", type="float", default=5.0, min=0.5, max=15.0, step=0.5),
        ParamSpec(key="volume_ratio", label="确认阳线量比下限", type="float", default=1.5, min=0.8, max=5.0, step=0.1),
        ParamSpec(key="hold_days", label="持有交易日", type="int", default=3, min=1, max=20, step=1),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        ctx.params = self.validate_params(ctx.params)
        panel = ctx.panel(self.fields, start=_start(ctx.as_of, 120))
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
            if _morning_star_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
