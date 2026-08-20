# 量化选股日历（quant-calendar）逻辑通畅 × 操作便捷 双维审计报告

- 审计对象：/home/evergreen/dsh-workspace/quant-calendar-dev（dev 实例 http://127.0.0.1:8001/）
- 审计时间：2026-08-21
- 仓库基线：git HEAD `28372e2`（V4.0.9b，晚于任务描述的 master b0e1b30/V4.0.8 两个提交；backend/main_new.py:88 APP_VERSION 仍为 "4.0.0"）
- 审计方法：① 静态代码走查（read/grep/glob，重点 qcState 注入、dialog 展开、数据加载竞态）② 运行实例 API 实测（登录 admin/admin，逐接口验证）③ Playwright 真实浏览器走查（headless Chrome，注入 admin 会话，逐页点击验证 + 采集 console/pageerror/网络请求）
- 走查截图（/tmp 下，可复核）：/tmp/audit_calendar_admin.png、/tmp/audit_detail_admin.png、/tmp/audit_usage_final.png、/tmp/audit_dead_buttons.png

---

## 一、总体结论

核心业务闭环（登录 → 日历 → 个股详情 → K线 → AI 评估 → 自选/评估历史 → 系统配置）整体**逻辑通畅、数据可用**：/api/dates 返回 2024-01-16~2026-08-17 共 625 个交易日，/api/view/day/2026-08-17?status=all 返回 136 只股票，dashboard/metrics/usage-stats 均正常；浏览器走查中 登录/日历/详情/策略/系统页 均可正常导航。

但存在 **3 处"按钮渲染但完全失效"的静默断点**（AI 事实护栏审计、立即生成复盘、用量统计 30s 自动刷新），**1 处部署级功能整体缺失**（实时报价 WS 因依赖缺口 404），以及若干竞态/一致性/提示覆盖问题。最集中的根因是 **qcState 注入链路不完整 + 一致性护栏只查数量不查注入链路**（同源历史问题：V4.0.5 的 showTimelineStage 未注入导致时间轴点击无弹窗，本次审计发现同模式问题仍在发生且未被测试拦截）。

---

## 二、重点核查项结论

### 2.1 qcState 注入完整性（app-logic.js:857-1003，465 键）

- 核对方法：解析 qcState 对象字面量全部键（441+24=465，与 tests/test_frontend_consistency.py:67 期望一致）→ 与各域工厂 return 导出做差 → 再扫描全部组件模板/脚本对缺失键的引用。
- **真实缺口（被组件/模板引用但未注入）**：
  - ops 域：`reviewTriggering`、`triggerMarketReview`、`factCheck`、`factCheckRunning`、`loadFactCheck`、`triggerFactCheck` —— 见问题 #1/#2。
  - merrill 域：`showTimelineStage`、`loadMerrillTimeline`、`detailDimensionScoreList`、`clockPosition`、`merrillProgressStyle` 等已在 setup 作用域（app-logic.js:89 解构）但未进 qcState —— showTimelineStage 当前靠 strategies-page.js:620-623 的本地 shim 绕过（V4.0.5 修复方案），根因未消除。
- 其余 diff 结果（fetchPoolSignals、aiPresets、isMobile、disposeStockKline、getLatestScore、loadUserConfig 等）均为"仅域内/编排层使用、组件不引用"，不构成 UI 断点。
- `saveAiModels: saveAiVendors`（app-logic.js:956）为历史别名，与 ai.js:496 同源，行为一致，非缺陷（仅可读性差）。

### 2.2 dialog 组件注入模式（components/dialogs/*.js）

- 全部 12 个弹窗 + calendar-page/strategies-page/system-page 均采用 `setup(){ const state = inject('qcState'); if (!state) return {}; return { ...state }; }` 展开模式。
- **结论：当前模式下该展开是安全的**——qcState 是"含 ref/computed 的普通对象字面量"，浅展开保留同一批 ref 引用，模板自动解包，响应式不丢。merrill-detail.js:250-254 当前写法正确（历史"丢响应式"坑发生在早期把 reactive 包装后再展开的版本，现已被 `merrillDetailData` ref + 就地 Object.assign 合并（merrill.js:332）修复）。
- **风险提示**：该模式对"注入键必须存在于 qcState"零防护——模板引用缺失键时静默 undefined（正是 #1 的系统页 3 处按钮失效的机制）。建议增加测试护栏（见优化建议②）。

### 2.3 数据加载竞态

