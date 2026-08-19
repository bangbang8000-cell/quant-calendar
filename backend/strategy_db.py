#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略注册表持久化层 (FR: 策略研究 P0)
表: strategy_defs(策略定义/启停/参数覆盖) + strategy_runs(运行记录/状态/结果)
沿用 db.py 的锁与连接模式, 独立文件避免改核心 db.py
"""
import json
import logging
import os
import sqlite3
import threading
import uuid
from datetime import datetime

from paths import DATA_DIR

logger = logging.getLogger(__name__)

DB_FILE = os.path.join(DATA_DIR, "strategy.db")
_db_lock = threading.RLock()

SCHEMA = """
CREATE TABLE IF NOT EXISTS strategy_defs (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL DEFAULT '',
    version TEXT NOT NULL DEFAULT '0.1.0',
    type TEXT NOT NULL,
    params TEXT NOT NULL DEFAULT '{}',
    enabled INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS strategy_runs (
    id TEXT PRIMARY KEY,
    strategy_id TEXT NOT NULL,
    version TEXT NOT NULL DEFAULT '0.1.0',
    params TEXT NOT NULL DEFAULT '{}',
    mode TEXT NOT NULL DEFAULT 'manual',
    status TEXT NOT NULL DEFAULT 'running',
    started_at TEXT NOT NULL,
    finished_at TEXT,
    error TEXT,
    output_path TEXT,
    summary TEXT NOT NULL DEFAULT '{}'
);
CREATE INDEX IF NOT EXISTS idx_strategy_runs_sid_time
    ON strategy_runs(strategy_id, started_at DESC);
"""


class StrategyBusyError(Exception):
    """同策略已有一个 running 运行(互斥)"""


def get_conn() -> sqlite3.Connection:
    os.makedirs(DATA_DIR, exist_ok=True)
    conn = sqlite3.connect(DB_FILE, timeout=15)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with _db_lock:
        conn = get_conn()
        try:
            conn.executescript(SCHEMA)
            conn.commit()
        finally:
            conn.close()


def _now() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


# ---------- strategy_defs ----------

def upsert_def(sid: str, data: dict) -> None:
    init_db()
    now = _now()
    with _db_lock:
        conn = get_conn()
        try:
            conn.execute(
                """INSERT INTO strategy_defs
                   (id, name, version, type, params, enabled, created_at, updated_at)
                   VALUES (?,?,?,?,?,?,?,?)
                   ON CONFLICT(id) DO UPDATE SET
                     name=excluded.name, version=excluded.version, type=excluded.type,
                     params=excluded.params, enabled=excluded.enabled, updated_at=excluded.updated_at""",
                (sid, data.get("name", ""), data.get("version", "0.1.0"),
                 data.get("type", sid), json.dumps(data.get("params", {}), ensure_ascii=False),
                 1 if data.get("enabled", True) else 0, now, now))
            conn.commit()
        finally:
            conn.close()


def get_def(sid: str) -> dict | None:
    init_db()
    with _db_lock:
        conn = get_conn()
        try:
            row = conn.execute("SELECT * FROM strategy_defs WHERE id=?", (sid,)).fetchone()
            if not row:
                return None
            d = dict(row)
            d["params"] = json.loads(d.get("params") or "{}")
            d["enabled"] = bool(d.get("enabled"))
            return d
        finally:
            conn.close()


def list_defs() -> list[dict]:
    init_db()
    with _db_lock:
        conn = get_conn()
        try:
            rows = conn.execute("SELECT * FROM strategy_defs ORDER BY created_at").fetchall()
            out = []
            for r in rows:
                d = dict(r)
                d["params"] = json.loads(d.get("params") or "{}")
                d["enabled"] = bool(d.get("enabled"))
                out.append(d)
            return out
        finally:
            conn.close()


# ---------- strategy_runs ----------

def append_run(strategy_id: str, version: str, params: dict, mode: str,
               status: str, summary: dict | None = None,
               error: str | None = None) -> str:
    """追加运行记录; 同策略 running 状态互斥"""
    init_db()
    rid = uuid.uuid4().hex[:12]
    now = _now()
    with _db_lock:
        conn = get_conn()
        try:
            if status == "running":
                row = conn.execute(
                    "SELECT id FROM strategy_runs WHERE strategy_id=? AND status='running'",
                    (strategy_id,)).fetchone()
                if row:
                    raise StrategyBusyError(f"策略 {strategy_id} 正在运行 (run {row['id']})")
            conn.execute(
                """INSERT INTO strategy_runs
                   (id, strategy_id, version, params, mode, status, started_at,
                    finished_at, error, output_path, summary)
                   VALUES (?,?,?,?,?,?,?,?,?,?,?)""",
                (rid, strategy_id, version, json.dumps(params, ensure_ascii=False),
                 mode, status, now,
                 now if status in ("success", "failed") else None,
                 error, None, json.dumps(summary or {}, ensure_ascii=False)))
            conn.commit()
            return rid
        finally:
            conn.close()


def finish_run(rid: str, status: str, summary: dict | None = None,
               error: str | None = None, output_path: str | None = None) -> None:
    with _db_lock:
        conn = get_conn()
        try:
            conn.execute(
                """UPDATE strategy_runs SET status=?, finished_at=?, summary=?,
                   error=?, output_path=? WHERE id=?""",
                (status, _now(), json.dumps(summary or {}, ensure_ascii=False),
                 error, output_path, rid))
            conn.commit()
        finally:
            conn.close()


def list_runs(strategy_id: str | None = None, limit: int = 50) -> list[dict]:
    init_db()
    with _db_lock:
        conn = get_conn()
        try:
            if strategy_id:
                rows = conn.execute(
                    "SELECT * FROM strategy_runs WHERE strategy_id=? ORDER BY started_at DESC LIMIT ?",
                    (strategy_id, limit)).fetchall()
            else:
                rows = conn.execute(
                    "SELECT * FROM strategy_runs ORDER BY started_at DESC LIMIT ?",
                    (limit,)).fetchall()
            out = []
            for r in rows:
                d = dict(r)
                d["params"] = json.loads(d.get("params") or "{}")
                d["summary"] = json.loads(d.get("summary") or "{}")
                out.append(d)
            return out
        finally:
            conn.close()


def get_run(rid: str) -> dict | None:
    init_db()
    with _db_lock:
        conn = get_conn()
        try:
            row = conn.execute("SELECT * FROM strategy_runs WHERE id=?", (rid,)).fetchone()
            if not row:
                return None
            d = dict(row)
            d["params"] = json.loads(d.get("params") or "{}")
            d["summary"] = json.loads(d.get("summary") or "{}")
            return d
        finally:
            conn.close()
