#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.8 (FR-7.8-1/2): 迁移 0010 — 狩猎跟踪 / 执行计划 / 成交事件

三张表构成"候选 → 计划 → 成交"闭环:
- hunting_tracks: 狩猎场候选的跟踪状态(owner 隔离, 同股同日同策略幂等)
- exec_plans / exec_plan_legs: 计划头 + 买卖腿(含买入区间/止损/止盈/仓位)
- exec_plan_events: 状态流转与成交事件流(审计链, 与 param_audit_log 同思路)

不重复存持仓: 成交回写复用 portfolio_* 存储(单一服务实现, FR-7.8-5)。
"""
import logging

logger = logging.getLogger(__name__)

VERSION = 10
NAME = "execution_plans"
DESCRIPTION = "狩猎跟踪与执行计划 (v7.8 执行与实盘联动)"

_SQL = (
    ("CREATE TABLE IF NOT EXISTS hunting_tracks ("
     " id INTEGER PRIMARY KEY AUTOINCREMENT,"
     " owner TEXT NOT NULL DEFAULT '',"
     " symbol TEXT NOT NULL,"
     " name TEXT NOT NULL DEFAULT '',"
     " strategy TEXT NOT NULL DEFAULT '',"
     " hunt_date TEXT NOT NULL DEFAULT '',"
     " support_level REAL NOT NULL DEFAULT 0,"
     " support_method TEXT NOT NULL DEFAULT '',"
     " ref_close REAL NOT NULL DEFAULT 0,"
     " distance_pct REAL,"
     " position TEXT NOT NULL DEFAULT 'unknown',"
     " status TEXT NOT NULL DEFAULT 'watching',"
     " note TEXT NOT NULL DEFAULT '',"
     " operator TEXT NOT NULL DEFAULT '',"
     " created_at TEXT NOT NULL,"
     " updated_at TEXT NOT NULL,"
     " UNIQUE(owner, symbol, strategy, hunt_date))"),
    ("CREATE INDEX IF NOT EXISTS idx_hunting_owner_status"
     " ON hunting_tracks(owner, status)"),
    ("CREATE TABLE IF NOT EXISTS exec_plans ("
     " id TEXT PRIMARY KEY,"
     " owner TEXT NOT NULL DEFAULT '',"
     " name TEXT NOT NULL,"
     " plan_date TEXT NOT NULL DEFAULT '',"
     " hunt_date TEXT NOT NULL DEFAULT '',"
     " strategy TEXT NOT NULL DEFAULT '',"
     " status TEXT NOT NULL DEFAULT 'draft',"
     " source TEXT NOT NULL DEFAULT 'manual',"
     " exposure REAL NOT NULL DEFAULT 1.0,"
     " note TEXT NOT NULL DEFAULT '',"
     " operator TEXT NOT NULL DEFAULT '',"
     " created_at TEXT NOT NULL,"
     " updated_at TEXT NOT NULL)"),
    ("CREATE INDEX IF NOT EXISTS idx_exec_plans_owner"
     " ON exec_plans(owner, status, updated_at)"),
    ("CREATE TABLE IF NOT EXISTS exec_plan_legs ("
     " id INTEGER PRIMARY KEY AUTOINCREMENT,"
     " plan_id TEXT NOT NULL,"
     " seq INTEGER NOT NULL DEFAULT 0,"
     " symbol TEXT NOT NULL,"
     " name TEXT NOT NULL DEFAULT '',"
     " side TEXT NOT NULL DEFAULT 'buy',"
     " buy_low REAL NOT NULL DEFAULT 0,"
     " buy_high REAL NOT NULL DEFAULT 0,"
     " position_ratio REAL NOT NULL DEFAULT 0.05,"
     " stop_loss REAL NOT NULL DEFAULT 0,"
     " take_profit REAL NOT NULL DEFAULT 0,"
     " status TEXT NOT NULL DEFAULT 'pending',"
     " filled_price REAL,"
     " filled_qty REAL,"
     " filled_at TEXT,"
     " note TEXT NOT NULL DEFAULT '')"),
    ("CREATE INDEX IF NOT EXISTS idx_exec_legs_plan ON exec_plan_legs(plan_id, seq)"),
    ("CREATE TABLE IF NOT EXISTS exec_plan_events ("
     " id INTEGER PRIMARY KEY AUTOINCREMENT,"
     " plan_id TEXT NOT NULL,"
     " leg_id INTEGER,"
     " event TEXT NOT NULL,"
     " detail TEXT NOT NULL DEFAULT '',"
     " operator TEXT NOT NULL DEFAULT '',"
     " ts TEXT NOT NULL)"),
    ("CREATE INDEX IF NOT EXISTS idx_exec_events_plan ON exec_plan_events(plan_id, id)"),
)


def upgrade(conn):
    for sql in _SQL:
        conn.execute(sql)
    logger.info("[migrate:0010] 狩猎跟踪/执行计划/成交事件表就绪")


def downgrade(conn):
    for table in ("exec_plan_events", "exec_plan_legs", "exec_plans", "hunting_tracks"):
        conn.execute("DROP TABLE IF EXISTS %s" % table)
    logger.info("[migrate:0010] 执行相关表已删")
