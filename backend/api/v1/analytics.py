#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
匿名页面热度统计 (v3.4.0-T7 / FR-3.4.6)
- POST /api/analytics/page  前端上报页面访问 (匿名)
- GET  /api/analytics/rank  热度排行 (admin)
存储: data/page_analytics.json (按日期+页面聚合)
"""
import json
import os
from datetime import datetime

from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel

from auth import get_current_active_user
from paths import DATA_DIR

router = APIRouter(prefix="/analytics", tags=["页面热度"])

ANALYTICS_FILE = os.path.join(DATA_DIR, "page_analytics.json")

# 聚合: {date: {page: count}}
_aggregate = {}


class PageView(BaseModel):
    page: str
    source: str = "web"


def _load():
    global _aggregate
    try:
        if os.path.exists(ANALYTICS_FILE):
            with open(ANALYTICS_FILE, 'r', encoding='utf-8') as f:
                _aggregate = json.load(f)
    except Exception:
        _aggregate = {}


def _save():
    try:
        os.makedirs(DATA_DIR, exist_ok=True)
        with open(ANALYTICS_FILE, 'w', encoding='utf-8') as f:
            json.dump(_aggregate, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"[analytics] 保存失败: {e}")


@router.post("/page")
async def track_page(req: PageView):
    """前端上报页面访问 (匿名, 仅记日期+页面)"""
    today = datetime.now().strftime('%Y-%m-%d')
    page = req.page or "unknown"
    _aggregate.setdefault(today, {})
    _aggregate[today][page] = _aggregate[today].get(page, 0) + 1
    _save()
    return {"success": True}


@router.get("/rank")
async def page_rank(days: int = 7, user: dict = Depends(get_current_active_user)):
    """热度排行 (admin): 近 N 天各页面访问量"""
    if user.get("role") != "admin":
        return {"success": False, "message": "仅管理员可查看热度排行"}
    _load()
    from datetime import timedelta
    cutoff = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
    totals = {}
    for date, pages in _aggregate.items():
        if date >= cutoff:
            for page, cnt in pages.items():
                totals[page] = totals.get(page, 0) + cnt
    rank = sorted(totals.items(), key=lambda x: -x[1])
    return {
        "success": True,
        "days": days,
        "total_views": sum(totals.values()),
        "rank": [{"page": p, "views": c} for p, c in rank],
    }


# 初始化
_load()
