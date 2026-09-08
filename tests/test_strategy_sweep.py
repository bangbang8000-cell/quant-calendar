# -*- coding: utf-8 -*-
"""
策略实验室测试 (V4.0 M2): 参数网格扫描 + 因子声明全策略覆盖
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from strategy_sdk.registry import registry  # noqa: E402
from strategy_sdk.testsupport import FakePortal  # noqa: E402
from strategy_sdk.sweep import param_sweep  # noqa: E402


def _portal():
    import datetime
    start = datetime.date(2026, 1, 5)
    dates = []
    d = start
    while len(dates) < 90:
        if d.weekday() < 5:
            dates.append(d.strftime('%Y-%m-%d'))
        d += datetime.timedelta(days=1)
    symbols = ["600000.SH", "600519.SH", "601318.SH", "600036.SH"]
    return FakePortal(dates=dates, symbols=symbols, seed=7)


def test_param_sweep_runs_combos_sorted():
    st = registry.get("multi_factor")
    results = param_sweep(st, {"top_n": [10, 20]}, _portal(),
                          "2026-01-05", "2026-04-30", metric="annual_return")
    assert len(results) == 2, results
    assert results[0]["annual_return"] >= results[1]["annual_return"]
    for r in results:
        assert set(r) >= {"params", "total_return", "annual_return",
                          "max_drawdown", "sharpe_ratio"}
        assert r["params"]["top_n"] in (10, 20)


def test_param_sweep_invalid_combo_skipped():
    st = registry.get("multi_factor")
    # top_n=0 超出 min=5 → 校验失败跳过
    results = param_sweep(st, {"top_n": [0, 20]}, _portal(),
                          "2026-01-05", "2026-04-30")
    assert len(results) == 1, results
    assert results[0]["params"]["top_n"] == 20


def test_param_sweep_empty_grid():
    st = registry.get("multi_factor")
    assert param_sweep(st, {}, _portal(), "2026-01-05", "2026-04-30") == []


def test_all_builtins_have_factor_specs():
    """V4.0 M2-2: 全部内置策略声明因子(IC/分层可研究)"""
    for sid in ("multi_factor", "sector_rotation", "index_enhance", "capital_flow"):
        st = registry.get(sid)
        assert getattr(st, "factor_specs", []), f"{sid} 缺少 factor_specs"


def test_registry_list_exposes_factor_specs():
    """V4.0 M2-3: 策略列表返回 factor_specs, 前端不再硬编码因子下拉"""
    for item in registry.list():
        assert "factor_specs" in item, item["id"]
        if item["id"] == "multi_factor":
            names = [f["name"] for f in item["factor_specs"]]
            assert "mom20" in names and "pe" in names
