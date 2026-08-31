#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
指数增强策略 (内置策略)
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


class IndexEnhanceStrategy(BaseStrategy):
    id = "index_enhance"
    name = "指数增强"
    version = "0.1.0"
    description = "指数增强: 参数化模板, 因子逻辑由研究端注入"
    ptrade_template = "index_enhance.py.j2"
    # v3.23: 扫描/回测用股票池(真实可交易, 供 get_panel 取数)
    universe = ['600000.SH', '600004.SH', '600519.SH', '601318.SH', '600036.SH', '601166.SH', '600030.SH', '601888.SH']

    param_specs: List[ParamSpec] = [
        ParamSpec(key="benchmark", label="基准指数", type="enum", default="000300.SH", options=["000300.SH", "000905.SH", "000852.SH"], ptrade_var="benchmark"),
        ParamSpec(key="excess_target", label="超额收益目标", type="float", default=0.05, min=0.0, max=0.5, step=0.01, ptrade_var="excess_target"),
        ParamSpec(key="tracking_error_max", label="跟踪误差上限", type="float", default=0.05, min=0.01, max=0.2, step=0.01, ptrade_var="tracking_error_max"),
        ParamSpec(key="industry_neutral", label="行业中性", type="bool", default=True, ptrade_var="industry_neutral"),
    ] + list(COMMON_TRADING_PARAMS)

    # V4.0 M2-2: 因子研究支持 — 指数增强动量+估值双因子
    factor_specs: List[FactorSpec] = [
        FactorSpec('mom60', 'technical', ['close'], {'lookback': 60, 'direction': 'high'}),
        FactorSpec('pe', 'valuation', ['pe'], {'direction': 'low'}),
        FactorSpec('pb', 'valuation', ['pb'], {'direction': 'low'}),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        """指数增强: 动量 + 估值双因子合成打分 → 行业中性下 TopN 等权持仓

        - 面板字段: close(动量) + pe/pb(估值, 前向填充)
        - 每日横截面: 动量与估值各自横截面 z 分数相加 → 综合得分
        - 行业中性(industry_neutral): 按股票代码前缀粗分行业, 每行业取相近数量
        - 跟踪误差上限: 用 top_n 比例控制主动偏离(tracking_error_max 越小持股越多)
        """
        start = _prev_trading_day(ctx.as_of, 60)
        panel = ctx.panel(["close", "pe", "pb"], start=start, universe=self.universe)
        if panel is None or panel.empty:
            return pd.DataFrame()
        dates = sorted(panel.index.get_level_values(0).unique())
        symbols = sorted(panel.index.get_level_values(1).unique())
        top_n = int(ctx.params.get("top_n", 20))
        te_max = float(ctx.params.get("tracking_error_max", 0.05))
        industry_neutral = bool(ctx.params.get("industry_neutral", True))
        # 跟踪误差上限 → 持仓数量下限(越小越分散): n >= max(5, 1/te_max * 2)
        min_hold = max(5, int(round(1.0 / max(te_max, 0.02) * 2)))
        holdings = pd.DataFrame(0.0, index=dates, columns=symbols)

        def _z(series: pd.Series) -> pd.Series:
            s = series.dropna().astype(float)
            if len(s) < 2:
                return pd.Series(dtype=float)
            m, sd = s.mean(), s.std()
            if sd == 0 or sd != sd:
                return pd.Series(0.0, index=s.index)
            return (s - m) / sd

        def _industry(code: str) -> str:
            # 粗分行业: 6开头银行/金融, 0/3电子制造, 60消费, 其他
            if code.startswith(('600000', '601', '600036', '600016', '601398')):
                return 'finance'
            if code.startswith(('60', '6018')):
                return 'consumer'
            if code.startswith(('00', '30', '300')):
                return 'tech'
            return 'other'

        for d in dates:
            try:
                cross = panel.xs(d, level=0)
                mom = pd.Series(dtype=float)
                if 'close' in cross.columns:
                    mom = _z(cross['close'])
                val = pd.Series(dtype=float)
                if 'pe' in cross.columns:
                    pe = _z(cross['pe'])
                    if not pe.empty:
                        val = -pe  # 低 PE 得分高
                score = pd.concat([mom, val], axis=1).sum(axis=1).dropna()
                if score.empty:
                    continue
                if industry_neutral:
                    # 行业中性: 每行业按得分占比选股, 总量 top_n
                    per = max(1, top_n // len({_industry(s) for s in score.index}))
                    picks = []
                    by_ind = {}
                    for s in score.index:
                        by_ind.setdefault(_industry(s), []).append(s)
                    for ind, members in by_ind.items():
                        sub = score[members].sort_values(ascending=False).head(per)
                        picks.extend(sub.index.tolist())
                    picks = picks[:max(top_n, min_hold)]
                else:
                    picks = score.sort_values(ascending=False).head(max(top_n, min_hold)).index.tolist()
                if not picks:
                    continue
                w = 1.0 / len(picks)
                for s in picks:
                    holdings.at[d, s] = w
            except KeyError:
                continue
        return holdings
