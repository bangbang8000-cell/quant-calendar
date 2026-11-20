#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""执行与实盘联动 API (v7.8 FR-7.8-1/2/4)

四组端点:
- /execution/hunting/*  狩猎场扫描 + 跟踪入库(候选层)
- /execution/plans/*    执行计划 CRUD/状态机/成交回报/CSV 交换(计划层)
- /execution/risk/var   VaR 风险预算(风控层)
- /execution/summary    概览(首页卡片)

安全约定(铁律 C6): 全部端点要求非游客身份; 计划与跟踪按 username 隔离,
写操作同时落 exec_plan_events(业务事件流)与 audit_log(全局审计)。
"""
import logging
from typing import Any, Dict, Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import PlainTextResponse

from auth import get_non_guest_user
from execution import exchange, hunting, plans, risk_budget
from execution.support import SupportError

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/execution", tags=["执行与实盘联动"])


def _owner(user: Dict) -> str:
    name = str(user.get("username") or "").strip()
    if not name:
        raise HTTPException(status_code=403, detail="缺少有效用户身份")
    return name


def _bad_request(exc: Exception) -> HTTPException:
    return HTTPException(status_code=400, detail=str(exc))


# ─── 狩猎场 ───────────────────────────────────────────────────

@router.get("/hunting/scan")
async def hunting_scan(date: str = Query(..., description="狩猎日 YYYY-MM-DD"),
                       strategy: Optional[str] = None,
                       method: Optional[str] = None,
                       limit: int = 100,
                       user: Dict = Depends(get_non_guest_user)):
    """扫描: 当日选股结果 × 支撑位比较。单股不可算时进 errors, 不编造数据"""
    try:
        return hunting.scan(date, strategy=strategy, method=method,
                            limit=max(1, min(int(limit), hunting.MAX_CANDIDATES)))
    except SupportError as exc:
        raise _bad_request(exc) from exc


@router.get("/hunting/tracks")
async def hunting_tracks(status: Optional[str] = None, limit: int = 100,
                         user: Dict = Depends(get_non_guest_user)):
    items = hunting.list_tracks(_owner(user), status=status, limit=limit)
    return {"items": items, "count": len(items)}


@router.post("/hunting/tracks")
async def hunting_add_tracks(body: Dict[str, Any],
                             user: Dict = Depends(get_non_guest_user)):
    """入库跟踪: 服务端重算支撑位后落库(不信任前端传入的价格)"""
    date = str(body.get("date") or "").strip()
    if not date:
        raise HTTPException(status_code=400, detail="date 不能为空")
    symbols = body.get("symbols") or None
    if symbols is not None and not isinstance(symbols, list):
        raise HTTPException(status_code=400, detail="symbols 必须为数组")
    try:
        scan = hunting.scan(date, strategy=body.get("strategy"),
                            method=body.get("method"), symbols=symbols)
    except SupportError as exc:
        raise _bad_request(exc) from exc
    picked = scan.get("items") or []
    if symbols:
        wanted = {str(s).strip() for s in symbols}
        picked = [x for x in picked if x["symbol"] in wanted]
    result = hunting.add_tracks(picked, _owner(user), operator=_owner(user),
                                default_status=str(body.get("status") or "watching"))
    result["scan"] = {"date": scan.get("date"), "trade_date": scan.get("trade_date"),
                      "degraded": scan.get("degraded"), "errors": scan.get("errors")}
    return result


@router.patch("/hunting/tracks/{track_id}")
async def hunting_update_track(track_id: int, body: Dict[str, Any],
                               user: Dict = Depends(get_non_guest_user)):
    try:
        item = hunting.update_track(track_id, _owner(user),
                                    status=body.get("status"),
                                    note=body.get("note"),
                                    operator=_owner(user))
    except ValueError as exc:
        raise _bad_request(exc) from exc
    if not item:
        raise HTTPException(status_code=404, detail="跟踪记录不存在")
    return item


@router.delete("/hunting/tracks/{track_id}")
async def hunting_delete_track(track_id: int, user: Dict = Depends(get_non_guest_user)):
    if not hunting.delete_track(track_id, _owner(user)):
        raise HTTPException(status_code=404, detail="跟踪记录不存在")
    return {"success": True, "id": track_id}


@router.get("/hunting/summary")
async def hunting_summary(user: Dict = Depends(get_non_guest_user)):
    return hunting.track_summary(_owner(user))


# ─── 执行计划 ─────────────────────────────────────────────────

@router.get("/plans")
async def list_plans(status: Optional[str] = None, limit: int = 50,
                     user: Dict = Depends(get_non_guest_user)):
    items = plans.list_plans(_owner(user), status=status, limit=limit)
    return {"items": items, "count": len(items)}


@router.post("/plans")
async def create_plan(body: Dict[str, Any], user: Dict = Depends(get_non_guest_user)):
    try:
        return plans.create_plan(body, _owner(user), operator=_owner(user))
    except plans.PlanError as exc:
        raise _bad_request(exc) from exc


@router.post("/plans/from-hunting")
async def create_plan_from_hunting(body: Dict[str, Any],
                                   user: Dict = Depends(get_non_guest_user)):
    """狩猎场 → 计划: 一条龙生成(不含破位股), 落为 draft 待人工确认"""
    date = str(body.get("date") or "").strip()
    if not date:
        raise HTTPException(status_code=400, detail="date 不能为空")
    try:
        scan = hunting.scan(date, strategy=body.get("strategy"), method=body.get("method"),
                            limit=int(body.get("limit") or hunting.MAX_CANDIDATES))
        payload = plans.build_payload_from_scan(
            scan, name=str(body.get("name") or ""),
            exposure=float(body.get("exposure", 1.0)),
            position_ratio=float(body.get("position_ratio", 0.05)),
            only_near=bool(body.get("only_near")), max_legs=int(body.get("max_legs") or plans.MAX_LEGS))
        if not payload["legs"]:
            raise HTTPException(status_code=400,
                                detail=scan.get("message") or "无可交易候选(全部破位或无数据)")
        plan = plans.create_plan(payload, _owner(user), operator=_owner(user))
    except plans.PlanError as exc:
        raise _bad_request(exc) from exc
    plan["scan"] = {"date": scan.get("date"), "trade_date": scan.get("trade_date"),
                    "errors": scan.get("errors")}
    return plan


@router.post("/plans/import")
async def import_plan(body: Dict[str, Any], user: Dict = Depends(get_non_guest_user)):
    try:
        return plans.import_csv(str(body.get("csv") or ""), _owner(user),
                                operator=_owner(user), name=str(body.get("name") or ""),
                                plan_date=str(body.get("plan_date") or ""))
    except plans.PlanError as exc:
        raise _bad_request(exc) from exc


@router.get("/plans/{plan_id}")
async def get_plan(plan_id: str, user: Dict = Depends(get_non_guest_user)):
    plan = plans.get_plan(plan_id, _owner(user))
    if not plan:
        raise HTTPException(status_code=404, detail="计划不存在")
    return plan


@router.post("/plans/{plan_id}/status")
async def set_plan_status(plan_id: str, body: Dict[str, Any],
                          user: Dict = Depends(get_non_guest_user)):
    try:
        return plans.set_status(plan_id, _owner(user), str(body.get("status") or ""),
                                operator=_owner(user), reason=str(body.get("reason") or ""))
    except plans.PlanError as exc:
        raise _bad_request(exc) from exc


@router.post("/plans/{plan_id}/legs/{leg_id}/fill")
async def fill_leg(plan_id: str, leg_id: int, body: Dict[str, Any],
                   user: Dict = Depends(get_non_guest_user)):
    try:
        return plans.fill_leg(plan_id, leg_id, _owner(user),
                              price=body.get("price"), quantity=body.get("quantity"),
                              operator=_owner(user),
                              sync_portfolio=bool(body.get("sync_portfolio", True)))
    except plans.PlanError as exc:
        raise _bad_request(exc) from exc


@router.post("/plans/{plan_id}/legs/{leg_id}/cancel")
async def cancel_leg(plan_id: str, leg_id: int, body: Optional[Dict[str, Any]] = None,
                     user: Dict = Depends(get_non_guest_user)):
    try:
        return plans.cancel_leg(plan_id, leg_id, _owner(user), operator=_owner(user),
                                reason=str((body or {}).get("reason") or ""))
    except plans.PlanError as exc:
        raise _bad_request(exc) from exc


@router.get("/plans/{plan_id}/export", response_class=PlainTextResponse)
async def export_plan(plan_id: str, user: Dict = Depends(get_non_guest_user)):
    """导出交换 CSV(供 PTrade 等外部通道人工确认后使用)"""
    plan = plans.get_plan(plan_id, _owner(user))
    if not plan:
        raise HTTPException(status_code=404, detail="计划不存在")
    return PlainTextResponse(plans.export_csv(plan), media_type="text/csv; charset=utf-8")


# ─── 风险预算 ─────────────────────────────────────────────────

@router.post("/risk/var")
async def risk_var(body: Dict[str, Any], user: Dict = Depends(get_non_guest_user)):
    """VaR 风险预算: returns 或 equity 二选一, temps 用于连续降温守卫"""
    returns = body.get("returns")
    equity = body.get("equity")
    if not returns and not equity:
        raise HTTPException(status_code=400, detail="需提供 returns 或 equity")
    if returns is not None and not isinstance(returns, list):
        raise HTTPException(status_code=400, detail="returns 必须为数组")
    if equity is not None and not isinstance(equity, list):
        raise HTTPException(status_code=400, detail="equity 必须为数组")
    try:
        level = float(body.get("level", risk_budget.VAR_LEVEL))
    except (TypeError, ValueError):
        raise HTTPException(status_code=400, detail="level 必须为数字") from None
    if not 0.5 < level < 1:
        raise HTTPException(status_code=400, detail="level 须在 (0.5, 1) 之间")
    return risk_budget.risk_budget(returns=returns, equity=equity, level=level,
                                   temps=body.get("temps"))


@router.get("/summary")
async def exec_summary(user: Dict = Depends(get_non_guest_user)):
    """概览: 跟踪状态计数 + 计划状态计数 + 待成交腿"""
    owner = _owner(user)
    return {"hunting": hunting.track_summary(owner), "plans": plans.plan_stats(owner)}


# ─── 受控文件交换 (FR-7.8-3) ─────────────────────────────────

@router.get("/exchange/files")
async def exchange_files(limit: int = 50, user: Dict = Depends(get_non_guest_user)):
    """交换目录清单(仅 data/exchange 下 .csv)"""
    return {"items": exchange.list_files(limit), "dir": exchange.EXCHANGE_DIR}


@router.post("/exchange/export")
async def exchange_export(body: Dict[str, Any], user: Dict = Depends(get_non_guest_user)):
    """计划 → 交换文件(路径白名单 + 审计)"""
    plan = plans.get_plan(str(body.get("plan_id") or ""), _owner(user))
    if not plan:
        raise HTTPException(status_code=404, detail="计划不存在")
    try:
        return exchange.write_plan(plan, _owner(user), filename=body.get("filename"))
    except exchange.ExchangeError as exc:
        raise _bad_request(exc) from exc


@router.get("/exchange/files/{name}", response_class=PlainTextResponse)
async def exchange_read(name: str, user: Dict = Depends(get_non_guest_user)):
    try:
        return PlainTextResponse(exchange.read_text(name, _owner(user)),
                                 media_type="text/csv; charset=utf-8")
    except exchange.ExchangeError as exc:
        raise _bad_request(exc) from exc


@router.post("/exchange/import")
async def exchange_import(body: Dict[str, Any], user: Dict = Depends(get_non_guest_user)):
    """交换文件 → 计划(先读白名单文件, 再走与 CSV 导入同一校验)"""
    try:
        text = exchange.read_text(str(body.get("file") or ""), _owner(user))
        return plans.import_csv(text, _owner(user), operator=_owner(user),
                                name=str(body.get("name") or ""),
                                plan_date=str(body.get("plan_date") or ""))
    except (exchange.ExchangeError, plans.PlanError) as exc:
        raise _bad_request(exc) from exc


@router.delete("/exchange/files/{name}")
async def exchange_delete(name: str, user: Dict = Depends(get_non_guest_user)):
    try:
        ok = exchange.delete_file(name, _owner(user))
    except exchange.ExchangeError as exc:
        raise _bad_request(exc) from exc
    if not ok:
        raise HTTPException(status_code=404, detail="文件不存在")
    return {"success": True, "file": name}
