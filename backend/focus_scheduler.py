#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.3 / FR-5.4.2): 重点跟踪多时点调度 (focus_scheduler)

时点 (已锁定): pre_open 09:00 / after_close 20:00 必做;
              intraday_1 10:30 / intraday_2 14:00 可选 (默认关)。
窗口: 时点开始后 GRACE_MINUTES=8 分钟内可执行 (过点拒绝);
     非交易日 / 历史日拒绝 (历史日绝不现抓)。
"""
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

GRACE_MINUTES = 8

# 时段定义: (session, 开始时间 HH:MM, 是否可选)
SESSIONS = (
    ("pre_open", "09:00", False),
    ("intraday_1", "10:30", True),
    ("intraday_2", "14:00", True),
    ("after_close", "20:00", False),
)
SESSION_ORDER = {name: idx for idx, (name, _, _) in enumerate(SESSIONS)}

MANDATORY_SESSIONS = tuple(s for s, _, opt in SESSIONS if not opt)
OPTIONAL_SESSIONS = tuple(s for s, _, opt in SESSIONS if opt)


def _hm_minutes(hm):
    h, m = str(hm).split(":")
    return int(h) * 60 + int(m)


def session_at(now_hm):
    """当前时间命中的时段 (窗口内); 无则 None。"""
    now = _hm_minutes(now_hm)
    for name, start, _opt in SESSIONS:
        s = _hm_minutes(start)
        if s <= now <= s + GRACE_MINUTES:
            return name
    return None


def decide_session(now_hm, trading_day=True, intraday_enabled=False):
    """返回 (session|None, reason): 当前应执行的时段与原因。

    - 非交易日 → (None, 'not_trading_day')
    - 窗口内: 必做时段直接放行; 可选时段需 intraday_enabled
    - 窗口外 → (None, 'outside_window')
    """
    if not trading_day:
        return None, "not_trading_day"
    now = _hm_minutes(now_hm)
    for name, start, optional in SESSIONS:
        s = _hm_minutes(start)
        if s <= now <= s + GRACE_MINUTES:
            if optional and not intraday_enabled:
                return None, "intraday_disabled"
            return name, "live"
    return None, "outside_window"


def is_eligible_date(target_date, today=None):
    """历史日 / 未来日拒绝 (历史日绝不现抓)。"""
    today = today or datetime.now().strftime("%Y-%m-%d")
    return target_date == today
