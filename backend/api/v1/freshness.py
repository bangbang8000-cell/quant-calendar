#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据新鲜度 API — /api/meta/freshness

原位于 api/v1/glossary.py (6.1.2 B5); 术语表功能移除后独立成模块。
每表来源/最后成功/行数/期望间隔/是否过期; 系统配置 health 子页消费。
"""
from fastapi import APIRouter

router = APIRouter(prefix="/meta", tags=["数据新鲜度"])


@router.get("/freshness")
def get_freshness():
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
