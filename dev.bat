@echo off
chcp 65001 >nul

echo ==========================================
echo   🛠️  量化选股日历 - 开发模式
echo ==========================================
echo.
echo 📋 功能说明：
echo    ✅ 代码热重载 - 修改 Python 代码自动重启服务
echo    ✅ DEBUG 模式 - 更详细的日志输出
echo    ✅ 自动重载 - 检测 .py 文件变化
echo.
echo 💡 使用提示：
echo    - 修改 backend\ 下的代码会自动重启
echo    - 修改 .env 配置需要手动重启
echo    - 修改前端文件刷新浏览器即可
echo.

call "%~dp0start.bat" -d %*
