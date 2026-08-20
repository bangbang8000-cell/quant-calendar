#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
路径配置模块 - 统一管理所有相对路径
基于当前文件位置自动计算项目根目录，确保在任何工作目录下都能正确运行
"""

import logging
import os
from dotenv import load_dotenv

logger = logging.getLogger(__name__)

# 项目根目录（当前文件所在目录的上一级）
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 加载 .env 文件（在项目根目录）
env_path = os.path.join(BASE_DIR, '.env')
if os.path.exists(env_path):
    load_dotenv(env_path)

# 各目录配置
BACKEND_DIR = os.path.join(BASE_DIR, "backend")
FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")
DATA_DIR = os.path.join(BASE_DIR, "data")

# 常用数据文件
STOCK_INFO_FILE = os.path.join(DATA_DIR, "stock_info.json")
MERRILL_CACHE_FILE = os.path.join(DATA_DIR, "merrill_cache.json")
MERRILL_HISTORY_FILE = os.path.join(DATA_DIR, "merrill_history.json")
MERRILL_SNAPSHOT_FILE = os.path.join(DATA_DIR, "merrill_snapshots.json")  # v1.8
MARKET_CACHE_FILE = os.path.join(DATA_DIR, "market_cache.json")
USERS_FILE = os.path.join(DATA_DIR, "users.json")
CONSENSUS_DATA_FILE = os.path.join(DATA_DIR, "consensus_data.json")
AI_CONFIG_FILE = os.path.join(DATA_DIR, "ai_config.json")
AI_EVALUATION_HISTORY_FILE = os.path.join(DATA_DIR, "ai_evaluation_history.json")
AUTO_EVALUATE_CONFIG_FILE = os.path.join(DATA_DIR, "auto_evaluate_config.json")
GROUPS_FILE = os.path.join(DATA_DIR, "groups.json")

# 前端文件
# V4.3 (方案A): 构建产物目录 — 存在则优先 serve dist(打包后 index.html + assets), 否则回退源码
DIST_DIR = os.path.join(FRONTEND_DIR, "dist")
if os.path.isdir(DIST_DIR) and os.path.isfile(os.path.join(DIST_DIR, "index.html")):
    INDEX_HTML_FILE = os.path.join(DIST_DIR, "index.html")
else:
    INDEX_HTML_FILE = os.path.join(FRONTEND_DIR, "index.html")
MANIFEST_JSON_FILE = os.path.join(FRONTEND_DIR, "manifest.json")
SW_JS_FILE = os.path.join(FRONTEND_DIR, "sw.js")

# 外部数据目录（策略 CSV 文件位置）
# 优先级：环境变量 > .env 配置 > 默认值 ../qresult
DEFAULT_QUANT_DIR = os.environ.get(
    "QUANT_DATA_DIR",
    os.path.join(os.path.dirname(BASE_DIR), "qresult")
)
# 如果是相对路径，相对于项目根目录解析
if not os.path.isabs(DEFAULT_QUANT_DIR):
    EXTERNAL_DATA_DIR = os.path.join(BASE_DIR, DEFAULT_QUANT_DIR)
else:
    EXTERNAL_DATA_DIR = DEFAULT_QUANT_DIR


def ensure_dirs():
    """确保所有必要的目录存在"""
    for dir_path in [BACKEND_DIR, FRONTEND_DIR, DATA_DIR]:
        os.makedirs(dir_path, exist_ok=True)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    logger.info("项目根目录: %s", BASE_DIR)
    logger.info("后端目录: %s", BACKEND_DIR)
    logger.info("前端目录: %s", FRONTEND_DIR)
    logger.info("数据目录: %s", DATA_DIR)
    logger.info("外部数据目录: %s", EXTERNAL_DATA_DIR)
    ensure_dirs()
    logger.info("目录检查完成")
