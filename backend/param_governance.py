#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略参数锁定/追踪 (v7.7 FR-7.7-1)

- 参数哈希: 规范化 JSON 的 SHA-256 (键序无关), 支撑回测可复现断言。
- 锁定状态从 param_audit_log 最新 lock/unlock 事件派生, 不维护第二份可变状态。
- 每次校验可留痕 (event_type=verify), 形成"谁在何时用哪套参数回测"的证据链。
"""
import hashlib
import json
import logging
import time
from typing import Dict, List

import db

logger = logging.getLogger(__name__)

_SCHEMA = (
    "CREATE TABLE IF NOT EXISTS param_audit_log ("
    " id INTEGER PRIMARY KEY AUTOINCREMENT,"
    " sid TEXT NOT NULL,"
    " event_type TEXT NOT NULL,"
    " params_hash TEXT NOT NULL DEFAULT '',"
    " params_json TEXT NOT NULL DEFAULT '{}',"
    " operator TEXT NOT NULL DEFAULT '',"
    " reason TEXT NOT NULL DEFAULT '',"
    " ts TEXT NOT NULL)"
)


def _now() -> str:
    return time.strftime("%Y-%m-%dT%H:%M:%S")


def _ensure_table():
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute(_SCHEMA)
            conn.commit()
        finally:
            conn.close()


def compute_params_hash(params: Dict) -> str:
    """规范化参数 → SHA-256; 同参数不同键序得到同一哈希"""
    canonical = json.dumps(params or {}, sort_keys=True, ensure_ascii=False,
                           separators=(",", ":"), default=str)
    return hashlib.sha256(canonical.encode("utf-8")).hexdigest()


def lock_params(sid: str, params: Dict, operator: str = "", reason: str = "") -> Dict:
    """锁定参数快照; 重复锁定以最新快照覆盖(留痕, 不静默改历史)"""
    _ensure_table()
    digest = compute_params_hash(params)
    payload = json.dumps(params or {}, sort_keys=True, ensure_ascii=False, default=str)
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute(
                "INSERT INTO param_audit_log "
                "(sid,event_type,params_hash,params_json,operator,reason,ts) "
                "VALUES (?,?,?,?,?,?,?)",
                (sid, "lock", digest, payload, operator, reason, _now()))
            conn.commit()
        finally:
            conn.close()
    return {"sid": sid, "locked": True, "params_hash": digest}


def unlock_params(sid: str, operator: str = "", reason: str = "") -> bool:
    """解锁; 未锁定时返回 False(不做无意义留痕)"""
    _ensure_table()
    if not get_lock(sid).get("locked"):
        return False
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute(
                "INSERT INTO param_audit_log "
                "(sid,event_type,params_hash,params_json,operator,reason,ts) "
                "VALUES (?,?,?,?,?,?,?)",
                (sid, "unlock", "", "", operator, reason, _now()))
            conn.commit()
        finally:
            conn.close()
    return True


def get_lock(sid: str) -> Dict:
    """从最新 lock/unlock 事件派生当前锁定状态"""
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            row = conn.execute(
                "SELECT event_type,params_hash,params_json,operator,reason,ts "
                "FROM param_audit_log WHERE sid = ? AND event_type IN ('lock','unlock') "
                "ORDER BY id DESC LIMIT 1", (sid,)).fetchone()
        finally:
            conn.close()
    if not row or row["event_type"] == "unlock":
        return {"sid": sid, "locked": False, "params_hash": "", "params": {},
                "operator": "", "reason": "", "ts": None}
    try:
        params = json.loads(row["params_json"] or "{}")
    except (TypeError, ValueError):
        params = {}
    return {"sid": sid, "locked": True, "params_hash": row["params_hash"],
            "params": params, "operator": row["operator"],
            "reason": row["reason"], "ts": row["ts"]}


def verify_params(sid: str, params: Dict, record: bool = True) -> Dict:
    """回测前校验: 锁定后参数必须与快照一致; 校验结果可留痕"""
    _ensure_table()
    digest = compute_params_hash(params)
    lock = get_lock(sid)
    result = {
        "sid": sid, "locked": bool(lock["locked"]),
        "params_hash": digest, "locked_hash": lock["params_hash"],
        "matches": (lock["params_hash"] == digest) if lock["locked"] else False,
    }
    result["verdict"] = (
        "unlocked" if not lock["locked"] else
        "match" if result["matches"] else "mismatch")
    if record:
        with db._db_lock:
            conn = db.get_conn()
            try:
                conn.execute(
                    "INSERT INTO param_audit_log "
                    "(sid,event_type,params_hash,params_json,operator,reason,ts) "
                    "VALUES (?,?,?,?,?,?,?)",
                    (sid, "verify", digest,
                     json.dumps(params or {}, sort_keys=True, ensure_ascii=False, default=str),
                     "", result["verdict"], _now()))
                conn.commit()
            finally:
                conn.close()
    return result


def list_audit(sid: str = None, limit: int = 100) -> List[Dict]:
    """审计日志(倒序), 可按 sid 过滤; 供前端审计面板与运维排查"""
    _ensure_table()
    n = max(1, min(int(limit), 500))
    with db._db_lock:
        conn = db.get_conn()
        try:
            if sid:
                rows = conn.execute(
                    "SELECT * FROM param_audit_log WHERE sid = ? "
                    "ORDER BY id DESC LIMIT ?", (sid, n)).fetchall()
            else:
                rows = conn.execute(
                    "SELECT * FROM param_audit_log ORDER BY id DESC LIMIT ?",
                    (n,)).fetchall()
        finally:
            conn.close()
    return [dict(r) for r in rows]
