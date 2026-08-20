# 量化选股日历（quant-calendar）效率/性能维度审计报告

- **仓库**: /home/evergreen/dsh-workspace/quant-calendar-dev（git master b0e1b30，V4.0.0，dev 实例 http://127.0.0.1:8001/）
- **审计维度**: 页面加载 / API 延迟 / 数据拉取频率 / 前端渲染开销 / 虚拟滚动覆盖 / 缓存策略 / 后端热点 / 数据库查询 / 静态资源体积 / 重复请求 / 调度任务开销
- **方法**: curl 实测关键 API 延迟（含冷/热缓存）；Playwright(CDP) 捕获真实浏览器首屏 77-94 个请求的完整链路（资源类型/大小/到达顺序/重复次数）；代码级证据（backend/*、frontend/js/* 文件:行号）
- **审计时间**: 2026-08-21（交易日），服务 v4.0.0，单 uvicorn worker（main_new.py:269-271 无 workers 参数）

---

## 1. 量化测量结果

### 1.1 关键 API 延迟（curl，dev:8001，admin 鉴权）

| 接口 | 冷缓存 | 热缓存 | 响应体 | 备注 |
|---|---|---|---|---|
| /api/dashboard | 58ms | 3-4ms | 5.4KB | 后端 60s TTL 内存缓存 |
| /api/calendar/2026-08-21 | - | 2-4ms | 35B | 当日无数据 |
| /api/market/overview | - | 3-4ms | 1.6KB | 指数日线 10min TTL |
| /api/market/merrill-clock | 13.09s（每日首次） | 25-42ms | 5.4KB | 见问题 #3 |
| /api/system/metrics | - | 3ms | 485B | 内存环形缓冲 |
| /api/system/monitor | - | 205ms（固定） | 684B | 含 0.2s CPU 采样 sleep（system.py:83） |
| /api/view/day/{d}?status=all | 34ms | 34ms | 25KB | 同日 12s 内被拉 3 次 |
| /api/view/week/{d}?status=all | - | 0.9s | 60KB | |
| /api/view/month/{d}?status=all | - | 0.7-0.9s | 87KB | |
| /api/view/year/{d}?status=all | 20.1s | 16-21s（每次） | 311KB | 全站级冻结，见问题 #1 |
| /api/data-refresh/reload (POST) | - | 2.0-2.5s | 180B | 同步全量 CSV 重解析，见问题 #2 |
| /api/calendar/{d}/consensus | - | 7ms | 5.8KB | 内存数据 |
| /api/ai/history | - | 15ms | 61KB | |

并发阻塞实证（app.log 2026-08-21 00:30:30）：/api/view/year 一次请求耗时 20932ms，期间 /api/system/monitor 排队 1985ms、/api/analytics/rank 排队 1787ms —— 单 worker 事件循环被同步重计算完全卡死。

### 1.2 首屏加载链路（Playwright 实测，全新会话）

- 总请求 77 个（其中 60 个 script + 6 个 stylesheet + 9 个 fetch + document + logo）；登录交互后累计 94 个请求。
- 总传输（解码后）2.56MB；gzip 后首屏静态约 454KB（echarts 1MB 已懒加载未入首屏）。
- 导航指标：TTFB 7ms（本地），domContentLoaded 1034ms，domComplete 1174ms。
- 服务端为 HTTP/1.1（uvicorn h11，curl -sI 返回 HTTP/1.1），浏览器每域仅 6 条并发连接，60 个脚本约等于 10 个串行波次；WAN 环境（约 100ms RTT）仅往返开销即 >=1s，加 1.8MB JS 解析执行，TTI 预计 3-6s。
- 静态资源 gzip 已启用（main_new.py:117-120 GZipMiddleware，实测 element-plus.min.js 928KB 到 278KB），但 Brotli / HTTP/2 未启用。

### 1.3 轮询/定时汇总（前端）

| 轮询 | 频率 | 位置 | 是否感知页面可见性 |
|---|---|---|---|
| 美林时钟 | 300s（可配置） | merrill.js:62,346,385 | 否（后台标签继续拉） |
| 市场行情 | 600s（仅交易时段） | app-logic/market.js:63 | 否 |
| 策略总览 | 300s（仅停留 strategies 页） | app-logic.js:786-788 | 否 |
| 用量统计子页 | 30s x 5 接口 | app-logic/watch.js:95-104 | 否 |
| 实时报价 WS | 服务端 15s 推送 | backend/api/v1/market_ws.py:32,83-84 | 仅 watchlist/ai 页连接 |
| Tushare 连接检测 | 3600s + 每次进系统页 | app-logic.js:826-827 | - |

---

## 2. Top 10 问题清单

### P0-1【严重】/api/view/year 单次 16-21s，O(n²) 全表扫描 + 每请求重算，冻结整个服务
- **证据**:
  - backend/views_aggregator.py:321-330 —— 年视图"去年出池"扫描：for code in out_codes: for d in reversed(all_dates): for s in daily_data.get(d) = O(出池数 x 651 交易日 x 每日股票数)，约十亿级迭代。
  - backend/api/v1/views.py:66-67 —— 每个响应股票（<=200+）逐只调用 calculate_status()；年视图分支 backend/views_aggregator.py:418-434 每只股票再全量扫 651 x 每日集合，16s 的 96% 来自这里且每次请求都重算（聚合器缓存救不了状态计算）。
  - backend/main_new.py:269-271 —— 单 worker 单事件循环，同步计算期间所有 API 排队（实测 21s 阻塞）。
- **触发路径**: 日历页切"年视图"；系统配置页进入时 frontend/js/app-logic.js:804-811 顺序拉 day/week/month/year。
- **修复**: ① 启动/刷新时预构建 code 到 last_seen_date/first_seen_date 倒排索引（O(1) 判断 new/out/current）；② 状态字段并入聚合器缓存（views_aggregator 缓存含 status，避免 views.py 每请求重算）；③ year 视图计算丢 asyncio.to_thread 或后台任务预热。
- **预期收益**: 16-21s 到 <100ms；消除"一人点年视图全站 20s 卡死"（P0 级故障面）。

### P0-2【严重】parser.reload() 同步重解析 2-2.5s 阻塞事件循环
- **证据**: backend/data_parser.py:48-98 启动加载 4 个策略 CSV（每文件 651 行 x 5219-5543 列，约 1360 万单元格）；backend/scheduler.py:465-466, 523-524, 600-601（data_refresh / tushare_pull / file_watch 三个任务内直接同步调用 parser.reload() + views_aggregator.reload()）；backend/api/v1/data_refresh.py 的 reload 接口同样同步。
- **修复**: reload 移入 asyncio.to_thread + 双缓冲原子替换（加载完成后才换引用）；file_watch 只做 mtime 检测（已做），刷新频控。
- **预期收益**: 手动/定时刷新 2.5s 阻塞到后台异步完成，请求零感知。

### P0-3【严重】美林时钟每日首次请求 13s（AKShare 顺序网络拉取 + 15s 超时xN），async 路由内同步阻塞
- **证据**: backend/merrill_clock.py:294-488 _fetch_real_macro_data() 顺序调用 PMI/CPI/PPI/M2/GDP 等 5+ 个 AKShare 接口，每个 _call_with_timeout(fn, 15)（:298-305）新建线程池顺序等待，最坏 75s+；backend/api/v1/market.py:24-27 async 路由直接同步调 determine_stage()；实测首次 13.09s，之后当日缓存命中 25-42ms（:431-435 按日缓存）。
- **另**: merrill_clock.py:270-292 _save_snapshot() 每次 evaluate（含每次 API 调用）读-改-写 snapshots.json（最多 100 条），每请求磁盘写放大；:905 每次调用都执行。
- **修复**: ① 首次冷缓存用后台任务预热（午夜后首个请求不承担拉取）；② 并行化 AKShare 调用（asyncio.gather/to_thread，超时 5s）；③ 快照写入节流（如 <=1 次/小时）或异步。
- **预期收益**: 每日首次 13s 到 <1s，且不再卡事件循环。

### P1-4【高】首屏 60 个脚本请求 + 2.5MB 解码体积（零构建 SPA 架构代价）
- **证据**: frontend/index.html:19-95 共 60 个 script defer；实测 60 script 请求、首屏解码 2.56MB（gzip 后 454KB）；vendor 中 element-plus.min.js 928KB（gzip 278KB）、vue 131KB；无 HTTP/2。
- **修复**: ① 引入构建层（esbuild/Vite 按页分包）或 import map + 动态 import 按需加载组件 JS（calendar/ai/research/system 页各一包）；② uvicorn 开 HTTP/2（需 h2 依赖）或前置 Caddy/nginx 启用 HTTP/2 + Brotli。
- **预期收益**: 首屏 script 请求 60 到 8-12，TTI 本地 1.2s / WAN 3-6s 到 1.5-2.5s；HTTP/2 复用连接后传输并行化。

### P1-5【高】未登录即发 9-11 个业务请求，含必 401 的 /api/ai/config
- **证据**: frontend/js/app-logic/lifecycle.js:74-87 wave1（themes/market/merrill-stages/merrill-clock）+ loadAiConfig/loadAiVendors/loadAiCatalog 全部在会话判断（:89）之前无条件发起；实测登录前已请求 dashboard、view/day、system/metrics、setup/status、merrill-clock(+timeline/stages)、ai/models、ai/config、ai/catalog 等；其中 frontend/js/system.js:457-471 loadAiConfig 用无鉴权 plain fetch，导致 /api/ai/config 每次加载必 401（实测 401 + console error，capture 全部命中）。
- **修复**: ① 未登录仅加载 health/themes；② AI 类配置改走带鉴权的 apiFetch（core.js:27）或登录后再拉；③ 各页面数据加载加 currentUser 门控。
- **预期收益**: 首屏请求数 -50%；消除每次加载的 401 噪音与控制台错误。

### P1-6【高】系统配置页每次进入触发约 12 个请求 + 年视图 16s 冻结 + Tushare 连接测试
- **证据**: frontend/js/app-logic.js:804-811 顺序拉 4 个视图（含 16-21s 的 year）；:818-828 再顺序 loadUsers/loadFeishuConfig/loadTushareConfig/loadSystemStatus/loadAiConfig/loadRateLimit + checkTushareConnection()（POST /api/market/tushare/test，实测每次进页触发）；Playwright 实测进入系统页后连续产生 dashboard、tushare/test、view/day、analytics/page、dates、view/week、ai/history(61KB)、view/month 等 9+ 请求。
- **修复**: ① 系统页视图计数改用轻量汇总接口（dashboard 已有 counts）或复用 loadConsensusData 缓存；② 配置加载并行（Promise.all）+ 会话级缓存；③ tushare/test 改为惰性/手动触发。
- **预期收益**: 系统页进入 18s+（含 year 冻结）到 <1s，请求数 -70%。

### P2-7【中】同 URL 重复请求：view/day 12s 内 3 次、dashboard/dates 各 2 次
- **证据**: Playwright capture5 重复清单（view/day/2026-08-17?status=all x3、dashboard x2、dates x2、analytics/page x2）；frontend/js/app-logic/data.js:25 qcCache TTL=15s，但系统页 app-logic.js:807 用 raw fetch 绕过 qcCache；页面切换 watch（app-logic.js:767-831）每次进入都重拉。
- **修复**: 统一经 qcCache；视图数据 TTL 提到 60s+；页面切换时命中缓存直接渲染（已部分实现，补齐系统页路径）。
- **预期收益**: 单会话请求数 -15% 到 -20%，减少后端重复计算。

### P2-8【中】/api/system/monitor 固定 205ms（0.2s sleep）+ 用量子页 30s x 5 接口轮询
- **证据**: backend/api/v1/system.py:59-91 _get_cpu_mem() 每次调用 time.sleep(0.2) 采样两次 /proc/stat，每请求固定 +200ms；frontend/js/app-logic/watch.js:95-104 用量子页每 30s 并发拉 loadSysMonitor/loadAnalytics/loadHealthDetail/loadHealthMetrics/loadAiUsage 5 个接口。
- **修复**: CPU 采样结果进程内缓存 1-5s；轮询间隔 30s 到 60s，且 document.hidden 时暂停；loadSysMonitor 与其它接口合并或复用 metrics 数据。
- **预期收益**: monitor 205ms 到约 5ms；后台流量减半。

### P2-9【中】dashboard 60s TTL 全量重算 + 美林快照每请求写文件
- **证据**: backend/dashboard_api.py:16 _cache_ttl=60、:80-87 _get_core_stats 全 651 个交易日 x 4 策略循环求并集（每 60s 一次 50-100ms 无谓重算）；backend/merrill_clock.py:270-292,905 每次 determine_stage 读改写 snapshots.json。
- **修复**: dashboard TTL 提到 300s+（日终数据本就低频变化）；快照写入节流/异步；all_dates 预构建 code 到日期倒排。
- **预期收益**: 后端无效 CPU 与磁盘写降低约 80%。

### P2-10【中】静态 CSS 体积：themes.css 209KB（1526 规则块，7 主题重复声明）
- **证据**: frontend/css/themes.css 4875 行 / 209KB，同一类选择器按 7 套主题各声明一遍（.sidebar 出现 16 次、[data-theme="dark-pro"] 56 次等）；叠加 element-plus.css 325KB；index.html 一次全量加载（index.html:20,24-28）。
- **修复**: 主题差异收敛为 CSS 变量覆盖（tokens.css 88 行变量体系已具备）；未激活主题规则按需注入；可选 PurgeCSS 剔未用规则。
- **预期收益**: CSS 解码 568KB 到 <200KB（gzip 后约 75KB 到约 25KB），解析/样式计算开销同步下降。

### 其他观察（不列入 Top10）
- 轮询不感知标签页可见性（merrill 300s / market 600s / strategy 300s），建议 visibilitychange 暂停，省 60%+ 后台流量。
- frontend/js/components/strategies-page.js:770-777 对 document.body 全子树挂 MutationObserver，任意 DOM 变化触发 120ms 防抖的 SVG 时间轴重建，建议观察范围收敛到时间轴容器。
- 虚拟滚动覆盖良好：日历日视图 stockPool（calendar-page.js:49）、策略共识榜（strategies-page.js:368）、AI 历史 records/sessions（ai-page.js:306+）均已接入 qc-virtual-list；系统页用户/审计日志、自选列表规模有界（<数百），当前无虚拟化可接受。
- 数据库（app.db 84KB）schema 有索引（db.py:40,49,73,87,107,116），查询量小，未见 N+1 热点；审计/登录文件写为低频，可接受。
- 调度任务均为日/小时级（scheduler.py:174-902），无高频空转（未启用分支 3600s 检查），开销可接受。

---

## 3. 3-5 条最有价值的优化建议

1. **修掉年视图 O(n²)（收益最大，P0）**: 预构建"股票到首/末出现日期"倒排索引 + 状态并入聚合缓存 + to_thread。/api/view/year 从 16-21s 到 <100ms，同时消除日历年视图与系统配置页两个入口造成的全站 20s 冻结（单 worker 下这是最大可用性风险）。
2. **异步化所有同步重活**: parser.reload()（data_parser.py 1360 万单元格，2.5s）与美林 AKShare 冷拉取（13s）全部移入 asyncio.to_thread/后台任务 + 双缓冲原子替换 + 每日首访预热。后端将不再有"一个请求卡死所有人"的路径。
3. **前端引入按页分包/懒加载 + HTTP/2**: 60 个脚本到 8-12 个请求（构建或 import map + 动态 import）；uvicorn 开启 HTTP/2（或前置反代）。首屏 TTI 预期减半（WAN 3-6s 到 1.5-2.5s），这是零构建架构下最大的体验杠杆。
4. **请求调度与缓存统一**: 未登录门控业务请求（-50% 首屏请求、消除必 401）；系统页 4 视图/6 配置全部并入 qcCache 与会话级缓存（-70% 系统页请求、-15% 全站请求）；轮询全部加 visibilitychange 暂停。
5. **后端热点降本**: dashboard TTL 60 到 300s、monitor CPU 采样缓存、美林快照节流，三项合计后端无效 CPU/磁盘写降约 80%，几乎零风险。

**量化预期收益汇总**: 年视图 20s 到 0.1s（-99.5%）；冷 merrill 13s 到 1s；reload 2.5s 到异步；首屏请求 77 到约 40、脚本 60 到 <=12；系统页进入 18s 到 <1s；全站 P95 延迟在无人触发重型接口时保持 <50ms。
