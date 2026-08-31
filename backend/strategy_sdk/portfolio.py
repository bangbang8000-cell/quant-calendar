#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
组合构建器 (FR: 策略研究 P0)
两层打分抽象: 行业层(可选) + 个股层 → 持仓矩阵
TopNEqualWeight       个股 top N 等权
SectorTopKThenScore   行业层选 K + 行业内打分
IndexEnhanced         基准成分约束 + 因子增强
"""
import logging
from abc import ABC, abstractmethod
from typing import Dict, List, Optional, Set

import pandas as pd

logger = logging.getLogger(__name__)


class PortfolioBuilder(ABC):
    """组合构建抽象: 打分矩阵 → 持仓矩阵"""

    @abstractmethod
    def build(self, scores: pd.DataFrame, ctx) -> pd.DataFrame:
        """
        Args:
            scores: index=日期, columns=股票代码(.SH/.SZ), 值=因子分(高=优选)
            ctx: StrategyContext 或 None(测试)
        Returns:
            holdings: index=日期, columns=同 scores, 值=目标权重(行和=1 或 0)
        """
        ...


class TopNEqualWeight(PortfolioBuilder):
    """个股打分 top N 等权持有"""

    def __init__(self, top_n: int = 20):
        self.top_n = max(1, int(top_n))

    def build(self, scores: pd.DataFrame, ctx) -> pd.DataFrame:
        holdings = pd.DataFrame(0.0, index=scores.index, columns=scores.columns)
        for date, row in scores.iterrows():
            valid = row.dropna()
            if valid.empty:
                continue
            picks = valid.sort_values(ascending=False).head(self.top_n).index.tolist()
            if not picks:
                continue
            weight = 1.0 / len(picks)
            for s in picks:
                holdings.at[date, s] = weight
        return holdings


class SectorTopKThenScore(PortfolioBuilder):
    """行业轮动: 行业层打分选 K 个行业, 每行业选 top stock_per_sector"""

    def __init__(self, sector_k: int = 5, stock_per_sector: int = 4,
                 industry_map: Optional[Dict[str, str]] = None):
        self.sector_k = max(1, int(sector_k))
        self.stock_per_sector = max(1, int(stock_per_sector))
        self.industry_map = industry_map or {}   # {股票代码: 行业名}

    def build(self, scores: pd.DataFrame, ctx) -> pd.DataFrame:
        holdings = pd.DataFrame(0.0, index=scores.index, columns=scores.columns)
        for date, row in scores.iterrows():
            valid = row.dropna()
            if valid.empty:
                continue
            # 行业层: 每个行业内最高分股票的分数代表行业分
            industry_score: Dict[str, float] = {}
            industry_best: Dict[str, str] = {}
            for stock, score in valid.items():
                ind = self.industry_map.get(stock, "其他")
                if score > industry_score.get(ind, -1e18):
                    industry_score[ind] = score
                    industry_best[ind] = stock
            top_industries = sorted(industry_score, key=industry_score.get, reverse=True)[:self.sector_k]
            # 个股层: 在入选行业内选 top stock_per_sector
            picks: List[str] = []
            for ind in top_industries:
                in_sector = {s: v for s, v in valid.items() if self.industry_map.get(s, "其他") == ind}
                ranked = sorted(in_sector, key=in_sector.get, reverse=True)[:self.stock_per_sector]
                picks.extend(ranked)
            if not picks:
                continue
            weight = 1.0 / len(picks)
            for s in picks:
                holdings.at[date, s] = weight
        return holdings


class IndexEnhanced(PortfolioBuilder):
    """指数增强: 仅在基准成分内打分选股(行业/市值中性由因子层负责)"""

    def __init__(self, benchmark_universe: Optional[Set[str]] = None, top_n: int = 50,
                 industry_neutral: bool = True):
        self.benchmark_universe = benchmark_universe or set()
        self.top_n = max(1, int(top_n))
        self.industry_neutral = industry_neutral

    def build(self, scores: pd.DataFrame, ctx) -> pd.DataFrame:
        # 约束: 仅基准成分可被选中
        cols = [c for c in scores.columns if not self.benchmark_universe or c in self.benchmark_universe]
        if not cols:
            return pd.DataFrame(0.0, index=scores.index, columns=scores.columns)
        sub = scores[cols]
        holdings = pd.DataFrame(0.0, index=scores.index, columns=scores.columns)
        for date, row in sub.iterrows():
            valid = row.dropna()
            if valid.empty:
                continue
            picks = valid.sort_values(ascending=False).head(self.top_n).index.tolist()
            if not picks:
                continue
            weight = 1.0 / len(picks)
            for s in picks:
                holdings.at[date, s] = weight
        return holdings
