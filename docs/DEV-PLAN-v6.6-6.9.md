# DEV-PLAN v6.6.X–v6.9.X：存量功能优化打磨阶段开发计划

> 版本：v1.0（整合版，待终审）
> 状态：待用户终审授权
> 创建日期：2026-09-11
> 需求来源：《PRD-v6.6-6.9.md》（唯一需求来源，含已确认决策 D7 方案 A、D8 开放 API 暂不拆分）
> 配套文档：《TEST-PLAN-v6.6-6.9.md》（测试计划，独立）

---

## 0 基线

| 项 | 值 |
|---|---|
| 分支 | `refactor/ui-v6`（本地，不 push 主线） |
| 当前版本 | 6.6.0（`backend/main_new.py` `APP_VERSION` 单一来源） |
| 后端 | FastAPI（Python 3.10+），运行 `http://localhost:8001`（uvicorn 后台进程；改后端需重启） |
| 前端 | Vue 3 SPA + Vite 构建（`frontend/` 下 `npm run build`；dist 入库，部署免 Node）；改 CSS/JS 构建后生效，需 `?v=` 版本号刷新缓存 |
| 测试 | `tests/`（pytest + 前端门禁）；全量约 3124 用例 / 275 文件 |
| 回归基准 | 既有 V6.x 门禁（`test_v63_*`/`test_v65_*`/`test_v66_*`）+ 全量关键集 |
| 已知 pre-existing 失败 | `test_transition_tokens.py::test_transition_uses_tokens_or_standard`（V6.0 有意设计冲突，**不属于本阶段范围**，回归记录注明即可） |
| 数据源 | sxsc-tushare → tushare → akshare 三源热备（`.env` token 保持） |

---

## 1 实施总原则

1. **纯前端优先**：6.6.X 以纯前端改动为主（菜单/样式/子页内容迁移），后端最小化（仅必要 additive 改动）。
2. **决策已锁定**：系统配置整改按**方案 A**（PRD D7）；**开放 API 不拆分**（PRD D8）；一级菜单保持 6 个不增删（PRD D2）。
3. **菜单调整兼容优先**：所有 key 合并/重命名先建 hash 重定向与用户组配置迁移，再改菜单定义；契约测试兜底。
4. **token/样式迁移分期**：保留 tokens.css 兼容层，按「themes.css 高频 → layout/responsive/animations」顺序推进，每步构建 + 视觉抽查。
5. **性能改动以门禁为界**：缓存/增量拉取落地必须通过 PIT/防前视与数据质量门禁，不允许为提速牺牲数据正确性。
6. **AI 改动护栏强制**：智能化功能（6.9.X）一律走既有诚实性护栏与事实校验，测试覆盖护栏路径。
7. **每里程碑跑对应门禁，版本段末统一构建 + 全量回归 + 提交**（不 push）。

---

## 2 分版本开发计划

### 2.1 v6.6.X —— 美术收尾 + 信息架构重构

> 目标：完成 V6.6 既定美术收尾（F-6.6.1~6.6.6），落地菜单层重构（F-6.6.7）与系统配置整改方案 A（F-6.6.8）。

#### M-6.6.0 美术收尾（承接 PRD-v6.6，定版 6.6.0）

> V6.6.0 已按 PRD-v6.6 规划，本里程碑承接其全部任务清单（M0 快速项/M1 emoji 清理/M2 token 迁移/M3 回归）。此处列收尾确认项。

| # | 任务 | 验收 |
|---|---|---|
| M0.1 | AppIcon 非白名单回退默认图标 + 白名单补全 | 非白名单渲染 circle-dot；无文本外泄 |
| M0.2 | 状态指示（✓/✗/等级点）图标化 | system-page 等无文本 ✓/✗ |
| M0.3 | 暗色收尾（语义色/hover/弹窗实底） | 暗色对比度达标 |
| M1.1–M1.5 | 全站 emoji 清理（research/ai/calendar/focus/history/command/header/index.html 约 78 处） | 装饰性 emoji = 0 |
| M2.1–M2.6 | 内联动态色 token 化（42 处）+ 旧 token 高频迁移 | 固定色项 class 化；高频文件 -60% |
| M3.1–M3.5 | 构建 + 版本 bump 6.6.0 + 门禁回归 + 视觉走查 | 全绿；`/api/health` version 6.6.0 |

