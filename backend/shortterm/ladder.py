#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.03): 连板梯队 + 断层检测纯函数

借鉴 vibe-astock emotion_metrics.ladder_gap:
- 从涨停池行(带 boards 字段)统计各板位家数
- 断层 = 2 板到最高板之间的空档; 跨全市场口径, 不代表同一题材内部有梯队(口径如实披露)。
"""
from typing import Optional


def tier_counts(rows) -> dict:
    """从涨停池行计算各板位家数 {板位: 家数}(只统计 boards>=1 的连板票)"""
    counts: dict = {}
    for r in rows or []:
        b = r.get('boards')
        if b is not None and isinstance(b, (int, float)) and not (b != b):
            b = int(b)
            if b >= 1:
                counts[b] = counts.get(b, 0) + 1
    return counts


def ladder_gap(rows) -> dict:
    """梯队结构与断层检测

    返回: {highest, tiers, gaps, continuous, note}
    - tiers: 各板位家数(升序)
    - gaps: 2 板到最高板之间的空档板位
    - continuous: 无断层
    - note: 口径说明(空样本 / 断层提示)
    """
    counts = tier_counts(rows)
    if not counts:
        return {'highest': None, 'tiers': {},
                'gaps': [], 'continuous': True,
                'note': '无连板样本'}
    highest = max(counts)
    gaps = [b for b in range(2, highest) if b not in counts]
    continuous = len(gaps) == 0
    note = '' if continuous else f'断层: 缺少 {gaps} 板, 高标悬空无承接梯队'
    return {'highest': highest, 'tiers': dict(sorted(counts.items())),
            'gaps': gaps, 'continuous': continuous, 'note': note}
