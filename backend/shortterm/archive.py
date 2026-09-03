#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.26): 原始归档 + 结构漂移检测

借鉴 vibe-astock duanxian/archive.py + drift.py:
- 归档存数据源原样行(raw=true), 归一化行检不出字段漂移就如实说明
- 结构漂移: 近 10 天 vs 前 20 天 中位数比较(涨停家数/最高板)
"""
import logging

from . import store
from .trade_calendar import last_trade_dates

logger = logging.getLogger(__name__)


def archive_raw(date: str, pool_type: str, rows: list) -> None:
    """原始行归档(raw 标志位): store pool_type='raw_<pool_type>'"""
    store.save_pool(date, f'raw_{pool_type}', rows)


def detect_field_drift(new_fields, old_fields) -> dict:
    """字段漂移: 对比两批行的字段集合"""
    new_set = set(new_fields or [])
    old_set = set(old_fields or [])
    return {'added': sorted(new_set - old_set), 'removed': sorted(old_set - new_set),
            'changed': bool((new_set - old_set) or (old_set - new_set))}


def _median(vals):
    vals = sorted(vals)
    if not vals:
        return None
    n = len(vals)
    mid = n // 2
    return vals[mid] if n % 2 else (vals[mid - 1] + vals[mid]) / 2


def detect_structure_drift(as_of: str, recent: int = 10, prior: int = 20) -> dict:
    """结构漂移: 近 recent 天 vs 更早 prior 天的涨停家数/最高板中位数比较。

    仅用缓存池子; 数据不足 → 如实 unavailable。
    """
    dates = last_trade_dates(recent + prior, as_of) or []
    recent_dates = dates[:recent]
    prior_dates = dates[recent:recent + prior]

    def _stats(dates_):
        zt_counts, highs = [], []
        for d in dates_:
            zt = store.load_pool(d, 'zt')
            if zt is None:
                continue
            zt_counts.append(len(zt))
            boards = [r['boards'] for r in zt if r.get('boards') is not None]
            highs.append(max(boards) if boards else 0)
        if len(zt_counts) < 3:
            return None
        return {'days': len(zt_counts), 'zt_median': _median(zt_counts),
                'highest_median': _median(highs)}

    rec, pri = _stats(recent_dates), _stats(prior_dates)
    if rec is None or pri is None:
        return {'available': False, 'reason': '缓存池子不足(近/前窗口至少各 3 天)'}
    zt_shift = (rec['zt_median'] - pri['zt_median']) if (rec['zt_median'] is not None
                                                        and pri['zt_median'] is not None) else None
    return {
        'available': True,
        'recent': rec, 'prior': pri,
        'zt_median_shift': zt_shift,
        'note': '结构漂移=近10天 vs 前20天 中位数比较(缓存口径)',
    }
