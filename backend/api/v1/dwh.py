#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""DWH 状态与刷新接口 (v7.0.0 / B4.5)

- GET  /api/dwh/status   库状态（行数/股票数/最新日期/因子覆盖/大小/后端）
- POST /api/dwh/refresh  admin 手动触发（全量或增量自动判定；download → ingest → backup）
"""

import logging
from typing import Dict

from fastapi import APIRouter, Depends

from auth import get_admin_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/dwh', tags=['dwh'])


@router.get('/status')
async def dwh_status(_: Dict = Depends(get_admin_user)):
    """DWH 状态。依赖缺失/未落盘时 available=False + reason（不抛错）。"""
    try:
        from dwh import get_backend
        st = get_backend().status()
    except Exception as e:  # noqa: BLE001 — 依赖缺失时如实降级
        return {'success': True, 'available': False, 'reason': f'{type(e).__name__}: {str(e)[:120]}'}
    return {'success': True, **st}


@router.post('/refresh')
async def dwh_refresh(kind: str = 'daily-k', _: Dict = Depends(get_admin_user)):
    """手动刷新（需 admin）。kind: daily-k | daily-k-10d | adjustment-factors。"""
    try:
        from dwh import get_backend
        b = get_backend()
        mode = b.sync_mode(_today())
        out = b.sync(kind='adjustment-factors' if kind == 'adjustment-factors' else kind)
        return {'success': True, 'mode': mode, 'kind': kind, **out}
    except Exception as e:  # noqa: BLE001 — 失败如实返回, 不 500
        return {'success': False, 'message': f'刷新失败: {type(e).__name__}: {str(e)[:160]}'}


def _today() -> str:
    import datetime
    return datetime.date.today().strftime('%Y%m%d')
