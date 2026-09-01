#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可靠性 API (V5.0)
- GET /api/reliability/freshness    数据资产新鲜度汇总 (需登录)
- GET /api/reliability/startup-report 最近一次启动自检报告 (需登录; 无报告则即时执行)
"""
from fastapi import APIRouter, Depends

from auth import get_current_active_user
from reliability import freshness, checks, heal

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


@router.get("/heal-history")
async def heal_history(user: dict = Depends(get_current_active_user), limit: int = 100):
    """自愈时间线: 最近 N 次巡检-自愈动作 (上限 100)。"""
    return {"success": True, "data": heal.heal_history(limit=max(1, min(limit, 100)))}


@router.get("/source-health")
async def source_health(user: dict = Depends(get_current_active_user)):
    """数据源可用性指标 (成功率/延迟/degraded) + 拉取告警队列。"""
    try:
        from data_sources import get_health_metrics, get_alerts
        return {"success": True,
                "data_sources": get_health_metrics(),
                "alerts": get_alerts()}
    except Exception as e:
        return {"success": False, "error": str(e), "data_sources": [], "alerts": []}
