# DEV-PLAN v6.5：短线复盘数据修复与全站界面美化

> 版本：v6.5（草稿，待评审）
> 状态：待用户评审
> 前置：PRD-v6.5（本计划唯一需求来源）

---

## 0 基线

- 分支：本地（沿用 V6.4 工作区，未 push）
- 构建：`frontend/` 下 `npm run build`（Vite，dist 输出 `frontend/dist/`）
- 测试：`tests/`（pytest + 前端门禁）；已知 pre-existing `test_transition_tokens.py::test_transition_uses_tokens_or_standard`（V6.0 handover 有意设计冲突，**不属于本期回归范围，不触碰**）
- 后端：`main_new.py` 版本号 6.3.0 → 本期 bump **6.5.0**
- 运行环境：`.venv`，`requirements.txt` 含 `tushare>=1.4.0`、**不含 akshare**（F1 设计前提）
- 数据源：`.env` 已配 `TUSHARE_TOKEN` + `SXSC_TUSHARE_TOKEN`（龙虎榜 sxsc/tushare 源可用）

---

## 1 实施总原则

1. **后端容错先行**：F1/F2 是纯后端行为修正，先落地并加门禁，阻断性问题优先。
2. **emoji 替换以 AppIcon 白名单为唯一出口**：先扩白名单再替换，避免替换后 name 不匹配回退纯文本。
3. **静态位替换、动态文本保留**：降低侵入与回归风险。
4. 每里程碑结束跑对应门禁，最后统一构建 + 全量回归 + 提交。

---

## 2 里程碑与任务

### M0 后端容错：F1 概览兜底 + F2 龙虎榜透出

> 目标：修复阻断性加载失败；让龙虎榜降级原因可见。

| # | 任务 | 验收 |
|---|---|---|
| M0.1 | **F1 `_spot_pct_map` 降级**：`emotion_metrics.py` 的 `_spot_pct_map()` 内 `try/except Exception` 包裹 `import akshare` 与抓取，失败 `return {}` | 无 akshare 时 `_spot_pct_map` 返回 `{}` 不抛错 |
| M0.2 | **F1 `_overview_bundle` 兜底**：`shortterm.py` 的 `_overview_bundle()` 整体 `try/except`，异常时返回部分 bundle + `error` 标记 | `/overview` 恒 200，绝不 500 |
| M0.3 | **F2 后端透出**：`get_lhb` 保留 `lhb.fetch_lhb()` 原始返回，响应加 `available` / `reason`；缓存命中 `reason=None` | API 返回 `available`/`reason` 字段，缓存命中无残留 reason |
| M0.4 | **F2 前端提示条**：`shortterm-page.js` 增 `lhbReason` ref；模板表格上方条件渲染降级提示条（复用情绪指标降级样式）；空态文案区分「降级失败」vs「真无数据」；reason 折叠展示 | 全源失败时页面显示降级原因；真无数据时显示「暂无数据」 |
| M0.5 | **M0 门禁**：`tests/test_v65_m0_gates.py`（`_spot_pct_map` 缺 akshare 降级、`_overview_bundle` 兜底、`get_lhb` 字段、前端 `lhbReason` 分支） | 门禁通过 |

### M1 前端快速项：F3 搜索框窄宽 + F4 弹窗圆角 + F6 图标核对

> 目标：低风险视觉调整集中一批完成。

| # | 任务 | 验收 |
|---|---|---|
| M1.1 | **F3 搜索框固定窄宽**：`header.css` 的 `.qc-header-search` 改 `width:220px; max-width:220px`（去 `flex:1`） | 搜索框固定 220px，贴近铃铛；<768px 移动逻辑不变 |
| M1.2 | **F4 弹窗圆角实测**：浏览器检查 `.el-dialog.kline-dialog` 的 computed `border-radius` 与 overflow 来源 | 结论：标题区/头部为何直角剪裁 |
| M1.3 | **F4 修复**：`components.css` 弹窗容器补 `border-radius` + `overflow:hidden`（用 `--qc-radius-xl`）；`.detail-header` 圆角对齐容器；`index-detail.js` 弹窗同步 | 个股/指数弹窗顶部标题区+头部四角圆润、无剪裁 |
| M1.4 | **F6 缓存刷新**：前端构建加 `?v=` 版本参数（既有约定）；浏览器强刷走查系统配置 12 个二级菜单图标 | 强刷后图标正常区分；若异常记录截图 |
| M1.5 | **M1 门禁**：`tests/test_v65_m1_gates.py`（搜索框宽度 token、弹窗容器圆角/overflow token） | 门禁通过 |

