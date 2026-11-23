#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.16 FR-1/FR-2/FR-4 回归测试

- A1/A8: realtime 路径 OHLC 完整契约 (历史 bug: _fetch_kline 丢弃 open/high/low → NaN)
- A2: 逐股路径字段完整; A4: 值校验拒绝全 NaN
- D1: 显式 symbols 名称修复 (历史 bug: from stock_manager 坏导入)
- D2: 截断透明 requested_count/truncated
- B1/B2: 0 持仓行按失败处理, freshness count = 真实持仓行数
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import pandas as pd


# ---------- A 组: OHLC 契约 ----------

class _OHLCSource:
    """数据源返回完整 OHLC 行: [date, open, close, low, high, vol, ...]"""
    def get_kline_data(self, code, period='daily', limit=250):
        rows = []
        for i in range(60):
            o = 100.0 + i * 0.5
            c = o + 0.3
            rows.append(['202608%02d' % (i + 1), o, c, o - 0.2, o + 0.8, 1000000 + i])
        return {'data': rows}

    def get_daily_basic_series(self, code, limit=20):
        return []

    def get_moneyflow(self, code, limit=10):
        return []


def test_a1_fetch_kline_returns_full_ohlc():
    """A1: _fetch_kline 返回完整 OHLCV, 非仅 date/close/volume"""
    from strategy_sdk.data_portal import RealDataPortal
    p = RealDataPortal(source=_OHLCSource())
    k = p._fetch_kline('600519.SH', '2026-08-01', '2026-09-30', 60)
    assert {'date', 'open', 'low', 'high', 'close', 'volume'}.issubset(k.columns), list(k.columns)
    assert k[['open', 'high', 'low', 'close']].notna().all().all()
    # 自洽: high >= close >= low, high >= open >= low
    assert (k['high'] >= k['close']).all()
    assert (k['close'] >= k['low']).all()
    assert (k['high'] >= k['open']).all()
    assert (k['open'] >= k['low']).all()


def test_a2_panel_single_symbol_has_ohlc():
    """A2: 逐股路径 get_panel 返回完整 OHLCV 且非 NaN"""
    from strategy_sdk.data_portal import RealDataPortal
    p = RealDataPortal(source=_OHLCSource())
    panel = p.get_panel(['open', 'high', 'low', 'close', 'volume'],
                        '2026-08-01', '2026-09-30', universe=['600519.SH'])
    for f in ('open', 'high', 'low', 'close', 'volume'):
        assert f in panel.columns, '缺字段 %s' % f
        assert int(panel[f].notna().sum()) >= 20, '%s 非 NaN 不足' % f


def test_a4_bars_sufficient_rejects_all_nan():
    """A4: 值校验拒绝 high/low 全 NaN (历史只查列名恒通过)"""
    from api.v1.timing_api import _bars_sufficient
    df = pd.DataFrame({
        'date': ['2026-01-%02d' % (i + 1) for i in range(30)],
        'close': [10.0] * 30, 'volume': [1000] * 30,
        'high': [float('nan')] * 30, 'low': [float('nan')] * 30,
    })
    # 列名齐全但值全 NaN → 必须判为不足
    assert _bars_sufficient(df) is False
    # 补齐非 NaN → 判为足够
    df['high'] = 10.5
    df['low'] = 9.5
    assert _bars_sufficient(df) is True


def test_a8_panel_to_desc_df_no_nan_when_source_complete():
    """A8: 完整数据源走 panel_to_desc_df 后 OHLC 非 NaN"""
    from strategy_sdk.data_portal import RealDataPortal
    from strategy_sdk.builtin._pattern_utils import panel_to_desc_df
    p = RealDataPortal(source=_OHLCSource())
    panel = p.get_panel(['open', 'high', 'low', 'close', 'volume'],
                        '2026-08-01', '2026-09-30', universe=['600519.SH'])
    desc = panel_to_desc_df(panel, '600519.SH',
                            ('open', 'high', 'low', 'close', 'volume'))
    for f in ('open', 'high', 'low', 'close'):
        assert int(desc[f].notna().sum()) >= 20, '%s 在 desc 中非 NaN 不足' % f


