#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
仪表盘 API 路由
"""
from fastapi import APIRouter, HTTPException

from dashboard_api import analyzer
from data_parser import parser

router = APIRouter(tags=["仪表盘"])


@router.get("/dates")
async def get_available_dates():
    """获取所有可用的交易日列表"""
    try:
        dates = parser.get_available_dates()
        return {
            "success": True,
            "data": {
                "dates": dates,
                "total": len(dates),
                "latest": dates[-1] if dates else None
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/dashboard")
async def get_dashboard_overview():
    """获取仪表盘总览数据"""
    try:
        data = analyzer.get_overview()
        return {
            "success": True,
            "data": data
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
