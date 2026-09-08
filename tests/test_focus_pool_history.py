#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (FR-5.4.9): 重点跟踪股票入池历史回溯

守护: focus_pool_history 纯函数 —
  从 daily_data(每交易日池股票) 回溯某股票的入池区间(按日入池):
  first_appear(首次入池日)/last_appear(最后在池日)/pool_entries(多段区间,
  连续在池日合并, 间断另起新段)/is_current(最新交易日是否在池)。
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))

import pytest

import focus_pool_history as fph


def _dailies():
    """模拟 5 个交易日池数据: 600519 在 D1-D2 在池, D3 出池, D4-D5 重新入池。"""
    return {
        '2026-09-01': [{'code': '600519.SH'}, {'code': '000001.SZ'}],
        '2026-09-02': [{'code': '600519.SH'}],
        '2026-09-03': [{'code': '000001.SZ'}],          # 600519 出池
        '2026-09-04': [{'code': '600519.SH'}],          # 重新入池
        '2026-09-07': [{'code': '600519.SH'}, {'code': '000001.SZ'}],
    }


DATES = ['2026-09-01', '2026-09-02', '2026-09-03', '2026-09-04', '2026-09-07']


def test_first_and_last_appear():
    h = fph.compute_pool_history(_dailies(), DATES, '600519.SH')
    assert h['first_appear'] == '2026-09-01'
    assert h['last_appear'] == '2026-09-07'
    assert h['pooled_days'] == 4


def test_pool_entries_merge_contiguous_split_gaps():
    """连续在池合并为一段; D3 出池 → 两段入池区间。"""
    h = fph.compute_pool_history(_dailies(), DATES, '600519.SH')
    entries = h['pool_entries']
    assert len(entries) == 2, '应有两段入池区间, 实得 %r' % entries
    assert entries[0] == {'start': '2026-09-01', 'end': '2026-09-02', 'days': 2}
    assert entries[1] == {'start': '2026-09-04', 'end': '2026-09-07', 'days': 2}


def test_is_current_uses_latest_date():
    h = fph.compute_pool_history(_dailies(), DATES, '600519.SH')
    assert h['is_current'] is True            # 最新交易日(D5)在池
    h2 = fph.compute_pool_history(_dailies(), DATES, '000001.SZ')
    assert h2['is_current'] is True
    h3 = fph.compute_pool_history(_dailies(), DATES, '300760.SZ')  # 从未入池
    assert h3['is_current'] is False
    assert h3['pooled_days'] == 0
    assert h3['pool_entries'] == []
    assert h3['first_appear'] is None


def test_single_day_entry():
    d = {'2026-09-01': [{'code': 'X.SH'}], '2026-09-02': []}
    h = fph.compute_pool_history(d, ['2026-09-01', '2026-09-02'], 'X.SH')
    assert h['pool_entries'] == [{'start': '2026-09-01', 'end': '2026-09-01', 'days': 1}]
    assert h['is_current'] is False  # 最新交易日已出池


def test_load_pool_history_uses_aggregator(monkeypatch):
    """load_pool_history 从 views_aggregator 加载 daily_data/all_dates。"""
    class FakeAgg:
        daily_data = _dailies()
        all_dates = DATES
    monkeypatch.setattr(fph, 'views_aggregator', FakeAgg())
    h = fph.load_pool_history('600519.SH')
    assert h['first_appear'] == '2026-09-01'
    assert len(h['pool_entries']) == 2

# ==================== V5.4.1 (R2): load_pool_history 接线修复 ====================
# 原 bug: load_pool_history 用 import views_aggregator(模块) + getattr(模块,'daily_data')
#   → daily_data 是单例实例的实例属性, 模块本身没有 → 恒返回空 (生产实测入池历史全空)
# 修复: 改 from views_aggregator import views_aggregator (拿单例实例, 同 focus_list)
# 本测试不 mock fph.views_aggregator, 走真实接线路径 → 必须能拿到实例的 daily_data


def test_load_pool_history_real_wiring_uses_singleton_instance(monkeypatch):
    """非 mock 接线: load_pool_history 首次调用应解析到单例实例并读取其 daily_data。

    模拟: 真实模块单例 views_aggregator.views_aggregator 指向带数据的实例;
          复位 fph.views_aggregator=None → 走 from views_aggregator import ... 路径。
    """
    import views_aggregator as va_mod
    import focus_pool_history as fph

    class FakeAgg:
        daily_data = {
            '2026-09-01': [{'code': '600519.SH'}, {'code': '000001.SZ'}],
            '2026-09-02': [{'code': '600519.SH'}],
            '2026-09-03': [],                      # 600519 出池
            '2026-09-04': [{'code': '600519.SH'}],  # 重新入池
        }
        all_dates = ['2026-09-01', '2026-09-02', '2026-09-03', '2026-09-04']

    # 让真实模块的单例指向带数据的假实例
    monkeypatch.setattr(va_mod, 'views_aggregator', FakeAgg())
    # 复位惰性注入 → 触发真实接线 (from views_aggregator import views_aggregator)
    monkeypatch.setattr(fph, 'views_aggregator', None)

    h = fph.load_pool_history('600519.SH')
    assert h['first_appear'] == '2026-09-01', '接线修复后应读到实例 daily_data, 实得 %r' % h
    assert h['last_appear'] == '2026-09-04'
    assert h['pooled_days'] == 3
    assert h['is_current'] is True
    # 两段入池区间: 09-01~09-02 + 09-04 (中间 09-03 出池)
    entries = h['pool_entries']
    assert len(entries) == 2, '应有两段入池区间, 实得 %r' % entries
    assert entries[0]['start'] == '2026-09-01' and entries[0]['end'] == '2026-09-02'
    assert entries[1]['start'] == '2026-09-04' and entries[1]['end'] == '2026-09-04'

