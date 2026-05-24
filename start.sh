#!/bin/bash

# ==========================================
# 量化选股日历 - 一键启动脚本
# ==========================================

# 默认配置
DEFAULT_PORT=8000
PORT=$DEFAULT_PORT
MODE="prod"  # prod / dev

# 解析命令行参数
while getopts "p:dh-:" opt; do
    case $opt in
        p) PORT=$OPTARG ;;
        d) MODE="dev" ;;
        h) echo "用法: $0 [-p 端口] [-d] [--dev] [--help]"
           echo ""
           echo "选项:"
           echo "  -p, --port PORT    指定服务端口 (默认: 8000)"
           echo "  -d, --dev          开发模式（启用热重载，代码修改自动重启）"
           echo "  -h, --help         显示帮助信息"
           exit 0 ;;
        -) case "${OPTARG}" in
               port) PORT="${!OPTIND}"; OPTIND=$(( OPTIND + 1 )) ;;
               dev) MODE="dev" ;;
               help) echo "用法: $0 [-p|--port 端口] [-d|--dev]" ; exit 0 ;;
           esac ;;
        \?) echo "无效选项: -$OPTARG" >&2 ; exit 1 ;;
    esac
done

echo "=========================================="
echo "  📅 量化选股日历 v1.3.2"
if [ "$MODE" = "dev" ]; then
    echo "  🛠️  开发模式 - 代码热重载已启用"
else
    echo "  🚀 生产模式 - 开箱即用"
fi
echo "=========================================="
echo ""

# 获取脚本所在目录
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# 检测 Python 环境
# 优先使用 conda base 环境，如果没有则创建 venv
if command -v conda &> /dev/null; then
    echo "✅ 检测到 Conda 环境"
    
    # 检查是否在 base 环境中
    if [ -z "$CONDA_PREFIX" ]; then
        echo "📦 正在激活 Conda base 环境..."
        # 尝试初始化 conda
        if [ -f "$HOME/miniconda3/etc/profile.d/conda.sh" ]; then
            source "$HOME/miniconda3/etc/profile.d/conda.sh"
        elif [ -f "$HOME/anaconda3/etc/profile.d/conda.sh" ]; then
            source "$HOME/anaconda3/etc/profile.d/conda.sh"
        elif [ -f "/opt/conda/etc/profile.d/conda.sh" ]; then
            source "/opt/conda/etc/profile.d/conda.sh"
        fi
        
        # 尝试激活 base 环境
        if command -v conda &> /dev/null; then
            conda activate base
            echo "✅ Conda base 环境已激活"
        else
            echo "⚠️  无法激活 conda 环境，将使用系统 Python"
        fi
    else
        echo "✅ 已在 Conda 环境中: $CONDA_PREFIX"
    fi
else
    echo "⚠️  未检测到 Conda，将使用系统 Python"
fi

echo ""

# 检查并安装依赖（使用 conda 环境或系统 Python）
if [ ! -f ".deps_installed" ]; then
    echo "📦 正在安装依赖包..."
    echo "   使用清华 PyPI 镜像源加速..."
    pip install -r requirements.txt -q -i https://pypi.tuna.tsinghua.edu.cn/simple
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败，请检查网络或 Python 环境"
        exit 1
    fi
    touch .deps_installed
    echo "✅ 依赖安装完成"
    echo ""
fi

# 检查配置文件
if [ ! -f ".env" ]; then
    echo "⚠️  未找到 .env 配置文件，使用默认配置"
    cp .env.example .env
fi

echo "🚀 启动服务中..."
echo "📖 访问地址: http://localhost:$PORT"
echo "👤 默认账号: admin / admin"
if [ "$MODE" = "dev" ]; then
    echo "🔄 热重载: 已启用（修改 Python 代码自动重启）"
fi
echo ""
echo "按 Ctrl+C 停止服务"
echo "=========================================="
echo ""

# 设置环境变量
export PORT=$PORT
export MODE=$MODE

# 启动服务
cd backend

if [ "$MODE" = "dev" ]; then
    # 开发模式：启用热重载
    python -c "
import uvicorn
from main import app

uvicorn.run(
    'main:app',
    host='0.0.0.0',
    port=$PORT,
    reload=True,
    reload_dirs=['.'],
    reload_delay=0.5
)
"
else
    # 生产模式：正常启动
    python main.py
fi
