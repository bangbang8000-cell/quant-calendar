# 量化选股日历 v3.17.X 开发&测试计划

> **文档版本**: v1.0（已授权） | **日期**: 2026-08-16 | **基线**: v3.16.1
> **配套文档**: 产品需求 → `PRD-v3.17.md`
> **原则**: 小步提交 · 测试先行 · 可回滚 · 验证先行 · 每任务可独立验收 · 双端(dev/ops)部署

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v0.9 | 2026-08-16 | 规划 | 配套 `PRD-v3.17.md`，待评审授权后执行 |
| v1.0 | 2026-08-16 | 授权 | 版本代号统一为 v3.17；其余按 PRD 执行，本计划已授权 |

---

## 2. 目标与范围

### 2.1 目标
- 将产品从"功能完备"推进到"**智能、实用、好用、高效**"的卓越级：AI 复盘/体检/胜率追踪闭环、回测/组合落地、移动端一等公民、架构债务还清、可观测性达标、开放 API 起步。
- 工程红线：**不引入构建链、不破坏零构建架构**；每阶段结束时全量测试 + 冒烟全绿才可进入下阶段。

### 2.2 范围
- 覆盖 `PRD-v3.17.md` 全部 FR（P0/P1/P2 分级）。
- 明确**不在本版本**：实时行情 WebSocket 强制落地（数据不可达可顺延）、i18n 全量（先核心界面）、v4.0 完整开放平台。

### 2.3 版本节奏（点版本）
```
3.17.0  智·实主线（复盘/体检/回测/胜率追踪/组合）
3.17.1  健（架构收敛/可观测性/多用户隔离）
3.17.2  快（移动端/性能/个性化/异动事件）
3.17.3  开（开放API/i18n/实时行情可选）
```

---

## 3. 工程基线与环境

| 项 | 约定 |
|----|------|
| 开发环境 | `quant-calendar-dev`（端口 8001），`.venv\Scripts\python.exe backend\main_new.py` |
| 生产环境 | `quant-calendar-ops`（端口 8000），同源同步，双端物理分离 |
| 版本 | `main_new.py` 的 `APP_VERSION` 单一来源；本版本升级为 **3.17.0**（评审确认代号后执行，前端 `?v=` 缓存爆破联动） |
| 测试命令 | 单元/集成 `pytest tests/ -m "not e2e"`；e2e `pytest tests/e2e -m e2e`；lint `ruff check` |
| 提交规范 | Conventional Commits（`feat/fix/refactor/test/docs` + 版本前缀，如 `v3.17 (3.17.0-1): ...`） |
| 数据安全 | 操作数据前先备份；`tests/conftest.py` 已隔离临时目录，新增用例必须遵循 |

---

## 4. 开发计划（分阶段任务）

> 每任务统一四步：**① 写失败测试 → ② 跑通失败 → ③ 实现 → ④ 跑通 + commit**。每任务含：目标 / 改动文件 / 测试 / 验收。

### Phase 3.17.0 — 智·实主线（P0）✅ 已完成

#### T1 因子引擎（FR-3.17.3 数据层）✅
- **目标**: 新增多因子计算模块（估值/基本面/资金面/情绪面/技术面），输出语义化分位标注。
- **文件**: 新建 `backend/factor_engine.py`；修改 `backend/ai_indicators.py`(复用)、`backend/prompts/evaluate_stock.txt`(注入新因子)、`backend/api/v1/market.py`(详情因子端点)。
- **测试**: 新建 `tests/test_factor_engine.py`（≥15 例：各因子计算、分位边界、缺字段降级、空数据不抛错）。
- **验收**: 六面板因子数据 + 分位标注正确；prompt 含新因子；单测全绿；**TDD**。

#### T2 个股多因子体检 UI（FR-3.17.3 展示层）
- **目标**: 股票详情弹窗新增"多因子体检"面板（数据卡，非 AI 生成）。
- **文件**: `frontend/js/components/dialogs/stock-detail.js`, `frontend/js/core.js`(如新增 fetch 助手)。
- **测试**: `tests/test_frontend_consistency.py` 增断言（面板存在/无内联硬编码色）；e2e 视觉基线补充 detail 面板。
- **验收**: 详情页六面板渲染、数据缺失有"无数据"占位；无新增内联样式（grep 断言）。

