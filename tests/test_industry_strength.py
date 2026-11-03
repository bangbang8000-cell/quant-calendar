#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""行业强度矩阵测试 (v7.1.0 / B5.1, TC-FY-7.1-01/02/07)

守护：相对强度/加速度/成交额脉冲/排名变化口径、缺数不填 0、缓存与口径标注。
"""
import json

import pytest

import industry_strength as ist


class FakeClient:
    def __init__(self, catalog=None, hist=None, fail_codes=()):
        self.catalog = catalog if catalog is not None else [
            {'thscode': 'A.TI', 'name': '行业A'}, {'thscode': 'B.TI', 'name': '行业B'},
            {'thscode': 'C.TI', 'name': '行业C'}]
        self.hist = hist or {}
        self.fail = set(fail_codes)
        self.calls = []

    def get(self, cap, path, params=None):
        self.calls.append((path, dict(params or {})))
        if 'catalog' in path:
            return {'ok': True, 'data': {'item': self.catalog}}
        code = (params or {}).get('thscode')
        if code in self.fail:
            return {'ok': False, 'reason': 'upstream'}
        items = self.hist.get(code)
        if items is None:
            return {'ok': False, 'reason': 'no_data'}
        return {'ok': True, 'data': {'item': items}}


def _bars(n, start=100.0, step=1.0):
    out = []
    for i in range(n):
        out.append({'date_ms': 1761753600000 + i * 86400000,
                    'close_price': start + i * step, 'turnover': 1000.0 + i})
    return out


def test_pct_change_and_insufficient_data():
    closes = [100, 101, 102, 103, 104, 105, 106]
    # base = closes[-6] = 101 → (106/101-1)*100 ≈ 4.95
    assert ist.pct_change(closes, 5) == pytest.approx(4.95, abs=0.01)
    assert ist.pct_change([100, 101], 5) is None
    assert ist.pct_change([], 5) is None


def test_rel_strength_is_median_centered():
    """TC-FY-7.1-02: 相对强度 = 值 − 中位数"""
    out = ist.rel_strength({'a': 10.0, 'b': 2.0, 'c': -4.0}, 5)
    # 中位数 = 2 → a: +8, b: 0, c: -6
    assert out['a'] == pytest.approx(8.0) and out['b'] == pytest.approx(0.0)
    assert out['c'] == pytest.approx(-6.0)
    # 中位中心化后，残差的中位数为 0（和不一定为 0——那是均值中心化的性质）
    import statistics
    assert statistics.median(out.values()) == pytest.approx(0.0)


def test_volume_pulse():
    amounts = [100.0] * 15 + [200.0] * 5      # 近5日翻倍
    # a5=200, a20=(15*100+5*200)/20=125 → 1.6
    assert ist.volume_pulse(amounts) == pytest.approx(1.6, abs=0.01)
    assert ist.volume_pulse([1.0] * 5) is None


def test_breadth_and_rank():
    assert ist.breadth_of([1.0, -1.0, 2.0, None]) == pytest.approx(0.6667, abs=1e-3)
    assert ist.breadth_of([]) is None
    assert ist.rank_of({'a': 3, 'b': 5, 'c': None}) == {'b': 1, 'a': 2}


def test_refresh_builds_matrix_with_acceleration(monkeypatch, tmp_path):
    import paths
    monkeypatch.setattr(paths, 'DATA_DIR', str(tmp_path), raising=False)
    monkeypatch.setattr(ist, '_cache_path', lambda: str(tmp_path / 'industry_strength.json'))
    # A 持续强, B 走弱, C 无数据
    hist = {'A.TI': _bars(70, 100.0, 1.0), 'B.TI': _bars(70, 100.0, 0.1)}
    client = FakeClient(hist=hist)
    out = ist.refresh(client=client)
    assert out['available'] is True
    assert out['covered'] == 2 and out['requested'] == 3
    rows = {r['index_code']: r for r in out['rows']}
    assert rows['A.TI']['rel']['rel_20'] > rows['B.TI']['rel']['rel_20']
    assert rows['A.TI']['acceleration'] is not None
    # 缺数行业不得进入 rows（也就不会被填 0）
    assert 'C.TI' not in rows
    assert any(f['code'] == 'C.TI' for f in out['failed'])
    # 口径与来源标注齐全
    assert out['meta']['source'] == 'fuyao'
    assert '等权涨跌代理' in out['meta']['caliber']
    assert '不构成投资建议' in out['meta']['disclaimer']
    for k in ('rel_N', 'acceleration', 'volume_pulse', 'rank_change'):
        assert k in out['meta']['formula']


def test_cache_roundtrip_and_stale_flag(monkeypatch, tmp_path):
    cache = tmp_path / 'industry_strength.json'
    cache.write_text(json.dumps({'available': True, 'rows': [], 'generated_at': 'x'}), encoding='utf-8')
    monkeypatch.setattr(ist, '_cache_path', lambda: str(cache))
    got = ist.load_cache(max_age=0)
    assert got['available'] is True and got['stale'] is True
    assert ist.load_cache(max_age=10 ** 9)['stale'] is False


def test_capability_disabled(monkeypatch):
    monkeypatch.setattr(ist, '_client', lambda: (None, 'capability_disabled'))
    out = ist.refresh()
    assert out['available'] is False and out['reason'] == 'capability_disabled'
