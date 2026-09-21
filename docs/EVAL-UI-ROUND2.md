# 评估 & 改进建议报告（第二轮）

**范围**：① 策略总览「回测工作台」入口及所在行 ② 美林时钟配色 / 时间轴与历史周期风格 ③ 按钮颜色过深 ④ 主题调色盘「红色打不了钩」 ⑤ 由上述需求牵引出的周边缺陷与隐患
**方法**：**纯代码分析 + 运行时实测**（未做截图识别，未改动任何代码）
**评估对象**：`quant-calendar-dev` @ `a659c6e`（V6.10.3），dev :8001 / ops :8000 均为该版本
**证据脚本**：`.tmp-qc/color-audit/probe_palette.py`（调色盘交互）、`probe_buttons.py`（按钮实渲染取色）、`probe_dark_elements.py`（深色填充扫描）+ `tests/color_gate.py`（令牌级对比度复算）

---

## 0. 结论摘要

| # | 需求 | 判定 | 根因定位（代码级） | 建议动作 | 风险 |
|---|---|---|---|---|---|
| 1 | 移除策略总览「回测工作台」快捷按钮**及所在行** | ✅ 可做，且不丢信息 | `frontend/js/components/strategies-page.js:15-21`（整行 `.qc-page-tools`） | 删除该行整块；清理 `.bt-entry-btn` 死样式 | 低 |
| 2 | 美林时钟配色与明暗/主题色配合 + 历史周期与本轮风格统一（文字在色轴内） | ✅ 问题属实，且比预期更系统 | 阶段色来自后端固定 Material 300 色（`#81C784/#FFB74D/#F48FB1/#64B5F6`），**与主题无关**；历史周期是「带内文字 + 带外 chip 行」双份信息 | 阶段带改「主题原生底 + 阶段色标识」；历史周期去掉带外 chip 行、带高统一 | 中（涉及 3 个页面区块） |
| 4 | 有些按钮颜色非常深 | ✅ 属实（亮色 4 个变体全部偏深） | 亮色下"白字 + 品牌色实底"必须压到 L≤42% 才达 AA；且 `--state-*-solid` 直接别名到**文字档** `--badge-*-text` | 缩小深实底使用面 + 新增浅底彩字档 | 中（视觉约定变更） |
| 5 | 主题调色盘红色点了不打钩（金色能打钩） | ✅ 已定位到唯一根因 | `src/components/Header.vue:126` — `(state.themeHue.value) \|\| 45` 把色相 **0 吞成 45** | 改为 `Number.isFinite` 判定 | 低 |
| 6 | 周边缺陷/隐患 | ✅ 新发现 **10 项**（含 1 项回归、2 项 P1） | 见 §5 | 见 §6 | — |

> **最重要的一条**：需求 5 的症状（"金色打钩、红色不打钩"）与代码缺陷完全吻合——头部面板把当前色相当成了金色 45，所以 ✓ 永远画在金色上；而系统配置页（基础配置）用的是另一种绑定，**没有**这个 bug（实测点红后 `active=红色 当前`）。这说明用户看到的是**头部主题面板**。

---

## 1. 需求 1：移除策略总览「回测工作台」快捷按钮及所在行

### 1.1 现状（代码）

`frontend/js/components/strategies-page.js:15-22`（策略总览子页首部）：

```html
<!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 (回测入口 + 交易日信息) -->
<div class="qc-page-tools">
    <button type="button" class="bt-entry-btn" @click="navigateTo('research', 'backtest')">回测工作台</button>
    <div class="flex-c-gap-12">
        <span class="text-base-secondary">{{ t('strategies.latestTradeDay') }}{{ dashboardData.latest_date || '-' }}</span>
        <span class="text-xs-tertiary" v-if="timeSinceRefresh">{{ timeSinceRefresh }}</span>
    </div>
</div>
```

即「所在行」= `.qc-page-tools` 这一整行，行内只有两件事：① 回测工作台入口按钮 ② 最新交易日 + 距今时间。

