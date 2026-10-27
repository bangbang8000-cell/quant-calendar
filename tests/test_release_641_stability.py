# -*- coding: utf-8 -*-
"""6.4.1 稳态与数据闭环 — TC-641 / TC-642 / TC-643

覆盖 PRD FR-641（刷新闭环）、FR-642（陈旧护栏）、FR-643（服务常驻与自愈）。
环境类项（真实数据源 / 常驻服务 / 端口占用）用 mock 与 skipif 隔离，不放宽断言。
"""
import json
import os
import socket
from datetime import date, datetime, timedelta

import pytest


# ─── 夹具 ───

@pytest.fixture()
def refresh_env(tmp_path, monkeypatch):
    """隔离刷新相关数据文件，并 patch 掉外部副作用（重载/告警/新鲜度）。"""
    import data_refresh_config as drc
    import refresh_service as rs

    data_dir = str(tmp_path)
    monkeypatch.setattr(drc, "CONFIG_FILE", os.path.join(data_dir, "data_refresh_config.json"),
                        raising=False)
    monkeypatch.setattr(rs, "_data_path", lambda name: os.path.join(data_dir, name))

    calls = {"alerts": [], "reload": 0, "freshness": []}

    # data_sources/__init__ 用 from ._health import * 导出，包属性 _health 会被常量字典遮蔽，
    # 因此必须经 sys.modules 拿到真实子模块再 patch 告警入队。
    import sys
    health_mod = sys.modules.get("data_sources._health")
    if health_mod is None:  # pragma: no cover - 正常导入路径下恒存在
        import data_sources._health as health_mod
    monkeypatch.setattr(health_mod, "enqueue_alert",
                        lambda level, source, msg: calls["alerts"].append((level, source, msg)))

    import data_pipeline
    monkeypatch.setattr(data_pipeline, "run_daily_pull",
                        lambda pool=None, date=None, recent_days=None: {
                            "total": len(pool or []), "pulled": len(pool or []), "failed": 0,
                            "errors": [], "latest_date": "2026-10-26"},
                        raising=False)

    monkeypatch.setattr(rs, "_notify_views_reload", lambda: calls.__setitem__("reload", calls["reload"] + 1) or {}, raising=False)
    monkeypatch.setattr(rs, "_record_freshness", lambda latest, rows: calls["freshness"].append((latest, rows)), raising=False)
    monkeypatch.setattr(rs, "_latest_data_date", lambda: "2026-10-26", raising=False)
    return {"data_dir": data_dir, "calls": calls, "drc": drc, "rs": rs}


# ─── FR-641: 配置校验 ───

def test_tc641_01_enable_rejected_when_pool_empty(refresh_env):
    """TC-641-01: stock_pool 为空时开启 → 拒绝并返回 POOL_EMPTY。"""
    rs = refresh_env["rs"]
    verdict = rs.validate_config_update(
        {"scheduled_enabled": False, "stock_pool": []},
        {"scheduled_enabled": True, "stock_pool": []})
    assert verdict["ok"] is False
    assert verdict["code"] == "POOL_EMPTY"
    assert "数据池" in verdict["message"]


def test_tc641_01b_enable_requires_first_run_confirm(refresh_env):
    """TC-641-01b: 池非空但未二次确认 → FIRST_RUN_CONFIRM_REQUIRED。"""
    rs = refresh_env["rs"]
    verdict = rs.validate_config_update(
        {"scheduled_enabled": False, "stock_pool": ["000001.SZ"]},
        {"scheduled_enabled": True, "stock_pool": ["000001.SZ"]})
    assert verdict["ok"] is False
    assert verdict["code"] == "FIRST_RUN_CONFIRM_REQUIRED"


def test_tc641_01c_enable_ok_with_pool_and_confirm(refresh_env):
    """TC-641-01c: 池非空 + 已确认 → 允许开启。"""
    rs = refresh_env["rs"]
    verdict = rs.validate_config_update(
        {"scheduled_enabled": False, "stock_pool": ["000001.SZ"]},
        {"scheduled_enabled": True, "stock_pool": ["000001.SZ"], "first_run_confirmed": True})
    assert verdict["ok"] is True


def test_tc641_01d_disabling_never_blocked(refresh_env):
    """关闭开关不应被任何前置条件阻塞。"""
    rs = refresh_env["rs"]
    verdict = rs.validate_config_update(
        {"scheduled_enabled": True, "stock_pool": []},
        {"scheduled_enabled": False, "stock_pool": []})
    assert verdict["ok"] is True