### M2 全站 emoji 替换：F5（核心，工作量最大）

> 目标：统一图标体系，分两步（先白名单，后替换）。

| # | 任务 | 验收 |
|---|---|---|
| M2.1 | **AppIcon 白名单扩展**：`AppIcon.vue` 新增约 10-15 个 Lucide 图标（Brain/Lightbulb/OctagonX/Flag/Package/ClipboardList/CandleStick/Pin/RadioTower 等；复用已有 Zap/TrendingUp/BarChart3/Target/SearchCheck/User/Bot/Star/AlertTriangle/LineChart） | 新 name 均映射成功；未映射回退文本（既有行为） |
| M2.2 | **个股弹窗替换**：`stock-detail.js`（~27 处）静态模板 emoji → `<AppIcon name=.../>`，组件注册 AppIcon | 弹窗内无彩色 emoji，图标统一 |
| M2.3 | **指数弹窗替换**：`index-detail.js`（~6 处） | 同上 |
| M2.4 | **美林时钟/批量评估/向导替换**：`merrill-detail.js`（~10 处）、`batch-evaluate.js`、`setup-wizard.js` | 同上 |
| M2.5 | **页面组件替换**：`shortterm-page.js`（统计卡 📊🏦🔥 等）、`system-page.js`（📡 等） | 同上 |
| M2.6 | **M2 门禁**：`tests/test_v65_m2_icons.py`（扫描 `frontend/` 下 js/vue 文件静态模板残留 emoji 计数归零；AppIcon 白名单 name 均有效） | 静态渲染位 emoji 计数 = 0 |

### M3 构建 + 回归 + 发布

| # | 任务 | 验收 |
|---|---|---|
| M3.1 | 版本 bump：`main_new.py` `APP_VERSION = "6.5.0"` | `/api/health` version 6.5.0 |
| M3.2 | `npm run build` | 构建通过 |
| M3.3 | 全量回归：V6.5 门禁 + 既有 V6.x 门禁 + 前端相关用例 | 无新增失败（允许 pre-existing `test_transition_tokens`） |
| M3.4 | 浏览器走查（桌面 1440 + 移动 375）：概览正常、龙虎榜降级提示、搜索框窄宽、弹窗圆角、图标统一、系统配置图标 | 逐项截图存档 `dogfood-output/screenshots/` |
| M3.5 | 本地提交（不 push）：按 M0–M3 分次提交，消息含 v6.5 前缀 | `git log` 干净 |

---

## 3 涉及文件清单

| 文件 | 操作 |
|---|---|
| `backend/shortterm/emotion_metrics.py` | 改（`_spot_pct_map` try/except） |
| `backend/api/v1/shortterm.py` | 改（`_overview_bundle` 兜底、`get_lhb` 透出） |
| `frontend/js/components/shortterm-page.js` | 改（`lhbReason` + 降级提示条 + 统计卡 emoji） |
| `frontend/css/header.css` | 改（搜索框固定窄宽） |
| `frontend/css/components.css` / `themes.css` | 改（弹窗容器圆角/overflow、detail-header 对齐） |
| `frontend/src/components/common/AppIcon.vue` | 改（新增图标白名单） |
| `frontend/js/components/dialogs/stock-detail.js` / `index-detail.js` / `merrill-detail.js` / `batch-evaluate.js` / `setup-wizard.js` | 改（emoji 替换 + 注册 AppIcon） |
| `frontend/js/components/system-page.js` | 改（emoji 清理） |
| `frontend/index.html` 或构建配置 | 改（`?v=` 版本参数） |
| `backend/main_new.py` | 改（版本号 6.5.0） |
| `tests/test_v65_m0_gates.py` / `test_v65_m1_gates.py` / `test_v65_m2_icons.py` | **新增** |

## 4 不做的事（本期明确排除）

- 补装 akshare 依赖（R1：本期以代码层降级为准，不引入重依赖；是否补装 `[待确认]`）。
- 动态文本/ AI 生成内容中的 emoji 替换（仅静态渲染位）。
- 龙虎榜数据源本身可用性的运营修复（本期只做「降级原因可见」；源是否真正出数取决于 token 权限与数据可用性）。
- `test_transition_tokens.py` pre-existing 失败修复。
