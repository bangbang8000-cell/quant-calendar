"""V5.0 T-5.0.4: 原子写 / 并发写 / 文件健壮性 (TEST-PLAN 1.1)

原则: tmp+rename 原子写 → 任意时刻读到的都是完整文件; 并发写不脏读; 损坏文件降级为空不崩溃。
"""
import json
import os
from datetime import date, datetime
from concurrent.futures import ThreadPoolExecutor
from unittest.mock import patch

import pytest

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

# ─── T-5.0.5: 共享原子写工具 (reliability/atomic) ───

class TestAtomicHelper:
    def test_atomic_write_json_roundtrip(self):
        from reliability import atomic
        import paths
        p = os.path.join(paths.DATA_DIR, "atomic_probe.json")
        atomic.atomic_write_json(p, {"a": 1, "b": "中"})
        data = _read_json(p)
        assert data["a"] == 1 and data["b"] == "中"
        tmps = [n for n in os.listdir(paths.DATA_DIR) if n.endswith(".tmp")]
        assert tmps == []

    def test_atomic_write_text(self):
        from reliability import atomic
        import paths
        p = os.path.join(paths.DATA_DIR, "atomic_probe.txt")
        atomic.atomic_write_text(p, "hello")
        with open(p, encoding="utf-8") as f:
            assert f.read() == "hello"

    def test_replace_failure_leaves_original(self):
        """写新内容时 os.replace 失败 → 原文件保持完整 (不半写)"""
        from reliability import atomic
        import paths
        p = os.path.join(paths.DATA_DIR, "atomic_probe.json")
        atomic.atomic_write_json(p, {"v": "original"})
        with patch.object(os, "replace", side_effect=OSError("cross-device")):
            with pytest.raises(OSError):
                atomic.atomic_write_json(p, {"v": "broken"})
        data = _read_json(p)
        assert data["v"] == "original"

    def test_concurrent_atomic_write_json(self):
        """并发原子写同一文件 → 每次都是完整 JSON (最后写入者胜出)"""
        from reliability import atomic
        import paths
        p = os.path.join(paths.DATA_DIR, "atomic_probe.json")
        with ThreadPoolExecutor(max_workers=8) as ex:
            list(ex.map(lambda i: atomic.atomic_write_json(p, {"i": i, "pad": "x" * 100}), range(16)))
        data = _read_json(p)  # 合法 JSON, 非半写
        assert "i" in data

    def test_file_lock_serializes_read_modify_write(self):
        """读-改-写整段加锁: 并发累加不丢更新"""
        from reliability import atomic
        import paths
        p = os.path.join(paths.DATA_DIR, "atomic_counter.json")
        atomic.atomic_write_json(p, {"count": 0})

        def bump():
            for _ in range(5):
                with atomic.file_lock(p):
                    d = _read_json(p)
                    d["count"] = d["count"] + 1
                    atomic.atomic_write_json(p, d)

        with ThreadPoolExecutor(max_workers=4) as ex:
            list(ex.map(lambda _: bump(), range(4)))
        assert _read_json(p)["count"] == 20  # 4 线程 x 5 次 = 20, 无丢失


class TestMigratedSites:
    def test_scheduler_persist_history_atomic_and_concurrent(self):
        """迁移后 scheduler._persist_history: 原子写 + 并发不丢记录"""
        import scheduler as sch
        import paths
        tmp_file = os.path.join(paths.DATA_DIR, "scheduler_history.json")
        with patch.object(sch, "HISTORY_FILE", tmp_file):
            inst = sch.Scheduler.__new__(sch.Scheduler)
            inst._persist_history("test_task", True, "detail1")
            inst._persist_history("test_task", False, "detail2")
            with open(tmp_file, encoding="utf-8") as f:
                history = json.load(f)
            assert len(history) == 2 and history[-1]["detail"] == "detail2"
            # 并发追加
            with ThreadPoolExecutor(max_workers=6) as ex:
                list(ex.map(lambda i: inst._persist_history("t", True, f"d{i}"), range(12)))
            with open(tmp_file, encoding="utf-8") as f:
                history = json.load(f)
            assert len(history) == 14  # 2 + 12, 无并发丢失

    def test_data_refresh_config_save_roundtrip(self):
        """迁移后 data_refresh_config 保存: 配置可往返, 文件为合法 JSON"""
        from data_refresh_config import save_config, load_config
        import data_refresh_config as drc
        import paths
        tmp_cfg = os.path.join(paths.DATA_DIR, "data_refresh_config.json")
        with patch.object(drc, "CONFIG_FILE", tmp_cfg),              patch.object(drc, "DATA_DIR", paths.DATA_DIR):
            save_config({"scheduled_enabled": True, "scheduled_time": "22:15"})
            cfg = load_config()
            assert cfg["scheduled_enabled"] is True
            assert cfg["scheduled_time"] == "22:15"
        with open(tmp_cfg, encoding="utf-8") as f:
            data = json.load(f)  # 合法 JSON
        assert data["scheduled_enabled"] is True
