#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API v1 路由汇总
"""
from fastapi import APIRouter

from .market import router as market_router
from .market_ws import router as market_ws_router
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
from .search import router as search_router
from .setup_wizard import router as setup_router
from .chat import router as chat_router
from .feedback import router as feedback_router
from .backup import router as backup_router
from .export import router as export_router
from .audit import router as audit_router
from .system import router as system_router
from .analytics import router as analytics_router
from .portfolio import router as portfolio_router
from .openapi import router as openapi_router
from .alerts import router as alerts_router
from .strategy_research import router as strategy_research_router
from .strategy_execution import router as strategy_execution_router
from .reliability import router as reliability_router
from .quality import router as quality_router
from .data_dict import router as data_dict_router
from .lineage import router as lineage_router

# 创建 v1 路由汇总
api_router = APIRouter(prefix="/api")

# 注册各模块路由
api_router.include_router(market_router)
api_router.include_router(market_ws_router)
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
api_router.include_router(search_router)
api_router.include_router(setup_router)
api_router.include_router(chat_router)
api_router.include_router(feedback_router)
api_router.include_router(backup_router)
api_router.include_router(export_router)
api_router.include_router(audit_router)
api_router.include_router(system_router)
api_router.include_router(analytics_router)
api_router.include_router(portfolio_router)
api_router.include_router(strategy_execution_router)
# v3.17.15 (FR-3.17.15): 开放 API v2 (公开只读 + Key/Webhook 管理)
api_router.include_router(openapi_router)
# V4.0 M4-3: API v2 版本前缀 — 开放 API 的可版本化契约 (/api/v2/openapi/...), v1 (/api/openapi) 保持兼容
api_router.include_router(openapi_router, prefix="/v2")
api_router.include_router(strategy_research_router)
api_router.include_router(reliability_router)
# V5.4 T-5.4.3: 自定义预警规则
api_router.include_router(alerts_router)
api_router.include_router(quality_router)
api_router.include_router(data_dict_router)
api_router.include_router(lineage_router)

__all__ = ["api_router"]
