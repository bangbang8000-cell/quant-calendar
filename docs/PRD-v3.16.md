# 量化选股日历 v3.16 产品需求文档 (PRD)

> **文档版本**: v1.0 | **日期**: 2026-08-14 | **基线**: v3.15.1
> **配套文档**: 现状调研 → `UI-AUDIT-v3.15.1.md` | 开发计划 → `DEV-PLAN-v3.16.md`
> **更新规则**: 需求变更必须三文档同步；每版本完成后更新需求状态。

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-14 | - | 基于 v3.15.1 现状调研（`UI-AUDIT-v3.15.1.md`）创建 |

---

## 2. 战略背景

### 2.1 定位：体验打磨与系统完备化

v3.10~v3.15 已完成可靠性、UI/UX 提质、数据自动化、术语/主题、AI 厂商化、名称解析+SSE 等里程碑，前端已从"巨石单文件"演进为「基础模块 + 领域模块 + 页面/对话框组件」的分层架构。现状调研（`UI-AUDIT-v3.15.1.md`）显示：

- **功能完备但不可达**：8 个已实现配置功能（导入导出/保存全部/重置/AI 测试/飞书推送/数据同步）无 UI 入口，用户无法触达。
- **一致性欠账**：涨跌红绿语义不统一、对比度不达标、`confirm()` 混用、帮助面板与实现脱节。
- **无障碍欠账**：交互元素键盘不可达、aria 属性几乎为零、弹窗无 focus-trap、Markdown v-html 存在 XSS 面。
- **少量架构债务**：qcState 重复键、watch 拆分两处、K线下沉不彻底、主题三套实现、fetch 鉴权两套。

v3.16 **不做新业务功能**，专注**把已有能力补全可达 + 收敛一致性 + 补齐无障碍基线**，为 v4.0 开放平台打稳地基。v4.0（开放平台）顺延至 v3.16 之后。

### 2.2 版本主题与定位

| 版本 | 主题 | 定位 |
|------|------|------|
| v3.15 | 名称解析 + SSE + 智能评估 UI + 暗色走查 | 已完成 ✅ |
| **v3.16** | **体验打磨与系统完备化** | 本版本（配置完备化 + 架构收敛 + 一致性 + 无障碍 + 性能） |
| v4.0 | 开放平台 | API v2 + Webhook + 插件（顺延） |

### 2.3 六维度优先级

| 维度 | v3.16 侧重 |
|------|:--:|
| 可靠 | ★★★★（架构收敛、XSS 修复） |
| 好用 | ★★★★★（幽灵功能补全、无障碍、一致性） |
| 自动 | ★★ |
| 可运维 | ★★★（导入导出、重置、同步可达） |
| 智能 | ★★（AI 测试可达） |
| 开放 | ★ |

---

## 3. 功能需求

### FR-3.16.1 — 系统配置完备化（P0）

**现状**: 8 个已实现功能（`saveAllConfig` / `resetAllConfig` / `exportConfig` / `importConfig` / `testAiApi` / `saveFeishuConfig` / `testFeishuWebhook` / `syncStockData`）均无 UI 入口（见 `UI-AUDIT-v3.15.1.md` P0-1）。
**需求**:
1. 「系统配置 → status」增加**通用操作栏**：保存全部配置 / 重置全部配置 / 导出配置(JSON) / 导入配置(JSON，含 dry-run 完整性校验，校验失败拒绝)。
2. 「系统配置 → datasource」增加**数据同步按钮**（`syncStockData`）与数据源健康测试入口。
3. 「系统配置 → autoeval」增加**飞书推送配置表单**（Webhook URL + 测试发送按钮），复用 `saveFeishuConfig`/`testFeishuWebhook`。
4. AI 模型管理卡片增加**连接测试**（复用 `testAiApi`）。
**验收**: grep 确认 8 个函数均有 UI 引用；浏览器逐项实测通过；导入非法文件被拒绝且提示。
**文件**: `frontend/js/components/system-page.js`, `frontend/js/system.js`, 可能新增 `frontend/js/components/dialogs/import-config.js`

