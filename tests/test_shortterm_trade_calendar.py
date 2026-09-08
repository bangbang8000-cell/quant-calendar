#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.06): 交易日历 + 定稿判据测试"""
from datetime import datetime

from shortterm import trade_calendar as tc


def _fake_source(start, end):
    """注入: 仅工作日(2026-09 无节假日), 模拟 tushare trade_cal"""
    return ['20260901', '20260902', '20260903', '20260904',
            '20260907', '20260908', '20260909', '20260910',
            '20260911', '20260914', '20260915', '20260916',
            '20260917', '20260918', '20260921', '20260922',
            '20260923', '20260924', '20260925', '20260928',
            '20260929', '20260930']


def setup_function():
    tc.set_trade_date_source(_fake_source)


# ---------- 基础 ----------

def test_open_dates_between():
    out = tc.open_dates_between('2026-09-01', '2026-09-03')
    assert out == ['2026-09-01', '2026-09-02', '2026-09-03']


def test_is_trade_day():
    assert tc.is_trade_day('2026-09-02') is True
    assert tc.is_trade_day('2026-09-05') is False  # 周六


def test_prev_next_trade_date():
    assert tc.prev_trade_date('2026-09-07') == '2026-09-04'
    assert tc.next_trade_date('2026-09-04') == '2026-09-07'


def test_last_trade_dates_count_and_order():
    out = tc.last_trade_dates(3, end='2026-09-08')
    assert out == ['2026-09-08', '2026-09-07', '2026-09-04']


# ---------- 定稿判据 ----------

def test_latest_session_trade_day_closed():
    now = datetime(2026, 9, 2, 15, 30)
    assert tc.latest_session(today='2026-09-02', now=now) == '2026-09-02'


def test_latest_session_trade_day_not_closed():
    now = datetime(2026, 9, 2, 10, 0)
    assert tc.latest_session(today='2026-09-02', now=now) == '2026-09-01'


def test_latest_session_weekend():
    now = datetime(2026, 9, 5, 12, 0)  # 周六
    assert tc.latest_session(today='2026-09-05', now=now) == '2026-09-04'


def test_is_settled_history_true():
    assert tc.is_settled('2026-09-01', today='2026-09-02', now=datetime(2026, 9, 2, 10, 0)) is True


def test_is_settled_today_after_close():
    assert tc.is_settled('2026-09-02', today='2026-09-02', now=datetime(2026, 9, 2, 15, 30)) is True


def test_is_settled_today_before_close():
    assert tc.is_settled('2026-09-02', today='2026-09-02', now=datetime(2026, 9, 2, 10, 0)) is False


def test_is_settled_nontrade_day():
    assert tc.is_settled('2026-09-05', today='2026-09-05', now=datetime(2026, 9, 5, 16, 0)) is False


# ---------- 降级与格式 ----------

def test_weekday_fallback_when_source_fails(monkeypatch):
    def bad_source(start, end):
        raise RuntimeError('boom')
    tc.set_trade_date_source(bad_source)
    assert tc.is_trade_day('2026-09-03') is True   # 周三
    assert tc.is_trade_day('2026-09-05') is False  # 周六


def test_date_format_normalize():
    assert tc._to_ymd('20260902') == '2026-09-02'
    assert tc._to_ymd('2026-09-02') == '2026-09-02'
