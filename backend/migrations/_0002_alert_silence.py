#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.4): 迁移 0002 — 预警静默 + 报表订阅表
原 db.migrate() 幂等建表 (V5.4 T-5.4.5 / V5.5 T-5.5.3), 收口为版本化迁移。"""

VERSION = 2
NAME = "alert_silence_report_subs"
DESCRIPTION = "预警静默 alert_silence + 报表订阅 report_subscriptions 表"


def upgrade(conn):
    conn.execute("CREATE TABLE IF NOT EXISTS alert_silence ("
                 " user TEXT PRIMARY KEY, until_ts REAL NOT NULL )")
    conn.execute("CREATE TABLE IF NOT EXISTS report_subscriptions ("
                 " id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT NOT NULL,"
                 " schedule TEXT NOT NULL, blocks TEXT NOT NULL DEFAULT '[]',"
                 " channels TEXT NOT NULL DEFAULT '[]',"
                 " recipients TEXT NOT NULL DEFAULT '[]',"
                 " enabled INTEGER NOT NULL DEFAULT 1,"
                 " last_run_date TEXT, created_at TEXT NOT NULL)")


def downgrade(conn):
    conn.execute("DROP TABLE IF EXISTS report_subscriptions")
    conn.execute("DROP TABLE IF EXISTS alert_silence")
