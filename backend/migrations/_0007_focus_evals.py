#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.1 / FR-5.4.3): 迁移 0007 — 重点跟踪评估存储表 focus_evals

只存客观评估事实 (score/level/direction)，动作不入库
(5 档动作 = f(评分, level, 用户持仓) 在查询/推送时按用户实时派生)。
复合主键 (trade_date, session, stock_code) 提供幂等语义:
同 (日期, 时段, 股票) 重复评估 → INSERT OR REPLACE 覆盖, 不产生重复记录。
注意: 用 conn.execute 逐条执行 (executescript 会隐式 COMMIT, 破坏迁移事务)。
"""

import logging

logger = logging.getLogger(__name__)

VERSION = 7
NAME = "focus_evals"
DESCRIPTION = "重点跟踪评估存储 (5.4 重点跟踪评估主线)"

_SQL = (
    ("CREATE TABLE IF NOT EXISTS focus_evals ("
     " trade_date TEXT NOT NULL,"
     " session TEXT NOT NULL,"
     " stock_code TEXT NOT NULL,"
     " stock_name TEXT NOT NULL DEFAULT '',"
     " total_score REAL,"
     " level TEXT NOT NULL DEFAULT '',"
     " direction TEXT NOT NULL DEFAULT '',"
     " model_provider TEXT NOT NULL DEFAULT '',"
     " model_used TEXT NOT NULL DEFAULT '',"
     " raw_json TEXT NOT NULL DEFAULT '{}',"
     " created_at TEXT NOT NULL,"
     " PRIMARY KEY (trade_date, session, stock_code))"),
    ("CREATE INDEX IF NOT EXISTS idx_focus_date_session"
     " ON focus_evals(trade_date, session)"),
    ("CREATE INDEX IF NOT EXISTS idx_focus_stock_date"
     " ON focus_evals(stock_code, trade_date)"),
)


def upgrade(conn):
    for sql in _SQL:
        conn.execute(sql)
    logger.info("[migrate:0007] focus_evals 表就绪 (复合主键幂等)")


def downgrade(conn):
    conn.execute("DROP TABLE IF EXISTS focus_evals")
    logger.info("[migrate:0007] focus_evals 表已删")
