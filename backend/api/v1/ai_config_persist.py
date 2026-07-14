#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os
from paths import AI_CONFIG_FILE

def load_ai_config(ai_config):
    if os.path.exists(AI_CONFIG_FILE):
        try:
            with open(AI_CONFIG_FILE, 'r', encoding='utf-8') as f:
                saved = json.load(f)
                ai_config.update(saved)
                logger.info("已加载 AI 配置")
        except Exception as e:
            logger.warning(f"加载 AI 配置失败: {e}")

def save_ai_config(ai_config):
    try:
        with open(AI_CONFIG_FILE, 'w', encoding='utf-8') as f:
            json.dump(ai_config, f, ensure_ascii=False, indent=2)
            print("✅ AI 配置已保存")
    except Exception as e:
        print(f"⚠️  保存 AI 配置失败: {e}")
