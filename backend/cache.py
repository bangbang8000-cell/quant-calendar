#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.7 (T-5.0.71): 两级缓存 (cache.py)

L1 内存 TTL 缓存 (threading-safe, LRU 上限逐出) + L2 磁盘持久缓存 (JSON 原子写) + 统一失效。

- get/set/delete/clear: 双写 L1+L2, 读先 L1 后 L2; TTL 逐级过期
- invalidate_by_namespace(ns): 统一失效指定命名空间 (如 "daily"/"weekly"/"factor")
- 数据版本联动 (5.1 血缘): mark_data_version/is_data_stale/invalidate_stale —
  记录某命名空间消费数据时的 lineage 最新批次 id, 数据刷新 (新批次) 后即视为 stale,
  invalidate_stale 清空该命名空间缓存, 保证"刷新后失效"语义。
- 零外部依赖; 损坏磁盘文件降级为空; 原子写复用 reliability.atomic。

语义边界:
- 磁盘缓存文件 data/cache.json 仅存可 JSON 序列化值; 超大对象不适用。
- TTL 为秒; ttl<=0 表示立即过期 (写入即失效)。
- 并发: L1 操作全程持锁; L2 读时容忍文件不存在/损坏。
"""
import json
import logging
import os
import threading
import time

import lineage
import paths
from reliability.atomic import atomic_write_json

logger = logging.getLogger(__name__)

CACHE_FILE = os.path.join(paths.DATA_DIR, "cache.json")
DEFAULT_TTL = 300        # 默认 5 分钟
MEM_MAX_ENTRIES = 1000   # L1 内存上限 (LRU 逐出)
_NS_SEP = ":"

_mem = {}     # key -> {"v": value, "exp": epoch_ts}
_order = []   # LRU: 最近访问在前
_lock = threading.RLock()


class CacheError(Exception):
    pass


def _now():
    return time.time()


def _touch(key):
    if key in _order:
        _order.remove(key)
    _order.insert(0, key)


def _drop(key):
    if key in _order:
        _order.remove(key)
    _mem.pop(key, None)


def _evict_locked():
    now = _now()
    expired = [k for k in _mem if _mem[k]["exp"] <= now]
    for k in expired:
        _drop(k)
    while len(_mem) > MEM_MAX_ENTRIES and _order:
        _drop(_order[-1])


def _read_disk():
    try:
        with open(CACHE_FILE, encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}


def _write_disk(obj):
    try:
        dirn = os.path.dirname(CACHE_FILE)
        if dirn and not os.path.isdir(dirn):
            os.makedirs(dirn, exist_ok=True)
        atomic_write_json(CACHE_FILE, obj)
    except Exception as e:  # pragma: no cover
        logger.warning("cache 磁盘写入失败: %s", e)


def get(key, default=None):
    now = _now()
    with _lock:
        item = _mem.get(key)
        if item is not None:
            if item["exp"] <= now:
                _drop(key)
            else:
                _touch(key)
                return item["v"]
    disk = _read_disk()
    entry = disk.get(key)
    if entry is None:
        return default
    if entry.get("exp", 0) <= now:
        disk.pop(key, None)
        _write_disk(disk)
        return default
    return entry.get("v", default)


def set(key, value, ttl=DEFAULT_TTL):
    exp = _now() + ttl
    with _lock:
        _mem[key] = {"v": value, "exp": exp}
        _touch(key)
        _evict_locked()
    disk = _read_disk()
    disk[key] = {"v": value, "exp": exp}
    _write_disk(disk)


def delete(key):
    with _lock:
        _drop(key)
    disk = _read_disk()
    if key in disk:
        disk.pop(key, None)
        _write_disk(disk)


def clear():
    with _lock:
        _mem.clear()
        _order.clear()
    _write_disk({})


def invalidate_by_namespace(ns):
    """统一失效: 清空指定命名空间前缀的所有缓存键 (L1+L2)。"""
    prefix = ns + _NS_SEP
    with _lock:
        for k in list(_mem.keys()):
            if k.startswith(prefix):
                _drop(k)
    disk = _read_disk()
    dirty = False
    for k in [k for k in disk if k.startswith(prefix)]:
        disk.pop(k, None)
        dirty = True
    if dirty:
        _write_disk(disk)


def _meta_get(ns):
    disk = _read_disk()
    return disk.get("__meta__", {}).get(ns)


def _meta_set(ns, value):
    disk = _read_disk()
    meta = disk.get("__meta__", {})
    meta[ns] = value
    disk["__meta__"] = meta
    _write_disk(disk)


def mark_data_version(ns):
    """记录命名空间当前消费的数据版本 = lineage 最新同 kind 批次 id。

    调用点: 缓存写入后 (或业务层加载数据后)。若 lineage 无该 kind 批次,
    记录为 None 并视为"未确认版本" (is_data_stale 返回 False, 避免误失效)。
    """
    latest = ""
    try:
        batches = lineage.get_batches(kind=ns, limit=1)
        if batches:
            latest = batches[0].get("batch_id") or ""
    except Exception as e:  # pragma: no cover
        logger.warning("cache mark_data_version lineage 读取失败: %s", e)
    _meta_set(ns, latest)
    return latest


def is_data_stale(ns):
    """lineage 已有更新的批次 → True (数据已刷新, 缓存过期)。"""
    recorded = _meta_get(ns)
    if recorded is None:
        return False
    try:
        batches = lineage.get_batches(kind=ns, limit=1)
        if not batches:
            return False
        return batches[0].get("batch_id") != recorded
    except Exception:  # pragma: no cover
        return False


def invalidate_stale(ns):
    """刷新流程收口: 若数据已 stale, 清空命名空间缓存并返回 True。"""
    if is_data_stale(ns):
        invalidate_by_namespace(ns)
        return True
    return False
