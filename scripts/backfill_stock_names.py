#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
v3.14.2 数据回填: 自选股名称 + 评估历史股票名
- SQLite watchlist.name (空/==代码 → stock_manager 解析)
- data/users/*/watchlist.json 的 name 字段
- data/users/*/ai_evaluation_history.json 的 stock_name 字段
用法: python3 scripts/backfill_stock_names.py <backend_dir>
"""
import json
import os
import sys
import glob

backend_dir = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else "backend")
sys.path.insert(0, backend_dir)

import db  # noqa: E402
from stock_info import stock_manager  # noqa: E402

DATA_DIR = os.path.join(os.path.dirname(backend_dir), "data")


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


def backfill_sqlite():
    """回填 SQLite watchlist.name"""
    changed = 0
    db.migrate()
    for r in db.watchlist_all():
        code, name = r["stock_code"], (r.get("name") or "").strip()
        if not name or name == code:
            new = lookup_name(code)
            if new and new != code:
                db.watchlist_set(r["username"], code, new, r["added_at"])
                changed += 1
    print(f"[sqlite] 回填 {changed} 行自选名称")
    return changed


def backfill_watchlist_json():
    """回填 data/users/*/watchlist.json 的 name"""
    changed = 0
    for path in glob.glob(os.path.join(DATA_DIR, "users", "*", "watchlist.json")):
        try:
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
            stocks = data.get("stocks", [])
            hit = False
            for s in stocks:
                name = (s.get("name") or "").strip()
                if not name or name == s.get("code"):
                    new = lookup_name(s.get("code", ""))
                    if new and new != s.get("code"):
                        s["name"] = new
                        hit = True
                        changed += 1
            if hit:
                with open(path, "w", encoding="utf-8") as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                print(f"[watchlist.json] {os.path.basename(os.path.dirname(path))} 回填")
        except Exception as e:
            print(f"[watchlist.json] 失败 {path}: {e}")
    print(f"[watchlist.json] 回填 {changed} 条自选名称")
    return changed


def backfill_history():
    """回填 data/users/*/ai_evaluation_history.json 的 stock_name"""
    changed = 0
    for path in glob.glob(os.path.join(DATA_DIR, "users", "*", "ai_evaluation_history.json")):
        try:
            with open(path, "r", encoding="utf-8") as f:
                items = json.load(f)
            if not isinstance(items, list):
                print(f"[history] 跳过非列表: {path}")
                continue
            hit = False
            for r in items:
                sn = (r.get("stock_name") or "").strip()
                sc = r.get("stock_code") or ""
                if not sn or sn == sc:
                    new = lookup_name(sc)
                    if new and new != sc:
                        r["stock_name"] = new
                        hit = True
                        changed += 1
            if hit:
                with open(path, "w", encoding="utf-8") as f:
                    json.dump(items, f, ensure_ascii=False, indent=2)
                print(f"[history] {os.path.basename(os.path.dirname(path))} 回填")
        except Exception as e:
            print(f"[history] 失败 {path}: {e}")
    print(f"[history] 回填 {changed} 条历史股票名")
    return changed


if __name__ == "__main__":
    print(f"== 数据回填: {DATA_DIR} ==")
    backfill_sqlite()
    backfill_watchlist_json()
    backfill_history()
    print("== 回填完成 ==")
