#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 智能问股 — 对话 API

端点:
  POST /api/ai/chat          — 发送消息，获取 AI 回复
  POST /api/ai/chat/quick    — 快捷提问 (trend/fundamental/comprehensive)
  GET  /api/ai/chat/history  — 获取问股历史列表
  GET  /api/ai/chat/history/{id} — 获取单条对话详情
  DELETE /api/ai/chat/history/{id} — 删除单条对话
"""

import asyncio
import json
import logging
import os
import uuid
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from paths import DATA_DIR

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/ai/chat", tags=["ai-chat"])

HISTORY_FILE = os.path.join(DATA_DIR, "chat_history.json")


# ── Models ──

class ChatRequest(BaseModel):
    stock_code: str = ""
    message: str
    history: list = []

class QuickChatRequest(BaseModel):
    stock_code: str
    mode: str = "comprehensive"  # trend | fundamental | comprehensive


# ── History Helpers ──

def _load_history() -> list:
    if os.path.exists(HISTORY_FILE):
        try:
            with open(HISTORY_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                return data.get("sessions", [])
        except Exception:
            pass
    return []


def _save_history(sessions: list):
    os.makedirs(DATA_DIR, exist_ok=True)
    with open(HISTORY_FILE, 'w', encoding='utf-8') as f:
        json.dump({"sessions": sessions}, f, ensure_ascii=False, indent=2)


# ── LLM Call (async, non-blocking) ──

def _call_llm_sync(system_prompt: str, user_prompt: str) -> str:
    """同步 LLM 调用 — 在 thread pool 中执行"""
    import requests
    from ai_evaluator import ai_evaluator

    models = ai_evaluator.get_enabled_models()
    if not models:
        return "未配置 AI 模型"

    model = models[0]
    endpoint = f"{model.base_url}/chat/completions"
    headers = {
        "Authorization": f"Bearer {model.api_key}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": model.model,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        "temperature": 0.3,
        "max_tokens": min(model.max_tokens, 2048),
    }

    resp = requests.post(endpoint, headers=headers, json=payload, timeout=120)
    resp.raise_for_status()
    data = resp.json()
    return data["choices"][0]["message"]["content"]


async def _call_llm(system_prompt: str, user_prompt: str) -> str:
    """异步 LLM 调用 — 在线程池中执行，不阻塞事件循环"""
    try:
        return await asyncio.to_thread(_call_llm_sync, system_prompt, user_prompt)
    except Exception as e:
        logger.error(f"LLM call failed: {e}")
        return f"AI 分析暂时不可用: {str(e)}"


# ── API Endpoints ──

@router.post("")
async def chat(request: Request, body: ChatRequest):
    """AI 对话 — 主端点"""
    from stock_scope import parse_stock_intent
    from agent_tools import get_trend_analysis, get_consensus_snapshot, get_market_context
    from stock_info import stock_manager
    from prompts.ask_stock import build_ask_stock_system_prompt, build_ask_stock_user_prompt

    # 1. 解析意图
    intent = parse_stock_intent(body.message, body.stock_code)
    stock_code = intent.get("stock_code") or body.stock_code or ""
    if not stock_code:
        return {"reply": "请提供股票代码或名称，例如：\n- 分析茅台\n- 600519 趋势怎么看\n- 比亚迪怎么样", "intent": intent}

    stock_name = intent.get("stock_name") or stock_manager.get_name(stock_code)

    # 2. 收集数据
    trend = get_trend_analysis(stock_code)
    consensus = get_consensus_snapshot(stock_code)
    market = get_market_context()

    # 3. 构建 Prompt
    system_prompt = build_ask_stock_system_prompt()
    user_prompt = build_ask_stock_user_prompt(
        stock_code, stock_name, body.message,
        trend, consensus, market,
    )

    # 4. LLM 调用
    reply = await _call_llm(system_prompt, user_prompt)

    # 5. 保存历史
    sessions = _load_history()
    session = {
        "id": str(uuid.uuid4())[:8],
        "stock_code": stock_code,
        "stock_name": stock_name,
        "created_at": datetime.now().isoformat(),
        "messages": [
            {"role": "user", "content": body.message, "time": datetime.now().isoformat()},
            {"role": "assistant", "content": reply, "time": datetime.now().isoformat()},
        ],
    }
    sessions.insert(0, session)
    if len(sessions) > 50:  # Keep last 50
        sessions = sessions[:50]
    _save_history(sessions)

    return {
        "reply": reply,
        "session_id": session["id"],
        "intent": intent,
        "tool_data": {
            "trend_available": "error" not in trend,
            "consensus_available": "error" not in consensus,
            "market_available": "error" not in market,
        },
    }


@router.post("/quick")
async def quick_chat(body: QuickChatRequest):
    """快捷提问 — 预设分析模式"""
    mode_messages = {
        "trend": "帮我做一下技术趋势分析",
        "fundamental": "帮我看看基本面情况",
        "comprehensive": "帮我做个综合分析",
    }
    msg = mode_messages.get(body.mode, mode_messages["comprehensive"])

    req = ChatRequest(stock_code=body.stock_code, message=msg)
    return await chat(Request, req)


@router.get("/history")
async def get_history(view: str = "date"):
    """获取问股历史列表 — 支持 date/month/stock 分组视图"""
    sessions = _load_history()
    items = [
        {
            "id": s["id"],
            "stock_code": s.get("stock_code", ""),
            "stock_name": s.get("stock_name", ""),
            "first_msg": s["messages"][0]["content"][:50] if s.get("messages") else "",
            "msg_count": len(s.get("messages", [])),
            "created_at": s.get("created_at", ""),
            "date": s.get("created_at", "")[:10],
            "month": s.get("created_at", "")[:7],
        }
        for s in sessions
    ]

    if view == "month":
        grouped = {}
        for item in items:
            m = item["month"]
            if m not in grouped:
                grouped[m] = []
            grouped[m].append(item)
        return [{"month": k, "items": v, "count": len(v)} for k, v in sorted(grouped.items(), reverse=True)]

    elif view == "stock":
        grouped = {}
        for item in items:
            key = f"{item['stock_name']}({item['stock_code']})"
            if key not in grouped:
                grouped[key] = []
            grouped[key].append(item)
        return [{"stock": k, "items": v, "count": len(v)} for k, v in sorted(grouped.items())]

    else:  # date
        grouped = {}
        for item in items:
            d = item["date"]
            if d not in grouped:
                grouped[d] = []
            grouped[d].append(item)
        return [{"date": k, "items": v, "count": len(v)} for k, v in sorted(grouped.items(), reverse=True)]


@router.get("/history/{session_id}")
async def get_history_detail(session_id: str):
    """获取单条对话详情"""
    sessions = _load_history()
    for s in sessions:
        if s["id"] == session_id:
            return {"id": s["id"], "messages": s.get("messages", [])}
    return {"error": "未找到该对话"}


@router.delete("/history/{session_id}")
async def delete_history(session_id: str):
    """删除单条对话"""
    sessions = _load_history()
    sessions = [s for s in sessions if s["id"] != session_id]
    _save_history(sessions)
    return {"ok": True}


@router.post("/stream")
async def chat_stream(body: ChatRequest):
    """流式 AI 对话 — SSE (非阻塞)"""
    from stock_scope import parse_stock_intent
    from agent_tools import get_trend_analysis, get_consensus_snapshot, get_market_context
    from stock_info import stock_manager
    from prompts.ask_stock import build_ask_stock_system_prompt, build_ask_stock_user_prompt
    from ai_evaluator import ai_evaluator

    intent = parse_stock_intent(body.message, body.stock_code)
    stock_code = intent.get("stock_code") or body.stock_code or ""
    stock_name = intent.get("stock_name") or stock_manager.get_name(stock_code)

    trend = get_trend_analysis(stock_code)
    consensus = get_consensus_snapshot(stock_code)
    market = get_market_context()

    system_prompt = build_ask_stock_system_prompt()
    user_prompt = build_ask_stock_user_prompt(stock_code, stock_name, body.message, trend, consensus, market)

    models = ai_evaluator.get_enabled_models()
    if not models:
        async def err_gen():
            yield "data: {\"error\": \"未配置 AI 模型\"}\n\n"
        return StreamingResponse(err_gen(), media_type="text/event-stream")

    model = models[0]
    payload = {
        "model": model.model,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        "temperature": 0.3,
        "max_tokens": min(model.max_tokens, 2048),
        "stream": True,
    }
    headers = {
        "Authorization": f"Bearer {model.api_key}",
        "Content-Type": "application/json",
    }
    endpoint = f"{model.base_url}/chat/completions"

    async def generate():
        import requests
        full_reply = ""
        try:
            # Run blocking HTTP call in thread pool
            resp = await asyncio.to_thread(
                requests.post, endpoint, headers=headers, json=payload,
                stream=True, timeout=120
            )
            for line in resp.iter_lines():
                if not line:
                    continue
                line_str = line.decode() if isinstance(line, bytes) else line
                if line_str.startswith("data: "):
                    data = line_str[6:]
                    if data == "[DONE]":
                        break
                    try:
                        chunk = json.loads(data)
                        delta = chunk["choices"][0].get("delta", {}).get("content", "")
                        if delta:
                            full_reply += delta
                            yield f"data: {json.dumps({'token': delta})}\n\n"
                    except Exception:
                        pass

            # Save to history
            sessions = _load_history()
            session = {
                "id": str(uuid.uuid4())[:8],
                "stock_code": stock_code,
                "stock_name": stock_name,
                "created_at": datetime.now().isoformat(),
                "messages": [
                    {"role": "user", "content": body.message, "time": datetime.now().isoformat()},
                    {"role": "assistant", "content": full_reply, "time": datetime.now().isoformat()},
                ],
            }
            sessions.insert(0, session)
            if len(sessions) > 50:
                sessions = sessions[:50]
            _save_history(sessions)

            yield f"data: {json.dumps({'done': True, 'session_id': session['id']})}\n\n"

        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")
