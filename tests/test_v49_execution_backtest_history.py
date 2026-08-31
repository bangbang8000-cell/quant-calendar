# -*- coding: utf-8 -*-
"""V4.9 (P1/P3): 调度执行历史 + 回测历史 — 持久化与查询测试

- scheduler._persist_history / get_execution_history / get_execution_summary
- backtest.save_backtest_result / get_backtest_history
注意: scheduler.HISTORY_FILE 为模块级常量(import 时捕获 DATA_DIR), 测试须 monkeypatch。
"""
import pytest
from unittest.mock import patch


class TestSchedulerHistory:
    def test_persist_query_filter(self, tmp_path):
        import scheduler as sched_mod
        hist_file = tmp_path / "scheduler_history.json"
        with patch.object(sched_mod, "HISTORY_FILE", str(hist_file)):
            s = sched_mod.Scheduler()
            s._persist_history("task_a", True, "ok")
            s._persist_history("task_a", False, "boom")
            s._persist_history("task_b", True, "fine")
            hist = s.get_execution_history(days=7)
            assert len(hist) == 3
            assert hist[0]["ts"] >= hist[1]["ts"]  # 时间倒序
            only_a = s.get_execution_history(days=7, task="task_a")
            assert len(only_a) == 2
            ok_only = s.get_execution_history(days=7, status="success")
            assert len(ok_only) == 2
            failed_only = s.get_execution_history(days=7, status="failed")
            assert len(failed_only) == 1
            summary = s.get_execution_summary(days=7)
            assert summary["total"] == 3
            assert summary["success_count"] == 2
            assert summary["by_task"]["task_a"]["total"] == 2
            assert summary["by_task"]["task_a"]["failed"] == 1
            assert summary["daily_trend"] != {}

    def test_empty_when_no_file(self, tmp_path):
        import scheduler as sched_mod
        with patch.object(sched_mod, "HISTORY_FILE", str(tmp_path / "none.json")):
            s = sched_mod.Scheduler()
            assert s.get_execution_history() == []
            summary = s.get_execution_summary(days=7)
            assert summary["total"] == 0
            assert summary["success_rate"] == 0
            assert summary["by_task"] == {}


class TestBacktestHistory:
    def test_save_and_load(self, tmp_path):
        import backtest as bt_mod
        with patch.object(bt_mod, "BACKTEST_HISTORY_FILE", str(tmp_path / "bt_hist.json")):
            assert bt_mod.save_backtest_result("sid1", {"win_rate": 50.0}, {"start_date": "2026-01-01"}) is True
            assert bt_mod.save_backtest_result("sid2", {"win_rate": 60.0}, {}) is True
            hist = bt_mod.get_backtest_history(days=30)
            assert len(hist) == 2
            assert hist[0]["sid"] == "sid2"  # 时间倒序
            only1 = bt_mod.get_backtest_history(days=30, sid="sid1")
            assert len(only1) == 1
            assert only1[0]["params"]["start_date"] == "2026-01-01"

    def test_load_empty_when_missing(self, tmp_path):
        import backtest as bt_mod
        with patch.object(bt_mod, "BACKTEST_HISTORY_FILE", str(tmp_path / "none.json")):
            assert bt_mod.get_backtest_history() == []
