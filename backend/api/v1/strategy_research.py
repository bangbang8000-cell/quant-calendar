#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略研究 API 路由 (FR: 策略研究 P0 / P1-F8 因子研究)
- 策略列表/schema/参数更新
- 手工运行(互斥) / 回测
- 运行历史/结果
- PTrade 代码导出
- 因子研究: 单因子 IC 评价 / 分层回测
"""
import logging
from typing import Any, Dict, Optional

from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_active_user
from strategy_db import StrategyBusyError, append_run, finish_run, get_run, list_runs
from strategy_sdk.base import StrategyContext
from strategy_sdk.registry import registry, StrategyNotFoundError

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/strategies', tags=['策略研究'])


@router.get('')
async def list_strategies(_: Dict = Depends(get_current_active_user)):
    """策略列表(内置注册表)"""
    return registry.list()


@router.get('/{sid}/schema')
async def get_strategy_schema(sid: str, _: Dict = Depends(get_current_active_user)):
    """参数表单 schema(前端零构建渲染契约)"""
    try:
        return registry.get(sid).params_schema()
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')


@router.put('/{sid}')
async def update_strategy(sid: str, body: Dict[str, Any],
                          _: Dict = Depends(get_current_active_user)):
    """更新策略参数覆盖/启停"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    params = body.get('params') or {}
    validated = st.validate_params(params)
    from strategy_db import upsert_def
    upsert_def(sid, {
        'name': st.name, 'version': st.version, 'type': st.id,
        'params': validated, 'enabled': body.get('enabled', True),
    })
    return {'id': sid, 'params': validated, 'enabled': body.get('enabled', True)}


@router.post('/{sid}/run')
async def run_strategy(sid: str, body: Dict[str, Any],
                       _: Dict = Depends(get_current_active_user)):
    """手工运行(互斥) —— 当前为同步骨架: 生成信号 + 落库"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    params = st.validate_params(body.get('params') or {})
    mode = body.get('mode', 'manual')
    try:
        rid = append_run(sid, st.version, params, mode, 'running')
    except StrategyBusyError as e:
        raise HTTPException(status_code=409, detail=str(e))
    try:
        # 骨架实现: 用占位 portal(无数据时返回空) —— 真实取数接入三源后替换
        from strategy_sdk.testsupport import FakePortal
        portal = FakePortal(dates=[], symbols=[])
        ctx = StrategyContext(portal=portal, params=params, as_of='2026-08-18')
        holdings = st.generate_signals(ctx)
        summary = {
            'holdings_days': len(holdings) if holdings is not None else 0,
            'symbols': list(holdings.columns) if holdings is not None and len(holdings.columns) else [],
        }
        finish_run(rid, 'success', summary=summary)
        return {'id': rid, 'status': 'success', 'summary': summary}
    except Exception as e:
        logger.exception('策略 %s 运行失败', sid)
        finish_run(rid, 'failed', error=str(e))
        raise HTTPException(status_code=500, detail=f'运行失败: {e}')


@router.post('/{sid}/backtest')
async def backtest_strategy(sid: str, body: Dict[str, Any],
                            _: Dict = Depends(get_current_active_user)):
    """回测: SDK 信号生成持仓矩阵 → 回测器(复用 backtest.py 绩效口径)"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    params = st.validate_params(body.get('params') or {})
    try:
        from strategy_sdk.backtest import backtest_holdings
        from strategy_sdk.testsupport import FakePortal
        portal = FakePortal(dates=[], symbols=[])
        ctx = StrategyContext(portal=portal, params=params,
                              as_of=body.get('end_date') or '2026-08-18')
        holdings = st.generate_signals(ctx)
        result = backtest_holdings(
            holdings,
            start_date=body.get('start_date'),
            end_date=body.get('end_date'),
            commission_rate=body.get('commission_rate', 0.0003),
            slippage=body.get('slippage', 0.001),
        )
        return {'strategy_id': sid, 'params': params, 'result': result}
    except Exception as e:
        logger.exception('策略 %s 回测失败', sid)
        raise HTTPException(status_code=500, detail=f'回测失败: {e}')


@router.get('/{sid}/runs')
async def strategy_runs(sid: str, limit: int = 50,
                        _: Dict = Depends(get_current_active_user)):
    """运行历史"""
    return list_runs(sid, limit=limit)


@router.get('/{sid}/runs/{rid}')
async def strategy_run_detail(sid: str, rid: str,
                              _: Dict = Depends(get_current_active_user)):
    """单次运行详情"""
    r = get_run(rid)
    if not r or r['strategy_id'] != sid:
        raise HTTPException(status_code=404, detail='运行记录不存在')
    return r