# ---------- D 组: 名称与截断 ----------

def test_d1_stock_name_falls_back_to_code(monkeypatch):
    """D1: _stock_name 修坏导入后, 未知代码回退显示代码(非空字符串)"""
    import api.v1.timing_api as ta
    # 用一个一定不在 stock_map 的代码; 期望回退为代码本身
    name = ta._stock_name('999999.XZ')
    assert name, '名称不得为空'
    assert '999999' in name, '应回退显示代码'


def test_d2_matrix_truncation_fields(monkeypatch):
    """D2: 传 >30 只时响应含 requested_count/truncated/symbol_count"""
    from fastapi import FastAPI
    from fastapi.testclient import TestClient
    import api.v1.timing_api as ta

    # 绕过鉴权与真实取数: 让每只行快速失败, 只验证响应元字段
    monkeypatch.setattr(ta, '_resolve_bars', lambda payload: (
        pd.DataFrame(), 'simulated'))

    app = FastAPI()
    app.include_router(ta.router)
    app.dependency_overrides[ta.get_non_guest_user] = lambda: {'username': 'tester'}
    client = TestClient(app)
    syms = ['%06d.SH' % (600000 + i) for i in range(50)]
    r = client.post('/timing/matrix', json={'symbols': syms})
    assert r.status_code == 200, r.text
    body = r.json()
    assert body['requested_count'] == 50
    assert body['symbol_count'] == 30
    assert body['truncated'] is True
    assert body['max_symbols'] == 30


# ---------- B 组: 0 行失败 ----------

def test_b2_zero_holdings_marks_failed():
    """B2: strategy_run 已改为 0 持仓行按失败处理 (静态契约防回归)

    历史 bug: ok=run_ok and _ok and not errors, 非交易日 run_once 返回 (True,[],[])
    → executed=[] 仍记 ok → freshness count:0 却标 'strategy_run ok'。
    修复后: holdings_count = 日视图 total; holdings_count <= 0 → ok=False 且不写 fresh。
    """
    import inspect
    from scheduler._core import SchedulerCoreMixin
    src = inspect.getsource(SchedulerCoreMixin)
    assert 'holdings_count' in src, '未统计真实持仓行数'
    assert 'holdings_count > 0' in src, '未做 0 行失败判定'
    assert 'holdings_count <= 0' in src, '未覆盖 0 持仓分支'
    assert 'count_holdings_rows' in src, '未调用真实持仓行数统计'
    assert 'count=holdings_count' in src, 'freshness count 仍用执行策略数'


def test_e1_timing_time_contract_all_three_endpoints(monkeypatch):
    """E1: evaluate/state/matrix 三端点均返回 as_of/generated_at/date_range/degraded"""
    from fastapi import FastAPI
    from fastapi.testclient import TestClient
    import api.v1.timing_api as ta

    dates = pd.bdate_range('2026-01-01', periods=60).strftime('%Y-%m-%d').tolist()
    close = [10.0 + (i % 7) * 0.1 for i in range(60)]
    df = pd.DataFrame({
        'date': dates, 'open': close,
        'high': [c + 0.2 for c in close], 'low': [c - 0.2 for c in close],
        'close': close, 'volume': [1000] * 60,
    })
    monkeypatch.setattr(ta, '_resolve_bars', lambda payload: (df, 'payload'))
    app = FastAPI()
    app.include_router(ta.router)
    app.dependency_overrides[ta.get_non_guest_user] = lambda: {'username': 'tester'}
    client = TestClient(app)
    for url, payload in (
        ('/timing/evaluate', {'sid': 'turtle', 'symbol': '600000.SH'}),
        ('/timing/state', {'symbol': '600000.SH'}),
        ('/timing/matrix', {'symbols': ['600000.SH']}),
    ):
        r = client.post(url, json=payload)
        assert r.status_code == 200, (url, r.text)
        body = r.json()
        for key in ('as_of', 'generated_at', 'date_range', 'degraded'):
            assert key in body, (url, key, '缺时间契约字段')
        assert body['date_range'] and body['date_range'][0] == dates[0], (url, body['date_range'])
        assert '+' in str(body['generated_at']), (url, body['generated_at'])
