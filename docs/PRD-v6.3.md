# PRD v6.3：导航形态配置化与顶部栏容器化

> 版本：v6.3（草稿，待评审）
> 状态：待用户评审
> 关联：PRD-v6.1 / PRD-v6.2（V6 导航与视觉体系延续）

---

## 1 概述

### 1.1 背景

V6.0–V6.2 建立了「一级侧栏 + 中栏二级 + Header 动态页签」的三层导航体系，但在实际使用中发现三个问题：

1. **导航三通道重复**：同一二级页面被 ①侧栏一级展开的树状子菜单、②中栏 SubNav 常驻二级、③Header 动态页签 三个通道同时表达，层级心智负担重、视觉冗余。
2. **顶部栏视觉**：Header 为全宽贴顶条、无圆角、与下方工作区零间隔，视觉上"直接靠太近"。
3. **命名 Bug**：智能评估下「评估分析」子页显示编程 id `evaluation-analysis`，非中文。

### 1.2 目标

- 导航改为**可配置的形态化**：通过配置在「树状侧栏 / 中栏二级 / 顶部二级」三种形态间切换，消除三通道重复，任意时刻只有一条主二级通道。
- 顶部栏容器化：圆角矩形 + 与工作区间隙。
- 页签圆角矩形化（非椭圆）。
- 修复「评估分析」中文显示并审计同类遗漏。
- 全部变更兼容现有菜单授权（`visible_menus` / `visible_sub_pages`）、路由 hash、i18n、移动端。

### 1.3 已确认决策（用户评审已拍板）

| # | 决策点 | 结论 |
|---|---|---|
| D1 | 导航形态配置粒度 | **全局统一模式**（系统级一个模式，所有一级页统一） |
| D2 | 「顶部二级」形态 | **横向标签页**（顶部横向 tab 承担二级定位，页签职责由 tab 承担） |
| D3 | 「动态页签」开关范围 | **全局开关**（默认开启，仅非顶部模式生效） |
| D4 | 实施分期 | **全量一期完成**（先样式+修复快速项，再导航重构，全部本期交付） |

---

## 2 功能概览

| ID | 功能 | 类型 | 优先级 |
|---|---|---|---|
| F1 | 顶部栏容器化：圆角矩形 + 与工作区间隙 | 样式 | P0 |
| F2 | 页签圆角矩形化（非椭圆） | 样式 | P0 |
| F3 | 导航形态配置化（tree / subnav / toptab 三模式） | 功能/架构 | P0 |
| F4 | 动态页签全局开关（默认开） | 功能 | P0 |
| F5 | 「评估分析」中文显示修复 + subPageNames 全量审计 | Bug 修复 | P0 |
| F6 | 响应式与移动端适配（含 toptab 移动端下拉） | 功能 | P1 |

---

## 3 模块详述

### 3.1 F3 导航形态配置化（核心）

#### 3.1.1 形态定义

新增全局配置 `navMode ∈ { 'subnav', 'tree', 'toptab' }`，默认 **`subnav`**（当前形态，零回归）。

**形态 A：`subnav` 中栏二级（默认，即当前形态）**

```
┌──────┬──────────┬──────────────────────────────────────────────┐
│ 一级 │ 中栏二级  │  Header（搜索 | 动态页签[tabsEnabled]）          │
│ 侧栏 │  (常驻)   │──────────────────────────────────────────────│
│      │ overview │  工作区内容                                    │
│      │ merrill  │                                                │
│      │ market   │                                                │
│      │ consensus│                                                │
└──────┴──────────┴──────────────────────────────────────────────┘
```
- 侧栏仅一级（**不**渲染树状子菜单 chevron/children）
- 中栏 SubNav 常驻二级
- 动态页签：随 `tabsEnabled`（默认显示）

**形态 B：`tree` 树状侧栏**

```
┌────────────────────────┬────────────────────────────────────────┐
│ 一级侧栏（树状展开）      │  Header（搜索 | 动态页签[tabsEnabled]）    │
│ ▾ 智能评估              │────────────────────────────────────────│
│    · 概览              │  工作区内容                              │
│    · 重点跟踪           │                                         │
│    · 评估分析           │                                         │
│    · ...               │                                         │
└────────────────────────┴────────────────────────────────────────┘
```
- 侧栏一级 + 展开树状二级（复用现有 `expandedMenus` 交互）
- 中栏 SubNav 隐藏（`main-content` 仅算侧栏宽度）
- 动态页签：随 `tabsEnabled`（默认显示）

**形态 C：`toptab` 顶部二级横向标签**

```
┌──────┬──────────────────────────────────────────────────────────┐
│ 一级 │ Header：搜索  |  [概览][重点跟踪][评估分析][历史]  ← 二级tab │
│ 侧栏 │──────────────────────────────────────────────────────────│
│      │  工作区内容                                               │
│      │                                                            │
└──────┴──────────────────────────────────────────────────────────┘
```
- 侧栏仅一级
- 中栏隐藏
- Header 内新增**二级横向标签区**（当前一级页的 subPages 横排，激活高亮，不可关闭、无右键菜单）
- **动态页签隐藏**（二级 tab 已承担定位职责，避免功能重叠）
- 移动端：沿用现有「当前二级」下拉

