# DEV-PLAN-v5.20: 评估历史 / 问股历史双栏

> 配套: PRD-v5.20.md / TEST-PLAN-v5.20.md
> 目标: 两页接入 `qc-detail-split` + 复用 `qc-stock-detail-dialog` 内嵌详情 + 窄栏行适配 + 多选批量保留
> 边界: 纯前端; 不改数据结构/接口/AI 逻辑

---

## 0. 技术现状 (勘察结论, 2026-09-20 实测)

- **页面位置**: `frontend/js/components/ai-page.js` — `history` (评估历史) L268-416; `chat_history` (问股历史) L417-548。
- **页面结构**: 批量操作工具栏 card (在最上) + 内容 card (card-title + 加载/离线/错误/空态 + 三视图切换按钮 + 分组列表)。
- **分组卡片**: `.date-group-card` > `.date-group-header` (复选框 `.history-checkbox` + 标题 + 条数 `.count-badge-sm` + `.group-toggle-arrow`) + `.date-group-records` (`v-if` 展开) > `qc-virtual-list.vlist-max-h-420 :row-height="72"` > `qc-history-record`。
- **行组件** `history-record.js` (`qc-history-record`): props `item` / `type` (history|chat) / `showDims` / `timeFormat`; 结构 = `[复选框][.history-content: .history-header(代码/名称/星标/已评估/已加载K线) + 评分徽章 | .history-footer(时间/来源/维度)][.history-actions 删除]`。
- **详情机制 (关键可行性发现)**: 行点击 `view()` → `state.viewAiResult(item)` (`watchlist.js` L1042) 或 `state.viewChatSession(session)` (`ai-chat.js` L163); 两者均设 `stockDetail` + `stockDetailVisible.value = true` + `stockDetailTab.value = ai | chat` → 渲染 `qc-stock-detail-dialog`。
- **全局弹窗互斥**: `index.html` L160 `<qc-stock-detail-dialog v-if="!detailSplitEnabled">` → 双栏时不渲染全局弹窗, 与页面内嵌实例互斥。**故无需新建详情组件, 也无需行点击分流**。
- **既有状态**: 多选 `selectedHistoryIds` / `selectedChatIds` + 分组头全选 (`toggleSelectDate` / `toggleSelectMonth` / `toggleSelectStock`, chat 侧同名加 Chat); 视图 `aiHistoryView` / `chatHistoryView` = date|month|stock; 展开 `expandedDates` / `expandedMonths` / `expandedStocks` (chat 侧同名加 Chat)。
- **虚拟列表高度**: `.vlist-max-h-420 { max-height: 420px; }` (组内滚动); `:row-height="72"` **固定行高** → 窄栏适配须落在 72px 内, 或按双栏态提高行高。
- **通用壳**: `DetailSplit.vue` (`qc-detail-split`), props `enabled` / `rootClass` / `listClass` / `paneClass`; 已用于 日历股票池 + 策略页 ×3 + 我的自选 + 美林时钟 + 重点跟踪 (共 7 处)。

## 1. 任务分解 (A-E)

### A. 双栏接入 — 评估历史 (F1)
- **A1**: `ai-page.js` history 段内容卡片的列表区包入 `qc-detail-split :enabled="detailSplitEnabled"`; `#list` = 三视图切换 + 三视图分组列表; `#pane` = `qc-stock-detail-dialog :embedded="true"`。
- **A2**: 三视图 (date / month / stock) 各自的分组卡片与内层虚拟列表**原样保留**在 `#list` 内 (该页 3 处包装)。
- **A3**: 行点击沿用既有 `view()` → `viewAiResult` — **无需分流**, 双栏/弹窗两模式共用。
- **A4**: 批量工具栏保留在双栏**之上全宽**。

### B. 双栏接入 — 问股历史 (F1)
- **B1-B4**: 同 A, 作用于 `chat_history` 段 (另 3 处包装); 行 `type="chat"` → `viewChatSession` (落 chat tab)。

### C. 自动载入首条 + 首组展开 (F2)
- **C1**: 新增 watch (镜像 `strategies-page.js` L1388-1417 的默认选中 watch 与 v5.19 美林 `merrill` 分支): computed 暴露 `sub` / `split` / 当前视图首组首条 / 右栏是否已有内容。
- **C2**: 双栏且右栏为空时: 自动展开首组 (`expandedDates` / `expandedMonths` / `expandedStocks`) 并调用 `view()` 载入首条。
- **C3**: **已有内容不覆盖** (避免与用户手动选中冲突)。

### D. 窄栏行适配 (F3)
- **D1**: 实测 35% 中栏下 `.ai-history-item` 的实际内容高度 (浏览器测量 scrollHeight vs `:row-height`)。
- **D2**: 若超 72px: 双栏态提高 row-height (与 v5.19 F4 自选页同法, 56→76)。
- **D3**: CSS 增 `.detail-split .ai-history-item` 适配 (两行布局 / 底部信息压缩 / 删除按钮收窄)。
- **D4**: **信息项不减** (代码/名称/评分/评级/时间/来源/维度/删除)。