#### T3 AI 每日复盘后端（FR-3.17.2）
- **目标**: 收盘后 AI 生成《市场复盘》报告（大盘/板块/资金/情绪/明日关注），数据卡强约束 + 站内归档 + 飞书推送。
- **文件**: 新建 `backend/market_review.py` + `backend/prompts/review_daily.txt`；修改 `backend/scheduler.py`(注册任务)、`backend/api/v1/market.py`(报告归档读取端点)、`backend/prompts/`。
- **测试**: 新建 `tests/test_market_review.py`（数据卡完整性、数字来自数据源断言、归档读写、推送调用）；调度器任务注册单测。
- **验收**: 调度触发产出可回看报告；数字非编造（抽查）；飞书推送成功。

#### T4 AI 复盘阅读页（FR-3.17.2 展示层）
- **目标**: 研究页新增"市场复盘"入口，历史复盘列表 + 详情阅读 + 推送设置。
- **文件**: `frontend/js/components/research-page.js`, 可能新增 `frontend/js/components/dialogs/review-detail.js`。
- **测试**: 一致性回归（入口/路由/空态）；e2e 视觉基线补充。
- **验收**: 列表/详情/空态/加载态可用；无内联样式新增。

#### T5 AI 问股升级（FR-3.17.1）
- **目标**: 多轮上下文 + 多股对比 + 组合诊断 + 事实护栏（数据卡）。
- **文件**: `backend/prompts/ask_stock.py`, `backend/agent_tools.py`, `backend/api/v1/chat.py`(会话上下文持久化)、`frontend/js/ai-chat.js`。
- **测试**: 新建 `tests/test_chat_context.py`（多轮上下文组装、对比解析、数据卡注入、幻觉兜底）；e2e 冒烟补多轮对话。
- **验收**: 多轮追问闭环；多股对比结构化输出；组合诊断可复现；抽查数值来自数据源。

#### T6 回测可视化（FR-3.17.4）
- **目标**: 策略总览新增回测工作台：净值曲线+基准、最大回撤标注、年度收益、夏普/胜率/盈亏比、参数可视化、对比视图、CSV 导出。
- **文件**: 新建 `frontend/js/backtest.js`；修改 `frontend/js/components/strategies-page.js`；`backend/api/v1/backtest.py`(核对字段/性能)。
- **测试**: 前端一致性断言（入口/参数表单/导出）；e2e 冒烟（发起→渲染）；后端已有回测单测补充字段回归。
- **验收**: 500 交易日 ≤5s；指标/曲线/回撤齐全；导出可用；与后端 API 字段一致。

#### T7 评估胜率追踪（FR-3.17.6）
- **目标**: 评估记录 vs 后续 N 日走势的命中率统计（总体/分模型/分评级）+ 决策复盘页。
- **文件**: 新建 `backend/eval_track.py`；修改 `backend/api/v1/ai.py`(端点)、`frontend/js/components/ai-page.js`。
- **测试**: 新建 `tests/test_eval_track.py`（对照计算、N 日窗口、分模型/评级聚合、抽样一致）；一致性断言复盘入口。
- **验收**: 命中率与人工抽样一致；按日期浏览复盘；含风险免责说明。

#### T8 组合/模拟持仓（FR-3.17.5）
- **目标**: 模拟持仓录入（成本/数量）→ 浮动盈亏/收益率/市值、组合收益曲线、行业分布、调仓记录、AI 组合诊断联动。
- **文件**: 新建 `backend/api/v1/portfolio.py`；`backend/db.py`(新表 portfolio/holdings/trades)；`frontend/js/portfolio.js`(新) 或并入 watchlist。
- **测试**: 新建 `tests/test_portfolio.py`（盈亏计算、资金加权收益率、调仓影响、曲线数据）；一致性断言。
- **验收**: 盈亏计算与行情一致；组合曲线/行业分布正确；调仓影响收益率。

#### T9 异动扫描 + 事件提醒（FR-3.17.7 离线部分）
- **目标**: 全市场异动扫描（涨停/跌停/量比/振幅/连板）+ 自选/持仓事件提醒（业绩预告/解禁/分红/龙虎榜/两融），站内+飞书。
- **文件**: 新建 `backend/scan_engine.py`, `backend/event_alert.py`；修改 `backend/api/v1/market.py`, `backend/scheduler.py`, `frontend/js/components/research-page.js`, `frontend/js/watchlist.js`。
- **测试**: 新建 `tests/test_scan_engine.py`（筛选条件、池过滤、空结果）、`tests/test_event_alert.py`（事件匹配、推送）；数据不可达降级单测。
- **验收**: 扫描结果与数据源一致可筛选；事件在可达时触发提醒；不可达不报错。

> **3.17.0 出口门槛**: 全量 pytest + e2e 冒烟全绿；覆盖率达到本阶段目标（见 §5.2）；双端部署 + 生产冒烟通过；`APP_VERSION=3.17.0`。

---