#### 3.1.2 状态与存储

- `navMode`、`tabsEnabled` 为全局 UI 偏好，**localStorage 持久化**（键 `nav_mode` / `tabs_enabled`），与 `sidebar_collapsed` / `research_menu_enabled` 同一机制。
- 不写入后端用户组配置（那是授权语义，导航形态是个人偏好语义，不混用）。

#### 3.1.3 配置入口

- 位置：**系统配置 → 功能配置（feature）**，新增「界面与导航」区块：
  - 「导航形态」下拉：树状侧栏 / 中栏二级 / 顶部二级
  - 「动态页签」开关（默认开；顶部模式下置灰并提示由二级 tab 承担）
- 变更立即生效（实时切换，无需刷新）。

#### 3.1.4 各形态行为矩阵

| 元素 | subnav（默认） | tree | toptab |
|---|---|---|---|
| 侧栏一级 | ✅ | ✅ | ✅ |
| 侧栏树状二级 | ❌ | ✅ | ❌ |
| 中栏 SubNav | ✅ | ❌ | ❌ |
| Header 二级 tab | ❌ | ❌ | ✅ |
| 动态页签 | `tabsEnabled` | `tabsEnabled` | ❌ |
| `main-content` 左边距 | sidebar + subnav | sidebar | sidebar |
| 移动端「当前二级」下拉 | ✅ | ✅ | ✅（可保留，替代 tab） |

#### 3.1.5 实现要点

- 根容器加 `:data-navmode="navMode"`，CSS 以 `[data-navmode="..."]` 驱动显隐与左边距（`.qc-subnav-column` 显隐、`.main-content` 的 `margin-left`）。
- 组件级 `v-if`：
  - `SubNav.vue`：`navMode === 'subnav'` 渲染。
  - `Sidebar.vue`：`showChildren = navMode === 'tree' && hasChildren`（控制 chevron + children）。
  - `Header.vue`：动态页签 `v-if="(navMode==='subnav'||navMode==='tree') && tabsEnabled"`；toptab 模式渲染 `<qc-top-tabs>`。
- 新增纯函数模块 `nav-mode-core.js`（UMD，仿 `tabs-core.js`）：`applyNavMode` / `tabsVisible(navMode, tabsEnabled)` / 合法值归一化 / localStorage 读写，可单测。
- 路由 hash（`#page/sub`）与 `openTab` 机制不变；toptab 模式点击二级 tab 复用 `state.openTab` / `navigateTo`。

### 3.2 F4 动态页签全局开关

- 全局布尔 `tabsEnabled`（默认 `true`）。
- 生效域：`subnav` / `tree` 形态；`toptab` 形态强制隐藏（见矩阵）。
- 关闭时：Header 左区不再渲染页签，空间让给搜索；仍可通过中栏/树状/顶部二级导航切换页面（无浏览历史记忆）。

### 3.3 F1 顶部栏容器化（样式）

**现状**：

```
┌────────────────────────────────────────────┐
│ Header 全宽贴顶条（sticky, 无圆角, 零间隔）     │  ←──┐ 贴得太近
├────────────────────────────────────────────┤     │
│ 工作区内容（padding 20px）                    │ ←──┘
```

**目标**：

```
   ┌──────────────────────────────────────────┐
   │ Header 圆角卡片（radius 12px, gap 12px）   │  ← 悬浮圆角条
   ├──────────────────────────────────────────┤
   │ 工作区内容（与 Header 间 12px 间隙）         │
```

- `.qc-header`：`border-radius: var(--qc-radius-large)`(12px)；与下方工作区留 **12px** 间隙（`main-content` 顶部 padding / header `margin-bottom`）。
- 顶部间距：`main-content` `padding-top` 由 20px 调整为「header 上方 12px + header 56px + 间隙 12px」结构，滚动时 header 仍 sticky（`top` 取小值保持贴顶后圆角裁剪自然）。
- 圆角与页签横滚渐变遮罩协调：`.qc-header` 设 `overflow: hidden`（裁剪内部横滚区圆角），页签横滚保留 `mask-image`。
- 移动端（<768px）：`margin` 归零、`border-radius` 归零或小圆角（贴边布局），间距收窄为 8px。

### 3.4 F2 页签圆角矩形化

