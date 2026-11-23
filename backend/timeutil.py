#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.16 FR-6: 统一时间基准 — 全后端"今天/现在"一律走此模块。

背景: 历史代码混用 naive datetime.now() / aware(+08:00) / 前端 UTC 自然日,
在 UTC 容器里跨模块"今天"错日。本模块提供单一口径:

- CST = timezone(timedelta(hours=8))  —— 中国标准时, 无 DST
- cst_now()          -> aware datetime(+08:00), 用于所有业务"现在"
- cst_today()        -> 'YYYY-MM-DD' 字符串, 用于所有业务"今天"
- cst_iso()          -> 带 +08:00 偏移的 ISO 秒级字符串, 用于落盘 generated_at
- cst_stamp()        -> 'YYYY-MM-DD HH:MM:SS', 用于日志/历史展示

注意: 纯计时用途(time.perf_counter / TTL 相对时间 / timedelta)不要用本模块。
"""
from datetime import datetime, timedelta, timezone

CST = timezone(timedelta(hours=8))


def cst_now() -> datetime:
    """业务"现在": aware datetime, 固定 +08:00 偏移。"""
    return datetime.now(CST)


def cst_today() -> str:
    """业务"今天": YYYY-MM-DD (北京时间自然日)。"""
    return cst_now().strftime('%Y-%m-%d')


def cst_iso(dt: datetime = None) -> str:
    """带 +08:00 偏移的 ISO 秒级时间戳, 用于 generated_at/last_update 落盘。"""
    d = dt if dt is not None else cst_now()
    if d.tzinfo is None:
        d = d.replace(tzinfo=CST)
    return d.isoformat(timespec='seconds')


def cst_stamp(dt: datetime = None) -> str:
    """YYYY-MM-DD HH:MM:SS 展示时间戳(北京时间)。"""
    d = dt if dt is not None else cst_now()
    if d.tzinfo is None:
        d = d.replace(tzinfo=CST)
    return d.strftime('%Y-%m-%d %H:%M:%S')