### 1.2 影响面分析

| 受影响对象 | 是否受影响 | 说明 |
|---|---|---|
| `.qc-page-tools` 样式（`layout.css:23`） | ❌ 不动 | 另有 **8 处**在用：`research-page.js:600`、`shortterm-page.js:60/173/240/276/316`、`calendar-page.js:22`、`strategies-page.js:496` |
| `.bt-entry-btn` 样式（`themes.css:4217-4231`） | ✅ 变死样式 | 全仓仅 `strategies-page.js:18` 一处使用 → 删除按钮后应一并清理 |
| `.bt-back-btn`（返回策略总览） | ❌ 保留 | `strategies-page.js:497`，在回测工作台内部，仍需要 |
| 「最新交易日」信息 | ✅ 不丢 | `today-hero-head` 已显示交易日与刷新时间（`strategies-page.js:29-32`：`todayText` + `today-hero-status`「已收盘」）；日历页亦有交易日期 |
| `timeSinceRefresh` computed（`stock-pool.js:158`） | ⚠️ 变无用 | 删除该行后模板中不再有消费点（仅 `stock-pool.js`/`app-logic.js` 的导出保留）→ 可停用其定时刷新以省一次 `setInterval` |

### 1.3 建议

1. 删除 `strategies-page.js:15-22` 整块（按钮 + 交易日信息行），保持策略总览首屏直接进入「今日一屏」。
2. 同步删除 `.bt-entry-btn` / `.bt-entry-btn:hover`（`themes.css:4217-4231`）。
3. 若认为「最新交易日」仍需突出，可把它并入 `today-hero-head` 右侧（现有 `today-hero-date` 已有日期与刷新时间，实测重复）。
4. 若 `timeSinceRefresh` 确认无其它消费点，停用其 `setInterval`（`stock-pool.js`），降低常驻定时器数量。

---

## 2. 需求 2：美林时钟配色 + 时间轴/历史周期风格统一

### 2.1 现状结构（代码）

| 区块 | 模板位置 | 容器 | 带高 | 文字位置 |
|---|---|---|---|---|
| 本轮演进（当前周期） | `strategies-page.js:298-316` | `.mc-band` | **32px** | 段内 `.mc-seg-name` / `.mc-seg-months` ✓ |
| 历史周期（周期带视图） | `strategies-page.js:328-348` | `.mc-band.mc-band-sm` | **24px** | 段内 `.mc-seg-name`（宽度 >12% 才显示）**外加** `.mc-times` chip 行（阶段名+起止+月数） |
| 阶段矩阵视图 | `strategies-page.js:352-372` | `.mc-mx` 表格 | — | 单元格 `.mc-mx-cell` |

样式集中在 `frontend/css/layout.css:1341-1376`。

### 2.2 配色实测（关键）

阶段色**不来自设计令牌**，而是后端 `/api/market/merrill-clock/stages` 下发的固定 Material 300 色：

| 阶段 | 色值 | 深字 #1f2937 | 白字 | 对**亮**卡片 | 对**暗**卡片 |
|---|---|---|---|---|---|
| 复苏期 | `#81C784` | 7.29 ✓ | 2.01 ✗ | **2.01** | 8.32 |
| 过热期 | `#FFB74D` | 8.48 ✓ | 1.73 ✗ | **1.73** | 9.67 |
| 滞胀期 | `#F48FB1` | 6.58 ✓ | 2.23 ✗ | **2.23** | 7.50 |
| 衰退期 | `#64B5F6` | 6.63 ✓ | 2.21 ✗ | **2.21** | 7.56 |

**结论**：
- 文字必须用深色（白字 1.73–2.23 不达标）——现有 `_chipFg()` 自适应方向正确。
- **亮色模式下**：阶段色块对白卡片仅 1.73–2.23:1 → 色带"糊"在卡片上，几乎无边界感。
- **暗色模式下**：阶段色块对暗卡片 7.50–9.67:1 → 一片高饱和浅色块浮在暖深色界面里，"跳"且**与主题色相完全无关**——这正是"界面色彩与深浅/主题色配合"不达标的根因。

