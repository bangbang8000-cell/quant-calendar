# 开发 & 测试计划 — 量化日历 v7.24.0 ~ v7.26.0「可信度重建与体验迭代」

| 项 | 值 |
|---|---|
| 对应 PRD | [`docs/PRD-7.24.0-可信度与体验迭代.md`](./PRD-7.24.0-可信度与体验迭代.md) |
| 上游依据 | [`../QuantCalendar-v7.23-全面评估报告.md`](../QuantCalendar-v7.23-全面评估报告.md) |
| 版本 | `APP_VERSION 7.23.0` → `7.24.0` → `7.25.0` → `7.26.0` |
| 基线 | dev 副本 `quant-calendar-dev`；469 个测试文件；本地门禁 `scripts/local-ci-gate.sh` |
| 当前阶段 | **待批准**（批准后方可编码） |
| 编排规则 | 本计划只写「做什么、按什么顺序、如何验证」，**不含工时与排期** |
| 铁律 | TDD 四步（先红 → 跑红 → 实现 → 跑绿 + commit）；单次改动 ≤3 个核心文件；前端改必 `npm run build`；每任务独立 commit |

---

## 0. 执行原则与阶段门

1. **阶段门**：本计划批准 → 进入编码。未批准不写代码。
2. **分支**：`feat/v7.24.0` → `feat/v7.25.0` → `feat/v7.26.0`，每个版本一个合并窗口；批次内按里程碑提交。
3. **流水线分工**（用户决策）：本地开发测试 → 推 GitLab 走迭代门禁（MR/合并前全量）→ 打 `v*` tag 由 GitHub Actions 走正式发布。
4. **口径冻结**：PRD 第 4 章是唯一口径；任何模块不得自行定义成交价、复权、成本、年化。
5. **数据安全**：涉及 `data/app.db`、`data/holdings`、`data/backtest_history.json` 的改动，必须先备份并记录 sha256。
6. **负向校验**：每个修复类任务必须证明"回退修复后用例变红"，否则不计通过。
7. **前端一致性**：`frontend/index.html` 与 `frontend/dist/index.html` 双份同步；CSS 必须经 `scripts/build_css.py` 重建 `app.css`。

---

## 1. T0 前置准备（编码前必须完成）

| ID | 任务 | 产出 |
|---|---|---|
| **T0-1** | 记录基线：`pytest -m "not e2e"`、`ruff`、前端构建产物体积、`data/holdings` 现有日期清单 | `docs/baseline-v7.23.md`（或 PR 描述） |
| **T0-2** | 备份：`data/app.db`、`data/backtest_history.json`、`data/holdings/`、`data/strategy_*.json`、用户配置 | `backups/v7.24.0-pre/` + sha256 清单 |
| **T0-3** | 数据核验：DWH `v_daily_qfq` 是否覆盖 ≥18 个月、是否含开盘价/涨跌停价/停牌标记/ST 标记 | 核验结论写入 PR；缺项列成阻塞项 |
| **T0-4** | 入口清点：确认 `/api/backtest/*`、策略研究回测、策略管理回测三条链路当前调用的函数与返回字段 | 调用关系图（Markdown） |
| **T0-5** | 环境核对：`.venv/Scripts/python.exe` 可用；`npm ci` 可完成；`bash scripts/local-ci-gate.sh` 可跑 | 双端 `/api/health` 版本记录 |
| **T0-6** | 复现存档：用 5 个交易日样本复现 `annual_return` 爆炸；用线上日志复现"周五未生成 T+1 持仓" | 复现脚本与截图存入 `docs/repro-v724/` |

> **T0-3 是 Gate**：若 DWH 无前复权开盘价或涨跌停/ST 字段，FR-2 的"一字板不可成交""T+1 开盘成交"需先补数据或按 PRD 风险表降级并显式标注，不得静默用不复权价。

---

## 2. M1（7.24.0）回测引擎统一与绩效口径 — FR-1

### 2.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.24.1** | 绩效函数复利化：`compute_period_metrics` 改为按净值复利计算 `total_return`；年化使用实际起止日期与有效交易日；新增 `sample_months / total_days / annual_return_reason` | `backend/backtest.py` | T0-6 |
| **T-7.24.2** | 统一入口：新增单一 `run_unified_backtest(...)`；`api/v1/backtest.py`、`api/v1/strategy_research.py`、`backtest_lab.py` 全部委托 | `backend/backtest.py`、`backend/api/v1/backtest.py`、`backend/api/v1/strategy_research.py`、`backend/backtest_lab.py` | T-7.24.1 |
| **T-7.24.3** | 退役随机模拟：删除 `BacktestEngine.run_backtest` 的随机收益分支；无真实面板时返回明确失败码，不再造数 | `backend/backtest.py` | T-7.24.2 |
| **T-7.24.4** | 统一结果契约：固定字段 `total_return / annual_return / max_drawdown / sharpe / win_rate / total_days / sample_months / engine_version / cost_model_version / adjust_mode / execution_mode / warnings[]` | 上述后端文件 + `backend/credibility_guard.py` | T-7.24.1 |
| **T-7.24.5** | 异常诊断：年化绝对值 >1000% 时附诊断码；样本 <18 个月时 `annual_return=null` 且 `warnings=["样本不足（<18个月）"]` | `backend/backtest.py`、`backend/credibility_guard.py` | T-7.24.4 |
| **T-7.24.6** | 历史记录口径化：experiments 保存 `engine_version/execution_mode/adjust_mode`；旧记录标记 `legacy=true`，只读归档，不与新结果混排 | `backend/backtest_history_store.py`、`backend/research_store.py` | T-7.24.4 |
| **T-7.24.7** | 前端展示：结果页展示口径徽标（T+1 开盘 / 前复权 / 成本版本）与 `warnings`；`annual_return=null` 显示"样本不足" | `frontend/js/backtest.js`、`frontend/js/components/research/view-part2.js` | T-7.24.4 |

