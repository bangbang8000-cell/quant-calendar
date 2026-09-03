#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.07): 迁移 0004 — 短线复盘数据表
- shortterm_pools: 每日三池/龙虎榜 归一化行 JSON (trade_date + pool_type 唯一)
- shortterm_sector_flow: 板块资金流(实时口径, 无历史收盘, 仅追加)
- shortterm_reviews: 每日短线复盘报告 (AI 多分析师收敛产物)
幂等建表; 回滚 DROP TABLE。"""

import logging

logger = logging.getLogger(__name__)

VERSION = 4
NAME = "shortterm"
DESCRIPTION = "短线复盘: 三池/龙虎榜/板块资金流/复盘报告表"


def upgrade(conn):
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS shortterm_pools (
            trade_date  TEXT NOT NULL,
            pool_type   TEXT NOT NULL,        -- zt / zb / dt / lhb
            payload     TEXT NOT NULL,        -- 归一化行 JSON 数组
            updated_at  TEXT NOT NULL,
            PRIMARY KEY (trade_date, pool_type)
        );
        CREATE TABLE IF NOT EXISTS shortterm_sector_flow (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            captured_at TEXT NOT NULL,        -- 抓取时间(实时口径)
            sector_type TEXT NOT NULL,        -- 行业资金流 / 概念资金流
            indicator   TEXT NOT NULL,        -- 今日 / 5日 / 10日
            payload     TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS shortterm_reviews (
            trade_date  TEXT PRIMARY KEY,
            generated_at TEXT NOT NULL,
            data        TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_shortterm_pools_date
            ON shortterm_pools (trade_date);
        CREATE INDEX IF NOT EXISTS idx_shortterm_sector_captured
            ON shortterm_sector_flow (captured_at);
        """
    )
    logger.info("[migrate:0004] 短线复盘表已创建")


def downgrade(conn):
    for t in ("shortterm_reviews", "shortterm_sector_flow", "shortterm_pools"):
        conn.execute(f"DROP TABLE IF EXISTS {t}")
    logger.info("[migrate:0004] 短线复盘表已回滚")
