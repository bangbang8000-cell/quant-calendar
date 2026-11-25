#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-7): 问股历史 —— 计数契约 / 空态分级 / 超时与默认展开"""
import os

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(*parts):
    with open(os.path.join(*parts), encoding='utf-8') as f:
        return f.read()


class _Cur:
    def __init__(self, n):
        self.n = n

    def fetchone(self):
        return (self.n,)


class _Conn:
    def __init__(self, n):
        self.n = n

    def execute(self, *_a, **_k):
        return _Cur(self.n)

    def close(self):
        pass


def test_stats_reports_other_account_records(monkeypatch):
    import asyncio
    from api.v1 import chat
    import db
    monkeypatch.setattr(chat, '_load_history', lambda username='default': [{'id': 1}, {'id': 2}])
    monkeypatch.setattr(db, 'get_conn', lambda: _Conn(5))
    out = asyncio.run(chat.get_history_stats(user={'username': 'admin'}))
    assert out == {'total': 2, 'system_total': 5, 'other_total': 3, 'scope': 'mine'}


def test_stats_falls_back_when_db_unavailable(monkeypatch):
    import asyncio
    from api.v1 import chat
    import db

    def _boom():
        raise RuntimeError('db down')

    monkeypatch.setattr(chat, '_load_history', lambda username='default': [{'id': 1}])
    monkeypatch.setattr(db, 'get_conn', _boom)
    out = asyncio.run(chat.get_history_stats(user={'username': 'admin'}))
    assert out['total'] == 1 and out['system_total'] == 1 and out['other_total'] == 0


def test_frontend_has_timeout_and_retry_state():
    src = _read(BASE, 'frontend', 'js', 'ai-chat.js')
    assert 'AbortController' in src
    assert '15000' in src
    # loading 必须在 finally 归零（否则永久转圈）
    idx = src.find('async function loadChatHistory')
    seg = src[idx:idx + 2600]
    assert 'finally' in seg and 'chatHistoryLoading.value = false' in seg


def test_frontend_expands_latest_day_by_default():
    src = _read(BASE, 'frontend', 'js', 'ai-chat.js')
    assert 'expandedChatDates.value = [sessions[0].date]' in src


def test_empty_state_is_graded():
    src = _read(BASE, 'frontend', 'js', 'components', 'ai', 'view-part1.js')
    assert 'chatHistoryMeta.other_total > 0' in src
    assert '当前账号暂无问股记录' in src


def test_stats_route_declared_before_param_route():
    src = _read(BASE, 'backend', 'api', 'v1', 'chat.py')
    stats_idx = src.find('@router.get("/history/stats")')
    param_idx = src.find('@router.get("/history/{session_id}")')
    assert 0 < stats_idx < param_idx, 'stats 路由必须声明在 /history/{session_id} 之前'
