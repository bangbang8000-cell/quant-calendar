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
