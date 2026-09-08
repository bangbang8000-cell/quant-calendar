# 量化选股日历 V5 系列测试计划（TEST-PLAN 5.0 - 5.9）

- **文档版本**：v1.0（正式版）
- **日期**：2026-09-01
- **产品基线**：v4.9.5（1124 用例 / 62 文件）
- **配套**：PRD-v5.0.md | DEV-PLAN-v5.0.md | V5-ASSESSMENT.md

---

## 0. 测试策略总览

### 0.1 测试金字塔（V5 目标形态）

| 层 | 现状 | V5 目标 | 执行 |
|---|---|---|---|
| 单元（纯函数/模块） | 主体 | 保持 + 新模块全量覆盖 | pytest，随开发 |
| 集成（DB/API/数据源） | 主体 | 保持 + DataPortal/任务队列/通知中心集成 | pytest，随开发 |
| 契约（OpenAPI↔前端/前后端字段） | 几乎为零 | 5.9 建立契约测试，5.8 API v3 同步守护 | pytest + jsonschema |
| 属性（property-based） | 为零 | 5.9 关键模块（成本模型/风控指标/迁移） | hypothesis |
| 可靠性（故障注入） | 薄弱 | 5.0 建立 reliability suite 并入 CI 独立 job | pytest 自定义 fixture |
| e2e（视觉/移动/链路） | 2 个截图类 continue-on-error | 5.6/5.5 扩展，关键链路改为阻塞或人工验收 | playwright |
| 性能 | 宽松阈值 | 5.7 纳入 CI 门禁（阈值收紧） | pytest-benchmark 风格 |

### 0.2 环境与执行

- 本机 dev 用系统 python3（3.13，与 CI 一致）；单元/集成全量 + e2e 分开跑。
- 命令基线：
  - `python3 -m ruff check backend/ --select=E,F,W --ignore=E501`
  - `python3 -m pytest tests/ -v --tb=short --cov=backend --cov-report=term --cov-fail-under=40 -m "not e2e"`
  - 模块门禁：merrill/factor_ic/fact_check/eval_track ≥70%；data_sources/market_review/event_alert ≥60%
  - e2e：`python3 -m pytest tests/e2e -m e2e`
- 隔离纪律：tests/conftest.py 的 patch_data_dir 重定向 DB；新测试一律隔离（EXTERNAL_DATA_DIR 陷阱守护延续）。

### 0.3 门禁增量原则

- 每个 V5 版本新增自己的门禁（下表），**不得放宽既有门禁**。
- 新模块（reliability/data_quality/risk/rules/notify/events/jobs/rbac/migrations）纳入对应模块覆盖门禁（目标 ≥70%）。
- 版本纪律 gate（tag ↔ APP_VERSION）延续；锁文件防漂移延续。

---

## 1. V5.0.0 稳定性与数据可靠基座 —— 测试计划 ✅ 已完成 (tag v5.0.0, 2026-09-01)

### 1.1 新增测试资产（目标 +90 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_reliability_freshness.py | 新鲜度模型/过期判定/告警触发 | ~20 |
| tests/test_reliability_heal.py | 自愈动作注册/幂等/恢复后留痕 | ~20 |
| tests/test_reliability_selfcheck.py | 启动自检（缺依赖/缺目录/DB 损坏/缺配置） | ~15 |
| tests/test_reliability_faults.py | **故障注入套件**：三源全挂/DB 只读/持仓缺失/日历空/时间回拨 | ~25 |
| tests/test_reliability_atomic.py | 原子写/并发写/文件锁（并发写入无脏读） | ~10 |

### 1.2 专项验证
- 故障注入后：健康面板状态正确、告警送达（飞书 mock）、自愈日志完整。
- 时间回拨（时钟偏移）下调度与新鲜度不误判。

### 1.3 回归范围
调度器/scheduler、data_parser、strategy_execution、health_check 相关既有用例全量 + e2e 冒烟。

### 1.4 门禁
reliability 模块覆盖 ≥70%（门禁测试集新增 test_reliability_*.py）+ 既有全量绿 + 冒烟 0 pageerror。

---

## 2. V5.0.1 数据中台与准确性 —— 测试计划 ✅ 已完成 (tag v5.0.1, 2026-09-01)

### 2.1 新增测试资产（目标 +110 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_data_portal2.py | 统一取数/缓存/限流/重试/口径（FakeSource 注入） | ~30 |
| tests/test_data_quality.py | 缺数/异常值/复权一致/停牌/交易日对齐，质量分计算 | ~30 |
| tests/test_pit_no_lookahead.py | **PIT 断言四路径**：评估/回测/因子/日历 end<=as_of | ~20 |
| tests/test_data_dict.py | 字典完整性/引用一致（字段口径单点维护） | ~10 |
| tests/test_survivorship.py | 退市/改名股票纳入历史 | ~10 |
| tests/test_data_lineage.py | 批次号/刷新审计/可追溯 | ~10 |

