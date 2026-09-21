# -*- coding: utf-8 -*-
"""
6.1.1 (A1): 量化术语词条 — 数据完整性 + API 行为
"""
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from api.v1.glossary import router
from glossary_data import GLOSSARY, GLOSSARY_BY_KEY

_REQUIRED_FIELDS = ("key", "term", "definition", "calc", "category")
_MIN_TERMS = 60


@pytest.fixture()
def client():
    app = FastAPI()
    app.include_router(router, prefix="/api")
    return TestClient(app)


def test_glossary_data_minimum_and_uniqueness():
    assert len(GLOSSARY) >= _MIN_TERMS, f"词条数 {len(GLOSSARY)} < {_MIN_TERMS}"
    keys = [g["key"] for g in GLOSSARY]
    assert len(keys) == len(set(keys)), "词条 key 必须唯一"


def test_glossary_data_fields_complete():
    for g in GLOSSARY:
        for f in _REQUIRED_FIELDS:
            assert g.get(f), f"词条 {g.get('key')} 缺少字段 {f}"
        assert len(g["definition"]) <= 60, f"词条 {g['key']} 定义超长(>60字)"


def test_glossary_data_categories_covered():
    cats = {g["category"] for g in GLOSSARY}
    assert len(cats) >= 5, f"分类覆盖不足: {cats}"


def test_glossary_by_key_index_complete():
    assert len(GLOSSARY_BY_KEY) == len(GLOSSARY)


def test_glossary_api_list(client):
    r = client.get("/api/meta/glossary")
    assert r.status_code == 200
    data = r.json()
    assert data["success"] is True
    assert data["total"] >= _MIN_TERMS
    assert len(data["categories"]) >= 5
    assert data["count"] == len(data["items"])


def test_glossary_api_filter_by_category(client):
    r = client.get("/api/meta/glossary?category=宏观")
    data = r.json()
    assert data["success"] and data["items"]
    assert all(i["category"] == "宏观" for i in data["items"])


def test_glossary_api_item_hit_and_miss(client):
    r = client.get("/api/meta/glossary/merrill_clock")
    assert r.json()["success"] is True
    assert r.json()["item"]["term"] == "美林时钟"
    r2 = client.get("/api/meta/glossary/no_such_key")
    assert r2.json()["success"] is False
