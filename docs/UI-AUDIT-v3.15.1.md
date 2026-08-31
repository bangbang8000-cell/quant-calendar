# 量化选股日历 UI/UX 现状调研报告

> **文档版本**: v1.0 | **日期**: 2026-08-14 | **基线**: v3.15.1
> **定位**: 现状调研（客观评估，非需求文档）—— 系统评估页面 UI 系统、美术设计、交互逻辑，输出改进建议，作为 v3.16 PRD 与开发计划的输入。
> **方法**: ① 前端源码审计（`frontend/` 全部 40 个 JS、5 个 CSS、index.html）② 浏览器实测（登录后逐页截图 + 主题/移动端走查）③ 既有文档对照（`UIUX-优化评估-v3.8.2.md`、`DESIGN-SYSTEM.md`、`UI-AUDIT-v2.2.0.md`）。
> **证据截图**: `assets/screenshots/audit-v3.15.1/`（8 张，登录态实测截图）。

---

## 1. 调研范围与结论速览

| 维度 | 结论 |
|------|------|
| 总体评价 | 架构方向正确、基础扎实，**已达到"功能完整、可用性良好"**，但存在**配置功能不可达、一致性/无障碍欠账、少量架构债务**三类问题 |
| 最大短板 | **系统配置存在 8 个"幽灵功能"**（已实现但无 UI 入口）→ 功能完备但不可达 |
| 次要短板 | 四态/虚拟列表覆盖不全、键盘可达性与 aria 缺失、红绿语义不统一、对比度不达标 |
| 建议 | 下一个小版本 v3.16 定为「**体验打磨与系统完备化**」，不做新业务，专注补齐/收敛/一致化 |

---

## 2. 系统页面与信息架构现状

### 2.1 页面清单（登录后 5 主页面 + 导航）

| 页面 | 组件 | 子页 | 截图 |
|------|------|------|:--:|
| 0 策略总览 | `strategies-page.js` (460行) | overview / merrill / market / consensus | `01_strategies_overview.png` |
| 1 量化日历 | `calendar-page.js` (156行) | 日/周/月/年 + pool 股票池管理 | `02_calendar.png` |
| 2 AI 评估 | `ai-page.js` (621行) | overview / history / chat_history / watchlist | `03_ai.png` |
| 3 策略研究 | `research-page.js` (72行) | backtest（真实）/ 其余 3 子页占位 | `04_research.png` |
| 4 系统配置 | `system-page.js` (732行) | status / autoeval / datasource / feature / user / about | `05_system.png` |

### 2.2 导航方式

- **桌面端**：左侧固定侧边栏（220px，可折叠至 56px），顶部全局 Header（子页 tab + 全局搜索 + 日期选择 + 用户菜单）。
- **移动端**（≤768px）：隐藏侧边栏，底部 TabBar（5 项）+ 手势左右滑切换交易日。
- **快捷通道**：`Ctrl+K` 命令面板（股票/菜单/指令三域）、`1-5` 切页、`R` 刷新、`Ctrl+/` 帮助。
- **布局判定**：`responsive.css` 三档断点（>1024 / 768-1024 / ≤768），375px 专项优化已落地（触控目标 ≥44px、列表卡片化、Tab 防溢出）。

### 2.3 信息架构评估

- ✅ 主菜单 5 页覆盖完整业务闭环（看周期→选股→评估→研究→配置），子页划分合理。
- ⚠️ 配置入口分散：主题切换在 global-header 用户菜单与 system-page status 子页**两处重复实现**。
- ⚠️ **8 个已实现功能无 UI 入口**（详见 §6 P0-1），形成"幽灵菜单"，用户无法触达。

---

## 3. 美术设计与视觉系统现状

### 3.1 设计令牌体系（tokens.css，三层结构 ✅）

| 层 | 内容 | 评估 |
|----|------|------|
| Layer1 原始 | 间距 4-48px、圆角 6-16px、字号 11-36px、字重、行高、阴影、过渡 | ✅ 完整 |
| Layer2 语义 | 语义色 success/warning/danger/info/up/down/neutral/ai/gold、徽标色、Element Plus 覆盖 | ✅ 较完整（v3.11 补齐 AI 紫） |
| Layer3 组件 | sidebar-width/header-height/card-radius/dialog-radius 等 | ✅ 已定义 |

- 字号体系：`--font-xs(11) ~ --font-3xl(36)`，字重 400-700。
- **亮点**：v3.11 已通过 `test_tokens_no_hardcode` 静态门禁消灭模板/CSS 表面的硬编码色值。

