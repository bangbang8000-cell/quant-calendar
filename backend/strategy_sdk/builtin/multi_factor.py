#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多因子选股策略 (内置策略 #1)
五维因子(估值/基本面/资金面/情绪面/技术面)合成打分 → TopN 等权
v0.2.0 (P1-F8): 信号层用真实横截面因子合成(替代 v0.1.0 动量骨架)
"""
import logging
from typing import List

import pandas as pd

from strategy_sdk.base import BaseStrategy, FactorSpec, ParamSpec, StrategyContext
from strategy_sdk.factor_engine import compute_cross_section_factors, synthesize_score

logger = logging.getLogger(__name__)


class MultiFactorStrategy(BaseStrategy):
    id = 'multi_factor'
    name = '多因子选股'
    version = '0.2.0'
    description = '五维因子(估值/基本面/资金面/情绪面/技术面)合成打分, 选 TopN 等权持有'
    ptrade_template = 'multi_factor.py.j2'
    # 默认研究股票池(真实取数时仅这些股票被拉取; 新浪源可用的代表性标的)
    universe = ['600000.SH', '600004.SH', '600519.SH', '601318.SH',
                '600036.SH', '601166.SH', '600030.SH', '601888.SH']

    param_specs: List[ParamSpec] = [
        ParamSpec(key='top_n', label='选股数', type='int', default=20,
                  min=5, max=100, step=5, ptrade_var='top_n',
                  description='每期持有的股票数量'),
        ParamSpec(key='benchmark', label='基准指数', type='enum',
                  default='000300.SH', options=['000300.SH', '000905.SH', '000852.SH'],
                  ptrade_var='benchmark', description='回测与业绩比较基准'),
        ParamSpec(key='rebalance_cycle', label='调仓周期(交易日)', type='int',
                  default=5, min=1, max=60, step=1, ptrade_var='rebalance_cycle',
                  description='每 N 个交易日调仓一次'),
        ParamSpec(key='st_filter', label='剔除ST', type='bool', default=True,
                  ptrade_var='st_filter', description='是否剔除 ST/*ST 股票'),
    ]

    factor_specs: List[FactorSpec] = [
        # 估值面 (低更好)
        FactorSpec('pe', 'valuation', ['pe'], {'direction': 'low'}),
        FactorSpec('pb', 'valuation', ['pb'], {'direction': 'low'}),
        # 技术面 (动量高更好, 剔除最近5日防反转)
        FactorSpec('mom20', 'technical', ['close'], {'lookback': 20, 'skip': 5, 'direction': 'high'}),
        # 情绪面 (换手率高更好, 活跃度)
        FactorSpec('turnover20', 'sentiment', ['volume', 'float_mv'], {'lookback': 20, 'direction': 'high'}),
        # 资金面 (主力净流入高更好)
        FactorSpec('capital_flow', 'capital', ['main_net_inflow'], {'lookback': 10, 'direction': 'high'}),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        """返回持仓矩阵: index=日期, columns=股票代码, 值=目标权重(等权)"""
        # 取面板(自动限制 end=as_of, 防前视); 字段 = 五维因子所需
        fields = _all_factor_inputs(self.factor_specs)
        start = _prev_trading_day(ctx.as_of, 60)
        panel = ctx.panel(fields, start=start, universe=getattr(ctx, 'universe', None) or self.universe)
        if panel is None or panel.empty:
            return pd.DataFrame()
        # 1. 横截面因子计算
        factor_values = compute_cross_section_factors(panel, self.factor_specs)
        if not factor_values:
            return pd.DataFrame()
        # 2. 等权合成打分 (MAD去极值 → z标准化 → 叠加)
        scores = synthesize_score(factor_values, self.factor_specs)
        if scores.empty:
            return pd.DataFrame()
        # 3. TopN 等权持仓
        top_n = int(ctx.params.get('top_n', 20))
        holdings = pd.DataFrame(0.0, index=scores.index, columns=scores.columns)
        for d, row in scores.iterrows():
            valid = row.dropna().sort_values(ascending=False)
            if valid.empty:
                continue
            picks = valid.head(top_n).index.tolist()
            if not picks:
                continue
            w = 1.0 / len(picks)
            for s in picks:
                holdings.at[d, s] = w
        return holdings


def _all_factor_inputs(specs: List[FactorSpec]) -> List[str]:
    """汇总所有因子所需面板字段"""
    fields = []
    for s in specs:
        for f in (s.inputs or []):
            if f not in fields:
                fields.append(f)
    return fields


def _prev_trading_day(as_of: str, back: int) -> str:
    """简化: 返回 as_of 往前 back 个自然日(占位, 真实交易日历后续接入)"""
    from datetime import datetime, timedelta
    d = datetime.strptime(as_of, '%Y-%m-%d') - timedelta(days=back)
    return d.strftime('%Y-%m-%d')
