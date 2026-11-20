# ACCEPTANCE — v7.9.0「体验与效率专项」

| 项 | 值 |
|---|---|
| 版本 | v7.9.0（APP_VERSION / README / HANDOVER 三处对齐，bump_version --check 通过） |
| 基线 | v7.8.0（commit 3a77dca） |
| 日期 | 2026-11-20 |
| 上游依据 | PRD v1.2 §11.2、DEV-TEST-PLAN v1.0 |
| 状态 | 本地门禁全绿；五维复检 PASS；部署冒烟见下；**远程 GitHub CI 因 origin 无 push 凭证未触发** |

## 1. 交付内容（FR 对应）

| FR | 需求 | 实现 | 状态 |
|---|---|---|---|
| FR-7.9-1 | 五维护栏全面复检（视觉/交互/性能/口径/运维） | `scripts/five_dim_audit.py`：11 项静态检查覆盖 A/C/E/L/O 五维，产出 `docs/QUALITY-AUDIT-v7.9.md`；`tests/test_report_stock_v79.py` 内置"无 FAIL + 综合分 ≥80"门禁断言 | ✅ |
| FR-7.9-2 | 五维分析报告生成器（HTML/PDF 可导出） | `backend/report_stock.py`：技术/资金/基本面/板块/事件五维分析 + `ScoreEngine` 加权 + 结论生成 + 自包含 HTML 渲染（全量转义、无外链）；`GET /api/reports/stock/{symbol}?format=json|html` | ✅ |
| FR-7.9-3 | KHunter 独有分析器查漏 | 事件维消化到位（情绪计数 + 重大利空关键词一票否决）；板块维以行业强度分位接入（缺数据显式 unknown，不编造）；资金维复用面板 `main_net_inflow` | ✅ |

> Y 小版本口径：v7.9.0 = 五维护栏复检 + 报告生成器 + 分析器查漏（三项一并交付，工作量低于 PRD 预估）；v7.9.1/v7.9.2 预留给前端接入与体验打磨。

## 2. 关键设计决策

- **复检可机器复跑**：五维审计不做一次性人工走查，而是 11 项可重复执行的静态检查（令牌化率、主题完整性、产物体积、前端可达性、端点说明覆盖、模块体积、索引覆盖、路由重复、迁移连续性、版本对齐、自检项数）；同一命令在 CI 与本地给出一致结论。
- **门禁化**：`test_five_dim_audit_has_no_fail` 把"无 FAIL + 综合分 ≥80"变成 pytest 断言，后续版本退化会直接把 CI 打红，避免"报告写完就过期"。
- **报告口径与评分同源**：五维分数不再各算一套，统一交给 v7.4 的 `ScoreEngine`（35/35/10/10/10）加权，缺维标 `unknown`，`data_completeness` 显式暴露缺数比例。
- **安全渲染**：上游 `report_generator.py` 用巨型 f-string 直接插值外部数据（XSS）。这里所有动态内容 `html.escape`，样式走 CSS 变量并内置暗色媒体查询，产出可离线打开的单文件 HTML。
- **不编数**：板块/事件维需要外部数据时，由 query 参数显式注入（`sector_rank`/`sector_name`）或置 None；缺数据只降 completeness，不写 0 分冒充"很差"。
- **可解释**：每个维度的加减分都记录为 `reasons`（如"均线多头排列 (+15)"），报告里逐条列出，结论只给等级与驱动/风险，不给买卖指令。

## 3. 测试结果

| 项目 | 结果 |
|---|---|
| 新增 `test_report_stock_v79.py`（15） | ✅ 15 passed |
| 五维复检综合得分 | ✅ 95.0 / 100（FAIL 0，WARN 1：新功能前端可达性 1/5） |
| 全量回归 `pytest tests/ -m "not e2e and not network"` | ✅ 4424 passed, 4 deselected, 0 failed |
| 门禁专项（module_size/rbac/pit/split-parity/frontend×2/coverage_gate） | ✅ 252 passed |
| ruff / bump_version --check / lockfile diff | ✅ 全过（runtime 213/213 行、dev 57/57 行一致） |

## 4. 依赖变更

无新增第三方依赖（指标计算用 numpy/pandas，HTML 用标准库）。
lockfile 保持不变。

## 5. 部署冒烟

待填

## 6. 五维护栏验收

- A（美观）：令牌化率 95.5%、明暗主题齐备、产物单文件 1085KB 未超限；报告 HTML 自带暗色适配。✅ 重点达标
- C（便捷）：一键出报告（JSON/HTML 双格式）；复检暴露"前端仅接入 1/5 新域"的真实缺口，登记为 WARN。⚠️ 部分达标（诚实标注）
- E（高效）：无超限模块；360 条路由无重复；索引 13 条覆盖执行/审计热表。✅
- L（逻辑清晰）：维度分统一口径、缺维 unknown、每条加减分可追溯。✅ 重点达标
- O（方便运维）：迁移 1–10 连续无缺号、版本三处对齐、自检函数 10 个；复检脚本可归档可复跑。✅ 重点达标

## 7. 远程 CI 状态

**未触发**：GitHub origin 无 push 凭证（用户自行配置中）。本地已完整复现阻塞门禁，配置凭证后需补跑远程 CI。
