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
import asyncio
import logging
from typing import Any, Dict, Optional

from fastapi import APIRouter, Body, Depends, HTTPException

from auth import get_non_guest_user
from strategy_db import StrategyBusyError, append_run, finish_run, get_run, list_runs
from strategy_sdk.base import StrategyContext
import uuid
from strategy_custom import (
    create_custom, list_custom, backtest_custom, ai_optimize, _code_from_def,
)
from strategy_db import get_def
from strategy_sdk.registry import registry, StrategyNotFoundError

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/strategies', tags=['策略研究'])


@router.get('')
async def list_strategies(_: Dict = Depends(get_non_guest_user)):
    """策略列表(内置注册表)"""
    return registry.list()


# ─── v3.21 (P0-6): 策略纳管中心 ────────────────────

@router.get('/governance')
async def governance_get(_: Dict = Depends(get_non_guest_user)):
    """纳管状态(4 内置策略)"""
    import strategy_governance as gov
    return {"data": {"strategies": gov.get_state()}}


@router.put('/governance')
async def governance_put(body: Dict, _: Dict = Depends(get_non_guest_user)):
    """更新纳管状态 {strategies: {sid: {enabled, schedule}}}"""
    import strategy_governance as gov
    new_state = gov.save_state(body.get('strategies') or {})
    return {"data": {"strategies": new_state}}


@router.post('/{sid}/run-once')
async def governance_run_once(sid: str, body: Dict = None,
                              _: Dict = Depends(get_non_guest_user)):
    """run-once: 运行策略生成持仓文件(可指定 as_of)"""
    import strategy_governance as gov
    from strategy_sdk.registry import StrategyNotFoundError
    try:
        # V4.7.1 (并发安全): 全市场模式 run-once 60-120s/策略, 移入后台线程防阻塞事件循环
        result = await asyncio.to_thread(gov.run_once, sid, (body or {}).get('as_of'))
    except StrategyNotFoundError:
        raise HTTPException(404, f'策略不存在或非纳管: {sid}')
    except RuntimeError as e:
        raise HTTPException(500, str(e))
    return {"data": result}


@router.get('/{sid}/holdings')
async def governance_holdings(sid: str, _: Dict = Depends(get_non_guest_user)):
    """列出该策略最近持仓文件"""
    import strategy_governance as gov
    return {"data": {"sid": sid, "holdings": gov.list_holdings(sid)}}


# ─── v3.21 (P0-3): 策略参数方案 profiles ────────────

@router.get('/{sid}/profiles')
async def list_profiles_api(sid: str, _: Dict = Depends(get_non_guest_user)):
    """列出策略已保存的参数方案"""
    try:
        registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(404, f'策略不存在: {sid}')
    from strategy_db import list_profiles
    return {"data": {"sid": sid, "profiles": list_profiles(sid)}}


@router.post('/{sid}/profiles')
async def save_profile_api(sid: str, body: Dict, _: Dict = Depends(get_non_guest_user)):
    """保存参数方案 {name, params}"""
    try:
        registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(404, f'策略不存在: {sid}')
    from strategy_db import save_profile
    try:
        prof = save_profile(sid, body.get('name') or '', body.get('params') or {},
                            bool(body.get('is_default')))
    except ValueError as e:
        raise HTTPException(400, str(e))
    return {"data": prof}


@router.delete('/{sid}/profiles/{profile_id}')
async def delete_profile_api(sid: str, profile_id: str,
                             _: Dict = Depends(get_non_guest_user)):
    """删除参数方案"""
    from strategy_db import delete_profile
    if not delete_profile(sid, profile_id):
        raise HTTPException(404, '方案不存在')
    return {"data": {"deleted": True}}


@router.get('/{sid}/schema')
async def get_strategy_schema(sid: str, _: Dict = Depends(get_non_guest_user)):
    """参数表单 schema(前端零构建渲染契约)"""
    try:
        return registry.get(sid).params_schema()
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')


