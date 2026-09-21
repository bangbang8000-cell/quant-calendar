# 量化选股日历 — 产品开发 PRD · 6.2.X 前端设计打磨线

- **版本**：6.2.X（前端设计系统打磨专项）
- **前置**：6.1.7 工程收尾已完成（全系列回归绿 + tag v6.1.7）
- **依据**：《EVAL-FRONTEND-DESIGN.md》评估报告（2026-09-21）
- **状态**：待评审

---

## 1. 背景与目标

6.1.X 完成功能与工程基座后，前端设计系统进入「存量打磨」阶段。评估显示：主题/颜色/密度等底层强项已达行业级，但**结构层（双轨类名、字体未落地、标尺未收敛）与表达层（字号/动效/弹窗/空态不一致）**造成页面观感分化和维护成本。

**版本目标**：在不破坏既有强项（主题系统、颜色治理、双栏模式、无障碍门禁）的前提下，完成前端设计系统的「结构收敛 + 表达统一 + 细节打磨」，使全部页面呈现**一致、舒适、美观**的使用体验。

**北极星判据**：
1. 全站任意页面截图在相同主题下视觉基调一致（字体/卡片/菜单/弹窗/空态五元素可互认）；
2. 新增页面可仅依赖设计标尺完成实现（不再出现第 6 种小节标题写法、第 11 种弹窗宽度）；
3. 既有视觉回归门禁（配色 14×36 契约 / DOM 审计 / 无内联样式 / 对比度）保持全绿。

---

## 2. 版本范围与批次

| 批次 | 主题 | 对应评估问题 | 估时 |
|---|---|---|---|
| 6.2.0 | 结构收敛：字体落地 + 类名收敛 + 标题层级 | S1/S2/S3/S4/S5 | 3-4 人日 |
| 6.2.1 | 表达统一：字号标尺 + 菜单一致 + 弹窗标尺 + **主题色扩展(F11)** | E1/E2/E3/E4 | 2.5-3.5 人日 |
| 6.2.2 | 动效与内联治理 + 打磨：空态/徽标/卡片 hover/工程债务 + **玻璃特效增强(F12)** | E5/E6/P1-P4 | 3-4 人日 |

**出口**：三批全量绿 + 双端冒烟 + tag v6.2.2（或 v6.2.X 单线推进）。

---

## 3. 需求项（TDD，每项含验收）

### F1 字体系统落地（6.2.0）
- **背景**：字体栈声明了 Inter 但未加载，跨平台回退不一致。
- **方案**：
  1. 自托管 Inter（woff2，Latin + 数字子集，`font-display:swap`），构建期打包或 `@font-face` 引入；
  2. 保留中文回退链 `'PingFang SC','Microsoft YaHei','Noto Sans SC'`；
  3. 数字/金融数据列强化 `font-variant-numeric: tabular-nums`（已具备，作为契约固化）。
- **验收**：
  - `index.html` 含 Inter `@font-face`/字体 link（静态门禁）；
  - 页面 `getComputedStyle` 主字体为 Inter（Node/Puppeteer 冒烟）；
  - 构建体积增量可接受（预算门禁 1.4MB 内）；
  - `prefers-reduced-motion` 无回归。

### F2 字号标尺补档 + 硬编码清零（6.2.1）
- **方案**：标尺补 `--qc-font-size-lg2:20px`（或收敛到 18/22）；将 `.qc-page-title` 20px、`.qc-kpi-value` 32px、ai-page 18px、`.non-trading-banner` 13px 等迁入 token。
- **验收**：`tests/test_typography_scale_620.py` 门禁：CSS/JS 模板内 `font-size:\s*\d+px` 硬编码为 0（`qc-allow-hardcode` 白名单除外）。

### F3 菜单一致化（6.2.1）
- **方案**：菜单项高度收敛（侧栏 40 / 子导航 36 / 顶部页签 40，取一套标尺并 token 化）；二级子菜单字号 13→14px；页签高度 36/40 统一。
- **验收**：导航相关尺寸全部走 `--qc-nav-*` token；静态门禁断言无硬编码高度/字号残留。

### F4 弹窗宽度标尺（6.2.1）
- **方案**：定义 `--qc-dialog-width-sm:440px / md:520px / lg:640px / xl:800px`；将 10 种零散宽度（400-800）映射到标尺；`95% + max-w-520` 非常规组合收敛。
- **验收**：全项目 `el-dialog` `width=` 仅允许标尺 token 或标尺值；门禁扫描零散宽度。

### F5 类名收敛 + 分区约定（6.2.0）
- **方案**：
  1. 引入 `page-section / page-section-title` 全局约定，替换 5 种小节标题写法（`section-title / section-title-base / health-section-title / usage-card-title / card-title` 在分区场景逐步收敛）；
  2. `responsive.css` V5 旧类（`.sidebar/.card/.card-grid/.mobile-nav`）迁移到 `.qc-*` 新类，统一断点（1280/1024/768/480），删除旧类分支。
- **验收**：
  - `tests/test_class_parity_620.py`：responsive.css 内 V5 旧类选择器清零；
  - 移动端/平板断点回归：三屏截图对比无样式回归（沿用 `test_e2e_screenshot_diff.py` 模式扩展）。

### F6 标题层级与无障碍结构（6.2.0）
- **方案**：业务页补 `<h1>` 页面标题（可视或 `visually-hidden`），详情弹窗标题改 `<h2>`；保证页内形成单一大纲。
- **验收**：`tests/test_heading_structure_620.py`：每业务页模板恰含一个 `<h1>`（或可视隐藏）+ 弹窗含 `<h2>`；现有 3 个详情弹窗 `<h3>` 迁为 `<h2>`。

