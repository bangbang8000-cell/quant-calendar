#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略 SDK 核心单元测试 (FR: 策略研究 P0)
覆盖: ParamSpec→schema 生成 / 数据层注入 / 信号前视语义 / 注册表 / PTrade 代码生成与校验
"""
import sys, os, json
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
import pytest


# ---------- 1. ParamSpec → JSON schema ----------

def test_param_spec_to_schema_int():
    from strategy_sdk.base import ParamSpec
    ps = ParamSpec(key="top_n", label="选股数", type="int", default=20,
                   min=5, max=100, step=5)
    s = ps.to_schema()
    assert s["key"] == "top_n"
    assert s["label"] == "选股数"
    assert s["type"] == "int"
    assert s["default"] == 20
    assert s["min"] == 5 and s["max"] == 100 and s["step"] == 5


def test_param_spec_to_schema_enum():
    from strategy_sdk.base import ParamSpec
    ps = ParamSpec(key="benchmark", label="基准", type="enum",
                   default="000300.SH", options=["000300.SH", "000905.SH"])
    s = ps.to_schema()
    assert s["type"] == "enum"
    assert "000905.SH" in s["options"]


def test_param_spec_rejects_unknown_type():
    from strategy_sdk.base import ParamSpec
    with pytest.raises(ValueError):
        ParamSpec(key="x", label="x", type="blob", default=None)


def test_strategy_params_schema_endpoint_shape():
    """schema 必须可被前端表单渲染器消费(零构建约束的关键契约)"""
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    st = MultiFactorStrategy()
    schema = st.params_schema()
    assert isinstance(schema, list)
    assert all({"key", "label", "type", "default"} <= set(f.keys()) for f in schema)


# ---------- 2. 数据访问层注入 ----------

def test_data_portal_contract():
    """因子代码只依赖 DataPortal 接口, 不 import 具体数据源"""
    from strategy_sdk.base import DataPortal
    import inspect
    methods = [m for m in dir(DataPortal) if not m.startswith("_")]
    assert "get_panel" in methods


# ---------- 3. 信号前视语义 (防前视偏差) ----------

def test_generate_signals_returns_holdings_matrix():
    """持仓矩阵: index=日期, columns=股票代码, 值=目标权重"""
    from strategy_sdk.base import StrategyContext
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    from strategy_sdk.testsupport import FakePortal

    portal = FakePortal(dates=["2026-01-05", "2026-01-06", "2026-01-07"],
                        symbols=["600000.SH", "000001.SZ"])
    ctx = StrategyContext(portal=portal, params={"top_n": 2}, as_of="2026-01-07")
    st = MultiFactorStrategy()
    holdings = st.generate_signals(ctx)
    assert list(holdings.index) == ["2026-01-05", "2026-01-06", "2026-01-07"]
    assert "600000.SH" in holdings.columns


def test_signal_uses_shifted_data():
    """信号只用 t 日及之前数据计算(不得用未来数据) —— 由 FakePortal 记录请求日期窗口"""
    from strategy_sdk.base import StrategyContext
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    from strategy_sdk.testsupport import FakePortal

    portal = FakePortal(dates=["2026-01-05", "2026-01-06", "2026-01-07"],
                        symbols=["600000.SH"])
    ctx = StrategyContext(portal=portal, params={}, as_of="2026-01-07")
    MultiFactorStrategy().generate_signals(ctx)
    # get_panel 请求的 end 不得晚于 as_of
    for req in portal.requests:
        assert req["end"] <= ctx.as_of


# ---------- 4. 注册表 ----------

def test_registry_register_and_list():
    """注册表内置 4 策略; 注册新策略后列表增加"""
    from strategy_sdk.registry import StrategyRegistry
    from strategy_sdk.base import BaseStrategy
    from strategy_sdk.base import StrategyContext
    import pandas as pd

    class ExtraStrategy(BaseStrategy):
        id = "extra_test"
        name = "测试策略"
        version = "0.1.0"

        def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
            return pd.DataFrame()

    reg = StrategyRegistry()
    before = len(reg.list())
    reg.register(ExtraStrategy())
    lst = reg.list()
    assert len(lst) == before + 1
    ids = [s["id"] for s in lst]
    assert "extra_test" in ids
    assert "multi_factor" in ids


def test_registry_get_unknown_raises():
    from strategy_sdk.registry import StrategyRegistry
    from strategy_sdk.registry import StrategyNotFoundError
    reg = StrategyRegistry()
    with pytest.raises(StrategyNotFoundError):
        reg.get("nope")


def test_registry_builtin_four_strategies():
    """完全体约束: 至少 4 个内置策略"""
    from strategy_sdk.registry import StrategyRegistry
    reg = StrategyRegistry()
    ids = [s["id"] for s in reg.list()]
    for want in ("multi_factor", "sector_rotation", "index_enhance", "capital_flow"):
        assert want in ids, f"缺少内置策略 {want}"


# ---------- 5. PTrade 代码生成与静态校验 ----------

def test_to_ptrade_code_contains_lifecycle():
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    code = MultiFactorStrategy().to_ptrade_code({"top_n": 20, "benchmark": "000300.SH"})
    assert "def initialize(context):" in code
    assert "def handle_data(context, data):" in code
    assert "set_universe" in code
    assert "order_target_value" in code


def test_ptrade_code_ast_parses():
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    import ast
    code = MultiFactorStrategy().to_ptrade_code({"top_n": 20})
    ast.parse(code)  # 语法必须合法


def test_ptrade_code_format_conversion():
    """qresult 的 .SH/.SZ 必须转为 PTrade 的 .SS/.SZ"""
    from strategy_sdk.ptrade import convert_code_format
    assert convert_code_format("600000.SH") == "600000.SS"
    assert convert_code_format("000001.SZ") == "000001.SZ"
    assert convert_code_format("300750.SZ") == "300750.SZ"


def test_ptrade_validator_rejects_bad_import():
    from strategy_sdk.ptrade import validate_ptrade_code
    bad = "import os\nimport requests\ndef initialize(context):\n    pass\n"
    errors = validate_ptrade_code(bad)
    assert any("import" in e.lower() for e in errors)
