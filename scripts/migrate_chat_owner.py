#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.22 FR-3: 问股历史归属迁移（幂等）。

把历史遗留的访客/归档记录认领给指定账号，默认 guest/default → admin。
运行前请自行备份 data/app.db；脚本重复执行时第二次影响 0 行。

用法：
  python3 scripts/migrate_chat_owner.py [--target admin] [--dry-run]
"""
import argparse
import os
import sqlite3
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "backend"))

from db import DB_FILE, migrate  # noqa: E402 — backend 路径注入后导入


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", default="admin", help="认领目标账号 (默认 admin)")
    ap.add_argument("--source", action="append", default=None,
                    help="来源账号，可重复；默认 guest + default")
    ap.add_argument("--dry-run", action="store_true", help="只统计，不写入")
    ap.add_argument("--db", default=None, help="显式指定数据库路径（用于迁移运行副本）")
    args = ap.parse_args()

    sources = args.source or ["guest", "default"]
    db_file = args.db or DB_FILE
    migrate()
    if not os.path.exists(db_file):
        print(f"[迁移] 数据库不存在: {db_file}")
        return 1

    conn = sqlite3.connect(db_file)
    try:
        marks = ",".join("?" for _ in sources)
        row = conn.execute(
            f"SELECT COUNT(*) FROM chat_history WHERE username IN ({marks})", sources
        ).fetchone()
        count = int(row[0] if row else 0)
        print(f"[迁移] 来源 {sources} → {args.target}: 命中 {count} 行; dry_run={args.dry_run}")
        if count and not args.dry_run:
            cur = conn.execute(
                f"UPDATE chat_history SET username=? WHERE username IN ({marks})",
                [args.target] + sources,
            )
            conn.commit()
            print(f"[迁移] 已更新 {cur.rowcount} 行")
        left = conn.execute(
            f"SELECT COUNT(*) FROM chat_history WHERE username IN ({marks})", sources
        ).fetchone()[0]
        print(f"[迁移] 剩余来源记录 {left} 行 (重复执行应为 0)")
    finally:
        conn.close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
