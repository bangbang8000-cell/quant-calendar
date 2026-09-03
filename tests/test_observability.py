# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.96): 观测性 2.0 测试 (TEST-PLAN 10.6)

覆盖: SLO 计算 (空窗/全成功/含5xx/延迟分位)/uptime/指标导出含 SLO 块/
结构化日志 JSON 单行/JsonFormatter/事件字段安全序列化/迁移结构化事件/降级
"""
import json
import logging
import os
import sys
import time
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import db as _db_mod  # noqa: E402  (lifespan 守卫用)
import metrics
from metrics import (reset, record_request, record_start, uptime_seconds,
                     slo_report, render_metrics)
import structured_log
from structured_log import log_event, JsonFormatter, install_json_handler


@pytest.fixture(autouse=True)
def clean():
    reset()
    yield
    reset()


# ─── SLO 计算 ──────────────────────────────────────────

def test_slo_empty_window():
    s = slo_report()
    assert s["total_requests"] == 0
    assert s["availability"] == 1.0 and s["success_rate"] == 1.0
    assert s["error_rate"] == 0.0


def test_slo_all_success():
    record_request("GET", "/api/x", 200, 50.0)
    record_request("GET", "/api/x", 201, 100.0)
    s = slo_report()
    assert s["total_requests"] == 2
    assert s["availability"] == 1.0 and s["success_rate"] == 1.0
    assert s["error_rate"] == 0.0


def test_slo_with_5xx_lowers_availability():
    record_request("GET", "/api/x", 200, 10.0)
    record_request("GET", "/api/y", 500, 20.0)
    record_request("GET", "/api/y", 503, 30.0)
    s = slo_report()
    assert s["total_requests"] == 3
    assert s["availability"] == pytest.approx(1 / 3, abs=1e-4)
    assert s["error_rate"] == pytest.approx(2 / 3, abs=1e-4)


def test_slo_success_rate_excludes_4xx():
    record_request("GET", "/api/x", 200, 10.0)
    record_request("GET", "/api/x", 404, 10.0)
    s = slo_report()
    assert s["success_rate"] == 0.5
    assert s["availability"] == 1.0  # 4xx 不降可用性


def test_slo_p95_latency():
    for i in range(100):
        record_request("GET", "/api/x", 200, float(i) * 10.0)
    s = slo_report()  # 延迟单位为秒
    assert 0.90 <= s["p95_latency"] <= 1.0
    assert s["avg_latency"] == pytest.approx(0.495, abs=1e-3)


def test_slo_p95_small_window():
    record_request("GET", "/api/x", 200, 5.0)
    s = slo_report()
    assert s["p95_latency"] == 0.005  # 秒


def test_slo_window_bounded():
    # 只统计窗口内延迟
    record_request("GET", "/api/x", 200, 5.0)
    s = slo_report()
    assert 0 < s["avg_latency"] < 1  # 秒


# ─── uptime ────────────────────────────────────────────

def test_uptime_before_start_zero():
    assert uptime_seconds() == 0.0


def test_uptime_increases():
    record_start()
    t0 = uptime_seconds()
    time.sleep(0.01)
    t1 = uptime_seconds()
    assert 0 <= t0 <= t1


def test_record_start_idempotent():
    record_start()
    first = uptime_seconds()
    record_start()
    assert uptime_seconds() <= first + 0.01  # 二次调用不重置


# ─── 指标导出 ──────────────────────────────────────────

def test_render_contains_slo_block():
    record_start()
    record_request("GET", "/api/x", 200, 10.0)
    out = render_metrics()
    assert "quant_slo_availability_ratio" in out
    assert "quant_slo_success_rate" in out
    assert "quant_slo_total_requests" in out
    assert "quant_process_uptime_seconds" in out
    assert "# HELP quant_slo_availability_ratio" in out
    assert "# TYPE quant_slo_availability_ratio gauge" in out


def test_render_slo_values():
    record_request("GET", "/api/x", 200, 10.0)
    record_request("GET", "/api/x", 500, 20.0)
    out = render_metrics()
    line = [l for l in out.splitlines() if l.startswith("quant_slo_availability_ratio")][0]
    assert float(line.split()[-1]) == pytest.approx(0.5)


def test_render_keeps_legacy_blocks():
    record_request("GET", "/api/x", 200, 10.0)
    out = render_metrics()
    for prefix in ("quant_requests_total", "quant_status_codes_total",
                   "quant_request_duration_seconds", "quant_request_duration_p95_seconds"):
        assert any(l.startswith(prefix) for l in out.splitlines()), prefix


# ─── 结构化日志 ────────────────────────────────────────

def test_log_event_emits_json_line(caplog):
    lg = logging.getLogger("test.structured")
    with caplog.at_level(logging.INFO, logger="test.structured"):
        log_event(lg, logging.INFO, "hello_world", user="alice", n=3)
    assert len(caplog.records) == 1
    msg = caplog.records[0].getMessage()
    assert msg.startswith("EVENT ")
    parsed = json.loads(msg[len("EVENT "):])
    assert parsed["event"] == "hello_world"
    assert parsed["level"] == "INFO"
    assert parsed["user"] == "alice" and parsed["n"] == 3
    assert "ts" in parsed and "logger" in parsed


def test_log_event_respects_level(caplog):
    lg = logging.getLogger("test.structured2")
    with caplog.at_level(logging.WARNING, logger="test.structured2"):
        log_event(lg, logging.INFO, "should_not_appear")
        log_event(lg, logging.WARNING, "appears")
    events = [json.loads(r.getMessage()[len("EVENT "):]) for r in caplog.records]
    assert [e["event"] for e in events] == ["appears"]


def test_log_event_safe_serialization():
    lg = logging.getLogger("test.structured3")
    # 不可序列化对象降级为 str, 不抛
    log_event(lg, logging.INFO, "weird", obj=object())


def test_json_formatter_one_line():
    rec = logging.LogRecord("t.mod", logging.INFO, "x.py", 1, "hello {a}", (), None)
    line = JsonFormatter().format(rec)
    assert "\n" not in line
    parsed = json.loads(line)
    assert parsed["message"] == "hello {a}"
    assert parsed["level"] == "INFO" and parsed["logger"] == "t.mod"


def test_json_formatter_extra_fields():
    rec = logging.LogRecord("t.mod2", logging.WARNING, "x.py", 2, "boom", (), None)
    rec.request_id = "r-1"
    rec.user = "bob"
    parsed = json.loads(JsonFormatter().format(rec))
    assert parsed["request_id"] == "r-1" and parsed["user"] == "bob"


def test_install_json_handler_writes_file(tmp_path):
    lg = logging.getLogger("test.jsonh")
    lg.setLevel(logging.INFO)
    lg.propagate = False
    handler = install_json_handler(str(tmp_path), logger=lg)
    try:
        lg.info("plain event")
        path = os.path.join(str(tmp_path), "app.json.log")
        # 强制 flush
        for h in lg.handlers:
            h.flush()
        content = open(path, encoding="utf-8").read().strip()
        assert content
        parsed = json.loads(content.splitlines()[0])
        assert parsed["message"] == "plain event"
    finally:
        lg.removeHandler(handler)
        handler.close()


# ─── 迁移结构化事件 ────────────────────────────────────

def test_lifespan_starts_on_healthy_migrated_db(tmp_path, monkeypatch):
    """回归守卫 (V5.0.9 T-5.0.97): 健康且已迁移的库上 TestClient 启动不得崩 —
    曾因 lifespan 里 ok=ok 未绑定 UnboundLocalError 只在实际部署暴露"""
    from fastapi.testclient import TestClient
    import event_alert as _ea
    import main_new
    monkeypatch.setattr(_db_mod, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(_db_mod, "DATA_DIR", str(tmp_path))
    _db_mod.init_db()  # 建表 + 迁移完成 → schema_ok True (ok 分支不执行)
    providers_before = list(_ea.EVENT_PROVIDERS)
    try:
        with TestClient(main_new.app) as client:
            assert client.get("/api/system/health-detail").status_code in (200, 401)
    finally:
        # lifespan 会注册 default risk provider 等全局, 恢复避免污染其他测试
        _ea.EVENT_PROVIDERS[:] = providers_before


def test_apply_migrations_emits_structured_event(tmp_path, monkeypatch, caplog):
    import db
    monkeypatch.setattr(db, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(db, "DATA_DIR", str(tmp_path))
    db.init_db()
    # 回滚后重应用 → 触发 migration_applied 事件
    import migrations
    conn = db.get_conn()
    migrations.rollback(conn, target=0)
    conn.commit(); conn.close()
    with caplog.at_level(logging.INFO, logger="db"):
        db.apply_migrations()
    events = [json.loads(r.getMessage()[len("EVENT "):])
              for r in caplog.records if r.getMessage().startswith("EVENT ")]
    assert any(e["event"] == "migration_applied" and e["versions"] == [1, 2, 3, 4]
               for e in events)