#### M-6.6.1 菜单层信息架构重构（PRD F-6.6.7）

| # | 任务 | 关键文件 | 验收 |
|---|---|---|---|
| IA1 | **组合持仓入口**：`ai.subPages` 增加 `portfolio`（`evaluation-analysis` 之后）；SubNav/TopTabs 图标映射补 `portfolio`；i18n 五语补 `sub.portfolio`；验证 `ai-page.js` portfolio-view 分支可达；移动端抽屉同步 | `js/app-logic.js`、`src/components/SubNav.vue`、`src/components/TopTabs.vue`、`js/locales/*.js` | `#ai/portfolio` 深链直达；刷新保持；五语齐全 |
| IA2 | **日历视图合并**：`calendar.subPages = ['calendar','pool']`；`calendar-page.js` 子页分支迁移为页内 `currentView` 切换（复用 switchView）；hash 重定向 `#calendar/{daily,weekly,monthly,yearly}` → `#calendar` | `js/app-logic.js`、`js/components/calendar-page.js`、`js/tabs-core.js` | 视图切换仅页内单一通道；旧深链可用 |
| IA3 | **执行看板归位**：`SYSTEM_GROUPS` 中 `execution` 移入「运行监控」（schedule 之后） | `src/components/SubNav.vue` | 运行监控组含 execution；key 不变 |
| IA4 | **命名消歧**：`sub.market`→「大盘行情」、`sub.market-review`→「每日复盘」，五语同步；相关页面标题/面包屑同步 | `js/locales/*.js`、相关页面标题引用 | i18n 缺词守卫通过；页面显示新名 |
| IA5 | **策略管理合并**：`research.subPages` 收敛为 `['research-overview','quant-research','strategy-manage','backtest','backtest-history']`；`research-page.js` 内聚合 strategy-write/custom-write 两态；hash 重定向 2 条；用户组 `visible_sub_pages` 键迁移 | `js/app-logic.js`、`js/components/research-page.js`、`js/tabs-core.js`、`backend/groups`（若配置持久化） | 页内可创建模板编辑与全新策略；旧深链可用；组配置不失效 |
| IA6 | **菜单契约测试**（F-6.6.10）：新增 `test_v66x_menu_contract.py`（含 SYSTEM_GROUPS ↔ system.subPages 一致性，覆盖 notification） | `tests/test_v66x_menu_contract.py`（新增） | 菜单定义 ↔ 图标/i18n/页面分支/hash/组配置一致 |

#### M-6.6.2 系统配置内容整改方案 A（PRD F-6.6.8）

| # | 任务 | 关键文件 | 验收 |
|---|---|---|---|
| SC-A1 | **通知中心拆独立子页**：`SYSTEM_GROUPS` 平台设置组新增 `notification`（「通知中心」，图标 bell）；`system-page.js` 通知中心三 Tab（规则/投递历史/通道与静默）整块从 autoeval 移入新子页渲染容器；组件状态与方法（ncRules/ncHistory/ncChannels/ncSilence/ncMsg/ncTab 等）整体迁移，逻辑不变 | `src/components/SubNav.vue`、`js/components/system-page.js`、`js/locales/*.js`（`sub.notification` 五语） | 通知中心独立可达；规则/历史/通道功能完整；autoeval 内不再含通知中心块 |
| SC-A2 | **usage 去重精简**：移除数据源健康（卡②）、运维状态（卡③）整块；新增顶部「健康摘要条」（数据源降级计数/调度失败计数/护栏通过率/最近备份时间，4 项红黄绿点 + 跳转 health/schedule/guard/feature）；保留资源监控/AI 用量/页面热度三块；子页更名「用量统计」 | `js/components/system-page.js` | usage 无重复整块；摘要条数据复用 healthDetail/factCheck；跳转正确 |
| SC-A3 | **个性化归位**：status 中外观设置、语言、K线显示三卡迁往 feature「界面与个性化」分区（与「界面与导航」同区）；状态与保存逻辑不变 | `js/components/system-page.js` | 三卡位于 feature；Header 主题快捷入口不受影响 |
| SC-A4 | **审计归位 + about 精简**：about 操作审计卡移入 status（健康与可靠性面板之后，仅管理员可见）；about 问题反馈与联系反馈合并；系统组件精简为单行 | `js/components/system-page.js` | 审计位于 status；about 无重复反馈入口 |
| SC-A5 | **guard 归位**：`SYSTEM_GROUPS` 运行监控组新增 guard（key 不变，图标 shield） | `src/components/SubNav.vue` | 运行监控组含 guard |
| SC-A6 | **autoeval 更名**：「自动评估」显示名 →「AI 服务」（key `autoeval` 保留）；i18n `sub.autoeval` 文案更新，五语同步；`SYSTEM_GROUPS` label 同步 | `src/components/SubNav.vue`、`js/locales/*.js` | 显示「AI 服务」；深链不失效 |
| SC-A7 | **开放 API 保持不动**（决策 D8）：仅补充子区标题说明文案 | `js/components/system-page.js`、`js/locales/*.js` | 开放 API 仍在 user 子页；文案注明「开发者能力」 |

