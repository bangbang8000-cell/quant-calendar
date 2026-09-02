"""V5.0.3 T-5.0.32: 仓位建议测试 (TEST-PLAN 4.1 test_position_sizing.py)

Kelly 修正 / 风险平价 / 波动率目标 / 上限约束, 边界 (0 仓位/全仓)。
"""
import pytest

from risk import (kelly_fraction, half_kelly, quarter_kelly, vol_target_position,
                  risk_parity_weights, position_sizing)


class TestKelly:
    def test_kelly_math(self):
        # f = (b*p - q)/b; p=0.6, b=1 → (0.6-0.4)/1 = 0.2
        assert kelly_fraction(0.6, 1.0) == pytest.approx(0.2, abs=1e-9)

    def test_kelly_odds_2(self):
        # p=0.5, b=2 → (1-0.5)/2 = 0.25
        assert kelly_fraction(0.5, 2.0) == pytest.approx(0.25, abs=1e-9)

    def test_kelly_negative_floored(self):
        assert kelly_fraction(0.3, 1.0) == 0.0  # p<0.5, b=1 → 负 → 0

    def test_half_kelly(self):
        assert half_kelly(0.6, 1.0) == pytest.approx(0.1, abs=1e-9)

    def test_quarter_kelly(self):
        assert quarter_kelly(0.6, 1.0) == pytest.approx(0.05, abs=1e-9)

    def test_kelly_less_than_one(self):
        assert kelly_fraction(0.9, 2.0) < 1.0


class TestVolTarget:
    def test_vol_target_math(self):
        assert vol_target_position(0.20, 0.12) == pytest.approx(0.6, abs=1e-9)

    def test_vol_target_capped(self):
        assert vol_target_position(0.08, 0.12) == 1.0  # 低波动 → 上限 1.0 (无杠杆)

    def test_zero_vol(self):
        assert vol_target_position(0.0, 0.12) == 1.0


class TestRiskParity:
    def test_inverse_vol_weights(self):
        # vols {A:2, B:1} → 权重 ∝ {0.5, 1} → {1/3, 2/3}
        w = risk_parity_weights([2.0, 1.0])
        assert w[0] == pytest.approx(1 / 3, abs=1e-9)
        assert w[1] == pytest.approx(2 / 3, abs=1e-9)

    def test_weights_sum_one(self):
        w = risk_parity_weights([0.1, 0.2, 0.3])
        assert sum(w) == pytest.approx(1.0, abs=1e-9)

    def test_equal_vols_equal_weights(self):
        w = risk_parity_weights([0.2, 0.2, 0.2])
        assert w[0] == pytest.approx(w[1]) and w[1] == pytest.approx(w[2])

    def test_max_position_cap(self):
        w = risk_parity_weights([0.01, 0.5, 0.5], max_position=0.5)
        assert max(w) <= 0.5 + 1e-9

    def test_zero_vol_guard(self):
        w = risk_parity_weights([0.0, 1.0])
        assert all(x >= 0 for x in w)


class TestPositionSizing:
    def test_vol_target_method(self):
        vols = {"A": 0.2, "B": 0.1}
        out = position_sizing(vols, target_vol=0.12, method="vol_target", max_position=1.0)
        assert out["positions"]["A"] == pytest.approx(0.6, abs=1e-9)
        assert out["positions"]["B"] == pytest.approx(1.0, abs=1e-9)
        assert out["method"] == "vol_target"

    def test_risk_parity_method(self):
        vols = {"A": 2.0, "B": 1.0}
        out = position_sizing(vols, method="risk_parity", max_position=1.0)
        assert out["positions"]["A"] == pytest.approx(1 / 3, abs=1e-9)

    def test_equal_method(self):
        vols = {"A": 0.2, "B": 0.3, "C": 0.4}
        out = position_sizing(vols, method="equal", max_position=1.0)
        assert out["positions"]["A"] == pytest.approx(1 / 3, abs=1e-9)

    def test_each_position_le_cap(self):
        vols = {"A": 0.02, "B": 0.03}
        out = position_sizing(vols, target_vol=0.2, max_position=0.3, method="vol_target")
        assert all(v <= 0.3 + 1e-9 for v in out["positions"].values())

    def test_total_le_one(self):
        vols = {"A": 0.05, "B": 0.06, "C": 0.07, "D": 0.08, "E": 0.09}
        out = position_sizing(vols, target_vol=0.12, max_position=0.2, method="vol_target")
        assert out["total"] <= 1.0 + 1e-9

    def test_empty(self):
        out = position_sizing({})
        assert out["total"] == 0.0

    def test_single_full_position(self):
        out = position_sizing({"A": 0.05}, target_vol=0.12, max_position=1.0)
        assert out["positions"]["A"] == 1.0  # 波动低 → 满仓 (无上限)

    def test_total_metadata(self):
        out = position_sizing({"A": 0.2}, target_vol=0.12)
        assert "max_position" in out and out["max_position"] == 0.2
