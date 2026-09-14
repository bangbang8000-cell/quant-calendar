# PRD v5.15：交互体验与信息呈现优化（9 项需求）

> 版本：v1.0（待用户终审授权）
> 状态：待批准
> 创建日期：2026-09-14
> 需求来源：用户直接提出 9 项需求（2026-09-14）
> 前置：无（本里程碑为独立需求批次）

---

## 0 版本目标

围绕用户提出的 **9 项交互体验与信息呈现需求** 进行整改，覆盖：共识度信息呈现（F1）、用户组权限与首屏加载一致性（F2）、美林时钟历史周期时间轴美化（F3）、股票详情弹窗样式（F4）、重点跟踪列表风格（F5）、顶部二级菜单溢出（F6）、短线复盘列表+内容双栏模式（F7）、「功能配置」更名（F8）。

**原则**：不改业务语义、不改数据结构、不引入新依赖；后端仅 F2/F7 可能需要最小改动；全部改动遵循令牌纪律（CSS 用 var(--...)）与 TDD 四步流程。

---

## 1 功能需求

### F1 移除策略共识度 TOP5 / 策略共识榜股票列表上的「0% 共识」信息（需求 1）

**现状分析（含证据）**
- 前端组件 StockList.vue（frontend/src/components/common/StockList.vue）在 show-consensus 分支渲染「{pctOf(item)}% 共识」（虚拟滚动与非虚拟两处），pctOf() = Math.round(Number(item.consensus_level) * 100)，当 consensus_level 缺失/为 0 时返回 0。
- 后端共识榜数据源 dashboard_api.py:_get_consensus_rank()（backend/dashboard_api.py 约 L143）返回字段为 code / name / strategy_count / strategies / strategy_names，**不含 consensus_level**。
- 前端全库无任何 consensus_level 赋值（grep 证实），因此 TOP5 与共识榜每一行都必然显示「0% 共识」。
- **实测证据**（ops 生产实例 DOM 测量）：TOP5 五行全部显示「0% 共识」，同时行内正确显示「3 策略 / 2 策略…」徽章（strategy_count）与策略标签。

**需求描述**
- F1.1 当 consensus_level 缺失或为 0 时，**不渲染**「X% 共识」文本；保留「N 策略」徽章与策略标签。
- F1.2 当 consensus_level 为合法非 0 值时，维持现状显示（兼容未来后端补齐该字段）。
- F1.3 视觉上不产生空位错位（行内布局稳定）。

**解决方案（方案 A，推荐）**
- 在 StockList.vue 两处（虚拟/非虚拟）将共识文本改为条件渲染：v-if="hasConsensus(item)"，hasConsensus = Number(item.consensus_level) > 0。
- 布局兜底：.qc-stock-consensus 保留占位或通过 min-height 保证行高一致。

**备选方案 B（本期不做，仅记录）**：由后端按 strategy_count / 策略总数 计算真实共识百分比并补 consensus_level 字段。语义更完整但改变展示口径，超出「移除 0% 信息」的本意，需用户确认后另行排期。

**边界**
- 仅影响 show-consensus 调用点（策略总览 TOP5、策略共识榜）。
- 日历股票池（show-rank，无 show-consensus）不受影响。
- 后端零改动。

**验收**
- TOP5 与共识榜行内不再出现「0% 共识」；「N 策略」徽章与策略标签完整；有真实共识值（mock 注入）时正常显示。

---

### F2 修复：用户组设置「策略研究不可见」后，首次加载仍加载策略研究（需求 2）

**现状分析（根因链，代码级证据）**
- 首屏初始化 lifecycle.js（frontend/js/app-logic/lifecycle.js）runOnMounted()：
  1. 第 97-115 行「恢复用户最后选择」块：读 URL hash → quant_last_page → 偏好 default_view，并用 menus.value.some(...) 校验后赋 currentPage。
  2. **此时 groupsConfig.value 仍为 null**——loadGroupConfig() 直到第 232 行才被调用（且是 fire-and-forget .catch(() => {})）。
  3. menus 计算属性在 groupsConfig 为 null 时默认**全部菜单可见**（if (group && ...) 分支跳过），因此被用户组隐藏的 research（策略研究）也能通过校验、被恢复为 currentPage。
  4. 第 236 行 mainLoad 依据 currentPage 加载数据 → **策略研究页被加载并渲染**。
  5. 之后 loadGroupConfig 异步返回，menus 重算并隐藏 research 菜单，但 **currentPage 从未被重新校验** → 页面停留在策略研究，直到用户手动离开（即用户所描述的「需要重新设置才生效」）。

