"""
因子有效性检验测试 (FR-3.18.7 / T7)

覆盖:
- spearman_corr: 单调相关=1 / 逆相关=-1 / 独立≈0 / 长度<2 → None
- compute_cross_section_ic: 单日横截面 IC, 剔除非法, <2 有效对 → None
- compute_ic_series: 多日 IC 时序
- evaluate_ic_series: 有效/失效/不稳定/样本不足 三档标注 + icir/胜率
- build_factor_ic_report: 多因子多窗口报告结构
"""
import pytest

import factor_ic as fi


# ==================== spearman_corr ====================


def test_spearman_monotonic_positive():
    assert fi.spearman_corr([1, 2, 3, 4, 5], [10, 20, 30, 40, 50]) == pytest.approx(1.0)


def test_spearman_monotonic_negative():
    assert fi.spearman_corr([1, 2, 3, 4, 5], [50, 40, 30, 20, 10]) == pytest.approx(-1.0)


def test_spearman_independent_approx_zero():
    ic = fi.spearman_corr([1, 2, 3, 4, 5], [1, 2, 1, 2, 1])
    assert ic is not None and abs(ic) < 0.5


def test_spearman_too_short_none():
    assert fi.spearman_corr([1], [2]) is None


def test_spearman_ties_handled():
    # 存在并列秩, 不抛错且返回有限值
    ic = fi.spearman_corr([1, 1, 2, 3, 3, 3], [1, 2, 2, 3, 4, 5])
    assert ic is not None


# ==================== compute_cross_section_ic ====================


def test_cross_section_ic_basic():
    # 因子值与未来收益正相关 → IC>0
    fv = [1, 2, 3, 4, 5]
    ret = [0.01, 0.02, 0.03, 0.04, 0.05]
    ic = fi.compute_cross_section_ic(fv, ret)
    assert ic == pytest.approx(1.0)


def test_cross_section_ic_drops_invalid():
    fv = [1, None, 3, 4, 5]
    ret = [0.01, 0.02, None, 0.04, 0.05]
    ic = fi.compute_cross_section_ic(fv, ret)
    assert ic == pytest.approx(1.0)


def test_cross_section_ic_insufficient():
    assert fi.compute_cross_section_ic([1], [0.01]) is None
    assert fi.compute_cross_section_ic([1, None], [0.01, None]) is None


# ==================== compute_ic_series ====================


def test_ic_series_multi_date():
    panel = [
        {'date': '2026-08-10', 'stocks': [
            {'code': 'a', 'factor_value': 1, 'future_return': {'n5': 0.01}},
            {'code': 'b', 'factor_value': 2, 'future_return': {'n5': 0.02}},
        ]},
        {'date': '2026-08-11', 'stocks': [
            {'code': 'a', 'factor_value': 1, 'future_return': {'n5': 0.03}},
            {'code': 'b', 'factor_value': 2, 'future_return': {'n5': 0.04}},
        ]},
    ]
    series = fi.compute_ic_series(panel, window='n5')
    assert len(series) == 2
    assert series[0]['ic'] == pytest.approx(1.0)
    assert series[1]['date'] == '2026-08-11'


def test_ic_series_unavailable_day_none():
    panel = [{'date': '2026-08-10', 'stocks': [
        {'code': 'a', 'factor_value': None, 'future_return': {'n5': None}},
    ]}]
    series = fi.compute_ic_series(panel, window='n5')
    assert series[0]['ic'] is None


# ==================== evaluate_ic_series (三档标注) ====================


def test_evaluate_effective():
    # IC 全部为正且高 → 有效
    res = fi.evaluate_ic_series([0.5, 0.6, 0.7, 0.8, 0.9])
    assert res['grade'] == '有效'
    assert res['icir'] is not None and res['icir'] >= fi.ICIR_EFFECTIVE
    assert res['win_rate'] == 1.0


def test_evaluate_failed():
    # IC 全部为负且显著 → 失效
    res = fi.evaluate_ic_series([-0.5, -0.6, -0.7, -0.8, -0.9])
    assert res['grade'] == '失效'


def test_evaluate_unstable():
    # 正负混杂 → 不稳定
    res = fi.evaluate_ic_series([0.5, -0.6, 0.7, -0.8, 0.9])
    assert res['grade'] == '不稳定'


def test_evaluate_insufficient():
    assert fi.evaluate_ic_series([])['grade'] == '样本不足'
    assert fi.evaluate_ic_series([0.5, None])['grade'] == '样本不足'


def test_evaluate_icir_none_when_constant():
    # IC 全部相同 → 标准差为 0, icir=None
    res = fi.evaluate_ic_series([0.5, 0.5, 0.5])
    assert res['icir'] is None
    assert res['grade'] in ('有效', '不稳定')


# ==================== build_factor_ic_report ====================


