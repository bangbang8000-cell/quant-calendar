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


# ─── V5.4.3 (FR-5.4.3): 盘后等待"当日持仓矩阵就绪" ────────────────────
#
# 背景: 当日持仓矩阵由 20:00 策略任务生成 (全市场耗时 1~3 分钟)。盘后评估若抢在
# 生成前执行, 当日仍是继承日 → 当天新入池为空 → 漏算当天新入池。故盘后必须等池就绪。
AFTER_CLOSE_POOL_WAIT_MINUTES = 60
AFTER_CLOSE_START = "20:00"


def _within_window(now_hm, start_hm, minutes):
    now = _hm_minutes(now_hm)
    s = _hm_minutes(start_hm)
    return s <= now <= s + minutes


def load_pool_ready(date) -> bool:
    """当日持仓矩阵是否已生成 (委托 focus_list.is_pool_ready, 单一实现)。"""
    try:
        from focus_list import is_pool_ready
        return bool(is_pool_ready(date))
    except Exception:
        return False


def decide_session_with_readiness(now_hm, trading_day=True, intraday_enabled=False,
                                  pool_ready=True):
    """在 decide_session 之上叠加"盘后等当日池就绪" (返回 (session|None, reason))。

    - 盘后: 池就绪 → 执行 (窗口内 'live'; 窗口后 'pool_ready_late' 补做);
            未就绪且在等待期内 → 等待 ('pool_not_ready');
            未就绪且超等待期 → ('pool_not_ready_timeout')
    - 其它时点: 语义与 decide_session 完全一致 (窗口 8 分钟, 不受 pool_ready 影响)
    """
    if not trading_day:
        return None, "not_trading_day"
    session, reason = decide_session(now_hm, trading_day, intraday_enabled)
    if session == "after_close":
        if pool_ready:
            return "after_close", reason
        if _within_window(now_hm, AFTER_CLOSE_START, AFTER_CLOSE_POOL_WAIT_MINUTES):
            return None, "pool_not_ready"
        return None, "pool_not_ready_timeout"
    if session is None and _within_window(now_hm, AFTER_CLOSE_START,
                                          AFTER_CLOSE_POOL_WAIT_MINUTES):
        # 窗口已过但仍在等待期 (进程重启 / 策略延迟): 池就绪即补做
        if pool_ready:
            return "after_close", "pool_ready_late"
        return None, "pool_not_ready"
    return session, reason


def load_intraday_enabled() -> bool:
    """读取盘中可选时点开关 (V5.4.0 决策: 可选默认关)。

    配置文件 data/focus_config.json: {"intraday_enabled": true|false}
    缺省 / 损坏 → False (保守: 不开盘中)。
    """
    import db
    import json
    import os
    try:
        p = os.path.join(db.DATA_DIR, "focus_config.json")
        with open(p, encoding="utf-8") as f:
            cfg = json.load(f)
        return bool(cfg.get("intraday_enabled", False))
    except Exception:
        return False
