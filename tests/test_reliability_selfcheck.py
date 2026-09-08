"""V5.0 T-5.0.4: 启动自检故障场景 (TEST-PLAN 1.1: 缺依赖/缺目录/DB 损坏/缺配置)

与 test_checks.py 互补: 这里聚焦"故障注入下自检的诚实度与聚合"
"""
import os
from datetime import datetime

import pytest
from unittest.mock import patch

from reliability import checks


class TestSelfCheckFaults:
    def test_missing_data_dir_is_fail(self):
        """数据目录缺失 → data_dir fail + healthy False"""
        with patch("reliability.checks._data_dir_ok", return_value=(False, "目录不存在")):
            r = checks.run_checks()
        dd = [c for c in r["checks"] if c["name"] == "data_dir"]
        assert dd and dd[0]["status"] == "fail"
        assert r["healthy"] is False

    def test_unwritable_subdir_is_fail(self):
        """子目录创建失败 → data_subdirs fail"""
        with patch("os.makedirs", side_effect=OSError("permission denied")):
            r = checks.run_checks()
        sd = [c for c in r["checks"] if c["name"] == "data_subdirs"]
        assert sd and sd[0]["status"] == "fail"

    def test_missing_env_is_warn(self):
        """缺少 .env → warn (用默认配置可运行), 不判 fail"""
        with patch("os.path.exists", return_value=False):
            r = checks.run_checks()
        ec = [c for c in r["checks"] if c["name"] == "env_config"]
        assert ec and ec[0]["status"] == "warn"

    def test_multiple_failures_aggregated(self):
        """db 与数据目录同时故障 → 两者都计入 fail, 报告仍完整"""
        with patch("reliability.checks._db_schema_ok", return_value=False),              patch("reliability.checks._data_dir_ok", return_value=(False, "目录不存在")):
            r = checks.run_checks()
        assert r["fail_count"] >= 2
        assert r["healthy"] is False

    def test_report_persisted_even_when_failing(self):
        """自检失败时报告仍持久化 (供面板展示失败详情)"""
        with patch("reliability.checks._db_schema_ok", return_value=False),              patch("reliability.checks._data_dir_ok", return_value=(False, "目录不存在")):
            checks.run_checks()
        got = checks.get_report()
        assert got is not None and got["healthy"] is False

    def test_refresh_config_failure_is_warn(self):
        """数据刷新配置加载失败 → warn (用默认), 不抛异常"""
        with patch("data_refresh_config.load_config", side_effect=RuntimeError("bad config")):
            r = checks.run_checks()
        rc = [c for c in r["checks"] if c["name"] == "data_refresh_config"]
        assert rc and rc[0]["status"] == "warn"
