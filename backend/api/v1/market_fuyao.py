#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fuyao 状态与影子对拍接口 (v6.7.0 / B1.5)

从 market.py 拆出（沿用 6.6 拆 market_extras 的先例，保持单文件 ≤700 行）。
"""
import logging
from typing import Dict

from fastapi import APIRouter, Depends

from api.v1.auth import get_admin_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/market', tags=['market-fuyao'])


@router.get('/fuyao/status')
async def get_fuyao_status(_: Dict = Depends(get_admin_user)):
    """Fuyao 源状态：配额、错误码分布、能力开关矩阵、分层契约（PRD FR-6.7.5）。"""
    from config import settings
    import data_tier
    from data_sources import data_source_manager

    env = 'ops' if getattr(settings, 'DEBUG', False) is False else 'dev'
    caps = data_source_manager.fuyao_capabilities_snapshot()
    client = data_source_manager.fuyao_client()
    if client is None:
        return {
            "success": True,
            "env": env,
            "configured": False,
            "reason": "not_configured",
            "capabilities": caps,
            "tier": data_tier.contract_snapshot(),
            "hint": "未配置 FUYAO_API_KEY / HITHINK_FINANCE_API_KEY，按未启用处理（不告警）",
        }
    snap = client.snapshot()
    return {
        "success": True,
        "env": env,
        "capabilities": caps,
        "tier": data_tier.contract_snapshot(),
        **snap,
    }


@router.get('/fuyao/shadow')
async def get_fuyao_shadow(days: int = 10, _: Dict = Depends(get_admin_user)):
    """影子对拍台账（最近 N 日，PRD FR-6.7.3）。"""
    import os
    import fuyao_shadow
    from paths import DATA_DIR

    days = max(1, min(int(days or 10), 30))
    path = os.path.join(DATA_DIR, 'fuyao_shadow.json')
    records = fuyao_shadow.load_records(path)
    recent = records[-days:]
    return {
        "success": True,
        "days": days,
        "count": len(recent),
        "records": recent,
        "thresholds": {
            "pool_diff_pct": fuyao_shadow.POOL_DIFF_THRESHOLD,
            "close_diff": fuyao_shadow.CLOSE_DIFF_THRESHOLD,
        },
        "summary": {
            "all_ok": bool(recent) and all(r.get('ok') for r in recent),
            "alert": any(fuyao_shadow.should_alert(r) for r in recent),
            "latest_date": recent[-1].get('date') if recent else None,
        },
    }
