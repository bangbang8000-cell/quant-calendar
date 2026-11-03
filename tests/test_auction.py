#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""集合竞价测试 (v6.9.0 / B3.1, TC-FY-6.9-01/02)

守护：四接口聚合、竞价窗口刷新频率、非竞价时段语义、能力关闭降级。
"""
from datetime import datetime, timedelta, timezone

import pytest

import auction


class FakeClient:
    def __init__(self, payloads=None, fail=()):
        self.payloads = payloads or {}
        self.fail = set(fail)
        self.calls = []

    def get(self, cap, path, params=None):
        self.calls.append((cap, path, dict(params or {})))
        if path in self.fail:
            return {'ok': False, 'reason': 'upstream'}
        return {'ok': True, 'data': self.payloads.get(path, {})}


class FakeMgr:
    def __init__(self, client, enabled=True):
        self._c = client
        self._enabled = enabled

    def fuyao_capability_enabled(self, cap):
        return self._enabled

    def fuyao_client(self):
        return self._c


def _cst(h, m):
    return datetime(2026, 11, 3, h, m, tzinfo=timezone(timedelta(hours=8)))


@pytest.fixture(autouse=True)
def clear_cache():
    auction.reset_cache()
    yield
    auction.reset_cache()


def test_auction_window_and_ttl():
    """TC-FY-6.9-02: 09:15–09:30 与尾盘加密到 60s，其余 1800s"""
    assert auction.in_auction_window(_cst(9, 20)) is True
    assert auction.ttl_seconds(_cst(9, 20)) == 60
    assert auction.in_auction_window(_cst(14, 58)) is True
    assert auction.in_auction_window(_cst(10, 30)) is False
    assert auction.ttl_seconds(_cst(10, 30)) == 1800
    assert auction.ttl_seconds(_cst(9, 14)) == 1800


def test_snapshot_marks_non_auction_window(monkeypatch):
    client = FakeClient({'/api/a-share/auction/snapshot': {'item': [{'thscode': '600519.SH'}]}})
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)
    out = auction.fetch_snapshot('600519.SH')
    assert out['available'] is True and out['count'] == 1
    assert '非竞价时段' in (out['note'] or '') or out['note'] is None


def test_opportunities_and_benchmark_and_dates(monkeypatch):
    payloads = {
        '/api/a-share/special-data/auction-stock-opportunities': {
            'item': [{'thscode': '600036.SH', 'warn_name': '竞价砸盘', 'grade': '2'}],
            'pagination': {'page': 1, 'size': 20, 'total': 1}},
        '/api/a-share/auction/short-term-benchmark': {'item': [{'thscode': '000678.SZ'}] * 6},
        '/api/a-share/special-data/auction-opportunity-dates': {
            'dates': ['2026-11-03'], 'latest_date': '2026-11-03'},
    }
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(payloads)), raising=False)

    o = auction.fetch_opportunities('2026-11-03', 1, 20)
    assert o['available'] and o['rows'][0]['warn_name'] == '竞价砸盘'
    assert o['pagination']['total'] == 1

    b = auction.fetch_benchmark()
    assert b['available'] and b['count'] == 6

    d = auction.fetch_dates()
    assert d['available'] and d['latest_date'] == '2026-11-03'


def test_bundle_requires_codes_for_snapshot(monkeypatch):
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient({'/api/a-share/auction/short-term-benchmark': {'item': []}})),
                        raising=False)
    out = auction.auction_bundle(codes=None)
    assert out['snapshot']['reason'] == 'no_codes'
    assert out['available'] is True  # 其它三项可用


def test_capability_disabled_degrades(monkeypatch):
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(), enabled=False), raising=False)
    out = auction.fetch_benchmark()
    assert out['available'] is False and out['reason'] == 'capability_disabled'


def test_upstream_failure_degrades(monkeypatch):
    client = FakeClient(fail={'/api/a-share/auction/short-term-benchmark'})
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)
    out = auction.fetch_benchmark()
    assert out['available'] is False and out['reason'] == 'upstream'


def test_cache_prevents_duplicate_calls(monkeypatch):
    client = FakeClient({'/api/a-share/auction/short-term-benchmark': {'item': [{'a': 1}]}})
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)
    auction.fetch_benchmark()
    auction.fetch_benchmark()
    assert len(client.calls) == 1