@router.put('/{sid}')
async def update_strategy(sid: str, body: Dict[str, Any],
                          _: Dict = Depends(get_non_guest_user)):
    """更新策略参数覆盖/启停 — V4.0 母本制度: 内置 4 策略不可直接修改, 只能复制"""
    import strategy_governance as _gov
    if sid in _gov.BUILTIN_SIDS:
        raise HTTPException(status_code=400,
                            detail='内置策略为不可变母本, 不能直接修改; 请先复制为新策略再调整参数/代码')
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    params = body.get('params') or {}
    validated = st.validate_params(params)
    # V4.0 M3: 派生策略 show_in_calendar(默认 False, 研究不污染日历), 存 params 保留键
    show = body.get('show_in_calendar')
    if show is not None:
        validated['__show_in_calendar__'] = bool(show)
    elif '__show_in_calendar__' in params:
        validated['__show_in_calendar__'] = bool(params['__show_in_calendar__'])
    else:
        validated.setdefault('__show_in_calendar__', False)
    from strategy_db import upsert_def
    upsert_def(sid, {
        'name': st.name, 'version': st.version, 'type': st.id,
        'params': validated, 'enabled': body.get('enabled', True),
    })
    return {'id': sid, 'params': validated, 'enabled': body.get('enabled', True),
            'show_in_calendar': validated.get('__show_in_calendar__', False)}


@router.post('/{sid}/run')
async def run_strategy(sid: str, body: Dict[str, Any],
                       _: Dict = Depends(get_non_guest_user)):
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
        # 数据门户: 真实三源优先, 不可达降级模拟
        universe = list(getattr(st, 'universe', []) or []) or [f'{600000 + i:06d}.SH' for i in range(24)]
        portal, is_real = _resolve_portal(universe=universe)
        # v3.21: 评估日支持前端传入 as_of(YYYY-MM-DD), 默认取最近交易日(数据中心最后一个交易日)
        as_of = body.get('as_of') or body.get('run_date')
        if not as_of:
            from data_sources import data_source_manager
            try:
                # V4.6: 同步数据源调用迁 to_thread, 防 sxsc 超时阻塞事件循环
                import asyncio
                latest = await asyncio.to_thread(data_source_manager.get_index_daily, '000300.SH', None)
                as_of = str(latest.get('trade_date') or '')[:4] + '-' + str(latest.get('trade_date') or '')[4:6] + '-' + str(latest.get('trade_date') or '')[6:8]
            except Exception:
                as_of = None
        if not as_of or len(as_of) != 10:
            as_of = '2026-08-18'
        ctx = StrategyContext(portal=portal, params=params, as_of=as_of)
        holdings = st.generate_signals(ctx)
        summary = {
            'holdings_days': len(holdings) if holdings is not None else 0,
            'symbols': list(holdings.columns) if holdings is not None and len(holdings.columns) else [],
        }
        finish_run(rid, 'success', summary=summary)
        # V4.0 M1-2: 数据不可达时透出 data_degraded, 不再静默返回模拟数据
        return {'id': rid, 'status': 'success', 'data_degraded': not is_real,
                'summary': summary}
    except Exception as e:
        logger.exception('策略 %s 运行失败', sid)
        finish_run(rid, 'failed', error=str(e))
        raise HTTPException(status_code=500, detail=f'运行失败: {e}')


