#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可靠性 API (V5.0)
- GET /api/reliability/freshness    数据资产新鲜度汇总 (需登录)
- GET /api/reliability/startup-report 最近一次启动自检报告 (需登录; 无报告则即时执行)
"""
from fastapi import APIRouter, Depends

from auth import get_current_active_user
from reliability import freshness, checks

router = APIRouter(prefix="/reliability", tags=["可靠性"])


@router.get("/freshness")
async def freshness_summary(user: dict = Depends(get_current_active_user)):
    """数据资产新鲜度汇总 (healthy / stale_count / items)。"""
    return {"success": True, "data": freshness.status_summary()}


@router.get("/startup-report")
async def startup_report(user: dict = Depends(get_current_active_user)):
    """最近一次启动自检报告; 若从未运行过则即时执行一次。"""
    report = checks.get_report() or checks.run_checks()
    return {"success": True, "data": report}
