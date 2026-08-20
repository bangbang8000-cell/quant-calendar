# 量化选股日历 · 前端【美观 × 适用】审计报告

- **审计对象**：/home/evergreen/dsh-workspace/quant-calendar-dev（FastAPI + Vue3 零构建 SPA，运行实例 http://127.0.0.1:8001/）
- **审计日期**：2026-08-21
- **审计维度**：布局 / 配色 / 主题一致性 / 字体 / 间距节奏 / 响应式 / 可读性 / 信息架构 / 功能完整性 / 用户价值 / 冗余功能
- **方法**：① 静态源码令牌审计（CSS 变量定义↔引用全量比对、硬编码色值扫描）；② WCAG 对比度计算（相对亮度公式逐对实测）；③ 运行时 Playwright 自动化（登录 admin/admin，浅色 tech-blue + dark-pro 两主题 × 7 页面截图 27 张 + 控制台错误收集）；④ 组件/页面代码逐页走查。
- **版本基线说明**：任务描述基线为 git b0e1b30（V4.0.8），但当前工作区 HEAD 为 **e0f879b（V4.0.9，含 V4.1 令牌修补）**，且 backend/main_new.py:88 APP_VERSION = "4.0.0" 未随版本推进（见问题 10）。本报告全部行号基于**当前磁盘文件**（与运行实例一致）。
- **明确的不确定性（重要）**：本轮视觉分析预算已耗尽，**27 张截图的像素级比对未完成**（文件已存 /home/evergreen/dsh-workspace/screenshots/，可用 vision 工具补审）。以下结论全部来自可复现的源码证据与对比度计算；涉及"视觉观感"（留白感受、拥挤度、渐变质感）的条目已标注为「待视觉复核」。

---

## 一、主题与令牌审计（逐主题）

### 1.1 令牌体系总览
三层令牌（tokens.css:1-84）：间距 --sp-*（4/8/12/16/20/24/32/40/48）、圆角 --r-*、字号 --font-*（11/12/14/16/18/22/26/36）、语义色 --color-up/down（红涨绿跌，tokens.css:48-51）、徽标色 --badge-*、组件令牌（--sidebar-width 等）。主题层 themes.css 以 [data-theme] 覆盖。**框架设计良好**，且 V4.1 已将 --border-strong/--text-on-chip 补为全局令牌（tokens.css:31-33）。

### 1.2 令牌化完整性：13 个「被引用但从未定义」的 CSS 变量（高严重度）
全量比对 var(--x) 引用与定义后，以下令牌**引用未定义**，导致对应元素样式静默失效（CSS 变量解析失败 → 属性回退，多数表现为透明背景/无边框/文字色当边框色）：

| 未定义令牌 | 使用位置（证据） | 实际影响 |
|---|---|---|
| --surface / --border / --radius-2 | layout.css:485 .custom-bt-item | **线上在用**：research-page.js:260-266「回测结果」指标卡（标的/区间/年化/回撤/夏普/胜率）背景、边框、圆角全部失效，渲染为无边框透明块 |
| --border-color | layout.css:141（PTrade 代码框）、143（策略运行行）、150（因子研究分隔线）、156（审计行） | 边框色回退为 currentColor，分隔线颜色与文字相同 |
| --bg-code | layout.css:141 .ptrade-code-pre | 代码块无背景色（设计上应有深/浅代码底色） |
| --bg-tertiary | themes.css:3880（快捷键 kbd）、4760（.tag-chip） | 键盘键位、标签 chip 背景失效 |
| --el-color-danger / -light-7 / -light-9 | themes.css:2705-2709 .ai-eval-error | AI 评估失败提示条（浅红底+红边框）样式失效 |
| --el-fill-color-light | themes.css:4609 .result-box、4741 .stage-chip | 结果框/阶段 chip 底色失效 |
| --fs-base / --fw-medium | animations.css:93-94 | 启动骨架屏字号/字重回退 |
| --primary-color-dark | themes.css:3890 | 有内联兜底 var(--primary-color)，实际无碍（低） |

