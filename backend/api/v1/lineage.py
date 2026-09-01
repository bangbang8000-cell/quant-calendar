#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""数据血缘 API (V5.1 T-5.1.6) — 刷新批次/审计只读 (需登录)"""
from fastapi import APIRouter, Depends, HTTPException, Query

from auth import get_current_active_user

router = APIRouter(prefix="/lineage", tags=["数据血缘"])


@router.get("")
async def lineage_list(kind: str = Query(None, description="按类型过滤: kline/financial/..."),
                       limit: int = Query(50, ge=1, le=500, description="返回条数"),
                       user: dict = Depends(get_current_active_user)):
    """刷新批次列表 (最近优先)。"""
    from lineage import get_batches
    return {"success": True, "data": {"count": len(get_batches(kind=kind, limit=limit)),
                                      "batches": get_batches(kind=kind, limit=limit)}}


@router.get("/{batch_id}")
async def lineage_detail(batch_id: str, user: dict = Depends(get_current_active_user)):
    """单个批次详情。"""
    from lineage import get_batch
    b = get_batch(batch_id)
    if b is None:
        raise HTTPException(status_code=404, detail="批次不存在")
    return {"success": True, "data": b}
