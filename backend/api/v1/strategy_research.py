#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略研究 API 路由 (FR: 策略研究 P0)
- 策略列表/schema/参数更新
- 手工运行(互斥) / 回测
- 运行历史/结果
- PTrade 代码导出
"""
import logging
from typing import Any, Dict, Optional

from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_active_user
from strategy_db import StrategyBusyError, append_run, finish_run, get_run, list_runs
from strategy_sdk.base import StrategyContext
from strategy_sdk.registry import registry, StrategyNotFoundError

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/strategies", tags=["策略研究"])


@router.get("")
async def list_strategies(_: Dict = Depends(get_current_active_user)):
    """策略列表(内置注册表)"""
    return registry.list()


@router.get("/{sid}/schema")
async def get_strategy_schema(sid: str, _: Dict = Depends(get_current_active_user)):
    """参数表单 schema(前端零构建渲染契约)"""
    try:
        return registry.get(sid).params_schema()
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f"策略 {sid} 不存在")


@router.put("/{sid}")
async def update_strategy(sid: str, body: Dict[str, Any],
                          _: Dict = Depends(get_current_active_user)):
    """更新策略参数覆盖/启停"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f"策略 {sid} 不存在")
    params = body.get("params") or {}
    validated = st.validate_params(params)
    from strategy_db import upsert_def
    upsert_def(sid, {
        "name": st.name, "version": st.version, "type": st.id,
        "params": validated, "enabled": body.get("enabled", True),
    })
    return {"id": sid, "params": validated, "enabled": body.get("enabled", True)}


@router.post("/{sid}/run")
async def run_strategy(sid: str, body: Dict[str, Any],
                       _: Dict = Depends(get_current_active_user)):
    """手工运行(互斥) —— 当前为同步骨架: 生成信号 + 落库"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f"策略 {sid} 不存在")
    params = st.validate_params(body.get("params") or {})
    mode = body.get("mode", "manual")
    try:
        rid = append_run(sid, st.version, params, mode, "running")
    except StrategyBusyError as e:
        raise HTTPException(status_code=409, detail=str(e))
    try:
        # 骨架实现: 用占位 portal(无数据时返回空) —— 真实取数接入三源后替换
        from strategy_sdk.testsupport import FakePortal
        portal = FakePortal(dates=[], symbols=[])
        ctx = StrategyContext(portal=portal, params=params, as_of="2026-08-18")
        holdings = st.generate_signals(ctx)
        summary = {
            "holdings_days": len(holdings) if holdings is not None else 0,
            "symbols": list(holdings.columns) if holdings is not None and len(holdings.columns) else [],
        }
        finish_run(rid, "success", summary=summary)
        return {"id": rid, "status": "success", "summary": summary}
    except Exception as e:
        logger.exception("策略 %s 运行失败", sid)
        finish_run(rid, "failed", error=str(e))
        raise HTTPException(status_code=500, detail=f"运行失败: {e}")


@router.post("/{sid}/backtest")
async def backtest_strategy(sid: str, body: Dict[str, Any],
                            _: Dict = Depends(get_current_active_user)):
    """回测: SDK 信号生成持仓矩阵 → 回测器(复用 backtest.py 绩效口径)"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f"策略 {sid} 不存在")
    params = st.validate_params(body.get("params") or {})
    try:
        from strategy_sdk.backtest import backtest_holdings
        from strategy_sdk.testsupport import FakePortal
        portal = FakePortal(dates=[], symbols=[])
        ctx = StrategyContext(portal=portal, params=params,
                              as_of=body.get("end_date") or "2026-08-18")
        holdings = st.generate_signals(ctx)
        result = backtest_holdings(
            holdings,
            start_date=body.get("start_date"),
            end_date=body.get("end_date"),
            commission_rate=body.get("commission_rate", 0.0003),
            slippage=body.get("slippage", 0.001),
        )
        return {"strategy_id": sid, "params": params, "result": result}
    except Exception as e:
        logger.exception("策略 %s 回测失败", sid)
        raise HTTPException(status_code=500, detail=f"回测失败: {e}")


@router.get("/{sid}/runs")
async def strategy_runs(sid: str, limit: int = 50,
                        _: Dict = Depends(get_current_active_user)):
    """运行历史"""
    return list_runs(sid, limit=limit)


@router.get("/{sid}/runs/{rid}")
async def strategy_run_detail(sid: str, rid: str,
                              _: Dict = Depends(get_current_active_user)):
    """单次运行详情"""
    r = get_run(rid)
    if not r or r["strategy_id"] != sid:
        raise HTTPException(status_code=404, detail="运行记录不存在")
    return r


@router.get("/{sid}/ptrade-code")
async def strategy_ptrade_code(sid: str, top_n: Optional[int] = None,
                               benchmark: Optional[str] = None,
                               _: Dict = Depends(get_current_active_user)):
    """导出 PTrade 可直接运行的策略代码(模板+参数填充+静态校验)"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f"策略 {sid} 不存在")
    params: Dict[str, Any] = {}
    if top_n is not None:
        params["top_n"] = top_n
    if benchmark is not None:
        params["benchmark"] = benchmark
    try:
        code = st.to_ptrade_code(params)
        return {"strategy_id": sid, "code": code}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
