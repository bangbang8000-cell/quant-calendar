#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
用户分组管理模块 (v1.9.0)
管理用户组的菜单可见性配置
"""
import json
import os
from typing import Dict, List, Optional
from paths import GROUPS_FILE

# 默认分组配置
DEFAULT_GROUPS = {
    "admin": {
        "name": "管理组",
        "description": "系统管理员组，拥有全部权限",
        "locked": True,
        "visible_menus": {
            "strategies": True, "calendar": True, "ai": True,
            "research": True, "system": True
        },
        "visible_sub_pages": {
            "strategies.overview": True, "strategies.merrill": True,
            "strategies.market": True, "strategies.consensus": True,
            "calendar.daily": True, "calendar.weekly": True,
            "calendar.monthly": True, "calendar.yearly": True,
            "calendar.pool": True,
            "ai.overview": True, "ai.watchlist": True, "ai.history": True,
            "research.quant-research": True, "research.strategy-write": True,
            "research.backtest": True, "research.backtest-history": True,
            "system.status": True, "system.autoeval": True,
            "system.datasource": True, "system.feature": True,
            "system.user": True, "system.about": True
        }
    },
    "user": {
        "name": "用户组",
        "description": "普通用户组，可访问策略/日历/智能评股，不可访问系统配置",
        "locked": True,
        "visible_menus": {
            "strategies": True, "calendar": True, "ai": True,
            "research": False, "system": True
        },
        "visible_sub_pages": {
            "strategies.overview": True, "strategies.merrill": True,
            "strategies.market": True, "strategies.consensus": True,
            "calendar.daily": True, "calendar.weekly": True,
            "calendar.monthly": True, "calendar.yearly": True,
            "calendar.pool": True,
            "ai.overview": True, "ai.watchlist": True, "ai.history": True,
            "system.status": True, "system.about": True
        }
    },
    "guest": {
        "name": "访客组",
        "description": "访客组，仅可查看策略总览和量化日历",
        "locked": True,
        "visible_menus": {
            "strategies": True, "calendar": True, "ai": False,
            "research": False, "system": True
        },
        "visible_sub_pages": {
            "strategies.overview": True,
            "calendar.daily": True, "calendar.weekly": True,
            "calendar.monthly": True, "calendar.pool": True,
            "system.status": True, "system.about": True
        }
    }
}


class GroupManager:
    """用户组管理器"""

    def __init__(self):
        self.groups = {}
        self._load_groups()

    def _load_groups(self):
        if os.path.exists(GROUPS_FILE):
            with open(GROUPS_FILE, 'r', encoding='utf-8') as f:
                self.groups = json.load(f)
        else:
            self.groups = dict(DEFAULT_GROUPS)
            self._save_groups()

    def _save_groups(self):
        os.makedirs(os.path.dirname(GROUPS_FILE), exist_ok=True)
        with open(GROUPS_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.groups, f, ensure_ascii=False, indent=2)

    def list_groups(self) -> Dict:
        """获取所有分组"""
        return self.groups

    def get_group(self, group_id: str) -> Optional[Dict]:
        """获取单个分组"""
        return self.groups.get(group_id)

    def create_group(self, group_id: str, name: str, description: str = "",
                     visible_menus: Dict = None, visible_sub_pages: Dict = None) -> bool:
        """创建新分组"""
        if group_id in self.groups:
            return False
        self.groups[group_id] = {
            "name": name,
            "description": description,
            "locked": False,
            "visible_menus": visible_menus or {},
            "visible_sub_pages": visible_sub_pages or {}
        }
        self._save_groups()
        return True

    def update_group(self, group_id: str, updates: Dict) -> bool:
        """更新分组配置"""
        if group_id not in self.groups:
            return False
        for key in ("name", "description", "visible_menus", "visible_sub_pages"):
            if key in updates:
                self.groups[group_id][key] = updates[key]
        self._save_groups()
        return True

    def delete_group(self, group_id: str) -> bool:
        """删除分组（locked 组不可删）"""
        if group_id not in self.groups:
            return False
        if self.groups[group_id].get("locked", False):
            return False
        del self.groups[group_id]
        self._save_groups()
        return True


# 模块级单例
group_manager = GroupManager()
