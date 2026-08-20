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

from fastapi import APIRouter, Depends, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from auth import get_current_user, get_non_guest_user
from paths import DATA_DIR

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/ai/chat", tags=["ai-chat"])

HISTORY_FILE = os.path.join(DATA_DIR, "chat_history.json")


def _resolve_stock_name(code: str) -> str:
    """stock_manager 解析股票名, 裸代码(无后缀)时补 .SZ/.SH (v3.15: 问股历史缺名兜底)"""
    code = (code or "").strip()
    if not code:
        return code
    try:
        from stock_info import stock_manager
        n = stock_manager.get_name(code)
        if n and n != code:
            return n
        if "." not in code:
            for suffix in (".SZ", ".SH"):
                cand = code + suffix
                n = stock_manager.get_name(cand)
                if n and n != cand:
                    return n
    except Exception:
        logger.warning("操作异常 (v3.4.0-T8)")
    return code


# ── Models ──

class ChatRequest(BaseModel):
    stock_code: str = ""
    message: str
    history: list = []

class QuickChatRequest(BaseModel):
    stock_code: str
    mode: str = "comprehensive"  # trend | fundamental | comprehensive


# ── History Helpers ──

def _resolve_username(user) -> str:
    """从依赖注入的 user dict 解析当前用户名 (v3.17.13: 未登录/直接调用回退 default)"""
    if isinstance(user, dict):
        return user.get("username") or "default"
    return "default"


