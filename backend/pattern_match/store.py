#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""形态案例库存储 (v7.6 FR-7.6-3) — pattern_cases 表 CRUD

幂等: 同 case_id 创建走 INSERT OR REPLACE; 删除走 DELETE, 不存在返回 False。
features_json 存四维特征(dict), 读出时反序列化, 不污染调用方。
"""
import json
import logging
import time
from typing import Dict, List

import db

logger = logging.getLogger(__name__)

_SCHEMA = (
    "CREATE TABLE IF NOT EXISTS pattern_cases ("
    " case_id TEXT PRIMARY KEY,"
    " name TEXT NOT NULL DEFAULT '',"
    " symbol TEXT NOT NULL DEFAULT '',"
    " breakout_date TEXT NOT NULL DEFAULT '',"
    " lookback_days INTEGER NOT NULL DEFAULT 25,"
    " tags TEXT NOT NULL DEFAULT '[]',"
    " description TEXT NOT NULL DEFAULT '',"
    " features_json TEXT NOT NULL DEFAULT '{}',"
    " created_at TEXT NOT NULL)",
)


def _ensure_table():
    """幂等建表: 迁移未运行的环境(如单测)也可安全 CRUD"""
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute(_SCHEMA[0])
            conn.commit()
        finally:
            conn.close()


def _now() -> str:
    return time.strftime("%Y-%m-%dT%H:%M:%S")


def _row_to_case(row) -> Dict:
    item = dict(row)
    try:
        item["features"] = json.loads(item.pop("features_json", "{}"))
    except (TypeError, ValueError):
        item["features"] = {}
    try:
        item["tags"] = json.loads(item.get("tags") or "[]")
    except (TypeError, ValueError):
        item["tags"] = []
    return item


def list_cases(limit: int = 100) -> List[Dict]:
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            rows = conn.execute(
                "SELECT * FROM pattern_cases ORDER BY created_at DESC LIMIT ?",
                (max(1, min(int(limit), 500)),)).fetchall()
        finally:
            conn.close()
    return [_row_to_case(r) for r in rows]


def get_case(case_id: str) -> Dict | None:
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            row = conn.execute(
                "SELECT * FROM pattern_cases WHERE case_id = ?", (case_id,)).fetchone()
        finally:
            conn.close()
    return _row_to_case(row) if row else None


def save_case(payload: Dict) -> str:
    _ensure_table()
    """创建/覆盖案例; 返回 case_id"""
    case_id = str(payload.get("case_id") or payload.get("id") or "").strip()
    if not case_id:
        case_id = "case_%s" % time.strftime("%Y%m%d%H%M%S")
    features = payload.get("features") or {}
    tags = payload.get("tags") or []
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute(
                "INSERT OR REPLACE INTO pattern_cases "
                "(case_id,name,symbol,breakout_date,lookback_days,tags,description,features_json,created_at) "
                "VALUES (?,?,?,?,?,?,?,?,?)",
                (case_id, str(payload.get("name") or case_id),
                 str(payload.get("symbol") or ""),
                 str(payload.get("breakout_date") or ""),
                 int(payload.get("lookback_days") or 25),
                 json.dumps(tags, ensure_ascii=False),
                 str(payload.get("description") or ""),
                 json.dumps(features, ensure_ascii=False),
                 _now()))
            conn.commit()
        finally:
            conn.close()
    logger.info("[pattern_cases] saved %s", case_id)
    return case_id


def delete_case(case_id: str) -> bool:
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            cur = conn.execute("DELETE FROM pattern_cases WHERE case_id = ?", (case_id,))
            conn.commit()
            return cur.rowcount > 0
        finally:
            conn.close()
