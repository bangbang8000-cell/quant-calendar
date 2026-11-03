#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""事件流 provider 测试 (v6.9.0 / B3.3, TC-FY-6.9-07/08/09)

守护：Fuyao 分时新闻/快讯接入、同 id 去重、单源失败不拖垮其它源、密文 URL 不直渲。
"""
import pytest

import event_provider_fuyao as epf


class FakeClient:
    def __init__(self, timeline=None, flash=None, fail=()):
        self.timeline = timeline or []
        self.flash = flash or []
        self.fail = set(fail)

    def get(self, cap, path, params=None):
        if path in self.fail:
            return {'ok': False, 'reason': 'upstream'}
        if 'timeline' in path:
            return {'ok': True, 'data': {'items': self.timeline, 'has_more': False}}
        return {'ok': True, 'data': {'items': self.flash}}


class FakeMgr:
    def __init__(self, client, enabled=True, cap_enabled=None):
        self._c = client
        self._enabled = enabled
        self._caps = cap_enabled or {}

    def fuyao_capability_enabled(self, cap):
        if cap in self._caps:
            return self._caps[cap]
        return self._enabled

    def fuyao_client(self):
        return self._c


MS = 1793711298000


def _item(i, title='标题'):
    return {'id': 'id-%s' % i, 'title': title, 'publish_time_ms': MS,
            'summary': '摘要', 'jump_url': 'https://news.10jqka.com.cn/x', 'source': '证券之星'}


@pytest.fixture(autouse=True)
def _clear(monkeypatch):
    yield


def test_timeline_events_normalized(monkeypatch):
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(timeline=[_item(1)])), raising=False)
    p = epf.FuyaoEventProvider()
    evs = p.fetch_events('600519')
    assert len(evs) == 1
    e = evs[0]
    assert e['type'] == 'news' and e['title'] == '标题'
    assert e['date'] == '2026-11-03'
    assert e['url'].startswith('https://')


def test_dedupe_by_id(monkeypatch):
    """TC-FY-6.9-07: 同一 id 只出现一次（轮询会重复返回）"""
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(timeline=[_item(1), _item(1), _item(2)])), raising=False)
    p = epf.FuyaoEventProvider()
    assert len(p.fetch_events('600519')) == 2
    assert p.fetch_events('600519') == [], '已见 id 不应重复产出'


def test_code_without_suffix_gets_exchange(monkeypatch):
    import data_sources
    seen = {}

    class C(FakeClient):
        def get(self, cap, path, params=None):
            seen.update(params or {})
            return {'ok': True, 'data': {'items': []}}

    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(C()), raising=False)
    epf.FuyaoEventProvider().fetch_events('600519')
    assert seen['thscode'] == '600519.SH'


def test_capability_disabled_returns_no_events(monkeypatch):
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(), cap_enabled={'news': False}), raising=False)
    p = epf.FuyaoEventProvider()
    assert p.available is False and p.reason == 'capability_disabled'
    assert p.fetch_events('600519') == []


def test_flash_rows_and_no_inline_body(monkeypatch):
    """TC-FY-6.9-09: 快讯只给标题+摘要+原文跳转，不内嵌正文"""
    flash = [{'id': '5556415', 'seq': '681423888', 'title': '沙特阿美拟扩建管道',
              'encoded_url': 'https://news.10jqka.com.cn/x', 'summary': '摘要',
              'create_time_ms': MS, 'tags': [{'id': 1, 'name': '国际'}]}]
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(flash=flash)), raising=False)
    out = epf.FuyaoEventProvider().fetch_flash()
    assert out['available'] and out['count'] == 1
    row = out['rows'][0]
    assert row['tags'] == ['国际'] and row['type'] == 'flash'
    assert 'content' not in row, '不得内嵌正文'
    assert '不内嵌正文' in out['note']


def test_flash_upstream_failure_degrades(monkeypatch):
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(fail={'/api/news/flash/list'})), raising=False)
    out = epf.FuyaoEventProvider().fetch_flash()
    assert out['available'] is False and out['reason'] == 'upstream'


def test_event_alert_registers_fuyao_first():
    import event_alert
    names = [p.name for p in event_alert.EVENT_PROVIDERS]
    assert 'fuyao' in names
    assert names.index('fuyao') == 0, 'Fuyao 事件源应排在优先位置'


def test_build_events_isolates_provider_failure(monkeypatch):
    """TC-FY-6.9-08: 单 provider 抛错不影响其它源"""
    import event_alert

    class Boom:
        name = 'boom'
        available = True

        def fetch_events(self, code):
            raise RuntimeError('boom')

    class Ok:
        name = 'ok'
        available = True

        def fetch_events(self, code):
            return [{'type': 'news', 'title': 't', 'date': '2026-11-03'}]

    out = event_alert.build_events(['600519'], providers=[Boom(), Ok()])
    assert len(out['events']) == 1 and out['events'][0]['source'] == 'ok'
    assert 'boom' in (out['note'] or '')
