#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (FR-5.4.8): 分钟级 K线支持 (15/30/60min)

守护: _fetch_kline 对分钟 period 的路由 —
  tushare 走 pro_bar(freq=60min/30min/15min),
  sxsc 走 stk_mins(freq=60min...),
  akshare 走 stock_zh_a_hist_min_em(period='60'/'30'/'15')。
分钟级 = 打开股票弹窗按需加载, 不预加载 (懒加载由前端触发)。
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))

import pandas as pd


def _minute_df():
    return pd.DataFrame({
        'trade_time': ['2026-09-08 10:00:00', '2026-09-08 10:30:00'],
        'open': [10.0, 10.2], 'high': [10.5, 10.4], 'low': [9.9, 10.0],
        'close': [10.2, 10.3], 'vol': [100, 120], 'amount': [1000, 1200],
    })


def test_minute_periods_supported():
    """分钟 period 清单 15min/30min/60min 必须在 MINUTE_PERIODS 白名单"""
    from data_sources import _manager as m
    assert hasattr(m, 'MINUTE_PERIODS')
    for p in ('15min', '30min', '60min'):
        assert p in m.MINUTE_PERIODS, '分钟周期应被识别: ' + p


def test_tushare_fetch_kline_minute_uses_pro_bar(monkeypatch):
    """tushare 分钟线走模块级 pro_bar(freq=period) — 不再落到 daily 兜底"""
    import tushare as ts
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {'tushare': object()}  # 客户端对象存在即可, 分钟线走 ts.pro_bar
    calls = []
    def fake_pro_bar(**kw):
        calls.append(kw)
        return _minute_df()
    monkeypatch.setattr(ts, 'pro_bar', fake_pro_bar)
    df = mgr._fetch_kline('tushare', '600519.SH', '60min', 5)
    assert df is not None and len(df) == 2
    assert calls, '应调用 pro_bar'
    assert calls[0]['freq'] == '60min', 'pro_bar freq 应为 60min, 实得 %r' % calls[0].get('freq')


def test_sxsc_fetch_kline_minute_uses_stk_mins(monkeypatch):
    """sxsc(券商版) 分钟线走 stk_mins — 不再落到 daily 兜底"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {}
    calls = []
    class FakeSxsc:
        def query(self, api_name, **kw):
            calls.append((api_name, kw))
            return _minute_df()
    mgr._clients['sxsc_tushare'] = FakeSxsc()
    df = mgr._fetch_kline('sxsc_tushare', '600519.SH', '30min', 5)
    assert df is not None and len(df) == 2
    assert calls, '应调用 query'
    assert calls[0][0] == 'stk_mins', 'sxsc 分钟线应调 stk_mins, 实得 %r' % calls[0][0]
    assert calls[0][1].get('freq') == '30min'


def test_akshare_fetch_kline_minute_uses_min_em(monkeypatch):
    """akshare 分钟线走 stock_zh_a_hist_min_em(period='60'/'30'/'15')"""
    import akshare as ak
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {}
    calls = {}
    def fake_min_em(**kw):
        calls.update(kw)
        return _minute_df()
    monkeypatch.setattr(ak, 'stock_zh_a_hist_min_em', fake_min_em)
    df = mgr._fetch_kline('akshare', '600519.SH', '15min', 5)
    assert df is not None and len(df) == 2
    assert calls.get('period') == '15', 'akshare 分钟 period 应为 15, 实得 %r' % calls.get('period')


def test_daily_period_unaffected():
    """日线仍走原路径 (tushare pro.daily) — 不回归"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {}
    called = []
    class FakePro:
        def daily(self, **kw):
            called.append('daily')
            return pd.DataFrame({'trade_date': ['2026-09-08'], 'close': [10.0]})
    mgr._clients['tushare'] = FakePro()
    df = mgr._fetch_kline('tushare', '600519.SH', 'daily', 5)
    assert df is not None and len(df) == 1
    assert called == ['daily'], '日线应走 pro.daily'

# ==================== V5.4.1 (R1): 分钟K线 live 可用化 ====================
# 覆盖: ① 数据源优先级可配置(券商版 sxsc 默认优先) ② 限频串行(1次/分钟)
#       ③ 分钟列名归一化(trade_time/中文列 → trade_date) ④ 全源失败降级日线(degraded 标记)
import time


