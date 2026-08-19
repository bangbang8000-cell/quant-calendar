# -*- coding: utf-8 -*-
"""
v3.21 (P0-6): 策略纳管中心测试
覆盖: governance 状态存取 + run-once 生成持仓文件(qresult矩阵)
"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope="module")
def admin_client():
    """注入 admin token 的测试客户端"""
    from main_new import app
    from auth import create_access_token
    token = create_access_token({"sub": "admin", "role": "admin"})
    client = TestClient(app)
    client.headers.update({"Authorization": "Bearer " + token})
    return client


def test_governance_get_put_defaults(admin_client):
    """GET governance 返回 4 策略默认状态; PUT 更新 enabled/schedule"""
    r = admin_client.get("/api/strategies/governance")
    assert r.status_code == 200, r.text
    data = (r.json().get("data") or {}).get("strategies") or {}
    assert "multi_factor" in data and "capital_flow" in data
    # PUT 更新
    r = admin_client.put("/api/strategies/governance",
                         json={"strategies": {"multi_factor": {"enabled": True, "schedule": "20:00"}}})
    assert r.status_code == 200, r.text
    r = admin_client.get("/api/strategies/governance")
    data = (r.json().get("data") or {}).get("strategies") or {}
    assert data.get("multi_factor", {}).get("enabled") is True
    assert data.get("multi_factor", {}).get("schedule") == "20:00"


def test_run_once_generates_holdings_file(admin_client, tmp_path):
    """run-once 生成持仓文件 (qresult 矩阵: 行=日期/列=代码/值=1)"""
    # 用 FakePortal 注入确定性数据 (无网络依赖)
    from strategy_sdk.testsupport import FakePortal
    fake = FakePortal(dates=["2026-07-01", "2026-07-02", "2026-07-03"],
                      symbols=["600000.SH", "600004.SH"], seed=1)
    # patch 门户工厂路径: run-once 内部走 _resolve_portal, 这里直接调用 governance 函数
    import strategy_governance as gov
    sid = "sector_rotation"
    # 显式调用内部 run 函数(绕过真实数据源)
    holdings, universe = gov._generate_holdings(sid, portal=fake)
    assert holdings is not None and len(holdings) > 0
    # 写持仓文件
    out_dir = str(tmp_path / "holdings" / "2026-07-03")
    os.makedirs(out_dir, exist_ok=True)
    path = gov._write_holdings_matrix(holdings, sid, out_dir)
    assert path and os.path.exists(path)
    import csv
    rows = list(csv.reader(open(path)))
    # 表头: 空+BOM + 股票列
    assert len(rows) >= 2, "应有表头+至少1数据行"
    header = rows[0]
    assert any("600000.SH" in c for c in header), header[:5]
    # 值=1(持有)
    data_vals = [v for v in rows[1][1:] if v.strip()]
    assert data_vals, "持仓矩阵应有非空值"
    assert all(v == "1" for v in data_vals), data_vals[:5]


def test_generate_holdings_all_mode_uses_full_universe(admin_client, monkeypatch, tmp_path):
    """v3.21 (遗留1): universe_mode=all 用全量清单 + 并发取数"""
    import strategy_governance as gov
    import sys as _sys
    import types as _types
    from strategy_sdk.testsupport import FakePortal
    class _SM:
        stock_map = {"600000.SH": {}, "600004.SH": {}, "600519.SH": {},
                     "601318.SH": {}, "600036.SH": {}, "601166.SH": {}}
    _sys.modules["stock_info"] = _types.SimpleNamespace(stock_manager=_SM())
    fake = FakePortal(dates=["2026-07-01", "2026-07-02"],
                      symbols=["600000.SH", "600004.SH", "600519.SH",
                               "601318.SH", "600036.SH", "601166.SH"])
    holdings, universe = gov._generate_holdings("sector_rotation", portal=fake,
                                                universe_mode="all")
    assert universe, "全池模式应取全量清单"
    assert len(universe) >= 6
    assert any(r.get("max_workers", 1) > 1 for r in fake.requests), fake.requests


def test_list_holdings_falls_back_to_reference(admin_client, tmp_path, monkeypatch):
    """v3.21 (遗留3): 无本地持仓时回退 reference_holdings 参考样例"""
    import strategy_governance as gov
    import os as _os
    # 指向空 holdings 目录
    empty = tmp_path / "holdings"
    _os.makedirs(empty, exist_ok=True)
    monkeypatch.setattr(gov, "HOLDINGS_ROOT", str(empty))
    # 指向真实仓库的 reference_holdings (随发布入库)
    repo_docs = _os.path.join(
        _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))),
        "docs", "reference_holdings")
    if not _os.path.isdir(repo_docs):
        _os.makedirs(repo_docs, exist_ok=True)
        with open(_os.path.join(repo_docs, "行业轮动策略持仓-预览.csv"),
                  "w", encoding="utf-8-sig") as f:
            f.write("\ufeff,600000.SH\n20260701,1\n")
    files = gov.list_holdings("行业轮动")
    assert files, "应回退到参考样例"
    assert files[0]["file"].endswith("-预览.csv"), files[0]


def test_list_holdings_english_sid_matches_display_name(admin_client, tmp_path, monkeypatch):
    """v3.21 (遗留3): 英文 sid(multi_factor) 通过 display_name 匹配中文文件名"""
    import strategy_governance as gov
    import os as _os
    # 构造本地持仓目录(中文文件名)
    local = tmp_path / "holdings" / "2026-08-01"
    _os.makedirs(local, exist_ok=True)
    with open(local / "多因子策略持仓.csv", "w", encoding="utf-8-sig") as f:
        f.write("\ufeff,600000.SH\n20260801,1\n")
    monkeypatch.setattr(gov, "HOLDINGS_ROOT", str(tmp_path / "holdings"))
    files = gov.list_holdings("multi_factor")
    assert files, "英文 sid 应匹配中文文件名"
    assert "多因子策略持仓.csv" in files[0]["file"], files[0]
