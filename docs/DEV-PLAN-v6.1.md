# 量化日历 V6.1 开发计划（DEV-PLAN 6.1 · 三栏式布局与视觉系统统一）

- **文档版本**：v1.0（待评审）
- **日期**：2026-09-09
- **产品基线**：V6.0（refactor/ui-v6 分支）
- **配套**：PRD-v6.1.md | TEST-PLAN-v6.1.md
- **开发分支**：沿用 V6.0 分支纪律，本地开发，不 push 主线

---

## 0. 开发原则

1. **先地基后页面**：三栏式布局地基 → 页面组件去重 → 视觉统一（图标/主题/Logo/列表）→ 动态页签。
2. **零回归**：每里程碑结束跑全量测试 + 手动冒烟；页面组件去重时逐个验证数据加载行为不变。
3. **先改测试后改代码**：涉及门禁断言变更（图标系统删除、主题 key 收敛）时，先更新测试（红）再实现（绿）。
4. **小步提交可回滚**：每任务独立提交，注释中文；两栏旧 CSS 在灰度期保留，确认无误后再删。
5. **无新依赖**：本期不新增 npm 依赖（继续使用 lucide-vue-next）。

---

## M0 三栏式布局地基

### M0-1 根结构改造（`frontend/index.html`）
- 主界面区改为 `div.qc-app-layout`：`qc-sidebar` + `qc-subnav`（中栏）+ `div.qc-work-area`（`qc-header` + 动态页签挂载点 + `div.qc-work-area-content` 内渲染 `pageComp`）。
- 保留 `<Transition name="fade-slide" mode="out-in">` + `<KeepAlive>` 包裹页面组件，缓存粒度不变。
- 保留 `qc-mobile-nav` 与各全局对话框。
- **验收**：桌面加载无布局错乱；骨架屏 → 主界面流程正常；无控制台报错。

### M0-2 三栏 CSS（`layout.css` / `nav.css` / `responsive.css`）
- `.qc-app-layout` flex 布局；中栏 `.qc-subnav-column` 固定定位 `left: var(--qc-sidebar-width)`（折叠态 64px），宽 `--qc-subnav-width`，独立滚动。
- `.qc-work-area` `flex:1` + 左边距 `sidebar+subnav`，内容区独立滚动；**移除 `themes.css` 中 `.main-content` 的 `max-width: min(1400px, …)` 限制**（两处：常规态 + `.expanded` 态，[themes.css:837](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L837) 与 [themes.css:4072](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L4072)）。
- 新增 `.qc-readable { max-width: 1200px; }`，供表单/正文使用。
- 断点：≥1280 / 768–1279 / <768 三档（见 PRD 2.1 表）；移动端隐藏中栏、工作区全宽、底部留出 MobileNav 高度。
- 全部样式用 `--qc-*` token，无硬编码色值。
- **验收**：宽屏工作区填满；折叠/展开中栏随动；平板、移动端形态正确；`test_nav_tokens` 等门禁绿。

### M0-3 `SubNav.vue` 收敛为中栏
- 移除 `mode` 双形态判断（`TOP_TAB_PAGES` 逻辑删除），统一渲染为左侧中栏导航。
- 顶部显示当前一级页面名（复用 `pageTitle` computed）；系统配置保留 4 组三级（`SYSTEM_GROUPS` 数据不动）；其他页面平铺二级。
- 日历页日期选择器/刷新/导出操作区：从 SubNav 迁移到工作区内容顶部（新建 `CalendarToolbar` 或置于 calendar-page 顶部）。
- **验收**：六个一级页面全部显示中栏二级；点击切换子页、数据加载、URL hash 同步均正常。

---

## M1 页面组件去重（六个一级页）

