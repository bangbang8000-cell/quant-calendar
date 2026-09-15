# DEV-PLAN-v5.16: 详情内嵌双栏工作区

> 配套: PRD-v5.16.md / TEST-PLAN-v5.16.md
> 目标: 将「中栏列表 + 右栏详情」双栏模式推广到 量化日历 / 策略共识TOP5 / 策略共识榜 / 大盘行情, 保留弹窗模式 (配置可调) + 移动端强制弹窗

---

## 0. 技术现状 (勘察结论)

- **个股详情弹窗** `frontend/js/components/dialogs/stock-detail.js`：全局挂载于 `frontend/index.html` L159 `<qc-stock-detail-dialog>`，与 `el-dialog` 强耦合（L13 `v-model="stockDetailVisible"`，L438 `</el-dialog>`），**内容不能直接复用为内嵌面板**，需抽取。
- **详情状态** 集中在 `frontend/js/app-logic.js`：`stockDetailVisible / stockDetailTab / stockDetail / stockDetailLoading / stockKlineLoaded / aiResult / aiEvalStage / aiEvalElapsed / aiEvalError / currentKlinePeriod` 等（约 25 个 ref），以及 `showStockDetail(code)`（L816）、`loadStockKline`、`refreshStockScore`、`loadLastEvaluation`、`disposeKline('stockKlineChart')`。
- **K线图表**：`#stockKlineChart` 为 ECharts 挂载点，`watch(stockDetailTab)` 在切回 K线 tab 时重载；切换股票须 `disposeKline` 防串号。
- **涉及页面**（均 `@select="showStockDetail(item.code)"`）：
  - `strategies-page.js` L179 (TOP5)、L468 (共识榜)
  - `calendar-page.js`（日周月年 + statusFilter 全部/新入池/当前持仓/已出池）
  - `strategies-page.js` L436 (大盘行情 `showIndexDetail`，指数详情——按 C4 建议不改造)
- **配置系统**：`system-page.js` 「界面与个性化」(feature 子页) 承载外观/语言/K线设置；用户配置有持久化通道。
- **既有双栏**：`layout.css` `.shortterm-split` / `.market-review-split`（F7/F8.2）——250px + 1fr 等高 grid，可直接复用视觉。

## 1. 总体架构

```
双栏模式                         弹窗模式 (默认/移动端)
┌──────────┬─────────────┐     ┌──────────────────────┐
│ 中栏列表  │ 详情工作区    │     │   (原页面)            │
│ (stock)  │ (stock-detail│     │   列表                │
│ 第一条选中 │  内容, 无关闭) │     │   点击 → el-dialog 弹窗 │
└──────────┴─────────────┘     └──────────────────────┘
        ▲ 共用同一详情内容组件
```

**核心：抽取详情内容为独立组件 `qc-stock-detail-panel`（无 el-dialog 壳），弹窗模式与双栏模式都渲染它。**

- 弹窗模式：`<qc-stock-detail-dialog>` 内部渲染 `<qc-stock-detail-panel>`（保留原 el-dialog 壳 + 关闭按钮）
- 双栏模式：页面内 `<qc-stock-detail-panel>` 常驻右栏（无关闭按钮）

## 2. 任务分解 (A-H)

### A. 详情内容抽取 (A1-A3)
- **A1**: 从 `stock-detail.js` 抽取 `stock-detail-panel.js`：将 el-dialog 内的模板（L14-L437）+ 逻辑移入新组件 `qc-stock-detail-panel`，props/inject 沿用 `qcState`。
- **A2**: `stock-detail.js` 瘦身为壳组件：`el-dialog` + `<qc-stock-detail-panel>`，行为不变。
- **A3**: 双栏模式下 `qc-stock-detail-panel` 常驻渲染（不依赖 `stockDetailVisible` 显隐）。

### B. 展示模式配置 (B1-B3)
- **B1**: 新增 `detailDisplayMode` ref（`'split' | 'dialog'`），默认 `'split'`；localStorage + 用户配置 API 持久化（C3-B）。
- **B2**: `system-page.js` feature 子页新增「详情展示模式」radio：内嵌双栏 / 弹窗；≤1024px 灰显提示"移动端强制弹窗"。
- **B3**: `watch(mode)` 切换时：双栏→弹窗 保持当前股票在弹窗打开；弹窗→双栏 若弹窗开着则转为右栏展示。

