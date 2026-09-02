"""T-5.1.16: 因子详情面板数据组装 (factor_ic.build_factor_detail)。

FR-5.1.1.6: 因子详情 = 定义/参数/覆盖度 + 近1-2年专测 + IC 衰减 + 换手 + 多重检验。
纯函数组装, 不依赖数据源。
"""
import pytest
from factor_ic import build_factor_detail


def _panel(dates, stocks):
    out = []
    for d in dates:
        out.append({'date': d, 'stocks': stocks})
    return out


def _stock(code, fv, frs):
    return {'code': code, 'factor_value': fv, 'future_return': dict(frs)}


# 带 layers 的分层 panel (换手率用)
def _layer_panel(dates, top_sets):
    out = []
    for d, layers in zip(dates, top_sets):
        out.append({'date': d, 'layers': [
            {'layer': int(k), 'stocks': list(v)} for k, v in sorted(layers.items(), key=lambda kv: int(kv[0]))]})
    return out


def _make_frames(dates=('20260101', '20260102', '20260103', '20260104')):
    import pandas as pd
    import numpy as np
    stocks = ['a', 'b', 'c', 'd', 'e']
    factor = pd.DataFrame(
        [[1.0, 2.0, 3.0, 4.0, 5.0],
         [1.1, 2.1, 3.1, 4.1, 5.1],
         [0.9, 2.0, 3.2, 4.0, 5.2],
         [1.0, 2.2, 3.0, 4.2, 5.0]],
        index=dates, columns=stocks)
    returns = pd.DataFrame(
        [[0.01, 0.02, 0.03, 0.04, 0.05],
         [0.02, 0.01, 0.04, 0.03, 0.05],
         [0.01, 0.03, 0.02, 0.05, 0.04],
         [0.02, 0.02, 0.03, 0.04, 0.01]],
        index=dates, columns=stocks)
    return factor, returns


class TestBuildDetailPanels:
    def test_panels_constructed(self):
        from factor_ic import build_detail_panels
        f, r = _make_frames()
        out = build_detail_panels(f, r)
        assert 'ic_panel' in out and 'layer_panel' in out
        assert len(out['ic_panel']) == 4
        assert len(out['layer_panel']) == 4
        # 每期 stocks 有 factor_value 和 future_return
        assert all(s['factor_value'] is not None for day in out['ic_panel'] for s in day['stocks'])
        assert all('n1' in s['future_return'] for day in out['ic_panel'] for s in day['stocks'])

    def test_layer_panel_layers(self):
        from factor_ic import build_detail_panels
        f, r = _make_frames()
        out = build_detail_panels(f, r, n_layers=5)
        day = out['layer_panel'][0]
        assert len(day['layers']) == 5  # 5 股 5 层
        assert all(len(l['stocks']) == 1 for l in day['layers'])

    def test_decay_report(self):
        from factor_ic import build_detail_panels
        f, r = _make_frames()
        out = build_detail_panels(f, r)
        assert 'optimal_window' in out['decay_report']
        assert out['decay_report']['optimal_window'] is not None


class TestBuildFactorDetail:
    def _basic_panels(self):
        stocks = [_stock('s%02d' % i, float(i),
                         {'n1': 0.01 * i, 'n5': 0.006 * i, 'n10': 0.003 * i, 'n20': 0.001 * i})
                  for i in range(1, 16)]
        ic_panel = _panel(['d1', 'd2', 'd3', 'd4', 'd5', 'd6'], stocks)
        layer_panel = _layer_panel(['d1', 'd2', 'd3', 'd4'],
                                   [{1: ['a', 'b', 'c'], 2: ['d', 'e']},
                                    {1: ['a', 'b', 'd'], 2: ['d', 'e']},
                                    {1: ['a', 'b', 'c'], 2: ['d', 'e']},
                                    {1: ['a', 'b', 'd'], 2: ['d', 'e']}])
        meta = {'name': 'mom20', 'category': 'technical', 'description': '20日动量', 'params': {'lookback': 20}}
        return ic_panel, layer_panel, meta

    def test_detail_structure(self):
        ic_panel, layer_panel, meta = self._basic_panels()
        d = build_factor_detail(ic_panel, layer_panel, meta)
        assert 'meta' in d and 'ic_decay' in d and 'turnover' in d and 'multiple_testing' in d

    def test_meta_passthrough(self):
        ic_panel, layer_panel, meta = self._basic_panels()
        d = build_factor_detail(ic_panel, layer_panel, meta)
        assert d['meta']['name'] == 'mom20'
        assert d['meta']['category'] == 'technical'
        assert d['meta']['params']['lookback'] == 20

    def test_ic_decay_present(self):
        ic_panel, layer_panel, meta = self._basic_panels()
        d = build_factor_detail(ic_panel, layer_panel, meta)
        assert d['ic_decay']['optimal_window'] is not None
        assert len(d['ic_decay']['windows']) >= 2

    def test_turnover_present(self):
        ic_panel, layer_panel, meta = self._basic_panels()
        d = build_factor_detail(ic_panel, layer_panel, meta)
        assert 'annual_turnover' in d['turnover']
        assert d['turnover']['annual_turnover'] >= 0

    def test_multiple_testing_present(self):
        ic_panel, layer_panel, meta = self._basic_panels()
        d = build_factor_detail(ic_panel, layer_panel, meta)
        assert 'n_factors' in d['multiple_testing']

    def test_coverage_present(self):
        ic_panel, layer_panel, meta = self._basic_panels()
        d = build_factor_detail(ic_panel, layer_panel, meta)
        assert 'coverage' in d
        assert 0 <= d['coverage'] <= 1

    def test_empty_panels_graceful(self):
        meta = {'name': 'x', 'category': 'y'}
        d = build_factor_detail([], [], meta)
        assert d['ic_decay']['optimal_window'] is None
        assert d['turnover']['annual_turnover'] == 0.0
        assert d['coverage'] == 0.0

    def test_recent_2y_section(self):
        # 近1-2年专测: 仅含近 2 年日期的 IC 评价
        ic_panel, layer_panel, meta = self._basic_panels()
        d = build_factor_detail(ic_panel, layer_panel, meta, recent_years=2)
        assert 'recent' in d
        # 近1-2年窗 (含 n1..n20); 空则 windows 为空
        assert d['recent']['optimal_window'] is not None or d['recent']['windows'] == []
