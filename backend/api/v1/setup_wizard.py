#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
初始化向导 API — 首次启动引导用户配置必要参数
- GET  /api/setup/status   → 检查是否需要初始化
- POST /api/setup/complete → 完成初始化配置
"""

import os
from typing import Dict
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
import logging

from paths import DATA_DIR
from user_manager import UserManager
from api.v1.user_config import load_user_config, save_user_config
from auth import get_admin_user

logger = logging.getLogger(__name__)

router = APIRouter(tags=["初始化向导"])

SETUP_DONE_FILE = os.path.join(DATA_DIR, ".setup_done")


class SetupStatusResponse(BaseModel):
    needed: bool
    steps: dict


class SetupCompleteRequest(BaseModel):
    new_password: str = ""          # 空字符串表示不改
    ai_key: str = ""
    ai_provider: str = "deepseek"
    ai_model: str = "deepseek-chat"
    ai_endpoint: str = "https://api.deepseek.com/v1"
    tushare_token: str = ""


def _is_default_password() -> bool:
    """检查 admin 密码是否仍为默认值 'admin'"""
    try:
        um = UserManager()
        return um.verify_password("admin", "admin")
    except Exception:
        return False


def _config_empty(username: str, path: str) -> bool:
    """检查配置路径的值是否为空"""
    try:
        config = load_user_config(username)
        keys = path.split(".")
        val = config
        for k in keys:
            if not isinstance(val, dict):
                return True
            val = val.get(k, "")
            if isinstance(val, str) and not val.strip():
                return True
        return False
    except Exception:
        return True


def is_setup_done() -> bool:
    return os.path.exists(SETUP_DONE_FILE)


def mark_setup_done():
    os.makedirs(DATA_DIR, exist_ok=True)
    with open(SETUP_DONE_FILE, 'w') as f:
        f.write('1')


def reset_setup():
    """重置初始化标记，允许重新运行向导"""
    if os.path.exists(SETUP_DONE_FILE):
        os.remove(SETUP_DONE_FILE)


@router.get("/setup/status")
async def get_setup_status():
    """检查是否需要运行初始化向导 (V4.1: 不再泄露默认密码状态)"""
    if is_setup_done():
        return {"needed": False, "steps": {}}

    steps = {
        "ai_key": _config_empty("admin", "ai.apiKey"),
        "tushare_token": _config_empty("admin", "tushare.token"),
    }

    needed = any(steps.values())
    return {"needed": needed, "steps": steps}


@router.post("/setup/complete")
async def complete_setup(req: SetupCompleteRequest, _: Dict = Depends(get_admin_user)):
    """完成初始化配置 (V4.1: 仅首次初始化可改密码; 已初始化后走用户管理)"""
    try:
        if is_setup_done():
            raise HTTPException(status_code=403, detail="系统已初始化，请使用用户管理修改配置")
        if not (req.new_password and req.new_password.strip()):
            raise HTTPException(status_code=400, detail="初始化必须设置管理员密码")
        if len(req.new_password.strip()) < 8:
            raise HTTPException(status_code=400, detail="密码至少 8 个字符")
        config_updates = {}

        # 1. 修改密码
        um = UserManager()
        um.update_user("admin", password=req.new_password.strip())
        # V4.1: 初始化/改密审计
        try:
            from audit_log import log
            log("setup_complete", "admin", {"password_changed": True,
                                            "ai_key": bool(req.ai_key),
                                            "tushare_token": bool(req.tushare_token)})
        except Exception:
            logger.warning('setup_wizard:119 静默异常 (Exception)')

        # 2. 保存 AI 配置
        if req.ai_key and req.ai_key.strip():
            ai_config = {
                "provider": req.ai_provider,
                "apiKey": req.ai_key,
                "model": req.ai_model,
                "endpoint": req.ai_endpoint,
            }
            config_updates["ai"] = ai_config

        # 3. 保存 Tushare token
        if req.tushare_token and req.tushare_token.strip():
            config_updates["tushare"] = {"token": req.tushare_token}

        if config_updates:
            existing = load_user_config("admin")
            from api.v1.user_config import _deep_merge
            _deep_merge(existing, config_updates)
            save_user_config("admin", existing)

        mark_setup_done()
        return {"success": True, "message": "初始化完成"}

    except HTTPException:
        raise
    except Exception as e:
        logger.exception(f"初始化失败: {e}")
        raise HTTPException(status_code=500, detail=f"初始化失败: {str(e)}")


@router.post("/setup/reset")
async def reset_setup_wizard(_: Dict = Depends(get_admin_user)):
    """重置初始化标记，下次登录时再次显示向导 (V4.1: 仅管理员)"""
    reset_setup()
    return {"success": True, "message": "已重置，下次登录时将显示初始化向导"}