### Phase 3.17.1 — 架构健康（P0/P1）✅ 已完成

#### T10 前端巨型文件拆分（FR-3.17.11.1）✅
- **目标**: `app-logic.js`(≈116KB) 按域拆分，对外 `window.createAppLogic` 签名不变；单文件 ≤30KB。
- **文件**: 拆分 `frontend/js/app-logic.js` → `app-logic/state.js`、`app-logic/watch.js`、`app-logic/keys.js`、`app-logic/lifecycle.js` 等（保持 index.html 仅加载入口）。
- **测试**: `tests/test_frontend_consistency.py` 现有 qcState 导出/键数断言全绿（拆分不得破坏）；新增"单文件大小"断言；全量 e2e 冒烟 0 pageerror。
- **验收**: 拆分后各文件 ≤30KB；qcState 导出清单不变；功能无回归。

#### T11 内联样式治理（FR-3.17.11.2）
- **目标**: 767 处内联 `style=` 迁移 ≥60% 到 CSS 类；新增内联被 CI 拦截。
- **文件**: 各 page/dialog 组件 + `frontend/css/`（新增语义类）；CI `.github/workflows/ci.yml`(grep 拦截)。
- **测试**: 新增 `tests/test_inline_style_guard.py`（计数断言：总数下降 ≥60% + 新增禁令）；主题走查回归。
- **验收**: 内联计数下降 ≥60%；CI 拦截新增；7 主题无回归。

#### T12 鉴权/主题收敛 + 死代码清理（FR-3.17.11.3-5）
- **目标**: fetch 鉴权统一 `core.apiFetch`（移除/委托 monkey-patch）；主题单一 `applyTheme`；删空壳 `calendar.js`/`strategies.js`；清 `[DEBUG]` 日志与后端 print。
- **文件**: `frontend/index.html`, `frontend/js/core.js`, `themes.js`, `app-logic.js`(拆分后), 删 `frontend/js/calendar.js`/`strategies.js`；`backend/*.py`(print→logging)。
- **测试**: 新增断言（`apiFetch` 唯一鉴权、`applyTheme` 唯一、print 计数下降 ≥80%）；全量一致性/冒烟回归。
- **验收**: 鉴权/主题各单一实现（脚本断言）；后端 print 下降 ≥80%；冒烟 0 pageerror。

#### T13 可观测性（FR-3.17.12）
- **目标**: Prometheus `/metrics` 导出、健康面板升级（调度任务/数据源/备份状态）、升级脚本、告警完善。
- **文件**: 新建 `backend/metrics.py` + `scripts/upgrade.ps1`；修改 `backend/api/v1/system.py`, `backend/scheduler.py`, `frontend/js/components/system-page.js`。
- **测试**: `tests/test_metrics.py`（/metrics 文本格式、字段完整性）；调度器任务状态单测；升级脚本在 dev/ops 演练。
- **验收**: /metrics 可抓取；健康面板显示任务/数据源/备份；升级脚本演练成功。

#### T14 多用户隔离与存储收敛（FR-3.17.13）
- **目标**: 聊天历史按用户隔离 + 存量迁移；用户/聊天/自选/评估统一 SQLite 为主；限流接口抽象（Redis 预留）。
- **文件**: `backend/api/v1/chat.py`, `backend/db.py`(迁移), `backend/rate_limit.py`, `backend/user_manager.py`。
- **测试**: 新增 `tests/test_chat_isolation.py`（两用户互不可见、越权回归）、`tests/test_rate_limit_iface.py`（可插拔后端）；数据迁移单测。
- **验收**: 用户隔离回归无越权；双写不一致消除；限流可切换后端。

> **3.17.1 出口门槛**: 全量测试 + 双端部署 + 冒烟全绿；内联/print/大文件计数达标。

---

### Phase 3.17.2 — 体验卓越（P0/P1/P2）✅ 已完成

#### T15 移动端一等公民（FR-3.17.8）✅
- **目标**: 375px 三大高频任务可用（日历池→体检→评估/复盘）；手势（左滑/下拉刷新/长按）；PWA 缓存与版本联动 + 核心页离线可读。
- **文件**: `frontend/css/responsive.css`, `frontend/js/components/calendar-page.js`, `ai-page.js`, `stock-detail.js`, `sw.js`, `manifest.json`。
- **测试**: 新增 Playwright 移动视口用例（375px 三任务流程）；`tests/e2e/visual_regression.py` 补移动基线；PWA 离线断言。
- **验收**: 375px 三任务可完整操作；Lighthouse 移动 ≥70；离线可读核心页。

