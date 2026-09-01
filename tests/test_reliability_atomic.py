"""V5.0 T-5.0.4: 原子写 / 并发写 / 文件健壮性 (TEST-PLAN 1.1)

原则: tmp+rename 原子写 → 任意时刻读到的都是完整文件; 并发写不脏读; 损坏文件降级为空不崩溃。
"""
import json
import os
from datetime import date, datetime
from concurrent.futures import ThreadPoolExecutor

import pytest


def _read_json(p):
    with open(p, encoding="utf-8") as f:
        return json.load(f)


class TestAtomicWrite:
    def test_no_tmp_file_left_after_save(self):
        from reliability import freshness
        import paths
        freshness.record_update("backup", detail="t")
        data_dir = paths.DATA_DIR
        tmps = [n for n in os.listdir(data_dir) if n.endswith(".tmp")]
        assert tmps == [], f"保存后残留 tmp: {tmps}"

    def test_freshness_file_valid_json(self):
        from reliability import freshness
        import paths
        freshness.record_update("market_daily", latest_date="2026-09-01", count=3)
        p = os.path.join(paths.DATA_DIR, "freshness.json")
        data = _read_json(p)
        assert data["market_daily"]["count"] == 3

    def test_corrupt_freshness_file_loads_empty(self):
        from reliability import freshness
        import paths
        p = os.path.join(paths.DATA_DIR, "freshness.json")
        with open(p, "w", encoding="utf-8") as f:
            f.write("{not valid json!!")
        store = freshness._load()
        assert store == {}
        # 且后续 status_summary 不崩溃
        s = freshness.status_summary(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)])
        assert "items" in s

    def test_corrupt_heal_history_loads_empty(self):
        from reliability import heal
        import paths
        p = os.path.join(paths.DATA_DIR, "heal_history.json")
        with open(p, "w", encoding="utf-8") as f:
            f.write("[broken")
        assert heal._load_history() == []

    def test_startup_check_persist_atomic(self):
        from reliability import checks
        import paths
        checks.run_checks()
        p = os.path.join(paths.DATA_DIR, "startup_check.json")
        data = _read_json(p)
        assert "checks" in data and "healthy" in data
        tmps = [n for n in os.listdir(paths.DATA_DIR) if n.endswith(".tmp")]
        assert tmps == []


class TestConcurrentWrites:
    def test_concurrent_record_update_no_corruption(self):
        from reliability import freshness
        import paths
        assets = ["strategy_holdings", "calendar_views", "market_daily", "market_review",
                  "daily_report", "weekly_report", "evaluation_history", "backup"]

        def w(aid):
            freshness.record_update(aid, latest_date="2026-09-01", count=1, detail=aid)

        with ThreadPoolExecutor(max_workers=8) as ex:
            list(ex.map(w, assets))
        p = os.path.join(paths.DATA_DIR, "freshness.json")
        data = _read_json(p)  # 必须仍是合法 JSON (无脏读/半写)
        assert all(a in data for a in assets)

    def test_concurrent_same_asset_valid(self):
        from reliability import freshness
        import paths
        def w(i):
            freshness.record_update("backup", count=i, detail=f"w{i}")
        with ThreadPoolExecutor(max_workers=8) as ex:
            list(ex.map(w, range(8)))
        p = os.path.join(paths.DATA_DIR, "freshness.json")
        data = _read_json(p)
        assert "backup" in data and isinstance(data["backup"]["count"], int)

    def test_concurrent_heal_persist_valid(self):
        from reliability import heal
        import paths
        rec = {"ts": "t", "action": "x", "summary": "s", "asset_id": None,
               "target": "stale", "dry_run": False, "ok": True, "detail": "", "resolved": None}
        with ThreadPoolExecutor(max_workers=6) as ex:
            list(ex.map(lambda i: heal.persist([dict(rec)]), range(12)))
        p = os.path.join(paths.DATA_DIR, "heal_history.json")
        data = _read_json(p)
        assert isinstance(data, list) and len(data) <= heal._HEAL_HISTORY_MAX
