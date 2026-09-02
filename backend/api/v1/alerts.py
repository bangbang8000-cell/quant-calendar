#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.4 T-5.0.43: 自定义预警规则 API (/api/alerts)

- GET/POST /api/alerts/rules: 规则列表 / 创建
- PUT/DELETE /api/alerts/rules/{id}: 更新 / 删除
- POST /api/alerts/evaluate: 用当前行情评估规则命中 → 事件投递
"""
import logging
from typing import Any, Dict

from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_active_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/alerts", tags=["预警规则"])


# ─── 静默 (alert_silence 表) ───────────────────────────────────────

def _silence_conn():
    import db
    return db.get_conn()


def silence_until(username):
    import time
    conn = _silence_conn()
    try:
        row = conn.execute(
            "SELECT until_ts FROM alert_silence WHERE user=?", (username,)
        ).fetchone()
        if not row:
            return None
        until = float(row["until_ts"])
        if until <= time.time():
            return None
        return until
    finally:
        conn.close()


def is_silenced(username):
    return silence_until(username) is not None


def set_silence_until(username, minutes):
    import time
    conn = _silence_conn()
    try:
        conn.execute(
            "INSERT OR REPLACE INTO alert_silence (user, until_ts) VALUES (?,?)",
            (username, time.time() + minutes * 60))
        conn.commit()
    finally:
        conn.close()


def clear_silence(username):
    conn = _silence_conn()
    try:
        conn.execute("DELETE FROM alert_silence WHERE user=?", (username,))
        conn.commit()
    finally:
        conn.close()


@router.get("/rules")
async def list_rules(user: dict = Depends(get_current_active_user)):
    from rules_alert import list_alert_rules
    return {"success": True, "rules": list_alert_rules(user["username"])}


@router.post("/rules")
async def create_rule(body: Dict[str, Any],
                      user: dict = Depends(get_current_active_user)):
    from rules_alert import create_alert_rule
    stock_code = (body.get("stock_code") or "").strip()
    rule_type = (body.get("rule_type") or "").strip()
    if not stock_code or not rule_type:
        raise HTTPException(status_code=400, detail="stock_code/rule_type 必填")
    try:
        rule = create_alert_rule(user["username"], stock_code, rule_type,
                                 body.get("threshold"),
                                 bool(body.get("enabled", True)))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return {"success": True, "rule": rule}


@router.put("/rules/{rule_id}")
async def update_rule(rule_id: int, body: Dict[str, Any],
                      user: dict = Depends(get_current_active_user)):
    from rules_alert import update_alert_rule
    rule = update_alert_rule(rule_id,
                             threshold=body.get("threshold"),
                             enabled=body.get("enabled"),
                             stock_code=body.get("stock_code"),
                             rule_type=body.get("rule_type"))
    if not rule:
        raise HTTPException(status_code=404, detail="规则不存在")
    return {"success": True, "rule": rule}


@router.delete("/rules/{rule_id}")
async def delete_rule(rule_id: int, user: dict = Depends(get_current_active_user)):
    from rules_alert import delete_alert_rule
    if not delete_alert_rule(rule_id):
        raise HTTPException(status_code=404, detail="规则不存在")
    return {"success": True, "deleted": rule_id}


@router.post("/evaluate")
async def evaluate(body: Dict[str, Any],
                   user: dict = Depends(get_current_active_user)):
    """用当前行情评估用户启用规则 → 命中事件走事件引擎投递 (静默期内不投递)。"""
    from rules_alert import evaluate_alerts, hit_to_event
    hits = evaluate_alerts(user["username"], body.get("quotes") or {})
    triggered = [h for h in hits if h.get("triggered")]
    silenced = is_silenced(user["username"])
    published = 0
    if not silenced:
        try:
            from events import EventEngine
            eng = EventEngine(db_store=True)
            for h in triggered:
                res = eng.publish(hit_to_event(h), user=user["username"])
                published += len(res)
        except Exception as e:
            logger.warning("预警评估投递失败: %s", e)
    return {"success": True, "hits": hits, "triggered": len(triggered),
            "published": published, "silenced": silenced}


@router.get("/history")
async def history(limit: int = 50,
                  user: dict = Depends(get_current_active_user)):
    """投递历史 (当前用户; 管理员可看全部)。"""
    from events import EventEngine
    eng = EventEngine(db_store=True)
    log = eng.delivery_log(limit=max(1, min(200, limit)))
    if user.get("role") != "admin":
        log = [r for r in log if r.get("user") == user["username"]]
    return {"success": True, "history": log}


@router.get("/channels")
async def channels(user: dict = Depends(get_current_active_user)):
    """通道状态: 已注册通道 + 可用性/配置提示。"""
    from notify import channel_status
    return {"success": True, "channels": channel_status()}


@router.get("/silence")
async def get_silence(user: dict = Depends(get_current_active_user)):
    return {"success": True, "silenced": is_silenced(user["username"]),
            "until": silence_until(user["username"])}


@router.post("/silence")
async def set_silence(body: Dict[str, Any],
                      user: dict = Depends(get_current_active_user)):
    """静默: minutes>0 设置静默时长; minutes<=0 取消静默。"""
    try:
        minutes = float(body.get("minutes", 0))
    except (TypeError, ValueError):
        raise HTTPException(status_code=400, detail="minutes 必须为数值")
    if minutes <= 0:
        clear_silence(user["username"])
    else:
        set_silence_until(user["username"], minutes)
    return {"success": True, "silenced": is_silenced(user["username"]),
            "until": silence_until(user["username"])}
