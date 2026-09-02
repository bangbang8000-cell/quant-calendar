"""T-5.1.41: 实验记录扩展 (research_store) — 假设/结论/标签/备注字段 + 编辑。

FR-5.1.4.1: 实验记录可编辑假设(hypothesis)/结论(conclusion)/标签(tags)/备注(notes)。
"""
import pytest
from backend import research_store


@pytest.fixture(autouse=True)
def _fresh_store(patch_data_dir):
    research_store._ensure_table()
    research_store._clear_all_for_test()
    yield


class TestNormalizeFields:
    def test_tags_normalized(self):
        exp = research_store.normalize_meta_fields({'tags': ['动量', ' 反转 ', None, '']})
        assert exp['tags'] == ['动量', '反转']

    def test_defaults(self):
        exp = research_store.normalize_meta_fields({})
        assert exp['tags'] == []
        assert exp['hypothesis'] == ''
        assert exp['conclusion'] == ''
        assert exp['notes'] == ''

    def test_clean_strings(self):
        exp = research_store.normalize_meta_fields({'hypothesis': '  测试假设  '})
        assert exp['hypothesis'] == '测试假设'


class TestUpdateExperiment:
    def test_update_fields(self):
        eid = research_store.save_experiment(
            {'type': 'factor_ic', 'subject': 'mom20'})
        ok = research_store.update_experiment(
            eid, {'hypothesis': '动量在短持有期有效',
                  'conclusion': 'ICIR 显著', 'tags': ['动量'],
                  'notes': '样本含牛熊'})
        assert ok is True
        exp = research_store.get_experiment(eid)
        assert exp['hypothesis'] == '动量在短持有期有效'
        assert exp['conclusion'] == 'ICIR 显著'
        assert exp['tags'] == ['动量']
        assert exp['notes'] == '样本含牛熊'

    def test_update_missing_id_returns_false(self):
        assert research_store.update_experiment('exp_nonexistent', {'notes': 'x'}) is False

    def test_update_preserves_other_fields(self):
        eid = research_store.save_experiment(
            {'type': 'layer', 'subject': 'pe', 'summary': {'ic': 0.05}})
        research_store.update_experiment(eid, {'tags': ['价值']})
        exp = research_store.get_experiment(eid)
        assert exp['summary'] == {'ic': 0.05}
        assert exp['type'] == 'layer'
        assert exp['tags'] == ['价值']

    def test_update_ignores_unknown_keys(self):
        eid = research_store.save_experiment(
            {'type': 'factor_ic', 'subject': 'x'})
        research_store.update_experiment(eid, {'hacker': 'bad'})
        exp = research_store.get_experiment(eid)
        assert 'hacker' not in exp