### E. 发布链
- **E1**: APP_VERSION 5.9.0 → **5.10.0** (按 C1); 同步 2 处版本门禁断言 (`test_v69x3_ui_opts.py` / `test_v69x4_ui_fixes.py`)。
- **E2**: `vite build` 重建 dist (源码 + 产物双份入库)。
- **E3**: 全量 pytest + **ops 基线对照** (沿用 v5.19 方法, 确认净增 0)。
- **E4**: 浏览器冒烟 (双栏/弹窗 × 两页 × 三视图) 0 pageerror。
- **E5**: 双端重启 + `/api/health` 校验 5.10.0。
- **E6**: commit + `docs/HANDOVER.md` 更新。

## 2. 改动文件清单 (预估)

| 文件 | 改动 |
|---|---|
| `frontend/js/components/ai-page.js` | 两页双栏接入 (A/B) + 自动载入 (C) |
| `frontend/css/layout.css` | 窄栏行适配 (D3) |
| `frontend/css/themes.css` | 若 `.ai-history-item` 需双栏态覆盖 (D3) |
| `frontend/dist/*` | Vite 重建产物 (E2) |
| `backend/main_new.py` | APP_VERSION (E1) |
| `tests/test_v69x3_ui_opts.py` / `tests/test_v69x4_ui_fixes.py` | 版本断言同步 (E1) |
| `docs/HANDOVER.md` | 更新 (E6) |

> 改动面 ~7 项 (含 2 个测试), 在「每任务 ≤3 文件」纪律内可分 3 批完成。

## 3. 实施顺序与批次

| 批次 | 内容 | 风险 | 出口 |
|---|---|---|---|
| 批次1 | A + B 双栏接入 (纯包装) | 中 | ✅ **已完成 (2026-09-20)**: 两页 `cols=3/pct=35/divider+pane`; 展开首组后各行渲染 `nRows=2`; 点行→右栏正文有内容 + overlay `static`; **tab 正确** (评估历史→「评估结果」/ai, 问股历史→「AI 问股」/chat); 弹窗模式 `cols=1/pct=100`; 0 pageerror。注: 实际为 **4 处包装** (每页包住「视图切换 + 三视图」公共容器), 非预估 6 处 |
| 批次2 | C 自动载入首条+首组展开; D 窄栏行压缩 | 中 | ✅ **已完成 (2026-09-20)**: 未做任何手动操作即自动展开首组并载入右栏 (`nRows=2`, 右栏正文 188/97 字); 窄栏压缩后 `rowScrollH` 79/58 ≤ 槽位 96, **无溢出**, 内容宽 242→274px; 弹窗模式回退 `cols=1/pct=100/vrowH=72/padTop=16px` (压缩未误伤); 0 pageerror |
| 批次3 | E 发布链 | 低 | 0 pageerror + pytest 净增 0 + 5.10.0 双端 |

## 4. 发布链
1. bump APP_VERSION 5.9.0 → 5.10.0 + 同步版本门禁断言
2. `vite build` 重建 dist
3. 全量 pytest (`-m "not e2e"`) + ops 基线对照
4. 浏览器冒烟: 双栏/弹窗 × 两页 × 三视图, 0 pageerror
5. 重启双端, `/api/health` 校验 5.10.0
6. 推群晖 (GitHub 若仍不通) → ops `fetch synology + reset --hard` → 重启

## 5. 风险与对策

| 风险 | 对策 |
|---|---|
| 组内虚拟列表固定 row-height 与窄栏两行冲突 | 按 C4 提高双栏态 row-height; 改后实测 `scrollHeight` 是否溢出 |
| 6 处列表包装改造回归 | 逐视图 (日期/月/个股 × 2 页) 分别冒烟 |
| 自动载入与用户手动选中冲突 | 仅右栏为空时载入; 已有内容不覆盖 |
| 分组默认展开改变既有行为 | 仅双栏态自动展开首组; 弹窗态保持现状 |
| 未重建 dist | 发布链 E2 强制 + 校验新 hash 入库 |
| **既有缺陷 (本次测量发现, 非本次引入)**: 弹窗模式 (全宽) 下 `row-height=72` 装不下原始行 (padding 16×2 + header + margin-bottom 12 + footer ≈ 84px) → `.qc-vrow` 的 `overflow:hidden` 会裁切行底部 | 本次 D 的压缩规则作用域限 `.detail-split`, **未改变全宽渲染** (实测弹窗态 `padTop=16px`、`vrowH=72` 与改造前一致) → 该缺陷为**既有**。是否顺带修复 (全宽态 72 → 96) 需用户决定, 属超范围改动 |
| 版本门禁断言断言旧值 | E1 同步 2 处断言 (v5.19 已建立该惯例) |
