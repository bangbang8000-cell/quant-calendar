#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.91): AI 评估模块兼容薄壳
实现已拆分至 ai_eval/ 子包; 本文件保持 import 兼容与全局单例 ai_evaluator。"""
import json  # noqa: F401  # 薄壳兼容属性
import os  # noqa: F401
import hashlib  # noqa: F401
import re  # noqa: F401
import time  # noqa: F401
import asyncio  # noqa: F401
import requests  # noqa: F401
from datetime import datetime  # noqa: F401
from typing import Dict, List, Optional  # noqa: F401
from ai_indicators import calc_rsi as _calc_rsi, calc_macd as _calc_macd  # noqa: F401
import logging

from ai_eval import AIEvaluator
from ai_models import ModelProvider, VendorModel, VendorConfig, VENDOR_CATALOG  # noqa: F401  # 重导出兼容
# re-export 原模块顶层符号 (V4.5 起定义于 ai_models, 保持 from ai_evaluator import ... 兼容)

logger = logging.getLogger(__name__)

ai_evaluator = AIEvaluator()
