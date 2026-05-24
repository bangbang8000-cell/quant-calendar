#!/bin/bash
# ==========================================
# 量化选股日历 - 发布脚本
# 用法: ./release.sh 1.0.1
# ==========================================
set -e

VERSION="$1"
if [ -z "$VERSION" ]; then
    echo "用法: $0 <版本号>"
    echo "示例: $0 1.1.0"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OPS_DIR="/home/evergreen/.openclaw/workspace/quant-calendar-ops"
BACKUP_DIR="/home/evergreen/量化日历"
ARCHIVE_NAME="quant-calendar-v${VERSION}.tar.gz"

echo "=========================================="
echo "  发布量化选股日历 v${VERSION}"
echo "=========================================="
echo ""

# 1. 更新后端版本号
echo "📝 更新版本号..."
sed -i "s/version=\"[0-9.]*\"/version=\"${VERSION}\"/" "$SCRIPT_DIR/backend/main.py"
sed -i "s/\"version\": \"[0-9.]*\"/\"version\": \"${VERSION}\"/" "$SCRIPT_DIR/backend/main.py"
sed -i "s/v[0-9.]*<\\/span>/v${VERSION}<\\/span>/" "$SCRIPT_DIR/frontend/index.html"

# 2. 备份当前运行目录
echo "💾 备份当前运行目录..."
mkdir -p "$BACKUP_DIR"
# 检查 ops 是否存在
if [ -d "$OPS_DIR/backend" ]; then
    # 创建归档
    cd "$OPS_DIR" && tar -czf "${BACKUP_DIR}/${ARCHIVE_NAME}" \
        --exclude='__pycache__' \
        --exclude='*.pyc' \
        --exclude='*.pyo' \
        --exclude='*.log' \
        --exclude='venv' \
        --exclude='versions' \
        --exclude='.deps_installed' \
        --exclude='*.backup*' \
        --exclude='main_new.py' \
        .
    echo "   ✅ 备份完成: ${BACKUP_DIR}/${ARCHIVE_NAME}"
else
    echo "   ⚠️  ops 目录不存在，跳过备份"
fi

# 3. 部署到 ops（保留 data/ 和 .env）
echo "📦 部署到 quant-calendar-ops..."
rsync -a --delete \
    --exclude='__pycache__' \
    --exclude='*.pyc' \
    --exclude='*.pyo' \
    --exclude='*.log' \
    --exclude='venv' \
    --exclude='versions' \
    --exclude='.deps_installed' \
    --exclude='*.backup*' \
    --exclude='main_new.py' \
    --exclude='data/' \
    --exclude='.env' \
    "$SCRIPT_DIR/" \
    "$OPS_DIR/"
echo "   ✅ 代码已部署"

# 4. 重启服务
echo "🔄 重启服务..."
# 杀掉旧的 python main.py 进程
pkill -f "python main.py" 2>/dev/null || true
sleep 1
# 启动新服务
cd "$OPS_DIR/backend" && nohup python main.py > /dev/null 2>&1 &
sleep 3
echo "   ✅ 服务已重启"

# 5. 验证
echo "🔍 验证服务..."
HEALTH=$(curl -s http://localhost:8000/api/health 2>/dev/null || echo '{"status":"error"}')
echo "   响应: $HEALTH"

echo ""
echo "=========================================="
echo "  ✅ v${VERSION} 发布完成"
echo "  备份: ${BACKUP_DIR}/${ARCHIVE_NAME}"
echo "  运行: http://localhost:8000"
echo "=========================================="
