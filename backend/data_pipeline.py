#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据管线自动化 (v3.3.0-T11 / FR-3.3.6)
- tushare 定时拉取行情 → 更新缓存 (增量更新, 失败重试)
- qresult CSV 检测 → 自动导入 (配合 scheduler.file_watch_task)
说明: qresult 持仓 CSV 由外部量化策略程序生成, 本管线负责
      ① 行情数据自动更新 (K线/指数/日线缓存)
      ② 检测新 CSV 变化并触发解析器 reload
v3.12 (FR-3.12.1): 按配置股票池定时拉取日线 → 快照落盘 + 触发解析器刷新
"""
import json
import logging
import os
import time
from datetime import datetime

from paths import DATA_DIR, EXTERNAL_DATA_DIR

logger = logging.getLogger(__name__)

# v3.12 (FR-3.12.3): 逐股重试的 sleep 实现 (测试可注入为 no-op 避免真实等待)
PULL_RETRY_SLEEP = time.sleep

MAX_RETRIES = 3
RETRY_DELAY = 5  # 秒

# v3.12: 日线快照持久化 (供新鲜度看板 / 自动入库)
DAILY_SNAPSHOT_FILE = os.path.join(DATA_DIR, "daily_snapshot.json")


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


def resolve_stock_pool(pool: list = None) -> list:
    """解析股票池：给定池非空用之；否则用系统覆盖股票列表（全量）"""
    if pool:
        return [c for c in pool if c]
    try:
        from stock_info import stock_manager
        return [c for c in stock_manager.stock_map.keys()]
    except Exception:
        logger.warning("股票池解析失败, 返回空池", exc_info=True)
        return []


def run_daily_pull(pool: list = None, date: str = None) -> dict:
    """
    定时拉取日线快照 (FR-3.12.1):
    1. 解析股票池 (配置 > 全量)
    2. 逐股拉取最新日线 (data_sources 自带 fallback + 健康记录)
    3. 快照落盘 data/daily_snapshot.json (供新鲜度看板)
    4. 返回统计 (成功/失败/最新日期)

    失败重试: 依赖 data_sources 的逐源 fallback + record_call 连续失败阈值
    (FR-3.12.3 由 record_call 消费)。
    """
    pool = resolve_stock_pool(pool)
    stats = {"total": len(pool), "pulled": 0, "failed": 0, "errors": [],
             "latest_date": None, "date": date or datetime.now().strftime('%Y-%m-%d')}
    if not pool:
        stats["message"] = "股票池为空"
        return stats

    from data_sources import data_source_manager, record_call, retry_with_backoff
    snapshot = {}
    for ts_code in pool:
        try:
            # v3.12 (FR-3.12.3): 逐源 fallback 之上再做指数退避重试 (最多 3 次)
            kline, pull_err = retry_with_backoff(
                lambda c=ts_code: data_source_manager.get_kline_data(c, period='daily', limit=2),
                ok_check=lambda k: bool(k and k.get('data')),
                sleep_fn=PULL_RETRY_SLEEP,
            )
            if pull_err is not None or not kline:
                stats["failed"] += 1
                stats["errors"].append(f"{ts_code}: 无日线数据 ({pull_err})")
                continue
            rows = kline['data']
            latest = rows[-1] if isinstance(rows, list) else rows
            # 快照仅记录 close/pct_chg 等核心字段 (数据量控制)
            snapshot[ts_code] = {
                'date': latest.get('trade_date') or latest.get('date'),
                'close': latest.get('close'),
                'pct_chg': latest.get('pct_chg'),
                'data_source': kline.get('data_source'),
            }
            if snapshot[ts_code]['date']:
                if stats['latest_date'] is None or snapshot[ts_code]['date'] > stats['latest_date']:
                    stats['latest_date'] = snapshot[ts_code]['date']
            stats["pulled"] += 1
        except Exception as e:
            stats["failed"] += 1
            stats["errors"].append(f"{ts_code}: {e}")
            logger.warning(f"拉取日线失败 {ts_code}: {e}")

    # 快照落盘 (原子写)
    try:
        os.makedirs(DATA_DIR, exist_ok=True)
        payload = {
            "generated_at": datetime.now().isoformat(),
            "date": stats["date"],
            "latest_date": stats["latest_date"],
            "total": stats["total"],
            "pulled": stats["pulled"],
            "failed": stats["failed"],
            "stocks": snapshot,
        }
        tmp = DAILY_SNAPSHOT_FILE + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)
        os.replace(tmp, DAILY_SNAPSHOT_FILE)
        stats["snapshot"] = DAILY_SNAPSHOT_FILE
    except Exception as e:
        logger.error(f"日线快照落盘失败: {e}")
        stats["errors"].append(f"snapshot: {e}")

    record_call("data_pipeline", stats["failed"] == 0, 0)  # 健康记录: 批次级
    logger.info(f"📥 日线拉取完成: {stats['pulled']}/{stats['total']} 成功, "
                f"最新日期 {stats['latest_date']}")
    return stats


def load_daily_snapshot() -> dict:
    """读取最近一次日线快照（新鲜度看板消费）"""
    try:
        if not os.path.exists(DAILY_SNAPSHOT_FILE):
            return {}
        with open(DAILY_SNAPSHOT_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        logger.warning("读取日线快照失败", exc_info=True)
        return {}


# ==================== 财务数据拉取 (FR-3.12.1 / task 12.2) ====================
FINANCIAL_SNAPSHOT_FILE = os.path.join(DATA_DIR, "financial_snapshot.json")


def run_financial_pull(pool: list = None) -> dict:
    """
    拉取股票池财务指标 (FR-3.12.1):
    roe / netprofit_yoy / grossprofit_margin / debt_to_assets / eps / bps
    落盘 data/financial_snapshot.json (供个股页 / AI 评估消费)
    """
    pool = resolve_stock_pool(pool)
    stats = {"total": len(pool), "pulled": 0, "failed": 0, "errors": []}
    if not pool:
        stats["message"] = "股票池为空"
        return stats

    from data_sources import data_source_manager
    snapshot = {}
    for ts_code in pool:
        try:
            fin = data_source_manager.get_financial_data(ts_code)
            if not fin:
                stats["failed"] += 1
                stats["errors"].append(f"{ts_code}: 无财务数据")
                continue
            snapshot[ts_code] = fin
            stats["pulled"] += 1
        except Exception as e:
            stats["failed"] += 1
            stats["errors"].append(f"{ts_code}: {e}")
            logger.warning(f"拉取财务数据失败 {ts_code}: {e}")

    try:
        os.makedirs(DATA_DIR, exist_ok=True)
        payload = {
            "generated_at": datetime.now().isoformat(),
            "total": stats["total"],
            "pulled": stats["pulled"],
            "failed": stats["failed"],
            "stocks": snapshot,
        }
        tmp = FINANCIAL_SNAPSHOT_FILE + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)
        os.replace(tmp, FINANCIAL_SNAPSHOT_FILE)
        stats["snapshot"] = FINANCIAL_SNAPSHOT_FILE
    except Exception as e:
        logger.error(f"财务快照落盘失败: {e}")
        stats["errors"].append(f"snapshot: {e}")

    logger.info(f"📊 财务拉取完成: {stats['pulled']}/{stats['total']} 成功")
    return stats


def load_financial_snapshot() -> dict:
    """读取财务快照（个股页/AI 评估消费）"""
    try:
        if not os.path.exists(FINANCIAL_SNAPSHOT_FILE):
            return {}
        with open(FINANCIAL_SNAPSHOT_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        logger.warning("读取财务快照失败", exc_info=True)
        return {}


if __name__ == "__main__":
    import json
    print(json.dumps(run_pipeline(force=True), ensure_ascii=False, indent=2))
