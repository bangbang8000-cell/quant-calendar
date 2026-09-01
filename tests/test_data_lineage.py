"""V5.1 T-5.1.6: 数据血缘与刷新批次测试 (TEST-PLAN 2.1 test_data_lineage.py)

批次号 / 刷新审计 / 可追溯: 每次数据刷新有唯一 batch_id, 状态/来源/行数可回溯。
"""
import pytest

from lineage import (begin_batch, finish_batch, get_batches, get_batch,
                     reset_lineage, record_pull, new_batch_id, MAX_ENTRIES)


@pytest.fixture(autouse=True)
def _clean():
    reset_lineage()
    yield
    reset_lineage()


class TestBatchLifecycle:
    def test_begin_creates_running(self):
        bid = begin_batch("kline", trigger="manual", pool_size=5)
        b = get_batch(bid)
        assert b["status"] == "running"
        assert b["kind"] == "kline" and b["pool_size"] == 5

    def test_finish_sets_fields(self):
        bid = begin_batch("kline")
        b = finish_batch(bid, status="success", rows_fetched=42, source="tushare")
        assert b["status"] == "success" and b["rows_fetched"] == 42
        assert b["source"] == "tushare" and b["finished_at"]

    def test_batch_id_unique_and_prefixed(self):
        ids = {new_batch_id() for _ in range(50)}
        assert len(ids) == 50
        assert all(i.startswith("B") and len(i) >= 15 for i in ids)

    def test_finish_unknown_returns_none(self):
        assert finish_batch("B__nope__") is None

    def test_get_batch_missing_none(self):
        assert get_batch("B__nope__") is None


class TestQueries:
    def test_get_batches_latest_first(self):
        a = begin_batch("kline")
        b = begin_batch("kline")
        finish_batch(b)
        batches = get_batches()
        assert batches[0]["batch_id"] == b
        assert batches[1]["batch_id"] == a

    def test_get_batches_kind_filter(self):
        begin_batch("kline")
        begin_batch("financial")
        ks = get_batches(kind="kline")
        assert len(ks) == 1 and ks[0]["kind"] == "kline"

    def test_get_batches_limit(self):
        for _ in range(5):
            begin_batch("kline")
        assert len(get_batches(limit=3)) == 3


class TestRecordPull:
    def test_record_success(self):
        bid = record_pull("kline", {"total": 10, "pulled": 10, "failed": 0,
                                    "errors": [], "message": ""})
        b = get_batch(bid)
        assert b["status"] == "success" and b["rows_fetched"] == 10

    def test_record_partial(self):
        bid = record_pull("kline", {"total": 10, "pulled": 8, "failed": 2,
                                    "errors": ["a"], "message": ""})
        assert get_batch(bid)["status"] == "partial"

    def test_record_failed(self):
        bid = record_pull("kline", {"total": 10, "pulled": 0, "failed": 10,
                                    "errors": ["a", "b"], "message": ""})
        assert get_batch(bid)["status"] == "failed"

    def test_record_persists(self):
        bid = record_pull("kline", {"total": 1, "pulled": 1, "failed": 0, "errors": []})
        # 新读一次 (绕过缓存) 仍可取
        from lineage import _read
        entries = _read()
        assert any(b["batch_id"] == bid for b in entries)


class TestPrune:
    def test_caps_entries(self):
        for _ in range(MAX_ENTRIES + 10):
            begin_batch("kline")
        assert len(get_batches(limit=MAX_ENTRIES + 100)) <= MAX_ENTRIES


class TestLineageApi:
    def test_anonymous_rejected(self):
        from main_new import app
        from fastapi.testclient import TestClient
        c = TestClient(app)
        assert c.get("/api/lineage").status_code in (401, 403)

    def test_admin_reads_lineage(self):
        record_pull("kline", {"total": 2, "pulled": 2, "failed": 0, "errors": []})
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/lineage")
        assert r.status_code == 200, r.text
        assert isinstance(r.json()["data"]["batches"], list)

    def test_admin_batch_detail(self):
        bid = record_pull("kline", {"total": 3, "pulled": 3, "failed": 0, "errors": []})
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/lineage/" + bid)
        assert r.status_code == 200, r.text
        assert r.json()["data"]["batch_id"] == bid
