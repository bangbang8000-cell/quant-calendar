#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.25~26): 涨停样本统计 + 原始归档 + 结构漂移测试"""
import pytest

from shortterm import archive, backtest, store
from shortterm import trade_calendar as tc


@pytest.fixture(autouse=True)
def _clean():
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
            pass

    _wipe()
    yield
    _wipe()


# ---------- 原始归档 + 字段漂移 ----------

def test_archive_raw_and_field_drift():
    archive.archive_raw('2026-09-02', 'zt', [{'代码': '1', '名称': 'X'}])
    rows = store.load_pool('2026-09-02', 'raw_zt')
    assert rows == [{'代码': '1', '名称': 'X'}]          # 原始行原样保存


def test_detect_field_drift():
    d = archive.detect_field_drift(['a', 'b'], ['a', 'c'])
    assert d['added'] == ['b'] and d['removed'] == ['c'] and d['changed'] is True
    assert archive.detect_field_drift(['a'], ['a'])['changed'] is False


def test_median_helper():
    assert archive._median([3, 1, 2]) == 2
    assert archive._median([1, 2, 3, 4]) == 2.5
    assert archive._median([]) is None


def test_structure_drift(monkeypatch):
    dates = [f'2026-09-{d:02d}' for d in range(1, 11)] + \
            [f'2026-08-{d:02d}' for d in range(20, 30)]
    monkeypatch.setattr(archive, 'last_trade_dates',
                        lambda n, end=None: dates[:n])
    # 近 10 天: 每家 100 只涨停, 最高 8 板; 前 20 天: 每家 30 只, 最高 3 板
    for i, d in enumerate(dates[:10]):
        store.save_pool(d, 'zt', [{'ts_code': f'a{i}', 'boards': 8} for _ in range(100)])
    for i, d in enumerate(dates[10:]):
        store.save_pool(d, 'zt', [{'ts_code': f'b{i}', 'boards': 3} for _ in range(30)])
    out = archive.detect_structure_drift('2026-09-30')
    assert out['available'] is True
    assert out['recent']['zt_median'] == 100
    assert out['prior']['zt_median'] == 30
    assert out['zt_median_shift'] == 70


def test_structure_drift_insufficient():
    out = archive.detect_structure_drift('2026-09-30')
    assert out['available'] is False


# ---------- 涨停样本统计 ----------

def test_sample_stats(monkeypatch):
    dates = ['2026-08-01', '2026-08-02', '2026-08-03', '2026-08-04']
    monkeypatch.setattr(backtest, 'last_trade_dates',
                        lambda n, end=None: dates)
    # 4 天定稿记录: 高低情绪混合
    store.save_pool('2026-08-01', 'prev_zt', [{'ret': 5.0}, {'ret': 3.0}])
    store.save_pool('2026-08-02', 'prev_zt', [{'ret': -2.0}, {'ret': -1.0}])
    store.save_pool('2026-08-03', 'prev_zt', [{'ret': 4.0}, {'ret': 2.0}])
    store.save_pool('2026-08-04', 'prev_zt', [{'ret': -3.0}, {'ret': -2.0}])
    out = backtest.sample_stats('2026-09-02', windows=(20,))
    w = out['windows']['20']
    assert w['available'] is True
    assert w['sample_days'] == 4
    assert '样本偏差声明' in out['note']
    # 中位数: 3, -1.5, 3, -2.5 → 均值阈值 ≈ 0.5; 高情绪日(median>=threshold)=01,03; 低=02,04
    assert w['high_sentiment']['days'] == 2
    assert w['low_sentiment']['days'] == 2
    assert w['high_sentiment']['avg_ret'] > w['low_sentiment']['avg_ret']


def test_sample_stats_insufficient(monkeypatch):
    monkeypatch.setattr(backtest, 'last_trade_dates',
                        lambda n, end=None: ['2026-08-01'])
    out = backtest.sample_stats('2026-09-02', windows=(20,))
    assert out['windows']['20']['available'] is False
    assert '不足' in out['windows']['20']['reason']
