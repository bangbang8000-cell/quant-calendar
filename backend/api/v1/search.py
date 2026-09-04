#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
全局搜索 API (v1.10)
支持按股票代码/名称模糊搜索
"""
import logging

from fastapi import APIRouter, Query
from functools import lru_cache

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/search", tags=["搜索"])


@lru_cache(maxsize=8192)
def _pinyin_initials(name: str) -> str:
    """名称 → 拼音首字母 (如 中国神华 → zgsh), 模块级缓存避免重复计算"""
    try:
        from pypinyin import lazy_pinyin
        return ''.join(p[0] for p in lazy_pinyin(name)).lower()
    except Exception:
        return ''


# ─── V5.3.0 (T-5.3.3.3 / FR-5.3.3.3): 搜索分组增强 ───────────────────────
# 板块/题材索引: 名称 -> [成分股代码]。生产用 sector_flow 缓存动态刷新;
# 测试可注入。为空时板块域返回空组(不阻断股票检索)。
SECTOR_INDEX: dict = {}

# 策略索引: 策略 id -> 展示名。生产用 strategy_governance 读取; 测试可注入。
STRATEGY_INDEX: dict = {}

# 股票信息管理器访问器 (T-5.3.3.3): 测试可 monkeypatch 返回 FakeStockManager
def _get_stock_manager():
    from stock_info import stock_manager
    return stock_manager


def _load_sector_index() -> dict:
    """从短线板块资金流缓存构建板块索引 (行业口径近似题材)"""
    if SECTOR_INDEX:
        return SECTOR_INDEX
    try:
        from shortterm import store as shortterm_store
        rows = shortterm_store.latest_sector_flow('行业资金流', '今日')
        out = {}
        for r in (rows or []):
            name = r.get('name') or r.get('sector')
            if name:
                out.setdefault(name, [])
        return out or {}
    except Exception:
        return {}


def _load_strategy_index() -> dict:
    """从策略纳管状态读取内置策略清单"""
    if STRATEGY_INDEX:
        return STRATEGY_INDEX
    try:
        from strategy_governance import BUILTIN_SIDS
        names = {
            'multi_factor': '多因子策略', 'sector_rotation': '行业轮动策略',
            'capital_flow': '资金流策略', 'index_enhance': '指数增强策略',
        }
        return {sid: names.get(sid, sid) for sid in BUILTIN_SIDS}
    except Exception:
        return {}


def build_grouped_results(q: str, max_items: int = 20, menu_defs: list = None) -> list:
    """分组检索: 股票 / 板块 / 策略 / 菜单。

    Returns:
        groups: [{key, label, items:[{type, code|id, name, subLabel?}]}]
    """
    q_lower = (q or '').strip().lower()
    groups = []

    # 股票域 (经 _get_stock_manager 访问, 测试可 monkeypatch)
    stocks = []
    try:
        sm = _get_stock_manager()
        for code, name in sm.stock_map.items():
            if q_lower and (q_lower in code.lower() or q_lower in name.lower()
                            or (len(q_lower) >= 2 and q_lower in _pinyin_initials(name))):
                stocks.append({"type": "stock", "code": code, "name": name, "subLabel": code})
    except Exception:
        pass
    if stocks:
        groups.append({"key": "stock", "label": "股票", "items": stocks[:max_items]})

    # 板块/题材域
    sectors = []
    for name, members in _load_sector_index().items():
        if q_lower and q_lower in name.lower():
            sectors.append({"type": "sector", "name": name,
                            "subLabel": f"{len(members)}只成分"})
    if sectors:
        groups.append({"key": "sector", "label": "板块/题材", "items": sectors[:max_items]})

    # 策略域
    strategies = []
    for sid, name in _load_strategy_index().items():
        if q_lower and (q_lower in sid.lower() or q_lower in name.lower()):
            strategies.append({"type": "strategy", "id": sid, "name": name, "subLabel": "策略"})
    if strategies:
        groups.append({"key": "strategy", "label": "策略", "items": strategies[:max_items]})

    # 菜单域 (前端 subPageNames 由调用方传入; 此处仅占位不产生结果)
    if menu_defs:
        menus = []
        for m in menu_defs:
            if q_lower and (q_lower in m.get('name', '').lower() or q_lower in m.get('key', '').lower()):
                menus.append({"type": "menu", "menuKey": m['key'], "name": m['name'], "subLabel": "页面"})
        if menus:
            groups.append({"key": "menu", "label": "菜单", "items": menus[:max_items]})

    return groups


@router.get("")
async def search(q: str = Query(default="", min_length=1, description="搜索关键词")):
    """全局搜索：股票代码/名称模糊匹配

    Returns:
        results: [{code, name, source}] 最多20条
    """
    if not q or len(q.strip()) < 1:
        return {"success": True, "results": [], "query": q}

    q_lower = q.strip().lower()
    results = []
    seen = set()

    # 1. 从 stock_info 搜索（代码+名称+拼音）
    try:
        from stock_info import stock_manager
        for code, name in stock_manager.stock_map.items():
            if q_lower in code.lower() or q_lower in name.lower() or (len(q_lower) >= 2 and q_lower in _pinyin_initials(name)):
                if code not in seen:
                    seen.add(code)
                    results.append({
                        "code": code,
                        "name": name,
                        "source": "stock_db"
                    })
                if len(results) >= 20:
                    break
    except Exception:
        logger.warning("[warn] 操作异常 (v3.4.0-T8)")
        pass

    # 2. 如果结果不足20条，从 consensus 数据补充
    if len(results) < 20:
        try:
            from views_aggregator import views_aggregator
            for date_stocks in views_aggregator.daily_data.values():
                for s in date_stocks:
                    code = s.get('stock', '') or s.get('code', '')
                    name = s.get('name', '')
                    if code in seen:
                        continue
                    if q_lower in code.lower() or (name and (q_lower in name.lower() or (len(q_lower) >= 2 and q_lower in _pinyin_initials(name)))):
                        seen.add(code)
                        results.append({
                            "code": code,
                            "name": name,
                            "source": "consensus"
                        })
                    if len(results) >= 20:
                        break
                if len(results) >= 20:
                    break
        except Exception:
            logger.warning("[warn] 操作异常 (v3.4.0-T8)")
            pass

    return {
        "success": True,
        "results": results[:20],
        "query": q,
        "total": len(results),
        # V5.3.0 (T-5.3.3.3): 分组检索 (股票/板块/策略/菜单)
        "groups": build_grouped_results(q, max_items=20),
    }
