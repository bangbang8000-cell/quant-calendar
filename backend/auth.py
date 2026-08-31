#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
JWT 认证模块
提供 API 接口保护和用户身份验证
"""
from datetime import datetime, timedelta
from typing import Optional, Dict, Any
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from pydantic import BaseModel

from config import settings
from user_manager import user_manager

# OAuth2 密码授权流程
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/login", auto_error=False)

# Pydantic 模型
class Token(BaseModel):
    """Token 响应模型"""
    access_token: str
    token_type: str
    username: str
    role: str
    expires_at: float


class TokenData(BaseModel):
    """Token 数据模型"""
    username: Optional[str] = None
    role: Optional[str] = None


def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    """创建访问令牌
    
    Args:
        data: 要编码的数据
        expires_delta: 过期时间增量
        
    Returns:
        JWT 令牌字符串
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt


async def get_current_user(token: Optional[str] = Depends(oauth2_scheme)) -> Optional[Dict[str, Any]]:
    """获取当前登录用户（可选，未登录返回 None）
    
    用于允许匿名访问但需要识别登录用户的接口
    """
    if token is None:
        return None
    
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="无法验证凭据",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            return None
        token_data = TokenData(username=username, role=payload.get("role"))
    except JWTError:
        return None
    
    user = user_manager.get_user(token_data.username)
    if user is None:
        return None
    
    return user


async def get_current_active_user(current_user: Optional[Dict[str, Any]] = Depends(get_current_user)) -> Dict[str, Any]:
    """获取当前登录用户（必须登录）
    
    用于需要认证的接口
    """
    if current_user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="未登录或登录已过期",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not current_user.get("enabled", True):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="账号已被禁用，请联系管理员",
        )
    return current_user


async def get_admin_user(current_user: Dict[str, Any] = Depends(get_current_active_user)) -> Dict[str, Any]:
    """获取管理员用户
    
    用于需要管理员权限的接口
    """
    if current_user.get("role") != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="需要管理员权限",
        )
    return current_user


async def get_non_guest_user(current_user: Dict[str, Any] = Depends(get_current_active_user)) -> Dict[str, Any]:
    """禁止访客访问
    
    用于需要非访客权限的接口 (user/admin)
    """
    if current_user.get("role") == "guest":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="访客账户无此操作权限",
        )
    return current_user


def login_user(username: str, password: str) -> Optional[Token]:
    """用户登录，生成 Token
    
    Args:
        username: 用户名
        password: 密码
        
    Returns:
        Token 对象或 None（验证失败）
    """
    if not user_manager.verify_password(username, password):
        return None
    
    user = user_manager.get_user(username)
    if not user:
        return None
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": username, "role": user.get("role", "user")},
        expires_delta=access_token_expires
    )
    
    expires_at = (datetime.utcnow() + access_token_expires).timestamp()
    
    return Token(
        access_token=access_token,
        token_type="bearer",
        username=username,
        role=user.get("role", "user"),
        expires_at=expires_at
    )
