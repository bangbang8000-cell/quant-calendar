#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
JSON → SQLite 迁移脚本 (v3.3.0-T6)
用法:
  python3 scripts/migrate.py --dry-run   # 演练, 不写入
  python3 scripts/migrate.py             # 正式迁移
迁移范围: users / chat_history / watchlist / groups
"""
import argparse
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from paths import DATA_DIR, USERS_FILE, GROUPS_FILE


def migrate_users(db, dry_run=False) -> dict:
    """迁移 users.json → SQLite"""
    result = {"users": 0}
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'r', encoding='utf-8') as f:
            users = json.load(f)
        for username, data in users.items():
            if not dry_run:
                db.kv_set('users', username, data)
            result["users"] += 1
    return result


def migrate_groups(db, dry_run=False) -> dict:
    result = {"groups": 0}
    if os.path.exists(GROUPS_FILE):
        with open(GROUPS_FILE, 'r', encoding='utf-8') as f:
            groups = json.load(f)
        for gid, data in groups.items():
            if not dry_run:
                db.kv_set('groups', gid, data)
            result["groups"] += 1
    return result


def migrate_chat(db, dry_run=False) -> dict:
    """chat_history.json → SQLite (按 message 行展开)"""
    result = {"sessions": 0, "messages": 0}
    chat_file = os.path.join(DATA_DIR, "chat_history.json")
    if os.path.exists(chat_file):
        with open(chat_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        sessions = data.get("sessions", [])
        result["sessions"] = len(sessions)
        for s in sessions:
            for m in s.get("messages", []):
                if not dry_run:
                    db.chat_append('default', s.get('stock_code', ''), m.get('role', 'user'), m.get('content', ''))
                result["messages"] += 1
    return result


def migrate_watchlist(db, dry_run=False) -> dict:
    """每个用户的 watchlist.json → SQLite"""
    result = {"users": 0, "stocks": 0}
    users_dir = os.path.join(DATA_DIR, "users")
    if os.path.isdir(users_dir):
        for username in os.listdir(users_dir):
            wl_file = os.path.join(users_dir, username, "watchlist.json")
            if os.path.exists(wl_file):
                with open(wl_file, 'r', encoding='utf-8') as f:
                    wl = json.load(f)
                stocks = wl.get("stocks", [])
                if stocks:
                    result["users"] += 1
                    result["stocks"] += len(stocks)
                    if not dry_run:
                        for item in stocks:
                            code = item.get('code') if isinstance(item, dict) else item
                            db.watchlist_set(username, code)
    return result


def main():
    parser = argparse.ArgumentParser(description="JSON → SQLite 迁移")
    parser.add_argument("--dry-run", action="store_true", help="演练模式, 不写入")
    args = parser.parse_args()

    import db
    if not db.schema_ok():
        print("数据库初始化失败, 无法迁移")
        sys.exit(1)

    print(f"{'[DRY-RUN] ' if args.dry_run else ''}开始迁移:")
    r1 = migrate_users(db, args.dry_run)
    print(f"  users: {r1['users']} 个用户")
    r2 = migrate_chat(db, args.dry_run)
    print(f"  chat_history: {r2['sessions']} 个会话 / {r2['messages']} 条消息")
    r3 = migrate_watchlist(db, args.dry_run)
    print(f"  watchlist: {r3['users']} 个用户 / {r3['stocks']} 只股票")
    r4 = migrate_groups(db, args.dry_run)
    print(f"  groups: {r4['groups']} 个分组")

    if not args.dry_run:
        # 校验
        db_users = db.kv_all('users')
        db_groups = db.kv_all('groups')
        db_chat = db.chat_all()
        print(f"校验: SQLite users={len(db_users)} groups={len(db_groups)} chat行={len(db_chat)}")
        print("迁移完成 ✅")
    else:
        print("演练完成 (未写入) ✅")


if __name__ == "__main__":
    main()
