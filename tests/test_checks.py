"""V5.0 T-5.0.3: 启动自检 (依赖/目录/DB/关键配置) 与启动报告

覆盖: 报告结构 / 各检查项状态 / 持久化 / 异常兜底 / API
"""
import json
import os
from datetime import datetime

import pytest
from unittest.mock import patch

from reliability import checks


def _valid_statuses(report):
    return all(c["status"] in ("ok", "warn", "fail") and c["name"] and "detail" in c
               for c in report["checks"])


class TestReportStructure:
    def test_report_shape(self):
        r = checks.run_checks()
        for key in ("ts", "healthy", "ok_count", "warn_count", "fail_count", "checks"):
            assert key in r, f"缺少字段 {key}"
        assert _valid_statuses(r)
        assert r["ok_count"] + r["warn_count"] + r["fail_count"] == len(r["checks"])

    def test_healthy_flag_consistency(self):
        r = checks.run_checks()
        assert r["healthy"] == (r["fail_count"] == 0)

    def test_app_version_in_report(self):
        r = checks.run_checks(app_version="5.0.0")
        assert r["app_version"] == "5.0.0"


class TestIndividualChecks:
    def test_python_version_ok(self):
        r = checks.run_checks()
        py = [c for c in r["checks"] if c["name"] == "python_version"]
        assert py and py[0]["status"] == "ok"

    def test_data_dir_ok_under_redirect(self):
        """conftest 已把 DATA_DIR 重定向到临时目录: 存在且可写 → ok"""
        r = checks.run_checks()
        dd = [c for c in r["checks"] if c["name"] == "data_dir"]
        assert dd and dd[0]["status"] == "ok"

    def test_db_schema_ok(self):
        import db
        db.init_db()  # conftest 已重定向 DB 到临时目录, 建全量 schema
        r = checks.run_checks()
        dbc = [c for c in r["checks"] if c["name"] == "db_schema"]
        assert dbc and dbc[0]["status"] == "ok"

    def test_missing_feishu_config_is_warn_not_fail(self):
        """飞书 webhook 未配置 = 可选功能, 应 warn 而不应 fail"""
        with patch("reliability.checks._feishu_configured", return_value=False):
            r = checks.run_checks()
        fs = [c for c in r["checks"] if c["name"] == "feishu_config"]
        assert fs and fs[0]["status"] == "warn"

    def test_fail_when_db_broken_but_other_checks_run(self):
        """db 异常 → db_schema fail + healthy False, 且其他检查不受影响继续执行"""
        with patch("reliability.checks._db_schema_ok", return_value=False):
            r = checks.run_checks()
        assert any(c["name"] == "db_schema" and c["status"] == "fail" for c in r["checks"])
        assert r["healthy"] is False
        assert len(r["checks"]) >= 5  # 其余检查照常执行


class TestPersistence:
    def test_report_persisted_and_readable(self):
        r = checks.run_checks(app_version="5.0.0")
        import paths
        p = os.path.join(paths.DATA_DIR, "startup_check.json")
        assert os.path.exists(p)
        with open(p, encoding="utf-8") as f:
            assert json.load(f)["app_version"] == "5.0.0"
        got = checks.get_report()
        assert got and got["app_version"] == "5.0.0"

    def test_get_report_empty_when_never_run(self):
        import paths
        p = os.path.join(paths.DATA_DIR, "startup_check.json")
        if os.path.exists(p):
            os.remove(p)
        assert checks.get_report() is None


# ─── API ───

class TestStartupReportApi:
    def test_anonymous_rejected(self):
        from main_new import app
        from fastapi.testclient import TestClient
        c = TestClient(app)
        assert c.get("/api/reliability/startup-report").status_code in (401, 403)

    def test_admin_can_read_report(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/reliability/startup-report")
        assert r.status_code == 200, r.text
        data = r.json()["data"]
        assert "healthy" in data and "checks" in data
