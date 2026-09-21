# 量化选股日历 — 前端设计系统产品评估报告

- **版本对象**：v6.1.7（6.1.X 演进线收官）
- **评估范围**：主题系统 / 菜单系统 / 卡片系统 / 字体 / 颜色 / 尺寸标尺 / 弹窗 / 内容布局 / 动效 / 响应式 / 无障碍
- **评估方法**：源码级事实采集（tokens/themes/layout/nav/header/components/animations/responsive 8 份 CSS + themes.js + 10 个页面组件模板）+ 结构分层评估（结构 → 表达 → 打磨）
- **评估日期**：2026-09-21

---

## 0. 结论摘要

当前前端设计系统**底子很强**：主题系统（运行期色相求解器 + 明暗对称契约）达到行业级水平，颜色治理无硬编码、对比度门禁全绿。但在**结构层存在双轨类名体系、字体未落地、组件标尺未收敛**三类问题，导致不同页面观感与工程维护成本分化。

建议以 **6.2.X 前端设计打磨线** 推进：先修结构（类名收敛 / 字体落地 / 标尺统一），再做表达（动效治理 / 空态统一 / 内联样式收敛），最后打磨细节。强项应保留不变（主题系统、密度、双栏模式、无障碍门禁）。

| 维度 | 健康度 | 关键结论 |
|---|---|---|
| 主题系统 | ★★★★★ | 色相求解器 + 明暗对称 + EP 桥全通，行业级 |
| 颜色系统 | ★★★★★ | 无硬编码 hex，语义槽位唯一，对比度达标 |
| 布局/间距 | ★★★★☆ | 8 级间距标尺齐备，双栏模式规模化；工具类略杂 |
| 字体系统 | ★★☆☆☆ | **字体文件未落地**，跨平台观感不一致；字号有硬编码残留 |
| 菜单系统 | ★★★☆☆ | 随色相联动选中态；新旧双轨、字号 13/14px 混用 |
| 卡片系统 | ★★★☆☆ | `.card` 骨架统一；统计卡/徽标多套命名并存 |
| 弹窗系统 | ★★★☆☆ | 详情 800px 成体系；其余宽度 10 种未收敛 |
| 动效 | ★★★☆☆ | 过渡类走 token；时长硬编码残留 + 文件截断缺陷 |
| 响应式/密度 | ★★★★☆ | 密度三档 + 触控 44px 达标；responsive.css 操作旧类 |
| 无障碍 | ★★★☆☆ | 对比度/焦点/命中区达标；**标题层级缺失** |

---

## 1. 现状盘点（强项，应保留）

