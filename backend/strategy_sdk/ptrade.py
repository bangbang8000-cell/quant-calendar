#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PTrade 代码生成与静态校验 (FR: 策略研究 P0, PTrade 无缝迁移硬约束)
- convert_code_format: qresult .SH/.SZ → PTrade .SS/.SZ
- validate_ptrade_code: 语法/API 白名单/非法 import 静态校验
- render_ptrade_code: 模板 + 参数填充
"""
import ast
import logging
from typing import Dict, Any, List

logger = logging.getLogger(__name__)

# PTrade 允许的 API 白名单(生命周期 + 下单 + 数据 + 全局)
_ALLOWED_APIS = {
    "initialize", "handle_data", "before_trading_start", "after_trading_end",
    "run_daily", "run_interval",
    "set_universe", "set_benchmark", "set_slippage", "set_commission",
    "order", "order_target", "order_value", "order_target_value", "order_market",
    "get_history", "get_current_data", "get_fundamentals",
    "get_index_stocks", "is_st",
    "g", "log", "context", "data", "datetime", "timedelta",
}
# PTrade 常见非法 import(网络/文件/系统操作)
_BAD_IMPORTS = {"os", "sys", "requests", "urllib", "socket", "subprocess",
                "shutil", "pathlib", "http", "ftp", "paramiko"}


def convert_code_format(code: str) -> str:
    """股票代码格式转换: 600000.SH → 600000.SS (沪 .SH→.SS, 深 .SZ 不变)"""
    if code.upper().endswith(".SH"):
        return code[:-3] + ".SS"
    return code


def _extract_imports(tree: ast.Module) -> List[str]:
    names = []
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            for alias in node.names:
                names.append(alias.name.split(".")[0])
        elif isinstance(node, ast.ImportFrom):
            if node.module:
                names.append(node.module.split(".")[0])
    return names


def validate_ptrade_code(code: str) -> List[str]:
    """静态校验, 返回错误列表(空 = 通过)"""
    errors: List[str] = []
    # 1. 语法
    try:
        tree = ast.parse(code)
    except SyntaxError as e:
        return [f"语法错误: {e}"]

    # 2. 生命周期函数齐全
    funcs = {n.name for n in ast.walk(tree) if isinstance(n, ast.FunctionDef)}
    for required in ("initialize", "handle_data"):
        if required not in funcs:
            errors.append(f"缺少生命周期函数 {required}()")

    # 3. 非法 import
    for mod in _extract_imports(tree):
        if mod in _BAD_IMPORTS:
            errors.append(f"非法 import: {mod}")

    # 4. 调用的 API 需在白名单内(排除自定义函数)
    called = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Call):
            if isinstance(node.func, ast.Name):
                called.add(node.func.id)
            elif isinstance(node.func, ast.Attribute):
                called.add(node.func.attr)
    custom = funcs | {"print", "len", "range", "str", "int", "float", "abs",
                      "min", "max", "sum", "sorted", "enumerate", "zip", "dict",
                      "list", "tuple", "set", "type", "isinstance", "round",
                      "current", "items", "keys", "split", "strip", "info",
                      "log", "round", "sum", "format", "extend", "append", "copy"}
    for name in sorted(called - custom):
        if name not in _ALLOWED_APIS and not name.startswith("_"):
            errors.append(f"未知/不允许的 API: {name}")

    return errors


def render_ptrade_code(template: str, params: Dict[str, Any]) -> str:
    """模板 + 参数填充(简单 str.format 风格, 模板内用 {param_key} 占位)"""
    from strategy_sdk.templates import TEMPLATES
    tpl = TEMPLATES.get(template)
    if not tpl:
        raise ValueError(f"未找到 PTrade 模板: {template}")
    # 只填充参数, 模板中未定义的占位符保持原样
    try:
        return tpl.format(**params)
    except KeyError:
        # 兜底: 逐 key 替换, 不因未知占位符失败
        out = tpl
        for k, v in params.items():
            out = out.replace("{" + k + "}", str(v))
        return out
