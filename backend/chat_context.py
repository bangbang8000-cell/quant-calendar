#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.1.6 (F4): 智能问股上下文增强 — 纯函数

- build_context_snippet: 持仓/自选上下文 → prompt 片段
- search_history: 历史会话检索 (关键词匹配)
- annotate_timestamp: 回答尾部数据时效标注
"""
import datetime


def build_context_snippet(holdings, watchlist, max_items=8):
    """持仓/自选 → 上下文片段 (供 prompt 注入)。
    holdings/watchlist: [{code, name}] 或 [code]
    返回 {"snippet": str, "holding_count": int, "watch_count": int}
    """
    def _fmt(items, limit):
        out = []
        for it in (items or [])[:limit]:
            if isinstance(it, dict):
                code = it.get("code") or ""
                name = it.get("name") or ""
                out.append(name if name and name != code else code)
            elif it:
                out.append(str(it))
        return out

    h = _fmt(holdings, max_items)
    w = _fmt(watchlist, max_items)
    parts = []
    if h:
        parts.append("用户持仓: " + "、".join(h))
    if w:
        parts.append("用户自选: " + "、".join(w))
    snippet = "；".join(parts) if parts else "用户暂无持仓与自选"
    return {"snippet": snippet, "holding_count": len(h), "watch_count": len(w)}


def search_history(messages, query, top=3):
    """历史会话检索: messages: [{role, content}], query 关键词 → 相关消息前 top 条。"""
    q = (query or "").strip().lower()
    if not q or not messages:
        return []
    scored = []
    for m in messages:
        content = str(m.get("content") or "")
        if q in content.lower():
            scored.append({"role": m.get("role") or "user", "content": content})
    return scored[:top]


def annotate_timestamp(text, ts=None):
    """回答尾部追加数据时效标注 (ts: datetime 或 ISO 字符串)。"""
    text = (text or "").rstrip()
    if not text:
        return text
    if ts is None:
        ts = datetime.datetime.now()
    if isinstance(ts, str):
        try:
            ts = datetime.datetime.fromisoformat(ts)
        except (TypeError, ValueError):
            ts = datetime.datetime.now()
    mark = "数据截至 " + ts.strftime("%Y-%m-%d %H:%M")
    return text + "\n\n" + mark
