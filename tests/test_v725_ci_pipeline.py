# -*- coding: utf-8 -*-
"""v7.25 FR-10: 工程闭环 — 版本三处一致 / GitHub 仅 tag 发布 / GitLab manual deploy / 本地 verify"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "scripts"))


def _read(rel):
    with open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_version_sources_consistent():
    import bump_version
    assert bump_version.check() == 0, "APP_VERSION / README / HANDOVER / package.json 必须一致"


def test_package_json_has_version():
    import re
    src = _read("frontend/package.json")
    assert re.search(r'^  "version": "[0-9]+\.[0-9]+\.[0-9]+",', src, re.M)


def test_github_release_only_on_tag():
    src = _read(".github/workflows/ci.yml")
    on_block = src.split("\njobs:", 1)[0]
    assert "pull_request:" not in on_block, "GitHub Actions 不再随日常提交/PR 跑全量"
    assert "tags:" in on_block and "v*" in on_block


def test_gitlab_iteration_and_manual_deploy():
    src = _read(".gitlab-ci.yml")
    assert "merge_request_event" in src, "GitLab 承担 MR 迭代门禁"
    assert "deploy:manual" in src
    assert "when: manual" in src
    assert "scripts/deploy/deploy.sh" in src


def test_local_verify_scripts_exist():
    for rel in ("scripts/verify.sh", "scripts/verify.ps1"):
        src = _read(rel)
        assert "ruff" in src and "pytest" in src and "bump_version.py" in src


def test_deploy_excludes_sensitive_paths():
    src = _read("scripts/deploy/deploy.sh")
    assert "QC_DEPLOY_DIR" in src
    for exc in (".env", "data/", ".venv"):
        assert exc in src
    assert "rollback.sh" in src, "健康检查失败需自动回滚"