@router.get('/{sid}/ptrade-code')
async def strategy_ptrade_code(sid: str, top_n: Optional[int] = None,
                               benchmark: Optional[str] = None,
                               _: Dict = Depends(get_current_active_user)):
    """导出 PTrade 可直接运行的策略代码(模板+参数填充+静态校验)"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    params: Dict[str, Any] = {}
    if top_n is not None:
        params['top_n'] = top_n
    if benchmark is not None:
        params['benchmark'] = benchmark
    try:
        code = st.to_ptrade_code(params)
        return {'strategy_id': sid, 'code': code}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


# ==================== 因子研究 (FR: P1-F8) ====================


@router.post('/factors/ic')
async def factor_ic_research(body: Dict[str, Any],
                             _: Dict = Depends(get_current_active_user)):
    """单因子 IC 研究: 因子值 vs 次日收益 的横截面 Rank IC 评价"""
    sid = body.get('sid', 'multi_factor')
    factor_key = body.get('factor_key', 'mom20')
    start_date = body.get('start_date') or '2026-04-01'
    end_date = body.get('end_date') or '2026-07-31'
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    spec = next((s for s in st.factor_specs if s.name == factor_key), None)
    if spec is None:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 无因子 {factor_key}')
    try:
        from strategy_sdk.factor_engine import (compute_cross_section_factors,
                                                 evaluate_factor_ic)
        from strategy_sdk.testsupport import FakePortal
        # 研究面板(真实行情数据源接入为 P1 数据层, 此处用可复现面板打通契约)
        dates = _date_range(start_date, end_date, 40)
        symbols = [f'{600000 + i:06d}.SH' for i in range(24)]
        portal = FakePortal(dates=dates, symbols=symbols, seed=2026)
        fields = list(spec.inputs or ['close'])
        panel = portal.get_panel(fields, start=start_date, end=end_date)
        factor_values = compute_cross_section_factors(panel, [spec])
        if not factor_values:
            return {'factor_key': factor_key, 'sid': sid, 'report': {},
                    'message': '因子计算无有效值(数据不足)'}
        fv = factor_values[factor_key]
        returns = _future_returns(panel)
        report = evaluate_factor_ic(fv, returns, window_labels={'n1': 'n1'})
        return {'factor_key': factor_key, 'sid': sid, 'report': report,
                'fields': fields, 'date_range': [start_date, end_date]}
    except Exception as e:
        logger.exception('因子 IC 研究失败: %s', e)
        raise HTTPException(status_code=500, detail=f'因子 IC 研究失败: {e}')


@router.post('/factors/layer')
async def factor_layer_research(body: Dict[str, Any],
                                _: Dict = Depends(get_current_active_user)):
    """因子分层回测: 按因子值分 n 层, 观察分层收益单调性"""
    sid = body.get('sid', 'multi_factor')
    factor_key = body.get('factor_key', 'mom20')
    n_layers = int(body.get('n_layers', 5))
    start_date = body.get('start_date') or '2026-04-01'
    end_date = body.get('end_date') or '2026-07-31'
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    spec = next((s for s in st.factor_specs if s.name == factor_key), None)
    if spec is None:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 无因子 {factor_key}')
    try:
        from strategy_sdk.factor_engine import (compute_cross_section_factors,
                                                 layer_backtest)
        from strategy_sdk.testsupport import FakePortal
        dates = _date_range(start_date, end_date, 40)
        symbols = [f'{600000 + i:06d}.SH' for i in range(24)]
        portal = FakePortal(dates=dates, symbols=symbols, seed=2026)
        fields = list(spec.inputs or ['close'])
        panel = portal.get_panel(fields, start=start_date, end=end_date)
        factor_values = compute_cross_section_factors(panel, [spec])
        if not factor_values:
            return {'factor_key': factor_key, 'sid': sid, 'layers': [],
                    'message': '因子计算无有效值(数据不足)'}
        fv = factor_values[factor_key]
        returns = _future_returns(panel)
        result = layer_backtest(fv, returns, n_layers=n_layers)
        result['factor_key'] = factor_key
        result['sid'] = sid
        return result
    except Exception as e:
        logger.exception('因子分层回测失败: %s', e)
        raise HTTPException(status_code=500, detail=f'因子分层回测失败: {e}')


def _date_range(start: str, end: str, max_days: int) -> list:
    """生成日期序列(最多 max_days 个, 简化按工作日近似交易日)"""
    from datetime import date, timedelta
    s = date.fromisoformat(start)
    e = date.fromisoformat(end)
    days = (e - s).days
    step = max(1, days // max_days) if days > max_days else 1
    out = []
    d = s
    while d <= e and len(out) < max_days:
        if d.weekday() < 5:
            out.append(d.isoformat())
        d += timedelta(days=step)
    return out or [start]


def _future_returns(panel):
    """由面板收盘价生成次日收益(近似未来收益, 研究演示用)"""
    close = panel['close'].unstack('symbol')
    return close.pct_change().shift(-1)
