#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.1 T-5.0.16: 数据血缘与刷新批次 (lineage.py)

每次数据刷新 (日线/财务/自愈/手动) 登记唯一 batch_id, 记录 状态/来源/行数/耗时,
持久化到 data/lineage.json (原子写, 复用 V5.0 atomic.py), 上限 MAX_ENTRIES 裁剪。

- begin_batch/finish_batch: 批次生命周期 (running → success/partial/failed)
- record_pull(kind, stats): 拉取统计自动登记+完成 (幂等)
- get_batches/get_batch: 可追溯查询
- API: GET /api/lineage (列表) / GET /api/lineage/{id} (详情, 需登录)
"""
import json
import logging
import os
import threading
from datetime import datetime

import paths
from reliability.atomic import atomic_write_json

logger = logging.getLogger(__name__)

LINEAGE_FILE = os.path.join(paths.DATA_DIR, "lineage.json")
MAX_ENTRIES = 2000
_lock = threading.Lock()


class LineageError(Exception):
    pass


def _now_iso():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def _read():
    try:
        with open(LINEAGE_FILE, encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, list) else []
    except OSError:
        return []
    except ValueError:
        logger.warning("lineage.json 解析失败, 重置为空")
        return []


def _write(entries):
    atomic_write_json(LINEAGE_FILE, entries)


_seq = 0
_seq_lock = threading.Lock()


def new_batch_id():
    """批次号: B + 时间戳 + 进程内递增序号 (同毫秒内也唯一, 可排序)。"""
    global _seq
    with _seq_lock:
        _seq += 1
        seq = _seq
    return "B" + datetime.now().strftime("%Y%m%d%H%M%S") + "-" + f"{seq:06d}"


def begin_batch(kind, trigger="scheduler", pool_size=0, detail="", source=None):
    """登记一个进行中批次, 返回 batch_id。"""
    batch = {
        "batch_id": new_batch_id(),
        "kind": kind,
        "trigger": trigger,
        "status": "running",
        "started_at": _now_iso(),
        "finished_at": None,
        "pool_size": pool_size,
        "rows_fetched": 0,
        "errors": 0,
        "source": source,
        "detail": detail,
        "message": "",
    }
    with _lock:
        entries = _read()
        entries.append(batch)
        _write(entries[-MAX_ENTRIES:])
    return batch["batch_id"]


def finish_batch(batch_id, status="success", rows_fetched=0, errors=0,
                 source=None, message="", detail=None):
    """结束批次。返回更新后的批次或 None (未知 id)。"""
    with _lock:
        entries = _read()
        for b in entries:
            if b["batch_id"] == batch_id:
                b["status"] = status
                b["finished_at"] = _now_iso()
                b["rows_fetched"] = rows_fetched
                b["errors"] = errors
                if source:
                    b["source"] = source
                if message:
                    b["message"] = message
                if detail is not None:
                    b["detail"] = detail
                _write(entries)
                return b
    return None


def get_batches(kind=None, limit=50):
    """最近批次 (倒序), 可选按 kind 过滤, limit 钳制 1-500。"""
    entries = _read()
    if kind:
        entries = [b for b in entries if b.get("kind") == kind]
    limit = max(1, min(int(limit or 50), 500))
    return list(reversed(entries))[:limit]


def get_batch(batch_id):
    for b in reversed(_read()):
        if b["batch_id"] == batch_id:
            return b
    return None


def reset_lineage():
    with _lock:
        _write([])


def record_pull(kind, stats, trigger="scheduler", detail=""):
    """为一次拉取登记+完成批次 (幂等: 已有 batch_id 则仅结束)。

    stats: {total, pulled, failed, errors, message} → status success/partial/failed。
    返回 batch_id。
    """
    stats = stats or {}
    bid = stats.get("batch_id")
    if not bid:
        bid = begin_batch(kind, trigger=trigger, pool_size=stats.get("total", 0), detail=detail)
        stats["batch_id"] = bid
    pulled = int(stats.get("pulled", 0) or 0)
    failed = int(stats.get("failed", 0) or 0)
    total = int(stats.get("total", 0) or 0)
    if failed == 0:
        status = "success"
    elif pulled > 0:
        status = "partial"
    else:
        status = "failed"
    finish_batch(bid, status=status, rows_fetched=pulled, errors=failed,
                 message=stats.get("message", "") or
                 f"{total} 池 / {pulled} 成功 / {failed} 失败")
    return bid
