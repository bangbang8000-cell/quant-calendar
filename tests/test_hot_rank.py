#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""热榜测试 (v6.9.0 / B3.2, TC-FY-6.9-03/04)

守护：period 枚举（day/hour，拒绝 24h/1h）、日期格式自动转 yyyy-MM-dd、Top30 截断口径。
"""
import pytest

import hot_rank


class FakeClient:
    def __init__(self, payloads=None):
        self.payloads = payloads or {}
        self.calls = []

    def get(self, cap, path, params=None):
        self.calls.append((path, dict(params or {})))
        return {'ok': True, 'data': self.payloads.get(path, {'item': []})}


class FakeMgr:
    def __init__(self, client, enabled=True):
        self._c = client
        self._enabled = enabled

    def fuyao_capability_enabled(self, cap):
        return self._enabled

    def fuyao_client(self):
        return self._c


@pytest.fixture(autouse=True)
def clear_cache():
    hot_rank.reset_cache()
    yield
    hot_rank.reset_cache()


def test_reject_24h_and_1h(monkeypatch):
    """TC-FY-6.9-03: 上游只认 day/hour，我方必须前置拦截并给出正确提示"""
    with pytest.raises(ValueError) as e1:
        hot_rank.normalize_period('24h')
    assert 'day' in str(e1.value)
    with pytest.raises(ValueError) as e2:
        hot_rank.normalize_period('1h')
    assert 'hour' in str(e2.value)
    with pytest.raises(ValueError):
        hot_rank.normalize_period('weekly')
    assert hot_rank.normalize_period('day') == 'day'
    assert hot_rank.normalize_period('HOUR') == 'hour'
    assert hot_rank.normalize_period(None) == 'day'


def test_iso_date_conversion():
    """TC-FY-6.9-04: yyyyMMdd 必须自动转 yyyy-MM-dd（上游严格）"""
    assert hot_rank.iso_date('20261103') == '2026-11-03'
    assert hot_rank.iso_date('2026-11-03') == '2026-11-03'
    assert hot_rank.iso_date('2026/11/03') == '2026-11-03'
    from datetime import datetime, timedelta, timezone
    ms = int(datetime(2026, 11, 3, tzinfo=timezone(timedelta(hours=8))).timestamp() * 1000)
    assert hot_rank.iso_date(ms) == '2026-11-03'
    assert hot_rank.iso_date(None) is None


def test_hot_list_marks_truncation(monkeypatch):
    items = [{'thscode': '300308.SZ', 'rank': i + 1} for i in range(30)]
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient({'/api/a-share/special-data/hot-stock-list': {'item': items}})),
                        raising=False)
    out = hot_rank.fetch_hot_list('day', 30)
    assert out['available'] and out['count'] == 30 and out['truncated'] is True
    assert 'top30' in out['note'].lower() or 'Top30' in out['note']


def test_rank_trend_passes_iso_dates(monkeypatch):
    client = FakeClient({'/api/a-share/special-data/hot-stock-rank-trend': {
        'item': [{'date': '2026-11-03', 'rank': 1}, {'date': '2026-10-01', 'rank': 18}]}})
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)

    out = hot_rank.fetch_rank_trend('300308.SZ', '20261001', '20261103')
    assert out['available'] is True and out['best_rank'] == 1 and out['worst_rank'] == 18
    _, params = client.calls[0]
    assert params['start_date'] == '2026-10-01' and params['end_date'] == '2026-11-03'
    assert '非 Top30' in out['note']


def test_rank_trend_requires_all_params(monkeypatch):
    out = hot_rank.fetch_rank_trend('300308.SZ', '', '20261103')
    assert out['available'] is False and out['reason'] == 'invalid_param'


def test_degrades_when_capability_off(monkeypatch):
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(), enabled=False), raising=False)
    out = hot_rank.fetch_hot_list('day')
    assert out['available'] is False and out['reason'] == 'capability_disabled'


def test_skyrocket_and_history(monkeypatch):
    payloads = {
        '/api/a-share/special-data/skyrocket-list': {'item': [{'rank': 1}]},
        '/api/a-share/special-data/hot-stock-list-history': {'item': [{'rank': 1}]},
    }
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(payloads)), raising=False)
    assert hot_rank.fetch_skyrocket('hour', 10)['count'] == 1
    h = hot_rank.fetch_hot_history('20261103')
    assert h['available'] and h['date'] == '2026-11-03'
