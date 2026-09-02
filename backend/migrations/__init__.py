#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.4): 版本化 schema 迁移框架
用法:
    from migrations import upgrade, rollback, validate, get_current_version, MigrationError
    conn = db.get_conn()
    upgrade(conn)            # 升级到最新
    rollback(conn, 2)        # 回滚到版本 2
    validate(conn)           # 一致性校验
迁移文件: _0001_baseline.py / _0002_alert_silence.py / _0003_event_user_column.py
"""
from .runner import (Migration, MigrationError, MIGRATIONS, upgrade, rollback,
                     validate, get_current_version, latest_version)

__all__ = ["Migration", "MigrationError", "MIGRATIONS", "upgrade", "rollback",
           "validate", "get_current_version", "latest_version"]
