#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
资金流选股策略 (内置策略)
"""
import logging
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext

logger = logging.getLogger(__name__)


class CapitalFlowStrategy(BaseStrategy):
    id = "capital_flow"
    name = "资金流选股"
    version = "0.1.0"
    description = "资金流选股: 参数化模板, 因子逻辑由研究端注入"
    ptrade_template = "capital_flow.py.j2"

    param_specs: List[ParamSpec] = [
        ParamSpec(key="flow_window", label="资金回看窗口", type="int", default=10, min=3, max=60, step=1, ptrade_var="flow_window"),
        ParamSpec(key="inflow_threshold", label="净流入阈值(万元)", type="float", default=5000, min=0, max=100000, step=500, ptrade_var="inflow_threshold"),
        ParamSpec(key="top_n", label="选股数", type="int", default=20, min=5, max=100, step=5, ptrade_var="top_n")
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        """返回持仓矩阵(骨架: 等权占位, 因子打分后续接入)"""
        panel = ctx.panel(["close"], start=ctx.as_of)
        if panel is None or panel.empty:
            return pd.DataFrame()
        dates = sorted(panel.index.get_level_values(0).unique())
        symbols = sorted(panel.index.get_level_values(1).unique())
        top_n = min(int(ctx.params.get("top_n", 20)), len(symbols)) or len(symbols)
        weight = 1.0 / max(top_n, 1)
        holdings = pd.DataFrame(0.0, index=dates, columns=symbols)
        for d in dates:
            try:
                cross = panel.xs(d, level=0)["close"].dropna()
                if len(cross) < 1:
                    continue
                picks = cross.sort_values(ascending=False).head(top_n).index.tolist()
                for s in picks:
                    holdings.at[d, s] = weight
            except KeyError:
                continue
        return holdings
