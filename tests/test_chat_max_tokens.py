# -*- coding: utf-8 -*-
"""
V4.8.2-fix (用户反馈): 个股问股失败 — 推理模型 reasoning_content 耗尽 max_tokens=2048 硬上限,
正式回复 content 为空。守护: chat.py 不得对 max_tokens 施加 2048 硬截断,
应使用模型配置的 max_tokens (v4-flash 需 8192 才能完成)。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _chat_src():
    return open(os.path.join(BASE, "backend", "api", "v1", "chat.py"), encoding="utf-8").read()


def test_chat_max_tokens_not_capped_v482fix():
    """问股 max_tokens 不得被 2048 硬截断 (推理模型 reasoning 吃光预算致回复为空)"""
    s = _chat_src()
    # 禁止 min(model.max_tokens, 2048) 式截断
    assert "min(model.max_tokens, 2048)" not in s, "max_tokens 被 2048 硬截断, 推理模型回复被吃光"
    assert "min(model.max_tokens, 2048)" not in s.replace("2048", "4096"), "存在其他硬上限截断"
    # stream 与同步两条路径都必须直接使用 model.max_tokens
    assert "max_tokens" in s, "chat.py 无 max_tokens 字段"
    # 两处调用点 (同步 _call_llm_sync + 流式 chat_stream) 都应引用 model.max_tokens
    assert s.count("model.max_tokens") >= 2, "同步/流式两条 LLM 路径都应使用 model.max_tokens"