#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""DWH 因子集成测试 (v7.0.0 / B4.4, TC-FY-7.0-09)

守护：DWH 命中时不走逐票；DWH 不可用/陈旧/未启用时一律回落（DWH 不是唯一路径）。
"""

import factor_ic


class FakeBackend:
    def __init__(self, enabled=True, available=True, rows=None, latest='2026-11-03'):
        self.enabled = enabled
        self._rows = rows if rows is not None else [
            ('600519.SH', '2026-11-02', 1439.1),
            ('000001.SZ', '2026-11-02', 11.54),
        ]
        self._latest = latest

    def status(self):
        return {'available': self._available(), 'rows': len(self._rows),
                'latest_date': self._latest}

    def _available(self):
        return bool(self._rows)

    def query(self, sql, params=None, limit=None):
        return {'columns': ['thscode', 'trade_date', 'close'], 'rows': self._rows}


def test_dwh_hit_returns_panel(monkeypatch):
    import dwh
    monkeypatch.setattr(dwh, 'get_backend', lambda *a, **k: FakeBackend(), raising=False)
    out = factor_ic.load_panel_from_dwh(['600519.SH'], '2026-10-01', '2026-11-03')
    assert out and out['source'] == 'dwh'
    assert len(out['rows']) == 1 and out['rows'][0]['ts_code'] == '600519.SH'


def test_dwh_disabled_falls_back(monkeypatch):
    import dwh
    monkeypatch.setattr(dwh, 'get_backend',
                        lambda *a, **k: FakeBackend(enabled=False), raising=False)
    assert factor_ic.load_panel_from_dwh(['600519.SH'], '2026-10-01', '2026-11-03') is None


def test_dwh_empty_falls_back(monkeypatch):
    import dwh
    monkeypatch.setattr(dwh, 'get_backend',
                        lambda *a, **k: FakeBackend(rows=[]), raising=False)
    assert factor_ic.load_panel_from_dwh(['600519.SH'], '2026-10-01', '2026-11-03') is None


def test_dwh_future_data_falls_back(monkeypatch):
    """TC-FY-7.0-08: 库内最新日期晚于窗口右界 → 拒绝使用（防未来函数）"""
    import dwh
    monkeypatch.setattr(dwh, 'get_backend',
                        lambda *a, **k: FakeBackend(latest='2026-11-10'), raising=False)
    assert factor_ic.load_panel_from_dwh(['600519.SH'], '2026-10-01', '2026-11-03') is None


def test_dwh_exception_falls_back(monkeypatch):
    import dwh

    def boom(*a, **k):
        raise RuntimeError('duckdb broken')

    monkeypatch.setattr(dwh, 'get_backend', boom, raising=False)
    assert factor_ic.load_panel_from_dwh(['600519.SH'], '2026-10-01', '2026-11-03') is None


def test_dwh_api_status_and_refresh_degrade(monkeypatch):
    """B4.5: 端点必须如实降级（依赖缺失/失败不抛 500）"""
    import asyncio
    import api.v1.dwh as dwh_api

    class BoomBackend:
        def status(self):
            raise RuntimeError('duckdb missing')

    import dwh
    monkeypatch.setattr(dwh, 'get_backend', lambda *a, **k: BoomBackend(), raising=False)
    st = asyncio.run(dwh_api.dwh_status(_={}))
    assert st['available'] is False and 'duckdb missing' in st['reason']

    def boom_sync(**kw):
        raise RuntimeError('download failed')

    class BoomSync:
        def sync_mode(self, d):
            return 'FULL'

        def sync(self, **kw):
            raise RuntimeError('download failed')

    monkeypatch.setattr(dwh, 'get_backend', lambda *a, **k: BoomSync(), raising=False)
    out = asyncio.run(dwh_api.dwh_refresh(_={}))
    assert out['success'] is False and 'download failed' in out['message']


def test_dwh_routes_registered():
    import api.v1.router as r
    # v7.3.3: 改为以 OpenAPI 契约为准（旧写法在 fastapi 0.162 上取到空集）
    import route_paths_helper
    paths = route_paths_helper.api_paths()
    assert '/api/dwh/status' in paths and '/api/dwh/refresh' in paths