- K线：app-logic.js:420-459 有 `_klineReqSeq` 序号丢弃过期并发 + tab 可见性门控 + 失败 800ms 重试（watch.js:112-116），设计良好。
- 个股详情：app-logic.js:574-612 `showStockDetail` 采用"先弹窗后拉数据"（正确），但**无请求序号保护**：连续快速打开 A→B 时，A 的 /api/calendar/stock 响应后到会覆盖 B 的 stockDetail，且两路 `loadLastEvaluation` 交错写入 aiResult —— 见问题 #8。
- 日历数据：data.js:88-146 有在途去重（_consensusInflight）+ TTL 缓存 + 静默刷新，成熟。
- 登录加载：auth.js:99-104 串行 await（loadUserConfig→loadDates→loadDashboardData→loadConsensusData），登录感知偏慢，且与 lifecycle 并行加载路径重复（冗余请求），见问题 #10 附注。

### 2.4 按钮/交互是否生效（实测）

| 交互 | 实测结果 |
|---|---|
| 登录 admin/admin | ✅（走查注入了会话；直接 API 登录成功） |
| 日历页 上一/下一交易日 | ✅ 按钮存在，点击触发 navigateDate |
| 股票行 → 详情弹窗 | ✅ 立即弹窗 + 加载态 |
| K线 加载/自动加载 | ⚠️ 依数据源延迟摇摆：一次自动加载成功（无按钮出现），一次 `Failed to fetch` 报"K线加载失败" |
| Escape 关弹窗 | ✅ |
| 系统配置→用量统计 | ⚠️ 进入时抛 ReferenceError（watch.js:88） |
| 「立即抽查」按钮 | ❌ **点击 0 网络请求、0 提示（实测双击）** |
| 「立即生成复盘」按钮 | ❌ **点击 0 网络请求、0 提示（实测）** |
| 实时报价 WS | ❌ 浏览器连 ws://127.0.0.1:8001/api/market/ws/quotes 两次 404 |
| 侧栏折叠 | ⚠️ 折叠生效但不持久化（刷新复位） |

### 2.5 错误/空态/加载态覆盖

- 覆盖良好：日历页 loading/empty（calendar-page.js:43-45）、AI 历史 loading/error/empty/加载更多（ai-page.js:266-270,383）、自选 loading/empty（ai-page.js:574-581）、持仓/调仓空态、研究页空态、K线 loading/占位（stock-detail.js:167-172）、评估失败+重试（stock-detail.js:84-88）、chat 历史惰性加载提示。
- 缺口：① 系统页「数据健康度」「AI 事实护栏审计」错误态被"永远空态"掩盖（#1）；② K线失败仅 toast 无失败原因/无独立重试入口（#9）；③ merrill 详情模板 `historical_stats?.stock_avg_return*100).toFixed(2)`（merrill-detail.js:206）缺字段显示 "NaN%"；④ 详情 AI 结果 `aiResult.result.analysis.strengths`（stock-detail.js:237/242/247）未可选链，后端返回无 analysis 的结果时会渲染抛错。

---

## 三、Top 10 问题清单

