#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.1): RBAC 2.0 API — 权限点/角色列表 + 自定义角色 CRUD (需登录/管理员)"""
from typing import Dict, Any
from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_active_user, get_admin_user
import rbac

router = APIRouter(prefix='/rbac', tags=['RBAC 权限'])


@router.get('/permissions')
async def list_permissions(user: dict = Depends(get_current_active_user)):
    return {'success': True, 'data': {'count': len(rbac.PERMISSIONS), 'permissions': rbac.PERMISSIONS}}


@router.get('/roles')
async def list_roles_api(user: dict = Depends(get_current_active_user)):
    roles = rbac.list_roles()
    return {'success': True, 'data': {'count': len(roles), 'roles': roles}}


@router.get('/my')
async def my_permissions(user: dict = Depends(get_current_active_user)):
    return {'success': True, 'data': {
        'role': user.get('role'),
        'scope': rbac.user_scope(user),
        'permissions': sorted(rbac.user_permissions(user)),
    }}


@router.post('/roles')
async def create_role_api(req: Dict[str, Any], user: dict = Depends(get_admin_user)):
    ok, msg = rbac.create_role(
        req.get('role_id'), name=req.get('name'),
        description=req.get('description', ''),
        permissions=req.get('permissions'), scope=req.get('scope', 'own'),
    )
    if not ok:
        raise HTTPException(status_code=400, detail=msg)
    return {'success': True, 'message': msg}


@router.put('/roles/{role_id}')
async def update_role_api(role_id: str, req: Dict[str, Any], user: dict = Depends(get_admin_user)):
    ok, msg = rbac.update_role(
        role_id, name=req.get('name'), description=req.get('description'),
        permissions=req.get('permissions'), scope=req.get('scope'),
    )
    if not ok:
        raise HTTPException(status_code=400, detail=msg)
    return {'success': True, 'message': msg}


@router.delete('/roles/{role_id}')
async def delete_role_api(role_id: str, user: dict = Depends(get_admin_user)):
    ok, msg = rbac.delete_role(role_id)
    if not ok:
        raise HTTPException(status_code=400, detail=msg)
    return {'success': True, 'message': msg}
