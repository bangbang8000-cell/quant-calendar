"""V5.0.2 T-5.0.21: 成本模型 2.0 测试 (TEST-PLAN 3.1 test_cost_model.py)

印花税(卖出)/佣金(双边)/滑点/冲击成本 + 可插拔配置 + 成本敏感度。
"""
import pytest

from cost_model import (CostConfig, CostModel, TradeCost, DEFAULT_CONFIG,
                        CONSERVATIVE_CONFIG)


def _model(**kw):
    return CostModel(CostConfig(**kw) if kw else None)


class TestCostConfig:
    def test_default_presets(self):
        assert DEFAULT_CONFIG.commission_rate > 0
        assert DEFAULT_CONFIG.stamp_duty_rate > 0
        assert DEFAULT_CONFIG.slippage > 0
        assert DEFAULT_CONFIG.impact >= 0

    def test_conservative_gt_default(self):
        """保守档成本必须严格高于默认档 (单边成本率)"""
        assert CONSERVATIVE_CONFIG.commission_rate >= DEFAULT_CONFIG.commission_rate
        assert CONSERVATIVE_CONFIG.slippage >= DEFAULT_CONFIG.slippage
        assert CONSERVATIVE_CONFIG.impact >= DEFAULT_CONFIG.impact


class TestTradeCost:
    def test_buy_commission(self):
        c = CostModel().compute_trade(100000, is_buy=True)
        assert c.commission == pytest.approx(30.0)  # 10万 × 万3

    def test_sell_stamp_duty(self):
        c = CostModel().compute_trade(100000, is_buy=False)
        assert c.stamp_duty == pytest.approx(50.0)  # 10万 × 万5

    def test_buy_no_stamp(self):
        c = CostModel().compute_trade(100000, is_buy=True)
        assert c.stamp_duty == 0.0

    def test_min_commission_floor(self):
        c = CostModel().compute_trade(1000, is_buy=True)  # 1000×万3=0.3 < 5
        assert c.commission == 5.0

    def test_slippage_and_impact(self):
        c = CostModel().compute_trade(100000, is_buy=True)
        assert c.slippage == pytest.approx(100.0)   # 千1
        assert c.impact == pytest.approx(50.0)      # 万5

    def test_total_decomposition(self):
        c = CostModel().compute_trade(100000, is_buy=False)
        assert c.total == pytest.approx(
            c.commission + c.stamp_duty + c.slippage + c.impact)

    def test_total_rate(self):
        c = CostModel().compute_trade(100000, is_buy=True)
        assert c.total_rate == pytest.approx(c.total / 100000)


class TestCostModel:
    def test_turnover_rate(self):
        """换手率 T 的成本率 = 佣金+滑点+冲击 + 印花税/2 (买卖各半)"""
        m = CostModel(DEFAULT_CONFIG)
        expect = (DEFAULT_CONFIG.commission_rate + DEFAULT_CONFIG.slippage
                  + DEFAULT_CONFIG.impact + DEFAULT_CONFIG.stamp_duty_rate / 2)
        assert m.turnover_rate() == pytest.approx(expect)

    def test_round_trip_rate(self):
        """100% 换手单边成本率 = 2×佣金 + 印花税 + 2×滑点 + 2×冲击"""
        m = CostModel(DEFAULT_CONFIG)
        expect = (2 * DEFAULT_CONFIG.commission_rate + DEFAULT_CONFIG.stamp_duty_rate
                  + 2 * DEFAULT_CONFIG.slippage + 2 * DEFAULT_CONFIG.impact)
        assert m.round_trip_rate() == pytest.approx(expect)

    def test_pluggable_custom_config(self):
        m = CostModel(CostConfig(commission_rate=0.001, stamp_duty_rate=0.001,
                                 slippage=0.002, impact=0.0))
        assert m.config.commission_rate == 0.001

    def test_sell_cost_gt_buy_cost(self):
        """含印花税: 卖出成本 > 买入成本"""
        m = CostModel()
        assert m.compute_trade(100000, False).total > m.compute_trade(100000, True).total

    def test_conservative_turnover_rate_gt_default(self):
        assert CostModel(CONSERVATIVE_CONFIG).turnover_rate() > CostModel(DEFAULT_CONFIG).turnover_rate()


