# 量化日历 V6.1 产品需求文档（PRD 6.1 · 三栏式布局与视觉系统统一）

- **文档版本**：v1.0（待评审）
- **日期**：2026-09-09
- **产品基线**：V6.0（导航与菜单系统重构已落地）
- **配套**：DEV-PLAN-v6.1.md | TEST-PLAN-v6.1.md
- **需求来源**：`Navigation-System-Evaluation-v2.md`（用户 6+1 项方向）与 `Navigation-System-Handover-v1.md`（第十六章实施指南）
- **状态**：待用户评审
- **范围约束**：沿用 V6.0 分支纪律，本地开发，不推送主线；版本纪律 APP_VERSION 由 `backend/main_new.py` 单一来源 bump 至 6.1.0

---

## 0. 背景与目标

### 0.1 为什么做这一版

V6.0 把导航从"页面内 Tab + 侧边栏混用"收敛成"一级侧边栏 + 二级 SubNav"两个 SFC 组件，并建立了 `--qc-*` 设计 token 与金色默认主题，工程地基已经扎实。但视觉与交互的**一致性**仍是短板，具体表现为六类分散问题：

| 问题 | 现状（已验证的代码位置） | 用户可感知的影响 |
|---|---|---|
| 导航形态不统一 | 策略总览/量化日历/智能评估/短线复盘用顶部 Tab（[SubNav.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/SubNav.vue) `TOP_TAB_PAGES`），策略研究/系统配置用左侧子导航 | 同一个"二级"概念有两种长相，切换成本高 |
| 图标系统四套并存 | [icons.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/icons.js) 含 emoji/ink/edge/crystal 四套映射，菜单数据同时带 `icon` 与 `iconName` 两个字段（[app-logic.js:115-120](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L115-L120)） | 图标风格割裂、维护成本高 |
| 主题多达八套 | [themes.js:11-20](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/themes.js#L11-L20) 定义 8 个主题，[themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css) 有 8 组 `[data-theme]` 规则 | 用户决策负担重；暗色只有 1 套，明色却有 7 套 |
| 宽屏右侧大片空白 | [themes.css:837](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L837) `max-width: min(1400px, …)` 限制工作区宽度 | 专业工具在大屏上"内容居中一小条"，观感业余 |
| 品牌标识被弱化 | [Sidebar.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/Sidebar.vue)、[MobileNav.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/MobileNav.vue) 的 Logo 已退化为单色 K 线（`var(--qc-primary-600)`） | 与登录页彩色 K 线 logo 不一致，品牌感下降 |
| 股票列表样式不一 | 股票池用 `consensus-item`（calendar-page.js:57）、自选股用 `watchlist-item` 卡片、涨停池/龙虎榜用 `el-table`（shortterm-page.js:172） | 同为"股票列表"在不同页面长相各异 |

### 0.2 目标

1. **布局统一**：全部一级页面改为「左侧一级 + 中栏二级常驻 + 右侧工作区」三栏式，工作区填满剩余宽度。
2. **视觉系统收敛**：图标只保留一套（Lucide）；主题收敛为「明 / 暗」两套模式 + 主题色色相调节（预设色板 + 自定义）。
3. **品牌还原**：恢复彩色 K 线 Logo，三处（桌面侧边栏 / 移动抽屉 / 登录页）一致。
4. **列表统一**：股票列表收敛为统一的 `.qc-stock-list` 视觉语言。
5. **效率增强**：在工作区顶部引入动态页签，已打开的二级页面留存、可关闭、可快速切换。

### 0.3 已确认的决策（2026-09-09 用户确认）

- 图标统一保留 **Lucide**（沿用现有 `AppIcon.vue`，不引入 Element Plus 图标库）。
- **动态页签纳入本期** V6.1（不做第二阶段延迟）。
- 主题色提供**预设色板 + 自定义色相**两种选择方式。
- 股票列表统一采用**纯 CSS 类 `.qc-stock-list`**，不新建独立组件。

---

## 1. 功能范围总览

| # | 模块 | 功能描述 | 优先级 |
|---|---|---|---|
| F1 | 三栏式布局 | 根结构改为 Sidebar + SubNav 中栏 + Work Area 三栏；中栏二级常驻全部一级页面；SubNav 移除 top-tab/left-subnav 双形态 | P0 |
| F2 | 工作区右移 | 移除 `max-width: min(1400px, …)` 限制，工作区填满剩余宽度；可读内容（表单/正文）用 `.qc-readable` 限宽 1200px，数据表/图表撑满 | P0 |
| F3 | 页面组件去重 | 六个页面组件移除内部 `.page-header` 标题与二级切换 UI，仅按 `currentSubPage` 渲染子内容；标题由 Header 面包屑 / SubNav 顶部承载 | P0 |
| F4 | 图标统一 | 删除 emoji/ink/edge/crystal 四套冗余图标系统、菜单 `icon` 字段、`icon-system-*` 类与系统配置切换块；仅保留 Lucide `AppIcon` | P1 |
| F5 | 主题简化 | 8 套主题收敛为「模式（明/暗/跟随系统）+ 主题色（预设 6 色 + 自定义色相）」双维度；HS 生成主色 token；存量主题值自动迁移 | P1 |
| F6 | Logo 还原 | 桌面侧边栏 / 移动抽屉恢复彩色 K 线 Logo（与登录页一致，固定品牌色，不随主题变色） | P0 |
| F7 | 统一股票列表 | 新增 `.qc-stock-list` / `.qc-stock-row` 样式；只读型列表（股票池、涨停池、策略列表等）逐步替换；多字段 `el-table` 场景统一表样式 | P2 |
| F8 | 动态页签 | Work Area 顶部页签栏：点击中栏二级项打开页签、可关闭、最多 8 个、按一级分组记忆；URL hash 复用现有双向同步 | P0 |
| F9 | 信息密度联动 | 现有 `info_density`（紧凑/舒适/宽松）联动 Sidebar/SubNav/卡片/表格行高 | P2 |
| F10 | 键盘导航 | 一级/二级菜单 ↑↓ 移动、Enter 进入；页签 Ctrl+Tab / Ctrl+Shift+Tab 切换 | P3 |

> P3 项（F10）在验收期确认，若影响进度可顺延至 V6.2，不阻塞本期主线。

---

## 2. 模块详述

### 2.1 F1 三栏式布局 + F2 工作区右移

#### 原型

```
┌──────────┬──────────┬────────────────────────────────────────────┐
│ Sidebar  │ SubNav   │ Work Area                                  │
│ 一级      │ 二级常驻  │ ┌─ Header（面包屑 / 搜索 / 工具区）─────┐ │
│ 220px    │ 200px    │ ├─ 动态页签栏（F8，可选显示）──────────┤ │
│ 折叠64px │          │ ├─ 页面内容（填满剩余宽度）────────────┤ │
│          │          │ └────────────────────────────────────────┘ │
├──────────┴──────────┴────────────────────────────────────────────┤
│ MobileNav（<768px 显示）                                           │
└───────────────────────────────────────────────────────────────────┘
```

#### 功能描述

- **根结构**：`index.html` 主界面区改为 `div.qc-app-layout` 包裹三个区域：`qc-sidebar`、`qc-subnav`（中栏）、`div.qc-work-area`（内含 `qc-header` + 动态页签栏 + `div.qc-work-area-content` 页面内容）。移动端 `qc-mobile-nav` 保留在布局根下。
- **中栏**：固定定位，`left = sidebar-width`（220px，折叠时 64px），宽 200px，独立纵向滚动，顶部显示当前一级页面名。
- **工作区**：`flex: 1`，左边距为 `sidebar + subnav` 之和；内容区独立纵向滚动；**移除内容区 `max-width: 1400px` 限制**。
- **页面内容宽度**：数据表格 / 图表 / KPI 卡片撑满工作区；纯文本 / 表单 / 长正文包一层 `.qc-readable`（`max-width: 1200px`），避免超长行。
- **响应式断点**：

| 断点 | Sidebar | SubNav 中栏 | Work Area | MobileNav |
|---|---|---|---|---|
| ≥1280px | 220px 展开 | 200px 常驻 | 剩余宽度 | 隐藏 |
| 768–1279px | 64px 图标 | 200px 常驻 | 剩余宽度 | 隐藏 |
| <768px | 抽屉触发 | 隐藏（二级改由 Header 下拉或抽屉承载） | 100% | 显示 |

- **交互逻辑**：中栏点击二级项 → 设置 `currentSubPage` → 触发现有 watch（[watch.js:38](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic/watch.js#L38)）写 URL hash `#page/sub` 并加载对应数据；顶部 Tab 形态不再存在。
- **约束**：`<KeepAlive>` 保持现有"整页组件单实例"粒度不变（F8 页签在其上叠加，见 2.7）；日历页日期选择器、刷新、导出等操作区保留在工作区内容顶部（由 SubNav 中栏顶部或工作区内承载），不能丢失。

### 2.2 F3 页面组件去重

#### 原型

```
改造前（strategies-page.js 内部）                改造后
┌────────────────────────────────┐      ┌──────────────────────────────┐
│ .page-header  策略总览          │      │ （标题上移到 SubNav 顶部）      │
│ [今日一屏][美林时钟][市场情绪]… │      │ （二级切换移到中栏 SubNav）     │
├────────────────────────────────┤      ├──────────────────────────────┤
│ 子内容（v-if currentSubPage）    │      │ 子内容（v-if currentSubPage）  │
└────────────────────────────────┘      └──────────────────────────────┘
```

#### 功能描述

- 六个一级页面组件（strategies / calendar / ai / research / shortterm / system）移除内部 `.page-header`、`.page-title` 与二级 Tab/子导航切换 UI。
- 页面组件只保留"按 `currentSubPage` 渲染子内容"的职责；渲染逻辑与数据 watch 不变，避免功能回归。
- 系统配置页的左侧分组三级导航迁入中栏 SubNav（分组标签 + 三级项，`SYSTEM_GROUPS` 数据复用 [SubNav.vue:15-36](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/SubNav.vue#L15-L36)）。
- 日历页日期选择器等操作区（当前在 SubNav top-tab 形态内，[SubNav.vue:106-134](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/SubNav.vue#L106-L134)）迁移到工作区内容顶部，保持行为一致。

### 2.3 F4 图标统一（保留 Lucide）

#### 功能描述

- **保留**：`src/components/common/AppIcon.vue`（lucide-vue-next 白名单映射，[AppIcon.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/common/AppIcon.vue)）。
- **删除**：
  - `frontend/js/icons.js`（四套映射 + `iconSystem` + `switchIconSystem`）；
  - [app-logic.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js) 中对 `__quantModules.icons` 的引用与菜单数据中的 `icon` 字段（仅保留 `iconName`）；
  - [index.html:123](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/index.html#L123) `:class="'icon-system-' + iconSystem"`；
  - [system-page.js:218-232](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/system-page.js#L218-L232) 的「原生/墨韵/锋线/叠彩」图标切换卡片。
- **边界**：业务内容中承载语义的 emoji（如 AI 问股悬浮按钮 🤖、空态占位）不属于"导航图标系统"，本次不清理，仅在导航菜单、侧边栏、页签中使用 Lucide。

### 2.4 F5 主题简化（明/暗 + 主题色）

#### 原型（系统配置 → 外观设置）

```
外观模式        ( ● ) 浅色   ( ) 深色   ( ) 跟随系统
主题色          [金] [蓝] [红] [绿] [紫] [粉]  [自定义色相 ────●────]
信息密度        ( ) 紧凑   ( ● ) 舒适   ( ) 宽松
```

#### 功能描述

- **新模型**：两个独立维度。
  - `theme_mode ∈ {light, dark, system}`：明色 / 暗色 / 跟随系统。
  - `theme_hue ∈ {45, 220, 0, 140, 270, 320}` 预设（金/蓝/红/绿/紫/粉）或自定义 0–360 整数。
- **token 生成**：`themes.js` 提供 `generateLightTokens(hue)` / `generateDarkTokens(hue)`，按 HSL 生成 `--qc-primary-50…900` 与背景/边框/文字 token；暗色模式主色使用同色相更高亮度，保证对比度。
- **持久化**：
  - 复用现有 `preferences.js` 的 `theme` 键（已是 light/dark/system，[preferences.js:32](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/preferences.js#L32)）作为 `theme_mode`；
  - 新增 `theme_hue` 键，纳入 `PREFERENCE_KEYS` / `PREFERENCE_VALUES`，走既有 localStorage + `/api/user/preferences` 双通道；
  - 废弃 `quant_theme` 具体主题名与用户表 `theme` 字段的写路径（读路径保留以兼容存量，见迁移）。
- **存量迁移**（老用户 8 套主题 → 新模型）：

| 旧主题 key | 映射结果 |
|---|---|
| `dark-pro` | mode=dark，hue 取原主色近似绿色相（165） |
| `classic-white` / `tech-blue` | mode=light，hue=220（蓝） |
| `classic-red` / `rose-red` | mode=light，hue=0（红） |
| `gold` / `classic-gold` | mode=light，hue=45（金） |
| `vibrant-orange` | mode=light，hue=45（金，近似） |

  迁移在启动读偏好时执行一次（检测到旧 `quant_theme` 且无新 `theme_hue` 时写入映射值并清除旧键），不新增后端 schema。
- **入口收敛**：
  - Header 用户菜单：8 主题列表改为「浅色 / 深色」快捷切换（沿用现有太阳/月亮按钮）；
  - 系统配置 → 外观设置：8 主题卡片改为「模式单选 + 色板 + 自定义色相」；
  - 移动抽屉底部主题按钮行为不变（明暗切换）。
- **交互逻辑**：切换模式或色相 → 调用 `applyTheme(mode, hue)` 生成 token 写 `data-theme-mode` 属性 + 内联 CSS 变量 → `nextTick` 后刷新已挂载 ECharts 实例（沿用 [app-logic.js:397-402](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L397-L402) 的 `refreshAllCharts` 机制）。

### 2.5 F6 Logo 还原

#### 功能描述

- 将彩色 K 线 Logo（蓝/黄/红三色柱 + 上升趋势线 + 圆角底，即登录页 [index.html:71-80](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/index.html#L71-L80) 使用的 SVG）同步到桌面侧边栏与移动抽屉。
- Logo 使用固定品牌色，不随主题色变化；替换 [Sidebar.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/Sidebar.vue) 与 [MobileNav.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/MobileNav.vue) 中的单色 K 线 SVG。
- 建议将 SVG 内容抽为共享片段或 `logo.svg` 引用，避免三处漂移。

### 2.6 F7 统一股票列表 `.qc-stock-list`

#### 功能描述

- **新增样式**（components.css 或独立 stock-list.css）：`.qc-stock-list`（纵向 flex 容器）+ `.qc-stock-row`（grid 布局：排序/代码名/tag/操作，hover 与选中态用 `--qc-primary-*` token）。
- **替换清单**（只读型卡片列表）：
  - 量化日历股票池：`stock-list` 容器 + `consensus-item`（[calendar-page.js:53,57](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/calendar-page.js#L53-L57)）→ `.qc-stock-list / .qc-stock-row`；
  - 策略总览今日一屏/共识排名（[strategies-page.js:171,437](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/strategies-page.js#L171)）→ 同上；
  - 短线复盘涨停池 / 龙虎榜、策略研究策略列表、回测历史：卡片型条目统一用 `.qc-stock-row`；多字段表格型（龙虎榜）保留 `el-table` 但覆盖表头背景/行 hover/圆角使其与卡片风格一致。
- **保留 el-table 的场景**：字段数量多、需要排序/分页/固定列的数据表（数据源健康、AI 用量、评估历史明细等），仅统一表样式 token。
- **约束**：功能型交互（自选股复选、评分徽标、左滑操作）在 `.qc-stock-row` 上通过插槽/内联元素保留，不因换 class 丢失。

### 2.7 F8 动态页签

#### 原型

```
┌───────────────────────────────────────────────────────────────┐
│ Header                                                         │
├───────────────────────────────────────────────────────────────┤
│ [今日一屏 ×] [美林时钟 ×] [市场情绪 ×]     ← 当前一级下的页签    │
├───────────────────────────────────────────────────────────────┤
│ 页面内容（= 激活页签对应的子页）                                  │
└───────────────────────────────────────────────────────────────┘
```

#### 状态设计

```js
// 按一级页面分组的页签表，会话级内存态
const tabGroups = ref({})            // { [page]: [{ subPage, title }] }
const activeTabKey = ref('')         // 当前激活 (page/subPage)
const MAX_TABS = 8
```

#### 页签规则

- **打开**：点击中栏二级项 → 若 `tabGroups[page]` 已含该 `subPage` 则仅激活；否则追加到组尾并激活。
- **上限**：每组最多 8 个，超出时关闭该组中最早未激活的页签（首页默认页签例外，见下）。
- **默认页签**：每个一级页面的第一个二级项作为"首页"页签；组内最后一个页签被关闭时自动重建默认页签并激活。
- **一级切换**：进入一级页面时若该组为空则创建默认页签；否则恢复该组上次的激活页签。切换一级时只展示当前一级的页签。
- **关闭**：关闭激活页签后激活右侧相邻页签（无右侧则左侧）；关闭非激活页签不影响激活项。
- **URL 同步**：激活页签即当前 `(page, subPage)`，复用现有 hash 双向同步（[watch.js:38](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic/watch.js#L38) 写、[lifecycle.js:27](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic/lifecycle.js#L27) 回写）；浏览器前进/后退（hashchange）时若 hash 指向子页不在页签组中，自动加入并激活。
- **刷新恢复**：刷新后仅恢复 URL hash 指向的单个页签（页签组整体持久化不在本期范围）。

#### 已知限制（本期明确不做）

- 页签只记忆 `(page, subPage)` 的导航位置，不缓存子页内表单输入、滚动位置等瞬时状态（现有 `v-if` 切换语义不变）。
- 不做"切换页签前表单未保存提示"的全局机制；各页面沿用自身已有的保存入口。
- 不做页签跨一级的"最近关闭"恢复（undo）。

---

## 3. 用户与场景

| 角色 | 使用特征 | 与本版的关系 |
|---|---|---|
| 日常盯盘用户 | 高频切换策略总览 / 日历 / 短线复盘子页 | 动态页签 + 中栏常驻直接减少切换成本；主题色满足个性化 |
| 策略研究员 | 在策略研究内长时间多子页来回 | 三栏中栏常驻使二级一直可见，研究-回测-历史可页签留存 |
| 平台管理员 | 低频进入系统配置各分组 | 分组三级迁入中栏后层级更清晰 |
| 访客 | 只读浏览 | 三栏与页签均正常可用；外观设置仅影响本人偏好 |

---

## 4. 影响面与风险

### 4.1 影响面（结构性改动，需重点回归）

| 受影响面 | 说明 |
|---|---|
| `index.html` 根结构 | 主界面布局从两栏改为三栏，`KeepAlive` / `Transition` 包裹关系调整 |
| 6 个一级页面组件 | 移除 `.page-header` 与内部二级切换，回归面最大 |
| CSS 体系 | `themes.css` / `layout.css` / `nav.css` / `responsive.css` 布局规则重写 |
| 主题数据 | 8 主题 → 2 模式 + 色相，`themes.js` / `preferences.js` / `system-page.js` / `Header.vue` 联动 |
| URL hash 路由 | 格式不变（`#page/sub`），但激活语义从"当前子页"扩展为"激活页签"，需回归前进/后退/刷新 |
| 图标系统 | 删除 `icons.js` 与 `icon-system-*`，门禁测试需同步调整 |
| i18n | 页签标题、外观设置文案需覆盖 zh-CN / en / ja / ko / zh-TW 五语言 |

### 4.2 风险与对策

| 风险 | 概率/影响 | 对策 |
|---|---|---|
| 三栏改造破坏既有页面布局与交互 | 中 / 高 | 先 desktop 后 mobile；每完成一个页面即人工冒烟；视觉回归截图对比；可整体回滚（保留两栏 CSS 到灰度期结束） |
| 主题迁移导致老用户主题丢失或对比度异常 | 中 / 中 | 迁移映射表固化 + 一次写入；暗色对比度走 WCAG 检查；保留旧 `quant_theme` 值直到新模型验证 OK 再清理 |
| 动态页签状态复杂度引入切换 bug | 中 / 中 | 页签状态机抽纯函数（打开/关闭/上限/默认页签），单测覆盖后再接 UI |
| KeepAlive 缓存与页签切换叠加 | 低 / 中 | 保持现有单实例缓存粒度不变，页签仅驱动 `currentSubPage`，不新增多实例缓存 |
| 门禁测试误报（删除图标系统/主题 key） | 中 / 低 | TEST-PLAN 同步更新门禁断言，先改测试后改代码（红→绿） |

---

## 5. 验收标准

| 模块 | 验收点 |
|---|---|
| F1/F2 | 六个一级页面均为三栏布局；宽屏下工作区填满右侧无大片空白；折叠/展开/平板/移动四态正常；图表随宽度自适应 |
| F3 | 页面组件无 `.page-header` 内部标题；二级切换只存在于中栏；各子页数据加载行为与 V6.0 一致 |
| F4 | 菜单数据无 `icon` 字段；页面无 `icon-system-*` 类；系统配置无图标切换卡片；导航图标均为 Lucide |
| F5 | 明/暗/跟随系统三种模式切换生效；预设 6 色与自定义色相均可应用；暗色对比度 ≥ WCAG AA；老用户主题按迁移表正确转换；刷新/跨设备偏好保持 |
| F6 | 桌面侧边栏、移动抽屉、登录页 Logo 均为彩色 K 线且一致；切换主题 Logo 不变色 |
| F7 | 替换清单内列表均为 `.qc-stock-row` 视觉；保留的 `el-table` 风格与卡片一致；自选股等交互功能不丢 |
| F8 | 打开/关闭/激活/上限 8/默认页签/一级分组/刷新恢复/前进后退全部符合 2.7 规则 |
| 全局 | 全量 pytest 回归绿；移动端 smoke 绿；i18n 五语言无缺词；无障碍抽查（键盘可导航、aria 属性完整） |

---

## 6. 里程碑与依赖

### 6.1 依赖

- **技术依赖**：无新增第三方依赖（保留 `lucide-vue-next`）；依赖既有 `preferences.js` 偏好通道与 hash 路由机制。
- **数据依赖**：`/api/user/preferences` 支持新增 `theme_hue` 键（JSON 透传，无 schema 变更）。

### 6.2 里程碑（与 DEV-PLAN 对应）

| 里程碑 | 内容 | 验收 |
|---|---|---|
| M0 | 三栏式布局地基（根结构 + CSS + 移除 1400px） | 桌面三栏骨架可用 |
| M1 | 页面组件去重 + 中栏二级全量覆盖 | 六个一级页全部走中栏二级 |
| M2 | 图标统一（删四套） | 门禁绿，无残留类 |
| M3 | 主题简化 + 存量迁移 | 明/暗 + 色相可用，迁移正确 |
| M4 | Logo 还原 + 股票列表统一 | 品牌一致，列表风格收敛 |
| M5 | 动态页签 | 页签规则全量通过 |
| M6 | 打磨项（信息密度 / 键盘导航 / 响应式走查） | 按验收期确认范围 |

完整任务拆解与验收细节见 DEV-PLAN-v6.1.md，测试用例见 TEST-PLAN-v6.1.md。
