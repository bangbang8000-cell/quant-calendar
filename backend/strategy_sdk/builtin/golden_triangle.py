#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
金三角形态选股策略 (v7.4 FR-7.4-1, 移植自 KHunter golden_triangle_strategy.py)
形态: A=MA5上穿MA10, B=MA5上穿MA20, C=MA10上穿MA20, 三点构成三角形; 汇聚同日=金蜘蛛。
命中条件: C点涨幅>=阈值 + C点放量 + ABC间隔<=ac_interval + 多头排列 MA5>=MA10>=MA20>=MA60 + MA60向上。
数据: 仅 T1 OHLCV; 持有期 hold_days 参数化(避免稀疏信号 hold_days 恒1)。
"""
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import (descending_dates_from_panel,
                                                  expand_holding_window,
                                                  panel_to_desc_df)


def _cross_up(fast_prev, fast_curr, slow_prev, slow_curr) -> bool:
    """金叉: 前一日 fast<slow, 当日 fast>=slow"""
    if any(pd.isna(x) for x in (fast_prev, fast_curr, slow_prev, slow_curr)):
        return False
    return fast_prev < slow_prev and fast_curr >= slow_curr


def _golden_triangle_signal(df: pd.DataFrame, short: int = 5, mid: int = 10,
                            long: int = 20, super_long: int = 60,
                            ac_interval: int = 3, c_min_gain: float = 0.01,
                            c_min_vol_ratio: float = 1.1,
                            ma60_rise_required: bool = True) -> bool:
    """纯函数: 判定单股(倒序,iloc0=最新)是否命中金三角形态。"""
    if df is None or len(df) < max(super_long, 60) + 2:
        return False
    d = df.copy()
    d = d.sort_values("date", ascending=False).reset_index(drop=True)
    close = pd.to_numeric(d["close"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    sma_s = close.rolling(short).mean()
    sma_m = close.rolling(mid).mean()
    sma_l = close.rolling(long).mean()
    sma_sl = close.rolling(super_long).mean()
    vol_ma5 = vol.rolling(5).mean()

    latest = 0
    # C点(当日): MA(mid) 上穿 MA(long)
    if not _cross_up(sma_m.iloc[latest + 1], sma_m.iloc[latest],
                     sma_l.iloc[latest + 1], sma_l.iloc[latest]):
        return False
    # A点: MA(short) 上穿 MA(mid) — 当日或向前 ac_interval 日内
    a_idx = None
    if _cross_up(sma_s.iloc[1], sma_s.iloc[0], sma_m.iloc[1], sma_m.iloc[0]):
        a_idx = 0
    b_idx = None
    if _cross_up(sma_s.iloc[1], sma_s.iloc[0], sma_l.iloc[1], sma_l.iloc[0]):
        b_idx = 0
    search_end = min(1 + ac_interval + 1, len(d) - 1)
    for i in range(1, search_end):
        if a_idx is None and _cross_up(sma_s.iloc[i + 1], sma_s.iloc[i],
                                       sma_m.iloc[i + 1], sma_m.iloc[i]):
            a_idx = i
        if b_idx is None and _cross_up(sma_s.iloc[i + 1], sma_s.iloc[i],
                                       sma_l.iloc[i + 1], sma_l.iloc[i]):
            b_idx = i
    if a_idx is None or b_idx is None:
        return False
    # C点涨幅与放量确认
    c_gain = (close.iloc[0] - close.iloc[1]) / close.iloc[1] if close.iloc[1] > 0 else 0
    if pd.isna(c_gain) or c_gain < c_min_gain:
        return False
    c_vol_ratio = vol.iloc[0] / vol_ma5.iloc[0] if vol_ma5.iloc[0] and vol_ma5.iloc[0] > 0 else 0
    if pd.isna(c_vol_ratio) or c_vol_ratio < c_min_vol_ratio:
        return False
    # 多头排列
    ss, sm, sl, ssl = sma_s.iloc[0], sma_m.iloc[0], sma_l.iloc[0], sma_sl.iloc[0]
    if any(pd.isna(x) for x in (ss, sm, sl, ssl)):
        return False
    if not (ss >= sm >= sl >= ssl):
        return False
    # MA60 向上
    if ma60_rise_required:
        if len(d) < 2 or pd.isna(sma_sl.iloc[1]) or sma_sl.iloc[0] <= sma_sl.iloc[1]:
            return False
    return True


class GoldenTriangleStrategy(BaseStrategy):
    id = "golden_triangle"
    name = "金三角"
    version = "0.1.0"
    description = "MA5/10/20 金叉三角(或金蜘蛛)+C点放量+多头排列+MA60向上, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="short_period", label="短期均线", type="int", default=5, min=3, max=20, step=1),
        ParamSpec(key="mid_period", label="中期均线", type="int", default=10, min=5, max=40, step=1),
        ParamSpec(key="long_period", label="长期均线", type="int", default=20, min=10, max=80, step=1),
        ParamSpec(key="super_long_period", label="超长均线", type="int", default=60, min=30, max=150, step=5),
        ParamSpec(key="ac_interval", label="A-C最大间隔(交易日)", type="int", default=3, min=0, max=15, step=1),
        ParamSpec(key="c_cross_min_gain", label="C点最小涨幅", type="float", default=0.01, min=0, max=0.2, step=0.005),
        ParamSpec(key="c_cross_min_volume_ratio", label="C点最小量比", type="float", default=1.1, min=0.5, max=5, step=0.1),
        ParamSpec(key="ma60_rise_required", label="要求MA60向上", type="bool", default=True),
        ParamSpec(key="hold_days", label="持有交易日", type="int", default=3, min=1, max=20, step=1,
                  description="命中后持有N个交易日, 避免形态稀疏信号 hold_days 恒1"),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        ctx.params = self.validate_params(ctx.params)  # 补全默认值(允许空/部分参数调用)
        panel = ctx.panel(self.fields, start=_start(ctx.as_of, 260))
        if panel is None or panel.empty:
            return pd.DataFrame()
        dates = descending_dates_from_panel(panel)
        if not dates:
            return pd.DataFrame()
        p = ctx.params
        symbols = panel.index.get_level_values("symbol").unique().tolist() \
            if isinstance(panel.index, pd.MultiIndex) else []
        if not symbols:
            return pd.DataFrame()
        signals = {}
        for sym in symbols:
            df = panel_to_desc_df(panel, sym, self.fields)
            if _golden_triangle_signal(
                df, short=int(p["short_period"]), mid=int(p["mid_period"]),
                long=int(p["long_period"]), super_long=int(p["super_long_period"]),
                ac_interval=int(p["ac_interval"]), c_min_gain=float(p["c_cross_min_gain"]),
                c_min_vol_ratio=float(p["c_cross_min_volume_ratio"]),
                ma60_rise_required=bool(p["ma60_rise_required"]),
            ):
                # 信号日为最新日(倒序 iloc0 = as_of)
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(p["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
