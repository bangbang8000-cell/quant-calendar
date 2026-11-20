#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
龙头形态选股策略 (v7.4 FR-7.4-1, 移植自 KHunter leader_strategy.py)
条件: 当日涨停+严格第2板+早封板(<11:00)+换手5-25%+流通市值<300亿+温和放量+非一字板+近10日无其他涨停。

数据分层(T2 诚实降级, PRD §6.5.3): 涨停池字段(limit_type/limit_times/turnover_ratio/float_mv/seal_time)
来自 T2(tushare limit_list_d), 不在 T1 K 线。本策略通过 DataPortal 的 get_panel 请求这些字段;
若数据源不支持(字段缺失/全 NaN) → 诚实返回空矩阵(不造数, 不污染 T1 日历)。
"""
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext
from strategy_sdk.builtin._pattern_utils import descending_dates_from_panel, expand_holding_window

# 涨停池 T2 字段(需 DataPortal 支持; 不支持时降级)
POOL_FIELDS = ["limit_type", "limit_times", "turnover_ratio", "float_mv",
               "seal_time", "open_times"]
BARS = ["open", "high", "low", "close", "volume"]


class LeaderStrategy(BaseStrategy):
    id = "leader"
    name = "龙头"
    version = "0.1.0"
    description = "当日涨停+严格第2板+早封板+换手5-25%+小流通盘+温和放量+非一字板; 涨停池走T2, 缺失诚实降级"
    ptrade_template = "multi_factor.py.j2"

    param_specs: List[ParamSpec] = [
        ParamSpec(key="seal_time_limit", label="封板时间上限(HHMMSS)", type="int", default=110000, min=90000, max=150000, step=1000),
        ParamSpec(key="turnover_min", label="换手率下限(%)", type="float", default=5.0, min=0.5, max=30, step=0.5),
        ParamSpec(key="turnover_max", label="换手率上限(%)", type="float", default=25.0, min=5, max=60, step=1),
        ParamSpec(key="float_mv_max", label="流通市值上限(元)", type="float", default=30000000000.0, min=1e9, max=1e11, step=1e9),
        ParamSpec(key="min_limit_times", label="连板下限", type="int", default=2, min=1, max=10, step=1),
        ParamSpec(key="max_limit_times", label="连板上限", type="int", default=2, min=1, max=10, step=1),
        ParamSpec(key="volume_ratio_max", label="量能上限倍率", type="float", default=2.0, min=1.0, max=5, step=0.1),
        ParamSpec(key="exclude_open_limit_up", label="排除一字板", type="bool", default=True),
        ParamSpec(key="recent_limit_up_window", label="近期涨停回看窗口", type="int", default=10, min=2, max=30, step=1),
        ParamSpec(key="hold_days", label="持有交易日", type="int", default=3, min=1, max=20, step=1),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        ctx.params = self.validate_params(ctx.params)
        fields = BARS + POOL_FIELDS
        panel = ctx.panel(fields, start=_start(ctx.as_of, 120))
        if panel is None or panel.empty:
            return pd.DataFrame()
        # T2 可用性检查: 涨停池字段必须真实存在且非全 NaN, 否则诚实降级为空矩阵
        cols = set(panel.columns)
        need = {"limit_type", "turnover_ratio", "float_mv"}
        if not need.issubset(cols):
            return pd.DataFrame()
        pool_live = panel["limit_type"].notna().any()
        if not pool_live:
            return pd.DataFrame()
        dates = descending_dates_from_panel(panel)
        symbols = panel.index.get_level_values("symbol").unique().tolist() \
            if isinstance(panel.index, pd.MultiIndex) else []
        if not dates or not symbols:
            return pd.DataFrame()
        as_of = dates[-1]
        p = ctx.params
        sig_symbols = set()
        for sym in symbols:
            if self._hit(panel, sym, as_of, p):
                sig_symbols.add(sym)
        signals = {s: {as_of} for s in sig_symbols} if sig_symbols else set()
        return expand_holding_window(dates, symbols, signals, hold_days=int(p["hold_days"]))

    @staticmethod
    def _hit(panel: pd.DataFrame, sym: str, as_of: str, p: dict) -> bool:
        try:
            df = panel.xs(sym, level="symbol") if isinstance(panel.index, pd.MultiIndex) \
                and "symbol" in panel.index.names else panel[panel.get("symbol") == sym]
            cur = df[df.index.get_level_values("date").astype(str).str.slice(0, 10) == as_of] \
                if isinstance(df.index, pd.MultiIndex) else df[df.get("date", "").astype(str).str.slice(0, 10) == as_of]
            if cur.empty:
                return False
            row = cur.iloc[0]
            # 条件1: 当日涨停(T2 limit_type='U')
            if str(row.get("limit_type", "")).upper() != "U":
                return False
            # 条件2: 严格第2板
            lt = row.get("limit_times")
            if pd.isna(lt) or int(lt) < int(p["min_limit_times"]) or int(lt) > int(p["max_limit_times"]):
                return False
            # 条件3: 早封板
            st = row.get("seal_time")
            if pd.isna(st) or int(float(st)) >= int(p["seal_time_limit"]):
                return False
            # 条件4: 换手率区间
            tr = row.get("turnover_ratio")
            if pd.isna(tr) or not (float(p["turnover_min"]) <= float(tr) <= float(p["turnover_max"])):
                return False
            # 条件5: 流通市值上限
            mv = row.get("float_mv")
            if pd.isna(mv) or float(mv) >= float(p["float_mv_max"]):
                return False
            return True
        except Exception:
            return False  # 数据异常保守淘汰, 不造数


def _start(as_of: str, back: int) -> str:
    from datetime import datetime, timedelta
    return (datetime.strptime(as_of[:10], "%Y-%m-%d") - timedelta(days=back)).strftime("%Y-%m-%d")
