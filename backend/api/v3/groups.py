#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.8 (T-5.0.83): API v3 协作组 — 分页列表 (复用 collaboration)"""
from fastapi import APIRouter, Depends

import collaboration as C
from rbac import require_permission
from api.v3.common import paginate

router = APIRouter(tags=["v3 协作组"])


@router.get("")
async def list_groups(page: int = 1, page_size: int = 20,
                      user: dict = Depends(require_permission("collab.read"))):
    groups = C.list_groups_for(user.get("username") or user.get("sub", ""))
    data = paginate(groups, page, page_size)
    return {"success": True, "data": data}
