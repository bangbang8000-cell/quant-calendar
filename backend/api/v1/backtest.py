#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略回测 API 路由
"""
from fastapi import APIRouter, Depends, HTTPException
from typing import Dict, Any, List, Optional

from backtest import backtest_engine
from auth import get_current_active_user

router = APIRouter(prefix="/backtest", tags=["策略回测"])


@router.post("/{strategy_id}")
async def run_strategy_backtest(
    strategy_id: str,
    params: Dict[str, Any],
    _: Dict = Depends(get_current_active_user)
):
    """
    运行单策略回测
    
    Args:
        strategy_id: 策略ID
        params: 回测参数
            - start_date: 开始日期 (YYYY-MM-DD)
            - end_date: 结束日期 (YYYY-MM-DD)
            - initial_capital: 初始资金
            - commission_rate: 手续费率
            - slippage: 滑点率
    """
    try:
        result = backtest_engine.run_backtest(
            strategy_id=strategy_id,
            start_date=params.get("start_date"),
            end_date=params.get("end_date"),
            initial_capital=params.get("initial_capital", 100000.0),
            commission_rate=params.get("commission_rate", 0.0003),
            slippage=params.get("slippage", 0.001)
        )
        
        summary = backtest_engine.get_backtest_summary(result)
        return {
            "success": result.success,
            "summary": summary,
            "equity_curve": result.equity_curve,
            "monthly_returns": result.monthly_returns,
            "message": result.message
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"回测失败: {e}")


@router.post("/multi")
async def run_multi_strategy_backtest(
    params: Dict[str, Any],
    _: Dict = Depends(get_current_active_user)
):
    """
    运行多策略组合回测
    
    Args:
        params: 回测参数
            - strategy_ids: 策略ID列表
            - start_date: 开始日期
            - end_date: 结束日期
            - weights: 权重字典 (可选)
    """
    try:
        result = backtest_engine.run_multi_strategy_backtest(
            strategy_ids=params.get("strategy_ids", []),
            start_date=params.get("start_date"),
            end_date=params.get("end_date"),
            weights=params.get("weights")
        )
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"多策略回测失败: {e}")


@router.get("/metrics/{strategy_id}")
async def get_backtest_metrics(
    strategy_id: str,
    _: Dict = Depends(get_current_active_user)
):
    """获取策略回测核心指标（简化版）"""
    try:
        result = backtest_engine.run_backtest(strategy_id)
        if not result.success:
            return {"success": False, "message": result.message}
        
        return {
            "success": True,
            "data": backtest_engine.get_backtest_summary(result)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"获取回测指标失败: {e}")


@router.get("/compare")
async def compare_strategies(
    strategy_ids: str,
    _: Dict = Depends(get_current_active_user)
):
    """
    多策略对比分析
    
    Args:
        strategy_ids: 策略ID, 逗号分隔 (如 "strategy1,strategy2")
    """
    try:
        ids = [s.strip() for s in strategy_ids.split(",")]
        results = {}
        
        for sid in ids:
            result = backtest_engine.run_backtest(sid)
            if result.success:
                results[sid] = backtest_engine.get_backtest_summary(result)
        
        return {
            "success": True,
            "data": {
                "strategies": results,
                "compared_count": len(results)
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"策略对比失败: {e}")
