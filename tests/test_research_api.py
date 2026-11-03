#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""研究看板接口测试 (v7.1.0 / B5.4)"""
import asyncio



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
