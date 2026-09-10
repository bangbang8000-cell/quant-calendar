#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.2/6b / FR-5.4.1/5.4.5): 重点跟踪 API

- GET /api/focus/list?scope=all|watchlist|new_pool&date=YYYY-MM-DD
  匿名: 全用户自选 ∪ 新入池; 登录: 本人自选 ∪ 新入池
- GET /api/focus/results?date&session  当日评估结果 + 按当前用户持仓派生动作 (按推荐档位排序/归类)
- GET /api/focus/latest               最近一次评估 (日期+时段), 前端默认加载
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


def _resolve_base_for_rows(rows, date, session):
    """V5.4.3 (FR-5.4.3): 解析该次评估实际使用的"新入池基准日"。

    优先取落库 raw_json.base_date (评估当时写入, 最真实); 无记录时按当前时点与
    最近已完成持仓矩阵预演 (供"下次评估将纳入的范围"提示)。返回 (base_date, reason)。
    """
    import json as _json
    import focus_list as fl
    bases = []
    for r in rows or []:
        raw = r.get("raw_json")
        try:
            obj = _json.loads(raw) if isinstance(raw, str) else (raw or {})
        except Exception:
            continue
        b = (obj or {}).get("base_date")
        if b:
            bases.append(b)
    if bases:
        return max(bases), "recorded"
    try:
        return fl.resolve_base_date(date, session or "after_close")
    except Exception:
        return None, "unknown"


def _backfill_stock_names(rows):
    """V5.4.1 (fix): 历史记录 stock_name 缺失/等于代码时, 回填真实中文名 (不改 DB)。

    根因: v5.4.0 落库时 member 无 name 字段, stock_name 回退为代码
    (如 '603993.SH'), 前端今日概览只有代码无中文名。读取端兜底补名。
    """
    if not rows:
        return rows
    try:
        from stock_info import stock_manager
    except Exception:
        return rows
    for r in rows:
        code = r.get("stock_code", "")
        name = r.get("stock_name") or ""
        if not code:
            continue
        if not name or name == code:
            r["stock_name"] = stock_manager.get_name(code) or code
    return rows


@router.get("/results")
async def get_focus_results(
    date: str = Query(None, description="交易日期 YYYY-MM-DD, 缺省今天"),
    session: str = Query(None, description="时段 pre_open/intraday_1/intraday_2/after_close"),
    user: dict = Depends(get_current_user),
):
    """当日评估结果 + 按当前用户持仓派生的 5 档动作 (匿名无持仓口径)。

    V5.4.2 (FR): 缺省 level 由评分回填 + 按推荐档位排序 (强烈推荐→观望, 组内评分降序)
    + groups 按推荐档位归类, 供前端分组渲染。
    V5.4.3 (FR-5.4.3): 返回新入池基准日 base_date (评估时实际使用, 取自落库 raw_json;
    无记录时按当前时点预演), 供前端说明"评估范围"。
    """
    import focus_list as fl
    import focus_store
    import focus_digest
    from focus_action_map import ACTION_ORDER
    from focus_eval import score_to_level
    d = date or fl.today_str()
    rows = focus_store.query_by_date(d, session=session)
    _backfill_stock_names(rows)
    holdings = _load_holdings(user["username"]) if user else []
    enriched = focus_digest.enrich_actions(rows, holdings=holdings)
    # V5.4.2: 缺省 level 由评分回填 (历史/规则记录 level 可能为空)
    for r in enriched:
        if not (r.get("level") or ""):
            r["level"] = score_to_level(r.get("total_score"))
    sorted_rows = focus_digest.sort_rows_by_level(enriched)
    groups = focus_digest.group_rows_by_level(sorted_rows)
    # V5.4.3: 新入池基准日 — 优先取落库记录 (评估时实际使用), 否则按时点预演
    base_date, base_reason = _resolve_base_for_rows(sorted_rows, d, session)
    counts = {a: 0 for a in ACTION_ORDER}
    for r in sorted_rows:
        counts[r.get("action")] = counts.get(r.get("action"), 0) + 1
    return {"success": True, "data": {
        "date": d, "session": session, "total": len(sorted_rows),
        "actions": counts, "rows": sorted_rows, "groups": groups,
        "user": user["username"] if user else None,
        "holdings_count": len(holdings),
        "base_date": base_date, "base_reason": base_reason,
    }}


@router.get("/latest")
async def get_focus_latest(user: dict = Depends(get_current_user)):
    """V5.4.2 (FR): 最近一次重点跟踪评估 (日期+时段) — 前端默认加载"最近的一次"。

    若当天尚无评估 (调度未跑/非交易日), 前端进入重点跟踪即回退到最近有数据的日期。
    """
    import focus_store
    d, s = focus_store.query_latest_eval()
    total = focus_store.count_by_date(d) if d else 0
    return {"success": True, "data": {
        "date": d, "session": s, "total": total,
        "user": user["username"] if user else None,
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
    _backfill_stock_names(rows)
    return {"success": True, "data": {
        "stock_code": stock_code, "total": len(rows), "rows": rows,
        "user": user["username"] if user else None,
    }}


@router.get("/stock/{stock_code}/pool")
async def get_focus_stock_pool_status(
    stock_code: str,
    date: str = Query(None, description="基准日期 YYYY-MM-DD, 缺省今天"),
    user: dict = Depends(get_current_user),
):
    """V5.4.0 (FR-5.4.9): 股票入池状态 + 自选状态 (弹窗信息).

    返回: 入池历史(first_appear/last_appear/pool_entries, 按日入池算) +
          当日清单来源(watchlist/new_pool/both/无) + 持仓状态。
    """
    import focus_list as fl
    import focus_pool_history as fph
    d = date or fl.today_str()
    # 自选状态
    sources = []
    if user:
        wl = fl.load_watchlist_codes(user["username"])
        if stock_code in wl:
            sources.append('watchlist')
    else:
        wl = fl.load_all_watchlist_codes()
        if stock_code in wl:
            sources.append('watchlist')
    # 当日是否新入池
    try:
        np_ = fl.load_new_pool_codes(d)
        if stock_code in np_:
            sources.append('new_pool')
    except Exception as e:  # noqa: BLE001
        logger.warning("[focus] 新入池判断失败 %s: %s", stock_code, e)
    source = 'both' if len(sources) == 2 else (sources[0] if sources else 'none')
    # 入池历史 (按日入池回溯)
    hist = fph.load_pool_history(stock_code)
    holdings = _load_holdings(user["username"]) if user else []
    # V5.4.2 (FR): 入池状态派生 — 当日新入池 > 当前在池 > 已出池 > 从未入池
    pool_state = fph.derive_pool_state(sources, hist)
    return {"success": True, "data": {
        "stock_code": stock_code,
        "date": d,
        "source": source,
        "sources": sources,
        "pool_state": pool_state,
        "pool_state_label": fph.POOL_STATE_LABELS.get(pool_state, pool_state),
        "holding": stock_code in holdings,
        "pool_history": hist,
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
