#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""研究看板接口 (v7.1.0 / B5.4)

- GET  /api/research/industry-strength          行业强度矩阵（缓存优先，可 ?refresh=1）
- GET  /api/research/industry-export           导出单文件离线 HTML（返回文件流）
- POST /api/research/industry-export           同上，导出到 data/reports 并返回路径（admin）
"""

import logging
import os
from typing import Optional

from fastapi import APIRouter, Depends
from fastapi.responses import HTMLResponse

from auth import get_admin_user, get_current_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/research', tags=['research'])


@router.get('/industry-strength')
async def industry_strength(refresh: int = 0, limit: Optional[int] = None,
                            user: Optional[dict] = Depends(get_current_user)):
    """行业强度作战矩阵。默认走 24h 缓存；`refresh=1` 触发刷新（有配额成本）。"""
    import industry_strength as ist
    try:
        if refresh:
            out = ist.refresh(limit=limit)
        else:
            out = ist.get_matrix(auto_refresh=True, limit=limit)
    except Exception as e:  # noqa: BLE001 — 取数异常如实降级, 不 500
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120])}
    return {'success': True, **out}


@router.get('/industry-export')
async def industry_export(user: Optional[dict] = Depends(get_current_user)):
    """导出离线单文件 HTML（直接下载）。不合格时不返回半成品。"""
    import industry_strength as ist
    import research_export as rx
    try:
        matrix = ist.get_matrix(auto_refresh=False)
        if not matrix or not matrix.get('available'):
            return {'success': False, 'message': '暂无可用矩阵数据（请先刷新）'}
        doc, _footer = rx.render_industry_matrix(matrix)
        check = rx.dt.check_export_text(doc)
        if not check['ok']:
            return {'success': False, 'message': '导出物口径检查不通过: %r' % check}
        return HTMLResponse(content=doc, headers={
            'Content-Disposition': 'attachment; filename="industry-strength.html"'})
    except Exception as e:  # noqa: BLE001
        return {'success': False, 'message': '导出失败: %s' % str(e)[:160]}


@router.post('/industry-export')
async def industry_export_to_disk(_: dict = Depends(get_admin_user)):
    """导出到 data/reports/（admin），返回路径与字节数。"""
    import industry_strength as ist
    import research_export as rx
    from paths import DATA_DIR
    try:
        matrix = ist.get_matrix(auto_refresh=False)
        if not matrix or not matrix.get('available'):
            return {'success': False, 'message': '暂无可用矩阵数据（请先刷新）'}
        out_dir = os.path.join(DATA_DIR, 'reports')
        path = os.path.join(out_dir, 'industry-strength-%s.html'
                            % __import__('time').strftime('%Y%m%d'))
        res = rx.export_industry_matrix(matrix, path)
        return {'success': True, **res}
    except Exception as e:  # noqa: BLE001
        return {'success': False, 'message': '导出失败: %s' % str(e)[:160]}
