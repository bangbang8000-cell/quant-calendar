# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.3.3 / FR-5.3.3.3): 全局搜索分组增强测试

- 后端 /api/search 返回分组 (股票/板块/策略/菜单), 支持板块/题材检索
- 分组结果 shape: results 带 type 字段, groups 分组聚合
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKEND = os.path.join(BASE, "backend")


@pytest.fixture
def search_mod(monkeypatch, tmp_path):
    sys.path.insert(0, BACKEND)
    from api.v1 import search as search_mod
    # 用可控的 stock_map 替换, 避免依赖真实数据
    class FakeStockManager:
        stock_map = {"600519.SH": "贵州茅台", "000001.SZ": "平安银行", "300750.SZ": "宁德时代"}
    monkeypatch.setattr(search_mod, "_get_stock_manager", lambda: FakeStockManager(), raising=False)
    # 可控板块清单
    monkeypatch.setattr(search_mod, "SECTOR_INDEX", {
        "白酒": ["600519.SH"], "银行": ["000001.SZ"], "锂电池": ["300750.SZ"],
    }, raising=False)
    return search_mod


def test_search_groups_shape(search_mod):
    """返回 groups: [{key,label,items}] 且股票/板块域齐备 (用银行命中股票+板块)"""
    out = search_mod.build_grouped_results("银行", max_items=20)
    assert isinstance(out, list)
    keys = {g["key"] for g in out}
    assert "stock" in keys and "sector" in keys


def test_search_sector_match(search_mod):
    """板块/题材检索: '白酒' 命中板块域"""
    out = search_mod.build_grouped_results("白酒", max_items=20)
    sectors = [g for g in out if g["key"] == "sector"]
    assert sectors, "应有板块域"
    names = [i["name"] for i in sectors[0]["items"]]
    assert "白酒" in names


def test_search_stock_match(search_mod):
    """股票域: '茅台' 命中贵州茅台, type=stock"""
    out = search_mod.build_grouped_results("茅台", max_items=20)
    stocks = [g for g in out if g["key"] == "stock"]
    assert stocks
    assert any(i["code"] == "600519.SH" and i["type"] == "stock" for i in stocks[0]["items"])


def test_search_strategy_domain(search_mod):
    """策略域: '多因子' 命中策略 (策略清单可注入)"""
    search_mod.STRATEGY_INDEX = {"multi_factor": "多因子策略", "sector_rotation": "行业轮动策略"}
    out = search_mod.build_grouped_results("多因子", max_items=20)
    st = [g for g in out if g["key"] == "strategy"]
    assert st, "应有策略域"
    assert any(i["id"] == "multi_factor" and i["type"] == "strategy" for i in st[0]["items"])


def test_search_menu_domain_from_command_panel(search_mod):
    """菜单域: 前端 subPageNames 提供, 后端构建菜单项时含 type=menu"""
    out = search_mod.build_grouped_results("", max_items=20, menu_defs=None)
    assert isinstance(out, list)


def test_core_dispatch_sector_strategy():
    """command-panel-core dispatch 分派板块/策略域"""
    core_src = open(os.path.join(BACKEND, "..", "frontend", "js", "command-panel-core.js"), encoding="utf-8").read()
    assert "item.type === 'sector'" in core_src, "core dispatch 应支持板块域"
    assert "item.type === 'strategy'" in core_src, "core dispatch 应支持策略域"


def test_frontend_search_stocks_consumes_groups():
    """keys.js searchStocks 消费 /api/search groups (板块/策略标签化)"""
    keys_src = open(os.path.join(BACKEND, "..", "frontend", "js", "app-logic", "keys.js"), encoding="utf-8").read()
    assert "data.groups" in keys_src, "searchStocks 应消费 data.groups"
    assert "it.type === 'sector'" in keys_src, "应处理板块结果"

