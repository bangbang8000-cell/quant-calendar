#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.1): AI 评估模块兼容薄壳
实现已拆分至 ai_eval/ 子包; 本文件保持 import 兼容与全局单例 ai_evaluator。"""
import json
import hashlib
import re
import os
import time
import asyncio
import requests
import logging
from typing import Dict, List, Optional
from datetime import datetime
from dataclasses import dataclass
from ai_indicators import calc_rsi as _calc_rsi, calc_macd as _calc_macd

from ai_eval import AIEvaluator
# re-export 原模块顶层符号 (V4.5 起定义于 ai_models, 保持 from ai_evaluator import ... 兼容)
from ai_models import ModelProvider, VendorModel, VendorConfig, VENDOR_CATALOG

logger = logging.getLogger(__name__)

ai_evaluator = AIEvaluator()
