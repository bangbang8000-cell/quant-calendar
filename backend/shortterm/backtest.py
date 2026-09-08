#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.25): 涨停样本统计 — 昨日涨停股次日表现, 分情绪环境

借鉴 vibe-astock duanxian/backtest.py:
- 窗口 20/30/60/90 日, 按"当日赚钱效应中位数"分高低情绪环境
- 样本偏差声明置顶: 只用缓存定稿记录(prev_zt), 数据不足如实说明
- 无前视: 只用 <= as_of 的定稿记录
"""
import logging
from statistics import median

from . import store
from .trade_calendar import last_trade_dates

logger = logging.getLogger(__name__)

_WINDOWS = (20, 30, 60, 90)


def _prev_zt_series(as_of: str, window: int):
    """as_of 之前 window 个交易日的 prev_zt(定稿记录)序列"""
    dates = last_trade_dates(window, as_of) or []
    series = []
    for d in dates:
        rows = store.load_pool(d, 'prev_zt')
        if not rows:
            continue
        rets = [r['ret'] for r in rows if r.get('ret') is not None]
        if rets:
            series.append({'date': d, 'n': len(rets),
                           'avg': round(sum(rets) / len(rets), 2),
                           'median': round(median(rets), 2),
                           'up_rate': round(sum(1 for v in rets if v > 0) / len(rets), 3)})
    return series


def sample_stats(as_of: str, windows=_WINDOWS) -> dict:
    """涨停样本统计(分情绪环境)。样本偏差声明置顶。"""
    out = {'available': True, 'as_of': as_of, 'note': '样本偏差声明: 仅统计已落盘定稿记录; '
                                                       '数据不足如实说明, 非策略回测',
           'windows': {}}
    for w in windows:
        series = _prev_zt_series(as_of, w)
        if len(series) < 3:
            out['windows'][str(w)] = {'sample_days': len(series),
                                      'available': False,
                                      'reason': '定稿记录不足 3 天'}
            continue
        meds = [s['median'] for s in series]
        # 按赚钱效应中位数分高低情绪环境(高于窗口均值=高情绪日)
        threshold = sum(meds) / len(meds)
        high = [s for s in series if s['median'] >= threshold]
        low = [s for s in series if s['median'] < threshold]

        def _agg(rows):
            if not rows:
                return None
            avgs = [s['avg'] for s in rows]
            ups = [s['up_rate'] for s in rows]
            return {'days': len(rows),
                    'avg_ret': round(sum(avgs) / len(avgs), 2),
                    'up_rate': round(sum(ups) / len(ups), 3),
                    'best': round(max(avgs), 2), 'worst': round(min(avgs), 2)}

        out['windows'][str(w)] = {
            'available': True, 'sample_days': len(series),
            'threshold': round(threshold, 2),
            'high_sentiment': _agg(high), 'low_sentiment': _agg(low),
            'overall': _agg(series),
        }
    return out
