"""v3.15.1 回归: /api/market/overview 500 — trade_date 为 datetime.date 不可 JSON 序列化

根因: 实时数据源 (tushare/akshare) 返回的 trade_date 是 datetime.date 对象,
get_index_daily 未归一化即写入内存缓存 → _save_cache 的 json.dump 抛
"Object of type date is not JSON serializable", 且缓存命中时 API 响应同样 500。
修复: 入库前归一化为 %Y%m%d 字符串 + _save_cache 以 default=str 兜底。
"""
import json
from datetime import date
from unittest.mock import patch

import pytest

import market_data as md


class _FakeDs:
    """data_source_manager 替身: get_index_daily 返回带 date 对象的实时数据"""

    def __init__(self, trade_date_obj):
        self._td = trade_date_obj

    def get_index_daily(self, ts_code, trade_date=None):
        return {
            'ts_code': ts_code,
            'trade_date': self._td,
            'close': 4135.2,
            'pct_chg': 1.25,
            'change': 51.0,
            'vol': 3.4e8,
            'amount': 5.2e9,
            'data_source': 'tushare',
        }


@pytest.fixture
def iso_clean(tmp_path, monkeypatch):
    """隔离 CACHE_FILE 到临时目录 + 注入 fake 数据源 + 快照/恢复内存缓存"""
    monkeypatch.setattr(md, 'CACHE_FILE', str(tmp_path / 'market_cache.json'))
    old_cache = md.market_data.cache
    md.market_data.cache = {}
    yield md.market_data
    md.market_data.cache = old_cache


class TestTradeDateSerialization:
    def test_get_index_daily_normalizes_date(self, iso_clean):
        """date 对象 → %Y%m%d 字符串, 写缓存与返回一致"""
        with patch.object(iso_clean, 'ds_manager', _FakeDs(date(2026, 8, 10))):
            data = iso_clean.get_index_daily('000001.SH')
        assert data['trade_date'] == '20260810'
        # 缓存中同样是字符串
        assert iso_clean.cache['index_000001.SH_latest']['data']['trade_date'] == '20260810'
        # 可直接 json.dumps (不抛 TypeError)
        json.dumps(data)

    def test_save_cache_never_throws_on_dates(self, iso_clean):
        """_save_cache 对残留 date 对象 default=str 兜底, 不阻塞落盘"""
        iso_clean.cache['legacy_entry'] = {'trade_date': date(2026, 8, 10)}
        iso_clean._save_cache()  # 不应抛
        with open(md.CACHE_FILE, 'r', encoding='utf-8') as f:
            loaded = json.load(f)
        assert loaded['legacy_entry']['trade_date'] == '2026-08-10'

    def test_get_market_overview_json_serializable(self, iso_clean):
        """overview 全链路 (多指数 date 数据) 返回可 JSON 序列化"""
        with patch.object(iso_clean, 'ds_manager', _FakeDs(date(2026, 8, 10))):
            overview = iso_clean.get_market_overview()
        raw = json.dumps(overview)  # 不应抛 TypeError
        loaded = json.loads(raw)
        assert all(idx['trade_date'] == '20260810' for idx in loaded['indices'])
        assert len(loaded['indices']) > 0

    def test_mock_path_untouched(self, iso_clean):
        """数据源全部失败 → mock 数据路径 trade_date 仍为字符串 (不回归)"""
        class _EmptyDs:
            def get_index_daily(self, ts_code, trade_date=None):
                return None

        with patch.object(iso_clean, 'ds_manager', _EmptyDs()):
            data = iso_clean.get_index_daily('000001.SH')
        assert isinstance(data['trade_date'], str)
        json.dumps(data)
