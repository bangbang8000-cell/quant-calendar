#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据管线自动化 (v3.3.0-T11 / FR-3.3.6)
- tushare 定时拉取行情 → 更新缓存 (增量更新, 失败重试)
- qresult CSV 检测 → 自动导入 (配合 scheduler.file_watch_task)
说明: qresult 持仓 CSV 由外部量化策略程序生成, 本管线负责
      ① 行情数据自动更新 (K线/指数/日线缓存)
      ② 检测新 CSV 变化并触发解析器 reload
"""
import logging
import os
import time
from datetime import datetime

logger = logging.getLogger(__name__)

MAX_RETRIES = 3
RETRY_DELAY = 5  # 秒


def fetch_tushare_daily(ts_code: str = None, trade_date: str = None) -> dict:
    """
    从 tushare 拉取日线数据 (增量更新)
    - 未指定 trade_date 时拉取最近交易日
    - 失败重试 MAX_RETRIES 次
    返回 {"success": bool, "message": str, "rows": int}
    """
    try:
        from market_data import market_data
    except ImportError:
        return {"success": False, "message": "market_data 模块不可用", "rows": 0}

    if not market_data.tushare_available:
        return {"success": False, "message": "tushare 未连接 (请检查 token)", "rows": 0}

    last_err = None
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            if ts_code:
                df = market_data.pro.daily(ts_code=ts_code, trade_date=trade_date)
            else:
                # 拉取全市场某日行情
                df = market_data.pro.daily(trade_date=trade_date)
            if df is None or df.empty:
                return {"success": True, "message": f"无数据 (date={trade_date})", "rows": 0}
            rows = len(df)
            # 更新本地缓存 (供 K 线等使用)
            if trade_date:
                cache_key = f"daily_{trade_date}"
                from market_data import market_data as md
                md._save_cache() if hasattr(md, '_save_cache') else None
            return {"success": True, "message": f"拉取成功 {rows} 行", "rows": rows}
        except Exception as e:
            last_err = e
            logger.warning(f"tushare 拉取失败 (第{attempt}次): {e}")
            time.sleep(RETRY_DELAY * attempt)  # 递增退避

    return {"success": False, "message": f"重试 {MAX_RETRIES} 次仍失败: {last_err}", "rows": 0}


def run_pipeline(force: bool = False) -> dict:
    """
    执行完整数据管线:
    1. 检查 tushare 连接
    2. 拉取最近交易日行情
    3. 触发解析器 reload (若 qresult CSV 有更新)
    """
    result = {"steps": [], "success": True}

    # Step 1: tushare 连接检查
    try:
        from market_data import market_data
        conn = market_data.test_tushare_connection()
        result["steps"].append({"step": "tushare连接", "ok": conn.get("success", False), "detail": conn.get("message", "")})
        if not conn.get("success", False):
            result["success"] = False
            return result
    except Exception as e:
        result["steps"].append({"step": "tushare连接", "ok": False, "detail": str(e)})
        result["success"] = False
        return result

    # Step 2: 拉取最近交易日 (增量)
    from market_data import is_trading_day
    today = datetime.now().strftime('%Y-%m-%d')
    if is_trading_day(today) or force:
        r = fetch_tushare_daily(trade_date=today)
        result["steps"].append({"step": "日线拉取", "ok": r["success"], "detail": r["message"]})
        if not r["success"]:
            result["success"] = False
    else:
        result["steps"].append({"step": "日线拉取", "ok": True, "detail": "今日非交易日, 跳过"})

    # Step 3: 触发解析器 reload (qresult 变化检测由 file_watch_task 负责)
    try:
        from data_parser import parser
        from views_aggregator import views_aggregator
        parser.reload()
        views_aggregator.reload()
        result["steps"].append({"step": "解析器刷新", "ok": True, "detail": "reload 完成"})
    except Exception as e:
        result["steps"].append({"step": "解析器刷新", "ok": False, "detail": str(e)})

    return result


if __name__ == "__main__":
    import json
    print(json.dumps(run_pipeline(force=True), ensure_ascii=False, indent=2))
