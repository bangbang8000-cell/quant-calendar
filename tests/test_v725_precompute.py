# -*- coding: utf-8 -*-
"""v7.25 FR-8: 收盘后分批预计算 — 状态、版本失效、单项隔离"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import precompute  # noqa: E402
import ttl_cache  # noqa: E402


@pytest.fixture(autouse=True)
def clean():
    precompute.reset()
    ttl_cache.clear()
    yield
    precompute.reset()
    ttl_cache.clear()


def test_run_phase_status(monkeypatch):
    monkeypatch.setattr(precompute, "_produce", lambda item: {"x": item})
    res = precompute.run_phase("market", version="20261127")
    assert res["ok"] == 2 and res["total"] == 2

    st = precompute.status()
    assert st["data_version"] == "20261127"
    assert st["phases"]["market"]["ok"] == 2
    assert st["summary"].startswith("15:30 行情类(2/2)")
    assert len(st["phases_config"]) == 3


def test_version_change_invalidates_cache(monkeypatch):
    monkeypatch.setattr(precompute, "_produce", lambda item: 1)
    precompute.run_phase("market", version="20261127")
    assert precompute.get_cached("market_overview", "20261127") == 1
    # 数据版本变化 → 旧缓存不再命中
    assert precompute.get_cached("market_overview", "20261128") is None


def test_pending_items_reported(monkeypatch):
    def prod(item):
        return None if item == "factor_ic" else 1

    monkeypatch.setattr(precompute, "_produce", prod)
    res = precompute.run_phase("strategy", version="v")
    assert res["items"]["factor_ic"]["status"] == "pending"
    assert res["items"]["pattern_baseline"]["status"] == "ok"
    assert res["ok"] == 1 and res["total"] == 2


def test_item_error_isolated(monkeypatch):
    def prod(item):
        if item == "market_overview":
            raise RuntimeError("boom")
        return {}

    monkeypatch.setattr(precompute, "_produce", prod)
    res = precompute.run_phase("market", version="v")
    assert res["items"]["market_overview"]["status"] == "error"
    assert res["items"]["calendar_day_view"]["status"] == "ok"


def test_status_endpoint_and_scheduler_wired():
    system_src = open(os.path.join(BASE, "backend", "api", "v1", "system.py"),
                      encoding="utf-8").read()
    assert "/precompute/status" in system_src
    core_src = open(os.path.join(BASE, "backend", "scheduler", "_core.py"),
                    encoding="utf-8").read()
    assert "precompute_pipeline_task" in core_src, "预计算任务需在 start() 注册"
    health_src = open(os.path.join(BASE, "backend", "scheduler", "_core_health.py"),
                      encoding="utf-8").read()
    assert "async def precompute_pipeline_task" in health_src
