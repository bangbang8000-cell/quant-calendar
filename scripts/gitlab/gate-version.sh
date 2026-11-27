#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 用法: gate-version.sh [tag]   —— 有 tag 时校验 tag↔APP_VERSION；无 tag 只校验存在
# 平台差异由调用方消化：GitHub 传 "$GITHUB_REF_NAME"，GitLab 传 "$CI_COMMIT_TAG"
TAG="${1:-}"
V=$(qc_app_version)
[ -n "$V" ] || qc_fail "未找到 APP_VERSION"
# 只有合法 semver tag 才做一致性校验；分支名（master / workflow_dispatch）直接跳过。
# GitHub 传 "$GITHUB_REF_NAME"，GitLab 传 "$CI_COMMIT_TAG"，两者行为在此统一。
if [[ "$TAG" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  T="${TAG#v}"
  [ "$T" = "$V" ] || qc_fail "tag=$TAG 与 APP_VERSION=$V 不一致"
  echo "版本一致: $V"
else
  echo "非 tag 触发 (ref=$TAG): 仅校验 APP_VERSION 存在: $V"
fi
python3 scripts/bump_version.py --check
