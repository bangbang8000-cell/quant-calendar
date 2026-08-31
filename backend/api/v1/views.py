#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多视图聚合 API 路由
"""
import csv
import io
from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import StreamingResponse
from typing import Optional

from views_aggregator import views_aggregator

router = APIRouter(prefix="/view", tags=["多视图聚合"])


def _stocks_to_csv(stocks, view_type, date):
    """将股票列表转为CSV流"""
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["code", "name", "strategy_count", "strategies", "status", "days_count", "first_appear", "last_appear"])
    for s in stocks:
        writer.writerow([
            s.get("code", ""),
            s.get("name", ""),
            s.get("strategy_count", 0),
            "|".join(s.get("strategies", [])),
            s.get("status", ""),
            s.get("days_count", 1),
            s.get("first_appear", ""),
            s.get("last_appear", ""),
        ])
    output.seek(0)
    return output


@router.get("/{view_type}/{date}")
async def get_view_data(
    view_type: str,
    date: str,
    status: str = "all",
    format: str = Query(default="json", description="输出格式: json 或 csv"),
):
    """
    获取多视图数据
    
    Args:
        view_type: day/week/month/year (日/周/月/年视图)
        date: 日期 YYYY-MM-DD
        status: all/new/current/out 状态筛选
        format: json (默认) 或 csv 导出
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
            if status != "all":
                result["stocks"] = [s for s in result["stocks"] if s["status"] == status]
                result["filtered_count"] = len(result["stocks"])
        
        # CSV 导出
        if format == "csv":
            csv_stream = _stocks_to_csv(result.get("stocks", []), view_type, date)
            filename = f"quant_{view_type}_{date}.csv"
            return StreamingResponse(
                csv_stream,
                media_type="text/csv; charset=utf-8-sig",
                headers={"Content-Disposition": f'attachment; filename="{filename}"'}
            )
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
