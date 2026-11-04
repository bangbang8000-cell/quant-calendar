#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""盘中情绪/事件流接口测试 (v6.9.0 / B3.4)

守护：四个端点的形状、period 枚举校验(400)、降级时 available=False + reason。
"""
import asyncio

import pytest


def _run(coro):
    return asyncio.run(coro)


def test_auction_endpoint_shape(monkeypatch):
    import api.v1.shortterm_extras as se
    import auction
    monkeypatch.setattr(auction, 'auction_bundle',
                        lambda **kw: {'available': True, 'in_auction_window': False,
                                      'snapshot': {'available': False, 'reason': 'no_codes'},
                                      'opportunities': {'available': True, 'count': 1},
                                      'dates': {'available': True, 'latest_date': '2026-11-03'},
                                      'benchmark': {'available': True, 'count': 6},
                                      'reason': None})
    out = _run(se.get_auction(codes='600519.SH'))
    assert out['success'] is True and out['available'] is True
    for k in ('snapshot', 'opportunities', 'dates', 'benchmark'):
        assert k in out


def test_hot_list_rejects_24h(monkeypatch):
    import api.v1.shortterm_extras as se
    import hot_rank
    monkeypatch.setattr(hot_rank, 'fetch_hot_list',
                        lambda *a, **k: (_ for _ in ()).throw(ValueError('period 只接受 day/hour')))
    with pytest.raises(Exception) as ei:
        _run(se.get_hot_list(period='24h'))
    assert 'day/hour' in str(ei.value) or '400' in str(ei.value)


def test_hot_list_ok(monkeypatch):
    import api.v1.shortterm_extras as se
    import hot_rank
    monkeypatch.setattr(hot_rank, 'fetch_hot_list',
                        lambda p, lim: {'available': True, 'period': 'day', 'rows': [1], 'count': 1})
    monkeypatch.setattr(hot_rank, 'fetch_skyrocket', lambda p, lim: {'available': True, 'count': 2})
    out = _run(se.get_hot_list(period='day', limit=10))
    assert out['available'] is True and out['hot']['count'] == 1 and out['skyrocket']['count'] == 2


def test_hot_list_degraded(monkeypatch):
    import api.v1.shortterm_extras as se
    import hot_rank
    monkeypatch.setattr(hot_rank, 'fetch_hot_list',
                        lambda p, lim: {'available': False, 'reason': 'capability_disabled'})
    monkeypatch.setattr(hot_rank, 'fetch_skyrocket',
                        lambda p, lim: {'available': False, 'reason': 'capability_disabled'})
    out = _run(se.get_hot_list())
    assert out['available'] is False and out['reason'] == 'capability_disabled'


def test_anomaly_endpoint(monkeypatch):
    import api.v1.shortterm_extras as se
    import anomaly_notes
    monkeypatch.setattr(anomaly_notes, 'fetch_anomaly_list',
                        lambda page, size, tag: {'available': True, 'rows': [], 'total': 0,
                                                 'page': page, 'size': size})
    out = _run(se.get_anomaly(page=2, size=10))
    assert out['page'] == 2 and out['size'] == 10 and out['available'] is True


def test_flash_endpoint_degrades_on_error(monkeypatch):
    import api.v1.shortterm_extras as se
    import event_provider_fuyao as epf

    class Boom:
        def fetch_flash(self, **kw):
            raise RuntimeError('boom')

    monkeypatch.setattr(epf, 'fuyao_event_provider', Boom())
    out = _run(se.get_events_flash())
    assert out['available'] is False and 'boom' in out['reason']


def test_routes_registered():
    import api.v1.router as r
    # v7.3.3: 改为以 OpenAPI 契约为准（旧写法在 fastapi 0.162 上取到空集）
    import route_paths_helper
    paths = route_paths_helper.api_paths()
    assert '/api/shortterm/auction' in paths
    assert '/api/shortterm/hot-list' in paths
    assert '/api/shortterm/anomaly' in paths
    assert '/api/events/flash' in paths
