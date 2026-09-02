#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V5.9 (T-5.9.4): 版本化 schema 迁移引擎
- schema_migrations 表记录已应用版本
- upgrade: 按版本升序应用待迁移项, 每项单事务 (失败回滚该项, 不污染后续)
- rollback: 按版本降序回滚已应用项
- validate: 已应用/可用版本集合一致性校验 (缺/多/乱序)
- 跳级: upgrade(conn, target=N) 一次应用 current+1..N 全部
"""
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

MIGRATION_TABLE = "schema_migrations"


class MigrationError(Exception):
    """迁移失败: 升级/回滚/校验不通过时抛出, 调用方应拒绝启动"""


class Migration:
    def __init__(self, version, name, description, upgrade_fn, downgrade_fn):
        assert isinstance(version, int) and version > 0, version
        self.version = version
        self.name = name
        self.description = description
        self.upgrade = upgrade_fn
        self.downgrade = downgrade_fn

    def __repr__(self):
        return "<Migration %03d %s>" % (self.version, self.name)


def _load_migrations():
    from . import _0001_baseline, _0002_alert_silence, _0003_event_user_column
    mods = (_0001_baseline, _0002_alert_silence, _0003_event_user_column)
    ms = [Migration(m.VERSION, m.NAME, m.DESCRIPTION, m.upgrade, m.downgrade) for m in mods]
    ms.sort(key=lambda m: m.version)
    # 版本唯一性校验
    vs = [m.version for m in ms]
    assert len(vs) == len(set(vs)), "迁移版本重复: %s" % vs
    return ms


MIGRATIONS = _load_migrations()


def _ensure_table(conn):
    conn.execute(
        "CREATE TABLE IF NOT EXISTS %s (version INTEGER PRIMARY KEY,"
        " name TEXT NOT NULL, applied_at TEXT NOT NULL)" % MIGRATION_TABLE)


def get_current_version(conn) -> int:
    """当前已应用的最高版本 (无记录返回 0)"""
    _ensure_table(conn)
    row = conn.execute("SELECT MAX(version) FROM %s" % MIGRATION_TABLE).fetchone()
    v = row[0] if row else None
    return int(v) if v is not None else 0


def latest_version() -> int:
    return MIGRATIONS[-1].version if MIGRATIONS else 0


def _tx(conn):
    """迁移事务上下文: 显式 BEGIN IMMEDIATE / COMMIT / ROLLBACK (避开驱动隐式事务)"""
    import sqlite3
    conn.isolation_level = None
    conn.execute("BEGIN IMMEDIATE")


def upgrade(conn, target=None):
    """应用 [current+1, target] 全部迁移, 每项独立事务. 返回应用的版本列表"""
    _ensure_table(conn)
    current = get_current_version(conn)
    latest = latest_version()
    target = latest if target is None else target
    if target < current:
        raise MigrationError("目标版本 %d 低于当前 %d" % (target, current))
    if target > latest:
        raise MigrationError("目标版本 %d 超过最新 %d" % (target, latest))
    applied = []
    for m in MIGRATIONS:
        if current < m.version <= target:
            try:
                _tx(conn)
                m.upgrade(conn)
                conn.execute(
                    "INSERT INTO %s (version, name, applied_at) VALUES (?,?,?)"
                    % MIGRATION_TABLE, (m.version, m.name, datetime.now().isoformat(timespec="seconds")))
                conn.execute("COMMIT")
                logger.info("[migrate] 应用 %s", m)
            except MigrationError:
                raise
            except Exception as e:
                conn.execute("ROLLBACK")
                raise MigrationError("迁移 %s 失败: %s" % (m, e)) from e
            applied.append(m.version)
    return applied


def rollback(conn, target=0):
    """回滚 (current, target] 区间已应用迁移, 按版本降序. 返回回滚的版本列表"""
    _ensure_table(conn)
    current = get_current_version(conn)
    target = max(0, target)
    if target >= current:
        return []
    rolled = []
    for m in reversed(MIGRATIONS):
        if target < m.version <= current:
            try:
                _tx(conn)
                m.downgrade(conn)
                conn.execute("DELETE FROM %s WHERE version=?" % MIGRATION_TABLE, (m.version,))
                conn.execute("COMMIT")
                logger.info("[migrate] 回滚 %s", m)
            except MigrationError:
                raise
            except Exception as e:
                conn.execute("ROLLBACK")
                raise MigrationError("回滚 %s 失败: %s" % (m, e)) from e
            rolled.append(m.version)
    return rolled


def validate(conn) -> dict:
    """版本一致性校验 (V5.9 T-5.9.5 语义修正):
    已应用集必须是可用版本的合法前缀 {1..current} —
    部分升级/回滚到低版本是正常态 (ok=True); 仅当存在
    外来版本 (extra) 或前缀内空洞 (gap) 时视为不一致 (ok=False)。
    整体缺失 (missing) 供报告, 不单独判不 ok。"""
    _ensure_table(conn)
    applied = {r[0] for r in conn.execute("SELECT version FROM %s" % MIGRATION_TABLE).fetchall()}
    available = {m.version for m in MIGRATIONS}
    cur = get_current_version(conn)
    expected = {v for v in available if v <= cur}
    extra = sorted(applied - available)
    gap = sorted(expected - applied)
    missing = sorted(available - applied)
    return {
        "ok": not extra and not gap,
        "current": cur,
        "latest": latest_version(),
        "applied": sorted(applied),
        "available": sorted(available),
        "missing": missing,
        "extra": extra,
        "gap": gap,
    }