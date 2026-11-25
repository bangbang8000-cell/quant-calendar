#!/bin/bash
# V4.5 (FR-4.5.5): 发布脚本 — push master + tag + ops 同步
# 用法: scripts/push.sh v4.5.0
set -e
TAG="$1"
if [ -z "$TAG" ]; then echo "用法: scripts/push.sh <tag>"; exit 1; fi
cd "$(dirname "$0")/.."
git tag "$TAG"
git -c http.proxy= -c https.proxy= push origin master
git -c http.proxy= -c https.proxy= push origin "$TAG"
cd /home/evergreen/dsh-workspace/quant-calendar-ops
git fetch origin > /dev/null 2>&1 && git reset --hard origin/master
echo "SYNC-DONE $(git -C "$(dirname "$0")/.." log --oneline -1)"