### 2.2 专项验证
- 人为注入缺数/异常值 → 质量分下降 → 告警触发（与 5.0 联动）。
- DataPortal 2.0 与旧路径输出一致性对拍（同一数据源双路径逐字段比对）。

### 2.3 门禁
data_portal2/data_quality ≥70%；PIT 测试为**强制门禁**（fail 即红，独立 job）。

---

## 3. V5.0.2 专业回测与研究台 —— 测试计划 ✅ 已完成 (tag v5.0.2, 2026-09-01)

### 3.1 新增测试资产（目标 +100 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_cost_model.py | 印花税/佣金/滑点/冲击成本数学正确性 + **成本敏感度** | ~25 |
| tests/test_backtest_benchmark.py | 基准线/超额收益/IR 计算与对齐 | ~20 |
| tests/test_walkforward.py | 样本内/外划分、滚动窗口、无前视（PIT 联动） | ~25 |
| tests/test_param_stability.py | SENSITIVITY_SPREAD_RATIO 过拟合诊断 + 参数高原 | ~15 |
| tests/test_attribution.py | 行业/因子归因瀑布数据正确性 | ~15 |

### 3.2 专项验证
- 与 PTrade 模板对拍（加印花税后收益合理下降）。
- 同一策略样本外表现不应显著依赖种子/窗口起点（稳定性断言）。

### 3.3 门禁
backtest/walkforward ≥70%；成本敏感度与样本外指标进入回测门禁。

---

## 4. V5.0.3 风险与组合管理 —— 测试计划 ✅ 已完成 (tag v5.0.3, 2026-09-01)

### 4.1 新增测试资产（目标 +90 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_risk_metrics.py | 波动/VaR(95,99)/回撤/夏普/Calmar/Beta **与独立计算对拍** | ~30 |
| tests/test_position_sizing.py | Kelly 修正/风险平价/上限约束，边界（0 仓位/全仓） | ~25 |
| tests/test_risk_rules.py | 集中度/止损止盈/回撤熔断触发与动作 | ~25 |
| tests/test_risk_events.py | 风险预警事件进入事件总线（5.4 前置） | ~10 |

### 4.2 专项验证
- VaR 用历史模拟法/参数法两种实现交叉核对。
- 规则引擎边界（刚好触线/未触线/已禁用）逐一覆盖。

### 4.3 门禁
risk/rules ≥70%。

---

## 5. V5.0.4 实时行情与事件通知中心 —— 测试计划 ✅ 已完成 (tag v5.0.4, 2026-09-01)

### 5.1 新增测试资产（目标 +100 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_notify_channels.py | 各通道适配器（FakeChannel 验证 send 契约）+ 失败重试/去重 | ~30 |
| tests/test_event_engine.py | 事件→订阅→通道闭环、事件去重/乱序 | ~25 |
| tests/test_alert_rules.py | 自定义预警条件命中/未命中边界 | ~20 |
| tests/test_ws_v2.py | 订阅管理/增量推送/心跳/断线重连/多客户端 | ~25 |

### 5.2 专项验证
- 一个事件多通道投递 + 单通道故障不影响其他通道。
- WS 断线→重连→不重复推送（时序断言）。

### 5.3 门禁
notify/events ≥70%；既有 feishu/webhook 兼容测试全绿。

---

## 6. V5.0.5 报表中心与可视化 —— 测试计划

### 6.1 新增测试资产（目标 +70 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_report_templates.py | 区块编排/渲染快照（数据源 mock） | ✅ 20 |
| tests/test_report_export.py | PDF/Excel 导出结构校验（可打开/含关键数据） | ✅ 16 |
| tests/test_report_subscribe.py | 定时生成 + 通知中心投递闭环 | ✅ 15 |
| tests/test_chart_tokens.py | 图表语义配色令牌化/暗色联动（视觉回归 + 令牌门禁） | ✅ 10 |
| tests/test_today_highlights.py | 今日要点聚合（mock providers, 与各模块 API 一致） | ✅ 9 |

> V5.0.5 实测新增 **70 用例**（合计，含既有 20 模板例）。快照 hash 变更即红 ✅；今日要点与 report_center 各区块 API 同源一致 ✅。

