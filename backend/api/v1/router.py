#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API v1 路由汇总
"""
from fastapi import APIRouter

from .market import router as market_router
from .auth import router as auth_router
from .calendar import router as calendar_router
from .views import router as views_router
from .feishu import router as feishu_router
from .ai import router as ai_router
from .backtest import router as backtest_router
from .dashboard import router as dashboard_router
from .user_config import router as user_config_router
from .data_refresh import router as data_refresh_router
from .watchlist import router as watchlist_router
from .groups import router as groups_router

# 创建 v1 路由汇总
api_router = APIRouter(prefix="/api")

# 注册各模块路由
api_router.include_router(market_router)
api_router.include_router(auth_router)
api_router.include_router(calendar_router)
api_router.include_router(views_router)
api_router.include_router(feishu_router)
api_router.include_router(ai_router)
api_router.include_router(backtest_router)
api_router.include_router(dashboard_router)
api_router.include_router(user_config_router, prefix="/user")
api_router.include_router(watchlist_router)
api_router.include_router(data_refresh_router)
api_router.include_router(groups_router)

__all__ = ["api_router"]