### 3.2 主题系统（7 套，themes.css ~3700 行）

活力金 / 经典红 / 经典金 / tech-blue / rose-red / 翡翠 / dark-pro（暗色），经 `data-theme` 切换，全量基于同一 token 结构。v3.15 完成暗色 Element Plus 覆盖补齐 + ECharts 图表随主题重绘联动。

- **实测**：`dark-pro` 切换生效，`--bg-page:#0f0f23`（见 `07_dark_strategies.png`）。
- ⚠️ **主题应用存在三套实现**：`themes.js applyTheme`、`app-logic.js applyTheme`、`system.js loadUserConfig` 内联逻辑重复（建议合并单一来源）。

### 3.3 排版 / 图标 / 动效

| 项 | 现状 | 评估 |
|----|------|------|
| 字体 | 系统字体栈（PingFang/微软雅黑/Segoe UI） | ⚠️ 无品牌感，数字/表格无等宽衬线强化 |
| 图标 | 4 套图标系统（emoji/ink/edge/crystal），`icons.js` 驱动 | ✅ 可选多样；❌ emoji 默认稍显随意 |
| 动效 | 页面过渡 fade-slide、骨架屏 shimmer、toast、hover-lift/scale、pulse、prefers-reduced-motion | ✅ 完整且克制 |
| 卡片 | `.card` 统一阴影/圆角/间距 | ✅ 规范 |

### 3.4 视觉问题

- ⚠️ **红绿语义不统一**（关键）：`--color-up/down`（红涨绿跌 `#E63946/#457B9D`）与 Element 的 `--el-success/--el-danger`（绿涨红跌）在组件间混用——股票详情 K线 Tab 用后者、指数详情用前者，涨跌色随页面跳变。
- ⚠️ **对比度欠账**：`--text-tertiary:#999` 在浅色主题约 2.9:1（WCAG AA 需 ≥4.5:1），大量用于时间戳/辅助文案/占位；`--font-xs:11px` 小字号 + 低对比组合在部分主题更明显。
- ⚠️ **模板 inline style 泛滥**：system-page.js / ai-page.js 数百处 `style="..."`，令牌体系未被模板充分利用，视觉一致性靠人肉。
- ⚠️ **ai-page 三处聚合视图大段复制**（按日期/按月/按股票，约 160 行 ×2），改一处忘三处。
- ⚠️ **登录页简单**：emoji 📈 + 纯色卡片，无品牌氛围与质感（与产品复杂度不匹配）。

---

## 4. 交互逻辑现状

### 4.1 已具备的交互能力（亮点 ✅）

| 能力 | 位置/证据 |
|------|-----------|
| Ctrl+K 命令面板（股票/菜单/指令三域 + ↑↓/Enter 键盘操作） | `command-panel-core.js`(190行,UUMD 可测) + `command-panel.js`，实测见 `06_command_panel.png` |
| 全局搜索（股票代码/名称/拼音 autocomplete） | global-header.js |
| 数据缓存 + 后台静默刷新（TTL 缓存 + 有变才提示"有新数据"） | `core.js` UMD：makeCacheKey/CacheStore/createTtlCache/silentRefresh |
| 虚拟滚动（策略池/共识榜固定行高） | `virtual-list-core.js` + `virtual-list.js` |
| 统一四态组件（空/加载/错误/离线 + 骨架屏 + 重试） | `state-panel-core.js` + `state-panel.js` |
| 键盘导航（1-5 切页、R 刷新、←/→ 切交易日、↑/↓ 切视图、Ctrl+/ 帮助） | app-logic.js handleGlobalKeydown |
| 移动端手势翻页 + 触控目标 ≥44px + 列表卡片化 | responsive.css v3.11 块 + calendar-page.js |
| AI 评估诚实进度（真实 await + 秒数，无假定时器） | watchlist.js:97 |
| SSE 批量评估逐只实时进度 + 失败原因 + 重试 | batch-evaluate.js / ai.js |
| 智能首页"今日一屏"（美林+情绪+池变动+健康卡+今日重点） | strategies-page.js:23-79 |
| 股票详情三 Tab（K线十字线 + MA 图例 + AI 评估评分环 + 问股） | stock-detail.js / charts.js |

### 4.2 交互问题（⚠️）

