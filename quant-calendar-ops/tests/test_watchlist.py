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
