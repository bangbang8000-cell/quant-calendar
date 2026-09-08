"""T-5.1.43: 实验对比增强 (research_store.radar_data) — 多实验统一指标 → 雷达图。

FR-5.1.4.3: 多实验对比含统一指标归一化数据 (雷达图用), 缺失指标补 0。
"""
import pytest
from backend import research_store
from research_store import radar_data, build_radar_data


@pytest.fixture(autouse=True)
def _fresh_store(patch_data_dir):
    research_store._ensure_table()
    research_store._clear_all_for_test()
    yield


def _save(summary, subject='x'):
    return research_store.save_experiment(
        {'type': 'factor_ic', 'subject': subject, 'summary': summary})


class TestRadarData:
    def test_radar_basic(self):
        e1 = _save({'ic_mean': 0.03, 'win_rate': 60.0})
        e2 = _save({'ic_mean': 0.05, 'win_rate': 55.0})
        data = radar_data([e1, e2])
        # 统一指标集
        assert 'indicators' in data
        assert 'series' in data
        inds = data['indicators']
        assert 'ic_mean' in inds and 'win_rate' in inds
        # 每个实验一条序列, 归一化到 [0,1]
        assert len(data['series']) == 2
        for s in data['series']:
            for v in s['values']:
                assert 0.0 <= v <= 1.0

    def test_radar_normalizes_between_experiments(self):
        e1 = _save({'ic_mean': 0.01})
        e2 = _save({'ic_mean': 0.09})
        data = radar_data([e1, e2])
        s1 = data['series'][0]['values'][0]
        s2 = data['series'][1]['values'][0]
        assert s1 < s2  # 归一化保留序
        assert s1 == pytest.approx(0.0)  # 最小值 → 0
        assert s2 == pytest.approx(1.0)  # 最大值 → 1

    def test_radar_missing_metric_zero(self):
        e1 = _save({'ic_mean': 0.03})
        e2 = _save({'icir': 0.6})  # 无 ic_mean
        data = radar_data([e1, e2])
        inds = data['indicators']
        assert 'ic_mean' in inds and 'icir' in inds
        for s in data['series']:
            assert len(s['values']) == len(inds)

    def test_radar_empty(self):
        data = radar_data([])
        assert data['indicators'] == []
        assert data['series'] == []

    def test_radar_single_experiment(self):
        e1 = _save({'ic_mean': 0.03})
        data = radar_data([e1])
        assert len(data['series']) == 1
        # 单实验: 指标归一化 (min==max → 0.5 或 1.0 兜底)
        for v in data['series'][0]['values']:
            assert 0.0 <= v <= 1.0


class TestBuildRadarData:
    def test_build_from_ids(self):
        e1 = _save({'ic_mean': 0.03, 'win_rate': 60.0}, subject='a')
        e2 = _save({'ic_mean': 0.05, 'win_rate': 55.0}, subject='b')
        data = build_radar_data([e1, e2])
        assert len(data['series']) == 2
        assert data['series'][0]['name'] == 'a'
        assert data['series'][1]['name'] == 'b'