### FR-3.16.2 — 前端状态与架构收敛（P1）

**现状**: `qcState` 存在重复键（themes/currentTheme/currentUser 各 2-3 次）；`watch(currentPage)` 拆两处；K线实例生命周期耦合 app-logic；主题应用三套实现；fetch 鉴权两套；`js/calendar.js`、`js/strategies.js` 为 10 行空壳死代码。
**需求**:
1. 清理 qcState 重复键，收敛为单一导出清单（消除同名后者覆盖）。
2. 合并两处 `watch(currentPage)` 为统一副作用编排。
3. K线渲染与实例生命周期下沉 `charts.js`（app-logic 仅保留调用与状态）。
4. 主题应用合并为单一 `applyTheme`（以 `themes.js` 为权威，删除 app-logic/system.js 重复实现）。
5. fetch 鉴权统一走 `core.apiFetch`，移除 index.html 全局 monkey-patch 或改为委托给 apiFetch。
6. 删除空壳 `calendar.js`/`strategies.js`（index.html 移除加载）或承载真实域逻辑。
**验收**: qcState 无重复键（脚本断言）；watch 唯一；主题切换三入口行为一致；全量 pytest + 浏览器冒烟 0 pageerror。
**文件**: `frontend/js/app-logic.js`, `frontend/js/core.js`, `frontend/js/themes.js`, `frontend/js/charts.js`, `frontend/index.html`

### FR-3.16.3 — 行情语义与对比度治理（P1）

**现状**: 涨跌色在组件间不统一（`--color-up/down` 红涨绿跌 vs `--el-success/danger` 绿涨红跌）；`--text-tertiary:#999` 浅色下约 2.9:1 不达标；原生 `confirm()` 与 `ElMessageBox` 混用；快捷键帮助面板与实现脱节。
**需求**:
1. 令牌层新增 `--color-rise/--color-fall`（行情涨跌专用），全站统一"红涨绿跌"（charts 与组件共用），移除组件直接引用 `--el-success/danger` 表达涨跌。
2. 提升 `--text-tertiary` 至 ≥4.5:1（或降级仅用于装饰性内容），7 主题逐一验证。
3. `confirm()` 全部替换为 `ElMessageBox.confirm`。
4. 快捷键帮助面板与 `handleGlobalKeydown` 实际支持的快捷键同步（补 ←/→/↑/↓；R 对无操作页隐藏）。
**验收**: 涨跌色全站一致（grep 断言无组件直用 `--el-success/danger` 表达涨跌）；对比度 ≥4.5:1（脚本抽样）；帮助面板含 8 个快捷键。
**文件**: `frontend/css/tokens.css`, `frontend/css/themes.css`, `frontend/js/app-logic.js`, `frontend/js/users.js`, `frontend/js/ai.js`

### FR-3.16.4 — 无障碍与可访问性（P1）

**现状**: 用户菜单、日历状态 tab、自选 checkbox、行内 ⭐、menu-config 折叠区不可键盘聚焦；全项目仅 1 处 `role`；弹窗无显式 focus-trap；index-detail/stock-detail 的 `v-html` 注入模型内容存在 XSS 面。
**需求**:
1. 全局规则"所有 `@click` 元素必须可键盘聚焦"：上述元素补 `tabindex` + `role` + `aria-label`（图标按钮）/ `aria-current`（导航）/ `aria-expanded`（折叠）。
2. 弹窗统一 `aria-modal` + focus-trap（可复用轻量实现或 el-dialog 能力确认）。
3. `v-html` 渲染接入 sanitize（DOMPurify 或自研白名单），`renderMarkdown` 补链接/图片白名单处理。
**验收**: 键盘仅用 Tab/Enter 可完成：切页、开用户菜单切主题、状态筛选、收藏、折叠；aria 属性计数显著提升（脚本断言 ≥N 处）；`v-html` 注入恶意脚本被清洗。
**文件**: `frontend/js/components/global-header.js`, `calendar-page.js`, `ai-page.js`, `menu-config.js`, `watchlist.js`, `ai-chat.js`, `index-detail.js`, `stock-detail.js`

