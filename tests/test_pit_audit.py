#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""防未来函数审计测试 (v7.3.0 / B7.2, TC-FY-7.3-03/04)

守护：五项检查各自的通过与失败路径、"跳过≠通过"、报告结构稳定。
"""

import pit_audit as pa


class FakeBackend:
    def __init__(self, latest='2026-11-03', factor_max='2026-11-03', available=True,
                 fail=False):
        self.latest = latest
        self.factor_max = factor_max
        self.available = available
        self.fail = fail

    def status(self):
        if self.fail:
            raise RuntimeError('db broken')
        return {'available': self.available, 'latest_date': self.latest}

    def query(self, sql, params=None, limit=None):
        if self.fail:
            raise RuntimeError('db broken')
        return {'columns': ['max'], 'rows': [[self.factor_max]]}


def test_freshness_passes_when_latest_equals_target():
    chk = pa.check_dwh_freshness(FakeBackend(), '2026-11-03')
    assert chk['ok'] is True and chk['latest'] == '2026-11-03'


def test_freshness_fails_on_lookahead():
    """TC-FY-7.3-03: 库内最新日期晚于目标日 → 判前视"""
    chk = pa.check_dwh_freshness(FakeBackend(latest='2026-11-05'), '2026-11-03')
    assert chk['ok'] is False and '2026-11-05' in chk['detail']


def test_freshness_skips_without_db():
    chk = pa.check_dwh_freshness(FakeBackend(available=False), '2026-11-03')
    assert chk['ok'] is True and chk.get('skipped') is True


def test_freshness_reports_status_failure():
    chk = pa.check_dwh_freshness(FakeBackend(fail=True), '2026-11-03')
    assert chk['ok'] is False and 'status 失败' in chk['detail']


def test_factor_lag():
    assert pa.check_factor_lag(FakeBackend(factor_max='2026-11-02'), '2026-11-03')['ok'] is True
    bad = pa.check_factor_lag(FakeBackend(factor_max='2026-11-09'), '2026-11-03')
    assert bad['ok'] is False


def test_panel_columns_detects_future_fields():
    assert pa.check_panel_columns(['thscode', 'close'])['ok'] is True
    bad = pa.check_panel_columns(['thscode', 'future_ret_5d', 'label_up'])
    assert bad['ok'] is False and 'future_ret_5d' in bad['offenders']
    # 白名单不误报
    assert pa.check_panel_columns(['thscode', 'next_open_hint'])['ok'] is True


def test_watchlist_dates():
    assert pa.check_watchlist_dates(['2026-11-01', '2026-11-03'], '2026-11-03')['ok'] is True
    bad = pa.check_watchlist_dates(['2026-11-05'], '2026-11-03')
    assert bad['ok'] is False and '2026-11-05' in bad['offenders']


def test_export_footer_check():
    ok = '数据时间：2026-11-03 ｜ 来源：x ｜ 口径：y ｜ 仅供数据观察，不构成投资建议'
    assert pa.check_export_footer(ok)['ok'] is True
    assert pa.check_export_footer('本页展示指数贡献')['ok'] is False


def test_audit_report_structure():
    """TC-FY-7.3-04: 报告结构稳定, 失败会体现在 passed=False"""
    rep = pa.audit('2026-11-03', backend=FakeBackend(),
                   panel_columns=['thscode', 'close'],
                   input_dates=['2026-11-01'],
                   export_text='数据时间：2026-11-03 ｜ 来源：x ｜ 口径：y ｜ 不构成投资建议')
    assert rep['available'] is True and rep['total'] == 5 and rep['failed'] == 0
    assert rep['passed'] is True
    names = [c['check'] for c in rep['checks']]
    assert names == ['dwh_freshness', 'factor_lag', 'panel_columns', 'watchlist_pit',
                     'export_footer']
    assert '跳过' in rep['meta']['skipped_is_not_passed']

    bad = pa.audit('2026-11-03', backend=FakeBackend(latest='2026-11-09'),
                   panel_columns=['future_x'])
    assert bad['passed'] is False and bad['failed'] >= 2


def test_audit_without_backend_marks_skipped():
    rep = pa.audit('2026-11-03', backend=None)
    skipped = [c for c in rep['checks'] if c.get('skipped')]
    assert len(skipped) >= 2
