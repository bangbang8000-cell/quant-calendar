#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
指数增强策略 (内置策略)
"""
import logging
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext, COMMON_TRADING_PARAMS

logger = logging.getLogger(__name__)


class IndexEnhanceStrategy(BaseStrategy):
    id = "index_enhance"
    name = "指数增强"
    version = "0.1.0"
    description = "指数增强: 参数化模板, 因子逻辑由研究端注入"
    ptrade_template = "index_enhance.py.j2"

    param_specs: List[ParamSpec] = [
        ParamSpec(key="benchmark", label="基准指数", type="enum", default="000300.SH", options=["000300.SH", "000905.SH", "000852.SH"], ptrade_var="benchmark"),
        ParamSpec(key="excess_target", label="超额收益目标", type="float", default=0.05, min=0.0, max=0.5, step=0.01, ptrade_var="excess_target"),
        ParamSpec(key="tracking_error_max", label="跟踪误差上限", type="float", default=0.05, min=0.01, max=0.2, step=0.01, ptrade_var="tracking_error_max"),
        ParamSpec(key="industry_neutral", label="行业中性", type="bool", default=True, ptrade_var="industry_neutral"),
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