### 2.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-724-1-1 | 5 个交易日样本 → `annual_return is None` 且 `warnings` 含"样本不足" | unit(py) | `tests/test_v724_backtest_metrics.py` |
| TC-724-1-2 | 已知净值序列 → `total_return = 期末/期初-1`（复利），非日收益算术和 | unit(py) | 同上 |
| TC-724-1-3 | 18 个月 + 360 交易日 → 年化与手工计算误差 <0.01% | unit(py) | 同上 |
| TC-724-1-4 | 三入口同参数 → 结果逐字段一致（对比统一契约字段） | api(py) | `tests/test_v724_backtest_unified.py` |
| TC-724-1-5 | 无真实面板 → 返回失败码，不含随机数、不写 experiments | unit(py) | 同上 |
| TC-724-1-6 | 结果字段含 `engine_version/cost_model_version/execution_mode/adjust_mode` | api(py) | 同上 |
| TC-724-1-7 | 旧记录 `legacy=true` 且不出现在默认列表首屏混排 | unit(py) | `tests/test_v724_backtest_history.py` |
| TC-724-1-8 | 前端渲染 `annual_return=null` → 文案"样本不足（<18个月）"，不显示 0% | unit(js) | `tests/v724_backtest_display.test.js` |

### 2.3 出口标准

- 任意入口不再产出 `+4.97e12%` 量级且无警告的结果。
- `annual_return` 的 null/数值分支均有测试覆盖。
- 负向校验：恢复旧算术和公式后 TC-724-1-2 必须变红。

---

## 3. M2（7.24.0）撮合层与交易约束 — FR-2

### 3.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.24.8** | 新增独立撮合器：目标权重 → 可成交权重 → 成交价 → 收益；策略不得直接乘收益 | 新增 `backend/backtest_execution.py` | M1 |
| **T-7.24.9** | T+1 成交：T 日收盘信号，T+1 交易日 09:30 前复权开盘价成交；收益自成交后起算 | `backend/backtest_execution.py` | T0-3 |
| **T-7.24.10** | 涨跌停/ST/一字板：主板 ±10%、双创 ±20%、ST ±5%；触及涨停不可买、跌停不可卖；一字板不可成交 | 同上 + `backend/stock_info.py` | T0-3 |
| **T-7.24.11** | 停牌与顺延：停牌不可交易；T+1 无法成交顺延至下一可交易开盘；连续 5 日放弃并记录原因 | 同上 | T-7.24.10 |
| **T-7.24.12** | 整手与资金：买入 100 股整数倍；688/689 单笔 ≥200 股；资金不足向下取整，余款留现金且 ≥0 | 同上 | T-7.24.8 |
| **T-7.24.13** | 成本扩展：佣金万 3（最低 5 元、双边）+ 印花税万 5（仅卖）+ 滑点 0.05% + 冲击 0.03% | `backend/cost_model.py`、`backend/backtest_execution.py` | T-7.24.8 |
| **T-7.24.14** | 复权统一：收益面板与成交价统一 `v_daily_qfq`；不复权数据禁止进入回测 | `backend/strategy_sdk/backtest.py`、`backend/data_parser.py` | T0-3 |
| **T-7.24.15** | 流动性拦截（P1 子项）：单票成交额占当日成交额 >5% 时截断并记录 | `backend/backtest_execution.py` | T-7.24.8 |
| **T-7.24.16** | 黄金样本对拍：固定输入 → 固定成交序列与净值，落 `tests/parity_golden/` | `tests/parity_golden/`、`tests/behavior_parity.py` | T-7.24.8~13 |

### 3.2 测试用例（对应 PRD 用例 A–F）

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-724-2-A | T+1 一字涨停全仓买入 → 0 成交、0 收益、原因可查 | unit(py) | `tests/test_v724_backtest_execution.py` |
| TC-724-2-B | T+1 停牌 → 顺延复牌开盘成交；无单日 −20% 跳变 | unit(py) | 同上 |
| TC-724-2-C | ST 股超出 ±5% 的价格被拒绝成交 | unit(py) | 同上 |
| TC-724-2-D | 10 万元买 3 只 100 元股 → 各 300 股，余款 ≥0 | unit(py) | 同上 |
| TC-724-2-E | 双边佣金（最低 5 元）+ 卖出印花税 + 滑点 + 冲击均被扣除 | unit(py) | `tests/test_v724_cost_model.py` |
| TC-724-2-F | 同日买入不可卖出 | unit(py) | `tests/test_v724_backtest_execution.py` |
| TC-724-2-G | 连续 5 日无法成交 → 放弃并写原因 | unit(py) | 同上 |
| TC-724-2-H | 不复权面板输入 → 拒绝并报错（不得静默回退） | unit(py) | `tests/test_v724_qfq_guard.py` |
| TC-724-2-I | 黄金样本净值与成交序列逐字节一致 | unit(py) | `tests/test_v724_parity.py` |

### 3.3 出口标准

- PRD 用例 A–F 100% 通过；用例 G–I 作为加固项通过。
- 对拍脚本可在本地一条命令执行。
- 负向校验：关闭涨跌停检查后用例 A/C 变红。

---

## 4. M3（7.24.0）未来函数门禁与最小样本 — FR-3 / FR-4

