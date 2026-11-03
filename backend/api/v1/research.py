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

@router.get('/sentiment-pulse')
async def sentiment_pulse(date: Optional[str] = None,
                          user: Optional[dict] = Depends(get_current_user)):
    """涨停情绪市场脉冲屏（早封率/封单留存/原因分布/板位矩阵）。"""
    import sentiment_pulse as sp
    from shortterm import fetchers, ladder, trade_calendar
    d = date or trade_calendar.latest_session()
    try:
        pool = fetchers.fetch_zt_pool(d, prefer='fuyao')
        lad, _meta = ladder.fetch_ladder_fuyao()
        out = sp.build_pulse(d, pool, lad)
    except Exception as e:  # noqa: BLE001 — 取数异常如实降级
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120]), 'date': d}
    return {'success': True, **out}


@router.get('/lhb-topology')
async def lhb_topology(days: int = 5, end: Optional[str] = None,
                       user: Optional[dict] = Depends(get_current_user)):
    """龙虎榜资金拓扑（概念等分 + 守恒）。days 上限 20。"""
    import lhb_topology as tp
    from shortterm import lhb, trade_calendar
    n = max(1, min(int(days or 5), 20))
    try:
        dates = trade_calendar.last_trade_dates(n, end=end) if end else \
            trade_calendar.last_trade_dates(n)
        results = [(d, (lhb.fetch_lhb(d, d) or {}).get('rows') or []) for d in dates]
        out = tp.build_topology(results)
    except Exception as e:  # noqa: BLE001
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120])}
    return {'success': True, **out}


@router.get('/attention-resonance')
async def attention_resonance(period: str = 'day', window: int = 5,
                              user: Optional[dict] = Depends(get_current_user)):
    """热榜—股价共振（Spearman）。价格优先本地 DWH，缺库时如实降级。"""
    import attention_resonance as ar
    import hot_rank
    try:
        hot = hot_rank.fetch_hot_list(period, 30)
        rows = hot.get('rows') or []
        closes = {}
        try:
            from dwh import get_backend
            backend = get_backend()
            if backend.status().get('available'):
                for r in rows:
                    code = r.get('thscode')
                    res = backend.query(
                        'SELECT close FROM v_daily_qfq WHERE thscode=? '
                        'ORDER BY date DESC LIMIT ?', [code, int(window) + 1])
                    if res.get('rows'):
                        closes[code] = [x[0] for x in reversed(res['rows'])]
        except Exception as e:  # noqa: BLE001 — 无 DWH 时按无面板处理
            logger.info('共振: DWH 不可用(%s)，按无价格面板降级', e)
        out = ar.resonance(rows, closes, window=int(window))
    except ValueError as e:
        from fastapi import HTTPException
        raise HTTPException(status_code=400, detail=str(e)) from e
    except Exception as e:  # noqa: BLE001
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120])}
    return {'success': True, 'period': period, **out}

@router.get('/fin-quality')
async def fin_quality(codes: Optional[str] = None, period: str = 'annual',
                      user: Optional[dict] = Depends(get_current_user)):
    """财务质量分位。codes 逗号分隔（≤20 只）；分位为**入参池内样本分位**。"""
    import fin_quality as fq
    pool = [c.strip() for c in (codes or '').split(',') if c.strip()][:20]
    if not pool:
        return {'success': True, 'available': False, 'reason': 'no_codes', 'rows': []}
    if period not in ('annual', 'quarter'):
        return {'success': True, 'available': False, 'reason': 'invalid_period', 'rows': []}
    try:
        out = fq.screen(pool, period=period)
    except Exception as e:  # noqa: BLE001
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120]), 'rows': []}
    return {'success': True, **out}


@router.get('/pit-audit')
async def pit_audit(target_date: Optional[str] = None,
                    user: Optional[dict] = Depends(get_current_user)):
    """防未来函数审计（五项检查 + 跳过标注）。"""
    import datetime
    import pit_audit as pa
    d = target_date or datetime.date.today().strftime('%Y-%m-%d')
    try:
        rep = pa.audit(d, input_dates=[d])
    except Exception as e:  # noqa: BLE001
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120])}
    return {'success': True, **rep}


@router.get('/backtest-lab')
async def backtest_lab(lookback: int = 20, top_k: int = 10, start: Optional[str] = None,
                       in_sample_frac: float = 0.7,
                       user: Optional[dict] = Depends(get_current_user)):
    """回测实验室（DWH 面板 + lag=1 + 双边成本 + 样本内外）。无 DWH 时如实降级。"""
    import backtest_lab as bl
    try:
        from dwh import get_backend
        backend = get_backend()
        st = backend.status()
        if not st.get('available'):
            return {'success': True, 'available': False,
                    'reason': 'dwh_unavailable: %s' % st.get('reason')}
        s = start or '2026-01-01'
        res = backend.query(
            'SELECT thscode AS ts_code, CAST(date AS VARCHAR) AS trade_date, close '
            'FROM v_daily_qfq WHERE date >= CAST(? AS DATE) ORDER BY date', [s])
        panel = [{'ts_code': r[0], 'trade_date': r[1], 'close': r[2]} for r in res.get('rows') or []]
        out = bl.walkforward(panel, lookback=int(lookback), top_k=int(top_k),
                             in_sample_frac=float(in_sample_frac))
    except Exception as e:  # noqa: BLE001
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120])}
    return {'success': True, 'rows': len(panel), 'start': s, **out}