### 1.1 主题系统 — 行业级
- **模型**：模式（light/dark/system）+ 主题色相（hue），6 预设（金/蓝/红/绿/紫/粉）+ 中性无色相档；legacy 8 主题自动迁移（[themes.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/themes.js#L9-L22)）。
- **对比度求解器**：`_gradL/_panelL/_lumL/_panelContrast` 运行期按色相反解明度，保证文字 ≥4.6:1、组件边界 ≥3.2:1（[themes.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/themes.js#L49-L84)）。这是本项目独有的「自动达标」能力。
- **明暗对称契约**：表面角色令牌（`--surface-canvas/card/raised/sunken/input/hover`）明暗同名，由 `test_color_tokens.py` 断言缺键即失败。
- **EP 变量桥**：亮色 + `dark-pro` 全量桥接 Element Plus 组件变量，消除逐组件补丁（[tokens.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/tokens.css#L325-L447)）。
- **运行期唯一权威**：`applyTheme` 写入 `data-theme/data-theme-mode/data-theme-neutral` + 内联 token，切换时清理残留变量，防跨模式串色。
- **PWA 联动**：`theme-color` 随主题动态化，`prefers-color-scheme` 实时跟随。

### 1.2 颜色系统 — 治理优秀
- 8 级品牌金 + 10 级暖中性 scale；市场语义「红涨绿跌」固定不随色相。
- 语义槽位唯一：`--state-{success,warning,danger,info}-{text,tint,solid,on-solid}` + V6.11「浅底彩字」soft 变体。
- 全 CSS 硬编码 hex 为 **0 处**（`qc-allow-hardcode` 白名单除外）。

### 1.3 布局/间距/密度
- 间距标尺 4/8/12/16/20/24/32/40/48（`--qc-space-*`），圆角标尺 6/8/12/16/full。
- 密度三档 compact/standard/spacious，触控设备命中区强制 44px（[tokens.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/tokens.css#L507-L517)）。
- 双栏详情工作区（`qc-detail-split` + 内嵌 dialog）已在策略/日历/AI 三页规模化，一致性最高。

### 1.4 无障碍
- 对比度门禁、焦点环（`--qc-ring` ≥3.2:1）、键盘可达、`prefers-reduced-motion` 降级均有实现。

---

## 2. 问题清单（分三层）

### 2.1 结构层（P0 — 影响一致性与可维护性）

| # | 问题 | 事实证据 | 影响 |
|---|---|---|---|
| S1 | **CSS 双轨类名体系** | V6 新类（`.qc-sidebar/.qc-card/.qc-subnav-item`）与 V5 旧类（`.sidebar/.card/.card-grid/.mobile-nav`）并存；`responsive.css` **526 行几乎全量操作 V5 旧类**，与 `nav.css/header.css` 同断点规则双轨运行 | 同视口下两套规则可能互相打架或互不覆盖，移动端样式风险最高 |
| S2 | **字体文件未落地** | 字体栈 `'Inter','SF Pro Display','PingFang SC','Microsoft YaHei'…`，但 index.html **无任何字体 link/@font-face**；Inter 实际未加载 | Windows 回退微软雅黑、macOS 回退苹方，**数字与西文观感跨平台不一致**；无衬线层次感弱 |
| S3 | **分区/小节类名 5 种写法** | `card-title` / `section-title` / `section-title-base`+`section-block-top` / `health-section-title` / `usage-card-title` | 同一语义多实现，新页无统一约定可循 |
| S4 | **标题层级缺失** | 业务页无 h1-h3；唯一 `<h2>` 在旧 sidebar 作 Logo 文字，三个详情弹窗用 `<h3>` | 屏幕阅读器无页面大纲，可访问性结构缺失 |
| S5 | **animations.css 文件截断** | 第 169-170 行 `@media (prefers-reduced-motion)` 块大括号未闭合即结束；完整版在 components.css L669 重复 | 加载顺序隐患 + 重复代码 |

### 2.2 表达层（P1 — 影响视觉统一与质感）

| # | 问题 | 事实证据 | 影响 |
|---|---|---|---|
| E1 | **硬编码字号残留** | `.qc-page-title` 20px（不在 12-36 标尺内）、`.qc-kpi-value` 32px、ai-page 评分 18px、`.non-trading-banner` 13px | 标题/关键数值与标尺脱节，层级不齐 |
| E2 | **菜单字号/高度不一致** | 顶部页签 40px vs header top-tab 36px；二级子菜单 13px（硬编码）vs 14px；`subnav-item` 36px vs `sidebar-item` 40px | 导航系统内部节奏不统一 |
| E3 | **统计卡/徽标多套命名** | 统计卡语义修饰类三套：`stat-card info/success/gold/warning`（strategies）、`stat-card-primary/success/gold/info-border/warning`（ai）、`stat-card flex-1-min120-pad14`（calendar）；徽标 7 套（`.qc-nav-badge/.qc-badge/.qc-chip/.qc-stock-tag/.qc-stock-badge/.qc-stock-status/.qc-glossary-cat`），`.qc-chip` 走旧 `--badge-*` | 同语义组件多处实现，视觉与维护成本分叉 |
| E4 | **弹窗宽度未成标尺** | 10 种宽度：400/420/440/480/500/520/580/600/760/800；`batch-evaluate/watch-groups` 用 `95% + max-w-520` 非常规组合 | 弹窗比例无规律，深浅不一 |
| E5 | **动效时长硬编码残留** | `qc-card-enter 0.35s`、skeleton `1.5s/1.6s`、pulse `2s`、spin `1s`、qc-spin `0.8s`、responsive 内 `0.2s ease`、stagger 0.05-0.20s | 与 `--duration-fast/base/slow`（150/250/400ms）脱节，动效节奏不一 |
| E6 | **内联 style 分布不均** | calendar 0 处 / sidebar 0 处 / stock-detail 7 处 / strategies 21 处 / system 26 处 / ai 28 处；多数带「保留内联」注释，但 strategies 自身注释「仓库约定禁内联 style」 | 颜色/尺寸治理呈「历史遗留 vs 新约定」双轨 |

### 2.3 打磨层（P2 — 细节体验）

| # | 问题 | 事实证据 | 影响 |
|---|---|---|---|
| P1 | **空态双轨** | 较新页统一 `<qc-state-panel>`（loading/empty/error+retry）；system 页约 10 处旧式纯文本「暂无…」（`text-sm-tertiary`） | 空态观感与引导能力不一致 |
| P2 | **卡片 hover 微交互不一致** | `.qc-card` hover `translateY(-2px)+0.35s`；`.rec-card/.recent-card` 用 `.hover-lift`；其余卡无 hover | 卡片响应层级不一 |
| P3 | **SUB_ICONS 双份维护** | SubNav.vue 与 TopTabs.vue 各自维护图标映射常量（文件内注释已注明） | 工程债务，改一处需手工同步 |
| P4 | **旧 sidebar.js 与新 Sidebar.vue 同名并存** | 均注册 `qc-sidebar`；旧组件仅被旧入口引用 | 存在误注册/冗余代码风险 |

---

## 3. 打磨建议（按优先级排序）

### 3.1 保留不动的强项
主题系统、颜色语义槽位、密度三档、双栏模式、对比度/焦点/命中区门禁、`qc-state-panel` 空态体系——**不重构，只在小版本做增量维护**。

### 3.2 P0 结构性修复（先做）
1. **字体落地**：自托管 Inter（woff2，`font-display:swap`）+ 中文字体回退链，`@font-face` 或构建期引入；可选为金融数字引入 tabular 化更强的数字字体。验收：跨 Win/mac 观感一致、LCP 增量 <80ms。
2. **响应式旧类收敛**：将 `responsive.css` 的 V5 旧类规则迁移到 `.qc-*` 新类并统一断点（1280/1024/768/480），删除旧类分支；验收：移动端各断点回归对照无样式回归。
3. **分区类统一**：引入 `page-section / page-section-title` 全局约定，将 5 种小节标题写法逐步收敛；验收：新增页面模板统一用约定类。
4. **标题层级**：业务页补 `<h1>` 页面标题（可视或 `visually-hidden`）+ 详情弹窗 `<h2>`；验收：页内 h 标签形成 1 层大纲。
5. **animations.css 修复**：闭合 `prefers-reduced-motion` 块，去重 components.css 重复定义；验收：文件可被 CSS 解析器完整解析。

### 3.3 P1 表达层统一（次做）
6. **字号标尺补档**：标尺补 `--qc-font-size-lg2:20px`（或页标题并入 18/22），将 20/32/18px 硬编码迁入 token；验收：`grep` 硬编码 px 字号为 0（白名单除外）。
7. **菜单一致化**：统一菜单项高度（36 或 40 取一）、二级菜单字号 13→14px、页签高度统一；验收：导航系统字号/高度 token 化。
8. **弹窗宽度标尺**：定义 `sm 440 / lg 520 / xl 640 / xxl 800`，替换 10 种零散宽度；验收：el-dialog 宽度只允许 token 化标尺值。
9. **动效 token 化**：补 `--duration-xs:100ms`，`qc-card-enter 0.35s→250ms`、skeleton 1.5s/1.6s→token、stagger 对齐 50/100/150ms；验收：`animation-duration` 硬编码时长清零。
10. **内联样式治理**：推广「语义函数返回类名」先例（strategies `execSuccessClass`），动态色走 `data-*` 属性 + CSS 选择器；验收：每页内联 `:style` ≤ 服务端动态色阈值。

### 3.4 P2 打磨（收尾）
11. **统计卡/徽标收敛**：`stat-card` 语义修饰类收敛为一套；徽标收敛为 `qc-badge/qc-chip/qc-stock-tag` 三档体系，`.qc-chip` 迁移到 `--state-*` 槽位。
12. **空态统一**：system 页 10 处纯文本空态 → `qc-state-panel` 空态。
13. **卡片 hover 统一**：卡片 hover 统一为「边框加深 + 轻阴影 + translateY(-1px)」单一体感。
14. **工程债务**：SUB_ICONS 收敛为单一来源；旧 `sidebar.js` 退役。

### 3.5 补充评估 A：主题色扩展（2026-09-21 追加）

**结论：可行、低风险。** 主题系统按色相驱动，`normalizeHue()` 接受任意 0-359，对比度由运行期求解器自动保证（文字 ≥4.6:1 / 边界 ≥3.2:1），**新增色相零求解成本**；暗色模式同色相提亮机制自动生效。选择器 UI 仅需同步 [app-logic.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L580-L581) 的 `themeHues` / `themeHueNames` 两数组。

当前预设：金45 / 红0 / 绿140 / 蓝220 / 紫270 / 粉320 / 中性(-1)。

**推荐新增 3 色**（按色环感知距离选取，避免与现有预设混淆）：

| 新色相 | 值 | 定位 | 感知区分度 |
|---|---|---|---|
| 青 Teal | 180 | 科技/清新，冷暖平衡 | 与现有 6 色距离最大，最值得加 |
| 橙 Orange | 25 | 活力暖色，保留品牌温暖感 | 与金(45)相邻但可辨，增加暖色层次 |
| 靛 Indigo | 250 | 冷深色，蓝紫过渡档 | 与蓝(220)/紫(270)可辨，丰富冷色阶 |

**改动面**：`themeHues`/`themeHueNames` 两数组 + 主题面板 swatch 自动渲染（`hueColor` 通用）+ 文档；求解器、门禁、明暗对称契约零改动。**风险点**：预设增至 10 档后色板 UI 需换行/滚动适配（Header 主题面板 `min-width:260px`，3×4 网格可容纳）。

### 3.6 补充评估 B：玻璃特效增强（2026-09-21 追加）

**结论：可行，但必须分层执行并守住性能红线。**

现状：浮层用半透明 `--glass-bg`(rgba 255,255,255,0.72) + `--glass-shadow`，但**仅 message/notification 有真 backdrop-filter blur(8px)**；结构层用「类玻璃」（`--glass-sheen` 顶部高光 + `--glass-edge` inset 边缘高光，零成本）。暗色浮层被 [themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L127-L131) 覆盖为 `--surface-raised` 实底。

**性能红线（实测证据）**：components.css L78 记录——结构层真 backdrop-filter 使滚动帧率 55→14fps（-75%）。因此增强方案分层：

| 层 | 方案 | 性能 |
|---|---|---|
| 浮层（安全层） | dialog / dropdown / popover / date-picker 统一加 `backdrop-filter: blur(12px) saturate(140%)` + 明暗各一套玻璃 token | 浮层数量少、不参与滚动，无性能风险 |
| 结构层（零成本层） | 强化类玻璃：顶部 sheen 更明显 + `inset 0 1px` 边缘高光 + 阴影加深一档；**不引入真 blur** | 零成本（维持 55fps） |
| 暗色模式 | 浮层改半透明玻璃 + blur，玻璃感更出效果 | 同上（浮层层） |
| 降级 | `prefers-reduced-motion` 与不支持 backdrop-filter 的浏览器回退实底 | — |

**风险点**：① blur 半径过大在低端机弹窗动画时掉帧——限制半径 ≤12px 且仅浮层；② 半透明 + 明暗两套玻璃 token 需保持对比度门禁（浮层文字对比度 ≥4.6:1，可用求解器验证）。

---

## 4. 评估依据（关键事实索引）

- 令牌：`frontend/css/tokens.css`（品牌 scale / 表面角色 / 语义槽位 / EP 桥 / 圆角 / 间距 / 密度 / 字体栈）
- 主题：`frontend/js/themes.js`（色相求解器 / 明暗对称 / legacy 迁移 / 中性档）
- 布局：`frontend/css/layout.css`（双栏 / 卡片网格 / 中栏美化 / 美林时钟板）
- 组件：`frontend/css/components.css`（卡片 / 按钮体系 / 徽标 / 表格）
- 导航/页头：`frontend/css/nav.css`、`frontend/css/header.css`
- 响应式：`frontend/css/responsive.css`（V5 旧类操作为主）
- 动效：`frontend/css/animations.css`（含截断缺陷）
- 页面模板：`frontend/js/components/strategies-page.js / calendar-page.js / ai-page.js / system-page.js / dialogs/stock-detail.js` 及 `frontend/src/components/*.vue`
- 门禁：`tests/test_color_tokens.py`、`tests/test_theme_contrast.py`、`tests/test_components_tokens.py`

---

*本报告为评估与规划文档，未修改任何代码；打磨需求项与验收见配套《产品开发 PRD-6.2-FRONTEND-POLISH》。*
