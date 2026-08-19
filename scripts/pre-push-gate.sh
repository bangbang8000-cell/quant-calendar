#!/usr/bin/env bash
# =============================================
# v3.21 (P0-7): 发布安全门禁 — pre-push hook 脚本
# 职责: ① 待提交文件 0 token  ② 不含运行数据文件
# 退出码: 0=安全可 push; 1=发现敏感内容阻止 push
# =============================================
set -u

REPO_DIR="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
FAIL=0

echo "🔐 pre-push 安全门禁: $REPO_DIR"

# ① token 扫描 (排除本脚本自身, 避免自指误报)
echo "── 扫描密钥模式..."
TOKEN_HITS=$(cd "$REPO_DIR" && git grep -n -E "46a2b3f4637da2d1b2f70963ba53b18|ab2ee009c7028a2469a0b8cc70008c32|tushare.*token[[:space:]]*=[[:space:]]*[a-f0-9]{32,}" -- . 2>/dev/null | grep -v "scripts/pre-push-gate.sh" | head -20)
if [ -n "$TOKEN_HITS" ]; then
    echo "❌ 检测到疑似密钥/token 内容:"
    echo "$TOKEN_HITS"
    FAIL=1
else
    echo "✅ 无密钥模式"
fi

# ② 运行数据扫描 (仅针对待提交文件路径)
echo "── 扫描运行数据文件..."
STAGED=$(cd "$REPO_DIR" && git diff --cached --name-only 2>/dev/null; git diff --name-only 2>/dev/null)
BAD=$(echo "$STAGED" | grep -E "(^|/)data/|(^|/)qresult/|holdings/|(^|/)\.env$|(^|/)\.env\.|\.db$|\.log$|(^|/)datasource_config\.json$|strategy_governance\.json$" | head -20)
if [ -n "$BAD" ]; then
    echo "❌ 待提交含运行数据/密钥文件:"
    echo "$BAD"
    echo "   提示: data/ .env *.db *.log 已在 .gitignore, 若强制添加请移除后重试"
    FAIL=1
else
    echo "✅ 无运行数据文件"
fi

if [ "$FAIL" -eq 1 ]; then
    echo ""
    echo "🚫 push 被安全门禁阻止 — 请清理敏感内容后重试"
    exit 1
fi

echo "✅ 安全门禁通过, 可以 push"
exit 0