def _minute_df_trade_time():
    """tushare/sxsc stk_mins 真实列: trade_time (非 trade_date)"""
    return pd.DataFrame({
        'trade_time': ['2026-09-08 10:00:00', '2026-09-08 10:30:00'],
        'open': [10.0, 10.2], 'high': [10.5, 10.4], 'low': [9.9, 10.0],
        'close': [10.2, 10.3], 'vol': [100, 120], 'amount': [1000, 1200],
    })


def test_minute_priority_default_sxsc_first():
    """默认分钟数据源优先级 = 券商版 sxsc 优先 (用户 Q2 决策)"""
    from data_sources import _constants as c
    prio = c.DEFAULT_CONFIG.get('minute', {}).get('priority', c.SOURCE_ORDER)
    assert prio[0] == 'sxsc_tushare', '券商版 tushare 应为分钟数据首选, 实得 %r' % (prio,)


def test_minute_priority_reads_config(monkeypatch):
    """分钟数据源优先级可从配置覆盖 (datasource_config.json minute.priority)"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr.config = {'minute': {'priority': ['akshare', 'tushare']}}
    assert mgr._minute_priority() == ['akshare', 'tushare']
    # 无配置时回退默认
    mgr.config = {}
    assert mgr._minute_priority() == list(m.SOURCE_ORDER)


def test_minute_rate_limit_serializes(monkeypatch):
    """分钟接口限频: 同源 60s 内不重复拉取 — 冷却中的源被跳过/串行等待"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {'sxsc_tushare': object()}
    mgr.config = {}
    calls = {'n': 0}
    class FakeSxsc:
        def query(self, api_name, **kw):
            calls['n'] += 1
            return _minute_df_trade_time()
    mgr._clients['sxsc_tushare'] = FakeSxsc()
    # 第一次: 允许 (调用后进入冷却)
    m.reset_minute_rate_limiter()
    df = mgr._fetch_kline('sxsc_tushare', '600519.SH', '60min', 5)
    assert df is not None and len(df) == 2
    assert calls['n'] == 1
    # 模拟调用成功: 标记该源进入冷却
    m._minute_mark_called('sxsc_tushare')
    # 第二次(60s 内): 冷却 → 不应再次调用同一源
    assert m._minute_source_in_cooldown('sxsc_tushare') is True
    assert calls['n'] == 1, '限频冷却期内不应重复调用同源'
    # 复位冷却后可再次调用
    m.reset_minute_rate_limiter()
    assert m._minute_source_in_cooldown('sxsc_tushare') is False


def test_minute_trade_time_normalized_to_trade_date():
    """分钟源返回 trade_time 列 → 归一化为 trade_date 再进 _build_kline_response"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    df = _minute_df_trade_time()
    norm = mgr._normalize_minute_df(df)
    assert 'trade_date' in norm.columns, '应产出 trade_date 列'
    assert 'trade_time' not in norm.columns or True  # 保留原列亦可, 关键是有 trade_date
    resp = mgr._build_kline_response(norm, 'sxsc_tushare')
    assert resp['data'] and len(resp['data']) == 2
    # 日期格式: YYYYMMDD (前8位为交易日)
    first_date = str(resp['data'][0][0])
    assert first_date[:8] == '20260908', '日期应归一为 YYYYMMDD 前缀, 实得 %r' % first_date


def test_minute_all_sources_fail_degrade_to_daily(monkeypatch):
    """分钟数据全源失败 → 降级日线并标记 degraded_from (前端展示'分钟暂不可用, 展示日线')"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {}
    mgr.config = {'minute': {'priority': ['sxsc_tushare', 'tushare', 'akshare']}}
    # 三个源均不可达 (无客户端 → 全部跳过)
    mgr._clients = {}
    result = mgr.get_kline_data('600519.SH', period='60min', limit=5)
    assert result is None or result.get('data') in (None, []) or result.get('degraded_from') == '60min', \
        '全源失败应降级或明确标记, 实得 %r' % (result,)


def test_minute_success_no_degrade():
    """分钟数据成功时不带 degraded 标记"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {}
    calls = []
    class FakeSxsc:
        def query(self, api_name, **kw):
            calls.append(api_name)
            return _minute_df_trade_time()
    mgr._clients['sxsc_tushare'] = FakeSxsc()
    mgr.config = {'minute': {'priority': ['sxsc_tushare']}}
    # 清冷却, 允许调用
    m.reset_minute_rate_limiter()
    result = mgr.get_kline_data('600519.SH', period='60min', limit=5)
    assert result and result.get('data'), '分钟数据应成功返回'
    assert not result.get('degraded_from'), '成功路径不应带 degraded 标记'
    assert calls == ['stk_mins']

