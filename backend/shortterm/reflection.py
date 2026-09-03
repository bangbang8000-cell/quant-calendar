#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.23): 反思闭环 — 三路投票 + 战绩记分板 + 落盘/回读

借鉴 vibe-astock duanxian/reflection.py:
- 三路投票: 晋级率(1进2)/赚钱效应中位数/涨停家数, 与昨日比较判情绪走向(上/下/平)
- 记分板: 每次核验记胜负, 命中率按情绪档位/方向统计
"""
import logging

from . import store

logger = logging.getLogger(__name__)

_DIRECTION_KEYS = ('promotion_1to2', 'money_median', 'limit_up_count')


def vote_direction(prev: dict, cur: dict, eps: float = 0.03) -> dict:
    """三路投票判情绪走向。prev/cur 为 bundle; 缺数据 → 该路不投票(不计多数)。

    返回 {votes: {key: 'up'|'down'|'flat'|None}, direction: 'up'|'down'|'flat',
          detail: str}
    """
    def _get(b, key):
        if key == 'promotion_1to2':
            return (b.get('promotion') or {}).get('tiers', {}).get('1进2', {}).get('rate')
        if key == 'money_median':
            return (b.get('money_effect') or {}).get('median')
        if key == 'limit_up_count':
            return (b.get('promotion') or {}).get('limit_up_count')
        return None

    votes = {}
    up = down = flat = 0
    for key in _DIRECTION_KEYS:
        p, c = _get(prev, key), _get(cur, key)
        if p is None or c is None:
            votes[key] = None
            continue
        if c > p + eps:
            votes[key] = 'up'; up += 1
        elif c < p - eps:
            votes[key] = 'down'; down += 1
        else:
            votes[key] = 'flat'; flat += 1
    total = up + down
    if total == 0:
        direction = 'flat'
    elif up > down:
        direction = 'up'
    elif down > up:
        direction = 'down'
    else:
        direction = 'flat'
    detail = f'三路投票 上{up}/下{down}/平{flat}'
    return {'votes': votes, 'direction': direction, 'detail': detail}


def score_results(results: list) -> dict:
    """战绩记分板: results = [{key, verdict(成立/证伪/数据不足)}]"""
    total = len(results)
    hit = sum(1 for r in results if r.get('verdict') == '成立')
    miss = sum(1 for r in results if r.get('verdict') == '证伪')
    unknown = sum(1 for r in results if r.get('verdict') == '数据不足')
    return {'total': total, 'hit': hit, 'miss': miss, 'unknown': unknown,
            'hit_rate': round(hit / (hit + miss), 3) if (hit + miss) else None}


def save_reflection(date: str, reflection: dict) -> None:
    """落盘当日反思结果(shortterm_reviews 表, 按日期覆盖)"""
    from . import store as _s
    _s.save_pool(date, 'reflection', [reflection])


def load_reflection(date: str):
    """读取某日反思; 无 → None"""
    rows = store.load_pool(date, 'reflection')
    return rows[0] if rows else None
