#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""向量化回测引擎 (v7.10 FR-7.10-2)

定位: 事件驱动引擎(`strategy_sdk/backtest.py`)的**口径等价**加速实现, 用于参数扫描与批量研究。
设计取舍(见 ACCEPTANCE-v7.10.0):
- 不引入 vectorbt: 其 numba/二进制栈与本项目 numpy 2.4 + Python 3.11 锁文件存在冲突风险,
  且 KHunter 的原型本身未完成; 这里以 numpy 重写等价内核, 并用 `parity_check` 与事件引擎做逐日对齐测试。
- 口径严格对齐: t 日收益 × t-1 日权重(信号次日生效)、仅对权重>0 且收益非空的标的按权重归一、
  换手成本 = |权重变化| 之和 × 费率(单日上限 5%)。

限制(诚实标注): 引擎只消费"已给定的权重矩阵 + 收益矩阵", 不含撮合/涨跌停/停牌逻辑;
需要这些约束的场景仍走事件驱动引擎。
"""
import logging
from typing import Dict, List, Optional

import numpy as np
import pandas as pd

from backtest import compute_period_metrics

logger = logging.getLogger(__name__)

ANNUAL_TRADING_DAYS = 252
DAILY_COST_CAP = 0.05


def _norm_date(value) -> str:
    return str(value).replace("-", "").replace("/", "")[:8]


def _aligned(holdings: pd.DataFrame, returns: Optional[pd.DataFrame]):
    """索引/列对齐, 统一 YYYYMMDD 与 float 矩阵"""
    h = holdings.copy()
    h.index = [_norm_date(d) for d in h.index]
    h = h.sort_index()
    if returns is None:
        return h, None
    r = returns.copy()
    r.index = [_norm_date(d) for d in r.index]
    r = r.reindex(index=h.index, columns=h.columns)
    return h, r


def vector_backtest(holdings: pd.DataFrame, returns: Optional[pd.DataFrame] = None,
                    commission_rate: float = 0.0003, slippage: float = 0.001,
                    annual_trading_days: int = ANNUAL_TRADING_DAYS,
                    risk_free_rate: float = 0.03,
                    cost_rate: Optional[float] = None) -> Dict:
    """向量化回测: 一次矩阵运算得到逐日收益/净值/换手成本。

    Args:
        cost_rate: 单位换手总成本率(覆盖 commission_rate+slippage 的简化口径)。
            与事件引擎对齐时必须显式传入 `CostModel.turnover_rate()`, 因为后者的
            费率还包含印花税/2 与冲击成本, 仅给 commission+slippage 会低估成本。

    Returns:
        {success, daily_returns, net_returns, equity_curve, metrics, turnover, days}
        失败时 {success: False, message}
    """
    if holdings is None or len(holdings) == 0:
        return {"success": False, "message": "持仓矩阵为空, 无法回测"}
    if returns is None:
        return {"success": False, "message": "向量化引擎需要显式收益矩阵(不做模拟行情)"}
    h, r = _aligned(holdings, returns)
    if len(h) < 2:
        return {"success": False, "message": f"有效日期不足 (需>=2, 实际 {len(h)})"}

    w = h.to_numpy(dtype=float, na_value=0.0)
    g = r.to_numpy(dtype=float)
    w_prev = np.vstack([np.zeros((1, w.shape[1])), w[:-1]])
    mask = (w_prev > 0) & np.isfinite(g)
    num = np.where(mask, w_prev * np.nan_to_num(g, nan=0.0), 0.0).sum(axis=1)
    den = np.where(mask, w_prev, 0.0).sum(axis=1)
    gross = np.divide(num, den, out=np.full_like(num, np.nan), where=den > 0)

    if cost_rate is None:
        rate = float(commission_rate) + float(slippage)
    else:
        rate = float(cost_rate)
    if rate < 0:
        return {"success": False, "message": "成本率不能为负"}
    delta = np.abs(np.diff(w, axis=0, prepend=np.zeros((1, w.shape[1])))).sum(axis=1)
    costs = np.minimum(delta * rate, DAILY_COST_CAP)
    costs[0] = 0.0

    keep = np.isfinite(gross)
    days = int(keep.sum())
    if days < 2:
        return {"success": False, "message": "行情收益数据不足, 无法计算绩效"}
    daily = gross[keep].tolist()
    net = (gross - costs)[keep].tolist()

    equity, acc = [], 1.0
    for x in net:
        acc *= 1.0 + x
        equity.append(round(acc, 6))
    metrics = compute_period_metrics(net, annual_trading_days, risk_free_rate)
    return {
        "success": True,
        "days": days,
        "daily_returns": [round(x, 6) for x in daily],
        "net_returns": [round(x, 6) for x in net],
        "equity_curve": equity,
        "turnover": [round(float(x), 6) for x in delta[keep].tolist()],
        "metrics": metrics,
        "engine": "vector",
        "cost_rate": round(rate, 6),
    }


def parity_check(holdings: pd.DataFrame, returns: pd.DataFrame,
                 tolerances: float = 1e-9,
                 cost_model=None) -> Dict:
    """与事件驱动引擎逐日对齐, 用于回归保护。

    对齐依据是两条链路各自产出的 `equity_curve`(累计净值, 均 round 到 6 位):
    逐元素比对同时覆盖「有效交易日集合是否相同」「逐日收益数值是否相同」
    「累计是否漂移」三件事 —— 任一日收益有偏差都会在净值上留下痕迹。
    (事件引擎不返回逐日收益序列, 故不直接比对日收益; 见 ACCEPTANCE-v7.10.0)

    Args:
        tolerances: 净值逐点最大允许偏差; 默认 1e-9(净值保留 6 位, 实际应为 0)
        cost_model: 两条链路共用的成本模型; 缺省为**真零成本**(四项费率全 0)。
            注意: `CostConfig(commission_rate=0, slippage=0)` 仍是含成本配置,
            印花税/2 与冲击成本会继续计入 `turnover_rate()`。

    Returns:
        {aligned, max_abs_diff, event_days, vector_days, message}
    """
    from strategy_sdk.backtest import backtest_holdings
    from cost_model import CostConfig, CostModel

    if cost_model is None:
        cost_model = CostModel(CostConfig(commission_rate=0.0, stamp_duty_rate=0.0,
                                         slippage=0.0, impact=0.0))
    rate = float(cost_model.turnover_rate())
    event = backtest_holdings(holdings, returns, cost_model=cost_model)
    if not event.get("success"):
        return {"aligned": False, "max_abs_diff": None, "event_days": 0,
                "vector_days": 0, "message": f"事件引擎失败: {event.get('message')}"}
    vec = vector_backtest(holdings, returns, cost_rate=rate)
    if not vec.get("success"):
        return {"aligned": False, "max_abs_diff": None, "event_days": 0,
                "vector_days": 0, "message": vec.get("message")}

    a = np.asarray(event.get("equity_curve") or [], dtype=float)
    b = np.asarray(vec.get("equity_curve") or [], dtype=float)
    if len(a) != len(b):
        return {"aligned": False, "max_abs_diff": None, "event_days": int(len(a)),
                "vector_days": int(len(b)),
                "message": f"有效交易日数不一致 (事件 {len(a)} / 向量 {len(b)})"}
    if len(a) == 0:
        return {"aligned": False, "max_abs_diff": None, "event_days": 0,
                "vector_days": 0, "message": "无重叠交易日"}
    diff = float(np.max(np.abs(a - b)))
    ok = diff <= tolerances
    return {
        "aligned": bool(ok),
        "max_abs_diff": diff,
        "event_days": int(len(a)),
        "vector_days": int(len(b)),
        "message": "逐日净值一致" if ok else "存在偏差, 需检查对齐口径",
    }


def sweep(holdings: pd.DataFrame, returns: pd.DataFrame,
          cost_grid: Optional[List[float]] = None) -> List[Dict]:
    """参数扫描示例: 不同成本档位下的年化/回撤, 展示向量化引擎的批量优势"""
    grid = cost_grid or [0.0, 0.0003, 0.001, 0.003]
    out = []
    for rate in grid:
        res = vector_backtest(holdings, returns, cost_rate=rate)
        if not res.get("success"):
            out.append({"cost_rate": rate, "error": res.get("message")})
            continue
        m = res["metrics"]
        out.append({"cost_rate": rate, "annual_return": m.get("annual_return"),
                    "max_drawdown": m.get("max_drawdown"),
                    "sharpe": m.get("sharpe"), "days": res["days"]})
    return out
