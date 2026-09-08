#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.1 (T-5.2.14~16): 市场事实 / 明日验证条件 / 近5日热度测试

诚实性: 数据不足 → None 不算判错; 行业口径近似题材须如实标注。
"""
import sys

import pandas as pd
import pytest

from shortterm import store
from shortterm import market_facts as mf
from shortterm import verification as ver
from shortterm import weekly


@pytest.fixture(autouse=True)
def _clean_shortterm_store():
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


class _FakeAk:
    def __init__(self, df=None, exc=None):
        self._df = df
        self._exc = exc

    def stock_zt_pool_previous_em(self, date):
        if self._exc:
            raise self._exc
        return self._df


def _prev_df():
    return pd.DataFrame([
        {'代码': '002909', '名称': '集泰股份', '涨跌幅': 10.0, '最新价': 8.0, '涨停价': 8.0,
         '昨日连板数': 3, '所属行业': '化学制品'},
        {'代码': '600000', '名称': '浦发银行', '涨跌幅': 2.0, '最新价': 9.0, '涨停价': 9.9,
         '昨日连板数': 1, '所属行业': '银行'},
        {'代码': '000001', '名称': '平安银行', '涨跌幅': -1.5, '最新价': 10.0, '涨停价': 11.0,
         '昨日连板数': 1, '所属行业': '银行'},
    ])


# ---------- 市场事实 ----------

def test_seal_quality(monkeypatch):
    from shortterm import emotion_metrics as em
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(df=_prev_df()))
    store.save_pool('2026-09-02', 'zt', [
        {'ts_code': 'a', 'first_seal_time': '09:30:00', 'seal_amount': 1e8},
        {'ts_code': 'b', 'first_seal_time': '14:30:00', 'seal_amount': 5e7},
    ])
    store.save_pool('2026-09-02', 'zb', [{'ts_code': 'x'}, {'ts_code': 'y'}])
    out = mf.seal_quality('2026-09-02')
    assert out['available'] is True
    assert out['limit_up_count'] == 2
    assert out['early_seal_rate'] == 0.5
    assert out['broken_rate'] == 0.5
    assert out['seal_amount_median'] == 7.5e7


def test_seal_quality_missing_pool():
    out = mf.seal_quality('2026-09-30')
    assert out['available'] is False
    assert '未入库' in out['reason']


def test_feedback_matrix(monkeypatch):
    from shortterm import emotion_metrics as em
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(df=_prev_df()))
    store.save_pool('2026-09-02', 'zt', [{'ts_code': '002909'}])
    store.save_pool('2026-09-02', 'dt', [{'ts_code': '000001'}])
    out = mf.feedback_matrix('2026-09-02')
    assert out['available'] is True
    assert out['sample'] == 3
    assert out['relimit'] == round(1 / 3, 3)      # 002909 再涨停
    assert out['down_limit'] == round(1 / 3, 3)   # 000001 跌停
    assert out['green'] == round(1 / 3, 3)        # 000001 ret=-1.5 < 0


def test_theme_structure_industry_note(monkeypatch):
    from shortterm import emotion_metrics as em
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(df=_prev_df()))
    out = mf.theme_structure('2026-09-02')
    assert out['available'] is True
    assert '行业口径近似题材' in out['note']      # 诚实标注
    top0 = out['top'][0]
    assert top0['industry'] == '银行' and top0['count'] == 2


# ---------- 明日验证条件 ----------

def test_direction_three_state():
    assert ver._direction('>=', 10.0, 9.5) == '成立'
    assert ver._direction('>=', 9.0, 9.5) == '证伪'
    assert ver._direction('<=', 0.2, 0.25) == '成立'
    assert ver._direction('<=', 0.4, 0.25) == '证伪'
    assert ver._direction('>=', None, 9.5) == '数据不足'   # 数据不足不算判错
    assert ver._direction('>=', 10.0, None) == '数据不足'


def test_direction_eps_noise():
    """40 → 41 不算上升(eps=5)"""
    assert ver._direction('>=', 41.0, 40.0, eps=5.0) == '成立'


def test_metric_value_extraction():
    bundle = {
        'promotion': {'limit_up_count': 60, 'tiers': {'1进2': {'rate': 0.5}}},
        'ladder': {'highest': 4},
        'money_effect': {'median': 2.5},
        'seal_quality': {'broken_rate': 0.3},
        'loss_effect': {'down_limit_count': 8},
    }
    assert ver.metric_value(bundle, 'limit_up_count') == 60
    assert ver.metric_value(bundle, 'highest_board') == 4
    assert ver.metric_value(bundle, 'promotion_1to2') == 0.5
    assert ver.metric_value(bundle, 'money_median') == 2.5
    assert ver.metric_value(bundle, 'broken_rate') == 0.3
    assert ver.metric_value(bundle, 'limit_down_count') == 8
    assert ver.metric_value({}, 'limit_up_count') is None   # 缺失 → 数据不足


def test_build_conditions_with_baseline():
    bundle = {
        'promotion': {'limit_up_count': 60, 'tiers': {'1进2': {'rate': 0.5}}},
        'ladder': {'highest': 4},
        'money_effect': {'median': 2.5},
        'seal_quality': {'broken_rate': 0.3},
        'loss_effect': {'down_limit_count': 8},
    }
    baselines = {'limit_up_count': {'threshold': 55, 'base_rate': 0.6, 'sample': 20}}
    conds = ver.build_conditions(bundle, baselines, days=20)
    by_key = {c['key']: c for c in conds}
    assert by_key['limit_up_count']['verdict'] == '成立'   # 60 >= 55
    assert by_key['highest_board']['verdict'] == '数据不足'  # 无基线
    assert by_key['limit_up_count']['base_rate'] == 0.6
    assert len(conds) == len(ver.METRICS)


def test_direction_baseline():
    hist = [{'limit_up_count': 50}, {'limit_up_count': 60}, {'limit_up_count': 55},
            {'limit_up_count': 45}, {'limit_up_count': None}]
    b = ver.direction_baseline(hist, 'limit_up_count', '>=')
    assert b['sample'] == 4
    assert b['threshold'] == round((50 + 60 + 55 + 45) / 4, 3)
    assert b['base_rate'] is not None


def test_summarize_conditions():
    results = [{'verdict': '成立'}, {'verdict': '证伪'}, {'verdict': '数据不足'}]
    s = ver.summarize(results)
    assert s == {'total': 3, 'hit': 1, 'miss': 1, 'unknown': 1}


# ---------- 近5日热度 + 龙头谱系 ----------

def test_industry_heat_and_leaders(monkeypatch):
    from shortterm import trade_calendar as tc
    monkeypatch.setattr(tc, 'last_trade_dates',
                        lambda n, end=None: ['2026-09-02', '2026-09-01'])
    store.save_pool('2026-09-02', 'zt', [
        {'ts_code': 'a', 'name': '龙头A', 'boards': 5, 'industry': '半导体'},
        {'ts_code': 'b', 'name': '跟风B', 'boards': 2, 'industry': '半导体'},
    ])
    store.save_pool('2026-09-01', 'zt', [
        {'ts_code': 'a', 'name': '龙头A', 'boards': 3, 'industry': '半导体'},
        {'ts_code': 'c', 'name': 'C', 'boards': 1, 'industry': '银行'},
    ])
    out = weekly.industry_heat(n=5)
    assert out['available'] is True
    assert out['top'][0]['industry'] == '半导体' and out['top'][0]['count'] == 3
    leader = next(l for l in out['leaders'] if l['industry'] == '半导体')
    assert leader['name'] == '龙头A' and leader['boards'] == 5
    assert '行业口径近似题材' in out['note']


def test_industry_heat_empty():
    out = weekly.industry_heat(n=5)
    assert out['available'] is False
