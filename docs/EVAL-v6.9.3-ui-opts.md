# 存量优化整改报告（V6.9.3 评估）

> 评估日期：2026-09-12 · 范围：12 项用户需求 + 4 项隐藏问题
> 状态：**待用户评审确认**（确认后进入 PRD + 开发/测试计划编写）

---

## 一、评估总览

| # | 需求 | 根因/现状 | 影响面 | 整改建议 | 优先级 |
|---|------|-----------|--------|----------|--------|
| 1 | 股票列表空白多（3 处） | 每行仅 rank+代码/名称+2 标签，后端已有 `strategy_count`/`consensus_level`，缺价格字段 | 日历股票池 / 策略总览 TOP5 / 共识榜 | 增共识徽章+百分比进度条+标签扩容 3 个+价格涨跌幅（join 行情缓存） | 高 |
| 2 | 下拉按钮过宽/文字换行 | EP2.x `el-select__wrapper` 默认 `flex-wrap:wrap`，长选项文字与箭头换行；flex 容器内 el-select 被拉伸 | 全局筛选器/工具栏 | 全局 `nowrap` + `flex:0 0 auto` + 文字省略号；统一宽度类 | 高 |
| 3 | 顶部搜索框右移 | `.qc-header-center` 居中布局，搜索固定 220px 居中 | Header | `justify-content:flex-end` 贴近铃铛 | 中 |
| 4 | 通知铃铛无反应 | [Header.vue:185](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/Header.vue#L185) 铃铛按钮**无 @click**、无面板组件；后端已有 `/api/alerts/history` | Header | 铃铛→下拉面板展示最近投递历史+跳转通知中心 | 高 |
| 5 | 导航形态菜单背景透明 | `.qc-navmode-menu` **无任何 CSS**（缺背景/边框/阴影/定位），条目仅复用 item 样式 | Header 导航形态下拉 | 补全容器样式（复用 `.qc-user-dropdown` 观感） | 高 |
| 6 | 主题按钮升级 | Header 仅亮/暗切换；hue 色板+自定义 slider 在功能配置子页，逻辑内嵌 system-page.js | Header + 功能配置 | Header 主题按钮→popover 面板（模式+6 色板+自定义）；逻辑抽全局共享 | 高 |
| 7 | 日历工具栏重排 | 左组[日期/刷新/导出/视图切换]，右组[上一/下一/对比]；视图页签不在最左 | 量化日历 | 重排：视图页签最左→日期/刷新/导出居中→上一/下一最右 | 中 |
| 8 | 短线复盘加载慢 | 每子页 on-demand 请求+60s TTL 缓存+竞态防护；overview+review 已并行 | 短线复盘 | 进入页面并行预取高频子页；后端 store 读缓存；_cache 加上限 | 中 |
| 9 | AI 服务删 DeepSeek R1 | 代码库目录已无 R1（`deepseek-chat/reasoner` 已弃用）；运行实例 `data/ai_models.json` 可能残留旧条目 | AI 配置 | 启动迁移清理 R1 厂商/模型；`ai.js`/`auth.js` 默认模型改 `deepseek-v4-flash` | 中 |
| 10 | sxsc-tushare 测试不通 | **诊断复现：后端直接调用与 manager 测试均成功**（0.13s 返回 1 条）；问题在运行态陈旧客户端/超时 5s | 数据源 | 测试时客户端缺失即重建；超时 10s；前端解锁态先保存再测试 | 高 |
| 11 | 功能配置删 2 项评估 | 「策略数据刷新」含手动+定时+自选拉取；「策略研究菜单」为显隐开关 | 功能配置 | 建议：数据刷新保留定时/手动、移除重复项；策略研究开关删除（恒显）| 需确认 |
| 12 | 系统配置二级菜单重排 | 现序 `config→autoeval→datasource→feature→notification→user→about` | 系统配置 | 目标序 `config→feature→autoeval→datasource→user→about→notification` | 中 |

---

## 二、逐项详细评估

### 1. 股票列表空白空间利用（策略共识度股票池 / TOP5 / 共识榜）

**现状（3 处列表，同一行结构）**

| 位置 | 组件 | 行内容 |
|------|------|--------|
| 量化日历股票池（[calendar-page.js:79-95](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/calendar-page.js#L79)） | 虚拟列表手写行 | rank+代码/名称+2 标签+⭐🤖📈 |
| 策略总览 TOP5（[strategies-page.js:172](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/strategies-page.js#L172)） | StockList 组件 | rank+代码/名称+2 标签+「N 策略」extra+⭐🤖 |
| 策略共识榜（[strategies-page.js:444](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/strategies-page.js#L444)） | 虚拟列表手写行 | rank(=strategy_count)+代码/名称+2 标签 |

**后端可用字段**（[data_parser.py:399-421](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/data_parser.py#L399)）：`code / name / strategy_count / strategies / strategy_names / consensus_level`。**无价格/涨跌幅字段**。

**整改建议（按收益排序）**
1. **共识度可视化**：`strategy_count` 做成醒目徽章（如 `5 策略`），`consensus_level`（0-1）渲染迷你进度条/百分比，一行即传达"多强共识"。
2. **策略标签扩容**：`slice(0,2)` → `slice(0,3)`，第三标签用 `+N` 折叠（>3 时）。
3. **价格与涨跌幅**：后端 `get_strategy_consensus` 结果 join `market_cache`（已有增量缓存，成本低）补充 `price / change_pct`，行右侧数据列展示涨跌着色。
4. **行布局统一**：TOP5（StockList 组件）与共识榜（手写行）结构不一致——**隐藏问题**，应统一为 StockList 组件（含虚拟列表变体）。

### 2. 下拉按钮过宽 / 文字与箭头换行

**根因**
- EP 2.x `.el-select__wrapper` 默认 `display:flex; flex-wrap:wrap`，选项文字较长时文字与下拉箭头**换到两行**，且文字不居中。
- flex 工具容器（`.flex-c-gap-*`）内 el-select 默认 `min-width:auto` 被拉伸，配合 `justify-content:space-between` 的 `.qc-page-tools` 导致**按钮很宽**。
- 宽度类 `w-90 / w-110 / w-120 / w-180` 硬编码分散在模板中，无法统一收窄。

**整改建议**
- 全局 CSS：`.el-select__wrapper { flex-wrap: nowrap; }` + `.el-select__selected-item { text-overflow: ellipsis; }`
- 工具栏内 `.qc-page-tools .el-select, .qc-page-tools .el-date-editor { flex: 0 0 auto; }` 防拉伸。
- 统一窄宽：将散落的 `w-*` 内联宽收敛为语义类（如 `.w-select` 等）。

### 3. 顶部搜索框右移

**现状**：`.qc-header-center { flex:1; justify-content:center; max-width:640px }`，搜索框固定 220px 居中，与右侧铃铛之间有较大空隙（[header.css:135-144](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/header.css#L135)）。

**整改**：`.qc-header-center { justify-content:flex-end; }`，使搜索框贴近右侧铃铛；保留 Ctrl+K 快捷键与移动端适配。

### 4. 消息通知铃铛点击无反应

**根因（确认）**：[Header.vue:185-187](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/Header.vue#L185) 铃铛 `<button class="qc-icon-btn qc-has-dot" aria-label="通知">` **没有任何 @click 绑定**，系统内也**不存在铃铛面板组件**——纯装饰按钮。

**现有可复用资源**（后端已具备）：
- `GET /api/alerts/history` — 投递历史（通知中心在用）
- `GET /api/alerts/rules` / `GET /api/alerts/channels` / `GET /api/alerts/silence`

**整改建议（方案 A，推荐）**：铃铛点击 → 右侧 popover 面板，拉取 `/api/alerts/history?limit=8` 展示最近事件；空态显示"暂无通知"+「前往通知中心」快捷入口；面板样式复用 `.qc-user-dropdown`。

### 5. 导航形态快捷按钮背景透明

**根因（确认）**：`.qc-navmode-menu` 容器**在 CSS 中无任何定义**——缺 `position:absolute`、`background`（`var(--qc-popover)`）、边框、阴影、圆角、内边距；条目复用 `.qc-user-dropdown-item` 样式所以只有文字可见，容器背景透明。参考容器 `.qc-user-dropdown`（[header.css:291-302](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/header.css#L291)）已具备完整面板样式。

**整改**：补齐 `.qc-navmode-menu` 面板样式（复用 `.qc-user-dropdown` 观感），顺带修正 `min-width` 与条目间距。

### 6. 亮暗切换升级为「主题」按钮

**现状**
- Header 仅 `toggleThemeQuick()` 亮/暗互切（[Header.vue:86-89](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/Header.vue#L86)）。
- 完整主题 UI（模式 radio + 6 色板 + 自定义 hue slider）在功能配置-界面与个性化（[system-page.js:877-899](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/system-page.js#L877)），`themeHues / hueColor / themeHue / onThemeModeChange` 逻辑内嵌 system-page.js。
- 全局已具备 `state.changeThemeMode / state.changeThemeHue / state.themeHue`（app-logic.js），**可直接复用**。

**整改建议**
- Header 主题按钮（icon 改 `palette`）→ 点击打开 popover「主题面板」：外观模式（浅/深/跟随系统）+ 6 色板圆点 + 自定义 hue slider。
- 逻辑下沉共享：将 hue 色板常量与 `hueColor/hueName` 工具迁到 `app-logic`（挂 `state`），Header 与功能配置子页共同使用，消除重复实现。

### 7. 量化日历工具栏重排

**现状**（[calendar-page.js:22-55](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/calendar-page.js#L22)）：
- 左组：日期选择 → 刷新 → 导出 → 上次加载 → **视图切换（日/周/月/年）**
- 右组：上一「 → 下一 » → 策略对比

**目标排布**（仅模板重排，逻辑不动）：
```
[ 日 | 周 | 月 | 年 ]   [ 日期选择 刷新 导出 上次加载 ]   [ « 上一 | 下一 » 策略对比 ]
   最左                    中部靠右                        最右
```

### 8. 短线复盘加载速度

**现状**（[shortterm-page.js:380-394](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/shortterm-page.js#L380)）：每子页 `v-if` 挂载时 on-demand 拉取，60s 客户端 TTL 缓存 + 竞态防护；`overview` 与 `review` 已并行。`_cache` 无上限。

**整改建议**
1. 前端：进入「短线复盘」页时**并行预取 3 个高频子页**（overview/pools/lhb），写入现有 TTL 缓存，切子页秒开。
2. 后端：`/api/shortterm/overview` 聚合接口检查是否串行调用多数据源，可并行化；store 读取加进程内缓存。
3. 内存治理（隐藏问题）：`_cache` 增加容量上限（如 50 条）与 LRU 淘汰，防长时间运行内存增长。

### 9. AI 服务删除 DeepSeek R1

**现状（确认）**：代码库 `VENDOR_CATALOG`（[ai_models.py:103-114](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/ai_models.py#L103)）**已无 R1**，DeepSeek 预置模型为 `deepseek-v4-flash / deepseek-v4-pro`；`deepseek-chat/reasoner` 已标注弃用。**R1 条目大概率残留在运行实例的 `data/ai_models.json`（旧版本写入）**，需清理。

**整改建议**
1. `ai_models.py` 启动迁移：加载厂商目录时过滤 `vendor_key` 含 `r1` / `name` 含 `R1` 的条目（含用户自定义模型列表）。
2. 清理/校验 `data/ai_models.json`（若存在 R1 残留）。
3. **隐藏问题**：`frontend/js/ai.js:365/376` 与 `app-logic/auth.js:24/33` 仍默认 `model:'deepseek-chat'`（已弃用）→ 改 `deepseek-v4-flash`。

### 10. 数据源 sxsc-tushare 测试不通

**诊断结论（已实机验证）**：
- 直接调用 `get_api(token, env='prd')` + `query('index_daily', limit=1)` → **成功，0.13s 返回 1 条**（.env token 有效）。
- `DataSourceManager.test_connection('sxsc_tushare')` → **成功**（clients 就绪、无 errors）。
- 后端测试逻辑本身正常。**问题集中在运行态**：
  1. `_clients['sxsc_tushare']` 依赖启动时初始化，若启动时网络抖动/客户端未建则 `test_connection` 直接返回"未初始化"（[market.py:215-216](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/api/v1/market.py#L215)），且**无重试/重建机制**。
  2. 客户端超时取配置 `timeout=5s`（[DEFAULT_CONFIG](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/data_sources/_constants.py#L43)），对公网网关（221.204.19.233:7172）偏短（V4.6 曾从 30s 收紧到 5s，属回归风险点）。
  3. 前端「测试连接」**不先保存**当前输入 token，测试的是旧客户端。

**整改建议**
- 后端 `test_connection`：客户端缺失时按配置/.env token **即时重建再测**；测试用独立 `timeout=10s`，不依赖配置值；错误分类提示（未初始化/网络超时/token 无效）。
- 前端 `testDatasource`：当该源处于解锁编辑态（`_editing=true`）时，**先保存再测试**，保证测试即所输。

### 11. 功能配置：策略数据刷新 / 策略研究菜单 评估

**现状**（[system-page.js:775-855](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/system-page.js#L775)）：
- 「策略数据刷新」卡片：手动刷新 + 定时刷新（开关+时间+频率+自选池）→ 对应后端 `triggerDataReload / /api/...` + 调度。
- 「策略研究菜单」卡片：`researchMenuEnabled` 开关控制「策略研究」一级菜单显隐。

**评估结论**
| 项 | 是否删除 | 理由 |
|----|----------|------|
| 策略数据刷新 | **保留（精简）** | 定时刷新属核心运维能力，与「调度任务」存在部分重叠；建议保留"手动刷新+定时刷新"，移除易混淆的自选股票池拉取项（可并入通知中心/调度配置）。若确认完全冗余可整体移除。 |
| 策略研究菜单 | **删除开关，菜单恒显** | 「策略研究」是产品核心模块，隐藏入口无业务价值；开关本身还引入了菜单动态性复杂度。 |

> ⚠️ 该两项删除影响「隐藏菜单」功能与其他配置引用，需用户最终确认后列入 PRD。

### 12. 系统配置二级菜单顺序

**现状**：`config → autoeval → datasource → feature → notification → user → about`（[app-logic.js:121](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L121)）。

**目标顺序**（用户要求：功能配置移到配置保存后、AI 服务前；通知中心放最后）：
```
config → feature → autoeval → datasource → user → about → notification
```
**同步改动点**：`subPages` 数组 + `guestSubPages` + `subPageNames` 中文名（顺序无关，仅数组序）+ 涉及测试断言。

---

## 三、隐藏问题清单（额外发现）

| # | 隐藏问题 | 位置 | 影响 | 建议 |
|---|----------|------|------|------|
| H1 | 股票列表存在**两套行结构**（StockList 组件 vs 手写虚拟行），样式/交互易漂移 | calendar-page.js / strategies-page.js / StockList.vue | 维护成本高、TOP5 与共识榜观感不一致 | 统一为 StockList（支持虚拟列表传入） |
| H2 | `el-select` 全局未设 `nowrap`，长选项换行 | themes.css/components.css | 即需求 2 的深层根因 | 全局修复 |
| H3 | 主题 hue 逻辑内嵌 system-page.js，Header 无法复用 | system-page.js | 需求 6 的复用障碍 | 抽全局共享 |
| H4 | Header 铃铛为装饰按钮，用户预期落空 | Header.vue | 即需求 4 | 接 `/api/alerts/history` |
| H5 | `deepseek-chat`（已弃用模型）仍为 setup 向导/ai.js 默认值 | ai.js / auth.js | 新用户配置即失效 | 改 `deepseek-v4-flash` |
| H6 | shortterm `_cache` 无容量上限 | shortterm-page.js | 长会话内存增长 | 加 LRU 上限 |
| H7 | sxsc 测试依赖启动态客户端、无重建机制 | _manager.py | 即需求 10 | 即时重建 |
| H8 | 暗色主题下 el-select/el-dropdown **弹层**背景需一并核查（弹窗已修，浮层遗漏） | themes.css | 暗色浮层观感 | 补 `--el-select-dropdown-bg-color` |

---

## 四、实施范围与阶段建议

> 待用户批准整改报告后，进入 PRD + 开发/测试计划编写。

| 阶段 | 内容 | 需求项 |
|------|------|--------|
| A · UI/交互 | 股票列表信息密度、下拉按钮、搜索框右移、铃铛面板、导航形态面板、主题按钮、日历工具栏、系统配置菜单序 | 1,2,3,4,5,6,7,12 |
| B · 后端/配置 | 短线复盘提速、AI R1 清理、sxsc 测试修复、功能配置精简 | 8,9,10,11 |
| C · 回归 | 菜单契约/主题 token/一致性/构建测试全量回归 | 全部 |

**需用户确认项**：① 需求 11「策略数据刷新」去留；② 需求 4 铃铛面板选方案 A（历史事件）还是方案 B（仅跳转）。
