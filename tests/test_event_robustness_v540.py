# -*- coding: utf-8 -*-
"""V5.4.0 (FIX-2): 事件源稳健性 — 超时护栏 + tushare pro 回退

根因2: build_events 无超时, akshare 外部接口挂起会让事件页长时间卡住
(实测 ops 60s 超时); tushare 回退用不存在的 stk_announcements (死代码),
应改用 ts.pro_api(token) 的 dividend/top_list (实测可用, 稳定)。
"""
import os
import sys
import time

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import event_alert
from event_alert import DataSourceEventProvider, build_events


# ─── A. 超时护栏 ─────────────────────────────────────────

def test_build_events_hanging_provider_times_out(monkeypatch):
    """挂起 provider 不得拖垮事件页: 超时后降级为不可达, 按时返回"""
    monkeypatch.setattr(event_alert, 'EVENT_FETCH_TIMEOUT', 0.5)

    class HangingProvider:
        name = 'hang'
        available = True
        reason = '测试挂起'

        def fetch_events(self, code):
            time.sleep(5)
            return []

    start = time.time()
    result = build_events(['000001.SZ'], providers=[HangingProvider()])
    elapsed = time.time() - start
    assert elapsed < 2, f'事件页不应被挂起 provider 拖住, 实耗 {elapsed:.1f}s'
    assert result['events'] == []
    assert result['note'] and 'hang' in result['note']


def test_build_events_normal_provider_works(monkeypatch):
    """超时护栏不误伤正常 provider"""
    monkeypatch.setattr(event_alert, 'EVENT_FETCH_TIMEOUT', 2)

    class FastProvider:
        name = 'fast'
        available = True

        def fetch_events(self, code):
            return [{'type': '分红', 'title': '10派3', 'date': '2026-07-15', 'name': 'x'}]

    result = build_events(['000001.SZ'], providers=[FastProvider()])
    assert len(result['events']) == 1
    assert result['events'][0]['source'] == 'fast'


# ─── B. tushare pro 回退 (不再用不存在的 stk_announcements) ──

class _FakePro:
    """注入 pro client: dividend/top_list 返回确定性结构"""

    def __init__(self):
        self.dividend_calls = []

    def dividend(self, ts_code=None, limit=None):
        self.dividend_calls.append(ts_code)
        return [
            {'end_date': '2025-12-31', 'cash_div_tax': '0.50', 'div_proc': '实施'}
        ]

    def top_list(self, trade_date=None, ts_code=None):
        return [
            {'ts_code': ts_code, 'name': '平安银行', 'pct_change': 9.9}
        ]


def test_tushare_pro_fallback_via_pro_client():
    """DataSourceEventProvider 走 pro client (dividend) → 分红事件"""
    fake = _FakePro()
    prov = DataSourceEventProvider(pro_client=fake)
    events = prov._default_tushare('000001.SZ') or []
    assert events, 'pro client 应返回分红事件'
    assert any(e['type'] == '分红' for e in events)
    assert fake.dividend_calls and fake.dividend_calls[0] == '000001.SZ'


def test_build_events_uses_tushare_pro_first():
    """tushare pro 优先 (稳定源), akshare 兜底 — 不误报未接入"""
    fake = _FakePro()
    calls = []

    def _boom_ak(code):
        calls.append('ak')
        raise RuntimeError('akshare down')

    prov = DataSourceEventProvider(akshare_fetcher=_boom_ak, pro_client=fake)
    prov._tushare_fetcher = prov._default_tushare
    result = build_events(['000001.SZ'], providers=[prov])
    assert result['events'], 'tushare pro 优先应返回事件'
    assert 'ak' not in calls, 'tushare pro 成功时不应触发 akshare'
    assert result['note'] is None or '未接入' not in result['note']


def test_build_events_akshare_fallback_when_tushare_fails():
    """tushare 不可达 → 回退 akshare (有超时护栏), 事件页按时返回"""
    def _boom_pro(code):
        raise RuntimeError('pro down')

    class _FakeAK:
        def __init__(self):
            self.called = False

        def __call__(self, code):
            self.called = True
            return [{'type': '分红', 'title': 'ak事件', 'date': '2026-07-15', 'name': 'x'}]

    fake_ak = _FakeAK()
    prov = DataSourceEventProvider(akshare_fetcher=fake_ak, tushare_fetcher=_boom_pro)
    result = build_events(['000001.SZ'], providers=[prov])
    assert fake_ak.called, 'tushare 失败应回退 akshare'
    assert result['events'] and result['events'][0]['source'] == 'tushare_akshare'
