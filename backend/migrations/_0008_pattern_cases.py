#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.6 (FR-7.6-3): 迁移 0008 — 形态案例库 pattern_cases

从 KHunter 硬编码 10 例升级为用户可管理案例库; features_json 存已提取的四维特征,
匹配时无需重复取历史行情, 案例可导入导出。逐条 execute 避免 executescript 隐式提交。
"""
import logging

logger = logging.getLogger(__name__)

VERSION = 8
NAME = "pattern_cases"
DESCRIPTION = "形态匹配案例库 (v7.6 形态匹配实验室)"

_SQL = (
    ("CREATE TABLE IF NOT EXISTS pattern_cases ("
     " case_id TEXT PRIMARY KEY,"
     " name TEXT NOT NULL DEFAULT '',"
     " symbol TEXT NOT NULL DEFAULT '',"
     " breakout_date TEXT NOT NULL DEFAULT '',"
     " lookback_days INTEGER NOT NULL DEFAULT 25,"
     " tags TEXT NOT NULL DEFAULT '[]',"
     " description TEXT NOT NULL DEFAULT '',"
     " features_json TEXT NOT NULL DEFAULT '{}',"
     " created_at TEXT NOT NULL)"),
    ("CREATE INDEX IF NOT EXISTS idx_pattern_cases_symbol"
     " ON pattern_cases(symbol)"),
    ("CREATE INDEX IF NOT EXISTS idx_pattern_cases_created"
     " ON pattern_cases(created_at)"),
)


def upgrade(conn):
    for sql in _SQL:
        conn.execute(sql)
    logger.info("[migrate:0008] pattern_cases 表就绪")


def downgrade(conn):
    conn.execute("DROP TABLE IF EXISTS pattern_cases")
    logger.info("[migrate:0008] pattern_cases 表已删")
