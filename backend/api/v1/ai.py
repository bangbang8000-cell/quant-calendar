#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 智能评估 API 路由
"""
from fastapi import APIRouter, Depends, HTTPException
from typing import Dict, Any, List, Optional

from ai_evaluator import ai_evaluator
from auth import get_admin_user, get_current_active_user

router = APIRouter(prefix="/ai", tags=["AI 智能评估"])


@router.post("/evaluate")
async def ai_evaluate_stock(req: Dict[str, str], _: Dict = Depends(get_current_active_user)):
    """AI 评估单只股票
    
    Args:
        stock_code: 股票代码
        stock_name: 股票名称 (可选)
    """
    try:
        stock_code = req.get("stock_code", "")
        stock_name = req.get("stock_name", stock_code)
        result = ai_evaluator.evaluate_stock(stock_code, stock_name)
        return {"success": True, "data": result}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/batch-evaluate")
async def ai_batch_evaluate(req: Dict[str, List[str]], _: Dict = Depends(get_current_active_user)):
    """批量 AI 评估股票
    
    Args:
        stock_codes: 股票代码列表
    """
    try:
        stock_codes = req.get("stock_codes", [])
        results = ai_evaluator.batch_evaluate(stock_codes)
        return {"success": True, "data": results}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.get("/history")
async def get_ai_history(limit: int = 50, _: Dict = Depends(get_current_active_user)):
    """获取评估历史记录"""
    return {
        "success": True,
        "data": ai_evaluator.get_history(limit)
    }


@router.delete("/history/{record_id}")
async def delete_ai_history(record_id: str, _: Dict = Depends(get_current_active_user)):
    """删除单条评估记录"""
    try:
        success = ai_evaluator.delete_history(record_id)
        return {"success": success, "message": "删除成功" if success else "删除失败"}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/history/batch-delete")
async def batch_delete_ai_history(req: Dict[str, List[str]], _: Dict = Depends(get_current_active_user)):
    """批量删除评估记录"""
    try:
        ids = req.get("ids", [])
        success_count = 0
        for record_id in ids:
            if ai_evaluator.delete_history(record_id):
                success_count += 1
        return {
            "success": True,
            "message": f"成功删除 {success_count}/{len(ids)} 条记录",
            "deleted_count": success_count
        }
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.get("/auto-config")
async def get_auto_evaluate_config(_: Dict = Depends(get_admin_user)):
    """获取自动评股配置"""
    try:
        config = ai_evaluator.get_auto_config()
        return {"success": True, "data": config}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.post("/auto-config")
async def save_auto_evaluate_config(config: Dict[str, Any], _: Dict = Depends(get_admin_user)):
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
