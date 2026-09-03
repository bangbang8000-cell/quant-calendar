#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.24): 盘中核验快照测试 — 时点窗口/过点拒绝/历史不现抓"""
import datetime as dt

from shortterm import intraday


def _at(hhmm):
    h, m = map(int, hhmm.split(':'))
    return dt.datetime(2026, 9, 3, h, m)


def test_snapshot_times_exact():
    for t in intraday.SNAPSHOT_TIMES:
        assert intraday.current_snapshot_slot(_at(t)) == t


def test_snapshot_past_window_8min():
    # 09:33 仍在 09:25 窗口(过点 8 分钟, 含端点)
    assert intraday.current_snapshot_slot(_at('09:33')) == '09:25'
    # 10:00 窗口到 10:08
    assert intraday.current_snapshot_slot(_at('10:08')) == '10:00'
    # 09:34 已过 09:25+8min → 不再接受
    assert intraday.current_snapshot_slot(_at('09:34')) == ''


def test_snapshot_between_slots_rejected():
    assert intraday.current_snapshot_slot(_at('10:12')) == ''  # 10:00+8min 后
    assert intraday.current_snapshot_slot(_at('12:30')) == ''  # 午休


def test_accept_snapshot_ok():
    ok, reason = intraday.accept_snapshot('2026-09-03', _at('10:00'),
                                          is_trade_day=True, today='2026-09-03')
    assert ok is True and '10:00' in reason


def test_accept_snapshot_historical_date_rejected():
    ok, reason = intraday.accept_snapshot('2026-09-02', _at('10:00'),
                                          is_trade_day=True, today='2026-09-03')
    assert ok is False and '历史日' in reason


def test_accept_snapshot_nontrade_rejected():
    ok, reason = intraday.accept_snapshot('2026-09-05', _at('10:00'),
                                          is_trade_day=False, today='2026-09-05')
    assert ok is False and '非交易日' in reason


def test_accept_snapshot_outside_slot_rejected():
    ok, reason = intraday.accept_snapshot('2026-09-03', _at('10:10'),
                                          is_trade_day=True, today='2026-09-03')
    assert ok is False and '非快照时点' in reason


def test_snapshot_mood():
    s = intraday.snapshot_mood([{'a': 1}, {'b': 2}], [{'x': 1}], [{'y': 1}])
    assert s['zt_count'] == 2 and s['zb_count'] == 1 and s['dt_count'] == 1
    assert s['broken_rate'] == round(1 / 3, 3)
    assert '盘中值口径' in s['note']
