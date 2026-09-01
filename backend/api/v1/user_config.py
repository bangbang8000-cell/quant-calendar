#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
v1.5.7: 多用户配置分离模块
每个用户拥有独立的配置文件 data/users/{username}/config.json
从 base 配置（admin）派生，可覆盖个别字段
"""
import json
import os
import logging
from fastapi import APIRouter, HTTPException, Depends
from auth import get_current_active_user, get_admin_user
from secret_utils import mask_secret
from paths import DATA_DIR

logger = logging.getLogger(__name__)

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
    "theme": "vibrant-orange",
    # v3.17 (FR-3.17.2/3.17.7): 策略研究菜单默认开启（市场复盘/异动扫描 P0 功能可达）
    "research_menu_enabled": True
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
                logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
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
    """递归合并 override 到 base"""
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


def _mask_sensitive(obj, _depth=0):
    """V4.1: 递归掩码配置敏感字段(apiKey/token/secret/webhook_url), 防明文下发"""
    if _depth > 6:
        return obj
    if isinstance(obj, dict):
        out = {}
        for k, v in obj.items():
            if k.lower() in ("apikey", "token", "secret", "webhook_url", "api_key", "access_key") and isinstance(v, str) and v:
                out[k] = mask_secret(v)
            else:
                out[k] = _mask_sensitive(v, _depth + 1)
        return out
    if isinstance(obj, list):
        return [_mask_sensitive(x, _depth + 1) for x in obj]
    return obj

@router.get("/config")
async def get_my_config(user: dict = Depends(get_current_active_user)):
    """获取当前用户的完整配置（base + 覆盖）"""
    config = _mask_sensitive(load_user_config(user["username"]))
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


# ===== v3.17.10 (FR-3.17.10): 个性化偏好 =====
# 偏好键：default_view(默认视图) / theme(亮/暗/跟随系统) / chart_period(图表周期) / language(界面语言)
# 统一存后端 user_config（登录用户）的顶层 preferences 子对象；游客由前端降级 localStorage。
PREFERENCE_DEFAULTS = {
    "default_view": "strategies",
    "theme": "system",
    "chart_period": "daily",
    "language": "zh-CN",
    # V5.6 (T-5.6.1): 新手引导进度 (onboarding-core persistState JSON 字符串, 跨设备同步)
    "onboarding_progress": "",
}
PREFERENCE_KEYS = set(PREFERENCE_DEFAULTS)
# 各偏好键合法取值（后端仅做键校验，值合法性由前端偏好模块约束）
PREFERENCE_ALLOWED_VALUES = {
    "default_view": {"strategies", "calendar", "ai", "research", "system"},
    "theme": {"light", "dark", "system"},
    "chart_period": {"daily", "weekly", "monthly"},
    "language": {"zh-CN", "en", "ja", "ko", "zh-TW"},
}


def _get_user_preferences_path(username: str) -> str:
    """偏好独立存储文件：data/users/{username}/preferences.json
    （与 config.json 解耦，避免 saveAllConfig 的 diff 覆盖写抹掉偏好）"""
    return os.path.join(BASE_USERS_DIR, username, "preferences.json")


def get_user_preferences(username: str) -> dict:
    """读取指定用户的个性化偏好（仅用户自身文件 + 默认值，不继承 admin base 配置）"""
    prefs = dict(PREFERENCE_DEFAULTS)
    prefs_path = _get_user_preferences_path(username)
    if os.path.exists(prefs_path):
        try:
            with open(prefs_path, 'r', encoding='utf-8') as f:
                saved = json.load(f)
            saved = saved or {}
            for k in PREFERENCE_KEYS:
                if k in saved and saved[k] is not None:
                    prefs[k] = saved[k]
        except Exception as e:
            logger.warning(f"读取用户 {username} 偏好失败: {e}")
    return prefs


def save_user_preferences(username: str, prefs: dict) -> bool:
    """保存指定用户的个性化偏好（写入独立 preferences.json，重启保持）"""
    prefs_path = _get_user_preferences_path(username)
    saved = get_user_preferences(username)
    for k in PREFERENCE_KEYS:
        if k in prefs:
            saved[k] = prefs[k]
    user_dir = os.path.join(BASE_USERS_DIR, username)
    os.makedirs(user_dir, exist_ok=True)
    try:
        with open(prefs_path, 'w', encoding='utf-8') as f:
            json.dump(saved, f, ensure_ascii=False, indent=2)
        logger.info(f"用户 {username} 偏好已保存")
        return True
    except Exception as e:
        logger.warning(f"保存用户 {username} 偏好失败: {e}")
        return False


@router.get("/preferences")
async def get_my_preferences(user: dict = Depends(get_current_active_user)):
    """获取当前用户的个性化偏好（登录用户；游客由前端降级 localStorage）"""
    prefs = get_user_preferences(user["username"])
    return {"success": True, "preferences": prefs, "username": user["username"]}


@router.post("/preferences")
async def save_my_preferences(req: dict, user: dict = Depends(get_current_active_user)):
    """保存当前用户的个性化偏好（仅接受 default_view/theme/chart_period 三键，非法键拒绝）"""
    req_prefs = req.get("preferences") or {}
    if not isinstance(req_prefs, dict) or not req_prefs:
        raise HTTPException(status_code=400, detail="偏好数据不能为空")
    invalid = [k for k in req_prefs if k not in PREFERENCE_KEYS]
    if invalid:
        raise HTTPException(status_code=400, detail=f"非法偏好键: {invalid}")
    ok = save_user_preferences(user["username"], req_prefs)
    if not ok:
        raise HTTPException(status_code=500, detail="保存偏好失败")
    return {
        "success": True,
        "preferences": get_user_preferences(user["username"]),
        "username": user["username"],
    }


@router.get("/config/base")
async def get_base_config(_: dict = Depends(get_admin_user)):
    """获取基础配置（仅 admin）"""
    config = _load_base_config()
    return {"success": True, "config": config}
