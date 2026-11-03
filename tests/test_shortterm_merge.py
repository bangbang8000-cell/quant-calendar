#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""三池字段合并测试 (v6.8.0 / B2.1, TC-FY-6.8-01~04/11)

守护：Fuyao 独有字段必须保留、本地字段必须补齐、ST 口径显式、关掉 Fuyao 回退不报错。
"""

from shortterm import fetchers, pool_merge

FZ = {  # 实测字段形状（2026-11-03 limit-up-pool）
    'thscode': '002827.SZ', 'ticker': '002827', 'name': '高争民爆',
    'is_st': False, 'is_new': False, 'last_price': 62.68,
    'price_change_ratio_pct': 10.0035, 'limit_up_time': '09:25',
    'limit_up_reason': '重组复牌+拟注铜锂矿', 'continue_day_text': '2连板',
    'continue_day_cnt': 2, 'seal_money': 549678530, 'max_seal_money': 969941660,
    'open_times': None,
}
LOCAL = {'ts_code': '002827', 'name': '高争民爆', 'pct_chg': 10.0, 'price': 62.68,
         'float_mv': 1.2e9, 'total_mv': 2.3e9, 'turnover_rate': 8.5,
         'industry': '民爆', 'amount': 1.1e9, 'board': '10cm'}


def test_normalize_keeps_fuyao_only_fields():
    rows = pool_merge.normalize_fuyao_rows('zt', [FZ])
    r = rows[0]
    assert r['ts_code'] == '002827'
    assert r['reason'] == FZ['limit_up_reason']
    assert r['max_seal_money'] == FZ['max_seal_money']
    assert r['boards'] == 2 and r['zt_stat'] == '2连板'
    assert r['is_st'] is False
    assert r['first_seal_time'] == '09:25:00'
    assert r['board'] == '10cm'


def test_merge_keeps_fuyao_wins_and_enriches_local():
    """TC-FY-6.8-01/02: Fuyao 独有字段全保留；本地补市值/换手/行业；缺失为 None 不填 0"""
    merged, stats = pool_merge.merge_rows(
        'zt', pool_merge.normalize_fuyao_rows('zt', [FZ]), [LOCAL])
    r = merged[0]
    assert r['reason'] and r['max_seal_money'] == 969941660
    assert r['total_mv'] == 2.3e9 and r['industry'] == '民爆'
    assert r['turnover_rate'] == 8.5
    assert r['field_source'] == 'mixed'
    assert 'total_mv' in r['enriched_by_local']
    assert stats == {'fuyao_count': 1, 'local_count': 1, 'merged_count': 1,
                     'local_only_rows': 0, 'enriched_rows': 1}


def test_merge_keeps_local_only_rows():
    """东财有、Fuyao 无的行（如口径差异）不得丢弃"""
    merged, stats = pool_merge.merge_rows('zt', [], [LOCAL])
    assert stats['local_only_rows'] == 1
    assert merged[0]['field_source'] == 'local'


def test_include_st_caliber_explicit():
    """TC-FY-6.8-03/04: 顶层必须标注 include_st，家数与徽标同源"""
    out = pool_merge.build_merged('zt', '20261103', [FZ], {'rows': [LOCAL]}, include_st=True)
    assert out['include_st'] is True
    assert '含 ST=是' in out['note']
    out2 = pool_merge.build_merged('zt', '20261103', [FZ], {'rows': [LOCAL]}, include_st=False)
    assert out2['include_st'] is False


def test_merge_zb_dt_mappings():
    zb = {'thscode': '301311.SZ', 'ticker': '301311', 'name': '昆船智能',
          'last_price': 18.68, 'price_change_ratio_pct': 18.0784, 'open_times': 5,
          'turnover_ratio_pct': 14.921, 'turnover': 634609870.0,
          'first_seal_time': '10:51', 'last_seal_time': '13:47'}
    r = pool_merge.normalize_fuyao_rows('zb', [zb])[0]
    assert r['break_times'] == 5 and r['turnover_rate'] == 14.921
    assert r['amount'] == 634609870.0
    assert r['first_seal_time'] == '10:51:00'

    dt = {'thscode': '002916.SZ', 'ticker': '002916', 'name': '深南电路',
          'last_price': 205.09, 'price_change_ratio_pct': -10.0009,
          'first_limit_time': '14:01', 'last_limit_time': '15:00',
          'turnover_ratio_pct': 2.0496}
    r2 = pool_merge.normalize_fuyao_rows('dt', [dt])[0]
    assert r2['pct_chg'] == -10.0009
    assert r2['first_seal_time'] == '14:01:00'


def test_fetch_pool_merges_when_fuyao_available(monkeypatch):
    monkeypatch.setattr(fetchers, '_fetch_fuyao_pool', lambda pt, d: [FZ], raising=False)
    monkeypatch.setattr(fetchers, '_fetch_legacy_pool',
                        lambda pt, c, d: {'available': True, 'source': 'akshare.eastmoney',
                                          'rows': [LOCAL]}, raising=False)
    monkeypatch.setattr(fetchers, '_enrich_missing_valuation', lambda rows, pt: 0, raising=False)
    out = fetchers._fetch_pool('zt', '2026-11-03', prefer='fuyao')
    assert out['available'] is True
    assert out['source'] == 'fuyao+eastmoney'
    assert len(out['rows']) == 1 and out['rows'][0]['reason']


def test_fetch_pool_falls_back_when_fuyao_none(monkeypatch):
    """TC-FY-6.8-11: 关掉/失败 Fuyao → 回退本地链路，行为与 v6.6 一致"""
    monkeypatch.setattr(fetchers, '_fetch_fuyao_pool', lambda pt, d: None, raising=False)
    legacy = {'available': True, 'source': 'akshare.eastmoney', 'rows': [LOCAL]}
    monkeypatch.setattr(fetchers, '_fetch_legacy_pool', lambda pt, c, d: legacy, raising=False)
    out = fetchers._fetch_pool('zt', '2026-11-03')
    assert out is legacy


def test_fetch_pool_prefer_local_skips_fuyao(monkeypatch):
    called = {'n': 0}

    def _boom(*a, **k):
        called['n'] += 1
        return [FZ]

    monkeypatch.setattr(fetchers, '_fetch_fuyao_pool', _boom, raising=False)
    legacy = {'available': True, 'rows': [LOCAL]}
    monkeypatch.setattr(fetchers, '_fetch_legacy_pool', lambda *a, **k: legacy, raising=False)
    out = fetchers._fetch_pool('zt', '2026-11-03', prefer='local')
    assert called['n'] == 0 and out is legacy


def test_fetch_pool_unavailable_envelope_preserved(monkeypatch):
    monkeypatch.setattr(fetchers, '_fetch_fuyao_pool', lambda *a, **k: None, raising=False)
    env = {'available': False, 'reason': '[⚠️ 涨停池｜2026-11-03 数据获取失败已降级：x]'}
    monkeypatch.setattr(fetchers, '_fetch_legacy_pool', lambda *a, **k: env, raising=False)
    out = fetchers._fetch_pool('zt', '2026-11-03')
    assert out['available'] is False and '⚠️' in out['reason']


def test_date_to_ms_shanghai():
    from tests.test_fuyao_shadow_diff import ms
    assert fetchers._date_to_ms('20261103') == ms('20261103')
    assert fetchers._date_to_ms('bad-date') is None
