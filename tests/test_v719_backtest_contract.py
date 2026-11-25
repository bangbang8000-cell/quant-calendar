#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (T3.1 / FR-8): 回测默认参数与字段契约

需求 ⑧ 原话：「默认回测时间要给出建议区间 比如默认区间最近 18 个月 默认金额 100 万元 可快捷调整」。
本文件锁四件事：
  1. 后端默认窗口 18 个月（源码 + 回显）；
  2. 初始资金**真的参与计算**（净值倍数 → 金额序列 / 期末权益 / 总盈亏），
     —— 旧实现 initial_capital 只被记录不参与，填 100 万与填 1 万得到同一条曲线；
  3. 成本三件套（fee_rate / commission_rate 别名 / slippage）被消费并回显，可追溯；
  4. 前端两处回测入口（研究页回测子页 / 策略管理回测工作台）默认值一致，且带快捷档。
"""
import os
import sys

import pytest
from fastapi.testclient import TestClient

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, "backend"))
FE = os.path.join(ROOT, "frontend")


def _read(rel):
    with open(os.path.join(FE, rel), "r", encoding="utf-8") as f:
        return f.read()


def _read_be(rel):
    with open(os.path.join(ROOT, "backend", rel), "r", encoding="utf-8") as f:
        return f.read()


@pytest.fixture(scope="module")
def client():
    from main_new import app
    from auth import create_access_token
    token = create_access_token({"sub": "admin", "role": "admin"})
    c = TestClient(app)
    c.headers.update({"Authorization": "Bearer " + token})
    return c


def _patch_portal(monkeypatch):
    """强制 FakePortal 降级 —— 不依赖网络/真实行情，结果可复现"""
    import pandas as pd
    from strategy_sdk.testsupport import FakePortal
    from api.v1 import strategy_research

    def _fake(universe=None, seed=2026):
        dates = pd.date_range("2025-02-03", "2026-11-20", 420).strftime("%Y-%m-%d").tolist()
        symbols = universe or ["%06d.SH" % (600000 + i) for i in range(24)]
        return FakePortal(dates=dates, symbols=symbols, seed=seed), False

    monkeypatch.setattr(strategy_research, "_resolve_portal", _fake)


# ─── 1. 换算纯函数 ────────────────────────────────

def test_scale_equity_to_capital():
    """净值倍数 → 金额：curve × capital，并给出期末权益与总盈亏；原始倍数保留"""
    from api.v1 import strategy_research as sr
    r = {"equity_curve": [1.0, 1.1, 0.9], "total_return": -10.0}
    sr._scale_equity_to_capital(r, 1_000_000)
    assert r["initial_capital"] == 1_000_000
    assert r["equity_curve"] == [1_000_000.0, 1_100_000.0, 900_000.0], r["equity_curve"]
    assert r["equity_curve_index"] == [1.0, 1.1, 0.9], "无量纲倍数必须保留，避免破坏既有图表口径"
    assert r["final_equity"] == 900_000.0
    assert r["total_pnl"] == -100_000.0
    assert r["total_return"] == -10.0, "原有收益字段不得被覆盖"


def test_scale_equity_handles_bad_curve():
    """空曲线 / 非数值曲线不得抛异常（回测失败路径要还能返回 message）"""
    from api.v1 import strategy_research as sr
    r1 = {"equity_curve": []}
    sr._scale_equity_to_capital(r1, 1_000_000)
    assert r1["initial_capital"] == 1_000_000 and "final_equity" not in r1
    r2 = {"equity_curve": ["x", None]}
    sr._scale_equity_to_capital(r2, 1_000_000)
    assert "final_equity" not in r2


def test_scale_equity_scales_with_capital():
    """同一策略、不同资金 → 金额曲线严格等比（这正是「资金参与计算」的判据）"""
    from api.v1 import strategy_research as sr
    a = sr._scale_equity_to_capital({"equity_curve": [1.0, 1.2]}, 1_000_000)
    b = sr._scale_equity_to_capital({"equity_curve": [1.0, 1.2]}, 100_000)
    assert a["equity_curve"][1] == 1_200_000.0
    assert b["equity_curve"][1] == 120_000.0
    assert a["total_pnl"] == 10 * b["total_pnl"]


# ─── 2. 端点契约 ─────────────────────────────────

def test_backtest_echoes_used_params(client, monkeypatch):
    """POST /backtest → used_params 回显（区间/资金/费率/滑点），result 带金额口径"""
    _patch_portal(monkeypatch)
    r = client.post("/api/strategies/multi_factor/backtest", json={
        "initial_capital": 2_000_000,
        "fee_rate": 0.0005,
        "slippage": 0.002,
        "start_date": "2025-06-02",
        "end_date": "2026-11-20",
    })
    assert r.status_code == 200, r.text
    body = r.json()
    used = body.get("used_params") or {}
    assert used.get("initial_capital") == 2_000_000
    assert used.get("fee_rate") == 0.0005
    assert used.get("slippage") == 0.002
    assert used.get("start_date") == "2025-06-02"
    assert used.get("end_date") == "2026-11-20"
    assert used.get("months") == 18, "默认/建议窗口口径固定为 18 个月"

    res = body.get("result") or {}
    if res.get("success", True) and res.get("equity_curve"):
        assert res.get("initial_capital") == 2_000_000
        assert res.get("equity_curve_index"), "应同时返回无量纲倍数序列"
        first = res["equity_curve"][0]
        assert abs(first - 2_000_000 * res["equity_curve_index"][0]) < 1.0
        assert abs(res["final_equity"] - res["equity_curve"][-1]) < 0.01
        assert abs(res["total_pnl"] - (res["final_equity"] - 2_000_000)) < 0.01


def test_backtest_commission_rate_alias(client, monkeypatch):
    """旧前端传 commission_rate：必须被当作 fee_rate 消费（不静默丢弃）"""
    _patch_portal(monkeypatch)
    r = client.post("/api/strategies/multi_factor/backtest", json={
        "initial_capital": 1_000_000,
        "commission_rate": 0.0008,
    })
    assert r.status_code == 200, r.text
    assert (r.json().get("used_params") or {}).get("fee_rate") == 0.0008


def test_backtest_rejects_bad_capital(client, monkeypatch):
    """初始资金 0/负数 → 400（而不是跑出一条毫无意义的曲线）"""
    _patch_portal(monkeypatch)
    for bad in (0, -1000):
        r = client.post("/api/strategies/multi_factor/backtest", json={"initial_capital": bad})
        assert r.status_code == 400, "%s 应被拒绝, got %s" % (bad, r.status_code)


def test_backend_default_window_is_18_months():
    """默认窗口 30 → 18 个月（源码级；端点在不传日期时走这里）"""
    src = _read_be("api/v1/strategy_research.py")
    assert "_default_research_range(months=18)" in src, "回测默认窗口应为 18 个月"
    assert "_default_research_range(months=30)" not in src, "旧的 30 个月默认值应已移除"


# ─── 3. 前端两处入口 ─────────────────────────────

def test_research_backtest_defaults():
    """研究页回测子页：默认 100 万 / 18 个月 / 成本默认值 + 快捷档"""
    ws = _read("js/app-logic/workspace.js")
    assert "const backtestCapital = ref(1000000)" in ws, "默认初始资金应为 100 万"
    assert "const backtestMonths = ref(18)" in ws
    assert "_btRangeOfMonths(18)" in ws, "默认区间应为最近 18 个月（不是空）"
    assert "setBacktestMonths" in ws, "应有区间快捷档 setter"
    assert "fee_rate: BT_FEE_RATE" in ws and "slippage: BT_SLIPPAGE" in ws, \
        "成本三件套应随请求下发（否则后端只能用自己的默认值，界面填了也没用）"


def test_research_backtest_ui_quick_ranges():
    """研究页模板：快捷档按钮 + 金额卡 + 参数回显"""
    v = _read("js/components/research/view-part2.js")
    assert "qc-bt-quick" in v, "应有区间快捷档容器"
    assert "[6, 12, 18, 36]" in v, "快捷档应含 6/12/18/36 个月"
    assert "setBacktestMonths(m)" in v
    assert "期末权益" in v and "总盈亏" in v, "金额口径结果卡（赚了多少钱比百分比直观）"
    assert "used_range" in v, "应回显本次实际使用的区间与资金"


def test_workbench_backtest_defaults():
    """策略管理 → 回测工作台：默认 18 个月 / 100 万 / 滑点可见 + 快捷档"""
    bt = _read("js/backtest.js")
    assert "BT_DEFAULT_MONTHS = 18" in bt
    assert "const btCapital = ref(1000000)" in bt
    assert "const btSlippage = ref(0.001)" in bt, "滑点必须在界面上可见（否则无法解释回测与实盘差异）"
    assert "slippage: Number(btSlippage.value)" in bt, "滑点应随请求下发"
    assert "function setBtQuickRange(months)" in bt
    v = _read("js/components/strategies/view-part2.js")
    assert "setBtQuickRange" in v and "[6, 12, 18, 36]" in v, "工作台模板应有快捷档"
    assert "bt-form-hint" in v, "单位/默认值提示（万三 / 千一 / 100 万）"