### 2.3 风格不一致（"严谨风格"落差）

1. **双份信息**：历史周期同时渲染「带内 `.mc-seg-name`」与「带外 `.mc-times` chip（名称+起止+月数）」，而本轮演进只有带内文字 → 两者观感不同（用户诉求：历史周期向本轮看齐）。
2. **带高不一致**：本轮 32px vs 历史 24px；24px 内塞 12px 文字 + 可选月数，行内拥挤。
3. **文字丢失**：历史段 `v-if="g.width > 12"` 才显示名称、>17% 才显示月数 → 窄段只剩色块（无文字），与"文字在颜色轴里面"的诉求冲突（虽有 `title` 兜底）。
4. **选中/交互态**：`.mc-seg.is-cur` 用 `inset 0 0 0 4px var(--color-primary)`；`.mc-hist-head` 的 `el-radio-group` 选中态是**深金实底**（见需求 4），在历史周期这种"数据展示"区域显得过重。
5. **旧时间轴残留**：`.tl-*`（旧「历史周期时间轴」）已被 `.mc-*` 取代，但 CSS 与 JS 仍在仓（见 §5 R2-06）。

### 2.4 建议方案（推荐 A + C 组合）

**A. 阶段带改「主题原生底 + 阶段色标识」**（一次解决亮/暗两侧的观感问题）
- 段填充：`color-mix(in srgb, <阶段色> 22%, var(--surface-card))`
- 段文字：`var(--text-primary)`（亮/暗自动达标，实测暗色下 ≥13:1）
- 语义标识：段左侧 3px 阶段色条（或段内 6px 色点），保证阶段身份仍可辨
- 预测段（ghost）：保持现在的 27% 斜纹 + `--text-primary`
- 好处：自动随 6 色相 + 明暗联动；不再出现"亮色发糊 / 暗色刺眼"；后端色值仍作为身份来源，不需要改后端契约

**B. 备选（改动更小）**：按模式给透明度 —— 亮色 `<阶段色> 100% + 深字 + 1px 深描边`；暗色 `<阶段色> 45% + --text-primary`。观感改善但仍是"数据色主导"，与主题色相联动弱。

**C. 历史周期与本轮风格统一**
- 删除 `.mc-times` 外置 chip 行；把 `名称 + 月数` 收进段内（与本轮一致），段内空间不足时仅显示色块 + `title`（已实现 `mcSegTitle`）。
- `.mc-band-sm` 24px → **28px**（或与本轮统一 32px，历史行数多时取 28px 折中），保证 12px 文字 + 月数不拥挤。
- 历史行左侧 `.mc-hlab`（轮次 + 年份）保留 —— 它是"行标签"而非重复信息。
- 阶段矩阵 `.mc-mx`：`.mc-mx-cell` 当前用 `opacity: 0.45 + 0.55p` 叠阶段色，暗色下会与卡片底混浊 → 同样建议改 `color-mix(<阶段色> 20~60%, var(--surface-card))` + `--text-primary`。

**D. 顺带**：`.mc-hist-head` 的视图切换（周期带/阶段矩阵）建议用**轻量分段控件**（浅底 + 主色文字）替代当前深实底，避免在数据区出现重色块（与需求 4 一并处理）。

---

## 3. 需求 4：按钮颜色过深（评估）

### 3.1 实测（dev :8001，金主题，真实渲染取色）

