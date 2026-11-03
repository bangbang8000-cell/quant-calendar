#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""热榜—股价共振 (v7.2.0 / B6.3, PRD FR-7.2.3)

问题：热榜排名（越小越热）与股价走势是否真的同向？还是纯情绪？
做法：
1. 取热榜 TopN（Fuyao `hot-stock-list`，`period=day|hour`）
2. 取这些股票近 N 日收盘（**优先本地 DWH**，缺失时调用方注入）
3. 计算 **Spearman 秩相关**：rank(热度) vs rank(区间涨幅)
   - 显著为负 = 越热越涨（共振）
   - 接近 0 = 热度与股价脱钩（纯情绪）
4. 共振比例：热门股中区间上涨的占比

口径纪律：
- 秩相关只说明**同期同向**，**不构成因果**，更不能当预测
- TopN 截断 ≠ 全市场排名
"""

import logging

logger = logging.getLogger(__name__)

#: 相关系数绝对值低于此值视为「无明显共振」
WEAK_CORR = 0.15


def _rank(values):
    """平均秩（处理并列）。"""
    order = sorted(range(len(values)), key=lambda i: values[i])
    ranks = [0.0] * len(values)
    i = 0
    while i < len(order):
        j = i
        while j + 1 < len(order) and values[order[j + 1]] == values[order[i]]:
            j += 1
        avg = (i + j) / 2.0 + 1.0
        for k in range(i, j + 1):
            ranks[order[k]] = avg
        i = j + 1
    return ranks


def spearman(x, y):
    """Spearman 秩相关；样本 <3 或方差为 0 返回 None。"""
    if not x or not y or len(x) != len(y) or len(x) < 3:
        return None
    rx, ry = _rank(list(x)), _rank(list(y))
    n = len(rx)
    mx, my = sum(rx) / n, sum(ry) / n
    num = sum((a - mx) * (b - my) for a, b in zip(rx, ry))
    dx = sum((a - mx) ** 2 for a in rx) ** 0.5
    dy = sum((b - my) ** 2 for b in ry) ** 0.5
    if dx == 0 or dy == 0:
        return None
    return round(num / (dx * dy), 4)


def pct_change(closes, n):
    if not closes or len(closes) < n + 1:
        return None
    base, last = closes[-(n + 1)], closes[-1]
    try:
        if not base:
            return None
        return round((last / base - 1.0) * 100.0, 2)
    except (TypeError, ValueError, ZeroDivisionError):
        return None


def resonance(hot_rows, closes_by_code, window=5):
    """计算热榜与 N 日涨幅的共振。

    hot_rows: [{thscode, rank, name}]
    closes_by_code: {thscode: [close,...]}（升序）
    """
    pairs, missing = [], []
    for r in hot_rows or []:
        code = r.get('thscode')
        rank = r.get('rank')
        if code is None or rank is None:
            continue
        ret = pct_change(closes_by_code.get(code), window)
        if ret is None:
            missing.append(code)
            continue
        pairs.append({'thscode': code, 'name': r.get('name'), 'rank': int(rank),
                      'ret': ret})
    if not pairs:
        return {'available': False, 'reason': 'no_overlap',
                'missing': missing[:20], 'window': window}

    corr = spearman([p['rank'] for p in pairs], [p['ret'] for p in pairs])
    up = sum(1 for p in pairs if p['ret'] > 0)
    verdict = 'insufficient'
    if corr is not None:
        if abs(corr) < WEAK_CORR:
            verdict = 'decoupled'
        elif corr < 0:
            verdict = 'resonant'
        else:
            verdict = 'inverse'
    return {
        'available': True,
        'window': window,
        'samples': len(pairs),
        'spearman': corr,
        'verdict': verdict,
        'verdict_text': {
            'resonant': '越热越涨（看似共振）',
            'decoupled': '热度与股价脱钩（更像纯情绪）',
            'inverse': '越热反而越弱（反向）',
            'insufficient': '样本或方差不足，无法判断',
        }[verdict],
        'up_ratio': round(up / len(pairs), 4),
        'rows': sorted(pairs, key=lambda p: p['rank'])[:50],
        'missing': missing[:20],
        'meta': {
            'method': 'Spearman 秩相关：热榜排名 vs 近 %d 日涨幅' % window,
            'caveat': '同期同向不代表因果，不能当预测信号',
            'truncation': '热榜为 TopN 截断，不等于全市场排名',
            'disclaimer': '仅供数据观察，不构成投资建议',
        },
    }
