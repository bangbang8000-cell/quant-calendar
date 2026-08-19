#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多因子选股策略 (内置策略 #1)
五维因子(估值/基本面/资金面/情绪面/技术面)合成打分 → TopN 等权
"""
import logging
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, FactorSpec, ParamSpec, StrategyContext

logger = logging.getLogger(__name__)


class MultiFactorStrategy(BaseStrategy):
    id = "multi_factor"
    name = "多因子选股"
    version = "0.1.0"
    description = "五维因子(估值/基本面/资金面/情绪面/技术面)合成打分, 选 TopN 等权持有"
    ptrade_template = "multi_factor.py.j2"

    param_specs: List[ParamSpec] = [
        ParamSpec(key="top_n", label="选股数", type="int", default=20,
                  min=5, max=100, step=5, ptrade_var="top_n",
                  description="每期持有的股票数量"),
        ParamSpec(key="benchmark", label="基准指数", type="enum",
                  default="000300.SH", options=["000300.SH", "000905.SH", "000852.SH"],
                  ptrade_var="benchmark", description="回测与业绩比较基准"),
        ParamSpec(key="rebalance_cycle", label="调仓周期(交易日)", type="int",
                  default=5, min=1, max=60, step=1, ptrade_var="rebalance_cycle",
                  description="每 N 个交易日调仓一次"),
        ParamSpec(key="st_filter", label="剔除ST", type="bool", default=True,
                  ptrade_var="st_filter", description="是否剔除 ST/*ST 股票"),
    ]

    factor_specs: List[FactorSpec] = [
        FactorSpec("pe", "valuation", ["close", "pe"], {"direction": "low"}),
        FactorSpec("pb", "valuation", ["close", "pb"], {"direction": "low"}),
        FactorSpec("mom20", "technical", ["close"], {"lookback": 20, "skip": 5}),
        FactorSpec("turnover20", "sentiment", ["volume", "float_mv"], {"lookback": 20}),
        FactorSpec("capital_flow", "capital", ["main_net_inflow"], {"lookback": 10}),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        """返回持仓矩阵: index=日期, columns=股票代码, 值=目标权重(等权)"""
        # 取面板(自动限制 end=as_of, 防前视)
        panel = ctx.panel(["close"], start=_prev_trading_day(ctx.as_of, 60))
        if panel is None or panel.empty:
            return pd.DataFrame()
        # 简化骨架: 按最近收盘价动量打分(真实实现注入五维因子合成)
        dates = sorted(panel.index.get_level_values(0).unique())
        symbols = sorted(panel.index.get_level_values(1).unique())
        top_n = min(ctx.params.get("top_n", 20), len(symbols))
        if top_n <= 0:
            return pd.DataFrame()
        # 等权权重
        weight = 1.0 / top_n
        holdings = pd.DataFrame(0.0, index=dates, columns=symbols)
        # 每个调仓日: 选 top_n(骨架按最新动量, 需替换为因子合成)
        for d in dates:
            try:
                cross = panel.xs(d, level=0)["close"].dropna()
                if len(cross) < top_n:
                    continue
                picks = cross.sort_values(ascending=False).head(top_n).index.tolist()
                for s in picks:
                    holdings.at[d, s] = weight
            except KeyError:
                continue
        return holdings


def _prev_trading_day(as_of: str, back: int) -> str:
    """简化: 返回 as_of 往前 back 个自然日(占位, 真实交易日历后续接入)"""
    from datetime import datetime, timedelta
    d = datetime.strptime(as_of, "%Y-%m-%d") - timedelta(days=back)
    return d.strftime("%Y-%m-%d")
