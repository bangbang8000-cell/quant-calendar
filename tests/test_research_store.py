"""T-5.1.1: 研究实验存储 (research_store) — 实验数据模型 + 历史持久化。

FR-5.1.0.2/5.1.0.3: 因子IC/分层/扫描/回测/稳定性运行结果存入研究库(按实验聚合),
每条实验含快照(策略ID+参数+数据区间+版本+结果摘要), 可复现可对比。
"""
import pytest
from backend import research_store


@pytest.fixture(autouse=True)
def _fresh_store(patch_data_dir):
    """每个测试使用干净的临时 DB + 清空实验存储。"""
    research_store._ensure_table()
    research_store._clear_all_for_test()
    yield


def _sample_exp(type='factor_ic', subject='momentum', **overrides):
    return {
        'type': type,
        'subject': subject,
        'params': {'window': 20, 'skip': 5},
        'date_range': ['2026-01-01', '2026-03-31'],
        'app_version': '5.1.0',
        'summary': {'ic_mean': 0.034, 'icir': 0.62, 'win_rate': 58.3},
        'result': {'ic_series': [0.01, 0.02, 0.03]},
        **overrides,
    }


class TestSaveAndGet:
    def test_save_returns_unique_id(self):
        eid = research_store.save_experiment(_sample_exp())
        assert isinstance(eid, str) and eid.startswith('exp_')
        eid2 = research_store.save_experiment(_sample_exp())
        assert eid != eid2

    def test_get_roundtrip_preserves_all_fields(self):
        eid = research_store.save_experiment(_sample_exp())
        got = research_store.get_experiment(eid)
        assert got is not None
        assert got['type'] == 'factor_ic'
        assert got['subject'] == 'momentum'
        assert got['params'] == {'window': 20, 'skip': 5}
        assert got['summary']['ic_mean'] == 0.034
        assert got['result']['ic_series'] == [0.01, 0.02, 0.03]
        assert got['app_version'] == '5.1.0'
        assert 'created_at' in got

    def test_get_missing_returns_none(self):
        assert research_store.get_experiment('exp_nope') is None


class TestList:
    def test_list_orders_by_newest_first(self):
        e1 = research_store.save_experiment(_sample_exp(subject='a'))
        e2 = research_store.save_experiment(_sample_exp(subject='b'))
        items = research_store.list_experiments()
        assert [x['subject'] for x in items] == ['b', 'a']
        assert items[0]['id'] == e2

    def test_list_filters_by_type(self):
        research_store.save_experiment(_sample_exp(type='factor_ic'))
        research_store.save_experiment(_sample_exp(type='sweep', subject='s1'))
        research_store.save_experiment(_sample_exp(type='sweep', subject='s2'))
        sweeps = research_store.list_experiments(type='sweep')
        assert len(sweeps) == 2
        assert all(x['type'] == 'sweep' for x in sweeps)

    def test_list_respects_limit(self):
        for i in range(5):
            research_store.save_experiment(_sample_exp(subject=f's{i}'))
        assert len(research_store.list_experiments(limit=3)) == 3


class TestCompare:
    def test_compare_two_experiments(self):
        a = research_store.save_experiment(_sample_exp(subject='momentum', summary={'ic_mean': 0.03}))
        b = research_store.save_experiment(_sample_exp(subject='reversal', summary={'ic_mean': 0.06}))
        cmp = research_store.compare_experiments([a, b])
        assert len(cmp) == 2
        # 对比结果按 id 对齐, 含 subject 与 summary
        by_id = {x['id']: x for x in cmp}
        assert by_id[a]['subject'] == 'momentum'
        assert by_id[a]['summary']['ic_mean'] == 0.03
        assert by_id[b]['summary']['ic_mean'] == 0.06

    def test_compare_with_missing_id_skips(self):
        a = research_store.save_experiment(_sample_exp())
        cmp = research_store.compare_experiments([a, 'exp_ghost'])
        assert len(cmp) == 1


class TestDelete:
    def test_delete_removes_experiment(self):
        eid = research_store.save_experiment(_sample_exp())
        assert research_store.get_experiment(eid) is not None
        research_store.delete_experiment(eid)
        assert research_store.get_experiment(eid) is None
        assert len(research_store.list_experiments()) == 0

# ==================== T-5.1.2: 研究路由写入实验记录 ====================
# 直接调用 strategy_research._record_experiment 模拟四个研究路由的成功路径,
# 验证: 写入/类型过滤/静默失败(坏类型不抛错但跳过? 见实现)。

class TestRecordFromRoutes:
    def _rec(self, etype, subject='multi_factor/mom20'):
        from api.v1 import strategy_research as sr
        return sr._record_experiment(
            etype, subject,
            {'factor_key': 'mom20', 'window': 'n1'},
            ['2026-01-01', '2026-03-31'],
            {'ic_mean': 0.03, 'icir': 0.6, 'win_rate': 55.0},
            {'report': {'dummy': 1}})

    def test_ic_route_records(self):
        eid = self._rec('factor_ic')
        exp = research_store.get_experiment(eid)
        assert exp['type'] == 'factor_ic'
        assert exp['summary']['ic_mean'] == 0.03
        assert exp['result']['report']['dummy'] == 1

    def test_layer_route_records(self):
        eid = self._rec('layer')
        assert research_store.get_experiment(eid)['type'] == 'layer'

    def test_sweep_route_records(self):
        eid = self._rec('sweep')
        assert research_store.get_experiment(eid)['type'] == 'sweep'

    def test_backtest_route_records(self):
        eid = self._rec('backtest')
        assert research_store.get_experiment(eid)['type'] == 'backtest'

    def test_all_types_queryable_by_type(self):
        for t in ('factor_ic', 'layer', 'sweep', 'backtest'):
            self._rec(t, subject=f's/{t}')
        assert len(research_store.list_experiments(type='sweep')) == 1
        assert len(research_store.list_experiments(type='factor_ic')) == 1

    def test_invalid_type_raises_and_not_recorded(self):
        with pytest.raises(ValueError):
            research_store.save_experiment({'type': 'bogus', 'subject': 'x'})
        assert len(research_store.list_experiments()) == 0
