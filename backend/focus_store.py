#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.1 / FR-5.4.3): 重点跟踪评估存储 (focus_store)

focus_evals 表存取 (SQLite, 见迁移 0007):
- 只存客观评估事实 (score/level/direction), 动作不入库 (按用户持仓派生)
- 复合主键 (trade_date, session, stock_code) → 幂等 upsert
隔离测试: tests/conftest.py patch_data_dir (临时库), 不碰真实 data/
"""
import json
import logging
import time

import db

logger = logging.getLogger(__name__)

_SCHEMA = """
CREATE TABLE IF NOT EXISTS focus_evals (
    trade_date TEXT NOT NULL,
    session TEXT NOT NULL,
    stock_code TEXT NOT NULL,
    stock_name TEXT NOT NULL DEFAULT '',
    total_score REAL,
    level TEXT NOT NULL DEFAULT '',
    direction TEXT NOT NULL DEFAULT '',
    model_provider TEXT NOT NULL DEFAULT '',
    model_used TEXT NOT NULL DEFAULT '',
    raw_json TEXT NOT NULL DEFAULT '{}',
    created_at TEXT NOT NULL,
    PRIMARY KEY (trade_date, session, stock_code)
);
CREATE INDEX IF NOT EXISTS idx_focus_date_session ON focus_evals(trade_date, session);
CREATE INDEX IF NOT EXISTS idx_focus_stock_date ON focus_evals(stock_code, trade_date);
"""


def _ensure_table():
    with db._db_lock:
        conn = db.get_conn()
        conn.executescript(_SCHEMA)
        conn.commit()
        conn.close()


def _now():
    return time.strftime('%Y-%m-%dT%H:%M:%S')


def build_record(trade_date, session, stock_code, stock_name="", total_score=None,
                 level="", direction=None, model_provider="rule", model_used="",
                 raw_json=None):
    """组装落库记录 (客观事实)。direction 缺省由 level 派生 (单一实现 focus_action_map)。"""
    from focus_action_map import direction_from_level
    raw = raw_json if isinstance(raw_json, dict) else {}
    return {
        "trade_date": trade_date,
        "session": session,
        "stock_code": stock_code,
        "stock_name": stock_name or stock_code,
        "total_score": total_score,
        "level": level,
        "direction": direction if direction else direction_from_level(level),
        "model_provider": model_provider or "rule",
        "model_used": model_used,
        "raw_json": json.dumps(raw, ensure_ascii=False),
        "created_at": _now(),
    }


def upsert_eval(record):
    """幂等写: 同 (日期, 时段, 股票) 覆盖。返回 True。"""
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute(
                "INSERT OR REPLACE INTO focus_evals "
                "(trade_date, session, stock_code, stock_name, total_score, level,"
                " direction, model_provider, model_used, raw_json, created_at) "
                "VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                (record["trade_date"], record["session"], record["stock_code"],
                 record["stock_name"], record["total_score"], record["level"],
                 record["direction"], record["model_provider"], record["model_used"],
                 record["raw_json"], record["created_at"]))
            conn.commit()
            return True
        finally:
            conn.close()


def _row_to_dict(row):
    if row is None:
        return None
    return {k: row[k] for k in row.keys()}


def query_by_date(trade_date, session=None):
    """按日期查 (可选时段过滤), 按股票代码排序。"""
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            if session:
                rows = conn.execute(
                    "SELECT * FROM focus_evals WHERE trade_date=? AND session=? ORDER BY stock_code",
                    (trade_date, session)).fetchall()
            else:
                rows = conn.execute(
                    "SELECT * FROM focus_evals WHERE trade_date=? ORDER BY stock_code",
                    (trade_date,)).fetchall()
            return [_row_to_dict(r) for r in rows]
        finally:
            conn.close()


def query_by_stock(stock_code, limit=60):
    """按股票查历史 (日期倒序)。"""
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            rows = conn.execute(
                "SELECT * FROM focus_evals WHERE stock_code=? "
                "ORDER BY trade_date DESC, session LIMIT ?",
                (stock_code, limit)).fetchall()
            return [_row_to_dict(r) for r in rows]
        finally:
            conn.close()


def query_latest_eval():
    """V5.4.2 (FR): 最近一次评估 (日期+时段) — 供前端默认加载"最近的一次"。

    trade_date DESC + 时段权重 DESC (pre_open<盘中<after_close)。无数据返回 (None, None)。
    """
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            row = conn.execute(
                "SELECT trade_date, session FROM focus_evals "
                "ORDER BY trade_date DESC, "
                "CASE session WHEN 'pre_open' THEN 0 WHEN 'intraday_1' THEN 1"
                " WHEN 'intraday_2' THEN 2 WHEN 'after_close' THEN 3 END DESC "
                "LIMIT 1"
            ).fetchone()
            return (row["trade_date"], row["session"]) if row else (None, None)
        finally:
            conn.close()


def query_latest_session(trade_date):
    """最近一个已评估时段 (用于推送/展示默认)。无则 None。"""
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            row = conn.execute(
                "SELECT session FROM focus_evals WHERE trade_date=? "
                "ORDER BY CASE session WHEN 'pre_open' THEN 0 WHEN 'intraday_1' THEN 1"
                " WHEN 'intraday_2' THEN 2 WHEN 'after_close' THEN 3 END DESC LIMIT 1",
                (trade_date,)).fetchone()
            return row["session"] if row else None
        finally:
            conn.close()


def count_by_date(trade_date):
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            row = conn.execute("SELECT COUNT(*) AS c FROM focus_evals WHERE trade_date=?",
                               (trade_date,)).fetchone()
            return row["c"]
        finally:
            conn.close()


def delete_by_date(trade_date, session=None):
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            if session:
                conn.execute("DELETE FROM focus_evals WHERE trade_date=? AND session=?",
                             (trade_date, session))
            else:
                conn.execute("DELETE FROM focus_evals WHERE trade_date=?", (trade_date,))
            conn.commit()
        finally:
            conn.close()