**需求描述**
- F2.1 首屏初始化时，**先加载用户组配置，再恢复/校验初始页面**；被用户组隐藏的一级菜单（如策略研究）不得作为初始页加载。
- F2.2 运行期防御：当 groupsConfig 变更导致当前页被隐藏时，自动跳转到第一个可见菜单（含子页），并输出 console.info 说明。
- F2.3 用户组隐藏整菜单（visible_menus[key]=false）时，其所有子页一并不可达（现有 menus 过滤已保证菜单项消失；补充页面级兜底）。

**解决方案（P0 双管齐下）**
1. **时序修复（根治）**：lifecycle.js 将 loadGroupConfig() 提前到「恢复用户最后选择」块之前并 await（或与偏好加载并行后进入恢复块），使恢复校验基于组过滤后的 menus。
2. **重校验兜底（防御）**：在 app-logic.js 对 groupsConfig（或 menus）增加 watch：若 currentPage 不在 menus 中 → 重定向到第一个可见菜单 + 其默认子页；若 currentSubPage 不在该菜单 subPages 中 → 重置为默认子页。避免任何后续组配置变更再出现「已打开隐藏页」。

**边界**
- 不改用户组数据模型与后端 /api/groups/my 接口。
- 显式用户导航仍被尊重（仅在当前页被隐藏时干预）。
- 游客（无 token）行为不变。

**验收**
- 构造「用户组隐藏 research 菜单」配置后，以该组成员登录并刷新，首屏不加载策略研究（页面为第一个可见菜单，侧栏无策略研究入口）。
- 已打开策略研究时组配置变更将其隐藏 → 自动跳转第一个可见菜单，无白屏。

---

### F3 美林时钟·历史周期时间轴评估与美化（需求 3）

**现状评估（DOM 实测，ops 生产实例 1440x1100）**

| 维度 | 实测值 | 评估 |
|---|---|---|
| 时间轴块总高 | 1138x963px（约占满一屏） | **过高**，下方内容被推离首屏 |
| 周期轮数 / 阶段 chip | 4 轮 / 18 chip | 信息量合理 |
| chip 尺寸 | 高 27px、字号 12px、圆角 8px、内边距 4px 10px | 字号偏小，层级弱 |
| 轮行结构 | 每轮 3+2 两行（蛇形折返） | 5 阶段以上用两行，行高 60pxx2 |
| 甘特条 | 1090x10px | 过细，视觉占比低 |
| 主干 | 2px 渐变竖线 + ▲历史/▼最新 文本箭头 | 箭头为纯文本，质感一般 |
| hover 浮层 | 玻璃 tl-tip（blur 12px） | 已较完善 |
| 当前阶段 | chip 主色外发光 + 「当前」徽标 | 可读但可更强 |
| 移动端 | responsive.css 无时间轴规则 | **缺适配**，窄屏蛇形布局可能溢出 |
| 数据完整 | 部分阶段 name 为空（由 getTimelineStageName 兜底） | 前端已兜底，OK |

**需求描述（美化方案）**
- F3.1 **压缩纵向高度（P0）**：轮间距 32px→20px、轮内 padding 收敛、甘特条 10px→6px、主干箭头改小号线性图标；目标整块高度较现状压缩 **≥25%**（963px → ≤720px）。
- F3.2 **层级与排版精修（P0）**：轮次标签行强化（年份用等宽数字）；chip 字号 12px→13px、名称加粗、年份弱化；阶段色统一贯穿（dot/描边/甘特段）。
- F3.3 **当前阶段强化（P0）**：当前 chip 保留主色外发光，补充「当前」小徽标底纹；tooltip 头部加阶段色条。
- F3.4 **交互增强（P1）**：轮次可折叠（点击轮标签收起/展开该轮）；块头加「阶段色图例」；提供「回到最新」快捷按钮。
- F3.5 **移动端适配（P0）**：<768px 时蛇形折行改单行横向滚动 chip（或单列堆叠），甘特条保留，点击弹窗（tl-click-pop）限宽防溢出。
- F3.6 **令牌纪律**：所有新样式走 var(--...)，不引入硬编码色值（守护测试 test_tokens_no_hardcode）。

**边界**
- 不改时间轴数据模型与后端 /api/market/merrill-clock/timeline 返回结构。
- hover 浮层、点击弹窗（tl-click-pop）交互保留。

**验收**
- 时间轴整块高度压缩 ≥25%；桌面/移动端无横向溢出；hover/点击交互正常；双主题（亮/暗）对比度达标。

---

