"""T-5.1.44: 研究日志 (activity_log) — 按日期浏览研究活动。

FR-5.1.4.4: 按日期聚合研究活动 (每日实验数/类型分布), 按日期倒序浏览。
"""
import pytest
from backend import research_store
from research_store import activity_log


@pytest.fixture(autouse=True)
def _fresh_store(patch_data_dir):
    research_store._ensure_table()
    research_store._clear_all_for_test()
    yield


def _save(etype, subject, created_at):
    return research_store.save_experiment({
        'type': etype, 'subject': subject, 'created_at': created_at})


class TestActivityLog:
    def test_group_by_date(self):
        _save('factor_ic', 'a', '2026-09-01T10:00:00')
        _save('factor_ic', 'b', '2026-09-01T11:00:00')
        _save('sweep', 'c', '2026-09-02T10:00:00')
        log = activity_log(days=30)
        assert len(log) == 2
        dates = [d['date'] for d in log]
        assert dates == ['2026-09-02', '2026-09-01']  # 倒序

    def test_counts(self):
        _save('factor_ic', 'a', '2026-09-01T10:00:00')
        _save('factor_ic', 'b', '2026-09-01T11:00:00')
        log = activity_log(days=30)
        day = log[0]
        assert day['count'] == 2

    def test_type_distribution(self):
        _save('factor_ic', 'a', '2026-09-01T10:00:00')
        _save('layer', 'b', '2026-09-01T11:00:00')
        log = activity_log(days=30)
        day = log[0]
        assert day['by_type'] == {'factor_ic': 1, 'layer': 1}

    def test_empty(self):
        log = activity_log(days=30)
        assert log == []

    def test_days_filter(self):
        _save('factor_ic', 'a', '2026-09-01T10:00:00')
        _save('factor_ic', 'b', '2026-09-15T10:00:00')
        log = activity_log(days=7)
        # 7 天内只有 9-15
        assert len(log) == 1
        assert log[0]['date'] == '2026-09-15'

    def test_log_contains_experiments(self):
        eid = _save('factor_ic', 'a', '2026-09-01T10:00:00')
        log = activity_log(days=30, include_experiments=True)
        day = log[0]
        assert 'experiments' in day
        assert len(day['experiments']) == 1
        assert day['experiments'][0]['id'] == eid