### M1-1 移除页面内部标题与二级切换
- strategies / calendar / ai / research / shortterm / system 六个页面组件：删除 `.page-header` / `.page-title` 区块与内部 Tab/子导航切换 UI。
- 保留各子内容 `v-if="currentSubPage===…"` 分支与全部数据逻辑、事件绑定。
- 系统配置：移除内部左侧子导航，改由中栏承载（`goSystemItem` 逻辑上移到 SubNav，已具备）。
- **验收**：六个页面逐页人工冒烟——各子页内容、交互、数据加载与 V6.0 一致；中栏高亮正确。

---

## M2 图标统一（删除四套冗余系统）

### M2-1 清理
- 删除 `frontend/js/icons.js`。
- `app-logic.js`：移除 `iconSystem` / `switchIconSystem` / `ICON_MAPS` 引用（:93-94、:126-132、:780、:958、:1075 处）；菜单数据删除 `icon` 字段，仅留 `iconName`。
- `index.html`：删除 `:class="'icon-system-' + iconSystem"` 包裹层（:123、:145）。
- `system-page.js`：删除「原生/墨韵/锋线/叠彩」图标切换卡片块（:218-232 区域）与相关配置保存项。
- **验收**：全仓 grep 无 `iconSystem` / `icon_system` / `icon-system` 残留；门禁 `test_icons_single_system`（见 TEST-PLAN）绿；导航图标全部为 Lucide。

---

## M3 主题简化（明/暗 + 主题色）

### M3-1 主题生成器（`frontend/js/themes.js`）
- 重写为 `generateLightTokens(hue)` / `generateDarkTokens(hue)`（HSL 生成 `--qc-primary-*` 与背景/边框/文字 token），保留 `applyTheme` 唯一权威入口（写 `data-theme-mode` + 内联 CSS 变量 + localStorage）。
- 删除 8 个具体主题定义，替换为 hue 预设表：`[45, 220, 0, 140, 270, 320]`（金/蓝/红/绿/紫/粉）。

### M3-2 偏好扩展（`frontend/js/preferences.js`）
- 新增 `theme_hue` 键：默认 45，合法值 = 6 预设 + 0–360 整数；纳入 `PREFERENCE_KEYS` / `PREFERENCE_VALUES`。
- `theme` 键继续作为 `theme_mode`（light/dark/system）使用，不改语义。
- 存量迁移：启动读偏好时检测旧 `quant_theme` 且无新 `theme_hue` → 按 PRD 2.4 映射表写入 mode/hue 并清除旧键（一次写入）。

### M3-3 CSS 收敛（`frontend/css/themes.css`）
- 8 组 `[data-theme=…]` 规则收敛为两套基础 token 组：light 基底 + dark 基底（`data-theme-mode="dark"`），主色由内联 HSL 变量覆盖。
- 全站引用 `--qc-primary-*` 的地方不变（token 名不变，仅值来源变化）。
- **验收**：明/暗/跟随系统三态正确；预设 6 色 + 自定义色相即时生效；暗色对比度抽查 ≥ WCAG AA；老用户主题迁移正确；ECharts 随主题重绘。

### M3-4 入口改造
- `system-page.js`：8 主题卡片 → 模式单选 + 色板 + 自定义色相滑块（读写 `theme_mode` / `theme_hue` 偏好）。
- `Header.vue`：用户菜单 8 主题列表 → 移除，保留太阳/月亮快捷切换（`theme_mode` 明暗互切）。
- `MobileNav.vue`：抽屉底部明暗切换逻辑改走偏好。
- **验收**：三个入口行为一致且持久化；五语言文案补齐（zh-CN / en / ja / ko / zh-TW）。

---

## M4 Logo 还原 + 股票列表统一

