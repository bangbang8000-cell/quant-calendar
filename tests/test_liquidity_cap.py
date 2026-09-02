"""T-5.1.35: 容量/流动性提示 (liquidity_cap) — 小票成交量 1% 参与度限仓。

FR-5.1.3.5: 日成交额 × 1% 参与度限仓; 低流动性标的降权并提示。
"""
import pytest
from portfolio_builder import (
    liquidity_cap_weights, liquidity_report, PARTICIPATION_RATE,
)


class TestLiquidityCap:
    def test_cap_basic(self):
        # 权重目标 0.5, 日成交额 10 万 × 1% 参与度 / 总资金 100 万 = 0.001 → 限仓 0.001
        w = liquidity_cap_weights({'A': 0.5}, {'A': 100000}, total_capital=1000000)
        assert w['A'] == pytest.approx(0.001)

    def test_no_cap_when_plenty(self):
        # 大票: 成交额巨大 → 不限仓
        w = liquidity_cap_weights({'A': 0.5}, {'A': 10**9}, total_capital=1000000)
        assert w['A'] == pytest.approx(0.5)

    def test_missing_volume_kept(self):
        # 缺失成交量 → 保持原权重 (无法判断则不惩罚)
        w = liquidity_cap_weights({'A': 0.5}, {}, total_capital=1000000)
        assert w['A'] == pytest.approx(0.5)

    def test_zero_volume_capped_to_zero(self):
        w = liquidity_cap_weights({'A': 0.5}, {'A': 0}, total_capital=1000000)
        assert w['A'] == pytest.approx(0.0)


class TestParticipationRate:
    def test_rate_constant(self):
        assert 0.0 < PARTICIPATION_RATE <= 0.05  # 1% 参与度默认


class TestLiquidityReport:
    def test_report_structure(self):
        rep = liquidity_report({'A': 0.5, 'B': 0.5}, {'A': 10**9, 'B': 100000},
                               total_capital=1000000)
        assert 'weights' in rep and 'capped' in rep and 'notes' in rep
        assert rep['weights']['A'] == pytest.approx(0.5)
        assert rep['weights']['B'] == pytest.approx(0.001)  # 受限 (10万×1%/100万)

    def test_report_notes_low_liquidity(self):
        rep = liquidity_report({'B': 0.5}, {'B': 100000}, total_capital=1000000)
        assert len(rep['notes']) >= 1
        assert any('流动性' in n or '限仓' in n for n in rep['notes'])

    def test_report_no_notes_when_ok(self):
        rep = liquidity_report({'A': 0.5}, {'A': 10**9}, total_capital=1000000)
        assert rep['notes'] == []
