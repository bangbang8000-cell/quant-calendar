# -*- coding: utf-8 -*-
"""T-6.3.4 (回归): 问股历史详情/删除的 id 类型匹配 — SQLite id(int) vs URL path(str)

背景: 6.3.x 起聊天历史以 SQLite 为主存储, db.chat_all 返回的 id 为 int (自增 rowid)。
get_history_detail / delete_history 直接用 `s["id"] == session_id` (str) 比较 → 永不匹配:
  - 详情永远返回 "未找到该对话" (用户无法还原历史问股结果)
  - 删除用 `!=` 比较 → 所有会话全部命中删除 (数据丢失!)
本测试守护修复: 比较统一走 str(s["id"]), 兼容 int(SQLite) 与 str(JSON 存档)。
"""
import asyncio

import pytest


def _clean_chat():
    import db
    db.init_db()
    with db._db_lock:
        conn = db.get_conn()
        conn.execute("DELETE FROM chat_history")
        conn.commit()
        conn.close()


@pytest.fixture(autouse=True)
def _clean():
    _clean_chat()
    yield
    _clean_chat()


def _seed_one_session():
    """写入一个会话 (经 SQLite 主路径, id 为 int 自增)"""
    from api.v1 import chat as chat_mod
    sessions = [{
        "id": "seed-temp",  # 会被 SQLite 自增覆盖
        "stock_code": "600519.SH", "stock_name": "贵州茅台",
        "created_at": "2026-09-19T10:30:00",
        "messages": [
            {"role": "user", "content": "茅台现在能买吗", "time": "2026-09-19T10:30:00"},
            {"role": "assistant", "content": "从估值与动量看...", "time": "2026-09-19T10:31:00"},
        ],
    }]
    chat_mod._save_history(sessions, 'alice')
    return chat_mod


def test_chat_history_detail_matches_sqlite_int_id():
    """详情接口: URL 传入字符串 id 也应命中 SQLite 的 int id (核心回归)"""
    chat_mod = _seed_one_session()
    sessions = chat_mod._load_history('alice')
    assert len(sessions) == 1
    sid = sessions[0]['id']
    assert isinstance(sid, int), f"SQLite 主路径 id 应为 int, 实得 {type(sid)} {sid!r}"
    # 用字符串形式的 id 调详情 (前端 fetch('/api/ai/chat/history/' + s.id) → 字符串)
    detail = asyncio.run(chat_mod.get_history_detail(str(sid), {"username": "alice"}))
    assert "error" not in detail, f"详情不应报未找到: {detail}"
    assert detail.get("id") == sid
    assert len(detail.get("messages", [])) == 2


def test_chat_history_delete_only_removes_target_session():
    """删除接口: 只应删除目标会话, 绝不能误删其它会话 (修复前 != 比较会清空全部)"""
    from api.v1 import chat as chat_mod
    # 一次写入两个不同股票的会话 (SQLite 自增 id 为 int)
    chat_mod._save_history([
        {
            "id": "seed-temp", "stock_code": "600519.SH", "stock_name": "贵州茅台",
            "created_at": "2026-09-19T10:30:00",
            "messages": [{"role": "user", "content": "茅台现在能买吗", "time": "2026-09-19T10:30:00"}],
        },
        {
            "id": "seed-temp-2", "stock_code": "000001.SZ", "stock_name": "平安银行",
            "created_at": "2026-09-19T10:40:00",
            "messages": [{"role": "user", "content": "银行板块怎么看", "time": "2026-09-19T10:40:00"}],
        },
    ], 'alice')
    sessions = chat_mod._load_history('alice')
    assert len(sessions) == 2
    target_id = str(sessions[0]['id'])  # 删除第一个
    # 修复前: str(s['id']) != target_id 对 int id 恒真 → 两个都删
    asyncio.run(chat_mod.delete_history(target_id, {"username": "alice"}))
    remaining = chat_mod._load_history('alice')
    assert len(remaining) == 1, f"应只删目标会话, 实删到剩 {len(remaining)}: {remaining}"


def test_chat_history_detail_string_json_id_compat():
    """兼容: JSON 存档路径的字符串 id 仍可命中 (default 兼容读取)"""
    from api.v1 import chat as chat_mod
    from unittest.mock import patch

    fake_sessions = [{
        "id": "b-000", "stock_code": "600000.SH", "stock_name": "浦发银行",
        "created_at": "2026-07-01T09:00:00",
        "messages": [{"role": "user", "content": "m", "time": "2026-07-01T09:00:00"}],
    }]
    with patch.object(chat_mod, "_load_history", return_value=fake_sessions):
        detail = asyncio.run(chat_mod.get_history_detail("b-000", {"username": "default"}))
        assert detail.get("id") == "b-000"
