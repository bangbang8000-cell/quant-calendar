# ACCEPTANCE — v7.8.0「执行与实盘联动」

| 项 | 值 |
|---|---|
| 版本 | v7.8.0（APP_VERSION / README / HANDOVER 三处对齐，bump_version --check 通过） |
| 基线 | v7.7.0 |
| 日期 | 2026-11-20 |
| 上游依据 | PRD v1.2 §11.1、DEV-TEST-PLAN v1.0、KHunter 评估报告 §6.3 |
| 状态 | 本地门禁全绿；部署冒烟见下；**远程 GitHub CI 因 origin 无 push 凭证未触发** |

## 1. 交付内容（FR 对应）

| FR | 需求 | 实现 | 状态 |
|---|---|---|---|
| FR-7.8-1 | 狩猎场：选股结果 → 支撑位比较 → 入库跟踪 | `execution/support.py`（4 算法）、`execution/hunting.py`（扫描 + `hunting_tracks` 跟踪）、`GET /api/execution/hunting/scan`、`POST/GET/PATCH/DELETE /api/execution/hunting/tracks`、`/hunting/summary`；migration 0010 | ✅ |
| FR-7.8-2 | 执行计划：生成/导入/导出/跟踪 | `execution/plans.py`（状态机 + 成交回报 + CSV）、`POST /api/execution/plans`、`/plans/from-hunting`、`/plans/import`、`/{id}/status`、`/{id}/legs/{id}/fill`、`/cancel`、`/{id}/export`；全端点 RBAC + 双层审计 | ✅ |
| FR-7.8-3 | PTrade 文件交换（受控模式） | `execution/exchange.py`：`data/exchange/` 路径白名单（realpath 前缀校验、拒绝 `..`/绝对路径/非 csv）、2MB 上限、读写删全程审计；`/api/execution/exchange/*` 四端点 | ✅ |
| FR-7.8-4 | VaR 风控 + 连续降温风险 | `execution/risk_budget.py`：历史/EWMA(λ=0.94)/BRW 混合三口径 VaR（默认 0.99）+ CVaR、风险等级映射仓位上限与止损、连续降温守卫；`POST /api/execution/risk/var` | ✅ |
| FR-7.8-5 | 组合与仓位管理 | 不新建持仓表：成交回报 `fill_leg` 复用 `db.portfolio_apply_trade` + `portfolio_add_trade`，与既有 `/api/portfolio/*` 同源 | ✅ 复用 |

> Y 小版本口径：v7.8.0 = 狩猎场 + 执行计划（+ 受控交换与 VaR 提前落地）；v7.8.1 = 交换通道体验补齐；v7.8.2 = 组合仓位与审计收口。

## 2. 关键设计决策

- **不重复造池**：狩猎场池来自 `data/holdings/{date}/*持仓.csv`（日历唯一通道的产物），不另建选股结果存储，与 §6.5 产物分流一致。
- **支撑位可追溯**：返回 `support_method` / `support_ref_date` / `support_fallback`，把"用哪根 K 线算的"暴露给前端；K 线不足或关键日缺失显式报错并进 `errors`，绝不补数。
- **买入区间锚定支撑位**：上游取"现价 ±1%"（与支撑位无关），这里买入下沿=支撑位、上沿=支撑位+2%，止损在支撑位下 5%，止盈在买入上沿上 20%，使区间、止损、止盈、盈亏比自洽。
- **状态机显式化**：plan `draft→active→closed`、`draft/active→cancelled`（终态不可复活）；leg `pending→filled/cancelled`；非法流转 400，不静默纠正。
- **双份审计**：业务事件流 `exec_plan_events`（计划级追溯）+ 全局 `audit_log`（安全审计），对应铁律 C6。
- **按 owner 隔离**：`hunting_tracks` 与 `exec_plans` 均带 owner，越权读取返回 404（不泄露存在性），与自选/组合的 per-user 口径一致。
- **受控交换而非裸文件**：`safe_name` + `realpath` 前缀双重校验，拒绝目录穿越与软链逃逸；读写均留痕。
- **风险预算取更严者**：`suggested_exposure = min(等级仓位上限, 降温守卫系数)`，温度与波动率两路统一到一个出口，供执行计划 `exposure` 直接消费。

## 3. 测试结果

| 项目 | 结果 |
|---|---|
| 新增 `test_execution_v78.py`（32） | ✅ 32 passed |
| 全量回归 `pytest tests/ -m "not e2e and not network"` | ✅ 4409 passed, 4 deselected, 0 failed |
| 门禁专项（module_size/rbac/pit/split-parity/frontend×2/coverage_gate） | ✅ 252 passed |
| ruff / bump_version --check / lockfile diff | ✅ 全过（runtime 213/213 行、dev 57/57 行一致） |

## 4. 依赖变更

无新增第三方依赖：VaR 复用既有 `risk.py`（numpy），支撑位复用 pandas，文件交换用标准库。
lockfile 保持不变。

## 5. 部署冒烟

部署验证中

## 6. 五维护栏验收

- A（美观）：本版本无新页面，API 均返回结构化 JSON（含 position_label / note 等直出文案），便于前端零翻译渲染。✅ 不破坏
- C（便捷）：狩猎场 → 计划 → 成交 → 组合四步各有单一端点；`from-hunting` 一条龙生成 draft，避免手工搬运。✅ 重点达标
- E（高效）：扫描单次批量取面板（一次 get_panel 覆盖全池）；支撑位为 O(n)；VaR 三口径均为 O(n log n) 以内。✅
- L（逻辑清晰）：产物分流（候选/计划/持仓三层）、状态机显式、支撑位依据可追溯。✅ 重点达标
- O（方便运维）：migration 0010 幂等；交换目录白名单可审计；计划事件流可回溯；版本三处对齐。✅ 重点达标

## 7. 远程 CI 状态

**未触发**：GitHub origin 无 push 凭证（用户自行配置中）。本地已完整复现阻塞门禁，配置凭证后需补跑远程 CI。
