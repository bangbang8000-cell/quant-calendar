"""
实时行情 WS 激活测试 (FR-3.18.3 / T4)

覆盖:
- _fetch_from_tushare: 死代码激活 — tushare 快照解析/代码规范化/未订阅忽略
- 回退链: akshare 不可达 → tushare 回退成功; akshare 成功 → 不触发 tushare
- 双源均不可达 → fetch_quotes 优雅降级 (degraded=True + 空数据, 不抛错)
- fetch_quotes 层回退 (无注入 fetcher 时走真实源链)
"""
import sys
import types

import pytest

from realtime_quotes import RealtimeQuoteSource


class _FakeRow:
    def __init__(self, data):
        self._d = data

    def get(self, k, default=None):
        return self._d.get(k, default)


class _FakeDF:
    def __init__(self, rows):
        self._rows = rows

    def iterrows(self):
        for i, r in enumerate(self._rows):
            yield i, r

    def __len__(self):
        return len(self._rows)


def _tushare_rows():
    return [
        _FakeRow({'code': '600519', 'name': '贵州茅台', 'price': '1500.0', 'pre_close': '1480.0'}),
        _FakeRow({'code': '000001', 'name': '平安银行', 'price': '12.0', 'pre_close': '12.0'}),
        _FakeRow({'code': '999999', 'price': '1.0', 'pre_close': '1.0'}),  # 非订阅/非法 → 忽略
    ]


# ==================== _fetch_from_tushare 激活 ====================


def test_fetch_from_tushare_parses(monkeypatch):
    src = RealtimeQuoteSource()
    fake_ts = types.SimpleNamespace(
        get_realtime_quotes=lambda ts_code=None: _FakeDF(_tushare_rows()))
    monkeypatch.setitem(sys.modules, 'tushare', fake_ts)
    quotes, degraded = src._fetch_from_tushare(['600519.SH', '000001.SZ'])
    assert degraded is False
    assert quotes['600519.SH']['price'] == 1500.0
    assert quotes['600519.SH']['pre_close'] == 1480.0
    assert quotes['000001.SZ']['price'] == 12.0
    assert '999999' not in quotes


def test_fetch_from_tushare_empty_raises(monkeypatch):
    src = RealtimeQuoteSource()
    fake_ts = types.SimpleNamespace(
        get_realtime_quotes=lambda ts_code=None: _FakeDF([]))
    monkeypatch.setitem(sys.modules, 'tushare', fake_ts)
    with pytest.raises(RuntimeError):
        src._fetch_from_tushare(['600519.SH'])


# ==================== 回退链: akshare → tushare ====================


def test_akshare_fails_then_tushare_fallback(monkeypatch):
    src = RealtimeQuoteSource()
    monkeypatch.setattr(src, '_fetch_from_akshare',
                        lambda codes: (_ for _ in ()).throw(RuntimeError('ak down')))
    monkeypatch.setattr(src, '_fetch_from_tushare',
                        lambda codes: ({'600519.SH': {'price': 1500.0, 'pre_close': 1480.0}}, False))
    quotes, degraded = src._fetch_from_data_source(['600519.SH'])
    assert degraded is False
    assert quotes['600519.SH']['price'] == 1500.0


def test_akshare_ok_skips_tushare(monkeypatch):
    src = RealtimeQuoteSource()
    called = []
    monkeypatch.setattr(src, '_fetch_from_akshare',
                        lambda codes: ({'600519.SH': {'price': 1500.0}}, False))
    monkeypatch.setattr(src, '_fetch_from_tushare',
                        lambda codes: called.append(1) or ({}, False))
    quotes, degraded = src._fetch_from_data_source(['600519.SH'])
    assert degraded is False
    assert called == [], 'akshare 成功时不应调用 tushare 回退'


def test_both_fail_degraded(monkeypatch):
    src = RealtimeQuoteSource()
    monkeypatch.setattr(src, '_fetch_from_akshare',
                        lambda codes: (_ for _ in ()).throw(RuntimeError('ak')))
    monkeypatch.setattr(src, '_fetch_from_tushare',
                        lambda codes: (_ for _ in ()).throw(RuntimeError('ts')))
    quotes, degraded = src.fetch_quotes(['600519.SH'])
    assert degraded is True
    assert quotes == {}


# ==================== fetch_quotes 层回退 (真实源链) ====================


def test_fetch_quotes_fallback_to_tushare(monkeypatch):
    src = RealtimeQuoteSource()  # 无注入 fetcher → 走真实源链
    monkeypatch.setattr(src, '_fetch_from_akshare',
                        lambda codes: (_ for _ in ()).throw(RuntimeError('ak')))
    monkeypatch.setattr(src, '_fetch_from_tushare',
                        lambda codes: ({'600519.SH': {'price': 1500.0, 'pre_close': 1480.0}}, False))
    quotes, degraded = src.fetch_quotes(['600519.SH'])
    assert degraded is False
    assert quotes['600519.SH']['price'] == 1500.0
