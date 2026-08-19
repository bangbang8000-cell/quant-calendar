#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
行业轮动策略 (内置策略)
"""
import logging
from typing import List

import pandas as pd

from strategy_sdk.base import COMMON_TRADING_PARAMS, BaseStrategy, ParamSpec, StrategyContext

logger = logging.getLogger(__name__)


class SectorRotationStrategy(BaseStrategy):
    id = "sector_rotation"
    name = "行业轮动"
    version = "0.1.0"
    description = "行业轮动: 参数化模板, 因子逻辑由研究端注入"
    ptrade_template = "sector_rotation.py.j2"

    param_specs: List[ParamSpec] = [
        ParamSpec(key="sector_k", label="行业数K", type="int", default=5, min=2, max=20, step=1, ptrade_var="sector_k"),
        ParamSpec(key="stock_per_sector", label="每行业选股数", type="int", default=4, min=1, max=20, step=1, ptrade_var="stock_per_sector"),
        ParamSpec(key="momentum_window", label="动量回看窗口", type="int", default=60, min=10, max=250, step=10, ptrade_var="momentum_window"),
    ] + list(COMMON_TRADING_PARAMS)

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
