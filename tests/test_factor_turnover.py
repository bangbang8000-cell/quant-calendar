"""T-5.1.13: 换手率分析 (factor_ic) — 分层/组合年化换手 + 成本敏感性。

FR-5.1.1.3: 组合换手过高会吃掉收益; 报告年化换手与成本拖累。
"""
import pytest
from factor_ic import (
    layer_membership, single_side_turnover, annualized_turnover,
    turnover_cost_drag, turnover_analysis,
)


def _panel_layers(dates, top_sets, n_layers=5):
    """构造逐期分层 panel: [{date, layers:[{layer, stocks:[code]}]}]

    top_sets: [{layer -> [codes]}] 每期各层成分。
    """
    out = []
    for d, layers in zip(dates, top_sets):
        out.append({
            'date': d,
            'layers': [{'layer': int(k), 'stocks': list(v)} for k, v in sorted(layers.items(), key=lambda kv: int(kv[0]))]
        })
    return out


class TestLayerMembership:
    def test_layer_membership_basic(self):
        panel = _panel_layers(['d1'], [{1: ['a', 'b'], 2: ['c', 'd']}], n_layers=2)
        m = layer_membership(panel)
        assert m['d1'][1] == ['a', 'b']
        assert m['d1'][2] == ['c', 'd']

    def test_empty_panel(self):
        assert layer_membership([]) == {}

    def test_missing_layers_key(self):
        # 无 layers 字段 → 跳过该期
        panel = [{'date': 'd1', 'stocks': []}]
        assert layer_membership(panel) == {}


class TestSingleSideTurnover:
    def test_no_change_zero(self):
        # 相邻两期 top 层成分相同 → 换手 0
        panel = _panel_layers(['d1', 'd2'], [
            {1: ['a', 'b'], 2: ['c']}, {1: ['a', 'b'], 2: ['c']}], n_layers=2)
        assert single_side_turnover(panel, layer=1) == 0.0

    def test_full_change_one(self):
        # 完全换仓 → 换手 1.0
        panel = _panel_layers(['d1', 'd2'], [
            {1: ['a', 'b'], 2: ['c']}, {1: ['c', 'd'], 2: ['a']}], n_layers=2)
        assert single_side_turnover(panel, layer=1) == pytest.approx(1.0)

    def test_partial_change(self):
        # 2 个保留 1 个换 → 0.5
        panel = _panel_layers(['d1', 'd2'], [
            {1: ['a', 'b'], 2: ['c']}, {1: ['a', 'x'], 2: ['c']}], n_layers=2)
        assert single_side_turnover(panel, layer=1) == pytest.approx(0.5)

    def test_single_period_zero(self):
        panel = _panel_layers(['d1'], [{1: ['a', 'b']}], n_layers=2)
        assert single_side_turnover(panel, layer=1) == 0.0

    def test_different_layer_sizes(self):
        # 两层大小不同: 换手按较小集合归一 (交集/平均持有数)
        panel = _panel_layers(['d1', 'd2'], [
            {1: ['a', 'b', 'c'], 2: ['d']}, {1: ['a', 'x', 'y', 'z'], 2: ['d']}], n_layers=2)
        to = single_side_turnover(panel, layer=1)
        # 3 -> 4, 交集 1 → 换手 (3+4-2*1)/(3+4) = 5/7 ≈ 0.714
        assert to == pytest.approx(5 / 7)


class TestAnnualizedTurnover:
    def test_annualization_factor(self):
        # 每 5 日调仓, 单次换手 0.5 → 年化 ≈ 0.5 * 250/5 = 25
        panel = _panel_layers(['d1', 'd2'], [
            {1: ['a', 'b'], 2: ['c']}, {1: ['a', 'x'], 2: ['c']}], n_layers=2)
        ann = annualized_turnover(panel, layer=1, rebalance_days=5, trading_days=250)
        assert ann == pytest.approx(25.0)

    def test_zero_change_zero_annual(self):
        panel = _panel_layers(['d1', 'd2'], [
            {1: ['a', 'b']}, {1: ['a', 'b']}], n_layers=2)
        assert annualized_turnover(panel, layer=1, rebalance_days=5) == 0.0

    def test_single_period_zero(self):
        panel = _panel_layers(['d1'], [{1: ['a', 'b']}], n_layers=2)
        assert annualized_turnover(panel, layer=1, rebalance_days=5) == 0.0


class TestTurnoverCostDrag:
    def test_drag_formula(self):
        # 年化换手 10, 单边成本 0.001 → 年化拖累 10*0.001*2 = 0.02 = 2%
        drag = turnover_cost_drag(annual_turnover=10.0, cost_rate=0.001)
        assert drag == pytest.approx(0.02)

    def test_zero_cost_zero_drag(self):
        assert turnover_cost_drag(annual_turnover=5.0, cost_rate=0.0) == 0.0

    def test_cost_sensitivity(self):
        # 成本×3 → 拖累×3
        d1 = turnover_cost_drag(10.0, 0.001)
        d2 = turnover_cost_drag(10.0, 0.003)
        assert d2 == pytest.approx(d1 * 3)


class TestTurnoverAnalysis:
    def test_analysis_report(self):
        panel = _panel_layers(['d1', 'd2'], [
            {1: ['a', 'b'], 2: ['c']}, {1: ['a', 'x'], 2: ['c']}], n_layers=2)
        rep = turnover_analysis(panel, layer=1, rebalance_days=5,
                                cost_rate=0.001, trading_days=250)
        assert 'annual_turnover' in rep
        assert 'single_turnover' in rep
        assert 'cost_drag' in rep
        assert 'cost_drag_pct' in rep
        assert rep['annual_turnover'] == pytest.approx(25.0)
        assert rep['cost_drag'] == pytest.approx(0.05)  # 25*0.001*2

    def test_analysis_rebalance_interval(self):
        # 调仓间隔越大 → 年化换手越低
        panel = _panel_layers(['d1', 'd2'], [
            {1: ['a', 'b']}, {1: ['a', 'x']}], n_layers=2)
        r5 = turnover_analysis(panel, layer=1, rebalance_days=5)['annual_turnover']
        r20 = turnover_analysis(panel, layer=1, rebalance_days=20)['annual_turnover']
        assert r20 < r5
