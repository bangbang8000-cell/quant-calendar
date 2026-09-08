"""T-5.1.53: 复盘检索 (search_reviews) — 按日期/板块/标签筛选。

FR-5.1.5.3: 复盘可按日期精确/板块包含/标签(风格/因子/要点)检索。
"""
import pytest
from market_review import (
    search_reviews, _save_review,
)


def _seed_reviews(tmp_path, monkeypatch):
    import market_review
    monkeypatch.setattr(market_review, '_reviews_dir', lambda: str(tmp_path))
    _save_review({'date': '2026-09-01',
                  'sectors': {'leader': ['半导体', '新能源'], 'laggard': ['银行']},
                  'style': ['大盘成长'], 'factors': ['动量'], 'points': ['放量']})
    _save_review({'date': '2026-09-02',
                  'sectors': {'leader': ['白酒'], 'laggard': ['煤炭']},
                  'style': ['小盘价值'], 'factors': ['反转']})
    _save_review({'date': '2026-09-03',
                  'sectors': {'leader': ['半导体'], 'laggard': []}})


class TestSearchReviews:
    def test_by_date(self, tmp_path, monkeypatch):
        _seed_reviews(tmp_path, monkeypatch)
        out = search_reviews(date='2026-09-02')
        assert len(out) == 1
        assert out[0]['date'] == '2026-09-02'

    def test_by_sector(self, tmp_path, monkeypatch):
        _seed_reviews(tmp_path, monkeypatch)
        out = search_reviews(sector='半导体')
        assert len(out) == 2
        dates = {r['date'] for r in out}
        assert dates == {'2026-09-01', '2026-09-03'}

    def test_by_tag_style(self, tmp_path, monkeypatch):
        _seed_reviews(tmp_path, monkeypatch)
        out = search_reviews(tag='大盘成长')
        assert len(out) == 1
        assert out[0]['date'] == '2026-09-01'

    def test_by_tag_factor(self, tmp_path, monkeypatch):
        _seed_reviews(tmp_path, monkeypatch)
        out = search_reviews(tag='反转')
        assert len(out) == 1
        assert out[0]['date'] == '2026-09-02'

    def test_combined_filters(self, tmp_path, monkeypatch):
        _seed_reviews(tmp_path, monkeypatch)
        out = search_reviews(sector='半导体', date='2026-09-03')
        assert len(out) == 1
        assert out[0]['date'] == '2026-09-03'

    def test_no_match_empty(self, tmp_path, monkeypatch):
        _seed_reviews(tmp_path, monkeypatch)
        assert search_reviews(sector='不存在板块') == []

    def test_no_filters_all(self, tmp_path, monkeypatch):
        _seed_reviews(tmp_path, monkeypatch)
        out = search_reviews()
        assert len(out) == 3

    def test_result_shape(self, tmp_path, monkeypatch):
        _seed_reviews(tmp_path, monkeypatch)
        out = search_reviews(date='2026-09-01')
        r = out[0]
        assert 'date' in r and 'sectors' in r and 'summary' in r
