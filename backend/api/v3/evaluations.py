#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.3): API v3 评估历史 — 分页 + level 过滤 + 错误码"""
import json
import os
from typing import Optional
from fastapi import APIRouter, Depends

from auth import get_current_active_user
from paths import DATA_DIR
from api.v3.common import paginate

router = APIRouter(tags=["v3 评估历史"])


def _history_path(username):
    return os.path.join(DATA_DIR, "users", username, "ai_evaluation_history.json")


def _load_history(username):
    try:
        with open(_history_path(username), "r", encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, list) else []
    except (OSError, ValueError):
        return []


@router.get("")
async def list_evaluations(page: int = 1, page_size: int = 20, level: Optional[str] = None,
                           code: Optional[str] = None,
                           user: dict = Depends(get_current_active_user)):
    records = _load_history(user.get("username", ""))
    out = []
    for rec in records:
        result = rec.get("result") if isinstance(rec, dict) else {}
        lvl = result.get("level") if isinstance(result, dict) else None
        if level and lvl != level:
            continue
        if code and str(rec.get("stock_code", "")).lower() != str(code).lower():
            continue
        out.append({"stock_code": rec.get("stock_code"), "level": lvl, "model": rec.get("model_used"), "ts": rec.get("created_at") or rec.get("ts")})
    data = paginate(out, page, page_size)
    return {"success": True, "data": data}