#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""APP_VERSION 轻量代理 (v7.5 修复)

研究历史写入路径原用 `from backend_info import APP_VERSION`, 但该模块从未存在,
异常被静默吞掉 → score/timing 实验实际未落库。本模块保持 main_new.py 为版本
单一来源(O1), 用轻量读取避免 import 整个 FastAPI app 的副作用。
"""
import re
from pathlib import Path

__all__ = ["APP_VERSION"]


def _read_app_version() -> str:
    src = Path(__file__).with_name("main_new.py").read_text(encoding="utf-8")
    m = re.search(r'^APP_VERSION = "([^"]+)"', src, re.MULTILINE)
    return m.group(1) if m else ""


APP_VERSION = _read_app_version()
