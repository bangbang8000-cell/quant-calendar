#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V4.9.2 (P1): 每日策略自动执行 — 计划/进展/结果/追溯 聚合层.

数据源(不新增存储):
- 计划: strategy_governance.get_state() (启用/调度/上次运行/持仓路径)
- 结果: data/holdings/{date}/{策略}持仓.csv — 该日期行 '1' 计数(每策略当日持有) + mtime(完成时序)
- 追溯: holdings mtime + scheduler_history(近期窗口) + governance(最新)
"""
import csv
import json
import logging
import os
import time
from datetime import datetime, timedelta

from paths import DATA_DIR
import strategy_governance as gov

logger = logging.getLogger(__name__)

HOLDINGS_ROOT = os.path.join(DATA_DIR, "holdings")
_results_cache = None
_results_cache_ts = 0.0
_RESULTS_TTL = 60  # 结果聚合缓存秒数


def _display_name(sid):
    """sid → 中文展示名 (复用 governance 的映射)"""
    return gov._display_name(sid)


def get_plan() -> list:
    """F2.1: 今日执行计划 — 启用策略/调度/倒计时/上次运行"""
    state = gov.get_state()
    now = datetime.now()
    plans = []
    for sid, s in state.items():
        schedule = str(s.get("schedule") or gov.DEFAULT_SCHEDULE)
        try:
            hh, mm = map(int, schedule.split(":"))
        except (ValueError, AttributeError):
            hh, mm = map(int, gov.DEFAULT_SCHEDULE.split(":"))
        next_run = now.replace(hour=hh, minute=mm, second=0, microsecond=0)
        if next_run <= now:
            next_run += timedelta(days=1)
        plans.append({
            "sid": sid,
            "name": _display_name(sid),
            "enabled": bool(s.get("enabled")),
            "schedule": f"{hh:02d}:{mm:02d}",
            "universe": s.get("universe", "all"),
            "show_in_calendar": bool(s.get("show_in_calendar", True)),
            "last_run": s.get("last_run"),
            "last_holdings": s.get("last_holdings"),
            "next_run": next_run.strftime("%Y-%m-%d %H:%M:%S"),
            "countdown_seconds": max(int((next_run - now).total_seconds()), 0),
        })
    plans.sort(key=lambda p: (not p["enabled"], p["sid"]))
    return plans


def get_live_status(scheduler=None) -> dict:
    """F2.2: 实时进展 — scheduler.execution_progress 快照"""
    if scheduler is None:
        return {"phase": "idle", "detail": "调度器未提供"}
    prog = getattr(scheduler, "execution_progress", None)
    if not prog:
        return {"phase": "idle", "detail": "今日策略未运行", "progress": None}
    out = dict(prog)
    if prog.get("phase") == "running" and prog.get("started_at"):
        try:
            st = datetime.strptime(prog["started_at"], "%Y-%m-%d %H:%M:%S")
            out["elapsed_seconds"] = max(int((datetime.now() - st).total_seconds()), 0)
        except (ValueError, TypeError):
            out["elapsed_seconds"] = None
    return out


def _read_holdings_date(date: str):
    """读某日持仓: 每策略 CSV 该日期行 '1' 计数 + 并集 + mtime 时序."""
    dp = os.path.join(HOLDINGS_ROOT, date)
    if not os.path.isdir(dp):
        return None
    per = []
    union = set()
    for fn in sorted(os.listdir(dp)):
        if not fn.endswith(".csv"):
            continue
        name = fn.replace("持仓.csv", "").replace("-剔除ST", "")
        fpath = os.path.join(dp, fn)
        held = set()
        try:
            with open(fpath, encoding="utf-8", errors="ignore") as f:
                rdr = csv.reader(f)
                header = next(rdr, None)
                for row in rdr:
                    if row and row[0] == date:
                        for i, v in enumerate(row[1:], start=1):
                            if str(v).strip() and v not in ("", "0", "0.0"):
                                held.add(header[i] if header else str(i))
                        break
        except (OSError, csv.Error) as e:
            logger.warning("读取持仓 %s 失败: %s", fpath, e)
        union |= held
        try:
            mt = datetime.fromtimestamp(os.path.getmtime(fpath)).strftime("%Y-%m-%d %H:%M:%S")
        except OSError:
            mt = None
        per.append({"strategy": name, "name": name, "held": len(held), "file": fn, "mtime": mt})
    per.sort(key=lambda p: p["mtime"] or "")
    return {"per": per, "union": len(union)}


def _day_view_total(date: str) -> int:
    """日视图 total (四视图共享聚合器, 作整体新鲜度金丝雀)"""
    try:
        from views_aggregator import views_aggregator
        return int((views_aggregator.get_day_view(date) or {}).get("total", 0))
    except Exception:
        return 0


def _strategy_run_ts(date: str):
    """当日 strategy_run 调度记录 ts (scheduler_history); 无则 None"""
    hist_file = os.path.join(DATA_DIR, "scheduler_history.json")
    try:
        with open(hist_file, encoding="utf-8") as f:
            hist = json.load(f)
        for rec in hist:
            if rec.get("task") == "strategy_run" and rec.get("ts", "")[:10] == date:
                return rec.get("ts")
    except (OSError, json.JSONDecodeError, TypeError):
        pass
    return None


def get_results(days: int = 7, scheduler=None) -> dict:
    """F2.3: 按日聚合执行结果(含日视图可见性校验), 60s 缓存"""
    global _results_cache, _results_cache_ts
    now = time.time()
    if _results_cache is not None and now - _results_cache_ts < _RESULTS_TTL:
        return _results_cache
    if not os.path.isdir(HOLDINGS_ROOT):
        return {"dates": [], "generated_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
    dates = sorted(d for d in os.listdir(HOLDINGS_ROOT)
                   if os.path.isdir(os.path.join(HOLDINGS_ROOT, d)))[-max(int(days), 1):]
    out = []
    for d in dates:
        data = _read_holdings_date(d) or {"per": [], "union": 0}
        day_total = _day_view_total(d)
        out.append({
            "date": d,
            "strategies": data["per"],
            "in_pool_union": data["union"],
            "day_view_total": day_total,
            "visible": day_total > 0,
            "run_at": _strategy_run_ts(d) or (data["per"][-1]["mtime"] if data["per"] else None),
        })
    result = {"dates": out, "generated_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
    _results_cache = result
    _results_cache_ts = now
    return result


def get_trace(date: str) -> dict:
    """F2.4: 某日完整时间线追溯 (调度触发→各策略生成→刷新→日视图校验)"""
    data = _read_holdings_date(date)
    if data is None:
        return {"date": date, "exists": False, "steps": []}
    steps = []
    run_ts = _strategy_run_ts(date)
    if run_ts:
        steps.append({"step": "调度触发 strategy_run", "ts": run_ts, "detail": "按 governance 定时执行"})
    for p in data["per"]:
        steps.append({"step": f"{p['name']} 生成持仓", "ts": p.get("mtime") or "",
                      "detail": f"{p['held']} 只"})
    steps.append({"step": "刷新 parser + views_aggregator", "ts": run_ts or "",
                  "detail": "持仓热刷新进日/周/月/年视图"})
    total = _day_view_total(date)
    steps.append({"step": "日视图校验", "ts": run_ts or "",
                  "detail": f"total={total} {'✓ 已可见' if total > 0 else '✗ 未可见'}"})
    return {"date": date, "exists": True, "steps": steps}


def force_verify_reload(date: str = None) -> dict:
    """F2.5/应急: 手动刷新聚合器并校验 (admin). 返回 {ok, detail, stats}"""
    from views_aggregator import views_aggregator
    from scheduler import verify_day_ingest
    stats = views_aggregator.reload()
    date = date or (stats.get("latest_date") if stats else None)
    if not date:
        return {"ok": False, "detail": "无可用日期", "stats": stats}
    ok, detail = verify_day_ingest(date)
    _results_cache_ts = 0.0  # 失效结果缓存
    return {"ok": ok, "detail": detail, "stats": stats}
