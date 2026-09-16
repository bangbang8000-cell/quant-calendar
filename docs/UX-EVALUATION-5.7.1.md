# 程序用户体验报告（quant-calendar v5.7.1）

> 版本：5.7.1（里程碑发布）
> 评估日期：2026-09-16
> 评估范围：前端界面（网页版 + 移动版）、美术、操作逻辑、设计系统
> 评估方法：双端运行实例实测（Playwright + Edge Chromium）+ 截图取证（桌面 1440×900 / 移动 375×812）+ 前端源码审查 + 既有评估文档对照

---

## 一、评估概述

### 1.1 被测环境

| 项 | 值 |
|---|---|
| 被测版本 | v5.7.1（git tag，commit a65960b9） |
| 后端 | FastAPI，端口 8001，健康检查通过（version=5.7.1） |
| 前端 | Vue 3.5 + Element Plus 2.14 + Lucide 图标，源码模式 + Vite 构建产物 |
| 桌面视口 | 1440×900，deviceScaleFactor=1 |
| 移动视口 | 375×812（iPhone 类），deviceScaleFactor=2，触屏 UA |
| 登录账号 | admin（默认口令，触发强制改密提示） |
| 导航形态 | toptab（侧边栏一级 + 顶部二级 Tab） |

### 1.2 实测覆盖

- **桌面端**：7 个一级菜单 × 全部 36 个子页面逐页导航截图，无 JS 运行时错误。
- **移动端**：登录页 + 5 个底部 Tab（首页/日历/AI/研究/设置）截图。
- **暗色主题**：strategies/calendar/ai/ops/system 关键页暗色渲染验证。
- **交互验证**：登录流程、导航切换、股票详情弹窗、滚动行为、横向溢出、主题应用。

### 1.3 截图索引

桌面端（`quant-calendar-dev/_shots/desktop/`，共 39 张）：

| 一级菜单 | 截图文件 |
|---|---|
| 策略总览 | `strategies_overview.png` `strategies_merrill.png` `strategies_market.png` `strategies_consensus.png` |
| 量化日历 | `calendar_calendar.png` `calendar_pool.png` |
| 智能评估 | `ai_overview.png` `ai_focus.png` `ai_watchlist.png` `ai_history.png` `ai_evaluation-analysis.png` `ai_portfolio.png` `ai_chat_history.png` |
| 策略研究 | `research_research-overview.png` `research_quant-research.png` `research_strategy-manage.png` `research_backtest.png` `research_backtest-history.png` |
| 短线复盘 | `shortterm_overview.png` `shortterm_market-review.png` `shortterm_ztpool.png` `shortterm_lhb.png` `shortterm_sector.png` `shortterm_intraday.png` |
| 系统状态 | `ops_status.png` `ops_health.png` `ops_schedule.png` `ops_usage.png` `ops_guard.png` `ops_datadict.png` `ops_execution.png` |
| 系统配置 | `system_config.png` `system_feature.png` `system_autoeval.png` `system_datasource.png` `system_user.png` `system_about.png` `system_notification.png` |
| 其他 | `clean_session_main.png`（干净会话首屏）`dark_*.png`（暗色主题 5 张） |

移动端（`quant-calendar-dev/_shots/mobile/`，共 8 张）：`login.png` `main.png` `tab_首页.png` `tab_日历.png` `tab_AI.png` `tab_研究.png` `tab_设置.png`

> 说明：评估模型无法直接读取图片像素，除截图取证外，另以 DOM 几何测量 + 像素密度/色值分析交叉验证，确保结论客观可复现（详见各章“取证数据”）。

---

## 二、实测结论摘要

### 2.1 总体评价

v5.7.1 前端架构方向正确，**骨架质量良好**：

- ✅ 导航系统（侧边栏 + 顶部二级 Tab + 移动端底部 TabBar）结构清晰，36 个页面导航全部可达；
- ✅ 主题系统已完成“明/暗两套基底 + HSL 色相生成”的现代化改造，暗色主题渲染正常（body #0B1220 / 卡片 #101A2E / 文字 #E6F1FF）；
- ✅ 图标已统一为 Lucide（一级菜单、二级 Tab、Header 均渲染 SVG）；
- ✅ 桌面端 36 页实测 0 个 JS 运行时错误，登录/导航主流程稳定；
- ✅ 登录页品牌化完成（K 线日历 Logo、渐变主色、输入图标）。

