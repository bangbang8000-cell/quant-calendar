#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fuyao 单位/口径归一测试 (v6.7.0 / B1.5, TC-FY-G-08/09/10)

实测差异：成交量 股 vs 手、时间 毫秒 vs YYYYMMDD、涨跌幅 已是百分数（禁止二次放大）。
"""
import pytest

from data_sources._fuyao import (
    FuyaoClient,
    ms_to_yyyymmdd,
    normalize_bar,
    pct_passthrough,
    shares_to_lots,
)


def test_volume_shares_to_lots():
    """600519 实测 volume=7,412,056 股 → 74,120.56 手"""
    assert shares_to_lots(7412056) == pytest.approx(74120.56)
    assert shares_to_lots(None) is None
    assert shares_to_lots('bad') is None


def test_ms_to_date_uses_shanghai_tz():
    from tests.test_fuyao_shadow_diff import ms  # noqa: PLC0415

    # Asia/Shanghai 零点 → 同一自然日（UTC 下会落到前一天）
    assert ms_to_yyyymmdd(ms('20261030')) == '20261030'
    assert ms_to_yyyymmdd(None) is None


def test_pct_not_multiplied_twice():
    """price_change_ratio_pct=2.842054 表示 +2.84%，不得变成 284"""
    assert pct_passthrough(2.842054) == pytest.approx(2.842054)
    assert pct_passthrough(None) is None


def test_normalize_bar_from_snapshot_item():
    item = {
        'thscode': '600519.SH', 'last_price': 1480.0, 'open_price': 1450.0,
        'high_price': 1480.0, 'low_price': 1435.1, 'volume': 7412056,
        'turnover': 10825780500, 'price_change_ratio_pct': 2.842054,
    }
    bar = normalize_bar(item)
    assert bar['close'] == 1480.0 and bar['open'] == 1450.0
    assert bar['vol'] == pytest.approx(74120.56)
    # turnover 元 → 千元（对齐 tushare amount 口径）
    assert bar['amount'] == pytest.approx(10825780.5)
    assert bar['pct_chg'] == pytest.approx(2.842054)


def test_normalize_bar_from_kline_item():
    from tests.test_fuyao_shadow_diff import ms  # noqa: PLC0415

    item = {'date_ms': ms('20261030'), 'open_price': 1363.0, 'close_price': 1392.05,
            'low_price': 1352.98, 'high_price': 1393.37, 'volume': 5992729,
            'turnover': 8269122000}
    bar = normalize_bar(item)
    assert bar['trade_date'] == '20261030'
    assert bar['close'] == pytest.approx(1392.05)
    assert bar['vol'] == pytest.approx(59927.29)


def test_normalize_bar_rejects_non_dict():
    assert normalize_bar(None) is None
    assert normalize_bar([1, 2, 3]) is None


def test_quota_counts_and_rolls():
    days = {'d': '2026-11-03'}
    c = FuyaoClient(api_key='k', daily_limit=2, today=lambda: days['d'],
                    transport=lambda *a, **k: (200, '{"code":0,"message":"ok","data":{}}'),
                    sleep=lambda s: None)
    c.get('a.b', '/x')
    c.get('a.b', '/x')
    q = c.quota_snapshot()
    assert q['used_today'] == 2 and q['remaining'] == 0 and q['exceeded'] is False

    c.get('a.b', '/x')  # 超限：仅告警，不硬停
    assert c.quota_snapshot()['exceeded'] is True

    days['d'] = '2026-11-04'  # 跨日重置
    assert c.quota_snapshot()['used_today'] == 0
