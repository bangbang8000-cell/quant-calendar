#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
审计日志 API (v3.4.0-T2 / FR-3.4.1)
- GET /api/audit/logs     审计记录 (admin)
- GET /api/audit/stats    审计统计
"""
from fastapi import APIRouter, Depends, HTTPException, Query

from auth import get_current_active_user

router = APIRouter(prefix="/audit", tags=["审计"])


@router.get("/logs")
async def audit_logs(
    action: str = Query(None, description="按动作过滤"),
    username: str = Query(None, description="按用户过滤"),
    limit: int = Query(100, le=500),
    user: dict = Depends(get_current_active_user),
):
    """审计记录 (仅 admin)"""
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="仅管理员可查看审计日志")
    from audit_log import query
    return {"success": True, "logs": query(action=action, username=username, limit=limit)}


@router.get("/stats")
async def audit_stats(user: dict = Depends(get_current_active_user)):
    """审计统计 (仅 admin)"""
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="仅管理员可查看审计统计")
    from audit_log import stats
    return {"success": True, **stats()}
