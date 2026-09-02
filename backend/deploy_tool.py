#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V5.9 (T-5.9.5): 一键升级/回滚工具 (deploy_tool)
流程: 备份 → 迁移 → 验证 → (失败自动回滚)
子命令:
  backup              — 备份 data/ 到 data/backups/<时间戳>/ (app.db + *.json)
  upgrade [--dry-run] — 备份 → migrations.upgrade → 校验; 失败自动恢复备份
  rollback [--target N] [--dry-run] — 安全备份 → migrations.rollback(N) → 校验; 失败恢复
  restore <backup>    — 灾难恢复: 用指定备份覆盖 data/
  verify              — 校验当前库 (schema + 迁移一致性)
由 scripts/upgrade.sh / scripts/rollback.sh 包装调用。
"""
import argparse
import json
import os
import shutil
import sys
import time

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE_DIR, "backend"))

import paths  # noqa: E402
import db  # noqa: E402
import migrations  # noqa: E402

DATA_DIR = paths.DATA_DIR
DB_FILE = db.DB_FILE
BACKUP_ROOT = os.path.join(DATA_DIR, "backups")


class DeployError(Exception):
    pass


def _json_files():
    if not os.path.isdir(DATA_DIR):
        return []
    return [f for f in os.listdir(DATA_DIR)
            if f.endswith(".json") and os.path.isfile(os.path.join(DATA_DIR, f))]


def backup(backup_root=None, label=""):
    """备份 data/ (app.db + *.json) → data/backups/<ts>_<label>/. 返回备份目录"""
    # 默认值在调用期解析, 便于测试注入 DATA_DIR/DB_FILE/BACKUP_ROOT
    backup_root = backup_root if backup_root is not None else BACKUP_ROOT
    ts = time.strftime("%Y%m%d_%H%M%S")
    name = ts + (("_" + label) if label else "")
    dest = os.path.join(backup_root, name)
    os.makedirs(dest, exist_ok=True)
    copied = []
    if os.path.exists(DB_FILE):
        shutil.copy2(DB_FILE, os.path.join(dest, "app.db"))
        copied.append("app.db")
    for f in _json_files():
        shutil.copy2(os.path.join(DATA_DIR, f), os.path.join(dest, f))
        copied.append(f)
    manifest = {"created_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
                "files": copied, "label": label}
    with open(os.path.join(dest, "manifest.json"), "w", encoding="utf-8") as fh:
        json.dump(manifest, fh, ensure_ascii=False, indent=2)
    return dest


def _latest_backup(backup_root=BACKUP_ROOT) -> str:
    if not os.path.isdir(backup_root):
        raise DeployError("无可用备份目录: %s" % backup_root)
    dirs = sorted(os.listdir(backup_root))
    dirs = [d for d in dirs if os.path.isdir(os.path.join(backup_root, d))]
    if not dirs:
        raise DeployError("备份目录为空")
    return os.path.join(backup_root, dirs[-1])


def restore(backup_dir: str, data_dir=None, db_file=None):
    """用备份覆盖 data/ (app.db + json). 返回恢复的文件列表"""
    data_dir = data_dir if data_dir is not None else DATA_DIR
    db_file = db_file if db_file is not None else DB_FILE
    if not os.path.isdir(backup_dir):
        raise DeployError("备份不存在: %s" % backup_dir)
    restored = []
    if os.path.exists(os.path.join(backup_dir, "app.db")):
        shutil.copy2(os.path.join(backup_dir, "app.db"), db_file)
        restored.append("app.db")
    for f in _json_files():
        src = os.path.join(backup_dir, f)
        if os.path.exists(src):
            shutil.copy2(src, os.path.join(data_dir, f))
            restored.append(f)
    return restored


def verify() -> dict:
    """校验: schema 核心表 + 迁移一致性"""
    result = {"schema_ok": db.schema_ok(), "migrations": {}}
    if result["schema_ok"]:
        conn = db.get_conn()
        try:
            result["migrations"] = migrations.validate(conn)
        finally:
            conn.close()
    result["ok"] = result["schema_ok"] and result["migrations"].get("ok", False)
    return result


def cmd_upgrade(dry_run=False, backup_root=BACKUP_ROOT) -> dict:
    out = {"action": "upgrade", "dry_run": dry_run}
    conn = db.get_conn()
    try:
        before = migrations.get_current_version(conn)
    finally:
        conn.close()
    out["before_version"] = before
    if dry_run:
        out["planned"] = ["backup:%s" % backup_root,
                          "upgrade %d->%d" % (before, migrations.latest_version()), "verify"]
        return out
    b = backup(backup_root=backup_root, label="pre-upgrade")
    out["backup"] = b
    conn = db.get_conn()
    try:
        applied = migrations.upgrade(conn)
        conn.commit()
    finally:
        conn.close()
    out["applied"] = applied
    v = verify()
    out["verify"] = v
    if not v["ok"]:
        restore(b)
        out["restored"] = True
        raise DeployError("升级后校验失败, 已自动恢复备份 %s" % b)
    return out


def cmd_rollback(target=0, dry_run=False, backup_root=BACKUP_ROOT) -> dict:
    out = {"action": "rollback", "target": target, "dry_run": dry_run}
    conn = db.get_conn()
    try:
        before = migrations.get_current_version(conn)
    finally:
        conn.close()
    out["before_version"] = before
    if dry_run:
        out["planned"] = ["backup:%s" % backup_root,
                          "rollback %d->%d" % (before, target), "verify"]
        return out
    b = backup(backup_root=backup_root, label="pre-rollback")
    out["backup"] = b
    conn = db.get_conn()
    try:
        rolled = migrations.rollback(conn, target=target)
        conn.commit()
    finally:
        conn.close()
    out["rolled"] = rolled
    v = verify()
    out["verify"] = v
    if not v["ok"]:
        restore(b)
        out["restored"] = True
        raise DeployError("回滚后校验失败, 已自动恢复备份 %s" % b)
    return out


def cmd_verify() -> dict:
    return verify()


def cmd_backup(backup_root=BACKUP_ROOT) -> dict:
    b = backup(backup_root=backup_root, label="manual")
    return {"action": "backup", "backup": b}


def cmd_restore(backup_dir: str) -> dict:
    restored = restore(backup_dir)
    return {"action": "restore", "backup": backup_dir, "restored": restored}


def main(argv=None):
    p = argparse.ArgumentParser(description="量化日历一键升级/回滚工具")
    sub = p.add_subparsers(dest="cmd", required=True)
    sub.add_parser("backup")
    u = sub.add_parser("upgrade")
    u.add_argument("--dry-run", action="store_true")
    r = sub.add_parser("rollback")
    r.add_argument("--target", type=int, default=0)
    r.add_argument("--dry-run", action="store_true")
    res = sub.add_parser("restore")
    res.add_argument("backup_dir")
    sub.add_parser("verify")
    args = p.parse_args(argv)
    try:
        if args.cmd == "backup":
            out = cmd_backup()
        elif args.cmd == "upgrade":
            out = cmd_upgrade(dry_run=args.dry_run)
        elif args.cmd == "rollback":
            out = cmd_rollback(target=args.target, dry_run=args.dry_run)
        elif args.cmd == "restore":
            out = cmd_restore(args.backup_dir)
        else:
            out = cmd_verify()
        print(json.dumps(out, ensure_ascii=False, indent=2, default=str))
        return 0
    except DeployError as e:
        print("FAIL %s" % e, file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