### 1.3 dark-pro 主题：硬编码色值泛滥，无暗色令牌层（高严重度）
- themes.css 共 **426 处** hex 字面量；其中 dark-pro 覆盖段（themes.css:290-524）出现 **#233554×26、#64ffda×19、#8892b0×17、#e6f1ff×16、#1a1a3e×9、#3a4a6a×8、#0f0f23×7、#506080×6、#1e2a4a×6** 等。
- 这些值本质是「暗色语义令牌」（暗底、暗次级文字、暗输入底、暗边框），却以字面量散落在约 100 条规则里（themes.css:330-524），未抽象为 --dark-* 令牌。后果：① 改一个暗色层级要全文替换；② 与浅色主题的语义令牌（--text-primary 等）**命名空间割裂**——组件作者无法用同一套语义变量写出跨主题正确的样式，只能为 dark-pro 单独补 !important 覆盖（实测 themes.css 暗色段约 60+ 处 !important）。
- 好消息：dark-pro 核心文本对比度达标（见 1.4），说明配色方向对，问题在"实现方式"。

### 1.4 对比度实测（WCAG 2.1，正文需 ≥4.5:1，大字 ≥3:1）

**dark-pro 失败项（高）**
| 前景/背景 | 对比度 | 证据 |
|---|---|---|
| #fff / #64ffda（主色）| **1.25:1** | layout.css:313-319 .merrill-stage-chip-current、layout.css:405-414 .tl-tip-current、themes.css:393-394 .el-pager li.active 均为「白字压 --color-primary」→ dark-pro 下主色是薄荷绿 #64ffda，**白字几乎不可见** |
| #333 / #1a1a3e（兜底色）| **1.32:1** | merrill.js:81 textColor: s.color 或 '#333' —— 阶段配置缺 color 时，dark-pro 下阶段名不可读 |
| #506080 / #233554（placeholder）| **1.95:1** | themes.css:365 暗色输入框占位符几乎不可见 |

**浅色主题失败项（中）**
| 前景/背景 | 对比度 | 证据 |
|---|---|---|
| #FF9800 / #fff | 2.16:1 | merrill.js:107 维度评分 level「中位」橙字 |
| #f57c00 / #fff | 2.70:1 | merrill.js:215 资产排名第 2 名 |
| #27AE60 / #fff | 2.87:1 | merrill.js:43 复苏期阶段名/进度条 |
| #43a047 / #fff | 3.30:1 | merrill.js:90-93 PMI/GDP/M2 指标绿字 |
| #fff / #b8922a | 2.92:1 | 活力金/经典金主按钮白字（themes.css:157、241），小字按钮不达标 |
| #E53935 / #fff | 4.23:1 | merrill.js:92 CPI 红字，略低于 4.5 |

**达标项（良好实践）**：dark-pro 正文 #e6f1ff/#1a1a3e=14.58、次级 #8892b0=5.38、三级 #7a8ba8=4.83、按钮深字 #0f0f23/#64ffda=15.15；浅色三级 #64748b/#fff=4.76、#666/#fff=5.74；badge 色（dark-pro info 7.90 / danger 5.65）。

### 1.5 语义色一致性与潜在反义
- **涨跌色已统一为红涨绿跌**（tokens.css:48-51 --color-up=#E63946 / --color-down=#2E7D32），portfolio.js:166-167、charts.js:63-65 均遵循 ✅。
- **隐患：降级兜底色与主色语义相反**（中）：
  - echarts-theme.js:14-15：up 兜底 '#43e97b'（绿）、down 兜底 '#fa709a'（粉红）；
  - charts.js:64-65：up 兜底 '#43e97b'、down 兜底 '#fa709a'。
  - 一旦 CSS 变量读取失败（如脚本先于主题应用、CDN 场景），K 线/涨跌图将**红绿颠倒**。
- **跨域语义不统一**（低-中）：watchlist.js:933-945 评估得分趋势图把「得分↑」标绿（--color-success）、「得分↓」标红（--color-danger），语义上"分数变好=绿"合理；但同应用内 portfolio.js:166-167 净值曲线是「涨=红」。同一界面生态里 ↑ 有时红（价格）有时绿（得分），建议在命名/提示上区分「行情涨跌」与「绩效好坏」。
- **品牌色漂移**（低）：index.html:10 theme-color/meta 与 manifest 用 #667eea，而实际品牌渐变/主色为 #2563eb/#1d4ed8（themes.css:27、39、68），浏览器地址栏/状态栏颜色与站内品牌不一致。

