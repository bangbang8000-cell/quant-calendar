# 量化日历 V6.0 产品需求文档（PRD 6.0 · 导航与菜单系统重构 / UI 全面焕新）

- **文档版本**：v1.0（正式版）
- **日期**：2026-09-09
- **产品基线**：v5.4.1（本地 refactor/ui-v6 分支，基于 master f649168）
- **定位**：以「导航与菜单系统重构」为切入点，启动 **UI 第六代完全重构**（Vite SFC 化 + 全新设计系统 + 全站 Lucide 图标 + 金色默认主题）
- **状态**：待用户审阅批准
- **配套**：DEV-PLAN-v6.0.md | TEST-PLAN-v6.0.md
- **范围约束**：仅在本地 refactor/ui-v6 分支开发，**不推送 GitHub 主线**；待全部重构确认 OK 并有明确指令后才提交

---

## 0. 系列总纲

### 0.1 背景与定位

V5.x 系列（V5.0.0~V5.4.1）完成了功能可信、研究闭环、数据可靠、安全加固、UI 视觉统一（V4.6 评估报告落地），解决了「系统能用且可信」问题。**V6.0 回答「体验专业」**：

> 从「功能可用的专业工具」升级为「**导航清晰、视觉克制、体验顺滑的金融科技产品**」。

本次以**导航与菜单系统**为第一战役（原因：导航是用户每日接触最多的系统，重构收益最大、可独立验证），同时为全站 UI 焕新打下**设计系统地基**（Token / 图标 / 构建 / 组件范式），后续页面视觉重塑可在此地基上按里程碑推进。

### 0.2 版本矩阵总览

| 版本 | 主题 | 主打 | 交付物 | 依赖 |
|---|---|---|---|---|
| **6.0.0** | 导航与菜单系统重构 | 导航体验 | 一级侧边栏 / Header / 二级 SubNav / 移动端 MobileNav | 设计系统地基（6.0.0 内先落地） |
| 6.1.x | 全站页面 SFC 化与视觉重塑 | 视觉一致性 | 各页面组件迁移 .vue + 设计规范落地 | 6.0.0 |
| 6.2.x | 主题体系收敛 | 主题配置化 | 7 套 → 4+1 套，金色默认，平滑过渡 | 6.0.0 |
| 6.3.x | 图标全站统一 | 图标系统 | Lucide 全站替换，emoji 退为可选主题 | 6.0.0 |
| 6.4.x | 组件与交互打磨 | 体验顺滑 | 空态/骨架屏/动效/无障碍收尾 | 6.1.x |

> 本文档（PRD 6.0）**只定义 6.0.0 导航战役**的产品需求；6.1+ 的页面视觉重塑仅列出方向，不在本次验收范围。

### 0.3 依赖关系与独立运行原则

- **6.0.0 可独立运行、独立验收**：完成导航重构后，现有 40+ 子页功能全部保持可用（不破坏现有功能结构）。
- 6.0.0 内部先完成「设计系统地基」（Token / 图标 / 构建 SFC 化基线），再在其上实现导航组件。
- 版本纪律：APP_VERSION 单一来源（backend/main_new.py），bump 至 6.0.0；前端 dist 产物入库。
- 分支纪律：全部开发在 `refactor/ui-v6`，**不 push 主线**。

### 0.4 通用需求基线（本版本必须满足）

1. **不回归**：既有功能结构不被破坏；既有测试全绿（新增门禁不得放宽既有门禁）。
2. **双端一致**：dev/ops 同步；Docker 镜像可构建。
3. **文档同步**：README/DEPLOYMENT/component-contract 更新。
4. **无障碍**：导航组件满足 WCAG 2.1 AA（正文 ≥4.5:1，大文字/图标 ≥3:1；键盘可达；ARIA 完整）。
5. **主题配置化**：所有颜色经 CSS token 驱动，金色为默认（保留用户已选主题优先级）。

---

## 1. 6.0.0 导航与菜单系统重构

### 1.1 背景与目标

**现状问题**（源自 UI-Redesign-Analysis-v1.md 审计）：

