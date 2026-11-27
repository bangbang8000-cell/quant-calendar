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

from fastapi import APIRouter, Depends, HTTPException

from auth import get_non_guest_user
from strategy_db import StrategyBusyError, append_run, finish_run, get_run, list_runs
from strategy_sdk.base import StrategyContext
from strategy_sdk.labels import localize_run
from strategy_sdk.registry import registry, StrategyNotFoundError

# v7.14: 支撑层拆分 — 动态窗口/门户解析/实验持久化/面板工具 (使主文件回到 ≤700 行门禁内)
from .strategy_research_support import (
    symbol_names as _symbol_names,
    default_research_range as _default_research_range,
    default_end_sync as _default_end_sync,
    future_returns as _future_returns,
    record_experiment as _record_experiment,
    resolve_portal as _resolve_portal,
)

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/strategies', tags=['策略研究'])


@router.get('')
async def list_strategies(_: Dict = Depends(get_non_guest_user)):
    """策略列表(内置注册表)"""
    strategies = registry.list()
    # V6.9.4 (F6.1): 持仓数据文件缺失时附加可诊断提示 (策略定义列表不受影响)
    try:
        from data_parser import parser as _parser
        has_holdings = bool(getattr(_parser, 'holdings_data', None))
    except Exception:
        has_holdings = True  # 探测失败不打扰正常返回
    if not has_holdings:
        return {
            "strategies": strategies,
            "warn": "未找到策略持仓数据文件（多因子策略持仓*.csv 等 4 个文件），请检查 data 目录；策略定义列表仍可用",
        }
    return strategies


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
    """手工运行(互斥) —— v7.14 (FR-7): 后台线程异步执行, 立即返回 running, 前端轮询 runs/{rid}"""
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

    import threading as _threading

    def _worker():
        try:
            # 数据门户: 真实三源优先, 不可达降级模拟
            universe = list(getattr(st, 'universe', []) or []) or [f'{600000 + i:06d}.SH' for i in range(24)]
            portal, is_real = _resolve_portal(universe=universe)
            # v3.21: 评估日支持前端传入 as_of(YYYY-MM-DD), 默认取最近交易日(数据中心最后一个交易日)
            as_of = body.get('as_of') or body.get('run_date')
            if not as_of:
                from data_sources import data_source_manager
                try:
                    latest = data_source_manager.get_index_daily('000300.SH', None)
                    as_of = str(latest.get('trade_date') or '')[:4] + '-' + str(latest.get('trade_date') or '')[4:6] + '-' + str(latest.get('trade_date') or '')[6:8]
                except Exception:
                    as_of = None
            # v7.14 (FR-2): 兜底日期动态化(今天), 不再硬编码 2026-08-18
            if not as_of or len(as_of) != 10:
                from datetime import date as _date
                as_of = _default_end_sync() or _date.today().isoformat()
            ctx = StrategyContext(portal=portal, params=params, as_of=as_of)
            holdings = st.generate_signals(ctx)
            _symbols = list(holdings.columns) if holdings is not None and len(holdings.columns) else []
            summary = {
                'holdings_days': len(holdings) if holdings is not None else 0,
                'symbols': _symbols,
                # v7.19 (FR-9): 名称随运行结果一起返回，前端不再「只有代码没有中文名」
                'symbol_names': _symbol_names(_symbols),
            }
            finish_run(rid, 'success', summary=summary)
        except Exception as e:
            logger.exception('策略 %s 运行失败', sid)
            try:
                finish_run(rid, 'failed', error=str(e))
            except Exception as e2:
                logger.error('运行 %s 失败状态落库异常: %s', rid, e2)

    _threading.Thread(target=_worker, daemon=True, name=f'strategy-run-{sid}').start()
    # V4.0 M1-2: data_degraded 由运行结果决定, 前端轮询 runs/{rid} 获取最终状态
    return {'id': rid, 'status': 'running', 'mode': mode}


