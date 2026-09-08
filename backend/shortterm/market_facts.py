#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.1 (T-5.2.14): 市场事实表 — 封板质量/亏钱效应/反馈矩阵/题材结构

纯计算, 不经过 AI; 缺数据如实标注(available/reason)。
- 题材结构用行业口径近似并注明(绝不冒充问财题材串)
"""
import logging
from statistics import median

from . import store
from .trade_calendar import prev_trade_date

logger = logging.getLogger(__name__)


def _today_pools(date):
    return (store.load_pool(date, 'zt'),
            store.load_pool(date, 'zb'),
            store.load_pool(date, 'dt'))


def seal_quality(date: str) -> dict:
    """封板质量: 早盘封板占比(<10:00)/炸板率/封板资金中位数"""
    zt, zb, _dt = _today_pools(date)
    if zt is None:
        return {'available': False, 'reason': f'[⚠️ {date} 涨停池未入库]'}
    zt_n = len(zt)
    early = [r for r in zt
             if r.get('first_seal_time') and str(r['first_seal_time']) < '10:00:00']
    seal_amts = [r['seal_amount'] for r in zt if r.get('seal_amount') is not None]
    zb_n = len(zb) if zb is not None else 0
    return {
        'available': True,
        'limit_up_count': zt_n,
        'early_seal_count': len(early),
        'early_seal_rate': round(len(early) / zt_n, 3) if zt_n else None,
        'broken_count': zb_n,
        'broken_rate': round(zb_n / (zt_n + zb_n), 3) if (zt_n + zb_n) else None,
        'seal_amount_median': round(median(seal_amts), 2) if seal_amts else None,
    }


def feedback_matrix(date: str, prev: str = None) -> dict:
    """反馈矩阵: 昨日涨停股今日 再涨停/收红/收绿/跌停 占比(定稿记录)"""
    from .emotion_metrics import fetch_prev_pool
    prev = prev or prev_trade_date(date)
    settled = fetch_prev_pool(date)
    if not (settled.get('available') and settled['rows']):
        return {'available': False, 'reason': '[⚠️ 定稿记录不可用]'}
    rows = settled['rows']
    today_codes = {r['ts_code'] for r in store.load_pool(date, 'zt') or []}
    dt_codes = {r['ts_code'] for r in store.load_pool(date, 'dt') or []}
    n = len(rows)
    if not n:
        return {'available': False, 'reason': '[⚠️ 昨日涨停池为空]'}
    return {
        'available': True, 'prev_date': prev, 'sample': n, 'source': 'settled',
        'relimit': round(sum(1 for r in rows if r['ts_code'] in today_codes) / n, 3),
        'red': round(sum(1 for r in rows if r.get('ret') is not None and r['ret'] > 0) / n, 3),
        'green': round(sum(1 for r in rows if r.get('ret') is not None and r['ret'] < 0) / n, 3),
        'down_limit': round(sum(1 for r in rows if r['ts_code'] in dt_codes) / n, 3),
    }


def loss_effect(date: str, prev: str = None) -> dict:
    """亏钱效应: 跌停家数 + 昨日涨停股今日平均涨幅(负值=亏钱)"""
    from .emotion_metrics import fetch_prev_pool
    prev = prev or prev_trade_date(date)
    _zt, _zb, dt = _today_pools(date)
    dt_n = len(dt) if dt is not None else None
    settled = fetch_prev_pool(date)
    avg = None
    if settled.get('available') and settled['rows']:
        vals = [r['ret'] for r in settled['rows'] if r.get('ret') is not None]
        avg = round(sum(vals) / len(vals), 2) if vals else None
    return {'available': True, 'down_limit_count': dt_n,
            'prev_zt_avg_ret': avg,
            'note': 'prev_zt_avg_ret=昨日涨停股今日平均涨幅(负值=亏钱效应)'}


def theme_structure(date: str, prev: str = None) -> dict:
    """题材结构(行业口径近似, 如实注明)"""
    from .emotion_metrics import fetch_prev_pool
    prev = prev or prev_trade_date(date)
    settled = fetch_prev_pool(date)
    rows = settled['rows'] if settled.get('available') else None
    if not rows:
        rows = store.load_pool(prev, 'zt')
    if not rows:
        return {'available': False, 'reason': '[⚠️ 无可用样本]'}
    counts = {}
    for r in rows:
        ind = r.get('industry')
        if ind:
            counts[ind] = counts.get(ind, 0) + 1
    top = sorted(counts.items(), key=lambda kv: -kv[1])[:8]
    return {'available': True,
            'top': [{'industry': k, 'count': v} for k, v in top],
            'note': '行业口径近似题材, 非问财题材串'}


def build_facts(date: str, prev: str = None) -> dict:
    """市场事实一起算"""
    prev = prev or prev_trade_date(date)
    return {'date': str(date), 'prev_date': prev,
            'seal_quality': seal_quality(date),
            'loss_effect': loss_effect(date, prev),
            'feedback_matrix': feedback_matrix(date, prev),
            'theme_structure': theme_structure(date, prev)}