### 4.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.24.17** | 未来函数检查：T 日后数据截断/扰动，信号不得变化；接入策略注册与回测前置 | `backend/lookahead_guard.py`、`backend/strategy_governance.py` | M1 |
| **T-7.24.18** | 17 个内置策略批量检查报告（通过/不通过 + 定位信息） | `backend/strategy_governance.py`、`backend/api/v1/strategy_research.py` | T-7.24.17 |
| **T-7.24.19** | 未通过策略：禁止上线、禁止展示回测结论（列表标注"不可信"） | `backend/strategy_governance.py`、前端策略管理 | T-7.24.18 |
| **T-7.24.20** | 样本外强制：`backtest_oos` / `walkforward` 至少执行一种，结果写入 summary | `backend/backtest_oos.py`、`backend/walkforward.py` | M1 |
| **T-7.24.21** | `credibility_guard` 升级为阻断展示：样本不足/缺成本/无基准/未过未来函数 → 结论标不可信 | `backend/credibility_guard.py` | T-7.24.19 |
| **T-7.24.22** | 数据回补：行情与持仓补至 ≥18 个月；DWH 缺失时给出构建入口与进度 | `scripts/backfill_*.py`、`backend/dwh/`、`backend/api/v1/dwh.py` | T0-3 |
| **T-7.24.23** | 回测表单样本信息：实际生效区间 / 数据跨度 / 有效交易日 / 是否满足 18 个月 + 缺口修复入口 | `frontend/js/backtest.js` | T-7.24.22 |
| **T-7.24.24** | 不可信结论前端呈现：净值曲线与年化以"不可信/样本不足"样式展示 | `frontend/js/backtest.js`、`frontend/js/components/research/view-part2.js` | T-7.24.21 |

### 4.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-724-3-1 | 注入缺 `shift` 策略 → 门禁拦截并给出定位 | unit(py) | `tests/test_v724_lookahead.py` |
| TC-724-3-2 | 17 个内置策略全部产出报告（数量=17） | unit(py) | 同上 |
| TC-724-3-3 | 未通过策略的回测端点返回 `credible=false` | api(py) | `tests/test_v724_credibility_guard.py` |
| TC-724-3-4 | 样本内/外切分结果写入 summary，缺失时门禁告警 | unit(py) | `tests/test_v724_oos_enforce.py` |
| TC-724-3-5 | 默认区间 `sample_months ≥18` 且 `total_days ≥360`（数据可用时） | unit(py) | `tests/test_v724_sample_gate.py` |
| TC-724-3-6 | 数据缺口 → 表单显示缺口原因与修复入口 | unit(js) | `tests/v724_sample_banner.test.js` |
| TC-724-3-7 | 不可信结果在页面不以正常年化样式展示 | e2e | `tests/e2e/test_v724_credibility_ui.py` |

### 4.3 出口标准

- 17/17 策略报告可查；门禁对人为注入的坏策略 100% 拦截。
- 数据可用时默认回测满足 18 个月门槛；不可用时显式说明。

---

## 5. M4（7.24.0）收盘计算、次日生效与调度补跑 — FR-5

### 5.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.24.25** | 产物生效日：T 日收盘计算，落盘 `data/holdings/{T+1}`；信号日写入 meta | `backend/strategy_governance.py` | M1 |
| **T-7.24.26** | 读取兼容：日历/聚合器优先读生效日，兼容历史信号日目录 | `backend/data_parser.py`、`backend/views_aggregator.py`、`backend/scheduler/_helpers.py` | T-7.24.25 |
| **T-7.24.27** | 启动补跑：交易日已过计划时间且今日未执行 → 幂等补跑一次 | `backend/startup_guard.py`、`backend/scheduler/_core.py` | T-7.24.25 |
| **T-7.24.28** | 失败/0 行/错过告警：写调度历史 + 通知铃铛 | `backend/scheduler/_records.py`、`backend/notify.py` | T-7.24.27 |
| **T-7.24.29** | 日历空态三分类（非交易日/未生成/生成失败）+ "立即生成今日持仓" | `frontend/js/components/calendar-page.js`、`frontend/js/app-logic/calendar*.js` | T-7.24.26 |
| **T-7.24.30** | 迁移手册：历史目录只读兼容、新目录生效日；提供 dry-run 校验脚本 | `scripts/migrate_holdings_effective_date.py`（新增） | T-7.24.25 |

### 5.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-724-4-1 | 交易日 20:00 后触发 → 生成 T+1 目录且行数 >0 | unit(py) | `tests/test_v724_holdings_effective.py` |
| TC-724-4-2 | 同一日期重复触发两次 → 只有一个目录、无重复行（幂等） | unit(py) | 同上 |
| TC-724-4-3 | 停机跨过计划时间后启动 → 调度历史出现"补跑成功" | unit(py) | `tests/test_v724_scheduler_catchup.py` |
| TC-724-4-4 | 非交易日 → 不生成目录，日历提示"非交易日" | unit(py) | 同上 |
| TC-724-4-5 | 0 行产物 → 调度记失败并进入通知 | unit(py) | `tests/test_v724_scheduler_alerts.py` |
| TC-724-4-6 | 兼容读取旧"信号日"目录，日期展示不错位 | unit(py) | `tests/test_v724_holdings_compat.py` |
| TC-724-4-7 | 日历空态按钮可触发一次生成并刷新列表 | e2e | `tests/e2e/test_v724_calendar_empty.py` |

### 5.3 出口标准

- dev 环境真机验证：交易日 20:00 后 10 分钟内 `data/holdings/{T+1}` 存在且日历可选。
- 补跑记录与告警在 UI 可查。
- 出口即打 `v7.24.0`，走 GitLab 迭代门禁，不直接发布。

---

## 6. M5（7.25.0）行情时效与模拟数据治理 — FR-6