### F7 动效治理（6.2.2）
- **方案**：补 `--duration-xs:100ms`；`qc-card-enter 0.35s→0.25s`、skeleton 1.5/1.6s→token、pulse 2s→token、spin 1s→token、stagger 对齐 50/100/150ms；修复 `animations.css` 截断并去重 components.css 重复块。
- **验收**：`tests/test_motion_scale_620.py`：`animation-duration/transition-duration` 硬编码时长清零；animations.css 可被解析器完整解析（括号配平断言）。

### F8 内联样式治理（6.2.2）
- **方案**：推广「语义函数返回类名」先例；服务端动态色收敛为 `data-*` 属性 + CSS 选择器（保留 `color-mix` 合成）；删除「非动态可类化」的内联 style。
- **验收**：每页内联 `:style` 计数 ≤ 阈值（服务端动态色白名单）；`tests/test_inline_style_audit_620.py` 巡检。

### F9 空态/徽标/卡片统一（6.2.2）
- **方案**：
  1. system 页约 10 处纯文本「暂无…」→ `qc-state-panel` 空态；
  2. 徽标收敛为三档：`qc-badge`（计数/角标）、`qc-chip`（状态/属性，迁移 `--badge-*` → `--state-*` 槽位）、`qc-stock-tag`（股票标签）；
  3. 卡片 hover 统一为「边框加深 + `--qc-shadow-sm` + translateY(-1px)」，去除 `-2px/0.35s` 偏离档。
- **验收**：空态巡检门禁扩展到 system 页；徽标三档静态门禁（无第 4 套新类）；卡片 hover 门禁统一。

### F10 工程债务（6.2.2）
- **方案**：SUB_ICONS 收敛为单一来源模块；退役旧 `sidebar.js`（确认无引用后删除）。
- **验收**：`grep` 确认旧 `sidebar.js` 无引用；图标映射仅一处定义。

### F11 主题色扩展（6.2.1，低风险快赢）
- **背景**：当前预设 6 色（金/红/绿/蓝/紫/粉）+ 中性；色相机制已支持任意 0-359，求解器自动保证对比度。
- **方案**：新增 3 预设——**青 Teal(180)**、**橙 Orange(25)**、**靛 Indigo(250)**；同步 `themeHues` / `themeHueNames` 两数组（[app-logic.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L580-L581)）；主题面板 swatch 由 `hueColor` 自动渲染（0 改动）；面板网格适配 10 档（3×4）。
- **验收**：
  - `tests/test_theme_presets_621.py`：`themeHues` 含 180/25/250 且名称映射齐全；
  - 14×36 配色门禁对 3 个新色相 × 明暗全绿（求解器自动达标，门禁复核）；
  - Header 主题面板 10 色块布局无溢出（截图冒烟）。

### F12 玻璃特效增强（6.2.2，分层执行守性能红线）
- **背景**：浮层仅 message/notification 有真 blur；结构层为类玻璃；暗色浮层为实底。实测结构层真 blur 滚动 55→14fps，禁止结构层引入。
- **方案**：
  1. **浮层（安全层）**：dialog / dropdown / popover / date-picker 统一 `backdrop-filter: blur(12px) saturate(140%)`，明暗各一套玻璃 token（`--glass-bg/-border/-shadow` 明暗档）；
  2. **结构层（零成本层）**：强化类玻璃——顶部 sheen 更明显 + `inset 0 1px` 边缘高光 + 阴影加深一档，不引入真 blur；
  3. **暗色模式**：浮层改半透明玻璃 + blur；
  4. **降级**：`prefers-reduced-motion` / 不支持 backdrop-filter 回退实底。
- **验收**：
  - `tests/test_glass_tokens_622.py`：明暗玻璃 token 对称契约（同表面角色契约）；
  - 浮层文字对比度 ≥4.6:1（求解器校验，纳入配色门禁）；
  - `prefers-reduced-motion` 下浮层回退实底（断言无 blur）；
  - 结构层无 `backdrop-filter`（静态门禁，守住 -75% 帧率红线）；滚动帧率冒烟 ≥45fps。

---

## 4. 不做的事（明确边界）

- 不重构主题系统、不更换品牌主色、不推翻 EP 桥（强项保留）。
- 不做全局视觉革命（不引入新设计语言/重排版）。
- 不改动 6.1.X 已冻结的功能行为（纯视觉/结构收敛）。

---

## 5. 测试与发布

### 5.1 回归基线（每个批次必过）
- `pytest -m "not e2e"` 全量 0 failed（新增用例计入规模）；
- 配色 14×36 契约 + DOM 审计 + 令牌/间距/排版/动效/无内联样式/版本纪律门禁全绿；
- 本 PRD 新增门禁：F2/F3/F4/F5/F6/F7/F8/F9 全部绿。

### 5.2 发布链
- `scripts/bump_version.py` 版本推进（6.2.0 → 6.2.1 → 6.2.2），HANDOVER/README 同步；
- 每批 `npm run build` 后提交（`[skip ci]`）；
- 终批打 tag `v6.2.2`，版本门禁 5 类来源一致。

---

## 6. 里程碑

| 里程碑 | 内容 | 出口判据 |
|---|---|---|
| M1 | 6.2.0 结构收敛 | 字体落地、类名收敛、标题层级、动画文件修复；新增门禁绿 |
| M2 | 6.2.1 表达统一 | 字号/菜单/弹窗标尺收敛；硬编码清零 |
| M3 | 6.2.2 打磨收尾 | 动效/内联/空态/徽标/卡片/债务；全系列回归 + 冒烟 + tag |

---

*本 PRD 为规划文档，未修改任何代码；待评审授权后按 TDD 逐项启动开发。*
