"""v3.15 问股历史股票名回归 (TC-15.1) — SQLite chat_history.stock_name 写入/迁移/回填/透传

根因: chat_history 表无 stock_name 列, _load_history SQLite 分支丢名 → 问股历史仅显示代码。
"""
import json
import os
from unittest.mock import patch


def _clean_chat():
    """清空 chat_history 表, 保证测试隔离 (先 init 确保临时库有表)"""
    import db
    db.init_db()
    with db._db_lock:
        conn = db.get_conn()
        conn.execute("DELETE FROM chat_history")
        conn.commit()
        conn.close()


class TestChatStockNameSQLite:
    """chat_append/chat_all/chat_update_name 名称存取"""

    def test_chat_append_stores_name(self):
        import db
        _clean_chat()
        db.chat_append('u1', '600519.SH', 'user', 'hi', '贵州茅台')
        rows = db.chat_all('u1')
        assert rows[0]['stock_name'] == '贵州茅台'

    def test_chat_append_default_empty(self):
        import db
        _clean_chat()
        db.chat_append('u1', '600519.SH', 'user', 'hi')
        rows = db.chat_all('u1')
        assert rows[0]['stock_name'] == ''

    def test_chat_update_name_and_idempotent(self):
        import db
        _clean_chat()
        rid = db.chat_append('u1', '600519.SH', 'user', 'hi')
        assert db.chat_update_name(rid, '贵州茅台') is True
        assert db.chat_all('u1')[0]['stock_name'] == '贵州茅台'
        assert db.chat_update_name(rid, '贵州茅台') is True
        assert db.chat_update_name(999999, '不存在') is False


class TestChatStockNameMigrate:
    """migrate() 增量加列 + 幂等"""

    def test_migrate_adds_stock_name_column_idempotent(self, tmp_path):
        import db
        old_data, old_file = db.DATA_DIR, db.DB_FILE
        db.DATA_DIR = str(tmp_path)
        db.DB_FILE = os.path.join(str(tmp_path), 'app.db')
        try:
            conn = db.get_conn()
            conn.execute(
                "CREATE TABLE chat_history ("
                " id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL,"
                " stock_code TEXT NOT NULL, role TEXT NOT NULL, content TEXT NOT NULL,"
                " created_at TEXT NOT NULL)")
            conn.commit()
            conn.close()
            cols = [r['name'] for r in db.get_conn().execute("PRAGMA table_info(chat_history)").fetchall()]
            assert 'stock_name' not in cols
            db.migrate()
            cols = [r['name'] for r in db.get_conn().execute("PRAGMA table_info(chat_history)").fetchall()]
            assert 'stock_name' in cols
            # 幂等: 重复 migrate 不报错、不加重复列
            db.migrate()
            cols = [r['name'] for r in db.get_conn().execute("PRAGMA table_info(chat_history)").fetchall()]
            assert cols.count('stock_name') == 1
        finally:
            db.DATA_DIR, db.DB_FILE = old_data, old_file


class TestChatHistoryResolution:
    """_load_history / get_history 名称透传 + 空名兜底"""

    def test_load_history_resolves_empty_name(self):
        from api.v1 import chat as chat_mod
        import db
        _clean_chat()
        db.chat_append('default', '600519.SH', 'user', 'hi')
        with patch.object(chat_mod, '_resolve_stock_name', return_value='贵州茅台'):
            sessions = chat_mod._load_history()
        assert sessions[0]['stock_name'] == '贵州茅台'

    def test_load_history_keeps_present_name(self):
        from api.v1 import chat as chat_mod
        import db
        _clean_chat()
        db.chat_append('default', '600519.SH', 'user', 'hi', '贵州茅台')
        with patch.object(chat_mod, '_resolve_stock_name', return_value='不应被覆盖'):
            sessions = chat_mod._load_history()
        assert sessions[0]['stock_name'] == '贵州茅台'

    def test_get_history_fills_empty_name_from_json(self, tmp_path):
        from api.v1 import chat as chat_mod
        import db
        _clean_chat()
        old_file = chat_mod.HISTORY_FILE
        chat_mod.HISTORY_FILE = os.path.join(str(tmp_path), 'chat_history.json')
        try:
            with open(chat_mod.HISTORY_FILE, 'w', encoding='utf-8') as f:
                json.dump({"sessions": [{
                    "id": "abc", "stock_code": "600519.SH", "stock_name": "",
                    "created_at": "2026-08-01T10:00:00",
                    "messages": [{"role": "user", "content": "hi", "time": "2026-08-01T10:00:00"}],
                }]}, f)
            import asyncio
            with patch.object(chat_mod, '_resolve_stock_name', return_value='贵州茅台'):
                items = asyncio.run(chat_mod.get_history(view='date'))
            flat = [it for g in items for it in g['items']]
            assert flat[0]['stock_name'] == '贵州茅台'
        finally:
            chat_mod.HISTORY_FILE = old_file

    def test_resolve_stock_name_uses_stock_manager(self):
        """_resolve_stock_name 裸代码补 .SH/.SZ 后缀"""
        from api.v1 import chat as chat_mod
        with patch('stock_info.stock_manager') as sm:
            sm.get_name.side_effect = lambda c: c  # 查不到返回自身
            assert chat_mod._resolve_stock_name('600519') == '600519'
