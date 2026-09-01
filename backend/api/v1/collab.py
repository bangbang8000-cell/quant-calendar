#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.2): 协作 API — 共享组/成员/股票 + 评估备注 + 组合可见性 (RBAC 权限门控)"""
from typing import Dict, Any
from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_active_user
import rbac
from rbac import require_permission
import collaboration as C

router = APIRouter(prefix='/collab', tags=['协作'])

_username = lambda user: user.get('username') or user.get('sub', '')


# ─── 共享组 ────────────────────────────────────────────────
@router.post('/groups')
async def create_group(req: Dict[str, Any], user: dict = Depends(require_permission('collab.write'))):
    ok, res = C.create_group(req.get('name'), _username(user), req.get('description', ''))
    if not ok:
        raise HTTPException(status_code=400, detail=res)
    return {'success': True, 'data': {'gid': res}}


@router.get('/groups/my')
async def my_groups(user: dict = Depends(require_permission('collab.read'))):
    groups = C.list_groups_for(_username(user))
    return {'success': True, 'data': {'count': len(groups), 'groups': groups}}


@router.get('/groups/{gid}')
async def get_group_api(gid: str, user: dict = Depends(require_permission('collab.read'))):
    g = C.get_group(gid, _username(user))
    if not g:
        raise HTTPException(status_code=404, detail='组不存在或无权访问')
    return {'success': True, 'data': g}


@router.delete('/groups/{gid}')
async def delete_group_api(gid: str, user: dict = Depends(require_permission('collab.write'))):
    ok, msg = C.delete_group(gid, _username(user))
    if not ok:
        raise HTTPException(status_code=403 if '仅组主' in msg else 404, detail=msg)
    return {'success': True, 'message': msg}


@router.post('/groups/{gid}/members')
async def add_member_api(gid: str, req: Dict[str, Any], user: dict = Depends(require_permission('collab.write'))):
    ok, msg = C.add_member(gid, _username(user), req.get('username'), req.get('role', 'view'))
    if not ok:
        raise HTTPException(status_code=403 if '仅组主' in msg else 400, detail=msg)
    return {'success': True, 'message': msg}


@router.delete('/groups/{gid}/members/{username}')
async def remove_member_api(gid: str, username: str, user: dict = Depends(require_permission('collab.write'))):
    ok, msg = C.remove_member(gid, _username(user), username)
    if not ok:
        raise HTTPException(status_code=403 if '仅组主' in msg else 400, detail=msg)
    return {'success': True, 'message': msg}


@router.post('/groups/{gid}/stocks')
async def add_stock_api(gid: str, req: Dict[str, Any], user: dict = Depends(require_permission('collab.read'))):
    # 组内 edit 校验在存储层; read 权限 + 组内角色双重门控
    ok, msg = C.add_stock(gid, _username(user), req.get('code'), req.get('name', ''))
    if not ok:
        raise HTTPException(status_code=403 if 'edit' in msg else 404, detail=msg)
    return {'success': True, 'message': msg}


@router.delete('/groups/{gid}/stocks/{code}')
async def remove_stock_api(gid: str, code: str, user: dict = Depends(require_permission('collab.read'))):
    ok, msg = C.remove_stock(gid, _username(user), code)
    if not ok:
        raise HTTPException(status_code=403 if 'edit' in msg else 404, detail=msg)
    return {'success': True, 'message': msg}


# ─── 评估备注 ──────────────────────────────────────────────
@router.post('/notes/{stock_code}')
async def add_note_api(stock_code: str, req: Dict[str, Any], user: dict = Depends(require_permission('collab.write'))):
    ok, msg = C.add_note(_username(user), stock_code, req.get('note'))
    if not ok:
        raise HTTPException(status_code=400, detail=msg)
    return {'success': True, 'message': msg}


@router.get('/notes/{stock_code}')
async def list_notes_api(stock_code: str, user: dict = Depends(require_permission('collab.read'))):
    notes = C.list_notes(stock_code)
    return {'success': True, 'data': {'count': len(notes), 'notes': notes}}


# ─── 组合可见性 ────────────────────────────────────────────
@router.get('/portfolio-visibility')
async def get_pv(user: dict = Depends(require_permission('collab.read'))):
    return {'success': True, 'data': {'visible_to': C.get_portfolio_visibility(_username(user))}}


@router.put('/portfolio-visibility')
async def set_pv(req: Dict[str, Any], user: dict = Depends(require_permission('collab.write'))):
    ok, msg = C.set_portfolio_visibility(_username(user), req.get('visible_to'))
    if not ok:
        raise HTTPException(status_code=400, detail=msg)
    return {'success': True, 'message': msg}