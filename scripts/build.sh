#!/bin/bash
# V4.5 (FR-4.5.5): 前端构建 + 双端重启 (开发流程脚本化)
set -e
cd "$(dirname "$0")/../frontend"
npm_config_cache=/home/evergreen/dsh-workspace/npm_cache npx vite build
cd ..
bash /home/evergreen/dsh-workspace/restart_ws2.sh
echo "BUILD+DEPLOY DONE"