| # | 问题 | 证据 |
|---|------|------|
| I1 | **帮助内容与实现脱节**：`shortcutHelpItems` 只列 4 项，漏了 ←/→/↑/↓ 4 个方向键；`R` 对 research/system 页无效未提示 | app-logic.js:595-600 vs 622-631 |
| I2 | **命令面板细节**：无显式 Esc 绑定（依赖 el-dialog 内置）；股票结果异步到达强制重置 activeIndex=0 | command-panel.js:93-97 |
| I3 | **池信号串行请求**：`fetchPoolSignals` 逐只 for-await，池大时卡顿，无并发/取消 | ai.js:332-351 |
| I4 | **问股历史 O(N) 请求**：`loadChatHistory` 逐会话再拉详情，N 次串行放大 | ai-chat.js:233-253 |
| I5 | 原生 `confirm()` 与 `ElMessageBox` 混用 | users.js:251, ai.js:238/246 |
| I6 | 配置修改"即存即生效"与"保存按钮"两种模式并存（AI 模型需手动保存，其余 @change 即存），易误判 | DEPLOYMENT.md 已记录 |

---

## 5. 无障碍与可访问性现状

| 项 | 现状 | 评估 |
|----|------|------|
| :focus-visible | 全局 outline（themes.css:3621） | ✅ |
| 导航/子页 tab | tabindex="0" + keydown.enter | ✅ 部分 |
| 用户菜单 / 状态 tab / 自选 checkbox / 行内⭐ / 折叠区 | div + @click，**不可键盘聚焦** | ❌ |
| aria 属性 | 全项目仅 1 处 `role="status"`（state-panel）；无 aria-label/current/expanded/modal/selected | ❌ |
| 弹窗焦点圈闭 | 依赖 el-dialog 内置，未显式 focus-trap | ⚠️ |
| 对比度 | `--text-tertiary:#999` 浅色不达标 | ❌ |
| 仅颜色传达 | 涨跌色既有红绿双通道，多数有 +/- 号 | ✅ 基本 |
| v-html | index-detail.js:82、stock-detail.js:315 注入模型/服务端内容，`renderMarkdown` 仅转义 &<>，存在 XSS 面 | ❌ 需 sanitize |

---

## 6. 问题清单（按严重度）

### P0 — 功能不可达（用户感知最直接）

| # | 问题 | 证据 |
|---|------|------|
| P0-1 | **8 个已实现功能无 UI 入口（幽灵功能）**：`saveAllConfig`/`resetAllConfig`/`exportConfig`/`importConfig`/`testAiApi`/`saveFeishuConfig`/`testFeishuWebhook`/`syncStockData` 均已实现并导出到 qcState，但全项目无任何按钮/弹窗引用 | system.js:45/135/153/186/260/317, app-logic.js:509/478；grep 仅命中定义处 |

### P1 — 架构与一致性债务

| # | 问题 | 证据 |
|---|------|------|
| P1-1 | `qcState` 对象**重复键**：themes/currentTheme/currentUser 各 2-3 次，后者覆盖前者，极易误导 | app-logic.js:1835-1968 |
| P1-2 | `watch(currentPage)` 被拆两处（1575 页面副作用 / 1738 管理员配置加载），逻辑碎片化 | app-logic.js:1575,1738 |
| P1-3 | K线生命周期逻辑重度耦合 app-logic（直接操纵 ECharts 实例、维护缓存），未下沉 charts.js | app-logic.js:270-460 |
| P1-4 | **主题应用三套实现**（themes.js / app-logic.js / system.js） | themes.js:53, app-logic.js:1025, system.js:458 |
| P1-5 | **fetch 鉴权两套**：index.html 全局 monkey-patch 拦截器 + `core.apiFetch` 各自加头 | index.html:204-223, core.js:10-35 |
| P1-6 | 空壳死代码：`js/calendar.js`、`js/strategies.js` 各 10 行占位，index.html 仍按序加载 | 二文件 + index.html:29-30 |
| P1-7 | 域边界越界：stock-pool 改 currentPage、watchlist 挂 dataRefreshConfig、ai.js 挂 fetchPoolSignals | 三模块 |
| P1-8 | 帮助内容与实现脱节（见 I1） | app-logic.js:595-600 |
| P1-9 | 红绿语义不统一 / 对比度不达标（见 §3.4） | tokens.css:42, themes.css:6 |
| P1-10 | 原生 confirm() 混用（见 I5） | users.js:251 等 |

### P2 — 体验优化机会

