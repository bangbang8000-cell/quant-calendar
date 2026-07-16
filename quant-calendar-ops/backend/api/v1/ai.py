#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 评估 API
"""
from fastapi import APIRouter, Depends, HTTPException
import logging
import asyncio
from typing import Dict, Any, List, Optional

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
        result = await asyncio.to_thread(
            ai_evaluator.evaluate_stock, stock_code, stock_name, None, user["username"], strategy
        )
        return {"success": True, "data": result}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/batch-evaluate")
async def ai_batch_evaluate(req: Dict[str, List[str]], user: Dict = Depends(get_current_active_user)):
    """批量 AI 评估股票"""
    try:
        stock_codes = req.get("stock_codes", [])
        results = await asyncio.to_thread(ai_evaluator.batch_evaluate, stock_codes, None, 5, user["username"])
        return {"success": True, "data": results}
    except Exception as e:
        return {"success": False, "message": str(e)}


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
        result = ai_evaluator.evaluate_index(index_code, index_name, current_price, pct_chg)
        return {"success": True, "data": result}
    except Exception as e:
        logger.error(f"指数评估失败: {e}")
        return {"success": False, "message": str(e)}


@router.get("/history")
async def get_ai_history(limit: int = 50, user: Dict = Depends(get_current_active_user)):
    """获取当前用户的评估历史"""
    return {
        "success": True,
        "data": ai_evaluator.get_history(user["username"], limit)
    }


@router.delete("/history/{record_id}")
async def delete_ai_history(record_id: str, user: Dict = Depends(get_current_active_user)):
    """删除单条评估记录"""
    try:
        success = ai_evaluator.delete_history(user["username"], record_id)
        return {"success": success, "message": "删除成功" if success else "删除失败"}
    except Exception as e:
        return {"success": False, "message": str(e)}


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
    """获取自动评股配置（无需登录）"""
    try:
        config = ai_evaluator.get_auto_config()
        return {"success": True, "data": config}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/auto-config")
async def save_auto_evaluate_config(config: Dict[str, Any]):
    """保存自动评股配置"""
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

# ─── 模型管理 API ──────────────────────────────────────────────

@router.get("/models")
async def get_models():
    """获取所有 AI 模型配置（无需登录）"""
    try:
        models = ai_evaluator.get_models()
        return {"success": True, "data": models}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/models")
async def save_models(req: Dict[str, Any]):
    """保存模型配置列表"""
    try:
        models_data = req.get("models", [])
        models = ai_evaluator.update_models(models_data)
        return {"success": True, "data": models, "message": "模型配置已保存"}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/models/test/{model_id}")
async def test_model(model_id: str):
    """探测单个模型连接（无需登录）"""
    try:
        result = ai_evaluator.test_model_connection(model_id)
        return result
    except Exception as e:
        return {"success": False, "message": str(e)}