### FR-3.16.5 — 状态与列表全站收敛（P2）

**现状**: `qc-state-panel` 仅 3 处接入（empty/loading）；error/offline 态无页面使用，失败仅 toast；ai-page 评估历史/问股历史/自选列表未接虚拟滚动（常达数百条）。
**需求**:
1. ai-page 三列表（评估历史/问股历史/自选）接入 `qc-virtual-list`。
2. error/offline 态接入：关键列表请求失败展示统一错误面板 + 重试（复用 state-panel），替代纯 toast。
3. 骨架屏统一走 state-panel loading。
**验收**: 500+ 条历史列表滚动流畅；模拟请求失败出现统一错误态并可重试。
**文件**: `frontend/js/components/ai-page.js`, `frontend/js/components/state-panel.js`, `frontend/js/app-logic.js`

### FR-3.16.6 — 交互性能优化（P2）

**现状**: 池信号 `fetchPoolSignals` 逐只串行请求（池大卡顿）；问股历史 `loadChatHistory` 逐会话 N 次请求放大。
**需求**:
1. 池信号拉取改并发（限流并发 + AbortController 取消）。
2. 问股历史改惰性加载：展开会话时再拉详情，或后端一次返回。
3. 研究页 3 个"敬请期待"子页：对 guest 隐藏或加 roadmap 说明（不再裸占位）。
**验收**: 大池信号拉取明显提速且可取消；历史列表首屏无 N 连发请求。
**文件**: `frontend/js/ai.js`, `frontend/js/ai-chat.js`, `frontend/js/components/research-page.js`

### FR-3.16.7 — 视觉微调（P2）

**现状**: 登录页为 emoji+纯色卡片；模板 inline style 泛滥；ai-page 聚合视图大段重复；系统字体无品牌感。
**需求**:
1. 登录页品牌化升级（沿用现有令牌体系，突出产品定位，暗色适配）。
2. ai-page 按日期/月/股票三聚合视图模板抽取复用（消除 ~320 行重复）。
3. 治理 system-page/ai-page 高频 inline style，抽组件级 class（token 化）。
4. 数字/表格数据可选引入等宽字体增强可读性。
**验收**: 浏览器 7 主题下登录页/各页无回归；重复模板收敛（行数下降可测）；TC-11.9 令牌纪律保持绿。
**文件**: `frontend/index.html`, `frontend/js/components/ai-page.js`, `frontend/js/components/system-page.js`, `frontend/css/*.css`

### FR-3.16.8 — 质量护栏（质量）

**现状**: 无障碍/一致性无自动化回归测试。
**需求**:
1. 新增回归测试：qcState 无重复键、涨跌色语义一致、aria 关键属性存在、帮助面板与快捷键一致、v-html 白名单（纯逻辑可单测）。
2. 视觉回归基线更新至 v3.16（`tests/e2e/` 截图 diff 纳入新页面/新主题场景）。
**验收**: 全量 pytest ≥ 现状 323 用例 + 新增用例全绿；视觉回归报告无异常 diff。
**文件**: `tests/test_frontend_consistency.py`（新）, `tests/test_theme_walkthrough.py`, `tests/e2e/*`

---

## 4. 验收清单（v3.16）

- [ ] 8 个幽灵功能全部有 UI 入口且可用（grep + 浏览器逐项）
- [ ] qcState 无重复键；watch(currentPage) 唯一；主题单一实现；fetch 鉴权统一
- [ ] 涨跌色全站统一（红涨绿跌）；`--text-tertiary` 对比度 ≥4.5:1
- [ ] 关键交互元素键盘可达 + aria 补齐 + 弹窗 focus-trap；v-html sanitize 生效
- [ ] ai-page 三列表虚拟滚动；error/offline 统一错误态可重试
- [ ] 池信号并发、问股历史惰性加载
- [ ] 登录页品牌化 + 聚合模板去重 + inline style 治理
- [ ] 全量 pytest 全绿；视觉回归报告无异常；Git commit + tag `v3.16.0`；dev:8001/ops:8000 双端 `/api/health` = 3.16.0
