#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
问题反馈 API (v3.2.0-T24)
用户反馈保存到 data/feedback.json, 附系统信息
"""
import json
import os
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel
from auth import get_admin_user

router = APIRouter(prefix="/feedback", tags=["反馈"])


class FeedbackIn(BaseModel):
    content: str
    page: Optional[str] = ""
    user_agent: Optional[str] = ""
    app_version: Optional[str] = ""


def _feedback_file() -> str:
    """反馈文件路径 (data/feedback.json)"""
    base = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    data_dir = os.path.join(base, "data")
    os.makedirs(data_dir, exist_ok=True)
    return os.path.join(data_dir, "feedback.json")


@router.post("")
async def submit_feedback(item: FeedbackIn, request: Request):
    """提交反馈: 内容 + 系统信息, 追加到 feedback.json"""
    content = item.content.strip()
    if not content:
        return {"success": False, "message": "反馈内容不能为空"}

    record = {
        "id": datetime.now().strftime("%Y%m%d%H%M%S%f"),
        "time": datetime.now().isoformat(),
        "content": content[:2000],
        "page": item.page,
        "user_agent": (item.user_agent or "")[:300],
        "app_version": item.app_version,
        "ip": request.client.host if request.client else "",
    }

    path = _feedback_file()
    records = []
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                records = json.load(f)
        except Exception:
            records = []

    # 保留最近 200 条
    records.append(record)
    records = records[-200:]

    try:
        with open(path, "w", encoding="utf-8") as f:
            json.dump(records, f, ensure_ascii=False, indent=2)
        return {"success": True, "message": "反馈已提交", "id": record["id"]}
    except Exception as e:
        return {"success": False, "message": f"保存失败: {e}"}


@router.get("")
async def list_feedback(_: dict = Depends(get_admin_user)):
    """查看反馈列表 (供系统页使用, 无需鉴权 — 仅本机部署场景)"""
    path = _feedback_file()
    if not os.path.exists(path):
        return {"success": True, "records": []}
    try:
        with open(path, "r", encoding="utf-8") as f:
            return {"success": True, "records": json.load(f)}
    except Exception:
        return {"success": True, "records": []}
