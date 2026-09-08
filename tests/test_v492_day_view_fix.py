# -*- coding: utf-8 -*-
"""
V4.9.2: 日视图为空根因修复测试
覆盖: verify_day_ingest 校验 + strategy_run 后刷新聚合器(parser→aggregator) +
      自愈(self_heal) + 文件监听扩展(holdings 目录)
"""
import os
import sys
import pytest
from unittest.mock import patch

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))


class TestVerifyDayIngest:
    """F1.2: 生成结果校验 (纯函数)"""

    class _FakeAgg:
        def __init__(self, dates, day_totals):
            self.all_dates = dates
            self._day_totals = day_totals

        def get_day_view(self, date):
            return {"total": self._day_totals.get(date, 0)}

    def test_ok_when_date_present_and_visible(self):
        from scheduler import verify_day_ingest
        agg = self._FakeAgg(["2026-08-28"], {"2026-08-28": 84})
        ok, detail = verify_day_ingest("2026-08-28", agg)
        assert ok is True
        assert "日视图已可见" in detail and "84" in detail

    def test_fail_when_date_missing_and_prior_empty(self):
        # V4.9.3: 请求日不在聚合器时自动回退到最近前一可用日(周末/节假日语义);
        # 前一可用日视图也为空 → 校验失败(报告实际校验日).
        from scheduler import verify_day_ingest
        agg = self._FakeAgg(["2026-08-27"], {})
        ok, detail = verify_day_ingest("2026-08-28", agg)
        assert ok is False
        assert "日视图为空" in detail and "2026-08-27" in detail

    def test_weekend_falls_back_to_last_trading_day(self):
        # V4.9.3: 周末(8/29 周六)运行 → 回退校验最近交易日 8/28, 不再误报失败
        from scheduler import verify_day_ingest
        agg = self._FakeAgg(["2026-08-27", "2026-08-28"], {"2026-08-28": 84})
        ok, detail = verify_day_ingest("2026-08-29", agg)
        assert ok is True
        assert "2026-08-28" in detail and "原始请求 2026-08-29" in detail

    def test_fail_when_empty_view(self):
        from scheduler import verify_day_ingest
        agg = self._FakeAgg(["2026-08-28"], {"2026-08-28": 0})
        ok, detail = verify_day_ingest("2026-08-28", agg)
        assert ok is False
        assert "日视图为空" in detail


class TestStrategyRunRefresh:
    """F1.1: 持仓生成后刷新 parser+聚合器并校验, 不再报假成功"""

    def test_refresh_reloads_parser_then_aggregator(self):
        from scheduler import Scheduler
        s = Scheduler()
        calls = []
        with patch("scheduler.views_aggregator.reload") as agg_reload, \
             patch("data_parser.parser.reload") as p_reload, \
             patch("scheduler.verify_day_ingest",
                    return_value=(True, "2026-08-28 日视图已可见(total=84)")):
            agg_reload.side_effect = lambda: calls.append("agg") or {"latest_date": "2026-08-28"}
            p_reload.side_effect = lambda: calls.append("parser")
            ok, detail = s._refresh_after_strategy_run("2026-08-28")
        assert calls == ["parser", "agg"], calls  # parser 先于 aggregator
        assert ok is True
        assert "日视图已可见" in detail

    def test_failed_refresh_returns_reason(self):
        from scheduler import Scheduler
        s = Scheduler()
        with patch("scheduler.views_aggregator.reload", side_effect=RuntimeError("boom")):
            ok, detail = s._refresh_after_strategy_run("2026-08-28")
        assert ok is False
        assert "boom" in detail

    def test_run_strategy_once_progress_cb(self):
        """progress 回调按 sid 触发 (generating→done)"""
        import strategy_governance as gov
        from scheduler import run_strategy_once
        state = {"multi_factor": {"enabled": True, "schedule": "20:00"},
                 "capital_flow": {"enabled": True, "schedule": "20:00"}}
        stages = []
        with patch.object(gov, "get_state", return_value=state), \
             patch.object(gov, "run_once", side_effect=lambda sid, as_of=None: None):
            run_strategy_once(lambda sid, stage: stages.append((sid, stage)))
        assert ("multi_factor", "generating") in stages
        assert ("capital_flow", "done") in stages
        assert len(stages) == 4, stages


class TestSelfHeal:
    """F1.3: 聚合器自愈 — 持仓最新日期>聚合器最新日期 自动刷新"""

    def test_self_heal_triggers_on_drift(self, tmp_path):
        from scheduler import Scheduler
        s = Scheduler()
        hold_root = str(tmp_path / "holdings")
        os.makedirs(os.path.join(hold_root, "2026-08-29"), exist_ok=True)
        # V4.9.3: self_heal 先刷新 parser 再刷 views(修复 parser 陈旧导致聚合器卡旧日)
        with patch("scheduler.DATA_DIR", str(tmp_path)), \
             patch("scheduler.views_aggregator.all_dates", ["2026-08-28"]), \
             patch("scheduler.views_aggregator.reload",
                    return_value={"latest_date": "2026-08-29"}), \
             patch("data_parser.parser.reload", return_value=None), \
             patch.object(s, "_persist_history", return_value=None):
            triggered = s._self_heal_aggregator()
        assert triggered is True
        slot = s.task_status.get("self_heal", {})
        assert slot.get("last_status") == "success"
        assert "2026-08-29" in slot.get("detail", "")

    def test_no_self_heal_without_drift(self, tmp_path):
        from scheduler import Scheduler
        s = Scheduler()
        hold_root = str(tmp_path / "holdings")
        os.makedirs(os.path.join(hold_root, "2026-08-28"), exist_ok=True)
        with patch("scheduler.DATA_DIR", str(tmp_path)), \
             patch("scheduler.views_aggregator.all_dates", ["2026-08-28"]), \
             patch("scheduler.views_aggregator.reload") as rl, \
             patch.object(s, "_persist_history", return_value=None):
            triggered = s._self_heal_aggregator()
        assert triggered is False
        rl.assert_not_called()


class TestFileWatchHoldings:
    """F1.4: 文件监听扩展 — data/holdings 目录变动可检测"""

    def test_scan_csv_files_recursive_finds_holdings(self, tmp_path):
        from scheduler import scan_csv_files
        hold = tmp_path / "holdings"
        (hold / "2026-08-28").mkdir(parents=True)
        (hold / "2026-08-28" / "多因子策略持仓.csv").write_text("a,b\n")
        m = scan_csv_files([str(tmp_path)], recursive=True)
        assert any("holdings" in k and k.endswith(".csv") for k in m)

    def test_detect_change_in_holdings(self, tmp_path):
        from scheduler import scan_csv_files, detect_csv_changes
        hold = tmp_path / "holdings"
        (hold / "2026-08-28").mkdir(parents=True)
        f = hold / "2026-08-28" / "a.csv"
        f.write_text("x\n")
        snap1 = scan_csv_files([str(tmp_path)], recursive=True)
        f.write_text("x,y\n")  # 内容变动 → mtime 变化
        snap2 = scan_csv_files([str(tmp_path)], recursive=True)
        changed, desc = detect_csv_changes(snap1, snap2)
        assert changed is True
