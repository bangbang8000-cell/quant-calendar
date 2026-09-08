#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略 SDK 核心单元测试 (FR: 策略研究 P0)
覆盖: ParamSpec→schema 生成 / 数据层注入 / 信号前视语义 / 注册表 / PTrade 代码生成与校验
"""
import os
import sys
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


# ---------- v3.23: 三大策略真实选股逻辑(替代空骨架, 修复回测"持仓矩阵为空") ----------

def _assert_holdings_nonempty(strategy_cls):
    """通用断言: generate_signals 返回非空持仓矩阵(修复回测失败)"""
    from strategy_sdk.base import StrategyContext
    from strategy_sdk.testsupport import FakePortal

    portal = FakePortal(dates=["2026-01-05", "2026-01-06", "2026-01-07"],
                        symbols=["600000.SH", "600004.SH", "600519.SH", "601318.SH"])
    ctx = StrategyContext(portal=portal, params={}, as_of="2026-01-07")
    holdings = strategy_cls().generate_signals(ctx)
    assert holdings is not None and not holdings.empty,         f"{strategy_cls.id} 持仓矩阵为空(回测失败)"
    assert holdings.shape[0] == 3  # 三个日期都有持仓
    assert len(holdings.columns) == 4
    # 首日必须有持仓(修复"持仓矩阵为空")
    assert (holdings.iloc[0] > 0).any(), f"{strategy_cls.id} 首日无持仓"


def test_sector_rotation_generate_signals_nonempty():
    """行业轮动: 真实行业动量选股 → 非空持仓矩阵"""
    from strategy_sdk.builtin.sector_rotation import SectorRotationStrategy
    _assert_holdings_nonempty(SectorRotationStrategy)


def test_capital_flow_generate_signals_nonempty():
    """资金流: 主力净流入选股 → 非空持仓矩阵(阈值设0验证资金流路径)"""
    from strategy_sdk.base import StrategyContext
    from strategy_sdk.builtin.capital_flow import CapitalFlowStrategy
    from strategy_sdk.testsupport import FakePortal

    portal = FakePortal(dates=["2026-01-05", "2026-01-06", "2026-01-07"],
                        symbols=["600000.SH", "600004.SH", "600519.SH", "601318.SH"])
    # 净流入阈值=0: FakePortal 随机 1~100 全通过 → 验证资金流选股路径非空
    ctx = StrategyContext(portal=portal, params={"inflow_threshold": 0}, as_of="2026-01-07")
    holdings = CapitalFlowStrategy().generate_signals(ctx)
    assert holdings is not None and not holdings.empty, "资金流策略持仓矩阵为空"
    assert holdings.shape[0] == 3
    assert (holdings.iloc[0] > 0).any(), "资金流策略首日无持仓"


def test_index_enhance_generate_signals_nonempty():
    """指数增强: 双因子+行业中性 → 非空持仓矩阵"""
    from strategy_sdk.builtin.index_enhance import IndexEnhanceStrategy
    _assert_holdings_nonempty(IndexEnhanceStrategy)


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


def test_ptrade_code_benchmark_format_converted():
    """PTrade 硬约束: 研究端 .SH/.SZ 必须转为 .SS/.SZ"""
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    code = MultiFactorStrategy().to_ptrade_code(
        {"top_n": 20, "benchmark": "000300.SH"})
    assert "000300.SS" in code
    assert "000300.SH" not in code


def test_ptrade_validator_rejects_bad_import():
    from strategy_sdk.ptrade import validate_ptrade_code
    bad = "import os\nimport requests\ndef initialize(context):\n    pass\n"
    errors = validate_ptrade_code(bad)
    assert any("import" in e.lower() for e in errors)

# ---------- P2: PT 策略生成三要素(选股/择时/风控) ----------

def test_param_specs_include_universe_timing_risk():
    """参数体系必须含: 选股范围(自定义/指数)、择时开关+均线周期、止盈止损、回撤止损"""
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    keys = {p.key for p in MultiFactorStrategy.param_specs}
    assert 'universe_source' in keys      # 选股范围来源: 自定义列表 / 指数成分
    assert 'universe_codes' in keys       # 自定义股票池
    assert 'index_code' in keys           # 指数成分基准
    assert 'timing_enabled' in keys       # 择时开关
    assert 'timing_ma_window' in keys     # 择时均线周期
    assert 'timing_index' in keys         # 择时基准指数
    assert 'stop_loss_pct' in keys        # 单票止损
    assert 'take_profit_pct' in keys      # 单票止盈
    assert 'max_drawdown_pct' in keys     # 账户最大回撤止损


def test_ptrade_code_contains_timing_risk_universe_functions():
    """PTrade 生成代码必须含: 市场择时、止盈止损风控、指数成分选股函数"""
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    code = MultiFactorStrategy().to_ptrade_code({
        'top_n': 20, 'benchmark': '000300.SH',
        'universe_source': 'index', 'index_code': '000300.SH',
        'timing_enabled': True, 'timing_ma_window': 20,
        'stop_loss_pct': 0.08, 'take_profit_pct': 0.15,
        'max_drawdown_pct': 0.20,
    })
    # 择时: 市场状态判断(指数收盘 vs 均线)
    assert 'market_timing' in code
    assert 'timing_ma_window' in code
    # 风控: 止盈止损函数 + 参数
    assert 'risk_controls' in code
    assert 'stop_loss_pct' in code
    assert 'take_profit_pct' in code
    assert 'max_drawdown_pct' in code
    # 选股: 指数成分取数
    assert 'get_index_stocks' in code
    # 代码仍可 AST 解析
    import ast
    ast.parse(code)


def test_ptrade_code_universe_custom_codes():
    """自定义股票池参数必须出现在生成代码中"""
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    code = MultiFactorStrategy().to_ptrade_code({
        'top_n': 10,
        'universe_source': 'universe',
        'universe_codes': '600000.SH,600519.SH,000001.SZ',
    })
    # .SH 转 .SS, 自定义池出现在代码中
    assert '600000.SS' in code
    assert '600519.SS' in code
    assert '000001.SZ' in code


def test_schema_exposes_timing_risk_defaults():
    """参数声明默认值必须合理: 止盈止损/回撤/择时均线/选股范围"""
    from strategy_sdk.builtin.multi_factor import MultiFactorStrategy
    p = {f.key: f for f in MultiFactorStrategy.param_specs}
    assert p['stop_loss_pct'].default == 0.08
    assert p['take_profit_pct'].default == 0.15
    assert p['max_drawdown_pct'].default == 0.20
    assert p['timing_ma_window'].default == 20
    assert p['universe_source'].default == 'universe'
