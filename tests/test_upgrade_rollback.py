# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.95): 一键升级/回滚工具测试 (TEST-PLAN 10.5)

覆盖: 备份/清单/最新备份/恢复/校验/升级(含干跑·幂等·失败自动恢复)/
回滚(含干跑)/CLI/脚本存在性
"""
import json
import os
import sqlite3
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import db
import migrations
import deploy_tool
from deploy_tool import (DeployError, backup, _latest_backup, restore, verify,
                         cmd_upgrade, cmd_rollback, cmd_backup, cmd_verify,
                         cmd_restore, main)


@pytest.fixture
def env(tmp_path, monkeypatch):
    """把 db + deploy_tool 指向独立临时环境"""
    data = tmp_path / "data"
    data.mkdir()
    db_file = str(data / "app.db")
    monkeypatch.setattr(db, "DATA_DIR", str(data))
    monkeypatch.setattr(db, "DB_FILE", db_file)
    monkeypatch.setattr(deploy_tool, "DATA_DIR", str(data))
    monkeypatch.setattr(deploy_tool, "DB_FILE", db_file)
    monkeypatch.setattr(deploy_tool, "BACKUP_ROOT", str(data / "backups"))
    db.init_db()
    # 制造一个 json 数据文件
    (data / "ai_models.json").write_text("{}", encoding="utf-8")
    return {"data": str(data), "db_file": db_file, "backup_root": str(data / "backups")}


@pytest.fixture
def env_schema(tmp_path, monkeypatch):
    """只有 SCHEMA、未跑版本化迁移的环境 (用于升级流程测试)"""
    data = tmp_path / "data"
    data.mkdir()
    db_file = str(data / "app.db")
    monkeypatch.setattr(db, "DATA_DIR", str(data))
    monkeypatch.setattr(db, "DB_FILE", db_file)
    monkeypatch.setattr(deploy_tool, "DATA_DIR", str(data))
    monkeypatch.setattr(deploy_tool, "DB_FILE", db_file)
    monkeypatch.setattr(deploy_tool, "BACKUP_ROOT", str(data / "backups"))
    conn = sqlite3.connect(db_file)
    conn.executescript(db.SCHEMA)
    conn.commit()
    conn.close()
    return {"data": str(data), "db_file": db_file, "backup_root": str(data / "backups")}


# ─── 备份 ──────────────────────────────────────────────

def test_backup_creates_timestamped_dir(env):
    b = backup(backup_root=env["backup_root"])
    assert os.path.isdir(b)
    assert os.path.exists(os.path.join(b, "app.db"))
    assert os.path.exists(os.path.join(b, "ai_models.json"))


def test_backup_manifest(env):
    b = backup(backup_root=env["backup_root"], label="pre-upgrade")
    with open(os.path.join(b, "manifest.json"), encoding="utf-8") as f:
        m = json.load(f)
    assert m["label"] == "pre-upgrade"
    assert "app.db" in m["files"] and "ai_models.json" in m["files"]


def test_backup_multiple_dirs(env):
    backup(backup_root=env["backup_root"], label="a")
    backup(backup_root=env["backup_root"], label="b")
    dirs = [d for d in os.listdir(env["backup_root"])]
    assert len(dirs) == 2


def test_latest_backup(env):
    backup(backup_root=env["backup_root"], label="a")
    b2 = backup(backup_root=env["backup_root"], label="b")
    assert _latest_backup(env["backup_root"]) == b2


def test_latest_backup_empty_raises(env):
    with pytest.raises(DeployError):
        _latest_backup(env["backup_root"])


def test_restore_files(env):
    b = backup(backup_root=env["backup_root"])
    # 篡改数据后恢复
    with open(os.path.join(env["data"], "ai_models.json"), "w", encoding="utf-8") as f:
        f.write('{"x": 1}')
    restored = restore(b)
    assert "ai_models.json" in restored and "app.db" in restored
    assert "{}" == open(os.path.join(env["data"], "ai_models.json"), encoding="utf-8").read()


def test_restore_missing_raises(env):
    with pytest.raises(DeployError):
        restore("/nonexistent/backup")


# ─── 校验 ──────────────────────────────────────────────

def test_verify_healthy(env):
    v = verify()
    assert v["ok"] is True and v["schema_ok"] is True
    assert v["migrations"]["ok"] is True


def test_verify_missing_table(env):
    conn = sqlite3.connect(env["db_file"])
    conn.execute("DROP TABLE meta")
    conn.commit(); conn.close()
    v = verify()
    assert v["ok"] is False and v["schema_ok"] is False


def test_verify_migration_mismatch(env):
    conn = sqlite3.connect(env["db_file"])
    conn.execute("INSERT INTO schema_migrations (version,name,applied_at) VALUES (99,'ghost','x')")
    conn.commit(); conn.close()
    v = verify()
    assert v["ok"] is False and v["migrations"]["extra"] == [99]


# ─── 升级 ──────────────────────────────────────────────

def test_upgrade_fresh(env_schema):
    out = cmd_upgrade(backup_root=env_schema["backup_root"])
    assert out["applied"] == [m.version for m in migrations.MIGRATIONS]  # 全量迁移
    assert out["verify"]["ok"] is True
    assert os.path.isdir(out["backup"])


def test_upgrade_dry_run_no_writes(env):
    before = migrations.get_current_version(db.get_conn())
    out = cmd_upgrade(dry_run=True, backup_root=env["backup_root"])
    assert out["dry_run"] is True
    assert out["planned"]
    assert migrations.get_current_version(db.get_conn()) == before
    assert not os.path.isdir(env["backup_root"])  # 干跑不备份


def test_upgrade_idempotent(env):
    cmd_upgrade(backup_root=env["backup_root"])
    out2 = cmd_upgrade(backup_root=env["backup_root"])
    assert out2["applied"] == []
    assert out2["verify"]["ok"] is True


def test_upgrade_auto_restore_on_verify_failure(env_schema, monkeypatch):
    # 注入会在升级后破坏校验的迁移 → cmd_upgrade 应自动恢复
    def evil_upgrade(c):
        c.execute("DROP TABLE meta")
    class BadMigration(migrations.Migration):
        pass
    bad = BadMigration(50, "evil", "破坏库", evil_upgrade, lambda c: None)
    monkeypatch.setattr(migrations.runner, "MIGRATIONS", migrations.MIGRATIONS + [bad])
    with pytest.raises(DeployError):
        cmd_upgrade(backup_root=env_schema["backup_root"])
    # 恢复后库应可校验 (meta 表回来了)
    assert verify()["ok"] is True


# ─── 回滚 ──────────────────────────────────────────────

def test_rollback(env_schema):
    cmd_upgrade(backup_root=env_schema["backup_root"])
    out = cmd_rollback(target=2, backup_root=env_schema["backup_root"])
    assert out["rolled"] == list(range(migrations.latest_version(), 2, -1))  # 动态: 从最新回滚到 2
    assert migrations.get_current_version(db.get_conn()) == 2
    assert out["verify"]["ok"] is True


def test_rollback_all(env_schema):
    cmd_upgrade(backup_root=env_schema["backup_root"])
    cmd_rollback(target=0, backup_root=env_schema["backup_root"])
    assert migrations.get_current_version(db.get_conn()) == 0


def test_rollback_dry_run_no_writes(env):
    cmd_upgrade(backup_root=env["backup_root"])
    n_backups_before = len(os.listdir(env["backup_root"]))
    out = cmd_rollback(target=2, dry_run=True, backup_root=env["backup_root"])
    assert out["dry_run"] is True and out["planned"]
    assert migrations.get_current_version(db.get_conn()) == migrations.latest_version()  # 全量=最新
    assert len(os.listdir(env["backup_root"])) == n_backups_before


def test_rollback_target_beyond_current_noop(env_schema):
    cmd_upgrade(backup_root=env_schema["backup_root"])
    out = cmd_rollback(target=migrations.latest_version(), backup_root=env_schema["backup_root"])  # 目标=当前, noop
    assert out["rolled"] == []
    assert migrations.get_current_version(db.get_conn()) == migrations.latest_version()  # 全量=最新


# ─── CLI ───────────────────────────────────────────────

def test_cli_verify(env, capsys):
    rc = main(["verify"])
    out = capsys.readouterr().out
    assert rc == 0
    assert '"ok": true' in out


def test_cli_backup(env, capsys):
    rc = main(["backup"])
    out = capsys.readouterr().out
    assert rc == 0 and "backup" in out


def test_cli_upgrade_dry_run(env, capsys):
    rc = main(["upgrade", "--dry-run"])
    out = capsys.readouterr().out
    assert rc == 0 and '"dry_run": true' in out


def test_cli_rollback_dry_run(env, capsys):
    rc = main(["rollback", "--target", "2", "--dry-run"])
    out = capsys.readouterr().out
    assert rc == 0 and '"action": "rollback"' in out


def test_cli_restore_missing_fails(env, capsys):
    rc = main(["restore", "/nonexistent"])
    assert rc == 1


# ─── 脚本存在性 ────────────────────────────────────────

def test_scripts_exist_and_executable():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for name in ("upgrade.sh", "rollback.sh"):
        p = os.path.join(base, "scripts", name)
        assert os.path.exists(p), name
        assert os.access(p, os.X_OK), name + " 应可执行"


def test_scripts_syntax():
    import subprocess
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for name in ("upgrade.sh", "rollback.sh"):
        p = os.path.join(base, "scripts", name)
        r = subprocess.run(["bash", "-n", p], capture_output=True, text=True)
        assert r.returncode == 0, name + " bash 语法错误: " + r.stderr