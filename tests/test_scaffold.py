# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.7): scaffold 脚手架测试 (TEST-PLAN 10.7)"""
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

# 注入 scripts/scaffold.py 为可 import 模块
import importlib.util as _ilu
_scripts_dir = os.path.join(os.path.dirname(__file__), "..", "scripts")
_spec = _ilu.spec_from_file_location("scripts_scaffold", os.path.join(_scripts_dir, "scaffold.py"))
scripts_scaffold = _ilu.module_from_spec(_spec)
_spec.loader.exec_module(scripts_scaffold)


SCRIPTS = os.path.join(os.path.dirname(__file__), "..", "scripts")


def test_scaffold_test_creates_file(tmp_path, monkeypatch):
    monkeypatch.setattr(scripts_scaffold, "BASE", str(tmp_path))
    path = scripts_scaffold.scaffold_test("hello_world")
    assert os.path.exists(path)
    content = open(path, encoding="utf-8").read()
    assert content.startswith("# -*- coding: utf-8 -*-")
    assert "test_hello_world.py" in path
    assert "def test_placeholder" in content


def test_scaffold_test_refuses_overwrite(tmp_path, monkeypatch):
    monkeypatch.setattr(scripts_scaffold, "BASE", str(tmp_path))
    scripts_scaffold.scaffold_test("dup")
    with pytest.raises(Exception):
        scripts_scaffold.scaffold_test("dup")


def test_scaffold_module_creates_file(tmp_path, monkeypatch):
    monkeypatch.setattr(scripts_scaffold, "BASE", str(tmp_path))
    path = scripts_scaffold.scaffold_module("my_feature")
    assert os.path.exists(path)
    content = open(path, encoding="utf-8").read()
    assert "def hello" in content and "logger = logging.getLogger" in content


def test_scaffold_migration_creates_file(tmp_path, monkeypatch):
    monkeypatch.setattr(scripts_scaffold, "BASE", str(tmp_path))
    path = scripts_scaffold.scaffold_migration(4, "add_column")
    assert os.path.exists(path)
    assert "_0004_add_column.py" in path
    content = open(path, encoding="utf-8").read()
    assert "VERSION = 4" in content
    assert "def upgrade(conn)" in content and "def downgrade(conn)" in content


def test_scaffold_rejects_invalid_ident(tmp_path, monkeypatch):
    monkeypatch.setattr(scripts_scaffold, "BASE", str(tmp_path))
    for bad in ("BadName", "has space", "1abc", "under_score_", "UPPER"):
        with pytest.raises(Exception):
            scripts_scaffold.scaffold_test(bad)


def test_scaffold_rejects_bad_migration_version(tmp_path, monkeypatch):
    monkeypatch.setattr(scripts_scaffold, "BASE", str(tmp_path))
    with pytest.raises(Exception):
        scripts_scaffold.scaffold_migration(0, "x")
    with pytest.raises(Exception):
        scripts_scaffold.scaffold_migration(-3, "x")


def test_cli_main_test(tmp_path, monkeypatch, capsys):
    monkeypatch.setattr(scripts_scaffold, "BASE", str(tmp_path))
    rc = scripts_scaffold.main(["test", "cli_demo"])
    out = capsys.readouterr().out
    assert rc == 0 and out.startswith("OK ")


def test_cli_main_unknown(capsys):
    rc = scripts_scaffold.main(["wat"])
    assert rc == 2


def test_cli_main_overwrite_fails(tmp_path, monkeypatch, capsys):
    monkeypatch.setattr(scripts_scaffold, "BASE", str(tmp_path))
    scripts_scaffold.main(["test", "dup2"])
    rc = scripts_scaffold.main(["test", "dup2"])
    assert rc == 1
