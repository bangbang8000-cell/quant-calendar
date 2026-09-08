# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.97): property-based 测试 (零外部依赖, 固定种子可复现)

每个 property 在固定随机种子下跑 N 次, 断言不变量:
1. metrics.slo_report: availability/success/error 与原始计数自洽; 延迟在窗口内
2. migrations: 任意 upgrade/rollback 目标序列保持合法前缀 (validate.ok)
3. structured_log: 任意字段值 log_event 产出的 JSON 始终可解析
4. deploy_tool: backup/restore 任意文件内容往返无损
5. user_config rate_limit: 任意正整数 roundtrip 一致
"""
import json
import logging
import os
import random
import sqlite3
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import metrics  # noqa: E402
import migrations  # noqa: E402
import structured_log  # noqa: E402
from structured_log import log_event  # noqa: E402
from metrics import reset, record_request, slo_report
from migrations import upgrade, rollback, validate, get_current_version


def seeds():
    return [1, 7, 42, 2024]


# ─── 1. metrics SLO 不变量 ─────────────────────────────

@pytest.mark.parametrize("seed", seeds())
def test_slo_invariants_random_requests(seed):
    reset()
    rng = random.Random(seed)
    statuses = {}
    times = []
    for _ in range(200):
        st = rng.choice([200, 200, 201, 301, 404, 500, 502])
        ms = rng.uniform(1, 900)
        record_request("GET", "/api/x", st, ms)
        statuses[st] = statuses.get(st, 0) + 1
        times.append(ms / 1000.0)
    s = slo_report()
    total = sum(statuses.values())
    assert s["total_requests"] == total
    exp_avail = (total - sum(v for k, v in statuses.items() if k >= 500)) / total
    assert s["availability"] == pytest.approx(exp_avail, abs=1e-4)
    assert 0.0 <= s["availability"] <= 1.0
    assert 0.0 <= s["success_rate"] <= 1.0
    if times:
        assert min(times) - 1e-9 <= s["avg_latency"] <= max(times) + 1e-9
        assert min(times) - 1e-9 <= s["p95_latency"] <= max(times) + 1e-9


def test_slo_empty_identity():
    reset()
    assert slo_report()["availability"] == 1.0
    assert slo_report()["error_rate"] == 0.0


# ─── 2. migrations 前缀不变量 ──────────────────────────

def _fresh_mig_conn(tmp_path):
    conn = sqlite3.connect(str(tmp_path / ("p_%d.db" % random.randint(0, 9999))))
    conn.row_factory = sqlite3.Row
    return conn


@pytest.mark.parametrize("seed", seeds())
def test_migrations_roundtrip_prefix_invariant(seed, tmp_path):
    rng = random.Random(seed)
    for _ in range(6):
        conn = _fresh_mig_conn(tmp_path)
        latest = migrations.latest_version()
        # 随机升级到任意目标
        t1 = rng.randint(1, latest)
        upgrade(conn, target=t1)
        v = validate(conn)
        assert v["ok"] is True, (t1, v)  # 部分升级是合法前缀
        # 随机回滚到任意目标
        t2 = rng.randint(0, t1)
        rollback(conn, target=t2)
        v = validate(conn)
        assert v["ok"] is True, (t2, v)
        assert get_current_version(conn) == t2
        conn.close()


# ─── 3. structured_log 可解析性 ────────────────────────

@pytest.mark.parametrize("seed", seeds())
def test_structured_log_json_always_parseable(seed, caplog):
    rng = random.Random(seed)
    lg = logging.getLogger("test.prop")
    lg.setLevel(logging.INFO)
    lg.propagate = True  # 让记录到达 root (caplog 挂 root)
    values = [rng.randint(0, 999), rng.random(), "文本值", None, True, {"a": 1}, [1, 2], object()]
    with caplog.at_level(logging.INFO, logger="test.prop"):
        for i, val in enumerate(values):
            log_event(lg, logging.INFO, "ev_%d" % i, v=val, n=i)
    parsed = [json.loads(r.getMessage()[len("EVENT "):]) for r in caplog.records]
    assert len(parsed) == len(values)
    assert all("event" in e and "ts" in e and "level" in e for e in parsed)
    # 值字段全部被安全序列化
    assert all("v" in e for e in parsed)


# ─── 4. deploy_tool backup/restore 往返 ────────────────

@pytest.mark.parametrize("seed", seeds())
def test_backup_restore_roundtrip(seed, tmp_path, monkeypatch):
    import db as _db
    import deploy_tool
    rng = random.Random(seed)
    data = tmp_path / "data"
    data.mkdir()
    db_file = str(data / "app.db")
    monkeypatch.setattr(_db, "DATA_DIR", str(data))
    monkeypatch.setattr(_db, "DB_FILE", db_file)
    monkeypatch.setattr(deploy_tool, "DATA_DIR", str(data))
    monkeypatch.setattr(deploy_tool, "DB_FILE", db_file)
    monkeypatch.setattr(deploy_tool, "BACKUP_ROOT", str(data / "backups"))
    _db.init_db()
    for i in range(3):
        (data / ("f_%d.json" % i)).write_text(json.dumps({"i": i, "r": rng.random()}),
                                              encoding="utf-8")
    b = deploy_tool.backup(backup_root=str(data / "backups"))
    # 篡改
    for i in range(3):
        (data / ("f_%d.json" % i)).write_text("{}", encoding="utf-8")
    deploy_tool.restore(b)
    for i in range(3):
        orig = json.loads((data / ("f_%d.json" % i)).read_text(encoding="utf-8"))
        assert orig["i"] == i  # 恢复后回到原始内容


# ─── 5. rate_limit 配置 roundtrip ──────────────────────

@pytest.mark.parametrize("seed", seeds())
def test_rate_limit_config_roundtrip(seed, tmp_path, monkeypatch):
    import api.v1.user_config as uc
    rng = random.Random(seed)
    # 隔离 admin config 路径
    monkeypatch.setattr(uc, "BASE_USERS_DIR", str(tmp_path / "users"))
    for _ in range(5):
        n = rng.randint(1, 100000)
        assert uc.save_rate_limit_config(n) is True
        assert uc.get_rate_limit_config()["api_limit"] == n
    # 非法值拒绝
    for bad in (0, -1, "abc", None):
        assert uc.save_rate_limit_config(bad) is False