#### M-6.6.3 收尾（F-6.6.9/F-6.6.11 + 发布）

| # | 任务 | 关键文件 | 验收 |
|---|---|---|---|
| C1 | 配置页「界面与导航」三形态说明文案（F-6.6.9） | `js/components/system-page.js`、`js/locales/*.js` | 三形态各有说明与示意；五语 |
| C2 | 动态页签遗留清理（tabGroups 收敛内部状态）（F-6.6.11） | `js/tabs-core.js`、相关引用 | 无对外暴露残留；功能不回归 |
| C3 | 构建 + 版本 bump 6.6.1 + 全量回归 + 视觉走查（桌面/移动/暗色 + 菜单调整各页 + 系统配置新结构） | — | 门禁全绿；走查无 P0 问题 |

### 2.2 v6.7.X —— 易用性与操作便捷性

> 目标：导航形态收敛、搜索增强、快捷操作、密度/键盘/移动/引导。

| # | 任务（PRD F-6.7.x） | 关键文件 | 验收 |
|---|---|---|---|
| E1 | 导航形态双入口（配置页 + Header 快速切换）+ 配置页示意图（F-6.7.1） | `js/nav-mode-core.js`、`src/components/Header.vue`、`system-page.js` | 双入口可用；默认 subnav 不变 |
| E2 | 全局搜索增强：股票/菜单/功能三类建议分组 + 菜单/指令直达（F-6.7.10） | `src/components/Header.vue`、搜索模块、`js/app-logic.js` | 建议分组正确；菜单直达二级；延迟 ≤150ms |
| E3 | 快捷键扩展（组合/评估历史/短线复盘直达）+ 帮助面板分组（F-6.7.2） | `js/app-logic.js`（shortcutHelpItems）、`js/command-panel-core.js`、`js/command-panel.js` | 快捷键与注册表/帮助一致（门禁守护） |
| E4 | 命令面板增强：分组/收藏/最近使用（F-6.7.3） | `js/command-panel-core.js` | 命令可收藏、最近使用排序 |
| E5 | 信息密度三档联动 Sidebar/SubNav/卡片/表格行高（F-6.7.4） | `css/*.css`、`js/preferences.js` | 三档切换无布局回归 |
| E6 | 键盘导航补全：一级/二级 ↑↓ + Enter（F-6.7.5） | `src/components/Sidebar.vue`、`SubNav.vue`、`js/nav-mode-core.js` | 键盘全遍历可用 |
| E7 | 短线复盘二级视觉分组（复盘/数据/盘后核验）（F-6.7.6） | `src/components/SubNav.vue`、`css/nav.css` | 分组显示正确；key/顺序不变 |
| E8 | 移动端：短线复盘抽屉二级默认展开 + 中栏二级移动形态统一（F-6.7.7） | `src/components/MobileNav.vue`、`Header.vue` | 移动端短线复盘 1 次展开可达 |
| E9 | 新手引导增量（短线复盘/组合持仓 3 步）（F-6.7.8） | `js/onboarding*.js` | 引导状态机复用；可跳过/重看 |
| E10 | 文案/空态收尾：OBS-1 下次自动更新时间、OBS-4 toptab 兜底、批量评估/导出空态区分（F-6.7.9） | `js/components/*.js`、`js/locales/*.js` | 文案正确；空态区分失败/无数据 |
| E11 | 收尾：构建 + 版本 bump 6.7.0 + 回归 + 走查 | — | 门禁全绿 |

### 2.3 v6.8.X —— 运行效率与实用性

> 目标：行情缓存提速、导出/报表增强、测试门禁强化。引入后端性能改动。

