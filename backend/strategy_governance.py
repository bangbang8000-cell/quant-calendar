#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略纳管中心 (v3.21 / P0-6/7/8)
- 纳管状态: data/strategy_governance.json (gitignore)
  { sid: { enabled, schedule(默认20:00), last_run, last_holdings } }
- run-once: 运行策略 + 生成持仓文件(qresult 完全一致矩阵)
  data/holdings/{YYYY-MM-DD}/{策略名}持仓.csv
- 定时策略运行: strategy_run_task(调度器)每日收盘后(默认20:00)
"""
import csv
import json
import logging
import os
from datetime import datetime

from paths import DATA_DIR

logger = logging.getLogger(__name__)

GOV_FILE = os.path.join(DATA_DIR, "strategy_governance.json")
HOLDINGS_ROOT = os.path.join(DATA_DIR, "holdings")

# 4 内置策略(纳管对象, 默认启用但不可删除)
BUILTIN_SIDS = ["multi_factor", "sector_rotation", "capital_flow", "index_enhance"]
DEFAULT_SCHEDULE = "20:00"


def _default_state() -> dict:
    """4 内置策略默认纳管状态"""
    return {
        sid: {"enabled": True, "schedule": DEFAULT_SCHEDULE,
              "universe": "default",  # v3.21: default=策略自带池 | all=全市场5530
              "last_run": None, "last_holdings": None}
        for sid in BUILTIN_SIDS
    }


def get_state() -> dict:
    """读取纳管状态(缺失项补默认)"""
    state = _default_state()
    try:
        if os.path.exists(GOV_FILE):
            with open(GOV_FILE, "r", encoding="utf-8") as f:
                saved = json.load(f) or {}
            for sid in state:
                if sid in saved:
                    state[sid].update(saved[sid] or {})
    except Exception as e:
        logger.warning("读取纳管状态失败: %s", e)
    return state


def save_state(state: dict) -> dict:
    """持久化纳管状态"""
    os.makedirs(DATA_DIR, exist_ok=True)
    # 仅保留内置策略 + 合法字段, 防止注入
    clean = {}
    for sid in BUILTIN_SIDS:
        s = (state or {}).get(sid) or {}
        clean[sid] = {
            "enabled": bool(s.get("enabled", True)),
            "schedule": str(s.get("schedule") or DEFAULT_SCHEDULE)[:5],
            "universe": "all" if s.get("universe") == "all" else "default",
            "last_run": s.get("last_run"),
            "last_holdings": s.get("last_holdings"),
        }
    with open(GOV_FILE, "w", encoding="utf-8") as f:
        json.dump(clean, f, ensure_ascii=False, indent=2)
    return clean


def _generate_holdings(sid: str, portal=None, universe_mode: str = None):
    """运行策略生成持仓矩阵 (复用 registry + generate_signals)

    universe_mode: None=读纳管状态 | 'default'=策略自带池 | 'all'=全市场5530
    全池模式(all): 并发取数(ThreadPoolExecutor)提速, 与 qresult 全市场覆盖等价。
    """
    from strategy_sdk.base import StrategyContext
    from strategy_sdk.registry import registry
    st = registry.get(sid)
    params = st.validate_params({})
    if portal is None:
        from strategy_sdk.data_portal import RealDataPortal
        portal = RealDataPortal()
    if universe_mode is None:
        universe_mode = (get_state().get(sid) or {}).get("universe") or "default"
    universe = list(getattr(st, "universe", []) or [])
    max_workers = 1
    if universe_mode == "all" or not universe:
        try:
            from stock_info import stock_manager
            universe = sorted(stock_manager.stock_map.keys())
        except Exception:
            universe = []
        max_workers = int(os.environ.get("STRATEGY_FETCH_WORKERS", "8"))
    if not universe:
        raise ValueError("策略无可用股票池")
    st.universe = universe
    as_of = datetime.now().strftime("%Y-%m-%d")
    ctx = StrategyContext(portal=portal, params=params, as_of=as_of,
                          max_workers=max_workers)
    return st.generate_signals(ctx), universe


def _holdings_matrix_rows(holdings, universe) -> list:
    """持仓矩阵 → qresult 风格行 (表头 + 日期行)"""
    # holdings: DataFrame(date index, symbol columns) 值=权重
    idx_dates = list(holdings.index) if hasattr(holdings, "index") else []
    cols = list(holdings.columns) if hasattr(holdings, "columns") else []
    if not idx_dates:
        return [], cols
    rows = [[""] + cols]
    for dt in idx_dates:
        row = [str(dt)]
        for c in cols:
            v = holdings.at[dt, c] if c in holdings.columns else None
            try:
                val = float(v)
                row.append("1" if val > 0 else "")
            except Exception:
                row.append("")
        rows.append(row)
    return rows, cols


def _write_holdings_matrix(holdings, sid, out_dir: str, universe=None) -> str:
    """写持仓文件 (qresult 完全一致矩阵: 行=日期, 列=股票代码, 值=1持有)"""
    os.makedirs(out_dir, exist_ok=True)
    name = _display_name(sid)
    path = os.path.join(out_dir, name + "持仓.csv")
    rows, cols = _holdings_matrix_rows(holdings, universe or [])
    if not rows:
        raise ValueError("持仓矩阵为空")
    with open(path, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        for r in rows:
            w.writerow(r)
    return path


def _display_name(sid: str) -> str:
    """策略 sid → 展示名 (与 qresult 命名一致)"""
    names = {
        "multi_factor": "多因子策略",
        "sector_rotation": "行业轮动策略",
        "capital_flow": "资金流策略",
        "index_enhance": "指数增强策略",
    }
    return names.get(sid, sid)


def run_once(sid: str, as_of: str = None) -> dict:
    """run-once: 运行策略 + 生成持仓文件 + 更新纳管状态"""
    from strategy_sdk.registry import StrategyNotFoundError
    if sid not in BUILTIN_SIDS:
        raise StrategyNotFoundError(sid)
    date = (as_of or datetime.now().strftime("%Y-%m-%d"))[:10]
    try:
        holdings, universe = _generate_holdings(sid)
    except Exception as e:
        raise RuntimeError("策略运行失败: %s" % e)
    out_dir = os.path.join(HOLDINGS_ROOT, date)
    path = _write_holdings_matrix(holdings, sid, out_dir, universe)
    state = get_state()
    state[sid]["last_run"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    state[sid]["last_holdings"] = path
    save_state(state)
    return {"sid": sid, "date": date, "holdings_file": path,
            "symbols": len(list(holdings.columns))}


def list_holdings(sid: str) -> list:
    """列出该策略最近生成的持仓文件

    v3.21 (遗留3): 无本地持仓记录时回退随发布入库的 reference_holdings 预览样例
    (docs/reference_holdings/, 0 token, 供无 key 部署预览)。
    匹配用 _display_name(sid) (文件名=中文策略名, sid=英文)。
    """
    name = _display_name(sid)
    files = []
    if os.path.isdir(HOLDINGS_ROOT):
        for d in sorted(os.listdir(HOLDINGS_ROOT), reverse=True):
            dd = os.path.join(HOLDINGS_ROOT, d)
            if not os.path.isdir(dd):
                continue
            for fn in os.listdir(dd):
                if name in fn and fn.endswith(".csv"):
                    files.append({"date": d, "file": os.path.join(dd, fn)})
    if files:
        return files[:20]
    # 回退: 随发布入库的参考样例 (基准文件随仓库同步到部署目录)
    ref_root = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                            "docs", "reference_holdings")
    if os.path.isdir(ref_root):
        for fn in os.listdir(ref_root):
            if name in fn and fn.endswith("-预览.csv"):
                files.append({"date": "参考样例", "file": os.path.join(ref_root, fn)})
    return files[:20]
