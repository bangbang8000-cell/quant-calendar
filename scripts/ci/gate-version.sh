#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 用法: gate-version.sh [tag]   —— 有 tag 时校验 tag↔APP_VERSION；无 tag 只校验存在
# 平台差异由调用方消化：GitHub 传 "$GITHUB_REF_NAME"，GitLab 传 "$CI_COMMIT_TAG"
TAG="${1:-}"
V=$(qc_app_version)
[ -n "$V" ] || qc_fail "未找到 APP_VERSION"
if [ -n "$TAG" ]; then
  T="${TAG#v}"
  [ "$T" = "$V" ] || qc_fail "tag=$TAG 与 APP_VERSION=$V 不一致"
  echo "版本一致: $V"
else
  echo "仅校验 APP_VERSION 存在: $V"
fi
python3 scripts/bump_version.py --check