### 6.3 门禁
report 模块 ≥70%（实测 **92.33%**，CI ci.yml 已加门禁）；视觉回归截图存档双主题（dark-pro/亮色令牌门禁 test_chart_tokens ✅）。

---

## 7. V5.0.6 用户体验与引导 —— 测试计划

### 7.1 新增测试资产（目标 +80 用例）

| 测试文件 | 覆盖 | 用例数 | 状态 |
|---|---|---|---|
| tests/test_onboarding.py | 引导任务状态机/进度持久化/跨设备同步 | ~20 | ✅ 21 |
| tests/test_empty_error_states.py | 空态/错误态文案与重试（i18n 5 语抽查） | ~20 | ✅ 20 |
| tests/test_command_panel.py | 命令注册/触发/快捷键映射唯一性 | ~20 | ✅ +16（共 29） |
| tests/test_accessibility2.py | 焦点管理/ARIA/键盘全程可操作（扩展既有 test_accessibility） | ~15 | ✅ 15 |
| tests/test_density_pref.py | 信息密度切换持久化 | ~5 | ✅ 8 |

**合计新增 80 用例达标（21+20+16+15+8=80）。**

### 7.2 专项验证
- e2e：新用户按引导 5 步走完（playwright 链路）。✅ 覆盖层 role=dialog/aria-modal/键盘按钮 + 持久化解析损坏降级已测（node 层）；浏览器 e2e 环境受限不作门禁。
- 前端冒烟 0 pageerror 为金标准延续。✅ V5.0.6 前端构建 + 一致性/令牌门禁全绿。

### 7.3 门禁
WCAG/令牌门禁扩展 + 引导链路 e2e（阻塞或人工验收）。✅ test_accessibility2 含 WCAG AA 对比度（亮/暗 ≥4.5）+ :focus-visible + aria-live；令牌/类门禁（test_frontend_consistency/test_tokens_defined/test_tokens_no_hardcode）全绿。

---

## 8. V5.0.7 性能与规模化 —— 测试计划

### 8.1 新增测试资产（目标 +70 用例）

| 测试文件 | 覆盖 | 用例数 | 状态 |
|---|---|---|---|
| tests/test_cache2.py | 两级缓存命中/失效/数据版本联动（5.1 血缘） | ~25 | ✅ 21 |
| tests/test_jobs_queue.py | 任务提交/进度/取消/失败重试/结果持久化 + API | ~30 | ✅ 23 |
| tests/test_jobs_integration.py | 4 类批量任务接入队列（mock 昂贵业务） | ~10 | ✅ 9 |
| tests/test_downsample.py | 分块 + LTTB 降采样 + 年视图基准守护 | ~20 | ✅ 21 |
| tests/test_perf_gates.py | 10 万行渲染比例/延迟基准 + CI 门禁断言 | ~15 | ✅ 12 |

**合计新增 86 用例达标（21+23+9+21+12=86，目标 +70）。** 注：既有 tests/test_cache.py（前端 core.js 缓存）与 tests/test_performance.py（v3.17.9 图表降采样）保留，后端两级缓存用 test_cache2.py。

### 8.2 专项验证
- 批量 50 只评估提交后台任务：事件循环不阻塞（提交 50 任务 <1s 计时断言）✅。
- 全市场回测/因子在阈值内完成（性能基准门禁）：10 万点 LTTB <500ms、10 万行 sliceVisible 50 次 <20ms ✅。

### 8.3 门禁
jobs/cache/downsample ≥70%（实测 94.3%）✅；性能门禁**阻塞**（退化即红，不 continue-on-error）✅ 已入 ci.yml。

---

## 9. V5.0.8 多用户协作与开放平台 2.0 —— 测试计划 ✅ 已完成 (tag v5.0.8, 2026-09-02)

### 9.1 新增测试资产（目标 +110 用例）✅ 实际新增 130 用例

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_rbac_matrix.py | **权限矩阵**：读/写/管理 × 角色 × 关键端点（35 例，deny-by-default） | ~40 → 35 |
| tests/test_collaboration.py | 共享自选/备注/组合可见性 + 并发一致性（34 例，20 线程不损坏） | ~25 → 34 |
| tests/test_api_v3.py | v3 契约（分页/过滤/错误码）+ **v1/v2 兼容**（33 例） | ~30 → 33 |
| tests/test_sdk.py | Python SDK 单元（FakeTransport）+ 真实 uvicorn e2e（13 例） | ~10 → 13 |
| tests/test_plugins_v2.py | 事件钩子/策略插件注册与隔离（15 例） | ~5 → 15 |

