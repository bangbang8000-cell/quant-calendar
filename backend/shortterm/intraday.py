#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.24): 盘中核验 — 6 时点快照 + 过点拒绝 + 历史不现抓

借鉴 vibe-astock duanxian/intraday.py:
- 时点: 09:25/09:35/10:00/11:30/14:00/15:00
- 过点 8 分钟拒绝: 09:25 在 09:33 后不再补该时点快照(实时不冒充)
- 历史日绝不现抓: 只对"目标日=最近交易日且今天"抓快照
- 数据诚实性: 快照只取三池(已收盘场次之外盘中快照是"盘中值", 标注口径)
"""
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

SNAPSHOT_TIMES = ('09:25', '09:35', '10:00', '11:30', '14:00', '15:00')
_ALLOW_PAST_MIN = 8  # 过点 8 分钟内仍接受(网络/调度抖动), 之后拒绝


def _hhmm(now) -> str:
    return now.strftime('%H:%M')


def current_snapshot_slot(now=None) -> str:
    """当前落在哪个时点窗口(含过点 8 分钟); 不落在任何窗口 → ''"""
    now = now or datetime.now()
    hh = _hhmm(now)
    for i, t in enumerate(SNAPSHOT_TIMES):
        if hh == t:
            return t
    # 过点 8 分钟: 前一时点 t 到 t+8min(含端点)
    for i, t in enumerate(SNAPSHOT_TIMES[:-1]):
        base = datetime.strptime(t, '%H:%M').replace(
            year=now.year, month=now.month, day=now.day)
        if base <= now <= base.replace(minute=base.minute + _ALLOW_PAST_MIN):
            return t
    return ''


def accept_snapshot(trade_date: str, now=None, is_trade_day=True,
                    today: str = None) -> tuple:
    """盘中快照接受判据。返回 (ok, reason)。

    - 交易日 + 目标日=今天(历史日绝不现抓)
    - now 落在某时点窗口(current_snapshot_slot 非空)
    """
    now = now or datetime.now()
    today = today or datetime.now().strftime('%Y-%m-%d')
    if not is_trade_day:
        return False, '非交易日'
    if trade_date != today:
        return False, '历史日绝不现抓'
    slot = current_snapshot_slot(now)
    if not slot:
        return False, '非快照时点(含过点8分钟)'
    return True, f'快照时点 {slot}'


def snapshot_mood(zt, zb, dt) -> dict:
    """三池 → 情绪快照(盘中值口径, 如实标注)"""
    zt_n = len(zt or [])
    zb_n = len(zb or [])
    dt_n = len(dt or [])
    return {
        'available': True,
        'zt_count': zt_n, 'zb_count': zb_n, 'dt_count': dt_n,
        'broken_rate': round(zb_n / (zt_n + zb_n), 3) if (zt_n + zb_n) else None,
        'note': '盘中值口径, 未收盘, 非定稿',
    }