| 模式 | 按钮 | 背景 | 文字 | 对比度 | 观感 |
|---|---|---|---|---|---|
| 亮色 | 主按钮（运行回测/用户列表/立即备份） | `rgb(145,112,16)` = hsl(45,80%,32%) | #fff | 4.64 | **深金褐，很重** |
| 亮色 | 警告（重置密码） | `rgb(180,83,9)` = #b45309 (L37%) | #f9f8f6 | 4.73 | **深棕** |
| 亮色 | 危险（删除） | `rgb(185,28,28)` = #b91c1c (L42%) | #f9f8f6 | 6.10 | **深红** |
| 亮色 | 默认（分组配置/刷新列表） | `#ffffff` | #5b5648 | 7.32 | 正常 |
| 亮色 | 分段控件选中（内嵌双栏/周期带） | `rgb(145,112,16)` 同主按钮 | #fff | 4.64 | **很重** |
| 亮色 | 用户头像 `qc-user-avatar` | `rgb(145,112,16)` | #fff | 4.64 | 很重 |
| 暗色 | 主按钮 | `rgb(242,204,90)` | #101014 | 12.26 | 正常（浅底深字） |
| 暗色 | 警告/危险 | `#fbbf24` / `#f87171` | 深字 | 10.94 / 6.60 | 正常 |

**结论：只有亮色模式偏深**，暗色模式是"浅底 + 深字"，观感明显更好。

### 3.2 根因（代码级）

1. **AA 约束**：亮色下按钮普遍用白字，白字要达 4.5:1 → 实底必须压到 L≤42%；而品牌金是亮色系 → 只能变成 hsl(45,80%,32%) 的深金褐。这不是失误，是"白字 + 品牌色"约定的必然结果。
2. **语义按钮把"文字档"当"实底"用**：
   - `frontend/css/tokens.css`：`--state-success-solid: var(--badge-success-text)`、`--state-danger-solid: var(--badge-danger-text)` …
   - `frontend/css/components.css:169+`：`.el-button--danger/success/warning/info` 用上述 solid 作 `--el-button-bg-color`
   - `frontend/css/themes.css:4845-4850`：另有更旧的 `.el-button--success:not(...) { background-color: var(--success-text) !important }` 直接写属性 → **两套规则并存，且旧规则因 `!important` 胜出**（实测 warning 取到 `#b45309` = `--warning-text`）
   - 文字档本来就是给"浅底上的文字"设计的深色 → 拿来当底自然很深。
3. **`--primary-solid` 语义过载**：同一个令牌同时服务主按钮、头像、分段控件、入口按钮 → 深色块在界面上反复出现（实测 4 个页面各 2 处）。

### 3.3 方案对比（含实测）

| 方案 | 亮色观感 | 对比度 | 满足 AA | 代价 / 风险 |
|---|---|---|---|---|
| **A. 语义按钮改「浅底彩字」**（`tint` 底 + `text` 字 + `border`） | 轻 | 4.84–6.81 ✓ | ✓ | 弱化"实底"强调感；需统一 4 个变体样式 |
| **B. 实底改「中调 + 深字」**（对齐暗色约定） | 轻 | ≥6 ✓ | ✓ | 打破亮色"白字实底"惯例，需你确认设计取向 |
| **C. 保留深实底，但缩小使用面**（仅破坏性操作 + 唯一主 CTA） | 局部仍深 | ✓ | ✓ | 需把头像/分段控件/入口按钮改为浅底 |
| D. 抬高 L 到 45–50% + 白字 | 中 | 3.0–4.0 ✗ | ✗ | 不可取（14px 白字不达 AA） |

**推荐：C 为主 + A 为辅**
1. `.qc-user-avatar`、`.el-radio-button__inner`（分段选中）、入口类按钮 → 改浅底彩字（`--qc-primary-100` 底 + `--primary-text` 字，实测 ≥4.54:1）。
2. 语义按钮（成功/警告/信息）默认走方案 A；**危险**与**唯一主 CTA** 保留深实底（破坏性操作需要分量）。
3. 令牌层拆分，消除语义过载：`--brand-solid`（实底）/ `--brand-soft`（浅底彩字），`--state-*-soft` 同理；`--primary-solid` 退化为 `--brand-solid` 的别名。
4. 清理 `themes.css:4845-4850` 的 `!important` 直写规则，统一由 `components.css` 的变量驱动（消除双源）。

