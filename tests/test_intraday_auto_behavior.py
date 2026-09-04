#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.8 (BUG-FIX-2) 行为级: 盘中快照自动采集落盘验证"""
import asyncio
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))
# 预导入子模块, 使 monkeypatch 可 setattr (shortterm/__init__ 无显式导入)
from shortterm import intraday, store, fetchers  # noqa: E402,F401
from shortterm.trade_calendar import is_trade_day  # noqa: E402,F401


class _FakeStore:
    def __init__(self):
        self.pools = {}
        self.save_calls = []
    def load_pool(self, d, key):
        return self.pools.get((d, key))
    def save_pool(self, d, key, rows):
        self.pools[(d, key)] = rows
        self.save_calls.append((d, key))


class _FakeFetchers:
    def fetch_zt_pool(self, d):
        return {'available': True, 'rows': [{'ts_code': '600000.SH'}]}
    def fetch_zb_pool(self, d):
        return {'available': True, 'rows': [{'ts_code': '000001.SZ'}]}
    def fetch_dt_pool(self, d):
        return {'available': False}


def _sched():
    from scheduler import Scheduler
    s = Scheduler.__new__(Scheduler)
    s.running = True
    return s


def test_collects_and_persists(monkeypatch):
    store = _FakeStore()
    fakers = _FakeFetchers()
    monkeypatch.setattr('shortterm.intraday.current_snapshot_slot', lambda now=None: '10:00')
    monkeypatch.setattr('shortterm.intraday.snapshot_mood',
                        lambda zt, zb, dt_p: {'available': True, 'n': (len(zt or []), len(zb or []), len(dt_p or []))})
    monkeypatch.setattr('shortterm.store.load_pool', store.load_pool)
    monkeypatch.setattr('shortterm.store.save_pool', store.save_pool)
    monkeypatch.setattr('shortterm.fetchers', fakers)
    monkeypatch.setattr('shortterm.trade_calendar.is_trade_day', lambda d: True)
    slot = asyncio.run(_sched()._run_intraday_snapshot())
    assert slot == '10:00'
    assert store.save_calls, '应落盘'
    assert any(str(k[1]).endswith('intraday_10:00') for k in store.pools), '落盘键应为 intraday_10:00'


def test_skip_already_collected(monkeypatch):
    store = _FakeStore()
    store.pools[('2026-01-01', 'intraday_10:00')] = [{'available': True}]
    monkeypatch.setattr('shortterm.intraday.current_snapshot_slot', lambda now=None: '10:00')
    monkeypatch.setattr('shortterm.store.load_pool', lambda d, key: [{'available': True}] if key == 'intraday_10:00' else None)
    monkeypatch.setattr('shortterm.store.save_pool', lambda d, key, rows: None)
    monkeypatch.setattr('shortterm.trade_calendar.is_trade_day', lambda d: True)
    slot = asyncio.run(_sched()._run_intraday_snapshot())
    assert slot is None


def test_skip_nontrade_day(monkeypatch):
    monkeypatch.setattr('shortterm.trade_calendar.is_trade_day', lambda d: False)
    monkeypatch.setattr('shortterm.intraday.current_snapshot_slot', lambda now=None: '10:00')
    slot = asyncio.run(_sched()._run_intraday_snapshot())
    assert slot is None