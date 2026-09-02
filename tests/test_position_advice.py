"""T-5.1.34: 仓位建议 (position_advice) — Kelly/风险平价参考 + 「参考非投资建议」标注。

FR-5.1.3.4: 仓位建议仅供研究参考, 标注「参考非投资建议」合规声明。
"""
import pytest
from risk import position_advice, position_advice_kelly, DISCLAIMER


class TestPositionAdvice:
    def test_advice_structure(self):
        a = position_advice({'A': 0.2, 'B': 0.3, 'C': 0.4}, method='risk_parity')
        assert 'positions' in a
        assert 'method' in a
        assert 'disclaimer' in a

    def test_disclaimer_present(self):
        a = position_advice({'A': 0.2}, method='vol_target')
        assert '参考非投资建议' in a['disclaimer'] or '非投资建议' in a['disclaimer']

    def test_disclaimer_constant(self):
        assert DISCLAIMER
        assert '非投资建议' in DISCLAIMER

    def test_advice_passes_through_sizing(self):
        a = position_advice({'A': 0.2, 'B': 0.3}, method='equal')
        assert a['positions'] == {'A': pytest.approx(0.2), 'B': pytest.approx(0.2)}
        assert a['total'] == pytest.approx(0.4)

    def test_kelly_advice(self):
        # kelly 输入: win_rate + odds; 默认半 Kelly
        # full kelly = (1.5*0.6-0.4)/1.5 = 0.3333, half = 0.1667
        a = position_advice_kelly(win_rate=0.6, odds=1.5)
        assert 'kelly' in a
        assert a['kelly'] == pytest.approx(0.1667, abs=1e-3)
        assert 'disclaimer' in a

    def test_kelly_full_fraction(self):
        a = position_advice_kelly(win_rate=0.6, odds=1.5, fraction='full')
        assert a['kelly'] == pytest.approx(0.3333, abs=1e-3)
