#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""进程内 TTL 缓存 + 单飞（single-flight）(v7.3.2)

背景：v7.1–v7.3 给短线概览加了四张研究卡，其中 `/api/research/backtest-lab`
每次请求都要在 110 万行 DuckDB 面板上跑一遍 walkforward，实测 **9.6–10.4 秒**；
`sentiment-pulse` 每次 ~1 秒、`lhb-topology` 每次 0.3–1.4 秒。这些数据都是**日频**，
一分钟内重复计算纯属浪费——用户体感就是"每次点回来都要转很久"。

本模块提供：
- ``cached(key, ttl, producer)``：命中直接返回；未命中计算并缓存
- **单飞**：同一 key 并发请求只计算一次，其余等待同一个 Future（避免首屏并发重复算）
- ``clear()`` / ``stats()``：测试与可观测性

线程模型：FastAPI 同步端点跑在线程池，这里用 ``threading.Lock`` 保护字典；
计算过程在锁外进行，避免长任务阻塞其它 key。
"""

import logging
import threading
import time

logger = logging.getLogger(__name__)

_lock = threading.Lock()
_store = {}          # key -> (expire_at, value)
_inflight = {}       # key -> threading.Event + 结果槽
_hits = 0
_misses = 0

#: 数据是日频 → 默认 10 分钟足够，且不会让"当日新数据"等太久
DEFAULT_TTL = 600


class _Flight:
    __slots__ = ('event', 'value', 'error')

    def __init__(self):
        self.event = threading.Event()
        self.value = None
        self.error = None


def cached(key, ttl, producer):
    """取缓存或计算。producer 抛异常时不缓存，异常向调用方传播。"""
    global _hits, _misses
    now = time.time()
    with _lock:
        item = _store.get(key)
        if item and item[0] > now:
            _hits += 1
            return item[1]
        flight = _inflight.get(key)
        if flight is None:
            flight = _Flight()
            _inflight[key] = flight
            leader = True
        else:
            leader = False
    if not leader:
        # 等别人算完（最多等 TTL，防极端情况永久阻塞）
        flight.event.wait(timeout=max(5, ttl))
        if flight.error is not None:
            raise flight.error
        return flight.value

    try:
        with _lock:
            _misses += 1
        value = producer()
        with _lock:
            _store[key] = (time.time() + ttl, value)
        flight.value = value
        return value
    except Exception as e:  # noqa: BLE001 — 计算失败也要唤醒等待者
        flight.error = e
        raise
    finally:
        flight.event.set()
        with _lock:
            _inflight.pop(key, None)


def get(key):
    """只读缓存（不计算）；过期/不存在返回 None。"""
    now = time.time()
    with _lock:
        item = _store.get(key)
        if item and item[0] > now:
            return item[1]
    return None


def put(key, value, ttl=DEFAULT_TTL):
    with _lock:
        _store[key] = (time.time() + ttl, value)


def invalidate(prefix=''):
    """按前缀失效（不传则清空）。"""
    with _lock:
        if not prefix:
            _store.clear()
            return len(_store)
        keys = [k for k in _store if str(k).startswith(prefix)]
        for k in keys:
            _store.pop(k, None)
        return len(keys)


def clear():
    with _lock:
        _store.clear()
        _inflight.clear()


def stats():
    with _lock:
        now = time.time()
        return {'entries': len(_store),
                'alive': sum(1 for v in _store.values() if v[0] > now),
                'inflight': len(_inflight),
                'hits': _hits, 'misses': _misses}
