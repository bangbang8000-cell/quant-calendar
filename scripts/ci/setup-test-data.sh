#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/_lib.sh"
cd "$QC_CI_ROOT"

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
