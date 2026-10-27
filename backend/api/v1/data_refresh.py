#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据刷新 API 路由 — 手动刷新、定时刷新配置、文件监听配置
"""
import asyncio
from fastapi import APIRouter, Depends
from typing import Dict, Any
from auth import get_admin_user

from data_parser import parser
from views_aggregator import views_aggregator
from data_refresh_config import get_config, save_config, update_refresh_status

router = APIRouter(prefix="/data-refresh", tags=["数据刷新"])

# V4.1 (FR-4.1.4): 拉取任务互斥锁 — 防并发重复拉取/重载
_pull_lock = asyncio.Lock()


@router.get("/config")
async def get_refresh_config(_: Dict = Depends(get_admin_user)):
    """获取刷新配置（含 pool_empty / first_run_pending 等引导派生字段，FR-641）"""
    from refresh_service import config_view
    return config_view()


@router.post("/config")
async def set_refresh_config(data: Dict[str, Any], _: Dict = Depends(get_admin_user)):
    """更新刷新配置（FR-641a：开启刷新需数据池非空 + 首启二次确认）"""
    from data_refresh_config import save_config_checked
    result = save_config_checked(data)
    if not result["ok"]:
        return {"success": False, "code": result["code"], "message": result["message"],
                "config": result["config"]}
    return {"success": True, "config": result["config"]}


@router.get("/log")
async def get_refresh_log(limit: int = 50, _: Dict = Depends(get_admin_user)):
    """刷新结构化日志（新→旧，FR-641 第 5 条）"""
    from refresh_service import get_recent_logs
    return {"success": True, "logs": get_recent_logs(limit)}


# ─── 6.4.2 (FR-644): 示例组合 — 一键载入 / 一键删除 ───

@router.get("/example-pool")
async def get_example_pool(_: Dict = Depends(get_admin_user)):
    """示例组合清单 (code + 中文名)"""
    from refresh_service import example_pool
    return {"success": True, "stocks": example_pool()}


@router.post("/example-pool/load")
async def load_example_pool(_: Dict = Depends(get_admin_user)):
    """把示例组合并入数据池 (去重, 不动已有标的)"""
    from refresh_service import example_codes, merge_pool
    from data_refresh_config import get_config, save_config
    cfg = get_config()
    codes = example_codes()
    cfg["stock_pool"] = merge_pool(cfg.get("stock_pool"), codes)
    saved = save_config(cfg)
    return {"success": True, "config": saved, "added": codes}


@router.delete("/example-pool")
async def drop_example_pool(_: Dict = Depends(get_admin_user)):
    """从数据池移除示例组合标的 (其余标的保留)"""
    from refresh_service import example_codes, remove_from_pool
    from data_refresh_config import get_config, save_config
    cfg = get_config()
    codes = example_codes()
    cfg["stock_pool"] = remove_from_pool(cfg.get("stock_pool"), codes)
    saved = save_config(cfg)
    return {"success": True, "config": saved, "removed": codes}



@router.post("/reload")
async def trigger_reload(_: Dict = Depends(get_admin_user)):
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
async def trigger_pull(data: Dict[str, Any] = None, _: Dict = Depends(get_admin_user)):
    """手动触发 Tushare 日线拉取 (FR-3.12.1 / V4.1 并发互斥)

    可选 body: {"stock_pool": ["000001.SZ", ...], "date": "YYYY-MM-DD", "financial": true}
    """
    data = data or {}
    if _pull_lock.locked():
        return {"success": False, "error": "已有拉取任务进行中，请稍后再试"}
    async with _pull_lock:
        return await _do_pull(data)


async def _do_pull(data: Dict[str, Any]):
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
async def get_financial_snapshot(code: str = None, _: Dict = Depends(get_admin_user)):
    """读取财务快照 (FR-3.12.1 / task 12.2)

    不带 code: 返回全部; 带 code: 返回单只财务指标
    """
    from data_pipeline import load_financial_snapshot
    snap = load_financial_snapshot()
    stocks = snap.get("stocks", {})
    if code:
        return {"success": True, "data": stocks.get(code), "meta": snap.get("generated_at")}
    return {"success": True, "data": stocks, "meta": snap.get("generated_at")}
