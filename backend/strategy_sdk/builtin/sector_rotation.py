#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
行业轮动策略 (内置策略)
"""
import logging
from typing import List

import pandas as pd

from strategy_sdk.base import COMMON_TRADING_PARAMS, BaseStrategy, ParamSpec, StrategyContext, FactorSpec

logger = logging.getLogger(__name__)


def _prev_trading_day(as_of: str, back: int) -> str:
    """回退 back 个自然日(近似交易日)的日期 YYYY-MM-DD, 用于取数窗口起点"""
    from datetime import datetime, timedelta
    try:
        d = datetime.strptime(str(as_of), '%Y-%m-%d') - timedelta(days=back)
        return d.strftime('%Y-%m-%d')
    except (ValueError, TypeError):
        return str(as_of)


class SectorRotationStrategy(BaseStrategy):
    id = "sector_rotation"
    name = "行业轮动"
    version = "0.1.0"
    description = "行业轮动: 参数化模板, 因子逻辑由研究端注入"
    ptrade_template = "sector_rotation.py.j2"
    # v3.23: 扫描/回测用股票池(真实可交易, 供 get_panel 取数)
    universe = ['600000.SH', '600004.SH', '600519.SH', '601318.SH', '600036.SH', '601166.SH', '600030.SH', '601888.SH']

    param_specs: List[ParamSpec] = [
        ParamSpec(key="sector_k", label="行业数K", type="int", default=5, min=2, max=20, step=1, ptrade_var="sector_k"),
        ParamSpec(key="stock_per_sector", label="每行业选股数", type="int", default=4, min=1, max=20, step=1, ptrade_var="stock_per_sector"),
        ParamSpec(key="momentum_window", label="动量回看窗口", type="int", default=60, min=10, max=250, step=10, ptrade_var="momentum_window"),
    ] + list(COMMON_TRADING_PARAMS)

    # V4.0 M2-2: 因子研究支持 — 行业轮动核心因子(动量), IC/分层端点可研究
    factor_specs: List[FactorSpec] = [
        FactorSpec('mom60', 'technical', ['close'], {'lookback': 60, 'direction': 'high'}),
    ]

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        """行业轮动: 按行业动量打分 → TopK 行业 → 行业内动量 TopN → 等权持仓

        - 面板字段: close(动量)
        - 行业粗分: 按股票代码前缀(银行/消费/科技/其他)
        - 每日: 每行业平均动量(最近 close 相对基准涨幅)排序 → Top sector_k 行业
          → 每行业取 momentum 最强的 stock_per_sector 只 → 等权
        """
        start = _prev_trading_day(ctx.as_of, int(ctx.params.get("momentum_window", 60)))
        panel = ctx.panel(["close"], start=start, universe=self.universe)
        if panel is None or panel.empty:
            return pd.DataFrame()
        dates = sorted(panel.index.get_level_values(0).unique())
        symbols = sorted(panel.index.get_level_values(1).unique())
        sector_k = int(ctx.params.get("sector_k", 5))
        per_sector = int(ctx.params.get("stock_per_sector", 4))
        holdings = pd.DataFrame(0.0, index=dates, columns=symbols)

        def _industry(code: str) -> str:
            if code.startswith(('601398', '601939', '601288', '600000', '600036', '600016', '601166')):
                return '银行'
            if code.startswith(('600519', '600887', '601888', '600809', '603288', '600009', '601318')):
                return '消费/金融'
            if code.startswith(('000', '002', '300', '301')):
                return '科技成长'
            return '大盘蓝筹'

        for d in dates:
            try:
                cross = panel.xs(d, level=0)['close'].astype(float).dropna()
                if len(cross) < 2:
                    continue
                # 行业动量 = 行业平均 close(越高代表近期走强, 简化为日度横截面代理)
                ind_map = {s: _industry(s) for s in cross.index}
                ind_score = {}
                for ind in set(ind_map.values()):
                    members = [s for s in cross.index if ind_map[s] == ind]
                    ind_score[ind] = cross[members].mean()
                top_inds = sorted(ind_score.items(), key=lambda kv: kv[1], reverse=True)[:sector_k]
                picks = []
                for ind, _ in top_inds:
                    members = [s for s in cross.index if ind_map[s] == ind]
                    sub = cross[members].sort_values(ascending=False).head(per_sector)
                    picks.extend(sub.index.tolist())
                if not picks:
                    continue
                w = 1.0 / len(picks)
                for s in picks:
                    holdings.at[d, s] = w
            except KeyError:
                continue
        return holdings