| # | 问题 | 严重度 | 证据位置 | 修复建议 |
|---|---|---|---|---|
| 1 | **ops 域 6 个状态/方法未注入 qcState → 系统配置→用量统计「AI 事实护栏审计」整块失效**：按钮渲染但点击无任何反应（实测双击 0 网络请求、0 提示），报告区永远显示"暂无事实护栏审计报告" | 高 | app-logic.js:547-555（__ops 解构缺 6 键）；app-logic.js:857-1003（qcState 未含）；ops.js:281-282（域已导出）；system-page.js:791/793/811（模板引用）；实测见 /tmp/audit_dead_buttons.png | app-logic.js 解构并注入 `reviewTriggering/triggerMarketReview/factCheck/factCheckRunning/loadFactCheck/triggerFactCheck`；补充一致性测试（见优化②） |
| 2 | **watch.js:88 `loadFactCheck()` 未定义 → 每次进入 用量统计 抛 ReferenceError**（实测 console：`ReferenceError: loadFactCheck is not defined at watch.js:88:125`），watcher 回调中断 → 该页 30s 自动刷新定时器（watch.js:95-104）永不启动 | 高 | watch.js:88；app-logic.js:735-748（register ctx 未传 loadFactCheck） | 与 #1 同批修复：register ctx 增加 loadFactCheck |
| 3 | **部署依赖缺口：requirements.in/lock/txt 均未声明 websockets/wsproto，而 uvicorn 0.47/0.52 无内置 WS 实现 → 实时报价 WS 404（实测浏览器两次 `Unexpected response code: 404`）→ 自选实时报价+预警功能在任何按文档安装的环境不可用**（前端有降级文案但持续报错重试） | 高 | requirements.in:1-15；requirements.lock（uvicorn==0.52.4，无 websockets/wsproto）；/usr/bin/python3 实测无 websockets/wsproto；watchlist.js:99 REALTIME_WS_PATH；backend/api/v1/market_ws.py:38 路由已注册但不可达 | requirements.in 增加 `websockets>=12` 并 `uv pip compile` 重生成 lock；重装依赖并重启服务；加一个"WS 可握手"冒烟测试 |
| 4 | **后端 async 端点内同步阻塞数据源调用**：/api/calendar/stock/{code}（calendar.py:80-94 同步 parser/stock_manager）、/api/market/kline/{code}（market.py:109 同步 get_kline_data）未用 run_in_executor/to_thread → 数据源慢时阻塞 uvicorn 事件循环 → 并发下其他请求排队/连接拒绝（实测 health 接口延迟 5.5s、浏览器 K线 fetch 出现 Failed to fetch/ERR_CONNECTION_REFUSED） | 中高 | calendar.py:80-94；market.py:100-112；实测 console 记录 | 同步调用包 `await asyncio.to_thread(...)` 或把端点改为 `def`（FastAPI 自动线程池）；为慢端点加超时与降级缓存 |
| 5 | **qcState 注入护栏形同虚设**：tests/test_frontend_consistency.py:67 只断言"唯一键数量=465"，:709 只断言"源码字符串含 triggerFactCheck"，均不验证"域导出 → qcState 注入 → 模板引用"链路 → #1/#2 这类断点测试全绿（本次审计前该缺陷一直在） | 中 | tests/test_frontend_consistency.py:67,709；app-logic.js:857-1003 | 新增三向一致性测试：域工厂 return 键、qcState 键、组件模板/脚本 state.X 引用做差集断言（如本报告 2.1 的方法） |
| 6 | **登出未清除 quant_token**：auth.js:154-163 仅移除 quant_user，旧 token 残留 localStorage，fetch 拦截器（index.html:280-285）继续携带旧凭证；与 core.js:39-43（401 时双清）不一致 | 中 | auth.js:154-163；index.html:280-285；core.js:39-43 | handleLogout 同时 removeItem('quant_token')，并调用 disconnectRealtimeQuotes() 断开 WS |
| 7 | **侧栏折叠状态两套实现且不持久化**：sidebar.js:50-52 本地 toggle 不写 localStorage（刷新复位）；app-logic.js:98-101 toggleSidebar 写。同功能双实现易漂移 | 中 | sidebar.js:50-52；app-logic.js:98-101 | sidebar 的 toggle 委托 `state.toggleSidebar`，删除本地副本 |
| 8 | **详情弹窗快速连开两只股票竞态**：showStockDetail 无请求序号保护，慢响应覆盖新股票数据，且 loadLastEvaluation 双写 aiResult 可能显示错配评分；与 loadStockKline 的 _klineReqSeq 保护（app-logic.js:420-432）不一致 | 中 | app-logic.js:574-612 | 引入 `_stockReqSeq`/AbortController：响应返回时校验序号，过期丢弃；loadLastEvaluation 传入 code 校验 |
| 9 | **K线失败体验：无原因、无独立重试、加载态摇摆**：失败仅 toast "K线加载失败"（app-logic.js:453）；自动加载成功与否随数据源延迟变化（走查两次一次成功一次失败）；800ms 自动重试只在 tab 切换时触发 | 中 | app-logic.js:448-455；watch.js:109-119；走查 console 记录 | 失败态展示原因 + 弹窗内重试按钮 + 数据就绪后失败自动重试一次 |
| 10 | **版本号纪律：git HEAD=V4.0.9b 而 APP_VERSION=4.0.0**（main_new.py:88），/api/health 与前端 ?v= 缓存号均显示 4.0.0，与发布版本（V4.0.9b）脱节，部署可观测性失真 | 低 | backend/main_new.py:88；/api/health 实测 version=4.0.0；git log HEAD 28372e2 | 发版流程把"bump APP_VERSION"纳入 gate（可在 CI 校验提交 tag 与 APP_VERSION 一致） |

