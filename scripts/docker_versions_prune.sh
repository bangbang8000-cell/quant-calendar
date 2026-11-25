#!/usr/bin/env bash
# -*- coding: utf-8 -*-
# 镜像版本留存工具 — 只保留最新 N 个发行版本（默认 10，与 workflow 的 KEEP_VERSIONS 一致）
#
# 用法:
#   scripts/docker_versions_prune.sh                      # GHCR 计划（只读，打印保留/删除清单）
#   scripts/docker_versions_prune.sh --apply              # GHCR 执行删除（需 delete:packages 权限）
#   scripts/docker_versions_prune.sh --local              # 本地 docker 镜像计划
#   scripts/docker_versions_prune.sh --local --apply      # 本地执行删除（docker rmi）
#   KEEP=5 scripts/docker_versions_prune.sh               # 改保留个数（收紧窗口）
#
# 权限说明（GHCR）:
#   - 只读计划：gh token 需 read:packages；若无，脚本自动回落到匿名 registry tags 接口（仍可出计划）
#   - 实际删除：需 delete:packages。两种做法：
#       a) 推荐：GitHub Actions → Docker Build & Publish → Run workflow → mode=prune
#          （用仓库内置 GITHUB_TOKEN + packages:write，无需个人 PAT）
#       b) 本机：gh auth refresh -h github.com -s read:packages,delete:packages 后 --apply
#
# 安全性:
#   - 默认 dry-run，只打印不删除
#   - 永远保留带 latest 标签的版本
#   - 只处理「三段式版本号」的镜像版本，其它标签（如自定义分支标签）一律不动
set -euo pipefail

OWNER="${OWNER:-bangbang8000-cell}"
PKG="${PKG:-quant-calendar}"
KEEP="${KEEP:-10}"
REGISTRY_IMAGE="${REGISTRY_IMAGE:-ghcr.io/${OWNER}/${PKG}}"
LOCAL_REPO_FILTER="${LOCAL_REPO_FILTER:-quant-calendar}"

MODE="registry"
APPLY=0
for arg in "$@"; do
  case "$arg" in
    --apply) APPLY=1 ;;
    --local) MODE="local" ;;
    --registry) MODE="registry" ;;
    -h|--help) sed -n '2,30p' "$0"; exit 0 ;;
    *) echo "未知参数: $arg（用 --help 查看用法）" >&2; exit 2 ;;
  esac
done

command -v python3 >/dev/null || { echo "需要 python3" >&2; exit 1; }

# ---------------------------------------------------------------------------
# GHCR：列出镜像版本，计算保留/删除集，可选删除
# ---------------------------------------------------------------------------
registry_plan() {
  local tmp_json="$1"
  python3 - "$tmp_json" "$KEEP" <<'PY'
import json, re, sys

path, keep = sys.argv[1], int(sys.argv[2])
data = json.load(open(path, encoding="utf-8"))
if isinstance(data, dict):          # gh api 报错信封
    sys.exit(f"GHCR 版本列表不可用: {data.get('message')}")

SEMVER = re.compile(r"^v?(\d+)\.(\d+)\.(\d+)$")

def release_of(tags):
    """一个版本可能挂多个标签；取三段式发行号（优先带 v 前缀）作为版本标识。"""
    cands = [t for t in tags if SEMVER.match(t)]
    if not cands:
        return None
    v = [t for t in cands if t.startswith("v")]
    return (v or cands)[0]

versions = []
for v in data:
    tags = (v.get("metadata") or {}).get("container", {}).get("tags") or []
    rel = release_of(tags)
    versions.append({
        "id": v.get("id"),
        "tags": tags,
        "release": rel,
        "sort_key": tuple(int(x) for x in SEMVER.match(rel).groups()) if rel else None,
        "has_latest": "latest" in tags,
    })

# 只有三段式发行版本参与剪裁；非发行标签版本（如手工标签）保持不动
released = [v for v in versions if v["sort_key"]]
released.sort(key=lambda v: v["sort_key"], reverse=True)

def fmt(v):
    return (v["release"] or "-") + ("  [latest]" if v["has_latest"] else "")

keep_set, drop_set = [], []
for i, v in enumerate(released):
    if i < keep:
        keep_set.append(v)
    else:
        drop_set.append(v)

# latest 兜底：无论排第几都保留
for v in list(drop_set):
    if v["has_latest"]:
        drop_set.remove(v)
        keep_set.append(v)

print(f"GHCR 版本总数: {len(versions)}（其中发行版本 {len(released)}）")
print(f"保留 {len(keep_set)} 个:")
for v in keep_set:
    print(f"  ✔ {fmt(v):<18} tags={','.join(v['tags'])}")
print(f"删除 {len(drop_set)} 个:")
for v in drop_set:
    print(f"  ✘ {fmt(v):<18} tags={','.join(v['tags'])}")

with open("/tmp/prune_drop_ids.txt", "w") as f:
    for v in drop_set:
        f.write(f"{v['id']}\n")
PY
}

