# -*- coding: utf-8 -*-
"""
盘中增强：异动扫描 + 事件提醒（离线日线级）— FR-3.17.7 离线部分
纯函数为主，不触网。覆盖：
- classify_moves: 涨停/跌停/量比/振幅/连板（含市场差异 ST/创业板）
- filter_pool: 按股票池过滤
- run_scan: 数据不可达优雅降级 / 部分成功 / 日期过滤（fake manager）
- build_events: 默认 provider 不可达降级 / 可用 provider 返回事件
- get_alertable_codes: 按用户 watchlist/portfolio（fake db）
"""
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import scan_engine
import event_alert


def _bar(d, o, c, low, high, vol):
    return [d, o, c, low, high, vol]


def _rows_from_bars(bars):
    """把 kline 数组序列转为归一化日线 dict 序列（供 classify_moves 直接消费）"""
    return scan_engine._normalize_kline_response('000001.SZ', {'data': bars, 'data_source': 'fake'})


# ─── classify_moves 各规则 ───────────────────────────────

def test_classify_limit_up_main_board():
    """主板 +10% 涨停"""
    rows = _rows_from_bars([
        _bar('20260713', 10.0, 10.0, 9.9, 10.1, 1e6),
        _bar('20260714', 10.0, 11.0, 10.0, 11.0, 2e6),
    ])
    labels = scan_engine.classify_moves(rows, code='000001.SZ')
    assert scan_engine.LABEL_LIMIT_UP in labels


def test_classify_limit_down():
    """主板 -10% 跌停"""
    rows = _rows_from_bars([
        _bar('20260713', 10.0, 10.0, 9.9, 10.1, 1e6),
        _bar('20260714', 10.0, 9.0, 9.0, 10.0, 2e6),
    ])
    labels = scan_engine.classify_moves(rows, code='000001.SZ')
    assert scan_engine.LABEL_LIMIT_DOWN in labels


def test_classify_volume_ratio():
    """量比 = 当日量 / 前5日均量 ≥ 2 → 放量"""
    bars = [_bar(f'2026070{i + 1}', 10, 10, 9.9, 10.1, 1_000_000) for i in range(5)]
    bars.append(_bar('20260708', 10, 10.2, 9.9, 10.3, 3_000_000))
    labels = scan_engine.classify_moves(_rows_from_bars(bars), code='000001.SZ')
    assert scan_engine.LABEL_VOLUME in labels


def test_classify_amplitude():
    """振幅 = (high-low)/前收*100 ≥ 8 → 异动振幅"""
    rows = _rows_from_bars([
        _bar('20260713', 10.0, 10.0, 9.9, 10.1, 1e6),
        _bar('20260714', 10.0, 10.5, 9.0, 11.0, 1e6),
    ])
    labels = scan_engine.classify_moves(rows, code='000001.SZ')
    assert scan_engine.LABEL_AMPLITUDE in labels


def test_classify_linked_limit_up():
    """连续涨停 2 天 → 连板"""
    rows = _rows_from_bars([
        _bar('20260710', 10.0, 10.0, 9.9, 10.1, 1e6),
        _bar('20260713', 10.0, 11.0, 10.0, 11.0, 2e6),
        _bar('20260714', 11.0, 12.1, 11.0, 12.1, 3e6),
    ])
    labels = scan_engine.classify_moves(rows, code='000001.SZ')
    assert scan_engine.LABEL_LINKED in labels
    assert scan_engine.LABEL_LIMIT_UP in labels


def test_classify_chinext_20pct_limit():
    """创业板 300xxx → 20% 涨停（主板 20% 并非涨停）"""
    rows = _rows_from_bars([
        _bar('20260713', 10.0, 10.0, 9.9, 10.1, 1e6),
        _bar('20260714', 10.0, 12.0, 10.0, 12.0, 2e6),
    ])
    labels = scan_engine.classify_moves(rows, code='300750.SZ')
    assert scan_engine.LABEL_LIMIT_UP in labels
    labels_main = scan_engine.classify_moves(rows, code='000001.SZ')
    assert scan_engine.LABEL_LIMIT_UP not in labels_main


def test_classify_st_5pct_limit():
    """ST → 5% 涨停（+10% 主板并非 ST 涨停语义）"""
    rows = _rows_from_bars([
        _bar('20260713', 10.0, 10.0, 9.9, 10.1, 1e6),
        _bar('20260714', 10.0, 10.5, 10.0, 10.5, 2e6),
    ])
    labels = scan_engine.classify_moves(rows, code='000001.SZ', name='ST某某')
    assert scan_engine.LABEL_LIMIT_UP in labels
    labels_plain = scan_engine.classify_moves(rows, code='000001.SZ', name='平安银行')
    assert scan_engine.LABEL_LIMIT_UP not in labels_plain


def test_classify_empty_rows():
    """空序列 → 无标签"""
    assert scan_engine.classify_moves([]) == []


def test_classify_pct_chg_computed_from_close():
    """rows 无 pct_chg 字段时由收盘价推算"""
    rows = [
        {'date': '20260713', 'close': 10.0, 'vol': 1e6},
        {'date': '20260714', 'close': 11.0, 'vol': 2e6},
    ]
    labels = scan_engine.classify_moves(rows, code='000001.SZ')
    assert scan_engine.LABEL_LIMIT_UP in labels


# ─── filter_pool ─────────────────────────────────────────