| 问题 | 影响 |
|---|---|
| 一级菜单 6 项平铺无分组 | 缺少语义聚类，认知负荷高 |
| 二级 Tab 全部挤在 Header（系统配置 9 项） | 小屏拥挤、末端难以触达 |
| 无全局面包屑 | 深层页面无快速返回路径 |
| 移动端底部导航仅 emoji 无文字 | 可发现性差 |
| 组件为 .js in-DOM 模板（非 SFC） | 无法享受 Vite 组件化红利 |
| 图标系统 4 套实际仅 emoji 可用 | 风格割裂 |
| 折叠宽度/Header 高度等与设计规范不一致 | 视觉比例不专业 |

**目标**：

1. 建立清晰的一、二级菜单层级（分组 + 子菜单 + 页面内二级导航）。
2. Header 精简为三区（面包屑 / 搜索 / 工具区），二级 Tab 下沉到页面内。
3. 完整响应式：桌面 / 平板 / 移动端各自最优形态。
4. 落地金色主题为默认，全部颜色 token 可配置。
5. 组件全面 SFC 化（.vue），为后续页面重塑奠定范式。

### 1.2 信息架构（IA）

#### 1.2.1 一级菜单分组

现有 `allMenuDefs` 6 项（[app-logic.js:112-119](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L112-L119)）归入两组：

```
量化投研（research）
├─ 策略总览   strategies
├─ 量化日历   calendar
├─ 智能评估   ai
├─ 策略研究   research
└─ 短线复盘   shortterm

平台管理（platform）
└─ 系统配置   system
```

- 分组标签不响应点击，仅视觉聚类。
- 保持 `menus` 数据驱动方式不变（仍由 groupsConfig / researchMenuEnabled / guest 角色过滤）。

#### 1.2.2 二级导航形态映射表

| 一级菜单 | 二级项数 | 二级导航形态 | 说明 |
|---|---|---|---|
| 策略总览 | 4（overview/merrill/market/consensus） | 顶部 Tab | 单页内切换 |
| 量化日历 | 5（daily/weekly/monthly/yearly/pool） | 顶部 Tab | 单页内切换 |
| 智能评估 | 6（overview/focus/watchlist/history/evaluation-analysis/chat_history） | 顶部 Tab | 单页内切换 |
| 策略研究 | 6（research-overview/quant-research/strategy-write/custom-write/backtest/backtest-history） | **左侧子导航** | 内容密度高、需要稳定锚点 |
| 短线复盘 | 7（overview/market-review/ztpool/lhb/sector/intraday/scan） | 顶部 Tab | ≤7 项可 Tab |
| 系统配置 | 9（status/autoeval/datasource/feature/datadict/user/execution/usage/about） | **左侧子导航（4 组）** | 分组收纳，见 1.2.3 |

> 设计文档建议智能评估侧边栏内展开子菜单（4.3 含子菜单项），但考虑智能评估仅 6 项、页面内 Tab 更轻量，PRD 采用**页面内顶部 Tab**；侧边栏含子菜单能力仍实现（SubNav 组件支持），作为可选形态。

#### 1.2.3 系统配置左侧子导航（三级分组）

```
系统配置
├─ 运行监控
│   ├─ 系统状态   status
│   ├─ 数据源健康  health          ← 新映射（现 system.status 内含）
│   └─ 调度任务   schedule         ← 新映射（现 system.status 内含）
├─ 智能服务
│   ├─ 自动评估   autoeval
│   ├─ AI 用量    usage
│   └─ AI 事实护栏 guard            ← 新映射（现 system.autoeval 内含）
├─ 平台设置
│   ├─ 数据源     datasource
│   ├─ 功能配置   feature
│   └─ 数据字典   datadict
└─ 组织管理
    ├─ 用户与权限  user
    ├─ 执行看板    execution
    └─ 关于        about
```

