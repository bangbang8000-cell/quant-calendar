#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.5 T-5.5.3/5.5.2: 报表中心 API (/api/reports)

- GET/POST /api/reports/subscriptions: 报表订阅 CRUD
- DELETE /api/reports/subscriptions/{id}
- POST /api/reports/subscriptions/{id}/run: 手动触发
- GET /api/reports/generate: 生成报表 markdown (区块可注入 data 便于前端聚合)
- GET /api/reports/export: 导出 PDF/Excel 文件下载
"""
import logging
import os
from datetime import datetime
from typing import Any, Dict

from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse

from auth import get_current_active_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/reports", tags=["报表中心"])


@router.get("/subscriptions")
async def list_subs(user: dict = Depends(get_current_active_user)):
    from report_subscribe import list_report_subscriptions
    return {"success": True, "subscriptions":
            list_report_subscriptions(user["username"])}


@router.post("/subscriptions")
async def create_sub(body: Dict[str, Any],
                     user: dict = Depends(get_current_active_user)):
    from report_subscribe import create_report_subscription
    try:
        sub = create_report_subscription(
            user["username"], body.get("schedule", "daily"),
            body.get("blocks"), body.get("channels"), body.get("recipients"),
            bool(body.get("enabled", True)))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return {"success": True, "subscription": sub}


@router.delete("/subscriptions/{sub_id}")
async def delete_sub(sub_id: int, user: dict = Depends(get_current_active_user)):
    from report_subscribe import delete_report_subscription
    if not delete_report_subscription(sub_id):
        raise HTTPException(status_code=404, detail="订阅不存在")
    return {"success": True, "deleted": sub_id}


@router.post("/subscriptions/{sub_id}/run")
async def run_sub(sub_id: int, body: Dict[str, Any],
                  user: dict = Depends(get_current_active_user)):
    """手动触发订阅生成投递 (通知中心通道需配置)。"""
    from report_subscribe import generate_and_dispatch, _sub_by_id
    sub = _sub_by_id(sub_id)
    if not sub:
        raise HTTPException(status_code=404, detail="订阅不存在")
    import datetime as _dt
    today = body.get("date") or _dt.date.today().isoformat()
    result = generate_and_dispatch(sub, date=today)
    return {"success": True, **result}


@router.get("/generate")
async def generate(date: str = "", blocks: str = "",
                   user: dict = Depends(get_current_active_user)):
    """生成报表 markdown。blocks 逗号分隔; 空 → 默认三区块。"""
    from report_center import render_report
    if not date:
        date = datetime.now().strftime("%Y-%m-%d")
    block_list = [b.strip() for b in blocks.split(",") if b.strip()] or None
    title = "量化选股日报" if len(block_list or []) <= 3 else "量化选股报表"
    out = render_report(title, block_list or ["period", "strategy", "evaluate"],
                        date)
    return {"success": True, "title": title, "date": date,
            "content": out["content"], "stats": out["stats"]}


@router.get("/export")
async def export(format: str = "pdf", date: str = "",
                 user: dict = Depends(get_current_active_user)):
    """导出报表 (pdf/excel), 返回文件下载。"""
    from report_center import render_report
    from report_export import export_report
    from paths import DATA_DIR
    if not date:
        date = datetime.now().strftime("%Y-%m-%d")
    out = render_report("量化选股日报", ["period", "strategy", "evaluate"], date)
    fmt = (format or "pdf").lower()
    fname = f"report_{date}.{('pdf' if fmt == 'pdf' else 'xlsx')}"
    path = os.path.join(DATA_DIR, fname)
    try:
        export_report(out["content"], fmt, path)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return FileResponse(path, filename=fname, media_type=(
        "application/pdf" if fmt == "pdf" else
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
