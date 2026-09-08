#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.08): 短线复盘数据持久化 (shortterm_* 表)

- save_pool / load_pool: 三池/龙虎榜 归一化行按 (trade_date, pool_type) upsert
- list_dates: 已抓取交易日列表
- save_sector_flow / latest_sector_flow: 板块资金流(实时口径, 仅追加)
表由迁移 _0004_shortterm 创建 (init_db → migrations.upgrade 启动时应用)。
"""
import json
import time
import logging

import db
from migrations import _0004_shortterm as _migrate_shortterm

logger = logging.getLogger(__name__)

_ensured = False


def _ensure_table() -> None:
    """防御性建表: 表缺失时应用迁移 0004 (幂等, 单进程一次)"""
    global _ensured
    if _ensured:
        return
    with db._db_lock:
        conn = db.get_conn()
        try:
            _migrate_shortterm.upgrade(conn)
            conn.commit()
        finally:
            conn.close()
    _ensured = True


def _now() -> str:
    return time.strftime('%Y-%m-%dT%H:%M:%S')


def _conn():
    return db.get_conn()


def save_pool(trade_date: str, pool_type: str, rows: list) -> None:
    """保存某交易日某池归一化行(upsert by trade_date+pool_type)"""
    _ensure_table()
    with db._db_lock:
        conn = _conn()
        try:
            conn.execute(
                "INSERT OR REPLACE INTO shortterm_pools VALUES (?,?,?,?)",
                (trade_date, pool_type, json.dumps(rows, ensure_ascii=False), _now()))
            conn.commit()
        finally:
            conn.close()


def load_pool(trade_date: str, pool_type: str):
    """读取某交易日某池归一化行; 无 → None"""
    _ensure_table()
    conn = _conn()
    try:
        row = conn.execute(
            "SELECT payload FROM shortterm_pools WHERE trade_date=? AND pool_type=?",
            (trade_date, pool_type)).fetchone()
        return json.loads(row[0]) if row and row[0] else None
    finally:
        conn.close()


def list_dates() -> list:
    """已抓取交易日列表(新→旧)"""
    _ensure_table()
    conn = _conn()
    try:
        rows = conn.execute(
            "SELECT DISTINCT trade_date FROM shortterm_pools ORDER BY trade_date DESC"
        ).fetchall()
        return [r[0] for r in rows]
    finally:
        conn.close()


def save_sector_flow(sector_type: str, indicator: str, rows: list) -> None:
    """保存板块资金流(实时口径, 仅追加)"""
    _ensure_table()
    with db._db_lock:
        conn = _conn()
        try:
            conn.execute(
                "INSERT INTO shortterm_sector_flow (captured_at, sector_type, indicator, payload) VALUES (?,?,?,?)",
                (_now(), sector_type, indicator, json.dumps(rows, ensure_ascii=False)))
            conn.commit()
        finally:
            conn.close()


def latest_sector_flow(sector_type: str = None, indicator: str = None):
    """最近一次板块资金流(按 sector_type/indicator 过滤可选)"""
    _ensure_table()
    conn = _conn()
    try:
        q = ("SELECT captured_at, sector_type, indicator, payload FROM shortterm_sector_flow"
             " WHERE 1=1")
        args = []
        if sector_type:
            q += " AND sector_type=?"
            args.append(sector_type)
        if indicator:
            q += " AND indicator=?"
            args.append(indicator)
        q += " ORDER BY id DESC LIMIT 1"
        row = conn.execute(q, args).fetchone()
        if not row:
            return None
        return {'captured_at': row[0], 'sector_type': row[1],
                'indicator': row[2], 'rows': json.loads(row[3])}
    finally:
        conn.close()