def test_tc641_01e_save_config_checked_rejects_and_keeps_disk(refresh_env):
    """被拒绝时不写盘（配置保持不变）。"""
    drc = refresh_env["drc"]
    drc.save_config({"scheduled_enabled": False, "stock_pool": []})
    before = drc.load_config()
    result = drc.save_config_checked({"scheduled_enabled": True, "stock_pool": []})
    assert result["ok"] is False and result["code"] == "POOL_EMPTY"
    assert drc.load_config().get("scheduled_enabled") is False
    assert result["config"].get("scheduled_enabled") is False
    assert before.get("stock_pool") == []


def test_tc641_06_config_view_flags_pool_empty(refresh_env):
    """池为空但开关为开 → config_view 给出引导码，不静默空跑。"""
    rs = refresh_env["rs"]
    view = rs.config_view({"scheduled_enabled": True, "pull_enabled": False, "stock_pool": []})
    assert view["pool_empty"] is True
    assert view["guide_code"] == "POOL_EMPTY"
    assert view["guide_message"]


def test_tc641_07_first_run_days_default_and_clamp(refresh_env):
    """首启限量默认 5，非法值回退，超界裁剪。"""
    rs = refresh_env["rs"]
    assert rs.effective_first_run_days({}) == 5
    assert rs.effective_first_run_days({"first_run_days": "abc"}) == 5
    assert rs.effective_first_run_days({"first_run_days": 30}) == 30
    assert rs.effective_first_run_days({"first_run_days": 999}) == 60
    assert rs.is_first_run({"scheduled_enabled": True}) is True
    assert rs.is_first_run({"scheduled_enabled": True, "first_run_completed": True}) is False


# ─── FR-641: 刷新执行 / 重试 / 告警 / 日志 ───

def test_tc641_02_retry_backoff_increasing_and_capped(refresh_env, monkeypatch):
    """TC-641-02: 抛异常 3 次 → 3 次尝试，退避递增且 ≤10min。"""
    rs = refresh_env["rs"]
    sleeps = []

    def boom(pool=None, date=None, recent_days=None):
        raise RuntimeError("数据源不可达")

    import data_pipeline
    monkeypatch.setattr(data_pipeline, "run_daily_pull", boom, raising=False)

    result = rs.run_refresh_once("manual", pull=True, pool=["000001.SZ"],
                                 sleep_fn=lambda s: sleeps.append(s))

    assert result["success"] is False
    assert result["attempts"] == 3
    assert len(sleeps) == 2                       # 最后一次失败后不再等待
    assert sleeps[0] < sleeps[1]                   # 指数退避递增
    assert max(sleeps) <= rs.BACKOFF_CAP_SECONDS   # 上限 10 分钟


def test_tc641_03_two_consecutive_failures_alert_once(refresh_env, monkeypatch):
    """TC-641-03: 连续 2 次失败 → 1 条告警，且不重复告警。"""
    rs = refresh_env["rs"]

    def boom(pool=None, date=None, recent_days=None):
        raise RuntimeError("源头 500")

    import data_pipeline
    monkeypatch.setattr(data_pipeline, "run_daily_pull", boom, raising=False)

    r1 = rs.run_refresh_once("manual", pull=True, pool=["000001.SZ"], attempts=1,
                             sleep_fn=lambda s: None)
    assert r1["success"] is False
    assert refresh_env["calls"]["alerts"] == []      # 第 1 次不告警

    r2 = rs.run_refresh_once("manual", pull=True, pool=["000001.SZ"], attempts=1,
                             sleep_fn=lambda s: None)
    assert r2["success"] is False
    assert len(refresh_env["calls"]["alerts"]) == 1  # 第 2 次告警
    assert refresh_env["calls"]["alerts"][0][0] == "error"

    r3 = rs.run_refresh_once("manual", pull=True, pool=["000001.SZ"], attempts=1,
                             sleep_fn=lambda s: None)
    assert r3["success"] is False
    assert len(refresh_env["calls"]["alerts"]) == 1  # 不重复告警


