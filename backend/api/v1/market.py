#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
市场行情 API 路由
"""
from fastapi import APIRouter, Depends
from typing import Dict, Any, Optional

from auth import get_admin_user
from market_data import market_data, get_kline_data
from merrill_clock import merrill_clock

router = APIRouter(prefix="/market", tags=["市场行情"])


@router.get("/overview")
async def get_market_overview(date: Optional[str] = None):
    """获取市场概览 - 各主要指数行情"""
    return market_data.get_market_overview(date)


@router.get("/merrill-clock")
async def get_merrill_clock():
    """获取美林时钟 - 当前经济周期判断"""
    return merrill_clock.determine_stage()


@router.get("/merrill-clock/stage/{stage_name}")
async def get_merrill_stage_detail(stage_name: str):
    """获取指定经济周期阶段的详细信息"""
    detail = merrill_clock.get_stage_detail(stage_name)
    if detail:
        return {"success": True, "data": detail}
    return {"success": False, "message": f"未知阶段名称: {stage_name}"}


@router.get("/merrill-clock/history")
async def get_merrill_history():
    """获取美林时钟历史阶段切换记录"""
    try:
        import json
        from paths import MERRILL_HISTORY_FILE
        with open(MERRILL_HISTORY_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return {"success": True, "data": data}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.get("/kline/{ts_code}")
async def get_kline(ts_code: str, period: str = "daily", limit: int = 60):
    """获取K线数据（支持股票和指数）
    
    Args:
        ts_code: 股票/指数代码
        period: 周期: daily=日线, weekly=周线, monthly=月线
        limit: 返回条数
    """
    data = get_kline_data(ts_code, period, limit)
    if data:
        return {"success": True, "data": data, "period": period}
    return {"success": False, "message": "获取K线数据失败"}


# v1.3.0: Tushare 数据源配置 API
@router.get('/tushare/config')
async def get_tushare_config(_: Dict = Depends(get_admin_user)):
    """获取 Tushare 配置"""
    from config import settings
    return {
        "success": True,
        "config": {
            "token": settings.TUSHARE_TOKEN if settings.TUSHARE_TOKEN else "",
            "endpoint": settings.TUSHARE_ENDPOINT,
            "timeout": settings.TUSHARE_TIMEOUT
        }
    }

@router.post('/tushare/config')
async def save_tushare_config(req: Dict[str, Any], _: Dict = Depends(get_admin_user)):
    """保存 Tushare 配置"""
    from config import settings
    
    if 'token' in req:
        # 如果提交的 token 以 *** 结尾，说明是掩码版本，保留原值
        submitted = req['token']
        if submitted.endswith('***') and settings.TUSHARE_TOKEN and submitted.startswith(settings.TUSHARE_TOKEN[:8]):
            pass  # 保留原 token
        elif submitted:
            settings.TUSHARE_TOKEN = submitted
    if 'endpoint' in req:
        settings.TUSHARE_ENDPOINT = req['endpoint']
    if 'timeout' in req:
        settings.TUSHARE_TIMEOUT = req['timeout']
    
    # 同步更新 market_data 的 token
    try:
        from market_data import market_data
        market_data.update_tushare_token(settings.TUSHARE_TOKEN)
    except Exception as e:
        pass
    
    return {
        "success": True,
        "message": "配置已保存"
    }

@router.post('/tushare/test')
async def test_tushare_config(_: Dict = Depends(get_admin_user)):
    """测试 Tushare 连接"""
    try:
        from market_data import market_data
        result = market_data.test_tushare_connection()
        return result
    except Exception as e:
        return {
            "success": False,
            "message": f"测试失败: {str(e)}",
            "available": False
        }

@router.post('/tushare/sync')
async def sync_tushare_data(_: Dict = Depends(get_admin_user)):
    """从 Tushare 同步股票基础信息（股票代码、名称等）"""
    try:
        from stock_info import stock_manager
        success = stock_manager.fetch_from_tushare()
        if success:
            return {
                "success": True,
                "message": f"✅ 同步成功，共 {len(stock_manager.stock_map)} 只股票"
            }
        else:
            return {
                "success": False,
                "message": "❌ 同步失败，请检查 Tushare Token 和网络连接"
            }
    except Exception as e:
        return {
            "success": False,
            "message": f"❌ 同步异常: {str(e)}"
        }