---

## 4. 需求 5：主题调色盘「红色打不了钩」— 根因已确定

### 4.1 根因（唯一，代码级）

`frontend/src/components/Header.vue:126`：

```js
const themeHue = computed(() => (state.themeHue && state.themeHue.value) || 45)
```

色相 **0（红色）是合法值但为 falsy** → `0 || 45 === 45`。于是头部主题面板认为"当前色相 = 45（金色）"：

- `:class="{ 'is-active': themeHue === h }"` → 只有金色 `is-active`
- `<span v-if="themeHue === h" class="qc-theme-swatch-check">✓</span>` → **✓ 永远画在金色上**
- `<el-slider :model-value="themeHue">` 与「自定义 {{ themeHue }}°」→ 也显示 45

这与用户描述**完全一致**："红色点了无法打钩（点了金色打钩）"。

### 4.2 对照验证（实测）

- **头部面板**（`Header.vue`）：受影响 → 红色无 ✓。
- **系统配置 → 基础配置**（`system-page.js:876-880`，用 `themeHue === h` + "当前"文字，绑定的是 `state.themeHue` ref 本身）：实测点击红色后 `active=['红色 当前']`、`localStorage.theme_hue=0`、`--primary-color=hsl(0,75%,52.8%)` → **正常**。
  → 说明 bug 只在前端 `computed` 的 falsy 兜底，不在主题引擎。

### 4.3 修复建议

```js
// Header.vue:126
const themeHue = computed(() => {
  const v = state.themeHue && state.themeHue.value
  return Number.isFinite(v) ? v : 45          // 0 与 -1(中性) 都保留
})
```
同一处还需检查 `themeMode`/`density`（字符串，无 falsy 风险）。全仓 `grep "|| 45"` **仅此一处**。

---

## 5. 周边缺陷与隐患（本轮新发现，代码级）

