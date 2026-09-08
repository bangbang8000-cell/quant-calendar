# 量化选股日历 5.2.4 开发计划（DEV-PLAN 5.2.4 · 联动 · 风格统一 · 打磨）

- **文档版本**：v1.0（正式版，待审批）
- **日期**：2026-09-03
- **产品基线**：v5.2.3
- **配套**：PRD-v5.2.4.md | TEST-PLAN-v5.2.4.md

---

## 0. 方法论与纪律（沿用 5.2 系列）

- 每任务四步 TDD；提交 `v5.2 (5.2.4-N): ...`
- 改动纪律：每任务文件 ≤3、立即验证；前端冒烟 0 pageerror 为金标准
- 口径/令牌/4px 网格/无硬编码色 门禁不破
- 每版本：全量回归 + 门禁 → tag v5.2.4 → 双端同步 + 重启 + 冒烟

## 1. V5.2.4 任务分解（估 6-9 天）

### 1.1 联动（M1，1-3 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.2.41 | 短线 7 子页共享「交易日」状态（app-logic 提升为全局 currentShortDate，子页 date-picker 绑定同一 ref；顶部"回到最近交易日"） | `app-logic.js`、`shortterm-page.js` | 1d |
| T-5.2.42 | 个股弹窗深化：弹窗 footer 加「加入自选/跳日历/跳 AI 评估」入口（复用现有 detail 弹窗 slot 或事件总线） | `app-logic.js`、`index.html` | 1d |
| T-5.2.43 | 复盘联动：AI 研判活跃方向 chip → 跳板块资金且预选该板块（全局 selectedSector state）；市场复盘日期并入主日期 | `shortterm-page.js`、`research-page.js` | 1d |
| T-5.2.44 | 验证条件核验闭环：落盘条件加 `verified` 标记 + 次日核验端点 + 记分板展示 | `shortterm/verification.py`、`api/v1/shortterm.py`、前端条件卡 | 1d |
| T-5.2.45 | 梯队条形图点击 → 三池表格过滤（echarts click 事件 + ztFilter ref） | `shortterm-page.js` | 0.5d |
| T-5.2.46 | 复盘看板状态条（数据新鲜度：今日已收盘/盘中/未抓取；对接 latest_session + is_settled） | `shortterm-page.js`、后端 status 端点 | 0.5d |

### 1.2 风格统一（M2，3-5 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.2.47 | 市场复盘/异动扫描 套新基线（摘要条/着色/卡片化） | `research-page.js`、`layout.css` | 1d |
| T-5.2.48 | 量化研究/回测历史 套新基线（stat-icon 摘要/着色/分页） | `research-page.js` | 1d |
| T-5.2.49 | 统一页面头组件（标题/日期/筛选/刷新 布局 + 长页面包屑） | `index.html`、`app-logic.js`、CSS | 1d |
| T-5.2.50 | 空态/错误态全站巡检与统一（qc-state-panel 覆盖、引导动作、reason 透出） | 各 page 组件 | 1d |
| T-5.2.51 | 移动端 7+6 子页巡检（375px 溢出/触控） | 各 page + responsive.css | 0.5d |

### 1.3 打磨（M3，6-9 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.2.52 | /overview /emotion 服务端 TTL 缓存（store 落盘 + 新鲜度校验） | `api/v1/shortterm.py`、`shortterm/store.py` | 1d |
| T-5.2.53 | 竞态防护推广到 research-page / strategies-page | 两 page 的 load 函数 | 1d |
| T-5.2.54 | 长表分页/虚拟滚动（龙虎榜/板块资金/回测历史 >200 行） | `shortterm-page.js`、`research-page.js` | 1d |
| T-5.2.55 | 诚实性护栏 5.8 等未落测试补齐 | `tests/test_shortterm_honesty*.py` | 0.5d |
| T-5.2.56 | 无障碍/键盘巡检 | 各 page | 0.5d |

### 1.4 里程碑
- M1（1-3d）：联动 6 条（T-5.2.41~46）
- M2（3-5d）：风格统一 5 条（T-5.2.47~51）
- M3（6-9d）：打磨 5 条（T-5.2.52~56）

### 1.5 出口标准
全量测试绿（+~120 用例）+ 前端一致性/令牌/间距门禁 + 双端冒烟 0 pageerror + tag v5.2.4 + README/HANDOVER 同步。

## 2. 主要风险与缓解

| 风险 | 等级 | 缓解 |
|---|---|---|
| 全局日期状态改动影响 7 子页回归 | 中 | 任务内先抽公共 ref + 单测；全量回归兜底 |
| 老页面套新基线工作量大 | 中 | 只做视觉类不改数据逻辑；逐页验收 |
| 服务端缓存与"最新数据"冲突 | 中 | 新鲜度 TTL 明确（今日 10min / 历史日长）；刷新按钮强制绕过 |
| 弹窗跳转链路深 | 低 | 复用现有 navigateTo + detail 弹窗，逐条点击验收 |
