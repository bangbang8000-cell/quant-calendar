#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略 SDK 核心抽象 (FR: 策略研究 P0)
- ParamSpec: 参数声明, 驱动前端表单 + PTrade 模板填充(同源)
- DataPortal: 数据访问层协议, 研究端(三源)与 PTrade 端(get_history)双端注入
- BaseStrategy: 策略 = 声明 + 执行(generate_signals) + 导出(to_ptrade_code)
"""
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Protocol

import pandas as pd


# ---------- 参数声明 ----------

_ALLOWED_TYPES = {"int", "float", "str", "enum", "bool"}


@dataclass
class ParamSpec:
    """策略参数声明 —— 同一份声明驱动: 前端 schema 表单 + PTrade 模板变量填充"""
    key: str
    label: str
    type: str                       # int | float | str | enum | bool
    default: Any
    min: Optional[float] = None
    max: Optional[float] = None
    step: Optional[float] = None
    options: Optional[List[str]] = None      # enum 时使用
    ptrade_var: Optional[str] = None         # 对应 PTrade 模板中的变量名
    description: str = ""

    def __post_init__(self):
        if self.type not in _ALLOWED_TYPES:
            raise ValueError(f"ParamSpec 类型 {self.type!r} 不支持, 允许: {sorted(_ALLOWED_TYPES)}")

    def to_schema(self) -> Dict[str, Any]:
        """转为前端可渲染的 JSON schema (零构建表单契约)"""
        s: Dict[str, Any] = {
            "key": self.key,
            "label": self.label,
            "type": self.type,
            "default": self.default,
            "description": self.description,
        }
        if self.min is not None:
            s["min"] = self.min
        if self.max is not None:
            s["max"] = self.max
        if self.step is not None:
            s["step"] = self.step
        if self.options:
            s["options"] = self.options
        return s

    def validate(self, value: Any) -> Any:
        """校验并归一化参数值"""
        if self.type == "int":
            v = int(value)
            if self.min is not None and v < self.min:
                raise ValueError(f"{self.key} 不能小于 {self.min}")
            if self.max is not None and v > self.max:
                raise ValueError(f"{self.key} 不能大于 {self.max}")
            return v
        if self.type == "float":
            v = float(value)
            if self.min is not None and v < self.min:
                raise ValueError(f"{self.key} 不能小于 {self.min}")
            if self.max is not None and v > self.max:
                raise ValueError(f"{self.key} 不能大于 {self.max}")
            return v
        if self.type == "enum":
            if value not in (self.options or []):
                raise ValueError(f"{self.key} 必须是 {self.options} 之一")
            return value
        if self.type == "bool":
            if isinstance(value, str):
                return value.lower() in ("1", "true", "yes", "on")
            return bool(value)
        return str(value)


@dataclass
class FactorSpec:
    """因子声明"""
    name: str
    category: str                   # valuation | fundamental | capital | sentiment | technical
    inputs: List[str] = field(default_factory=list)
    params: Dict[str, Any] = field(default_factory=dict)


# ---------- 数据访问层协议 ----------

class DataPortal(Protocol):
    """数据访问层 —— 因子代码只依赖此协议, 不感知具体数据源。
    研究端: 三源 data_sources 实现; PTrade 端: get_history/get_fundamentals 实现。"""

    def get_panel(self, fields: List[str], start: str, end: str,
                  universe: Optional[List[str]] = None) -> pd.DataFrame:
        """返回 MultiIndex(date, symbol) 面板, 列含请求的 fields。
        契约: 只允许请求 end <= 当前评估日(防前视)。"""
        ...


class StrategyContext:
    """策略执行上下文: 数据门户 + 参数 + 评估日"""

    def __init__(self, portal: DataPortal, params: Dict[str, Any], as_of: str):
        self.portal = portal
        self.params = params
        self.as_of = as_of          # YYYY-MM-DD, 信号只可用 <= as_of 的数据

    def panel(self, fields: List[str], start: str, universe: Optional[List[str]] = None) -> pd.DataFrame:
        """取数(自动限制 end=as_of, 防前视)"""
        return self.portal.get_panel(fields, start, self.as_of, universe)


# ---------- 策略基类 ----------

class BaseStrategy(ABC):
    """策略基类: 声明 + 执行 + 导出"""

    id: str = ""
    name: str = ""
    version: str = "0.1.0"
    description: str = ""
    param_specs: List[ParamSpec] = []
    factor_specs: List[FactorSpec] = []
    ptrade_template: str = "multi_factor.py.j2"   # 模板文件名(按策略类型)

    # ---- 参数 ----

    def params_schema(self) -> List[Dict[str, Any]]:
        return [p.to_schema() for p in self.param_specs]

    def validate_params(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """校验并入默认值"""
        merged: Dict[str, Any] = {}
        for spec in self.param_specs:
            raw = params.get(spec.key, spec.default)
            merged[spec.key] = spec.validate(raw)
        return merged

    def context(self, portal: 'DataPortal', params: Dict[str, Any], as_of: str) -> StrategyContext:
        """便捷构造执行上下文(参数自动校验并入默认)"""
        return StrategyContext(portal=portal, params=self.validate_params(params), as_of=as_of)

    # ---- 信号 ----

    @abstractmethod
    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        """返回持仓矩阵: index=日期(升序), columns=股票代码(.SH/.SZ), 值=目标权重或 0/1。
        PTrade 语义: 每日收盘生成, 次日按此调仓(= set_universe 目标)。"""

    # ---- PTrade 导出 ----

    def to_ptrade_code(self, params: Dict[str, Any]) -> str:
        """模板填充 + 静态校验, 返回可直接粘贴进 PTrade 终端的代码"""
        from strategy_sdk.ptrade import (convert_code_format, render_ptrade_code,
                                         validate_ptrade_code)
        validated = self.validate_params(params)
        # 代码格式转换: 研究端 .SH/.SZ → PTrade .SS/.SZ (硬约束 §5.5)
        for k, v in list(validated.items()):
            if not isinstance(v, str):
                continue
            if "," not in v and (v.upper().endswith(".SH") or v.upper().endswith(".SZ")):
                # 单个代码: 直接转换
                validated[k] = convert_code_format(v)
            elif ".SH" in v.upper() or ".SZ" in v.upper():
                # 逗号分隔的多代码串(如 universe_codes): 逐段转换
                validated[k] = ",".join(
                    convert_code_format(seg.strip()) if (".SH" in seg.upper() or ".SZ" in seg.upper())
                    else seg.strip()
                    for seg in v.split(","))
        code = render_ptrade_code(self.ptrade_template, validated)
        errors = validate_ptrade_code(code)
        if errors:
            raise ValueError("PTrade 代码静态校验失败: " + "; ".join(errors))
        return code
