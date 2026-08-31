# -*- coding: utf-8 -*-
"""v3.17.13 (FR-3.17.13): 多用户隔离与数据一致性收敛 — 聊天隔离/存量迁移/限流接口

覆盖:
- 聊天历史按用户读写隔离 (A 写 B 读不到; admin/guest 互不可见)
- RAG 上下文按当前用户 (评估历史 + 自选状态)
- db 列迁移幂等 + 存量归属迁移函数 (幂等可重复执行)
- 关键写路径不再写 JSON (SQLite 为主)
- 限流后端接口 (check 返回 allowed/remaining, 窗口重置, 默认 memory)
"""
import asyncio
import os
from unittest.mock import AsyncMock, patch

import pytest

from api.v1.chat import ChatRequest


def _clean_chat():
    """清空 chat_history 表, 保证测试隔离 (先 init 确保临时库有表)"""
    import db
    db.init_db()
    with db._db_lock:
        conn = db.get_conn()
        conn.execute("DELETE FROM chat_history")
        conn.commit()
        conn.close()


class TestChatUserIsolation:
    """按用户读写隔离"""

    def test_db_chat_isolation(self):
        import db
        _clean_chat()
        db.chat_append('alice', '000001.SZ', 'user', 'alice-msg', '平安银行')
        db.chat_append('bob', '600036.SH', 'user', 'bob-msg', '招商银行')
        assert len(db.chat_all('alice')) == 1
        assert len(db.chat_all('bob')) == 1
        # A 写 B 读不到
        assert db.chat_all('bob')[0]['content'] == 'bob-msg'
        assert db.chat_all('alice')[0]['content'] == 'alice-msg'

    def test_load_history_per_user(self):
        from api.v1 import chat as chat_mod
        import db
        _clean_chat()
        sessions = [{
            "id": "s1", "stock_code": "000001.SZ", "stock_name": "平安银行",
            "created_at": "2026-08-01T10:00:00",
            "messages": [{"role": "user", "content": "alice-msg", "time": "2026-08-01T10:00:00"}],
        }]
        chat_mod._save_history(sessions, 'alice')
        alice = chat_mod._load_history('alice')
        assert len(alice) == 1 and alice[0]['stock_code'] == '000001.SZ'
        # bob 读不到 alice 的历史
        assert chat_mod._load_history('bob') == []

    def test_save_history_writes_only_to_user(self):
        from api.v1 import chat as chat_mod
        import db
        _clean_chat()
        sessions = [{
            "id": "s2", "stock_code": "600036.SH", "stock_name": "",
            "created_at": "2026-08-01T10:00:00",
            "messages": [{"role": "user", "content": "bob-msg", "time": "2026-08-01T10:00:00"}],
        }]
        chat_mod._save_history(sessions, 'bob')
        rows = db.chat_all('bob')
        assert len(rows) == 1 and rows[0]['stock_code'] == '600036.SH'
        assert db.chat_all('alice') == []

    def test_guest_admin_history_invisible(self):
        from api.v1 import chat as chat_mod
        import db
        _clean_chat()
        chat_mod._save_history([{
            "id": "admin1", "stock_code": "600000.SH", "stock_name": "",
            "created_at": "2026-08-01T10:00:00",
            "messages": [{"role": "user", "content": "admin-私有", "time": "2026-08-01T10:00:00"}],
        }], 'admin')
        # guest 看不到 admin
        assert chat_mod._load_history('guest') == []
        assert chat_mod._load_history('admin')[0]['messages'][0]['content'] == 'admin-私有'

    def test_default_archive_not_shared_to_real_users(self):
        """存量 default 记录保留为只读归档, 不共享给真实用户 (不再共享写入)"""
        from api.v1 import chat as chat_mod
        import db
        _clean_chat()
        db.chat_append('default', '000001.SZ', 'user', 'legacy-msg', '平安银行')
        assert chat_mod._load_history('admin') == []
        assert chat_mod._load_history('guest') == []
        # default 伪用户仍可读归档
        assert len(chat_mod._load_history('default')) == 1


