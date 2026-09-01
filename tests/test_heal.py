"""V5.0 T-5.0.2: 健康巡检 + 自愈动作注册表

覆盖: 动作注册表 / 资产自愈计划 / 巡检(findings) / 幂等自愈 / 复检解决 / 时间线持久化 / 异常兜底
"""
import json
import os
from datetime import date, datetime

import pytest
from unittest.mock import patch

from reliability import heal


HEAL_ASSETS = {"strategy_holdings", "calendar_views"}  # 与 freshness ASSET_REGISTRY 中 stale_policy=heal 一致


def _summary(statuses, healthy=None):
    """构造 freshness.status_summary 的确定性返回值"""
    items = []
    for aid, st in statuses.items():
        items.append({
            "asset_id": aid, "name": aid, "freshness_type": "trading_day",
            "stale_policy": "heal" if aid in HEAL_ASSETS else "alert",
            "status": st, "expected_latest": "2026-09-01", "last_update": None,
            "latest_date": None, "count": None, "detail": "",
        })
    return {
        "expected_latest": "2026-09-01",
        "healthy": healthy if healthy is not None else all(s == "fresh" for s in statuses.values()),
        "stale_count": sum(1 for s in statuses.values() if s != "fresh"),
        "items": items,
    }


def _ok_env():
    """db 正常 + 解析器有数据的补丁 (避免 run_cycle 的 db/parser 检查干扰)"""
    return patch.multiple("db", schema_ok=lambda: True), patch(
        "data_parser.parser.get_available_dates", return_value=["2026-09-01"])


# ─── 动作注册表 ───

class TestHealRegistry:
    def test_expected_actions_registered(self):
        for name in ("reload_parser", "rebuild_views", "rerun_migrations"):
            assert name in heal.HEAL_REGISTRY, f"缺少自愈动作 {name}"
        for action in heal.HEAL_REGISTRY.values():
            assert action.summary
            assert action.idempotent is True

    def test_heal_plan_mapping(self):
        assert "reload_parser" in heal.ASSET_HEAL_PLAN["strategy_holdings"]
        assert "rebuild_views" in heal.ASSET_HEAL_PLAN["strategy_holdings"]
        assert heal.ASSET_HEAL_PLAN["calendar_views"] == ["rebuild_views"]


# ─── 巡检 ───

class TestInspect:
    def test_all_fresh_no_stale_findings(self):
        p1, p2 = _ok_env()
        with patch("reliability.freshness.status_summary", return_value=_summary({}, healthy=True)), p1, p2:
            findings = heal.inspect(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)])
        assert not any(f["kind"] == "stale_asset" for f in findings)

    def test_finds_stale_heal_asset(self):
        p1, p2 = _ok_env()
        with patch("reliability.freshness.status_summary",
                   return_value=_summary({"strategy_holdings": "stale"}, healthy=False)), p1, p2:
            findings = heal.inspect(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)])
        stale = [f for f in findings if f["kind"] == "stale_asset"]
        assert stale and stale[0]["asset_id"] == "strategy_holdings"
        assert stale[0]["stale_policy"] == "heal"

    def test_finds_db_schema_error(self):
        p2 = patch("data_parser.parser.get_available_dates", return_value=["2026-09-01"])
        with patch("reliability.freshness.status_summary", return_value=_summary({}, healthy=True)), p2:
            with patch("db.schema_ok", return_value=False):
                findings = heal.inspect()
        assert any(f["kind"] == "db_schema" and f["severity"] == "error" for f in findings)

    def test_finds_no_data(self):
        p1 = patch("db.schema_ok", return_value=True)
        with patch("reliability.freshness.status_summary", return_value=_summary({}, healthy=True)), p1:
            with patch("data_parser.parser.get_available_dates", return_value=[]):
                findings = heal.inspect()
        assert any(f["kind"] == "no_data" for f in findings)


# ─── 自愈 ───

