#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
v1.5.7: 多用户配置分离模块
每个用户拥有独立的配置文件 data/users/{username}/config.json
从 base 配置（admin）派生，可覆盖个别字段
"""
import json
import os
from fastapi import APIRouter, HTTPException, Depends
from auth import get_current_active_user, get_admin_user
from paths import DATA_DIR

router = APIRouter(tags=["用户配置"])

BASE_USERS_DIR = os.path.join(DATA_DIR, "users")

# ===== 基类配置（admin 的配置作为默认值） =====
BASE_CONFIG_DEFAULTS = {
    "tushare": {"token": "", "endpoint": "http://api.tushare.pro", "timeout": 30},
    "datasource": {"sources": {
        "sxsc_tushare": {"enabled": True, "token": "", "timeout": 30},
        "tushare": {"enabled": True, "token": "", "endpoint": "http://api.tushare.pro", "timeout": 30},
        "akshare": {"enabled": True}
    }},
    "feishu": {"webhook_url": "", "enabled": False, "push_time": "09:00", "daily_push": True,
               "push_keywords": True, "daily_report": True, "daily_report_time": "09:00",
               "notify_type": "webhook", "format": "card", "view_change_push": False, "ai_evaluate_push": False},
    "ai": {"provider": "deepseek", "apiKey": "", "endpoint": "https://api.deepseek.com/v1", "model": "deepseek-chat"},
    "rate_limit": {"api_limit": 600},
    "auto_evaluate": {"enabled": False, "schedule_type": "daily", "schedule_time": "09:00", "push_to_feishu": True},
    "theme": "tech-blue"
}


def _get_user_config_path(username: str) -> str:
    return os.path.join(BASE_USERS_DIR, username, "config.json")


def _get_base_config_path() -> str:
    return os.path.join(BASE_USERS_DIR, "admin", "config.json")


def _load_base_config() -> dict:
    """加载基础配置（admin 的配置优先，其次用全局文件兜底，最后用默认值）"""
    config = dict(BASE_CONFIG_DEFAULTS)

    # 1. 尝试加载 admin 的用户配置
    admin_config_path = _get_base_config_path()
    if os.path.exists(admin_config_path):
        try:
            with open(admin_config_path, 'r', encoding='utf-8') as f:
                saved = json.load(f)
            _deep_merge(config, saved)
        except Exception as e:
            logger.warning(f"加载 admin 基础配置失败: {e}")

    # 2. 兜底：加载全局配置文件（兼容旧数据）
    global_files = {
        os.path.join(DATA_DIR, "feishu_config.json"): "feishu",
        os.path.join(DATA_DIR, "ai_config.json"): "ai",
    }
    for filepath, key in global_files.items():
        if os.path.exists(filepath) and (not config.get(key) or not _is_non_empty(config[key])):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    saved = json.load(f)
                if isinstance(config[key], dict) and isinstance(saved, dict):
                    config[key].update(saved)
                elif saved:
                    config[key] = saved
            except Exception:
                pass

    return config


def _is_non_empty(val) -> bool:
    """检查配置值是否非空"""
    if val is None:
        return False
    if isinstance(val, str):
        return bool(val.strip())
    if isinstance(val, dict):
        return any(_is_non_empty(v) for v in val.values())
    return True


def _deep_merge(base: dict, override: dict):
    """深度合并，override 中的值覆盖 base"""
    for key, value in override.items():
        if key in base and isinstance(base[key], dict) and isinstance(value, dict):
            _deep_merge(base[key], value)
        elif value is not None:
            base[key] = value


def load_user_config(username: str) -> dict:
    """加载指定用户的配置（base 配置 + 用户覆盖）"""
    base = _load_base_config()
    user_config_path = _get_user_config_path(username)
    if os.path.exists(user_config_path):
        try:
            with open(user_config_path, 'r', encoding='utf-8') as f:
                user_override = json.load(f)
            # 移除 inherits 元字段
            user_override.pop("inherits", None)
            _deep_merge(base, user_override)
        except Exception as e:
            logger.warning(f"加载用户 {username} 配置失败: {e}")
    return base


def save_user_config(username: str, config: dict) -> bool:
    """保存用户配置（只保存与 base 不同的字段）"""
    user_dir = os.path.join(BASE_USERS_DIR, username)
    os.makedirs(user_dir, exist_ok=True)

    base = _load_base_config()
    diff = _compute_diff(base, config)

    # 过滤掉空值
    filtered = {}
    for key, value in diff.items():
        if _is_non_empty(value):
            filtered[key] = value

    user_config_path = _get_user_config_path(username)
    try:
        with open(user_config_path, 'w', encoding='utf-8') as f:
            json.dump(filtered, f, ensure_ascii=False, indent=2)
        logger.info(f"用户 {username} 配置已保存")
        return True
    except Exception as e:
        logger.warning(f"保存用户 {username} 配置失败: {e}")
        return False


def _compute_diff(base: dict, override: dict) -> dict:
    """计算 override 与 base 的差异"""
    diff = {}
    for key, value in override.items():
        if key in base:
            if isinstance(base[key], dict) and isinstance(value, dict):
                sub_diff = _compute_diff(base[key], value)
                if sub_diff:
                    diff[key] = sub_diff
            elif value != base[key]:
                diff[key] = value
        else:
            diff[key] = value
    return diff


def init_user_config(username: str):
    """为新用户初始化配置目录，从 base 复制"""
    user_dir = os.path.join(BASE_USERS_DIR, username)
    os.makedirs(user_dir, exist_ok=True)
    config_path = _get_user_config_path(username)
    if not os.path.exists(config_path):
        logger.info(f"为用户 {username} 创建配置目录")


# ===== API 路由 =====

@router.get("/config")
async def get_my_config(user: dict = Depends(get_current_active_user)):
    """获取当前用户的完整配置（base + 覆盖）"""
    config = load_user_config(user["username"])
    return {"success": True, "config": config, "username": user["username"]}


@router.post("/config")
async def save_my_config(req: dict, user: dict = Depends(get_current_active_user)):
    """保存当前用户的配置"""
    config = req.get("config", {})
    if not config:
        raise HTTPException(status_code=400, detail="配置数据不能为空")
    success = save_user_config(user["username"], config)
    if success:
        return {"success": True, "message": "配置已保存", "username": user["username"]}
    raise HTTPException(status_code=500, detail="保存配置失败")


@router.get("/config/base")
async def get_base_config(_: dict = Depends(get_admin_user)):
    """获取基础配置（仅 admin）"""
    config = _load_base_config()
    return {"success": True, "config": config}