#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.08): 短线复盘 API (/api/shortterm)

- GET  /api/shortterm/latest-session : 最近已收盘交易日
- GET  /api/shortterm/pools?date=    : 三池 + 连板梯队 (store 优先, 实时兜底并入库)
- GET  /api/shortterm/lhb?date=      : 龙虎榜
- GET  /api/shortterm/sector-flow?   : 板块资金流(实时口径)
- GET  /api/shortterm/dates          : 已抓取日期列表
- POST /api/shortterm/capture?date=  : 抓取三池+龙虎榜入库(调度/手动)

数据诚实性: 失败字段为 None(前端标不可用), 空池是合法结果(空数组)。
"""
from fastapi import APIRouter, Depends

from auth import get_current_active_user
from shortterm import fetchers, ladder, lhb, sector_flow, store
from shortterm.trade_calendar import latest_session, is_settled

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
    """抓取三池 + 龙虎榜并入库(调度/手动触发)"""
    d = date or latest_session()
    results = {}
    for pool_type, fn in [('zt', fetchers.fetch_zt_pool),
                          ('zb', fetchers.fetch_zb_pool),
                          ('dt', fetchers.fetch_dt_pool),
                          ('lhb', lambda x: lhb.fetch_lhb(x, x))]:
        out = fn(d)
        if out.get('available'):
            store.save_pool(d, pool_type, out['rows'])
            results[pool_type] = len(out['rows'])
        else:
            results[pool_type] = None
    return {'success': True, 'date': d, 'captured': results}