- 目标值：页签 `border-radius: var(--qc-radius-small)`（**6px 圆角矩形**，非椭圆）。
- 现状核查：`header.css` 已声明 `.qc-header-tabs .qc-dynamic-tab { border-radius: small }`，但实际呈现椭圆 → 疑似覆盖未生效。**需先在浏览器实测**确认生效值，若确为椭圆则修特异性/加载顺序；同时排查是否存在其他页签形态（非 Header 内）仍走 `nav.css` 的 `--qc-radius-full`（9999px 胶囊）。
- 搜索框：`el-input__wrapper` 当前为胶囊（`--qc-radius-full`）。**评审点**：保持胶囊（现代惯例）或随整体改 8px 矩形。本文档默认**保持胶囊**，如需统一可改为 8px（一行 CSS）。
- 统一后：`.qc-dynamic-tab` 的 `border-radius` 全量收敛为 `--qc-radius-small`，删除 `--qc-radius-full` 分支。

### 3.5 F5 「评估分析」中文显示修复

- 根因：新版导航统一读 `state.subPageNames`（[app-logic.js:L346-356](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L346-L356)），该静态表**漏配 `evaluation-analysis`**，回退显示原始 id。
- 修复：补 `'evaluation-analysis': '评估分析'`（与 i18n `sub.evaluation-analysis` 文案一致）。一处修复，中栏/页签标题/移动端下拉/授权对话框四处同步恢复。
- **顺带审计**：以 `allMenuDefs` 全部 subPages 为基准，diff `subPageNames`，补齐所有遗漏项（一次性杜绝同类问题）。

### 3.6 F6 响应式与移动端适配

- 三种形态在移动端（<768px）：
  - 侧栏 → 抽屉（现有机制）；
  - `subnav`：中栏隐藏（现有 responsive 已隐藏），移动端「当前二级」下拉承担二级；
  - `tree`：抽屉内树状展开；
  - `toptab`：Header 二级 tab 区在窄屏折叠为「当前二级」下拉（复用现有 `qc-subnav-picker`）。
- 断点联动：`toptab` 形态下 Header 二级 tab 在 1024–1279px 允许横向滚动 + 渐变遮罩。

---

## 4 影响面

| 域 | 影响 |
|---|---|
| `app-logic.js` | 新增 `navMode`/`tabsEnabled` 状态与导出；`subPageNames` 补齐 |
| `index.html` | 根容器加 `data-navmode` 绑定（无结构重排） |
| `Sidebar.vue` / `SubNav.vue` / `Header.vue` / `DynamicTabs.vue` | 形态条件渲染；`Header` 增 toptab 二级 tab 区 |
| 新增 `nav-mode-core.js` / `TopTabs.vue` | 新文件（仿既有模块模式） |
| `nav.css` / `header.css` / `responsive.css` | `[data-navmode]` 规则、`main-content` 左边距联动、Header 圆角与间距、页签圆角收敛 |
| `menu-config.js` | 无改动（授权与形态解耦） |
| 后端 | **无改动**（纯前端） |

## 5 风险

1. **形态切换的布局抖动**：切换 navMode 时中栏显隐导致 `main-content` 左边距变化 → 以 `data-navmode` 一次性驱动、过渡动画最短，避免左右跳动。
2. **toptab 与页签语义重叠**：已按 D2 决定 toptab 隐藏动态页签，需在配置入口提示用户，避免"页签去哪了"困惑。
3. **页签圆角覆盖之谜**：F2 需先实测根因（特异性/顺序），若为构建 CSS 合并顺序问题需在 `vite` 配置或 CSS 顺序上修正。
4. **`subPageNames` 审计范围**：仅补 `allMenuDefs` 覆盖到的 key，不扩展到未列入菜单的页面。

## 6 验收标准（摘要，详见 TEST-PLAN）

- AC1 三种形态可全局切换并即时生效，`main-content` 左边距正确（中栏显隐联动）。
- AC2 toptab 形态下：Header 显示二级横向 tab、隐藏动态页签、无中栏、无侧栏树状。
- AC3 页签开关：`subnav`/`tree` 下可开/关，`toptab` 下强制隐藏。
- AC4 Header 为圆角矩形且与工作区间隙 ≥ 8px（桌面 12px）。
- AC5 页签为 6px 圆角矩形（非椭圆），浏览器实测确认。
- AC6 「评估分析」在所有导航通道显示中文；`subPageNames` 无遗漏（审计用例）。
- AC7 既有 V6.x 门禁回归通过；移动端三形态可用。

## 7 里程碑（详见 DEV-PLAN-v6.3）

| 里程碑 | 内容 |
|---|---|
| M0 | 快速项：F1 顶部栏容器化 + F2 页签圆角（含实测定位）+ F5 修复与审计 |
| M1 | `nav-mode-core.js` 纯函数 + `navMode`/`tabsEnabled` 状态接入 |
| M2 | tree / subnav 形态条件渲染（Sidebar/SubNav）与布局联动 |
| M3 | toptab 形态：Header 二级 tab 区（TopTabs.vue）+ 页签隐藏规则 |
| M4 | 配置入口（功能配置页 UI）+ localStorage 双通道持久化 |
| M5 | 响应式/移动端适配 + 构建 + 全量回归 + 版本 bump 6.3.0 |
