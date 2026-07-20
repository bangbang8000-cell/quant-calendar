#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
全局搜索 API (v1.10)
支持按股票代码/名称模糊搜索
"""
from fastapi import APIRouter, Query
from typing import Optional

router = APIRouter(prefix="/search", tags=["搜索"])


@router.get("")
async def search(q: str = Query(default="", min_length=1, description="搜索关键词")):
    """全局搜索：股票代码/名称模糊匹配
    
    Returns:
        results: [{code, name, source}] 最多20条
    """
    if not q or len(q.strip()) < 1:
        return {"success": True, "results": [], "query": q}

    q_lower = q.strip().lower()
    results = []
    seen = set()

    # 1. 从 stock_info 搜索（代码+名称）
    try:
        from stock_info import stock_manager
        for code, name in stock_manager.stock_map.items():
            if q_lower in code.lower() or q_lower in name.lower():
                if code not in seen:
                    seen.add(code)
                    results.append({
                        "code": code,
                        "name": name,
                        "source": "stock_db"
                    })
                if len(results) >= 20:
                    break
    except Exception:
        pass

    # 2. 如果结果不足20条，从 consensus 数据补充
    if len(results) < 20:
        try:
            from views_aggregator import views_aggregator
            for date_stocks in views_aggregator.daily_data.values():
                for s in date_stocks:
                    code = s.get('stock', '') or s.get('code', '')
                    name = s.get('name', '')
                    if code in seen:
                        continue
                    if q_lower in code.lower() or (name and q_lower in name.lower()):
                        seen.add(code)
                        results.append({
                            "code": code,
                            "name": name,
                            "source": "consensus"
                        })
                    if len(results) >= 20:
                        break
                if len(results) >= 20:
                    break
        except Exception:
            pass

    return {
        "success": True,
        "results": results[:20],
        "query": q,
        "total": len(results)
    }
