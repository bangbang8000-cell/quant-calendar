#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.1.7 (G4): 备份自动验证 — 备份文件可打开 + 关键键 + 行数抽查 (纯函数)

verify_backup(path, expect_keys, min_rows):
  备份文件 (JSON) 可解析; 关键键存在; 数据行数 ≥ 阈值。
返回 {"ok": bool, "errors": [str], "size": int, "keys": [..], "row_count": int}
"""
import json
import os


def verify_backup(path, expect_keys=None, min_rows=1):
    """校验备份文件。"""
    errors = []
    size = 0
    keys = []
    row_count = 0
    if not path or not os.path.exists(path):
        return {"ok": False, "errors": ["备份文件不存在: %s" % path],
                "size": 0, "keys": [], "row_count": 0}
    try:
        size = os.path.getsize(path)
    except OSError as e:
        return {"ok": False, "errors": ["无法读取文件: %s" % e],
                "size": 0, "keys": [], "row_count": 0}
    if size == 0:
        return {"ok": False, "errors": ["备份文件为空 (0 字节)"], "size": 0, "keys": [], "row_count": 0}
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except (ValueError, OSError, UnicodeDecodeError) as e:
        return {"ok": False, "errors": ["备份无法解析: %s" % e],
                "size": size, "keys": [], "row_count": 0}
    if isinstance(data, dict):
        keys = sorted(data.keys())
        for k in (expect_keys or []):
            if k not in data:
                errors.append("缺少关键键: %s" % k)
        row_count = sum(len(v) if isinstance(v, (list, dict)) else 1
                        for v in data.values() if isinstance(v, (list, dict)))
    elif isinstance(data, list):
        row_count = len(data)
    else:
        row_count = 1
    if row_count < min_rows:
        errors.append("数据行数 %d < 阈值 %d" % (row_count, min_rows))
    return {"ok": not errors, "errors": errors, "size": size, "keys": keys, "row_count": row_count}


def verify_sqlite_backup(path, min_rows=1):
    """6.3.2 (T-6.3.2.2): 校验 SQLite 数据库备份 (纯函数, 供调度任务自动校验)

    db.backup_db() 产出的备份为 SQLite 文件: 打开 → PRAGMA integrity_check →
    汇总各表行数。返回 {"ok", "errors", "size", "integrity", "row_count", "tables"}。
    """
    import sqlite3

    errors = []
    size = 0
    if not path or not os.path.exists(path):
        return {"ok": False, "errors": ["备份文件不存在: %s" % path],
                "size": 0, "integrity": "unknown", "row_count": 0, "tables": []}
    try:
        size = os.path.getsize(path)
    except OSError as e:
        return {"ok": False, "errors": ["无法读取文件: %s" % e],
                "size": 0, "integrity": "unknown", "row_count": 0, "tables": []}
    if size == 0:
        return {"ok": False, "errors": ["备份文件为空 (0 字节)"],
                "size": 0, "integrity": "unknown", "row_count": 0, "tables": []}
    try:
        import contextlib
        with contextlib.closing(sqlite3.connect(path, timeout=5)) as conn:
            try:
                integrity = conn.execute("PRAGMA integrity_check").fetchone()[0]
            except sqlite3.Error as e:
                integrity = "error"
                errors.append("完整性检查失败: %s" % e)
            if integrity != "ok":
                errors.append("完整性检查未通过: %s" % integrity)
            tables = [r[0] for r in conn.execute(
                "SELECT name FROM sqlite_master WHERE type='table' "
                "AND name NOT LIKE 'sqlite_%' ORDER BY name").fetchall()]
            row_count = 0
            for t in tables:
                try:
                    row_count += int(conn.execute("SELECT COUNT(*) FROM \"%s\"" % t).fetchone()[0])
                except sqlite3.Error as e:
                    errors.append("表 %s 行数统计失败: %s" % (t, e))
    except sqlite3.Error as e:
        return {"ok": False, "errors": ["备份无法作为 SQLite 打开: %s" % e],
                "size": size, "integrity": "unknown", "row_count": 0, "tables": []}
    if row_count < min_rows:
        errors.append("总行数 %d < 阈值 %d" % (row_count, min_rows))
    return {"ok": not errors, "errors": errors, "size": size,
            "integrity": integrity, "row_count": row_count, "tables": tables}
