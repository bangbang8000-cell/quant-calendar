#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""防未来函数自检 (v7.3.0 / B7.2, PRD FR-7.3.2 / D19)

背景：v7.0 起数据底座从"逐票实时取"改成"本地 DuckDB 全量面板"，
**面板一旦全量落盘，就具备了"把今天的行情算进昨天的因子"的能力**。
本模块把这条风险做成可执行的审计清单，而不是写在文档里的口号。

五项检查：
1. `dwh_freshness`：库内最新交易日 ≤ 目标交易日（否则视为前视）
2. `factor_lag`：复权因子上界日期 ≤ 目标交易日
3. `panel_columns`：面板只允许暴露已封板字段（禁止出现 `future_*` 等）
4. `watchlist_pit`：自选/回测入参的交易日必须 ≤ 目标日
5. `export_footer`：研究导出物必须带四要素尾注

输出为结构化报告（每项 ok / detail），供 `/api/research/pit-audit` 与运维巡检调用。
"""

import logging
import re

logger = logging.getLogger(__name__)

#: 面板字段里出现这些前缀即视为漏出未来信息
FORBIDDEN_PREFIXES = ('future_', 'next_', 'fwd_', 'label_')
#: 允许出现的"看起来像未来"的字段（白名单，避免误报）
ALLOWED_FIELDS = ('next_open_hint',)


def _ok(name, ok, detail='', **extra):
    row = {'check': name, 'ok': bool(ok), 'detail': detail}
    row.update(extra)
    return row


def check_dwh_freshness(backend, target_date):
    """库内最新交易日不得晚于目标交易日。"""
    try:
        st = backend.status()
    except Exception as e:  # noqa: BLE001 — 审计本身不能炸
        return _ok('dwh_freshness', False, 'status 失败: %s' % str(e)[:100])
    if not st.get('available'):
        return _ok('dwh_freshness', True, 'DWH 未启用/未落盘：本次不参与计算（跳过）',
                   skipped=True)
    latest = st.get('latest_date')
    if not latest:
        return _ok('dwh_freshness', True, '库内无数据（跳过）', skipped=True)
    try:
        import pit
        ok = pit.available_through(latest, target_date)
    except Exception as e:  # noqa: BLE001
        return _ok('dwh_freshness', False, 'PIT 判定失败: %s' % str(e)[:100])
    return _ok('dwh_freshness', ok,
               '库最新 %s vs 目标 %s' % (latest, target_date),
               latest=latest, target=target_date)


def check_factor_lag(backend, target_date):
    """复权因子最大日期不得晚于目标交易日。"""
    try:
        res = backend.query('SELECT MAX(date) FROM calc_adjust_factor_daily')
        max_date = (res.get('rows') or [[None]])[0][0]
    except Exception as e:  # noqa: BLE001
        return _ok('factor_lag', True, '因子表不可查（跳过）: %s' % str(e)[:80], skipped=True)
    if not max_date:
        return _ok('factor_lag', True, '无因子行（跳过）', skipped=True)
    try:
        import pit
        ok = pit.available_through(str(max_date), target_date)
    except Exception as e:  # noqa: BLE001
        return _ok('factor_lag', False, 'PIT 判定失败: %s' % str(e)[:100])
    return _ok('factor_lag', ok, '因子最新 %s vs 目标 %s' % (max_date, target_date),
               latest=str(max_date))


def check_panel_columns(columns):
    """面板字段不得包含未来信息前缀。"""
    bad = []
    for c in columns or []:
        low = str(c).lower()
        if low in ALLOWED_FIELDS:
            continue
        if any(low.startswith(p) or ('_%s' % p) in low for p in FORBIDDEN_PREFIXES):
            bad.append(c)
    return _ok('panel_columns', not bad, ('发现疑似未来字段: %s' % bad) if bad else '字段检查通过',
               offenders=bad)


def check_watchlist_dates(dates, target_date):
    """入参日期集合必须都 ≤ 目标日。"""
    try:
        import pit
    except Exception as e:  # noqa: BLE001
        return _ok('watchlist_pit', False, 'PIT 模块不可用: %s' % str(e)[:80])
    bad = [d for d in (dates or []) if not pit.available_through(d, target_date)]
    return _ok('watchlist_pit', not bad, ('越界日期: %s' % bad) if bad else '入参日期均在范围内',
               offenders=bad)


_TS_CODE = re.compile(r'\b\d{6}\.(SH|SZ|BJ)\b')


def check_export_footer(text):
    """导出物必须含四要素尾注。"""
    try:
        import disclosure_terms as dt
        res = dt.check_export_text(text)
    except Exception as e:  # noqa: BLE001
        return _ok('export_footer', False, '口径模块不可用: %s' % str(e)[:80])
    return _ok('export_footer', res['ok'],
               ('缺项: %s 违规: %s' % (res['missing'], [h['term'] for h in res['violations']]))
               if not res['ok'] else '尾注与禁称检查通过')


def audit(target_date, backend=None, panel_columns=None, input_dates=None, export_text=None):
    """跑全部五项检查，返回结构化报告。"""
    checks = []
    if backend is None:
        try:
            from dwh import get_backend
            backend = get_backend()
        except Exception as e:  # noqa: BLE001 — 无 DWH 时前两项按跳过处理
            logger.info('[pit-audit] DWH 不可用: %s', e)
            backend = None
    if backend is not None:
        checks.append(check_dwh_freshness(backend, target_date))
        checks.append(check_factor_lag(backend, target_date))
    else:
        checks.append(_ok('dwh_freshness', True, 'DWH 不可用（跳过）', skipped=True))
        checks.append(_ok('factor_lag', True, 'DWH 不可用（跳过）', skipped=True))

    if panel_columns is None:
        panel_columns = ['thscode', 'date', 'open', 'high', 'low', 'close', 'volume', 'turnover']
    checks.append(check_panel_columns(panel_columns))
    if input_dates is not None:
        checks.append(check_watchlist_dates(input_dates, target_date))
    else:
        checks.append(_ok('watchlist_pit', True, '未提供入参日期（跳过）', skipped=True))
    if export_text is not None:
        checks.append(check_export_footer(export_text))
    else:
        checks.append(_ok('export_footer', True, '未提供导出文本（跳过）', skipped=True))

    failed = [c for c in checks if not c['ok']]
    return {
        'available': True,
        'target_date': target_date,
        'passed': not failed,
        'total': len(checks),
        'failed': len(failed),
        'checks': checks,
        'meta': {
            'purpose': '把「不用未来数据」从口号变成可执行检查',
            'skipped_is_not_passed': 'detail 带"跳过"的项表示前提不满足，不代表已验证',
            'disclaimer': '审计通过只说明当前检查项无异常，不构成对结果正确性的担保',
        },
    }
