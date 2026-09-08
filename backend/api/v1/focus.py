#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.2 / FR-5.4.1): 重点跟踪 API

- GET /api/focus/list?scope=all|watchlist|new_pool&date=YYYY-MM-DD
  匿名: 全用户自选 ∪ 新入池; 登录: 本人自选 ∪ 新入池
- (后续任务扩展: /results /history /push 等)
"""
import logging
from fastapi import APIRouter, Depends, Query
from auth import get_current_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/focus", tags=["重点跟踪"])


@router.get("/list")
async def get_focus_list(
    scope: str = Query("all", description="清单范围"),
    date: str = Query(None, description="交易日期 YYYY-MM-DD, 缺省今天"),
    user: dict = Depends(get_current_user),
):
    import focus_list as fl
    if scope not in fl.VALID_SCOPES:
        from fastapi import HTTPException
        raise HTTPException(status_code=400, detail="scope 必须为 all|watchlist|new_pool")
    d = date or fl.today_str()
    if user:
        result = fl.load_focus_list(user["username"], d, scope)
        result["user"] = user["username"]
    else:
        result = fl.load_focus_list_anonymous(d, scope)
        result["user"] = None
    result["date"] = d
    return {"success": True, "data": result}