| ID | 级别 | 问题 | 位置 | 影响 | 建议 |
|---|---|---|---|---|---|
| **R2-01** | **P1** | **服务端偏好部分/整体失效**：`PREFERENCE_VALUES['theme_hue']` 未定义 → `undefined.indexOf(...)` 抛 `TypeError` → `forEach` 在 `theme_hue` 处中断并被外层 `catch` 静默吞掉 → **`theme_hue` 及其之后的所有键（chart_period / language / info_density / kline_show_minutes）都不会从后端恢复**，仅排在它前面的 `default_view`/`theme` 侥幸生效（Node 实测见 §5.1） | `frontend/js/preferences.js:161`（`loadPreferences`） | 换浏览器/清缓存后主题色相、图表周期、界面语言、信息密度全部回默认；用户会以为"设置没保存" | 按 key 分流：`theme_hue` 走 `_validThemeHue`，其余走白名单；并让异常不被静默吞掉（至少 `console.warn`） |
| **R2-02** | **P1** | **「中性无色相」档无法持久化**（我在 C 批引入的回归）：`_validThemeHue` 要求 `v >= 0`，`-1` 被 `isValidValue` 过滤 → 点中性后 `localStorage.theme_hue` 仍是 45，刷新回退金色 | `frontend/js/preferences.js:39` | 中性主题"看起来能选、实际不保存" | 允许 `-1`：`v === -1 \|\| (v >= 0 && v <= 360)` |
| **R2-03** | **P1** | 头部主题面板色相/勾选错误（= 需求 5） | `src/components/Header.vue:126` | 用户无法确认当前主题色 | 见 §4.3 |
| R2-04 | P2 | 头部面板 fallback 色板**缺少「中性」档**：`(state.themeHues) \|\| [45,220,0,140,270,320]`（6 项，无 -1），与 `app-logic` 的 7 项不一致；`hueName` fallback 只返回 `String(h)` | `src/components/Header.vue:125,137` | state 不可用时中性档消失、名称显示为数字 | 与 `themes.NEUTRAL_HUE` / `themeHueNames` 对齐 |
| R2-05 | P2 | 语义按钮「文字档当实底」+ **双源规则并存**（`components.css` 变量 vs `themes.css:4845-4850` `!important` 直写） | 见 §3.2 | 按钮颜色由"谁 !important 谁赢"决定，后续调色易失效 | 统一到 `--state-*-solid`/`--state-*-soft` 变量，删除直写规则 |
| R2-06 | P2 | **旧时间轴死代码**：`layout.css` 中 `.tl-*`/`merrill-timeline` 规则 **66 条约 10.6KB**；`strategies-page.js:1115-1200` 约 100 行历史连线测量逻辑（已被 `if (!document.querySelector('.merrill-timeline-block')) return` 短路，且 body 级 `MutationObserver` 不会启动） | `css/layout.css`、`js/components/strategies-page.js` | 体积/维护成本；类名冲突风险 | 删除死 CSS 与死 JS；**务必保留 `.merrill-timeline-empty`**（模板 `strategies-page.js:372-373` 仍在用） |
| R2-07 | P2 | 阶段色不随主题（= 需求 2 根因） | 后端 stages 配置 + `strategies-page.js:1571-1581` | 明暗/色相配合不达标 | 见 §2.4 |
| R2-08 | P3 | `.mc-band-sm` 24px + 12px 文字拥挤；宽度阈值（>9%/>12%/>17%）导致窄段无文字 | `layout.css:1346`、`strategies-page.js:307,336` | 信息丢失（仅 tooltip 兜底） | 带高统一 + 窄段保留色块与 tooltip |
| R2-09 | P3 | `--primary-solid` 语义过载（主按钮/头像/分段控件/入口按钮共用同一令牌） | `tokens.css` / `themes.js` | 一处调整影响多处 | 拆分 `--brand-solid` / `--brand-soft` |
| R2-10 | P3 | 需求 1 实施后 `.bt-entry-btn` 成死样式；`timeSinceRefresh` 无模板消费点 | `themes.css:4217-4231`、`stock-pool.js:158` | 死代码/常驻定时器 | 随需求 1 一并清理 |

> 附：R2-01/R2-02 都属于"**偏好链路**"，建议合并为一次修复 + 新增门禁（见 §6 批次 2）。

### 5.1 R2-01 实测复现（Node 直跑 `preferences.js`）

```bash
cd frontend && node -e "
global.localStorage={_d:{quant_token:'t'},getItem(k){return this._d[k]||null},setItem(k,v){this._d[k]=v}};
global.fetch=async()=>({ok:true,json:async()=>({success:true,preferences:{
  default_view:'calendar',theme:'dark',theme_hue:0,chart_period:'weekly',
  language:'en',info_density:'compact',kline_show_minutes:'show'}})});
require('./js/preferences.js').loadPreferences().then(m=>console.log(JSON.stringify({
  default_view:m.default_view,theme:m.theme,theme_hue:m.theme_hue,chart_period:m.chart_period,
  language:m.language,info_density:m.info_density})));
"
```

实测输出（服务端下发的值与最终合并结果对比）：

| 键 | 服务端下发 | 实际生效 | 说明 |
|---|---|---|---|
| default_view | calendar | **calendar** ✓ | 在 theme_hue 之前，侥幸通过 |
| theme | dark | **dark** ✓ | 同上 |
| theme_hue | 0 | **45** ✗ | `PREFERENCE_VALUES['theme_hue']` 为 undefined → 抛错点 |
| chart_period | weekly | daily ✗ | 排在后面，循环已中断 |
| language | en | zh-CN ✗ | 同上 |
| info_density | compact | comfortable ✗ | 同上 |

→ 该缺陷不只影响主题，还影响**界面语言与信息密度**，属隐蔽的用户可见问题。

---

## 6. 改进建议与实施计划（待批准后执行）

