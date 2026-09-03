#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.07): 迁移 0004 测试 — 幂等建表/读写/回滚"""
import json
import sqlite3

from migrations import _0004_shortterm


def _conn():
    return sqlite3.connect(':memory:')


def test_upgrade_creates_tables():
    c = _conn()
    _0004_shortterm.upgrade(c)
    names = {r[0] for r in c.execute(
        "SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert {'shortterm_pools', 'shortterm_sector_flow', 'shortterm_reviews'} <= names


def test_upgrade_idempotent():
    c = _conn()
    _0004_shortterm.upgrade(c)
    _0004_shortterm.upgrade(c)   # 重复执行无副作用
    names = {r[0] for r in c.execute(
        "SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert 'shortterm_pools' in names


def test_pools_upsert_roundtrip():
    c = _conn()
    _0004_shortterm.upgrade(c)
    rows = json.dumps([{'ts_code': '002909', 'name': '集泰股份', 'boards': 3}])
    c.execute("INSERT OR REPLACE INTO shortterm_pools VALUES (?,?,?,?)",
              ('2026-09-02', 'zt', rows, '2026-09-02T20:00:00'))
    c.commit()
    got = c.execute("SELECT payload FROM shortterm_pools "
                    "WHERE trade_date='2026-09-02' AND pool_type='zt'").fetchone()
    assert json.loads(got[0])[0]['ts_code'] == '002909'
    # 同 key 再写 = 覆盖, 不产生重复行
    c.execute("INSERT OR REPLACE INTO shortterm_pools VALUES (?,?,?,?)",
              ('2026-09-02', 'zt', rows, '2026-09-02T21:00:00'))
    c.commit()
    cnt = c.execute("SELECT COUNT(*) FROM shortterm_pools").fetchone()[0]
    assert cnt == 1


def test_reviews_upsert():
    c = _conn()
    _0004_shortterm.upgrade(c)
    c.execute("INSERT OR REPLACE INTO shortterm_reviews VALUES (?,?,?)",
              ('2026-09-02', 't', '{"focus": "x"}'))
    c.commit()
    assert c.execute("SELECT COUNT(*) FROM shortterm_reviews").fetchone()[0] == 1


def test_downgrade_drops_tables():
    c = _conn()
    _0004_shortterm.upgrade(c)
    _0004_shortterm.downgrade(c)
    names = {r[0] for r in c.execute(
        "SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert 'shortterm_pools' not in names
    assert 'shortterm_reviews' not in names


def test_downgrade_then_reupgrade():
    c = _conn()
    _0004_shortterm.upgrade(c)
    _0004_shortterm.downgrade(c)
    _0004_shortterm.upgrade(c)   # 回滚后重升可用
    names = {r[0] for r in c.execute(
        "SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert 'shortterm_pools' in names