def _scale_equity_to_capital(result: Dict[str, Any], initial_capital: float) -> Dict[str, Any]:
    """v7.19 (T3.1): 把回测引擎的「净值倍数」序列换算成金额序列。

    引擎产出 equity_curve 起点为 1.0（无量纲倍数），金额本身不参与收益计算 ——
    所以"初始资金填 100 万还是 1 万"过去得到的是同一条曲线，用户无法回答
    "这一百万最后变成多少"。这里按 initial_capital 换算，并给出期末权益与总盈亏。

    原始倍数保留在 equity_curve_index，避免破坏需要无量纲曲线的既有图表口径。
    """
    if not isinstance(result, dict):
        return result
    result['initial_capital'] = initial_capital
    curve = result.get('equity_curve') or []
    if not curve:
        return result
    try:
        index = [float(x) for x in curve]
    except (TypeError, ValueError):
        return result
    result['equity_curve_index'] = [round(x, 6) for x in index]
    amounts = [round(initial_capital * x, 2) for x in index]
    result['equity_curve'] = amounts
    result['final_equity'] = amounts[-1]
    result['total_pnl'] = round(amounts[-1] - initial_capital, 2)
    return result


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
        # v7.14 (FR-2): 默认窗口动态化 — end=最近交易日
        # v7.19 (T3.1): 30 → 18 个月。30 个月跨两轮风格切换，样本内/外切分后样本外只剩半年，
        # 夏普与胜率的置信区间过宽；18 个月（≈360 交易日）是"够统计、覆盖一轮行业轮动"的折中，
        # 也是 PRD 需求 ⑧ 指定的默认建议区间。
        _dstart, _dend = await _default_research_range(months=18)
        end = body.get('end_date') or _dend
        start = body.get('start_date') or _dstart
        # v7.19 (T3.1): 金额与成本三件套 —— 之前 initial_capital 只被记录、未参与任何计算，
        # 用户填 100 万和填 1 万得到同一条曲线，是"回测结果不可信"的来源之一。
        # 注意 `body.get(...) or 1_000_000` 会把用户填的 0 静默吞成默认值 ——
        # 必须显式区分「未传」与「传了非法值」，否则输入 0 会悄悄跑出一条 100 万的曲线。
        _raw_capital = body.get('initial_capital')
        if _raw_capital is None or _raw_capital == '':
            initial_capital = 1_000_000
        else:
            try:
                initial_capital = float(_raw_capital)
            except (TypeError, ValueError):
                raise HTTPException(status_code=400, detail='initial_capital 必须是数字')
            if initial_capital <= 0:
                raise HTTPException(status_code=400, detail='initial_capital 必须大于 0')
        try:
            fee_rate = float(body.get('fee_rate', body.get('commission_rate', 0.0003)))
            slippage = float(body.get('slippage', 0.001))
        except (TypeError, ValueError):
            raise HTTPException(status_code=400, detail='fee_rate / slippage 必须是数字')
        if fee_rate < 0 or slippage < 0:
            raise HTTPException(status_code=400, detail='fee_rate / slippage 不能为负')
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
            commission_rate=fee_rate,
            slippage=slippage,
        )
        # v7.19 (T3.1): 资金参与计算 —— 引擎产出的是「净值倍数」序列(起点 1.0)，
        # 这里换算成金额序列并给出期末权益/总盈亏，前端才能显示"100 万变成多少"。
        # 保留原始倍数(equity_curve_index) 供需要无量纲曲线的场景使用，避免破坏既有图表口径。
        if isinstance(result, dict) and result.get('success', True):
            _scale_equity_to_capital(result, initial_capital)
        # V4.0 M1-2: 数据不可达时透出 data_degraded
        # T-5.1.2: 研究历史持久化 (静默失败不影响返回)
        if isinstance(result, dict) and result.get('success', True):
            _r = result if isinstance(result, dict) else {}
            _record_experiment(
                'backtest', sid,
                {'params': params, 'initial_capital': initial_capital,
                 'commission_rate': fee_rate, 'slippage': slippage},
                [start, end],
                {'total_return': _r.get('total_return'),
                 'annual_return': _r.get('annual_return'),
                 'max_drawdown': _r.get('max_drawdown'),
                 'sharpe_ratio': _r.get('sharpe_ratio'),
                 'win_rate': _r.get('win_rate')},
                {'result': result})
        # v7.15 (FR-6 双轨统一): experiments 单源(_record_experiment 已写入),
        # 不再调 save_backtest_result 二次入库(其签名保留供 standalone 端点委托使用)
        _bt_symbols = []
        try:
            _bt_symbols = list(holdings.columns) if holdings is not None else []
        except Exception:  # noqa: BLE001
            _bt_symbols = []
        # v7.19 (T3.1): 回显本次实际生效的参数 —— 用户能核对"我填的 18 个月/100 万"是否真被采用
        used_params = {'initial_capital': initial_capital, 'fee_rate': fee_rate,
                       'slippage': slippage, 'start_date': start, 'end_date': end,
                       'months': 18}
        return {'strategy_id': sid, 'params': params, 'data_degraded': not is_real,
                'symbol_names': _symbol_names(_bt_symbols),
                'used_params': used_params,
                'result': result}
    except HTTPException:
        # v7.19 (T3.1): 参数校验类 4xx 必须原样透出 —— 被下面的 broad except 兜成
        # 500 后前端只能提示"回测失败"，用户看不出是自己把初始资金填成了 0。
        raise
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
    # v7.14 (FR-2): 默认窗口动态化
    _dstart, _dend = await _default_research_range(months=6)
    start = body.get('start_date') or _dstart
    end = body.get('end_date') or _dend
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
    # V5.0.2 T-5.0.24: 参数稳定性诊断 (单参数维度 → 高原 + 过拟合判定)
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
    # T-5.1.2: 研究历史持久化 (静默失败不影响返回)
    _best = (results[0] if results else {})
    _ps = resp.get('param_stability') or {}
    _record_experiment(
        'sweep', sid,
        {'param_grid': param_grid, 'metric': metric},
        [start, end],
        {'count': len(results), 'best_param': _best.get('params'),
         'best_' + metric: _best.get(metric),
         'stability_verdict': _ps.get('verdict')},
        {'results': results, 'param_stability': _ps})
    return resp


