#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.0.5): 迁移 0005 — 收口 db.migrate() 遗留幂等补列

背景: db.py migrate() 历史保留的 ad-hoc ALTER TABLE（幂等补列），
原逻辑散落在启动/自愈路径，未纳入版本化迁移框架。本迁移将其收口：
- event_delivery_log.user        (V5.0.4, 与 0003 幂等共存)
- watchlist.name                 (v3.14.2)
- chat_history.stock_name        (v3.15)
- chat_history.username          (v3.17.13)
新库 SCHEMA 已含这些列 → PRAGMA 检查幂等跳过；旧库升级自动补齐。
回滚: SQLite DROP COLUMN 3.35+ 支持, 最佳努力执行。
"""

import logging

logger = logging.getLogger(__name__)

VERSION = 5
NAME = "legacy_column_backfill"
DESCRIPTION = "收口 db.migrate() 遗留幂等补列 (watchlist.name / chat_history.stock_name,username / event_delivery_log.user)"


def _cols(conn, table):
    return [r[1] for r in conn.execute("PRAGMA table_info(%s)" % table).fetchall()]


def _add_col(conn, table, col, ddl):
    if _cols(conn, table) and col not in _cols(conn, table):
        conn.execute("ALTER TABLE %s ADD COLUMN %s" % (table, ddl))
        logger.info("[migrate:0005] %s 增加列 %s", table, col)


def upgrade(conn):
    _add_col(conn, "event_delivery_log", "user", "user TEXT")
    _add_col(conn, "watchlist", "name", "name TEXT NOT NULL DEFAULT ''")
    _add_col(conn, "chat_history", "stock_name", "stock_name TEXT NOT NULL DEFAULT ''")
    _add_col(conn, "chat_history", "username", "username TEXT NOT NULL DEFAULT 'default'")
    logger.info("[migrate:0005] 遗留补列已收口")


def downgrade(conn):
    for table, col in (("event_delivery_log", "user"),
                       ("watchlist", "name"),
                       ("chat_history", "stock_name"),
                       ("chat_history", "username")):
        try:
            conn.execute("ALTER TABLE %s DROP COLUMN %s" % (table, col))
            logger.info("[migrate:0005] %s 删除列 %s", table, col)
        except Exception as e:
            logger.warning("[migrate:0005] DROP COLUMN %s.%s 不支持: %s (仅回滚版本记录)",
                           table, col, e)
