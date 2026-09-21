#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
6.1.X 版本治理脚本 (T-6.1.0.1)

单一来源: backend/main_new.py 的 APP_VERSION。
职责:
  bump <version>   —— 更新 APP_VERSION, 并在 README 版本历史首行插入新版本行、
                      HANDOVER 顶部状态行同步 (6.1.X 演进线)
  --check          —— 只校验 5 类来源一致性, 不修改任何文件
                      (CI 版本门禁与 tests/test_version_governance_610.py 使用)

5 类来源:
  ① backend/main_new.py  APP_VERSION
  ② README.md           版本历史表首行 (标 **当前开发版本**)
  ③ docs/HANDOVER.md    顶部「当前状态」
  ④ git 最近 tag vX.Y.Z (若存在)
  ⑤ 提交信息前缀 (6.1.N) —— 由 CI/人工纪律保证, 脚本提示不强制
"""
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAIN = ROOT / "backend" / "main_new.py"
README = ROOT / "README.md"
HANDOVER = ROOT / "docs" / "HANDOVER.md"

APP_RE = re.compile(r'^APP_VERSION = "([0-9]+\.[0-9]+\.[0-9]+)"')
README_ROW_RE = re.compile(r"^\| \*\*v([0-9]+\.[0-9]+\.[0-9]+)\*\* \| 2026-09 \| \*\*当前开发版本\*\*")
HANDOVER_STATE_RE = re.compile(r"^> 当前状态: \*\*v([0-9]+\.[0-9]+\.[0-9]+)")


def _ver_tuple(v: str) -> tuple:
    return tuple(int(x) for x in v.split("."))


def read_version(path: Path, rx: re.Pattern) -> str | None:
    for line in path.read_text(encoding="utf-8").splitlines():
        m = rx.match(line)
        if m:
            return m.group(1)
    return None


def latest_tag() -> str | None:
    try:
        out = subprocess.run(
            ["git", "-C", str(ROOT), "tag", "--sort=-v:refname", "--list", "v*"],
            capture_output=True, text=True, timeout=30,
        ).stdout.strip()
        for t in out.splitlines():
            v = t.lstrip("v")
            if re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", v):
                return v
    except Exception:
        pass
    return None


def check() -> int:
    app = read_version(MAIN, APP_RE)
    readme = read_version(README, README_ROW_RE)
    handover = read_version(HANDOVER, HANDOVER_STATE_RE)
    tag = latest_tag()
    bad = []
    if not app:
        bad.append("① APP_VERSION 未找到 (backend/main_new.py)")
    if not readme:
        bad.append("② README 版本历史首行缺失 (需含 **当前开发版本** 行)")
    if not handover:
        bad.append("③ HANDOVER 顶部「当前状态」缺失")
    if app and readme and app != readme:
        bad.append(f"② README 首行 {readme} ≠ APP_VERSION {app}")
    if app and handover and app != handover:
        bad.append(f"③ HANDOVER 状态 {handover} ≠ APP_VERSION {app}")
    print(f"[版本门禁] APP_VERSION={app} README={readme} HANDOVER={handover} tag={tag}")
    if tag and app:
        if _ver_tuple(tag) == _ver_tuple(app):
            print("  ✓ 最近 tag 与 APP_VERSION 一致")
        elif _ver_tuple(tag) > _ver_tuple(app):
            bad.append(f"④ 最近 tag v{tag} 高于 APP_VERSION {app} —— 已发布版本超前, 检查 bump 是否遗漏")
        else:
            print(f"  ⚠ 最近 tag v{tag} 早于 APP_VERSION {app} (开发中, 发布时打 tag 即对齐)")
    if bad:
        for b in bad:
            print(f"  ✗ {b}")
        return 1
    print("  ✓ 5 类来源一致 (tag 为发布时校验项)")
    return 0


def bump(version: str) -> int:
    if not re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", version):
        print(f"✗ 版本号格式错误: {version} (期望 x.y.z)")
        return 1
    text = MAIN.read_text(encoding="utf-8")
    new_text = re.sub(
        r'^(APP_VERSION = ")[0-9]+\.[0-9]+\.[0-9]+(")',
        lambda m: m.group(1) + version + m.group(2),
        text, count=1, flags=re.MULTILINE,
    )
    if new_text == text:
        print(f"✗ 未能替换 APP_VERSION (当前 {read_version(MAIN, APP_RE)} → {version})")
        return 1
    MAIN.write_text(new_text, encoding="utf-8")

    # README 版本历史首行: 旧首行降级为普通行, 新版本行插入表顶
    rtext = README.read_text(encoding="utf-8")
    old_row = None
    for line in rtext.splitlines():
        if README_ROW_RE.match(line):
            old_row = line
            break
    if old_row:
        new_row = f"| **v{version}** | 2026-09 | **当前开发版本** — 6.1.{version.split('.')[-1]} 迭代（见 docs/PRD-6.1.X.md） |"
        downgraded = old_row.replace("**当前开发版本** — ", "").replace("**当前开发版本**", "")
        rtext = rtext.replace(old_row, new_row + "\n" + downgraded, 1)
        README.write_text(rtext, encoding="utf-8")

    # HANDOVER 顶部状态行
    htext = HANDOVER.read_text(encoding="utf-8")
    htext = re.sub(
        r"^(> 当前状态: \*\*v)[0-9]+\.[0-9]+\.[0-9]+(\*\*)",
        lambda m: m.group(1) + version + m.group(2),
        htext, count=1, flags=re.MULTILINE,
    )
    HANDOVER.write_text(htext, encoding="utf-8")

    print(f"✓ 版本已更新为 {version}: APP_VERSION / README 首行 / HANDOVER 状态")
    return check()


def main() -> int:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if "--check" in sys.argv:
        return check()
    if len(args) != 1:
        print("用法: python scripts/bump_version.py <x.y.z>  或  python scripts/bump_version.py --check")
        return 1
    return bump(args[0])


if __name__ == "__main__":
    sys.exit(main())