class TestRagContextPerUser:
    """RAG 上下文按当前用户"""

    def _run(self, username):
        from api.v1 import chat as chat_mod
        seen = {}

        def fake_load_history_for(u):
            seen['eval_user'] = u
            return [{
                "stock_code": "000001.SZ",
                "result": {"total_score": 80, "level": "推荐", "detailed_report": "分析结论"},
                "evaluate_time": "2026-08-01T00:00:00",
            }]

        def fake_watchlist_get(u):
            seen['watch_user'] = u
            return []

        def fake_build(*_a, **_k):
            seen['build_user'] = _k.get('username')
            return ('sys', 'usr', {})

        with patch.object(chat_mod, '_resolve_chat_intent', return_value=({'i': 1}, '000001.SZ', '平安银行')), \
             patch.object(chat_mod, '_call_llm', new=AsyncMock(return_value='AI回复')), \
             patch.object(chat_mod, '_build_chat_prompts', side_effect=fake_build), \
             patch('ai_evaluator.ai_evaluator._load_history_for', side_effect=fake_load_history_for), \
             patch('db.watchlist_get', side_effect=fake_watchlist_get), \
             patch.object(chat_mod, '_save_history'):
            asyncio.run(chat_mod._run_chat(ChatRequest(stock_code='000001.SZ', message='测试'), username))
        return seen

    def test_rag_eval_history_uses_current_user(self):
        seen = self._run('alice')
        assert seen['eval_user'] == 'alice'

    def test_rag_watchlist_uses_current_user(self):
        seen = self._run('bob')
        assert seen['watch_user'] == 'bob'

    def test_build_prompts_username_threaded(self):
        seen = self._run('guest')
        assert seen['build_user'] == 'guest'


class TestChatOwnershipMigration:
    """存量迁移: migrate_chat_ownership + username 列补列"""

    def test_migrate_chat_ownership_assigns_ownerless(self):
        import db
        _clean_chat()
        with db._db_lock:
            conn = db.get_conn()
            for i in range(3):
                conn.execute(
                    "INSERT INTO chat_history (username, stock_code, stock_name, role, content, created_at) "
                    "VALUES ('', '000001.SZ', '', 'user', ?, '2026-08-01 10:00:00')", (f'legacy-{i}',))
            conn.commit()
            conn.close()
        migrated = db.migrate_chat_ownership('default')
        assert migrated == 3
        rows = db.chat_all('default')
        assert len(rows) == 3
        # 归属后其他用户仍不可见
        assert db.chat_all('admin') == []
        assert db.chat_all('guest') == []

    def test_migrate_chat_ownership_idempotent(self):
        import db
        _clean_chat()
        with db._db_lock:
            conn = db.get_conn()
            conn.execute(
                "INSERT INTO chat_history (username, stock_code, stock_name, role, content, created_at) "
                "VALUES ('', '000001.SZ', '', 'user', 'x', '2026-08-01 10:00:00')")
            conn.commit()
            conn.close()
        assert db.migrate_chat_ownership('default') == 1
        assert db.migrate_chat_ownership('default') == 0  # 幂等: 重复执行返回 0
        assert len(db.chat_all('default')) == 1

    def test_migrate_chat_ownership_keeps_existing_users(self):
        import db
        _clean_chat()
        db.chat_append('admin', '600000.SH', 'user', 'admin-msg', '')
        db.chat_append('guest', '600001.SH', 'user', 'guest-msg', '')
        assert db.migrate_chat_ownership('default') == 0
        assert len(db.chat_all('admin')) == 1
        assert len(db.chat_all('guest')) == 1

    def test_migrate_username_column_idempotent(self, tmp_path):
        """旧库 chat_history 无 username 列 → migrate 补列且幂等"""
        import db
        old_data, old_file = db.DATA_DIR, db.DB_FILE
        db.DATA_DIR = str(tmp_path)
        db.DB_FILE = os.path.join(str(tmp_path), 'app.db')
        try:
            conn = db.get_conn()
            conn.execute(
                "CREATE TABLE chat_history ("
                " id INTEGER PRIMARY KEY AUTOINCREMENT, stock_code TEXT NOT NULL,"
                " stock_name TEXT NOT NULL DEFAULT '', role TEXT NOT NULL, content TEXT NOT NULL,"
                " created_at TEXT NOT NULL)")
            conn.commit()
            conn.close()
            cols = [r['name'] for r in db.get_conn().execute("PRAGMA table_info(chat_history)").fetchall()]
            assert 'username' not in cols
            db.migrate()
            cols = [r['name'] for r in db.get_conn().execute("PRAGMA table_info(chat_history)").fetchall()]
            assert 'username' in cols
            # 幂等: 重复 migrate 不报错、不加重复列
            db.migrate()
            cols = [r['name'] for r in db.get_conn().execute("PRAGMA table_info(chat_history)").fetchall()]
            assert cols.count('username') == 1
        finally:
            db.DATA_DIR, db.DB_FILE = old_data, old_file


