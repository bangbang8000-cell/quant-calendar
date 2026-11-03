#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""龙虎榜资金流向拓扑台 (v7.2.0 / B6.2, PRD FR-7.2.2)

做法（来自最佳实践 #16）：
1. 逐日取龙虎榜（Fuyao 单日榜，**默认只纳入 range_days=1**，避免 1 日榜与 3 日榜重复计额）
2. 一只股票有多个概念时，**按概念数等分净额**（保证概念聚合总额守恒）
3. 汇总概念累计净额轨迹 + 股票正负贡献

硬约束（TC-FY-7.2-04）：
    Σ概念净额 == Σ股票净额（误差 < 1e-6）
无法归属到概念的股票进入 `__unmapped__` 桶，**同样参与守恒**（不能悄悄丢掉）。
"""

import logging

logger = logging.getLogger(__name__)

UNMAPPED = '__unmapped__'
EPS = 1e-6


def _num(v):
    try:
        f = float(v)
        return None if f != f else f
    except (TypeError, ValueError):
        return None


def filter_range_days(rows, keep=1):
    """只保留 range_days == keep 的记录（缺字段视为 1）。返回 (kept, dropped_count)。"""
    kept, dropped = [], 0
    for r in rows or []:
        rd = r.get('range_days')
        rd = 1 if rd is None else _num(rd)
        if rd is None or int(rd) != int(keep):
            dropped += 1
            continue
        kept.append(r)
    return kept, dropped


def allocate(rows):
    """把每只股票的净额等分到其概念上。返回 {concept: net} 与统计。

    无概念 → UNMAPPED 桶；净额为 0/缺失的股票跳过（不影响守恒）。
    """
    totals = {}
    stats = {'stocks': 0, 'skipped': 0, 'unmapped': 0, 'max_concepts': 0}
    for r in rows or []:
        net = _num(r.get('net_buy'))
        if net is None:
            stats['skipped'] += 1
            continue
        stats['stocks'] += 1
        concepts = [c for c in (r.get('concepts') or []) if c]
        if not concepts:
            totals[UNMAPPED] = totals.get(UNMAPPED, 0.0) + net
            stats['unmapped'] += 1
            continue
        stats['max_concepts'] = max(stats['max_concepts'], len(concepts))
        share = net / len(concepts)
        for c in concepts:
            totals[c] = totals.get(c, 0.0) + share
    return totals, stats


def conservation(rows, totals=None):
    """守恒校验：Σ概念净额 与 Σ股票净额 的差额。"""
    stock_sum = sum(_num(r.get('net_buy')) or 0.0 for r in (rows or []))
    if totals is None:
        totals, _ = allocate(rows)
    concept_sum = sum(totals.values())
    diff = abs(concept_sum - stock_sum)
    return {
        'stock_sum': round(stock_sum, 6),
        'concept_sum': round(concept_sum, 6),
        'diff': round(diff, 9),
        'ok': diff < EPS,
    }


def build_topology(day_results):
    """day_results: [(date, rows)]（rows 已按 range_days=1 过滤）。

    返回概念累计净额轨迹 + 概念排名 + 股票贡献 + 守恒结论。
    """
    trajectory = {}      # concept -> [(date, cumulative_net)]
    per_day = []
    stock_rows = []
    dropped_total = 0
    for date, rows in day_results or []:
        kept, dropped = filter_range_days(rows, 1)
        dropped_total += dropped
        totals, stats = allocate(kept)
        per_day.append({'date': str(date), 'conservation': conservation(kept, totals),
                        'concepts': len(totals), 'stats': stats})
        for c, v in totals.items():
            trajectory.setdefault(c, []).append((str(date), v))
        for r in kept:
            net = _num(r.get('net_buy'))
            if net is None:
                continue
            stock_rows.append({'date': str(date), 'ts_code': r.get('ts_code'),
                               'name': r.get('name'), 'net_buy': net,
                               'concepts': r.get('concepts') or []})

    cum = {}
    for c, series in trajectory.items():
        running, out = 0.0, []
        for date, v in series:
            running += v
            out.append({'date': date, 'net': round(v, 2), 'cum': round(running, 2)})
        cum[c] = out

    ranked = sorted(cum.items(), key=lambda kv: -(kv[1][-1]['cum'] if kv[1] else 0))
    ok = all(d['conservation']['ok'] for d in per_day) if per_day else False
    return {
        'available': bool(per_day),
        'days': len(per_day),
        'dropped_multi_day': dropped_total,
        'conservation_ok': ok,
        'per_day': per_day,
        'concepts': [{'concept': c, 'trajectory': series,
                      'cum_net': series[-1]['cum'] if series else 0} for c, series in ranked],
        'stocks': sorted(stock_rows, key=lambda x: -abs(x['net_buy']))[:200],
        'meta': {
            'rule': '一股票多概念时按概念数等分净额（总额守恒）',
            'range_days': '默认只纳入 range_days=1，避免 1 日榜与 3 日榜重复计额',
            'unmapped': '无概念的股票计入 %s 桶，仍参与守恒' % UNMAPPED,
            'disclaimer': '仅供数据观察，不构成投资建议',
        },
    }
