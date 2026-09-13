# DEV-PLAN v6.9.3：存量优化整改开发计划

> 版本：v1.0（待用户终审授权）
> 状态：待批准
> 创建日期：2026-09-12
> 需求来源：《PRD-v6.9.3.md》/《EVAL-v6.9.3-ui-opts.md》
> 前置：PRD-v6.9.3.md（本计划独立可评审）

---

## 1 开发范围与任务分解

### A 组 · UI/交互（需求 1-7、12）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| A1 | 股票列表信息密度 | backend/data_parser.py、frontend/js/stock-pool.js、frontend/src/components/common/StockList.vue、frontend/js/components/strategies-page.js、frontend/js/components/calendar-page.js、frontend/css/components.css | 后端 consensus join 行情补 `price/change_pct`；StockList 增 `consensus_level` 进度条与徽章、标签扩容 3 个、价格列；共识榜/日历股票池统一改 StockList（虚拟列表保留） |
| A2 | 下拉按钮全局规范 | frontend/css/themes.css、frontend/css/components.css、相关模板 `w-*` 类替换 | el-select nowrap + ellipsis；工具栏防拉伸；宽度类收敛 `.w-select` |
| A3 | 搜索框右移 | frontend/css/header.css | `.qc-header-center { justify-content:flex-end }`，移动端回归 |
| A4 | 通知铃铛面板 | frontend/src/components/Header.vue、frontend/css/header.css | 绑定 @click；popover 面板；`/api/alerts/history?limit=8`；空态/加载/失败态；底部跳转通知中心 |
| A5 | 导航形态菜单样式 | frontend/css/header.css | 补 `.qc-navmode-menu` 完整面板样式 |
| A6 | 主题按钮升级 | frontend/src/components/Header.vue、frontend/js/app-logic.js、frontend/js/components/system-page.js、frontend/css/header.css | 主题面板 popover（模式+色板+slider）；themeHues/hueColor/hueName 抽全局共享；功能配置子页改引用 |
| A7 | 日历工具栏重排 | frontend/js/components/calendar-page.js | 视图切换器置最左；日期/刷新/导出中右；上一/下一/对比最右（纯模板） |
| A8 | 系统配置菜单重排 | frontend/js/app-logic.js | subPages/guestSubPages/subPageNames 顺序调整 |

### B 组 · 后端/配置（需求 8-11）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| B1 | 短线复盘提速 | frontend/js/components/shortterm-page.js、backend/api/v1/shortterm.py | 前端并行预取 overview/pools/lhb + `_cache` LRU 上限；后端 overview 聚合并行化 + store 进程内缓存 |
| B2 | AI R1 清理 | backend/ai_models.py、backend/main_new.py（启动迁移）、frontend/js/ai.js、frontend/js/app-logic/auth.js | 目录加载过滤 R1；ai_models.json 迁移清理；默认模型改 deepseek-v4-flash |
| B3 | sxsc 测试修复 | backend/data_sources/_manager.py、backend/api/v1/market.py、frontend/js/system.js | 测试即时重建客户端 + timeout=10s + 错误分类；前端解锁态先保存再测试 |
| B4 | 功能配置精简 | frontend/js/components/system-page.js、相关数据模块 | 数据刷新移除自选池拉取项；策略研究开关删除（恒显） |

### C 组 · 收尾

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| C1 | 版本提升 | backend/main_new.py | 6.9.2 → 6.9.3 |
| C2 | 契约/测试同步 | tests/（菜单契约、一致性、token、新增用例） | 见 TEST-PLAN |
| C3 | dist 重建 | frontend/（npm run build） | 全量构建 + 缓存参数生效 |
| C4 | 全量回归 | — | pytest 门禁 + 目标集，无新增失败 |

## 2 关键设计决策

1. **StockList 统一**：StockList.vue 增加 `showConsensus`/`showPrice` 开关与 `virtual` 插槽，日历股票池与共识榜传入即可，杜绝第三套行结构。
2. **主题逻辑共享**：`themeHues` 常量与 `hueColor/hueName` 挂 `window.__quantModules.themes` 或 `state`；system-page.js 与 Header 均引用，删除重复定义。
3. **铃铛面板复用**：面板容器样式抽为 `.qc-header-popover`（基于 `.qc-user-dropdown` 提炼），铃铛/主题/导航形态三面板共用。
4. **R1 迁移幂等**：启动迁移对已清理数据文件幂等，无 R1 残留时零操作，不阻塞启动。
5. **sxsc 测试超时**：测试专用 `timeout=10` 独立于业务配置；重建客户端仅作用于测试路径，不改业务客户端状态。

## 3 风险与规避

| 风险 | 规避 |
|------|------|
| StockList 改造影响日历/TOP5/共识榜现有展示 | 开关默认关闭保持原样，仅三处调用点显式开启 |
| 主题逻辑抽取破坏功能配置子页 | 抽取后 system-page 同步改引用；契约测试校验 themeHues 一致性 |
| 铃铛面板接口权限（alerts/history 需登录） | 复用 authHeaders；401 时面板提示登录 |
| 短线复盘预取流量翻倍 | 仅预取 3 个高频接口且走 TTL 缓存；失败静默不告警 |
| 功能配置字段移除导致后端接收字段失效 | 后端容错忽略未知字段；测试断言更新 |

## 4 验证方式

- 每任务完成后跑 `pytest tests/` 相关门禁文件（菜单契约/一致性/token）。
- C3 后启动 `python backend/main_new.py`，人工走查 12 项需求对应 UI。
- 全量 pytest 目标集无新增失败；版本号接口返回 6.9.3。
