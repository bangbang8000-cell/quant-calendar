# ACCEPTANCE — v7.4.0「策略资产扩容 y.0 核心」

| 项 | 值 |
|---|---|
| 版本 | v7.4.0（APP_VERSION / README / HANDOVER 三处对齐，bump_version --check 通过） |
| 基线 | v7.3.3（commit 8daa12e） |
| 日期 | 2026-11-20 |
| 上游依据 | PRD v1.2 §7、DEV-TEST-PLAN v1.0 |
| 状态 | 本地门禁全绿；部署冒烟见下；**远程 GitHub CI 因 origin 无 push 凭证未触发（见风险）** |

## 1. 交付内容（FR 对应）

| FR | 需求 | 实现 | 状态 |
|---|---|---|---|
| FR-7.4-1 | 首批 4 形态策略注册 | `builtin/golden_triangle.py`、`oversold_rebound.py`、`main_uptrend_dip_buy.py`、`leader.py`，注册进 `registry.py`（现 8 策略） | ✅ |
| FR-7.4-2 | 参数 ParamSpec 化 | 4 策略全部参数声明为带 min/max/step 的 ParamSpec，schema 下发 | ✅ |
| FR-7.4-3 | 五维评分引擎 | `strategy_sdk/scoring.py`：35/35/10/10/10 可配（强制和=1）+ 一票否决 -100 + 缺维诚实 unknown | ✅ |
| FR-7.4-4 | 评分 API | `api/v1/strategy_scores.py`：`GET /strategies/scores/config`、`POST /strategies/scores/calculate`（RBAC 保护，401 验证） | ✅（API 层；评分卡前端属 y2） |
| FR-7.4-5 | 回测口径校准 | `backtest.py` 新增 `compute_profit_factor`（金额口径）、`kelly_fraction`；`strategy_sdk/backtest.py` 接入，输出含 T-1 防前视声明 | ✅ |
| FR-7.4-6 | 研究历史类型 | `research_store.VALID_TYPES` 追加 `score`/`pattern_strategy` | ✅ |
| FR-7.4-8 | 形态策略持有期规则 | 4 策略均声明 `hold_days`；`_pattern_utils.expand_holding_window` 命中后持有 N 日，避免稀疏信号 hold_days 恒 1；边界单测 | ✅ |
| FR-7.4-9 | 策略级受控入库 | `strategy_governance.BUILTIN_SIDS` 纳入 4 策略，`CALENDAR_OPT_IN_SIDS` 默认 `show_in_calendar=False` | ✅ |

> 用户特别要求「美观/便捷/高效/逻辑清晰/方便运维」五维护栏：本版本重点落在**逻辑清晰**（L2 单一回测引擎、L3 诚实口径、L4 参数同源）与**方便运维**（O1 版本单一来源、O5 验收文档）；评分卡前端（美观 A1/A3）与股票级勾选入库（便捷 C2）属 y2。

## 2. 关键设计决策（对齐评估结论）

- **产物分流**：4 形态策略产物是"选中股票列表"，造持仓矩阵；评分默认走 API/研究实验通道，仅在用户确认 TopN 后经 `to_holdings` 物化，不自动进日历。
- **龙头策略 T2 降级**：涨停池字段（limit_type/turnover_ratio/float_mv）走 T2，DataPortal 不支持时返回空矩阵（诚实降级，不造数、不污染 T1 日历）。
- **权重参数化**：KHunter 源码注释写 0.25/0.30/0.15/0.15/0.15 但实际权重是 0.35/0.35/0.10/0.10/0.10，本引擎以实际值为默认并强制和为 1，可诊断。
- **模块 ≤700 行**：评分 API 独立成 `strategy_scores.py`，`strategy_research.py` 保持 659 行（过 module_size 门禁）。

## 3. 测试结果

| 项目 | 结果 |
|---|---|
| 新增测试 `test_pattern_strategies_v74.py`（19）+ `test_scoring_api_v74.py`（9） | ✅ 28 passed |
| 全量回归 `pytest tests/ -m "not e2e and not network"` | ✅ 4319 passed, 4 deselected |
| 门禁专项（module_size/rbac/pit/split-parity/frontend×2/coverage_gate） | ✅ 252 passed |
| ruff（CI 规则 `--select=E,F,W --ignore=E501`，全 backend） | ✅ All checks passed |
| bump_version --check | ✅ 三处一致 |
| FastAPI 路由冒烟（TestClient） | ✅ scores/strategies 路由存在且受 RBAC 保护（401） |

### 已知基线问题（非本次引入）

- **`test_lockfile_consistent` 失败**：`requirements.lock` 与当前 PyPI 解析结果漂移（akshare 1.20.25→1.20.39、fastapi 0.162→0.165 等）。经 uv 0.11.7（CI 固定版本）复核同样漂移，确认是**基线技术债**（上游发版导致），与本次开发无关。本次未擅自更新 lock（避免引入大量依赖版本变更）。**建议**：单独开债务清理任务重编译 lock 并回归。
  - 影响：本地全量测试该项红；CI layer1 的 `uv pip compile diff` 步骤也会命中——需在推 tag 前先解决此债务。

## 4. 部署冒烟

（待 dev→ops 同步后填写）

## 5. 五维护栏验收

- A（美观）：本版本无新页面；沿用既有设计系统。评分卡前端列 y2。✅ 不破坏
- C（便捷）：参数 schema 自动下发（零改前端出现）；评分 API 可直接调用。✅
- E（高效）：策略取数走 ctx.panel 单次取数；持有期用向量化矩阵填充。✅
- L（逻辑清晰）：单一回测引擎、产物分流、诚实口径、参数同源。✅ 重点达标
- O（方便运维）：版本三处对齐、独立模块、ACCEPTANCE 文档、受控入库默认关。✅ 重点达标

## 6. 远程 CI 状态

**未触发**：GitHub origin 未配置 push 凭证（`git push --dry-run origin` 超时，无 credential helper/token/SSH key）。已用本地等价门禁完整复现 6 个阻塞 job 并全绿。如需远程 CI 绿，需用户配置 GitHub PAT 或 SSH key（见交付报告行动项）。
