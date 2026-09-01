#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可靠性 API (V5.0 T-5.0.1)
- GET /api/reliability/freshness   数据资产新鲜度汇总 (需登录)
"""
from fastapi import APIRouter, Depends

from auth import get_current_active_user
from reliability import freshness

router = APIRouter(prefix="/reliability", tags=["可靠性"])


@router.get("/freshness")
async def freshness_summary(user: dict = Depends(get_current_active_user)):
    """数据资产新鲜度汇总 (healthy / stale_count / items)。"""
    return {"success": True, "data": freshness.status_summary()}
