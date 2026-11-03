#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""短线口径测试 (v6.8.0 / B2.2, TC-FY-6.8-05/06/07)

守护：涨停原因改由 Fuyao 直供（问财降为补充）、官方封板率/晋级率口径与"样本内"标注。
"""

from shortterm import emotion_metrics as em
from shortterm import themes


def test_reasons_from_rows_extracts_reason():
    rows = [
        {'ts_code': '002827', 'reason': '重组复牌+拟注铜锂矿'},
        {'ts_code': '600519.SH', 'reason': None},
        {'ts_code': '300010', 'reason': '  '},
    ]
    out = themes.reasons_from_rows(rows)
    assert out == {'002827': '重组复牌+拟注铜锂矿'}


def test_fuyao_reasons_used_when_coverage_high(monkeypatch):
    """TC-FY-6.8-05: 无需 IWENCAI_API_KEY 也能拿到涨停原因"""
    import shortterm.fetchers as f
    monkeypatch.setattr(f, 'fetch_zt_pool', lambda d, prefer=None: {
        'source': 'fuyao+eastmoney', 'include_st': True,
        'rows': [{'ts_code': '002827', 'reason': 'A'}, {'ts_code': '300010', 'reason': 'B'}],
    }, raising=False)

    reasons, err = themes.fetch_zt_reasons('2026-11-03')
    assert err is None and reasons == {'002827': 'A', '300010': 'B'}


def test_fuyao_reasons_fallthrough_when_low_coverage(monkeypatch):
    monkeypatch.setattr(themes, 'reasons_from_rows', lambda rows: {}, raising=False)
    import shortterm.fetchers as f
    monkeypatch.setattr(f, 'fetch_zt_pool', lambda d, prefer=None: {
        'rows': [{'ts_code': '002827', 'reason': None}]}, raising=False)
    _, meta = themes.fetch_zt_reasons_via_fuyao('2026-11-03')
    assert meta['available'] is False and meta['reason'] == 'coverage_low'


def test_official_stats_mapping(monkeypatch):
    """TC-FY-6.8-06/07: 官方封板率与逐档晋级率映射，且带公式与口径说明"""
    class FakeClient:
        def get(self, cap, path, params=None):
            return {'ok': True, 'data': {
                'trade_date': '2026-11-03', 'seal_rate': 0.5926,
                'limit_up_stock_count': 48, 'touched_limit_up_stock_count': 81,
                'open_stock_count': 33,
                'page_boards': [{'board_level': 'two', 'stock_count': 12, 'promotion_rate': 0.11}],
                'exact_boards': [{'board_num': 2, 'stock_count': 12}],
            }}

    class FakeMgr:
        def fuyao_capability_enabled(self, cap):
            return True

        def fuyao_client(self):
            return FakeClient()

    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(), raising=False)

    out = em.official_limit_stats('2026-11-03')
    assert out['available'] is True
    assert out['seal_rate'] == 0.5926 and out['open_stock_count'] == 33
    assert out['levels'][0]['promotion_rate'] == 0.11
    assert out['exact_boards'][0]['board_num'] == 2
    assert 'seal_rate' in out['meta']['formula']
    assert '不是全市场晋级率' in out['meta']['formula']['promotion_rate']
    assert 'ST' in out['meta']['caliber']


def test_official_stats_degrades_when_capability_off(monkeypatch):
    class FakeMgr:
        def fuyao_capability_enabled(self, cap):
            return False

        def fuyao_client(self):
            raise AssertionError('能力关闭时不应取数')

    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(), raising=False)
    out = em.official_limit_stats('2026-11-03')
    assert out['available'] is False and out['reason'] == 'capability_disabled'


def test_official_stats_degrades_when_not_configured(monkeypatch):
    class FakeMgr:
        def fuyao_capability_enabled(self, cap):
            return True

        def fuyao_client(self):
            return None

    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(), raising=False)
    out = em.official_limit_stats('2026-11-03')
    assert out['available'] is False and out['reason'] == 'not_configured'
