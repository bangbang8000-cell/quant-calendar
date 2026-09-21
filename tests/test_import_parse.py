# -*- coding: utf-8 -*-
"""6.1.2 (B2): 自选批量导入 — 解析 4 格式 + 接口 (dry_run/写入)"""
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from api.v1.watchlist import router, parse_stock_lines
from auth import get_current_active_user


@pytest.fixture()
def client(tmp_path, monkeypatch, isolated_watchlist_store):
    import api.v1.watchlist as wl_mod
    monkeypatch.setattr(wl_mod, "BASE_USERS_DIR", str(tmp_path / "users"))
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_current_active_user] = lambda: {"username": "tester"}
    return TestClient(app)


# ─── parse 纯函数 ─────────────────────────────

def test_parse_pure_code():
    r = parse_stock_lines("600036\n000001.SZ")
    assert len(r) == 2
    assert r[0]["code"] == "600036" and r[0]["ok"] is True
    assert r[1]["code"] == "000001.SZ" and r[1]["ok"] is True


def test_parse_code_plus_name():
    r = parse_stock_lines("600036 招商银行")
    assert r[0]["code"] == "600036" and r[0]["name"] == "招商银行"


def test_parse_name_plus_code():
    r = parse_stock_lines("贵州茅台 600519")
    assert r[0]["code"] == "600519" and r[0]["name"] == "贵州茅台"


def test_parse_comma_format():
    r = parse_stock_lines("600036,招商银行")
    assert r[0]["code"] == "600036" and r[0]["name"] == "招商银行"


def test_parse_invalid_line():
    r = parse_stock_lines("abcde\n600036")
    assert r[0]["ok"] is False and "未识别" in r[0]["reason"]
    assert r[1]["ok"] is True


def test_parse_empty_skipped():
    r = parse_stock_lines("\n  \n600036\n")
    assert len(r) == 1


# ─── API ─────────────────────────────────────

def test_import_dry_run_does_not_write(client):
    r = client.post("/api/watchlist/import", json={"text": "600036 招商银行\nbadline", "dry_run": True})
    assert r.status_code == 200
    data = r.json()
    assert data["valid"] == 1 and data["invalid"] == 1
    assert data["added"] == 0 and data["existed"] == 0


def test_import_actually_adds(client):
    r = client.post("/api/watchlist/import", json={"text": "600036 招商银行\n000001.SZ 平安银行"})
    data = r.json()
    assert data["success"] is True and data["added"] == 2
    wl = client.get("/api/watchlist").json()
    codes = {s["code"] for s in wl.get("watchlist", wl.get("stocks", []))}
    assert "600036" in codes and "000001.SZ" in codes


def test_import_all_invalid_rejected(client):
    r = client.post("/api/watchlist/import", json={"text": "notacode\n!!!"})
    data = r.json()
    assert data["valid"] == 0 and data["invalid"] == 2
    wl = client.get("/api/watchlist").json()
    assert len(wl.get("watchlist", wl.get("stocks", []))) == 0
