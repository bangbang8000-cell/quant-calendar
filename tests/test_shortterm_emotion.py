#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.1 (T-5.2.11~13): 派生情绪指标测试

口径(借鉴 vibe-astock emotion_metrics):
- 赚钱效应: 定稿记录优先, 实时兜底 + 覆盖率闸门(<50% 不可用/<90% partial)
- 晋级率: 只比对两天池子; 1进2/2进3/3板+
- 情绪周期: minmax 归一化(全等给 0.5)/炸板率取反/相对读数标注
"""
import sys

import pandas as pd
import pytest

from shortterm import emotion_metrics as em
from shortterm import store


@pytest.fixture(autouse=True)
def _clean_shortterm_store():
    """session 级数据目录跨测试污染防护: 每测试前后清空短线池子表。

    ⚠️ 连接必须 close(否则泄漏的写锁会阻塞下一测试的写操作导致挂起)。
    """
    import db as _db

    def _wipe():
        try:
            with _db._db_lock:
                conn = _db.get_conn()
                try:
                    conn.execute("DELETE FROM shortterm_pools")
                    conn.commit()
                finally:
                    conn.close()
        except Exception:
            pass  # 表可能尚未建(首个测试触发 _ensure_table 之前), 首次忽略

    _wipe()
    yield
    _wipe()


def _prev_pool_df():
    """akshare stock_zt_pool_previous_em 返回形状"""
    return pd.DataFrame([
        {'代码': '002909', '名称': '集泰股份', '涨跌幅': 10.0, '最新价': 8.0, '涨停价': 8.0,
         '昨日连板数': 3, '所属行业': '化学制品'},
        {'代码': '600000', '名称': '浦发银行', '涨跌幅': 2.0, '最新价': 9.0, '涨停价': 9.9,
         '昨日连板数': 1, '所属行业': '银行'},
        {'代码': '000001', '名称': '平安银行', '涨跌幅': -1.5, '最新价': 10.0, '涨停价': 11.0,
         '昨日连板数': 1, '所属行业': '银行'},
    ])


class _FakeAk:
    def __init__(self, df=None, exc=None):
        self._df = df
        self._exc = exc

    def stock_zt_pool_previous_em(self, date):
        if self._exc:
            raise self._exc
        return self._df


# ---------- 覆盖率闸门 ----------

def test_coverage_partial_threshold():
    cov = em._coverage(80, 100)
    assert cov['coverage_rate'] == 0.8 and cov['partial'] is True
    assert em._coverage(95, 100)['partial'] is False
    assert em._coverage(40, 100)['coverage_rate'] == 0.4
    assert em._coverage(0, 0)['coverage_rate'] is None


# ---------- 定稿记录 ----------

def test_fetch_prev_pool_ok(monkeypatch):
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(df=_prev_pool_df()))
    out = em.fetch_prev_pool('2026-09-02')
    assert out['available'] is True and out['source'] == 'akshare.eastmoney'
    r = out['rows'][0]
    assert r['ts_code'] == '002909' and r['ret'] == 10.0 and r['prev_boards'] == 3


def test_fetch_prev_pool_failure_envelope(monkeypatch):
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(exc=RuntimeError('boom')))
    out = em.fetch_prev_pool('2026-09-02')
    assert out['available'] is False
    assert out['reason'].startswith('[⚠️')


def test_fetch_prev_pool_cached(monkeypatch):
    store.save_pool('2026-01-02', 'prev_zt', [{'ts_code': '002909', 'ret': 5.0}])
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(exc=RuntimeError('不应现抓')))
    out = em.fetch_prev_pool('2026-01-02')
    assert out['available'] is True and out['source'] == 'cached'


def test_stats_from_prev_rows():
    rows = [
        {'ts_code': 'a', 'ret': 10.0},
        {'ts_code': 'b', 'ret': 2.0},
        {'ts_code': 'c', 'ret': -1.5},
        {'ts_code': 'd'},            # ret 缺失, 不计
    ]
    stats = em._stats_from_prev_rows(rows, today_codes={'a'})
    assert stats['sample'] == 3
    assert stats['avg'] == round((10 + 2 - 1.5) / 3, 2)
    assert stats['median'] == 2.0
    assert stats['positive_rate'] == round(2 / 3, 3)
    assert stats['limit_up_again_rate'] == round(1 / 3, 3)
    assert stats['source'] == 'settled'


# ---------- 赚钱效应 ----------

def test_money_effect_settled_priority(monkeypatch):
    """定稿记录可用时优先, 不碰实时行情"""
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    store.save_pool('2026-09-01', 'zt', [{'ts_code': '002909', 'boards': 3}])
    store.save_pool('2026-09-02', 'zt', [{'ts_code': '002909', 'boards': 4}])
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(df=_prev_pool_df()))
    out = em.money_effect('2026-09-02')
    assert out['available'] is True
    assert out['source'] == 'settled'
    assert out['prev_date'] == '2026-09-01'
    # 002909 今日仍在涨停池 → limit_up_again_rate 计入
    assert out['limit_up_again_rate'] == round(1 / 3, 3)


def test_money_effect_realtime_coverage_gate(monkeypatch):
    """定稿记录缺失 → 实时兜底; 覆盖率<50% 不可用"""
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    monkeypatch.setattr('shortterm.trade_calendar.is_settled', lambda d, **k: True)
    monkeypatch.setattr('shortterm.trade_calendar.latest_session', lambda **k: '2026-09-02')
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(exc=RuntimeError('定稿记录不可得')))
    store.save_pool('2026-09-01', 'zt', [{'ts_code': 'a', 'boards': 1},
                                         {'ts_code': 'b', 'boards': 1},
                                         {'ts_code': 'c', 'boards': 1},
                                         {'ts_code': 'd', 'boards': 1}])
    # 只取到 1/4 只 → 覆盖率 0.25 < 0.5 → 不可用
    monkeypatch.setattr(em, '_spot_pct_map', lambda: {'a': 3.0})
    out = em.money_effect('2026-09-02')
    assert out['available'] is False
    assert '覆盖率' in out['reason']


def test_money_effect_realtime_not_settled_guard(monkeypatch):
    """非最近已收盘场次 → 实时行情不冒充定稿"""
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-08-01')
    monkeypatch.setattr('shortterm.trade_calendar.is_settled', lambda d, **k: True)
    monkeypatch.setattr('shortterm.trade_calendar.latest_session', lambda **k: '2026-09-02')
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(exc=RuntimeError('定稿记录不可得')))
    out = em.money_effect('2026-08-02')
    assert out['available'] is False
    assert '不冒充' in out['reason']


# ---------- 晋级率 ----------

def test_promotion_rates_buckets(monkeypatch):
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    store.save_pool('2026-09-01', 'zt', [
        {'ts_code': 'a', 'boards': 1}, {'ts_code': 'b', 'boards': 1},
        {'ts_code': 'c', 'boards': 2}, {'ts_code': 'd', 'boards': 3},
    ])
    store.save_pool('2026-09-02', 'zt', [
        {'ts_code': 'a', 'boards': 2}, {'ts_code': 'c', 'boards': 3},
    ])
    out = em.promotion_rates('2026-09-02')
    assert out['available'] is True
    assert out['tiers']['1进2'] == {'base': 2, 'promoted': 1, 'rate': 0.5}
    assert out['tiers']['2进3'] == {'base': 1, 'promoted': 1, 'rate': 1.0}
    assert out['tiers']['3板以上晋级'] == {'base': 1, 'promoted': 0, 'rate': 0.0}
    assert out['overall'] == {'base': 4, 'promoted': 2, 'rate': 0.5}


def test_promotion_rates_missing_pool(monkeypatch):
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    out = em.promotion_rates('2026-09-02')   # 池子未入库
    assert out['available'] is False
    assert '缺失' in out['reason']


# ---------- 连板溢价 ----------

def test_consec_premium_2board_plus(monkeypatch):
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(df=_prev_pool_df()))
    out = em.consec_premium('2026-09-02')
    # 昨日连板数>=2 仅 002909(3板, ret=10) → avg=10
    assert out['available'] is True
    assert out['sample'] == 1 and out['avg'] == 10.0


def test_consec_premium_no_2board(monkeypatch):
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    df = pd.DataFrame([{'代码': '600000', '名称': '浦发银行', '涨跌幅': 2.0,
                        '最新价': 9.0, '昨日连板数': 1}])
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(df=df))
    out = em.consec_premium('2026-09-02')
    assert out['available'] is True and out['sample'] == 0


# ---------- 情绪周期 ----------

def test_sentiment_cycle_basic(monkeypatch):
    monkeypatch.setattr(em, 'last_trade_dates',
                        lambda n, end=None: ['2026-09-02', '2026-09-01', '2026-08-29'])
    store.save_pool('2026-09-02', 'zt', [{'ts_code': 'a', 'boards': 4}, {'ts_code': 'b', 'boards': 1}])
    store.save_pool('2026-09-02', 'zb', [{'ts_code': 'x'}])
    store.save_pool('2026-09-01', 'zt', [{'ts_code': 'c', 'boards': 2}])
    store.save_pool('2026-08-29', 'zt', [{'ts_code': 'd', 'boards': 1}])
    out = em.sentiment_cycle('2026-09-02', lookback=3)
    assert out['available'] is True
    assert out['note'] == '十日窗口相对读数, 无绝对含义'
    assert len(out['series']) == 3
    assert all('score' in s for s in out['series'])
    assert out['trend'] in ('连续两日走强', '连续两日转弱', '今日走强', '今日转弱', '基本走平')


def test_sentiment_cycle_all_equal_scores_half(monkeypatch):
    """涨停家数全相等 → minmax 给 0.5(不假装有差异)"""
    monkeypatch.setattr(em, 'last_trade_dates',
                        lambda n, end=None: ['2026-09-02', '2026-09-01', '2026-08-29'])
    for d in ('2026-09-02', '2026-09-01', '2026-08-29'):
        store.save_pool(d, 'zt', [{'ts_code': 'a', 'boards': 1}])
        store.save_pool(d, 'zb', [])
    out = em.sentiment_cycle('2026-09-02', lookback=3)
    assert out['available'] is True
    # 涨停家数/最高连板/炸板率 三项全相等 → 每项 minmax 给 0.5 → score=0.5
    assert all(s['score'] == 0.5 for s in out['series'])


def test_sentiment_cycle_insufficient_data(monkeypatch):
    monkeypatch.setattr(em, 'last_trade_dates', lambda n, end=None: ['2026-09-02'])
    out = em.sentiment_cycle('2026-09-02', lookback=3)
    assert out['available'] is False
    assert '不足' in out['reason']
    assert out['note'] == '十日窗口相对读数'


def test_build_metrics_combines(monkeypatch):
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(df=_prev_pool_df()))
    store.save_pool('2026-09-01', 'zt', [{'ts_code': 'a', 'boards': 1}])
    store.save_pool('2026-09-02', 'zt', [{'ts_code': 'a', 'boards': 2}])
    out = em.build_metrics('2026-09-02')
    assert out['date'] == '2026-09-02' and out['prev_date'] == '2026-09-01'
    assert out['money_effect']['available'] is True
    assert out['promotion']['available'] is True
    assert out['consec_premium']['available'] is True
    assert 'sentiment_cycle' in out
