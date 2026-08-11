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


@router.post("/pull")
async def trigger_pull(data: Dict[str, Any] = None):
    """手动触发 Tushare 日线拉取 (FR-3.12.1)

    可选 body: {"stock_pool": ["000001.SZ", ...], "date": "YYYY-MM-DD", "financial": true}
    """
    data = data or {}
    try:
        from data_pipeline import run_daily_pull, run_financial_pull
        import asyncio
        result = await asyncio.to_thread(
            run_daily_pull,
            pool=data.get("stock_pool"),
            date=data.get("date"),
        )
        # 财务拉取 (FR-3.12.1 / task 12.2) — 默认与日线一并拉取
        if data.get("financial", True):
            fin_result = await asyncio.to_thread(
                run_financial_pull, pool=data.get("stock_pool"))
        else:
            fin_result = {"total": 0, "pulled": 0, "failed": 0, "skipped": True}
        # 拉取成功后刷新解析器/视图 (自动入库)
        from data_refresh_config import update_refresh_status
        if result.get("failed", 1) == 0:
            parser.reload()
            views_aggregator.reload()
            update_refresh_status(True, f"手动拉取 日线{result.get('pulled', 0)}/{result.get('total', 0)}, 财务{fin_result.get('pulled', 0)}/{fin_result.get('total', 0)}")
        else:
            update_refresh_status(False, f"手动拉取部分失败: {result.get('errors', [])[:3]}")
        return {"success": True, "result": result, "financial": fin_result}
    except Exception as e:
        update_refresh_status(False, str(e))
        return {"success": False, "error": str(e)}


@router.get("/financial")
async def get_financial_snapshot(code: str = None):
    """读取财务快照 (FR-3.12.1 / task 12.2)

    不带 code: 返回全部; 带 code: 返回单只财务指标
    """
    from data_pipeline import load_financial_snapshot
    snap = load_financial_snapshot()
    stocks = snap.get("stocks", {})
    if code:
        return {"success": True, "data": stocks.get(code), "meta": snap.get("generated_at")}
    return {"success": True, "data": stocks, "meta": snap.get("generated_at")}
