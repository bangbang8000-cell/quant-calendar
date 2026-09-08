# -*- coding: utf-8 -*-
"""V5.3.15 (coverage 补测): 因子 IC 详情面板模块补测

覆盖 factor_ic.py 中未被既有测试覆盖的核心函数:
ic_decay_summary / build_ic_decay_report / layer_membership /
single_side_turnover / annualized_turnover / turnover_cost_drag /
turnover_analysis / ic_t_statistic / bonferroni_alpha / fdr_alpha /
multiple_testing_warning / multiple_testing_report / build_factor_detail /
build_detail_panels / compute_ic_decay
"""
import pytest
import pandas as pd
import numpy as np

import factor_ic as fi


# ==================== ic_decay_summary ====================

def _decay_input():
    """构造 compute_ic_decay 的 panel: 3 日 × 2 股票, 有因子值与未来收益"""
    return [
        {'date': '2026-05-06', 'stocks': [
            {'code': '600000.SH', 'factor_value': 1.0, 'future_return': {'n1': 0.01, 'n5': 0.05}},
            {'code': '600001.SH', 'factor_value': 2.0, 'future_return': {'n1': 0.02, 'n5': 0.04}},
        ]},
        {'date': '2026-05-07', 'stocks': [
            {'code': '600000.SH', 'factor_value': 1.5, 'future_return': {'n1': 0.015, 'n5': 0.03}},
            {'code': '600001.SH', 'factor_value': 2.5, 'future_return': {'n1': 0.025, 'n5': 0.06}},
        ]},
        {'date': '2026-05-08', 'stocks': [
            {'code': '600000.SH', 'factor_value': 1.2, 'future_return': {'n1': 0.012, 'n5': 0.02}},
            {'code': '600001.SH', 'factor_value': 2.2, 'future_return': {'n1': 0.022, 'n5': 0.07}},
        ]},
    ]


def test_compute_ic_decay_windows():
    """compute_ic_decay 返回多窗口 IC 序列, 且每窗口条数与 panel 天数一致"""
    panel = _decay_input()
    decay = fi.compute_ic_decay(panel, windows=('n1', 'n5'))
    assert set(decay.keys()) == {'n1', 'n5'}
    for wkey, series in decay.items():
        assert len(series) == 3
        for item in series:
            assert 'date' in item and 'ic' in item


def test_ic_decay_summary_basic():
    """ic_decay_summary 输出 windows/optimal_window/decay_rate 结构"""
    decay = fi.compute_ic_decay(_decay_input(), windows=('n1', 'n5'))
    summary = fi.ic_decay_summary(decay)
    assert 'windows' in summary and 'optimal_window' in summary
    assert 'decay_rate' in summary
    # 所有窗口都在 windows 列表里 (按 n1<n5 排序)
    assert [w['window'] for w in summary['windows']] == ['n1', 'n5']
    assert summary['optimal_window'] in ('n1', 'n5')


def test_ic_decay_summary_empty_decay():
    """空 decay 输入 → 空结构"""
    summary = fi.ic_decay_summary({})
    assert summary['windows'] == []
    assert summary['optimal_window'] is None
    assert summary['decay_rate'] is None


def test_ic_decay_summary_all_invalid_ic():
    """窗口内 IC 全 None → ic_mean None, abs_ic 0"""
    decay = {'n1': [{'date': '2026-05-06', 'ic': None}, {'date': '2026-05-07', 'ic': None}]}
    summary = fi.ic_decay_summary(decay)
    assert summary['windows'][0]['ic_mean'] is None
    assert summary['windows'][0]['icir'] is None


def test_build_ic_decay_report_multi_factor():
    """build_ic_decay_report 多因子多窗口聚合"""
    panel = _decay_input()
    panels = {'mom20': {'n1': panel, 'n5': panel}}
    report = fi.build_ic_decay_report(panels)
    assert 'mom20' in report
    assert report['mom20']['optimal_window'] in ('n1', 'n5')


# ==================== 换手率 ====================

def _layer_panel():
    """2 期分层: 第1期 5 只, 第2期换 2 只"""
    return [
        {'date': '2026-05-06', 'layers': [
            {'layer': 1, 'stocks': ['a', 'b', 'c', 'd', 'e']},
            {'layer': 2, 'stocks': ['f', 'g', 'h']},
        ]},
        {'date': '2026-05-07', 'layers': [
            {'layer': 1, 'stocks': ['a', 'b', 'c', 'f', 'g']},
            {'layer': 2, 'stocks': ['d', 'e', 'h']},
        ]},
    ]