| # | 机会 | 说明 |
|---|------|------|
| P2-1 | 四态组件全站收敛：error/offline 态无页面使用，失败仅 toast；ai-page/system-page 仍手写空态 | state-panel 仅 3 处接入 |
| P2-2 | 虚拟列表接入 ai-page 评估历史/问股历史/自选（常达数百条） | 仅 2 处接入 |
| P2-3 | 池信号/问股历史性能（见 I3/I4） | ai.js / ai-chat.js |
| P2-4 | 研究页 3 个"敬请期待"子页：补全或对 guest 隐藏/加 roadmap | research-page.js:14/18/63 |
| P2-5 | 登录页视觉升级（品牌氛围） | index.html:71-107 |
| P2-6 | 骨架屏仅 2 处，加载态统一性可提升 | animations.css |
| P2-7 | 模板 inline style 治理（抽组件 class） | system-page.js / ai-page.js |

---

## 7. 改进建议（分主题）

### 主题 A：系统配置完备化（P0，最高优先）
把 P0-1 的 8 个幽灵功能补全到「系统配置」页合理位置：
- **通用操作栏**：保存全部 / 重置全部 / 导出配置 / 导入配置（含二次确认 + 导入 dry-run 校验）。
- **数据源子页**：数据同步（syncStockData）+ 数据源健康测试入口（testAiApi 归入 AI 模型管理）。
- **自动评估子页**：飞书推送 Webhook 配置表单 + 测试发送（saveFeishuConfig/testFeishuWebhook）。
- 验收：grep 确认 8 个函数均有 UI 引用；浏览器逐项实测。

### 主题 B：前端架构收敛（P1）
- 清理 qcState 重复键，收敛为单一导出清单。
- 合并 `watch(currentPage)` 两处为一处统一副作用编排。
- K线渲染/实例生命周期下沉 `charts.js`（app-logic 只留调用）。
- 主题应用合并为单一 `applyTheme`（themes.js 权威）；fetch 鉴权统一走 `core.apiFetch`。
- 删除空壳 `calendar.js`/`strategies.js` 或让其承载真实域逻辑。

### 主题 C：一致性治理（P1）
- **红绿语义统一**：在令牌层新增 `--color-rise/--color-fall`（行情涨跌专用），全站统一"红涨绿跌"，charts 与组件共用。
- **对比度达标**：`--text-tertiary` 提升至 ≥4.5:1（或仅限装饰性内容），7 主题逐一验证。
- `confirm()` 全部替换为 `ElMessageBox.confirm`；快捷键帮助面板与实现同步。

### 主题 D：无障碍与可达性（P1）
- 全局规则"所有 @click 元素必须可键盘聚焦"：用户菜单、状态 tab、自选 checkbox、行内 ⭐、折叠区补 tabindex + role + aria。
- 补 aria-label（图标按钮）、aria-current（导航）、aria-expanded（折叠）、aria-modal + focus-trap（弹窗）。
- Markdown/v-html 渲染加 sanitize（DOMPurify 或自研白名单）。

### 主题 E：状态与列表收敛（P2）
- error/offline 态接入：请求失败展示统一错误面板 + 重试，替代纯 toast。
- ai-page 历史/自选列表接入虚拟列表。
- 骨架屏统一为 state-panel loading。

### 主题 F：交互性能（P2）
- 池信号并发（限流）拉取；问股历史惰性加载（分页/按需）。
- 研究页占位子页处理（隐藏或 roadmap 说明）。

### 主题 G：视觉微调（P2）
- 登录页品牌化升级；系统字体栈微调（数字/表格等宽）；ai-page 聚合视图模板抽取复用。

---

## 8. 风险与注意事项

| 风险 | 应对 |
|------|------|
| 架构收敛（P1 系列）改动面大 | 每项独立 commit + 全量 pytest + 浏览器冒烟（0 pageerror 金标准）；改动 ≤3 文件/次 |
| 红绿语义统一涉及全站 | 先定义令牌，再分批替换；TC-11.9 令牌纪律 + 视觉回归截图兜底 |
| 无障碍改造易漏 | 新增自动化 lint/测试（如 aria 计数、focusable 检查）纳入 CI |
| 配置完备化新增 UI 回归 | 复用现有 dialog 组件模式 + 既有 API，避免新增大状态 |

---

## 9. 结论

当前系统 UI/UX 已具备**扎实基础**（令牌体系、7 主题、命令面板、缓存静默刷新、虚拟滚动、四态组件、移动端专项、暗色走查），v3.11 的架构债务已大部分消化。剩余问题集中在三类：**配置功能不可达（P0）、一致性/无障碍欠账（P1）、体验细节（P2）**。

建议下一个小版本 v3.16 定为「**体验打磨与系统完备化**」：按 **A 配置完备化 → B 架构收敛 → C 一致性 → D 无障碍 → E 状态收敛 → F 性能 → G 视觉** 七主题推进，每主题自洽可独立验收。预计 2-3 周（可分批压缩）。