#### T16 性能优化（FR-3.17.9）
- **目标**: 首屏关键路径并行化、评估/问股历史懒加载、K 线大数据降采样、骨架屏接入。
- **文件**: `frontend/index.html`, `frontend/js/app-logic.js`(拆分后), `frontend/js/charts.js`, `frontend/js/components/state-panel.js`。
- **测试**: 新增性能回归（首屏可交互时间基线对比、5000 点渲染帧率）；一致性断言骨架屏接入。
- **验收**: 首屏较基线 ≥30% 提升；大图表不掉帧。

#### T17 个性化与搜索（FR-3.17.10）
- **目标**: 用户偏好持久化（默认视图/主题/图表周期）、拼音/首字母检索、最近查看/收藏直达。
- **文件**: `frontend/js/components/command-panel.js`, `frontend/js/app-logic.js`, `backend/api/v1/user_config.py`, 新增 `frontend/js/i18n.js`(预留)。
- **测试**: 偏好读写单测（后端）、检索命中一致性断言。
- **验收**: 偏好重启保持；拼音检索可用；搜索直达。

#### T18 盘中增强补强（FR-3.17.7 实时化，可选）
- **目标**: 若数据源可达，落地自选/持仓盘中报价 + 涨速/放量预警（WebSocket）；不可达则标记"数据不可达"并保留离线扫描。
- **文件**: `backend/api/v1/market.py`(WS 端点), `frontend/js/watchlist.js`, `backend/data_sources.py`。
- **测试**: WS 推送单测（mock 源）、前端收包渲染断言；不可达降级单测。
- **验收**: 可达则实时推送可用；不可达则优雅降级不报错（不阻塞发布）。

> **3.17.2 出口门槛**: 全量测试 + 移动端冒烟 + 双端部署 + 生产冒烟。

---

### Phase 3.17.3 — 开放与国际化（P2）✅ 已完成

#### T19 开放 API v2 起步（FR-3.17.15）✅
- **目标**: 只读开放 API + API Key 鉴权（admin 生成/吊销）+ Swagger 文档开关 + Webhook 订阅（复盘/异动/评估完成）。
- **文件**: 新建 `backend/api_keys.py`, `backend/api/v1/openapi.py`；修改 `backend/main_new.py`(开关)、`frontend/js/components/system-page.js`(Key 管理)。
- **测试**: 新建 `tests/test_api_keys.py`（签发/吊销/无 Key 拒绝/不落明文日志）；Webhook 投递单测。
- **验收**: API Key 拉取只读数据可用；无 Key 被拒；Swagger 可浏览；Webhook 收到事件。

#### T20 国际化 i18n（FR-3.17.14）
- **目标**: 轻量 i18n（`zh-CN`/`en` 两语言包），默认 zh-CN 不变，核心界面文案抽取。
- **文件**: 新建 `frontend/js/i18n.js` + `frontend/js/locales/zh-CN.js`/`en.js`；各组件文案抽取。
- **测试**: i18n 断言（无缺词/占位符完整）；切换 en 后核心页可读（Playwright 冒烟）。
- **验收**: 切换 en 可读；zh-CN 回归无缺词；默认语言不变。

> **3.17.3 出口门槛**: 全量测试 + 双端部署 + 发布冒烟（含开放 API 自测）。

---

## 5. 测试计划

### 5.1 测试分层策略

| 层 | 工具/方式 | 覆盖对象 | 执行时机 |
|----|-----------|----------|----------|
| 单元（后端） | pytest（conftest 临时目录隔离） | 因子引擎/复盘/胜率/组合/异动/API Key/限流接口/多用户隔离/指标 | 每任务 + CI |
| 单元（前端逻辑） | node 调用纯计算核心（如 virtual-list-core 先例） | backtest 数据聚合、i18n、偏好读取 | 每任务 |
| 一致性/静态 | `test_frontend_consistency.py` 扩展 + 新增 guard | 内联样式计数、文件大小、鉴权/主题唯一、print 计数、qcState 键 | 每任务 + CI |
| 集成（API） | pytest + TestClient | 新端点字段/鉴权/降级 | 每任务 |
| e2e 冒烟 | Playwright（`-m e2e`，dev 全跑 + 发布前必跑） | 三大高频任务、回测流程、AI 复盘、移动端 375px、PWA 离线、开放 API | 每阶段出口 + 发布 |
| 视觉回归 | `tests/e2e/visual_regression.py`（基线 diff） | 新增页面/面板（复盘/体检/回测/组合）+ 7 主题 | 每阶段出口 |
| 性能 | Playwright trace + Lighthouse | 首屏可交互、5000 点图表帧率、回测 500 交易日 | 3.17.2 阶段 |

