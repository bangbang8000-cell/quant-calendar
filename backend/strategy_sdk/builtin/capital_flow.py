#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
资金流选股策略 (内置策略)
"""
import logging
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, ParamSpec, StrategyContext, COMMON_TRADING_PARAMS, FactorSpec

logger = logging.getLogger(__name__)


def _prev_trading_day(as_of: str, back: int) -> str:
    """回退 back 个自然日(近似交易日)的日期 YYYY-MM-DD, 用于取数窗口起点"""
    from datetime import datetime, timedelta
    try:
        d = datetime.strptime(str(as_of), '%Y-%m-%d') - timedelta(days=back)
        return d.strftime('%Y-%m-%d')
    except (ValueError, TypeError):
        return str(as_of)


class CapitalFlowStrategy(BaseStrategy):
    id = "capital_flow"
    name = "资金流选股"
    version = "0.1.0"
    description = "资金流选股: 参数化模板, 因子逻辑由研究端注入"
    ptrade_template = "capital_flow.py.j2"
    # v3.23: 扫描/回测用股票池(真实可交易, 供 get_panel 取数)
    universe = ['600000.SH', '600004.SH', '600519.SH', '601318.SH', '600036.SH', '601166.SH', '600030.SH', '601888.SH']

    param_specs: List[ParamSpec] = [
        ParamSpec(key="flow_window", label="资金回看窗口", type="int", default=10, min=3, max=60, step=1, ptrade_var="flow_window"),
        ParamSpec(key="inflow_threshold", label="净流入阈值(万元)", type="float", default=5000, min=0, max=100000, step=500, ptrade_var="inflow_threshold"),
        ParamSpec(key="top_n", label="选股数", type="int", default=20, min=5, max=100, step=5, ptrade_var="top_n"),
    ] + list(COMMON_TRADING_PARAMS)

    # V4.0 M2-2: 因子研究支持 — 资金流主力净流入 + 动量回退
    factor_specs: List[FactorSpec] = [
        FactorSpec('capital_flow', 'capital', ['main_net_inflow'], {'lookback': 10, 'direction': 'high'}),
        FactorSpec('mom60', 'technical', ['close'], {'lookback': 60, 'direction': 'high'}),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        """资金流选股: 按主力净流入横截面打分 → TopN 等权持仓

        - 面板字段: main_net_inflow(moneyflow, 前向填充) + close
        - 每日横截面: 净流入 ≥ inflow_threshold 的个股按流入额排序取 TopN
        - 资金流字段缺失时回退动量(close)
        """
        start = _prev_trading_day(ctx.as_of, 60)
        panel = ctx.panel(["close", "main_net_inflow"], start=start, universe=self.universe)
        if panel is None or panel.empty:
            return pd.DataFrame()
        dates = sorted(panel.index.get_level_values(0).unique())
        symbols = sorted(panel.index.get_level_values(1).unique())
        top_n = int(ctx.params.get("top_n", 20))
        threshold = float(ctx.params.get("inflow_threshold", 5000))
        holdings = pd.DataFrame(0.0, index=dates, columns=symbols)
        has_flow = 'main_net_inflow' in panel.columns
        for d in dates:
            try:
                cross = panel.xs(d, level=0)
                if has_flow:
                    score = cross['main_net_inflow'].astype(float).dropna()
                else:
                    score = cross['close'].astype(float).dropna() if 'close' in cross.columns else pd.Series(dtype=float)
                if score.empty:
                    continue
                if has_flow:
                    score = score[score >= threshold]
                if score.empty:
                    continue
                picks = score.sort_values(ascending=False).head(top_n).index.tolist()
                if not picks:
                    continue
                w = 1.0 / len(picks)
                for s in picks:
                    holdings.at[d, s] = w
            except KeyError:
                continue
        return holdings