### F4 股票详情弹窗：去除头部背景色 + X 按钮位置/大小优化（需求 4）

**现状（DOM 实测）**
- 弹窗头 .el-dialog__header（themes.css 约 L2775）全局应用 linear-gradient(135deg, var(--bg-card-header), var(--bg-card)) 渐变背景（实测 rgb(253,248,236) → 白），股票详情（kline-dialog）头部高度 61px。
- X 按钮 .el-dialog__headerbtn 48x48px，right:0; top:0（EP 默认），关闭图标 16px。

**需求描述**
- F4.1 **去除背景色**：kline-dialog 头部不再使用渐变背景（透明/页面背景），仅保留下边框分隔（或一并去除），使头部与正文视觉统一。
- F4.2 **X 按钮位置**：垂直居中于头部、右侧留 24px 间距（对齐 merrill-detail-dialog 的 top:24px; right:30px 惯例，采用 top:50%; transform:translateY(-50%); right:24px）。
- F4.3 **X 按钮大小**：关闭图标 16px→18px，命中区域保持 ≥40px（满足可访问性）。

**解决方案**
- themes.css：.kline-dialog .el-dialog__header { background: transparent; }（如保留分隔则补 border-bottom: 1px solid var(--border-light)）。
- .kline-dialog .el-dialog__headerbtn { top: 50%; transform: translateY(-50%); right: 24px; } 与 .kline-dialog .el-dialog__close { font-size: 18px; }。
- 移动端（responsive.css）同步校验。

**边界**
- 仅作用于 kline-dialog（股票详情/指数详情弹窗），不影响其他弹窗（含 merrill-detail-dialog 现有样式）。
- 不改弹窗内容与 Tab 结构。

**验收**
- 股票详情弹窗头部无渐变背景；X 按钮垂直居中、右侧留白、图标 18px；移动端不溢出；其他弹窗样式回归无变化。

---

### F5 重点跟踪股票列表风格对齐「关注」，关键信息单独展示（需求 5）

**现状**
- 关注（自选，ai-page watchlist 子页）：扁平列表行（checkbox + 代码/名称 + 评分徽章 + 行内实时报价 + 操作按钮），虚拟滚动，移动端左滑。
- 重点跟踪（focus-view）：卡片化行 .focus-row（flex-wrap、surface 底、边框、阴影），行内堆叠「状态点 + 名称(代码) + 入池徽章(最多 4 个 el-tag) + 动作 tag + 评分 + 方向 + 打开按钮 + 展开箭头」，关键信息**挤在一行且换行**；展开详情在行下。

**需求描述**
- F5.1 重点跟踪股票列表改为**类关注风格的规整行列**：行高一致、字段分列（信息单独展示，不靠换行堆叠）。
- F5.2 关键信息单独展示：推荐档位（强烈推荐/推荐/谨慎推荐/中性/观望）作为**独立徽章区**；评分独立列；方向（多/空/震荡）独立列；入池/自选/持仓状态独立徽章区；代码+名称固定列。
- F5.3 保留：按档位分组（强烈推荐→观望）、点击展开详情（评估来源/信号归因/入池历史等）、打开个股详情按钮。
- F5.4 复用与关注一致的视觉语言（令牌、字号、间距、hover 态），不做重复造轮子。

**解决方案（推荐）**
- 前端重构 focus-view.js 的行模板：用与 qc-stock-list / watchlist 一致的网格（列：状态点｜名称(代码+徽章)｜档位｜评分｜方向｜入池状态｜操作）。建议引入共享行布局类（如 .qc-stock-row 复用或新增 .focus-row-grid）。
- 档位分组头保留；行高固定 48-56px；展开详情收纳于行下（保持现状）。
- layout.css 重写 .focus-row 相关样式；令牌驱动；双主题适配。

