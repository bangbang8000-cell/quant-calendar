#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据全量导出/导入 (v3.3.0-T12 / FR-3.3.7)
- GET  /api/export  → 导出用户数据 JSON (自选/评估历史/聊天/配置)
- POST /api/import  → 导入恢复
"""
import json
import os
from typing import Any, Dict

from fastapi import APIRouter, Depends
from pydantic import BaseModel

from auth import get_current_active_user

router = APIRouter(prefix="/data", tags=["数据导出导入"])


class ImportRequest(BaseModel):
    data: Dict[str, Any]


def _collect_user_data(username: str) -> dict:
    """收集用户数据: 自选/聊天/评估历史"""
    data = {"username": username, "exported_at": None}

    # 自选股 (SQLite 优先)
    try:
        import db
        wl = db.watchlist_get(username)
        data["watchlist"] = [{"code": r["stock_code"], "added_at": r["added_at"]} for r in wl]
    except Exception:
        data["watchlist"] = []

    # 聊天历史
    try:
        import db
        chats = db.chat_all(username)
        data["chat_history"] = chats
    except Exception:
        data["chat_history"] = []

    # 评估历史 (读 ai_evaluation_history.json)
    try:
        from paths import AI_EVALUATION_HISTORY_FILE
        if os.path.exists(AI_EVALUATION_HISTORY_FILE):
            with open(AI_EVALUATION_HISTORY_FILE, 'r', encoding='utf-8') as f:
                hist = json.load(f)
            # 按 username 过滤
            if isinstance(hist, list):
                data["evaluation_history"] = [h for h in hist if h.get("username") == username]
            else:
                data["evaluation_history"] = hist.get(username, [])
        else:
            data["evaluation_history"] = []
    except Exception:
        data["evaluation_history"] = []

    from datetime import datetime
    data["exported_at"] = datetime.now().isoformat()
    return data


@router.get("/export")
async def export_data(user: dict = Depends(get_current_active_user)):
    """导出当前用户数据 (JSON)"""
    username = user.get("username", "default")
    data = _collect_user_data(username)
    return {"success": True, "data": data, "message": f"导出 {username} 的数据完成"}


@router.post("/import")
async def import_data(req: ImportRequest, user: dict = Depends(get_current_active_user)):
    """导入用户数据 (自选/聊天/评估历史)"""
    username = user.get("username", "default")
    d = req.data
    imported = {"watchlist": 0, "chat": 0, "evaluation_history": 0}

    # 自选股
    try:
        import db
        for item in d.get("watchlist", []):
            code = item.get("code") if isinstance(item, dict) else item
            if code:
                db.watchlist_set(username, code)
                imported["watchlist"] += 1
    except Exception as e:
        return {"success": False, "message": f"自选导入失败: {e}"}

    # 聊天历史
    try:
        import db
        for msg in d.get("chat_history", []):
            db.chat_append(username, msg.get("stock_code", ""), msg.get("role", "user"), msg.get("content", ""))
            imported["chat"] += 1
    except Exception as e:
        return {"success": False, "message": f"聊天导入失败: {e}"}

    # 评估历史 (合并写入 ai_evaluation_history.json)
    try:
        from paths import AI_EVALUATION_HISTORY_FILE
        entries = d.get("evaluation_history", [])
        if entries:
            if os.path.exists(AI_EVALUATION_HISTORY_FILE):
                with open(AI_EVALUATION_HISTORY_FILE, 'r', encoding='utf-8') as f:
                    hist = json.load(f)
            else:
                hist = []
            if isinstance(hist, list):
                hist.extend(entries)
            else:
                hist.setdefault(username, []).extend(entries)
            with open(AI_EVALUATION_HISTORY_FILE, 'w', encoding='utf-8') as f:
                json.dump(hist, f, ensure_ascii=False, indent=2)
            imported["evaluation_history"] = len(entries)
    except Exception as e:
        return {"success": False, "message": f"评估历史导入失败: {e}"}

    return {"success": True, "message": "导入完成", "imported": imported}
