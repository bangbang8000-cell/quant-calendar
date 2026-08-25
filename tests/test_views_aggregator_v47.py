"""V4.7: views_aggregator 性能优化测试

覆盖:
- _period_set 周期集合缓存 (年/月视图 O(N×D) → O(N))
- 年视图 out 股票数量限制 (防响应膨胀)
- calculate_status year/month 复用缓存结果一致
"""
import pytest


@pytest.fixture
def agg():
    from views_aggregator import ViewsAggregator
    a = ViewsAggregator.__new__(ViewsAggregator)
    a._cache = {}
    a._period_set_cache = {}
    a.all_dates = [
        '2025-01-02', '2025-01-03', '2025-01-06',
        '2026-01-05', '2026-01-06', '2026-01-07',
        '2026-08-18', '2026-08-19', '2026-08-20',
    ]
    a.daily_data = {
        '2025-01-02': [{'stock': 'A', 'name': 'a', 'strategy_count': 1, 'strategies': ['s1']}],
        '2025-01-03': [{'stock': 'B', 'name': 'b', 'strategy_count': 1, 'strategies': ['s1']}],
        '2025-01-06': [{'stock': 'C', 'name': 'c', 'strategy_count': 1, 'strategies': ['s1']}],
        '2026-01-05': [{'stock': 'A', 'name': 'a', 'strategy_count': 1, 'strategies': ['s1']}],
        '2026-01-06': [{'stock': 'D', 'name': 'd', 'strategy_count': 1, 'strategies': ['s1']}],
        '2026-01-07': [{'stock': 'D', 'name': 'd', 'strategy_count': 1, 'strategies': ['s1']}],
        '2026-08-18': [{'stock': 'E', 'name': 'e', 'strategy_count': 1, 'strategies': ['s1']}],
        '2026-08-19': [{'stock': 'F', 'name': 'f', 'strategy_count': 1, 'strategies': ['s1']}],
        '2026-08-20': [{'stock': 'G', 'name': 'g', 'strategy_count': 1, 'strategies': ['s1']}],
    }
    return a


def test_period_set_cache(agg):
    s1 = agg._period_set('year', '2025')
    assert s1 == {'A', 'B', 'C'}
    s2 = agg._period_set('year', '2025')
    assert s1 is s2


def test_period_set_cache_invalidate(agg):
    agg._period_set('year', '2025')
    assert ('year', '2025') in agg._period_set_cache
    agg._clear_period_cache()
    assert ('year', '2025') not in agg._period_set_cache


def test_calculate_status_year_uses_cache(agg):
    assert agg.calculate_status('A', '2026-08-20', 'year') == 'current'
    assert agg.calculate_status('D', '2026-08-20', 'year') == 'new'
    assert agg.calculate_status('B', '2026-08-20', 'year') == 'out'
    assert ('year', '2025') in agg._period_set_cache
    assert ('year', '2026') in agg._period_set_cache


def test_calculate_status_month_uses_cache(agg):
    assert agg.calculate_status('E', '2026-08-20', 'month') == 'new'
    assert agg.calculate_status('A', '2026-08-20', 'month') == 'out'
    assert ('month', '2026-08') in agg._period_set_cache


def test_get_year_view_limits_out(agg):
    r = agg.get_year_view('2026-08-20')
    assert r['view'] == 'year'
    assert r['total'] <= 300
    out_count = sum(1 for s in r['stocks'] if s.get('first_appear', '').startswith('2025'))
    assert out_count <= 200


def test_get_month_view_works(agg):
    r = agg.get_month_view('2026-08-20')
    assert r['view'] == 'month'
    assert any(s['code'] == 'E' for s in r['stocks'])