class TestNoJsonWrite:
    """存储收敛: 关键写路径不再写 JSON (SQLite 为主)"""

    def test_save_history_no_json_write(self, tmp_path):
        from api.v1 import chat as chat_mod
        import db
        _clean_chat()
        old_file = chat_mod.HISTORY_FILE
        chat_mod.HISTORY_FILE = str(tmp_path / 'chat_history.json')
        try:
            chat_mod._save_history([{
                "id": "s1", "stock_code": "000001.SZ", "stock_name": "",
                "created_at": "2026-08-01T10:00:00",
                "messages": [{"role": "user", "content": "x", "time": "2026-08-01T10:00:00"}],
            }], 'alice')
            # JSON 不再写入
            assert not os.path.exists(chat_mod.HISTORY_FILE), "聊天历史不应再写 JSON"
            # SQLite 为主
            assert len(db.chat_all('alice')) == 1
        finally:
            chat_mod.HISTORY_FILE = old_file

    def test_watchlist_save_no_json_write(self, monkeypatch):
        from api.v1 import watchlist as wl_mod

        def _fail(*_a, **_k):
            raise AssertionError('watchlist 不应再写 JSON')
        fake_json = type('FakeJson', (), {})()
        fake_json.dump = _fail
        monkeypatch.setattr(wl_mod, 'json', fake_json)
        wl_mod._save_watchlist('alice', [{'code': '000001.SZ', 'name': '平安银行'}])
        # 能走到这里说明 JSON dump 未被调用
        import db
        assert len(db.watchlist_get('alice')) == 1

    def test_user_manager_save_no_json_write(self, monkeypatch):
        import json as _real_json
        from user_manager import UserManager

        def _fail(*_a, **_k):
            raise AssertionError('user_manager 不应再写 JSON')
        fake_json = type('FakeJson', (), {})()
        fake_json.dump = _fail
        fake_json.load = _real_json.load  # 兼容读取仍允许 (JSON 仅保留读)
        monkeypatch.setattr('user_manager.json', fake_json)
        um = UserManager()
        assert um.add_user('iso_user', 'pw123', 'user')
        assert um.get_user('iso_user') is not None
        assert um.delete_user('iso_user')


class TestRateLimitBackend:
    """限流后端接口抽象 (FR-3.17.13)"""

    def test_check_allowed_remaining(self):
        import rate_limit as rl
        backend = rl.SimpleMemoryBackend()
        assert backend.check('ip', 3, 60) == (True, 2)
        assert backend.check('ip', 3, 60) == (True, 1)
        assert backend.check('ip', 3, 60) == (True, 0)
        assert backend.check('ip', 3, 60) == (False, 0)

    def test_check_window_reset(self, monkeypatch):
        import rate_limit as rl
        backend = rl.SimpleMemoryBackend()
        clock = {'now': 1000.0}
        monkeypatch.setattr(rl.time, 'time', lambda: clock['now'])
        assert backend.check('k', 3, 60) == (True, 2)
        assert backend.check('k', 3, 60) == (True, 1)
        # 窗口过期 → 重置 (remaining 回到 limit)
        clock['now'] += 61
        assert backend.check('k', 3, 60) == (True, 2)

    def test_default_backend_is_memory(self):
        import rate_limit as rl
        assert isinstance(rl.get_limiter_backend(), rl.SimpleMemoryBackend)

    def test_redis_backend_reserved_fallback_memory(self, monkeypatch):
        """RATE_LIMIT_BACKEND=redis → 预留接口, 未实现时回退内存"""
        import rate_limit as rl
        monkeypatch.setattr(rl, '_rate_limiter_backend', None)
        monkeypatch.setattr('config.settings.RATE_LIMIT_BACKEND', 'redis')
        backend = rl.get_limiter_backend()
        assert isinstance(backend, rl.SimpleMemoryBackend)

    def test_simple_limiter_backward_compat(self):
        import rate_limit as rl
        limiter = rl.SimpleLimiter()
        ip = '127.0.0.1'
        assert limiter.check_rate_limit(ip) is True
        assert limiter.get_remaining(ip) <= limiter.limit_per_minute - 1
        # 不同 IP 相互独立
        assert limiter.check_rate_limit('127.0.0.2') is True

    def test_login_rate_limit_uses_backend(self):
        import rate_limit as rl
        backend = rl.SimpleMemoryBackend()
        for i in range(30):
            allowed, remaining = backend.check('login-ip', 30, 60)
            assert allowed is True
            assert remaining == 29 - i
        assert backend.check('login-ip', 30, 60) == (False, 0)

    def test_login_limit_independent_of_general_limiter(self):
        """登录限流(30/IP)与通用中间件(600/IP)计数互相独立, 不被挤占"""
        import rate_limit as rl
        for _ in range(50):
            assert rl.simple_limiter.check_rate_limit('shared-ip') is True
        # 通用请求计数不应挤占登录额度 (独立后端)
        assert rl.check_login_rate_limit('shared-ip') is True
        # 登录限流自身仍按 30/分 生效
        for _ in range(30):
            assert rl.check_login_rate_limit('login-only-ip') is True
        assert rl.check_login_rate_limit('login-only-ip') is False  # 第 31 次被拒

    def test_interface_contract(self):
        """接口定义: RateLimiterBackend.check 返回 (allowed, remaining) 二元组"""
        import rate_limit as rl
        assert callable(rl.RateLimiterBackend.check)
        # 抽象接口不应被实例化后直接使用 (需子类实现)
        with pytest.raises(NotImplementedError):
            rl.RateLimiterBackend().check('k', 1, 60)
