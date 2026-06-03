#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
用户组管理 API 路由 (v1.9.0)
"""
from fastapi import APIRouter, Depends, HTTPException, status
from typing import Dict, Any

from auth import get_admin_user, get_current_active_user
from group_manager import group_manager
from user_manager import user_manager

router = APIRouter(prefix="/groups", tags=["用户组管理"])


@router.get("")
async def list_groups(user: Dict = Depends(get_admin_user)):
    """获取所有用户组列表"""
    return {"success": True, "groups": group_manager.list_groups()}


@router.get("/my")
async def get_my_group(user: Dict = Depends(get_current_active_user)):
    """获取当前用户的组菜单配置（需登录）"""
    group_id = user.get("group", user.get("role", "user"))
    group = group_manager.get_group(group_id)
    if not group:
        group = group_manager.get_group("user")  # fallback
    return {"success": True, "group_id": group_id, "group": group}


@router.get("/{group_id}")
async def get_group(group_id: str, user: Dict = Depends(get_admin_user)):
    """获取单个用户组配置"""
    group = group_manager.get_group(group_id)
    if not group:
        raise HTTPException(status_code=404, detail="用户组不存在")
    return {"success": True, "group": group}


@router.post("")
async def create_group(req: Dict[str, Any], user: Dict = Depends(get_admin_user)):
    """创建新用户组"""
    group_id = req.get("group_id")
    name = req.get("name", group_id)
    if not group_id:
        return {"success": False, "message": "组 ID 不能为空"}
    ok = group_manager.create_group(
        group_id=group_id,
        name=name,
        description=req.get("description", ""),
        visible_menus=req.get("visible_menus"),
        visible_sub_pages=req.get("visible_sub_pages")
    )
    return {"success": ok, "message": "创建成功" if ok else "组 ID 已存在"}


@router.put("/{group_id}")
async def update_group(group_id: str, req: Dict[str, Any], user: Dict = Depends(get_admin_user)):
    """更新用户组菜单可见性配置"""
    ok = group_manager.update_group(group_id, req)
    if not ok:
        raise HTTPException(status_code=404, detail="用户组不存在")
    return {"success": True, "message": "配置已更新"}


@router.delete("/{group_id}")
async def delete_group(group_id: str, user: Dict = Depends(get_admin_user)):
    """删除用户组"""
    ok = group_manager.delete_group(group_id)
    if not ok:
        return {"success": False, "message": "无法删除：组不存在或已锁定"}
    return {"success": True, "message": "已删除"}


# ===== 组成员管理 (v1.9.2) =====

@router.get("/{group_id}/members")
async def get_group_members(group_id: str, user: Dict = Depends(get_admin_user)):
    """获取指定组的所有成员"""
    if group_id not in group_manager.groups:
        raise HTTPException(status_code=404, detail="用户组不存在")
    members = []
    for uname, udata in user_manager.users.items():
        ugroup = udata.get("group", udata.get("role", "user"))
        if ugroup == group_id:
            m = {
                "username": uname,
                "role": udata.get("role", "user"),
                "theme": udata.get("theme", "tech-blue"),
                "enabled": udata.get("enabled", True),
                "locked": udata.get("locked", False)
            }
            members.append(m)
    return {"success": True, "group_id": group_id, "members": members}


@router.post("/{group_id}/members")
async def add_group_member(group_id: str, req: Dict[str, Any], user: Dict = Depends(get_admin_user)):
    """添加用户到指定组"""
    if group_id not in group_manager.groups:
        raise HTTPException(status_code=404, detail="用户组不存在")
    username = req.get("username", "")
    if not username or username not in user_manager.users:
        return {"success": False, "message": "用户不存在"}
    if username in ("admin", "guest"):
        return {"success": False, "message": "admin/guest 不可移组"}
    user_manager.users[username]["group"] = group_id
    user_manager._save_users()
    return {"success": True, "message": "已添加到组"}


@router.delete("/{group_id}/members/{username}")
async def remove_group_member(group_id: str, username: str, user: Dict = Depends(get_admin_user)):
    """从指定组移除用户（移回默认组）"""
    if group_id not in group_manager.groups:
        raise HTTPException(status_code=404, detail="用户组不存在")
    if username not in user_manager.users:
        return {"success": False, "message": "用户不存在"}
    if username in ("admin", "guest"):
        return {"success": False, "message": "admin/guest 不可移组"}
    # 移回默认组 (role 同名的组)
    default_group = user_manager.users[username].get("role", "user")
    user_manager.users[username]["group"] = default_group
    user_manager._save_users()
    return {"success": True, "message": "已从组移除"}