### 1.6 主题数量冗余（低-中）
themes.js 提供 7 主题：6 个浅色 + 1 个 dark-pro。其中 classic-white/classic-red/classic-gold（themes.css:180-247）**结构完全相同、仅主色不同**（白底+蓝/红/金点缀），三套共重复约 90 行令牌覆盖 + 约 60 行共享 active 状态规则（themes.css:249-288）。每个新主题都需同步 badge/btn/EP 三套令牌（如 themes.css:82-95 vs 116-128 vs 151-162），是 themes.css 426 处 hex 与 4875 行体量的主因之一。建议收敛为「主题=基础配色 + 强调色参数」。

---

## 二、页面级审计

> 说明：以下基于代码结构 + 截图已采集（未像素复核，标注 ⚠ 的条目待视觉确认）。

### 2.1 登录页（index.html:119-172）
- ✅ 品牌化完成度高：SVG 三柱 logo（index.html:123-132）+ 标题/副标题/描述/footer 文案层次完整；输入框带图标前缀；有访客登录。
- ⚠ **两个并列大号 primary 按钮**：登 录（index.html:162-165）与 访客登录（index.html:167-169）同为 size=large + type=primary 满宽按钮垂直堆叠——访客是低频次要动作，视觉权重却与主登录相等，页面焦点被稀释。建议访客入口降为次按钮/文字链。
- **可访问性**：index.html:5 user-scalable=no, maximum-scale=1.0 禁止移动端双指缩放（WCAG 1.4.4 违规），整站生效。

### 2.2 策略总览（strategies-page.js，4 子页 v-if 链）
- ✅ 「今日一屏」today-hero 卡片（strategies-page.js:25-60）聚合美林/情绪/池变动/今日重点四大决策要素，是很好的"决策仪表盘"信息架构；今日焦点按 level 分级、可点击跳转（:58-59）。
- ✅ 二级导航由全局 Header 提供（global-header.js:13-25 渲染 subPages 标签），子页可达性 OK。
- ⚠ 概览页 top 区（strategies-page.js:14-22）：page-title + 回测工作台按钮 + 交易日 + 更新时间 挤在一行 flex，右侧信息用 text-base-secondary 与 text-xs-tertiary 混排，层级略平（待视觉复核）。
- **潜在崩溃**：见问题 3（research-page.js:99 的 factor_specs 空指针）属策略研究页，但概览页也引用同一策略状态（strategies-page.js:535-560），需一并确认空态。

### 2.3 量化日历（calendar-page.js）
- ✅ 状态筛选 tabs（:31-36）+ 搜索 + 虚拟滚动列表（:49）结构清晰；行内 code/名称/策略标签/AI 信号三行信息密度合理（row-height 78px）。
- ✅ 视图切换（日/周/月/年）在 Header（global-header.js:36-46），与日期选择联动，符合"日历"心智。
- ⚠ 卡片标题「💎 策略共识度股票池」（:28）与页面名「量化日历」存在术语错位：页面实际承载的是股票池/持仓列表，日历语义弱（仅日期导航体现）。用户若按"日历"预期找"按日排布的选股记录"会困惑（低-中，待视觉确认）。
- 空态/加载态：统一 qc-state-panel 四态组件（:43-45）✅。

### 2.4 策略研究（research-page.js，1281 行）
- ✅ 策略注册表 → schema 表单 → 运行/回测/PTrade 导出的流程完整（:19-60）；纳管/进日历/调度开关（:33-47）用户价值高。
- 🔴 **运行时 TypeError 实测**：Cannot read properties of null (reading 'factor_specs') —— research-page.js:99 v-for 遍历 activeStrategy.factor_specs（或 factorOptions），当 activeStrategy 为 null（策略未加载/注册表为空/刚进入页面）时直接抛错，模板段渲染中断（截图显示该页内容为空壳，与 dark/light 同字节一致吻合）。**这是"能用但不够好"的反面：一个未选策略的空态就崩掉整个子页**。
- 🔴 回测结果指标卡（research-page.js:260-266）因未定义令牌（layout.css:485）无样式，见 1.2。
- ⚠ 页面承载 5 个子页（quant-research/market-review/scan/backtest/…）+ 因子研究（:149-152），1281 行单文件，系统页 1284 行单文件——页面与组件文件过度膨胀，是 IA/可维护性风险（低，与视觉无关）。

