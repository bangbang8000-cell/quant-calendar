#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.7 (T-5.7.4): 全市场分块 + K线/因子降采样 + 年视图基准守护 (downsample.py)

纯逻辑, 零依赖, 可单测:
- chunked / chunk_tasks: 全市场股票列表分块 (批量评估/同步按块提交任务)
- lttb_indices / downsample_series / downsample_kline: LTTB (Largest Triangle
  Three Buckets) 降采样长序列, 保留首尾与形态, 点数有界
- downsample_tail: 保尾部降采样 (最新数据优先)
- year_view_budget: 年视图基准守护 — 降采样后点数 ≤ max_points 即 ok

语义边界:
- LTTB 需 max_points >= 3 才降采样, 否则原样返回
- close 缺失/None 按 0 参与计算 (仅影响选点, 不产出 NaN)
- 不修改原始列表, 返回新列表 (rows 内元素为原引用)
"""

DEFAULT_YEAR_VIEW_MAX = 250  # 年视图基准: 图表最多保留 250 点


def chunked(items, size):
    """按 size 分块, 迭代产出子列表 (size<=0 时整体一块)。"""
    if not items:
        return
    n = max(1, int(size))
    for i in range(0, len(items), n):
        yield items[i:i + n]


def chunk_tasks(items, chunk_size):
    """分块为任务列表: [{index, items}, ...] (适配批量任务队列提交)。"""
    return [{'index': i, 'items': list(c)}
            for i, c in enumerate(chunked(items, chunk_size))]


def lttb_indices(values, max_points):
    """LTTB 降采样, 返回保留的索引列表 (保留首尾, 长度 ≤ max_points)。"""
    n = len(values)
    if n <= max_points or max_points < 3:
        return list(range(n))
    sampled = [0]
    a = 0
    bucket = (n - 2) / (max_points - 2)
    for i in range(max_points - 2):
        avg_start = min(n - 2, int((i + 1) * bucket) + 1)
        avg_end = min(n - 1, int((i + 2) * bucket) + 1)
        avg_range = values[avg_start:avg_end + 1]
        avg = (sum(avg_range) / len(avg_range)) if avg_range else 0.0
        range_start = int(i * bucket) + 1
        range_end = min(n - 1, int((i + 1) * bucket) + 1)
        pa = values[a]
        best = range_start
        best_area = -1.0
        for j in range(range_start, range_end):
            area = abs((values[j] - pa) * (avg - pa))
            if area > best_area:
                best_area = area
                best = j
        sampled.append(best)
        a = best
    sampled.append(n - 1)
    return sampled


def downsample_series(values, max_points):
    """对数值序列 LTTB 降采样。"""
    if not values or max_points is None or max_points >= len(values):
        return list(values)
    idx = lttb_indices(values, max_points)
    return [values[i] for i in idx]


def _close_of(row):
    v = row.get('close') if isinstance(row, dict) else None
    return float(v) if v is not None else 0.0


def downsample_kline(rows, max_points):
    """K线数组 (dict 行) 按 close LTTB 降采样, 保留首尾。"""
    if not rows or max_points is None or max_points >= len(rows):
        return list(rows)
    closes = [_close_of(r) for r in rows]
    idx = lttb_indices(closes, max_points)
    return [rows[i] for i in idx]


def downsample_tail(rows, max_points):
    """保尾部降采样 (最新 max_points 条)。"""
    if not rows or max_points is None or len(rows) <= max_points:
        return list(rows)
    return list(rows[-max_points:])


def year_view_budget(rows, max_points=DEFAULT_YEAR_VIEW_MAX):
    """年视图基准守护: 降采样后点数 ≤ max_points 即 ok。"""
    kept = downsample_kline(rows, max_points)
    return {'original': len(rows), 'kept': len(kept), 'ok': len(kept) <= max_points}
