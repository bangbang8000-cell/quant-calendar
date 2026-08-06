# 前端组件化契约 (v3.6.0-T1 / FR-3.6.1)

> 版本: v1.0 | 日期: 2026-08-07
> 目标: index.html 6887 → ≤1800 行, 零构建 Vue3 全局组件

---

## 1. 架构决策

- **零构建**: 无 Vite/Webpack/npm, 全部用浏览器原生 `<script>` 加载
- **Vue3 全局组件**: `app.component('xxx', {...})` 注册, 模板内 `<xxx />` 使用
- **composable 模式**: 共享状态用 `js/composables/*.js` 导出函数 (参照 v3.0.0 merrill.js 先例)
- **一次拆一页**: Sidebar → System → Strategies → Calendar → AI, 每页独立验证

## 2. 页面边界

| 页面 key | 子页 | 组件 | 状态 ref 数(约) |
|---------|------|------|----------------|
| strategies | overview/watchlist/backtest | StatCards, Dashboard, WatchlistPanel | 30 |
| calendar | day/week/month/year | CalendarGrid, StockPool, KlinePanel | 45 |
| ai | overview/history/chat_history | AiStats, HistoryList, ChatPanel | 25 |
| system | status/autoeval/datasource/feature/user/about | SystemStatus, BackupPanel, AnalyticsPanel | 40 |
| 壳 | — | Sidebar, GlobalHeader, Breadcrumb, AiFab | 10 |

## 3. props/emit 契约

### Sidebar
- props: `menus` (Array), `collapsed` (Boolean), `currentPage` (String)
- emit: `navigate(page)`, `toggle-collapse`
- 状态: 无内部状态

### GlobalHeader
- props: `currentUser`, `currentPage`
- emit: `logout`, `switch-sub-page(sub)`
- 状态: 无

### SystemStatus (系统状态卡片)
- props: `dashboardData`, `sysMonitor`, `analyticsRank`
- emit: 无 (纯展示)

### BackupPanel (备份恢复)
- props: `backups`, `isAdmin`
- emit: `create-backup`, `restore-backup(name)`

### WatchlistPanel (自选管理)
- props: `watchlist`, `searchResults`, `sortMode`
- emit: `add-stock(code)`, `remove-stock(code)`, `search(query)`

### KlinePanel (K线图表)
- props: `stockCode`, `period`
- emit: `period-change(period)`
- 依赖: charts.js 的 renderKlineChart

## 4. 共享状态 (composable)

| composable | 职责 | 来源 |
|-----------|------|------|
| useDashboard | dashboardData/loadDates/loadDashboardData | 主 script |
| useConsensus | consensus/filteredConsensusRank/applyStrategyFilter | 主 script |
| useWatchlist | watchlist/watchlistCodes/CRUD | 主 script |
| useAiHistory | aiHistory/loadAiHistory/delete | 主 script |
| useBackup | backups/loadBackups/createBackup/restoreBackup | 主 script |

## 5. 拆分行数目标

| 阶段 | 移出行数 | index.html 剩余 |
|------|---------|----------------|
| T2 composable | ~800 | ~6087 |
| T3 Sidebar/Header | ~150 | ~5937 |
| T4 System | ~600 | ~5337 |
| T5 Strategies | ~900 | ~4437 |
| T6 Calendar | ~1200 | ~3237 |
| T7 AI | ~700 | ~2537 |
| T8 壳瘦身 | ~700 | ~1837 |

## 6. 验收标准

- 每页拆分后功能对比无差异 (T9 冒烟清单)
- index.html 无 `<script>` 内联主逻辑 (仅组件注册)
- 所有组件通过 `window.__quantComponents` 命名空间加载
- 零新增 npm 依赖
