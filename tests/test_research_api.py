#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""研究看板接口测试 (v7.1.0 / B5.4)"""
import asyncio

import pytest



def _run(c):
    return asyncio.run(c)


MATRIX = {'available': True, 'generated_at': '2026-11-03 21:00', 'requested': 1, 'covered': 1,
          'rows': [{'index_code': '881129.TI', 'name': '通信设备',
                    'rel': {'rel_20': 5.6}, 'acceleration': 1.2, 'volume_pulse': 1.1,
                    'rank_20': 1, 'rank_change': 0}],
          'meta': {'source': 'fuyao', 'endpoints': ['/api/x'], 'caliber': '等权涨跌代理',
                   'disclaimer': '仅供数据观察，不构成投资建议'}}


def test_matrix_endpoint_cache_and_refresh(monkeypatch):
    import api.v1.research as r
    import industry_strength as ist
    calls = {'get': 0, 'refresh': 0}

    monkeypatch.setattr(ist, 'get_matrix', lambda **k: (calls.__setitem__('get', calls['get'] + 1) or MATRIX), raising=False)
    monkeypatch.setattr(ist, 'refresh', lambda limit=None: (calls.__setitem__('refresh', calls['refresh'] + 1) or MATRIX), raising=False)

    out = _run(r.industry_strength(refresh=0, limit=None))
    assert out['success'] is True and out['available'] is True and calls['refresh'] == 0
    _run(r.industry_strength(refresh=1, limit=5))
    assert calls['refresh'] == 1


def test_matrix_endpoint_degrades(monkeypatch):
    import api.v1.research as r
    import industry_strength as ist

    def boom(**k):
        raise RuntimeError('fuyao down')

    monkeypatch.setattr(ist, 'get_matrix', boom, raising=False)
    out = _run(r.industry_strength(refresh=0, limit=None))
    assert out['available'] is False and 'fuyao down' in out['reason']


def test_export_endpoint_streams_html(monkeypatch):
    import api.v1.research as r
    import industry_strength as ist
    monkeypatch.setattr(ist, 'get_matrix', lambda **k: MATRIX, raising=False)
    resp = _run(r.industry_export(user={}))
    assert getattr(resp, 'body', b'') and b'qc-footer-meta' in resp.body
    assert 'attachment' in (resp.headers.get('content-disposition') or '')


def test_export_endpoint_refuses_without_data(monkeypatch):
    import api.v1.research as r
    import industry_strength as ist
    monkeypatch.setattr(ist, 'get_matrix', lambda **k: None, raising=False)
    out = _run(r.industry_export(user={}))
    assert out['success'] is False and '暂无可用矩阵' in out['message']


def test_export_to_disk_admin(monkeypatch, tmp_path):
    import api.v1.research as r
    import industry_strength as ist
    import paths
    monkeypatch.setattr(paths, 'DATA_DIR', str(tmp_path), raising=False)
    monkeypatch.setattr(ist, 'get_matrix', lambda **k: MATRIX, raising=False)
    out = _run(r.industry_export_to_disk(_={}))
    assert out['success'] is True and out['bytes'] > 500
    assert out['path'].endswith('.html')


def test_routes_registered():
    import api.v1.router as rr
    paths = {getattr(x, 'path', '') for x in rr.api_router.routes}
    assert '/api/research/industry-strength' in paths
    assert '/api/research/industry-export' in paths


def test_sentiment_pulse_endpoint(monkeypatch):
    import api.v1.research as r
    import sentiment_pulse as sp
    monkeypatch.setattr(sp, 'build_pulse',
                        lambda d, pool, lad: {'available': True, 'date': d,
                                              'counts': {'limit_up_count': 3}}, raising=False)
    import shortterm.fetchers as f
    import shortterm.ladder as lad
    import shortterm.trade_calendar as tc
    monkeypatch.setattr(f, 'fetch_zt_pool', lambda d, prefer=None: {'available': True, 'rows': [{}]}, raising=False)
    monkeypatch.setattr(lad, 'fetch_ladder_fuyao', lambda *a, **k: ({'available': True, 'days': []}, {}), raising=False)
    monkeypatch.setattr(tc, 'latest_session', lambda: '2026-11-03', raising=False)
    out = _run(r.sentiment_pulse(date=None, user={}))
    assert out['success'] is True and out['available'] is True


def test_sentiment_pulse_degrades(monkeypatch):
    import api.v1.research as r
    import shortterm.fetchers as f
    import shortterm.trade_calendar as tc
    monkeypatch.setattr(tc, 'latest_session', lambda: '2026-11-03', raising=False)

    def boom(*a, **k):
        raise RuntimeError('pool down')

    monkeypatch.setattr(f, 'fetch_zt_pool', boom, raising=False)
    out = _run(r.sentiment_pulse(date='2026-11-03', user={}))
    assert out['available'] is False and 'pool down' in out['reason']


def test_lhb_topology_endpoint(monkeypatch):
    import api.v1.research as r
    import shortterm.lhb as lhb
    import shortterm.trade_calendar as tc
    monkeypatch.setattr(tc, 'last_trade_dates', lambda n, end=None: ['2026-11-03'], raising=False)
    monkeypatch.setattr(lhb, 'fetch_lhb', lambda a, b: {'available': True, 'rows': [
        {'ts_code': '1', 'net_buy': 10.0, 'concepts': ['c1'], 'range_days': 1}]}, raising=False)
    out = _run(r.lhb_topology(days=1, end=None, user={}))
    assert out['success'] is True and out['conservation_ok'] is True
    assert out['concepts'][0]['concept'] == 'c1'


def test_attention_resonance_endpoint(monkeypatch):
    import api.v1.research as r
    import attention_resonance as ar
    import hot_rank
    monkeypatch.setattr(hot_rank, 'fetch_hot_list',
                        lambda p, n: {'rows': [{'thscode': 'A', 'rank': 1}]}, raising=False)
    monkeypatch.setattr(ar, 'resonance',
                        lambda rows, closes, window: {'available': True, 'spearman': -0.5,
                                                      'verdict': 'resonant'}, raising=False)
    out = _run(r.attention_resonance(period='day', window=5, user={}))
    assert out['success'] is True and out['verdict'] == 'resonant'


def test_attention_resonance_rejects_bad_period(monkeypatch):
    import api.v1.research as r
    import hot_rank
    def bad(p, n):
        raise ValueError('period 只接受 day/hour')

    monkeypatch.setattr(hot_rank, 'fetch_hot_list', bad, raising=False)
    with pytest.raises(Exception) as ei:
        _run(r.attention_resonance(period='24h', window=5, user={}))
    assert 'day/hour' in str(ei.value) or '400' in str(ei.value)


def test_v72_routes_registered():
    import api.v1.router as rr
    paths = {getattr(x, 'path', '') for x in rr.api_router.routes}
    for p in ('/api/research/sentiment-pulse', '/api/research/lhb-topology',
              '/api/research/attention-resonance'):
        assert p in paths
