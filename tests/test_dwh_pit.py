#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""DWH PIT 与概念图谱测试 (v7.0.0 / B4.3, TC-FY-7.0-08/10)

守护：批大小上限 100、覆盖率标注、落库幂等、无未来函数可用性。
"""
import pytest

import concepts


class FakeClient:
    def __init__(self, fail_after=None):
        self.calls = []
        self.fail_after = fail_after

    def get(self, cap, path, params=None):
        self.calls.append(dict(params or {}))
        if self.fail_after is not None and len(self.calls) > self.fail_after:
            return {'ok': False, 'reason': 'upstream'}
        codes = params['thscode'].split(',')
        return {'ok': True, 'data': {'item': [
            {'thscode': c, 'index_list': [
                {'thscode': '885338.TI', 'name': '融资融券', 'type': 'cn_concept'},
                {'thscode': '881129.TI', 'name': '通信设备', 'type': 'industry'},
            ]} for c in codes]}}


class FakeMgr:
    def __init__(self, client, enabled=True):
        self._c = client
        self._enabled = enabled

    def fuyao_capability_enabled(self, cap):
        return self._enabled

    def fuyao_client(self):
        return self._c


def test_batch_size_capped_at_100(monkeypatch):
    """TC-FY-7.0-10: 单请求 ≤100 只（上游硬上限）"""
    client = FakeClient()
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)

    codes = ['%06d' % (600000 + i) for i in range(250)]
    mapping, meta = concepts.fetch_concepts_for(codes)
    assert len(client.calls) == 3, '250 只应切成 3 批'
    for params in client.calls:
        assert len(params['thscode'].split(',')) <= concepts.BATCH_SIZE
    assert meta['covered'] == 250 and meta['failed_batches'] == 0


def test_coverage_threshold_flag(monkeypatch):
    client = FakeClient(fail_after=1)  # 第二批失败
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(client), raising=False)
    out = concepts.refresh(['%06d' % (600000 + i) for i in range(200)], persist_rows=False)
    assert out['available'] is True
    assert out['failed_batches'] == 1
    assert out['meets_min'] is False, '覆盖率 <95% 必须显式标注'


def test_thscode_exchange_inference():
    assert concepts.thscode_of('600519') == '600519.SH'
    assert concepts.thscode_of('000001') == '000001.SZ'
    assert concepts.thscode_of('920002') == '920002.BJ'
    assert concepts.thscode_of('600519.SH') == '600519.SH'


def test_persist_is_idempotent(tmp_path):
    """概念落库幂等（主键 thscode+concept_code）"""
    pytest.importorskip('pyarrow')
    db = str(tmp_path / 'market.duckdb')
    rows = concepts.to_rows({'600519.SH': [{'code': '885338.TI', 'name': '融资融券',
                                            'type': 'cn_concept'}]})
    assert len(rows) == 1
    first = concepts.persist(rows, db_path=db)
    second = concepts.persist(rows, db_path=db)
    assert first == second == {'rows': 1, 'stocks': 1}
    loaded = concepts.load_concepts(db_path=db)
    assert loaded['available'] is True and len(loaded['rows']) == 1


def test_capability_disabled(monkeypatch):
    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager',
                        FakeMgr(FakeClient(), enabled=False), raising=False)
    mapping, meta = concepts.fetch_concepts_for(['600519'])
    assert mapping == {} and meta['reason'] == 'capability_disabled'


def test_pit_guard_available_through():
    """TC-FY-7.0-08: PIT 守卫——只允许已知交易日之前的数据参与计算"""
    import pit
    fn = getattr(pit, 'available_through', None)
    assert fn is not None, 'pit 应提供 available_through 供 DWH 使用'
    assert fn('2026-11-03', '2026-11-03') is True
    assert fn('2026-11-03', '2026-11-02') is False
    assert fn(None, '2026-11-03') is False
