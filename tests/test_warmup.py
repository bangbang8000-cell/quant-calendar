#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""研究接口预热测试 (v7.3.2)

守护：DWH 不可用时静默跳过、缓存已有结果时不重复计算、后台启动幂等、失败不影响服务。
"""
import pytest

import ttl_cache
import warmup


class FakeBackend:
    def __init__(self, available=True, rows=None, latest='2026-11-03', fail=False):
        self._available = available
        self._rows = rows if rows is not None else [
            ['A', '2026-01-05', 10.0], ['A', '2026-01-06', 10.5],
            ['B', '2026-01-05', 20.0], ['B', '2026-01-06', 19.5],
        ]
        self._latest = latest
        self._fail = fail

    def status(self):
        if self._fail:
            raise RuntimeError('db broken')
        return {'available': self._available, 'latest_date': self._latest,
                'rows': len(self._rows), 'reason': None if self._available else 'db_missing'}

    def query(self, sql, params=None, limit=None):
        return {'columns': ['a', 'b', 'c'], 'rows': self._rows}


def test_skip_when_dwh_unavailable(monkeypatch):
    import dwh
    monkeypatch.setattr(dwh, 'get_backend', lambda *a, **k: FakeBackend(available=False), raising=False)
    assert warmup.warm_backtest_lab() is False


def test_skip_when_already_cached(monkeypatch):
    """已有同 key 缓存 → 不再计算（避免重复 10s 计算）"""
    import dwh
    backend = FakeBackend()
    monkeypatch.setattr(dwh, 'get_backend', lambda *a, **k: backend, raising=False)
    key = ('backtest-lab', warmup.DEFAULT_LOOKBACK, warmup.DEFAULT_TOP_K,
           warmup.DEFAULT_START, warmup.DEFAULT_FRAC, '2026-11-03', 4)
    ttl_cache.put(key, {'panel_rows': 4, 'full': {'total_return': 1.0}})
    calls = []
    monkeypatch.setattr(backend, 'query', lambda *a, **k: calls.append(1) or {'rows': []}, raising=False)
    assert warmup.warm_backtest_lab() is True
    assert calls == [], '命中缓存时不应再查库'


def test_warm_failure_is_swallowed(monkeypatch):
    """预热抛异常必须被吞掉（不能影响服务）"""
    import dwh

    def boom(*a, **k):
        raise RuntimeError('boom')

    monkeypatch.setattr(dwh, 'get_backend', boom, raising=False)
    assert warmup.warm_backtest_lab() is False


def test_warm_computes_and_caches(monkeypatch):
    import dwh
    backend = FakeBackend()
    monkeypatch.setattr(dwh, 'get_backend', lambda *a, **k: backend, raising=False)
    ok = warmup.warm_backtest_lab(lookback=1, top_k=1, start='2026-01-01', in_sample_frac=0.7)
    assert ok is True
    key = ('backtest-lab', 1, 1, '2026-01-01', 0.7, '2026-11-03', 4)
    assert ttl_cache.get(key) is not None


def test_background_start_is_idempotent_and_non_blocking():
    warmup.reset()
    assert warmup.start_background(delay=3600) is True
    assert warmup.start_background(delay=3600) is False, '第二次启动应被忽略'
    warmup.reset()


def test_warm_industry_skips_when_fresh(monkeypatch):
    import industry_strength as ist
    monkeypatch.setattr(ist, 'load_cache', lambda max_age=None: {'available': True, 'stale': False},
                        raising=False)
    started = []
    monkeypatch.setattr(ist, 'start_background_refresh', lambda: started.append(1), raising=False)
    assert warmup.warm_industry_matrix() is False
    assert started == []


def test_warm_industry_starts_refresh_when_stale(monkeypatch):
    import industry_strength as ist
    monkeypatch.setattr(ist, 'load_cache', lambda max_age=None: {'available': True, 'stale': True},
                        raising=False)
    monkeypatch.setattr(ist, 'start_background_refresh', lambda: True, raising=False)
    assert warmup.warm_industry_matrix() is True
