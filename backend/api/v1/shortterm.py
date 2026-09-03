#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.08): 短线复盘 API (/api/shortterm)

- GET  /api/shortterm/latest-session : 最近已收盘交易日
- GET  /api/shortterm/pools?date=    : 三池 + 连板梯队 (store 优先, 实时兜底并入库)
- GET  /api/shortterm/lhb?date=      : 龙虎榜
- GET  /api/shortterm/sector-flow?   : 板块资金流(实时口径)
- GET  /api/shortterm/dates          : 已抓取日期列表
- POST /api/shortterm/capture?date=  : 抓取三池+龙虎榜+昨日涨停表现入库(调度/手动)
- V5.2.1:
- GET  /api/shortterm/emotion?date=        : 派生情绪指标(赚钱效应/晋级率/连板溢价/情绪周期)
- GET  /api/shortterm/market-facts?date=   : 市场事实(封板质量/亏钱效应/反馈矩阵/题材结构)
- GET  /api/shortterm/verification?date=   : 明日验证条件(三态核验+基准发生率)
- GET  /api/shortterm/weekly?end=          : 近5日热度 + 龙头谱系
- GET  /api/shortterm/overview?date=       : 复盘看板聚合(硬指标卡+事实+验证条件)

数据诚实性: 失败字段为 None(前端标不可用), 空池是合法结果(空数组)。
"""
from fastapi import APIRouter, Depends

from auth import get_current_active_user
from shortterm import fetchers, ladder, lhb, sector_flow, store
from shortterm import emotion_metrics, market_facts, verification, weekly
from shortterm.trade_calendar import latest_session, is_settled, last_trade_dates

router = APIRouter(prefix="/shortterm", tags=["短线复盘"])


def _load_or_fetch(date: str, pool_type: str, fetch_fn):
    """store 优先; 无则实时抓取并入库; 失败返回 None(前端标不可用)"""
    cached = store.load_pool(date, pool_type)
    if cached is not None:
        return cached
    out = fetch_fn(date)
    if out.get('available'):
        store.save_pool(date, pool_type, out['rows'])
        return out['rows']
    return None


@router.get("/latest-session")
async def get_latest_session(user: dict = Depends(get_current_active_user)):
    return {'success': True, 'date': latest_session()}


@router.get("/pools")
async def get_pools(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    zt = _load_or_fetch(d, 'zt', fetchers.fetch_zt_pool)
    zb = _load_or_fetch(d, 'zb', fetchers.fetch_zb_pool)
    dt = _load_or_fetch(d, 'dt', fetchers.fetch_dt_pool)
    return {'success': True, 'date': d, 'settled': is_settled(d),
            'zt': zt, 'zb': zb, 'dt': dt,
            'ladder': ladder.ladder_gap(zt or [])}


@router.get("/lhb")
async def get_lhb(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    rows = _load_or_fetch(d, 'lhb', lambda x: lhb.fetch_lhb(x, x))
    return {'success': True, 'date': d, 'settled': is_settled(d), 'rows': rows}


@router.get("/sector-flow")
async def get_sector_flow(indicator: str = '今日', sector_type: str = '行业资金流',
                          user: dict = Depends(get_current_active_user)):
    out = sector_flow.fetch_sector_flow(indicator, sector_type)
    if out.get('available'):
        store.save_sector_flow(sector_type, indicator, out['rows'])
    return {'success': True, **out}


@router.get("/dates")
async def get_dates(user: dict = Depends(get_current_active_user)):
    return {'success': True, 'dates': store.list_dates()}


@router.post("/capture")
async def capture(date: str = None, user: dict = Depends(get_current_active_user)):
    """抓取三池 + 龙虎榜 + 昨日涨停表现(定稿记录)并入库(调度/手动触发)"""
    d = date or latest_session()
    results = {}
    for pool_type, fn in [('zt', fetchers.fetch_zt_pool),
                          ('zb', fetchers.fetch_zb_pool),
                          ('dt', fetchers.fetch_dt_pool),
                          ('lhb', lambda x: lhb.fetch_lhb(x, x)),
                          ('prev_zt', emotion_metrics.fetch_prev_pool)]:
        out = fn(d)
        if out.get('available'):
            store.save_pool(d, pool_type, out['rows'])
            results[pool_type] = len(out['rows'])
        else:
            results[pool_type] = None
    return {'success': True, 'date': d, 'captured': results}


# ---------- V5.2.1: 派生情绪指标与盘面 ----------

def _baselines_from_history(date: str, days: int = 10) -> dict:
    """从缓存池子算近 N 日各指标历史(不现抓网络), 供验证条件基准。

    仅用缓存数据; 某指标无历史 → threshold None → 数据不足(不算判错)。
    """
    from statistics import median as _median
    dates = last_trade_dates(days, date) or []
    hist = {'limit_up_count': [], 'highest_board': [], 'broken_rate': [],
            'limit_down_count': [], 'promotion_1to2': [], 'money_median': []}
    for d in dates:
        zt = store.load_pool(d, 'zt')
        zb = store.load_pool(d, 'zb')
        dt = store.load_pool(d, 'dt')
        if zt is not None:
            hist['limit_up_count'].append(len(zt))
            boards = [r['boards'] for r in zt if r.get('boards') is not None]
            hist['highest_board'].append(max(boards) if boards else 0)
            zb_n = len(zb) if zb is not None else 0
            denom = len(zt) + zb_n
            hist['broken_rate'].append(round(zb_n / denom, 3) if denom else None)
        if dt is not None:
            hist['limit_down_count'].append(len(dt))
        prev = store.load_pool(emotion_metrics.prev_trade_date(d), 'zt')
        if zt is not None and prev is not None:
            today_codes = {r['ts_code'] for r in zt}
            bucket = [r['ts_code'] in today_codes for r in prev if r.get('boards') == 1]
            if bucket:
                hist['promotion_1to2'].append(round(sum(bucket) / len(bucket), 3))
        pv = store.load_pool(d, 'prev_zt')
        if pv:
            vals = [r['ret'] for r in pv if r.get('ret') is not None]
            if vals:
                hist['money_median'].append(round(_median(vals), 2))
    out = {}
    for k, vals in hist.items():
        if not vals:
            out[k] = {'threshold': None, 'base_rate': None, 'sample': 0}
        else:
            direction = '<=' if k in ('broken_rate', 'limit_down_count') else '>='
            out[k] = verification.direction_baseline(
                [{'v': v} for v in vals if v is not None], 'v', direction)
    return out


@router.get("/emotion")
async def get_emotion(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    metrics = emotion_metrics.build_metrics(d)
    zt = store.load_pool(d, 'zt')
    metrics['ladder'] = ladder.ladder_gap(zt or [])
    return {'success': True, **metrics}


@router.get("/market-facts")
async def get_market_facts(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    return {'success': True, **market_facts.build_facts(d)}


@router.get("/verification")
async def get_verification(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    bundle = _overview_bundle(d)
    baselines = _baselines_from_history(d)
    conds = verification.build_conditions(bundle, baselines)
    return {'success': True, 'date': d,
            'conditions': conds, 'summary': verification.summarize(conds)}


@router.get("/weekly")
async def get_weekly(end: str = None, user: dict = Depends(get_current_active_user)):
    return {'success': True, **weekly.industry_heat(end=end)}


def _overview_bundle(date: str) -> dict:
    """复盘看板聚合: 情绪指标 + 市场事实 + 梯队(供前端与验证条件共用)"""
    metrics = emotion_metrics.build_metrics(date)
    facts = market_facts.build_facts(date)
    zt = store.load_pool(date, 'zt')
    metrics['ladder'] = ladder.ladder_gap(zt or [])
    return {**metrics, **facts}


@router.get("/overview")
async def get_overview(date: str = None, user: dict = Depends(get_current_active_user)):
    d = date or latest_session()
    bundle = _overview_bundle(d)
    baselines = _baselines_from_history(d)
    conditions = verification.build_conditions(bundle, baselines)
    return {'success': True, 'date': d,
            'emotion': {k: bundle[k] for k in ('money_effect', 'promotion',
                                               'consec_premium', 'sentiment_cycle')},
            'facts': {k: bundle[k] for k in ('seal_quality', 'loss_effect',
                                             'feedback_matrix', 'theme_structure')},
            'ladder': bundle['ladder'],
            'conditions': conditions,
            'summary': verification.summarize(conditions),
            'weekly': weekly.industry_heat(end=d)}
