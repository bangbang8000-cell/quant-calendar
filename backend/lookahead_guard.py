#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar: 前视偏差守卫 (lookahead_guard) — T-5.1.22 / FR-5.1.2.2

回测纪律: t 日信号 → t+1 成交。审计两类前视违规:
  1. 信号日与成交日同日 (应至少延迟 1 个交易日)
  2. 用信号日收盘价同日成交 (应次日开盘价成交)

纯函数可测, 不依赖数据源。接入 BacktestEngine 作为执行前审计门。
"""
from typing import Dict, List, Optional


def _sorted_dates(signals: Dict, fills: Dict) -> List[str]:
    dates = set(signals.keys()) | set(fills.keys())
    return sorted(dates)


def audit_execution_timing(signals: Dict[str, List[str]],
                           fills: Dict[str, List[str]],
                           fill_delay: int = 1) -> Dict:
    """审计 t 日信号 → t+1 成交 (符号级)。

    signals: {date: [code]}; fills: {date: [code]}。
    违规 = 同一符号在信号日 (或不足 fill_delay 天) 成交。
    返回 {compliant, violations:[{date, symbol, signal_date}], total_signals, total_fills}。
    """
    fill_delay = sanitize_execution_delay(fill_delay)
    violations = []
    total_signals = sum(len(v) for v in signals.values())
    total_fills = sum(len(v) for v in fills.values())
    dates = _sorted_dates(signals, fills)
    # 信号 → 期望最早成交日
    signal_by_symbol = {}  # symbol -> earliest allowed fill date (index)
    date_idx = {d: i for i, d in enumerate(dates)}
    for d in dates:
        for sym in signals.get(d, []):
            # 允许成交日 >= d 之后 fill_delay 天
            signal_by_symbol[sym] = date_idx[d] + fill_delay
    for d in dates:
        for sym in fills.get(d, []):
            earliest = signal_by_symbol.get(sym)
            if earliest is None:
                continue  # 未在信号中 → 不审计 (或视为非信号驱动)
            if date_idx[d] < earliest:
                violations.append({
                    'date': d, 'symbol': sym,
                    'signal_date': dates[max(0, earliest - fill_delay)],
                })
    return {
        'compliant': len(violations) == 0,
        'violations': violations,
        'total_signals': total_signals,
        'total_fills': total_fills,
    }


def detect_same_day_close_fill(signals: Dict[str, Dict[str, str]],
                               fills: Dict[str, Dict[str, float]]) -> Dict:
    """检测同日 close 成交 (价格级): 信号日声明 close 成交且同日成交 → 违规。

    signals: {date: {code: 'close'|'open'}}; fills: {date: {code: price}}。
    """
    violations = []
    for d, syms in signals.items():
        for sym, mode in syms.items():
            if mode != 'close':
                continue
            if d in fills and sym in fills.get(d, {}):
                violations.append({'date': d, 'symbol': sym,
                                   'fill_price': fills[d][sym]})
    return {
        'compliant': len(violations) == 0,
        'violations': violations,
        'total_close_signals': sum(
            1 for syms in signals.values()
            for mode in syms.values() if mode == 'close'),
    }


def sanitize_execution_delay(delay: int) -> int:
    """成交延迟至少 1 个交易日 (负值/0 → 1)。"""
    try:
        return max(1, int(delay))
    except (TypeError, ValueError):
        return 1


def lookahead_audit_report(signals, fills,
                           fills_price: Optional[Dict] = None) -> Dict:
    """综合前视审计报告: 执行时序 + 同日收盘价违规。

    signals/fills 支持符号级或价格级 (auto 检测)。
    """
    # 符号级时序审计
    sig_codes = {d: ([s if isinstance(s, str) else s for s in v] if isinstance(v, list)
                     else list(v.keys())) for d, v in signals.items()}
    fill_codes = {d: ([s if isinstance(s, str) else s for s in v] if isinstance(v, list)
                      else list(v.keys())) for d, v in fills.items()}
    timing = audit_execution_timing(sig_codes, fill_codes)
    # 价格级同日 close 审计
    close_violations = []
    for d, syms in signals.items():
        if isinstance(syms, dict):
            for sym, mode in syms.items():
                if mode == 'close' and d in fills and sym in fills.get(d, {}):
                    close_violations.append({'date': d, 'symbol': sym})
    all_violations = timing['violations'] + close_violations
    compliant = len(all_violations) == 0
    note = '前视审计通过 (t 日信号 → t+1 成交)' if compliant else         '前视审计发现 %d 处违规 (同日成交/同日收盘价成交), 回测可能前视' % len(all_violations)
    return {
        'compliant': compliant,
        'violations': all_violations,
        'timing': timing,
        'total_signals': timing['total_signals'],
        'total_fills': timing['total_fills'],
        'note': note,
    }
