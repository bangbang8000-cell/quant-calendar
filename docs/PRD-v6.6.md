# PRD v6.6：界面美术打磨收尾（基于 V6.2 美术评估报告）

> 版本：v6.6（草稿，待评审）
> 状态：待用户评审
> 需求来源：《V6.2 美术与 UI 综合评估报告》（Navigation-System-Evaluation-v4.md）、《导航与菜单系统编码交接文档 v1.4 第二十章》（Navigation-System-Handover-v1.md）

---

## 1 概述

### 1.1 背景

V6.5 已落地部分 V6.2 美术评估整改项（主要页面 emoji→Lucide、AppIcon 白名单扩展、搜索框缩窄、state-panel 支持 Lucide、策略总览半透明去除）。实测基线显示仍有以下残留，构成 V6.6 范围：

- **emoji 残留约 78 处**：research-page(29)、ai-page(21)、calendar-page(10)、focus-view(6)、history-record(5)、command-panel(5)、global-header(2)、index.html(1)
- **内联动态色 42 处**：strategies-page(12)、system-page(22)、ai-page(8)
- **旧 token 引用约 1117 处**：`--font-*`(759)、`--sp-*`(92)、`--r-*`(227)、`--shadow-*`(39)，集中在 themes.css
- **AppIcon 非白名单回退为纯文本**（`<span>{{ name }}</span>`），缺失图标 name 会渲染为文本而非图标
- 暗色主题语义色双轨、hover 背景不一致、弹窗/下拉半透明残留

### 1.2 目标

- 全站 emoji 清零（装饰性），统一为 Lucide 线条图标
- 页面内联 `:style` 动态色/背景迁移为语义 token 类
- 旧 token（字号/间距/圆角/阴影）迁移到 `--qc-*` 体系，保留兼容映射
- AppIcon 非白名单回退改为默认图标（circle-dot/help-circle），不再输出文本
- 暗色主题语义色统一、hover 背景统一、弹窗/下拉背景实底化
- 全部变更不破坏既有功能与布局，门禁回归通过

### 1.3 已确认决策（沿用评估报告建议）

| # | 决策点 | 结论 |
|---|---|---|
| D1 | 改动范围 | 全站 UI 打磨，不触碰业务逻辑与数据结构 |
| D2 | emoji 替换边界 | 装饰性 emoji 全量替换；语义标记（✓/✗/●/星级收藏交互态）按场景处理——状态类替换为图标，收藏类保留语义 |
| D3 | 旧 token 处理 | 保留兼容层（tokens.css 旧别名仍映射），先迁移高频文件，不一次性全站重写 |
| D4 | 分期 | 全量一期完成（M0 快速项 → M1 emoji 清理 → M2 token/暗色收尾 → M3 回归） |

---

## 2 功能概览

| ID | 功能 | 类型 | 优先级 |
|---|---|---|---|
| F1 | 全站 emoji 残留清理（research/ai/calendar/focus/history/command/global-header/index.html） | 样式 | P0 |
| F2 | AppIcon 非白名单回退改默认图标（消除文本回退） | 组件 | P0 |
| F3 | 页面内联 `:style` 动态色/背景迁移为语义 token 类 | 样式/重构 | P0 |
| F4 | 暗色主题收尾：语义色统一、hover 背景统一、弹窗/下拉实底 | 样式 | P1 |
| F5 | 旧 token 高频迁移（字号/间距/圆角/阴影 → `--qc-*`） | 样式/重构 | P1 |
| F6 | 状态指示（✓/✗/等级点）统一为图标/彩色 dot + 文字 | 样式 | P1 |

---

## 3 模块详述

### 3.1 F1 全站 emoji 残留清理（核心，P0）

#### 3.1.1 现状

V6.5 已清理 system/strategies/shortterm/弹窗 + 语言包，但以下文件仍有装饰性 emoji：

| 文件 | 处数 | 代表 |
|---|---|---|
| research-page.js | 29 | 📊✏️🚀🔗💾🗑🟢▶ |
| ai-page.js | 21 | ⚙📈⭐🎯⚡📊🤖 |
| calendar-page.js | 10 | 💎📌⭐🤖📈 |
| focus-view.js | 6 | 🔥🟢🟡⚪🔵🎯 |
| history-record.js | 5 | 🤖📈🕐⭐💬 |
| command-panel.js | 5 | 🎨📈 |
| global-header.js | 2 | ⚙🎨 |
| index.html | 1 | 🤖（AI FAB 加载态） |

#### 3.1.2 修复逻辑

- 按 V6.2 评估报告第八节「emoji 替换速查表」映射（⭐→star、🤖→bot、📈→trending-up、📊→bar-chart-3、🟢🟡🔴→彩色 dot + 文字、✓✗→check/x 等）。
- 状态类 emoji（🟢🟡🔴⚪🔵 等级点）替换为 `.qc-status-dot` + 语义 class；收藏交互（⭐/☆）保留语义（点击切换）。
- 静态模板位替换为 `<qc-icon>`；动态文本/AI 生成内容保留。
- 替换后 AppIcon 白名单需覆盖全部新 name（见 F2）。

#### 3.1.3 边界

- 语义标记（✓/✗ 若作为状态文本、星级交互）按场景区分，不盲目全删。
- 替换不改变任何业务逻辑、事件、数据结构。

### 3.2 F2 AppIcon 非白名单回退改进（P0）

