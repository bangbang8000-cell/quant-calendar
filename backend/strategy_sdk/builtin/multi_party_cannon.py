#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多方炮形态选股策略 (v7.4 FR-7.4-1 / v7.12 补齐, 移植自 KHunter multi_party_cannon.py)
形态: 两阳夹一阴 —— Day-2 中阳(涨幅>=3%) + Day-1 缩量小阴(实体与回调均受限)
     + Day-0 放量阳线(涨幅>=3% 且突破 Day-2 收盘)。
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


def _multi_party_cannon_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序, iloc0=最新)是否命中多方炮。"""
    need = max(int(p["ma_period"]) + 2, 12)
    if df is None or len(df) < need:
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    opn = pd.to_numeric(d["open"], errors="coerce")
    close = pd.to_numeric(d["close"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    if opn.isna().any() or close.isna().any() or vol.isna().any():
        return False
    if float(opn.iloc[0]) <= 0 or float(opn.iloc[1]) <= 0 or float(opn.iloc[2]) <= 0:
        return False

    chg = pct_change_desc(close)   # 收盘相对前一交易日的涨跌幅(与 KHunter candle_rise 同口径)
    o0, c0, v0 = float(opn.iloc[0]), float(close.iloc[0]), float(vol.iloc[0])   # Day-0 第三根
    o1, c1, v1 = float(opn.iloc[1]), float(close.iloc[1]), float(vol.iloc[1])   # Day-1 第二根
    o2, c2, v2 = float(opn.iloc[2]), float(close.iloc[2]), float(vol.iloc[2])   # Day-2 第一根

    # Day-2: 阳线 + 涨幅达标
    if not c2 > o2:
        return False
    first_rise = chg.iloc[2]
    if pd.isna(first_rise) or float(first_rise) < float(p["first_candle_rise"]):
        return False

    # Day-1: 阴线 + 实体受限 + 回调受限
    if not c1 < o1:
        return False
    body1, body2 = abs(c1 - o1), abs(c2 - o2)
    if body1 > body2 * float(p["second_candle_body_ratio"]):
        return False
    first_rise_abs = c2 - o2
    if first_rise_abs <= 0:
        return False
    fallback_ratio = (c2 - c1) / first_rise_abs
    if fallback_ratio > float(p["second_candle_fallback_ratio"]):
        return False

    # Day-0: 阳线 + 涨幅达标 + 突破第一根收盘
    if not c0 > o0:
        return False
    third_rise = chg.iloc[0]
    if pd.isna(third_rise) or float(third_rise) < float(p["third_candle_rise"]):
        return False
    if bool(p["third_candle_breakthrough"]) and c0 <= c2:
        return False

    # 量能: 第二根缩量、第三根放量
    if v2 <= 0:
        return False
    if v1 > v2 * float(p["second_volume_shrink_ratio"]):
        return False
    if v0 < v2 * float(p["third_volume_expand_ratio"]):
        return False

    # 趋势过滤: 站上 N 日均线
    if bool(p["enable_ma_filter"]):
        ma = float(rolling_stat_desc(close, int(p["ma_period"]), "mean").iloc[0])
        if pd.isna(ma) or c0 < ma:
            return False
    return True


class MultiPartyCannonStrategy(BaseStrategy):
    id = "multi_party_cannon"
    name = "多方炮"
    version = "0.1.0"
    description = "两阳夹一阴(中阳+缩量小阴+放量突破阳), 站上N日均线, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="first_candle_rise", label="第一根阳线最小涨幅", type="float", default=0.03, min=0.005, max=0.15, step=0.005),
        ParamSpec(key="second_candle_body_ratio", label="第二根实体占比上限", type="float", default=0.5, min=0.1, max=1.0, step=0.05),
        ParamSpec(key="second_candle_fallback_ratio", label="第二根回调占比上限", type="float", default=0.5, min=0.1, max=1.0, step=0.05),
        ParamSpec(key="third_candle_rise", label="第三根阳线最小涨幅", type="float", default=0.03, min=0.005, max=0.15, step=0.005),
        ParamSpec(key="third_candle_breakthrough", label="第三根突破第一根收盘", type="bool", default=True),
        ParamSpec(key="second_volume_shrink_ratio", label="第二根缩量比例上限", type="float", default=0.8, min=0.1, max=1.0, step=0.05),
        ParamSpec(key="third_volume_expand_ratio", label="第三根放量倍数下限", type="float", default=1.0, min=1.0, max=4.0, step=0.1),
        ParamSpec(key="enable_ma_filter", label="启用均线过滤", type="bool", default=True),
        ParamSpec(key="ma_period", label="均线周期", type="int", default=20, min=5, max=120, step=5),
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
            if _multi_party_cannon_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
