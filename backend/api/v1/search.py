#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
全局搜索 API (v1.10)
支持按股票代码/名称模糊搜索
"""
from fastapi import APIRouter, Query
from functools import lru_cache

router = APIRouter(prefix="/search", tags=["搜索"])


@lru_cache(maxsize=8192)
def _pinyin_initials(name: str) -> str:
    """名称 → 拼音首字母 (如 中国神华 → zgsh), 模块级缓存避免重复计算"""
    try:
        from pypinyin import lazy_pinyin
        return ''.join(p[0] for p in lazy_pinyin(name)).lower()
    except Exception:
        return ''


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
        print("[warn] 操作异常 (v3.4.0-T8)")
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
            print("[warn] 操作异常 (v3.4.0-T8)")
            pass

    return {
        "success": True,
        "results": results[:20],
        "query": q,
        "total": len(results)
    }