def test_layer_membership_basic():
    """layer_membership 提取 {date: {layer: [codes]}}"""
    out = fi.layer_membership(_layer_panel())
    assert '2026-05-06' in out and '2026-05-07' in out
    assert out['2026-05-06'][1] == ['a', 'b', 'c', 'd', 'e']
    assert out['2026-05-07'][2] == ['d', 'e', 'h']


def test_layer_membership_skip_empty():
    """无 layers 的日被跳过"""
    out = fi.layer_membership([{'date': '2026-05-06', 'layers': []}])
    assert out == {}


def test_single_side_turnover_partial():
    """第1期 L1={a,b,c,d,e}, 第2期 L1={a,b,c,f,g} → 重叠3, 换手=(10-6)/10=0.4"""
    t = fi.single_side_turnover(_layer_panel(), layer=1)
    assert abs(t - 0.4) < 1e-9


def test_single_side_turnover_identical():
    """成分完全不变 → 0"""
    panel = [
        {'date': 'd1', 'layers': [{'layer': 1, 'stocks': ['a', 'b']}]},
        {'date': 'd2', 'layers': [{'layer': 1, 'stocks': ['a', 'b']}]},
    ]
    assert fi.single_side_turnover(panel, layer=1) == 0.0


def test_single_side_turnover_single_date():
    """单期 → 0"""
    assert fi.single_side_turnover([{'date': 'd1', 'layers': [{'layer': 1, 'stocks': ['a']}]}]) == 0.0


def test_single_side_turnover_both_empty():
    """两期 L1 都空 → 0"""
    panel = [
        {'date': 'd1', 'layers': [{'layer': 1, 'stocks': []}]},
        {'date': 'd2', 'layers': [{'layer': 1, 'stocks': []}]},
    ]
    assert fi.single_side_turnover(panel, layer=1) == 0.0


def test_annualized_turnover_scale():
    """年化 = 单次 × (250/5)"""
    panel = _layer_panel()
    once = fi.single_side_turnover(panel, layer=1)
    ann = fi.annualized_turnover(panel, layer=1, rebalance_days=5, trading_days=250)
    assert abs(ann - once * 50) < 1e-9


def test_annualized_turnover_zero_rebalance():
    """rebalance_days<=0 → 0"""
    assert fi.annualized_turnover(_layer_panel(), rebalance_days=0) == 0.0


def test_turnover_cost_drag_bilateral():
    """成本拖累 = 年化换手 × 成本 × 2"""
    assert abs(fi.turnover_cost_drag(10.0, 0.001) - 0.02) < 1e-12


def test_turnover_analysis_structure():
    """turnover_analysis 报告结构完整"""
    rep = fi.turnover_analysis(_layer_panel(), layer=1, rebalance_days=5, cost_rate=0.001)
    assert rep['layer'] == 1
    assert 'single_turnover' in rep and 'annual_turnover' in rep
    assert 'cost_drag' in rep and 'cost_drag_pct' in rep
    assert rep['cost_rate'] == 0.001


# ==================== 多重检验 ====================

def test_ic_t_statistic_basic():
    """t 统计量: 恒定序列 → 0; 有方差 → 有限值"""
    assert fi.ic_t_statistic([1.0, 1.0, 1.0]) == 0.0
    t = fi.ic_t_statistic([0.1, 0.2, 0.3, 0.4])
    assert t is not None and t > 0


def test_ic_t_statistic_too_short():
    """样本 <2 → None"""
    assert fi.ic_t_statistic([0.1]) is None
    assert fi.ic_t_statistic([]) is None
    assert fi.ic_t_statistic([None, None]) is None


def test_bonferroni_alpha():
    """Bonferroni: alpha/n; n<=1 → alpha"""
    assert fi.bonferroni_alpha(1) == 0.05
    assert abs(fi.bonferroni_alpha(10) - 0.005) < 1e-12


def test_fdr_alpha():
    """FDR: 阈值 = alpha*rank/m"""
    out = fi.fdr_alpha([0.01, 0.02, 0.03], alpha=0.05)
    assert len(out) == 3
    assert abs(out[0] - 0.05 * 1 / 3) < 1e-12
    assert abs(out[2] - 0.05 * 3 / 3) < 1e-12
    assert fi.fdr_alpha([]) == []


def test_multiple_testing_warning_low_risk():
    """少因子 → 不 flagged"""
    w = fi.multiple_testing_warning(3, [2.5, 1.0])
    assert w['flagged'] is False
    assert w['n_survive'] >= 0
    assert 'bonferroni_alpha' in w


