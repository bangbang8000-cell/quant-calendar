#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
飞书推送 API 路由
"""
import logging

from fastapi import APIRouter, HTTPException, Depends, Request
from fastapi.responses import JSONResponse
from typing import Dict, Any
from datetime import datetime
import requests

import feishu_commands
from feishu_push import FeishuPusher
from auth import get_admin_user
from paths import DATA_DIR

import json
import os

logger = logging.getLogger(__name__)

FEISHU_CONFIG_FILE = os.path.join(DATA_DIR, "feishu_config.json")

def load_feishu_config():
    if os.path.exists(FEISHU_CONFIG_FILE):
        try:
            with open(FEISHU_CONFIG_FILE, 'r', encoding='utf-8') as f:
                saved = json.load(f)
            # 只更新非空值，避免空配置覆盖默认值
            for key, value in saved.items():
                if value or key not in feishu_config:
                    feishu_config[key] = value
            logger.info("✅ 已加载飞书配置")
        except Exception as e:
            logger.warning(f"⚠️  加载飞书配置失败: {e}")

def save_feishu_config():
    try:
        with open(FEISHU_CONFIG_FILE, 'w', encoding='utf-8') as f:
            json.dump(feishu_config, f, ensure_ascii=False, indent=2)
            logger.info("✅ 飞书配置已保存")
    except Exception as e:
        logger.warning(f"⚠️  保存飞书配置失败: {e}")

router = APIRouter(prefix="/feishu", tags=["飞书推送"])

pusher = FeishuPusher()

# 简化版配置存储
feishu_config = {
    "webhook_url": "",  # 通过"系统配置 → 飞书推送"页面配置
    "enabled": True,
    "push_time": "09:00",
    "daily_push": True,
    "push_keywords": True
}

# 启动时加载持久化配置
load_feishu_config()


@router.get("/config")
async def get_feishu_config(_: Dict = Depends(get_admin_user)):
    """获取飞书配置"""
    return feishu_config


@router.post("/config")
async def update_feishu_config(config: Dict[str, Any], _: Dict = Depends(get_admin_user)):
    """更新飞书配置 (含 v7.12 的 command_secret / command_enabled)"""
    feishu_config.update(config)
    pusher.set_webhook(config.get("webhook_url", ""))
    save_feishu_config()  # v7.12 修正: 原实现漏了持久化, 重启即丢配置
    return {"status": "ok", "message": "配置已更新"}


@router.post("/test")
async def test_feishu_push(_: Dict = Depends(get_admin_user)):
    """测试飞书推送 - 发送简单测试消息"""
    if not feishu_config["webhook_url"]:
        raise HTTPException(status_code=400, detail="请先配置Webhook地址")

    pusher.set_webhook(feishu_config["webhook_url"])

    # 发送简单测试消息，不依赖数据
    test_msg = {
        "msg_type": "text",
        "content": {
            "text": "🔔 量化选股日历 - 飞书推送测试\n\n"
                    "如果您看到这条消息，说明推送配置正确！\n"
                    f"⏰ 发送时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        }
    }

    try:
        response = requests.post(
            feishu_config["webhook_url"],
            headers={"Content-Type": "application/json"},
            data=json.dumps(test_msg),
            timeout=10
        )
        result = response.json()
        if result.get('code') == 0:
            return {"status": "ok", "success": True, "message": "✅ 测试消息已发送，请查看飞书"}
        else:
            return {"status": "error", "success": False, "message": f"❌ 发送失败: {result.get('msg','')}"}
    except Exception as e:
        return {"status": "error", "success": False, "message": f"❌ 连接失败: {str(e)}"}


@router.post("/push/{date}")
async def push_report(date: str, _: Dict = Depends(get_admin_user)):
    """推送指定日期的报告"""
    if not feishu_config["webhook_url"]:
        raise HTTPException(status_code=400, detail="请先配置Webhook地址")

    pusher.set_webhook(feishu_config["webhook_url"])
    success = pusher.send_daily_report(date)
    if success:
        return {"status": "ok", "message": "报告已推送"}
    raise HTTPException(status_code=500, detail="推送失败")


# ─── v7.12 (FR-7.7-5): 群指令回调 (签名 + 白名单 + 审计) ───

@router.post("/command")
async def feishu_command(request: Request):
    """飞书事件订阅回调入口 (群指令)。

    安全口径 (fail-closed, 详见 backend/feishu_commands.py):
      - command_secret 未配置或 command_enabled=False → 一律 403
      - X-Lark-Signature 验签 + ±300s 时间窗防重放, 不过即拒
      - 指令白名单分发, 未注册指令只回 usage; 每次回调落审计
    配置: feishu_config.json 里 command_secret / command_enabled (管理员经 /feishu/config 配置)。
    """
    body_raw = (await request.body()).decode("utf-8", errors="replace")
    headers = {k: v for k, v in request.headers.items()}
    try:
        payload = json.loads(body_raw) if body_raw else {}
    except Exception:
        payload = {}
    secret = feishu_config.get("command_secret", "")
    enabled = bool(feishu_config.get("command_enabled", False))
    status, resp = feishu_commands.handle_event(payload, headers, body_raw,
                                                secret=secret, enabled=enabled)
    return JSONResponse(status_code=status, content=resp)