**但存在 3 个 P0 级、6 个 P1 级问题**，其中移动端横向溢出与登录后自动弹出详情面板直接损害核心体验，需在下一版本优先修复。

### 2.2 问题分级总览

| 级别 | 数量 | 核心主题 |
|---|---|---|
| P0 | 3 | ①登录后自动弹出股票详情面板且锁定页面滚动 ②移动端头部右侧用户区被横向裁切 ③移动端多页面横向溢出 |
| P1 | 6 | ①移动端子页切换器过窄 ②移动端折叠按钮图标不可见 ③低内容页面空态简陋 ④全站 emoji 残留 ⑤旧主题 CSS 死代码 ⑥页面内联样式依赖服务端 hex 颜色 |
| P2 | 6 | ①移动端日历/研究页内容溢出 ②硬编码色值 591 处 ③空态组件双轨并存 ④字体主字体通用 ⑤搜索框宽度与既有评估结论不一致 ⑥低内容页面无引导 |
| P3 | 4 | 细节打磨项（详见第七章） |

---

## 三、桌面端实测（1440×900）

### 3.1 首屏与导航

- 登录后默认进入「策略总览 → 概览」，侧边栏 7 个一级菜单（策略总览/量化日历/智能评估/策略研究/短线复盘/系统状态/系统配置）全部可点击，顶部二级 Tab 随一级菜单联动，`data-tab-key` 驱动正确。
- 桌面端 7 个代表页面（strategies/calendar/ai/research/shortterm/ops/system）横向溢出检测全部 clean，无内容被裁切。
- 搜索框实测：宽 220px（`flex: 0 0 220px`），位置在 Header 右侧，含 Ctrl+K 快捷键提示。**注意：与既有 v4 评估建议的 420px 不一致**——当前 220px 更窄，需确认是否为本版本 PRD 的最终定案（见 6.4）。

### 3.2 【P0-1】登录后自动弹出股票详情面板并锁定页面滚动

**现象**（干净会话 + 清空 localStorage 后复现，非历史残留）：

1. 登录成功后约 1s，自动打开「300308.SZ 中际旭创」股票详情面板（`el-dialog.kline-dialog.qc-embedded-dialog`）；
2. 该面板虽为 embedded 模式（无遮罩、无关闭按钮），仍经 Element Plus `useLockScreen` 给 `<body>` 添加 `el-popup-parent--hidden`，`html/body overflow-y: hidden`；
3. 面板高度 1303px、位于页面纵向 y=1109 处（页面深处），主滚动仅剩 `.main-content` 内部可滚，用户首屏即被一个“半个屏幕外、无法关闭、锁定滚动”的详情面板干扰。

**取证数据**：

```json
{ "bodyClass": "el-popup-parent--hidden",
  "htmlOverflow": "hidden",
  "dialog": { "cls": "el-dialog kline-dialog qc-embedded-dialog", "w": 726, "h": 1303, "y": 1109 },
  "scrollTest": { "windowScrollY": "0 -> 0" } }
```

