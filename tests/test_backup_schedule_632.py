# -*- coding: utf-8 -*-
"""6.3.2 (T-6.3.2.2): 备份校验接入调度门禁

- 调度器 daily_backup_task 备份成功后自动校验 (verify_sqlite_backup)
- 校验结果写入 self._backup_verify (健康指标)
- 校验失败 → _record_task_run("backup_verify", False) + 飞书告警 (首期只告警不阻断)
- /api/system/health-detail 返回 backup_verify 字段 (面板展示最近校验时间与结果)
"""
import io
import os
import sqlite3
from datetime import datetime

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    with io.open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


# ─── verify_sqlite_backup 纯函数 ─────────────────────────

def test_verify_sqlite_backup_ok(tmp_path):
    """合法 SQLite 备份 → ok=True, integrity=ok, row_count 汇总"""
    from backup_verify import verify_sqlite_backup
    p = tmp_path / "b.db"
    conn = sqlite3.connect(str(p))
    conn.execute("CREATE TABLE t (id INTEGER)")
    conn.executemany("INSERT INTO t (id) VALUES (?)", [(i,) for i in range(5)])
    conn.commit()
    conn.close()
    out = verify_sqlite_backup(str(p), min_rows=1)
    assert out["ok"] is True, out
    assert out["integrity"] == "ok"
    assert out["row_count"] == 5
    assert "t" in out["tables"]
    assert out["size"] > 0


def test_verify_sqlite_backup_missing_and_empty(tmp_path):
    """不存在的文件 / 空文件 → ok=False"""
    from backup_verify import verify_sqlite_backup
    assert verify_sqlite_backup(str(tmp_path / "nope.db"))["ok"] is False
    empty = tmp_path / "empty.db"
    empty.write_bytes(b"")
    assert verify_sqlite_backup(str(empty))["ok"] is False


def test_verify_sqlite_backup_not_sqlite(tmp_path):
    """非 SQLite 内容 → ok=False (无法作为 SQLite 打开)"""
    from backup_verify import verify_sqlite_backup
    p = tmp_path / "bad.db"
    p.write_text("not a database", encoding="utf-8")
    assert verify_sqlite_backup(str(p))["ok"] is False


# ─── 调度器接线 ─────────────────────────────────────────

def test_scheduler_daily_backup_wires_verify():
    """daily_backup_task 备份成功后调用 _verify_backup_after_backup"""
    src = _read("backend/scheduler/_core.py")
    assert "self._verify_backup_after_backup(name)" in src, "备份成功后未调用校验"
    health = _read("backend/scheduler/_core_health.py")
    assert "def _verify_backup_after_backup" in health, "校验方法缺失"
    assert "verify_sqlite_backup" in health, "校验方法未接线 verify_sqlite_backup"
    assert "self._backup_verify" in health, "校验结果未写入健康指标"


def test_backup_verify_records_and_alerts_on_failure(monkeypatch):
    """校验失败 → _record_task_run(False) + 飞书告警; 校验通过 → record(True)"""
    from scheduler import Scheduler
    s = Scheduler()
    records = []
    alerts = []
    monkeypatch.setattr(s, "_record_task_run", lambda t, ok, d="": records.append((t, ok, d)))
    monkeypatch.setattr(s, "_send_feishu_alert", lambda title, body: alerts.append((title, body)))
    monkeypatch.setattr(
        "backup_verify.verify_sqlite_backup",
        lambda path, min_rows=1: {"ok": False, "errors": ["模拟损坏"], "integrity": "corrupt",
                                  "row_count": 0, "tables": []},
    )
    s._verify_backup_after_backup("app_backup_x.db")
    assert records, "应记录 backup_verify 任务"
    assert any(r[0] == "backup_verify" and r[1] is False for r in records), \
        "校验失败应记录失败: %r" % (records,)
    assert alerts, "校验失败应触发飞书告警"
    assert s._backup_verify and s._backup_verify["ok"] is False, "健康指标应记录校验失败"
    assert s._backup_verify["file"] == "app_backup_x.db"


def test_backup_verify_success_records_true(monkeypatch):
    """校验通过 → _record_task_run(True) 且不触发告警"""
    from scheduler import Scheduler
    s = Scheduler()
    records = []
    alerts = []
    monkeypatch.setattr(s, "_record_task_run", lambda t, ok, d="": records.append((t, ok, d)))
    monkeypatch.setattr(s, "_send_feishu_alert", lambda title, body: alerts.append((title, body)))
    monkeypatch.setattr(
        "backup_verify.verify_sqlite_backup",
        lambda path, min_rows=1: {"ok": True, "errors": [], "integrity": "ok",
                                  "row_count": 42, "tables": ["users"]},
    )
    s._verify_backup_after_backup("app_backup_y.db")
    assert any(r[0] == "backup_verify" and r[1] is True for r in records), \
        "校验通过应记录成功: %r" % (records,)
    assert not alerts, "校验通过不应告警"
    assert s._backup_verify["ok"] is True and s._backup_verify["row_count"] == 42


def test_health_detail_exposes_backup_verify():
    """/api/system/health-detail 返回 backup_verify 字段"""
    src = _read("backend/api/v1/system.py")
    assert 'result["backup_verify"]' in src, "health-detail 未暴露 backup_verify"


def test_backup_verify_metrics_counter(monkeypatch):
    """备份校验进入调度指标 (任务状态聚合含 backup_verify)"""
    from scheduler import Scheduler
    s = Scheduler()
    monkeypatch.setattr(
        "backup_verify.verify_sqlite_backup",
        lambda path, min_rows=1: {"ok": True, "errors": [], "integrity": "ok",
                                  "row_count": 1, "tables": []},
    )
    s._verify_backup_after_backup("app_backup_z.db")
    status = s.get_task_status()
    assert "backup_verify" in status, "backup_verify 应进入任务状态聚合"