# -*- coding: utf-8 -*-
"""v3.17 / FR-3.17.3: 多因子引擎单测
覆盖: 估值/基本面/资金面/情绪面/技术面 因子计算、分位标注、缺失降级（TDD 先行）
"""
import pytest
from factor_engine import (
    percentile_rank,
    label_by_percentile,
    compute_valuation_factors,
    compute_fundamental_factors,
    compute_moneyflow_factors,
    compute_sentiment_factors,
    compute_technical_factors,
    build_factor_panel,
)


# ─── 分位与语义标注 ───────────────────────────────

def test_percentile_rank_basic():
    vals = [10, 20, 30, 40, 50]
    assert percentile_rank(vals, 30) == pytest.approx(0.4)
    assert percentile_rank(vals, 10) == pytest.approx(0.0)
    assert percentile_rank(vals, 60) == pytest.approx(1.0)


def test_percentile_rank_edge():
    assert percentile_rank([], 5) is None
    assert percentile_rank([1, 2], None) is None
    assert percentile_rank([None, 3, None], 3) == pytest.approx(0.0)  # 忽略 None


def test_label_by_percentile():
    assert label_by_percentile(0.1) == '偏低'
    assert label_by_percentile(0.5) == '中性'
    assert label_by_percentile(0.9) == '偏高'
    assert label_by_percentile(None) is None


# ─── 估值面 ───────────────────────────────────────

def test_valuation_factors():
    rows = [
        {'trade_date': '20260810', 'pe': 50, 'pb': 6, 'ps': 7, 'dv_ratio': 0.6},
        {'trade_date': '20260811', 'pe': 45, 'pb': 5.5, 'ps': 6.5, 'dv_ratio': 0.7},
        {'trade_date': '20260812', 'pe': 40, 'pb': 5, 'ps': 6, 'dv_ratio': 0.8},
        {'trade_date': '20260813', 'pe': 35, 'pb': 4.5, 'ps': 5.5, 'dv_ratio': 0.9},
        {'trade_date': '20260814', 'pe': 30, 'pb': 4, 'ps': 5, 'dv_ratio': 1.0},
    ]
    f = compute_valuation_factors(rows)
    keys = {x['key'] for x in f}
    assert {'pe', 'pb', 'ps', 'dv'} <= keys
    pe = next(x for x in f if x['key'] == 'pe')
    assert pe['value'] == 30
    assert pe['semantic'] == '偏低'  # PE 处于历史低位 → 估值偏低
    assert pe['category'] == '估值'


def test_valuation_factors_missing():
    rows = [{'trade_date': '20260814', 'pe': 30}]
    f = compute_valuation_factors(rows)
    keys = {x['key'] for x in f}
    assert 'pe' in keys
    assert 'pb' not in keys  # 缺字段不产出


def test_valuation_empty():
    assert compute_valuation_factors([]) == []


# ─── 基本面 ───────────────────────────────────────

def test_fundamental_factors():
    fin = {
        'roe': 12.5, 'gross_margin': 35.0, 'net_margin': 15.0,
        'revenue_yoy': 8.5, 'profit_yoy': 12.0,
    }
    f = compute_fundamental_factors(fin)
    keys = {x['key'] for x in f}
    assert {'roe', 'gross_margin', 'net_margin', 'revenue_yoy', 'profit_yoy'} <= keys


def test_fundamental_factors_missing():
    f = compute_fundamental_factors({})
    assert f == []  # 无数据不产出


# ─── 资金面 ───────────────────────────────────────

def test_moneyflow_factors():
    rows = [
        {'trade_date': 'd1', 'net_mf_amount': 1000},
        {'trade_date': 'd2', 'net_mf_amount': 800},
        {'trade_date': 'd3', 'net_mf_amount': 600},
        {'trade_date': 'd4', 'net_mf_amount': 400},
        {'trade_date': 'd5', 'net_mf_amount': 200},
    ]
    f = compute_moneyflow_factors(rows, recent_n=5)
    keys = {x['key'] for x in f}
    assert 'net_mf_5d' in keys
    nf = next(x for x in f if x['key'] == 'net_mf_5d')
    assert nf['value'] == 3000  # 近5日净流入合计


def test_moneyflow_empty():
    assert compute_moneyflow_factors([], 5) == []


# ─── 情绪面 ───────────────────────────────────────

def test_sentiment_factors():
    quotes = [
        {'trade_date': 'd1', 'turnover_rate': 1.0, 'pct_chg': 1.0, 'amount': 100000},
        {'trade_date': 'd2', 'turnover_rate': 2.0, 'pct_chg': -1.0, 'amount': 120000},
        {'trade_date': 'd3', 'turnover_rate': 3.0, 'pct_chg': 2.0, 'amount': 90000},
        {'trade_date': 'd4', 'turnover_rate': 4.0, 'pct_chg': 0.5, 'amount': 110000},
        {'trade_date': 'd5', 'turnover_rate': 5.0, 'pct_chg': 3.0, 'amount': 130000},
    ]
    f = compute_sentiment_factors(quotes)
    keys = {x['key'] for x in f}
    assert 'turnover' in keys and 'amount' in keys
    tf = next(x for x in f if x['key'] == 'turnover')
    assert tf['value'] == 5.0


def test_sentiment_empty():
    assert compute_sentiment_factors([]) == []


# ─── 技术面 ───────────────────────────────────────

def test_technical_factors():
    closes = [float(i) for i in range(1, 61)]  # 单调上升
    f = compute_technical_factors(closes)
    keys = {x['key'] for x in f}
    assert {'price_pos', 'rsi'} <= keys
    pp = next(x for x in f if x['key'] == 'price_pos')
    assert pp['value'] is not None
    assert pp['semantic'] == '偏高'  # 处于高位


def test_technical_empty():
    assert compute_technical_factors([]) == []


# ─── 面板聚合与降级 ───────────────────────────────

class _FakeDS:
    """模拟 data_source_manager：全部不可达 → 面板应优雅降级"""
    def get_daily_basic(self, ts_code, limit=5):
        return None
    def get_financial_data(self, ts_code):
        return None
    def get_moneyflow(self, ts_code, limit=10):
        return None


class _FakeSI:
    def get_daily_data(self, ts_code, trade_date):
        return None


def test_build_panel_all_unavailable():
    panel = build_factor_panel('000001.SZ', data_source=_FakeDS(), stock_info=_FakeSI(), today='20260814')
    assert isinstance(panel, dict)
    assert 'factors' in panel
    assert 'summary' in panel
    # 无任何数据时 summary 应为 0 或占位，不抛错
    assert panel['summary']['available'] >= 0
    assert isinstance(panel['factors'], list)


def test_build_panel_with_valuation():
    class DS:
        def get_daily_basic(self, ts_code, limit=5):
            return {'trade_date': '20260814', 'pe': 20, 'pb': 3, 'total_mv': 50000}
        def get_financial_data(self, ts_code):
            return {'roe': 10.0}
        def get_moneyflow(self, ts_code, limit=10):
            return None

    class SI:
        def get_daily_data(self, ts_code, trade_date):
            return None

    panel = build_factor_panel('000001.SZ', data_source=DS(), stock_info=SI(), today='20260814')
    cats = {f['category'] for f in panel['factors']}
    assert '估值' in cats
    assert '基本面' in cats