class TestSensitivity:
    def test_sensitivity_scales_round_trip(self):
        m = CostModel(DEFAULT_CONFIG)
        base = m.round_trip_rate()
        f3 = m.sensitivity(factors=(1.0, 3.0))
        assert f3[3.0] == pytest.approx(base * 3)

    def test_sensitivity_keys(self):
        m = CostModel()
        s = m.sensitivity()
        assert sorted(s) == [1.0, 2.0, 3.0]

    def test_net_return_drops_monotonically_with_cost(self):
        """成本翻倍 → 净收益单调下降 (成本敏感度核心断言)"""
        gross = [0.001] * 60  # 60 日各 0.1%
        turnover = 0.1  # 每日 10% 换手
        nets = []
        for f in (1.0, 2.0, 3.0):
            m = CostModel(DEFAULT_CONFIG.scaled(f))
            cost_per_day = turnover * m.turnover_rate()
            nets.append(sum((r - cost_per_day) for r in gross))
        assert nets[0] > nets[1] > nets[2]

    def test_profit_turns_loss_at_high_cost(self):
        """低利润策略: 成本翻 3 倍后由盈转亏 (PTrade 对拍语义)"""
        m1 = CostModel(DEFAULT_CONFIG)
        m3 = CostModel(DEFAULT_CONFIG.scaled(3.0))
        gross_ret = 0.002  # 单日 0.2% 毛利 (覆盖 1x 成本, 不覆盖 3x)
        turnover = 0.5
        net1 = gross_ret - turnover * m1.turnover_rate()
        net3 = gross_ret - turnover * m3.turnover_rate()
        assert net1 > 0 > net3


class TestIntegration:
    def test_sdk_backtest_net_lt_gross(self):
        """strategy_sdk.backtest_holdings: 含成本净收益 < 无成本毛收益"""
        import pandas as pd
        import numpy as np
        from strategy_sdk.backtest import backtest_holdings
        dates = ["20260101", "20260102", "20260103", "20260104", "20260105"]
        # 构造逐日换手: A 1→0.5→0→0.5→1, B 反向 → 相邻日权重变化
        h = pd.DataFrame({"A": [1.0, 0.5, 0.0, 0.5, 1.0],
                          "B": [0.0, 0.5, 1.0, 0.5, 0.0]}, index=dates)
        r = pd.DataFrame({c: np.full(len(dates), 0.01) for c in ["A", "B"]}, index=dates)
        # 无成本 (全部成本置 0)
        zero = CostConfig(commission_rate=0.0, stamp_duty_rate=0.0, slippage=0.0,
                          impact=0.0, min_commission=0.0)
        gross = backtest_holdings(h, r, start_date=dates[0], end_date=dates[-1],
                                  cost_model=CostModel(zero))
        net = backtest_holdings(h, r, start_date=dates[0], end_date=dates[-1],
                                cost_model=CostModel(DEFAULT_CONFIG))
        assert net["total_return"] < gross["total_return"]

    def test_sdk_backtest_custom_cost_pluggable(self):
        """可插拔: 传入自定义成本模型不破坏回测"""
        import pandas as pd
        import numpy as np
        from strategy_sdk.backtest import backtest_holdings
        dates = ["20260101", "20260102", "20260103"]
        h = pd.DataFrame({"A": [1.0, 1.0, 1.0]}, index=dates)
        r = pd.DataFrame({"A": [0.01, 0.01, 0.01]}, index=dates)
        res = backtest_holdings(h, r, cost_model=CostModel(CONSERVATIVE_CONFIG))
        assert res["success"] is True
