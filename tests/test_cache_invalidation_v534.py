# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.4.3 / FR-5.3.4.3): 缓存失效中心 — 数据刷新主动失效

- run_pipeline 刷新成功后调用 cache.invalidate_stale (daily/consensus)
- 统一 L1/L2 失效语义由 cache.py 提供 (invalidate_stale)
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKEND = os.path.join(BASE, "backend")


def _src():
    with open(os.path.join(BACKEND, "data_pipeline.py"), encoding="utf-8") as f:
        return f.read()


def test_run_pipeline_invalidates_cache_after_refresh():
    """run_pipeline 刷新后主动失效 daily/consensus 缓存"""
    src = _src()
    assert "invalidate_stale" in src, "数据刷新应调用缓存失效"
    assert "invalidate_stale('daily')" in src and "invalidate_stale('consensus')" in src



def test_cache_invalidate_stale_semantics():
    """invalidate_stale 无 stale 标记时不误清 (刷新流程收口安全)"""
    sys.path.insert(0, BACKEND)
    from cache import invalidate_stale, set, get
    set('x:cache-inv-test', 'v1', ttl=3600)
    assert get('x:cache-inv-test') == 'v1'
    # 未标记 stale → 不误清
    invalidate_stale('daily')
    assert get('x:cache-inv-test') == 'v1', '未 stale 不应误清缓存'


def test_cache_mark_stale_after_new_batch():
    """数据版本联动: is_data_stale 由 lineage 最新批次 id 驱动"""
    sys.path.insert(0, BACKEND)
    from cache import mark_data_version, is_data_stale
    # 未记录版本 → 不判过期 (避免首次误失效)
    assert is_data_stale('daily') is False
    mark_data_version('daily')
    assert is_data_stale('daily') is False, '版本同步 → 不 stale'

