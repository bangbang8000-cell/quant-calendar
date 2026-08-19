#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略注册表 (FR: 策略研究 P0)
内置策略注册 + 查询 + 列表(含 params_schema)
"""
import logging
from typing import Dict, List

from strategy_sdk.base import BaseStrategy
from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
from strategy_sdk.builtin.sector_rotation import SectorRotationStrategy
from strategy_sdk.builtin.index_enhance import IndexEnhanceStrategy
from strategy_sdk.builtin.capital_flow import CapitalFlowStrategy

logger = logging.getLogger(__name__)


class StrategyNotFoundError(Exception):
    pass


class StrategyRegistry:
    """内存注册表 —— 持久化(启停/参数覆盖)由 API 层写 strategy_defs 表"""

    def __init__(self):
        self._strategies: Dict[str, BaseStrategy] = {}
        for s in (MultiFactorStrategy(), SectorRotationStrategy(),
                  IndexEnhanceStrategy(), CapitalFlowStrategy()):
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
                "version": s.version,
                "description": s.description,
                "schema": s.params_schema(),
            }
            for s in self._strategies.values()
        ]


# 全局单例
registry = StrategyRegistry()
