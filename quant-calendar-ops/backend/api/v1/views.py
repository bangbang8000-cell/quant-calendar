#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多视图聚合 API 路由
"""
from fastapi import APIRouter, HTTPException
from typing import Optional

from views_aggregator import views_aggregator

router = APIRouter(prefix="/view", tags=["多视图聚合"])


@router.get("/{view_type}/{date}")
async def get_view_data(view_type: str, date: str, status: str = "all"):
    """
    获取多视图数据
    
    Args:
        view_type: day/week/month/year (日/周/月/年视图
        date: 日期 YYYY-MM-DD
        status: all/new/current/out 状态筛选
    """
    try:
        if view_type == "day":
            result = views_aggregator.get_day_view(date)
        elif view_type == "week":
            result = views_aggregator.get_week_view(date)
        elif view_type == "month":
            result = views_aggregator.get_month_view(date)
        elif view_type == "year":
            result = views_aggregator.get_year_view(date)
        else:
            raise HTTPException(status_code=400, detail="不支持的视图类型")
        
        # 给所有股票添加状态字段
        if "stocks" in result:
            for s in result["stocks"]:
                s["status"] = views_aggregator.calculate_status(s["code"], date, view_type)
            # 根据筛选条件过滤
            if status != "all":
                result["stocks"] = [s for s in result["stocks"] if s["status"] == status]
                result["filtered_count"] = len(result["stocks"])
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