### 9.2 专项验证
- 权限矩阵自动化：枚举端点 × 角色断言 401/403/200（test_real_api_matrix_admin_vs_user）。
- v3 与 v1/v2 相同请求响应字段兼容（契约回归：v3 与 v1 同 SQLite 存储、旧端点响应形状不变断言）。
- SDK 真实服务 e2e：uvicorn 临时服务跑登录 → v3 自选 → RBAC → 403 越权信封。

### 9.3 门禁 ✅
rbac/collab/api_v3/sdk/plugins 覆盖率 ≥70% 入 CI 阻塞步骤；权限矩阵独立 job（fail 即红）；deny-by-default 守护延续（guest 空权限 + 未授权端点清单）。

---

## 10. V5.0.9 架构现代化与工程化 —— 测试计划 ✅ 已完成 (tag v5.0.9, 2026-09-02)

### 10.1 新增测试资产（目标 +120 用例）

| 测试文件 | 覆盖 | 用例数 | 状态 |
|---|---|---|---|
| tests/test_split_parity.py | **拆分对拍**：拆前拆后模块行为逐字段对拍（覆盖率不降断言） | 52 | ✅ |
| tests/test_migrations.py | 迁移框架：顺序升级/回滚/失败不启动/跳级 | 35 | ✅ |
| tests/test_upgrade_rollback.py | 一键升级 DryRun + 真回滚演练（备份→迁移→验证→回滚） | 27 | ✅ |
| tests/test_observability.py | 结构化日志/SLO 指标（可用性/延迟/成功率） | 20 | ✅ |
| tests/test_contract_openapi.py | OpenAPI→前端契约（修复 4 处真实破口） | 11 | ✅ |
| tests/test_property_based.py | property-based（SLO/迁移/日志/备份/配置不变量） | 21 | ✅ |
| tests/test_scaffold.py | 脚手架生成器（test/module/migration 骨架） | 9 | ✅ |

### 10.2 专项验证
- 拆分对拍：对每个拆分文件，拆前/拆后跑同一测试集，输出一致 + 覆盖率不降。✅
- 迁移演练：顺序迁移 + 回滚到备份可用（backup→upgrade→rollback→verify 全链测试）。✅
- 契约专项：前端每条真实 fetch 路径字面量解析到后端路由；发现并修复 4 处破口。✅

### 10.3 门禁
migrations ≥70%（实测 98%）；split-parity 独立 job（52 例）；ai_eval+ai_evaluator ≥50%；
scheduler ≥30%；data_sources ≥60%；merrill_clock ≥70%；deploy_tool ≥80%（实测 96%）；
metrics+structured_log ≥80%（实测 96-97%）；scaffold ≥80%（实测 87%）。

---

## 11. 全系列测试资产与门禁增量总览

| 版本 | 新增用例（估） | 新增门禁 | 独立 job |
|---|---|---|---|
| 5.0 | +90 | reliability ≥70% | reliability suite |
| 5.1 | +110 | data_portal2/data_quality ≥70% | PIT 断言 |
| 5.2 | +100 | backtest/walkforward ≥70% | 成本敏感度/样本外 |
| 5.3 | +90 | risk/rules ≥70% | - |
| 5.4 | +100 | notify/events ≥70% | - |
| 5.5 | +70 | report ≥70% | 视觉回归存档 |
| 5.6 | +80 | WCAG 扩展 + 引导 e2e | 引导链路 e2e |
| 5.7 | +70 | jobs/cache ≥70% + 性能门禁阻塞 | 性能基准 |
| 5.8 | +110 | rbac ≥70% | 权限矩阵 |
| 5.9 | +120 | migrations ≥70% + 拆分对拍 | 拆分对拍/契约 |
| **合计** | **+940（预计突破 2000 用例）** | - | - |

## 12. 测试执行节奏与报告

- 每任务：TDD（失败→实现→通过）；每点版本：全量回归 + 门禁；每中版本：双端冒烟 0 pageerror。
- 报告归档：版本报告入 reports/；覆盖率/门禁结果随 CI run 记录。
- 回归基线：V4.9.5 的 1124 用例为永不倒退基线（每版本结束时对比）。

## 13. 风险

| 风险 | 缓解 |
|---|---|
| reliability suite 模拟故障可能影响测试环境稳定性 | 独立 job + 临时目录隔离 + 不触真实数据源 |
| PIT 断言误报（合法滞后） | 断言仅检查 end<=as_of 的强约束，不检查业务时序 |
| 性能门禁收紧导致 flaky | 阈值留 20% 余量 + 多次取样取中位数 + 允许重跑一次 |
| e2e 扩展（引导链路）依赖浏览器环境 | 独立 job + playwright 固定版本 + 失败可人工验收 |