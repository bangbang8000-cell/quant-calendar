#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.2/6b / FR-5.4.1/5.4.5): 重点跟踪 API

- GET /api/focus/list?scope=all|watchlist|new_pool&date=YYYY-MM-DD
  匿名: 全用户自选 ∪ 新入池; 登录: 本人自选 ∪ 新入池
- GET /api/focus/results?date&session  当日评估结果 + 按当前用户持仓派生动作
- GET /api/focus/history?date          历史记录 (时段分组)
- POST /api/focus/push {date, session, card}  digest 推送 (text+卡片双模)
"""
import logging
from fastapi import APIRouter, Depends, Query
from auth import get_current_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/focus", tags=["重点跟踪"])


def _load_holdings(username):
    import db
    rows = db.portfolio_get_positions(username) or []
    return [r.get("stock_code") for r in rows if r.get("stock_code")]


@router.get("/list")
async def get_focus_list(
    scope: str = Query("all", description="清单范围"),
    date: str = Query(None, description="交易日期 YYYY-MM-DD, 缺省今天"),
    user: dict = Depends(get_current_user),
):
    import focus_list as fl
    if scope not in fl.VALID_SCOPES:
        from fastapi import HTTPException
        raise HTTPException(status_code=400, detail="scope 必须为 all|watchlist|new_pool")
    d = date or fl.today_str()
    if user:
        result = fl.load_focus_list(user["username"], d, scope)
        result["user"] = user["username"]
    else:
        result = fl.load_focus_list_anonymous(d, scope)
        result["user"] = None
    result["date"] = d
    return {"success": True, "data": result}


@router.get("/results")
async def get_focus_results(
    date: str = Query(None, description="交易日期 YYYY-MM-DD, 缺省今天"),
    session: str = Query(None, description="时段 pre_open/intraday_1/intraday_2/after_close"),
    user: dict = Depends(get_current_user),
):
    """当日评估结果 + 按当前用户持仓派生的 5 档动作 (匿名无持仓口径)。"""
    import focus_list as fl
    import focus_store
    import focus_digest
    from focus_action_map import ACTION_ORDER
    d = date or fl.today_str()
    rows = focus_store.query_by_date(d, session=session)
    holdings = _load_holdings(user["username"]) if user else []
    enriched = focus_digest.enrich_actions(rows, holdings=holdings)
    counts = {a: 0 for a in ACTION_ORDER}
    for r in enriched:
        counts[r.get("action")] = counts.get(r.get("action"), 0) + 1
    return {"success": True, "data": {
        "date": d, "session": session, "total": len(rows),
        "actions": counts, "rows": enriched,
        "user": user["username"] if user else None,
        "holdings_count": len(holdings),
    }}


@router.get("/history")
async def get_focus_history(
    date: str = Query(None, description="交易日期 YYYY-MM-DD, 缺省今天"),
    user: dict = Depends(get_current_user),
):
    """历史记录: 该日期时段分组统计 (明细走 /results)。"""
    import focus_list as fl
    import focus_store
    d = date or fl.today_str()
    rows = focus_store.query_by_date(d)
    sessions = {}
    for r in rows:
        sessions[r["session"]] = sessions.get(r["session"], 0) + 1
    return {"success": True, "data": {
        "date": d, "total": len(rows), "sessions": sessions,
        "user": user["username"] if user else None,
    }}


@router.get("/stock/{stock_code}")
async def get_focus_stock_history(
    stock_code: str,
    limit: int = Query(30, description="返回条数上限"),
    user: dict = Depends(get_current_user),
):
    """单股历史评估 (日期倒序) — 同一股票不同时点/日期变化对比。"""
    import focus_store
    rows = focus_store.query_by_stock(stock_code, limit=limit)
    return {"success": True, "data": {
        "stock_code": stock_code, "total": len(rows), "rows": rows,
        "user": user["username"] if user else None,
    }}


@router.post("/push")
async def push_focus_digest(req: dict, user: dict = Depends(get_current_user)):
    """推送 digest (text+卡片双模) — 动作按请求用户持仓派生。"""
    import focus_list as fl
    import focus_store
    from feishu_push import FeishuPusher
    try:
        from api.v1.feishu import feishu_config
    except Exception:
        feishu_config = {}
    date = req.get("date") or fl.today_str()
    session = req.get("session") or focus_store.query_latest_session(date) or "after_close"
    rows = focus_store.query_by_date(date, session=session)
    if not rows:
        return {"success": False, "message": "该日期/时段暂无评估结果"}
    username = (user or {}).get("username") or "admin"
    holdings = _load_holdings(username)
    webhook = (feishu_config or {}).get("webhook_url", "")
    pusher = FeishuPusher(webhook_url=webhook)
    ok = pusher.send_focus_digest(date, session, rows, holdings=holdings,
                                  card=bool(req.get("card", False)))
    return {"success": ok,
            "message": "digest 已推送" if ok else "推送失败 (检查飞书 webhook 配置)"}