@router.post('/{sid}/backtest')
async def backtest_strategy(sid: str, body: Dict[str, Any],
                            _: Dict = Depends(get_non_guest_user)):
    """回测: SDK 信号生成持仓矩阵 → 回测器(复用 backtest.py 绩效口径)"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    params = st.validate_params(body.get('params') or {})
    try:
        from strategy_sdk.backtest import backtest_holdings
        universe = list(getattr(st, 'universe', []) or []) or [f'{600000 + i:06d}.SH' for i in range(24)]
        portal, is_real = _resolve_portal(universe=universe)
        end = body.get('end_date') or '2026-08-18'
        start = body.get('start_date') or '2024-01-01'
        ctx = StrategyContext(portal=portal, params=params, as_of=end)
        holdings = st.generate_signals(ctx)
        # 真实收益序列: 取 close 面板 → 日收益率 (date×symbol, 回测器内部防前视)
        returns = None
        try:
            close_panel = portal.get_panel(['close'], start, end, universe=universe)
            if close_panel is not None and not close_panel.empty:
                df = close_panel['close'].unstack('symbol').sort_index()
                returns = df.pct_change()
        except Exception as e:
            logger.info('收益序列取数失败(%s), 走模拟收益', e)
        result = backtest_holdings(
            holdings,
            returns=returns,
            start_date=body.get('start_date'),
            end_date=body.get('end_date'),
            commission_rate=body.get('commission_rate', 0.0003),
            slippage=body.get('slippage', 0.001),
        )
        # V4.0 M1-2: 数据不可达时透出 data_degraded
        return {'strategy_id': sid, 'params': params, 'data_degraded': not is_real,
                'result': result}
    except Exception as e:
        logger.exception('策略 %s 回测失败', sid)
        raise HTTPException(status_code=500, detail=f'回测失败: {e}')


@router.post('/{sid}/sweep')
async def strategy_param_sweep(sid: str, body: Dict[str, Any],
                               _: Dict = Depends(get_non_guest_user)):
    """参数网格扫描 (V4.0 M2-1 策略实验室): {param_grid: {key: [候选值]}, start_date,
    end_date, metric, max_combos} → 按 metric 降序的绩效表"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    param_grid = body.get('param_grid') or {}
    if not param_grid:
        raise HTTPException(status_code=400, detail='param_grid 不能为空')
    start = body.get('start_date') or '2026-04-01'
    end = body.get('end_date') or '2026-07-31'
    metric = body.get('metric') or 'annual_return'
    universe = list(getattr(st, 'universe', []) or []) or [f'{600000 + i:06d}.SH' for i in range(24)]
    portal, is_real = _resolve_portal(universe=universe)
    try:
        from strategy_sdk.sweep import param_sweep
        results = param_sweep(
            st, param_grid, portal, start, end,
            metric=metric, max_combos=int(body.get('max_combos', 50)),
            universe=universe)
    except Exception as e:
        logger.exception('策略 %s 参数扫描失败', sid)
        raise HTTPException(status_code=500, detail=f'参数扫描失败: {e}')
    resp = {'sid': sid, 'data_degraded': not is_real, 'count': len(results),
            'metric': metric, 'results': results}
    # V5.2 T-5.2.4: 参数稳定性诊断 (单参数维度 → 高原 + 过拟合判定)
    try:
        if len(param_grid) == 1:
            from param_stability import overfit_diagnosis
            pkey = next(iter(param_grid))
            resp['param_stability'] = overfit_diagnosis(results, pkey, perf_key=metric)
        else:
            resp['param_stability'] = {'verdict': 'unknown',
                                       'note': '多维网格: 请按单参数维度查看稳定性'}
    except Exception as e2:
        logger.warning('参数稳定性诊断失败: %s', e2)
        resp['param_stability'] = {'verdict': 'unknown', 'note': '诊断不可用'}
    return resp


@router.get('/{sid}/runs')
async def strategy_runs(sid: str, limit: int = 50,
                        _: Dict = Depends(get_non_guest_user)):
    """运行历史"""
    return list_runs(sid, limit=limit)


@router.get('/{sid}/runs/{rid}')
async def strategy_run_detail(sid: str, rid: str,
                              _: Dict = Depends(get_non_guest_user)):
    """单次运行详情"""
    r = get_run(rid)
    if not r or r['strategy_id'] != sid:
        raise HTTPException(status_code=404, detail='运行记录不存在')
    return r


