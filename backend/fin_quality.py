#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""财务质量分位 (v7.3.0 / B7.1, PRD FR-7.3.1)

数据来源（Fuyao，`period=annual|quarter` 必填）：
- `/api/a-share/financials/income-statements`
- `/api/a-share/financials/balance-sheets`
- `/api/a-share/financials/cash-flow-statements`

六个口径（全部可由三张表直接算出，不做模型估计）：
| 指标 | 公式 |
|---|---|
| ROE(摊薄近似) | 归母净利润 ÷ 期末股东权益 |
| 毛利率 | (营业收入 − 营业成本) ÷ 营业收入 |
| 净利率 | 净利润 ÷ 营业收入 |
| 资产负债率 | 总负债 ÷ 总资产 |
| 现金流质量 | 经营活动现金流净额 ÷ 净利润 |
| 营收增速 | (本期营收 ÷ 上期营收 − 1) × 100 |

**分位口径警示**：全市场分位需要 5500×3 次请求（远超配额），本模块的"分位"
一律是**传入股票池内的样本分位**，必须如实标注，不得冒充全市场分位。
"""

import logging

logger = logging.getLogger(__name__)

INCOME_PATH = '/api/a-share/financials/income-statements'
BALANCE_PATH = '/api/a-share/financials/balance-sheets'
CASH_PATH = '/api/a-share/financials/cash-flow-statements'

METRIC_KEYS = ('roe', 'gross_margin', 'net_margin', 'debt_ratio', 'cash_quality', 'revenue_growth')

#: 方向：True = 越大越好（用于分位与"优劣"判断）
HIGHER_BETTER = {'roe': True, 'gross_margin': True, 'net_margin': True,
                 'debt_ratio': False, 'cash_quality': True, 'revenue_growth': True}


def _num(v):
    try:
        f = float(v)
        return None if f != f else f
    except (TypeError, ValueError):
        return None


def _div(a, b):
    if a is None or b is None or b == 0:
        return None
    return a / b


def _client():
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('fin'):
            return None, 'capability_disabled'
        client = data_source_manager.fuyao_client()
        if client is None:
            return None, 'not_configured'
        return client, None
    except Exception as e:  # noqa: BLE001
        return None, '%s: %s' % (type(e).__name__, str(e)[:60])


def _items(r):
    return (r.get('data') or {}).get('item') or []


def fetch_statements(code, period='annual', limit=2, client=None):
    """取最近 limit 期三张表。返回 {income, balance, cash}（按 fiscal_year 降序）。"""
    if client is None:
        client, why = _client()
        if client is None:
            return None, {'available': False, 'reason': why}
    out = {}
    for key, path in (('income', INCOME_PATH), ('balance', BALANCE_PATH), ('cash', CASH_PATH)):
        r = client.get('fin.%s' % key, path, {'thscode': code, 'period': period})
        if not r.get('ok'):
            return None, {'available': False, 'reason': r.get('reason') or 'fetch_failed',
                          'missing': key}
        out[key] = _items(r)
    return out, {'available': True, 'period': period}


def _by_year(items):
    """按 fiscal_year 归并（同一财年取最新 report_date）。"""
    best = {}
    for it in items or []:
        y = it.get('fiscal_year')
        if y is None:
            continue
        cur = best.get(y)
        rd = it.get('report_date_ms') or 0
        if cur is None or rd > (cur.get('report_date_ms') or 0):
            best[y] = it
    return best


def compute_metrics(income, balance, cash, prev_income=None):
    """由三张表算六项指标；缺字段的指标返回 None（不填 0）。"""
    revenue = _num(income.get('operating_income'))
    cost = _num(income.get('operating_costs'))
    net = _num(income.get('net_profit'))
    parent_net = _num(income.get('parent_holder_net_profit'))
    equity = _num(balance.get('holder_equity_total'))
    debt = _num(balance.get('total_debt'))
    assets = _num(balance.get('assets_total'))
    cfo = _num(cash.get('act_cash_flow_net'))
    prev_rev = _num((prev_income or {}).get('operating_income'))

    gm = None
    if revenue is not None and cost is not None and revenue:
        gm = (revenue - cost) / revenue
    growth = None
    if revenue is not None and prev_rev:
        growth = (revenue / prev_rev - 1.0) * 100.0
    return {
        'fiscal_year': income.get('fiscal_year'),
        'revenue': revenue,
        'net_profit': net,
        'roe': _div(parent_net if parent_net is not None else net, equity),
        'gross_margin': gm,
        'net_margin': _div(net, revenue),
        'debt_ratio': _div(debt, assets),
        'cash_quality': _div(cfo, net),
        'revenue_growth': growth,
    }


def percentile_rank(values, higher_better=True):
    """样本内分位（0–100）：越大越好则值越高分位越高；反向指标取补。"""
    items = [(k, v) for k, v in (values or {}).items() if v is not None]
    n = len(items)
    if n == 0:
        return {}
    if n == 1:
        return {items[0][0]: 50.0}
    ordered = sorted(items, key=lambda kv: kv[1])
    out = {}
    for idx, (k, _v) in enumerate(ordered):
        pct = idx / (n - 1) * 100.0
        out[k] = round(pct if higher_better else 100.0 - pct, 1)
    return out


def composite_score(percentiles):
    """综合分 = 可用指标分位的均值（缺项按可用项归一，不补 0）。"""
    vals = [v for v in (percentiles or {}).values() if v is not None]
    if not vals:
        return None
    return round(sum(vals) / len(vals), 1)


def screen(codes, period='annual', client=None):
    """对给定股票池算六项指标 + 样本内分位 + 综合分。

    ⚠️ 分位是**进入本函数入参池内**的分位，不是全市场分位。
    """
    codes = [str(c).strip() for c in (codes or []) if str(c).strip()]
    if not codes:
        return {'available': False, 'reason': 'no_codes', 'rows': []}
    if client is None:
        client, why = _client()
        if client is None:
            return {'available': False, 'reason': why, 'rows': []}

    rows, failed = [], []
    for code in codes:
        data, meta = fetch_statements(code, period=period, client=client)
        if not data:
            failed.append({'code': code, 'reason': (meta or {}).get('reason')})
            continue
        inc = _by_year(data['income'])
        bal = _by_year(data['balance'])
        csh = _by_year(data['cash'])
        years = sorted(set(inc) & set(bal) & set(csh), reverse=True)
        if not years:
            failed.append({'code': code, 'reason': 'no_aligned_year'})
            continue
        y = years[0]
        prev = inc.get(years[1]) if len(years) > 1 else None
        metrics = compute_metrics(inc[y], bal[y], csh[y], prev)
        metrics['thscode'] = code
        rows.append(metrics)

    if not rows:
        return {'available': False, 'reason': 'no_data', 'failed': failed[:20], 'rows': []}

    for key in METRIC_KEYS:
        values = {r['thscode']: r.get(key) for r in rows}
        pct = percentile_rank(values, HIGHER_BETTER[key])
        for r in rows:
            r.setdefault('percentiles', {})[key] = pct.get(r['thscode'])
    for r in rows:
        r['composite'] = composite_score(r.get('percentiles'))

    rows.sort(key=lambda r: -(r.get('composite') or -1))
    return {
        'available': True,
        'period': period,
        'requested': len(codes),
        'covered': len(rows),
        'failed': failed[:20],
        'rows': rows,
        'meta': {
            'source': 'fuyao',
            'endpoints': [INCOME_PATH, BALANCE_PATH, CASH_PATH],
            'formula': {
                'roe': '归母净利润 ÷ 期末股东权益（摊薄近似，非加权 ROE）',
                'gross_margin': '(营业收入 − 营业成本) ÷ 营业收入',
                'net_margin': '净利润 ÷ 营业收入',
                'debt_ratio': '总负债 ÷ 总资产（反向指标）',
                'cash_quality': '经营活动现金流净额 ÷ 净利润（>1 说明利润含现）',
                'revenue_growth': '(本期营收 ÷ 上期营收 − 1) × 100',
            },
            'percentile': '样本内分位（入参股票池），**不是全市场分位**',
            'caveat': '财务数据存在披露滞后；跨行业比较毛利率/负债率需谨慎',
            'disclaimer': '仅供数据观察，不构成投资建议',
        },
    }
