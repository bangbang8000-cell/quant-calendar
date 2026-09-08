#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
v3.15 数据回填: 问股历史 (SQLite chat_history + JSON chat_history.json) 股票名
- SQLite chat_history.stock_name (空/==代码 → stock_manager 解析)
- data/chat_history.json sessions 的 stock_name (空 → 解析)
用法: python3 scripts/backfill_chat_stock_names.py <backend_dir>
"""
import json
import os
import sys

backend_dir = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else "backend")
sys.path.insert(0, backend_dir)

import db  # noqa: E402
from stock_info import stock_manager  # noqa: E402

DATA_DIR = os.path.join(os.path.dirname(backend_dir), "data")
HISTORY_FILE = os.path.join(DATA_DIR, "chat_history.json")


def lookup_name(code: str) -> str:
    """stock_manager 解析, 裸代码(无后缀)时尝试补 .SZ/.SH"""
    code = (code or "").strip()
    if not code:
        return code
    try:
        n = stock_manager.get_name(code)
        if n and n != code:
            return n
        if "." not in code:
            for suffix in (".SZ", ".SH"):
                cand = code + suffix
                n = stock_manager.get_name(cand)
                if n and n != cand:
                    return n
    except Exception:
        pass
    return code


def backfill_sqlite() -> int:
    """回填 SQLite chat_history.stock_name"""
    changed = 0
    db.migrate()
    for r in db.chat_all():
        code = (r.get("stock_code") or "").strip()
        name = (r.get("stock_name") or "").strip()
        if not name or name == code:
            new = lookup_name(code)
            if new and new != code:
                if db.chat_update_name(r["id"], new):
                    changed += 1
    print(f"[sqlite] 回填 {changed} 条问股历史股票名")
    return changed


def backfill_json() -> int:
    """回填 data/chat_history.json 的 stock_name"""
    if not os.path.exists(HISTORY_FILE):
        print("[json] 无 chat_history.json, 跳过")
        return 0
    changed = 0
    try:
        with open(HISTORY_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        sessions = data.get("sessions", [])
        hit = False
        for s in sessions:
            code = (s.get("stock_code") or "").strip()
            name = (s.get("stock_name") or "").strip()
            if not name or name == code:
                new = lookup_name(code)
                if new and new != code:
                    s["stock_name"] = new
                    hit = True
                    changed += 1
        if hit:
            with open(HISTORY_FILE, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"[json] {HISTORY_FILE} 回填")
    except Exception as e:
        print(f"[json] 失败 {HISTORY_FILE}: {e}")
    print(f"[json] 回填 {changed} 条问股历史股票名")
    return changed


if __name__ == "__main__":
    print(f"== 问股历史名称回填: {DATA_DIR} ==")
    backfill_sqlite()
    backfill_json()
    print("== 回填完成 ==")