def test_filter_pool_filters():
    moves = [
        {'code': '000001.SZ', 'labels': ['涨停']},
        {'code': '600519.SH', 'labels': ['放量']},
        {'code': '300750.SZ', 'labels': ['连板']},
    ]
    out = scan_engine.filter_pool(moves, ['000001.SZ', '300750.SZ'])
    assert [m['code'] for m in out] == ['000001.SZ', '300750.SZ']


def test_filter_pool_empty_pool_no_filter():
    moves = [{'code': '000001.SZ', 'labels': ['涨停']}]
    assert scan_engine.filter_pool(moves, []) == moves
    assert scan_engine.filter_pool(moves, None) == moves


# ─── run_scan（fake manager，不触网） ─────────────────────

def test_run_scan_data_unavailable_degrades():
    """数据不可达整体降级：moves 空 + note '数据暂不可用'"""

    class FakeManager:
        def get_kline_data(self, ts_code, period='daily', limit=60):
            return None

    result = scan_engine.run_scan(pool=['000001.SZ'], manager=FakeManager())
    assert result['moves'] == []
    assert result['note'] == '数据暂不可用'


def test_run_scan_partial_success_with_note():
    """部分成功：返回可达股票的异动 + note 注明不可达数量"""

    class FakeManager:
        def __init__(self):
            self.good = {
                '000001.SZ': {'data': [
                    _bar('20260713', 10.0, 10.0, 9.9, 10.1, 1e6),
                    _bar('20260714', 10.0, 11.0, 10.0, 11.0, 2e6),
                ], 'data_source': 'fake'},
            }

        def get_kline_data(self, ts_code, period='daily', limit=60):
            return self.good.get(ts_code)

    result = scan_engine.run_scan(pool=['000001.SZ', '600519.SH'], manager=FakeManager())
    assert len(result['moves']) == 1
    assert result['moves'][0]['code'] == '000001.SZ'
    assert scan_engine.LABEL_LIMIT_UP in result['moves'][0]['labels']
    assert result['note'] and '数据不可达' in result['note']


def test_run_scan_empty_pool():
    """空扫描范围 → 优雅提示"""

    class FakeManager:
        def get_kline_data(self, ts_code, period='daily', limit=60):
            return None

    result = scan_engine.run_scan(pool=[], manager=FakeManager())
    assert result['moves'] == []
    assert '暂无扫描范围' in result['note']


def test_run_scan_date_filter():
    """指定日期：仅纳入截至该日的K线，异动以该日为准"""

    class FakeManager:
        def get_kline_data(self, ts_code, period='daily', limit=60):
            return {'data': [
                _bar('20260710', 10.0, 10.0, 9.9, 10.1, 1e6),
                _bar('20260713', 10.0, 11.0, 10.0, 11.0, 2e6),
                _bar('20260714', 11.0, 11.5, 10.8, 11.8, 3e6),
            ], 'data_source': 'fake'}

    result = scan_engine.run_scan(date='2026-07-13', pool=['000001.SZ'], manager=FakeManager())
    assert len(result['moves']) == 1
    assert result['moves'][0]['date'] == '20260713'
    assert scan_engine.LABEL_LIMIT_UP in result['moves'][0]['labels']


# ─── build_events（默认源不可达降级 + 可扩展 provider） ─────

def test_build_events_default_unavailable():
    """默认 provider 不可达 → events 空 + note 注明不可达"""
    result = event_alert.build_events(['000001.SZ', '600519.SH'])
    assert result['events'] == []
    assert result['note'] and '不可达' in result['note']


def test_build_events_with_available_provider():
    """注册可用 provider 后返回事件；默认源仍标注不可达"""

    class FakeProvider:
        name = 'fake'
        available = True

        def fetch_events(self, code):
            return [{'type': '业绩预告', 'title': '预增', 'date': '2026-07-15', 'name': '平安银行'}]

    event_alert.EVENT_PROVIDERS.append(FakeProvider())
    try:
        result = event_alert.build_events(['000001.SZ'])
        assert len(result['events']) == 1
        ev = result['events'][0]
        assert ev['code'] == '000001.SZ'
        assert ev['type'] == '业绩预告'
        assert ev['source'] == 'fake'
        assert 'default' in result['note']
    finally:
        event_alert.EVENT_PROVIDERS.pop()


# ─── get_alertable_codes（按用户，fake db） ───────────────

def test_get_alertable_codes_watchlist_by_user(monkeypatch):
    import db
    monkeypatch.setattr(db, 'schema_ok', lambda: True)
    monkeypatch.setattr(db, 'watchlist_get', lambda u: [
        {'stock_code': '000001.SZ', 'name': '平安银行', 'added_at': 'x'},
        {'stock_code': '600519.SH', 'name': '贵州茅台', 'added_at': 'x'},
    ])
    codes = event_alert.get_alertable_codes('alice', scope='watchlist')
    assert [c['code'] for c in codes] == ['000001.SZ', '600519.SH']
    assert codes[0]['name'] == '平安银行'


def test_get_alertable_codes_portfolio(monkeypatch):
    import db
    monkeypatch.setattr(db, 'portfolio_get_positions', lambda u: [
        {'stock_code': '000001.SZ', 'stock_name': '平安银行'},
        {'stock_code': '600036.SH', 'stock_name': ''},
    ])
    codes = event_alert.get_alertable_codes('alice', scope='portfolio')
    assert [c['code'] for c in codes] == ['000001.SZ', '600036.SH']
    assert codes[1]['name'] == '600036.SH'
