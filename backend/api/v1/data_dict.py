#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""数据字典 API (V5.0.1 T-5.0.14) — YAML 单一事实源只读暴露 (需登录)"""
from fastapi import APIRouter, Depends, Query

from auth import get_current_active_user

router = APIRouter(prefix="/data-dict", tags=["数据字典"])


@router.get("")
async def data_dict(category: str = Query(None, description="按分类过滤: kline/daily_basic/financial/calendar/quality"),
                    user: dict = Depends(get_current_active_user)):
    """数据字典: 全部字段或按分类过滤 (字段口径单点维护的只读视图)。"""
    from data_dict import load_dict, list_fields
    d = load_dict()
    fields = list_fields()
    if category:
        fields = [f for f in fields if f["category"] == category]
    return {"success": True, "data": {
        "version": d["version"],
        "description": d.get("description", ""),
        "count": len(fields),
        "fields": fields,
    }}