### 2.5 美林时钟（merrill.js + strategies-page.js:178-325 + 弹窗 merrill-detail.js）
- ✅ 功能完整：四阶段卡片、维度评分条、置信度、下一阶段预测、历史时间轴蛇形图（strategies-page.js:262-320）、阶段详情弹窗、Gantt 式分段条（layout.css:346-356）。
- 🔴 **入口层级偏低**：美林时钟是产品三大支柱之一（README 定位），但导航里没有独立入口，只在「今日一屏」的一个小 cell（strategies-page.js:35-40）点击进入；Header 二级 tab 文案为 t('sub.merrill')（global-header.js:21），首次使用需摸索。
- 🔴 **配置与展示分离**：自动刷新开关/间隔/重评估按钮放在**系统配置**页（system-page.js:424-445「⏱️ 美林时钟」卡片），而时钟展示在策略总览→美林子页——用户调刷新间隔要跨页面；且两处功能由同一 composable（merrill.js:339-373）驱动，入口割裂。
- 🔴 硬编码色 31 处（merrill.js:43,80-81,90-93,107,112-113,119,129,175-179,215），对比度问题见 1.4；textColor: s.color 或 '#333'（:81）在 dark-pro 下 1.32:1 不可读（1.2 节证据）。
- ⚠ 历史时间轴：chip 文字色已用 --text-on-chip 令牌修复（strategies-page.js:713 注释 V4.0.4），但 10px 字号（layout.css:314）过小；「当前」chip 白字压主色在 dark-pro 下 1.25:1（layout.css:313-319）。

### 2.6 系统配置（system-page.js，1284 行）
- ✅ 状态/自动评估/数据源/功能开关/用户/美林配置/审计等分区完整，用量统计卡片化（layout.css:436-482）是良好实践。
- ⚠ 单文件 1284 行 + 与策略页相同的"全卡片"风格：页面间视觉区分度低，所有页面都是「card 堆叠 + 同款 card-title」，缺少页面级差异锚点（⚠ 待视觉复核）。
- 美林配置误置于此（见 2.5）。

### 2.7 智能评估 AI（ai-page.js，907 行）
- ✅ 统计卡（总评估数/覆盖股票/自选/组合/运行状态，:42-86）+ 评分分布 + 快捷操作 + 最近评估 + 命中率统计，功能完整。
- ⚠ 子页实际 5 个（overview/history/chat_history/watchlist/portfolio，:13 注释却写 4 个）——注释与实现漂移（低）。
- 命中率/评分分布图表为 ECharts，主题感知色已做（watchlist.js:931-940 注释「主题感知色」）✅；但轴标签 fontSize:10 + rotate 30（watchlist.js:956-957）小且倾斜，移动端更小（中，⚠ 待视觉复核）。

### 2.8 运行时错误实录（Playwright 控制台）
| 级别 | 现象 | 判定 |
|---|---|---|
| error | TypeError: Cannot read properties of null (reading 'factor_specs')（策略研究页） | **真 bug**（见问题 3） |
| error | 登录前 401（/api/... 未授权） | 预期行为（fetch 拦截器，非问题） |
| error | WebSocket ws://…/api/market/ws/quotes 握手失败 ×2（dark 会话） | **未定性**：可能是 headless 环境/代理限制，也可能是服务端 WS 鉴权或路径问题，需在浏览器手动复现 |
| error | 一次 404 资源加载（dark 会话，URL 被截断） | 未定性 |
| warning | navigator.vibrate 被拒（桌面无手势） | 移动端手势代码在桌面触发，无害但说明 mobile-gestures 未做能力嗅探（低） |

---

## 三、排版与间距节奏