> **兼容策略**：现有 system 子页实际只有 9 个组件（status/autoeval/datasource/feature/datadict/user/execution/usage/about）。设计文档的「数据源健康/调度任务/AI 事实护栏」是 system.status / system.autoeval 页内的区块。**本次仅做导航分组，不拆页面组件**：左侧子导航分组中的叶节点映射到现有 9 个 subPage（数据源健康/调度任务 → status；AI 用量 → usage；AI 事实护栏 → autoeval）。避免破坏现有功能结构。

### 1.3 功能需求（FR）

#### FR-6.0.1 一级侧边栏（桌面端）

- **展开态**：宽度 220px（`--qc-sidebar-width`），固定定位，含 Logo 区（32px K 线柱状 logo + 品牌名）、分组标签、一级菜单项、底部折叠按钮。
- **折叠态**：宽度 64px（`--qc-sidebar-collapsed-width`），仅图标居中，hover/focus 显示 Tooltip（300ms 延迟）。
- **状态样式**：默认/hover/选中/禁用四态，选中态含 3px 左边框 + 主色背景 + 主色文字；徽标 pill（未读数/NEW/运行中任务）。
- **含子菜单项**：父级右侧 ChevronDown，展开旋转 180°；子项缩进 32px、高 36px、字号 13px；展开/收起 250ms ease-out。
- **分组**：「量化投研」「平台管理」两组标签。
- **触发**：底部按钮 / `Ctrl+B`（沿用现有快捷键，替代设计文档的 `Ctrl+\`，避免冲突）。
- **持久化**：折叠状态存 localStorage（沿用 `sidebar_collapsed`）。

#### FR-6.0.2 顶部 Header

- 高度 56px（`--qc-header-height`），三区布局：
  - **左**：折叠/展开按钮（移动端为汉堡）+ 面包屑（当前页 600 / 父级可 hover，ChevronRight 分隔）。
  - **中**：全局搜索（320px，`--qc-muted` 底，圆角 full，Search 图标 + `Ctrl+K` 提示，focus ring）。
  - **右**：通知（红点徽标）+ 主题切换（太阳/月亮）+ 用户头像（32px 圆形主色底，点击展开用户菜单）。
- **移除**：现 Header 内的二级 Tab（迁至页面内 SubNav）、日历日期选择器/导出按钮（保留功能，迁至日历页面操作区）。
- **用户菜单**：保留现有重置向导/修改密码/主题选择/退出登录功能，视觉对齐新 token。

#### FR-6.0.3 页面级二级导航（SubNav）

- **顶部 Tab 式**（策略总览/量化日历/智能评估/短线复盘）：Tab 容器底部 1px 边框，选中项 2px 主色底边 + 嵌入效果，200ms 指示器滑动 + 150ms 内容 fade。
- **左侧子导航式**（策略研究/系统配置）：宽 200px（`--qc-subnav-width`），分组标签 + 二级项（高 36px）+ 三级项（缩进 28px、高 32px、字号 13px）；分组可折叠；内容区独立滚动。
- **页面标题**：SubNav 顶部保留页面标题 + 操作区（如日历的日期选择/刷新/导出）。

#### FR-6.0.4 移动端底部 TabBar + 抽屉

- **断点**：<768px 显示底部 TabBar；768-1279px 侧边栏默认折叠；≥1280px 展开。
- **TabBar**：5 项（首页/日历/AI/研究/我的），高 60px（`--qc-mobile-nav-height`），图标 22px + 文字 11px，active 主色，safe-area 适配。
- **映射**：策略总览→首页，量化日历→日历，智能评估→AI，策略研究→研究，短线复盘→研究抽屉内二级入口，系统配置→我的。
- **抽屉**：宽 280px，Logo+品牌+关闭 / 一级菜单列表 / 底部主题+语言+退出；遮罩 50% 黑，300ms ease-out；焦点管理（开→抽屉首元素，关→触发按钮）。
- **二级导航**：顶部分段控制器或下拉选择器（按二级项数量）。

#### FR-6.0.5 设计系统 Token 地基

- `tokens.css` 全量迁移为 `--qc-*` 体系（源自 colors_and_type.css）：primary/neutral/semantic/market/nav/radius/shadow/space/font/layout 全套。
- 兼容映射：现有 `--sp-*`/`--font-*`/`--sidebar-width` 等旧 token 定义 `var()` 别名指向 `--qc-*`，**确保现有页面样式不因迁移而破坏**（渐进替换，不是一夜之间全部改完）。
- 暗色模式：`.dark` 段覆盖（源自 colors_and_type.css dark 段）。

#### FR-6.0.6 金色主题默认

- 新增/收敛金色主题：以现有「活力金（vibrant-orange）/ 经典金（classic-gold）」为基，映射到设计文档金色 scale（`--qc-primary-50..900` + `--qc-primary:#ffd166`）。
- **设为默认**：themes.js 启动兜底 `applyTheme(saved || 'gold')`；用户已保存主题（localStorage quant_theme）仍优先，即**老用户视觉不变，新用户见金色**。
- 主题切换平滑过渡：`transition: color .3s, background-color .3s`。