**附注（未入 Top10 的操作便捷/健壮性小项）**：
- 登录串行加载（auth.js:99-104）与 lifecycle 并行路径重复，登录首屏感知慢（建议登录后仅设状态，交由 watch(currentPage)/lifecycle 统一加载）。
- viewAiResult/watchlistEvaluate（watchlist.js:557-586, 991-1011）仍是"先 await 行情接口再弹窗"，与 showStockDetail 的"立即弹窗+异步填充"不一致，慢接口下点击无即时反馈（操作卡点，建议统一为立即弹窗模式）。
- merrill-detail.js:206 `(…?.stock_avg_return*100).toFixed(2)` 缺字段显示 "NaN%"。
- stock-detail.js:237/242/247 对 `aiResult.result.analysis` 未做可选链防护。
- kline 周期 tab 未加载时提示"请先点击加载K线按钮"（app-logic.js:485），但同排即"加载K线"按钮，提示信息层级可优化。
- 实测登录按钮文本为"登 录"（Element Plus 两字自动加空格），自动化/快捷键场景注意。

---

## 四、操作流走查记录（Playwright 实测）

1. **登录**：admin/admin ✅ → 侧栏 5 项导航正常。
2. **量化日历**：进入 ✅，上一/下一交易日按钮存在 ✅，列表渲染 136 只 ✅。
3. **个股详情**：点击行立即弹窗 ✅，加载态→数据填充 ✅；K线：一次自动加载成功、一次 Failed to fetch 报"K线加载失败" ⚠️；Escape 关闭 ✅。
4. **策略总览**：进入 ✅（美林时钟/市场行情子页数据由 /api/dashboard、/api/market/overview 支撑）。
5. **系统配置→用量统计**：进入页面时 console 抛 `ReferenceError: loadFactCheck is not defined` ❌；「AI 事实护栏审计」「立即生成复盘」「立即抽查」按钮均渲染，但点击 **0 网络请求、0 反馈** ❌；实时报价 WS 两次 404 ❌。
6. **页面错误采集**：全程 pageerror=0；console error 集中在上述 3 类（401 一次、WS 404 两次、loadFactCheck ReferenceError、K线 Failed to fetch）。

---

## 五、最有价值的优化建议（Top 5）

1. **① 修复注入断点（问题 #1/#2，半小时工作量）**：在 app-logic.js 补全 ops 域 6 键解构+注入+watch ctx 传参，即可一次复活「AI 事实护栏审计」「立即生成复盘」「用量统计自动刷新」三个功能。这是投入产出比最高的一项。
2. **② 建立"三向注入一致性"护栏测试**：仿照本报告 2.1 的方法，新增测试断言"各域工厂导出键 ⊆ qcState 键，且组件模板/脚本中所有 `state.X`/模板标识符 ∈ qcState 键"；把 test_frontend_consistency.py:67 的"数量断言"升级为"集合断言"。可系统性杜绝此类静默断点再次出现（V4.0.5 showTimelineStage、V4.0.9 factCheck 都是同源问题）。
3. **③ 补齐部署依赖与异步边界（问题 #3/#4）**：requirements.in 增加 websockets 并重编 lock（否则任何部署环境实时报价必挂）；同步数据源调用迁到 to_thread，避免单数据源慢拖垮整个 API（健康检查 5.5s 即为旁证）。
4. **④ 统一"立即弹窗+异步填充"交互范式并加竞态保护（问题 #8 + 附注）**：showStockDetail 已是正确范式，把 viewAiResult/watchlistEvaluate 对齐，并给详情加载加请求序号，消除"点了没反应"和"张冠李戴"两类体验问题。
5. **⑤ 版本与发布纪律自动化**：APP_VERSION 与 git tag/提交级联（可在 CI 加 gate），并在登出时清 token（问题 #6/#10），避免凭证残留与版本失真造成的运维误判。

---

## 六、审计环境与限制说明

- 本会话 bash 工具一度不可用，走查改用 run_code 内 `child_process` 直接驱动 Playwright（chrome executable=/home/evergreen/.agent-browser/browsers/chrome-150.0.7871.46/chrome）完成，未影响结论可靠性。
- 实测截图留存于 /tmp/audit_*.png；K线接口在数据源慢时的表现属于环境相关（与本机网络/数据源可达性有关），但"异步端点内同步阻塞"的结构性问题与网络无关，结论成立。
- 本报告基于 dev:8001 运行实例 + 当前工作区源码（HEAD 28372e2）。ops:8000 未在本轮审计范围，建议对 ops 复跑 #3（WS 依赖）与 #1/#2（注入）核查。