| # | 任务（PRD F-6.8.x） | 关键文件 | 验收 |
|---|---|---|---|
| P1 | **行情数据本地缓存 + 增量拉取**（F-6.8.1，P0）：两级缓存扩展（日线批量缓存，TTL 与交易日历联动）；增量拉取（仅拉新交易日，基线定期重建）；限频感知调度 + 失败分片重试 | `backend/cache.py`、`backend/data_sources/_manager.py`、`backend/data_pipeline.py`、策略执行模块、`backend/data_sources/_health.py` | 全市场执行 ≤3min（实测）；缓存命中率 ≥90%；PIT/质量门禁通过 |
| P2 | 缓存一致性守护：新缓存写入走 batch_id 血缘；`lookahead_guard` 校验不放松（专项测试） | `backend/lookahead_guard.py`、`backend/data_quality.py`、新增测试 | 防前视/质量用例全绿 |
| P3 | 数据源调用量视图：积分消耗统计 + 限频预算提示（F-6.8.2） | `backend/api/v1/market.py`（或新增）、`backend/data_sources/_manager.py`、前端 system-page | 视图展示消耗与预算；阈值告警 |
| P4 | akshare 依赖决策落地（F-6.8.3）：**已决策 = 保持降级，不补装**（决策 D9）；确认代码层降级为最终形态，`emotion_metrics.py` 实时兜底路径不引入 akshare | `backend/shortterm/emotion_metrics.py` | 决策闭环（D9）；无 `ModuleNotFoundError` 路径 |
| P5 | 数据导出增强：XLSX（中文表头/多表）——优先复用 `report_export.py` 零依赖方案（F-6.8.4） | `backend/report_export.py`、`backend/api/v1/export.py`、前端导出按钮 | XLSX 可用；CSV 不回归 |
| P6 | 报表中心增强：模板字段/排序/水印 + 订阅回执（F-6.8.5） | `backend/report_center.py`、`backend/report_subscribe.py`、前端 | 模板自定义可用；投递回执展示 |
| P7 | **e2e 视觉回归门禁化**：关键页截图 diff 纳入 CI 阻塞项（时间 mock + 阈值 ≤0.5% + 人工豁免）（F-6.8.6） | `.github/workflows/ci.yml`、`tests/e2e/visual_regression.py`、新增基线 | 关键页 diff 阻塞；豁免通道存在 |
| P8 | 性能守护强化：二级页加载基线 + 虚拟滚动帧率 + 体积预算扩展（F-6.8.7） | `tests/e2e/perf_baseline.json`、`test_perf_gates.py` | 新基线通过 |
| P9 | 大盘行情/盘中增强性能优化：WS 增量合帧、图表数据缓存复用（F-6.8.8） | `backend/ws_v2.py`、`backend/realtime_quotes.py`、前端 | 推送/渲染无明显卡顿 |
| P10 | 收尾：构建 + 版本 bump 6.8.0 + 全量回归 + 性能实测 | — | 门禁全绿；性能数据达标 |

### 2.4 v6.9.X —— 智能化与综合收尾

> 目标：AI 校准/检索问答/持仓诊断、运维强化、全链路走查、组件化收尾、发布。

| # | 任务（PRD F-6.9.x） | 关键文件 | 验收 |
|---|---|---|---|
| I1 | AI 评估校准分析：评级 × 后续 5/10/20 日涨跌对拍，校准曲线/分模型校准/过度自信诊断（F-6.9.1） | `backend/eval_track.py`、`backend/ai_evaluator.py`、`backend/api/v1/ai.py`、前端 ai-page 评估分析页签 | 校准视图可用；样本不足提示；不改评估逻辑 |
| I2 | 复盘/研究历史检索问答：轻量检索 + AI 摘要（护栏强制）（F-6.9.2） | `backend/market_review.py`、`backend/shortterm/archive.py`、`backend/research_store.py`、`backend/fact_check.py`、前端 | 检索+问答可用；护栏生效 |
| I3 | 持仓智能诊断：集中度/风险/基本面快照 + AI 建议（F-6.9.3） | `backend/risk.py`、`backend/portfolio.py`、`backend/attribution.py`、前端 | 输出真实持仓引用；建议可关闭 |
| I4 | 智能化个性化：评估队列智能排序 + 智能提醒（F-6.9.4） | `backend/job_tasks.py`、`backend/event_alert.py`、前端 | 排序/提醒可开关 |
| I5 | 运维强化：调度聚合告警视图 + 数据源配额预警 + 发布半自动化评估（F-6.9.5） | `backend/api/v1/system.py`、`backend/metrics.py`、`scripts/*` | 告警聚合/配额预警可用 |
| I6 | 全链路走查：桌面/平板/移动/暗色全页面 + 无障碍全量门禁化评估（F-6.9.6） | `tests/test_accessibility*.py`、走查记录 | 无新增 A 级违规 |
| I7 | 组件化收尾：可复用表格/列表/状态块抽共享组件（限定范围，非全量 SFC 重写）（F-6.9.7） | 前端共享组件、各 `*-page.js` | 逐块评审；无功能回归 |
| I8 | 综合回归与发布：全量回归 + 性能基线 + 文档同步 + 版本 6.9.0（F-6.9.8） | README/docs | 全绿；6.9.0 发布；文档同步 |

