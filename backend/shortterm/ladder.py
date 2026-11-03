#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.03): 连板梯队 + 断层检测纯函数

借鉴 vibe-astock emotion_metrics.ladder_gap:
- 从涨停池行(带 boards 字段)统计各板位家数
- 断层 = 2 板到最高板之间的空档; 跨全市场口径, 不代表同一题材内部有梯队(口径如实披露)。
"""


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


# ==================== v6.8.0 (B2.3): Fuyao 连板天梯（近 30 交易日矩阵） ====================

_FUYAO_LADDER_PATH = '/api/a-share/special-data/limit-up-ladder'


def fetch_ladder_fuyao(days: int = 30):
    """取 Fuyao 连板天梯（固定近 30 交易日矩阵）。不可用返回 (None, meta)。

    ⚠️ 口径：天梯返回的是**有限样本矩阵**，据此估算的晋级率只能称
    「样本内估算」，不得外推为全市场晋级率（PRD FR-6.8.3 / 调研 §3.1）。
    """
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('special'):
            return None, {'available': False, 'reason': 'capability_disabled'}
        client = data_source_manager.fuyao_client()
        if client is None:
            return None, {'available': False, 'reason': 'not_configured'}
    except Exception as e:  # noqa: BLE001
        return None, {'available': False, 'reason': f'{type(e).__name__}: {str(e)[:60]}'}

    r = client.get('special.limit-up-ladder', _FUYAO_LADDER_PATH, {})
    if not r.get('ok'):
        return None, {'available': False, 'reason': r.get('reason') or 'fetch_failed'}
    d = r.get('data') or {}
    window = d.get('window') or {}
    items = d.get('item') or []
    tiers = []
    for day in items:
        boards = day.get('boards') or {}
        tiers.append({
            'date': day.get('date'),
            'tiers': {k: [x.get('ticker') for x in (v or [])] for k, v in boards.items()},
            'counts': {k: len(v or []) for k, v in boards.items()},
        })
    return {
        'available': True,
        'source': 'fuyao',
        'length': window.get('length') or len(items),
        'date_list': window.get('date_list') or [],
        'board_caps': window.get('board_caps') or {},
        'days': tiers,
        'meta': {
            'caliber': '样本内估算（天梯有限样本），不是全市场晋级率；不得外推行业分布',
        },
    }, {'available': True, 'source': 'fuyao'}


def compare_ladder(fuyao_ladder, local_counts_by_date):
    """天梯对拍：比较各交易日的 2 板及以上家数。

    local_counts_by_date: {'YYYY-MM-DD': {'two_board': n, ...}} 或 {date: {板位: 家数}}
    返回 {compared, mismatches, ok}（一致率 ≥98% 视为通过，PRD FR-6.8.5）
    """
    if not fuyao_ladder or not fuyao_ladder.get('available'):
        return {'compared': 0, 'mismatches': [], 'ok': False, 'reason': 'fuyao_unavailable'}
    mismatches = []
    compared = 0
    for day in fuyao_ladder.get('days') or []:
        date = str(day.get('date') or '')
        local = (local_counts_by_date or {}).get(date)
        if not local:
            continue
        compared += 1
        f_counts = {k: v for k, v in (day.get('counts') or {}).items()
                    if k in ('two_board', 'three_board', 'four_board', 'five_board',
                             'six_board', 'seven_over')}
        for tier, fn in f_counts.items():
            ln = local.get(tier)
            if ln is not None and int(ln) != int(fn):
                mismatches.append({'date': date, 'tier': tier, 'local': ln, 'fuyao': fn})
    agree = (compared - len({m['date'] for m in mismatches})) if compared else 0
    rate = (agree / compared) if compared else 0.0
    return {
        'compared': compared,
        'mismatches': mismatches[:50],
        'agree_rate': round(rate, 4),
        'ok': bool(compared) and rate >= 0.98,
    }
