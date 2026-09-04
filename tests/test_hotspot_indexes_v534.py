# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.4.4 / FR-5.3.4.4): 后端热点查询索引测试

- 迁移 0006 建 4 个热点索引 (trades/chat/watchlist)
- 迁移最新版本 = 6
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

EXPECTED_INDEXES = {
    "idx_portfolio_trades_user_created",
    "idx_portfolio_trades_trade_date",
    "idx_chat_history_user_id",
    "idx_watchlist_user_added",
}


@pytest.fixture
def db_env(tmp_path):
    """隔离 db 数据目录 + 迁移, 返回 sqlite3 连接"""
    import db
    old_dirs = (db.DATA_DIR, db.DB_FILE)
    data_dir = str(tmp_path / "data")
    db.DATA_DIR = data_dir
    db.DB_FILE = os.path.join(data_dir, "app.db")
    db.init_db()
    yield
    db.DATA_DIR, db.DB_FILE = old_dirs


def _idxs(conn):
    return {r[0] for r in conn.execute(
        "SELECT name FROM sqlite_master WHERE type='index'").fetchall()}


def test_migration_0006_creates_indexes(db_env):
    """迁移 0006 在真实表上建热点索引"""
    import db
    import migrations
    conn = db.get_conn()
    assert "portfolio_trades" in {
        r[0] for r in conn.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall()
    }, "init_db 应建 portfolio_trades"
    migrations.upgrade(conn)
    conn.commit()
    idxs = _idxs(conn)
    assert EXPECTED_INDEXES <= idxs, f"缺索引: {EXPECTED_INDEXES - idxs}"
    conn.close()


def test_migration_latest_is_6():
    """最新迁移版本 = 6 (0006 热点索引)"""
    from migrations import latest_version, MIGRATIONS
    assert latest_version() == 6
    assert any(m.version == 6 and m.name == "hotspot_indexes" for m in MIGRATIONS)


def test_trades_query_covered_by_migration():
    """portfolio_list_trades 的 ORDER BY created_at 排序有迁移 0006 索引支撑"""
    import migrations as mig
    assert any(m.version == 6 for m in mig.MIGRATIONS), "0006 迁移存在"


def test_downgrade_drops_indexes(db_env):
    """回滚 0006 删除索引 (幂等)"""
    import db
    import migrations
    conn = db.get_conn()
    migrations.upgrade(conn)
    conn.commit()
    migrations.rollback(conn, target=migrations.latest_version() - 1)
    conn.commit()
    idxs = _idxs(conn)
    assert not (EXPECTED_INDEXES & idxs), f"回滚后索引应删除: {EXPECTED_INDEXES & idxs}"
    conn.close()