**现状**：[AppIcon.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/common/AppIcon.vue) 非白名单 name 时 `ICON_MAP[name]` 为 null → 渲染 `<span class="qc-icon-fallback">{{ name }}</span>` 纯文本。

**目标**：非白名单 name 时渲染默认图标（`circle-dot` 或 `help-circle`），不再输出文本，避免 `📈` 等遗留 name 以文本形式外泄。

**实现**：`comp()` 返回 `ICON_MAP[name] || ICON_MAP['circle-dot']`；`v-else` 分支删除或改为不渲染。

### 3.3 F3 页面内联动态色/背景 token 化（P0）

**现状**：42 处 `:style` 动态色/背景，如 strategies-page 美林时钟 badge、system-page 状态色、ai-page 评分色。

**目标**：迁移为语义 token 类。推荐新增（对齐 V6.2 评估 8.2 节）：
- 文本：`.qc-text-success/warning/error/info/muted`
- 背景：`.qc-bg-success-subtle/warning-subtle/error-subtle/primary-subtle`
- 状态点：`.qc-status-dot.is-success/warning/error/neutral`
- 美林时钟：`.qc-merrill-bearish/bullish/...`（按阶段绑定 class）

服务端动态返回的颜色值（如 `merrillData.color`）需保留——若必须实时色则保留内联；若为固定阶段色则改 class。`[待确认]`：以实测各 `:style` 数据源为准，固定值优先 token 化。

### 3.4 F4 暗色主题收尾（P1）

- 语义色统一：`--color-success/warning/danger/info` 与 `--el-*` 在 dark-pro 中对齐。
- hover 背景统一：`--bg-hover` 收敛为 `--qc-nav-item-hover-bg`。
- 弹窗/下拉背景实底：dark-pro 下 `--el-dialog-bg-color`/`--el-dropdown-bg-color` 设不透明 `--qc-card` 值（或 ≥0.95 不透明度），消除玻璃残留。
- `--qc-muted-foreground` 暗色下提亮至对比度 ≥4.5:1。

### 3.5 F5 旧 token 高频迁移（P1）

- 迁移顺序：themes.css 高频（字号/间距/圆角/阴影）→ layout.css → responsive.css → animations.css。
- 保留 tokens.css 旧别名兼容层（`--font-xs` → `--qc-font-size-xs` 等），避免一次性全量破坏。
- 目标：高频文件（themes.css 主要区块）旧 token 引用减少 60% 以上，全站减少 40%。

### 3.6 F6 状态指示统一（P1）

- `✓/✗` 字符 → `<qc-icon name="check"/x">`（system-page 数据源健康、self-heal 等）。
- 等级点（🟢🟡🔴）→ `.qc-status-dot` + 语义 class。
- 运行/暂停（▶⏸）→ play/pause 图标。

---

## 4 影响面

| 域 | 影响 |
|---|---|
| `frontend/js/components/{research,ai,calendar,focus-view,history-record,command-panel,global-header}-page.js` 或 .js | emoji 替换 + 内联样式 token 化 |
| `frontend/src/components/common/AppIcon.vue` | 非白名单回退默认图标；新增必要图标 |
| `frontend/js/app-logic.js` | 若 SUB_ICONS/图标 name 需同步（视替换情况） |
| `frontend/css/tokens.css` / `themes.css` / `layout.css` / `responsive.css` / `animations.css` | 语义工具类、暗色收尾、旧 token 迁移 |
| `frontend/index.html` | AI FAB 加载态 emoji |
| `backend` | **无改动**（纯前端） |
| 版本号 | 6.5.1 → 6.6.0 |

## 5 风险

1. **内联动态色 token 化误伤（R1，中）**：服务端返回的实时颜色若硬改 class 会丢失动态性。以实测数据源为准，固定阶段色改 class、实时色保留内联（见 §3.3 `[待确认]`）。
2. **旧 token 迁移破坏布局（R2，中）**：~1117 处引用，一次性重写风险高。分期迁移 + 保留兼容层 + 视觉回归截图对比。
3. **emoji 替换遗漏（R3，低）**：以门禁扫描（残留 emoji 计数）兜底。
4. **AppIcon 回退行为变化（R4，低）**：从「显示文本」改「默认图标」，需确认无依赖文本回退的现有调用。

## 6 验收标准（摘要，详见 TEST-PLAN）

- AC1 全站装饰性 emoji 清零（门禁扫描 = 0）；语义标记按场景保留。
- AC2 AppIcon 非白名单 name 渲染默认图标，不输出文本。
- AC3 42 处内联动态色中，固定值项已 token 化；实时色项保留内联并注明。
- AC4 暗色主题：语义色统一、hover 统一、弹窗/下拉实底，对比度 ≥4.5:1（muted）。
- AC5 高频文件旧 token 引用减少 ≥60%；兼容层保留，无布局破坏。
- AC6 状态指示统一为图标/dot + 文字。
- AC7 既有 V6.x 门禁回归通过；版本 bump 6.6.0。

## 7 里程碑（详见 DEV-PLAN-v6.6）

| 里程碑 | 内容 |
|---|---|
| M0 | 快速项：F2 AppIcon 回退 + F6 状态指示 + F4 暗色收尾 |
| M1 | F1 全站 emoji 清理（research/ai/calendar/focus/history/command/global-header/index.html） |
| M2 | F3 内联样式 token 化 + F5 旧 token 高频迁移 |
| M3 | 构建 + 版本 bump 6.6.0 + 门禁回归 + 视觉走查 |
