"""V5.0.1 T-5.0.14: 数据字典 YAML 单一事实源测试 (TEST-PLAN 2.1 test_data_dict.py)

覆盖: 字典加载/解析子集 / 字段完整性(规范字段全集) / 引用一致(别名与 DataPortal 口径对拍) / API。
设计: 零外部依赖 — mini-YAML 子集解析器 (注释/扁平映射/块列表/行内列表/标量)。
"""
import pytest

import data_dict
from data_dict import (DataDictError, load_dict, list_fields, get_field,
                       canonical_field_keys, FIELD_CATEGORIES, parse_yaml)


def test_load_succeeds():
    d = load_dict()
    assert d["version"] >= 1
    assert isinstance(d["fields"], list) and d["fields"]


def test_fields_have_required_keys():
    required = {"key", "label", "category", "type", "description"}
    for f in list_fields():
        assert required <= set(f), f"字段缺键: {f.get('key')}"


def test_field_keys_unique():
    keys = [f["key"] for f in list_fields()]
    assert len(keys) == len(set(keys)), "存在重复 field key"


def test_categories_are_valid():
    for f in list_fields():
        assert f["category"] in FIELD_CATEGORIES, f"非法分类: {f.get('key')}"


def test_canonical_fields_covered():
    """DataPortal 口径规范字段 (FIELD_ALIASES) 必须全部收录于字典"""
    from data_portal2 import FIELD_ALIASES
    canon = canonical_field_keys()
    assert set(FIELD_ALIASES) <= set(canon)


def test_alias_consistency_with_portal():
    """字典 aliases 与 DataPortal 别名口径一致 (单点维护: 不改两处)"""
    from data_portal2 import FIELD_ALIASES
    by_key = {f["key"]: f for f in list_fields()}
    for canon, portal_aliases in FIELD_ALIASES.items():
        f = by_key.get(canon)
        assert f is not None, f"字典缺规范字段 {canon}"
        for a in portal_aliases:
            if a != canon:
                assert a in f.get("aliases", []),                     f"{canon} 别名 {a} 未收录字典"


def test_get_field():
    f = get_field("trade_date")
    assert f and f["label"] == "交易日"


def test_get_field_missing_raises():
    with pytest.raises(DataDictError):
        get_field("__nope__")


def test_reload_after_change(tmp_path):
    """字典文件可被迷你解析器正确重载 (子集解析回归)"""
    y = tmp_path / "d.yaml"
    y.write_text(
        "# 注释\nversion: 2\nfields:\n  - key: close\n"
        "    label: 收盘价\n    category: kline\n    type: number\n"
        "    unit: 元\n    frequency: daily\n    source: 三源\n"
        "    aliases: [close_price, 收盘]\n    description: 收盘价\n",
        encoding="utf-8")
    d = load_dict(path=str(y))
    assert d["version"] == 2
    f = d["fields"][0]
    assert f["key"] == "close" and f["aliases"] == ["close_price", "收盘"]


def test_inline_list_parsing(tmp_path):
    y = tmp_path / "d2.yaml"
    y.write_text("tags: [a, b, c]\nversion: 3\n", encoding="utf-8")
    d = parse_yaml(y.read_text(encoding="utf-8"))
    assert d["tags"] == ["a", "b", "c"]


def test_scalar_types(tmp_path):
    y = tmp_path / "d3.yaml"
    y.write_text("version: 4\ncount: 12\nratio: 1.5\nflag: true\nnone: null\n",
                 encoding="utf-8")
    d = parse_yaml(y.read_text(encoding="utf-8"))
    assert d["count"] == 12 and d["ratio"] == 1.5
    assert d["flag"] is True and d["none"] is None


def test_unknown_construct_fails(tmp_path):
    """超出子集 (流式块 {} / 深嵌套) → 明确报错, 不静默误解析"""
    y = tmp_path / "d4.yaml"
    y.write_text("bad: {a: 1}\n", encoding="utf-8")
    with pytest.raises(DataDictError):
        load_dict(path=str(y))


def test_missing_file_raises():
    with pytest.raises(DataDictError):
        load_dict(path="/nonexistent/__nope__.yaml")


# ═══ API ═══

class TestDictApi:
    def test_anonymous_rejected(self):
        from main_new import app
        from fastapi.testclient import TestClient
        c = TestClient(app)
        assert c.get("/api/data-dict").status_code in (401, 403)

    def test_admin_reads_dict(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/data-dict")
        assert r.status_code == 200, r.text
        data = r.json()["data"]
        assert data["version"] >= 1 and data["fields"]

    def test_category_filter(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/data-dict?category=kline")
        fields = r.json()["data"]["fields"]
        assert fields and all(f["category"] == "kline" for f in fields)
