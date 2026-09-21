#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
6.1.1 (A1): 量化术语词条 API — /api/meta/glossary

公开只读; 前端浮层与术语表页消费; 中文为语义唯一来源, 本地化在 i18n。
"""
from fastapi import APIRouter, Query

from glossary_data import GLOSSARY, GLOSSARY_BY_KEY

router = APIRouter(prefix="/meta", tags=["术语"])

_CATEGORIES = ["宏观", "策略", "因子", "技术", "短线", "数据源", "产品"]


@router.get("/glossary")
def get_glossary(category: str | None = Query(default=None, description="分类过滤")):
    items = GLOSSARY
    if category:
        items = [g for g in items if g["category"] == category]
    return {
        "success": True,
        "count": len(items),
        "total": len(GLOSSARY),
        "categories": _CATEGORIES,
        "items": items,
    }


@router.get("/glossary/{key}")
def get_glossary_item(key: str):
    item = GLOSSARY_BY_KEY.get(key)
    if not item:
        return {"success": False, "error": f"词条不存在: {key}"}
    return {"success": True, "item": item}


@router.get("/freshness")
def get_freshness():
    """6.1.2 (B5): 数据表新鲜度 — 每表来源/最后成功/行数/期望间隔/是否过期"""
    from data_sources._health import get_health_metrics
    from freshness import build_freshness, DEFAULT_EXPECTED_HOURS
    items = build_freshness(get_health_metrics())
    stale_count = sum(1 for i in items if i["stale"])
    return {
        "success": True,
        "default_expected_hours": DEFAULT_EXPECTED_HOURS,
        "count": len(items),
        "stale_count": stale_count,
        "items": items,
    }