@router.get('/{sid}/runs')
async def strategy_runs(sid: str, limit: int = 50,
                        _: Dict = Depends(get_non_guest_user)):
    """运行历史"""
    # v7.19 (FR-9): 运行记录补 status_cn / mode_cn / sid_cn，中文模式不再裸露 success/manual
    return [localize_run(r) for r in list_runs(sid, limit=limit)]


@router.get('/{sid}/runs/{rid}')
async def strategy_run_detail(sid: str, rid: str,
                              _: Dict = Depends(get_non_guest_user)):
    """单次运行详情"""
    r = get_run(rid)
    if not r or r['strategy_id'] != sid:
        raise HTTPException(status_code=404, detail='运行记录不存在')
    return localize_run(r)


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
    # v7.14 (FR-2): 默认窗口动态化
    _dstart, _dend = await _default_research_range(months=6)
    start_date = body.get('start_date') or _dstart
    end_date = body.get('end_date') or _dend
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
        portal, is_real = _resolve_portal(universe=symbols)
        fields = list(spec.inputs or ['close'])
        panel = portal.get_panel(fields, start=start_date, end=end_date, universe=symbols)
        factor_values = compute_cross_section_factors(panel, [spec])
        if not factor_values:
            return {'factor_key': factor_key, 'sid': sid, 'report': {},
                    'data_degraded': not is_real,
                    'message': '因子计算无有效值(数据不足)'}
        fv = factor_values[factor_key]
        returns = _future_returns(panel)
        report = evaluate_factor_ic(fv, returns, window_labels={'n1': 'n1'})
        # T-5.1.2: 研究历史持久化 (静默失败不影响返回)
        _rpt = (report or {}).get('n1') or {}
        _record_experiment(
            'factor_ic', f'{sid}/{factor_key}',
            {'factor_key': factor_key, 'window': 'n1'},
            [start_date, end_date],
            {'ic_mean': _rpt.get('ic_mean'), 'icir': _rpt.get('icir'),
             'win_rate': _rpt.get('win_rate'), 'grade': _rpt.get('grade')},
            {'report': report})
        return {'factor_key': factor_key, 'sid': sid, 'report': report,
                'data_degraded': not is_real,
                'fields': fields, 'date_range': [start_date, end_date]}
    except Exception as e:
        logger.exception('因子 IC 研究失败: %s', e)
        raise HTTPException(status_code=500, detail=f'因子 IC 研究失败: {e}')


