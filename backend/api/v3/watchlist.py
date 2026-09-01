#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.3): API v3 自选股 — 分页 + 过滤 + 错误码"""
from typing import Dict, Any
from fastapi import APIRouter, Depends

from auth import get_current_active_user
from api.v1.watchlist import _load_watchlist, _save_watchlist
from api.v3.common import paginate, filter_contains, clamp_page, clamp_page_size
from api.v3.errors import bad_request, not_found

router = APIRouter(tags=["v3 自选股"])


@router.get("")
async def list_watchlist(page: int = 1, page_size: int = 20, q: str = "",
                         user: dict = Depends(get_current_active_user)):
    stocks = _load_watchlist(user.get("username", "")) or []
    if q:
        # 过滤: name 子串 或 code 子串 (q in code), 去重保序
        name_hits = filter_contains(stocks, "name", q)
        ql = str(q).lower()
        code_hits = [s for s in stocks if ql in str(s.get("code", "")).lower()]
        seen, dedup = set(), []
        for s in name_hits + code_hits:
            k = s.get("code")
            if k not in seen:
                seen.add(k); dedup.append(s)
        stocks = dedup
    data = paginate(stocks, page, page_size)
    return {"success": True, "data": data}


@router.post("")
async def add_stock(req: Dict[str, Any], user: dict = Depends(get_current_active_user)):
    code = (req.get("code") or "").strip()
    if not code:
        return bad_request("code 必填")
    stocks = _load_watchlist(user.get("username", "")) or []
    if any(s.get("code") == code for s in stocks):
        return bad_request("股票已在自选")
    stocks.append({"code": code, "name": req.get("name", "") or code, "added_at": __import__("datetime").datetime.now().strftime("%Y-%m-%d %H:%M:%S")})
    _save_watchlist(user.get("username", ""), stocks)
    return {"success": True, "data": {"code": code}}


@router.delete("/{code}")
async def remove_stock(code: str, user: dict = Depends(get_current_active_user)):
    stocks = _load_watchlist(user.get("username", "")) or []
    new = [s for s in stocks if s.get("code") != code]
    if len(new) == len(stocks):
        return not_found("自选股不存在")
    _save_watchlist(user.get("username", ""), new)
    return {"success": True, "data": {"removed": code}}