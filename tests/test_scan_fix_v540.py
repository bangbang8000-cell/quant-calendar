# -*- coding: utf-8 -*-
"""V5.4.0 (FIX): 异动扫描长时间无数据 — 两个根因修复测试

1. 缓存 bug: 全量数据不可达时 (数据暂不可用) 不得缓存 600s —
   否则瞬时数据源故障会让用户 10 分钟内持续看到无数据 (与代码注释
   「失败不缓存」矛盾, 实际无条件缓存)。
2. 日期格式: scan 返回 date 必须为 YYYY-MM-DD (全站约定),
   而非 kline 源的 YYYYMMDD — 否则前端直接显示 20260908,
   下游按日期解析/聚合也会错乱。
"""
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import scan_engine
from scan_engine import run_scan


def _bar(d, o, c, low, high, vol):
    return [d, o, c, low, high, vol]


class _FailManager:
    def get_kline_data(self, ts_code, period='daily', limit=60, **kwargs):
        return None


class _GoodManager:
    def __init__(self):
        self.good = {
            '000001.SZ': {'data': [
                _bar('20260713', 10.0, 10.0, 9.9, 10.1, 1e6),
                _bar('20260714', 10.0, 11.0, 10.0, 11.0, 2e6),
            ], 'data_source': 'fake'},
        }

    def get_kline_data(self, ts_code, period='daily', limit=60, **kwargs):
        return self.good.get(ts_code)


@pytest.fixture(autouse=True)
def _clear_cache():
    """每用例前清空扫描结果缓存 (模块级)"""
    scan_engine._scan_cache.clear()
    yield
    scan_engine._scan_cache.clear()


# ─── 修复1: 全量不可达不缓存 ────────────────────────────────

def test_data_unavailable_result_not_cached():
    """全量数据不可达 (数据暂不可用) 不得写入缓存 —
    源恢复后再次扫描必须重新计算, 不能命中 10 分钟旧空。"""
    # 第一次: 全量失败
    r1 = run_scan(pool=['000001.SZ'], manager=_FailManager())
    assert r1['moves'] == [] and r1['note'] == '数据暂不可用'
    # 断言未写入缓存 (失败结果不应驻留)
    assert not scan_engine._scan_cache, '全量失败结果不应写入缓存'
    # 第二次: 数据源恢复 → 必须重新计算得到异动, 而非旧空
    r2 = run_scan(pool=['000001.SZ'], manager=_GoodManager())
    assert r2['moves'], '源恢复后应重新计算得到异动'
    assert len(r2['moves']) == 1


def test_successful_result_is_cached():
    """成功 (有 moves) 结果应写入缓存 (TTL 内重复请求命中)"""
    run_scan(pool=['000001.SZ'], manager=_GoodManager())
    assert len(scan_engine._scan_cache) == 1, '成功结果应写入缓存'


# ─── 修复2: 输出日期归一化为 YYYY-MM-DD ─────────────────────

def test_scan_date_normalized_to_iso():
    """kline 源日期 YYYYMMDD → 输出 YYYY-MM-DD (全站约定)"""
    r = run_scan(pool=['000001.SZ'], manager=_GoodManager())
    assert r['date'] == '2026-07-14', f"scan date 应归一化为 YYYY-MM-DD, got {r['date']!r}"
    assert r['moves'][0]['date'] == '2026-07-14'


def test_scan_date_explicit_passthrough():
    """显式 date 参数 (YYYY-MM-DD) 原样保留"""
    r = run_scan(date='2026-07-14', pool=['000001.SZ'], manager=_GoodManager())
    assert r['date'] == '2026-07-14'
