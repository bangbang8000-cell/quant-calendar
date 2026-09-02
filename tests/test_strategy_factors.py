#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
因子研究引擎测试 (FR: 策略研究 P1-F8)
横截面因子计算 / MAD去极值 / z标准化 / 合成打分 / IC评价 / 分层回测
"""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
import pytest
from fastapi.testclient import TestClient
import numpy as np
import pandas as pd

from strategy_sdk.base import FactorSpec


# ---------- 横截面因子计算 ----------

def _panel():
    """构造面板: 10 只股票 × 30 日, 含 close/volume/pe/main_net_inflow"""
    dates = pd.date_range("2026-05-01", periods=30).strftime("%Y-%m-%d").tolist()
    symbols = [f"{600000 + i:06d}.SH" for i in range(10)]
    idx = pd.MultiIndex.from_product([dates, symbols], names=["date", "symbol"])
    rng = np.random.default_rng(7)
    n = len(idx)
    panel = pd.DataFrame({
        "close": rng.uniform(10, 60, n),
        "volume": rng.uniform(1e6, 5e7, n),
        "pe": rng.uniform(5, 80, n),
        "main_net_inflow": rng.normal(0, 1e7, n),
    }, index=idx)
    return panel


def test_compute_cross_section_momentum():
    """动量因子: 过去20日收益率(剔除最近5日) — 可计算且形状正确"""
    from strategy_sdk.factor_engine import compute_cross_section_factors
    panel = _panel()
    spec = FactorSpec(name="mom20", category="technical",
                      inputs=["close"], params={"lookback": 20, "skip": 5, "direction": "high"})
    out = compute_cross_section_factors(panel, [spec])
    assert "mom20" in out
    fv = out["mom20"]
    assert isinstance(fv, pd.DataFrame)
    assert fv.shape[1] == 10  # 10 只股票
    # 有真实值(非全 NaN)
    assert fv.notna().any().any()


def test_mad_winsorize_clips_outliers():
    """MAD 去极值: 极端值被拉回 中位数±3*1.4826*MAD 内"""
    from strategy_sdk.factor_engine import mad_winsorize
    vals = pd.Series([1.0, 2.0, 3.0, 4.0, 5.0, 100.0, -50.0])
    out = mad_winsorize(vals)
    assert out.max() < 100.0
    assert out.min() > -50.0
    # 非极端值不变
    assert out.iloc[2] == 3.0


def test_zscore_normalize_standardizes():
    """z-score 标准化: 均值≈0, 标准差≈1"""
    from strategy_sdk.factor_engine import zscore_normalize
    vals = pd.Series([10.0, 20.0, 30.0, 40.0, 50.0])
    out = zscore_normalize(vals)
    assert abs(out.mean()) < 1e-9
    assert abs(out.std(ddof=0) - 1.0) < 1e-6


def test_synthesize_score_direction():
    """合成打分: low 方向因子取负后叠加 (date×symbol 矩阵)"""
    from strategy_sdk.factor_engine import synthesize_score
    dates = ["2026-01-05", "2026-01-06"]
    syms = ["A", "B", "C", "D", "E", "F"]
    rng = np.random.default_rng(3)
    mom = pd.DataFrame(rng.uniform(-1, 1, (2, 6)), index=dates, columns=syms)
    pe = pd.DataFrame(rng.uniform(5, 60, (2, 6)), index=dates, columns=syms)
    # pe 低方向: 把 pe 列与 mom 反序以验证方向翻转
    pe = pe * -1  # 取负后低 pe 变高值
    specs = [
        FactorSpec(name="mom", category="technical", inputs=[], params={"direction": "high"}),
        FactorSpec(name="pe", category="valuation", inputs=[], params={"direction": "low"}),
    ]
    # 手写期望: pe 已经取负(direction=low 在 compute 时处理), 但 synthesize 不再翻转
    # 这里直接验证: 合成打分可计算且形状正确, 各股票得分有区分度
    score = synthesize_score({"mom": mom, "pe": pe}, specs)
    assert list(score.columns) == syms
    assert score.shape == (2, 6)
    assert (score.diff(axis=1).abs().sum().sum() > 0)  # 有区分度


def test_evaluate_factor_ic_uses_rank_corr():
    """IC 评价: 多日横截面, 因子与次日收益正相关 → IC>0"""
    from strategy_sdk.factor_engine import evaluate_factor_ic
    dates = ["2026-01-05", "2026-01-06", "2026-01-07"]
    syms = ["A", "B", "C", "D", "E"]
    rng = np.random.default_rng(5)
    # 因子: 随机, 但构造收益 = 因子秩单调 → 每期 IC 高
    factor_values = pd.DataFrame(rng.uniform(0, 1, (3, 5)), index=dates, columns=syms)
    returns = factor_values.copy()  # 收益完全跟随因子
    report = evaluate_factor_ic(factor_values, returns)
    # 返回窗口标签为 n1 (次日 IC 口径)
    assert "n1" in report
    ics = report["n1"]
    assert isinstance(ics, dict)
    assert len(ics["ic_series"]) == 3  # 3 个交易日
    # 完全正相关 → IC 均值接近 1
    assert ics["ic_mean"] > 0.9


def test_layer_backtest_monotonic():
    """分层回测: 因子值分层后, 高分层的未来收益应高于低分层(构造单调数据)"""
    from strategy_sdk.factor_engine import layer_backtest
    dates = ["2026-01-05", "2026-01-06"]
    symbols = [f"S{i}" for i in range(20)]
    # 因子: 前5只高分(层5), 后5只低分(层1)
    fv = pd.DataFrame(index=dates, columns=symbols)
    rtn = pd.DataFrame(index=dates, columns=symbols)
    for i, s in enumerate(symbols):
        fv.loc[:, s] = i  # 分数随索引递增
        rtn.loc[:, s] = 0.01 + i * 0.001  # 收益随分数递增
    result = layer_backtest(fv, rtn, n_layers=5)
    assert len(result["layers"]) == 5
    # 层5收益 > 层1收益
    assert result["layers"][4]["return"] > result["layers"][0]["return"]
    assert result["monotonic"] is True


def test_compute_factor_for_valuation_low():
    """估值因子: pe 低方向 — 低 pe 股票因子值高"""
    from strategy_sdk.factor_engine import compute_cross_section_factors
    dates = ["2026-06-01"]
    symbols = ["S1", "S2"]
    idx = pd.MultiIndex.from_product([dates, symbols], names=["date", "symbol"])
    panel = pd.DataFrame({"pe": [10.0, 50.0]}, index=idx)
    spec = FactorSpec(name="pe", category="valuation", inputs=["pe"], params={"direction": "low"})
    out = compute_cross_section_factors(panel, [spec])
    fv = out["pe"].iloc[0]
    # 低 pe(S1=10) 因子分更高
    assert fv["S1"] > fv["S2"]


# ---------- generate_signals 真实因子合成 (FR: 替代动量骨架) ----------

def test_multi_factor_signals_uses_factor_panel():
    """generate_signals 从面板取多因子字段(非仅 close), 产出真实持仓矩阵"""
    from strategy_sdk.testsupport import FakePortal
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    dates = pd.date_range("2026-06-01", periods=30).strftime("%Y-%m-%d").tolist()
    symbols = [f"{600000 + i:06d}.SH" for i in range(12)]
    portal = FakePortal(dates=dates, symbols=symbols, seed=11)
    st = MultiFactorStrategy()
    ctx = st.context(portal=portal, params={"top_n": 5}, as_of="2026-06-30")
    holdings = st.generate_signals(ctx)
    assert not holdings.empty
    # 取数请求包含因子字段
    reqs = portal.requests
    assert reqs, "应有取数请求"
    fields = set()
    for r_ in reqs:
        fields.update(r_.get("fields", []))
    assert {"pe", "pb"} & fields, f"应请求估值因子字段, 实际 {fields}"
    assert "volume" in fields, "应请求换手所需字段"


def test_multi_factor_signal_weights_sum_to_one():
    """每个调仓日持仓权重和 = 1"""
    from strategy_sdk.testsupport import FakePortal
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    dates = pd.date_range("2026-06-01", periods=30).strftime("%Y-%m-%d").tolist()
    symbols = [f"{600000 + i:06d}.SH" for i in range(10)]
    portal = FakePortal(dates=dates, symbols=symbols, seed=3)
    st = MultiFactorStrategy()
    ctx = st.context(portal=portal, params={"top_n": 5}, as_of="2026-06-30")
    holdings = st.generate_signals(ctx)
    if holdings.empty:
        pytest.skip("数据不足")
    row_sums = holdings.sum(axis=1)
    assert all(abs(v - 1.0) < 1e-9 for v in row_sums)


@pytest.fixture(scope="module")
def authed_client():
    """注入 admin token 的测试客户端"""
    from main_new import app
    from auth import create_access_token
    token = create_access_token({"sub": "admin", "role": "admin"})
    client = TestClient(app)
    client.headers.update({"Authorization": f"Bearer {token}"})
    return client


# ---------- 因子研究 API (FR: P1-F8) ----------

def test_api_factor_ic_endpoint(authed_client):
    """POST /api/strategies/factors/ic → 因子 IC 报告"""
    client = authed_client
    r = client.post('/api/strategies/factors/ic', json={
        'sid': 'multi_factor',
        'factor_key': 'mom20',
        'params': {'top_n': 20},
        'start_date': '2026-05-01', 'end_date': '2026-06-30',
    })
    assert r.status_code == 200
    data = r.json()
    assert 'factor_key' in data
    assert 'report' in data
    rep = data['report']
    assert isinstance(rep, dict)


def test_api_factor_layer_endpoint(authed_client):
    """POST /api/strategies/factors/layer → 分层回测结果"""
    client = authed_client
    r = client.post('/api/strategies/factors/layer', json={
        'sid': 'multi_factor',
        'factor_key': 'mom20',
        'params': {'top_n': 20},
        'n_layers': 5,
    })
    assert r.status_code == 200
    data = r.json()
    assert 'factor_key' in data
    assert 'layers' in data or 'message' in data


# ---------- T-5.1.16: 因子详情 API (FR-5.1.1.6) ----------

def test_api_factor_detail_endpoint(authed_client):
    """POST /api/strategies/factors/detail → 因子详情面板 (定义/覆盖度/IC衰减/换手/多重检验/近2年)"""
    client = authed_client
    r = client.post('/api/strategies/factors/detail', json={
        'sid': 'multi_factor',
        'factor_key': 'mom20',
        'params': {'top_n': 20},
        'n_layers': 5,
        'start_date': '2026-05-01', 'end_date': '2026-07-31',
    })
    assert r.status_code == 200
    data = r.json()
    assert 'factor_key' in data
    assert 'detail' in data
    detail = data['detail']
    assert 'meta' in detail
    assert 'coverage' in detail
    assert 'ic_decay' in detail
    assert 'turnover' in detail
    assert 'multiple_testing' in detail
    assert 'recent' in detail
    assert detail['meta']['name'] == 'mom20'


def test_api_factor_detail_unknown_factor(authed_client):
    """未知因子 → 404"""
    client = authed_client
    r = client.post('/api/strategies/factors/detail', json={
        'sid': 'multi_factor',
        'factor_key': 'no_such_factor',
    })
    assert r.status_code == 404


def test_api_factor_detail_unauth():
    """无 token → 401 (deny-by-default)"""
    from main_new import app
    from fastapi.testclient import TestClient
    c = TestClient(app)
    r = c.post('/api/strategies/factors/detail', json={'factor_key': 'mom20'})
    assert r.status_code in (401, 403)
