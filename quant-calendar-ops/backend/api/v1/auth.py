#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
用户认证与权限 API 路由
"""
from fastapi import APIRouter, Depends, HTTPException, status, Request
from typing import Dict, Any

from auth import login_user, get_current_active_user, get_admin_user, get_non_guest_user
from rate_limit import check_login_rate_limit
from user_manager import user_manager

router = APIRouter(tags=["用户认证"])


@router.post("/login")
async def login(request: Request, req: Dict[str, str]):
    """用户登录 - 返回 JWT Token"""
    # 登录接口更严格的速率限制
    client_ip = request.client.host if request.client else "unknown"
    if not check_login_rate_limit(client_ip):
        raise HTTPException(
            status_code=429,
            detail="登录尝试过于频繁，请1分钟后再试"
        )
    
    token = login_user(req.get("username", ""), req.get("password", ""))
    if token:
        try:
            from .user_config import init_user_config
            init_user_config(req.get("username"))
        except Exception:
            pass
        return {
            "success": True,
            "data": token,
            "user": user_manager.get_user(req.get("username"))
        }
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="用户名或密码错误",
        headers={"WWW-Authenticate": "Bearer"},
    )


@router.get("/users/me")
async def read_users_me(current_user: Dict = Depends(get_current_active_user)):
    """获取当前登录用户信息"""
    return {"success": True, "user": current_user}


@router.get("/users")
async def list_users(_: Dict = Depends(get_admin_user)):
    """获取用户列表（仅管理员可访问）"""
    return {
        "success": True,
        "users": [
            {
                "username": u.get("username"),
                "role": u.get("role", "user"),
                "theme": u.get("theme", "tech-blue"),
                "created_at": u.get("created_at", ""),
                "last_login_at": u.get("last_login_at", ""),
                "login_count": u.get("login_count", 0),
                "enabled": u.get("enabled", True),
                "locked": u.get("locked", False),
                "group": u.get("group", u.get("role", "user"))
            }
            for u in user_manager.users.values()
        ]
    }


@router.post("/users")
async def add_user(req: Dict[str, Any], _: Dict = Depends(get_admin_user)):
    """添加用户（仅管理员可访问）"""
    username = req.get("username")
    password = req.get("password")
    role = req.get("role", "user")
    theme = req.get("theme", "tech-blue")
    group = req.get("group")
    
    if not password:
        return {"success": False, "message": "密码不能为空"}
    
    success = user_manager.add_user(username, password, role, theme, group)
    if success:
        try:
            from .user_config import init_user_config
            init_user_config(username)
        except Exception:
            pass
    return {"success": success, "message": "添加成功" if success else "用户名已存在"}


@router.put("/users/{username}")
async def update_user(
    username: str, 
    req: Dict[str, Any], 
    current_user: Dict = Depends(get_current_active_user)
):
    """更新用户（用户只能修改自己信息，管理员可修改所有）"""
    # 非管理员只能修改自己的信息
    if current_user.get("role") != "admin" and current_user.get("username") != username:
        raise HTTPException(status_code=403, detail="无权修改其他用户信息")
    
    # 非管理员不能修改角色
    role = req.get("role")
    if current_user.get("role") != "admin" and role:
        role = current_user.get("role", "user")
    
    success = user_manager.update_user(
        username, 
        req.get("password"), 
        role, 
        req.get("theme"),
        req.get("group")
    )
    return {"success": success, "message": "更新成功" if success else "用户不存在"}


@router.delete("/users/{username}")
async def delete_user(username: str, _: Dict = Depends(get_admin_user)):
    """删除用户（仅管理员可访问）"""
    success = user_manager.delete_user(username)
    return {"success": success, "message": "删除成功" if success else "无法删除admin或用户不存在"}


@router.get("/themes")
async def get_themes():
    """获取主题列表"""
    return {"themes": user_manager.get_themes()}


# v1.3.0: 增强用户管理 API
@router.post("/users/{username}/reset-password")
async def reset_user_password(
    username: str,
    req: Dict[str, Any],
    current_user: Dict = Depends(get_admin_user)
):
    """管理员重置用户密码"""
    if username not in user_manager.users:
        return {"success": False, "message": "用户不存在"}
    
    if username == "admin" and current_user.get("username") != "admin":
        return {"success": False, "message": "普通管理员不能重置 admin 密码"}
    
    new_password = req.get('new_password', '')
    if len(new_password) < 6:
        return {"success": False, "message": "密码长度至少6位"}
    
    user_manager.users[username]["password"] = user_manager._hash_password(new_password)
    user_manager._save_users()
    
    return {"success": True, "message": "密码重置成功"}


# ===== 修改密码（需要旧密码验证）=====
@router.post("/auth/change-password")
async def change_password(
    req: Dict[str, str],
    current_user: Dict = Depends(get_non_guest_user)
):
    """当前登录用户修改密码"""
    old_password = req.get("old_password", "")
    new_password = req.get("new_password", "")
    
    if not user_manager.verify_password(current_user["username"], old_password):
        raise HTTPException(status_code=400, detail="当前密码不正确")
    
    if len(new_password) < 3:
        raise HTTPException(status_code=400, detail="新密码至少3位")
    
    user_manager.users[current_user["username"]]["password"] = user_manager._hash_password(new_password)
    user_manager._save_users()
    
    return {"success": True, "message": "密码修改成功"}

@router.post("/users/{username}/toggle-enabled")
async def toggle_user_enabled(
    username: str,
    req: Dict[str, Any],
    _: Dict = Depends(get_admin_user)
):
    """切换用户启用/禁用状态"""
    if username not in user_manager.users:
        return {"success": False, "message": "用户不存在"}
    
    if username == "admin":
        return {"success": False, "message": "不能禁用 admin 账号"}
    
    enabled = req.get('enabled', True)
    user_manager.users[username]["enabled"] = enabled
    user_manager._save_users()
    
    return {
        "success": True, 
        "message": f"账号已{'启用' if enabled else '禁用'}",
        "enabled": enabled
    }