### 6.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.25.1** | 前端刷新状态机：交易时段 15–30 秒、午休/收盘各补刷、`visibilitychange` 立即刷新 | `frontend/js/app-logic/market.js` | — |
| **T-7.25.2** | 后端 TTL：收盘 15:05 起短 TTL 重试，确认 `trade_date==今日` 后转长 TTL | `backend/market_data.py`、`backend/market_cache.py` | — |
| **T-7.25.3** | 交易日判断统一走 `stock_calendar`，覆盖法定节假日 | `backend/market_data.py`、`backend/stock_calendar.py` | — |
| **T-7.25.4** | mock 治理：不写持久缓存；响应带 `is_mock=true`；前端显著标识 | `backend/market_data.py`、`frontend/js/app-logic/market.js` | T-7.25.2 |
| **T-7.25.5** | 页面展示"数据时间 / 下次刷新时间 / 数据源" | `frontend/js/app-logic/market.js`、`frontend/js/components/strategies/view-part1.js` | T-7.25.1 |
| **T-7.25.6** | 新增收盘/开盘前指数刷新调度任务并接入 freshness | `backend/scheduler/_core.py`、`backend/scheduler/_records.py` | T-7.25.2 |

### 6.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-725-1-1 | 交易时段 5 分钟内数据时间差 ≤30 秒（mock 时钟推进） | unit(js) | `tests/v725_market_refresh.test.js` |
| TC-725-1-2 | 非交易时段进入页面，15:05 后一个周期内拿到当日终盘 | unit(py) | `tests/test_v725_market_ttl.py` |
| TC-725-1-3 | 节假日不缓存到错误日期 | unit(py) | 同上 |
| TC-725-1-4 | 数据源全失败 → `is_mock=true` 且不写缓存 | unit(py) | `tests/test_v725_mock_guard.py` |
| TC-725-1-5 | 前端出现"模拟数据"标识，恢复后自动消失 | unit(js) | `tests/v725_mock_badge.test.js` |
| TC-725-1-6 | `visibilitychange` 回前台立即触发一次请求 | unit(js) | `tests/v725_market_refresh.test.js` |

---

## 7. M6（7.25.0）持仓组网：自选同步与总金额均分 — FR-7

### 7.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.25.7** | 持仓组网操作区（同步自选 / 重新均分 / 自动同步开关）+ 常驻摘要 | `frontend/js/components/ai/*`、`frontend/js/app-logic/*` | — |
| **T-7.25.8** | 差集同步 API：自选 − 组合 → 加入；只增不删 | `backend/api/v1/portfolio.py`、`backend/watch_groups.py` | — |
| **T-7.25.9** | 自动同步开关与差异提示（删除自选时提示仍在组合） | 同上 + 前端 | T-7.25.8 |
| **T-7.25.10** | 复用等权算法：总资金均分、100 股整手（科创 200）、尾差留现金、已有持仓保留成本价 | `backend/portfolio_plan.py` | — |
| **T-7.25.11** | 幂等：计划指纹，重复确认不重复加仓 | `backend/portfolio_plan.py`、`backend/api/v1/portfolio.py` | T-7.25.10 |
| **T-7.25.12** | 预览表：手数 × 100 × 现价 = 金额；摘要显示总资金/已投入/现金/标的数 | 前端持仓组网组件 | T-7.25.10 |

### 7.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-725-2-1 | 100 万 / 10 只 → 每只向下取整到 100 股，现金 ≥0 | unit(py) | `tests/test_v725_portfolio_sync.py` |
| TC-725-2-2 | 新增 1 只自选 → 同步后进入组合且满足整手 | unit(py) | 同上 |
| TC-725-2-3 | 删除自选 → 组合不变 + 差异提示 | unit(py) | 同上 |
| TC-725-2-4 | 重复确认建仓 → 持仓不翻倍（指纹命中） | unit(py) | 同上 |
| TC-725-2-5 | 688 标的单笔 ≥200 股 | unit(py) | 同上 |
| TC-725-2-6 | 页面摘要与预览金额自洽（前端计算与后端一致） | unit(js) | `tests/v725_portfolio_preview.test.js` |

---

## 8. M7（7.25.0）收盘后预计算与前端加载性能 — FR-8

### 8.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.25.13** | 预计算流水线（分批，已确认）：15:30 行情（大盘终值、日历日/周/月/年）→ 18:00 研究（共识 TopN、策略概览、择时矩阵）→ 20:00 策略（默认因子 IC/分层、形态基线） | 新增 `backend/precompute.py`、`backend/scheduler/_core.py` | M5 |
| **T-7.25.14** | 缓存与数据版本：每项写缓存 + 版本；实时接口命中新版即失效 | `backend/cache.py`、`backend/ttl_cache.py` | T-7.25.13 |
| **T-7.25.15** | `/api/precompute/status`：预计算时间 / 完成项 / 数据版本 | `backend/api/v1/system.py`（或 `views.py`） | T-7.25.14 |
| **T-7.25.16** | 前端：页面级懒加载 + 二级导航 hover 预取 + 缓存先渲染后刷新 | `frontend/js/app-logic/workspace.js`、`frontend/js/api*.js` | T-7.25.15 |
| **T-7.25.17** | 体积：`vendor-ep` 拆分 <500KB、首屏 JS −30%；`scripts/report_bundle_size.py` 扩展为预算门禁 | `frontend/vite.config.mjs`、`scripts/report_bundle_size.py` | — |
| **T-7.25.18** | 列表虚拟滚动统一 | `frontend/js/components/virtual-list.js`、`src/components/common/StockList.vue` | — |
| **T-7.25.19** | 页面角标："数据预计算于 …"；未完成时展示进行中 | 各页面头部组件 | T-7.25.15 |

### 8.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-725-3-1 | 预计算完成 → 概览/日历/策略概览命中缓存，P95 <300ms（本地基准） | perf | `tests/e2e/perf_smoke.py` |
| TC-725-3-2 | `status` 返回完成项与数据版本 | api(py) | `tests/test_v725_precompute.py` |
| TC-725-3-3 | 数据版本变化 → 旧缓存失效 | unit(py) | 同上 |
| TC-725-3-4 | 首屏 JS 体积达标；超预算构建失败 | build | `scripts/report_bundle_size.py` |
| TC-725-3-5 | 弱网/慢接口 → 先出现骨架或缓存数据，无整页空白 | e2e | `tests/e2e/test_v725_skeleton.py` |

