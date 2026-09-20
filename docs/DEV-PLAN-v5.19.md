# DEV-PLAN-v5.19: 详情双栏全站统一

> 配套: PRD-v5.19.md / TEST-PLAN-v5.19.md
> 目标: 抽取 `qc-detail-split` 通用壳 + 旧式双栏回迁 + StockList 多选 + 我的自选/美林时钟/重点跟踪 双栏化
> 决策: 10 项已锁定 (见 PRD §4); 本版本不含 F7 (评估历史/问股历史) 与回测记录双栏
> 边界: 纯前端, 不改后端数据管道与 AI 逻辑; 不改移动端强制弹窗策略

---

## 0. 技术现状 (勘察结论, 2026-09-19 实测)

- **双栏开关**: `frontend/js/app-logic.js` L383-395 — `detailDisplayMode = ref(localStorage.getItem("qc_detail_mode") || "split")`; `isNarrow = window.innerWidth <= 1024`; `detailSplitEnabled = computed(() => mode === "split" && !isNarrow)`; `setDetailDisplayMode()` 持久化到 `qc_detail_mode`。
- **中栏宽度**: 同文件 L397-463 — `SPLIT_DEFAULT_PCT = 35`; `splitWidth` 读 `localStorage qc_split_width`; `syncSplitWidthVar()` 写根元素 CSS 变量 `--split-w` (无持久化值时为 `35%`); 拖拽下限 = 默认 35%、上限 = 容器 50%; 事件委托 `mousedown` 命中 `[data-split-resize]` → 取 `closest("[data-split-root]")`; 拖拽中加 `body.qc-split-resizing`。
- **CSS 基座**: `layout.css` L1002-1095 `.detail-split-wrap` / `.detail-split` (grid: `var(--split-w,35%)` + `--split-gutter` + `minmax(0,1fr)`, stretch 等高, 列表 min-height 280px) / `.detail-split-list` / `.detail-split-pane`; L1099-1135 `.split-divider` (+ `::after` 3px 竖条) 与 `body.qc-split-resizing`; L1028-1056 **`.qc-embedded-dialog` 内嵌化规则** (含 Element Plus 的 `.el-overlay-dialog` / `.el-modal-dialog` 两层容器 `:has()` 归位, 缺此规则内嵌弹窗会覆盖整页拦截点击)。
- **内嵌弹窗现状**: `stock-detail.js` L14/L18-20 与 `index-detail.js` L14/L18-20 **已有** `embedded` prop 与条件绑定; **`merrill-detail.js` L12 无 `embedded`** (模板无 `:append-to-body` / `:modal` / `:show-close` 绑定) → F5 需补。
- **既有 6 处双栏**: 4 处「列表 + 可选详情弹窗」— `calendar-page.js:73`(股票池)、`strategies-page.js:172`(概览TOP5) / `:447`(大盘行情) / `:480`(策略共识榜), 均受 `detailSplitEnabled` 门控; 2 处「列表 + 常驻内容」— `shortterm-page.js:14` `.shortterm-split`、`research-page.js:608` `.market-review-split`。
  - **⚠️ 更正 (2026-09-19 实测)**: 这 2 处**并非固定 250px 不可拖拽** —— `layout.css:869` / `:943` 与 `.detail-split` **同用 `var(--split-w, 35%)`**, 且均带 `data-split-root` + `data-split-resize`; 浏览器实测首列 35% (`413px 6px 753px` / `398px 6px 726px`)、拖拽生效 (35%→548px)、`qc_split_width` 持久化。原「两代并存」判断有误, **F2 已撤销**。
