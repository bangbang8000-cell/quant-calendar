#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.3): API v3 公共 — 分页/过滤/错误码契约 (api/v3)

统一契约:
- 成功: {"success": true, "data": {items, page, page_size, total, pages}}
- 错误: {"success": false, "error": {code, message, status}}
- 分页: page>=1, page_size in [1..200], 越界自动钳制
"""


def clamp_page(page):
    try:
        p = int(page)
    except (TypeError, ValueError):
        p = 1
    return max(1, p)


def clamp_page_size(page_size, max_page_size=200):
    try:
        ps = int(page_size)
    except (TypeError, ValueError):
        ps = 20
    return min(max(1, ps), max_page_size)


def paginate(items, page=1, page_size=20, max_page_size=200):
    """统一分页 → {items, page, page_size, total, pages} (返回切片副本)"""
    page = clamp_page(page)
    page_size = clamp_page_size(page_size, max_page_size)
    total = len(items)
    start = (page - 1) * page_size
    end = start + page_size
    return {
        "items": list(items[start:end]),
        "page": page,
        "page_size": page_size,
        "total": total,
        "pages": (total + page_size - 1) // page_size if total else 0,
    }


def filter_contains(items, key, q):
    """大小写不敏感子串过滤 (q 为空返回原列表)"""
    if not q:
        return items
    ql = str(q).lower()
    return [it for it in items if ql in str(it.get(key, "")).lower()]
