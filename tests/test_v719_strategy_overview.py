#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (T3.2 / FR-8): 策略工作台列表 —— 聚合端点 + 首屏表格

PRD 需求 ⑧：「我希望策略都可以先罗列出来，然后再考虑在列表上操作」。
旧页面只有"选一个策略 → 点运行"的表单，用户看不到策略总览，也不知道该操作谁。
"""
import os
import re
import sys
import time

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


# ─── 端点 ────────────────────────────────────────

def test_overview_returns_strategy_rows(client):
    r = client.get("/api/strategies/overview")
    assert r.status_code == 200, r.text
    d = r.json()
    assert isinstance(d.get("items"), list) and d["items"], "应返回非空策略列表"
    assert d.get("count") == len(d["items"])
    assert d.get("generated_at"), "必须带生成时间（数据时效可核对）"

    need = {"id", "name", "id_cn", "enabled", "holdings_count", "run_count_30d",
            "last_run", "last_backtest", "return_basis"}
    for it in d["items"]:
        assert need <= set(it.keys()), "字段缺失: %s" % (need - set(it.keys()))
        assert it["name"] and it["id_cn"], "策略名/中文名不得为空（否则列表里全是英文 id）"


def test_overview_single_query_no_n_plus_1(client):
    """性能契约：运行历史只允许一次全量查询后分组，禁止逐策略查库"""
    # v7.19: 端点已拆到 strategy_overview.py（strategy_research.py 触 800 行硬上限）
    src = _read_be("api/v1/strategy_overview.py")
    seg = src[src.find("async def strategies_overview"):]
    seg = seg[:6000]
    assert seg.count("list_runs(") == 1, "运行历史应只查一次（N+1 会把首屏拖到秒级）"
    assert "for st in strategies" in seg, "应按策略循环组装（数据已在内存中分组）"
    # 循环体内不得再出现 list_runs / get_run
    loop = seg[seg.find("for st in strategies"):]
    assert "list_runs(" not in loop, "循环体内不得再次查库"


def test_overview_fast_enough(client):
    """首屏预算：单请求 ≤ 1.5s（本地 SQLite + 400 条运行历史）"""
    t0 = time.time()
    r = client.get("/api/strategies/overview")
    elapsed = time.time() - t0
    assert r.status_code == 200
    assert elapsed < 1.5, "overview 耗时 %.2fs 超预算" % elapsed


# ─── 前端 ────────────────────────────────────────

def test_board_component_shared_by_both_pages():
    """同一张表被「策略管理」与「策略回测」两页共用（两处各写一份必然漂移）"""
    comp = _read("js/components/research/strategy-board.js")
    assert "name: 'qc-strategy-board'" in comp
    for rel in ("js/components/research/view-part1.js", "js/components/research/view-part2.js"):
        assert "<qc-strategy-board" in _read(rel), rel + " 应插入策略工作台"
    assert "import './strategy-board.js'" in _read("js/components/research/lazy-entry.js")


def test_board_columns_and_sorting():
    """列齐全 + 未回测不当 0 参与排序"""
    comp = _read("js/components/research/strategy-board.js")
    for col in ("策略", "状态", "最近运行", "选股数", "年化", "回撤", "夏普", "操作"):
        assert col in comp, "缺少列: " + col
    logic = _read("js/components/research/logic-history.js")
    assert "av === null) return 1" in logic, "未回测的策略应排最后（不能当 0 收益率混进排序）"
    assert "overviewOnlyEnabled" in logic, "应支持「仅看已纳管」筛选"


def test_board_row_actions_prefill_backtest():
    """点行内「回测」必须同时选中回测下拉并重置默认 18 个月"""
    logic = _read("js/components/research/logic-history.js")
    seg = logic[logic.find("function goBacktestFor"):]
    seg = seg[:600]
    assert "state.backtestStrategy.value = sid" in seg, "必须选中回测策略（否则跑的不是点的那一个）"
    assert "state.setBacktestMonths(18)" in seg, "应重置为默认 18 个月区间"
