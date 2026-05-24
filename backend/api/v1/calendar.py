#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略日历 API 路由
"""
from fastapi import APIRouter, Depends, HTTPException
from typing import Dict, Any, List, Optional

from data_parser import parser, STRATEGY_CONFIG
from stock_info import stock_manager
from views_aggregator import views_aggregator

router = APIRouter(prefix="/calendar", tags=["策略日历"])


@router.get("/dates")
async def get_dates():
    """获取所有可用日期列表"""
    return {
        "dates": parser.get_available_dates(),
        "latest": parser.get_available_dates()[-1] if parser.get_available_dates() else None
    }


@router.get("/strategies")
async def get_strategies():
    """获取策略列表"""
    return {
        "strategies": [
            {"id": sid, "name": config["name"]}
            for sid, config in STRATEGY_CONFIG.items()
        ]
    }


@router.get("/{date}")
async def get_calendar_date(date: str, strategy: Optional[str] = None):
    """获取指定日期的持仓数据"""
    holdings = parser.get_holdings_by_date(date, strategy)
    return {
        "date": date,
        "holdings": holdings
    }


@router.get("/{date}/summary")
async def get_date_summary(date: str):
    """获取指定日期的汇总数据"""
    summary = parser.get_date_summary(date)
    return summary


@router.get("/{date}/consensus")
async def get_consensus(date: str, top_n: int = 50):
    """获取指定日期的策略共识度分析"""
    consensus = parser.get_strategy_consensus(date)[:top_n]
    return {
        "date": date,
        "consensus": consensus,
        "total_count": len(consensus)
    }


@router.get("/stock/{stock_code}")
async def get_stock_history(stock_code: str, date: Optional[str] = None):
    """获取单只股票的持仓历史 + 行情数据 + 评分"""
    history = parser.get_stock_history(stock_code)
    
    # 如果指定了日期，获取当日行情和评分
    if date:
        daily_data = stock_manager.get_daily_data(stock_code, date)
        ma_data = stock_manager.get_ma_data(stock_code, date, days=30)
        score_data = stock_manager.calculate_score(daily_data, ma_data)
        
        history["daily_data"] = daily_data
        history["ma_data"] = ma_data
        history["score_data"] = score_data
    
    return history


@router.get("/{date}/compare")
async def compare_strategies(date: str):
    """多策略对比分析"""
    holdings = parser.get_holdings_by_date(date)
    
    # 计算各种交集并集
    stock_sets = {s: set(data["stocks"]) for s, data in holdings.items()}
    strategies = list(stock_sets.keys())
    
    result = {
        "date": date,
        "holdings": holdings,
        "comparison": {}
    }
    
    if len(strategies) >= 2:
        # 全量交集
        all_intersection = set.intersection(*stock_sets.values())
        result["comparison"]["all_intersection"] = sorted(list(all_intersection))
        
        # 两两对比
        for i, s1 in enumerate(strategies):
            for s2 in strategies[i+1:]:
                set1 = stock_sets[s1]
                set2 = stock_sets[s2]
                key = f"{s1}_vs_{s2}"
                result["comparison"][key] = {
                    "intersection": sorted(list(set1 & set2)),
                    "intersection_count": len(set1 & set2),
                    "only_s1": sorted(list(set1 - set2)),
                    "only_s1_count": len(set1 - set2),
                    "only_s2": sorted(list(set2 - set1)),
                    "only_s2_count": len(set2 - set1),
                    "union": sorted(list(set1 | set2)),
                    "union_count": len(set1 | set2)
                }
    
    return result
