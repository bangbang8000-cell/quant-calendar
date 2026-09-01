#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""质量评分 API (V5.1 T-5.1.2) — 经 DataPortal 2.0 统一取数 → 质量分 (需登录)"""
from fastapi import APIRouter, Depends, Query

from auth import get_current_active_user

router = APIRouter(prefix="/quality", tags=["数据质量"])


@router.get("/score")
async def quality_score(symbol: str = Query(..., description="股票代码, 如 000001.SZ"),
                        kind: str = Query("kline", description="取数类型: kline/daily_basic/financial"),
                        user: dict = Depends(get_current_active_user)):
    """单标的综合质量评分 (score/grade/issues)。取数失败返回 success=False。"""
    from data_quality import score_symbol, DataQualityError
    try:
        return {"success": True, "data": score_symbol(symbol, kind=kind)}
    except DataQualityError as e:
        return {"success": False, "message": str(e)}
    except Exception as e:
        return {"success": False, "message": f"评分失败: {e}"}