---

## 3 涉及文件清单（汇总，按版本段）

| 文件 | 操作 | 版本段 |
|---|---|---|
| `frontend/js/app-logic.js` | 改（菜单定义：portfolio 入口、日历合并、策略合并） | 6.6.X |
| `frontend/src/components/SubNav.vue` | 改（SYSTEM_GROUPS：execution/guard 归位、notification 新增、autoeval 更名；图标映射；短线复盘分组） | 6.6.X/6.7.X |
| `frontend/src/components/TopTabs.vue` | 改（图标映射 portfolio 等） | 6.6.X |
| `frontend/src/components/Sidebar.vue` / `MobileNav.vue` / `Header.vue` | 改（键盘导航、移动可达、搜索增强、导航形态入口） | 6.7.X |
| `frontend/js/components/system-page.js` | 改（通知中心迁移、usage 去重、个性化归位、审计归位、开放 API 文案） | 6.6.X |
| `frontend/js/components/{calendar,research,ai,strategies,shortterm}-page.js` | 改（视图合并、策略管理两态、命名同步、文案空态） | 6.6.X/6.7.X |
| `frontend/js/locales/*.js` | 改（sub.portfolio/strategy-manage/notification/大盘行情/每日复盘/AI服务/三形态说明等，五语） | 6.6.X–6.7.X |
| `frontend/js/tabs-core.js` | 改（hash 重定向、tabGroups 清理） | 6.6.X |
| `frontend/css/*.css` | 改（token 迁移、密度联动、分组样式、暗色） | 6.6.X–6.7.X |
| `backend/cache.py` / `data_sources/_manager.py` / `data_pipeline.py` | 改（行情缓存、增量拉取、限频调度） | 6.8.X |
| `backend/lookahead_guard.py` / `data_quality.py` | 改/守护（缓存一致性） | 6.8.X |
| `backend/report_export.py` / `api/v1/export.py` / `report_center.py` | 改（XLSX、模板增强） | 6.8.X |
| `backend/eval_track.py` / `ai_evaluator.py` / `fact_check.py` / `risk.py` | 改（校准、检索问答、持仓诊断） | 6.9.X |
| `backend/api/v1/*` | 改（新增 additive 端点） | 6.8.X/6.9.X |
| `backend/main_new.py` | 改（APP_VERSION bump 6.6.1/6.7.0/6.8.0/6.9.0） | 各版本段末 |
| `.github/workflows/ci.yml` | 改（视觉门禁阻塞、缓存/护栏门禁） | 6.8.X/6.9.X |
| `tests/test_v66x_menu_contract.py` 等 | 新增（各版本段门禁） | 各版本段 |
| `tests/e2e/visual_regression.py` / `perf_baseline.json` | 改（视觉门禁基线、性能基线扩展） | 6.8.X |

---

## 4 不做的事（本期明确排除）

- 后端任何破坏性 API 变更（仅 additive）。
- 全量 SFC 重写遗留 `*-page.js`（渐进，见 §2.4 I7 限定范围）。
- 引入 PostgreSQL/Redis 等新存储依赖。
- 重新引入动态页签（V6.4 用户拍板移除）。
- **拆分开放 API 为独立子页（决策 D8）**；**采用方案 B 折叠 health/schedule/guard（决策 D7 已否决）**。
- 不做未在 PRD 列出的新功能域。

---

*文档结束。待用户终审授权后按 §2 分版本启动开发；测试按《TEST-PLAN-v6.6-6.9.md》执行。*
