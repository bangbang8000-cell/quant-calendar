# -*- coding: utf-8 -*-
"""
V4.9.2 (P1): 每日策略执行监控 — plan/status/results/trace/verify 测试
"""
import os
import sys
import pytest
from unittest.mock import patch

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))


def _mk_holdings(tmp_path, date, specs):
    """specs: {fname: [codes held]}"""
    d = tmp_path / "holdings" / date
    d.mkdir(parents=True, exist_ok=True)
    all_codes = ["000001.SZ", "000002.SZ", "000003.SZ", "000004.SZ"]
    for fname, held in specs.items():
        header = "," + ",".join(all_codes)
        row = date + "," + ",".join("1" if c in held else "" for c in all_codes)
        (d / fname).write_text(header + "\n" + row + "\n", encoding="utf-8")
    return str(tmp_path / "holdings")


class TestPlan:
    def test_plan_aggregates_gov_state(self):
        import strategy_execution as se
        state = {"multi_factor": {"enabled": True, "schedule": "20:00", "universe": "all"},
                 "capital_flow": {"enabled": False, "schedule": "20:00"}}
        with patch.object(se.gov, "get_state", return_value=state):
            plans = se.get_plan()
        assert len(plans) == 2
        p = next(x for x in plans if x["sid"] == "multi_factor")
        assert p["enabled"] is True
        assert p["schedule"] == "20:00"
        assert p["countdown_seconds"] >= 0
        assert p["next_run"]
        assert plans[0]["enabled"] is True  # enabled 优先

    def test_plan_no_enabled_returns_list(self):
        import strategy_execution as se
        state = {"multi_factor": {"enabled": False, "schedule": "20:00"}}
        with patch.object(se.gov, "get_state", return_value=state):
            plans = se.get_plan()
        assert plans and plans[0]["enabled"] is False


class TestStatus:
    def test_idle_without_scheduler(self):
        import strategy_execution as se
        st = se.get_live_status(None)
        assert st["phase"] == "idle"

    def test_running_has_elapsed(self):
        import strategy_execution as se
        class Fake:
            execution_progress = {"phase": "running", "current_sid": "multi_factor",
                                 "started_at": "2026-08-28 20:00:00", "stage": "generating"}
        st = se.get_live_status(Fake())
        assert st["phase"] == "running"
        assert st["current_sid"] == "multi_factor"
        assert st["elapsed_seconds"] >= 0


class TestResults:
    def test_aggregates_per_strategy_and_visibility(self, tmp_path):
        import strategy_execution as se
        root = _mk_holdings(tmp_path, "2026-08-28",
                           {"多因子策略持仓.csv": ["000001.SZ", "000003.SZ"],
                            "资金流策略持仓.csv": ["000001.SZ", "000004.SZ"]})
        with patch.object(se, "HOLDINGS_ROOT", root), \
             patch.object(se, "_day_view_total", return_value=3), \
             patch.object(se, "_strategy_run_ts", return_value="2026-08-28 20:10:55"):
            res = se.get_results(days=7)
        assert len(res["dates"]) == 1
        d = res["dates"][0]
        assert d["date"] == "2026-08-28"
        assert d["visible"] is True
        assert d["in_pool_union"] == 3
        counts = {s["strategy"]: s["held"] for s in d["strategies"]}
        assert counts["多因子策略"] == 2
        assert counts["资金流策略"] == 2

    def test_results_cached(self, tmp_path):
        import strategy_execution as se
        root = _mk_holdings(tmp_path, "2026-08-28", {"a策略持仓.csv": ["000001.SZ"]})
        with patch.object(se, "HOLDINGS_ROOT", root), \
             patch.object(se, "_day_view_total", return_value=1) as dvt, \
             patch.object(se, "_strategy_run_ts", return_value=None):
            se._results_cache = None
            se._results_cache_ts = 0.0
            se.get_results(days=7)
            se.get_results(days=7)
        assert dvt.call_count == 1  # 第二次命中 60s 缓存

    def test_results_marks_invisible(self, tmp_path):
        import strategy_execution as se
        se._results_cache = None
        se._results_cache_ts = 0.0
        root = _mk_holdings(tmp_path, "2026-08-28", {"a策略持仓.csv": ["000001.SZ"]})
        with patch.object(se, "HOLDINGS_ROOT", root), \
             patch.object(se, "_day_view_total", return_value=0), \
             patch.object(se, "_strategy_run_ts", return_value=None):
            res = se.get_results(days=7)
        assert res["dates"][0]["visible"] is False


class TestTrace:
    def test_trace_timeline(self, tmp_path):
        import strategy_execution as se
        root = _mk_holdings(tmp_path, "2026-08-28",
                           {"多因子策略持仓.csv": ["000001.SZ", "000003.SZ"]})
        with patch.object(se, "HOLDINGS_ROOT", root), \
             patch.object(se, "_strategy_run_ts", return_value="2026-08-28 20:10:55"), \
             patch.object(se, "_day_view_total", return_value=2):
            tr = se.get_trace("2026-08-28")
        assert tr["exists"] is True
        steps = [s["step"] for s in tr["steps"]]
        assert any("调度触发" in s for s in steps)
        assert any("生成持仓" in s for s in steps)
        assert any("日视图校验" in s for s in steps)
        assert any("✓" in s["detail"] for s in tr["steps"] if "校验" in s["step"] if s["step"] == "日视图校验")

    def test_trace_missing_date(self, tmp_path):
        import strategy_execution as se
        root = _mk_holdings(tmp_path, "2026-08-28", {"a策略持仓.csv": ["000001.SZ"]})
        with patch.object(se, "HOLDINGS_ROOT", root):
            tr = se.get_trace("2026-08-27")
        assert tr["exists"] is False and tr["steps"] == []


class TestApi:
    @pytest.fixture(scope="module")
    def admin_client(self):
        from main_new import app
        from auth import create_access_token
        token = create_access_token({"sub": "admin", "role": "admin"})
        client = TestClient(app)
        client.headers.update({"Authorization": "Bearer " + token})
        return client

    def test_plan_api(self, admin_client):
        r = admin_client.get("/api/strategies/execution/plan")
        assert r.status_code == 200
        assert "plans" in r.json()["data"]

    def test_status_api(self, admin_client):
        r = admin_client.get("/api/strategies/execution/status")
        assert r.status_code == 200
        assert "phase" in r.json()["data"]

    def test_results_api(self, admin_client):
        r = admin_client.get("/api/strategies/execution/results?days=3")
        assert r.status_code == 200
        assert "dates" in r.json()["data"]

    def test_trace_api_unknown_date(self, admin_client):
        r = admin_client.get("/api/strategies/execution/trace/2099-01-01")
        assert r.status_code == 200
        assert r.json()["data"]["exists"] is False

    def test_verify_requires_admin(self):
        from main_new import app
        from auth import create_access_token
        token = create_access_token({"sub": "guest", "role": "guest"})
        client = TestClient(app)
        client.headers.update({"Authorization": "Bearer " + token})
        r = client.post("/api/strategies/execution/verify", json={})
        assert r.status_code in (403, 401)

    def test_verify_admin(self, admin_client):
        r = admin_client.post("/api/strategies/execution/verify", json={})
        assert r.status_code == 200
        assert "stats" in r.json()["data"]

from fastapi.testclient import TestClient
