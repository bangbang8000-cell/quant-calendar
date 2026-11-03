#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""涨停情绪市场脉冲屏 (v7.2.0 / B6.1, PRD FR-7.2.1)

输入：三池（Fuyao 优先，v6.8 已合并）+ 近 30 交易日连板天梯。

指标（全部来自接口返回值，不自行扩写）：
- 涨停数 / 连板数 / 最高板
- **早封率**：首次封板时间 ≤ 09:30 的占比
- **封单留存**：`seal_money / max_seal_money` 的均值（封单被撬走多少）
- **原因分布**：`limit_up_reason` 按 `+` 切词的 TopN
- **板位 × 日期矩阵**：来自天梯（近 30 交易日）

口径纪律（PRD FR-7.2.1 / 调研 §3.1）：
- 晋级率只能在天梯**样本内**估算，必须标「非全市场晋级率」
- 涨停家数必须带 `include_st`（D4 含 ST）
- **不做行业分布**（涨停池无行业字段；如需行业必须显式反查并标注来源）
"""

import logging
import statistics

logger = logging.getLogger(__name__)

#: 早封时间阈值（含）
EARLY_SEAL_CUTOFF = '09:30'
#: 原因切词分隔符（实测：`+` 连接，如 "重组复牌+拟注铜锂矿+民爆"）
REASON_SEP = '+'


def _int(v, default=0):
    try:
        return int(float(v))
    except (TypeError, ValueError):
        return default


def _num(v):
    try:
        f = float(v)
        return None if f != f else f
    except (TypeError, ValueError):
        return None


def _norm_time(v):
    s = str(v or '').strip()
    if not s:
        return None
    if ':' in s:
        parts = s.split(':')
        return '%02d:%02d' % (int(parts[0]), int(parts[1]))
    s = s.zfill(6)
    return '%s:%s' % (s[0:2], s[2:4]) if len(s) == 6 else None


def early_seal_rate(rows, cutoff=EARLY_SEAL_CUTOFF):
    """早封率：首次封板时间 ≤ cutoff 的占比。无有效时间返回 None。"""
    times = [_norm_time(r.get('first_seal_time')) for r in (rows or [])]
    valid = [t for t in times if t]
    if not valid:
        return None
    early = sum(1 for t in valid if t <= cutoff)
    return round(early / len(valid), 4)


def seal_retention(rows):
    """封单留存：seal_amount / max_seal_money 的均值（越接近 1 说明封得越稳）。

    只统计 `max_seal_money > 0` 且有 `seal_amount` 的行；无样本返回 None。
    """
    ratios = []
    for r in rows or []:
        cur = _num(r.get('seal_amount'))
        peak = _num(r.get('max_seal_money'))
        if cur is None or peak is None or peak <= 0:
            continue
        ratios.append(cur / peak)
    if not ratios:
        return None
    return round(statistics.fmean(ratios), 4)


def reason_distribution(rows, top=15):
    """原因分布：按 `+` 切词统计 TopN（原始词，不做同义合并）。"""
    counter = {}
    for r in rows or []:
        reason = (r.get('reason') or '').strip()
        if not reason:
            continue
        for token in reason.split(REASON_SEP):
            token = token.strip()
            if not token:
                continue
            counter[token] = counter.get(token, 0) + 1
    ordered = sorted(counter.items(), key=lambda kv: (-kv[1], kv[0]))[:max(1, int(top))]
    return [{'token': k, 'count': v} for k, v in ordered]


def board_stats(rows):
    """涨停/连板/最高板统计（boards 字段来自 Fuyao continue_day_cnt）。"""
    boards = [_int(r.get('boards'), 0) for r in (rows or [])]
    lim = [b for b in boards if b >= 1]
    return {
        'limit_up_count': len(rows or []),
        'consec_count': sum(1 for b in lim if b >= 2),
        'max_boards': max(lim) if lim else 0,
        'one_board': sum(1 for b in lim if b == 1),
        'two_board': sum(1 for b in lim if b == 2),
        'three_plus': sum(1 for b in lim if b >= 3),
    }


def ladder_matrix(ladder):
    """天梯 → 板位 × 日期矩阵（行=日期，列=板位家数）。"""
    if not isinstance(ladder, dict) or not ladder.get('available'):
        return {'available': False, 'reason': (ladder or {}).get('reason') or 'ladder_unavailable'}
    days = ladder.get('days') or []
    tiers = ('two_board', 'three_board', 'four_board', 'five_board', 'six_board', 'seven_over')
    rows = []
    for day in days:
        counts = day.get('counts') or {}
        rows.append({'date': day.get('date'),
                     **{t: _int(counts.get(t), 0) for t in tiers}})
    return {
        'available': bool(rows),
        'tiers': list(tiers),
        'rows': rows,
        'board_caps': ladder.get('board_caps') or {},
        'meta': {'caliber': '天梯仅覆盖有限样本；据此估算的晋级率仅代表样本内，不可外推'},
    }


def build_pulse(date, pool_result, ladder=None):
    """组装脉冲屏数据（缺数据如实标注，不填 0）。"""
    rows = (pool_result or {}).get('rows') or []
    if not rows:
        return {'available': False,
                'reason': (pool_result or {}).get('reason') or 'no_pool_data',
                'date': str(date)}
    stats = board_stats(rows)
    out = {
        'available': True,
        'date': str(date),
        'include_st': (pool_result or {}).get('include_st'),
        'source': (pool_result or {}).get('source'),
        'counts': stats,
        'early_seal_rate': early_seal_rate(rows),
        'seal_retention': seal_retention(rows),
        'reasons': reason_distribution(rows),
        'ladder': ladder_matrix(ladder),
        'meta': {
            'early_seal': '首次封板时间 ≤ %s 记为早封' % EARLY_SEAL_CUTOFF,
            'seal_retention': 'seal_amount ÷ max_seal_money 的均值（越接近 1 越稳）',
            'reasons': '按 "+" 切词统计原始词，未做同义合并',
            'caliber': '涨停家数口径 = include_st=%s；不做行业分布（涨停池无行业字段）'
                       % (pool_result or {}).get('include_st'),
            'disclaimer': '仅供数据观察，不构成投资建议',
        },
    }
    return out
