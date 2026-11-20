#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.7 (FR-7.7-1): 迁移 0009 — 策略参数审计日志 param_audit_log

锁定/解锁/校验事件统一入库; 锁定状态从最新 lock/unlock 事件派生,
不单独维护可变状态表(与 focus_evals 同源思路)。params_hash 为规范化 JSON 的
SHA-256, 保证同参数不同键序得到同一哈希, 支撑回测可复现断言。
"""
import logging

logger = logging.getLogger(__name__)

VERSION = 9
NAME = "param_audit_log"
DESCRIPTION = "策略参数锁定/追踪审计 (v7.7 治理增强)"

_SQL = (
    ("CREATE TABLE IF NOT EXISTS param_audit_log ("
     " id INTEGER PRIMARY KEY AUTOINCREMENT,"
     " sid TEXT NOT NULL,"
     " event_type TEXT NOT NULL,"
     " params_hash TEXT NOT NULL DEFAULT '',"
     " params_json TEXT NOT NULL DEFAULT '{}',"
     " operator TEXT NOT NULL DEFAULT '',"
     " reason TEXT NOT NULL DEFAULT '',"
     " ts TEXT NOT NULL)"),
    ("CREATE INDEX IF NOT EXISTS idx_param_audit_sid_ts"
     " ON param_audit_log(sid, ts)"),
)


def upgrade(conn):
    for sql in _SQL:
        conn.execute(sql)
    logger.info("[migrate:0009] param_audit_log 表就绪")


def downgrade(conn):
    conn.execute("DROP TABLE IF EXISTS param_audit_log")
    logger.info("[migrate:0009] param_audit_log 表已删")
