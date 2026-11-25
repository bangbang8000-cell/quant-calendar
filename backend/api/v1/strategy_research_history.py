#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略研究 API 路由 — 6.3.0 (T-6.3.0.4) 拆出: 研究历史 (5.1.0 T-5.1.3)

实验列表 / 导出 CSV / 详情 / 对比 / 删除 / 编辑。由 strategy_research.py 以
include_router 挂载, 路径 (/strategies/research-history*) 与注册顺序保持不变。
注意: /research-history/export 必须定义在 /research-history/{eid} 之前 (本模块内已保证)。
"""
import json
import logging
import re
from typing import Any, Dict, Optional

from fastapi import APIRouter, Depends, HTTPException, Response

from auth import get_non_guest_user

logger = logging.getLogger(__name__)

router = APIRouter(tags=['策略研究'])


def _subject_extras(exp):
    """v7.22 (FR-5): 读取端补 subject_codes/subject_names，不改历史 subject 语义。

    代码来源：subject 内的 6 位代码 + timing_matrix.result.rows[].symbol（subject 只保留前 5 个）。
    名称优先取 result.rows[].name，缺失时查本地名称库；查不到不写入（前端显示 —）。
    """
    subject = str(exp.get('subject') or '')
    codes = []
    for part in subject.split(','):
        code = part.strip().removesuffix('...').strip()
        if re.fullmatch(r'\d{6}\.(SH|SZ|BJ)', code) and code not in codes:
            codes.append(code)
    result = exp.get('result') if isinstance(exp.get('result'), dict) else {}
    rows = [r for r in (result.get('rows') or []) if isinstance(r, dict)]
    for row in rows:
        code = str(row.get('symbol') or row.get('code') or '')
        if re.fullmatch(r'\d{6}\.(SH|SZ|BJ)', code) and code not in codes:
            codes.append(code)
    try:
        from .strategy_research_support import symbol_names
        names = symbol_names(codes)
    except Exception:  # noqa: BLE001 — 名称缺失不应阻断历史列表
        names = {}
    for row in rows:
        code = str(row.get('symbol') or row.get('code') or '')
        nm = str(row.get('name') or '').strip()
        if code and nm and nm != code:
            names[code] = nm
    return codes, names


def _with_subject_display(item):
    codes, names = _subject_extras(item)
    item['subject_codes'] = codes
    item['subject_names'] = names
    return item


# ==================== 5.1.0 (T-5.1.3): 研究历史 API ====================
# 实验列表/详情/对比, 供研究台「实验面板」前端使用 (FR-5.1.0.4).


@router.get('/research-history')
async def research_history_list(limit: int = 50, type: Optional[str] = None,
                                _: Dict = Depends(get_non_guest_user)):
    """研究实验列表: 按创建时间倒序, 可按 type 过滤 (factor_ic|layer|sweep|backtest|stability)。"""
    from research_store import list_experiments
    try:
        items = list_experiments(type=type or None, limit=limit)
    except Exception as e:
        logger.exception('研究历史列表失败')
        raise HTTPException(status_code=500, detail=f'研究历史列表失败: {e}')
    items = [_with_subject_display(dict(x)) for x in items]
    return {'items': items, 'count': len(items)}


@router.get('/research-history/export')
async def research_history_export(limit: int = 500, type: Optional[str] = None,
                                  _: Dict = Depends(get_non_guest_user)):
    """研究实验导出 CSV (T-5.1.5): 列表字段 + 关键指标一行一条。

    表头: id,type,subject,created_at,app_version,date_range,
           ic_mean,icir,win_rate,annual_return,max_drawdown,sharpe_ratio,
           monotonic,spread,best_param
    无记录也返回表头。前端 Blob 下载。注意: 必须定义在 /research-history/{eid} 之前,
    否则 export 会被路径参数 {eid} 捕获 (FastAPI 按注册顺序匹配)。
    """
    from research_store import list_experiments
    import csv
    import io
    try:
        items = list_experiments(type=type or None, limit=limit)
    except Exception as e:
        logger.exception('研究历史导出失败')
        raise HTTPException(status_code=500, detail=f'研究历史导出失败: {e}')
    buf = io.StringIO()
    writer = csv.writer(buf)
    writer.writerow(['id', 'type', 'subject', 'created_at', 'app_version',
                     'date_range', 'ic_mean', 'icir', 'win_rate',
                     'annual_return', 'max_drawdown', 'sharpe_ratio',
                     'monotonic', 'spread', 'best_param'])
    for exp in items:
        s = exp.get('summary') or {}
        writer.writerow([
            exp.get('id', ''), exp.get('type', ''), exp.get('subject', ''),
            exp.get('created_at', ''), exp.get('app_version', ''),
            '|'.join(exp.get('date_range') or []),
            s.get('ic_mean', ''), s.get('icir', ''), s.get('win_rate', ''),
            s.get('annual_return', ''), s.get('max_drawdown', ''),
            s.get('sharpe_ratio', ''),
            '1' if s.get('monotonic') else ('0' if s.get('monotonic') is not None else ''),
            s.get('spread', ''),
            (s.get('best_param') and json.dumps(s.get('best_param'), ensure_ascii=False)) or '',
        ])
    return Response(
        content='\ufeff' + buf.getvalue(),  # BOM 让 Excel 正确识别 UTF-8 中文
        media_type='text/csv; charset=utf-8',
        headers={'Content-Disposition': 'attachment; filename="research_history.csv"'})



@router.get('/research-history/{eid}')
async def research_history_detail(eid: str,
                                  _: Dict = Depends(get_non_guest_user)):
    """研究实验详情: 完整记录 (含 result, 可复现)。"""
    from research_store import get_experiment
    exp = get_experiment(eid)
    if exp is None:
        raise HTTPException(status_code=404, detail=f'实验 {eid} 不存在')
    return {'experiment': exp}


@router.post('/research-history/compare')
async def research_history_compare(body: Dict[str, Any],
                                   _: Dict = Depends(get_non_guest_user)):
    """研究实验对比: body {ids: [eid, ...]} → 关键指标并列 (subject/summary/created_at)。"""
    from research_store import compare_experiments
    ids = (body or {}).get('ids') or []
    if not ids:
        raise HTTPException(status_code=400, detail='ids 不能为空')
    if len(ids) > 10:
        raise HTTPException(status_code=400, detail='一次最多对比 10 个实验')
    try:
        rows = compare_experiments(ids)
    except Exception as e:
        logger.exception('研究实验对比失败')
        raise HTTPException(status_code=500, detail=f'研究实验对比失败: {e}')
    rows = [_with_subject_display(dict(x)) for x in rows]
    return {'items': rows, 'count': len(rows)}


@router.delete('/research-history/{eid}')
async def research_history_delete(eid: str,
                                  _: Dict = Depends(get_non_guest_user)):
    """删除一条研究实验。"""
    from research_store import delete_experiment
    ok = delete_experiment(eid)
    if not ok:
        raise HTTPException(status_code=404, detail=f'实验 {eid} 不存在')
    return {'deleted': True, 'id': eid}


@router.put('/research-history/{eid}')
async def research_history_update(eid: str, body: Dict,
                                  _: Dict = Depends(get_non_guest_user)):
    """编辑研究实验 (T-5.1.41): 更新假设/结论/标签/备注。未知键忽略。"""
    from research_store import update_experiment
    ok = update_experiment(eid, body)
    if not ok:
        raise HTTPException(status_code=404, detail=f'实验 {eid} 不存在')
    return {'updated': True, 'id': eid}