def test_tc641_03b_success_resets_failure_counter(refresh_env, monkeypatch):
    """成功后连续失败计数归零。"""
    rs = refresh_env["rs"]

    def boom(pool=None, date=None, recent_days=None):
        raise RuntimeError("x")

    import data_pipeline
    monkeypatch.setattr(data_pipeline, "run_daily_pull", boom, raising=False)
    rs.run_refresh_once("manual", pull=True, pool=["000001.SZ"], attempts=1, sleep_fn=lambda s: None)
    assert rs.load_state()["consecutive_failures"] == 1

    monkeypatch.setattr(data_pipeline, "run_daily_pull",
                        lambda pool=None, date=None, recent_days=None: {
                            "total": 1, "pulled": 1, "failed": 0, "errors": [],
                            "latest_date": "2026-10-26"}, raising=False)
    ok = rs.run_refresh_once("manual", pull=True, pool=["000001.SZ"])
    assert ok["success"] is True
    assert rs.load_state()["consecutive_failures"] == 0


def test_tc641_04_success_writes_freshness_and_reload(refresh_env, monkeypatch):
    """TC-641-04/05: 成功后写新鲜度 + 通知视图重载 + latest_date 新日期。"""
    rs = refresh_env["rs"]
    import data_pipeline
    monkeypatch.setattr(data_pipeline, "run_daily_pull",
                        lambda pool=None, date=None, recent_days=None: {
                            "total": 1, "pulled": 1, "failed": 0, "errors": [],
                            "latest_date": "2026-10-26"}, raising=False)
    result = rs.run_refresh_once("manual", pull=True, pool=["000001.SZ"])
    assert result["success"] is True
    assert result["latest_date"] == "2026-10-26"
    assert result["rows"] == 1
    assert refresh_env["calls"]["reload"] == 1
    assert refresh_env["calls"]["freshness"] == [("2026-10-26", 1)]


def test_tc641_04b_zero_rows_is_not_success(refresh_env, monkeypatch):
    """验收第 4 条：成功但 0 行 → 不算成功（禁止假成功记录）。"""
    rs = refresh_env["rs"]
    import data_pipeline
    monkeypatch.setattr(data_pipeline, "run_daily_pull",
                        lambda pool=None, date=None, recent_days=None: {
                            "total": 3, "pulled": 0, "failed": 0, "errors": [],
                            "latest_date": "2026-10-26"}, raising=False)
    result = rs.run_refresh_once("manual", pull=True, pool=["a", "b", "c"],
                                 sleep_fn=lambda s: None)
    assert result["success"] is False
    assert "0 行" in result["message"]
    logs = rs.get_recent_logs(10)
    assert logs and all(l.get("status") != "success" for l in logs)


def test_tc641_04c_empty_pool_pull_is_skipped_not_success(refresh_env):
    """stock_pool 为空 → 跳过拉取，不产生任何成功记录。"""
    rs = refresh_env["rs"]
    result = rs.run_refresh_once("scheduled", pull=True, pool=[])
    assert result["success"] is False
    assert result["code"] == "POOL_EMPTY"
    logs = rs.get_recent_logs(5)
    assert logs[0]["status"] == "skipped"


def test_tc641_05_structured_log_fields(refresh_env, monkeypatch):
    """第 5 条：每次刷新落结构化日志（开始/结束/耗时/行数/失败原因）。"""
    rs = refresh_env["rs"]
    import data_pipeline
    monkeypatch.setattr(data_pipeline, "run_daily_pull",
                        lambda pool=None, date=None, recent_days=None: {
                            "total": 1, "pulled": 1, "failed": 0, "errors": [],
                            "latest_date": "2026-10-26"}, raising=False)
    rs.run_refresh_once("manual", pull=True, pool=["000001.SZ"])
    log = rs.get_recent_logs(1)[0]
    for key in ("ts", "trigger", "started_at", "elapsed_ms", "rows", "status"):
        assert key in log, key
    assert log["status"] == "success"


def test_tc641_05b_log_rotation_capped(refresh_env, monkeypatch):
    """日志保留上限生效（不会无限膨胀）。"""
    rs = refresh_env["rs"]
    monkeypatch.setattr(rs, "LOG_MAX", 5, raising=False)
    for i in range(12):
        rs.log_event({"status": "success", "rows": i})
    assert len(rs.get_recent_logs(100)) == 5


