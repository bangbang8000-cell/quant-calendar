#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4 T-5.4.3: 自定义预警规则 API (/api/alerts)

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
    """用当前行情评估用户启用规则 → 命中事件走事件引擎投递。"""
    from rules_alert import evaluate_alerts, hit_to_event
    hits = evaluate_alerts(user["username"], body.get("quotes") or {})
    triggered = [h for h in hits if h.get("triggered")]
    published = 0
    try:
        from events import EventEngine
        eng = EventEngine(db_store=True)
        for h in triggered:
            res = eng.publish(hit_to_event(h), user=user["username"])
            published += len(res)
    except Exception as e:
        logger.warning("预警评估投递失败: %s", e)
    return {"success": True, "hits": hits, "triggered": len(triggered),
            "published": published}