def _load_history(username: str = 'default') -> list:
    """加载指定用户的聊天历史 (v3.17.13: 按用户隔离; SQLite 为主, JSON 仅 default 兼容读取)"""
    try:
        import db
        if db.schema_ok():
            rows = db.chat_all(username)
            if rows:
                # 按 stock_code 聚合 (保持时间顺序)
                sessions = []
                by_code = {}
                for r in rows:
                    code = r['stock_code'] or ''
                    if code not in by_code:
                        # v3.15: 读 SQLite stock_name 列, 空则用 stock_manager 兜底
                        sname = (r.get('stock_name') or '').strip()
                        if not sname or sname == code:
                            sname = _resolve_stock_name(code)
                        by_code[code] = {
                            "id": r['id'],
                            "stock_code": code,
                            "stock_name": sname,
                            "created_at": r['created_at'],
                            "messages": []
                        }
                        sessions.append(by_code[code])
                    by_code[code]['messages'].append({
                        "role": r['role'],
                        "content": r['content'],
                        "time": r['created_at']
                    })
                return sessions
    except Exception:
        logger.warning("操作异常 (v3.4.0-T8)")
    # 兼容读取: 仅 default 读取历史 JSON 存档 (存量共享只读归档, 已不再写入)
    if username == 'default' and os.path.exists(HISTORY_FILE):
        try:
            with open(HISTORY_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                return data.get("sessions", [])
        except Exception:
            logger.warning("操作异常 (v3.4.0-T8)")
    return []


def _save_history(sessions: list, username: str = 'default'):
    """保存聊天历史 (v3.17.13: SQLite 为主, 按用户写入; JSON 不再双写, 仅保留兼容读取)"""
    try:
        import db
        if db.schema_ok():
            db.chat_clear(username)
            for s in sessions:
                code = s.get('stock_code', '') or ''
                sname = (s.get('stock_name') or '').strip()
                if not sname or sname == code:
                    sname = _resolve_stock_name(code)
                for m in s.get('messages', []):
                    db.chat_append(username, code, m.get('role', 'user'), m.get('content', ''), sname)
    except Exception:
        logger.warning("操作异常 (v3.4.0-T8)")


# ── v3.17.1 (FR-3.17.1): 智能投顾助手 helpers ─────────────────

def _load_session_messages(stock_code: str, limit_rounds: int = 6, username: str = 'default') -> list:
    """读取该股票会话的历史消息（旧→新），供多轮追问使用 (A. 多轮上下文; v3.17.13: 按用户)"""
    if not stock_code:
        return []
    try:
        sessions = _load_history(username)
    except Exception:
        return []
    msgs = []
    for s in sessions:
        if s.get("stock_code") == stock_code:
            for m in s.get("messages", []):
                msgs.append({
                    "role": m.get("role", "user"),
                    "content": m.get("content", ""),
                    "time": m.get("time", ""),
                })
    msgs.sort(key=lambda x: x.get("time") or "")
    return msgs[-(limit_rounds * 2):]


def _resolve_chat_intent(message: str, current_stock: str = None):
    """解析意图/主代码/名称 — 返回 (intent, stock_code, stock_name)"""
    from stock_scope import parse_stock_intent
    from stock_info import stock_manager
    intent = parse_stock_intent(message, current_stock)
    code = intent.get("stock_code") or current_stock or ""
    name = intent.get("stock_name") or (stock_manager.get_name(code) if code else "")
    return intent, code, name


def _build_chat_prompts(message: str, stock_code: str, stock_name: str, username: str = 'default'):
    """统一组装 system/user prompt — FR-3.17.1 智能投顾助手

    - A. 多轮上下文：注入同一股票会话前几轮结论 (v3.17.13: 按当前用户)
    - B. 多股票对比：>=2 代码 → 对比数据卡 + 对比 system prompt
    - C. 事实护栏：注入数据卡 + FACT_GUARD_RULE（禁止编造数字）

    返回 (system_prompt, user_prompt, tool_data_extra)
    """
    from agent_tools import get_trend_analysis, get_consensus_snapshot, get_market_context
    from prompt_facts import parse_compare_request, build_compare_table, build_stock_fact_card, build_conversation_context
    from prompts.ask_stock import (
        build_ask_stock_system_prompt, build_compare_system_prompt,
        build_ask_stock_user_prompt, FACT_GUARD_RULE,
    )
    from stock_info import stock_manager

    trend = get_trend_analysis(stock_code) if stock_code else {}
    consensus = get_consensus_snapshot(stock_code) if stock_code else {}
    market = get_market_context()

    # A. 多轮上下文：同一股票会话前几轮结论 (精简最近 6 轮, 按当前用户)
    conv = build_conversation_context(_load_session_messages(stock_code, username=username)) if stock_code else ""

    # B. 多股对比检测：主代码 + 消息中解析出的全部代码
    cmp_codes = [stock_code] if stock_code else []
    pc = parse_compare_request(message, stock_code)
    for c in pc.get("codes", []):
        if c not in cmp_codes:
            cmp_codes.append(c)
    is_compare = len(cmp_codes) >= 2

    extra = {
        "is_compare": is_compare,
        "compare_codes": cmp_codes if is_compare else [],
        "trend_available": "error" not in trend,
        "consensus_available": "error" not in consensus,
        "market_available": "error" not in market,
    }

    if is_compare:
        compare_data = build_compare_table(cmp_codes)
        primary_name = stock_manager.get_name(cmp_codes[0]) if cmp_codes else stock_name
        system_prompt = build_compare_system_prompt()
        user_prompt = build_ask_stock_user_prompt(
            cmp_codes[0], primary_name, message, trend, consensus, market,
            fact_instruction=FACT_GUARD_RULE,
            conversation_context=conv,
            compare_data=compare_data,
        )
        extra["compare_available"] = bool(compare_data and compare_data.get("available"))
    else:
        fact_card = build_stock_fact_card(stock_code) if stock_code else {}
        system_prompt = build_ask_stock_system_prompt()
        user_prompt = build_ask_stock_user_prompt(
            stock_code, stock_name, message, trend, consensus, market,
            fact_card=fact_card,
            fact_instruction=FACT_GUARD_RULE,
            conversation_context=conv,
        )
        extra["fact_available"] = bool(fact_card and fact_card.get("source") != "unavailable")

    return system_prompt, user_prompt, extra


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
async def chat(request: Request, body: ChatRequest, user: dict = Depends(get_non_guest_user)):
    """AI 对话 — 主端点 (v3.17.1: 数据卡事实护栏 + 多股对比 + 多轮上下文;
    v3.17.13: 按当前用户隔离读写)"""
    return await _run_chat(body, _resolve_username(user))


async def _run_chat(body: ChatRequest, username: str) -> dict:
    """AI 对话 — 内部实现 (v3.17.13: 按用户读写, 供 chat/quick 复用)"""
    intent, stock_code, stock_name = _resolve_chat_intent(body.message, body.stock_code)
    if not stock_code:
        return {"reply": "请提供股票代码或名称，例如：\n- 分析茅台\n- 600519 趋势怎么看\n- 比亚迪怎么样", "intent": intent}

    # v3.5.0-T4: RAG 上下文增强 — 注入当前用户历史评估结果 + 自选状态 (v3.17.13: 按用户)
    rag_context = ""
    try:
        from ai_evaluator import ai_evaluator
        hist = ai_evaluator._load_history_for(username)
        if hist:
            # 找该股票最近一次评估
            for h in reversed(hist):
                if h.get("stock_code") == stock_code:
                    result = h.get("result", {})
                    rag_context += (
                        f"\n[历史AI评估 {h.get('evaluate_time', '')[:10]}]\n"
                        f"评分: {result.get('total_score')} ({result.get('level')})\n"
                        f"结论: {result.get('detailed_report', '')[:200]}\n"
                    )
                    break
    except Exception:
        pass
    # 自选状态
    try:
        import db
        wl = db.watchlist_get(username)
        if any(r["stock_code"] == stock_code for r in wl):
            rag_context += "\n[该股票在当前用户自选列表中]\n"
    except Exception:
        pass
    if rag_context:
        body.message = body.message + "\n\n[参考上下文]" + rag_context

    # 3. 构建 Prompt (FR-3.17.1: 数据卡事实护栏 + 多股对比 + 多轮上下文)
    system_prompt, user_prompt, tool_data = _build_chat_prompts(body.message, stock_code, stock_name, username=username)

    # 4. LLM 调用
    reply = await _call_llm(system_prompt, user_prompt)

    # 5. 保存历史 (按用户)
    sessions = _load_history(username)
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
    _save_history(sessions, username)

    return {
        "reply": reply,
        "session_id": session["id"],
        "intent": intent,
        "tool_data": tool_data,
    }


@router.post("/quick")
async def quick_chat(body: QuickChatRequest, user: dict = Depends(get_non_guest_user)):
    """快捷提问 — 预设分析模式 (v3.17.13: 按当前用户)"""
    mode_messages = {
        "trend": "帮我做一下技术趋势分析",
        "fundamental": "帮我看看基本面情况",
        "comprehensive": "帮我做个综合分析",
    }
    msg = mode_messages.get(body.mode, mode_messages["comprehensive"])

    req = ChatRequest(stock_code=body.stock_code, message=msg)
    return await _run_chat(req, _resolve_username(user))


@router.get("/history")
async def get_history(view: str = "date", limit: int = 50, offset: int = 0,
                      user: Optional[dict] = Depends(get_current_user)):
    """获取问股历史列表 — 支持 date/month/stock 分组视图 (v3.17.13: 按当前用户;
    v3.17.9 FR-3.17.9: 支持 limit/offset 分页, 先切片会话再分组)"""
    sessions = _load_history(_resolve_username(user))
    sessions = sessions[offset:offset + limit]
    items = []
    for s in sessions:
        code = s.get("stock_code", "") or ""
        # v3.15: 兜底解析股票名 (旧 JSON 记录可能缺 stock_name)
        sname = (s.get("stock_name") or "").strip()
        if not sname or sname == code:
            sname = _resolve_stock_name(code)
        items.append({
            "id": s["id"],
            "stock_code": code,
            "stock_name": sname,
            "first_msg": s["messages"][0]["content"][:50] if s.get("messages") else "",
            "msg_count": len(s.get("messages", [])),
            "created_at": s.get("created_at", ""),
            "date": s.get("created_at", "")[:10],
            "month": s.get("created_at", "")[:7],
        })

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
async def get_history_detail(session_id: str, user: Optional[dict] = Depends(get_current_user)):
    """获取单条对话详情 (v3.17.13: 按当前用户)"""
    sessions = _load_history(_resolve_username(user))
    for s in sessions:
        if s["id"] == session_id:
            return {"id": s["id"], "messages": s.get("messages", [])}
    return {"error": "未找到该对话"}


@router.delete("/history/{session_id}")
async def delete_history(session_id: str, user: Optional[dict] = Depends(get_current_user)):
    """删除单条对话 (v3.17.13: 按当前用户)"""
    username = _resolve_username(user)
    sessions = _load_history(username)
    sessions = [s for s in sessions if s["id"] != session_id]
    _save_history(sessions, username)
    return {"ok": True}


@router.post("/stream")
async def chat_stream(body: ChatRequest, user: dict = Depends(get_non_guest_user)):
    """流式 AI 对话 — SSE (非阻塞, FR-3.17.1: 数据卡事实护栏 + 多股对比 + 多轮上下文;
    v3.17.13: 按当前用户隔离读写)"""
    from ai_evaluator import ai_evaluator

    username = _resolve_username(user)
    _intent, stock_code, stock_name = _resolve_chat_intent(body.message, body.stock_code)
    if not stock_code:
        async def err_gen():
            yield "data: {\"error\": \"请提供股票代码或名称\"}\n\n"
        return StreamingResponse(err_gen(), media_type="text/event-stream")

    system_prompt, user_prompt, _tool_data = _build_chat_prompts(body.message, stock_code, stock_name, username=username)

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
                        logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
                        pass

            # Save to history (v3.17.13: 按当前用户)
            sessions = _load_history(username)
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
            _save_history(sessions, username)

            yield f"data: {json.dumps({'done': True, 'session_id': session['id']})}\n\n"

        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")
