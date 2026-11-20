#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
主升低吸形态选股策略 (v7.4 FR-7.4-1, 移植自 KHunter main_uptrend_dip_buy_strategy.py)
结构: 一拉(H) + 二调(P) + 突破前高(R) + 放量长阳。选股日=突破日。仅 T1 OHLCV, 持有期参数化。
"""
from typing import List

import numpy as np
import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import (descending_dates_from_panel,
                                                  expand_holding_window,
                                                  panel_to_desc_df)


def _find_swing_highs(highs: np.ndarray, w: int) -> List[int]:
    w = max(1, int(w))
    n = len(highs)
    out = []
    for i in range(w, n - w):
        h = highs[i]
        if h > highs[i - w:i].max() and h > highs[i + 1:i + w + 1].max():
            out.append(i)
    return out


def _main_uptrend_dip_buy_signal(df: pd.DataFrame, p: dict) -> bool:
    """纯函数: 单股(内部转升序,iloc-1=今日=突破日)主升低吸命中判定。"""
    if df is None or df.empty:
        return False
    d = df.copy()
    d["date"] = d["date"].astype(str).str.slice(0, 10)
    d = d.sort_values("date", ascending=True).reset_index(drop=True)  # 正序
    recent = int(p["recent_days"])
    lb = int(p["rally_low_lookback"])
    sw = int(p["swing_window"])
    min_len = max(recent + lb + 1, 106)
    if len(d) < min_len:
        return False
    highs = pd.to_numeric(d["high"], errors="coerce").values
    lows = pd.to_numeric(d["low"], errors="coerce").values
    closes = pd.to_numeric(d["close"], errors="coerce").values
    opens = pd.to_numeric(d["open"], errors="coerce").values
    vols = pd.to_numeric(d["volume"], errors="coerce").values
    if not all(np.isfinite(x).all() for x in (highs, lows, closes, opens, vols)):
        return False
    n = len(d)
    last = n - 1
    swings = _find_swing_highs(highs, sw)
    if not swings:
        return False
    win_lo = last - recent
    cand = [i for i in swings if win_lo <= i <= last - 1]
    if not cand:
        return False
    rmin, rmax = float(p["rally_min_pct"]), float(p["rally_max_pct"])
    hi = None
    H = L = 0.0
    rally = 0.0
    for i in sorted(cand, key=lambda x: (-highs[x], -x)):
        if i - lb < 0:
            continue
        seg = lows[i - lb:i]
        lo = float(seg.min())
        if lo <= 0:
            continue
        rp = (float(highs[i]) - lo) / lo * 100
        if rp < rmin or (rmax > 0 and rp > rmax):
            continue
        hi, H, L, rally = i, float(highs[i]), lo, rp
        break
    if hi is None or hi >= last:
        return False
    # 二调
    p_slice = lows[hi + 1:last + 1]
    P = float(p_slice.min())
    if P <= 0:
        return False
    pullback = (H - P) / H * 100
    if pullback < float(p["pullback_min_pct"]):
        return False
    if p.get("require_p_above_l", True) and P <= L:
        return False
    gap = float(p.get("pullback_gap_pct", 0) or 0)
    if gap > 0 and pullback >= rally - gap:
        return False
    # R: H 之后今日之前最后 swing high
    after = [i for i in swings if hi < i <= last - 1]
    if not after:
        return False
    R = float(highs[max(after)])
    if R <= 0 or R >= H:
        return False
    # 突破
    C, O, V = float(closes[last]), float(opens[last]), float(vols[last])  # noqa: E741
    if O <= 0 or C <= 0 or V <= 0:
        return False
    body = (C - O) / O * 100
    if body < float(p["min_body_pct"]) or C <= R:
        return False
    if (C - R) / R * 100 > float(p["breakout_max_pct"]):
        return False
    vmp = int(p["volume_ma_period"])
    if last - vmp < 0:
        return False
    vma = float(vols[last - vmp:last].mean())
    if vma <= 0 or V / vma < float(p["volume_ratio"]):
        return False
    # 均线
    if p.get("require_close_above_ma", True):
        mp = int(p["ma_period"])
        ma = float(closes[last - mp + 1:last + 1].mean())
        if C <= ma:
            return False
    return True


class MainUptrendDipBuyStrategy(BaseStrategy):
    id = "main_uptrend_dip_buy"
    name = "主升低吸"
    version = "0.1.0"
    description = "一拉二调突破前高R+放量长阳+站上均线, 选股日=突破日, 命中后持有N日"
    ptrade_template = "multi_factor.py.j2"
    fields = ["open", "high", "low", "close", "volume"]

    param_specs: List[ParamSpec] = [
        ParamSpec(key="rally_min_pct", label="一拉涨幅下限(%)", type="float", default=30.0, min=5, max=200, step=5),
        ParamSpec(key="rally_max_pct", label="一拉涨幅上限(%)", type="float", default=100.0, min=0, max=500, step=10),
        ParamSpec(key="rally_low_lookback", label="一拉低点回溯", type="int", default=45, min=10, max=120, step=5),
        ParamSpec(key="recent_days", label="近期窗口", type="int", default=60, min=20, max=150, step=10),
        ParamSpec(key="pullback_min_pct", label="二调回撤下限(%)", type="float", default=18.0, min=5, max=60, step=1),
        ParamSpec(key="pullback_gap_pct", label="二调回撤动态间隔", type="float", default=8.0, min=0, max=40, step=1),
        ParamSpec(key="require_p_above_l", label="二调低点不破一拉起点", type="bool", default=True),
        ParamSpec(key="swing_window", label="摆动高点窗口", type="int", default=2, min=1, max=10, step=1),
        ParamSpec(key="min_body_pct", label="突破日实体下限(%)", type="float", default=5.0, min=1, max=20, step=0.5),
        ParamSpec(key="breakout_max_pct", label="突破幅度上限(%)", type="float", default=2.0, min=0.5, max=10, step=0.5),
        ParamSpec(key="volume_ratio", label="量比下限", type="float", default=1.8, min=1.0, max=5, step=0.1),
        ParamSpec(key="volume_ma_period", label="量比均量周期", type="int", default=5, min=3, max=20, step=1),
        ParamSpec(key="require_close_above_ma", label="要求站上均线", type="bool", default=True),
        ParamSpec(key="ma_period", label="均线周期", type="int", default=5, min=3, max=60, step=1),
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
            if _main_uptrend_dip_buy_signal(df, ctx.params):
                signals[sym] = {dates[-1]}
        return expand_holding_window(dates, symbols, signals, hold_days=int(ctx.params["hold_days"]))


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
