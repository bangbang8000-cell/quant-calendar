#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""财务质量分位测试 (v7.3.0 / B7.1, TC-FY-7.3-01/02)

守护：六项指标公式、反向指标分位取补、缺字段不填 0、样本内分位必须标注。
"""
import pytest

import fin_quality as fq


def _rows(**kw):
    base = {'fiscal_year': 2025, 'operating_income': 1000.0, 'operating_costs': 400.0,
            'net_profit': 200.0, 'parent_holder_net_profit': 180.0,
            'holder_equity_total': 1200.0, 'total_debt': 800.0, 'assets_total': 2000.0,
            'act_cash_flow_net': 300.0, 'report_date_ms': 1}
    base.update(kw)
    return base


def test_compute_metrics_formulas():
    """TC-FY-7.3-01: 六个口径按公式计算"""
    inc = _rows()
    bal = _rows()
    csh = _rows()
    prev = {'operating_income': 800.0}
    m = fq.compute_metrics(inc, bal, csh, prev)
    assert m['roe'] == pytest.approx(0.15)               # 180/1200
    assert m['gross_margin'] == pytest.approx(0.6)        # (1000-400)/1000
    assert m['net_margin'] == pytest.approx(0.2)          # 200/1000
    assert m['debt_ratio'] == pytest.approx(0.4)          # 800/2000
    assert m['cash_quality'] == pytest.approx(1.5)        # 300/200
    assert m['revenue_growth'] == pytest.approx(25.0)     # 1000/800-1


def test_missing_fields_stay_none():
    """缺字段 → None（不填 0）"""
    m = fq.compute_metrics({'fiscal_year': 2025}, {}, {})
    for k in fq.METRIC_KEYS:
        assert m[k] is None
    # 权益是 balance 的字段：把 balance 的权益置 0
    m2 = fq.compute_metrics(_rows(), _rows(holder_equity_total=0), _rows())
    assert m2['roe'] is None, '分母为 0 必须是 None, 不是 inf'


def test_percentile_higher_better():
    vals = {'a': 0.05, 'b': 0.10, 'c': 0.20}
    pct = fq.percentile_rank(vals, higher_better=True)
    assert pct['c'] == 100.0 and pct['a'] == 0.0 and pct['b'] == 50.0


def test_percentile_lower_better_inverted():
    """反���指标（负债率）：越低分位越高"""
    vals = {'a': 0.1, 'b': 0.4, 'c': 0.9}
    pct = fq.percentile_rank(vals, higher_better=False)
    assert pct['a'] == 100.0 and pct['c'] == 0.0


def test_percentile_ignores_none():
    pct = fq.percentile_rank({'a': None, 'b': 1.0, 'c': 2.0}, True)
    assert set(pct) == {'b', 'c'}


def test_composite_average_of_available():
    assert fq.composite_score({'roe': 100.0, 'net_margin': 0.0}) == 50.0
    assert fq.composite_score({'roe': 80.0, 'net_margin': None}) == 80.0
    assert fq.composite_score({}) is None


class FakeClient:
    def __init__(self, payload=None, fail=False):
        self.payload = payload or {}
        self.fail = fail

    def get(self, cap, path, params=None):
        if self.fail:
            return {'ok': False, 'reason': 'upstream'}
        key = 'income' if 'income' in path else ('balance' if 'balance' in path else 'cash')
        return {'ok': True, 'data': {'item': self.payload.get(key, [])}}


def test_screen_marks_sample_percentile(monkeypatch):
    """TC-FY-7.3-02: 分位必须是样本内并显式标注"""
    payload = {
        'income': [_rows(operating_income=1000.0, report_date_ms=2),
                   _rows(operating_income=800.0, fiscal_year=2024, report_date_ms=1)],
        'balance': [_rows(report_date_ms=2), _rows(fiscal_year=2024, report_date_ms=1)],
        'cash': [_rows(report_date_ms=2), _rows(fiscal_year=2024, report_date_ms=1)],
    }
    out = fq.screen(['600519.SH', '000001.SZ'], client=FakeClient(payload))
    assert out['available'] is True and out['covered'] == 2
    assert '样本内分位' in out['meta']['percentile']
    assert '不是全市场分位' in out['meta']['percentile']
    row = out['rows'][0]
    assert set(row['percentiles']) >= set(fq.METRIC_KEYS)
    assert row['composite'] is not None
    assert '不构成投资建议' in out['meta']['disclaimer']


def test_screen_no_codes_and_failure():
    assert fq.screen([])['reason'] == 'no_codes'
    out = fq.screen(['600519.SH'], client=FakeClient(fail=True))
    assert out['available'] is False and out['failed']


def test_capability_disabled(monkeypatch):
    monkeypatch.setattr(fq, '_client', lambda: (None, 'capability_disabled'))
    out = fq.screen(['600519.SH'])
    assert out['available'] is False and out['reason'] == 'capability_disabled'