#### FR-6.0.7 构建 SFC 化基线

- 在现有 Vite（`frontend/vite.config.mjs`，V4.3 方案A）基础上升级：
  - 组件改为 `.vue` SFC（`src/components/`），由 `src/main.js` 或路由入口引入。
  - **本次范围**：仅 Sidebar / Header / SubNav / MobileNav 四个导航组件 SFC 化，其余页面组件保持 .js（后续 6.1 里程碑迁移）。
  - Vue 引入方式：由 CDN script 改为 `npm install vue` + 构建打包（或维持 CDN + 全局组件混合，见 PRD 1.4 技术决策 D1）。
  - 首屏分包：`build.rollupOptions.output.manualChunks` 将 vue/lucide 单独 chunk，保持首屏体积可控。

#### FR-6.0.8 全站 Lucide 图标（本次范围：导航 + 入口）

- 引入 Lucide（`lucide-vue-next` 或 CDN `lucide` UMD）。
- **本次替换范围**：导航组件（侧边栏一级/二级/分组、Header 按钮、面包屑、TabBar、抽屉）。页面内 emoji 图标不在 6.0.0 验收范围（6.3 里程碑处理），但导航涉及的现有 emoji 入口须同步。
- 图标尺寸：一级 18px、Header 20px、TabBar 22px、二级 16px；2px 描边、圆角端点。

#### FR-6.0.9 无障碍（导航）

- 导航链接用 `<a>` 或 `role="link"` + `tabindex="0"`；当前页 `aria-current="page"`。
- 展开/收起 `aria-expanded` + `aria-controls`；抽屉焦点转移；图标按钮 `aria-label`。
- 对比度满足 WCAG 2.1 AA。

### 1.4 技术决策（D）

