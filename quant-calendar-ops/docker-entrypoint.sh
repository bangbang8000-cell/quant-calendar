#!/bin/bash
# ==========================================
# 量化选股日历 Docker 入口脚本
# - 初始化 .env（无 Token，仅为 SECRET_KEY）
# - 确保数据目录存在
# - 启动应用
# ==========================================
set -e

echo "=== 量化选股日历 v2.1.2 容器启动 ==="

# 1. 确保 data 目录存在
mkdir -p /app/data

# 2. 初始化 .env（如果不存在）
if [ ! -f /app/.env ]; then
    echo "[init] 创建初始 .env（无 Token，请通过 Web UI 配置）"
    cat > /app/.env << 'EOF'
# 量化选股日历 - 环境配置
# ⚠️ 所有 Token/密钥请通过 Web UI 设置，不要手动编辑此文件
HOST=0.0.0.0
PORT=8000
DEBUG=False
SECRET_KEY=
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440
TUSHARE_TOKEN=
SXSC_TUSHARE_TOKEN=
SXSC_TUSHARE_ENABLED=True
AKSHARE_ENABLED=True
REDIS_URL=redis://localhost:6379/0
CORS_ORIGINS=http://localhost:8000,http://127.0.0.1:8000
FEISHU_WEBHOOK_URL=
QUANT_DATA_DIR=/data/qresult
EOF
fi

# 3. 检查策略数据
if [ -d /data/qresult ]; then
    csv_count=$(ls /data/qresult/*.csv 2>/dev/null | wc -l)
    echo "[data] 策略数据目录: /data/qresult ($csv_count 个 CSV 文件)"
else
    echo "[warn] 策略数据目录 /data/qresult 不存在"
fi

echo "[boot] 启动应用..."
exec "$@"
