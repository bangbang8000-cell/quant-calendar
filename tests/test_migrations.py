# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.94): 版本化 schema 迁移框架测试 (TEST-PLAN 10.4)

覆盖: 注册表完整性 / 顺序升级 / 幂等 / 跳级 / 目标边界 / 回滚 /
校验 (缺/多) / 失败事务回滚 / 失败不启动 (db 集成) / 真实迁移 0002/0003 行为
"""
import os
import sys
import sqlite3
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import db
import migrations
from migrations import (MigrationError, upgrade, rollback, validate,
                        get_current_version, latest_version, MIGRATIONS)


@pytest.fixture
def conn(tmp_path):
    """每个测试独立临时库"""
    conn = sqlite3.connect(str(tmp_path / "m.db"))
    conn.row_factory = sqlite3.Row
    yield conn
    conn.close()


# ─── 1. 注册表完整性 ─────────────────────────────────────

def test_registry_versions_sorted_unique():
    vs = [m.version for m in MIGRATIONS]
    assert vs == sorted(vs)
    assert len(vs) == len(set(vs))
    assert all(v > 0 for v in vs)


def test_registry_has_names_and_fns():
    for m in MIGRATIONS:
        assert m.name
        assert callable(m.upgrade) and callable(m.downgrade)


def test_latest_version():
    assert latest_version() == max(m.version for m in MIGRATIONS)


def test_baseline_first():
    assert MIGRATIONS[0].version == 1
    assert MIGRATIONS[0].name == "baseline"


def test_migration_error_is_exception():
    assert issubclass(MigrationError, Exception)


# ─── 2. 顺序升级 ─────────────────────────────────────────

def test_fresh_db_upgrade_to_latest(conn):
    applied = upgrade(conn)
    assert applied == [m.version for m in MIGRATIONS]
    assert get_current_version(conn) == latest_version()
    v = validate(conn)
    assert v["ok"] is True
    assert v["current"] == v["latest"]


def test_schema_migrations_table_shape(conn):
    upgrade(conn)
    cols = [r[1] for r in conn.execute("PRAGMA table_info(schema_migrations)").fetchall()]
    assert set(cols) >= {"version", "name", "applied_at"}


def test_applied_at_recorded(conn):
    upgrade(conn)
    row = conn.execute("SELECT applied_at FROM schema_migrations WHERE version=1").fetchone()
    assert row and row["applied_at"]


def test_upgrade_idempotent(conn):
    upgrade(conn)
    applied2 = upgrade(conn)
    assert applied2 == []
    assert get_current_version(conn) == latest_version()


def test_upgrade_target_partial(conn):
    applied = upgrade(conn, target=2)
    assert applied == [1, 2]
    assert get_current_version(conn) == 2


def test_upgrade_skip_level(conn):
    # 从 0 直接跳到 3 (跳级): 1,2,3 全应用
    applied = upgrade(conn, target=3)
    assert applied == [1, 2, 3]
    assert get_current_version(conn) == 3


def test_upgrade_target_below_current_raises(conn):
    upgrade(conn, target=2)
    with pytest.raises(MigrationError):
        upgrade(conn, target=1)


def test_upgrade_target_beyond_latest_raises(conn):
    with pytest.raises(MigrationError):
        upgrade(conn, target=999)


# ─── 3. 回滚 ────────────────────────────────────────────

def test_rollback_partial(conn):
    upgrade(conn)
    rolled = rollback(conn, target=2)
    assert rolled == [4, 3]   # V5.2.0: 从 4 回滚到 2
    assert get_current_version(conn) == 2
    # 0003 的 user 列已回滚 (SQLite DROP COLUMN 或最佳努力)
    cols = [r[1] for r in conn.execute("PRAGMA table_info(event_delivery_log)").fetchall()]
    assert "user" not in cols


def test_rollback_all(conn):
    upgrade(conn)
    rolled = rollback(conn, target=0)
    assert rolled == [4, 3, 2, 1]   # V5.2.0: 含 0004 shortterm
    assert get_current_version(conn) == 0
    tables = {r[0] for r in conn.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert "report_subscriptions" not in tables
    assert "alert_silence" not in tables
    # schema_migrations 表本身保留
    assert "schema_migrations" in tables


def test_rollback_noop_when_at_target(conn):
    upgrade(conn, target=2)
    assert rollback(conn, target=3) == []
    assert get_current_version(conn) == 2


def test_rollback_roundtrip_reupgrade(conn):
    upgrade(conn)
    rollback(conn, target=0)
    applied = upgrade(conn)
    assert applied == [1, 2, 3, 4]   # V5.2.0: 0004 shortterm
    assert validate(conn)["ok"] is True


def test_rollback_preserves_schema_table(conn):
    upgrade(conn)
    rollback(conn, target=0)
    rows = conn.execute("SELECT COUNT(*) AS n FROM schema_migrations").fetchone()
    assert rows["n"] == 0


# ─── 4. 校验 ────────────────────────────────────────────

def test_validate_partial_upgrade_is_ok_prefix(conn):
    # 只升到 1 是合法前缀 (部分升级正常态); missing 仅报告
    upgrade(conn, target=1)
    v = validate(conn)
    assert v["ok"] is True
    assert v["missing"] == [2, 3, 4]   # V5.2.0: 含 0004 shortterm
    assert v["current"] == 1


def test_validate_detects_gap(conn):
    # 删除中间版本 2 → 前缀空洞 → 不一致
    upgrade(conn)
    conn.execute("DELETE FROM schema_migrations WHERE version=2")
    conn.commit()
    v = validate(conn)
    assert v["ok"] is False
    assert v["gap"] == [2]


def test_validate_detects_extra(conn):
    upgrade(conn)
    conn.execute("INSERT INTO schema_migrations (version,name,applied_at) VALUES (99,'ghost','x')")
    conn.commit()
    v = validate(conn)
    assert v["ok"] is False
    assert v["extra"] == [99]


def test_validate_ok_after_full_upgrade(conn):
    upgrade(conn)
    v = validate(conn)
    assert v["ok"] is True and v["applied"] == v["available"]


def test_validate_ok_after_rollback_prefix(conn):
    upgrade(conn)
    rollback(conn, target=2)
    v = validate(conn)
    assert v["ok"] is True  # 回滚后低版本是合法前缀
    assert v["current"] == 2


# ─── 5. 失败处理 ─────────────────────────────────────────

def test_failing_upgrade_raises_and_rolls_back(conn, monkeypatch):
    def bad_upgrade(c):
        c.execute("CREATE TABLE IF NOT EXISTS partial_table (x INTEGER)")
        raise ValueError("boom")

    class BadMigration(migrations.Migration):
        pass

    bad = BadMigration(50, "bad", "测试失败迁移",
                       bad_upgrade, lambda c: None)
    monkeypatch.setattr(migrations.runner, "MIGRATIONS", MIGRATIONS + [bad])
    with pytest.raises(MigrationError):
        upgrade(conn)
    # 失败迁移的事务已回滚: partial_table 不应存在
    tables = {r[0] for r in conn.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert "partial_table" not in tables
    # 版本记录不残留 50; 仍停留在原最新版本 4 (V5.2.0: 0004 shortterm)
    assert get_current_version(conn) == 4


def test_failing_downgrade_raises(conn, monkeypatch):
    def bad_down(c):
        raise ValueError("down boom")

    class BadMigration(migrations.Migration):
        pass

    bad = BadMigration(50, "bad", "测试失败回滚", lambda c: None, bad_down)
    monkeypatch.setattr(migrations.runner, "MIGRATIONS", MIGRATIONS + [bad])
    upgrade(conn)
    with pytest.raises(MigrationError):
        rollback(conn, target=0)


def test_get_current_version_empty(conn):
    assert get_current_version(conn) == 0


# ─── 6. 真实迁移行为 ─────────────────────────────────────

def test_0002_creates_and_drops_tables(conn):
    upgrade(conn, target=2)
    tables = {r[0] for r in conn.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert "alert_silence" in tables and "report_subscriptions" in tables
    rollback(conn, target=1)
    tables = {r[0] for r in conn.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert "alert_silence" not in tables and "report_subscriptions" not in tables


def test_0002_upgrade_idempotent_on_existing(conn):
    conn.execute("CREATE TABLE alert_silence (user TEXT PRIMARY KEY, until_ts REAL NOT NULL)")
    conn.commit()
    upgrade(conn, target=2)  # IF NOT EXISTS → 不炸
    assert get_current_version(conn) == 2


def test_0003_adds_user_column_when_missing(conn):
    conn.executescript("""
        CREATE TABLE event_delivery_log (id INTEGER PRIMARY KEY, event TEXT);
    """)
    conn.commit()
    upgrade(conn, target=3)
    cols = [r[1] for r in conn.execute("PRAGMA table_info(event_delivery_log)").fetchall()]
    assert "user" in cols


def test_0003_skips_when_column_present(conn):
    conn.executescript("""
        CREATE TABLE event_delivery_log (id INTEGER PRIMARY KEY, event TEXT, user TEXT);
    """)
    conn.commit()
    upgrade(conn, target=3)  # 已有 user → 跳过
    assert get_current_version(conn) == 3


def test_0003_downgrade_drops_column(conn):
    conn.executescript("CREATE TABLE event_delivery_log (id INTEGER PRIMARY KEY, user TEXT)")
    conn.commit()
    upgrade(conn, target=3)
    rollback(conn, target=2)
    cols = [r[1] for r in conn.execute("PRAGMA table_info(event_delivery_log)").fetchall()]
    assert "user" not in cols


# ─── 7. db 集成 (失败不启动) ─────────────────────────────

def test_init_db_applies_migrations(tmp_path, monkeypatch):
    monkeypatch.setattr(db, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(db, "DATA_DIR", str(tmp_path))
    ok = db.init_db()
    assert ok is True
    conn = sqlite3.connect(str(tmp_path / "app.db"))
    assert get_current_version(conn) == latest_version()
    conn.close()


def test_apply_migrations_idempotent(tmp_path, monkeypatch):
    monkeypatch.setattr(db, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(db, "DATA_DIR", str(tmp_path))
    db.init_db()
    db.apply_migrations()  # 二次应用 → 幂等
    conn = sqlite3.connect(str(tmp_path / "app.db"))
    assert get_current_version(conn) == latest_version()
    conn.close()


def test_validate_migrations_ok_after_init(tmp_path, monkeypatch):
    monkeypatch.setattr(db, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(db, "DATA_DIR", str(tmp_path))
    db.init_db()
    db.validate_migrations()  # 不抛


def test_validate_migrations_raises_on_missing(tmp_path, monkeypatch):
    monkeypatch.setattr(db, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(db, "DATA_DIR", str(tmp_path))
    db.init_db()
    conn = sqlite3.connect(str(tmp_path / "app.db"))
    # 外来版本 → 不一致 → validate_migrations 拒绝
    conn.execute("INSERT INTO schema_migrations (version,name,applied_at) VALUES (99,'ghost','x')")
    conn.commit()
    conn.close()
    with pytest.raises(MigrationError):
        db.validate_migrations()


def test_legacy_db_upgrade_preserves_data(tmp_path, monkeypatch):
    """模拟老库: 已有核心表 + 数据, 无 schema_migrations → 应用迁移不丢数据"""
    monkeypatch.setattr(db, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(db, "DATA_DIR", str(tmp_path))
    conn = sqlite3.connect(str(tmp_path / "app.db"))
    conn.executescript("""
        CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT);
        INSERT INTO meta (key, value) VALUES ('k', 'v');
        CREATE TABLE event_delivery_log (id INTEGER PRIMARY KEY, event TEXT);
    """)
    conn.commit()
    conn.close()
    db.apply_migrations()
    conn = sqlite3.connect(str(tmp_path / "app.db"))
    assert get_current_version(conn) == latest_version()
    row = conn.execute("SELECT value FROM meta WHERE key='k'").fetchone()
    assert row and row[0] == "v"
    conn.close()


def test_init_db_failure_when_migration_broken(tmp_path, monkeypatch):
    """迁移失败 → init_db 返回 False (主流程据此拒绝启动)"""
    monkeypatch.setattr(db, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(db, "DATA_DIR", str(tmp_path))

    def bad_upgrade(c):
        raise RuntimeError("schema 损坏")

    class BadMigration(migrations.Migration):
        pass

    bad = BadMigration(50, "bad", "损坏迁移", bad_upgrade, lambda c: None)
    monkeypatch.setattr(migrations.runner, "MIGRATIONS", MIGRATIONS + [bad])
    assert db.init_db() is False