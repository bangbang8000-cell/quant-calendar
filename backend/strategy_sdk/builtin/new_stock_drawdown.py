#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
次新腰斩形态选股策略 (v7.4 FR-7.4-1 / v7.12 补齐, 移植自 KHunter new_stock_drawdown_strategy.py)
形态: 截至选股日 K 线根数 <= max_kline_bars(次新) + 现价较上市以来最高价跌幅 >= drawdown_min。
注意: 上市以来最高价用"截至当日"的累计最大值(无未来函数); K 线根数由取数窗口决定,
     故本策略取数窗口拉到上市以来(>= 3 年), 只对真次新(根数少)成立。
数据: 仅 T1 OHLCV; 持有期 hold_days 参数化。
"""
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import (cummax_desc,
                                                 descending_dates_from_panel,
                                                 expand_holding_window,
                                                 panel_to_desc_df)


def _new_stock_drawdown_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(倒序, iloc0=最新)是否命中次新腰斩。"""
    if df is None or len(df) < int(p["min_bars"]):
        return False
    d = df.sort_values("date", ascending=False).reset_index(drop=True)
    close = pd.to_numeric(d["close"], errors="coerce")
    high = pd.to_numeric(d["high"], errors="coerce")
    if close.isna().any() or high.isna().any():
        return False

    # ① 次新: 截至选股日的 K 线根数(从选股日往前算, 不含未来 bar)
    if len(d) > int(p["max_kline_bars"]):
        return False

    # ② 深度回撤: 现价 vs 上市以来最高价(截至当日)
    c0 = float(close.iloc[0])
    peak = float(cummax_desc(high).iloc[0])
    if peak <= 0 or pd.isna(c0):
        return False
    drawdown = 1.0 - c0 / peak
    if drawdown < float(p["drawdown_min"]):
        return False
    if not (float(p["min_price"]) <= c0 <= float(p["max_price"])):
        return False
    return True


class NewStockDrawdownStrategy(BaseStrategy):
    id = "new_stock_drawdown"
    name = "次新腰斩"
    version = "0.1.0"
    description = "上市以来K线<=120根(次新)+现价较上市最高回撤>=50%, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="max_kline_bars", label="次新K线上限", type="int", default=120, min=40, max=250, step=10),
        ParamSpec(key="drawdown_min", label="回撤下限", type="float", default=0.50, min=0.2, max=0.9, step=0.05),
        ParamSpec(key="min_bars", label="最少K线根数", type="int", default=20, min=10, max=60, step=5),
        ParamSpec(key="min_price", label="最低股价", type="float", default=1.0, min=0.5, max=10.0, step=0.5),
        ParamSpec(key="max_price", label="最高股价", type="float", default=500.0, min=50.0, max=2000.0, step=50.0),
        ParamSpec(key="hold_days", label="持有交易日", type="int", default=3, min=1, max=20, step=1),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        ctx.params = self.validate_params(ctx.params)
        # 窗口覆盖上市以来(3 年): 真次新返回其全部 K 线, 老股返回远超 120 根 → 自然被排除
        panel = ctx.panel(self.fields, start=_start(ctx.as_of, 1100))
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
            if _new_stock_drawdown_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
