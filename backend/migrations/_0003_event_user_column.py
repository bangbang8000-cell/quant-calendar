#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.94): 迁移 0003 — event_delivery_log 补 user 列
原 db.migrate() 幂等补列 (V5.0.4 T-5.0.45), 收口为版本化迁移。
回滚: SQLite DROP COLUMN 3.35+ 支持, 最佳努力执行。"""

import logging

logger = logging.getLogger(__name__)

VERSION = 3
NAME = "event_user_column"
DESCRIPTION = "event_delivery_log 补 user 列 (旧库幂等)"


def upgrade(conn):
    cols = [r[1] for r in conn.execute("PRAGMA table_info(event_delivery_log)").fetchall()]
    if cols and "user" not in cols:
        conn.execute("ALTER TABLE event_delivery_log ADD COLUMN user TEXT")
        logger.info("[migrate:0003] event_delivery_log 增加 user 列")


def downgrade(conn):
    try:
        conn.execute("ALTER TABLE event_delivery_log DROP COLUMN user")
        logger.info("[migrate:0003] event_delivery_log 删除 user 列")
    except Exception as e:
        logger.warning("[migrate:0003] DROP COLUMN user 不支持: %s (仅回滚版本记录)", e)
