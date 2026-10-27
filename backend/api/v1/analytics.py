#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
匿名页面热度 + 产品事件统计 (v3.4.0-T7 / FR-3.4.6; 6.4.2 / FR-644)
- POST /api/analytics/page  前端上报页面访问 (匿名)
- GET  /api/analytics/rank  热度排行 (admin)
- POST /api/analytics/event 产品事件上报 (onboarding/search/error/empty_action, 6.4.2)
- GET  /api/analytics/events 事件聚合 (admin, 6.4.2)
存储: data/page_analytics.json (按日期+页面聚合); data/ui_events.jsonl (事件流水)
"""
import json
import logging
import os
from datetime import datetime

from fastapi import APIRouter, Depends
from pydantic import BaseModel

from auth import get_current_active_user
from paths import DATA_DIR

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/analytics", tags=["页面热度"])

ANALYTICS_FILE = os.path.join(DATA_DIR, "page_analytics.json")

# 6.4.2 (FR-644 / PRD §8): 事件白名单 — 与 frontend/js/event-track.js 一致
KNOWN_EVENTS = {
    "onboarding_start", "onboarding_complete", "onboarding_skip",
    "empty_action", "search_open", "search_select",
    "error_shown", "error_retry",
    "ai_open", "ai_send", "ai_degraded",
    "export_done", "nav_switch", "perf_long_task",
}
EVENT_LOG_MAX_LINES = 5000

# 聚合: {date: {page: count}}
_aggregate = {}


def _events_file() -> str:
    """事件流水路径 (按需解析 DATA_DIR, 便于测试重定向)"""
    return os.path.join(DATA_DIR, "ui_events.jsonl")


class PageView(BaseModel):
    page: str
    source: str = "web"


class ProductEvent(BaseModel):
    event: str
    props: dict = {}
    ts: int = 0


def _load():
    global _aggregate
    try:
        if os.path.exists(ANALYTICS_FILE):
            with open(ANALYTICS_FILE, 'r', encoding='utf-8') as f:
                _aggregate = json.load(f)
    except Exception:
        _aggregate = {}


def _save():
    try:
        os.makedirs(DATA_DIR, exist_ok=True)
        with open(ANALYTICS_FILE, 'w', encoding='utf-8') as f:
            json.dump(_aggregate, f, ensure_ascii=False, indent=2)
    except Exception as e:
        logger.warning(f"[analytics] 保存失败: {e}")


@router.post("/page")
async def track_page(req: PageView):
    """前端上报页面访问 (匿名, 仅记日期+页面)"""
    today = datetime.now().strftime('%Y-%m-%d')
    page = req.page or "unknown"
    _aggregate.setdefault(today, {})
    _aggregate[today][page] = _aggregate[today].get(page, 0) + 1
    _save()
    return {"success": True}


@router.get("/rank")
async def page_rank(days: int = 7, user: dict = Depends(get_current_active_user)):
    """热度排行 (admin): 近 N 天各页面访问量"""
    if user.get("role") != "admin":
        return {"success": False, "message": "仅管理员可查看热度排行"}
    _load()
    from datetime import timedelta
    # V4.0 bugfix: days 天应含今天 + (days-1) 天前(原 timedelta(days=days) 多算 1 天)
    cutoff = (datetime.now() - timedelta(days=max(days - 1, 0))).strftime('%Y-%m-%d')
    totals = {}
    for date, pages in _aggregate.items():
        if date >= cutoff:
            for page, cnt in pages.items():
                totals[page] = totals.get(page, 0) + cnt
    rank = sorted(totals.items(), key=lambda x: -x[1])
    return {
        "success": True,
        "days": days,
        "total_views": sum(totals.values()),
        "rank": [{"page": p, "views": c} for p, c in rank],
    }


# 初始化
_load()


# ─── 6.4.2 (FR-644 / PRD §8): 产品事件 ─────────────────────────────

def record_event(event: str, props: dict = None, ts: int = 0) -> dict:
    """写入事件流水 (白名单 + 属性裁剪 + 行数上限), 返回受理结果。

    落库口径: 追加 JSONL, 不动主表。
    """
    name = (event or "").strip()
    if name not in KNOWN_EVENTS:
        return {"ok": False, "code": "UNKNOWN_EVENT", "message": f"未知事件: {name}"}
    safe = {}
    for k, v in (props or {}).items():
        if isinstance(v, (str, int, float, bool)):
            safe[str(k)[:40]] = (v[:120] if isinstance(v, str) else v)
        if len(safe) >= 12:
            break
    rec = {
        "ts": ts or int(datetime.now().timestamp() * 1000),
        "date": datetime.now().strftime("%Y-%m-%d"),
        "event": name,
        "props": safe,
    }
    path = _events_file()
    try:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        lines = []
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                lines = f.readlines()
        lines.append(json.dumps(rec, ensure_ascii=False) + "\n")
        if len(lines) > EVENT_LOG_MAX_LINES:
            lines = lines[-EVENT_LOG_MAX_LINES:]
        with open(path, "w", encoding="utf-8") as f:
            f.writelines(lines)
    except OSError as e:
        logger.warning("[analytics] 事件落盘失败: %s", e)
        return {"ok": False, "code": "WRITE_FAILED", "message": "事件落盘失败"}
    return {"ok": True, "code": "OK", "record": rec}


def load_events(days: int = 7) -> list:
    """读取近 N 天事件流水 (按日聚合前使用)。"""
    from datetime import timedelta
    cutoff = (datetime.now() - timedelta(days=max(days - 1, 0))).strftime("%Y-%m-%d")
    path = _events_file()
    if not os.path.exists(path):
        return []
    out = []
    try:
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    rec = json.loads(line)
                except json.JSONDecodeError:
                    logger.debug("[analytics] 跳过非法事件行: %s", line[:80])
                    continue
                if (rec.get("date") or "") >= cutoff:
                    out.append(rec)
    except OSError as e:
        logger.warning("[analytics] 读取事件流水失败: %s", e)
        return []
    return out


@router.post("/event")
async def track_event(req: ProductEvent):
    """前端产品事件上报 (匿名, 白名单校验; 未知事件返回 400 语义)。"""
    result = record_event(req.event, req.props, req.ts)
    if not result["ok"]:
        return {"success": False, "code": result["code"], "message": result["message"]}
    return {"success": True, "code": "OK"}


@router.get("/events")
async def event_summary(days: int = 7, user: dict = Depends(get_current_active_user)):
    """事件聚合 (admin): 近 N 天各事件次数 + 最近流水 (最多 50 条)。"""
    if user.get("role") != "admin":
        return {"success": False, "message": "仅管理员可查看事件统计"}
    rows = load_events(days)
    counts = {}
    for r in rows:
        counts[r.get("event", "")] = counts.get(r.get("event", ""), 0) + 1
    return {
        "success": True,
        "days": days,
        "total": len(rows),
        "counts": counts,
        "recent": rows[-50:],
    }

