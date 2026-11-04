#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""路由清单辅助（v7.3.3）

背景：`APIRouter.routes` 上取 `.path` 在 fastapi/starlette 各版本上表现不同
（CI 用 fastapi 0.162 / starlette 1.10 时，测试里取到的是空串集合 → 全部误判失败）。
改为以 **OpenAPI 契约**为准：`app.openapi()['paths']` 就是外部可见的路径集合，
不依赖内部对象结构，跨版本稳定。
"""


def api_paths():
    """返回应用对外暴露的全部路径集合（取自 OpenAPI schema）。"""
    from main_new import app  # noqa: PLC0415 — 延迟导入，避免影响未装依赖的用例
    schema = app.openapi() or {}
    return set((schema.get('paths') or {}).keys())


def has_paths(*paths):
    """断言这些路径都已注册；返回缺失列表（空表示全部存在）。"""
    got = api_paths()
    return [p for p in paths if p not in got]
