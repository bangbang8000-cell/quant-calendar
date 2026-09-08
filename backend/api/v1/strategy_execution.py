#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V4.9.2 (P1): 每日策略执行监控 API — 计划/进展/结果/追溯/校验
"""
from fastapi import APIRouter, Depends, Query
from typing import Dict, Optional

from auth import get_admin_user, get_non_guest_user
from strategy_execution import (
    get_plan, get_live_status, get_results, get_trace, force_verify_reload,
)

router = APIRouter(prefix="/strategies", tags=["策略执行"])


@router.get("/execution/plan")
async def execution_plan(_: Dict = Depends(get_non_guest_user)):
    """今日执行计划 (启用策略/调度/倒计时/上次运行)"""
    return {"data": {"plans": get_plan()}}


@router.get("/execution/status")
async def execution_status(_: Dict = Depends(get_non_guest_user)):
    """实时进展快照"""
    from scheduler import scheduler
    return {"data": get_live_status(scheduler)}


@router.get("/execution/results")
async def execution_results(days: int = Query(7, ge=1, le=30),
                            _: Dict = Depends(get_non_guest_user)):
    """按日聚合执行结果 (每策略持仓/并集/日视图可见性/耗时)"""
    return {"data": get_results(days=days)}


@router.get("/execution/trace/{date}")
async def execution_trace(date: str, _: Dict = Depends(get_non_guest_user)):
    """某日完整时间线追溯"""
    return {"data": get_trace(date)}


@router.post("/execution/verify")
async def execution_verify(body: Optional[dict] = None, _: Dict = Depends(get_admin_user)):
    """手动刷新聚合器并校验日视图 (admin; 应急修复入口)"""
    date = (body or {}).get("date") if body else None
    result = force_verify_reload(date or None)
    try:
        from audit_log import log
        log("execution_verify", username="admin", detail={"date": date, "result": result.get("detail", "")[:120]})
    except Exception:
        pass
    return {"data": result}
