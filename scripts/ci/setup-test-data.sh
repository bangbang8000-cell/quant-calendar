#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

# 前端依赖：test_frontend_v711 模板编译 / test_v718_ui el-registry 校验
# 都直接 require frontend/node_modules 下的 @vue/compiler-dom 与 element-plus。
if [ -f frontend/package-lock.json ]; then
  qc_log "安装前端依赖 (npm ci) — 模板编译与 el-registry 校验所需"
  (cd frontend && npm ci)
fi

# 生成测试所需股票名映射（原 ci.yml layer2 内联步骤）
qc_log "生成测试股票名映射"
mkdir -p data
python3 - <<'PY'
import json
stock_map = {
    "600085.SH": "同仁堂",
    "000002.SZ": "万科A",
    "600519.SH": "贵州茅台",
    "000001.SZ": "平安银行",
    "600000.SH": "浦发银行",
    "600036.SH": "招商银行",
    "000858.SZ": "五粮液",
    "300750.SZ": "宁德时代",
}
with open("data/stock_info.json", "w", encoding="utf-8") as f:
    json.dump(stock_map, f, ensure_ascii=False)
print(f"stock_info.json written: {len(stock_map)} entries")
PY
