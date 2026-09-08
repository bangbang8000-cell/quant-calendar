#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据刷新配置管理模块
"""
import json
import os
from datetime import datetime
from paths import DATA_DIR

CONFIG_FILE = os.path.join(DATA_DIR, "data_refresh_config.json")

DEFAULT_CONFIG = {
    "scheduled_enabled": False,
    "scheduled_time": "22:00",
    "watch_enabled": False,
    "last_refresh": None,
    "last_refresh_status": None,
    # v3.12 (FR-3.12.1): 定时拉取配置 — 股票池 / 频率 / 启用开关
    "pull_enabled": False,
    "pull_time": "22:30",
    "pull_frequency": "daily",  # daily 交易日每日 / weekly 每周
    "pull_weekday": "0",        # weekly 时 ISO 周几 (0=周一)
    "stock_pool": [],           # 空列表 = 全部覆盖股票
}


def load_config() -> dict:
    """加载刷新配置"""
    if not os.path.exists(CONFIG_FILE):
        return dict(DEFAULT_CONFIG)
    try:
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            config = json.load(f)
        # 合并默认值（兼容新增字段）
        merged = dict(DEFAULT_CONFIG)
        merged.update(config)
        return merged
    except Exception:
        return dict(DEFAULT_CONFIG)


def save_config(config: dict) -> dict:
    """保存刷新配置（只持久化已知字段）"""
    current = load_config()
    for key in DEFAULT_CONFIG:
        if key in config:
            current[key] = config[key]
    # V5.0 T-5.0.5: 原子写 (tmp+replace)
    from reliability.atomic import atomic_write_json
    atomic_write_json(CONFIG_FILE, current)
    return current


def update_refresh_status(success: bool, message: str = ""):
    """更新上次刷新状态"""
    config = load_config()
    config["last_refresh"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    config["last_refresh_status"] = "success" if success else f"failed: {message}"
    save_config(config)


def get_config() -> dict:
    """获取当前配置（公开接口）"""
    return load_config()


def pull_should_run(config: dict = None, today: datetime = None) -> bool:
    """判断今天是否应执行定时拉取（依据 pull_frequency / pull_weekday）

    - daily: 每个自然日都触发（非交易日由拉取内部跳过）
    - weekly: 仅在配置的 pull_weekday (ISO 0=周一) 触发
    """
    if config is None:
        config = load_config()
    if not config.get("pull_enabled", False):
        return False
    if today is None:
        today = datetime.now()
    frequency = config.get("pull_frequency", "daily")
    if frequency == "weekly":
        target_weekday = int(config.get("pull_weekday", "0"))
        if today.isoweekday() - 1 != target_weekday:
            return False
    return True


def get_stock_pool(config: dict = None) -> list:
    """解析股票池：配置非空则用配置，否则返回空列表（表示全量）"""
    if config is None:
        config = load_config()
    return list(config.get("stock_pool") or [])
