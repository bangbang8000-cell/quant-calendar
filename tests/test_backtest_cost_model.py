"""T-5.1.21: 成本模型升级 (TDD) — 佣金/滑点/印花税可配 + 默认保守单边 0.1-0.15% + 成本×3 压力测试。

FR-5.1.2.1: A股成本四要素可配; 默认保守单边 0.1-0.15%; 成本×3 压力测试。
复用 cost_model.CostConfig/CostModel (V5.0.2 已有), 补充保守区间与压力断言。
"""
import pytest
from cost_model import (
    CostConfig, CostModel, DEFAULT_CONFIG, CONSERVATIVE_CONFIG,
)


class TestConservativeCostRange:
    def test_default_single_side_rate_in_range(self):
        """默认配置单边成本率 ∈ [0.10%, 0.15%] (DEV-PLAN T-5.1.21 目标)"""
        m = CostModel(DEFAULT_CONFIG)
        # 满换手单边成本率 = round_trip / 2
        single_side = m.round_trip_rate() / 2
        assert 0.001 <= single_side <= 0.0015

    def test_conservative_stricter_than_default(self):
        """保守预设比默认更严 (费率更高)"""
        m_def = CostModel(DEFAULT_CONFIG)
        m_con = CostModel(CONSERVATIVE_CONFIG)
        assert m_con.round_trip_rate() > m_def.round_trip_rate()
        assert m_con.turnover_rate() > m_def.turnover_rate()

    def test_components_independently_configurable(self):
        """佣金/印花税/滑点各自可独立配置 (notional 足够大避开 min_commission)"""
        cfg = CostConfig(commission_rate=0.0002, stamp_duty_rate=0.001,
                         slippage=0.0005, impact=0.0001)
        m = CostModel(cfg)
        t = m.compute_trade(500000, is_buy=False)
        assert t.commission == pytest.approx(100.0)
        assert t.stamp_duty == pytest.approx(500.0)
        assert t.slippage == pytest.approx(250.0)
        assert t.impact == pytest.approx(50.0)

    def test_sell_buy_cost_difference_only_stamp(self):
        """买卖成本差 = 印花税 (仅卖出)"""
        m = CostModel(CONSTANT_CFG)
        buy = m.compute_trade(10000, is_buy=True)
        sell = m.compute_trade(10000, is_buy=False)
        assert sell.total - buy.total == pytest.approx(10000 * CONSTANT_CFG.stamp_duty_rate)


CONSTANT_CFG = CostConfig(commission_rate=0.0003, stamp_duty_rate=0.0005,
                          slippage=0.0, impact=0.0, min_commission=0.0)


class TestCostStress3x:
    def test_3x_stress_round_trip(self):
        """成本×3 压力测试: 满换手单边成本率 = 3× 基础"""
        base = CostModel(DEFAULT_CONFIG)
        stress = CostModel(DEFAULT_CONFIG.scaled(3.0))
        assert stress.round_trip_rate() == pytest.approx(3 * base.round_trip_rate())

    def test_3x_stress_erodes_net_return(self):
        """低成本策略毛利在 3× 成本下显著侵蚀"""
        m1 = CostModel(DEFAULT_CONFIG)
        m3 = CostModel(DEFAULT_CONFIG.scaled(3.0))
        # 低换手高毛利: 1x 下仍盈利, 3x 下大幅缩水
        gross = 0.003  # 单日 0.3% 毛利
        turnover = 0.3
        net1 = gross - turnover * m1.turnover_rate()
        net3 = gross - turnover * m3.turnover_rate()
        assert net1 > net3
        assert net3 < net1 * 0.8  # 3x 成本后净利显著侵蚀 (>20%)

    def test_3x_stress_config_explicit(self):
        """3× 压力可用 scaled(3.0) 显式构造"""
        c3 = DEFAULT_CONFIG.scaled(3.0)
        assert c3.commission_rate == pytest.approx(DEFAULT_CONFIG.commission_rate * 3)
        assert c3.stamp_duty_rate == pytest.approx(DEFAULT_CONFIG.stamp_duty_rate * 3)
        assert c3.slippage == pytest.approx(DEFAULT_CONFIG.slippage * 3)