- **`StockList.vue`** (`frontend/src/components/common/`, `name: "qc-stock-list"`, 157 行): props = `items/showRank/activeCode/emptyText/loading/statusText/showConsensus/showPrice/virtual/rowHeight/copyCode`; `emits: ["select"]`; slots = `name-suffix` / `extra` / `actions`; **无多选能力** → F3 需扩展。
- **我的自选**: `ai-page.js` L549-652 — 单卡片; 批量工具栏 (全选/评估选中/移除选中/清空/预加载K线); 搜索添加; 排序栏; `qc-virtual-list` `:row-height="56"`; 行内含复选框 / 代码 / 名称 / 评分徽章 / 实时报价 (`realtimeQuotes`) / 3 按钮; 移动端 `.swipe-reveal` 左滑删除; 行点击 → `watchlist.js:601 showStockKline` (弹窗)。
- **重点跟踪**: `focus-view.js` (407 行) — 4 卡片 (今日概览 / 多时点结果 / 历史记录 / 效果块); 结果行按档位分组, 行内手风琴 `.focus-detail` 展示 评估来源/评级/数据时效/买卖点/信号归因/入池历史; `openStockDetail` L341 → `state.showStockDetail` (弹窗)。
- **评估历史 / 问股历史**: `ai-page.js` L268-416 / L417-548 — 日/月/股三种分组视图 + 分组头多选 + `qc-history-record` 行模板 + `qc-virtual-list` 行内展开。
- **美林时钟**: `strategies-page.js` L238-249 四阶段网格 → `showStageDetail(s.key)` → `merrill-detail.js` (248 行: 阶段头 / 实时进度 / 维度评分 / 触发条件 / 置信度 / 下阶段预测)。
- **前端构建 (必须)**: Vite 构建管线 —— 改 `frontend/js`、`frontend/css`、`frontend/src` 后**必须** `cd frontend && ./node_modules/.bin/vite build` 重建 `frontend/dist`; 源码 `frontend/index.html` 与产物 `frontend/dist/index.html` 双份入库; 产物文件名内容哈希 + 服务端 immutable 头 → 不重建则老用户拿到旧 bundle。

## 1. 任务分解 (A-G)

### A. 通用双栏壳 (F1) — 纯重构
- **A1**: 新建 `frontend/src/components/common/DetailSplit.vue` (`name: "qc-detail-split"`): props `enabled`(Boolean, default false) / `listMinHeight`(Number, default 280); slots `list` / `pane`; 内部按 `enabled` 渲染四件套 (`enabled=false` → 列表 `w-100`, 不渲染分隔条与右栏)。
- **A2 ✅已完成 (2026-09-19)**: **4 处**改用该组件 — `calendar-page.js:73` (root-class=stock-pool-body)、`strategies-page.js:172` (TOP5) / `:446` (大盘行情) / `:478` (共识榜)。原计划 6 处, 旧式 2 处随 F2 撤销排除。
- **A3 ✅已完成**: 浏览器实测 — `cls="detail-split-wrap[ stock-pool-body] detail-split"`, `cols=3`, `pct=35`, `divider=pane=true`, `listFullW=false`, `rootVar=35%`; 拖拽 `--split-w` 35%→558px 且 `qc_split_width=558`; 弹窗模式 `cols=1, pct=100, w-100`; **0 pageerror**。

### B. 旧式双栏回迁 (F2) — **已撤销, 不执行**
- **撤销理由**: 见 §0 更正 —— 两处旧类双栏实测与 `.detail-split` 行为一致 (同 `--split-w` 35% + 可拖拽 + 已持久化), 迁移无收益且有移动端折叠回归风险。
- **B1/B2/B3 不做**: 两页模板与旧类名保持原样; 不为"单类族"做纯 churn 的 CSS 合并。
- **B4** 由 F1 实测覆盖 (拖拽 / 持久化已在日历页验证)。

### C. StockList 多选 (F3)
- **C1**: `StockList.vue` props 增 `selectable`(Boolean, default false) / `selected`(Array, default []); emits 增 `toggle-select`。
- **C2**: 模板 `selectable` 时行首渲染复选框 (`@click.stop` 派发 `toggle-select(item)`, 不触发 `select`); 虚拟 (`virtual` 分支) 与非虚拟两分支同步。
- **C3**: 既有 6 处调用不传 `selectable`, 行为不变 (回归冒烟守护)。

