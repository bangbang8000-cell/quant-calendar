#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.4.4 / FR-5.3.4.4): 迁移 0006 — 后端热点查询索引

- portfolio_trades: (username, created_at) 覆盖 ORDER BY created_at DESC 倒序调仓
- portfolio_trades: (trade_date) 覆盖按交易日检索
- chat_history: (username, id) 覆盖会话倒序分页
- watchlist: (username, added_at) 覆盖自选按加入时间排序
幂等 CREATE INDEX IF NOT EXISTS; 回滚 DROP INDEX (SQLite 支持)。"""

import logging

logger = logging.getLogger(__name__)

VERSION = 6
NAME = "hotspot_indexes"
DESCRIPTION = "后端热点查询索引 (性能与容量)"


def upgrade(conn):
    # 容错: 旧库可能缺表 (portfolio_trades 等由业务层延迟建表), 缺表则跳过该索引
    _indexes = (
        ("idx_portfolio_trades_user_created",
         "portfolio_trades", "(username, created_at)"),
        ("idx_portfolio_trades_trade_date",
         "portfolio_trades", "(trade_date)"),
        ("idx_chat_history_user_id",
         "chat_history", "(username, id)"),
        ("idx_watchlist_user_added",
         "watchlist", "(username, added_at)"),
    )
    for name, table, cols in _indexes:
        try:
            conn.execute("CREATE INDEX IF NOT EXISTS %s ON %s %s" % (name, table, cols))
        except Exception as e:
            logger.warning("[migrate:0006] 建索引 %s 跳过 (表 %s 不存在?): %s", name, table, e)
    logger.info("[migrate:0006] 热点索引已建 (trades/chat/watchlist, 缺表跳过)")


def downgrade(conn):
    for idx in ("idx_portfolio_trades_user_created",
                "idx_portfolio_trades_trade_date",
                "idx_chat_history_user_id",
                "idx_watchlist_user_added"):
        try:
            conn.execute("DROP INDEX IF EXISTS %s" % idx)
            logger.info("[migrate:0006] 索引 %s 已删", idx)
        except Exception as e:
            logger.warning("[migrate:0006] DROP INDEX %s 失败: %s", idx, e)