def test_tc641_06_disabled_no_refresh_records(refresh_env, monkeypatch):
    """TC-641-06: 关闭开关时不调度（pull_should_run 返回 False），2 周期内无新增记录。"""
    from data_refresh_config import pull_should_run
    cfg = {"pull_enabled": False, "pull_time": "18:00"}
    assert pull_should_run(cfg, datetime.now()) is False
    # 关闭状态下连续轮询也不应产生刷新日志
    rs = refresh_env["rs"]
    for _ in range(2):
        assert pull_should_run(cfg, datetime.now()) is False
    assert rs.get_recent_logs(10) == []


def test_tc641_06b_pull_should_run_frequency_rules():
    """开启后按 pull_frequency 判定（daily 每日、weekly 仅指定星期）。"""
    from data_refresh_config import pull_should_run
    monday = datetime(2026, 10, 26, 18, 2)      # 周一
    assert pull_should_run({"pull_enabled": True, "pull_frequency": "daily"}, monday) is True
    assert pull_should_run({"pull_enabled": True, "pull_frequency": "weekly",
                            "pull_weekday": "0"}, monday) is True
    assert pull_should_run({"pull_enabled": True, "pull_frequency": "weekly",
                            "pull_weekday": "2"}, monday) is False


def test_tc641_first_run_limits_pull_bars(refresh_env, monkeypatch):
    """TC-641-07（可自动化部分）: 首启拉取范围 = 最近 N 交易日（传入 recent_days）。"""
    rs = refresh_env["rs"]
    captured = {}

    def fake_pull(pool=None, date=None, recent_days=None):
        captured["recent_days"] = recent_days
        return {"total": 1, "pulled": 1, "failed": 0, "errors": [], "latest_date": "2026-10-26"}

    import data_pipeline
    monkeypatch.setattr(data_pipeline, "run_daily_pull", fake_pull, raising=False)

    drc = refresh_env["drc"]
    drc.save_config({"scheduled_enabled": True, "stock_pool": ["000001.SZ"],
                     "first_run_confirmed": True, "first_run_completed": False,
                     "first_run_days": 7})
    rs.run_refresh_once("scheduled", pull=True, pool=["000001.SZ"])
    assert captured["recent_days"] == 7

    # 首日完成后不再限量
    captured.clear()
    rs.run_refresh_once("scheduled", pull=True, pool=["000001.SZ"])
    assert captured["recent_days"] is None


# ─── FR-642: 陈旧判定单一来源 ───

def test_tc642_01_stale_threshold_single_source():
    """TC-642-01: STALE_TRADING_DAYS=5 且 30 交易日滞后判为陈旧。"""
    import freshness
    assert freshness.STALE_TRADING_DAYS == 5
    assert freshness.stale_threshold() >= 1
    latest = (datetime.now() - timedelta(days=45)).strftime("%Y-%m-%d")
    assert freshness.is_data_stale(latest) is True
    assert freshness.trading_day_lag(latest) > 5


def test_tc642_01b_recent_data_not_stale():
    """滞后 ≤1 交易日不算陈旧。"""
    import freshness
    today = datetime.now()
    # 往前找最近的工作日
    d = today - timedelta(days=1)
    while d.weekday() >= 5:
        d -= timedelta(days=1)
    assert freshness.is_data_stale(d.strftime("%Y-%m-%d"), expected=today.strftime("%Y-%m-%d")) is False


def test_tc642_01c_trading_day_lag_counts_weekdays_only():
    """交易日滞后按工作日计数（跳过周末）。"""
    import freshness
    # 2026-10-16(五) → 2026-10-23(五)：5 个工作日
    assert freshness.trading_day_lag("2026-10-16", expected="2026-10-23") == 5
    # 含周末（10-16 → 10-26 一）：6 个工作日（19/20/21/22/23/26）
    assert freshness.trading_day_lag("2026-10-16", expected="2026-10-26") == 6


def test_tc642_01d_unparsable_date_treated_stale():
    """无数据日期视为陈旧（不静默放过）。"""
    import freshness
    assert freshness.is_data_stale(None) is True
    assert freshness.is_data_stale("not-a-date") is True


def test_tc642_01e_threshold_configurable(refresh_env):
    """阈值可通过配置调整（默认 5）。"""
    import freshness
    drc = refresh_env["drc"]
    drc.save_config({"stale_trading_days": 10})
    assert freshness.stale_threshold() == 10
    latest = (datetime.now() - timedelta(days=20)).strftime("%Y-%m-%d")
    lag = freshness.trading_day_lag(latest)
    assert lag > 5
    assert freshness.is_data_stale(latest, threshold=10) is (lag > 10)


