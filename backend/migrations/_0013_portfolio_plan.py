#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-6): 迁移 0013 — 组合建仓计划 portfolio_plan / portfolio_plan_item

背景: 「组合持仓」原先只能逐只手工填成本价/数量, 自选股转持仓没有批量入口。
本表保存「等权均分建仓」的计划快照(总资金/模式/每只数量与金额),
配合 portfolio_positions 落库; plan_hash 用于幂等(同一计划重复确认不重复加仓)。
"""
import logging

logger = logging.getLogger(__name__)

VERSION = 13
NAME = "portfolio_plan"
DESCRIPTION = "自选等权建仓计划快照 (v7.19 FR-6)"

_SQL = (
    ("CREATE TABLE IF NOT EXISTS portfolio_plan ("
     " id INTEGER PRIMARY KEY AUTOINCREMENT,"
     " username TEXT NOT NULL,"
     " mode TEXT NOT NULL DEFAULT 'equal',"
     " source TEXT NOT NULL DEFAULT 'watchlist',"
     " total_capital REAL NOT NULL DEFAULT 0,"
     " invested REAL NOT NULL DEFAULT 0,"
     " cash_reserve REAL NOT NULL DEFAULT 0,"
     " position_count INTEGER NOT NULL DEFAULT 0,"
     " plan_hash TEXT NOT NULL DEFAULT '',"
     " status TEXT NOT NULL DEFAULT 'preview',"
     " applied_at TEXT,"
     " created_at TEXT NOT NULL)"),
    ("CREATE INDEX IF NOT EXISTS idx_portfolio_plan_user"
     " ON portfolio_plan(username, id)"),
    ("CREATE INDEX IF NOT EXISTS idx_portfolio_plan_hash"
     " ON portfolio_plan(username, plan_hash, status)"),
    ("CREATE TABLE IF NOT EXISTS portfolio_plan_item ("
     " id INTEGER PRIMARY KEY AUTOINCREMENT,"
     " plan_id INTEGER NOT NULL,"
     " stock_code TEXT NOT NULL,"
     " stock_name TEXT NOT NULL DEFAULT '',"
     " price REAL NOT NULL DEFAULT 0,"
     " lots INTEGER NOT NULL DEFAULT 0,"
     " quantity REAL NOT NULL DEFAULT 0,"
     " amount REAL NOT NULL DEFAULT 0,"
     " target_weight REAL NOT NULL DEFAULT 0,"
     " note TEXT NOT NULL DEFAULT '')"),
    ("CREATE INDEX IF NOT EXISTS idx_portfolio_plan_item_plan"
     " ON portfolio_plan_item(plan_id)"),
)


def upgrade(conn):
    for sql in _SQL:
        conn.execute(sql)
    logger.info("[migrate:0013] portfolio_plan / portfolio_plan_item 表就绪")


def downgrade(conn):
    conn.execute("DROP TABLE IF EXISTS portfolio_plan_item")
    conn.execute("DROP TABLE IF EXISTS portfolio_plan")
    logger.info("[migrate:0013] portfolio_plan / portfolio_plan_item 表已删")
