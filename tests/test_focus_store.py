# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.1 / FR-5.4.3): focus_evals 存储与迁移测试

覆盖: 迁移 0007 注册/建表/列口径(动作不入库)/索引/回滚;
      store 幂等写(同 日期+时段+股票 不重复) / 按日期/时段/股票查询 / 隔离。
"""
import os
import sqlite3
import sys
import tempfile
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import db
from migrations import (upgrade, rollback, get_current_version,
                        latest_version, MIGRATIONS)
import focus_store
from focus_store import (upsert_eval, query_by_date, query_by_stock,
                         delete_by_date, count_by_date, build_record)


@pytest.fixture(autouse=True)
def _clean_focus_evals():
    """共享临时 DB 防污染: 每用例前后清空 focus_evals (任意用例顺序可跑)"""
    try:
        with db._db_lock:
            conn = db.get_conn()
            try:
                conn.execute("DELETE FROM focus_evals")
                conn.commit()
            finally:
                conn.close()
    except Exception:
        pass
    yield
    try:
        with db._db_lock:
            conn = db.get_conn()
            try:
                conn.execute("DELETE FROM focus_evals")
                conn.commit()
            finally:
                conn.close()
    except Exception:
        pass


@pytest.fixture
def conn(tmp_path):
    """迁移测试独立临时库"""
    c = sqlite3.connect(str(tmp_path / "m.db"))
    c.row_factory = sqlite3.Row
    yield c
    c.close()


# ─── 1. 迁移 0007 ───────────────────────────────────────────

def test_migration_registry_contains_0007():
    vs = [m.version for m in MIGRATIONS]
    assert 7 in vs, "迁移 0007 未注册"
    m7 = next(m for m in MIGRATIONS if m.version == 7)
    assert m7.name == "focus_evals"


def test_fresh_db_upgrade_creates_focus_evals(conn):
    applied = upgrade(conn)
    assert 7 in applied
    cols = [r[1] for r in conn.execute("PRAGMA table_info(focus_evals)").fetchall()]
    need = {"trade_date", "session", "stock_code", "stock_name", "total_score",
            "level", "direction", "model_provider", "model_used", "raw_json", "created_at"}
    assert need <= set(cols)
    assert "action" not in cols, "动作不入库(按用户持仓派生), 表内不得有 action 列"
    idx = [r[1] for r in conn.execute("PRAGMA index_list(focus_evals)").fetchall()]
    assert "idx_focus_date_session" in idx
    assert "idx_focus_stock_date" in idx


def test_focus_evals_primary_key_composite(conn):
    """幂等语义: (trade_date, session, stock_code) 复合主键"""
    upgrade(conn)
    pk = [r[1] for r in conn.execute("PRAGMA table_info(focus_evals)").fetchall()
          if r[5] > 0]  # pk 序号列 (table_info 列: cid,name,type,notnull,dflt,pk)
    assert set(pk) == {"trade_date", "session", "stock_code"}


def test_downgrade_0007_drops_table(conn):
    upgrade(conn)
    rollback(conn, target=6)
    tables = [r[0] for r in conn.execute(
        "SELECT name FROM sqlite_master WHERE type='table'").fetchall()]
    assert "focus_evals" not in tables
    assert get_current_version(conn) == 6


# ─── 2. store 幂等写与查询 ───────────────────────────────────

def _rec(trade_date="2026-09-07", session="after_close", stock_code="601985.SH",
         total_score=67.0, level="推荐", direction="看多"):
    return build_record(
        trade_date=trade_date, session=session, stock_code=stock_code,
        stock_name="中国核电", total_score=total_score, level=level,
        direction=direction, model_provider="mock-ai", model_used="mock-1",
        raw_json={"total_score": total_score, "level": level})


def test_upsert_inserts_row():
    upsert_eval(_rec())
    rows = query_by_date("2026-09-07")
    assert len(rows) == 1
    assert rows[0]["stock_code"] == "601985.SH"
    assert rows[0]["direction"] == "看多"


def test_upsert_same_key_idempotent():
    """TC-18: 同 (日期,时段,股票) 重复写 → 覆盖不重复"""
    upsert_eval(_rec(total_score=67.0))
    upsert_eval(_rec(total_score=70.0))
    rows = query_by_date("2026-09-07", session="after_close")
    assert len(rows) == 1
    assert rows[0]["total_score"] == 70.0


def test_query_by_date_session_filter():
    upsert_eval(_rec(session="pre_open", stock_code="601985.SH", total_score=65))
    upsert_eval(_rec(session="after_close", stock_code="601985.SH", total_score=67))
    upsert_eval(_rec(session="after_close", stock_code="000063.SZ", total_score=48))
    assert len(query_by_date("2026-09-07")) == 3
    assert len(query_by_date("2026-09-07", session="after_close")) == 2
    assert len(query_by_date("2026-09-07", session="pre_open")) == 1


def test_query_by_stock_ordered_desc():
    upsert_eval(_rec(trade_date="2026-09-05", total_score=60))
    upsert_eval(_rec(trade_date="2026-09-07", total_score=67))
    upsert_eval(_rec(trade_date="2026-09-06", total_score=63))
    rows = query_by_stock("601985.SH")
    dates = [r["trade_date"] for r in rows]
    assert dates == sorted(dates, reverse=True)
    assert rows[0]["total_score"] == 67.0


def test_count_by_date_and_delete():
    # 共享 session 级临时库: 先清理目标日期, 避免被其他用例数据污染
    delete_by_date("2026-09-08")
    upsert_eval(_rec(trade_date="2026-09-08"))
    upsert_eval(_rec(trade_date="2026-09-08", session="pre_open", stock_code="000063.SZ"))
    assert count_by_date("2026-09-08") == 2
    delete_by_date("2026-09-08")
    assert count_by_date("2026-09-08") == 0


def test_build_record_defaults():
    r = build_record(trade_date="2026-09-07", session="after_close",
                     stock_code="601985.SH", level="中性")
    assert r["direction"] == "震荡"       # level→direction 兜底
    assert r["model_provider"] == "rule"  # 默认 rule (客观兜底, 不冒充 AI)
    assert r["raw_json"] == "{}"


def test_store_uses_patched_db():
    """隔离: patch_data_dir 下 DB 在临时目录, 不碰真实 data/"""
    assert os.path.dirname(db.DB_FILE).startswith(
        os.path.join(tempfile.gettempdir(), "qc-test-data-")) or "qc-test-data" in db.DB_FILE
