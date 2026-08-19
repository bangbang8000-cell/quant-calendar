#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略组合构建 + 回测端点测试 (FR: 策略研究 P0 补齐)
覆盖: PortfolioBuilder 抽象 / TopN / 行业轮动 / 指数增强 / backtest 端点真实返回
"""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
import pytest
import pandas as pd
from fastapi.testclient import TestClient


# ---------- PortfolioBuilder ----------

def _scores():
    """打分矩阵: index=日期, columns=股票, 值=因子分"""
    return pd.DataFrame({
        "600000.SH": [3.0, 2.5, 1.0],
        "000001.SZ": [1.0, 1.5, 2.0],
        "300750.SZ": [2.0, 3.0, 3.0],
        "600519.SH": [0.5, 0.5, 0.8],
    }, index=["2026-01-05", "2026-01-06", "2026-01-07"])


def test_topn_equal_weight_build():
    from strategy_sdk.portfolio import TopNEqualWeight
    builder = TopNEqualWeight(top_n=2)
    holdings = builder.build(_scores(), None)
    assert holdings.shape == (3, 4)
    # 每行恰好 2 只持仓, 等权 0.5
    row0 = holdings.iloc[0]
    assert (row0 > 0).sum() == 2
    assert abs(row0[row0 > 0].sum() - 1.0) < 1e-9


def test_topn_respects_missing_values():
    """NaN 打分不参与选股"""
    from strategy_sdk.portfolio import TopNEqualWeight
    s = _scores().copy()
    s.iloc[0, 0] = float("nan")
    holdings = TopNEqualWeight(top_n=2).build(s, None)
    row0 = holdings.iloc[0]
    assert row0["600000.SH"] == 0.0  # NaN 不被选中


def test_sector_rotation_two_layer():
    """行业层选 K 个行业 → 行业内选 top 股票"""
    from strategy_sdk.portfolio import SectorTopKThenScore
    scores = _scores()
    industry = {"600000.SH": "银行", "000001.SZ": "银行",
                "300750.SZ": "电力设备", "600519.SH": "白酒"}
    builder = SectorTopKThenScore(sector_k=2, stock_per_sector=1, industry_map=industry)
    holdings = builder.build(scores, None)
    row0 = holdings.iloc[0]
    # 银行和电力设备两个行业各 1 只
    picked = [c for c in row0.index if row0[c] > 0]
    assert len(picked) == 2
    assert "600000.SH" in picked      # 银行内分数最高
    assert "300750.SZ" in picked      # 电力设备内分数最高


def test_index_enhance_constrains_universe():
    """指数增强: 只在基准成分内选股"""
    from strategy_sdk.portfolio import IndexEnhanced
    scores = _scores()
    bench = {"600000.SH", "600519.SH"}   # 基准成分
    builder = IndexEnhanced(benchmark_universe=bench, top_n=2)
    holdings = builder.build(scores, None)
    row0 = holdings.iloc[0]
    picked = [c for c in row0.index if row0[c] > 0]
    assert all(c in bench for c in picked), f"成分外选股: {picked}"



@pytest.fixture(scope="module")
def authed_client():
    """注入 admin token 的测试客户端"""
    from main_new import app
    from auth import create_access_token
    token = create_access_token({"sub": "admin", "role": "admin"})
    client = TestClient(app)
    client.headers.update({"Authorization": f"Bearer {token}"})
    return client

# ---------- backtest 端点 ----------

def test_api_backtest_returns_result_shape(authed_client):
    """backtest 端点返回绩效结果而非占位"""
    client = authed_client
    r = client.post("/api/strategies/multi_factor/backtest", json={
        "params": {"top_n": 10},
        "start_date": "2026-01-01", "end_date": "2026-01-31",
    })
    assert r.status_code == 200
    data = r.json()
    assert "strategy_id" in data
    assert data["result"] is not None  # 不再是占位
    assert "total_return" in data["result"] or "message" in data["result"]
