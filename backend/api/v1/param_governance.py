#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""参数治理 API (v7.7 FR-7.7-1) — 锁定/解锁/校验/审计

解锁为 admin 专属(最小权限); 所有事件留痕, 校验结果含参数快照哈希,
使"哪套参数跑了哪次回测"可复现。
"""
from typing import Any, Dict

from fastapi import APIRouter, Depends, HTTPException

from auth import get_admin_user, get_non_guest_user

router = APIRouter(tags=["参数治理"])


@router.get("/strategies/{sid}/lock")
async def get_param_lock(sid: str, _: Dict = Depends(get_non_guest_user)):
    from param_governance import get_lock
    return get_lock(sid)


@router.post("/strategies/{sid}/lock")
async def lock_params(sid: str, body: Dict[str, Any],
                      user: Dict = Depends(get_non_guest_user)):
    from param_governance import lock_params as _lock
    params = body.get("params")
    if not isinstance(params, dict):
        raise HTTPException(status_code=400, detail="params 必须为对象")
    return _lock(sid, params, operator=str(user.get("username") or ""),
                 reason=str(body.get("reason") or ""))


@router.delete("/strategies/{sid}/lock")
async def unlock_params(sid: str, reason: str = "",
                        user: Dict = Depends(get_admin_user)):
    """解锁: admin 专属; reason 走 query, 兼容不支持 body 的 DELETE 客户端"""
    from param_governance import unlock_params as _unlock
    ok = _unlock(sid, operator=str(user.get("username") or ""), reason=reason)
    if not ok:
        raise HTTPException(status_code=404, detail="策略未锁定")
    return {"sid": sid, "locked": False}


@router.post("/strategies/{sid}/lock/verify")
async def verify_params(sid: str, body: Dict[str, Any],
                        _: Dict = Depends(get_non_guest_user)):
    """回测前校验: 锁定参数不一致时 verdict=mismatch, 由调用方决定是否阻断"""
    from param_governance import verify_params as _verify
    if not isinstance(body.get("params"), dict):
        raise HTTPException(status_code=400, detail="params 必须为对象")
    return _verify(sid, body["params"])


@router.get("/strategies/{sid}/lock/audit")
async def param_audit(sid: str, limit: int = 100,
                      _: Dict = Depends(get_non_guest_user)):
    from param_governance import list_audit
    items = list_audit(sid=sid, limit=limit)
    return {"items": items, "count": len(items)}