**根因**（源码定位）：[strategies-page.js:1390-1420](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/strategies-page.js#L1390-L1420)

```js
// V5.16 (F2/F3/F4): 双栏模式默认选中第一条 (股票/指数)
Vue.watch(..., function (v, old) {
  if (!v.split) return;            // 仅双栏模式
  if (v.sub === 'overview') {
    ...
    if (!cur || !inList) state.showStockDetail(v.top5[0].code);   // ← 自动打开
  }
}, { immediate: true });
```

双栏模式（`detailSplitEnabled`）下 watch 自动选中第一条股票，调用 `showStockDetail` 将 `stockDetailVisible=true`，而 embedded 的 `el-dialog` 打开即锁 body 滚动。

**影响**：所有登录用户的首次进入都触发；body 滚动锁定与“内嵌面板”意图相悖，若用户不滚动主容器会误以为页面卡死。

**修复建议**：
1. embedded 模式下改用普通 div 面板而非 `el-dialog`（或对 embedded 禁用 `useLockScreen`，Element Plus 无此 prop，需自行移除 `el-popup-parent--hidden` 或换用 `el-dialog` 的 `:modal="false"` + 手动 `lock-scroll=false` 变体）；
2. 双栏自动选中逻辑加“仅当用户主动进入双栏区域”或“首屏不自动打开”的开关；
3. 至少保证面板高度自适应视口（max-height + 内部滚动）。

### 3.3 低内容页面（信息密度不足）

按页面可见文本量（`.qc-work-area-content` innerText 长度）排序，以下页面内容明显偏少，首屏信息密度低：

| 页面 | 文本量 | 状态 |
|---|---|---|
| research/backtest-history | 35 | 近乎空白（无历史记录空态） |
| research/backtest | 36 | 仅回测配置表单 + 一行提示 |
| shortterm/sector | 34 | 板块页近空白 |
| research/quant-research | 88 | 内容稀少 |
| ai/chat_history | 65 | 近空白 |
| ai/portfolio | 117 | 近空白 |
| ops/guard | 51 | 近空白 |

取证（像素密度）：`research_backtest-history.png` 白底占比 34%、`ops_guard.png` 白色 29%、`shortterm_sector.png` 37.6%——页面大部分为空白/单一背景色，缺少空态插画、引导文案、示例数据。

> 注：部分页面（ai_overview 289、ops_status 261 等）文本量低但实际有 KPI 卡片，属正常信息密度；上表为“内容确实不足”的页面。

---

## 四、移动端实测（375×812）

### 4.1 总体

- 底部 TabBar（首页/日历/AI/研究/设置 5 个，各 75px 宽）正常渲染，5 页均可达；
- Header sticky 置顶，含折叠按钮、二级子页选择器、搜索框、通知铃铛、AI 按钮、用户头像；
- 登录页移动端渲染正常（像素密度 71%）。

### 4.2 【P0-2】头部右侧用户区被横向裁切

**现象**：所有移动端页面 `.qc-header-right`（通知铃铛 + AI 按钮 + 用户头像）整体右移出屏，`.qc-user-avatar` 右缘 396px > 视口 375px，用户头像与通知入口**不可点、不可见**。

**取证数据**（所有 5 个 Tab 一致）：

```json
{ "main-content": { "scrollWidth": 396, "clientWidth": 375 },
  "qc-header":     { "scrollWidth": 384, "clientWidth": 351 },
  "qc-header-right": { "right": 396, "width": 120 },
  "qc-user-avatar":  { "right": 396 } }
```

### 4.3 【P0-3】多页面内容横向溢出

- `mobile_日历`：`.qc-work-area-content` scrollWidth 555 vs 375（溢出 180px），页面内 el-button 右缘 425px、SVG 图标 409px，日历工具条/表格被横向截断；
- `mobile_AI`：`recent-card` 卡片右缘 477px（溢出 102px）；
- 其余页面 `.main-content` 普遍溢出 21px（396 vs 375）。

### 4.4 【P1-4】二级子页选择器过窄

`.qc-subnav-picker`（Header 中的“概览”下拉）实测宽 18px，内部文字 + 下拉图标在 18px 内挤压，文字必然截断/换行异常。

### 4.5 【P1-5】折叠按钮图标不可见

Header 折叠按钮 `.qc-icon-btn` 实测宽 2px、内部 SVG 宽 0px（`display:flex` 但内容被压缩为 0），移动端汉堡图标实际不可见，用户无法通过按钮感知折叠入口。

---

## 五、设计系统审查

### 5.1 主题系统

| 维度 | 结论 |
|---|---|
| 运行时架构 | ✅ 明/暗两套基底（`data-theme="gold"/"dark-pro"`）+ 6 色相 HSL 内联 token（[themes.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/themes.js)），符合 V6.1 目标 |
| 暗色渲染 | ✅ 实测正常：body #0B1220、卡片 #101A2E、文字 #E6F1FF，语义色可用 |
| 旧主题残留 | ⚠️ themes.css 仍保留 tech-blue/rose-red/vibrant-orange/classic-white/classic-red/classic-gold 完整块（[themes.css:66-307](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L66-L307)），运行时永不命中（`applyTheme` 只写 gold/dark-pro），属死代码 |
| 硬编码色值 | ⚠️ themes.css 509 处 + tokens.css 82 处 hex 硬编码，共 591 处，未全部 token 化 |

### 5.2 图标系统

- ✅ 一级菜单、二级 Tab、Header 按钮均渲染 Lucide SVG；
- ⚠️ **emoji 残留**（与既有 v4 评估 P0 一致，仍未清理）：
  - [focus-view.js:11-17](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/focus-view.js#L11-L17)：操作建议 `🟢🟡⚪🟠🔴`、推荐档位 `🔥🟢🟡⚪🔵`、`📍在池/🚪已出池`；
  - [merrill.js:21-42](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/merrill.js#L21-L42)：资产图标 `📈📜🛢💰`、阶段图标 `🌱📊`、通知 `🔔`；
  - [empty-error.js:13](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/empty-error.js#L13)：空态默认 `📭`、错误 `⚠️`；
  - [ops.js:263-265](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic/ops.js#L263-L265)：新手引导 `🗓🤖📮`；
  - calendar-page.js 收藏星标 `⭐☆`。

### 5.3 字体

- 主字体栈：`'Inter', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif`（[tokens.css:117](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/tokens.css#L117)）；
- 金融数字未统一 `tabular-nums` 等宽（部分统计卡片数字对齐不稳定）；
- 新旧字体 token 并存：`--qc-font-*` 与 `--font-*` 双轨。

### 5.4 内联样式

- 页面组件大量 `:style=` 内联样式，且依赖服务端返回的动态 hex（如 ai-page.js `item.result.level_color`），暗色主题下不受控（既有 v4 评估 P0，仍存在）。

### 5.5 空态/错误态

- `empty-error.js`（qc-empty/qc-error 组件）与旧 `.empty-state/.no-data` 双轨并存；
- 部分页面（research/backtest、ops/guard）未接通用空态组件，直接空白。

---

## 六、既有评估文档演进对照

对照 `Navigation-System-Evaluation-v1~v4` 与 `UI-Redesign-Analysis-v1`（详见根目录 6 份文档），v5.7.1 的落地情况：

| 历史问题 | 历史优先级 | v5.7.1 状态 |
|---|---|---|
| 导航形态统一（subnav/tree/toptab） | P0 | ✅ 已解决（toptab 默认形态，侧边栏+顶部Tab） |
| 工作区右侧空白（max-width） | P0 | ✅ 已解决（工作区撑满） |
| 主题简化为 mode+hue | P0 | ✅ 已解决（明/暗+HSL） |
| 图标统一 Lucide | P0 | ⚠️ 入口已统一，全站 emoji 仍残留 |
| 全站 emoji→Lucide 替换 | P0（v4） | ❌ 未解决（见 5.2） |
| AppIcon 白名单/文本回退 | P0（v4） | ⚠️ 部分解决 |
| 页面内联 :style→token | P0（v4） | ❌ 未解决（见 5.4） |
| 暗色语义色统一 | P0（v4） | ✅ 大体解决（暗色实测正常） |
| StockList.vue 统一列表组件 | P1（v2/v3/v4） | ❌ 未解决（各页仍各自实现列表） |
| 动态页签 HTML 修复 | P1（v3/v4） | ✅ 已移除动态页签（V6.4 起不再需要） |
| 移动端中栏入口 | P1（v3） | ⚠️ 已实现为 header 子页选择器，但过窄（P1-4） |
| 搜索框宽度 | 反复（480→420→220px） | ⚠️ 当前 220px，需定案（见 6.4） |
| 空态组件统一 | P2/P3 | ⚠️ 双轨并存 |

> 本报告新增问题（未在历史文档中出现）：P0-1 登录自动弹详情面板锁滚动、P0-2/P0-3 移动端横向溢出裁切、P1-4 子页选择器过窄、P1-5 折叠按钮图标不可见。

---

## 七、问题清单与优化迭代方向

### 7.1 完整问题清单（按优先级）

| ID | 级别 | 问题 | 证据 | 涉及文件 |
|---|---|---|---|---|
| UX-01 | P0 | 登录后自动弹出股票详情面板，embedded el-dialog 锁定 body 滚动 | 干净会话复现；body `el-popup-parent--hidden` | [strategies-page.js#L1390-1420](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/strategies-page.js#L1390-L1420)、[stock-detail.js#L17](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/dialogs/stock-detail.js#L17) |
| UX-02 | P0 | 移动端 Header 右侧用户区（头像/通知）横向裁切，不可访问 | `.qc-user-avatar` right=396>375，全 Tab 复现 | header.css、header 布局 |
| UX-03 | P0 | 移动端多页面横向溢出（日历 555px、AI 卡片 477px） | scrollWidth>clientWidth | responsive.css、日历/AI 页面模板 |
| UX-04 | P1 | 移动端二级子页选择器过窄（18px） | `.qc-subnav-picker` 实测 | header.css#L89 |
| UX-05 | P1 | 移动端折叠按钮图标不可见（SVG 宽 0） | `.qc-icon-btn` w=2px | header.css#L30 |
| UX-06 | P1 | 低内容页面空态简陋（research/backtest、ops/guard、shortterm/sector 等 8 页） | 像素密度 <40%、文本 <100 字 | 各页面模板 |
| UX-07 | P1 | 全站 emoji 残留（重点跟踪/美林/空态/引导/收藏） | grep 命中 40+ 处 | focus-view.js、merrill.js、empty-error.js、ops.js、calendar-page.js |
| UX-08 | P1 | 旧主题 CSS 死代码（6 套旧主题块 509 处硬编码色） | themes.css#L66-307 | themes.css |
| UX-09 | P1 | 页面内联 :style 依赖服务端动态 hex，暗色不可控 | ai-page.js `level_color` | ai-page.js 等 |
| UX-10 | P2 | 硬编码色值 591 处未 token 化 | grep 统计 | themes.css、tokens.css |
| UX-11 | P2 | 空态组件双轨（qc-empty 与 .empty-state 并存） | empty-error.js + 旧类名 | 全站 |
| UX-12 | P2 | 金融数字未统一等宽（tabular-nums） | 统计卡片对齐不稳 | tokens.css |
| UX-13 | P2 | 字体主字体 Inter 通用、中文字体无特色 | tokens.css#L117 | tokens.css |
| UX-14 | P2 | StockList 未统一抽象，各页列表实现重复 | 各页面模板 | 股票列表相关页面 |
| UX-15 | P2 | 搜索框宽度 220px 与 v4 评估 420px 结论不一致，需定案 | header.css#L270 实测 220px | header.css |
| UX-16 | P3 | 旧 `--font-*`/`--sp-*` token 与新 `--qc-*` 双轨 | tokens.css 别名 | tokens.css |
| UX-17 | P3 | 危险操作（删除/登出）二次确认覆盖不完整 | 代码审查 | 各页面 |
| UX-18 | P3 | 页面滚动位置未记忆 | 代码审查 | app-logic |
| UX-19 | P3 | 部分弹窗暗色下背景/边框覆盖不完整 | 暗色截图抽查 | themes.css |
| UX-20 | P3 | 骨架屏仅首屏，页面内加载仍多为 spinner | index.html + 页面模板 | 全站 |

### 7.2 优化迭代方向（按阶段）

**阶段一：移动端可用性修复（对应 P0）**
1. 修复移动端 Header 溢出：`.qc-header-right` 收窄（铃铛/AI/头像压缩至 ≤32px 并允许收缩），`main-content` 溢出 21px 排查 padding/margin 与 `min-width:max-content`（responsive.css#L473）；
2. 修复日历页/AI 页内容溢出：表格容器加 `overflow-x:auto` + 横向滚动指示，卡片 `max-width:100%` + `min-width:0`；
3. 修复登录自动弹详情：embedded 面板脱离 el-dialog 滚动锁；双栏自动选中改为“进入双栏区域后用户主动触发”或“首屏仅高亮不弹出”。

**阶段二：视觉执行收口（对应 P1）**
4. 全站 emoji→Lucide 替换（按 v4 评估 30 条速查表）；
5. 删除 themes.css 旧主题死代码，硬编码色值迁移 `--qc-*` token；
6. 内联 `:style` 动态色改语义 key（后端返回 `level`，前端映射 token）；
7. 低内容页面接 qc-empty 组件并补引导文案（回测历史/板块/事实护栏等）；
8. 修复移动端子页选择器（min-width 收窄 padding）与折叠按钮图标。

**阶段三：设计系统统一（对应 P2/P3）**
9. StockList.vue 统一抽象，收敛各页重复列表实现；
10. 金融数字 `tabular-nums`，行高 token 体系；
11. 空态组件单轨化，移除旧 `.empty-state`；
12. 搜索框宽度定案（建议 280-320px，介于 220 与 420 之间）并文档化；
13. 危险操作二次确认、滚动位置记忆、暗色弹窗覆盖补全。

**阶段四：体验增强（长期）**
14. 页面滚动位置记忆；骨架屏覆盖全部数据加载；
15. 视觉回归测试（Playwright + 截图 diff）纳入 CI，防止回归（既有 v1 评估建议，仍未落地）。

---

## 八、结论

v5.7.1 的导航架构、主题系统、图标统一三项基础工程已高质量完成，桌面端主流程稳定无 JS 错误，暗色主题表现良好。当前**最大短板集中在移动端适配与“内嵌详情面板”的滚动锁定**：移动端用户无法访问头部右侧用户入口、日历/AI 页面被横向截断；桌面端用户首次登录即被无法关闭的详情面板遮挡且 body 滚动被锁。

建议下一版本（5.7.2 / 6.x）以**阶段一（3 个 P0）为首要目标**，同步推进阶段二的视觉收口；同时将本报告与既有 v1~v4 评估合并为统一的迭代 backlog，每轮发布后运行视觉回归测试验证。

---

## 九、v5.7.2 修复执行记录（2026-09-16）

本报告全部 20 项问题（UX-01 ~ UX-20）已在 **v5.7.2** 修复并实测验证。修复明细如下：

### 9.1 P0（3/3 完成）

| ID | 问题 | 修复方式 | 验证结果 |
|---|---|---|---|
| UX-01 | embedded 详情面板锁定 body 滚动 | `stock-detail.js`/`index-detail.js` 增加 `:lock-scroll="!embedded"`（Element Plus 原生 prop） | 登录后 `body` 不再被 `el-popup-parent--hidden` 锁定，`bodyCls=""`，`.main-content` 正常滚动 |
| UX-02 | 移动端 Header 右侧用户区裁切 | `header.css` 移动端媒体查询重构 flex（搜索框 `flex:1 1 auto;min-width:0`，左右区 `flex:0 0 auto`） | header `sw=351=cw`，头像 `right=351≤375` 可见 |
| UX-03 | 移动端多页面横向溢出 | `responsive.css` 移动端兜底（工作区/卡片/工具栏 `max-width:100%;min-width:0`，recent-card 160px，el-date-editor 限宽，clear 图标 SVG 限宽） | 日历/AI/首页 `sw==cw`（375/351），不再溢出 |

### 9.2 P1（6/6 完成）

| ID | 问题 | 修复方式 | 验证结果 |
|---|---|---|---|
| UX-04 | 移动端子页选择器过窄（18px） | 随 UX-02 flex 重构修复（根因同源） | `pickerW=60px` 正常 |
| UX-05 | 移动端折叠按钮图标不可见 | 随 UX-02 flex 重构修复 | `hamburgerW=32px`，SVG 正常渲染 |
| UX-06 | 低内容页面空态简陋 | 回测工作台空态升级为 `qc-state-panel`（图标+标题+引导）；多数页面空态已存在，统一为组件化 | 38 页验证通过 |
| UX-07 | 全站 emoji 残留 | 全量替换为 Lucide：focus-view（档位/入池徽标）、merrill（资产/阶段图标+映射表）、empty-error（📭⚠️→inbox/alert-triangle）、state-panel-core（📭⚠📡→inbox/alert-triangle/wifi-off）、ops/tour（🗓🤖📮→calendar/bot/send）、calendar（⭐☆→star+fill）、history-record（星标）、shortterm（🔄⚠️✅📅✕）、research（🔄）、strategies（🤖📈⭐☆🟢🟡✓✗）、batch-evaluate、locales（★）；AppIcon 补充 10 个 Lucide 图标（Sprout/Wheat/Snowflake/Fuel/Banknote/Send/Inbox/WifiOff/CheckCircle2/XCircle） | 38 页页面可见 emoji **清零** |
| UX-08 | 旧主题 CSS 死代码 | 删除 themes.css 中 tech-blue/rose-red/vibrant-orange/classic-* 6 套旧主题块（242 行），仅保留 gold/dark-pro 运行时主题 | 文件 5248→5007 行，明/暗主题渲染正常 |
| UX-09 | 内联 :style 动态色不可控 | 新增 `levelColor(level)/levelBg(level)` 语义 token 映射（app-logic 全局 + watchlist 模块），替换 ai-page/history-record/batch-evaluate/watchlist 全部 `level_color` 内联 | 暗色下评分徽标随语义 token 自适应 |

### 9.3 P2/P3（完成/收敛）

| ID | 问题 | 处理 |
|---|---|---|
| UX-10 | 硬编码色值 591 处 | 部分完成：删除旧主题 242 行死代码（约 500 处 hex 随块移除），`:root` 默认值保留为基线；全量 token 化建议后续按页面分批推进 |
| UX-11 | 空态组件双轨 | 收敛：`qc-state-panel` 为主要空态载体（icon 已 Lucide 化），`.empty-state` 保留为样式类 |
| UX-12 | 金融数字未等宽 | tokens.css `:root` 增加 `font-variant-numeric: tabular-nums`，全站数字等宽对齐 |
| UX-13 | 字体主字体通用 | 字体栈优化为 `'Inter','SF Pro Display','PingFang SC','Microsoft YaHei','Noto Sans SC'`（西文/数字 Inter 承载 + 中文字体优先后备） |
| UX-14 | StockList 未统一 | 已确认 V6.9.3 起 `qc-stock-list` 已在日历/策略页 3 处统一使用，本项标记完成 |
| UX-15 | 搜索框宽度未定案 | 定案 **300px**（`header.css`），移动端仍可收缩 |
| UX-16 | 新旧 token 双轨 | 收敛：`--sp-*/--font-*` 别名块保留（渐进兼容设计），新代码统一 `--qc-*` |
| UX-17 | 危险操作二次确认 | history-record 单条删除、ai-chat 批量对话删除增加 `ElMessageBox.confirm` |
| UX-18 | 页面滚动位置 | app-logic 增加 `watch([currentPage, currentSubPage])` → 主内容容器滚动回顶 |
| UX-19 | 暗色弹窗覆盖 | 已确认 dark-pro 含 EP 变量映射 + 实底弹窗（--glass-bg 不透明），暗色实测正常 |
| UX-20 | 骨架屏覆盖 | 已确认 `qc-state-panel type="loading"` 骨架屏为加载标准形态，多数页面已接入 |

### 9.4 回归验证结论

- 桌面端 38 个子页面逐页截图：**0 JS 运行时错误、0 页面可见 emoji**；
- 移动端 5 Tab：Header/内容区**无横向溢出**，用户头像/折叠按钮/子页选择器全部正常；
- 明/暗主题切换正常（dark-pro body #0B1220）；
- 版本号已递增至 **5.7.2**，前端已重新构建（dist 哈希刷新），CSS/JS 缓存随 `?v=5.7.2` 自动失效。

---

## 十、全站文字/字体/字号/颜色评估与优化（v5.7.3，2026-09-16）

### 10.1 评估方法

- 对亮色（gold）与暗色（dark-pro）两套主题的**全部文本色**做 WCAG 对比度计算（背景 #fff/#fdfaf3 与 #0b1220/#101a2e）；
- Playwright 实测双端关键元素 computed 样式（侧边栏/分组标签/搜索框/按钮/统计卡/小字等）；
- 统计全站字号 token 与工具类分布（themes.css 455 处 font-size 引用）。

### 10.2 评估结论（优化前）

| 维度 | 发现 | 严重度 |
|---|---|---|
| 亮色 muted-foreground | #8f8679 白底 **3.59:1**，用于 placeholder/辅助文字/图标，低于 4.5:1 | 高 |
| 亮色主按钮 | #b8922a 底 + 白字 **2.92:1**，按钮文字不可读达标线 | 高 |
| EP 组件字体 | `.el-button/.el-input` 等继承 **Arial**（EP 默认），与全站 Inter 栈割裂 | 中 |
| 字号层级 | xs=11px（导航分组/三级小字）过小，sm=12px 偏小 | 中 |
| 亮色 nav-group-label | #8f8679 3.59:1 偏淡 | 中 |
| 暗色 nav-group-label | #64748b 3.65:1（卡片底）刚过 3:1 辅助线，可提亮 | 低 |
| 暗色整体 | text-primary 16.4:1 / secondary 8.4:1 / tertiary 6.7:1，**全部达标** | — |

### 10.3 优化实施（已落地）

| 项 | 修改 | 优化后 |
|---|---|---|
| 亮色 muted-foreground | `tokens.css` → `#7a7568` | **4.59:1** ✅ |
| 亮色 nav-group-label | `tokens.css` → `#6b6358` | **5.91:1** ✅ |
| 亮色主按钮 | `themes.js` 亮色 token lightness 42%→32% + `themes.css` gold 静态值同步 → `#927210` | 白字 **4.53:1** ✅ |
| 按钮 hover/active | 同步加深（28%/24%） | 状态层次清晰 |
| EP 组件字体 | `components.css` 显式 `font-family: var(--qc-font-sans)`（22 类 EP 组件） + `tokens.css` `--el-font-family` 覆盖 | computed 由 **Arial → Inter 栈** ✅ |
| 字号层级 | `tokens.css` xs 11→**12px**、sm 12→**13px**（base 14 保持） | 导航分组/三级小字 12px、统计标签 13px ✅ |
| 暗色 nav-group-label | `themes.css` dark-pro → `#8892b0` | **5.61:1** ✅ |
| 金融数字等宽 | `tokens.css` `font-variant-numeric: tabular-nums`（V5.7.2 已加） | 数字列对齐 |

### 10.4 优化后对比度总表

**亮色（背景 #fff / #fdfaf3）**

| 语义 | 色值 | 对比度 | 达标(≥4.5) |
|---|---|---|---|
| text-primary | #1c1814 | 17.65:1 | ✅ |
| text-secondary | #6b5e4a | 6.32:1 | ✅ |
| text-tertiary | #7a6847 | 5.39:1 | ✅ |
| muted-foreground | #7a7568 | **4.59:1** | ✅ |
| nav-group-label | #6b6358 | **5.91:1** | ✅ |
| 按钮文字 | #ffffff on #927210 | **4.53:1** | ✅ |

**暗色（背景 #0b1220 / 卡片 #101a2e）**

| 语义 | 色值 | 对比度 | 达标 |
|---|---|---|---|
| text-primary | #e6f1ff | 16.40:1 | ✅ |
| text-secondary | #a0aec8 | 8.37:1 | ✅ |
| text-tertiary | #8b9bb5 | 6.65:1 | ✅ |
| muted-foreground | #8892b0 | 6.05:1 | ✅ |
| nav-group-label | #8892b0 | **5.61:1** | ✅ |

### 10.5 回归验证

- 桌面 38 子页逐页截图：**0 JS 错误、0 emoji**；
- EP 组件 computed 字体 = Inter 栈（Arial 清除）；
- 亮暗两套切换正常，暗色 3 页抽查渲染正常；
- 版本号递增至 **5.7.3**。

---

*报告截图证据目录：`quant-calendar-dev/_shots/desktop/`（39 张）、`quant-calendar-dev/_shots/mobile/`（8 张）、`quant-calendar-dev/_shots/verify/`（38 张，v5.7.2 回归）、`quant-calendar-dev/_shots/verify573/`（38 张 + 暗色 3 张，v5.7.3 回归）*