@router.post('/factors/detail')
async def factor_detail_research(body: Dict[str, Any],
                                 _: Dict = Depends(get_non_guest_user)):
    """因子详情面板 (T-5.1.16 / FR-5.1.1.6):
    定义/参数/覆盖度 + IC 衰减 + 换手率 + 多重检验 + 近1-2年专测。
    """
    sid = body.get('sid', 'multi_factor')
    factor_key = body.get('factor_key', 'mom20')
    # v7.14 (FR-2): 默认窗口动态化
    _dstart, _dend = await _default_research_range(months=6)
    start_date = body.get('start_date') or _dstart
    end_date = body.get('end_date') or _dend
    n_layers = int(body.get('n_layers', 5))
    try:
        st = registry.get(sid)
    except StrategyNotFoundError:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 不存在')
    spec = next((s for s in st.factor_specs if s.name == factor_key), None)
    if spec is None:
        raise HTTPException(status_code=404, detail=f'策略 {sid} 无因子 {factor_key}')
    try:
        from strategy_sdk.factor_engine import compute_cross_section_factors
        from factor_ic import build_detail_panels, build_factor_detail
        symbols = list(getattr(st, 'universe', []) or [])
        if not symbols:
            symbols = [f'{600000 + i:06d}.SH' for i in range(24)]
        portal, is_real = _resolve_portal(universe=symbols)
        fields = list(spec.inputs or ['close'])
        panel = portal.get_panel(fields, start=start_date, end=end_date, universe=symbols)
        factor_values = compute_cross_section_factors(panel, [spec])
        if not factor_values:
            return {'factor_key': factor_key, 'sid': sid, 'detail': {},
                    'data_degraded': not is_real,
                    'message': '因子计算无有效值(数据不足)'}
        fv = factor_values[factor_key]
        returns = _future_returns(panel)
        # 数据不可达时 returns 可能全 NaN → 详情降级
        panels = build_detail_panels(fv, returns, n_layers=n_layers)
        meta = {
            'name': factor_key,
            'category': getattr(spec, 'category', ''),
            'description': getattr(spec, 'description', ''),
            'params': dict(getattr(spec, 'params', {}) or {}),
            'inputs': list(getattr(spec, 'inputs', []) or []),
        }
        detail = build_factor_detail(panels['ic_panel'], panels['layer_panel'],
                                     meta, n_factors_tested=int(body.get('n_factors_tested', 10)))
        detail['decay_report'] = panels['decay_report']
        return {'factor_key': factor_key, 'sid': sid, 'detail': detail,
                'data_degraded': not is_real,
                'date_range': [start_date, end_date]}
    except Exception as e:
        logger.exception('因子详情失败: %s', e)
        raise HTTPException(status_code=500, detail=f'因子详情失败: {e}')


@router.post('/factors/layer')
async def factor_layer_research(body: Dict[str, Any],
                                _: Dict = Depends(get_non_guest_user)):
    """因子分层回测: 按因子值分 n 层, 观察分层收益单调性"""
    sid = body.get('sid', 'multi_factor')
    factor_key = body.get('factor_key', 'mom20')
    n_layers = int(body.get('n_layers', 5))
    # v7.14 (FR-2): 默认窗口动态化
    _dstart, _dend = await _default_research_range(months=6)
    start_date = body.get('start_date') or _dstart
    end_date = body.get('end_date') or _dend
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
        portal, is_real = _resolve_portal(universe=symbols)
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
        # v7.14 (FR-3): 数据降级透明化
        result['data_degraded'] = not is_real
        # T-5.1.2: 研究历史持久化 (静默失败不影响返回)
        _record_experiment(
            'layer', f'{sid}/{factor_key}',
            {'factor_key': factor_key, 'n_layers': n_layers},
            [start_date, end_date],
            {'layers': result.get('layers'), 'monotonic': result.get('monotonic'),
             'spread': result.get('spread')},
            {'result': result})
        return result
    except Exception as e:
        logger.exception('因子分层回测失败: %s', e)
        raise HTTPException(status_code=500, detail=f'因子分层回测失败: {e}')


# 6.3.0 (T-6.3.0.4): 自定义策略 / 研究历史路由拆至子模块, 以子路由挂载 (路径与注册顺序不变)
from .strategy_research_custom import router as _custom_router  # noqa: E402
from .strategy_research_history import router as _history_router  # noqa: E402

router.include_router(_custom_router)
router.include_router(_history_router)
