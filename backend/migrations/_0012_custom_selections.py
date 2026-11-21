#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.12 (PRD §6.5.2 / FR-7.4-9 增强): 迁移 0012 — 股票级受控入库 custom_selections

策略级入库由 `show_in_calendar` 承载; 本表补"股票级"勾选:
同一 (user, date, strategy_id) 只保留一行, symbols_json 存该次勾选的代码数组,
重复提交即覆盖(幂等), 避免同一人同日重复勾选产生多行脏数据。
"""
import logging

logger = logging.getLogger(__name__)

VERSION = 12
NAME = "custom_selections"
DESCRIPTION = "股票级受控入库 (v7.12 补齐 PRD §6.5.2 勾选语义)"

_SQL = (
    ("CREATE TABLE IF NOT EXISTS custom_selections ("
     " id TEXT PRIMARY KEY,"
     " user TEXT NOT NULL DEFAULT '',"
     " date TEXT NOT NULL,"
     " strategy_id TEXT NOT NULL DEFAULT '',"
     " symbols_json TEXT NOT NULL DEFAULT '[]',"
     " note TEXT NOT NULL DEFAULT '',"
     " created_at TEXT NOT NULL,"
     " UNIQUE(user, date, strategy_id))"),
    ("CREATE INDEX IF NOT EXISTS idx_custom_sel_date"
     " ON custom_selections(date, user)"),
)


def upgrade(conn):
    for sql in _SQL:
        conn.execute(sql)
    logger.info("[migrate:0012] custom_selections 表就绪")


def downgrade(conn):
    conn.execute("DROP TABLE IF EXISTS custom_selections")
    logger.info("[migrate:0012] custom_selections 表已删")
