"""T-5.1.52: 复盘→策略关联 (market_review) — 复盘关联实验, 策略反查复盘。

FR-5.1.5.2: 复盘可关联实验 id; 策略(实验)可反查关联的复盘。
"""
import pytest
import tempfile
import os

from market_review import (
    link_review_experiment, get_review_experiments,
    find_reviews_for_experiment,
)


def _seed_review(date='2026-09-01'):
    """写一份复盘 JSON 到临时目录。"""
    from market_review import _save_review
    _save_review({'date': date, 'sectors': {'leader': ['半导体'], 'laggard': []}})
    return date


class TestLinkReviewExperiment:
    def test_link_and_get(self, tmp_path, monkeypatch):
        import market_review
        monkeypatch.setattr(market_review, '_reviews_dir',
                            lambda: str(tmp_path))
        _seed_review('2026-09-01')
        ok = link_review_experiment('2026-09-01', 'exp_1')
        assert ok is True
        exps = get_review_experiments('2026-09-01')
        assert 'exp_1' in exps

    def test_link_multiple(self, tmp_path, monkeypatch):
        import market_review
        monkeypatch.setattr(market_review, '_reviews_dir',
                            lambda: str(tmp_path))
        _seed_review('2026-09-01')
        link_review_experiment('2026-09-01', 'exp_1')
        link_review_experiment('2026-09-01', 'exp_2')
        exps = get_review_experiments('2026-09-01')
        assert set(exps) == {'exp_1', 'exp_2'}

    def test_link_missing_review_creates(self, tmp_path, monkeypatch):
        import market_review
        monkeypatch.setattr(market_review, '_reviews_dir',
                            lambda: str(tmp_path))
        ok = link_review_experiment('2026-09-05', 'exp_9')
        assert ok is True
        assert 'exp_9' in get_review_experiments('2026-09-05')

    def test_get_missing_review_empty(self, tmp_path, monkeypatch):
        import market_review
        monkeypatch.setattr(market_review, '_reviews_dir',
                            lambda: str(tmp_path))
        assert get_review_experiments('2026-09-01') == []


class TestFindReviewsForExperiment:
    def test_find_reviews(self, tmp_path, monkeypatch):
        import market_review
        monkeypatch.setattr(market_review, '_reviews_dir',
                            lambda: str(tmp_path))
        _seed_review('2026-09-01')
        _seed_review('2026-09-02')
        link_review_experiment('2026-09-02', 'exp_5')
        dates = find_reviews_for_experiment('exp_5')
        assert dates == ['2026-09-02']

    def test_find_none(self, tmp_path, monkeypatch):
        import market_review
        monkeypatch.setattr(market_review, '_reviews_dir',
                            lambda: str(tmp_path))
        _seed_review('2026-09-01')
        assert find_reviews_for_experiment('exp_nope') == []
