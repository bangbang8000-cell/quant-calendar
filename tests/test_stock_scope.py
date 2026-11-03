#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""自选异动扫描测试 (v7.2.0 / B6.6)"""

import stock_scope


class FakeClient:
    def __init__(self, items=None, fail=False):
        self.items = items or []
        self.fail = fail
        self.calls = []

    def get(self, cap, path, params=None):
        self.calls.append(dict(params or {}))
        if self.fail:
            return {'ok': False, 'reason': 'upstream'}
        return {'ok': True, 'data': {'item': self.items}}


def test_scan_reports_rows_and_empty_codes():
    client = FakeClient(items=[{'thscode': '600519.SH', 'tag_name': '涨停',
                                'analysis_content': 'x', 'stock_name': '贵州茅台'}])
    out = stock_scope.scan(['600519', '000001'], client=client)
    assert out['available'] is True and out['count'] == 1
    assert out['empty_codes'] == ['000001.SZ']
    assert '不代表该股无异常' in out['note']
    assert '不构成投资建议' in out['disclaimer']
    assert client.calls[0]['thscodes'] == '600519.SH,000001.SZ'


def test_scan_batches_100():
    client = FakeClient()
    codes = ['%06d' % (600000 + i) for i in range(150)]
    stock_scope.scan(codes, client=client)
    assert len(client.calls) == 2
    for c in client.calls:
        assert len(c['thscodes'].split(',')) <= stock_scope.BATCH


def test_scan_upstream_failure_degrades():
    out = stock_scope.scan(['600519'], client=FakeClient(fail=True))
    assert out['available'] is False
    assert out['failed_batches'] and out['failed_batches'][0]['reason'] == 'upstream'


def test_scan_no_codes():
    out = stock_scope.scan([])
    assert out['available'] is False and out['reason'] == 'no_codes'


def test_normalize_code_exchanges():
    assert stock_scope.normalize_code('600519') == '600519.SH'
    assert stock_scope.normalize_code('000001') == '000001.SZ'
    assert stock_scope.normalize_code('920002') == '920002.BJ'
    assert stock_scope.normalize_code('300750.SZ') == '300750.SZ'