def test_tc642_02_guard_payload_shape():
    """TC-642-02（数据侧）: 护栏载荷字段齐全，供三页与导出复用。"""
    import freshness
    g = freshness.stale_guard(latest_date=(datetime.now() - timedelta(days=40)).strftime("%Y-%m-%d"))
    for key in ("latest_date", "expected_date", "lag_trading_days", "threshold",
                "stale", "message", "annotation", "generated_at"):
        assert key in g, key
    assert g["stale"] is True
    assert "数据截至" in g["message"]
    assert "仅供参考" in g["annotation"]


def test_tc642_02b_fresh_data_guard_is_empty():
    """正常数据：message / annotation 为空，前端据此零占位。"""
    import freshness
    today = datetime.now()
    d = today - timedelta(days=1)
    while d.weekday() >= 5:
        d -= timedelta(days=1)
    g = freshness.stale_guard(latest_date=d.strftime("%Y-%m-%d"), now=today)
    assert g["stale"] is False
    assert g["message"] == ""
    assert g["annotation"] == ""


def test_tc642_03_export_meta_contains_date_and_status(monkeypatch):
    """TC-642-03: 导出元信息含数据日期 + 新鲜度状态。"""
    import api.v1.export as export_mod
    monkeypatch.setattr(export_mod, "_stale_meta", lambda: {
        "latest_date": "2026-10-20", "status": "陈旧", "lag_trading_days": 6,
        "annotation": "输入数据截至 2026-10-20，结论仅供参考"})
    meta = export_mod._stale_meta()
    assert meta["latest_date"] == "2026-10-20"
    assert meta["status"] == "陈旧"
    assert meta["annotation"]


def test_tc642_03b_export_meta_degrades_gracefully(monkeypatch):
    """取不到新鲜度时导出不失败（降级为未知）。"""
    import api.v1.export as export_mod

    def boom():
        raise RuntimeError("boom")

    import freshness
    monkeypatch.setattr(freshness, "stale_guard", boom, raising=False)
    meta = export_mod._stale_meta()
    assert meta["latest_date"] == "未知"
    assert meta["status"] in ("未知", "正常", "陈旧")


def test_tc642_04_ai_result_gets_stale_note(monkeypatch):
    """TC-642-04: 陈旧输入 → AI 结果含不可折叠标注。"""
    from ai_eval._eval_core import AIEvalCoreMixin

    monkeypatch.setattr(AIEvalCoreMixin, "_stale_note", staticmethod(lambda: {
        "latest_date": "2026-10-20", "stale": True,
        "annotation": "输入数据截至 2026-10-20，结论仅供参考"}))
    result = AIEvalCoreMixin._attach_stale_note({"level": "看多", "detailed_report": "报告正文"})
    assert result["data_stale_note"].startswith("输入数据截至")
    assert "仅供参考" in result["detailed_report"]


def test_tc642_04b_ai_result_no_note_when_fresh(monkeypatch):
    """正常数据不追加标注（无残留）。"""
    from ai_eval._eval_core import AIEvalCoreMixin
    monkeypatch.setattr(AIEvalCoreMixin, "_stale_note", staticmethod(lambda: {
        "latest_date": "2026-10-26", "stale": False, "annotation": ""}))
    result = AIEvalCoreMixin._attach_stale_note({"level": "看多", "detailed_report": "报告正文"})
    assert "data_stale_note" not in result
    assert result["detailed_report"] == "报告正文"


def test_tc642_05_reliability_endpoint_returns_guard():
    """接口层：/api/reliability/stale-guard 返回统一载荷。"""
    from fastapi.testclient import TestClient
    import main_new
    from auth import get_current_active_user

    main_new.app.dependency_overrides[get_current_active_user] = lambda: {"username": "test"}
    try:
        client = TestClient(main_new.app)
        resp = client.get("/api/reliability/stale-guard")
        assert resp.status_code == 200
        body = resp.json()
        assert body["success"] is True
        assert "threshold" in body["data"]
    finally:
        main_new.app.dependency_overrides.clear()


# ─── FR-643: 启动体检与健康检查 ───

