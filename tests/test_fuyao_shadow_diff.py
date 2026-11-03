#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""影子对拍测试 (v6.7.0 / B1.4, TC-FY-6.7-09~13)

守护：同口径比对、阈值判定、非交易日如实标注、台账原子落盘、报警判定。
"""
import json

import pytest

import fuyao_shadow as fs


def ms(day):
    """'YYYYMMDD' → Asia/Shanghai 零点毫秒戳（Fuyao date_ms 口径）"""
    from datetime import datetime, timedelta, timezone
    dt = datetime.strptime(day, '%Y%m%d').replace(tzinfo=timezone(timedelta(hours=8)))
    return int(dt.timestamp() * 1000)


def test_compare_pools_identical_is_zero_diff():
    app = [{'ts_code': '000001'}, {'ts_code': '600519'}]
    fy = [{'ticker': '000001'}, {'ticker': '600519'}]
    r = fs.compare_pools(app, fy)
    assert r['app_count'] == 2 and r['fuyao_count'] == 2
    assert r['diff_pct'] == 0.0 and r['ok'] is True


def test_compare_pools_handles_st_extra_rows():
    """实测场景：东财 48 家(不含 ST) ⊂ Fuyao 52 家(含 ST) → 对称差 4/52 ≈ 7.7% 超阈值"""
    app = [{'ts_code': '%06d' % i} for i in range(48)]
    fy = [{'ticker': '%06d' % i} for i in range(52)]
    r = fs.compare_pools(app, fy)
    assert r['diff_count'] == 4
    assert r['diff_pct'] == pytest.approx(4 / 52, abs=1e-4)
    assert r['ok'] is False, '含 ST 与不含 ST 的口径差必须触发对拍告警，而不是静默通过'
    assert len(r['fuyao_only']) == 4 and r['app_only'] == []


def test_compare_pools_empty_side():
    r = fs.compare_pools([], [])
    assert r['diff_pct'] == 0.0 and r['app_count'] == 0


def test_compare_closes_detects_mismatch():
    app = [{'trade_date': '20261030', 'close': 1392.05},
           {'trade_date': '20261102', 'close': 1439.10}]
    fy = [{'date_ms': ms('20261030'), 'close_price': 1392.05},
          {'date_ms': ms('20261102'), 'close_price': 1439.10}]
    r = fs.compare_closes(app, fy)
    assert r['compared'] == 2 and r['ok'] is True

    fy[1]['close_price'] = 1439.11
    r2 = fs.compare_closes(app, fy)
    assert r2['ok'] is False and r2['mismatch_count'] == 1


def test_compare_closes_supports_list_rows():
    """v6.6 的 kline 响应是 list[list] 形态"""
    app = [['20261030', 1363.0, 1392.05, 1352.98, 1393.37, 59927.29]]
    fy = [{'date_ms': ms('20261030'), 'close_price': 1392.05}]
    r = fs.compare_closes(app, fy)
    assert r['compared'] == 1 and r['ok'] is True


def test_build_record_and_alert():
    pools = {'zt': {'ok': True, 'app_count': 48, 'fuyao_count': 48,
                    'diff_count': 0, 'diff_pct': 0.0},
             'zb': {'ok': True, 'app_count': 34, 'fuyao_count': 34,
                    'diff_count': 0, 'diff_pct': 0.0},
             'dt': {'ok': True, 'app_count': 17, 'fuyao_count': 17,
                    'diff_count': 0, 'diff_pct': 0.0}}
    closes = {'compared': 2, 'mismatch_count': 0, 'mismatches': [], 'ok': True}
    rec = fs.build_record('2026-11-03', pools, closes)
    assert rec['ok'] is True and fs.should_alert(rec) is False

    pools['zt']['ok'] = False
    rec2 = fs.build_record('2026-11-03', pools, closes)
    assert rec2['ok'] is False and fs.should_alert(rec2) is True


def test_should_alert_when_closes_not_compared():
    pools = {'zt': {'ok': True}}
    rec = fs.build_record('2026-11-03', pools, {'compared': 0, 'ok': False})
    assert fs.should_alert(rec) is True


def test_save_record_upsert_and_keep(tmp_path):
    path = str(tmp_path / 'fuyao_shadow.json')
    for i in range(5):
        fs.save_record(path, {'date': '2026-11-0%d' % (i + 1), 'ok': True}, keep_days=3)
    records = fs.load_records(path)
    assert [r['date'] for r in records] == ['2026-11-03', '2026-11-04', '2026-11-05']

    fs.save_record(path, {'date': '2026-11-05', 'ok': False}, keep_days=3)
    records = fs.load_records(path)
    assert len(records) == 3
    assert records[-1] == {'date': '2026-11-05', 'ok': False}, '同日应 upsert 而非重复'
    assert not (tmp_path / 'fuyao_shadow.json.tmp').exists(), '原子替换后不应残留临时文件'


def test_run_shadow_marks_empty_side_not_ok(tmp_path):
    """非交易日/单侧失败：如实 reason=empty_side，不伪造 0 差异"""
    rec = fs.run_shadow(
        '2026-11-03',
        fetch_app_pool=lambda k: [],
        fetch_fuyao_pool=lambda k: [],
        fetch_app_kline=lambda c: [],
        fetch_fuyao_kline=lambda c: [],
        sample_codes=['600519.SH'],
        path=str(tmp_path / 's.json'),
    )
    assert rec['ok'] is False
    assert rec['items']['zt']['reason'] == 'empty_side'
    assert fs.should_alert(rec) is True


def test_run_shadow_full_pass(tmp_path):
    app = [{'ts_code': '000001'}]
    fy = [{'ticker': '000001'}]
    rec = fs.run_shadow(
        '2026-11-03',
        fetch_app_pool=lambda k: app,
        fetch_fuyao_pool=lambda k: fy,
        fetch_app_kline=lambda c: [['20261030', 1, 10.0, 1, 1, 1]],
        fetch_fuyao_kline=lambda c: [{'date_ms': ms('20261030'), 'close_price': 10.0}],
        sample_codes=['000001.SZ'],
        path=str(tmp_path / 's.json'),
    )
    assert rec['ok'] is True
    assert json.loads(open(tmp_path / 's.json', encoding='utf-8').read())[0]['date'] == '2026-11-03'