@router.get('/{sid}/ptrade-code')
async def strategy_ptrade_code(sid: str, top_n: Optional[int] = None,
                               benchmark: Optional[str] = None,
                               universe_source: Optional[str] = None,
                               universe_codes: Optional[str] = None,
                               index_code: Optional[str] = None,
                               timing_enabled: Optional[bool] = None,
                               timing_index: Optional[str] = None,
                               timing_ma_window: Optional[int] = None,
                               stop_loss_pct: Optional[float] = None,
                               take_profit_pct: Optional[float] = None,
                               max_drawdown_pct: Optional[float] = None,
                               _: Dict = Depends(get_non_guest_user)):
    """导出 PTrade 可直接运行的策略代码(模板+参数填充+静态校验)
    P2: 三要素参数(选股范围/择时/风控)均可通过 query 透传"""
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    params: Dict[str, Any] = {}
    overrides = {
        'top_n': top_n, 'benchmark': benchmark,
        'universe_source': universe_source, 'universe_codes': universe_codes,
        'index_code': index_code, 'timing_enabled': timing_enabled,
        'timing_index': timing_index, 'timing_ma_window': timing_ma_window,
        'stop_loss_pct': stop_loss_pct, 'take_profit_pct': take_profit_pct,
        'max_drawdown_pct': max_drawdown_pct,
    }
    for k, v in overrides.items():
        if v is not None:
            params[k] = v
    try:
        code = st.to_ptrade_code(params)
        return {'strategy_id': sid, 'code': code}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


# ==================== I3A (v3.22): 策略变体 / SelectionSpec / AI 交易码 ====================

@router.post('/{sid}/clone')
async def clone_strategy_api(sid: str, body: Dict = None,
                             _: Dict = Depends(get_non_guest_user)):
    """复制内置策略为 variant(独立 sid + 参数覆盖 + 母本信号层)"""
    import strategy_variant as sv
    from strategy_sdk.registry import StrategyNotFoundError
    try:
        result = sv.clone_strategy(sid, new_name=(body or {}).get("name"),
                                   params=(body or {}).get("params"))
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f"策略 {sid} 不存在")
    return {"data": result}

@router.get('/variants')
async def list_variants_api(_: Dict = Depends(get_non_guest_user)):
    """列出全部 variant 策略"""
    import strategy_variant as sv
    return {"data": {"variants": sv.list_variants()}}

@router.get('/{sid}/selection-spec')
async def get_selection_spec_api(sid: str, _: Dict = Depends(get_non_guest_user)):
    """读取 SelectionSpec(可微调选股协议)"""
    import strategy_variant as sv
    return {"data": {"sid": sid, "spec": sv.get_selection_spec(sid),
                     "fields": sv.SPEC_FIELDS}}

@router.put('/{sid}/selection-spec')
async def put_selection_spec_api(sid: str, body: Dict,
                                 _: Dict = Depends(get_non_guest_user)):
    """保存 SelectionSpec"""
    import strategy_variant as sv
    spec = sv.save_selection_spec(sid, body.get("spec") or {})
    return {"data": {"sid": sid, "spec": spec}}

@router.post('/{sid}/ai-trade-code')
async def ai_trade_code_api(sid: str, body: Dict = None,
                            _: Dict = Depends(get_non_guest_user)):
    """AI 交易码: 读持仓矩阵 + SelectionSpec -> LLM 生成 PTrade 交易码(含风控)
    硬约束: 交易标的必须 ⊆ 持仓矩阵内股票(否则 400)"""
    import strategy_variant as sv
    try:
        result = sv.generate_ai_trade_code(
            sid, spec=(body or {}).get("spec"),
            matrix=(body or {}).get("matrix"))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return {"data": result}

# ==================== 因子研究 (FR: P1-F8) ====================


@router.post('/factors/ic')
async def factor_ic_research(body: Dict[str, Any],
                             _: Dict = Depends(get_non_guest_user)):
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
        # 用策略声明的研究股票池(新浪源可用性已知), 而非连续代码段
        symbols = list(getattr(st, 'universe', []) or [])
        if not symbols:
            symbols = [f'{600000 + i:06d}.SH' for i in range(24)]
        portal, _ = _resolve_portal(universe=symbols)
        fields = list(spec.inputs or ['close'])
        panel = portal.get_panel(fields, start=start_date, end=end_date, universe=symbols)
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
                                _: Dict = Depends(get_non_guest_user)):
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
        symbols = list(getattr(st, 'universe', []) or [])
        if not symbols:
            symbols = [f'{600000 + i:06d}.SH' for i in range(24)]
        portal, _ = _resolve_portal(universe=symbols)
        fields = list(spec.inputs or ['close'])
        panel = portal.get_panel(fields, start=start_date, end=end_date, universe=symbols)
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


