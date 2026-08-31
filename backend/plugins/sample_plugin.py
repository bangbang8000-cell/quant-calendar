#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
样例插件 (V4.0 M4-4): 演示插件机制 — 启动时打印说明 + 挂一个 Webhook 事件日志钩子

复制本文件改造成你的插件: 导出 PLUGIN_META + register(ctx)。
"""
import logging

logger = logging.getLogger(__name__)

PLUGIN_META = {
    "name": "sample-plugin",
    "description": "样例插件: 启动日志 + webhook 事件钩子示例",
    "version": "0.1.0",
}


def register(ctx: dict) -> None:
    """启动时调用. ctx 含 {"app": FastAPI 实例, "logger": ...} (按需使用)"""
    logger.info("🔌 [sample-plugin] 已注册 (V4.0 插件机制示例)")
    # 示例: 可在此挂 app 事件/中间件/路由, 或向 ctx 注入能力