### 5.2 覆盖率目标（NFR-3.17.4）

| 模块 | 当前（基线） | 3.17 目标 |
|------|:--:|:--:|
| 总体 | ≥20% | **≥35%** |
| 因子引擎（新） | - | ≥70% |
| 回测数据层（新） | - | ≥70% |
| 胜率追踪（新） | - | ≥70% |
| 复盘生成（新） | - | ≥70% |
| 组合/持仓（新） | - | ≥70% |
| 美林时钟（保持） | ≥70% | ≥70% |

CI 门禁随版本在 `pyproject.toml` 提升；核心新模块单独门禁。

### 5.3 回归与冒烟清单（每阶段出口必跑）

1. `pytest tests/ -m "not e2e"` 全绿（无回归）。
2. 浏览器冒烟（Playwright，admin 登录）：日历池→个股详情（含体检）→AI 评估→复盘→问股多轮→回测→组合→异动→系统配置；**0 pageerror**。
3. e2e 视觉回归 diff 报告人工确认（无意外布局漂移）。
4. 双端（dev 8001 / ops 8000）部署后健康检查 `{status:ok, version}` 与前端 `?v=` 版本一致。
5. 发布冒烟 `tests/e2e/smoke_v315.py`（版本断言更新为 3.17.x）。

### 5.4 数据源与网络容错测试

- 模拟三源全部不可达：日历/评估/复盘/体检/异动均显示"数据不可达"占位，**不抛错、不白屏**。
- 模拟部分字段缺失（如 daily_basic 无 PE）：因子降级标注"无数据"，不中断评估。
- 缓存：新因子/复盘/行情缓存 TTL 与 `APP_VERSION` 联动刷新（沿用 16.10-fix 模式）。

### 5.5 安全与无障碍回归

- 多用户隔离回归：用户 A/B 互不可见聊天/自选/评估（FR-3.17.13）。
- API Key 不落明文日志（审计断言）。
- 7 主题对比度 ≥4.5:1 持续回归；新增页面元素可键盘聚焦（沿用 16.x 无障碍断言）。

---

## 6. CI/CD 与部署

| 项 | 计划 |
|----|------|
| CI | 保持现有 `ci.yml`：锁文件校验 → ruff → pytest + 覆盖率门禁 → 核心模块门禁 → e2e 视觉回归(job)；新增：内联样式/print/文件大小 grep 拦截 |
| Docker | `docker-publish.yml` 按 tag 构建；本版本发布 3.17.0~3.17.3 各打 tag |
| 部署 | dev 每任务后同步；ops 每阶段出口部署；`scripts/upgrade.ps1`（T13）后改为一键升级 |
| 版本 | `APP_VERSION` 单一来源；每次点版本发布更新前端 `?v=` 缓存爆破 |
| 备份 | 每次 ops 部署前自动备份（沿用每日 3:05 + 部署前手动） |

---

## 7. 里程碑与验收总表

| 里程碑 | 内容 | 出口验收 |
|--------|------|----------|
| 3.17.0 | 智·实主线（T1-T9） | 全量测试+冒烟全绿；覆盖率目标；双端部署；生产冒烟 |
| 3.17.1 | 架构健康（T10-T14） | 大文件/内联/print 达标；多用户隔离；可观测性 |
| 3.17.2 | 体验卓越（T15-T18） | 移动端三任务；性能 ≥30%；PWA 离线 |
| 3.17.3 | 开放+i18n（T19-T20） | API Key 可用；en 可读；发布冒烟 |

每里程碑完成 → 提交 GitHub（dev）→ 同步 ops → 部署 → 冒烟 → 打 tag。

---

## 8. 风险与依赖

| # | 风险 | 应对 |
|---|------|------|
| R1 | 大文件拆分回归 | 拆分期间每个子提交跑全量一致性+冒烟；先拆组件后拆逻辑 |
| R2 | 数据源字段门槛（tushare 积分） | 因子/复盘分层降级；缺字段=标注"无数据" |
| R3 | 实时行情可达性 | P2 可选；离线扫描先行，WS 不可达不阻塞 |
| R4 | i18n 改动面广 | P2；默认 zh-CN；增量推进 |
| R5 | 任务量大 | 按点版本切分独立发布；每点版本独立可交付 |
| R6 | 覆盖率提升耗时 | 新模块强制 TDD + ≥70%；存量采用"改哪测哪+逐步补齐" |

---

> **执行方式（授权后）**: 按 writing-plans 的子代理驱动或行内执行逐任务 TDD；每任务 commit；每阶段出口跑 §5.3 清单；请评审 PRD 优先级与本文档阶段划分后授权。
