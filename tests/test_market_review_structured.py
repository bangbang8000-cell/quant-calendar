"""T-5.1.51: 复盘结构化字段 (market_review) — 日期/板块/风格/因子/要点/策略启示。

FR-5.1.5.1: 复盘报告含结构化字段: 风格(style)/因子(factor)/要点(points)/策略启示(insights)。
"""
import pytest
from market_review import (
    ensure_structured_fields, structured_fields,
)


class TestStructuredFields:
    def test_from_sector_data(self):
        report = {
            'date': '2026-09-01',
            'sectors': {'leader': ['电力设备', '半导体'], 'laggard': ['银行']},
            'market': {'indexes': [{'name': '上证指数', 'change_pct': 1.2}]},
        }
        f = structured_fields(report)
        # 板块从 leader 提取
        assert isinstance(f['sectors'], list) and '电力设备' in f['sectors']
        # 风格/因子/要点/策略启示默认空
        assert f['style'] == []
        assert f['factors'] == []
        assert f['points'] == []
        assert f['insights'] == ''

    def test_ensure_adds_keys(self):
        report = {'date': '2026-09-01', 'sectors': {'leader': [], 'laggard': []}}
        out = ensure_structured_fields(report)
        for key in ('sectors', 'style', 'factors', 'points', 'insights'):
            assert key in out

    def test_ensure_preserves_existing(self):
        report = {'date': '2026-09-01',
                  'style': ['大盘成长'], 'factors': ['动量'],
                  'points': ['指数走强'], 'insights': '关注科技'}
        out = ensure_structured_fields(report)
        assert out['style'] == ['大盘成长']
        assert out['factors'] == ['动量']
        assert out['points'] == ['指数走强']
        assert out['insights'] == '关注科技'

    def test_sectors_from_ai_summary_fallback(self):
        # sectors 为空但 ai_summary 有内容 → sectors 回退 []
        report = {'date': '2026-09-01', 'sectors': {'leader': [], 'laggard': []},
                  'ai_summary': '今日科技板块领涨'}
        f = structured_fields(report)
        assert isinstance(f['sectors'], list)
