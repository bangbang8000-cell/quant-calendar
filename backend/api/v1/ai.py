#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 评估 API
"""
import json
import logging
import asyncio
from typing import Dict, Any, List, Optional

from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse

from ai_evaluator import ai_evaluator
from auth import get_admin_user, get_current_active_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/ai", tags=["AI 评估"])


@router.post("/evaluate")
async def ai_evaluate_stock(req: Dict[str, str], user: Dict = Depends(get_current_active_user)):
    """AI 评估单只股票"""
    try:
        stock_code = req.get("stock_code", "")
        stock_name = req.get("stock_name", stock_code)
        strategy = req.get("strategy", "default")
        result = await ai_evaluator.evaluate_stock(stock_code, stock_name, None, user["username"], strategy)
        return {"success": True, "data": result}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/batch-evaluate")
async def ai_batch_evaluate(req: Dict[str, List[str]], user: Dict = Depends(get_current_active_user)):
    """批量 AI 评估股票 (一次性; 保留兼容 scheduler/旧客户端)"""
    try:
        stock_codes = req.get("stock_codes", [])
        results = await ai_evaluator.batch_evaluate(stock_codes, None, 5, user["username"])
        return {"success": True, "data": results}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/batch-evaluate/stream")
async def ai_batch_evaluate_stream(req: Dict[str, List[str]], user: Dict = Depends(get_current_active_user)):
    """批量 AI 评估 — SSE 流式 (v3.15: 逐只完成后实时推送, 修复前端进度 0→N 瞬跳)"""
    stock_codes = req.get("stock_codes", [])

    async def sse_gen():
        async for evt in ai_evaluator.batch_evaluate_stream(stock_codes, None, 5, user["username"]):
            yield f"data: {json.dumps(evt, ensure_ascii=False)}\n\n"

    return StreamingResponse(sse_gen(), media_type="text/event-stream")


@router.post("/evaluate-index")
async def ai_evaluate_index(req: Dict[str, Any], _: Dict = Depends(get_current_active_user)):
    """AI 评估指数

    Args:
        index_code: 指数代码 (如 000001.SH)
        index_name: 指数名称 (如 上证综指)
        current_price: 当前点位 (可选)
        pct_chg: 涨跌幅 (可选)
    """
    try:
        index_code = req.get("index_code", "")
        index_name = req.get("index_name", index_code)
        current_price = req.get("current_price")
        pct_chg = req.get("pct_chg")
        # v3.8.1: evaluate_index 为同步函数(内部含外部行情API调用), 必须 to_thread 避免阻塞事件循环
        result = await asyncio.to_thread(ai_evaluator.evaluate_index, index_code, index_name, current_price, pct_chg)
        return {"success": True, "data": result}
    except Exception as e:
        logger.error(f"指数评估失败: {e}")
        return {"success": False, "message": str(e)}


@router.get("/history")
async def get_ai_history(limit: int = 50, offset: int = 0, user: Dict = Depends(get_current_active_user)):
    """获取当前用户的评估历史 (v3.17.9 FR-3.17.9: 支持 limit/offset 分页, 返回 total 供前端懒加载)"""
    total = ai_evaluator.count_history(user["username"])
    return {
        "success": True,
        "data": ai_evaluator.get_history(user["username"], limit, offset),
        "total": total,
        "limit": limit,
        "offset": offset,
    }


@router.delete("/history/{record_id}")
async def delete_ai_history(record_id: str, user: Dict = Depends(get_current_active_user)):
    """删除单条评估记录"""
    try:
        success = ai_evaluator.delete_history(user["username"], record_id)
        return {"success": success, "message": "删除成功" if success else "删除失败"}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.get("/track")
async def get_ai_track(window: Optional[int] = None, user: Dict = Depends(get_current_active_user)):
    """AI 评估命中率追踪（决策复盘闭环） FR-3.17.6

    对照评估日后 N 日（5/10/20 交易日）实际涨跌与评级方向，统计命中率（总体/分模型/分评级）。
    Args:
        window: 可选 5/10/20，指定时仅返回该窗口统计；缺省返回全部窗口。
    """
    try:
        from eval_track import get_track_summary
        summary = get_track_summary(user["username"], window=window)
        return {"success": True, "data": summary}
    except Exception as e:
        logger.error(f"评估命中率追踪失败: {e}")
        return {"success": False, "message": str(e)}


@router.post("/fact-check/audit")
async def run_fact_check_audit(user: Dict = Depends(get_current_active_user)):
    """FR-3.18.9: 手动触发 AI 事实护栏抽查, 产出《事实护栏审计报告》"""
    from fact_check import run_daily_audit, save_audit_report
    try:
        report = run_daily_audit()
        save_audit_report(report)
        return {"success": True, "data": report}
    except Exception as e:
        logger.error(f"事实护栏抽查失败: {e}")
        return {"success": False, "message": str(e)}


@router.get("/fact-check/latest")
async def get_fact_check_latest(user: Dict = Depends(get_current_active_user)):
    """FR-3.18.9: 最近一份事实护栏审计报告"""
    from fact_check import get_latest_audit
    return {"success": True, "data": get_latest_audit()}


@router.get("/history/last/{stock_code}")
async def get_last_evaluation(stock_code: str, user: Dict = Depends(get_current_active_user)):
    """获取某只股票的最近一次评估记录"""
    try:
        record = ai_evaluator.get_last_evaluation(user["username"], stock_code)
        if record:
            return {"success": True, "data": record}
        return {"success": True, "data": None}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/history/batch-delete")
async def batch_delete_ai_history(req: Dict[str, List[str]], user: Dict = Depends(get_current_active_user)):
    """批量删除评估记录"""
    try:
        ids = req.get("ids", [])
        success_count = 0
        for record_id in ids:
            if ai_evaluator.delete_history(user["username"], record_id):
                success_count += 1
        return {
            "success": True,
            "message": f"成功删除 {success_count}/{len(ids)} 条记录",
            "deleted_count": success_count
        }
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.get("/auto-config")
async def get_auto_evaluate_config():
    """获取自动评估配置（无需登录）"""
    try:
        config = ai_evaluator.get_auto_config()
        return {"success": True, "data": config}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/auto-config")
async def save_auto_evaluate_config(config: Dict[str, Any]):
    """保存自动评估配置"""
    try:
        ai_evaluator.save_auto_config(config)
        return {"success": True, "message": "配置已保存"}
    except Exception as e:
        return {"success": False, "message": str(e)}

@router.get("/config")
async def get_ai_config(_: Dict = Depends(get_admin_user)):
    """获取 AI 配置"""
    try:
        return {"success": True, "data": ai_evaluator.config}
    except Exception as e:
        return {"success": False, "message": str(e)}

# v3.5.0-T5: 策略推荐
@router.get("/recommend-strategies")
async def recommend_strategies(user: Dict = Depends(get_current_active_user)):
    """基于自选股风格推荐策略"""
    username = user.get("username", "default")
    result = ai_evaluator.recommend_strategies(username=username)
    return result

# v3.5.0-T6: AI 用量统计
@router.get("/usage-stats")
async def get_usage_stats(_: Dict = Depends(get_admin_user)):
    """AI 调用用量统计 (admin)"""
    return {"success": True, **ai_evaluator.get_usage_stats()}

@router.post("/config")
async def save_ai_config(config: Dict[str, Any], _: Dict = Depends(get_admin_user)):
    """保存 AI 配置"""
    try:
        ai_evaluator.save_config(config)
        return {"success": True, "message": "AI配置已保存"}
    except Exception as e:
        return {"success": False, "message": str(e)}

@router.get("/test")
async def test_ai_api(_: Dict = Depends(get_current_active_user)):
    """测试 AI API 连接"""
    result = ai_evaluator.test_connection()
    return result

# ─── 模型管理 API (v3.14 厂商化) ──────────────────────────────

def _coerce_timeout(req: Dict[str, Any]):
    """body 里的 timeout 可能是 JSON 数字或字符串, 统一转 int (FastAPI 不强制, 直接经字典读取)"""
    raw = req.get("timeout")
    if raw in (None, ""):
        return None
    try:
        return int(raw)
    except (TypeError, ValueError):
        return None


@router.get("/models")
async def get_models():
    """获取厂商模型配置 (v3.14: {"vendors":[...]}, 无需登录; V4.0 api_key 掩码展示)"""
    try:
        from secret_utils import mask_secret
        models = ai_evaluator.get_models()
        for v in models.get("vendors", []):
            if v.get("api_key"):
                v["api_key"] = mask_secret(v["api_key"])
        return {"success": True, "data": models}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/models")
async def save_models(req: Dict[str, Any]):
    """保存厂商模型配置 ({"vendors":[...]}, 数组顺序 = 全局优先级)"""
    try:
        models = ai_evaluator.update_models(req)
        return {"success": True, "data": models, "message": "模型配置已保存"}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/models/test")
async def test_vendor_model(req: Dict[str, Any]):
    """探测厂商下指定模型连接 (body 传参, 模型名可含 /; 未保存厂商支持内联 base_url/api_key)"""
    try:
        vendor_key = req.get("vendor_key", "")
        model_name = req.get("model", "")
        result = ai_evaluator.test_vendor_model(
            vendor_key, model_name,
            base_url=req.get("base_url"), api_key=req.get("api_key"), timeout=_coerce_timeout(req),
        )
        return result
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/models/list")
async def list_vendor_models(req: Dict[str, Any]):
    """调 {base_url}/models 拉取厂商可用模型名列表 (未保存厂商支持内联 base_url/api_key)"""
    try:
        vendor_key = req.get("vendor_key", "")
        result = ai_evaluator.list_vendor_models(
            vendor_key,
            base_url=req.get("base_url"), api_key=req.get("api_key"), timeout=_coerce_timeout(req),
        )
        return result
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.get("/catalog")
async def get_vendor_catalog():
    """预置厂商目录 (唯一事实源, 新增厂商下拉 + 模型名建议)"""
    try:
        catalog = ai_evaluator.get_catalog()
        return {"success": True, "data": catalog}
    except Exception as e:
        return {"success": False, "message": str(e)}
