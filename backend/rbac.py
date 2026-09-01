#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.1): RBAC 2.0 — 权限点 + 内置/自定义角色 + 数据范围 (rbac.py)

纯逻辑 + JSON 持久 (atomic_write_json), 零依赖可单测:
- PERMISSIONS: 权限点注册表 (代码即契约)
- BUILTIN_ROLES: admin/analyst/user/viewer/guest (guest 空权限 = deny-by-default)
- 自定义角色存 data/roles.json (ROLES_FILE 可 monkeypatch); 内置角色不可删改
- role_permissions / user_permissions / user_scope
- require_permission / require_role: FastAPI 依赖, 无权即 403

语义边界:
- 未知角色 → 空权限 (deny-by-default, 永不继承宽权限)
- 自定义角色与内置重名 → 拒绝创建 (内置保护)
- 自定义角色引用未注册权限点 → 拒绝 (权限点白名单)
- scope: all=全数据, own=仅本人数据
"""
import os
import threading

from paths import DATA_DIR
from reliability.atomic import atomic_write_json

ROLES_FILE = os.path.join(DATA_DIR, 'roles.json')

_lock = threading.RLock()

# ─── 权限点注册表 (代码即契约) ─────────────────────────────
PERMISSIONS = {
    'watchlist.read': '读取自选股',
    'watchlist.write': '维护自选股',
    'eval.read': '读取评估结果',
    'eval.write': '发起/写入评估',
    'report.read': '读取报表',
    'data.refresh': '刷新数据源',
    'group.admin': '管理用户组',
    'rbac.admin': '管理角色与权限',
    'collab.write': '协作共享写入',
    'collab.read': '协作共享读取',
    'portfolio.read': '读取组合',
}

ALL_PERMS = set(PERMISSIONS.keys())

BUILTIN_ROLES = {
    'admin': {
        'name': '管理员', 'description': '全部权限, 全数据范围',
        'scope': 'all', 'permissions': sorted(ALL_PERMS),
    },
    'analyst': {
        'name': '分析师', 'description': '评估/自选/报表读写, 全数据范围',
        'scope': 'all',
        'permissions': sorted({'watchlist.read', 'watchlist.write', 'eval.read', 'eval.write',
                               'report.read', 'portfolio.read', 'collab.read', 'collab.write'}),
    },
    'user': {
        'name': '普通用户', 'description': '自选/评估只读+自选维护, 仅本人数据',
        'scope': 'own',
        'permissions': sorted({'watchlist.read', 'watchlist.write', 'eval.read', 'report.read', 'collab.read'}),
    },
    'viewer': {
        'name': '只读访客', 'description': '自选/评估只读, 仅本人数据',
        'scope': 'own',
        'permissions': sorted({'watchlist.read', 'eval.read'}),
    },
    'guest': {
        'name': '访客', 'description': '无权限 (deny-by-default)',
        'scope': 'own', 'permissions': [],
    },
}


def _read_custom_roles():
    """读自定义角色 {role_id: {name,description,scope,permissions}}。损坏降级空。"""
    try:
        import json
        with open(ROLES_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data if isinstance(data, dict) else {}
    except (OSError, ValueError, TypeError):
        return {}


def _write_custom_roles(data):
    atomic_write_json(ROLES_FILE, data)


def list_roles():
    """合并内置+自定义角色列表。"""
    with _lock:
        out = {rid: dict(v) for rid, v in BUILTIN_ROLES.items()}
        out.update(dict(_read_custom_roles()))
        return out


def get_role(role_id):
    return list_roles().get(role_id)


def role_permissions(role_id):
    """角色权限集合; 未知/guest → 空 (deny-by-default)。"""
    role = get_role(role_id)
    if not role:
        return set()
    return set(role.get('permissions') or [])


def role_scope(role_id):
    role = get_role(role_id)
    return (role or {}).get('scope', 'own')


def user_permissions(user):
    """用户 (auth user dict) → 权限集合。"""
    return role_permissions((user or {}).get('role'))


def user_scope(user):
    return role_scope((user or {}).get('role'))


def has_permission(user, perm):
    return perm in user_permissions(user)


def create_role(role_id, name=None, description='', permissions=None, scope='own'):
    """创建自定义角色。返回 (ok, message)。内置重名/未知权限点拒绝。"""
    if not role_id or not str(role_id).strip():
        return False, '角色 ID 不能为空'
    if role_id in BUILTIN_ROLES:
        return False, '内置角色不可覆盖'
    perms = list(permissions or [])
    unknown = [p for p in perms if p not in PERMISSIONS]
    if unknown:
        return False, '未知权限点: ' + ','.join(unknown)
    if scope not in ('all', 'own'):
        return False, 'scope 必须为 all 或 own'
    with _lock:
        roles = _read_custom_roles()
        if role_id in roles:
            return False, '角色已存在'
        roles[role_id] = {
            'name': name or role_id, 'description': description or '',
            'scope': scope, 'permissions': sorted(perms),
        }
        _write_custom_roles(roles)
    return True, 'ok'


def update_role(role_id, name=None, description=None, permissions=None, scope=None):
    """更新自定义角色 (内置不可改)。"""
    if role_id in BUILTIN_ROLES:
        return False, '内置角色不可修改'
    with _lock:
        roles = _read_custom_roles()
        if role_id not in roles:
            return False, '角色不存在'
        role = roles[role_id]
        if name is not None:
            role['name'] = name or role_id
        if description is not None:
            role['description'] = description or ''
        if permissions is not None:
            unknown = [p for p in permissions if p not in PERMISSIONS]
            if unknown:
                return False, '未知权限点: ' + ','.join(unknown)
            role['permissions'] = sorted(permissions)
        if scope is not None:
            if scope not in ('all', 'own'):
                return False, 'scope 必须为 all 或 own'
            role['scope'] = scope
        _write_custom_roles(roles)
    return True, 'ok'


def delete_role(role_id):
    """删除自定义角色 (内置不可删)。"""
    if role_id in BUILTIN_ROLES:
        return False, '内置角色不可删除'
    with _lock:
        roles = _read_custom_roles()
        if role_id not in roles:
            return False, '角色不存在'
        del roles[role_id]
        _write_custom_roles(roles)
    return True, 'ok'


def reset_roles():
    """测试辅助: 清空自定义角色。"""
    with _lock:
        if os.path.exists(ROLES_FILE):
            os.remove(ROLES_FILE)


# ─── FastAPI 依赖 ───────────────────────────────────────────
def require_permission(perm):
    """构造依赖: 当前用户须持有 perm, 否则 403。"""
    from fastapi import Depends, HTTPException, status
    from auth import get_current_active_user

    def _dep(user: dict = Depends(get_current_active_user)) -> dict:
        if not has_permission(user, perm):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail='权限不足: 需要 %s' % perm,
            )
        return user

    return _dep


def require_role(role_id):
    """构造依赖: 当前用户须为指定角色, 否则 403。"""
    from fastapi import Depends, HTTPException, status
    from auth import get_current_active_user

    def _dep(user: dict = Depends(get_current_active_user)) -> dict:
        if (user or {}).get('role') != role_id:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='需要角色: %s' % role_id)
        return user

    return _dep
