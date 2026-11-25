#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略注册表 (FR: 策略研究 P0)
内置策略注册 + 查询 + 列表(含 params_schema)
"""
import logging
from typing import Dict, List

from strategy_sdk.base import BaseStrategy
from strategy_sdk.labels import label_of
from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
from strategy_sdk.builtin.sector_rotation import SectorRotationStrategy
from strategy_sdk.builtin.index_enhance import IndexEnhanceStrategy
from strategy_sdk.builtin.capital_flow import CapitalFlowStrategy
# v7.4: KHunter 移植形态策略(首批4个)
from strategy_sdk.builtin.golden_triangle import GoldenTriangleStrategy
from strategy_sdk.builtin.oversold_rebound import OversoldReboundStrategy
from strategy_sdk.builtin.main_uptrend_dip_buy import MainUptrendDipBuyStrategy
from strategy_sdk.builtin.leader import LeaderStrategy
# v7.12: 补齐 PRD 承诺的 12 个形态策略(第二批8个)
from strategy_sdk.builtin.limit_up_pullback import LimitUpPullbackStrategy
from strategy_sdk.builtin.morning_star import MorningStarStrategy
from strategy_sdk.builtin.multi_golden_cross import MultiGoldenCrossStrategy
from strategy_sdk.builtin.multi_party_cannon import MultiPartyCannonStrategy
from strategy_sdk.builtin.resistance_breakout import ResistanceBreakoutStrategy
from strategy_sdk.builtin.immortal_guidance import ImmortalGuidanceStrategy
from strategy_sdk.builtin.new_stock_drawdown import NewStockDrawdownStrategy
from strategy_sdk.builtin.strategy_2560 import Strategy2560

logger = logging.getLogger(__name__)


class StrategyNotFoundError(Exception):
    pass


class StrategyRegistry:
    """内存注册表 —— 持久化(启停/参数覆盖)由 API 层写 strategy_defs 表"""

    def __init__(self):
        self._strategies: Dict[str, BaseStrategy] = {}
        for s in (MultiFactorStrategy(), SectorRotationStrategy(),
                  IndexEnhanceStrategy(), CapitalFlowStrategy(),
                  # v7.4 形态策略(首批4个); 默认 show_in_calendar=False 由 governance 控制
                  GoldenTriangleStrategy(), OversoldReboundStrategy(),
                  MainUptrendDipBuyStrategy(), LeaderStrategy(),
                  # v7.12 形态策略(第二批8个) —— 补齐 PRD G1「12 个形态策略」
                  LimitUpPullbackStrategy(), MorningStarStrategy(),
                  MultiGoldenCrossStrategy(), MultiPartyCannonStrategy(),
                  ResistanceBreakoutStrategy(), ImmortalGuidanceStrategy(),
                  NewStockDrawdownStrategy(), Strategy2560()):
            self.register(s)

    def register(self, strategy: BaseStrategy) -> None:
        if not strategy.id:
            raise ValueError("策略必须声明 id")
        self._strategies[strategy.id] = strategy
        logger.info("注册策略: %s (%s v%s)", strategy.id, strategy.name, strategy.version)

    def get(self, sid: str) -> BaseStrategy:
        s = self._strategies.get(sid)
        if not s:
            raise StrategyNotFoundError(f"策略 {sid} 不存在")
        return s

    def list(self) -> List[dict]:
        return [
            {
                "id": s.id,
                "name": s.name,
                # v7.19 (FR-9): id 的中文名（策略名已是中文时同值），前端不用再维护一份映射
                "id_cn": label_of('sid', s.id, s.name),
                "version": s.version,
                "description": s.description,
                "schema": s.params_schema(),
                # V4.0 M2-3: 暴露因子声明, 前端因子下拉不再硬编码
                # v7.19 (FR-9): 同时给出 label / category_cn，避免前端渲染英文枚举
                "factor_specs": [
                    {"name": f.name, "category": f.category, "inputs": list(f.inputs),
                     "params": dict(f.params),
                     "label": getattr(f, 'label', '') or label_of('factor', f.name, ''),
                     "category_cn": getattr(f, 'category_cn', '') or label_of('category', f.category, '')}
                    for f in getattr(s, "factor_specs", []) or []
                ],
            }
            for s in self._strategies.values()
        ]


# 全局单例
registry = StrategyRegistry()