### D. 我的自选双栏 (F4)
- **D1**: `ai-page.js` watchlist 段 — 工具栏 / 搜索 / 排序 → 中栏顶部; 列表 → `qc-stock-list` (`virtual` + `selectable` + `copy-code` + `active-code`); 右栏 → `qc-stock-detail-dialog :embedded="true"`。
- **D2**: 行点击 — `detailSplitEnabled` 时 `showStockDetail(code)` 载入右栏; 否则沿用 `showStockKline` 弹窗 (保持 `detailDisplayMode` 双态语义)。
- **D3**: 实时报价 (现价 / 涨跌幅 / 量比 / 涨速 / 预警标记) 迁入 `name-suffix` 或 `actions` 插槽, **信息项不减少**。
- **D4**: 保留 `.swipe-reveal` 左滑删除与长按复制代码 (`data-copy-code`)。
- **D5**: 批量操作 (全选 / 评估选中 / 移除选中 / 清空 / 预加载K线) 接 `selectable` + `toggle-select`。

### E. 美林时钟双栏 (F5)
- **E1**: `merrill-detail.js` 加 `embedded` prop + 条件绑定 `:append-to-body="!embedded"` / `:modal="!embedded"` / `:show-close="!embedded"` / `:close-on-click-modal="!embedded"` / `:lock-scroll="!embedded"` + `:class="{ "qc-embedded-dialog": embedded }"` (逐字照 `stock-detail.js` L14/L18-20)。
- **E2**: `strategies-page.js` merrill 段 — 阶段卡 / 轮次列表 → 中栏 (双栏时竖排, 复用 `.market-grid.is-vertical` 同类做法); 右栏 → `qc-merrill-detail-dialog :embedded="true"`。
- **E3**: `detailSplitEnabled=false` 时保持原 2 列网格 + 弹窗。

### F. 重点跟踪双栏 (F6)
- **F1**: `focus-view.js` — 日期 / 时段 / 五档分布条 → 双栏之上; 档位分组列表 → 中栏 `qc-stock-list`; 右栏 → `qc-stock-detail-dialog :embedded="true"`。
- **F2**: 删除 `.focus-detail` 行内手风琴与行内「打开详情」按钮 (详情统一由右栏承载)。
- **F3**: 历史记录 + 效果块 → 双栏之下全宽 (按 C5-A)。
- **F4**: 档位分组头 (强烈推荐→观望) 在中栏内保留。

### G. 发布链
- **G1**: `backend/main_new.py` APP_VERSION 5.8.0 → 5.9.0 (按 C1; 版本门禁测试若断言旧值需同步)。
- **G2**: `cd frontend && ./node_modules/.bin/vite build` (**必须**); 确认 `dist/index.html` 与新 hash 资源入库。
- **G3**: 全量 pytest (`-m "not e2e"`, 门禁同 CI) + 前端一致性测试 + 硬编码色 grep。
- **G4**: 浏览器冒烟 0 pageerror — 浅色/深色 × 双栏/弹窗 × 3 新页 (自选/美林/重点跟踪) + 2 回迁页。
- **G5**: 重启双端加载新版本 (systemd 用户服务; 沙箱内若 `systemctl --user` 连不上总线, 用 D-Bus `org.freedesktop.systemd1.Manager.RestartUnit`)。
- **G6**: commit + `docs/HANDOVER.md` 更新。

### G-bis. 回滚与应急降级 (C7)
- **回滚边界**: 每批次一个独立 commit; 单批次出问题 `git revert` 该 commit 即可 (批次间无交叉依赖)。
- **全局应急降级 (不新增代码)**: 用户切「系统配置 → 详情展示模式 = 弹窗」(`detailDisplayMode=dialog`) → 全站立即回退弹窗, 绕过任一页双栏故障。
- **不做**: 按页 feature flag (`detailSplitPages` 白名单) 经 C7 决策不引入, 留 v5.20 评估。

