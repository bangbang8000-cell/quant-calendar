#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
插件机制 (V4.0 M4-4): 启动时自动加载 backend/plugins/ 下的插件模块

插件约定:
- 模块导出 PLUGIN_META = {"name": str, "description": str, "version": str}
- 模块可选导出 register(ctx: dict) -> None: 启动时调用, ctx 含 {"app", "logger"} 等
- 加载失败仅告警不阻塞启动(插件异常不得影响主程序)
"""
import importlib
import logging
import os
import pkgutil

logger = logging.getLogger(__name__)

PLUGINS_DIR = os.path.dirname(os.path.abspath(__file__))


def discover_plugins() -> list:
    """扫描 plugins 包内的插件模块(排除自身 __init__)"""
    names = []
    for mod in pkgutil.iter_modules([PLUGINS_DIR]):
        if mod.name != "__init__":
            names.append(mod.name)
    return sorted(names)


def load_plugins(ctx: dict = None) -> dict:
    """加载全部插件, 返回 {name: {"meta":..., "ok": bool, "error": str}}"""
    ctx = ctx or {}
    result = {}
    for name in discover_plugins():
        try:
            mod = importlib.import_module(f"plugins.{name}")
            meta = getattr(mod, "PLUGIN_META", {"name": name, "description": "", "version": "0.1.0"})
            register = getattr(mod, "register", None)
            if callable(register):
                register(ctx)
            result[name] = {"meta": meta, "ok": True, "error": ""}
            logger.info("🔌 插件已加载: %s v%s", meta.get("name", name), meta.get("version", "?"))
        except Exception as e:
            logger.warning("🔌 插件 %s 加载失败(不影响主程序): %s", name, e)
            result[name] = {"meta": {}, "ok": False, "error": str(e)}
    return result
