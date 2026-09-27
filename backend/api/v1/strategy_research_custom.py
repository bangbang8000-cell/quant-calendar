#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略研究 API 路由 — 6.3.0 (T-6.3.0.4) 拆出: 自定义策略 (v3.22 I3B)

AI 代写全新策略 / 读代码 / 本地回测 / AI 优化。由 strategy_research.py 以
include_router 挂载, 路径 (/strategies/custom*) 与注册顺序保持不变。
"""
import uuid
from typing import Any, Optional

from fastapi import APIRouter, Body, Depends, HTTPException

from auth import get_non_guest_user
from strategy_custom import (
    create_custom, list_custom, backtest_custom, ai_optimize, _code_from_def,
)
from strategy_db import get_def

router = APIRouter(tags=['策略研究'])


@router.get('/custom')
async def api_custom_list(current_user: Any = Depends(get_non_guest_user)):
    """列出全部自定义策略 (type=custom)"""
    return {'data': {'customs': list_custom()}}


@router.post('/custom')
async def api_custom_create(payload: dict, current_user: Any = Depends(get_non_guest_user)):
    """AI 代写全新策略: prompt -> LLM -> 校验 -> 存 strategy_defs(type=custom)"""
    name = (payload.get('name') or '').strip() or '自定义策略'
    prompt = payload.get('prompt') or ''
    code = payload.get('code') or ''
    sid = (payload.get('sid') or '').strip() or ('custom_' + uuid.uuid4().hex[:8])
    if not code and not prompt:
        raise HTTPException(400, '需提供 code 或 prompt')
    try:
        result = create_custom(sid, name, code=code or None, prompt=prompt or None)
    except Exception as e:
        raise HTTPException(400, str(e))
    return {'data': result}


@router.get('/custom/{sid}/code')
async def api_custom_code(sid: str, current_user: Any = Depends(get_non_guest_user)):
    """读取自定义策略代码"""
    d = get_def(sid)
    if not d or d.get('type') != 'custom':
        raise HTTPException(404, '自定义策略不存在: ' + sid)
    return {'data': {'sid': sid, 'name': d.get('name', ''), 'code': _code_from_def(d)}}


@router.post('/custom/{sid}/backtest')
async def api_custom_backtest(sid: str, payload: Optional[dict] = Body(default=None),
                              current_user: Any = Depends(get_non_guest_user)):
    """本地回测自定义策略 (轻量 PTrade 兼容执行层)"""
    payload = payload or {}
    try:
        result = backtest_custom(
            sid,
            start_date=payload.get('start_date'),
            end_date=payload.get('end_date'),
            capital=float(payload.get('capital') or 100000.0),
        )
    except ValueError as e:
        raise HTTPException(400, str(e))
    except Exception as e:
        raise HTTPException(500, '回测失败: ' + str(e))
    return {'data': result}


@router.post('/custom/{sid}/ai-optimize')
async def api_custom_optimize(sid: str, payload: Optional[dict] = Body(default=None),
                              current_user: Any = Depends(get_non_guest_user)):
    """AI 优化: 分析代码+回测 -> 改进代码"""
    payload = payload or {}
    try:
        result = ai_optimize(sid, backtest=payload.get('backtest'))
    except ValueError as e:
        raise HTTPException(400, str(e))
    except Exception as e:
        raise HTTPException(500, 'AI 优化失败: ' + str(e))
    return {'data': result}
