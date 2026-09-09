# 量化日历 V6.2 产品需求文档（PRD 6.2 · 导航与界面细节收口）

- **文档版本**：v1.0（待评审）
- **日期**：2026-09-09
- **产品基线**：V6.1（三栏式布局与视觉系统统一已落地）
- **需求来源**：`Navigation-System-Evaluation-v3.md`（用户更新后的设计文档）
- **配套**：DEV-PLAN-v6.2.md | TEST-PLAN-v6.2.md
- **状态**：待用户评审
- **范围约束**：沿用分支纪律，本地开发，不推送主线；APP_VERSION bump 至 6.2.0

---

## 0. 背景与目标

### 0.1 为什么做这一版

V6.1 已把导航收敛为「左侧一级 + 中栏二级 + 工作区 + 动态页签」的三栏架构，主题/图标/Logo 完成统一。但对照 v3 评估报告，仍有 4 处明确的细节缺口与若干可打磨点：

| 缺口 | 现状（已验证的代码位置） | 用户可感知的影响 |
|---|---|---|
| 二级菜单图标缺失 | [SubNav.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/SubNav.vue) 仅「策略研究」6 项有图标，其余全部回退 `circle-dot` 圆点 | 中栏所有项长得一样，无法凭图标快速定位 |
| 动态页签独占一行 | 页签栏挂在工作区顶部（[index.html](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/index.html)），与 Header 面包屑信息重叠 | 垂直空间浪费一条分隔线；面包屑与页签表达同一件事 |
| 搜索框偏窄 | 桌面 `max-width: 320px`，Ctrl+K 提示为独立 span（[Header.vue:93](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/Header.vue#L93)），移动端不收缩 | 宽屏 Header 中搜索显得局促 |
| 页签关闭按钮无效 HTML | `button[role=tab]` 内嵌套 `span[role=button]`（[DynamicTabs.vue:43-48](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/DynamicTabs.vue#L43-L48)） | 交互元素嵌套，无障碍与语义不达标 |

另有两项方向性推进（经 2026-09-09 用户确认）：
- **股票列表组件化**：在 V6.1 纯 CSS 类（`.qc-stock-list`）基础上，进一步抽象 `StockList.vue` 组件，统一各页面列表渲染入口。
- **页签位置**：桌面端迁入 Header 左区取代面包屑（符合 VS Code 模式）；移动端收窄横向滚动。

### 0.2 目标

1. **中栏可识别**：全部二级菜单拥有语义图标，消除 `circle-dot` 回退。
2. **Header 一体化**：动态页签取代面包屑进入 Header 左区，工作区释放顶部一行；移动端页签收窄横滚。
3. **搜索升级**：增宽、快捷键内置、移动端自适应。
4. **语义达标**：修复页签关闭按钮嵌套 HTML，键盘可达。
5. **列表组件化**：`StockList.vue` 统一股票列表渲染，跨页面一致。
6. **移动端补强**：Header「当前二级」下拉，触达二级功能。

### 0.3 已确认决策（2026-09-09 用户确认）

- 本轮**只出方案文档**（PRD / DEV-PLAN / TEST-PLAN），暂不改代码。
- 动态页签：**桌面迁入 Header**（取代面包屑），移动端收窄横滚。
- 股票列表：**新建 `StockList.vue` 组件**（在 `.qc-stock-list` 样式之上封装）。
- 总体取向：按 v3 设计文档推进，重构不畏惧推倒重来。

---

## 1. 功能范围总览

| # | 模块 | 功能描述 | 优先级 |
|---|---|---|---|
| F1 | 二级图标补全 | 为全部一级页的二级菜单建立 `page → subPage → 图标` 双层映射；`AppIcon.vue` 白名单新增 5 个 Lucide 图标 | P0 |
| F2 | 页签迁入 Header | 桌面端动态页签进入 Header 左区取代面包屑；删除工作区顶部挂载点与面包屑模板；移动端页签收窄横滚 + 渐变遮罩 | P0 |
| F3 | 搜索框升级 | 宽度增至 480px；Ctrl+K 内置（suffix slot）；移动端收缩并隐藏 kbd；占位符缩短 | P0 |
| F4 | 页签关闭按钮 HTML 修复 | `button[role=tab]` 改为 `div[role=tab]` + 独立 `button` 关闭，消除嵌套交互元素 | P1 |
| F5 | StockList.vue 组件 | 在 `.qc-stock-list` 样式之上封装通用股票列表组件（排名/代码/名称/标签/操作 slot），替换 6 个入口 | P1 |
| F6 | 移动端二级入口 | Header 左区增加「当前二级」下拉按钮，移动端可直达二级 | P1 |
| F7 | 响应式断点细化 | 增加 1024-1279 / 768-1023 两档中栏宽度（180px / 160px），文字截断 + Tooltip | P2 |
| F8 | 页签交互增强 | 右键菜单（关闭其他/全部关闭/刷新）、未保存提示、拖拽排序 | P3 |

> F8 标注 P3，评审确认后再决定是否纳入本期，不阻塞主线。

---

## 2. 模块详述

### 2.1 F1 二级图标补全

#### 原型（中栏效果）

```
策略总览          量化日历          智能评估
◉ 概览            ◉ 日视图          ◉ 评估概览
◷ 美林时钟        ◉ 周视图          ◎ 重点跟踪
↗ 市场行情        ◉ 月视图          ☆ 我的自选
◎ 策略共识榜      ◉ 年视图          ↺ 评估历史
                  ▤ 股票池          ▥ 命中率分析
                                   ◌ 问股历史
```

#### 功能描述

- **数据结构**：`SubNav.vue` 的 `SUB_ICONS` 改为双层映射 `{ [page]: { [subPage]: iconName } }`，`subIcon(page, sp)` 查找，未命中回退 `circle-dot`。避免 `overview` 等跨页 key 冲突。
- **图标映射**（完整见 v3 文档 §2.1，此处列与当前差异）：

| 一级 | 二级 | 图标 | 需新增白名单 |
|---|---|---|---|
| 策略总览 | overview/merrill/market/consensus | pie-chart / clock / trending-up / target | 无 |
| 量化日历 | daily/weekly/monthly/yearly/pool | calendar / calendar-days / calendar-range / calendar-check / database | calendar-days、calendar-range、calendar-check |
| 智能评估 | overview/focus/watchlist/history/evaluation-analysis/chat_history | activity / target / star / history / bar-chart-3 / message-circle | star、message-circle |
| 策略研究 | 6 项 | 沿用现有 | 无 |
| 短线复盘 | overview/market-review/ztpool/lhb/sector/intraday/scan | layout-dashboard / line-chart / trending-up / users / layers / clock / search-check | 无 |

- **AppIcon.vue**：`ICON_MAP` 新增 `star / message-circle / calendar-days / calendar-range / calendar-check`（均来自 `lucide-vue-next`）。
- **约束**：未命中的 `sp` 保留 `circle-dot` 兜底，不允许回退文本。

### 2.2 F2 页签迁入 Header（取代面包屑）

#### 原型

```
改造前（Header + 独立页签行）                  改造后（页签并入 Header 左区）
┌──────────────────────────────┐   ┌────────────────────────────────────────┐
│ ☰ 首页 / 策略总览   [搜索]    │   │ ☰ [今日一屏|美林时钟|市场行情|×] [搜索] │
├──────────────────────────────┤   ├────────────────────────────────────────┤
│ [今日一屏][美林时钟][市场行情] │   │ （面包屑与页签行移除，工作区直接开始）      │
│ ───────────────────────────── │   └────────────────────────────────────────┘
│ 页面内容                       │
└──────────────────────────────┘
```

#### 功能描述

- **桌面（≥1024px）**：
  - `Header.vue` 左区改为「汉堡按钮 + `<qc-dynamic-tabs class="qc-header-tabs">`」，**删除面包屑**模板与 `breadcrumbs` computed。
  - 从 `index.html` 的 `.qc-work-area-content` 删除 `<qc-dynamic-tabs>` 挂载点。
  - `DynamicTabs.vue` 移除自身顶部的 `v-if`/`border-bottom`，改为由 Header 容器承载横向滚动与渐变遮罩：
    - `.qc-header-tabs { flex:1; min-width:0; overflow-x:auto; mask-image: linear-gradient(to right, black 90%, transparent 100%); }`
    - 页签高度 28px，无边框底，激活态用 `--qc-muted` 背景。
- **移动端（<768px）**：
  - 页签保留在 Header 左区，宽度收窄 + 横向滚动；允许只显示少量页签。
  - 搜索框收缩（见 F3），为页签腾出空间。
- **交互**：激活页签即当前位置（语义取代面包屑）；点击页签 `activateTab`，关闭按钮 `closeTab`（复用 V6.1 状态机）。
- **约束**：`tabs` 为 0 时页签区不占位（Header 左区仅汉堡按钮）；`Ctrl+K` 快捷键不受影响。

### 2.3 F3 搜索框升级

#### 功能描述

- **宽度**：`.qc-header-center` 居中，最大 640px；`.qc-header-search` 满宽、`max-width: 480px`。
- **Ctrl+K 内置**：使用 `el-autocomplete` 的 `#suffix` slot 渲染 kbd 徽标（替代独立 `.qc-header-search-kbd` span 与文档建议的伪元素方案——伪元素依赖 EP 内部 DOM，脆弱）。
- **占位符**：缩短为「搜索股票、策略…」（五语言语言包同步）。
- **移动端**：`max-width: none`、隐藏 kbd、占位符照旧缩短；`margin` 适配窄屏。
- **交互**：聚焦态保留 `--qc-ring` 描边（沿用 V6.0 覆盖）。

### 2.4 F4 页签关闭按钮 HTML 修复

#### 原型

```html
<!-- 改造前（嵌套交互元素，无效） -->
<button class="qc-dynamic-tab" role="tab">
  <span class="qc-dynamic-tab-label">美林时钟</span>
  <span class="qc-dynamic-tab-close" role="button" tabindex="0" @click.stop="close">×</span>
</button>

<!-- 改造后（div[role=tab] + 独立 button） -->
<div class="qc-dynamic-tab" role="tab" tabindex="0" :aria-selected="…" @click="activate">
  <span class="qc-dynamic-tab-label">美林时钟</span>
  <button class="qc-dynamic-tab-close" aria-label="关闭" @click.stop="close">×</button>
</div>
```

#### 功能描述

- `button[role=tab]` 改为 `div[role=tab]`，可聚焦（`tabindex=0`），键盘 Enter/Space 激活。
- 关闭改为独立 `button`，`@click.stop` 阻止冒泡，`aria-label` 语义化。
- 保持 `role=tablist` 与 `aria-selected`。

### 2.5 F5 StockList.vue 组件

#### 原型（组件结构）

```vue
<StockList :items="stocks" :show-rank="true" active-code="600000" @select="showDetail">
  <template #extra="{ item }"> …评分/信号… </template>
  <template #actions="{ item }"> …收藏/评估… </template>
</StockList>
```

#### 功能描述

- **组件**：`frontend/src/components/common/StockList.vue`，基于 V6.1 `.qc-stock-list/.qc-stock-row` 样式封装，渲染结构：排名（可选）/ 代码 + 状态徽标 / 名称 / 策略标签 / `#extra` 插槽 / `#actions` 插槽。
- **props**：`items`、`showRank`、`activeCode`（选中态）、`emptyText`、`loading`（可选骨架）。
- **事件**：`select(item)`。
- **替换入口**（6 处）：
  - 量化日历股票池（calendar-page.js `consensus-item` 虚拟滚动行）
  - 策略总览共识排名/今日一屏（strategies-page.js）
  - 智能评估自选股、重点跟踪、评估历史（ai-page.js / focus-view.js）
  - 短线复盘涨停池、龙虎榜卡片型条目（shortterm-page.js）
  - 策略研究策略列表、回测历史
- **约束**：多字段表格（龙虎榜明细、数据源健康）继续用 `el-table`（表样式已统一）；功能型列表（自选股复选/左滑）在 `#extra/#actions` 内保留原交互，不因换组件丢失。
- **回归**：替换仅收敛渲染结构，数据加载与事件绑定语义不变。

### 2.6 F6 移动端二级入口

#### 功能描述

- 移动端 Header 左区、汉堡按钮旁增加「当前二级」下拉按钮：显示当前 `subPage` 名称 + chevron。
- 点击弹出下拉（复用抽屉内二级列表数据），选择后 `activateTab` 切换。
- 与 F2 页签并存：页签表达已打开子页，下拉表达当前一级全部可选项。

### 2.7 F7 响应式断点细化

| 断点 | Sidebar | SubNav 中栏 | 说明 |
|---|---|---|---|
| ≥1280px | 220px | 200px | 不变 |
| 1024-1279px | 64px | **180px** | 中栏略窄 |
| 768-1023px | 64px | **160px** | 文字截断 + 超长 Tooltip |
| <768px | 隐藏 | 隐藏（Header 下拉承载） | 不变 |

- 通过 `--qc-subnav-width` 的媒体查询覆盖实现；工作区 `margin-left` 联动（`calc(sidebar + subnav)`）。

### 2.8 F8 页签交互增强（P3）

- **右键菜单**：右键页签弹出「关闭其他 / 全部关闭 / 刷新当前」。
- **未保存提示**：页签内表单脏标记（复用 `configChanged` 式机制）时关闭前确认。
- **拖拽排序**：HTML5 drag 或指针拖拽调整页签顺序，持久化到会话态。

---

## 3. 影响面与风险

| 受影响面 | 说明 |
|---|---|
| Header 结构 | 面包屑删除、页签并入，`header.css` 布局重写（左/中/右比例） |
| DynamicTabs | 挂载点从 index.html 移到 Header；HTML 结构重构（F4） |
| SubNav / AppIcon | 二级图标双层映射 + 白名单扩展 |
| index.html | 删除工作区页签挂载点 |
| 6 个页面组件 | StockList 替换（F5），回归面最大 |
| i18n | 搜索占位符、页签右键菜单文案覆盖五语言 |
| 无障碍 | 页签 tab/关闭按钮语义修复 |

**风险与对策**

| 风险 | 概率/影响 | 对策 |
|---|---|---|
| 页签迁 Header 后移动端拥挤 | 中/中 | 移动端搜索收缩 + 页签横滚；分档落地（桌面先验证） |
| StockList 替换破坏既有交互（自选复选/左滑） | 中/高 | 逐入口替换并冒烟；保留 `#extra/#actions` 插槽承接原交互 |
| 面包屑删除后"当前页"语境丢失 | 低/低 | 激活页签标题 + 中栏高亮已承载 |
| 搜索 suffix slot 与 EP 版本兼容 | 低/低 | 用 EP 公开 slot，不依赖内部类名 |

---

## 4. 验收标准

| 模块 | 验收点 |
|---|---|
| F1 | 六个一级页二级项均显示语义图标；无 `circle-dot` 回退（除确实无对应项）；AppIcon 白名单含 5 个新增图标 |
| F2 | 桌面页签位于 Header 左区、无独立页签行；面包屑移除；激活页签切换正确；移动端页签可横滚 |
| F3 | 桌面搜索 480px 居中；Ctrl+K 内置可点；移动端收缩且无 kbd |
| F4 | 页签 DOM 为 `div[role=tab]` + 独立 `button`；键盘 Enter/Space 可达；无嵌套交互元素 |
| F5 | 6 个入口经 StockList 渲染；排名/代码/名称/标签/操作一致；自选复选与左滑不回归 |
| F6 | 移动端 Header 下拉可直达二级；选择后切换子页并关闭 |
| F7 | 四档断点下中栏宽度与工作区 margin 正确 |
| F8 | （若纳入）右键菜单/未保存提示/拖拽排序符合交互规则 |
| 全局 | 全量 pytest + 构建通过；i18n 五语言无缺词；无障碍抽查 |

---

## 5. 里程碑与依赖

### 5.1 依赖

- 无新增第三方依赖（StockList 基于现有 `.qc-stock-list` 样式与 Element Plus）。
- 页签状态机复用 V6.1 `tabs-core.js` 与 `qcState` 的 openTab/closeTab/activateTab。

### 5.2 里程碑（对应 DEV-PLAN）

| 里程碑 | 内容 | 验收 |
|---|---|---|
| M0 | 二级图标补全（SubNav 双层映射 + AppIcon 白名单） | 中栏全图标 |
| M1 | 页签迁 Header（桌面 A + 移动端收窄）+ 面包屑移除 + 关闭按钮 HTML 修复 | Header 一体化 |
| M2 | 搜索框升级 | 搜索宽 + kbd 内置 + 移动端收缩 |
| M3 | StockList.vue 组件 + 6 入口替换 | 列表统一 |
| M4 | 移动端二级下拉 + 断点细化 | 移动端触达 + 中栏分档 |
| M5 | 页签增强（P3，按评审确认） | 右键/拖拽/未保存 |

完整任务拆解与验收细节见 DEV-PLAN-v6.2.md，测试用例见 TEST-PLAN-v6.2.md。
