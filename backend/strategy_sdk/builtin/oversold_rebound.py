#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
超跌反弹形态选股策略 (v7.4 FR-7.4-1, 移植自 KHunter oversold_rebound_strategy.py)
组合: C1深度超跌 AND C2a MACD底背离(必须) AND (底分型 OR 启明星) AND C3反弹受限
     AND 选股日阳线放量。仅 T1 OHLCV, 持有期参数化。
"""
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import (descending_dates_from_panel,
                                                  expand_holding_window,
                                                  panel_to_desc_df)


def _macd(close: pd.Series, fast=12, slow=26, signal=9):
    ef = close.ewm(span=fast, adjust=False).mean()
    es = close.ewm(span=slow, adjust=False).mean()
    dif = ef - es
    dea = dif.ewm(span=signal, adjust=False).mean()
    return dif, dea, dif - dea


def _oversold_rebound_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序 iloc0=最新)超跌反弹命中判定。"""
    need = max(int(p["lookback_days"]), int(p["high_drawdown_days"]),
               int(p["macd_divergence_days"]))
    if df is None or len(df) < need:
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    close = pd.to_numeric(d["close"], errors="coerce")
    high = pd.to_numeric(d["high"], errors="coerce")
    low = pd.to_numeric(d["low"], errors="coerce")
    opn = pd.to_numeric(d["open"], errors="coerce")
    vol = pd.to_numeric(d["volume"], errors="coerce")
    if close.isna().any() or high.isna().any() or low.isna().any():
        return False
    # C1 深度超跌: 选股日收盘 < 近 high_drawdown_days 最高价*(1-min_dd)
    window = d.head(int(p["high_drawdown_days"]))
    max_high = window["high"].max()
    c0 = float(close.iloc[0])
    if max_high <= 0 or pd.isna(max_high) or pd.isna(c0):
        return False
    drawdown = 1.0 - c0 / max_high
    if drawdown < float(p["high_drawdown_min"]):
        return False
    # C3 反弹受限: 选股日收盘相对区间最低价涨幅 <= cap
    lb = int(p["lookback_days"])
    min_low = d.head(lb)["low"].min()
    if min_low <= 0 or pd.isna(min_low):
        return False
    if (c0 - min_low) / min_low > float(p["rebound_cap"]):
        return False
    # 选股日阳线 + 涨幅>0 + 达最小涨幅
    if len(d) < 2:
        return False
    prev_close = float(close.iloc[1])
    if prev_close <= 0 or pd.isna(prev_close):
        return False
    if not (c0 > float(opn.iloc[0]) and c0 > prev_close):
        return False
    gain = (c0 - prev_close) / prev_close
    if gain <= float(p["selection_day_min_gain"]):
        return False
    # 量能放大: 今日量 >= 前N日均量 * ratio
    avg_days = int(p["volume_avg_days"])
    if len(d) < avg_days + 1:
        return False
    base_vol = vol.iloc[1:1 + avg_days].mean()
    if base_vol <= 0 or pd.isna(base_vol) or pd.isna(vol.iloc[0]):
        return False
    if vol.iloc[0] / base_vol < float(p["volume_surge_ratio"]):
        return False
    # C2a MACD 底背离(必须): 价格新低点处 MACD 柱未同步新低
    _, _, macd = _macd(close, int(p["macd_fast"]), int(p["macd_slow"]), int(p["macd_signal"]))
    dw = int(p["macd_divergence_days"])
    w_low = low.head(dw).reset_index(drop=True)
    w_macd = macd.head(dw).reset_index(drop=True)
    if len(w_low) < dw:
        return False
    min_low_idx = int(w_low.idxmin())
    macd_at_low = w_macd.iloc[min_low_idx]
    macd_min = w_macd.min()
    if pd.isna(macd_at_low) or pd.isna(macd_min) or macd_at_low <= macd_min:
        return False
    # C2b/C2d: 底分型 或 启明星(满足之一)
    hit = False
    if len(d) >= 3:
        l0, l1, l2 = low.iloc[0], low.iloc[1], low.iloc[2]
        h0, h1, h2 = high.iloc[0], high.iloc[1], high.iloc[2]
        if l1 < l0 and l1 < l2 and h1 < h0 and h1 < h2:  # 底分型
            hit = True
        c2, c1, c0row = d.iloc[2], d.iloc[1], d.iloc[0]
        body2 = abs(c2["close"] - c2["open"]) / c2["open"] if c2["open"] > 0 else 0
        body1 = abs(c1["close"] - c1["open"]) / c1["open"] if c1["open"] > 0 else 0
        if (c2["close"] < c2["open"] and body2 > float(p["morning_star_body_threshold"])
                and body1 <= body2 * float(p["morning_star_small_ratio"])
                and c0row["close"] > c0row["open"]):  # 启明星
            hit = True
    return hit


class OversoldReboundStrategy(BaseStrategy):
    id = "oversold_rebound"
    name = "超跌反弹"
    version = "0.1.0"
    description = "深度超跌+MACD底背离(必须)+底分型/启明星+反弹受限+放量阳线, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="lookback_days", label="反弹回溯交易日", type="int", default=100, min=30, max=250, step=10),
        ParamSpec(key="high_drawdown_days", label="超跌窗口交易日", type="int", default=120, min=30, max=250, step=10),
        ParamSpec(key="high_drawdown_min", label="最小跌幅", type="float", default=0.5, min=0.1, max=0.9, step=0.05),
        ParamSpec(key="macd_divergence_days", label="背离窗口", type="int", default=20, min=5, max=60, step=5),
        ParamSpec(key="macd_fast", label="MACD快线", type="int", default=12, min=5, max=30, step=1),
        ParamSpec(key="macd_slow", label="MACD慢线", type="int", default=26, min=10, max=60, step=1),
        ParamSpec(key="macd_signal", label="MACD信号线", type="int", default=9, min=3, max=20, step=1),
        ParamSpec(key="rebound_cap", label="反弹幅度上限", type="float", default=0.30, min=0.05, max=1.0, step=0.05),
        ParamSpec(key="selection_day_min_gain", label="选股日最小涨幅", type="float", default=0.01, min=0, max=0.2, step=0.005),
        ParamSpec(key="volume_surge_ratio", label="量能放大倍数下限", type="float", default=1.3, min=1.0, max=5, step=0.1),
        ParamSpec(key="volume_avg_days", label="量能基准窗口", type="int", default=5, min=3, max=20, step=1),
        ParamSpec(key="morning_star_body_threshold", label="启明星阴线实体阈值", type="float", default=0.03, min=0.005, max=0.1, step=0.005),
        ParamSpec(key="morning_star_small_ratio", label="启明星小实体比例上限", type="float", default=0.5, min=0.1, max=1.0, step=0.1),
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
            if _oversold_rebound_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
