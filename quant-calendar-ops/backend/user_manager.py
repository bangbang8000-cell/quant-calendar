#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
用户管理模块
"""
import json
import os
from typing import List, Dict, Optional
import bcrypt

from paths import USERS_FILE as DATA_FILE

# 四套主题配置
THEMES = {
    "tech-blue": {
        "name": "专业蓝",
        "primary": "#1d4ed8",
        "secondary": "#60a5fa",
        "gradient": "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #60a5fa 100%)"
    },
    "rose-red": {
        "name": "玫瑰红",
        "primary": "#E63946",
        "secondary": "#C1121F",
        "gradient": "linear-gradient(135deg, #780000 0%, #E63946 50%, #FF6B6B 100%)"
    },
    "vibrant-orange": {
        "name": "土豪金",
        "primary": "#D4A843",
        "secondary": "#F0C75E",
        "gradient": "linear-gradient(135deg, #B8860B 0%, #D4A843 50%, #F0C75E 100%)"
    },

    "classic-white": {
        "name": "经典白（蓝）",
        "primary": "#2563eb",
        "secondary": "#60a5fa",
        "gradient": "linear-gradient(135deg, #ffffff 45%, #2563eb 55%)"
    },
    "classic-red": {
        "name": "经典白（红）",
        "primary": "#dc2626",
        "secondary": "#f87171",
        "gradient": "linear-gradient(135deg, #ffffff 45%, #dc2626 55%)"
    },
    "classic-gold": {
        "name": "经典白（金）",
        "primary": "#b8922a",
        "secondary": "#e6c450",
        "gradient": "linear-gradient(135deg, #ffffff 45%, #b8922a 55%)"
    },

}


class UserManager:
    def __init__(self):
        self.users = {}
        self._load_users()

    def _load_users(self):
        """加载用户数据"""
        if os.path.exists(DATA_FILE):
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                self.users = json.load(f)
            # v1.7.5: 确保访客账户始终存在
            if "guest" not in self.users:
                self.users["guest"] = {
                    "username": "guest",
                    "password": self._hash_password("guest"),
                    "role": "guest",
                    "theme": "tech-blue",
                    "enabled": True,
                    "locked": True,
                    "created_at": "2026-05-15"
                }
                self._save_users()
        else:
            # 初始化默认用户
            self.users = {
                "admin": {
                    "username": "admin",
                    "password": self._hash_password("admin"),
                    "role": "admin",
                    "theme": "tech-blue",
                    "created_at": "2026-01-01"
                }
            }
            # v1.7.5: 自动创建访客账户
            self.users["guest"] = {
                "username": "guest",
                "password": self._hash_password("guest"),
                "role": "guest",
                "theme": "tech-blue",
                "enabled": True,
                "locked": True,
                "created_at": "2026-05-15"
            }
            self._save_users()

    def _save_users(self):
        """保存用户数据"""
        os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.users, f, ensure_ascii=False, indent=2)

    def _hash_password(self, password: str) -> str:
        """密码哈希 (使用 bcrypt 强加密)"""
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
        return hashed.decode('utf-8')

    def verify_password(self, username: str, password: str) -> bool:
        """验证密码 (使用 bcrypt 安全验证)"""
        if username not in self.users:
            return False
        stored_hash = self.users[username]["password"]
        # 兼容旧的 MD5 哈希（用于迁移）
        if len(stored_hash) == 32:  # MD5 长度
            import hashlib
            if stored_hash == hashlib.md5(password.encode()).hexdigest():
                # 迁移到 bcrypt
                self.users[username]["password"] = self._hash_password(password)
                self._save_users()
                return True
            return False
        # 使用 bcrypt 验证
        try:
            return bcrypt.checkpw(password.encode('utf-8'), stored_hash.encode('utf-8'))
        except Exception:
            return False

    def get_user(self, username: str) -> Optional[Dict]:
        """获取用户信息"""
        if username in self.users:
            user = self.users[username].copy()
            del user["password"]
            return user
        return None

    def list_users(self) -> List[Dict]:
        """列出所有用户（不含密码）"""
        users = []
        for u in self.users.values():
            user = u.copy()
            del user["password"]
            users.append(user)
        return users

    def add_user(self, username: str, password: str, role: str = "user", theme: str = "tech-blue", group: str = None) -> bool:
        """添加用户"""
        if username in self.users:
            return False
        if theme not in THEMES:
            theme = "tech-blue"
        self.users[username] = {
            "username": username,
            "password": self._hash_password(password),
            "role": role,
            "theme": theme,
            "created_at": "2026-05-15"
        }
        # group 字段：默认与 role 同名
        if group:
            self.users[username]["group"] = group
        else:
            self.users[username]["group"] = role
        self._save_users()
        return True

    def update_user(self, username: str, password: str = None, role: str = None, theme: str = None, group: str = None) -> bool:
        """更新用户信息"""
        if username not in self.users:
            return False
        # v1.7.5: guest 角色不可变更
        if username == "guest" and role and role != "guest":
            return False
        if password:
            self.users[username]["password"] = self._hash_password(password)
        if role:
            self.users[username]["role"] = role
        if theme:
            self.users[username]["theme"] = theme
        if group:
            self.users[username]["group"] = group
        self._save_users()
        return True

    def delete_user(self, username: str) -> bool:
        """删除用户"""
        if username not in self.users or username in ("admin", "guest"):
            return False  # 不允许删除admin/guest
        del self.users[username]
        self._save_users()
        return True

    def get_themes(self) -> Dict:
        """获取所有主题配置"""
        return THEMES


user_manager = UserManager()
