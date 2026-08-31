#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
备份/恢复 API (v3.3.0-T8)
- GET  /api/backup/list     备份列表
- POST /api/backup/create   手动创建备份
- POST /api/backup/restore  从备份恢复 (需要 admin)
"""

import logging
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from auth import get_non_guest_user

from db import backup_db, list_backups, restore_backup

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/backup", tags=["备份"])


class RestoreRequest(BaseModel):
    name: str


@router.get("/list")
async def backup_list(user: dict = Depends(get_non_guest_user)):
    """备份列表 (任意登录用户可看)"""
    backups = list_backups()
    return {"success": True, "backups": backups}


@router.post("/create")
async def backup_create(user: dict = Depends(get_non_guest_user)):
    """手动创建备份"""
    name = backup_db()
    if not name:
        return {"success": False, "message": "备份创建失败"}
    return {"success": True, "message": f"备份创建成功: {name}", "name": name}


@router.post("/restore")
async def backup_restore(req: RestoreRequest, user: dict = Depends(get_non_guest_user)):
    """从备份恢复 (仅 admin)"""
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="仅管理员可执行恢复操作")
    ok = restore_backup(req.name)
    # v3.21 (P0-5): 高危操作审计
    try:
        from audit_log import log
        log("restore_backup", user.get("username", "admin"),
            {"name": req.name, "success": ok})
    except Exception:
        logger.warning('backup:53 静默异常 (Exception)')
    if not ok:
        return {"success": False, "message": "恢复失败, 请检查备份文件"}
    return {"success": True, "message": "恢复成功, 数据已回滚到备份时间点"}
