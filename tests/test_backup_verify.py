# -*- coding: utf-8 -*-
"""6.1.7 (G4): 备份自动验证测试 (backup_verify.py)"""
import json

import pytest

from backup_verify import verify_backup


def _write(tmp_path, data):
    p = tmp_path / "backup.json"
    p.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
    return str(p)


def test_verify_ok(tmp_path):
    p = _write(tmp_path, {"watchlist": [{"code": "600036"}], "meta": {"v": 1}})
    out = verify_backup(p, expect_keys=["watchlist"], min_rows=1)
    assert out["ok"] is True and out["row_count"] == 2 and "watchlist" in out["keys"]


def test_verify_missing_file(tmp_path):
    out = verify_backup(str(tmp_path / "nope.json"))
    assert out["ok"] is False and "不存在" in out["errors"][0]


def test_verify_empty_file(tmp_path):
    p = tmp_path / "empty.json"
    p.write_text("", encoding="utf-8")
    out = verify_backup(str(p))
    assert out["ok"] is False and "为空" in "".join(out["errors"])


def test_verify_invalid_json(tmp_path):
    p = tmp_path / "bad.json"
    p.write_text("{bad json", encoding="utf-8")
    out = verify_backup(str(p))
    assert out["ok"] is False and "无法解析" in "".join(out["errors"])


def test_verify_missing_expected_key(tmp_path):
    p = _write(tmp_path, {"watchlist": [1, 2, 3]})
    out = verify_backup(p, expect_keys=["watchlist", "portfolio"], min_rows=1)
    assert out["ok"] is False and any("缺少关键键: portfolio" in e for e in out["errors"])


def test_verify_row_count_threshold(tmp_path):
    p = _write(tmp_path, {"watchlist": [1]})
    out = verify_backup(p, min_rows=10)
    assert out["ok"] is False and "行数 1 < 阈值 10" in "".join(out["errors"])
