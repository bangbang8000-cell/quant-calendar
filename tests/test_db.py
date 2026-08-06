"""v3.3.0 数据可靠层测试 — SQLite/备份/错误码"""
import os
import tempfile

import pytest


@pytest.fixture
def sqlite_env():
    """隔离的 SQLite 测试环境"""
    import db
    old_data = db.DATA_DIR
    old_file = db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db()
    yield db
    db.DATA_DIR = old_data
    db.DB_FILE = old_file


class TestSQLiteKV:
    """KV 存取 (users/groups)"""

    def test_kv_set_get(self, sqlite_env):
        sqlite_env.kv_set('users', 'test1', {'role': 'user', 'theme': 'dark'})
        d = sqlite_env.kv_get('users', 'test1')
        assert d['role'] == 'user'
        assert d['theme'] == 'dark'

    def test_kv_all(self, sqlite_env):
        sqlite_env.kv_set('users', 'a', {'x': 1})
        sqlite_env.kv_set('users', 'b', {'x': 2})
        all_users = sqlite_env.kv_all('users')
        assert set(all_users.keys()) == {'a', 'b'}

    def test_kv_delete(self, sqlite_env):
        sqlite_env.kv_set('users', 'temp', {'x': 1})
        sqlite_env.kv_delete('users', 'temp')
        assert sqlite_env.kv_get('users', 'temp') is None


class TestSQLiteChat:
    """聊天记录"""

    def test_chat_append_list(self, sqlite_env):
        sqlite_env.chat_append('u1', '000001.SZ', 'user', 'hi')
        sqlite_env.chat_append('u1', '000001.SZ', 'assistant', 'hello')
        msgs = sqlite_env.chat_list('u1', '000001.SZ')
        assert len(msgs) == 2
        assert msgs[0]['role'] == 'user'
        assert msgs[1]['role'] == 'assistant'

    def test_chat_clear(self, sqlite_env):
        sqlite_env.chat_append('u1', '000001.SZ', 'user', 'hi')
        sqlite_env.chat_clear('u1')
        assert sqlite_env.chat_all('u1') == []

    def test_chat_isolation(self, sqlite_env):
        sqlite_env.chat_append('u1', '000001.SZ', 'user', 'a')
        sqlite_env.chat_append('u2', '600036.SH', 'user', 'b')
        assert len(sqlite_env.chat_all('u1')) == 1
        assert len(sqlite_env.chat_all('u2')) == 1


class TestSQLiteWatchlist:
    """自选股"""

    def test_watchlist_set_get(self, sqlite_env):
        sqlite_env.watchlist_set('u1', '000001.SZ')
        sqlite_env.watchlist_set('u1', '600036.SH')
        wl = sqlite_env.watchlist_get('u1')
        assert len(wl) == 2
        codes = {r['stock_code'] for r in wl}
        assert codes == {'000001.SZ', '600036.SH'}

    def test_watchlist_remove(self, sqlite_env):
        sqlite_env.watchlist_set('u1', '000001.SZ')
        sqlite_env.watchlist_remove('u1', '000001.SZ')
        assert sqlite_env.watchlist_get('u1') == []


class TestBackupRestore:
    """备份/恢复"""

    def test_backup_create_list(self, sqlite_env):
        sqlite_env.chat_append('u1', '000001.SZ', 'user', 'data')
        name = sqlite_env.backup_db()
        assert name is not None
        backups = sqlite_env.list_backups()
        assert any(b['name'] == name for b in backups)

    def test_restore_rollback(self, sqlite_env):
        sqlite_env.chat_append('u1', '000001.SZ', 'user', 'original')
        name = sqlite_env.backup_db()
        sqlite_env.chat_append('u1', '000001.SZ', 'user', 'changed')
        assert len(sqlite_env.chat_all('u1')) == 2
        ok = sqlite_env.restore_backup(name)
        assert ok is True
        assert len(sqlite_env.chat_all('u1')) == 1

    def test_restore_nonexistent(self, sqlite_env):
        assert sqlite_env.restore_backup('nonexistent.db') is False

    def test_schema_ok(self, sqlite_env):
        assert sqlite_env.schema_ok() is True


class TestErrorCodes:
    """统一错误码"""

    def test_error_codes_dict(self):
        from api.v1.errors import ERROR_CODES, make_error
        assert 'ERR_UNAUTHORIZED' in ERROR_CODES
        assert 'ERR_FORBIDDEN' in ERROR_CODES
        err = make_error('ERR_UNAUTHORIZED')
        assert err['success'] is False
        assert err['code'] == 'ERR_UNAUTHORIZED'
        assert err['message'] == '未登录或登录已过期'

    def test_make_error_custom(self):
        from api.v1.errors import make_error
        err = make_error('ERR_CUSTOM', '自定义错误', '详情')
        assert err['message'] == '自定义错误'
        assert err['detail'] == '详情'


class TestMigrate:
    """迁移脚本"""

    def test_migrate_dry_run(self, sqlite_env, tmp_path):
        import sys
        import json
        from paths import USERS_FILE
        # 写入测试 JSON
        os.makedirs(tmp_path, exist_ok=True)
        with open(USERS_FILE, 'w', encoding='utf-8') as f:
            json.dump({"admin": {"role": "admin"}}, f)
        import scripts.migrate as migrate_mod
        # monkeypatch 路径指向临时文件
        migrate_mod.USERS_FILE = os.path.join(tmp_path, 'users.json')
        with open(migrate_mod.USERS_FILE, 'w', encoding='utf-8') as f:
            json.dump({"admin": {"role": "admin"}, "guest": {"role": "guest"}}, f)
        r = migrate_mod.migrate_users(sqlite_env, dry_run=True)
        assert r["users"] == 2
        # dry-run 不应写入
        assert sqlite_env.kv_get('users', 'admin') is None