class TestHeal:
    def _heal_finding(self, asset_id, policy="heal", status="stale"):
        return {"kind": "stale_asset", "severity": "warning", "asset_id": asset_id,
                "name": asset_id, "status": status, "stale_policy": policy}

    def test_heals_only_heal_policy_assets(self):
        ran = []
        fake_registry = {
            "reload_parser": heal.HealAction("reload_parser", "重载解析器", None, lambda: (ran.append(1), (True, "ok"))[1]),
            "rebuild_views": heal.HealAction("rebuild_views", "重建视图", "calendar_views", lambda: (ran.append(1), (True, "ok"))[1]),
        }
        fake_plan = {"strategy_holdings": ["reload_parser"], "calendar_views": ["rebuild_views"]}
        findings = [self._heal_finding("strategy_holdings"), self._heal_finding("market_daily", policy="alert")]
        with patch.object(heal, "HEAL_REGISTRY", fake_registry), patch.object(heal, "ASSET_HEAL_PLAN", fake_plan):
            records = heal.heal(findings)
        assert len(records) == 1 and records[0]["asset_id"] == "strategy_holdings"
        assert len(ran) == 1

    def test_idempotent_once_per_cycle(self):
        ran = []
        fake_registry = {
            "rebuild_views": heal.HealAction("rebuild_views", "重建视图", "calendar_views", lambda: (ran.append(1), (True, "ok"))[1]),
        }
        fake_plan = {"strategy_holdings": ["rebuild_views"], "calendar_views": ["rebuild_views"]}
        findings = [self._heal_finding("strategy_holdings"), self._heal_finding("calendar_views")]
        with patch.object(heal, "HEAL_REGISTRY", fake_registry), patch.object(heal, "ASSET_HEAL_PLAN", fake_plan):
            records = heal.heal(findings)
        assert len(records) == 1 and len(ran) == 1  # rebuild_views 只执行一次

    def test_dry_run_does_not_execute(self):
        ran = []
        fake_registry = {
            "reload_parser": heal.HealAction("reload_parser", "重载解析器", None, lambda: (ran.append(1), (True, "ok"))[1]),
        }
        fake_plan = {"strategy_holdings": ["reload_parser"]}
        with patch.object(heal, "HEAL_REGISTRY", fake_registry), patch.object(heal, "ASSET_HEAL_PLAN", fake_plan):
            records = heal.heal([self._heal_finding("strategy_holdings")], dry_run=True)
        assert len(ran) == 0
        assert records[0]["ok"] is True and "dry-run" in records[0]["detail"]

    def test_unknown_action_does_not_crash(self):
        fake_plan = {"strategy_holdings": ["no_such_action"]}
        with patch.object(heal, "HEAL_REGISTRY", {}), patch.object(heal, "ASSET_HEAL_PLAN", fake_plan):
            records = heal.heal([self._heal_finding("strategy_holdings")])
        assert records and records[0]["ok"] is False

    def test_action_exception_captured(self):
        def boom():
            raise RuntimeError("boom")
        fake_registry = {"reload_parser": heal.HealAction("reload_parser", "r", None, boom)}
        fake_plan = {"strategy_holdings": ["reload_parser"]}
        with patch.object(heal, "HEAL_REGISTRY", fake_registry), patch.object(heal, "ASSET_HEAL_PLAN", fake_plan):
            records = heal.heal([self._heal_finding("strategy_holdings")])
        assert records[0]["ok"] is False and "boom" in records[0]["detail"]


# ─── 巡检+自愈循环 ───

class TestRunCycle:
    def _run_cycle(self, statuses_sequence, dry_run=False):
        """statuses_sequence: 每次 freshness.status_summary 调用的摘要; 自动补 healthy"""
        p1, p2 = _ok_env()
        ran = []

        def fake_run():
            ran.append(1)
            return True, "ok"

        fake_registry = {
            "reload_parser": heal.HealAction("reload_parser", "重载解析器", None, fake_run),
            "rebuild_views": heal.HealAction("rebuild_views", "重建视图", "calendar_views", fake_run),
        }
        fake_plan = {"strategy_holdings": ["reload_parser"], "calendar_views": ["rebuild_views"]}
        summaries = [_summary(s, healthy=all(v == "fresh" for v in s.values())) for s in statuses_sequence]
        with patch("reliability.freshness.status_summary", side_effect=summaries), p1, p2,              patch.object(heal, "HEAL_REGISTRY", fake_registry), patch.object(heal, "ASSET_HEAL_PLAN", fake_plan):
            return heal.run_cycle(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)], dry_run=dry_run), ran

    def test_healthy_when_all_fresh(self):
        cycle, ran = self._run_cycle([{}])
        assert cycle["healthy"] is True
        assert cycle["heal_attempted"] == 0
        assert ran == []

    def test_heals_stale_and_resolves(self):
        cycle, ran = self._run_cycle([{"strategy_holdings": "stale"}, {"strategy_holdings": "fresh"}])
        assert cycle["heal_attempted"] == 1
        assert cycle["heal_ok"] == 1
        assert cycle["resolved"] == 1
        assert cycle["still_affected"] == []
        assert cycle["healthy"] is True
        assert ran == [1]

    def test_persists_heal_timeline(self):
        cycle, _ = self._run_cycle([{"calendar_views": "missing"}, {"calendar_views": "fresh"}])
        hist = heal.heal_history()
        assert hist and hist[-1]["action"] == "rebuild_views"
        import paths
        assert os.path.exists(os.path.join(paths.DATA_DIR, "heal_history.json"))

    def test_dry_run_cycle(self):
        cycle, ran = self._run_cycle([{"strategy_holdings": "stale"}], dry_run=True)
        assert cycle["dry_run"] is True
        assert ran == []  # 未执行
        assert cycle["heal_attempted"] == 1
        assert all(r["resolved"] is None for r in heal.heal_history()[-1:])

    def test_inspection_error_still_returns(self):
        p1, p2 = _ok_env()
        with patch("reliability.freshness.status_summary", side_effect=RuntimeError("inspect boom")), p1, p2:
            cycle = heal.run_cycle()
        assert any(f["kind"] == "inspection_error" for f in cycle["findings"])
        assert cycle["healthy"] is False


class TestHistoryCap:
    def test_history_capped(self):
        import paths
        hf = os.path.join(paths.DATA_DIR, "heal_history.json")
        rec = {"ts": "t", "action": "x", "summary": "s", "asset_id": None,
               "target": "stale", "dry_run": False, "ok": True, "detail": "", "resolved": None}
        for _ in range(300):
            heal.persist([dict(rec)])
        hist = heal.heal_history(limit=1000)
        assert len(hist) <= 200
