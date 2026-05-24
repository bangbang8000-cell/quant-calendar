@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM 默认配置
set PORT=8000
set MODE=prod

REM 解析命令行参数
:parse_args
if "%~1"=="" goto end_parse_args
if /i "%~1"=="-p" (
    set PORT=%~2
    shift
    shift
    goto parse_args
)
if /i "%~1"=="--port" (
    set PORT=%~2
    shift
    shift
    goto parse_args
)
if /i "%~1"=="-d" (
    set MODE=dev
    shift
    goto parse_args
)
if /i "%~1"=="--dev" (
    set MODE=dev
    shift
    goto parse_args
)
if /i "%~1"=="-h" (
    echo 用法: %~nx0 [-p^|--port 端口] [-d^|--dev]
    echo.
    echo 选项:
    echo   -p, --port PORT    指定服务端口 ^(默认: 8000^)
    echo   -d, --dev          开发模式（启用热重载，代码修改自动重启）
    echo   -h, --help         显示帮助信息
    endlocal
    exit /b 0
)
if /i "%~1"=="--help" (
    echo 用法: %~nx0 [-p^|--port 端口] [-d^|--dev]
    endlocal
    exit /b 0
)
shift
goto parse_args
:end_parse_args

echo ==========================================
echo   📅 量化选股日历 v1.3.2
if "%MODE%"=="dev" (
    echo   🛠️  开发模式 - 代码热重载已启用
) else (
    echo   🚀 生产模式 - 开箱即用
)
echo ==========================================
echo.

cd /d "%~dp0"

REM 检查是否在 conda 环境中
if "%CONDA_PREFIX%"=="" (
    echo 🔍 检测 Conda 环境...
    REM 尝试初始化 conda
    if exist "%USERPROFILE%\miniconda3\Scripts\activate.bat" (
        call "%USERPROFILE%\miniconda3\Scripts\activate.bat" base
        echo ✅ Conda base 环境已激活
    ) else if exist "%USERPROFILE%\anaconda3\Scripts\activate.bat" (
        call "%USERPROFILE%\anaconda3\Scripts\activate.bat" base
        echo ✅ Conda base 环境已激活
    ) else (
        echo ⚠️  未检测到 Conda，使用系统 Python
    )
) else (
    echo ✅ 已在 Conda 环境中: %CONDA_PREFIX%
)
echo.

if not exist .deps_installed (
    echo 📦 正在安装依赖包...
    echo    使用清华 PyPI 镜像源加速...
    pip install -r requirements.txt -q -i https://pypi.tuna.tsinghua.edu.cn/simple
    if errorlevel 1 (
        echo ❌ 依赖安装失败，请检查网络或 Python 环境
        pause
        exit /b 1
    )
    echo. > .deps_installed
    echo ✅ 依赖安装完成
    echo.
)

if not exist .env (
    echo ⚠️  未找到 .env 配置文件，使用默认配置
    copy .env.example .env
)

echo 🚀 启动服务中...
echo 📖 访问地址: http://localhost:%PORT%
echo 👤 默认账号: admin / admin
if "%MODE%"=="dev" (
    echo 🔄 热重载: 已启用（修改 Python 代码自动重启）
)
echo.
echo 按 Ctrl+C 停止服务
echo ==========================================
echo.

REM 设置环境变量
set PORT=%PORT%
set MODE=%MODE%

cd backend

if "%MODE%"=="dev" (
    REM 开发模式：启用热重载
    python -c "
import uvicorn
from main import app

uvicorn.run(
    'main:app',
    host='0.0.0.0',
    port=%PORT%,
    reload=True,
    reload_dirs=['.'],
    reload_delay=0.5
)
"
) else (
    REM 生产模式：正常启动
    python main.py
)

pause
endlocal
