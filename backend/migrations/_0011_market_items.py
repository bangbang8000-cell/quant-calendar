#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.10 (FR-7.10-1): 迁移 0011 — 策略/案例市场 market_items

发布物是不可变快照(payload_json) + 显式版本号; (kind, ref_id, version) 唯一,
重复发布覆盖同一行并更新 updated_at, 历史版本可按 version 取回。
下架用 status='archived' 保留行(与 KHunter"目录软删除"不同: 这里明示状态而非留孤儿文件)。
"""
import logging

logger = logging.getLogger(__name__)

VERSION = 11
NAME = "market_items"
DESCRIPTION = "策略/案例市场 (v7.10 平台化与生态)"

_SQL = (
    ("CREATE TABLE IF NOT EXISTS market_items ("
     " id TEXT PRIMARY KEY,"
     " kind TEXT NOT NULL,"
     " ref_id TEXT NOT NULL,"
     " title TEXT NOT NULL,"
     " summary TEXT NOT NULL DEFAULT '',"
     " version TEXT NOT NULL DEFAULT '1.0.0',"
     " payload_json TEXT NOT NULL DEFAULT '{}',"
     " status TEXT NOT NULL DEFAULT 'published',"
     " author TEXT NOT NULL DEFAULT '',"
     " downloads INTEGER NOT NULL DEFAULT 0,"
     " created_at TEXT NOT NULL,"
     " updated_at TEXT NOT NULL,"
     " UNIQUE(kind, ref_id, version))"),
    ("CREATE INDEX IF NOT EXISTS idx_market_kind_status"
     " ON market_items(kind, status, updated_at)"),
)


def upgrade(conn):
    for sql in _SQL:
        conn.execute(sql)
    logger.info("[migrate:0011] market_items 表就绪")


def downgrade(conn):
    conn.execute("DROP TABLE IF EXISTS market_items")
    logger.info("[migrate:0011] market_items 表已删")