---

## 9. M8（7.25.0）策略研究界面统一 — FR-9

### 9.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.25.20** | 研究域统一骨架：页面头 → 筛选工具条 → 内容面板（统一 panel 头/空态/错误态） | `frontend/js/components/research/*`、`frontend/css/components.css` | — |
| **T-7.25.21** | 8 个二级页迁移到统一骨架；列表优先 `el-table`，移除新增原生 `<table>` | 同上 | T-7.25.20 |
| **T-7.25.22** | 清理一次性别名类；内联样式收敛 ≤5 且只用主题派生色 | 同上 | T-7.25.21 |
| **T-7.25.23** | 样式门禁：禁止内联色值、禁止新增 `bt-*` 原生表、限制工具类别名数量 | `scripts/ci/check_research_style.py`（新增）或 `tests/color_gate.py` 扩展 | T-7.25.22 |

### 9.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-725-4-1 | 8 页容器圆角/内边距/标题字号一致（令牌断言） | unit(py 源码) | `tests/test_v725_research_style.py` |
| TC-725-4-2 | 研究域内联 `style` ≤5，且无硬编码 hex | unit(py 源码) | 同上 |
| TC-725-4-3 | 新增原生 `<table>` 被门禁拦截 | unit(py) | 同上 |
| TC-725-4-4 | 页面视觉对比截图一致 | e2e | `tests/e2e/visual_regression.py` |

---

## 10. M9（7.25.0）工程流程：GitLab 迭代、GitHub 发布 — FR-10

### 10.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.25.24** | GitLab 迭代门禁：功能分支/MR 与 master 合并前跑 lint/单测/覆盖率/对拍/PIT/性能/前端构建/体积 | `.gitlab-ci.yml`、`scripts/gitlab/*` | 批次一 |
| **T-7.25.25** | GitHub Actions 收敛：仅 `v*` tag 触发打包/签名/制品/发布说明，日常 push 不触发发布 | `.github/workflows/ci.yml`、`.github/workflows/docker-publish.yml` | — |
| **T-7.25.26** | 本地一键预检 `verify`：ruff + 单测 + 前端构建 + CSS 重建 + 关键门禁 | 新增 `scripts/verify.ps1` / `scripts/verify.sh` | — |
| **T-7.25.27** | 版本单一来源：`APP_VERSION` 注入前端与制品名；CI 校验 `main_new.py` / `package.json` / tag 一致 | `backend/main_new.py`、`frontend/package.json`、CI 脚本 | — |
| **T-7.25.28** | GitLab manual deploy：制品解包、排除 `.env/data/.venv`、迁移 + 健康检查 + 失败回滚 | `.gitlab-ci.yml`、`scripts/deploy/*`、`scripts/rollback.sh` | T-7.25.24 |

### 10.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-725-5-1 | `verify` 一条命令跑完并在失败时非零退出 | shell | 本地执行记录 |
| TC-725-5-2 | 日常 push 不触发 GitHub 发布工作流（tag 才触发） | yaml 断言 | `tests/test_v725_ci_config.py` |
| TC-725-5-3 | 三处版本号不一致 → 门禁失败 | unit(py) | 同上 |
| TC-725-5-4 | 部署制品不包含 `.env/data/.venv` | shell | `scripts/deploy` 自检 |
| TC-725-5-5 | 回滚脚本可恢复到上一制品 | shell | `scripts/rollback.sh --dry-run` |

---

## 11. M10（7.25.0）回测结果可删除 — FR-16

### 11.1 任务分解

| ID | 任务 | 主要文件 | 依赖 |
|---|---|---|---|
| **T-7.25.29** | 批量删除 API：`POST /api/strategies/research-history/batch-delete`，单次 ≤50；返回 `{deleted, not_found}` | `backend/api/v1/strategy_research_history.py`、`backend/research_store.py` | — |
| **T-7.25.30** | 删除审计：单条/批量均写 `audit_log`（操作者、入口、被删摘要、结果） | `backend/audit_log.py`、上述 API | T-7.25.29 |
| **T-7.25.31** | 回测工作台删除入口：历史列表行内删除 + 批量勾选 | `frontend/js/backtest.js`、历史列表组件 | T-7.25.29 |
| **T-7.25.32** | 策略管理回测记录删除入口 | `frontend/js/components/strategies/*` | T-7.25.29 |
| **T-7.25.33** | 研究历史页升级：批量选择 + 二次确认（含条数与摘要）+ 失败逐条提示 | `frontend/js/components/research/logic-history.js`、`view-part2.js` | T-7.25.29 |
| **T-7.25.34** | 一致性：删除后列表/条数/概览/对比选择器同步；详情/对比页引用已删记录时提示并返回 | 前端三入口 + 概览接口 | T-7.25.31~33 |
| **T-7.25.35** | legacy 记录处理：`backtest_history.json` 只读记录标"旧版记录"，不提供删除入口 | `backend/backtest_history_store.py`、前端 | T-7.25.6 |

