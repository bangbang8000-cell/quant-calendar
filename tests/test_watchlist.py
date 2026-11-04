#!/usr/bin/env python3
"""pytest for watchlist per-user isolation"""
import pytest, sys, os, json, tempfile
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))


@pytest.fixture
def wl():
    """Setup watchlist in temp dir"""
    import paths
    import api.v1.watchlist as wlmod
    old_dir = wlmod.BASE_USERS_DIR
    tmp = tempfile.mkdtemp()
    wlmod.BASE_USERS_DIR = tmp
    yield wlmod
    wlmod.BASE_USERS_DIR = old_dir
    import shutil
    shutil.rmtree(tmp)


class TestWatchlist:
    def test_empty(self, wl):
        stocks = wl._load_watchlist('user1')
        assert stocks == []

    def test_save_and_load(self, wl):
        stocks = [{'code': '000001.SZ', 'name': '平安银行', 'added_at': '2026-01-01'}]
        wl._save_watchlist('user1', stocks)
        loaded = wl._load_watchlist('user1')
        assert len(loaded) == 1
        assert loaded[0]['code'] == '000001.SZ'

    def test_isolation(self, wl):
        wl._save_watchlist('alice', [{'code': 'A.SH', 'name': 'A股'}])
        wl._save_watchlist('bob', [{'code': 'B.SZ', 'name': 'B股'}])
        assert len(wl._load_watchlist('alice')) == 1
        assert len(wl._load_watchlist('bob')) == 1
        assert wl._load_watchlist('alice')[0]['code'] == 'A.SH'

    def test_guest_isolation(self, wl):
        wl._save_watchlist('admin', [{'code': 'ADMIN.SH', 'name': 'X'}])
        wl._save_watchlist('guest', [{'code': 'GUEST.SZ', 'name': 'Y'}])
        assert wl._load_watchlist('guest')[0]['code'] == 'GUEST.SZ'


# ─── v7.3.3: 补 API 层覆盖（parse/import/list），把 api/v1/watchlist.py 覆盖拉过 70% 门禁 ───

class TestParseStockLines:
    def test_four_formats_and_invalid(self, wl):
        text = "\n".join([
            "600036",                    # 纯代码
            "600036 招商银行",            # 代码 名称
            "招商银行 600036",            # 名称 代码
            "600036,招商银行",            # 逗号
            "",                          # 空行忽略
            "招商银行",                   # 无代码 → 失败
        ])
        out = wl.parse_stock_lines(text)
        assert len(out) == 5
        ok = [p for p in out if p["ok"]]
        assert len(ok) == 4
        assert all(p["code"] == "600036" for p in ok)
        bad = [p for p in out if not p["ok"]]
        assert bad[0]["reason"] == "未识别 6 位股票代码"

    def test_empty_text(self, wl):
        assert wl.parse_stock_lines("") == []
        assert wl.parse_stock_lines(None) == []


class TestImportEndpoint:
    def test_dry_run_does_not_write(self, wl, monkeypatch):
        import asyncio
        called = []
        monkeypatch.setattr(wl, "add_to_watchlist",
                            lambda *a, **k: called.append(1), raising=False)
        out = asyncio.run(wl.import_watchlist({"text": "600036\n000001", "dry_run": True},
                                             user={"username": "u1"}))
        assert out["success"] is True
        assert called == [], "dry_run 不得写入"

    def test_import_writes_and_counts(self, wl, monkeypatch):
        import asyncio
        state = {"n": 0}

        async def fake_add(payload, user):
            state["n"] += 1
            return {"existed": state["n"] == 1}   # 第一只已存在, 第二只新增

        monkeypatch.setattr(wl, "add_to_watchlist", fake_add, raising=False)
        out = asyncio.run(wl.import_watchlist({"text": "600036\n000001"},
                                             user={"username": "u1"}))
        assert out["success"] is True
        assert out["added"] == 1 and out["existed"] == 1
        assert out["invalid"] == 0   # 返回计数而非列表（原实现如此）
