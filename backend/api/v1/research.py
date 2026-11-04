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
            cached = ist.get_matrix(auto_refresh=False, limit=limit)
            if cached and cached.get('available'):
                # v7.3.2: 全量刷新实测 68s —— 有缓存就立即返回 + 后台刷新（不卡住请求）
                started = ist.start_background_refresh(limit=limit)
                return {'success': True, **cached, 'refreshing': bool(started),
                        'refresh_note': '已在后台刷新（约 1 分钟），稍后点刷新或等待自动更新'
                                        if started else '后台刷新进行中'}
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
    import ttl_cache
    from shortterm import fetchers, ladder, trade_calendar
    d = date or trade_calendar.latest_session()
    try:
        def _compute():
            pool = fetchers.fetch_zt_pool(d, prefer='fuyao')
            lad, _meta = ladder.fetch_ladder_fuyao()
            return sp.build_pulse(d, pool, lad)

        out = ttl_cache.cached(('sentiment-pulse', d), 300, _compute)
    except Exception as e:  # noqa: BLE001 — 取数异常如实降级
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120]), 'date': d}
    return {'success': True, **out}


@router.get('/lhb-topology')
async def lhb_topology(days: int = 5, end: Optional[str] = None,
                       user: Optional[dict] = Depends(get_current_user)):
    """龙虎榜资金拓扑（概念等分 + 守恒）。days 上限 20。"""
    import lhb_topology as tp
    import ttl_cache
    from shortterm import lhb, trade_calendar
    n = max(1, min(int(days or 5), 20))
    try:
        def _compute():
            dates = trade_calendar.last_trade_dates(n, end=end) if end else \
                trade_calendar.last_trade_dates(n)
            results = [(d, (lhb.fetch_lhb(d, d) or {}).get('rows') or []) for d in dates]
            return tp.build_topology(results)

        out = ttl_cache.cached(('lhb-topology', n, end), 300, _compute)
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
    import ttl_cache
    try:
        from dwh import get_backend
        backend = get_backend()
        st = backend.status()
        if not st.get('available'):
            return {'success': True, 'available': False,
                    'reason': 'dwh_unavailable: %s' % st.get('reason')}
        s = start or '2026-01-01'
        # v7.3.2: 日频数据 + 110 万行面板, 单次 walkforward 实测 9.6~10.4s → 必须服务端缓存
        # key 带上「库内最新日期」：数据一旦更新自动失效，不会返回过期结论
        key = ('backtest-lab', int(lookback), int(top_k), s,
               round(float(in_sample_frac), 4), st.get('latest_date'), st.get('rows'))

        def _compute():
            res = backend.query(
                'SELECT thscode AS ts_code, CAST(date AS VARCHAR) AS trade_date, close '
                'FROM v_daily_qfq WHERE date >= CAST(? AS DATE) ORDER BY date', [s])
            panel = [{'ts_code': r[0], 'trade_date': r[1], 'close': r[2]}
                     for r in res.get('rows') or []]
            return {'panel_rows': len(panel), 'start': s,
                    **bl.walkforward(panel, lookback=int(lookback), top_k=int(top_k),
                                     in_sample_frac=float(in_sample_frac))}

        out = ttl_cache.cached(key, 1800, _compute)
    except Exception as e:  # noqa: BLE001
        return {'success': True, 'available': False,
                'reason': '%s: %s' % (type(e).__name__, str(e)[:120])}
    # 注意：panel_rows 是面板行数；不要用 rows（与 fin-quality 的行列表语义冲突）
    return {'success': True, **out}


@router.get('/cache-stats')
async def cache_stats(_: dict = Depends(get_admin_user)):
    """研究接口缓存命中情况（v7.3.2 性能可观测）。"""
    import ttl_cache
    return {'success': True, **ttl_cache.stats()}


@router.post('/cache-clear')
async def cache_clear(_: dict = Depends(get_admin_user)):
    """清空研究接口缓存（强制下次实时计算）。"""
    import ttl_cache
    ttl_cache.clear()
    return {'success': True, 'cleared': True}
