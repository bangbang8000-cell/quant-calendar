#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略研究支撑层 (v7.14 自 strategy_research.py 拆出, 使主路由文件回到 ≤700 行门禁内)

- 动态研究窗口 (FR-7.14 FR-2)
- 数据门户解析 (FR: 数据层, 真实三源优先 / FakePortal 降级)
- 研究实验持久化 (T-5.1.2)
- 面板工具 (日期序列 / 次日收益近似)
"""
import asyncio
import logging
from typing import Optional

from research_store import save_experiment

logger = logging.getLogger(__name__)


# ─── v7.14 (FR-2 / P0-2): 动态研究窗口 — 替代硬编码默认日期 ────────────────────
async def default_research_range(months: int = 6) -> tuple:
    """动态研究窗口: end=数据中心最近交易日(兜底今天), start=end-约 months 个月。

    取数失败(数据源不可用)时兜底为今天, 保证窗口永远跟随当前时间而非过期硬编码。
    """
    from datetime import date, timedelta
    end = ''
    try:
        from data_sources import data_source_manager
        latest = await asyncio.to_thread(data_source_manager.get_index_daily, '000300.SH', None)
        td = str(latest.get('trade_date') or '')
        if len(td) == 8:
            end = td[:4] + '-' + td[4:6] + '-' + td[6:8]
    except Exception as e:
        logger.info('最近交易日探测失败, 兜底今天: %s', e)
    if not end or len(end) != 10:
        end = date.today().isoformat()
    start = (date.fromisoformat(end) - timedelta(days=int(months * 30))).isoformat()
    return start, end


def scale_equity_to_capital(result: dict, initial_capital: float) -> dict:
    """v7.19 (T3.1): 把回测引擎的「净值倍数」序列换算成金额序列。

    引擎产出 equity_curve 起点为 1.0（无量纲倍数），金额本身不参与收益计算 ——
    这里按 initial_capital 换算，并给出期末权益与总盈亏；原始倍数保留在
    equity_curve_index，避免破坏需要无量纲曲线的既有图表口径。
    """
    if not isinstance(result, dict):
        return result
    result['initial_capital'] = initial_capital
    curve = result.get('equity_curve') or []
    if not curve:
        return result
    # v7.24 FR-2: T+1 撮合路径产出的是金额序列，不再二次放大
    if result.get('execution_mode') == 'T+1_open':
        amounts = [round(float(x), 2) for x in curve if x is not None]
        if not amounts:
            return result
        result['equity_curve_index'] = [round(x / initial_capital, 6) for x in amounts]
        result['equity_curve'] = amounts
        result['final_equity'] = amounts[-1]
        result['total_pnl'] = round(amounts[-1] - initial_capital, 2)
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


def attach_lookahead_flags(strategies) -> None:
    """v7.24 FR-3: 策略列表标注未来函数检查状态（未检查过则不阻塞列表）。"""
    try:
        from lookahead_guard import get_strategy_lookahead
        for s in strategies or []:
            rep = get_strategy_lookahead(s.get('id'), compute=False)
            if rep:
                s['lookahead_passed'] = bool(rep.get('passed'))
                s['lookahead_reason'] = rep.get('reason', '')
                s['credible'] = bool(rep.get('passed'))
    except Exception as e:  # noqa: BLE001
        logger.info('未来函数报告标注跳过: %s', e)


def attach_lookahead_credibility(result: dict, sid: str) -> None:
    """v7.24 FR-3: 回测结果挂未来函数结论并重算可信度（未通过即阻断展示）。"""
    try:
        from credibility_guard import evaluate_backtest_credibility
        from lookahead_guard import get_strategy_lookahead
        rep = get_strategy_lookahead(sid)
        if not rep:
            return
        result['lookahead'] = rep
        result['lookahead_passed'] = bool(rep.get('passed'))
        result['lookahead_reason'] = rep.get('reason', '')
        result['credibility'] = evaluate_backtest_credibility(result)
    except Exception as e:  # noqa: BLE001
        logger.info('未来函数门禁跳过(%s): %s', sid, e)


def default_end_sync() -> str:
    """同步版动态终点(最近工作日), 供 FakePortal 模拟窗口与 as_of 兜底使用。"""
    from datetime import date, timedelta
    d = date.today()
    while d.weekday() >= 5:
        d -= timedelta(days=1)
    return d.isoformat()


def date_range(start: str, end: str, max_days: int) -> list:
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


def future_returns(panel):
    """由面板收盘价生成次日收益(近似未来收益, 研究演示用)"""
    close = panel['close'].unstack('symbol')
    return close.pct_change().shift(-1)


def record_experiment(etype: str, subject: str, params: dict,
                      date_range_: list, summary: dict, result: dict = None,
                      app_version: str = '5.1.0') -> str | None:
    """研究历史持久化 (T-5.1.2 / FR-5.1.0.2): 把一次研究运行写入实验存储。

    静默失败(不阻塞主流程): 存储异常仅记录日志, 不影响研究结果返回。
    返回实验 id (写入成功) 或 None (跳过)。
    """
    try:
        from backend_info import APP_VERSION as _V  # 运行时取真实版本号
        _ver = _V
    except Exception:
        _ver = app_version
    try:
        return save_experiment({
            'type': etype,
            'subject': subject,
            'params': params or {},
            'date_range': date_range_ or [],
            'app_version': _ver,
            'summary': summary or {},
            'result': result or {},
        })
    except Exception as e:
        logger.warning('[research_store] 实验记录跳过: %s', e)
        return None


def resolve_portal(universe: Optional[list] = None, seed: int = 2026) -> tuple:
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
    # v7.14 (FR-2): 模拟数据窗口动态化(最近工作日往前约4个月), 不再硬编码
    from datetime import date, timedelta
    _end = date.fromisoformat(default_end_sync())
    _start = _end - timedelta(days=120)
    dates = date_range(_start.isoformat(), _end.isoformat(), 40)
    symbols = universe or [f'{600000 + i:06d}.SH' for i in range(24)]
    return FakePortal(dates=dates, symbols=symbols, seed=seed), False


def symbol_names(symbols):
    """v7.19 (FR-9): 代码 → 中文名批量映射（只查本地名称库，不发网络请求）。

    缺失的代码**不写入**（前端据此渲染 `—`），避免旧行为「代码即名称」的伪装。
    """
    if not symbols:
        return {}
    try:
        from stock_info import stock_manager
    except Exception:  # noqa: BLE001
        return {}
    out = {}
    for code in symbols:
        try:
            name = stock_manager.get_name(code)
        except Exception:  # noqa: BLE001
            name = ''
        if name and name != code:
            out[code] = name
    return out
