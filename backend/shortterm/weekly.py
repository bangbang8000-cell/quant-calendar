#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.1 (T-5.2.16): 近5日热度 + 龙头谱系

- 热度: 行业(口径近似题材, 如实注明)在近 N 日涨停池的出现次数
- 龙头: 各行业窗口内最高连板个股(客观陈述, 非推荐)
"""
from . import store
from .trade_calendar import last_trade_dates


def industry_heat(dates=None, n: int = 5, end: str = None) -> dict:
    """近 n 日行业热度 + 龙头谱系(从 store 池子算, 不现抓)"""
    dates = dates or (last_trade_dates(n, end) if end else last_trade_dates(n))
    counts = {}
    leaders = {}
    used = 0
    for d in dates or []:
        zt = store.load_pool(d, 'zt')
        if not zt:
            continue
        used += 1
        for r in zt:
            ind = r.get('industry')
            b = r.get('boards') or 0
            if not ind:
                continue
            counts[ind] = counts.get(ind, 0) + 1
            cur = leaders.get(ind)
            if cur is None or b > cur.get('boards', 0):
                leaders[ind] = {'ts_code': r.get('ts_code'), 'name': r.get('name'),
                                'boards': b, 'date': d}
    if not counts:
        return {'available': False, 'reason': '近 N 日涨停池均未入库'}
    top = sorted(counts.items(), key=lambda kv: -kv[1])[:10]
    leader_list = [dict(industry=k, **v) for k, v in
                   sorted(leaders.items(),
                          key=lambda kv: -(kv[1].get('boards') or 0))[:10]]
    return {
        'available': True,
        'window_days': len(dates or []),
        'used_days': used,
        'top': [{'industry': k, 'count': v} for k, v in top],
        'leaders': leader_list,
        'note': '行业口径近似题材; 热度=近 N 日涨停出现次数; 龙头为客观陈述非推荐',
    }