### C. 双栏布局容器 (C1-C3)
- **C1**: 通用 CSS 类 `.detail-split`（复用 F7/F8.2 模式）：`grid 250px 1fr`、stretch 等高、中栏列表内滚、右栏 `min-width:0`。
- **C2**: 各页面包裹双栏容器 + 中栏 `qc-stock-list`（或 index 列表）+ 右栏 `<qc-stock-detail-panel v-if="mode==='split'">`。
- **C3**: 移动端 `@media (max-width:1024px)` 隐藏双栏、回退弹窗（C5-A）。

### D. 选中态与默认首条 (D1-D3)
- **D1**: 中栏选中态绑定**股票代码** `activeStock`（非行号），filter 切换时若当前股不在新列表 → 回退第一条。
- **D2**: 列表加载完成 → 若 `activeStock` 为空则自动选中第一条并 `showStockDetail(第一条)`。
- **D3**: 列表项点击 → 更新 `activeStock` + 触发详情切换（复用 `showStockDetail` 逻辑，但面板模式不弹 `el-dialog`）。

### E. 状态保留与K线管理 (E1-E3)
- **E1**: 面板模式下切换股票时**保留** `stockDetailTab`（K线/AI/问股/因子/表现 当前 tab）。
- **E2**: 切换股票时 `disposeKline('stockKlineChart')` + 重建（沿用现有机制），`stockKlineLoaded` 复位。
- **E3**: `watch(stockDetailTab)` 切回 K线 tab 重载逻辑（app-logic.js L651 区）在面板模式同样生效。

### F. 各页面接入 (F1-F4)
- **F1**: `calendar-page.js` 日/周/月/年 + statusFilter → 双栏。
- **F2**: `strategies-page.js` TOP5 (overview) → 双栏。
- **F3**: `strategies-page.js` 策略共识榜 (consensus) → 双栏。
- **F4**: 大盘行情指数卡 → **双栏**（C4-A，用户确认）：中栏=指数列表，右栏=`showIndexDetail` 内容（index-detail.js 抽取为面板，同 A 阶段方式）。

### G. 弹窗模式保真 (G1-G2)
- **G1**: 弹窗模式下全部交互回归（打开/关闭/ESC/点击遮罩/K线/AI）。
- **G2**: `rememberDialogTrigger` 焦点归还、`recent.recordViewed` 等旁路逻辑双模式均生效。

### H. 发布链 (H1-H4)
- **H1**: APP_VERSION → 5.6.1（C6-A）+ 版本门禁同步。
- **H2**: dist 重建 + 冒烟 (v515_smoke.py 扩展 v516 用例) + 全量 pytest 无新增失败。
- **H3**: commit + push origin + ops sync + 双端重启 + /api/health 5.6.1。
- **H4**: HANDOVER.md 更新至 v5.6.1。

## 3. 发布链 (与 v5.15 一致)

1. bump APP_VERSION(backend/main_new.py) 5.6.0 → 5.6.1
2. `cd frontend && ./node_modules/.bin/vite build` + 全量回归 + 门禁
3. commit + `git push origin master` + `git push synology master`
4. ops `git fetch origin && git reset --hard origin/master` + 双端重启
5. 双端 `/api/health` 冒烟 + 浏览器冒烟 (v516)

## 4. 改动文件清单 (预估)

| 文件 | 改动 |
|---|---|
| `frontend/js/components/dialogs/stock-detail.js` | 瘦身为壳 (A2) |
| `frontend/js/components/dialogs/stock-detail-panel.js` | **新增** 详情内容 (A1) |
| `frontend/js/components/calendar-page.js` | 双栏接入 (F1) |
| `frontend/js/components/strategies-page.js` | 双栏接入 (F2/F3) |
| `frontend/js/app-logic.js` | `detailDisplayMode` + 面板逻辑 (B/D/E) |
| `frontend/js/components/system-page.js` | 配置 UI (B2) |
| `frontend/css/layout.css` | `.detail-split` 通用类 (C1) |
| `frontend/css/responsive.css` | 移动端回退 (C3) |
| `frontend/index.html` | 注册新组件 (A1) |
| `backend/main_new.py` | APP_VERSION 5.6.1 (H1) |
| `docs/HANDOVER.md` | 更新 (H4) |

## 5. 风险与对策

| 风险 | 对策 |
|---|---|
| 抽取组件回归 | A 阶段完成后双模式跑完整冒烟；K线销毁重建专项用例 |
| 日历 statusFilter 联动 | D1 选中绑定代码 + filter 切换回退首条 |
| 配置 API 冲突 | 复用现有 user_config 通道，先 localStorage 后 API |
| 双栏右栏滚动混乱 | 沿用 F7 等高方案 (grid stretch + 内滚) |
