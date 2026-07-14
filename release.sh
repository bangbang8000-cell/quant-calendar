#!/bin/bash
# ==========================================
# 量化选股日历 - 发布脚本 v2.0.0
# 用法: ./release.sh 1.9.4
# ==========================================
set -e

VERSION="$1"
if [ -z "$VERSION" ]; then
    echo "用法: $0 <版本号>"
    echo "示例: $0 1.9.4"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKUP_DIR="/home/evergreen/量化日历"
ARCHIVE_NAME="quant-calendar-v${VERSION}.tar.gz"
ENTRY_POINT="main_new.py"

echo "=========================================="
echo "  发布量化选股日历 v${VERSION}"
echo "=========================================="
echo ""

# 1. 更新版本号（后端三处）
echo "📝 更新版本号..."
sed -i "s/version=\"[0-9.]*\"/version=\"${VERSION}\"/" "$SCRIPT_DIR/backend/${ENTRY_POINT}"
sed -i "s/\"version\": \"[0-9.]*\"/\"version\": \"${VERSION}\"/" "$SCRIPT_DIR/backend/${ENTRY_POINT}"
sed -i "s/量化选股日历 API v[0-9.]*/量化选股日历 API v${VERSION}/" "$SCRIPT_DIR/backend/${ENTRY_POINT}"
# 前端版本徽章（两处：系统状态 + 关于页）
sed -i "s/>v[0-9.]*<\/span>/>v${VERSION}<\/span>/g" "$SCRIPT_DIR/frontend/index.html"

# 2. 创建归档
echo "💾 创建归档..."
mkdir -p "$BACKUP_DIR"
cd "$SCRIPT_DIR" && tar -czf "${BACKUP_DIR}/${ARCHIVE_NAME}" \
    --exclude='__pycache__' \
    --exclude='*.pyc' \
    --exclude='*.pyo' \
    --exclude='*.log' \
    --exclude='*.backup' \
    --exclude='*.bak' \
    --exclude='venv' \
    --exclude='versions' \
    --exclude='.deps_installed' \
    --exclude='*.tar.gz' \
    backend/ frontend/ README.md DEPLOYMENT.md requirements.txt release.sh
echo "   ✅ 归档: ${BACKUP_DIR}/${ARCHIVE_NAME}"

# 3. 重启服务
echo "🔄 重启服务..."
fuser -k 8000/tcp 2>/dev/null || true
sleep 1
cd "$SCRIPT_DIR/backend"
find . -name '__pycache__' -type d -exec rm -rf {} + 2>/dev/null
nohup python3 "${ENTRY_POINT}" --port 8000 > /dev/null 2>&1 &
sleep 3

# 4. 验证
echo "🔍 验证服务..."
HEALTH=$(curl -s http://localhost:8000/api/health 2>/dev/null || echo '{"status":"error"}')
echo "   响应: $HEALTH"

echo ""
echo "=========================================="
echo "  ✅ v${VERSION} 发布完成"
echo "  归档: ${BACKUP_DIR}/${ARCHIVE_NAME}"
echo "  运行: http://localhost:8000"
echo "=========================================="
