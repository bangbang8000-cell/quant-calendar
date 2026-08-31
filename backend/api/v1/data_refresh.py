#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据刷新 API 路由 — 手动刷新、定时刷新配置、文件监听配置
"""
from fastapi import APIRouter
from typing import Dict, Any

from data_parser import parser
from views_aggregator import views_aggregator
from data_refresh_config import get_config, save_config, update_refresh_status

router = APIRouter(prefix="/data-refresh", tags=["数据刷新"])


@router.get("/config")
async def get_refresh_config():
    """获取刷新配置"""
    return get_config()


@router.post("/config")
async def set_refresh_config(data: Dict[str, Any]):
    """更新刷新配置"""
    config = save_config(data)
    return {"success": True, "config": config}


@router.post("/reload")
async def trigger_reload():
    """手动触发数据重新加载"""
    try:
        parser_stats = parser.reload()
        views_stats = views_aggregator.reload()
        update_refresh_status(
            True,
            f"parser={parser_stats['dates_count']}d/{parser_stats['stocks_count']}s, "
            f"views={views_stats['dates_count']}d/{views_stats['stocks_count']}s"
        )
        return {
            "success": True,
            "parser_stats": parser_stats,
            "views_stats": views_stats
        }
    except Exception as e:
        update_refresh_status(False, str(e))
        return {"success": False, "error": str(e)}