def _panel(day, fv, ret_n5, ret_n10):
    return {'date': day, 'stocks': [
        {'code': 'a', 'factor_value': fv[0], 'future_return': {'n5': ret_n5[0], 'n10': ret_n10[0]}},
        {'code': 'b', 'factor_value': fv[1], 'future_return': {'n5': ret_n5[1], 'n10': ret_n10[1]}},
        {'code': 'c', 'factor_value': fv[2], 'future_return': {'n5': ret_n5[2], 'n10': ret_n10[2]}},
        {'code': 'd', 'factor_value': fv[3], 'future_return': {'n5': ret_n5[3], 'n10': ret_n10[3]}},
    ]}


def test_build_factor_ic_report():
    panels = {
        'pe': {'n5': [
            _panel('2026-08-10', [1, 2, 3, 4], [0.01, 0.02, 0.03, 0.04], [0.01, 0.02, 0.03, 0.04]),
            _panel('2026-08-11', [1, 2, 3, 4], [0.01, 0.02, 0.03, 0.04], [0.01, 0.02, 0.03, 0.04]),
            _panel('2026-08-12', [1, 2, 3, 4], [0.01, 0.02, 0.03, 0.04], [0.01, 0.02, 0.03, 0.04]),
        ]},
    }
    report = fi.build_factor_ic_report(panels)
    assert 'pe' in report and 'n5' in report['pe']
    assert report['pe']['n5']['grade'] == '有效'
    assert report['pe']['n5']['count'] == 3
    assert report['pe']['n5']['ic_mean'] == pytest.approx(1.0)


def test_build_factor_ic_report_empty():
    assert fi.build_factor_ic_report({}) == {}


# ==================== 端点 ====================


def test_factor_ic_endpoint(monkeypatch):
    import asyncio

    from api.v1 import market as market_api
    monkeypatch.setattr(fi, 'get_factor_ic_report', lambda: {'pe': {'n5': {
        'count': 2, 'ic_mean': 0.5, 'icir': 1.0, 'win_rate': 1.0, 'grade': '有效'}}})
    res = asyncio.run(market_api.factor_ic_report(user={'username': 'admin'}))
    assert res['success'] is True
    assert res['data']['pe']['n5']['grade'] == '有效'


# ==================== V4.7.4: get_factor_ic_report 真实数据链路 ====================


class _FakePortal:
    """模拟 RealDataPortal.get_panel: 构造 close/volume/pe 面板 (8 股票 x 8 日)"""

    def __init__(self):
        import pandas as pd
        import numpy as np
        symbols = [f'60000{i}.SH' for i in range(8)]
        dates = pd.date_range('2026-06-01', periods=45, freq='B').strftime('%Y-%m-%d').tolist()
        rows = []
        rng = np.random.RandomState(42)
        for d in dates:
            for s in symbols:
                rows.append({'date': d, 'symbol': s,
                             'close': 10 + rng.rand() * 5,
                             'volume': 1e6 + rng.rand() * 1e5,
                             'pe': 10 + rng.rand() * 20,
                             'float_mv': 5e9 + rng.rand() * 1e9})
        self.panel = pd.DataFrame(rows).set_index(['date', 'symbol'])

    def get_panel(self, fields, start, end, universe=None, max_workers=1):
        cols = [f for f in fields if f in self.panel.columns]
        return self.panel[cols]


def test_get_factor_ic_report_real_data(monkeypatch):
    """get_factor_ic_report 用真实链路: DataPortal 面板 → 因子矩阵 → 未来收益 → 多窗口 IC 报告"""
    import strategy_sdk.data_portal as dp_mod
    import strategy_sdk
    from strategy_sdk.base import FactorSpec

    class _S:
        id = 'multi_factor'
        factor_specs = [
            FactorSpec('pe', 'valuation', ['pe'], {'direction': 'low'}),
            FactorSpec('mom20', 'technical', ['close'], {'lookback': 20, 'skip': 5, 'direction': 'high'}),
        ]

    monkeypatch.setattr(strategy_sdk, 'registry', type('R', (), {'get': lambda self, sid: _S()})())
    monkeypatch.setattr(dp_mod, 'RealDataPortal', _FakePortal)

    report = fi.get_factor_ic_report()
    assert isinstance(report, dict) and report, '报告不应为空'
    for fkey in ('pe', 'mom20'):
        assert fkey in report, f'缺因子 {fkey}'
        for wkey in ('n5', 'n10', 'n20'):
            assert wkey in report[fkey], f'{fkey} 缺窗口 {wkey}'
            assert 'grade' in report[fkey][wkey]
            assert report[fkey][wkey]['grade'] in ('有效', '失效', '不稳定', '样本不足')


def test_get_factor_ic_report_degrade(monkeypatch):
    """数据不可达 → 优雅降级为空报告 (不抛错)"""
    import strategy_sdk.data_portal as dp_mod
    import strategy_sdk

    class _Broken:
        def get_panel(self, *a, **k):
            raise RuntimeError('no net')

    monkeypatch.setattr(dp_mod, 'RealDataPortal', lambda: _Broken())
    monkeypatch.setattr(strategy_sdk, 'registry', type('R', (), {'get': lambda self, sid: (_ for _ in ()).throw(Exception('no strategy'))})())
    report = fi.get_factor_ic_report()
    assert report == {}
