# -*- coding: utf-8 -*-
"""V5.7 (T-5.7.1): 后端两级缓存测试 (TEST-PLAN 8.1 test_cache2.py, 后端 cache.py)

内存 TTL (L1) + 磁盘持久 (L2) + 统一失效 + 数据版本联动 (5.1 血缘)。
既有 tests/test_cache.py 已被前端 core.js 缓存测试占用, 本文件为后端两层缓存。
零外部依赖; 所有文件路径 monkeypatch 到 tmp_path, 不触真实 data/。
"""
import os
import sys
import threading

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))


@pytest.fixture
def cache(tmp_path, monkeypatch):
    import cache
    monkeypatch.setattr(cache, "CACHE_FILE", str(tmp_path / "cache.json"))
    cache._mem.clear()
    cache._order.clear()
    cache.clear()
    return cache


@pytest.fixture
def lineage_isolated(tmp_path, monkeypatch):
    import lineage
    monkeypatch.setattr(lineage, "LINEAGE_FILE", str(tmp_path / "lineage.json"))
    lineage.reset_lineage()
    return lineage


# ─── 基础存取 ─────────────────────────────────────────────────

def test_set_get_roundtrip(cache):
    cache.set("a", 42)
    assert cache.get("a") == 42


def test_set_get_complex_object(cache):
    obj = {"stocks": [{"code": "600000.SH", "name": "浦发"}], "n": 3}
    cache.set("k", obj)
    assert cache.get("k") == obj


def test_get_miss_default(cache):
    assert cache.get("missing", "D") == "D"


def test_get_miss_none(cache):
    assert cache.get("missing") is None


def test_get_after_delete(cache):
    cache.set("a", 1)
    cache.delete("a")
    assert cache.get("a") is None


def test_delete_missing_safe(cache):
    cache.delete("nope")


def test_clear(cache):
    cache.set("a", 1)
    cache.set("b", 2)
    cache.clear()
    assert cache.get("a") is None and cache.get("b") is None


def test_overwrite(cache):
    cache.set("a", 1)
    cache.set("a", 2)
    assert cache.get("a") == 2


# ─── TTL ──────────────────────────────────────────────────────

def test_ttl_zero_immediate_expiry(cache):
    cache.set("a", 1, ttl=0)
    assert cache.get("a") is None


def test_ttl_positive_kept(cache):
    cache.set("a", 1, ttl=300)
    assert cache.get("a") == 1


def test_ttl_negative_immediate(cache):
    cache.set("a", 1, ttl=-5)
    assert cache.get("a") is None


# ─── L2 磁盘持久化 ────────────────────────────────────────────

def test_l2_persists_across_memory_clear(cache):
    """内存清空后 L2 仍可读 (持久层)"""
    cache.set("a", "disk-value")
    cache._mem.clear()
    cache._order.clear()
    assert cache.get("a") == "disk-value"


def test_l2_disk_file_written(cache):
    cache.set("a", 99)
    assert os.path.exists(cache.CACHE_FILE)


def test_corrupt_disk_fallback(cache):
    """损坏的磁盘 JSON 降级为空, 不抛异常"""
    with open(cache.CACHE_FILE, "w", encoding="utf-8") as f:
        f.write("{broken json")
    assert cache.get("a") is None


# ─── 统一失效 (namespace) ────────────────────────────────────

def test_invalidate_namespace(cache):
    cache.set("daily:600000", 1)
    cache.set("daily:000001", 2)
    cache.set("weekly:600000", 3)
    cache.invalidate_by_namespace("daily")
    assert cache.get("daily:600000") is None
    assert cache.get("daily:000001") is None
    assert cache.get("weekly:600000") == 3


def test_invalidate_unknown_namespace_safe(cache):
    cache.set("a", 1)
    cache.invalidate_by_namespace("none")
    assert cache.get("a") == 1


# ─── 并发安全 ─────────────────────────────────────────────────

def test_concurrent_set_get(cache):
    errors = []

    def worker(i):
        try:
            for j in range(20):
                cache.set(f"t{i}_{j}", i * 100 + j)
                cache.get(f"t{i}_{j}")
        except Exception as e:  # pragma: no cover
            errors.append(e)

    threads = [threading.Thread(target=worker, args=(i,)) for i in range(6)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    assert not errors


def test_concurrent_get_default(cache):
    errors = []

    def reader():
        try:
            for _ in range(30):
                cache.get("absent")
        except Exception as e:  # pragma: no cover
            errors.append(e)

    threads = [threading.Thread(target=reader) for _ in range(4)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    assert not errors


# ─── 数据版本联动 (5.1 血缘) ─────────────────────────────────

def test_mark_and_check_stale(cache, lineage_isolated):
    bid = lineage_isolated.begin_batch("daily", trigger="test", detail="t")
    lineage_isolated.finish_batch(bid, status="success", rows_fetched=10)
    cache.mark_data_version("daily")
    assert cache.is_data_stale("daily") is False


def test_stale_after_new_batch(cache, lineage_isolated):
    bid1 = lineage_isolated.new_batch_id()
    lineage_isolated.begin_batch("daily", trigger="test")
    lineage_isolated.finish_batch(bid1, status="success")
    cache.mark_data_version("daily")
    bid2 = lineage_isolated.new_batch_id()
    lineage_isolated.begin_batch("daily", trigger="test")
    lineage_isolated.finish_batch(bid2, status="success")
    assert cache.is_data_stale("daily") is True


def test_invalidate_after_refresh(cache, lineage_isolated):
    """刷新流程: 新批次 → is_stale=True → invalidate_stale 清空命名空间"""
    cache.set("daily:600000", 1)
    cache.mark_data_version("daily")
    bid = lineage_isolated.new_batch_id()
    lineage_isolated.begin_batch("daily", trigger="test")
    lineage_isolated.finish_batch(bid, status="success")
    invalidated = cache.invalidate_stale("daily")
    assert invalidated is True
    assert cache.get("daily:600000") is None
