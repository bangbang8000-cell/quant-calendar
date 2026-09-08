"""T-5.1.12: IC 衰减分析 (factor_ic.compute_ic_decay) — 1/5/10/20 日 IC 序列、最优持有期。

FR-5.1.1.2: 因子 IC 随持有期(1/5/10/20 日)衰减, 报告衰减曲线与最优持有期。
"""
import pytest
from factor_ic import (
    compute_ic_decay, ic_decay_summary, build_ic_decay_report,
)


def _panel(dates, stocks):
    """构造 panel: [{date, stocks:[{code, factor_value, future_return:{n1/n5/n10/n20}}]}]"""
    out = []
    for d in dates:
        out.append({'date': d, 'stocks': stocks})
    return out


def _stock(code, fv, frs):
    return {'code': code, 'factor_value': fv, 'future_return': dict(frs)}


class TestComputeIcDecay:
    def test_single_window_series(self):
        # 因子与 n1 收益正相关
        panel = _panel(['d1', 'd2', 'd3'], [
            _stock('a', 1.0, {'n1': 0.01, 'n5': 0.02}),
            _stock('b', 2.0, {'n1': 0.02, 'n5': 0.03}),
            _stock('c', 3.0, {'n1': 0.03, 'n5': 0.04}),
            _stock('d', 4.0, {'n1': 0.04, 'n5': 0.05}),
        ])
        decay = compute_ic_decay(panel, windows=('n1', 'n5'))
        assert set(decay.keys()) == {'n1', 'n5'}
        assert all(len(decay[w]) == 3 for w in decay)  # 每窗口 3 期
        assert all(x['ic'] is not None for x in decay['n1'])

    def test_positive_ic_positive_decay(self):
        panel = _panel(['d1', 'd2', 'd3', 'd4'], [
            _stock('a', i * 1.0, {'n1': 0.001 * i, 'n5': 0.0005 * i}) for i in range(1, 6)
        ])
        decay = compute_ic_decay(panel, windows=('n1', 'n5'))
        # 因子强正相关 → IC 为正
        ics = [x['ic'] for x in decay['n1']]
        assert all(ic > 0 for ic in ics)

    def test_decay_monotonic(self):
        # 因子与短窗口强相关, 长窗口弱 → 衰减曲线递减
        # 短窗口收益 = 因子秩正相关; 长窗口逐步加噪声扰动秩 → IC 递减
        # 噪声用不同倍数扰动使长窗口秩序与因子不完全一致
        def mkw(i, w):
            # n1 完全正相关; n5/n10/n20 依窗口加噪扰动秩 (窗口越长噪声越大)
            noise = [0, 1, 2, 3, 4, 5][w] * 1.0
            return 0.01 * ((i + noise) % 21 + 1)
        stocks = [
            _stock('s%02d' % i, float(i),
                   {'n1': mkw(i, 0), 'n5': mkw(i, 1), 'n10': mkw(i, 2), 'n20': mkw(i, 3)})
            for i in range(1, 22)
        ]
        panel = _panel(['d1', 'd2', 'd3', 'd4', 'd5', 'd6'], stocks)
        decay = compute_ic_decay(panel, windows=('n1', 'n5', 'n10', 'n20'))
        means = {w: sum(x['ic'] for x in decay[w]) / len(decay[w]) for w in decay}
        assert means['n1'] > means['n5'] > means['n10'] > means['n20']

    def test_empty_panel(self):
        assert compute_ic_decay([], windows=('n1', 'n5')) == {}

    def test_missing_window_key(self):
        # panel 无某窗口 → 该窗口 IC 为 None
        panel = _panel(['d1'], [_stock('a', 1.0, {'n1': 0.01}), _stock('b', 2.0, {'n1': 0.02})])
        decay = compute_ic_decay(panel, windows=('n1', 'n20'))
        assert all(x['ic'] is None for x in decay['n20'])

    def test_custom_windows(self):
        panel = _panel(['d1', 'd2'], [
            _stock('a', 1.0, {'n3': 0.01}), _stock('b', 2.0, {'n3': 0.02}),
        ])
        decay = compute_ic_decay(panel, windows=('n3',))
        assert 'n3' in decay


class TestIcDecaySummary:
    def test_summary_fields(self):
        panel = _panel(['d1', 'd2', 'd3', 'd4'], [
            _stock('a', i * 1.0, {'n1': 0.01 * i, 'n5': 0.005 * i, 'n10': 0.002 * i, 'n20': 0.001 * i})
            for i in range(1, 6)
        ])
        decay = compute_ic_decay(panel, windows=('n1', 'n5', 'n10', 'n20'))
        summ = ic_decay_summary(decay)
        assert 'windows' in summ and 'optimal_window' in summ and 'decay_rate' in summ
        assert len(summ['windows']) == 4
        assert summ['optimal_window'] == 'n1'  # IC 最强

    def test_optimal_window_tie_break(self):
        # n5 与 n1 相同 → 取短窗口
        panel = _panel(['d1', 'd2', 'd3'], [
            _stock('a', i * 1.0, {'n1': 0.01 * i, 'n5': 0.01 * i}) for i in range(1, 6)
        ])
        decay = compute_ic_decay(panel, windows=('n1', 'n5'))
        summ = ic_decay_summary(decay)
        assert summ['optimal_window'] == 'n1'

    def test_summary_no_valid_ic(self):
        summ = ic_decay_summary({})
        assert summ['optimal_window'] is None
        assert summ['windows'] == []


class TestBuildIcDecayReport:
    def test_multi_factor_report(self):
        f1 = _panel(['d1', 'd2'], [_stock('a', 1.0, {'n1': 0.01, 'n5': 0.02}), _stock('b', 2.0, {'n1': 0.02, 'n5': 0.03})])
        f2 = _panel(['d1', 'd2'], [_stock('a', 2.0, {'n1': 0.03, 'n5': 0.01}), _stock('b', 1.0, {'n1': 0.04, 'n5': 0.02})])
        rep = build_ic_decay_report({'mom': {'n1': f1, 'n5': f1}, 'rev': {'n1': f2, 'n5': f2}})
        assert set(rep.keys()) == {'mom', 'rev'}
        assert 'optimal_window' in rep['mom']

    def test_report_empty(self):
        assert build_ic_decay_report({}) == {}
