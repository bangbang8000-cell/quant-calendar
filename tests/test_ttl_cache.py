#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""进程内 TTL 缓存测试 (v7.3.2, TC-PERF-CACHE-01..05)

背景：`/api/research/backtest-lab` 单次 walkforward 实测 9.6~10.4 秒，
一分钟内重复计算纯属浪费；概览页每次进入都会触发 → 用户体感"每次点都要转很久"。
"""
import threading
import time

import pytest

import ttl_cache


def test_hit_avoids_recompute():
    """TC-PERF-CACHE-01: 同一 key 第二次不再调用 producer"""
    calls = []
    v1 = ttl_cache.cached('k1', 60, lambda: calls.append(1) or {'v': 1})
    v2 = ttl_cache.cached('k1', 60, lambda: calls.append(1) or {'v': 2})
    assert v1 == v2 == {'v': 1}
    assert len(calls) == 1


def test_expiry_recomputes():
    """TC-PERF-CACHE-02: 过期后重新计算"""
    calls = []
    ttl_cache.cached('k2', 0.05, lambda: calls.append(1) or 'a')
    time.sleep(0.08)
    val = ttl_cache.cached('k2', 0.05, lambda: calls.append(1) or 'b')
    assert val == 'b' and len(calls) == 2


def test_error_not_cached():
    """TC-PERF-CACHE-03: producer 抛异常不写缓存，下次仍会重试"""
    calls = []

    def boom():
        calls.append(1)
        raise RuntimeError('upstream')

    with pytest.raises(RuntimeError):
        ttl_cache.cached('k3', 60, boom)
    with pytest.raises(RuntimeError):
        ttl_cache.cached('k3', 60, boom)
    assert len(calls) == 2
    assert ttl_cache.get('k3') is None


def test_single_flight_concurrent():
    """TC-PERF-CACHE-04: 并发同 key 只计算一次（首屏多卡并发不重复算）"""
    calls = []
    results = []
    gate = threading.Event()

    def producer():
        calls.append(1)
        gate.wait(1.0)
        return 'done'

    def worker():
        results.append(ttl_cache.cached('k4', 60, producer))

    threads = [threading.Thread(target=worker) for _ in range(4)]
    for t in threads:
        t.start()
    time.sleep(0.1)
    gate.set()
    for t in threads:
        t.join(3)
    assert len(calls) == 1, '并发 4 个请求只应计算一次'
    assert results == ['done'] * 4


def test_invalidate_and_stats():
    ttl_cache.cached('research:a', 60, lambda: 1)
    ttl_cache.cached('research:b', 60, lambda: 2)
    ttl_cache.cached('other:c', 60, lambda: 3)
    removed = ttl_cache.invalidate('research:')
    assert removed == 2
    assert ttl_cache.get('research:a') is None
    assert ttl_cache.get('other:c') == 3
    st = ttl_cache.stats()
    assert st['entries'] >= 1 and st['misses'] >= 3


def test_put_and_get_readonly():
    ttl_cache.put('manual', {'x': 1}, ttl=60)
    assert ttl_cache.get('manual') == {'x': 1}
    ttl_cache.clear()
    assert ttl_cache.get('manual') is None