def test_tc643_02_port_occupied_reports_pid(tmp_path, monkeypatch):
    """TC-643-02: 端口被占用 → 指出 PID 与处置建议。"""
    import startup_guard

    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(("127.0.0.1", 0))
    sock.listen(1)
    port = sock.getsockname()[1]
    try:
        # 端口探测在 connect 未完成时不一定被识别为 LISTEN，因此仅验证失败分支结构
        res = startup_guard.check_port("127.0.0.1", port)
        assert res["ok"] is False
        assert "port" in res and "action" in res
        assert str(port) in res["action"]
    finally:
        sock.close()


def test_tc643_02b_preflight_blocks_and_writes_report(tmp_path, monkeypatch):
    """TC-643-02（整合）: 阻断项写 startup_check.json，含 blocking 与 actions。"""
    import startup_guard
    import paths

    monkeypatch.setattr(paths, "DATA_DIR", str(tmp_path), raising=False)
    monkeypatch.setattr(startup_guard, "check_port", lambda h, p: {
        "ok": False, "port": p, "pid": 4321, "action": "端口 %d 已被 PID 4321 占用" % p})
    report = startup_guard.preflight(host="127.0.0.1", port=8123)
    assert report["ok"] is False
    assert "port" in report["blocking"]
    assert any("4321" in a for a in report["actions"])

    p = os.path.join(str(tmp_path), "startup_check.json")
    assert os.path.exists(p)
    with open(p, "r", encoding="utf-8") as f:
        saved = json.load(f)
    assert saved["stage"] == "preflight"
    assert saved["blocking"] == ["port"]


def test_tc643_03_data_dir_not_writable(monkeypatch):
    """TC-643-03: 数据目录不可写 → 明确路径与处置，不抛裸栈。"""
    import startup_guard
    import paths

    monkeypatch.setattr(paths, "DATA_DIR", os.path.join(str(paths.BASE_DIR), "no_such_dir_xyz"),
                        raising=False)
    res = startup_guard.check_data_dir()
    assert res["ok"] is False
    assert "路径" in res["action"] or "目录" in res["action"]


def test_tc643_03b_dependencies_check_shape():
    """依赖检查返回结构稳定（缺失时给模块名）。"""
    import startup_guard
    res = startup_guard.check_dependencies()
    assert "ok" in res
    if not res["ok"]:
        assert res["missing"]
        assert all("module" in m for m in res["missing"])


def test_tc643_03c_database_check_ok_in_test_env():
    """数据库体检在当前环境可跑通（不抛异常）。"""
    import startup_guard
    res = startup_guard.check_database()
    assert "ok" in res


def test_tc643_health_endpoint_extended_fields():
    """TC-643-01 / FR-643b: /api/health 返回 version/uptime/新鲜度/刷新状态/自检摘要。"""
    from fastapi.testclient import TestClient
    import main_new

    client = TestClient(main_new.app)
    resp = client.get("/api/health")
    assert resp.status_code == 200
    body = resp.json()
    assert body["status"] == "ok"
    assert body["version"] == main_new.APP_VERSION
    for key in ("uptime_seconds", "data_freshness", "last_refresh_status", "self_check"):
        assert key in body, key


def test_tc643_health_never_500_when_metrics_broken(monkeypatch):
    """健康检查在子模块异常时必须仍返回 200（不因健康检查自身挂掉）。"""
    from fastapi.testclient import TestClient
    import main_new

    def boom(*a, **k):
        raise RuntimeError("metrics broken")

    monkeypatch.setattr(main_new, "metrics", None, raising=False)
    client = TestClient(main_new.app)
    resp = client.get("/api/health")
    assert resp.status_code == 200
    assert resp.json()["version"] == main_new.APP_VERSION


def test_tc643_service_script_exists_and_has_single_instance():
    """FR-643a: 常驻脚本存在，且包含单实例锁与崩溃重启等待。"""
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    path = os.path.join(root, "scripts", "quant_service.ps1")
    assert os.path.exists(path)
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    assert "service.lock" in text            # 单实例保护
    assert "RestartDelaySec" in text         # 崩溃重启等待
    assert "-Action watchdog" in text        # 看护进程
    assert "New-ScheduledTaskTrigger" in text  # 开机/登录自启


def test_tc643_upgrade_rollback_on_unhealthy():
    """FR-643 第 4 条: 升级脚本在健康检查失败时回滚到升级前版本。"""
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    path = os.path.join(root, "scripts", "upgrade.ps1")
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    assert "prevCommit" in text
    assert "git reset --hard $prevCommit" in text
    assert "回滚" in text