# ---------- 数据门户解析 (FR: 数据层) ----------

def _resolve_portal(universe: Optional[list] = None, seed: int = 2026):
    """优先真实三源 DataPortal; 数据不可达(无网络/无 universe)时降级 FakePortal。

    Returns (portal, is_real): is_real=False 表示降级到可复现模拟数据。
    """
    # 有 universe 才尝试真实数据(无 universe 无从取数)
    if universe:
        try:
            from strategy_sdk.data_portal import RealDataPortal
            portal = RealDataPortal()
            # 探测: 用完整三源 fallback(get_kline_data 含东财→新浪兜底)
            probe = portal.source.get_kline_data(universe[0], period='daily', limit=5)
            probe_data = (probe or {}).get('data') or []
            if probe_data:
                return portal, True
            logger.info('真实数据探测为空(首源失败), 降级模拟')
        except Exception as e:
            logger.info('真实数据门户不可用, 降级模拟: %s', e)
    from strategy_sdk.testsupport import FakePortal
    dates = _date_range('2026-04-01', '2026-07-31', 40)
    symbols = universe or [f'{600000 + i:06d}.SH' for i in range(24)]
    return FakePortal(dates=dates, symbols=symbols, seed=seed), False

# ==================== v3.22 (I3B): 全新 PTrade 策略 (AI 代写 + 本地回测 + AI 优化) ====================

@router.get('/custom')
async def api_custom_list(current_user: Any = Depends(get_non_guest_user)):
    """列出全部自定义策略 (type=custom)"""
    return {'data': {'customs': list_custom()}}


@router.post('/custom')
async def api_custom_create(payload: dict, current_user: Any = Depends(get_non_guest_user)):
    """AI 代写全新策略: prompt -> LLM -> 校验 -> 存 strategy_defs(type=custom)"""
    name = (payload.get('name') or '').strip() or '自定义策略'
    prompt = payload.get('prompt') or ''
    code = payload.get('code') or ''
    sid = (payload.get('sid') or '').strip() or ('custom_' + uuid.uuid4().hex[:8])
    if not code and not prompt:
        raise HTTPException(400, '需提供 code 或 prompt')
    try:
        result = create_custom(sid, name, code=code or None, prompt=prompt or None)
    except Exception as e:
        raise HTTPException(400, str(e))
    return {'data': result}


@router.get('/custom/{sid}/code')
async def api_custom_code(sid: str, current_user: Any = Depends(get_non_guest_user)):
    """读取自定义策略代码"""
    d = get_def(sid)
    if not d or d.get('type') != 'custom':
        raise HTTPException(404, '自定义策略不存在: ' + sid)
    return {'data': {'sid': sid, 'name': d.get('name', ''), 'code': _code_from_def(d)}}


@router.post('/custom/{sid}/backtest')
async def api_custom_backtest(sid: str, payload: Optional[dict] = Body(default=None),
                              current_user: Any = Depends(get_non_guest_user)):
    """本地回测自定义策略 (轻量 PTrade 兼容执行层)"""
    payload = payload or {}
    try:
        result = backtest_custom(
            sid,
            start_date=payload.get('start_date'),
            end_date=payload.get('end_date'),
            capital=float(payload.get('capital') or 100000.0),
        )
    except ValueError as e:
        raise HTTPException(400, str(e))
    except Exception as e:
        raise HTTPException(500, '回测失败: ' + str(e))
    return {'data': result}


@router.post('/custom/{sid}/ai-optimize')
async def api_custom_optimize(sid: str, payload: Optional[dict] = Body(default=None),
                              current_user: Any = Depends(get_non_guest_user)):
    """AI 优化: 分析代码+回测 -> 改进代码"""
    payload = payload or {}
    try:
        result = ai_optimize(sid, backtest=payload.get('backtest'))
    except ValueError as e:
        raise HTTPException(400, str(e))
    except Exception as e:
        raise HTTPException(500, 'AI 优化失败: ' + str(e))
    return {'data': result}
