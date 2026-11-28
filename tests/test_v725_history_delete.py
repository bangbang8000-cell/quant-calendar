"""v7.24 FR-16: 回测结果删除（单条/批量/审计/单源）。"""
import asyncio

import pytest
from fastapi import HTTPException

import research_store as rs


@pytest.fixture(autouse=True)
def _init_db():
    rs._ensure_table()
    rs._clear_all_for_test()
    yield


def _seed(n=3):
    ids = []
    for i in range(n):
        ids.append(rs.save_experiment({'type': 'backtest', 'subject': f'S{i}',
                                       'summary': {'total_return': i}}))
    return ids


def test_batch_delete_and_not_found():
    ids = _seed(3)
    out = rs.delete_experiments([ids[0], ids[2], 'missing-id'])
    assert out['deleted'] == [ids[0], ids[2]]
    assert out['not_found'] == ['missing-id']
    remain = [e['id'] for e in rs.list_experiments(type='backtest', limit=50)]
    assert ids[1] in remain


def test_delete_does_not_touch_other_types():
    bt = rs.save_experiment({'type': 'backtest', 'subject': 'BT'})
    ic = rs.save_experiment({'type': 'factor_ic', 'subject': 'IC'})
    rs.delete_experiment(bt)
    assert rs.get_experiment(bt) is None
    assert rs.get_experiment(ic) is not None
    rs.delete_experiment(ic)


def test_batch_api_writes_audit(monkeypatch):
    from api.v1 import strategy_research_history as mod
    calls = []
    monkeypatch.setattr('audit_log.log', lambda action, user, detail=None: calls.append(
        (action, user, detail)))
    ids = _seed(2)
    out = asyncio.run(mod.research_history_batch_delete({'ids': ids}, {'username': 'admin'}))
    assert out['deleted'] == 2
    assert out['not_found'] == []
    assert calls and calls[0][0] == 'backtest_result.delete'
    assert calls[0][2]['source'] == 'batch'


def test_batch_api_rejects_empty_and_too_many():
    from api.v1 import strategy_research_history as mod
    with pytest.raises(HTTPException) as e1:
        asyncio.run(mod.research_history_batch_delete({'ids': []}, {'username': 'admin'}))
    assert e1.value.status_code == 400
    with pytest.raises(HTTPException) as e2:
        asyncio.run(mod.research_history_batch_delete(
            {'ids': [str(i) for i in range(51)]}, {'username': 'admin'}))
    assert e2.value.status_code == 400


def test_single_delete_missing_returns_404():
    from api.v1 import strategy_research_history as mod
    with pytest.raises(HTTPException) as e:
        asyncio.run(mod.research_history_delete('no-such', {'username': 'admin'}))
    assert e.value.status_code == 404