- **字号层级越界**：令牌 scale 为 11/12/14/16/18/22/26/36（tokens.css:16-17），但实际使用出现 **10px（layout.css:314、406；responsive.css:194 移动导航标签）、11px（layout.css:200,312,358）、11.5px（layout.css:415）、13px（layout.css:404）**。全站实际字号层级 ≥6 级（10/11/11.5/12/13/14/16/18/22/26/36），超出"≤4 级"的视觉规范，其中 10px 已低于可读舒适线（且多用于徽标/日期等关键信息）。watchlist.js:956-957 图表轴标签亦为 10px。
- **间距**：layout.css 出现 5px（2 处）、6px（5）、10px（7）、11px（1）、14px（4）、18px（1）、22px（1）等偏离 4px 网格值（其余已大量使用 --sp-* 令牌，方向正确）。Element Plus 自带 14px 内距不在此列。
- **数字对齐**：未发现 tabular-nums/font-variant-numeric 声明（grep 无命中），表格数字在刷新时会跳动（中，⚠ 待视觉复核）。
- 统计卡片 stat-value 用 --font-bold 700（layout.css:51-54），规范建议 semibold 600 更精致（低，主观项）。

## 四、响应式

- responsive.css 覆盖 1024/768/480 三档断点，移动端底部导航（index.html:219-224）、时间轴窄屏横向滚动（layout.css:428-434）等处理到位 ✅。
- 移动导航标签 10px（responsive.css:194）过小；user-scalable=no（index.html:5）禁缩放（见 2.1）。
- 桌面 220px 固定侧栏 + 内容区单滚动条模型（themes.css:727-729 注释 v3.22-I1）✅ 一致性好。

---

## 五、Top 10 问题清单

| # | 问题 | 严重度 | 证据位置 | 修复建议 |
|---|---|---|---|---|
| 1 | **13 个未定义 CSS 令牌**导致线上元素样式失效（回测结果卡/代码框/错误提示/标签 chip） | 高 | layout.css:141,143,150,156,485；themes.css:2705-2709,3880,4609,4741,4760；animations.css:93-94 | ① 补定义（--surface/--border/--radius-2/--border-color/--bg-code/--bg-tertiary/--el-fill-color-light/--el-color-danger* 等）；② 在 CI/门禁脚本加「var(--) 引用↔定义」静态校验（现有令牌纪律测试只查模板/CSS 硬编码，未查未定义变量） |
| 2 | **dark-pro 白字压主色 #64ffda（1.25:1）**：「当前」徽标、时间轴 tooltip 徽标、分页激活项不可读 | 高 | layout.css:313-319,405-414；themes.css:393-394 | chip/徽标文字改为 var(--text-on-chip)（tokens.css:33 已存在！）或新增 --chip-bg/--chip-fg 令牌；分页激活沿用 #0f0f23 深字 |
| 3 | **策略研究页空态崩溃**：activeStrategy=null 时模板抛 TypeError，整个子页空白 | 高 | research-page.js:99；控制台实测 Cannot read properties of null (reading 'factor_specs') | 改为可选链 activeStrategy?.factor_specs（或 factorOptions），并为"未选择策略"增加空态引导（qc-state-panel empty + 去选择 CTA） |
| 4 | **dark-pro placeholder 1.95:1 几乎不可见** | 中-高 | themes.css:365 #506080 !important | 提亮至 ≥4.5:1（如 #6b7fa8）；同段输入/表格文字色一并纳入 --dark-* 令牌 |
| 5 | **美林时钟 31 处硬编码色 + 对比度不合格**（#333 兜底 1.32:1、#FF9800 2.16:1、#f57c00 2.70:1、#27AE60 2.87:1、#43a047 3.30:1） | 中-高 | merrill.js:43,80-81,90-93,107,112-113,119,129,175-179,215 | 改用语义令牌（--badge-warning-text 等）+ 深色兜底（var(--text-primary)）；对 10px 级小字提高最低对比标准 |
| 6 | **ECharts 兜底色红绿颠倒**：CSS 变量缺失时涨=绿、跌=粉红，与全站红涨绿跌相反 | 中 | echarts-theme.js:14-15；charts.js:64-65（#43e97b/#fa709a） | 兜底改为 --color-up/#E63946、--color-down/#2E7D32，与 tokens.css:48-51 一致 |
| 7 | **涨跌/绩效语义跨域不统一**：净值图涨=红，评估得分图涨=绿 | 中 | watchlist.js:938-939,945 vs portfolio.js:166-167 | 统一命名（行情 --color-rise/fall；绩效 --color-success/danger），图表图例/提示明确语义；或让得分图也沿用红涨绿跌 |
| 8 | **字号层级越界（≥6 级）+ 10px 小字泛滥** | 中 | layout.css:200,312,314,358,404,406,415；responsive.css:194；watchlist.js:956-957 | 收敛到令牌 scale：10→11（--font-xs）、11.5→12、13→12/14；图表轴标签 ≥11px |
| 9 | **美林时钟入口与配置割裂**：导航无独立入口，配置在系统配置页 | 中 | strategies-page.js:35-40；system-page.js:424-445；app-logic.js:113 | ① 策略总览子页保留但升级 Header tab 文案/图标；② 刷新间隔/自动开关移到美林子页（merrill.js 已具备 saveMerrillClockConfig），系统页只留说明 |
| 10 | **版本令牌漂移**：APP_VERSION=4.0.0，但 git HEAD 为 V4.0.9 提交 | 低-中 | backend/main_new.py:88；git log e0f879b | 发版流程把 APP_VERSION 与 commit 版本同步（PWA cacheName 与 ?v= 均依赖它，漂移会导致旧缓存不失效） |