### 11.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-725-6-1 | 删除 1 条 → 列表减少 1，experiments 中不存在 | api(py) | `tests/test_v725_history_delete.py` |
| TC-725-6-2 | 批量删除 3 条 → `deleted=3`，审计新增 3 条（或 1 条含 3 id） | api(py) | 同上 |
| TC-725-6-3 | 重复删除同一 id → 404 / `not_found`，不 500 | api(py) | 同上 |
| TC-725-6-4 | 游客调用删除 → 401/403 | api(py) | 同上 |
| TC-725-6-5 | 删除后策略定义、持仓、日历不受影响 | unit(py) | 同上 |
| TC-725-6-6 | 取消确认 → 不发请求、无审计 | unit(js) | `tests/v725_history_delete_ui.test.js` |
| TC-725-6-7 | 批量上限 51 条 → 400 | api(py) | `tests/test_v725_history_delete.py` |
| TC-725-6-8 | legacy 记录无删除按钮 | unit(js) | `tests/v725_history_delete_ui.test.js` |
| TC-725-6-9 | 删除后概览统计同步刷新 | e2e | `tests/e2e/test_v725_history_delete.py` |

### 11.3 出口标准

- 三入口单条/批量删除可用，审计可查，experiments 单源。
- 负向校验：移除审计写入后 TC-725-6-2 变红。

---

## 12. M11（7.26.0）视觉与配置精修 — FR-11 ~ FR-15

### 12.1 任务分解

| ID | 任务 | 主要文件 | FR |
|---|---|---|---|
| **T-7.26.1** | 列宽令牌：策略区上限 2×64–72px，三档密度只改字号/gap | `frontend/css/tokens.css` | FR-11 |
| **T-7.26.2** | 股票列表策略区收窄；1 个策略保留 1 个提示格，≥2 不再渲染空框 | `frontend/src/components/common/StockList.vue`、`frontend/css/components.css` | FR-11 |
| **T-7.26.3** | 策略列表/管理页共用同一列宽令牌 | `frontend/js/components/strategies/*`、`frontend/css/components.css` | FR-11 |
| **T-7.26.4** | 信号四档令牌：买/加=浅红、卖/减=浅绿、持有=浅金、观望=灰；覆盖明暗主题 | `frontend/css/tokens.css`、`frontend/css/themes-pages.css` | FR-12 |
| **T-7.26.5** | 择时雷达改用信号令牌，移除 EP `danger/success` 映射 | `frontend/js/components/overlay-radar.js` | FR-12 |
| **T-7.26.6** | 形态匹配候选池来源：自选/日历新增/手工/全市场 TopN | `frontend/js/components/pattern-lab.js`、`backend/api/v1/pattern.py` | FR-13 |
| **T-7.26.7** | 自选一键填充 + 异步进度 + 高分加入自选/组合 | 同上 | FR-13 |
| **T-7.26.8** | 主题色收敛 6 个 + legacy 映射；用户管理不再出现 8 个旧主题 | `frontend/css/themes*.css`、`frontend/js/components/system/*`、`backend/user_manager.py` | FR-14 |
| **T-7.26.9** | 设置页分组锚点 + 两列表单 + 折叠 + 分组独立保存 | `frontend/js/components/system/*`、`frontend/js/app-logic/settings*.js` | FR-14 |
| **T-7.26.10** | AI 模型总览表 + 抽屉编辑 + 拖拽降级顺序 | `frontend/js/components/ai/view-part*.js`、`backend/api/v1/ai.py` | FR-15 |
| **T-7.26.11** | 数据源统一表格 + 全部测试 + 优先级与失败展开 | `frontend/js/components/system/*`、`backend/api/v1/system.py` | FR-15 |

### 12.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-726-1-1 | 396px 与 1600px 下策略区宽度上限一致 | unit(css)/e2e | `tests/e2e/test_v726_stocklist_width.py` |
| TC-726-1-2 | 1/2/3/4 个策略时行内容起点不变 | unit(js) | `tests/v726_stocklist_grid.test.js` |
| TC-726-2-1 | 6 种动作在矩阵/当前信号卡/图例颜色一致 | unit(js) | `tests/v726_signal_tokens.test.js` |
| TC-726-2-2 | 明暗主题对比度 ≥4.5:1 | unit(py) | `tests/test_v726_contrast.py` |
| TC-726-3-1 | 选择"自选股"→ 候选数 = 自选数 | unit(py) | `tests/test_v726_pattern_watchlist.py` |
| TC-726-4-1 | 主题色仅 6 个；旧主题名不再出现在用户管理 | unit(js) | `tests/v726_theme_presets.test.js` |
| TC-726-4-2 | 设置页首屏高度下降 ≥30% | e2e | `tests/e2e/test_v726_settings_compact.py` |
| TC-726-5-1 | 5 个厂商一屏可见；拖拽后降级顺序持久化 | e2e | `tests/e2e/test_v726_ai_table.py` |
| TC-726-5-2 | 数据源"全部测试"返回逐项结果 | unit(py) | `tests/test_v726_datasource_test.py` |

> **测试口径调整（v7.26 收尾）**：以下 4 条原计划走浏览器 e2e（需常驻 dev server + Playwright），
> 本轮改为「等价静态/单元门禁」，不再新增 `tests/e2e/test_v726_*.py`：
>
> | 原 e2e | 替代门禁 | 覆盖点 |
> |---|---|---|
> | TC-725-6-9 删除后概览刷新 | `tests/v725_history_delete_ui.test.js` | 删除成功后调用 `loadSmBtRecords` / `loadResearchHistory` |
> | TC-726-1-1 策略区宽度上限 | `tests/v726_stocklist_grid.test.js` | 列宽令牌 + 栅格上限（396/1600 同源） |
> | TC-726-4-2 设置首屏 −30% | `tests/test_v726_config_tables.py::test_settings_compact_group_layout` | 左锚点 + 两列表单 + 分组折叠 |
> | TC-726-5-1 5 厂商一屏 + 拖拽持久化 | `tests/test_v726_config_tables.py::test_ai_overview_table_columns_and_drag_order` | 表列/顺位/拖拽 + `saveAiVendors` 落库 |

---

## 13. 测试策略总表

