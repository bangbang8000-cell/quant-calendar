#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略工作台聚合端点（v7.19 / T3.2）

从 strategy_research.py 拆出：该文件在 T3.1/T3.2 之后超过 800 行硬上限（五维 E1），
而本端点与「策略列表/运行/回测」无共享状态，属于可独立演进的读模型，故单独成模块。
路由前缀与主模块相同（/strategies），由 main_new 一并注册。
"""
import logging
from typing import Any, Dict

from fastapi import APIRouter, Depends

from auth import get_non_guest_user
from strategy_db import list_runs
from strategy_sdk.registry import registry

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/strategies', tags=['策略研究'])


@router.get('/overview')
async def strategies_overview(_: Dict = Depends(get_non_guest_user)):
    """策略工作台首屏：一次请求拿到「策略元数据 + 纳管状态 + 最近运行 + 选股数 + 最近回测绩效」。

    为什么要有这个端点：策略管理页过去只有"选一个策略 → 点运行"的表单，
    用户看不到"我有几个策略、各自最后一次跑成什么样、现在管着多少只票"，
    必须先逐个点开才知道要操作谁（PRD 需求 ⑧：先罗列，再在列表上操作）。

    性能约定：runs 只做**一次**全量查询后按 sid 分组，不得在循环里逐策略查库
    （策略数增长时 N+1 会把首屏拖到秒级）。
    """
    from datetime import datetime, timedelta, timezone

    _now = datetime.now(timezone.utc).astimezone()
    strategies = registry.list()

    # 纳管状态（启用/调度）—— 缺失时降级为空 dict，不影响列表可用
    gov_state = {}
    try:
        import strategy_governance as gov
        gov_state = gov.get_state() or {}
    except Exception as e:  # noqa: BLE001
        logger.info('纳管状态读取失败(%s)，按未纳管展示', e)

    # 运行历史：一次查询 + 分组（禁止 N+1）
    runs_by_sid: Dict[str, list] = {}
    try:
        for r in list_runs(None, limit=400):
            runs_by_sid.setdefault(r.get('strategy_id') or '', []).append(r)
    except Exception as e:  # noqa: BLE001
        logger.info('运行历史读取失败(%s)，降级为空', e)

    # 选股数：优先读持仓文件（真实在管股票），失败则用最近一次运行的 symbol 数
    holdings_count: Dict[str, int] = {}
    try:
        from data_parser import parser as _parser
        for sid in [x['id'] for x in strategies]:
            try:
                h = _parser.get_strategy_holdings(sid) if hasattr(_parser, 'get_strategy_holdings') else None
                if h is not None:
                    holdings_count[sid] = len(h)
            except Exception:  # noqa: BLE001
                continue
    except Exception as e:  # noqa: BLE001
        logger.info('持仓读取失败(%s)，选股数回退运行摘要', e)

    _cut30 = _now - timedelta(days=30)
    items = []
    for st in strategies:
        sid = st['id']
        runs = runs_by_sid.get(sid) or []
        last = runs[0] if runs else None
        cnt30 = 0
        for r in runs:
            ts = r.get('started_at') or ''
            try:
                if datetime.fromisoformat(str(ts).replace('Z', '+00:00')).astimezone() >= _cut30:
                    cnt30 += 1
            except (ValueError, TypeError):
                continue
        summary = (last or {}).get('summary') or {}
        # 最近一次回测绩效：从运行摘要里取（口径写在 return_basis，避免把运行收益当回测收益）
        bt = {}
        for r in runs:
            if (r.get('mode') or '') == 'backtest' or 'total_return' in (r.get('summary') or {}):
                bt = r.get('summary') or {}
                break
        gov = gov_state.get(sid) or {}
        items.append({
            'id': sid,
            'name': st.get('name') or sid,
            'id_cn': st.get('id_cn') or st.get('name') or sid,
            'version': st.get('version'),
            'description': st.get('description') or '',
            'enabled': bool(gov.get('enabled', False)),
            'schedule': gov.get('schedule') or '',
            'holdings_count': holdings_count.get(sid, summary.get('symbol_count') or 0),
            'run_count_30d': cnt30,
            'last_run': None if not last else {
                'id': last.get('id'),
                'status': last.get('status'),
                'mode': last.get('mode') or '',
                'started_at': last.get('started_at'),
                'finished_at': last.get('finished_at'),
                'duration_ms': last.get('duration_ms'),
            },
            'last_backtest': {
                'total_return': bt.get('total_return'),
                'annual_return': bt.get('annual_return'),
                'max_drawdown': bt.get('max_drawdown'),
                'sharpe_ratio': bt.get('sharpe_ratio'),
            } if bt else None,
            'return_basis': 'last_backtest' if bt else 'none',
        })

    return {
        'items': items,
        'count': len(items),
        'as_of': _now.strftime('%Y-%m-%d'),
        'generated_at': _now.isoformat(timespec='seconds'),
        'degraded': bool(not runs_by_sid),
    }