def test_multiple_testing_warning_flagged():
    """多因子且存活少 → flagged"""
    w = fi.multiple_testing_warning(10, [0.5, 0.3, 0.2, 0.1])
    assert w['flagged'] is True


def test_multiple_testing_warning_zero_factors():
    """n_factors<=0 → 用 t_stats 长度"""
    w = fi.multiple_testing_warning(0, [1.0, 2.0])
    assert w['n_factors'] == 2


def test_multiple_testing_report_structure():
    """综合报告含 survive 列表"""
    results = {'f1': {'t_stat': 5.0}, 'f2': {'t_stat': 0.3}, 'f3': {'ic_mean': 0.1}}
    rep = fi.multiple_testing_report(results, n_factors=3, alpha=0.05)
    assert 'survive' in rep
    assert len(rep['survive']) == 3
    by_key = {s['factor']: s for s in rep['survive']}
    # n_factors=3 → bonf α=0.0167, t_crit≈3.39; t=5 存活, t=0.3 不存活
    assert by_key['f1']['survive'] is True
    assert by_key['f2']['survive'] is False
    assert by_key['f3']['survive'] is False


# ==================== 因子详情面板 ====================

def _factor_df():
    """3 日 × 4 股票因子值 DataFrame"""
    dates = ['2026-05-06', '2026-05-07', '2026-05-08']
    symbols = ['a', 'b', 'c', 'd']
    idx = pd.MultiIndex.from_product([dates, symbols], names=['date', 'symbol'])
    rng = np.random.default_rng(42)
    return pd.DataFrame({'f': rng.uniform(0, 5, len(idx))}, index=idx)['f'].unstack()


def _returns_df():
    dates = ['2026-05-06', '2026-05-07', '2026-05-08']
    symbols = ['a', 'b', 'c', 'd']
    idx = pd.MultiIndex.from_product([dates, symbols], names=['date', 'symbol'])
    rng = np.random.default_rng(7)
    return pd.DataFrame({'r': rng.normal(0, 0.02, len(idx))}, index=idx)['r'].unstack()


def test_build_detail_panels_structure():
    """build_detail_panels → ic_panel/layer_panel/decay_report"""
    out = fi.build_detail_panels(_factor_df(), _returns_df(), n_layers=2)
    assert set(out.keys()) == {'ic_panel', 'layer_panel', 'decay_report'}
    assert len(out['ic_panel']) == 3
    assert len(out['layer_panel']) == 3
    assert 'windows' in out['decay_report']
    # 每个 ic_panel 日含 stocks 且 stocks 有 factor_value/future_return
    first = out['ic_panel'][0]
    assert 'stocks' in first and len(first['stocks']) == 4
    assert 'future_return' in first['stocks'][0]
    assert 'factor_value' in first['stocks'][0]


def test_build_detail_panels_mismatched_dates():
    """returns 缺某日 → 只取交集日期"""
    factor_df = _factor_df()
    returns_df = _returns_df().drop(index='2026-05-08')
    out = fi.build_detail_panels(factor_df, returns_df, n_layers=2)
    assert len(out['ic_panel']) == 2
    assert out['ic_panel'][0]['date'] in ('2026-05-06', '2026-05-07')


def test_build_factor_detail_structure():
    """build_factor_detail 输出 meta/coverage/ic_decay/turnover/multiple_testing/recent"""
    factor_df = _factor_df()
    returns_df = _returns_df()
    panels = fi.build_detail_panels(factor_df, returns_df, n_layers=2)
    meta = {'name': 'mom20', 'category': 'technical', 'description': 'd',
            'params': {'lookback': 20}, 'inputs': ['close']}
    detail = fi.build_factor_detail(panels['ic_panel'], panels['layer_panel'], meta,
                                    n_factors_tested=10, rebalance_days=5, cost_rate=0.001)
    for key in ('meta', 'coverage', 'ic_decay', 'turnover', 'multiple_testing', 'recent'):
        assert key in detail, f'缺少 {key}'
    assert detail['meta']['name'] == 'mom20'
    assert detail['coverage'] > 0
    assert 'windows' in detail['ic_decay']


def test_build_factor_detail_empty_panels():
    """空 panel → 结构仍在且 coverage=0"""
    detail = fi.build_factor_detail([], [], {'name': 'x'}, n_factors_tested=5)
    assert detail['coverage'] == 0.0
    assert detail['ic_decay']['windows'] == []
