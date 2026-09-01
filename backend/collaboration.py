#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.2): 协作 — 共享自选组 / 评估备注 / 组合可见性 (collaboration.py)

纯逻辑 + JSON 持久 (atomic_write_json), 零依赖可单测:
- 共享自选组: {gid: {name, owner, members: {user: view|edit}, stocks: [{code,name}], created_at}}
- 评估备注: notes[stock_code] = [{user, note, ts}]
- 组合可见性: portfolio_visibility[user] = none|group|all

语义边界:
- owner 拥有组内一切管理权 (增删成员/删组), 成员 role view/edit
- view 成员只读, edit 成员可加/删股票; 非成员 403
- 整文件 RLock + 原子写: 并发写不损坏 (last-write-wins)
- 数据范围: 备注/组合可见性按用户隔离, 组内可见
"""
import os
import threading
from datetime import datetime

from paths import DATA_DIR
from reliability.atomic import atomic_write_json

COLLAB_FILE = os.path.join(DATA_DIR, 'collab.json')

_lock = threading.RLock()

MEMBER_VIEW = 'view'
MEMBER_EDIT = 'edit'

VISIBILITY_NONE = 'none'
VISIBILITY_GROUP = 'group'
VISIBILITY_ALL = 'all'


def _now_iso():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')


def _read():
    """读整表 {groups, notes, portfolio_visibility}; 损坏降级空结构。"""
    try:
        import json
        with open(COLLAB_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        if isinstance(data, dict):
            data.setdefault('groups', {})
            data.setdefault('notes', {})
            data.setdefault('portfolio_visibility', {})
            return data
    except (OSError, ValueError, TypeError):
        pass
    return {'groups': {}, 'notes': {}, 'portfolio_visibility': {}}


def _write(data):
    atomic_write_json(COLLAB_FILE, data)


def _gid():
    import uuid
    return 'G' + uuid.uuid4().hex[:12]


# ─── 共享自选组 ─────────────────────────────────────────────
def create_group(name, owner, description=''):
    """创建共享组 (owner 为创建者)。返回 (ok, gid|message)。"""
    if not name or not str(name).strip():
        return False, '组名不能为空'
    gid = _gid()
    with _lock:
        data = _read()
        data['groups'][gid] = {
            'name': name.strip(), 'description': description or '',
            'owner': owner, 'members': {owner: MEMBER_EDIT},
            'stocks': [], 'created_at': _now_iso(),
        }
        _write(data)
    return True, gid


def _group(gid):
    return _read()['groups'].get(gid)


def list_groups_for(user):
    """用户 owned 或 member 的组。"""
    with _lock:
        gs = _read()['groups']
        return [dict(g, gid=k) for k, g in gs.items() if user in g.get('members', {}) or g.get('owner') == user]


def get_group(gid, user):
    """取组 (须成员/owner), 附我的角色。非成员返回 None。"""
    g = _group(gid)
    if not g:
        return None
    if g.get('owner') == user or user in g.get('members', {}):
        out = dict(g, gid=gid)
        out['my_role'] = MEMBER_EDIT if g.get('owner') == user else g['members'].get(user, MEMBER_VIEW)
        return out
    return None


def member_role(gid, user):
    """组内角色: owner→edit, 成员→view/edit, 非成员→None。"""
    g = _group(gid)
    if not g:
        return None
    if g.get('owner') == user:
        return MEMBER_EDIT
    return g.get('members', {}).get(user)


def add_member(gid, owner, username, role=MEMBER_VIEW):
    """owner 加成员。返回 (ok, msg)。"""
    g = _group(gid)
    if not g:
        return False, '组不存在'
    if g.get('owner') != owner:
        return False, '仅组主可管理成员'
    if role not in (MEMBER_VIEW, MEMBER_EDIT):
        return False, 'role 须为 view/edit'
    with _lock:
        data = _read()
        grp = data['groups'].get(gid)
        if not grp or grp.get('owner') != owner:
            return False, '仅组主可管理成员'
        grp.setdefault('members', {})[username] = role
        _write(data)
    return True, 'ok'


def remove_member(gid, owner, username):
    """owner 移除成员 (不能移除自己)。"""
    g = _group(gid)
    if not g:
        return False, '组不存在'
    if g.get('owner') != owner:
        return False, '仅组主可管理成员'
    if username == owner:
        return False, '不能移除组主'
    with _lock:
        data = _read()
        grp = data['groups'].get(gid)
        if not grp or grp.get('owner') != owner:
            return False, '仅组主可管理成员'
        grp.get('members', {}).pop(username, None)
        _write(data)
    return True, 'ok'


def delete_group(gid, owner):
    """仅 owner 删组。"""
    with _lock:
        data = _read()
        g = data['groups'].get(gid)
        if not g:
            return False, '组不存在'
        if g.get('owner') != owner:
            return False, '仅组主可删除'
        del data['groups'][gid]
        _write(data)
    return True, 'ok'


def add_stock(gid, user, code, name=''):
    """组内 edit 权限加股票。返回 (ok, msg)。"""
    if member_role(gid, user) != MEMBER_EDIT:
        return False, '需要 edit 权限或为组主'
    with _lock:
        data = _read()
        grp = data['groups'].get(gid)
        if not grp:
            return False, '组不存在'
        stocks = grp.setdefault('stocks', [])
        if not any(s.get('code') == code for s in stocks):
            stocks.append({'code': code, 'name': name or '', 'added_by': user, 'ts': _now_iso()})
        _write(data)
    return True, 'ok'


def remove_stock(gid, user, code):
    """组内 edit 权限删股票。"""
    if member_role(gid, user) != MEMBER_EDIT:
        return False, '需要 edit 权限或为组主'
    with _lock:
        data = _read()
        grp = data['groups'].get(gid)
        if not grp:
            return False, '组不存在'
        grp['stocks'] = [s for s in grp.get('stocks', []) if s.get('code') != code]
        _write(data)
    return True, 'ok'


# ─── 评估备注 ───────────────────────────────────────────────
def add_note(user, stock_code, note):
    """给股票加备注 (需 collab.write)。"""
    if not note or not str(note).strip():
        return False, '备注不能为空'
    with _lock:
        data = _read()
        notes = data['notes'].setdefault(stock_code, [])
        notes.append({'user': user, 'note': note.strip(), 'ts': _now_iso()})
        _write(data)
    return True, 'ok'


def list_notes(stock_code):
    """列某股票备注 (倒序)。"""
    with _lock:
        notes = _read()['notes'].get(stock_code, [])
        return list(reversed(notes))


# ─── 组合可见性 ─────────────────────────────────────────────
def set_portfolio_visibility(user, visible_to):
    if visible_to not in (VISIBILITY_NONE, VISIBILITY_GROUP, VISIBILITY_ALL):
        return False, 'visible_to 须为 none/group/all'
    with _lock:
        data = _read()
        data['portfolio_visibility'][user] = visible_to
        _write(data)
    return True, 'ok'


def get_portfolio_visibility(user):
    with _lock:
        return _read()['portfolio_visibility'].get(user, VISIBILITY_NONE)


def reset_collab():
    """测试辅助。"""
    with _lock:
        if os.path.exists(COLLAB_FILE):
            os.remove(COLLAB_FILE)
