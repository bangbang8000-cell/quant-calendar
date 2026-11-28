#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar: 前视偏差守卫 (lookahead_guard) — T-5.1.22 / FR-5.1.2.2

回测纪律: t 日信号 → t+1 成交。审计两类前视违规:
  1. 信号日与成交日同日 (应至少延迟 1 个交易日)
  2. 用信号日收盘价同日成交 (应次日开盘价成交)

v7.24 FR-3: 增加「未来函数截断检查」——对 T 日之后的数据做截断，信号不得变化。
用确定性合成面板离线跑内置策略，产出批量检查报告（不依赖网络/DWH）。

纯函数可测, 不依赖数据源。接入 BacktestEngine 作为执行前审计门。
"""
import hashlib
import json
import logging
import os
import time
from typing import Dict, List, Optional

import numpy as np
import pandas as pd

logger = logging.getLogger(__name__)

# ---- v7.24 FR-3: 未来函数截断检查 ----
SYNTHETIC_DAYS = 420
SYNTHETIC_END = '2024-12-31'
DEFAULT_UNIVERSE = ['600000.SH', '600004.SH', '600519.SH', '601318.SH',
                    '600036.SH', '601166.SH', '600030.SH', '601888.SH']
_CACHE_TTL = 1800.0
_CACHE: Dict = {'ts': 0.0, 'entries': {}}


class SyntheticPortal:
    """确定性合成行情面板（未来函数检查专用，绝不写缓存、不访问网络）。

    同一 symbol 的序列由固定种子生成，按日期截断结果与全量结果逐值一致，
    因此「截断后信号发生变化」必然来自策略读取了未来数据。
    """

    _KNOWN = ('open', 'high', 'low', 'close', 'volume', 'amount', 'pe', 'pb', 'ps',
              'dv_ratio', 'total_mv', 'circ_mv', 'float_mv', 'main_net_inflow',
              'turnover_ratio', 'limit_type', 'limit_times', 'open_times', 'seal_time')

    def __init__(self, universe: Optional[List[str]] = None,
                 days: int = SYNTHETIC_DAYS, end: str = SYNTHETIC_END):
        self.universe = list(universe or DEFAULT_UNIVERSE)
        self.days = int(days)
        self.end = str(end)
        self.start = ''
        self._frames = {sym: self._make_frame(sym) for sym in self.universe}
        self.start = min(f.index.min() for f in self._frames.values())

    def _make_frame(self, symbol: str) -> pd.DataFrame:
        seed = int(hashlib.md5(symbol.encode('utf-8')).hexdigest()[:8], 16)
        rng = np.random.RandomState(seed)
        dates = pd.bdate_range(end=self.end, periods=self.days).strftime('%Y-%m-%d')
        n = len(dates)
        base = 8.0 + (seed % 90)
        close = base * np.cumprod(1.0 + rng.normal(0.0004, 0.018, n))
        open_ = close * (1.0 + rng.normal(0.0, 0.008, n))
        high = np.maximum(open_, close) * (1.0 + np.abs(rng.normal(0.0, 0.006, n)))
        low = np.minimum(open_, close) * (1.0 - np.abs(rng.normal(0.0, 0.006, n)))
        volume = rng.lognormal(13.5, 0.45, n)
        df = pd.DataFrame({
            'open': open_, 'high': high, 'low': low, 'close': close,
            'volume': volume, 'amount': close * volume,
            'pe': 12 + np.cumsum(rng.normal(0.0, 0.15, n)),
            'pb': 2.0 + np.cumsum(rng.normal(0.0, 0.02, n)),
            'ps': 2.5 + np.cumsum(rng.normal(0.0, 0.02, n)),
            'dv_ratio': 2.0 + rng.normal(0.0, 0.2, n),
            'total_mv': close * 1.2e9, 'circ_mv': close * 9e8, 'float_mv': close * 9e8,
            'main_net_inflow': rng.normal(0.0, 8e6, n),
            'turnover_ratio': rng.uniform(1.0, 8.0, n),
            'limit_type': np.zeros(n), 'limit_times': np.zeros(n),
            'open_times': np.zeros(n), 'seal_time': np.full(n, 100000.0),
        }, index=dates)
        return df

    def get_panel(self, fields: List[str], start: str, end: str,
                  universe: Optional[List[str]] = None,
                  max_workers: int = 1) -> pd.DataFrame:
        syms = [s for s in (universe or self.universe) if s in self._frames]
        syms = syms or list(self.universe)
        s = str(start or self.start)[:10]
        e = str(end or self.end)[:10]
        if e < s:
            return pd.DataFrame()
        frames = []
        for sym in syms:
            df = self._frames[sym]
            sub = df[(df.index >= s) & (df.index <= e)]
            if sub.empty:
                continue
            idx = pd.MultiIndex.from_arrays([sub.index, [sym] * len(sub)],
                                            names=['date', 'symbol'])
            out = pd.DataFrame(index=idx)
            for f in fields:
                out[f] = sub[f].values if f in sub.columns else np.zeros(len(sub))
            frames.append(out)
        if not frames:
            return pd.DataFrame()
        return pd.concat(frames).sort_index()


class PerturbedPortal(SyntheticPortal):
    """把 cutoff 之后的数据整体扰动（价格×1.7、成交量×2.5）。

    与全量面板共用同一日期轴，仅改变"未来"部分；若策略在 ≤cutoff 的信号因此变化，
    说明它读取了未来数据。比截断更适合回看窗口随 as_of 平移的策略。
    """

    def __init__(self, base: SyntheticPortal, cutoff: str):
        self.universe = base.universe
        self.days = base.days
        self.end = base.end
        self.start = base.start
        self.cutoff = cutoff
        self._frames = {}
        price_cols = ('open', 'high', 'low', 'close', 'amount', 'pe', 'pb', 'ps',
                      'dv_ratio', 'total_mv', 'circ_mv', 'float_mv',
                      'main_net_inflow', 'turnover_ratio')
        for sym, df in base._frames.items():
            d = df.copy()
            mask = d.index > cutoff
            for col in price_cols:
                if col in d.columns:
                    d.loc[mask, col] = d.loc[mask, col] * 1.7
            if 'volume' in d.columns:
                d.loc[mask, 'volume'] = d.loc[mask, 'volume'] * 2.5
            self._frames[sym] = d


class SpyPortal:
    """记录策略实际请求的 end（用于发现绕过 ctx.panel 的越界取数）。"""

    def __init__(self, base):
        self.base = base
        self.ends: List[str] = []

    def get_panel(self, fields: List[str], start: str, end: str,
                  universe: Optional[List[str]] = None, max_workers: int = 1) -> pd.DataFrame:
        self.ends.append(str(end)[:10] if end else '')
        return self.base.get_panel(fields, start, end, universe, max_workers=max_workers)


def _signal_cells(df: Optional[pd.DataFrame]) -> Dict[str, Dict[str, float]]:
    """持仓矩阵 → {date: {symbol: weight}}（仅保留 >0 的非空值）。"""
    if df is None or not isinstance(df, pd.DataFrame) or df.empty:
        return {}
    out: Dict[str, Dict[str, float]] = {}
    for d in df.index:
        row = df.loc[d]
        if isinstance(row, pd.DataFrame):  # 重复索引兜底
            row = row.iloc[0]
        cells = {}
        for c, v in row.items():
            try:
                fv = float(v)
            except (TypeError, ValueError):
                continue
            if fv == fv and fv > 0:
                cells[str(c)] = fv
        if cells:
            out[str(d)[:10]] = cells
    return out


def check_strategy_truncation(strategy, portal: Optional[SyntheticPortal] = None,
                              cutoff_ratio=None) -> Dict:
    """未来函数检查（两重）：

    1. 动态（扰动）：把末尾若干交易日的数据扰动，末段之前的信号必须逐值不变；
    2. 契约（仅最新日信号策略）：门户已强制 end=as_of，检查是否发生越界取数。

    返回 {strategy_id, name, passed, reason, method, cutoff, checked_days,
          changed_cells, signals_full, signals_perturbed, violations, error}。
    """
    sid = getattr(strategy, 'id', '') or type(strategy).__name__
    name = getattr(strategy, 'name', '') or sid
    portal = portal or SyntheticPortal()
    all_dates = sorted(portal._frames[portal.universe[0]].index.tolist())
    as_of = all_dates[-1]
    # 末尾 25 个交易日作为"未来"被扰动，其余作为可比对的历史区间
    tail = max(5, min(25, len(all_dates) // 10))
    cutoff = all_dates[-tail - 1]
    spy = SpyPortal(portal)
    perturbed_portal = PerturbedPortal(portal, cutoff)
    try:
        full = strategy.generate_signals(strategy.context(spy, {}, as_of))
        pert = strategy.generate_signals(strategy.context(perturbed_portal, {}, as_of))
    except Exception as e:  # 策略执行异常 → 视为不可信（定位信息保留）
        logger.warning('[lookahead] 策略 %s 执行异常: %s', sid, e)
        return {
            'strategy_id': sid, 'name': name, 'passed': False,
            'reason': '策略执行异常：%s' % e, 'method': 'error', 'cutoff': cutoff,
            'checked_days': 0, 'changed_cells': 0,
            'signals_full': 0, 'signals_perturbed': 0,
            'violations': [], 'error': str(e),
        }
    full_cells = _signal_cells(full)
    pert_cells = _signal_cells(pert)
    # 只比较 ≤ cutoff 的日期
    full_before = {d: v for d, v in full_cells.items() if d <= cutoff}
    pert_before = {d: v for d, v in pert_cells.items() if d <= cutoff}
    violations = []
    changed = 0
    for d in sorted(set(full_before) | set(pert_before)):
        a = full_before.get(d) or {}
        b = pert_before.get(d) or {}
        for sym in sorted(set(a) | set(b)):
            va, vb = a.get(sym, 0.0), b.get(sym, 0.0)
            if abs(va - vb) > 1e-9:
                changed += 1
                if len(violations) < 10:
                    violations.append({'date': d, 'symbol': sym,
                                       'full': round(va, 6), 'perturbed': round(vb, 6)})
    over_leak = sorted({e for e in spy.ends if e and e > as_of})
    checked_days = len(set(full_before) | set(pert_before))
    method = 'dynamic' if checked_days else 'contract'
    passed = changed == 0 and not over_leak
    if over_leak:
        reason = '策略请求了 as_of(%s) 之后的数据：%s' % (as_of, ', '.join(over_leak))
    elif not passed:
        reason = '扰动 %s 之后数据，此前信号变化 %d 处（疑似读取未来数据）' % (cutoff, changed)
    elif method == 'dynamic':
        reason = '扰动 %s 之后数据，此前 %d 日信号不变' % (cutoff, checked_days)
    else:
        reason = '仅最新日信号；门户已强制 end=as_of，未发现越界取数'
    return {
        'strategy_id': sid, 'name': name, 'passed': passed, 'reason': reason,
        'method': method, 'cutoff': cutoff,
        'checked_days': checked_days, 'changed_cells': changed,
        'signals_full': sum(len(v) for v in full_cells.values()),
        'signals_perturbed': sum(len(v) for v in pert_cells.values()),
        'violations': violations, 'error': None,
    }


def _report_path() -> str:
    try:
        from paths import DATA_DIR
        return os.path.join(DATA_DIR, 'lookahead_report.json')
    except Exception:
        return ''


def _cache_fresh() -> bool:
    return bool(_CACHE['entries']) and (time.time() - float(_CACHE['ts']) < _CACHE_TTL)


def _load_persisted() -> Dict:
    path = _report_path()
    if not path or not os.path.exists(path):
        return {}
    try:
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f) or {}
        return {r['strategy_id']: r for r in (data.get('results') or [])
                if isinstance(r, dict) and r.get('strategy_id')}
    except Exception as e:
        logger.warning('读取未来函数报告失败: %s', e)
        return {}


def _persist(entries: Dict) -> None:
    path = _report_path()
    if not path:
        return
    try:
        from reliability.atomic import atomic_write_json
        results = sorted(entries.values(), key=lambda r: r.get('strategy_id', ''))
        atomic_write_json(path, {
            'generated_at': time.strftime('%Y-%m-%d %H:%M:%S'),
            'total': len(results),
            'passed': sum(1 for r in results if r.get('passed')),
            'failed': sum(1 for r in results if not r.get('passed')),
            'results': results,
        })
    except Exception as e:
        logger.warning('写入未来函数报告失败: %s', e)


def get_strategy_lookahead(sid: str, compute: bool = True,
                           portal: Optional[SyntheticPortal] = None) -> Optional[Dict]:
    """单策略检查结果（优先内存缓存 → 落盘报告 → 按需计算）。"""
    if _cache_fresh() and sid in _CACHE['entries']:
        return _CACHE['entries'][sid]
    persisted = _load_persisted()
    if sid in persisted:
        _CACHE['entries'].update(persisted)
        _CACHE['ts'] = time.time()
        return persisted[sid]
    if not compute:
        return None
    try:
        from strategy_sdk.registry import registry
        st = registry.get(sid)
    except Exception:
        return None
    rep = check_strategy_truncation(st, portal)
    _CACHE['entries'][sid] = rep
    _CACHE['ts'] = time.time()
    return rep


def build_lookahead_report(refresh: bool = False,
                           portal: Optional[SyntheticPortal] = None) -> Dict:
    """17(实为注册表内全部)内置策略批量未来函数检查报告。"""
    from strategy_sdk.registry import registry
    strategies = registry.objects()
    if refresh:
        _CACHE['entries'] = {}
        _CACHE['ts'] = 0.0
    elif _cache_fresh() and len(_CACHE['entries']) >= len(strategies):
        pass
    else:
        persisted = _load_persisted()
        for sid, rep in persisted.items():
            _CACHE['entries'].setdefault(sid, rep)
    portal = portal or SyntheticPortal(strategies[0].universe
                                       if getattr(strategies[0], 'universe', None) else None)
    for st in strategies:
        sid = getattr(st, 'id', '')
        if sid and sid not in _CACHE['entries']:
            _CACHE['entries'][sid] = check_strategy_truncation(st, portal)
    _CACHE['ts'] = time.time()
    results = [_CACHE['entries'][st.id] for st in strategies if st.id in _CACHE['entries']]
    report = {
        'generated_at': time.strftime('%Y-%m-%d %H:%M:%S'),
        'total': len(results),
        'passed': sum(1 for r in results if r.get('passed')),
        'failed': sum(1 for r in results if not r.get('passed')),
        'results': results,
    }
    _persist(_CACHE['entries'])
    return report


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
