#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
自选股 API — per-user 隔离
数据文件: data/users/{username}/watchlist.json
"""
import json
import os
from datetime import datetime
from fastapi import APIRouter, HTTPException, Depends
from auth import get_current_active_user
from paths import DATA_DIR

router = APIRouter(prefix="/watchlist", tags=["自选股"])

BASE_USERS_DIR = os.path.join(DATA_DIR, "users")


def _get_watchlist_path(username: str) -> str:
    return os.path.join(BASE_USERS_DIR, username, "watchlist.json")


def _load_watchlist(username: str) -> list:
    path = _get_watchlist_path(username)
    if os.path.exists(path):
        try:
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f).get("stocks", [])
        except Exception:
            pass
    return []


def _save_watchlist(username: str, stocks: list):
    user_dir = os.path.join(BASE_USERS_DIR, username)
    os.makedirs(user_dir, exist_ok=True)
    with open(_get_watchlist_path(username), 'w', encoding='utf-8') as f:
        json.dump({"stocks": stocks, "updated_at": datetime.now().isoformat()}, f, ensure_ascii=False, indent=2)


@router.get("")
async def get_watchlist(user: dict = Depends(get_current_active_user)):
    """获取当前用户自选列表"""
    stocks = _load_watchlist(user["username"])
    return {"success": True, "stocks": stocks, "count": len(stocks)}


@router.post("")
async def add_to_watchlist(req: dict, user: dict = Depends(get_current_active_user)):
    """添加自选股"""
    code = req.get("code", "").strip()
    name = req.get("name", "").strip()
    if not code:
        raise HTTPException(status_code=400, detail="股票代码不能为空")
    
    stocks = _load_watchlist(user["username"])
    # 去重
    existing = [s for s in stocks if s["code"] == code]
    if existing:
        return {"success": True, "message": "已在自选中", "existed": True}
    
    stocks.append({"code": code, "name": name, "added_at": datetime.now().isoformat()})
    _save_watchlist(user["username"], stocks)
    return {"success": True, "message": "已加入自选", "count": len(stocks)}


@router.delete("/{code}")
async def remove_from_watchlist(code: str, user: dict = Depends(get_current_active_user)):
    """移除自选股"""
    stocks = _load_watchlist(user["username"])
    new_stocks = [s for s in stocks if s["code"] != code]
    if len(new_stocks) == len(stocks):
        return {"success": False, "message": "未在自选中"}
    _save_watchlist(user["username"], new_stocks)
    return {"success": True, "message": "已移除自选", "count": len(new_stocks)}


@router.delete("")
async def clear_watchlist(user: dict = Depends(get_current_active_user)):
    """清空自选"""
    _save_watchlist(user["username"], [])
    return {"success": True, "message": "自选已清空"}


@router.get("/check/{code}")
async def check_watchlist(code: str, user: dict = Depends(get_current_active_user)):
    """检查股票是否已自选"""
    stocks = _load_watchlist(user["username"])
    in_list = any(s["code"] == code for s in stocks)
    return {"success": True, "in_watchlist": in_list}


# 股票搜索（从 consensus 数据中匹配）
@router.get("/stock/search")
async def search_stocks(q: str = "", user: dict = Depends(get_current_active_user)):
    """搜索股票（代码或名称模糊匹配）"""
    if len(q) < 1:
        return {"success": True, "results": []}
    
    results = []
    try:
        from views_aggregator import views_aggregator
        seen = set()
        for date_stocks in views_aggregator.daily_data.values():
            for s in date_stocks:
                code = s.get('stock', '') or s.get('code', '')
                name = s.get('name', '')
                if code in seen:
                    continue
                if q.lower() in code.lower() or (name and q in name):
                    seen.add(code)
                    results.append({"code": code, "name": name})
                if len(results) >= 20:
                    break
            if len(results) >= 20:
                break
    except Exception:
        pass
    
    return {"success": True, "results": results}


# ============================================================
# K线预加载 — 定时缓存自选股K线数据，加速弹窗展示
# ============================================================
@router.post("/kline/preload")
async def preload_watchlist_kline(
    user: dict = Depends(get_current_active_user),
    period: str = "daily",
    limit: int = 60
):
    """预加载自选股K线数据到缓存
    
    遍历用户自选股列表，逐只调用 get_kline_data 填充 MarketData 缓存。
    预加载后点击「📈 K线」按钮即可即时展示，无需等待 API 调用。
    
    Args:
        period: K线周期 (daily/weekly/monthly)
        limit: 数据条数
    """
    import logging
    logger = logging.getLogger(__name__)
    
    stocks = _load_watchlist(user["username"])
    if not stocks:
        return {"success": True, "message": "自选股为空，无需预加载", "loaded": 0, "failed": 0, "total": 0}
    
    from market_data import get_kline_data
    
    loaded = []
    failed = []
    
    for stock in stocks:
        code = stock["code"]
        try:
            data = get_kline_data(code, period, limit)
            if data and len(data) > 0:
                loaded.append({"code": code, "name": stock.get("name", ""), "bars": len(data)})
            else:
                failed.append({"code": code, "name": stock.get("name", ""), "reason": "无数据"})
        except Exception as e:
            logger.warning(f"预加载K线失败 {code}: {e}")
            failed.append({"code": code, "name": stock.get("name", ""), "reason": str(e)[:100]})
    
    return {
        "success": True,
        "message": f"预加载完成: {len(loaded)}/{len(stocks)} 成功",
        "loaded": len(loaded),
        "failed": len(failed),
        "total": len(stocks),
        "details": {"loaded": loaded, "failed": failed}
    }
