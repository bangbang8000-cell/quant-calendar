#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
2560 战法形态选股策略 (v7.4 FR-7.4-1 / v7.12 补齐, 移植自 KHunter strategy_2560_selection.py)
形态: 收盘价上穿 25 日均线 + 5 日均量线上穿 60 日均量线(量能金叉) + 收盘在 MA10 之上
     + 当日涨幅 >= 5% + 量能 >= 前 5 日均量的 1.5 倍。
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


def _strategy_2560_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序, iloc0=最新)是否命中 2560 战法。"""
    price_n = int(p["ma_period"])
    vol_long = int(p["vol_ma_long"])
    need = max(price_n, vol_long) + 2
    if df is None or len(df) < need:
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    close = pd.to_numeric(d["close"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    if close.isna().any() or vol.isna().any():
        return False

    ma10 = rolling_stat_desc(close, int(p["ma10_period"]), "mean", min_periods=1)
    ma25 = rolling_stat_desc(close, price_n, "mean", min_periods=1)
    vma_s = rolling_stat_desc(vol, int(p["vol_ma_short"]), "mean", min_periods=1)
    vma_l = rolling_stat_desc(vol, vol_long, "mean", min_periods=1)

    vals = [ma10.iloc[0], ma25.iloc[0], ma10.iloc[1], ma25.iloc[1],
            vma_s.iloc[0], vma_l.iloc[0], vma_s.iloc[1], vma_l.iloc[1]]
    if any(pd.isna(v) for v in vals):
        return False

    c0, c1 = float(close.iloc[0]), float(close.iloc[1])
    v0 = float(vol.iloc[0])
    if c0 <= 0 or c1 <= 0 or v0 <= 0:
        return False

    # ① 价格上穿 MA25
    if not (c0 > float(ma25.iloc[0]) and c1 <= float(ma25.iloc[1])):
        return False
    # ② 5 日均量线上穿 60 日均量线
    if not (float(vma_s.iloc[0]) > float(vma_l.iloc[0])
            and float(vma_s.iloc[1]) <= float(vma_l.iloc[1])):
        return False
    # ③ 收盘在 MA10 之上
    if c0 <= float(ma10.iloc[0]):
        return False
    # ④ 涨幅达标
    chg = pct_change_desc(close).iloc[0]
    if pd.isna(chg) or float(chg) < float(p["min_price_change"]):
        return False
    # ⑤ 量能达标
    if float(vma_s.iloc[0]) <= 0:
        return False
    if v0 / float(vma_s.iloc[0]) < float(p["min_volume_ratio"]):
        return False
    return True


class Strategy2560(BaseStrategy):
    id = "strategy_2560"
    name = "2560战法"
    version = "0.1.0"
    description = "价格上穿MA25+5日均量上穿60日均量+站稳MA10+涨幅量能达标, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="ma_period", label="价格均线周期", type="int", default=25, min=10, max=120, step=5),
        ParamSpec(key="ma10_period", label="短均线周期", type="int", default=10, min=5, max=40, step=5),
        ParamSpec(key="vol_ma_short", label="短均量周期", type="int", default=5, min=3, max=20, step=1),
        ParamSpec(key="vol_ma_long", label="长均量周期", type="int", default=60, min=30, max=120, step=5),
        ParamSpec(key="min_price_change", label="最小涨幅", type="float", default=0.05, min=0.01, max=0.2, step=0.005),
        ParamSpec(key="min_volume_ratio", label="量能倍数下限", type="float", default=1.5, min=1.0, max=6.0, step=0.1),
        ParamSpec(key="hold_days", label="持有交易日", type="int", default=3, min=1, max=20, step=1),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        ctx.params = self.validate_params(ctx.params)
        panel = ctx.panel(self.fields, start=_start(ctx.as_of, 260))
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
            if _strategy_2560_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
