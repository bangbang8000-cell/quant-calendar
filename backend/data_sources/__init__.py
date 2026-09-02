#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.3): 统一数据源管理器子包 — data_sources.py 拆分
常量/健康路由/映射/DataSourceManager 分置 _constants/_health/_mapping/_manager。"""
from ._constants import *  # noqa: F401,F403
from ._health import *  # noqa: F401,F403
from ._mapping import *  # noqa: F401,F403
from ._manager import DataSourceManager  # noqa: F401
from ._health import (_health_slot, _age_hours, _route_slot, _pause_source,
              _resume_source, _is_rate_limited)
from ._mapping import (_safe_float, _ts_code_to_akshare_index, _ts_code_to_akshare_stock,
              _ts_code_to_sina_symbol, _is_index_code, _map_akshare_columns)
from ._constants import (_health_lock, _health, _alert_lock, ALERT_QUEUE,
              _route_lock, _route_state)

# 全局单例
data_source_manager = DataSourceManager()
