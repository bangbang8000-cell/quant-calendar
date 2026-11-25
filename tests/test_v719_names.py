#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-9): 股票名链路 —— 名称服务契约 / 批量映射 / 幂等回填 / 前端降级"""
import os
import sqlite3
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'scripts'))


def test_get_name_returns_empty_for_unknown():
    from stock_info import StockInfoManager
    m = StockInfoManager.__new__(StockInfoManager)
    m.stock_map = {'600519.SH': '贵州茅台'}
    assert m.get_name('600519.SH') == '贵州茅台'
    # 关键契约：查不到返回空串，不再把代码当名称
    assert m.get_name('999999.SH') == ''
    assert m.get_name('') == ''


def test_symbol_names_skips_missing(monkeypatch):
    from api.v1 import strategy_research as sr
    from stock_info import stock_manager
    monkeypatch.setattr(stock_manager, 'get_name',
                        lambda c: {'600519.SH': '贵州茅台'}.get(c, ''), raising=False)
    out = sr._symbol_names(['600519.SH', '999999.SH'])
    assert out == {'600519.SH': '贵州茅台'}


def _seed_db():
    conn = sqlite3.connect('file:v719names?mode=memory&cache=shared', uri=True)
    conn.row_factory = sqlite3.Row
    conn.execute("CREATE TABLE IF NOT EXISTS watchlist (username TEXT, stock_code TEXT, name TEXT, added_at TEXT)")
    conn.execute("CREATE TABLE IF NOT EXISTS portfolio_positions "
                 "(id INTEGER PRIMARY KEY, username TEXT, stock_code TEXT, stock_name TEXT, cost_price REAL, quantity REAL)")
    conn.execute("DELETE FROM watchlist")
    conn.execute("DELETE FROM portfolio_positions")
    conn.execute("INSERT INTO watchlist VALUES ('admin','600519.SH','', '2026-01-01')")
    conn.execute("INSERT INTO watchlist VALUES ('admin','600519.SZ','600519.SZ','2026-01-01')")
    conn.execute("INSERT INTO portfolio_positions (username,stock_code,stock_name,cost_price,quantity) "
                 "VALUES ('admin','000001.SZ','','10',100)")
    conn.commit()
    return conn


def test_backfill_is_idempotent(monkeypatch):
    import backfill_stock_names as bf
    import db
    from stock_info import stock_manager

    holder = _seed_db()
    monkeypatch.setattr(db, 'get_conn',
                        lambda: sqlite3.connect('file:v719names?mode=memory&cache=shared', uri=True))
    monkeypatch.setattr(stock_manager, 'get_name',
                        lambda c: {'600519.SH': '贵州茅台', '600519.SZ': '贵州茅台',
                                   '000001.SZ': '平安银行'}.get(c, ''), raising=False)

    first = bf.backfill()
    assert first['watchlist'] == 2 and first['positions'] == 1

    second = bf.backfill()
    assert second['watchlist'] == 0 and second['positions'] == 0

    rows = holder.execute("SELECT stock_code, name FROM watchlist ORDER BY stock_code").fetchall()
    assert [r['name'] for r in rows] == ['贵州茅台', '贵州茅台']
    holder.close()


def test_needs_name_rule():
    import backfill_stock_names as bf
    assert bf._needs_name('', '600000.SH') is True
    assert bf._needs_name('600000.SH', '600000.SH') is True
    assert bf._needs_name('浦发银行', '600000.SH') is False


def test_stock_list_renders_dash_for_missing_name():
    p = os.path.join(BASE, 'frontend', 'src', 'components', 'common', 'StockList.vue')
    with open(p, encoding='utf-8') as f:
        src = f.read()
    assert "{{ item.name || '—' }}" in src
    assert '名称缺失' in src
