#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""盘中情绪与事件流接口 (v6.9.0 / B3.4)

从 shortterm.py 拆出，保持单文件可读（沿用 6.6 拆 market_extras / 6.7 拆 market_fuyao 先例）。

端点：
- GET /shortterm/auction      集合竞价聚合（快照/机会/日期/基准）
- GET /shortterm/hot-list     热榜 + 飙升榜（period=day|hour）
- GET /shortterm/anomaly      异动解读（分页）
- GET /events/flash           市场快讯（全局）
"""

import logging
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_user

logger = logging.getLogger(__name__)

router = APIRouter(tags=['shortterm-extras'])


@router.get('/shortterm/auction')
async def get_auction(codes: Optional[str] = None, date: Optional[str] = None,
                     page: int = 1, size: int = 20,
                     user: Optional[dict] = Depends(get_current_user)):
    """集合竞价聚合（PRD FR-6.9.1）。codes 省略时仅返回机会/日期/基准。"""
    import auction
    out = auction.auction_bundle(codes=codes, date=date, page=page, size=size)
    return {'success': True, **out}


@router.get('/shortterm/hot-list')
async def get_hot_list(period: str = 'day', limit: int = 30,
                       user: Optional[dict] = Depends(get_current_user)):
    """热榜 + 飙升榜。period 只接受 day/hour。"""
    import hot_rank
    try:
        hot = hot_rank.fetch_hot_list(period, limit)
        sky = hot_rank.fetch_skyrocket(period, limit)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e)) from e
    ok = bool(hot.get('available')) or bool(sky.get('available'))
    return {
        'success': True,
        'period': hot.get('period') or period,
        'period_label': hot.get('period_label'),
        'available': ok,
        'reason': None if ok else (hot.get('reason') or sky.get('reason')),
        'hot': hot,
        'skyrocket': sky,
    }


@router.get('/shortterm/anomaly')
async def get_anomaly(page: int = 1, size: int = 20, tag: Optional[str] = None,
                      user: Optional[dict] = Depends(get_current_user)):
    """异动解读（分页；原文不改写，附免责声明）。"""
    import anomaly_notes
    out = anomaly_notes.fetch_anomaly_list(page=page, size=size, tag=tag)
    return {'success': True, **out}


@router.get('/events/flash')
async def get_events_flash(tag_id: Optional[int] = None, limit: int = 20,
                           user: Optional[dict] = Depends(get_current_user)):
    """市场快讯（标题 + 摘要 + 原文跳转，不内嵌正文）。"""
    try:
        from event_provider_fuyao import fuyao_event_provider
        out = fuyao_event_provider.fetch_flash(tag_id=tag_id, limit=max(1, min(limit, 50)))
    except Exception as e:  # noqa: BLE001 — 事件源异常时如实降级
        logger.warning('快讯取数异常: %s', e)
        out = {'available': False, 'reason': f'{type(e).__name__}: {str(e)[:60]}'}
    return {'success': True, **out}