### 批次 1（低风险，需求 1 + 5 + R2-10）
- `strategies-page.js`：删除策略总览 `.qc-page-tools` 整行（回测工作台按钮 + 交易日信息）
- `themes.css`：删除 `.bt-entry-btn` 规则
- `Header.vue:126`：falsy-zero 修复（`Number.isFinite`）
- 清理 `timeSinceRefresh` 定时刷新（若确认无其它消费点）
- **验收**：策略总览首屏无该行、无布局塌陷；头部面板点红色 ✓ 立即落在红色、点中性亦然；`--primary-color` 与面板一致

### 批次 2（偏好链路，R2-01/02/04）
- `preferences.js`：`loadPreferences` 按 key 分流；`_validThemeHue` 允许 `-1`
- `Header.vue`：色板 fallback 与 `themeHueNames` 对齐
- **门禁新增**：`tests/test_preferences_theme_hue.py` —— 覆盖 ①色相 0 可存取 ②中性 -1 可存取 ③后端偏好合并不抛异常
- **验收**：点红/中性 → 刷新 → 仍是红/中性；`localStorage.theme_hue` 与 `/api/user_config/preferences` 一致

### 批次 3（美林时钟，需求 2）
- `strategies-page.js`：历史周期去掉 `.mc-times` chip 行；段文字统一走带内（含月数）
- `layout.css`：`.mc-band-sm` 24 → 28px；`.mc-seg` 填充改 `color-mix(阶段色 22%, var(--surface-card))` + `--text-primary`；`.mc-mx-cell` 同步
- 视图切换（周期带/阶段矩阵）改浅底分段样式
- 删除 `.tl-*` 死 CSS 与死 JS（保留 `.merrill-timeline-empty`）
- **验收**：4 个阶段 × 明/暗两模式肉眼复核（截图存档）+ 新增门禁断言：阶段带内文字对「合成底色」≥4.5:1（把阶段色合成公式写进 `tests/color_gate.py`）

### 批次 4（按钮配色，需求 4）
- 令牌层：新增 `--brand-soft`、`--state-*-soft`；`--primary-solid` 别名化
- `components.css`：语义按钮默认浅底彩字；危险/主 CTA 保留实底
- 头像 / 分段控件 / 入口按钮改浅底彩字
- 删除 `themes.css:4845-4850` 的 `!important` 直写规则
- **验收**：§4.5 契约扩展「soft 变体」断言；截图复核亮色观感；确认深实底出现次数 ≤2 处/页

> 每批次独立提交 + 独立实测（沿用既有流程：`pytest tests/ -m "not e2e"` 全绿 + `tests/e2e/color_audit.py` 14 套 0 失败 + 关键页面截图存档）。

---

## 7. 复现方式（本次评估全部可重跑）

```bash
# 1) 调色盘交互（红色/中性勾选与持久化）
/home/evergreen/dsh-workspace/.pwenv/bin/python .tmp-qc/color-audit/probe_palette.py
#    → 头部面板需人工打开；脚本默认走 #system/feature（基础配置），实测其行为正确性

# 2) 按钮实渲染取色（明/暗 × 多页面）
/home/evergreen/dsh-workspace/.pwenv/bin/python .tmp-qc/color-audit/probe_buttons.py

# 3) 深色填充扫描（"过深"的元素清单）
/home/evergreen/dsh-workspace/.pwenv/bin/python .tmp-qc/color-audit/probe_dark_elements.py

# 4) 令牌级复算（阶段色/按钮底/对比度）
cd quant-calendar-dev && python3 - <<'PY'
import sys; sys.path.insert(0,'tests'); import color_gate as g
print(g.color("light",45,"--btn-primary-bg"), g.pair("light",45,"--btn-primary-color","--btn-primary-bg"))
PY

# 5) 回归门禁（现状全绿，改完需保持）
python3 -m pytest tests/ -q -m "not e2e"
```

*本报告仅做分析与建议，未修改任何代码；请审阅后确认执行范围（可按批次批准）。*
