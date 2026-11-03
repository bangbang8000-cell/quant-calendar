#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""异动解读测试 (v6.9.0 / B3.2b, TC-FY-6.9-05/06)

守护：461 条量级必须分页、免责声明原文保留、空列表语义不等于"无异动"。
"""
import pytest

import anomaly_notes


class FakeClient:
    def __init__(self, payload=None):
        self.payload = payload or {}
        self.calls = []

    def get(self, cap, path, params=None):
        self.calls.append((path, dict(params or {})))
        return {'ok': True, 'data': self.payload}


class FakeMgr:
    def __init__(self, client, enabled=True):
        self._c = client
        self._enabled = enabled

    def fuyao_capability_enabled(self, cap):
        return self._enabled

    def fuyao_client(self):
        return self._c


@pytest.fixture(autouse=True)
def clear_cache():
    anomaly_notes.reset_cache()
    yield
    anomaly_notes.reset_cache()


def test_pagination_params_and_total(monkeypatch):
    """TC-FY-6.9-05: 上游给 pagination 时以其为准"""
    payload = {'item': [{'thscode': '603131.SH', 'tag_name': '跌停'}],
               'pagination': {'page': 2, 'size': 20, 'total': 461, 'pages': 24}}
    client = FakeClient(payload)
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)

    out = anomaly_notes.fetch_anomaly_list(page=2)
    assert out['total'] == 461 and out['pages'] == 24 and out['has_next'] is True


def test_client_side_pagination_when_upstream_returns_all(monkeypatch):
    """实测：上游忽略 page/size 一次返回全量(473 条) → 必须在本层切片"""
    payload = {'item': [{'thscode': 'x%d' % i} for i in range(473)]}
    client = FakeClient(payload)
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)

    first = anomaly_notes.fetch_anomaly_list(page=1, size=20)
    assert first['count'] == 20 and first['total'] == 473 and first['pages'] == 24
    assert first['has_next'] is True and first['rows'][0]['thscode'] == 'x0'

    last = anomaly_notes.fetch_anomaly_list(page=24, size=20)
    assert last['count'] == 13 and last['has_next'] is False
    assert len(client.calls) == 1, '全量应缓存，翻页不重复请求上游'


def test_page_size_capped(monkeypatch):
    """page<1 归一到 1；size 超上限被截断（分页在本层做，不再透传 page/size 给上游）"""
    client = FakeClient({'item': [{'i': i} for i in range(300)]})
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)
    out = anomaly_notes.fetch_anomaly_list(page=0, size=999)
    assert out['page'] == 1 and out['size'] == anomaly_notes._MAX_PAGE_SIZE
    assert out['count'] == anomaly_notes._MAX_PAGE_SIZE


def test_disclaimer_preserved_in_payload(monkeypatch):
    """TC-FY-6.9-06: 免责声明随内容保留，且提示内容为 AI 生成不改写"""
    content = '1、据同花顺iFinD数据…（免责声明：本内容由AI技术搜集公开信息总结生成…）'
    client = FakeClient({'item': [{'thscode': '603131.SH', 'analysis_content': content}]})
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)

    out = anomaly_notes.fetch_anomaly_list()
    assert out['rows'][0]['analysis_content'] == content, '原文必须逐字保留'
    assert 'AI' in out['disclaimer'] and '不构成投资建议' in out['disclaimer']
    assert '不改写' in out['note']


def test_empty_list_possible_degradation(monkeypatch):
    client = FakeClient({'item': []})
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)
    out = anomaly_notes.fetch_anomaly_list()
    assert out['available'] is True and out['count'] == 0
    assert '降级' in out['note'], '空列表不得被断定为"期间无异动"'


def test_by_stock_reports_empty_codes(monkeypatch):
    client = FakeClient({'item': [{'thscode': '600519.SH', 'tag_name': '涨停'}]})
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)
    out = anomaly_notes.fetch_anomaly_by_stock('600519.SH,000001.SZ')
    assert out['count'] == 1 and out['empty_codes'] == ['000001.SZ']
    assert '不代表该股无异常' in out['note']


def test_capability_disabled(monkeypatch):
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(), enabled=False), raising=False)
    out = anomaly_notes.fetch_anomaly_list()
    assert out['available'] is False and out['reason'] == 'capability_disabled'
