#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.3): API v3 OpenAPI 摘要 — 供文档站展示 v3 路径与契约"""
def v3_openapi():
    return {
        "openapi": "3.1.0",
        "version": "v3",
        "contract": {
            "success": {"success": True, "data": "payload"},
            "error": {"success": False, "error": {"code": str, "message": str, "status": int}},
        },
        "paths": [
            {"method": "GET", "path": "/api/v3/watchlist", "params": ["page", "page_size", "q"]},
            {"method": "POST", "path": "/api/v3/watchlist", "params": ["code", "name"]},
            {"method": "DELETE", "path": "/api/v3/watchlist/{code}", "params": []},
            {"method": "GET", "path": "/api/v3/evaluations", "params": ["page", "page_size", "level", "code"]},
            {"method": "GET", "path": "/api/v3/groups", "params": ["page", "page_size"]},
        ],
    }