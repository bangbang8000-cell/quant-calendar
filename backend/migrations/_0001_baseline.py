#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.94): 迁移 0001 — 基线
当前 13 张核心表由 db.init_db 的 SCHEMA 创建; 本迁移仅记录基线版本,
确保 schema_migrations 表从版本 1 起有据可查。"""

VERSION = 1
NAME = "baseline"
DESCRIPTION = "基线: 核心表 schema (由 init_db SCHEMA 创建)"


def upgrade(conn):
    # 基线表已由 init_db 创建; 版本记录由 runner 写入
    pass


def downgrade(conn):
    # 回滚基线: 表由 SCHEMA 幂等管理, 此处不删表 (删除核心表属数据操作, 不放迁移)
    pass
