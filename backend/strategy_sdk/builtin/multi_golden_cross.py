#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多金叉共振形态选股策略 (v7.4 FR-7.4-1 / v7.12 补齐, 移植自 KHunter multi_golden_cross.py)
形态: 均线金叉 + KDJ 金叉 + MACD 金叉 在最近 lookback_days 内出现, 且三者首尾间隔
     <= resonance_days(日历日); 选股日收盘站上双向均线且量比>=1。
数据: 仅 T1 OHLCV; 持有期 hold_days 参数化。
"""
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import (descending_dates_from_panel,
                                                 ewm_desc,
                                                 expand_holding_window,
                                                 panel_to_desc_df,
                                                 rolling_stat_desc)


def _cross_flags(fast: pd.Series, slow: pd.Series) -> pd.Series:
    """倒序序列上的金叉标记: 当日 fast>slow 且**前一交易日** fast<=slow。

    注意: 倒序数据里"前一交易日"在下一行(索引 +1), 故用 shift(-1) 取昨日值;
    用 shift(1) 会取到"明天"(未来数据), 是本类移植最容易踩的坑。
    """
    prev_f, prev_s = fast.shift(-1), slow.shift(-1)
    return (fast > slow) & (prev_f <= prev_s)


def _multi_golden_cross_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序, iloc0=最新)是否命中多金叉共振。"""
    need = max(int(p["ma_long_period"]), int(p["kdj_n"]), int(p["macd_long"])) + 10
    if df is None or len(df) < need:
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    close = pd.to_numeric(d["close"], errors="coerce")
    high = pd.to_numeric(d["high"], errors="coerce")
    low = pd.to_numeric(d["low"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    if close.isna().any() or high.isna().any() or low.isna().any():
        return False

    # 均线
    ma_s = rolling_stat_desc(close, int(p["ma_short_period"]), "mean", min_periods=1)
    ma_l = rolling_stat_desc(close, int(p["ma_long_period"]), "mean", min_periods=1)

    # KDJ
    n = int(p["kdj_n"])
    ll = rolling_stat_desc(low, n, "min", min_periods=1)
    hh = rolling_stat_desc(high, n, "max", min_periods=1)
    denom = (hh - ll).replace(0, pd.NA)
    rsv = ((close - ll) / denom * 100).astype("float64").fillna(50.0)
    k = ewm_desc(rsv, alpha=1.0 / int(p["kdj_m1"]))
    dd = ewm_desc(k, alpha=1.0 / int(p["kdj_m2"]))

    # MACD
    dif = ewm_desc(close, span=int(p["macd_short"])) - ewm_desc(close, span=int(p["macd_long"]))
    dea = ewm_desc(dif, span=int(p["macd_signal"]))

    if pd.isna(ma_s.iloc[0]) or pd.isna(ma_l.iloc[0]):
        return False
    c0 = float(close.iloc[0])
    if c0 < float(ma_s.iloc[0]) or c0 < float(ma_l.iloc[0]):
        return False

    # 量比 >= 1(最近有量能)
    vol_ma5 = rolling_stat_desc(vol, 5, "mean", min_periods=1)
    if pd.isna(vol_ma5.iloc[0]) or vol_ma5.iloc[0] <= 0:
        return False
    if float(vol.iloc[0]) / float(vol_ma5.iloc[0]) < 1.0:
        return False

    lookback = int(p["lookback_days"])
    flags = {
        "ma": _cross_flags(ma_s, ma_l),
        "kdj": _cross_flags(k, dd),
        "macd": _cross_flags(dif, dea),
    }
    window = min(lookback, len(d))
    cross_dates = []
    for name, ser in flags.items():
        hit_idx = None
        for i in range(window):
            v = ser.iloc[i]
            if bool(v):
                hit_idx = i
                break
        if hit_idx is None:
            return False
        cross_dates.append(pd.to_datetime(str(d["date"].iloc[hit_idx])[:10]))
    max_diff = (max(cross_dates) - min(cross_dates)).days
    return abs(max_diff) <= int(p["resonance_days"])


class MultiGoldenCrossStrategy(BaseStrategy):
    id = "multi_golden_cross"
    name = "多金叉共振"
    version = "0.1.0"
    description = "均线/KDJ/MACD 三金叉在窗口内共振, 选股日站上均线且不缩量, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="ma_short_period", label="短期均线", type="int", default=5, min=3, max=20, step=1),
        ParamSpec(key="ma_long_period", label="长期均线", type="int", default=20, min=10, max=80, step=1),
        ParamSpec(key="kdj_n", label="KDJ N", type="int", default=9, min=5, max=30, step=1),
        ParamSpec(key="kdj_m1", label="KDJ M1", type="int", default=3, min=2, max=10, step=1),
        ParamSpec(key="kdj_m2", label="KDJ M2", type="int", default=3, min=2, max=10, step=1),
        ParamSpec(key="macd_short", label="MACD 快线", type="int", default=12, min=5, max=30, step=1),
        ParamSpec(key="macd_long", label="MACD 慢线", type="int", default=26, min=10, max=60, step=1),
        ParamSpec(key="macd_signal", label="MACD 信号线", type="int", default=9, min=3, max=20, step=1),
        ParamSpec(key="resonance_days", label="共振窗口(日历日)", type="int", default=1, min=0, max=10, step=1),
        ParamSpec(key="lookback_days", label="金叉回溯交易日", type="int", default=3, min=1, max=15, step=1),
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
            if _multi_golden_cross_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
