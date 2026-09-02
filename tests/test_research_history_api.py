"""T-5.1.3: 研究历史 API (research-history 列表/详情/对比/删除)。

FR-5.1.0.4: 实验列表/对比视图。测试直接 seed 实验记录(复用 research_store),
再通过 /api/strategies/research-history 端点验证列表/详情/对比/删除。
"""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope="module")
def authed_client():
    from main_new import app
    from auth import create_access_token
    token = create_access_token({"sub": "admin", "role": "admin"})
    client = TestClient(app)
    client.headers.update({"Authorization": f"Bearer {token}"})
    return client


@pytest.fixture(autouse=True)
def _clean_store(patch_data_dir):
    from backend import research_store
    research_store._ensure_table()
    research_store._clear_all_for_test()
    yield


def _seed(etype='factor_ic', subject='multi_factor/mom20', summary=None):
    from backend import research_store
    return research_store.save_experiment({
        'type': etype,
        'subject': subject,
        'params': {'window': 20},
        'date_range': ['2026-01-01', '2026-03-31'],
        'app_version': '5.1.0',
        'summary': summary or {'ic_mean': 0.03, 'icir': 0.6, 'win_rate': 55.0},
        'result': {'report': {}},
    })


class TestListAPI:
    def test_list_returns_seeded(self, authed_client):
        eid = _seed()
        r = authed_client.get('/api/strategies/research-history')
        assert r.status_code == 200, r.text
        items = (r.json() or {}).get('items') or []
        assert len(items) == 1
        assert items[0]['id'] == eid
        assert items[0]['type'] == 'factor_ic'

    def test_list_filter_by_type(self, authed_client):
        _seed(etype='factor_ic', subject='a')
        _seed(etype='sweep', subject='b')
        r = authed_client.get('/api/strategies/research-history', params={'type': 'sweep'})
        items = (r.json() or {}).get('items') or []
        assert len(items) == 1
        assert items[0]['subject'] == 'b'

    def test_list_limit(self, authed_client):
        for i in range(4):
            _seed(subject=f's{i}')
        r = authed_client.get('/api/strategies/research-history', params={'limit': 2})
        assert len((r.json() or {}).get('items') or []) == 2


class TestDetailAPI:
    def test_detail_returns_full(self, authed_client):
        eid = _seed()
        r = authed_client.get(f'/api/strategies/research-history/{eid}')
        assert r.status_code == 200, r.text
        exp = (r.json() or {}).get('experiment') or {}
        assert exp['id'] == eid
        assert exp['summary']['icir'] == 0.6
        assert 'result' in exp

    def test_detail_missing_404(self, authed_client):
        r = authed_client.get('/api/strategies/research-history/exp_ghost')
        assert r.status_code == 404


class TestCompareAPI:
    def test_compare_two(self, authed_client):
        a = _seed(subject='momentum', summary={'ic_mean': 0.03})
        b = _seed(subject='reversal', summary={'ic_mean': 0.06})
        r = authed_client.post('/api/strategies/research-history/compare',
                               json={'ids': [a, b]})
        assert r.status_code == 200, r.text
        items = (r.json() or {}).get('items') or []
        assert len(items) == 2
        by_id = {x['id']: x for x in items}
        assert by_id[a]['subject'] == 'momentum'
        assert by_id[b]['summary']['ic_mean'] == 0.06

    def test_compare_empty_ids_400(self, authed_client):
        r = authed_client.post('/api/strategies/research-history/compare', json={'ids': []})
        assert r.status_code == 400

    def test_compare_skips_missing(self, authed_client):
        a = _seed()
        r = authed_client.post('/api/strategies/research-history/compare',
                               json={'ids': [a, 'exp_ghost']})
        items = (r.json() or {}).get('items') or []
        assert len(items) == 1


class TestDeleteAPI:
    def test_delete(self, authed_client):
        eid = _seed()
        r = authed_client.delete(f'/api/strategies/research-history/{eid}')
        assert r.status_code == 200, r.text
        assert (r.json() or {}).get('deleted') is True
        r2 = authed_client.get(f'/api/strategies/research-history/{eid}')
        assert r2.status_code == 404

    def test_delete_missing_404(self, authed_client):
        r = authed_client.delete('/api/strategies/research-history/exp_ghost')
        assert r.status_code == 404
