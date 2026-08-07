#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略回测 API 路由 (v3.9.10: 归因看板端点)
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


# ─── v3.9.10: 策略归因看板 ─────────────────────────────────────

@router.get("/attribution/{strategy_id}")
async def get_strategy_attribution(
    strategy_id: str,
    _: Dict = Depends(get_current_active_user)
):
    """
    策略归因分析 — 收益拆解 + 月度热力图数据
    
    Returns:
        - monthly_returns: 各月收益 (用于热力图)
        - equity_curve: 净值曲线
        - risk_metrics: 风险指标汇总
        - trade_analysis: 交易统计分析
    """
    try:
        import numpy as np
        from datetime import datetime

        # 运行回测获取数据
        result = backtest_engine.run_backtest(strategy_id=strategy_id)
        if not result.success:
            return {"success": False, "message": result.message}

        # 归因分析
        monthly = result.monthly_returns
        equity = result.equity_curve

        # 月度热力图数据: [{year, month, return}]
        heatmap_data = []
        for k, v in sorted(monthly.items()):
            parts = k.split('-')
            heatmap_data.append({
                "year": int(parts[0]),
                "month": int(parts[1]) if len(parts) > 1 else 0,
                "return": round(v * 100, 2)
            })

        # 净值曲线摘要 (按季度采样)
        equity_sampled = equity[::max(1, len(equity) // 60)]

        # 交易分析
        trades = result.trade_history or []
        win_trades = [t for t in trades if t.get("return", 0) > 0]
        lose_trades = [t for t in trades if t.get("return", 0) <= 0]

        trade_analysis = {
            "total": len(trades),
            "wins": len(win_trades),
            "losses": len(lose_trades),
            "win_rate": round(result.win_rate * 100, 1),
            "profit_loss_ratio": round(result.profit_loss_ratio, 2) if result.profit_loss_ratio else 0,
            "avg_win_return": round(np.mean([t.get("return", 0) for t in win_trades]) * 100, 2) if win_trades else 0,
            "avg_loss_return": round(np.mean([t.get("return", 0) for t in lose_trades]) * 100, 2) if lose_trades else 0,
            "turnover_rate": round(result.turnover_rate * 100, 1) if result.turnover_rate else 0,
        }

        return {
            "success": True,
            "data": {
                "strategy_id": strategy_id,
                "period": f"{result.start_date} ~ {result.end_date}",
                "summary": backtest_engine.get_backtest_summary(result),
                "heatmap_data": heatmap_data,
                "equity_sampled": equity_sampled,
                "trade_analysis": trade_analysis,
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"归因分析失败: {e}")


@router.get("/compare")
async def compare_strategies(
    _: Dict = Depends(get_current_active_user)
):
    """
    多策略对比 — 各策略绩效指标横向对比
    """
    try:
        from data_parser import parser as dp
        dates = dp.get_available_dates()
        if not dates:
            return {"success": False, "message": "无可用数据"}

        strategies = dp.get_all_strategies()
        if not strategies:
            return {"success": False, "message": "无可用策略"}

        comparison = []
        for sid, sdata in strategies.items():
            try:
                result = backtest_engine.run_backtest(strategy_id=sid)
                if result.success:
                    comparison.append({
                        "id": sid,
                        "name": sdata.get("strategy_name", sid),
                        "total_return": round(result.total_return * 100, 2),
                        "annual_return": round(result.annual_return * 100, 2),
                        "sharpe_ratio": round(result.sharpe_ratio, 2),
                        "max_drawdown": round(result.max_drawdown * 100, 2),
                        "win_rate": round(result.win_rate * 100, 1),
                        "volatility": round(result.volatility * 100, 2),
                    })
                else:
                    comparison.append({
                        "id": sid,
                        "name": sdata.get("strategy_name", sid),
                        "error": result.message
                    })
            except Exception as e:
                comparison.append({
                    "id": sid,
                    "name": sdata.get("strategy_name", sid),
                    "error": str(e)
                })

        return {"success": True, "data": comparison}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"策略对比失败: {e}")


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
