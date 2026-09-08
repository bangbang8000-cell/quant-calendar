# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.3 / FR-5.4.2): 重点跟踪多时点调度测试

覆盖: 时点窗口判定(含 8 分钟容忍)/过点拒绝/非交易日拒绝/历史日拒绝/
      盘中时点可选开关(默认关)/必做时点不受开关影响。
"""
import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import focus_scheduler as fs
from focus_scheduler import (session_at, decide_session, is_eligible_date,
                             GRACE_MINUTES, SESSIONS, SESSION_ORDER,
                             MANDATORY_SESSIONS, OPTIONAL_SESSIONS)


# ─── 时段定义 ───────────────────────────────────────────────

def test_sessions_definition():
    assert MANDATORY_SESSIONS == ("pre_open", "after_close")
    assert OPTIONAL_SESSIONS == ("intraday_1", "intraday_2")
    assert GRACE_MINUTES == 8


def test_session_at_within_window():
    assert session_at("09:00") == "pre_open"
    assert session_at("09:07") == "pre_open"    # 8 分钟容忍内
    assert session_at("09:08") == "pre_open"    # 边界含
    assert session_at("10:30") == "intraday_1"
    assert session_at("14:00") == "intraday_2"
    assert session_at("20:00") == "after_close"


def test_session_at_outside_window():
    assert session_at("08:59") is None
    assert session_at("09:09") is None          # 过点拒绝
    assert session_at("10:29") is None
    assert session_at("10:39") is None
    assert session_at("15:00") is None
    assert session_at("20:09") is None


# ─── 决策 decide_session ────────────────────────────────────

def test_decide_mandatory_sessions_run_regardless_intraday():
    assert decide_session("09:05", trading_day=True, intraday_enabled=False)[0] == "pre_open"
    assert decide_session("20:03", trading_day=True, intraday_enabled=False)[0] == "after_close"


def test_decide_intraday_disabled_by_default():
    sess, reason = decide_session("10:33", trading_day=True, intraday_enabled=False)
    assert sess is None and reason == "intraday_disabled"
    sess, reason = decide_session("14:02", trading_day=True, intraday_enabled=False)
    assert sess is None and reason == "intraday_disabled"


def test_decide_intraday_enabled():
    assert decide_session("10:35", trading_day=True, intraday_enabled=True)[0] == "intraday_1"
    assert decide_session("14:05", trading_day=True, intraday_enabled=True)[0] == "intraday_2"


def test_decide_non_trading_day():
    sess, reason = decide_session("09:05", trading_day=False, intraday_enabled=True)
    assert sess is None and reason == "not_trading_day"


def test_decide_outside_window():
    sess, reason = decide_session("12:00", trading_day=True, intraday_enabled=True)
    assert sess is None and reason == "outside_window"


# ─── 历史日拒绝 ─────────────────────────────────────────────

def test_eligible_date_only_today():
    assert is_eligible_date("2026-09-08", today="2026-09-08") is True
    assert is_eligible_date("2026-09-07", today="2026-09-08") is False   # 历史日绝不现抓
    assert is_eligible_date("2026-09-09", today="2026-09-08") is False


def test_session_order_for_query():
    # 供 query_latest_session 排序用: 值 0..3 升序
    assert SESSION_ORDER["pre_open"] < SESSION_ORDER["intraday_1"] < SESSION_ORDER["after_close"]