| 层 | 工具 | 覆盖对象 | 适用里程碑 |
|---|---|---|---|
| 后端单元 | pytest | 绩效公式、撮合约束、成本、样本门槛、删除/审计、预计算缓存 | M1~M4、M7、M10 |
| 接口 | pytest + FastAPI TestClient | 统一回测契约、history 删除、portfolio 同步、precompute status | M1、M6、M7、M10 |
| 前端单元 | Node 直跑 `.test.js` | 刷新状态机、信号令牌、列宽、删除确认、样本提示 | M1、M5、M10、M11 |
| 源码守卫 | pytest 读源码断言 | 未来函数接入、研究域内联样式、CI 配置、legacy 无删除入口 | M3、M8、M9、M10 |
| 对拍 | 黄金样本 | 撮合成交序列与净值 | M2 |
| e2e | Playwright（Chromium） | 日历空态、不可信展示、删除闭环、设置紧凑、AI 表格 | M3、M4、M10、M11 |
| 性能 | `tests/e2e/perf_smoke.py` | 缓存命中 P95、首屏体积 | M7 |

### 13.1 关键旅程（每个批次出口必跑）

1. 收盘后 → 日历出现次日持仓 → 打开个股详情 → 再回日历结果不丢。
2. 回测工作台跑默认策略 → 年化合理 → 口径徽标可见 → 删除该条 → 列表与概览同步。
3. 新增自选 → 持仓组网"同步自选" → 金额均分且整手 → 重复确认不翻倍。
4. 断开数据源 → 大盘页出现"模拟数据"标识 → 恢复后自动转真实。
5. 研究域 8 页切换 → 骨架一致 → 无原生表新增。
6. 设置页 → 主题仅 6 个 → 修改主题不写 AI/数据源配置。

---

## 14. 回归范围与执行命令

### 14.1 每次提交（本地）

```powershell
# 1) lint
.venv\Scripts\python.exe -m ruff check backend/ --select=E,F,W --ignore=E501

# 2) 全量（不含 e2e）
.venv\Scripts\python.exe -m pytest tests/ -q -m "not e2e"

# 3) 覆盖率门禁
.venv\Scripts\python.exe -m pytest tests/ -q -m "not e2e" --cov=backend --cov-fail-under=40

# 4) 专项（按里程碑追加）
.venv\Scripts\python.exe -m pytest tests/test_v724_backtest_execution.py -q
.venv\Scripts\python.exe -m pytest tests/test_v725_history_delete.py -q
```

### 14.2 每个批次出口

```powershell
# 前端构建（CSS 合并 + Vite）
cd frontend
npm run build
cd ..

# 体积预算
.venv\Scripts\python.exe scripts/report_bundle_size.py --check

# 本地总门禁（Git Bash）
bash scripts/local-ci-gate.sh
```

### 14.3 门禁口径

| 门禁 | 通过标准 |
|---|---|
| unit | `0 failed`，不得低于 v7.23 基线 |
| coverage | ≥40%，新增核心模块（撮合/预计算/删除）单文件 ≥70% |
| split-parity / rbac / pit / perf / version | 保持通过 |
| 新增专项 | 本计划 §2~§12 中标注"新增"者全部通过 |
| 负向校验 | 每个修复类任务均有"回退即红"证据 |

---

## 15. 验收清单（对应 PRD FR）

| FR | 验收要点 | 验证方式 |
|---|---|---|
| FR-1 | 三入口一致；<18 个月不出年化；无警告不得出现 >1000% | TC-724-1-1~8 |
| FR-2 | 用例 A–F 全过；成本四项；T+1 限制 | TC-724-2-A~F |
| FR-3 | 17 策略报告；坏策略被拦截；不可信阻断展示 | TC-724-3-1~4 |
| FR-4 | 默认 ≥18 个月；缺口可见可修复 | TC-724-3-5~6 |
| FR-5 | 20:00 后产出 T+1；幂等；补跑留痕；空态三分类 | TC-724-4-1~7 |
| FR-6 | 盘中 ≤30 秒；当日终盘确认；mock 标识 | TC-725-1-1~6 |
| FR-7 | 一键同步、均分整手、只增不删、幂等 | TC-725-2-1~6 |
| FR-8 | 缓存 P95 <300ms；体积达标；角标可见 | TC-725-3-1~5 |
| FR-9 | 8 页同骨架；内联 ≤5；门禁生效 | TC-725-4-1~4 |
| FR-10 | 本地 verify；GitLab 迭代；GitHub tag 发布；版本一致 | TC-725-5-1~5 |
| FR-11 | 策略区宽度有上限；两处同令牌 | TC-726-1-1~2 |
| FR-12 | 四档信号色一致；对比度达标 | TC-726-2-1~2 |
| FR-13 | 自选可直接匹配；进度与失败可见 | TC-726-3-1 |
| FR-14 | 主题 6 个；设置首屏 −30% | TC-726-4-1~2 |
| FR-15 | 一屏可见 5 厂商；优先级可调；全测可用 | TC-726-5-1~2 |
| FR-16 | 三入口单条/批量删除；审计；experiments 单源 | TC-725-6-1~9 |

---

## 16. 数据与口径迁移手册

### 16.1 持仓目录（信号日 → 生效日）

```powershell
# 1) 备份
Copy-Item data\holdings backups\v7.24.0-pre\holdings -Recurse

# 2) dry-run：列出将被"重新解释"的历史目录
.venv\Scripts\python.exe scripts\migrate_holdings_effective_date.py --dry-run

# 3) 人工核对（确认无整月缺失、无非交易日目录）

# 4) 执行（只写 meta，不移动/不删除历史文件）
.venv\Scripts\python.exe scripts\migrate_holdings_effective_date.py --apply
```

- 读取层兼容两种目录；迁移脚本**零删除**，只补 `effective_date/signal_date` 元信息。
- 幂等：重复 `--apply` 不重复写。