**备选/观察项**（未入 Top10）：登录页双 primary 大按钮（index.html:162-169）；user-scalable=no（index.html:5）；theme-color #667eea 与主色不一致（index.html:10）；7 主题中 3 个 classic 变体仅换主色（themes.css:180-247）；watchlist 得分图 axis fontSize:10+rotate30（watchlist.js:956-957）；研究/系统页单文件 1281/1284 行；WebSocket /ws/quotes 握手失败与一次 404 待手动复现；数字无 tabular-nums。

---

## 六、3-5 条最有价值的优化建议

1. **令牌治理 + 门禁补位（一次投入，全站受益）**：优先修复 13 个未定义令牌与 dark-pro 字面量（建议抽出 --dark-bg/--dark-text/--dark-border/--dark-input 一组语义令牌替换 #233554/#e6f1ff/#8892b0 等高频字面量）；在现有令牌纪律测试基础上增加两条静态检查：① var(--x) 引用必须在 tokens.css/themes.css 有定义；② 组件模板/CSS 新引入 hex 必须带 qc-allow-hardcode 标注。这能同时消灭问题 1、2、4、8 的复发路径。
2. **对比度红线（A11y P1）**：把 1.4 节中全部 <4.5:1 的组合（dark-pro 白字压主色、placeholder、merrill 彩字、金主题按钮白字）逐项落到令牌并重测；为「白字 vs 主色」类样式建立统一规则（dark-pro 一律深字，浅色主题主色需满足白字 ≥4.5 或换色）。这是"专业感"与"可用性"同时提升的最大杠杆。
3. **语义色单一事实源**：定义「行情红涨绿跌」与「绩效绿好红坏」两套并显式命名（--color-rise/fall vs --color-good/bad），全站图表、徽标、文本统一引用；修正 echarts-theme/charts 的反义兜底。防止任何降级路径下出现"红色=上涨却在提示风险"的误导——对投资工具这是信任级问题。
4. **信息架构聚焦用户决策流**：把「今日一屏」升级为真正的指挥中心（美林/情绪/池变动/重点 → 各自子页），美林时钟配置并入其子页，系统页瘦身；登录页访客入口降权、放开移动缩放。让 80% 用户 3 秒内回答"今天该关注什么"。
5. **（视觉复核后必做）截图像素级巡检**：用已采集的 27 张截图（screenshots/01-05_*.png，浅色+dark-pro 双主题）做视觉回归基线，重点核对：各页卡片密度/留白、dark-pro 全组件一致性（表格/弹窗/日期选择器/select）、时间轴蛇形图在 1440 与移动宽下的表现。建议与以上 1-4 的修复构成"改前基线 → 修复 → 改后对比"闭环。

---

## 七、附：审计产物与待办
- 截图：/home/evergreen/dsh-workspace/screenshots/（27 张 PNG + report.json 控制台错误）
- 待视觉复核项：⚠ 标记条目（视觉密度、层级、留白、页面区分度、tabular-nums 实际观感）
- 待手动复现：WebSocket /ws/quotes 握手失败、dark 会话 404
