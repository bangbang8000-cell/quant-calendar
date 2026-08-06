#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
审计日志模块 (v3.4.0-T1 / FR-3.4.1)
记录: 登录/登出/配置变更/用户管理/备份恢复等敏感操作
存储: data/audit.log (按日轮转) + SQLite audit_logs 表 (可视化查询)
"""
import json
import logging
import os
import sqlite3
from datetime import datetime
from logging.handlers import TimedRotatingFileHandler

from paths import DATA_DIR

AUDIT_LOG_FILE = os.path.join(DATA_DIR, "audit.log")
AUDIT_DB_FILE = os.path.join(DATA_DIR, "audit_logs.db")

_logger = None


def _get_logger() -> logging.Logger:
    """获取审计 logger (按日轮转, 保留 30 天)"""
    global _logger
    if _logger is None:
        os.makedirs(DATA_DIR, exist_ok=True)
        _logger = logging.getLogger("audit")
        _logger.setLevel(logging.INFO)
        _logger.propagate = False
        handler = TimedRotatingFileHandler(
            AUDIT_LOG_FILE, when="midnight", backupCount=30, encoding="utf-8"
        )
        handler.setFormatter(logging.Formatter(
            "%(asctime)s | %(message)s"
        ))
        _logger.addHandler(handler)
    return _logger


def _init_audit_db():
    """初始化审计 SQLite 表"""
    try:
        conn = sqlite3.connect(AUDIT_DB_FILE, timeout=10)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS audit_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                ts TEXT NOT NULL,
                action TEXT NOT NULL,
                username TEXT,
                detail TEXT
            )
        """)
        conn.commit()
        conn.close()
    except Exception as e:
        print(f"[audit] 初始化审计库失败: {e}")


def log(action: str, username: str = None, detail: dict = None):
    """记录审计事件"""
    ts = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    detail_str = json.dumps(detail, ensure_ascii=False) if detail else ""
    # 文件日志
    parts = [ts, action, username or "-"]
    if detail_str:
        parts.append(detail_str)
    _get_logger().info(" | ".join(parts))
    # SQLite
    try:
        conn = sqlite3.connect(AUDIT_DB_FILE, timeout=10)
        conn.execute(
            "INSERT INTO audit_logs (ts, action, username, detail) VALUES (?,?,?,?)",
            (ts, action, username or "", detail_str)
        )
        conn.commit()
        conn.close()
    except Exception as e:
        print(f"[audit] 写入审计库失败: {e}")


def query(action: str = None, username: str = None, limit: int = 100) -> list:
    """查询审计记录 (系统页可视化用)"""
    _init_audit_db()
    try:
        conn = sqlite3.connect(AUDIT_DB_FILE, timeout=10)
        conn.row_factory = sqlite3.Row
        sql = "SELECT * FROM audit_logs WHERE 1=1"
        params = []
        if action:
            sql += " AND action = ?"
            params.append(action)
        if username:
            sql += " AND username = ?"
            params.append(username)
        sql += " ORDER BY id DESC LIMIT ?"
        params.append(limit)
        rows = conn.execute(sql, params).fetchall()
        conn.close()
        return [dict(r) for r in rows]
    except Exception:
        return []


def stats() -> dict:
    """审计统计 (动作分布)"""
    _init_audit_db()
    try:
        conn = sqlite3.connect(AUDIT_DB_FILE, timeout=10)
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            "SELECT action, COUNT(*) as cnt FROM audit_logs GROUP BY action ORDER BY cnt DESC"
        ).fetchall()
        total = conn.execute("SELECT COUNT(*) as c FROM audit_logs").fetchone()['c']
        conn.close()
        return {"total": total, "actions": [dict(r) for r in rows]}
    except Exception:
        return {"total": 0, "actions": []}


# 初始化
_init_audit_db()