## 2. 改动文件清单 (预估)

| 文件 | 改动 |
|---|---|
| `frontend/src/components/common/DetailSplit.vue` | 新建 (A1) ✅已完成 |
| `frontend/src/main.js` | 组件注册 (A1) ✅已完成 |
| `frontend/src/components/common/StockList.vue` | 多选扩展 (C1/C2) |
| `frontend/js/components/calendar-page.js` | 改用 `qc-detail-split` (A2) |
| `frontend/js/components/strategies-page.js` | ×3 改用组件 (A2) + 美林双栏 (E2) |
| `frontend/js/components/ai-page.js` | 自选双栏 (D) |
| `frontend/js/components/focus-view.js` | 重点跟踪双栏 (F) |
| `frontend/js/components/dialogs/merrill-detail.js` | `embedded` (E1) |
| `frontend/css/layout.css` | 自选/重点跟踪行样式 (D/F) |
| `frontend/dist/*` | Vite 重建产物 (G2) |
| `backend/main_new.py` | APP_VERSION (G1) |
| `docs/HANDOVER.md` | 更新 (G6) |

> ⚠️ **触碰 ~12 个文件, 远超项目「每任务改动 ≤3 文件」纪律** → 必须按 §3 分 5 批 commit, 每批独立验证。
> 批次1 实际改动: `DetailSplit.vue`(新增) + `main.js` + `calendar-page.js` + `strategies-page.js` + `dist/*`(重建) = 5 项。

## 3. 实施顺序与批次

| 批次 | 内容 | 风险 | 出口 |
|---|---|---|---|
| 批次1 | A (组件抽取, 4 处) — B 已撤销 | 低 (纯重构) | ✅ **已完成**: 4 页实测 cols=3 / pct=35 / divider+pane 齐备 / 拖拽+持久化 / 弹窗回退 / 0 pageerror |
| 批次2 | C (StockList 多选) + D (我的自选) | 高 (行信息密度) | 自选双栏可用 + 报价/滑删不丢 + 既有 6 处无回归 |
| 批次3 | E (美林时钟) | 低 (内容零新增) | 右栏常驻, 与弹窗内容一致 |
| 批次4 | F (重点跟踪) | 中 (信息架构调整) | 概览在上/列表在中/详情在右/聚合在下 |
| 批次5 | G (发布链 + 回滚预案) | 中 | 0 pageerror + 全量 pytest ≤ 基线 + dist 入库 |

## 4. 发布链
1. bump APP_VERSION 5.8.0 → 5.9.0
2. `vite build` 重建 dist (源码 + 产物双份入库)
3. 全量 pytest (`-m "not e2e"`) + 前端一致性测试 + 硬编码色 grep
4. 浏览器冒烟: 双栏/弹窗 × 浅色/深色 × 7 页, 0 pageerror
5. 重启双端, `/api/health` 校验版本 5.9.0
6. commit (本地 dev; push 待用户确认)

## 5. 风险与对策

| 风险 | 对策 |
|---|---|
| 自选行实时报价迁窄中栏丢失 | 报价进 `name-suffix`/`actions` 插槽并逐项比对改前改后 DOM |
| StockList 多选破坏既有调用 | `selectable` 默认 false; 前端一致性测试守护 |
| 美林阶段卡竖排可读性下降 | 双栏竖排 / 单栏网格 响应式分支 |
| 4 处重构回归 | ✅ 已完成: 逐页浏览器实测 (宽度/拖拽/弹窗回退) 全绿 |
| 未重建 dist | 发布链 H2 强制, 校验新 hash 入库 |
| 版本门禁测试断言旧版本号 | G1 同步 `test_v69x3_ui_opts` / `test_v69x4_ui_fixes` 等断言 |
| 既有 e2e 选择器失效 | 按 C8 同步更新为 `qc-stock-row` 等新选择器 (见 TEST-PLAN §4) |