do_registry() {
  local tmp
  tmp="$(mktemp)"
  echo "== 读取 GHCR 版本清单: ${REGISTRY_IMAGE} =="
  if gh api "/users/${OWNER}/packages/container/${PKG}/versions?per_page=100" >"$tmp" 2>/dev/null; then
    echo "来源: GitHub Packages API（含版本 id，可执行删除）"
  else
    echo "来源: 匿名 registry tags 接口（无 delete:packages 权限，仅出计划）"
    local tok
    tok=$(curl -s --noproxy '*' \
      "https://ghcr.io/token?scope=repository:${OWNER}/${PKG}:pull&service=ghcr.io" \
      | python3 -c 'import sys,json;print(json.load(sys.stdin).get("token",""))')
    curl -s --noproxy '*' -H "Authorization: Bearer ${tok}" \
      "https://ghcr.io/v2/${OWNER}/${PKG}/tags/list?n=1000" >"$tmp"
    # 把 tags 列表折叠成"版本"，无法精确到 id → 生成伪版本用于展示
    python3 - "$tmp" >"$tmp.versions" <<'PY'
import json, re, sys
d = json.load(open(sys.argv[1]))
tags = d.get("tags") or []
SEMVER = re.compile(r"^v?(\d+)\.(\d+)\.(\d+)$")
groups = {}
for t in tags:
    m = SEMVER.match(t)
    key = ".".join(m.groups()) if m else None
    groups.setdefault(key, []).append(t)
out = []
for key, ts in groups.items():
    out.append({"id": None, "metadata": {"container": {"tags": ts}}})
print(json.dumps(out, ensure_ascii=False))
PY
    mv "$tmp.versions" "$tmp"
    echo "（匿名模式下只有计划，执行删除请用 workflow mode=prune）"
  fi

  registry_plan "$tmp"
  rm -f "$tmp"

  echo
  if [ "$APPLY" -eq 0 ]; then
    echo "== DRY-RUN：未删除任何内容。确认无误后加 --apply =="
    return 0
  fi

  local n=0
  while read -r vid; do
    [ -z "$vid" ] && continue
    if [ "$vid" = "None" ]; then
      echo "✘ 无法获取版本 id（缺 read:packages）。请改用 workflow mode=prune 或 gh auth refresh -s read:packages,delete:packages" >&2
      return 3
    fi
    if gh api --method DELETE "/users/${OWNER}/packages/container/${PKG}/versions/${vid}" 2>/dev/null; then
      echo "  已删除 version id=${vid}"
      n=$((n + 1))
    else
      echo "  删除失败 version id=${vid}（权限或依赖关系？）" >&2
      return 4
    fi
  done </tmp/prune_drop_ids.txt
  echo "== 完成：删除 ${n} 个版本 =="
}

# ---------------------------------------------------------------------------
# 本地 docker：只保留最近 N 个 quant-calendar 发行镜像
# ---------------------------------------------------------------------------
do_local() {
  echo "== 本地 docker 镜像（仓库名含 '${LOCAL_REPO_FILTER}'） =="
  python3 - "$LOCAL_REPO_FILTER" "$KEEP" <<'PY'
import re, subprocess, sys

flt, keep = sys.argv[1], int(sys.argv[2])
raw = subprocess.run(
    ["docker", "images", "--format", "{{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}"],
    capture_output=True, text=True, check=True).stdout.strip().splitlines()

SEMVER = re.compile(r"^v?(\d+)\.(\d+)\.(\d+)$")
rows = []
for line in raw:
    repo, tag, size, created = line.split("\t")
    if flt not in repo:
        continue
    m = SEMVER.match(tag)
    rows.append({"img": f"{repo}:{tag}", "key": tuple(int(x) for x in m.groups()) if m else None,
                 "size": size, "created": created})

released = [r for r in rows if r["key"]]
released.sort(key=lambda r: r["key"], reverse=True)
keep_set, drop_set = released[:keep], released[keep:]

print(f"发行镜像 {len(released)} 个 → 保留 {len(keep_set)} / 删除 {len(drop_set)}")
for r in keep_set:
    print(f"  ✔ {r['img']:<52} {r['size']:<8} {r['created']}")
for r in drop_set:
    print(f"  ✘ {r['img']:<52} {r['size']:<8} {r['created']}")

with open("/tmp/prune_local_ids.txt", "w") as f:
    for r in drop_set:
        f.write(r["img"] + "\n")
PY
  if [ ! -s /tmp/prune_local_ids.txt ]; then
    echo "== 无需删除 =="
    return 0
  fi
  if [ "$APPLY" -eq 0 ]; then
    echo "== DRY-RUN：未删除。确认无误后加 --apply =="
    return 0
  fi
  while read -r img; do
    [ -z "$img" ] && continue
    docker rmi "$img" >/dev/null && echo "  已删除 $img"
  done </tmp/prune_local_ids.txt
  echo "== 本地清理完成 =="
}

if [ "$MODE" = "local" ]; then do_local; else do_registry; fi
