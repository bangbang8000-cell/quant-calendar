# -*- coding: utf-8 -*-
"""V5.4.0 (FIX): 事件数据源「未接入」误报 — 注册真实事件源 provider

根因: EVENT_PROVIDERS 默认只有不可达占位 provider (name='default',
available=False, reason='事件数据源未接入(沙箱/免费源无稳定公告接口)'),
真实源 DataSourceEventProvider (akshare→tushare 回退) 已实现但从未注册,
环境已具备 akshare/tushare + tushare token → 事件接口实际可用。
修复: 默认事件源 = DataSourceEventProvider; 占位 provider 移除,
真实源不可达时 note 如实标注, 不再误报「未接入」。
"""
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import event_alert
from event_alert import DataSourceEventProvider, build_events


# ─── 默认事件源应为真实源 ─────────────────────────────────

def test_default_event_providers_include_real_source():
    """默认 EVENT_PROVIDERS 必须包含可用真实源, 而非仅不可达占位"""
    providers = list(event_alert.EVENT_PROVIDERS)
    assert providers, 'EVENT_PROVIDERS 不应为空'
    available = [p for p in providers if getattr(p, 'available', True)]
    assert available, '默认事件源必须至少有一个可用 provider'
    names = [getattr(p, 'name', str(p)) for p in providers]
    assert 'default' not in names, '不可达占位 default 不应作为默认事件源'


def test_default_provider_has_meaningful_reason():
    """真实源不可达时应给出可读原因 (非空括号)"""
    prov = event_alert.EVENT_PROVIDERS[0]
    assert getattr(prov, 'reason', ''), '真实源不可达应有可读 reason'


# ─── 真实源可用时正常返回事件, 不误报未接入 ─────────────────

class _FakeFetchers:
    """注入确定性 fetcher, 不触网"""

    def __init__(self, events):
        self._events = events
        self.ak_calls = 0

    def akshare(self, code):
        self.ak_calls += 1
        return list(self._events)

    def tushare(self, code):
        raise AssertionError('akshare 成功时不应回退 tushare')


def test_build_events_with_real_provider_no_placeholder_noise():
    """真实源可用 → 返回事件, note 不出现「未接入」占位文案"""
    ff = _FakeFetchers([{'type': '分红', 'title': '10派5', 'date': '2026-07-15', 'name': '平安银行'}])
    prov = DataSourceEventProvider(akshare_fetcher=ff.akshare, tushare_fetcher=ff.tushare)
    result = build_events(['000001.SZ'], providers=[prov])
    assert len(result['events']) == 1
    ev = result['events'][0]
    assert ev['code'] == '000001.SZ'
    assert ev['type'] == '分红'
    assert ev['source'] == 'tushare_akshare'
    note = result['note'] or ''
    assert '未接入' not in note, f"note 不应含未接入占位文案: {note!r}"
    assert 'default' not in note, f"note 不应提及 default 占位: {note!r}"


def test_build_events_real_source_fails_honest_note():
    """真实源全部不可达 → 如实标注 tushare_akshare, 非占位「未接入」"""
    def _boom(code):
        raise RuntimeError('source down')

    prov = DataSourceEventProvider(akshare_fetcher=_boom, tushare_fetcher=_boom)
    result = build_events(['000001.SZ'], providers=[prov])
    assert result['events'] == []
    assert result['note'] and 'tushare_akshare' in result['note']
    assert '未接入' not in result['note']