### M4-1 Logo 还原
- 将彩色 K 线 SVG（复用登录页 [index.html:71-80](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/index.html#L71-L80) 的图元）写入共享常量（建议 `src/globals.js` 导出 SVG 字符串），Sidebar / MobileNav 引用。
- 固定品牌色（蓝 #2563eb / 黄 #eab308 / 红 #dc2626），不随主题变色。
- **验收**：三处 Logo 视觉一致；切换主题/色相不变色；折叠态只显示图标 Logo。

### M4-2 `.qc-stock-list` 样式
- 新增 stock-list 样式（`components.css` 或独立文件）：`.qc-stock-list` / `.qc-stock-row` / `.qc-stock-tag`，hover 与选中态用 `--qc-primary-*` token，支持紧凑密度。
- 替换清单（卡片型）：量化日历股票池、策略总览共识排名/今日一屏、短线复盘涨停池、策略研究策略列表、回测历史。
- `el-table` 场景（数据源健康、AI 用量、龙虎榜明细等）统一表头背景/行 hover/圆角 token。
- 功能型列表（自选股复选/评分徽标/左滑）保留原结构，仅对齐间距与圆角。
- **验收**：替换清单页面视觉一致；hover/选中/密度三态正确；交互功能零回归。

---

## M5 动态页签

### M5-1 状态机纯函数（新增 `frontend/js/tabs-core.js`）
- 纯函数：`openTab(groups, page, subPage, title)` / `closeTab(groups, page, subPage)` / `activateTab(…)` / `getDefaultTab`（首子页）/ `evictOldest`（超 8 关闭最早未激活）。导出 UMD，Node 可直接测。
- **验收**：单元测试覆盖打开/去重/关闭邻接激活/上限淘汰/默认页签重建（对应 TEST-PLAN TC-6.1.x）。

### M5-2 页签栏组件（`src/components/DynamicTabs.vue`）
- 渲染当前一级的页签（含关闭 × 按钮、激活态、标题来自 `subPageNames`）。
- 空态隐藏自身（一级无页签时不占位）。
- **验收**：点击中栏二级 → 页签打开并激活；点页签切换子页；点 × 关闭并回退相邻。

### M5-3 接线（`app-logic.js` + `SubNav.vue`）
- `tabGroups` / `activeTabKey` 纳入 qcState；中栏点击二级项改走页签逻辑（open+activate）。
- 激活页签 → 设置 `currentPage/currentSubPage`（复用现有 watch 写 hash、加载数据、恢复默认子页等副作用）。
- `hashchange` 回写时（[lifecycle.js:27](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic/lifecycle.js#L27)）：hash 指向的子页不在组内则 open+activate。
- 一级切换：`tabGroups[page]` 为空则建默认页签；否则恢复该组激活状态。
- **验收**：PRD 2.7 全部规则通过；刷新后按 hash 恢复单个页签；前进/后退可用。

---

## M6 打磨项（按评审确认范围）

### M6-1 信息密度联动（P2）
- `data-density` 属性已驱动部分组件（[preferences.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/preferences.js) `applyDensity`），扩展联动：Sidebar/SubNav 项高、卡片 padding、表格行高。
- **验收**：三档密度在导航与卡片上可见差异且不破布局。

### M6-2 键盘导航增强（P3，可选延后）
- 一级/中栏菜单 ↑↓ 移动 Enter 进入；页签 Ctrl+Tab / Ctrl+Shift+Tab 切换。
- **验收**：键盘全程可导航，焦点可见。

### M6-3 响应式走查
- 平板（768–1279）与移动（<768）全页面走查：中栏隐藏、二级可达（Header 下拉/抽屉）、页签可滚动、底部留白正确。

---

## 依赖与风险（开发侧）

| 项 | 说明 |
|---|---|
| 依赖 | 无新增 npm 依赖；`/api/user/preferences` 透传 `theme_hue`（后端 JSON 存储，无 schema 变更） |
| 风险 | 页面组件去重回归面最大（6 页）；主题迁移涉及存量用户；动态页签状态复杂度。对策见 PRD 4.2，测试覆盖见 TEST-PLAN |
| 提交纪律 | 每任务独立提交；M0 灰度期保留两栏 CSS，全量确认后清理 |
