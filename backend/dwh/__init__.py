#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""DWH 包 (v7.0.0)：全市场 Parquet/DuckDB 数据底座。

对外统一入口是 ``backend/dwh/adapter.py``；业务代码**禁止**直接 import ``dwh.native``
或 vendored 的 ``marketdb``（PRD §5.8 vendor 契约 / TC-FY-7.0-13）。
"""
from .adapter import DwhBackend, get_backend, reset_backend  # noqa: F401

__all__ = ['DwhBackend', 'get_backend', 'reset_backend']
