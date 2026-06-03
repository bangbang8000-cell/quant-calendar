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
    "last_refresh_status": None
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
    os.makedirs(DATA_DIR, exist_ok=True)
    with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
        json.dump(current, f, ensure_ascii=False, indent=2)
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