| # | 决策点 | 方案 | 理由 |
|---|---|---|---|
| D1 | Vue 引入方式 | **npm 依赖 vue + 构建打包**（弃 CDN script） | 完全重构方向；SFC 编译必需；与 Vite 自然集成 |
| D2 | 组件语言 | `.vue` SFC（`<script setup>` 优先） | 用户已确认引入 Vite 用 .vue |
| D3 | Token 策略 | **全量迁移** `--qc-*` + 旧 token 别名兜底 | 用户已确认全量迁移；别名保证既有页面不破 |
| D4 | Lucide 范围 | 全站方向，本次落导航 + 入口 | 用户已确认全站替换；按里程碑分步 |
| D5 | 金色默认 | 新增 gold 主题 + 保留用户偏好 | 用户已确认「有金色主题的活力金/主题金」为基础 |
| D6 | 二级形态 | 按 1.2.2 映射表 | 设计文档规范 + 页面密度综合 |
| D7 | 折叠快捷键 | 沿用 `Ctrl+B`（不引入 `Ctrl+\`） | 避免与现有快捷键冲突 |
| D8 | 未保存提示 | **纳入**（系统配置表单页离开确认） | 设计文档 10.4；仅对已知 dirty 表单接入 |
| D9 | 版本管理 | refactor/ui-v6 本地分支，不 push 主线 | 用户明确要求 |

### 1.5 非功能需求（NFR）

| 项 | 要求 |
|---|---|
| 性能 | 首屏 JS ≤ 现有基线（V4.3 已 322KB，不得显著恶化）；导航组件懒加载 |
| 兼容 | 桌面 ≥1280 / 平板 768-1279 / 移动 <768 三档；Chrome/Edge/Safari 最新两版 |
| 可维护 | 组件单文件 ≤30KB；CSS token 单一来源；注释中文 |
| 国际化 | 5 语言包（zh-CN/en/ja/ko/zh-TW）导航文案完整 |
| 安全 | 不新增后端端点（本次纯前端）；`sanitizeHtml` 沿用 |

### 1.6 验收标准（DoD）

1. 一级侧边栏分组 + 折叠 + 子菜单 + Tooltip + 徽标全部实现，现有菜单数据驱动/角色过滤不回归。
2. Header 三区布局 + 面包屑 + 搜索 + 通知 + 主题 + 用户菜单；二级 Tab 已从 Header 迁出。
3. 二级导航按映射表实现顶部 Tab（4 页）+ 左侧子导航（2 页），系统配置 4 组收纳。
4. 移动端 TabBar + 抽屉按断点工作；平板默认折叠。
5. 金色主题设为默认（新用户可见），用户偏好保留；全部颜色走 `--qc-*` token。
6. 四个导航组件 SFC 化，构建通过，dist 产物可入库。
7. 无障碍：键盘可完整走通导航；ARIA 属性齐全；对比度达标。
8. 既有 40+ 子页功能不回归；既有测试全绿；双端冒烟 0 pageerror。
9. 不 push 主线；仅 refactor/ui-v6 分支提交。

---

## 2. 范围边界（不在本次）

- 页面组件全面 SFC 化（仅 4 个导航组件做）
- 页面视觉重塑（策略总览/日历/AI/系统配置四大高频页，6.1 里程碑）
- 主题 7→4+1 收敛与 themes.css 重写（6.2 里程碑；本次仅加 gold + token 别名）
- 全站 emoji→Lucide（仅导航 + 入口）
- 后端任何改动

---

## 3. 里程碑拆分建议

| 里程碑 | 内容 | 出口 |
|---|---|---|
| M0 地基 | Token 迁移 + gold 主题 + Lucide 接入 + 构建 SFC 基线 | 现有功能零回归，构建通过 |
| M1 一级导航 | Sidebar SFC（分组/折叠/子菜单/徽标/Tooltip） | 桌面可走通 |
| M2 Header | Header SFC（面包屑/搜索/工具区）+ 二级 Tab 迁出 | Header 三区完成 |
| M3 二级导航 | SubNav SFC（顶部 Tab + 左侧子导航）+ 系统配置分组 | 6 页二级完成 |
| M4 移动端 | MobileNav SFC（TabBar + 抽屉 + 断点） | 三档断点完成 |
| M5 收尾 | 无障碍/未保存提示/回归/冒烟/文档 | 6.0.0 出口全绿 |

---

## 4. 附录：关键文件清单

| 文件 | 说明 |
|---|---|
| `frontend/src/components/Sidebar.vue` | 一级侧边栏（新） |
| `frontend/src/components/Header.vue` | 顶部 Header（新，替代 global-header.js 的导航部分） |
| `frontend/src/components/SubNav.vue` | 页面级二级导航（新） |
| `frontend/src/components/MobileNav.vue` | 移动端 TabBar + 抽屉（新） |
| `frontend/css/tokens.css` | 全量迁移 `--qc-*` + 旧 token 别名 |
| `frontend/css/nav.css` | 导航组件样式（新） |
| `frontend/css/header.css` | Header 样式（新） |
| `frontend/js/themes.js` | 新增 gold 主题 + 默认 |
| `frontend/js/app-logic.js` | 菜单分组元数据（group 字段）、面包屑派生 |
| `frontend/index.html` | 主界面模板引用新组件 |
| `frontend/vite.config.mjs` | SFC 支持 + 分包配置 |
| `frontend/package.json` | 依赖 vue/lucide |