**边界**
- 不改 /api/focus/* 数据结构与动作派生逻辑。
- 关注列表样式本身不动。

**验收**
- 重点跟踪行不再换行堆叠；档位/评分/方向/入池状态各自独立呈现；分组、展开、打开详情均可用；移动端合理降级。

---

### F6 顶部二级菜单溢出优化：数量多时后面的菜单可见可达（需求 6）

**现状（代码级证据）**
- toptab 形态容器 header.css .qc-header-tabs（约 L168）：overflow-x: auto + scrollbar-width: none（滚动条隐藏）+ ::-webkit-scrollbar{display:none} + 右侧 mask-image 渐变淡出（92%→透明）。
- 当子页较多（system 7 个、ai 7 个、shortterm 6 个）且视口不足时，后续标签**不可见且无任何可滚动提示**，用户感知为「后面的菜单看不见了」。

**需求描述**
- F6.1 溢出时提供**明确的「更多」入口**：容器右端显示「更多 ▾」下拉（el-dropdown），列出被裁切的隐藏标签，点击即导航。
- F6.2 提供**左右滚动按钮**（‹ ›）：溢出时显示，点击按步进滚动（约 200px），到边界自动禁用。
- F6.3 溢出可发现性：保留右端淡出遮罩同时，露出下一标签约 16px 边缘（peek），让用户知道还有更多。
- F6.4 键盘可达：标签条支持 ←/→ 方向键滚动（焦点管理），保持 a11y。

**解决方案（推荐）**
- TopTabs.vue（frontend/src/components/TopTabs.vue）：新增 hasOverflow（ResizeObserver + 初始检查）、scrollByStep、hiddenTabs 计算（offsetLeft+offsetWidth > container.clientWidth 的项）与「更多」下拉；左右按钮。
- header.css：.qc-top-tabs 容器结构扩展（左‹｜滚动区｜更多▾｜右›），样式令牌化。
- 与 Sidebar（tree 形态）/ MobileNav（抽屉）无关，不改。

**边界**
- 仅 toptab 形态生效；subnav（中栏）与移动抽屉不受影响。

**验收**
- 在 1280/1440px 视口分别验证 ai/system/shortterm 页：溢出时出现「更多 ▾」与滚动按钮；全部标签可经点击或下拉到达；无溢出时控件隐藏。

---

### F7 短线复盘改为「列表 + 右边内容」双栏模式，默认展示最近一天（需求 7）

**现状**
- 短线复盘 overview 子页为**单日看板**：日期选择器 + 情绪指标卡 + 市场事实 + 明日验证条件 + 近 5 日热度 + AI 盘面研判。
- 默认日期：setSessionDates() 调 /api/shortterm/latest-session 赋 shortDate（已是「最近一天」，满足默认需求）。
- 后端已有 /api/shortterm/dates（store.list_dates() 返回已抓取日期列表），可支撑左侧列表。

**需求描述**
- F7.1 **左列表右内容**：overview 子页改为双栏——左侧为最近交易日列表（最新在上，默认选中最近一天），右侧为选中日的完整复盘看板（现有全部卡片）。
- F7.2 列表项带**关键摘要**（日期 + 情绪档位/赚钱效应均值/涨停家数 等 1-2 个核心指标），便于快速对比选择；选中态高亮。
- F7.3 无已抓取日期时回退日期选择器（保留现有入口）；数据缺失时显示占位不报错。
- F7.4 响应式：窄屏（<1024px）双栏改上下堆叠（列表折叠为横向 chip 或顶部下拉）。

**解决方案**
- **前端**：shortterm-page.js overview 模板重构为双栏容器（左 w≈240px 固定、右 flex:1）；loadDates 拉取 /api/shortterm/dates（新前端函数，缓存）；点击列表项设置 shortDate 并 loadOverview(true)。
- **后端（P1，推荐最小改动）**：新增轻量端点 GET /api/shortterm/dates/summary 返回 [{date, emotion_level, money_effect_avg, zt_count}]（读取既有 store/派生数据，一次性返回近 N 天），供列表摘要；若评估成本高，可先用「仅日期列表」+ 选中后拉详情（后端零改动）作为 P0 交付，摘要列为 P1。
- 布局样式令牌化，双主题适配。

**边界**
- 只改 overview 子页；ztpool/lhb/sector/intraday 子页不动。
- 不改后端既有接口数据结构。

**验收**
- 进入短线复盘 overview：左侧最近交易日列表（默认选中最近一天）＋右侧看板；点击其他日期右侧内容刷新；窄屏降级正常。

---

### F8 「功能配置」更名「基础配置」（需求 8）

**现状（全部引用点，非 dist）**
- zh-CN.js 约 L62：'sub.feature': '功能配置'
- zh-TW.js 约 L57：'sub.feature': '功能配置'
- en.js 约 L61：'sub.feature': 'Features'
- app-logic.js 约 L364 子页名映射：'feature': '功能配置'
- SubNav.vue 约 L30：{ key:'feature', label:'功能配置', ... }
- 测试断言：test_v63_m4_config.py、test_v69x3_ui_opts.py、test_v69x4_ui_fixes.py
- system-page.js 内部无页名级字面量（子页标题为「策略筛选」等卡片标题，无需改）。

**需求描述**
- F8.1 全站 UI「功能配置」→「基础配置」（含侧栏/顶栏/面包屑/二级菜单）。
- F8.2 多语言同步：zh-CN「基础配置」、zh-TW「基礎配置」、en 建议「Basic」（与中文口径对应；如用户偏好保留 Features 亦可，待确认）。
- F8.3 相关测试断言同步更新；注释文案顺带更新（不改历史文档）。

**边界**
- 仅文案更名，不改页面内容、子页 key（feature）、路由与数据结构。
- dist 需重建（前端源码变更）。

**验收**
- 界面无「功能配置」残留（grep 断言）；三语一致；功能页内容不变。

---

## 2 影响面总览

| 需求 | 前端 | 后端 | 测试 | 文档 |
|---|---|---|---|---|
| F1 0% 共识移除 | StockList.vue | 无 | test_v515x（新增） | 本 PRD |
| F2 组配置首屏 | lifecycle.js / app-logic.js | 无 | test_v515x（新增） | 本 PRD |
| F3 时间轴美化 | strategies-page.js / layout.css / responsive.css | 无 | 门禁 + 新增 | 本 PRD |
| F4 弹窗样式 | themes.css / responsive.css | 无 | 新增 + 浏览器实证 | 本 PRD |
| F5 重点跟踪列表 | focus-view.js / layout.css | 无 | 新增 + 浏览器实证 | 本 PRD |
| F6 顶部标签溢出 | TopTabs.vue / header.css | 无 | 新增（含 nav 测试） | 本 PRD |
| F7 短线复盘双栏 | shortterm-page.js / css | shortterm.py（P1 摘要端点） | 新增 + 浏览器实证 | 本 PRD |
| F8 更名 | locales x3 / app-logic.js / SubNav.vue | 无 | 断言更新 | 本 PRD |

**回归口径**：全量 pytest 失败数 ≤ 现状基线（3317 收集，历史 CSS 门禁失败以 ops 基线对照），**无新增失败**；前端冒烟 0 pageerror。

---

## 3 版本与发布

- 文档里程碑：**v5.15**（沿用 5.X 编号；PRD/DEV-PLAN/TEST-PLAN 三件套）。
- 运行时 APP_VERSION：本次为 UI 整改批次，建议发布时由 5.5.0 → **5.6.0**（改 backend/main_new.py + 版本门禁测试断言；若用户选择暂不对外发布可保持 5.5.0，仅本地 dev 验证）。
- 发布流程：开发完成后 dev 全量测试 → 同步 ops（fetch+reset）→ 重启双端 → /api/health 验证 → 用户确认后打 tag 触发 CI/Docker。
- 前端改动必须重建 dist（vite build）并提交 frontend/dist 产物。

---

## 4 待确认事项（开发前需用户拍板）

| # | 事项 | 选项 | 建议 |
|---|---|---|---|
| C1 | F1 只隐藏「0% 共识」还是改为真实百分比 | A 隐藏（推荐）/ B 后端算真实共识 | A |
| C2 | F3 美化范围 | A 仅 P0（高度/层级/当前态/移动端）/ B 含 P1（折叠/图例/回到最新） | B（一次做完） |
| C3 | F7 左列表摘要 | A 仅日期列表（后端零改动）/ B 新增 dates/summary 端点带核心指标 | B（体验更好） |
| C4 | F8 英文文案 | A Basic（推荐）/ B 保留 Features | A |
| C5 | 版本号 | A 发布 bump 5.6.0 / B 暂不 bump 保持 5.5.0 | 视是否发布而定 |
| C6 | F6 交互形式 | A 「更多▾」+ 左右按钮 / B 仅「更多▾」 | A |

---

## 5 风险与规避

| 风险 | 规避 |
|---|---|
| F2 时序调整影响正常首屏速度 | 组配置接口为轻量 GET；与偏好加载并行，await 后进入恢复块，整体耗时增量 <100ms 量级 |
| F3 CSS 大改触发令牌/对比度门禁 | 全部令牌化；双主题浏览器实证；先跑门禁测试 |
| F5 行重构破坏现有交互（展开/打开详情） | 保留全部事件与数据绑定；契约测试 + 浏览器实证 |
| F6 溢出检测在懒加载/字体加载后不准 | ResizeObserver + 100ms 延迟重测 + 切换页面时重测 |
| F7 双栏在窄屏/低分辨率溢出 | 响应式断点（<1024px 堆叠）；列表项省略号 |
| F8 更名遗漏调用点 | grep 全量清单先行；测试断言覆盖 |
| dist 未重建导致界面不生效 | 发布流程强制 rebuild + hash 校验 |
