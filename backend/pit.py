#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.1 T-5.1.3: PIT 治理 — 防前视 (Point-In-Time) 守卫

四条取数路径 (评估/回测/因子/日历) 的数据必须满足 end <= as_of, 杜绝前视偏差。
- pit_filter(rows, as_of, tolerance_days, strict): 过滤未来数据; strict 时抛 PitError
- assert_pit(...): 纯断言, 无违规返回 None
- PATH_PIT_GUARDS: 四路径守卫注册表 (各路径容差见 PATH_TOLERANCE)
- DataPortal.fetch(as_of=...): 统一取数层按 as_of 过滤 (PIT 进主链路)

测试: tests/test_pit_no_lookahead.py (四路径断言, TEST-PLAN 强制门禁)。
"""
from datetime import date, timedelta

logger = __import__("logging").getLogger(__name__)


class PitError(Exception):
    """前视偏差: 数据中存在 trade_date > as_of 的行 (lookahead bias)。"""


def _parse_day(v):
    if v is None:
        return None
    s = str(v)[:10]
    try:
        return date.fromisoformat(s)
    except ValueError:
        return None


def pit_filter(rows, as_of, tolerance_days=0, strict=True):
    """PIT 守卫: 保留 trade_date <= as_of(+容差) 的行。

    - strict=True: 存在未来数据 → 抛 PitError (断言模式)
    - strict=False: 静默过滤未来行 (安全默认, 供 DataPortal 集成)
    - 无 trade_date 的行原样保留 (无法判定则不误伤)
    """
    as_of_dt = _parse_day(as_of)
    if as_of_dt is None:
        raise PitError(f"无效 as_of: {as_of}")
    cutoff = as_of_dt + timedelta(days=tolerance_days)
    ok, bad = [], []
    for r in rows or []:
        d = _parse_day(r.get("trade_date"))
        if d is None:
            ok.append(r)
            continue
        (ok if d <= cutoff else bad).append(r)
    if bad and strict:
        dates = [r.get("trade_date") for r in bad[:5]]
        raise PitError(
            f"检测到前视数据 {len(bad)} 行 trade_date > as_of({as_of}"
            f"{'' if tolerance_days == 0 else ' +%dd' % tolerance_days}): {dates}")
    return ok


def assert_pit(rows, as_of, tolerance_days=0):
    """纯断言: 违规抛 PitError, 合规返回 None。"""
    pit_filter(rows, as_of, tolerance_days=tolerance_days, strict=True)
    return None


# ─── 四路径守卫注册表 ───
# evaluation=评估(严格0) / backtest=回测(容差1: 允许次日开盘价成交) / factor=因子(严格0) / calendar=日历(严格0)
PATH_TOLERANCE = {"evaluation": 0, "backtest": 1, "factor": 0, "calendar": 0}
PATH_LABELS = {"evaluation": "评估", "backtest": "回测", "factor": "因子", "calendar": "日历"}


def _path_guard(path, rows, as_of, strict=True):
    return pit_filter(rows, as_of,
                      tolerance_days=PATH_TOLERANCE.get(path, 0),
                      strict=strict)


def _make_guard(name):
    return lambda rows, as_of, strict=True, _n=name: _path_guard(_n, rows, as_of, strict)


PATH_PIT_GUARDS = {n: _make_guard(n) for n in PATH_TOLERANCE}
