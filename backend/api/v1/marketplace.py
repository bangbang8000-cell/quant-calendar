#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略/案例市场 API + 向量化回测 (v7.10 FR-7.10-1/2)

市场: 发布(publish)/下架(unpublish)/检索/一键导入。写操作全部要求登录并审计。
回测: 接收矩阵式入参, 跑向量化引擎, 可选与事件驱动引擎做逐日对齐(parity)。
"""
import logging
from typing import Any, Dict, List, Optional

from fastapi import APIRouter, Depends, HTTPException

from auth import get_non_guest_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/marketplace", tags=["策略市场"])


def _actor(user: Dict) -> str:
    name = str(user.get("username") or "").strip()
    if not name:
        raise HTTPException(status_code=403, detail="缺少有效用户身份")
    return name


@router.get("/items")
async def list_items(kind: Optional[str] = None, keyword: Optional[str] = None,
                     include_archived: bool = False, limit: int = 100,
                     user: Dict = Depends(get_non_guest_user)):
    """市场条目列表(默认只返回已发布)"""
    from marketplace import list_items as _list
    items = _list(kind=kind, keyword=keyword, include_archived=include_archived, limit=limit)
    return {"items": items, "count": len(items)}


@router.get("/items/{item_id}")
async def get_item(item_id: str, user: Dict = Depends(get_non_guest_user)):
    from marketplace import get_item as _get
    item = _get(item_id, count_view=True)
    if not item:
        raise HTTPException(status_code=404, detail="市场条目不存在")
    return item


@router.post("/items")
async def publish_item(body: Dict[str, Any], user: Dict = Depends(get_non_guest_user)):
    """发布策略或形态案例(同 kind+ref_id+version 覆盖并留痕)"""
    from marketplace import MarketError, publish_item as _publish
    try:
        return _publish(str(body.get("kind") or ""), str(body.get("ref_id") or ""),
                        actor=_actor(user), title=str(body.get("title") or ""),
                        summary=str(body.get("summary") or ""),
                        version=str(body.get("version") or "1.0.0"))
    except MarketError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@router.delete("/items/{item_id}")
async def unpublish_item(item_id: str, user: Dict = Depends(get_non_guest_user)):
    from marketplace import unpublish_item as _unpublish
    if not _unpublish(item_id, _actor(user)):
        raise HTTPException(status_code=404, detail="条目不存在或已下架")
    return {"success": True, "id": item_id}


@router.post("/items/{item_id}/import")
async def import_item(item_id: str, user: Dict = Depends(get_non_guest_user)):
    """导入: 策略→新 variant, 案例→新 case(不影响原物)"""
    from marketplace import MarketError, import_item as _import
    try:
        return _import(item_id, _actor(user))
    except MarketError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@router.get("/stats")
async def market_stats(user: Dict = Depends(get_non_guest_user)):
    from marketplace import stats as _stats
    return _stats()


# ─── 向量化回测 ───────────────────────────────────────────────

def _to_frame(block: Dict, label: str, columns: List[str]):
    """{dates:[], matrix:[[...]]} → DataFrame; 形状不符直接拒绝(不猜)"""
    import pandas as pd
    dates = block.get("dates") or []
    matrix = block.get("matrix") or []
    if not dates or not matrix:
        raise HTTPException(status_code=400, detail=f"{label} 需提供 dates 与 matrix")
    if len(matrix) != len(dates):
        raise HTTPException(status_code=400,
                            detail=f"{label} matrix 行数({len(matrix)}) 与 dates({len(dates)}) 不一致")
    if any(len(row) != len(columns) for row in matrix):
        raise HTTPException(status_code=400, detail=f"{label} matrix 列数与 symbols 不一致")
    return pd.DataFrame(matrix, index=dates, columns=columns, dtype=float)


@router.post("/vector-backtest")
async def vector_backtest_api(body: Dict[str, Any],
                              user: Dict = Depends(get_non_guest_user)):
    """向量化回测: 传入权重矩阵与收益矩阵, 可选 parity 与事件引擎对齐 / sweep 成本扫描"""
    from vector_backtest import parity_check, sweep, vector_backtest

    symbols = body.get("symbols") or []
    if not symbols:
        raise HTTPException(status_code=400, detail="symbols 不能为空")
    holdings = _to_frame(body.get("holdings") or {}, "holdings", symbols)
    returns = _to_frame(body.get("returns") or {}, "returns", symbols)
    commission = float(body.get("commission_rate", 0.0003))
    slippage = float(body.get("slippage", 0.001))
    raw_rate = body.get("cost_rate")
    rate = float(raw_rate) if raw_rate is not None else None
    result = vector_backtest(holdings, returns, commission_rate=commission,
                             slippage=slippage, cost_rate=rate)
    if not result.get("success"):
        raise HTTPException(status_code=400, detail=result.get("message") or "回测失败")
    if body.get("parity"):
        # parity 以“真零成本”为基准, 只校验对齐口径本身, 不受费率影响
        result["parity"] = parity_check(holdings, returns)
    if body.get("sweep"):
        result["sweep"] = sweep(holdings, returns)
    return result
