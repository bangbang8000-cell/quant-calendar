#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (FR-5.2.0.7): 涨停原因/题材串测试

数据诚实性: 问财未配置 → 如实不可用; 绝不拿行业分类冒充题材。
"""
import sys

import pandas as pd

from shortterm import themes


class _FakeIwencaiClient:
    def __init__(self, df):
        self._df = df

    def query(self, q, page=1, limit=50):
        return self._df


def _fake_client_module(client):
    """构造可注入 sys.modules 的假 iwencai_client 模块"""
    import types
    mod = types.ModuleType('iwencai_client')
    mod.IwencaiClient = lambda: client
    return mod


def _ok_df():
    return pd.DataFrame([
        {'股票代码': '002909.SZ', '涨停原因[20260902]': '集泰股份+化学制品+重组预期'},
        {'股票代码': '600000.SH', '涨停原因[20260902]': '银行+破净'},
    ])


# ---------- 不可用路径(诚实降级) ----------

def test_reasons_invalid_date_format():
    reasons, err = themes.fetch_zt_reasons('not-a-date')
    assert reasons == {}
    assert err and '日期格式' in err


def test_reasons_no_iwencai_client(monkeypatch):
    # sys.modules 置 None → import 抛 ImportError → 如实不可用
    monkeypatch.setitem(sys.modules, 'iwencai_client', None)
    monkeypatch.setenv('IWENCAI_API_KEY', 'x')
    reasons, err = themes.fetch_zt_reasons('2026-09-02')
    assert reasons == {}
    assert err and 'iwencai_client' in err


def test_reasons_no_api_key(monkeypatch):
    monkeypatch.setitem(sys.modules, 'iwencai_client', _fake_client_module(_FakeIwencaiClient(_ok_df())))
    monkeypatch.delenv('IWENCAI_API_KEY', raising=False)
    reasons, err = themes.fetch_zt_reasons('2026-09-02')
    assert reasons == {}
    assert err and 'IWENCAI_API_KEY' in err


# ---------- 成功路径(按日期核对场次) ----------

def test_reasons_ok_with_dated_column(monkeypatch):
    monkeypatch.setitem(sys.modules, 'iwencai_client', _fake_client_module(_FakeIwencaiClient(_ok_df())))
    monkeypatch.setenv('IWENCAI_API_KEY', 'x')
    reasons, err = themes.fetch_zt_reasons('2026-09-02')
    assert err is None
    assert reasons['002909'] == '集泰股份+化学制品+重组预期'
    assert reasons['600000'] == '银行+破净'
    assert len(reasons) == 2


def test_reasons_fallback_plain_column(monkeypatch):
    df = pd.DataFrame([{'股票代码': '000001', '涨停原因': '平安+银行'}])
    monkeypatch.setitem(sys.modules, 'iwencai_client', _fake_client_module(_FakeIwencaiClient(df)))
    monkeypatch.setenv('IWENCAI_API_KEY', 'x')
    reasons, err = themes.fetch_zt_reasons('2026-09-02')
    assert err is None
    assert reasons['000001'] == '平安+银行'


def test_reasons_query_failure_degrades(monkeypatch):
    class _Broken:
        def query(self, q, page=1, limit=50):
            raise RuntimeError('问财限流')

    monkeypatch.setitem(sys.modules, 'iwencai_client', _fake_client_module(_Broken()))
    monkeypatch.setenv('IWENCAI_API_KEY', 'x')
    reasons, err = themes.fetch_zt_reasons('2026-09-02')
    assert reasons == {}
    assert err and '问财' in err


# ---------- attach: 合并 + 诚实性(绝不拿行业冒充题材) ----------

def test_attach_reasons_merges(monkeypatch):
    monkeypatch.setitem(sys.modules, 'iwencai_client', _fake_client_module(_FakeIwencaiClient(_ok_df())))
    monkeypatch.setenv('IWENCAI_API_KEY', 'x')
    rows = [{'ts_code': '002909', 'name': '集泰股份', 'industry': '化学制品'},
            {'ts_code': '999999', 'name': 'X', 'industry': '银行'}]
    rows, available, err = themes.attach_reasons(rows, '2026-09-02')
    assert available is True and err is None
    assert rows[0]['reason'] == '集泰股份+化学制品+重组预期'
    assert 'reason' not in rows[1]      # 不在题材表 → 不编造


def test_attach_unavailable_never_uses_industry(monkeypatch):
    """问财不可用 → 绝不把 industry 塞进 reason 冒充题材(诚实性护栏)"""
    monkeypatch.setitem(sys.modules, 'iwencai_client', None)
    monkeypatch.delenv('IWENCAI_API_KEY', raising=False)
    rows = [{'ts_code': '002909', 'name': '集泰股份', 'industry': '化学制品'}]
    rows, available, err = themes.attach_reasons(rows, '2026-09-02')
    assert available is False and err
    assert 'reason' not in rows[0]