### 16.2 回测历史（旧口径归档）

- 旧记录 `legacy=true`，默认列表折叠为"旧版记录（只读）"。
- 不做数据重算；需要新口径时重新回测生成新记录。
- `data/backtest_history.json` 不再写入，只读兼容。

### 16.3 行情回补

```powershell
.venv\Scripts\python.exe scripts\backfill_backtest_metrics.py --dry-run
.venv\Scripts\python.exe -m pytest tests/test_v724_sample_gate.py -q
```

- 回补前确认 DWH 磁盘余量；回补任务分批执行、可中断续跑。

---

## 17. 风险与回滚

| 风险 | 触发条件 | 预案 |
|---|---|---|
| 18 个月数据不足 | DWH 覆盖不够 | 按 FR-1 输出 `annual_return=null`；表单给缺口入口；不得伪造数据 |
| 前复权开盘价缺失 | 数据源只有不复权 | 按复权因子换算；仍缺失则该笔不成交并记录，禁止用不复权价 |
| 持仓目录口径迁移错位 | 新旧目录混读 | 先 dry-run + 备份；读取层双兼容；异常时恢复 `backups/v7.24.0-pre/holdings` |
| 补跑重复执行 | 多次启动/多实例 | 计划指纹 + 当日标记；重复触发直接跳过 |
| 预计算拖慢收盘任务 | 批量过大 | 分批（15:30 行情 / 18:00 研究 / 20:00 策略）+ 单项超时 + 失败不影响主任务 |
| 删除误操作 | 批量选错 | 二次确认 + 上限 50 + 审计；数据可从备份恢复（硬删除无回收站） |
| 主题色收敛影响偏好 | 用户旧 hue | 旧 hue → 最近预设映射；用户管理只读展示 |
| 前端体积反弹 | 新依赖引入 | 体积预算门禁阻断；拆分 vendor-ep |
| 双流水线口径漂移 | 两边都跑全量 | GitLab=迭代、GitHub=tag 发布；日常 push 不触发发布 |
| CSS 漏重建 | 只改源文件 | 本地 verify + CI 哈希校验强制 `build_css` |

### 17.1 代码回滚

```powershell
git revert <merge-commit>   # 或切回 v7.23.0 tag
cd frontend; npm run build
```

### 17.2 数据回滚

```powershell
Copy-Item backups\v7.24.0-pre\app.db data\app.db -Force
Copy-Item backups\v7.24.0-pre\holdings data\holdings -Recurse -Force
```

### 17.3 发布回滚

| 场景 | 动作 |
|---|---|
| 仅前端问题 | 切回上一 `dist`（保留旧 hash 产物） |
| 后端/口径问题 | `git revert` + 重启 dev；ops 用 GitLab 上一制品回滚 |
| 数据订正错误 | 恢复备份 + 重启；重跑 dry-run 校验 |

---

## 18. 提交拆分与版本治理

| 提交 | 内容 |
|---|---|
| `feat(7.24.0): FR-1 绩效复利化+统一入口+结果契约` | M1 |
| `feat(7.24.0): FR-2 撮合层+T+1开盘+涨跌停/停牌/整手/成本` | M2 |
| `feat(7.24.0): FR-3/4 未来函数门禁+样本门槛+数据回补` | M3 |
| `feat(7.24.0): FR-5 生效日产物+启动补跑+告警` | M4 |
| `release(7.24.0): 版本号+文档+门禁` | M4 出口 |
| `feat(7.25.0): FR-6 行情刷新状态机+mock治理` | M5 |
| `feat(7.25.0): FR-7 持仓组网自选同步+均分` | M6 |
| `feat(7.25.0): FR-8 收盘预计算+前端加载优化` | M7 |
| `feat(7.25.0): FR-9 研究域统一骨架+样式门禁` | M8 |
| `chore(7.25.0): FR-10 GitLab迭代/GitHub发布/verify` | M9 |
| `feat(7.25.0): FR-16 回测结果删除+批量+审计` | M10 |
| `release(7.25.0): 版本号+文档+门禁` | M10 出口 |
| `feat(7.26.0): FR-11/12 策略区收窄+信号配色` | M11 前半 |
| `feat(7.26.0): FR-13/14/15 形态自选+设置紧凑+配置表格化` | M11 后半 |
| `release(7.26.0): 版本号+文档+发布` | 批次三出口 |

**规范**：Conventional Commits；`docs/` 变更不触发 CI；版本号只改 `APP_VERSION` 与 `package.json` 并按 FR-10 校验三处一致。

---

## 19. 启动顺序（批准后执行，逐步回报）

1. ☑ T0-1~T0-6 完成，输出基线与数据核验结论 → **回报后再动代码**
2. ☑ M1 + M2（回测可信核心）→ 跑通 PRD 用例 A–F → 回报
3. ☑ M3 + M4（门禁、样本、补跑）→ dev 真机验证次日持仓 → 回报
4. ☑ 打 `v7.24.0`，GitLab 迭代门禁通过 → 回报（v7.24~v7.26 合并交付，统一打 `v7.26.0`）
5. ☑ M5 + M6 + M7 → 行情时效与预计算实测 → 回报
6. ☑ M8 + M9 + M10（含 FR-16 删除）→ 回报
7. ☑ 打 `v7.25.0`，GitLab 门禁通过 → 回报（同上，合并交付）
8. ☑ M11（FR-11~FR-15）→ 视觉与配置验收 → 回报
9. ☐ 打 `v7.26.0` tag → GitHub Actions 正式发布流水线 → 回报

> **红线**：不跳过数据备份；不以 mock 数据充当回测结果；不在未过未来函数检查时展示结论；不在样本不足时输出年化；不在前端未重建时提交；不在未获批准时进入下一批。
