#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2 T-5.2.1: 成本模型 2.0 (cost_model.py) — 可插拔

A 股交易成本四要素: 印花税(仅卖出) / 佣金(双边) / 滑点 / 冲击成本。
- CostConfig: 可插拔配置 (default 常规 / conservative 保守), scaled(factor) 成本敏感度缩放
- CostModel: compute_trade(notional, is_buy) 单笔; turnover_rate() 换手成本率; round_trip_rate() 满换手单边成本
- 换手率 T 成本 ≈ T × (佣金+滑点+冲击 + 印花税/2)  [买卖各半近似]
- 接入: strategy_sdk.backtest_holdings / backtest.BacktestEngine (cost_model 参数, 缺省兼容旧费率)

测试: tests/test_cost_model.py (含成本敏感度, PTrade 对拍语义)。
"""
from dataclasses import dataclass


@dataclass
class CostConfig:
    """成本配置 (可插拔)。"""
    commission_rate: float = 0.0003   # 佣金 万3 (双边)
    stamp_duty_rate: float = 0.0005   # 印花税 万5 (仅卖出)
    slippage: float = 0.001           # 滑点 0.1%
    impact: float = 0.0005            # 冲击成本 0.05%
    min_commission: float = 5.0       # 单笔最低佣金 (元)

    def scaled(self, factor: float) -> "CostConfig":
        """全部费率 × factor (成本敏感度分析用)。"""
        return CostConfig(
            commission_rate=self.commission_rate * factor,
            stamp_duty_rate=self.stamp_duty_rate * factor,
            slippage=self.slippage * factor,
            impact=self.impact * factor,
            min_commission=self.min_commission,
        )


DEFAULT_CONFIG = CostConfig()
CONSERVATIVE_CONFIG = CostConfig(commission_rate=0.0005, stamp_duty_rate=0.0005,
                                 slippage=0.0015, impact=0.001, min_commission=5.0)


@dataclass
class TradeCost:
    """单笔交易成本分解 (金额 + 相对成交额费率)。"""
    commission: float = 0.0
    stamp_duty: float = 0.0
    slippage: float = 0.0
    impact: float = 0.0
    notional: float = 0.0

    @property
    def total(self) -> float:
        return self.commission + self.stamp_duty + self.slippage + self.impact

    @property
    def total_rate(self) -> float:
        return self.total / self.notional if self.notional > 0 else 0.0


class CostModel:
    """可插拔成本模型: 单笔 / 换手 / 满换手单边成本率。"""

    def __init__(self, config: CostConfig = None):
        self.config = config if config is not None else DEFAULT_CONFIG

    def compute_trade(self, notional: float, is_buy: bool) -> TradeCost:
        """单笔交易成本 (notional=成交额, is_buy=是否买入)。"""
        notional = max(0.0, float(notional or 0))
        commission = max(notional * self.config.commission_rate,
                         self.config.min_commission if notional > 0 else 0.0)
        stamp_duty = notional * self.config.stamp_duty_rate if not is_buy else 0.0
        slippage = notional * self.config.slippage
        impact = notional * self.config.impact
        return TradeCost(commission=commission, stamp_duty=stamp_duty,
                         slippage=slippage, impact=impact, notional=notional)

    def turnover_rate(self) -> float:
        """单位换手 (|权重变化| 之和=1) 的成本率: 佣金+滑点+冲击 + 印花税/2 (买卖各半)。"""
        c = self.config
        return c.commission_rate + c.slippage + c.impact + c.stamp_duty_rate / 2

    def round_trip_rate(self) -> float:
        """100% 满换手单边成本率: 2×佣金 + 印花税 + 2×滑点 + 2×冲击。"""
        c = self.config
        return (2 * c.commission_rate + c.stamp_duty_rate
                + 2 * c.slippage + 2 * c.impact)

    def sensitivity(self, factors=(1.0, 2.0, 3.0)) -> dict:
        """成本敏感度: {factor: 满换手单边成本率 × factor}。"""
        base = self.round_trip_rate()
        return {float(f): base * float(f) for f in factors}
