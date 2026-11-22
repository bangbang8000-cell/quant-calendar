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
    """v7.15 (FR-6 双轨统一): save 委托 research_store(experiments 单源);
    get 优先 experiments, 为空时回退旧 json 并标 legacy。"""

    @staticmethod
    def _fake_store(monkeypatch):
        """内存化 research_store 存取, 隔离真实 app.db"""
        import research_store as rs
        store = {}

        def fake_save(exp):
            eid = exp.get("id") or ("e_%d" % (len(store) + 1))
            exp = dict(exp, id=eid, created_at=rs._now())
            store[eid] = exp
            return eid

        def fake_list(type=None, limit=50):
            rows = [v for v in store.values() if type is None or v.get("type") == type]
            # 与真实 SQL 一致: created_at DESC, id DESC
            rows.sort(key=lambda e: (e.get("created_at", ""), e.get("id", "")), reverse=True)
            return rows[:limit]

        monkeypatch.setattr(rs, "save_experiment", fake_save)
        monkeypatch.setattr(rs, "list_experiments", fake_list)
        return store

    def test_save_and_load(self, monkeypatch):
        import backtest as bt_mod
        import backtest_history_store as bhs_mod
        self._fake_store(monkeypatch)
        assert bt_mod.save_backtest_result("sid1", {"win_rate": 50.0}, {"start_date": "2026-01-01"}) is True
        assert bt_mod.save_backtest_result("sid2", {"win_rate": 60.0}, {}) is True
        hist = bt_mod.get_backtest_history(days=30)
        assert len(hist) == 2
        assert hist[0]["sid"] == "sid2"  # 时间倒序
        assert "legacy" not in hist[0]  # 单源记录不带 legacy 标记
        only1 = bt_mod.get_backtest_history(days=30, sid="sid1")
        assert len(only1) == 1
        assert only1[0]["params"]["start_date"] == "2026-01-01"

    def test_save_no_longer_writes_json(self, tmp_path, monkeypatch):
        """FR-6: 旧 backtest_history.json 写路径废弃"""
        import backtest as bt_mod
        import backtest_history_store as bhs_mod
        self._fake_store(monkeypatch)
        jf = tmp_path / "bt_hist.json"
        monkeypatch.setattr(bhs_mod, "BACKTEST_HISTORY_FILE", str(jf))
        bt_mod.save_backtest_result("sid_x", {"win_rate": 55.0}, {})
        assert not jf.exists()  # 不再写 json

    def test_legacy_json_fallback(self, tmp_path, monkeypatch):
        """FR-6: experiments 为空时回退读旧 json, 条目带 legacy 标记"""
        import json as _json
        import backtest as bt_mod
        import backtest_history_store as bhs_mod
        self._fake_store(monkeypatch)  # 空 store
        jf = tmp_path / "bt_hist.json"
        jf.write_text(_json.dumps([
            {"sid": "old1", "ts": "2026-11-01 10:00:00", "summary": {"win_rate": 40.0}, "params": {}},
            {"sid": "old2", "ts": "2026-11-02 10:00:00", "summary": {"win_rate": 45.0}, "params": {}},
        ]), encoding="utf-8")
        monkeypatch.setattr(bhs_mod, "BACKTEST_HISTORY_FILE", str(jf))
        hist = bt_mod.get_backtest_history(days=30)
        assert len(hist) == 2
        assert all(r.get("legacy") is True for r in hist)
        assert hist[0]["sid"] == "old2"  # 时间倒序

    def test_load_empty_when_missing(self, tmp_path, monkeypatch):
        import backtest as bt_mod
        import backtest_history_store as bhs_mod
        self._fake_store(monkeypatch)
        monkeypatch.setattr(bhs_mod, "BACKTEST_HISTORY_FILE", str(tmp_path / "none.json"))
        assert bt_mod.get_backtest_history() == []
