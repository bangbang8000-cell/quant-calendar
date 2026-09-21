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
