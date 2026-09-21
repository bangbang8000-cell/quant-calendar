# 配色体系专项评估报告 — 主题 / 浅色 / 深色

- **评估对象**：quant-calendar（量化日历）前端配色体系
  - 源码：`quant-calendar-dev` HEAD `b828e8d`（V5.12.2）
  - 实测实例：http://127.0.0.1:8001（dev，服务端直接挂载 `frontend/`，CSS 与源码逐字节一致）
  - 对照实例：http://127.0.0.1:8000（ops；`frontend/css` 与 dev 完全一致，`diff -rq` 无差异）
- **评估方式**：**静态 token 审计 + 真实浏览器渲染测量**（主页面集：12 套主题配置 × 6 个页面 × 每配置 520–521 个文本节点；补充页面集：2 配置 × 5 页面 × 429–545 个文本节点），非主观印象
- **实测脚本与原始数据**：`/home/evergreen/dsh-workspace/.tmp-qc/color-audit/`
  （`audit_v2.py` `audit_v3.py` `matrix.py` `matrix2.py` `ep_probe.py` `ep_semantic.py` `static.py` `evidence.py`；结果 `tokens.json` `dom_v2.json` `dom_v3.json` `ep_probe.json`；截图 `evidence/`）
- **覆盖矩阵**：模式 light/dark × 色相 45 金 / 220 蓝 / 0 红 / 140 绿 / 270 紫 / 320 粉 = 12 套；页面 `#strategies/overview` `#calendar` `#ai/focus` `#strategies/merrill` `#system/config` `#ops/status` `#watchlist` `#research/backtest` `#system/user` `#ai/overview` `#shortterm/market-review` + 登录页；另含浮层（ElMessage / el-select 下拉 / 日期区间 / 对话框）

---

## 0. 结论摘要

**一句话结论：token 基建与大面积配色已经达到中上水平（文本对比度基本清零），但深色模式仍是"浅色主题的补丁"而非独立设计——残留的海军蓝硬编码面与 Element Plus 的浅色默认值，共同构成了当前所有深色问题的根因；同时同一语义色存在三套并行定义，使"语义一致性"名存实亡。**

### 0.1 做得好的部分（本次实测确认，改进时不要破坏）

| 项 | 实测证据 |
|---|---|
| 运行期唯一权威 | `applyTheme(mode, hue)` 单一入口，明/暗 + 6 色相，切换时清理上一轮内联残留（`_appliedKeys`） |
| 对比度求解器 | `_lumL`（感知亮度归一）/ `_gradL`（渐变最亮档反解）/ `_panelL`（浅色面板）/ `_neutralRamp`（中性族随色相），4 个求解器覆盖了绝大多数风险面 |
| 文本对比度 | 6 页面 × 12 配置共 6,241 个文本节点，**低于 AA 的仅 0–6 处/配置**（前序 V5.31 提交记录：全站文本对比度 223 → 0） |
| 渐变承载文字 | 亮色激活页签/持仓天数/编号徽标等由 3.60:1 提升到 **4.52–4.66:1**，全部达标 |
| 画布中性化 | `body` 已从品牌渐变改为中性画布（实测 `rgb(251,250,249)`），主色不再铺满视口 |
| 登录页 | 明/暗两模式各 0 处低于 AA（旧版为整屏品牌色） |
| 主题切换动效 | 颜色/边框/阴影统一 0.2s 过渡，换主题不突兀 |

### 0.2 评分卡（满分 10）

| 维度 | 评分 | 关键实测证据 |
|---|---|---|
| 色彩架构与 token 分层 | **8.0** | 三层 token + 运行期求解器；但 CSS 与运行期双源覆盖 44 个 token |
| 浅色模式配色 | **7.0** | 520 文本节点 0–1 处低于 AA；`--text-link` 未走求解器（金 3.27 / 绿 2.93） |
| 深色模式配色 | **5.0** | 同屏两套深色面（`#1f1e19` 暖中性 vs `#101a2e` 海军蓝）；EP 基础色未随动；`.el-range-separator` 实测 **1.28:1** |
| 语义色一致性 | **4.5** | 同一语义三套并行且取值不同：成功 = `#16a34a` / `#4ade80` / `#64ffda`（深色） |
| 可达性（WCAG AA） | **6.5** | 文本达标率高，但焦点环 1.67–1.80:1、控件边界 1.84–2.15:1、EP 消息 2.04–2.80:1 |
| 多色相一致性 | **7.5** | 6 色相文本全部达标；但深色面/图表底色不随色相，游离子系统 |
| 图表配色 | **5.0** | 分类色板 = 同一色相 6 个档位；暗色画布 `#101a2e` ≠ 卡片色；涨跌填充不随模式 |
| 工程可维护性 | **5.5** | 330 定义 / 235 引用 / **98 死 token** / **44 双源** / **420 处硬编码色** / 明暗不对称 12 个 / **2 个配色门禁测试已失效** |
| **综合** | **6.3** | 方向正确、基建领先，缺"深色独立设计 + 语义收敛 + 门禁修复"三件事 |

---

## 1. 当前配色架构（评估基线）

```
Layer 1 原始色阶   tokens.css :root（品牌金阶 / 暖中性 8 档 / 状态色 / 市场色）
                   ↓ 运行期由 themes.js 覆盖色相相关项
Layer 2 语义别名   --qc-background/foreground/card/border/ring… + 遗留 --bg-*/--text-*/--border-*
Layer 3 组件 token --el-* 映射、--btn-primary-*、--qc-nav-*、--gradient*、--glass-*、--chart-*
```

- 运行期入口：`frontend/js/themes.js` `applyTheme(mode, hue)` → 写 `data-theme="gold|dark-pro"` + `data-theme-mode`，再向 `<html>` 注入 69（暗色）/ 95（亮色）个内联变量。
- CSS 基底：`frontend/css/themes.css`（5,063 行 / 222 KB）中 `[data-theme="gold"]` 1 处、`[data-theme="dark-pro"]` 132 处。
- 实测解析后变量总数：亮色 410 个 / 暗色 416 个 / 并集 **419 个**。

**架构判断**：分层意图清晰，但"CSS 定义 + JS 覆盖"的双源模式使 44 个 token 存在两个真相源，且 CSS 侧的设计值（如 tokens.css 手工调校的品牌金阶 `#c49b2e/#d4b352`）在运行期被生成值整体覆盖 → 设计资产实际未被使用。

---

## 2. 实测结果

### 2.1 文本对比度（12 套配置 × 6 页面，正确合成半透明与渐变后）

| 配置 | 文本节点 | 低于阈值 | 说明 |
|---|---|---|---|
| light 金/红/绿/紫/粉 | 520 | **0** | — |
| light 蓝 | 521 | 1 | `.el-message__content` 2.08:1（EP 语义色未 token 化，见 §2.5） |
| dark 金 | 520 | **6** | 见下表 |
| dark 蓝/红/绿/粉 | 520 | 2 | `.mc-seg-name` 幽灵段 + EP 残留 |
| dark 紫 | 520 | 3 | 上述 + `.user-card` 紫色文字 4.44:1 |

**深色金（最差配置）明细**：

| 元素 | 实测 | 阈值 | 根因 |
|---|---|---|---|
| `.el-range-separator`（日期区间"至"） | **1.28:1** | 4.5 | EP 默认 `--el-text-color-regular: #303133` 未在暗色映射（§2.5） |
| `.mc-seg-name`（美林幽灵段"剩余(预测)"） | **3.81:1**（初版误报 1.83，见 §2.8 更正） | 4.5 | 后端下发阶段色 + 半透明斜纹 + 模式未适配的固定前景（§2.8） |
| `.stat-icon` / `.status-tab.active` / `.kline-tab.active` / `.count` | **4.48:1** | 4.5 | 求解器按 `#0b1220` 校验，实际文字色是 `#101014`（§2.4） |
| `.user-card-enhance …`（紫，4.44:1） | 4.44:1 | 4.5 | 紫色色相下品牌文字档余量不足 |
| light 蓝 `.el-message__content` | 2.08:1 | 4.5 | 同 §2.5 |

> 结论：**常规文本已基本达标**；剩余失败集中在"EP 默认值未接通"与"求解目标与实现不一致"两类系统性问题，而非零散疏忽。

### 2.2 非文本对比度（WCAG 1.4.11，组件边界需 ≥3:1）

| 语义对 | 亮色（6 色相区间） | 暗色（6 色相区间） | 判定 |
|---|---|---|---|
| 卡片描边 `--card-border` / 卡片 | 1.52 – 1.73 | 1.42 – 1.92 | ✗ |
| 通用边框 `--qc-border` / 卡片 | 1.90 – 2.12 | 1.84 – 2.15 | ✗ |
| **输入框边界** `--qc-input` / 卡片 | 1.90 – 2.12 | 1.84 – 2.15 | ✗（表单控件边界，必须 ≥3） |
| 导航分隔 `--qc-nav-border` / 导航底 | 1.90 – 2.12 | 1.45 – 1.61 | ✗ |
| **焦点环** `--qc-ring` / 页底 | **1.67（绿）– 4.68（紫）** | 4.73 – 12.53 | ✗ 亮色金 1.80 / 绿 1.67 |
| 图表轴线 `--chart-axis` / 图表底 | 3.06 – 3.75 | 3.98 – 5.38 | ✓ |
| 图表网格 `--chart-split` / 图表底 | 1.30 – 1.34 | 1.59 – 1.88 | 装饰性，可接受 |

焦点环在 `nav.css` / `header.css` / `components.css` 共 **16 处**使用 `outline: 2px solid var(--qc-ring)`；亮色下金/绿主题的焦点提示几乎不可见。

### 2.3 语义色：同一语义三套并行定义（P1，最具结构性问题）

`frontend/css/tokens.css` 与 `themes.css` 中，同一语义存在 3–4 套互不相同的变量：

| 语义 | 模式 | `--qc-state-*`（组件层实际使用） | `--success/warning/danger/info-text` | `--badge-*-text/bg` | `--color-*` / `--el-*`（遗留） |
|---|---|---|---|---|---|
| 成功 | 亮 | `#16a34a`（卡片上 **3.30** ✗） | `#15803d`（5.02 ✓） | `#166534` / `#f0fdf4`（6.81 ✓） | `#4CAF50` / `#16a34a` |
| 成功 | 暗 | `#16a34a`（5.08） | `#4ade80`（9.61） | `#64ffda` / `#0a2e1a`（11.88） | `#64ffda`（**青绿**，非绿） |
| 警告 | 亮 | `#f59e0b`（卡片上 **2.15** ✗） | `#b45309`（5.02 ✓） | `#b45309` / `#fffbeb`（4.84 ✓） | `#FF9800` / `#f59e0b` |
| 错误 | 暗 | `#dc2626`（**3.47** ✗） | `#f87171`（6.05 ✓） | `#ff5252` / `#2e0a0a`（5.65 ✓） | `#ff5252` |
| 信息 | 暗 | `#2563eb`（**3.24** ✗） | `#60a5fa`（6.59 ✓） | `#64b5f6` / `#0a1a2e`（7.90 ✓） | `#64b5f6` |

- 组件层（`components.css`）使用的是**唯一没有按模式适配**的那一套：`.qc-text-success`（15 处引用）、`.qc-text-warning`（3 处）、`.qc-status-dot.is-*`（6 处）。同一屏内可同时出现三个不同的"成功绿"。
- 暗色下"成功"三档分别是 `#16a34a`（绿）/ `#4ade80`（浅绿）/ `#64ffda`（青绿，来自已废弃的 dark-pro 品牌色）——语义身份被稀释。

### 2.4 渐变/实底求解目标与实现不一致（P1）

`themes.js` 以 `_gradFgDark = [11,18,32]`（`#0b1220`）为前景求解 `GRAD_TARGET = 4.6`，但暗色渐变元素的**实际文字色**是 `--btn-primary-color = #101014`（更浅）。实测因此落在 **4.48:1 < 4.5**，命中 `.status-tab.active`（322×36，14px）、`.kline-tab.active`（62×38）、`.stat-icon`、`.count`。亮色侧同一求解器按 `#ffffff` 校验且实际前景就是白色，故无此偏差。

### 2.5 Element Plus 集成：深色未接通 + 变量名错误（P0）

实测 `frontend/lib/element-plus.css`（EP 2.14.5，361 KB）：

1. **该 CSS 是"仅亮色"构建**：全文件**不含任何暗色变量集**（`html.dark` 作用域 0 处；仅 3 处 `.dark`，全部是颜色选择器的 alpha 棋盘格背景）。EP 官方暗色变量集在 `theme-chalk/dark/css-vars.css`，未引入，且应用从不给 `<html>` 加 `dark` 类（`themes.js` 只写 `data-theme`）。
   → 后果：EP 的**基础变量在暗色下保持浅色值**。实测暗色下 `--el-text-color-primary = #303133`、`--el-border-color = #dcdfe6`、`--el-fill-color = #f0f2f5`；`.el-range-separator` 渲染为 `#303133` 压在 `#1f1e19` 上 = **1.28:1**（日期区间选择器"至"字不可见）。
   → 现状靠 `themes.css` 中 **82 条 `[data-theme="dark-pro"]` 规则、显式覆盖 36 个 EP 类**手工打补丁，而应用 CSS 中出现的 EP 类共 **68 个**，**覆盖率约一半**。
2. **EP 语义变量名写错**：`tokens.css:289-290` 定义的是 `--el-success / --el-warning / --el-danger / --el-info`，而 EP 实际读取 `--el-color-success / --el-color-warning / --el-color-danger / --el-color-info` → 这些覆盖**从未生效**（实测仍为 EP 默认 `#67c23a / #e6a23c / #f56c6c / #909399`）。
   → 实测浅色 ElMessage 四类：success **2.08:1**、warning **2.04:1**、error **2.61:1**、info **2.80:1**，全部低于 AA。
   同时暗色下 `.el-message` 被整体改写成同一个中性样式（fg `#a0aec8` / bg `#1f1e19`，四类完全相同）→ **语义区分度在暗色下丢失**。
3. `.el-tag--*` 已被换成项目 `--badge-*` 语义色（处理正确），与 `.el-message--*` 的处理方式不一致——同一套 EP 组件存在两种治理策略。

### 2.6 深色模式存在两套表面族（P0）

`themes.js` 暗色分支为中性面生成**同色相低饱和暖中性**（`--qc-card = hsl(hue,11%,11%)`，金 45° → `#1f1e19`）；而 `themes.css` 的 `dark-pro` 块仍保留**海军蓝硬编码**，且其中若干 token **不在运行期覆盖列表内**，因此直接生效：

| token | 暗色实际值 | 是否被运行期覆盖 | 与卡片色（金 45°）的关系 |
|---|---|---|---|
| `--qc-card` / `--bg-card` | `hsl(hue,11%,11%)` = `#1f1e19` | 是 | 基准面 |
| `--chart-bg` | **`#101a2e`** | **否** | 图表画布 = 海军蓝，坐在暖中性卡片里 |
| `--glass-bg` | **`#101a2e`** | **否** | 下拉/菜单/浮层底 = 海军蓝 |
| `--bg-input` | **`#16233b`** | **否** | 输入框底 = 海军蓝 |
| `--bg-code` | **`#0d1526`** | **否** | 代码块底 = 海军蓝 |
| `--border-strong` | **`#3a4a6a`** | **否** | 时间轴连接线 = 海军蓝 |
| `--bg-page-rgb` / `--scrollbar-thumb` | 11,18,32 / rgba(138,146,176,.5) | 否 | 仅暗色定义的深色常量 |

**同屏实测证据**（暗色 + 金，`#system/config`）：`.el-select__popper` 背景 `rgb(31,30,25)`（暖中性，来自 `--qc-card`），其内部 `.el-select-dropdown` 背景 `rgb(16,26,46)`（海军蓝，来自 `[data-theme="dark-pro"] .el-select-dropdown { background: var(--glass-bg) }`）→ 同一面板内外两层底色不同。`.el-popper` / `.el-message` 为暖中性，`.el-select-dropdown` / `.el-picker-panel` / `.el-dropdown-menu` 为海军蓝。

除蓝色（hue 220）外，其余 5 个色相下这都属于"暖底 + 冷面"的错配。

### 2.7 市场色与图表配色

- `--color-up: #E63946` / `--color-down: #2E7D32` **明暗同值**（`tokens.css`），`charts.js:79-80` 直接用于 K 线 `itemStyle.color/color0`。实测 `#2E7D32` 压暗色卡片仅 **3.27:1**，`#E63946` **4.02:1** —— 暗色 K 线跌柱发闷。
- 但 `--market-up-text` / `--market-down-text` **已按模式适配**（暗色 `#ff8080` / `#5fd07a`）。问题是 `components.css:437-438`：
  ```css
  .qc-stock-change.is-up   { color: var(--color-up,  var(--qc-state-error));   }
  .qc-stock-change.is-down { color: var(--color-down, var(--qc-state-success)); }
  ```
  **把"填充色"当文字色用** → 暗色 4.02:1 / 3.27:1，均不达 AA（涨跌幅是核心信息，应走 `-text` 档）。
- 图表分类色板（`js/echarts-theme.js`）为 `--qc-primary-600 / 500 / 700 / 400 / --qc-neutral-400 / --qc-neutral-500` —— **同一色相的 6 个明度档位**，多序列图（对比/分组柱）区分度差；且画布 `--chart-bg` 与卡片底色不一致（§2.6）。
- 涨跌双通道：暗色 `#ff8080` / `#5fd07a` 亮度接近，红绿色觉障碍者区分困难（A 股"红涨绿跌"约定需保留，但建议叠加符号/形状通道）。

### 2.8 美林阶段色：数据驱动的"外来色相"

`getTimelineStageColor()` 直接取后端 `merrillStagesConfig[stage].color`，`.mc-seg-name` 前景固定 `--merrill-chip-text: #1f2937`（明暗同值）。
- 阶段底色由后端下发（多为浅色柔和色），`--merrill-chip-text`（#1f2937）对部分底色不达标；若后端给出深色，固定深字直接失效。
- 这些阶段色不随主题色相/模式变化：在暗色 + 金色主题下出现饱和天蓝/翠绿色块，是整站唯一的"外来色相"。
- 幽灵段（`repeating-linear-gradient(45deg, c44 …)` + `--text-secondary` 前景）在暗色下实测 **3.81:1**（暗色绿相）。
  **更正（C 批次）**：初版报告的 1.81/1.83:1 是审计脚本缺陷所致 —— 渐变底色合成时把祖先的不透明底当成了白底，
  而不是实际卡片底；修正脚本后真实值为 3.81:1。该值仍低于 AA，且 `c + '44'` 拼 alpha 仅对 6 位 hex 成立（后端给出
  `rgb()`/`hsl()`/CSS 变量时会静默失效）。C 批次已改为 `color-mix(in srgb, c 27%, transparent)` + `--text-primary` 前景。

### 2.9 工程治理实测

| 指标 | 实测 | 说明 |
|---|---|---|
| token 定义 / 引用 | 330 / 235 | `var()` 引用统计（不含 EP 自身 CSS） |
| 死 token | **98 → 实测口径下修正** | 初版口径把 Element Plus 自身消费的 `--el-*`（EP 按名读取，不经 `var()`）也算作死 token；改用「全树扫描 + JS `getCSSVar/getPropertyValue` 引用 + 排除 EP 变量」口径后为 61，C 批次清理后 **4**（仅剩设计资产：色阶 2 档 + 布局/间距各 1） |
| 双源 token | **44** | CSS 定义 + `themes.js` 运行期覆盖（含 `--qc-primary-50…900` 全阶，CSS 设计值被整体覆盖） |
| 明暗不对称 | 亮色独有 3（`--qc-neutral-700/800`、`--bg-dialog-header`）／暗色独有 9（`--scrollbar-thumb`、`--bg-page-rgb`、7 个 `--el-*`） | `--qc-neutral-700/800` 在暗色下未定义（当前 0 引用，属隐患） |
| 硬编码色（非注释行 `#hex`） | **420**（原始字面量统计） | 其中 `themes.css` 199 / `tokens.css` 89 属 Layer-1 调色板来源（允许）；按门禁口径（排除 token 源文件、vendor、`getCSSVar` 运行时兜底、局部 token 定义）为 **0** |
| 命名反转 | `--qc-primary-700/800/900` 亮色为深档（L 25.7/28/20%），暗色为浅档（L 72/80/88%） | 实测两者均只作**文字色**使用，功能正确；但 `--primary-color-dark = var(--qc-primary-800)` 在暗色下变成"浅色" → 名称与语义相反，是新维护者踩坑点 |
| PWA / 浏览器 UI 色 | `index.html` `<meta name="theme-color" content="#667eea">` + `manifest.json` | 靛蓝色，与品牌金/当前色相无关，且不随主题更新 |
| 系统模式 | `system` 仅在解析时读取一次 `prefers-color-scheme` | 无 `matchMedia` change 监听；选"跟随系统"后切换系统主题不会实时生效 |
| **配色门禁** | `tests/test_theme_contrast.py`、`tests/test_contrast.py` **当前失败** | 仍在引用 V6.1 已删除的 `classic-white/classic-red/classic-gold` 主题块（实测 `KeyError` / `AssertionError`）；现有门禁**不校验运行期 12 套配置**，恰好漏掉全部真实失败 |

---

## 3. 问题清单（按优先级）

| ID | 优先级 | 问题 | 证据 | 影响面 |
|---|---|---|---|---|
| C-01 | **P0** | 深色存在两套表面族（暖中性 vs 海军蓝硬编码） | `--chart-bg/--glass-bg #101a2e`、`--bg-input #16233b`、`--bg-code #0d1526`、`--border-strong #3a4a6a` 未被运行期覆盖；同屏 `el-select__popper #1f1e19` vs `el-select-dropdown #101a2e` | 除蓝色外 5 个色相的全部浮层/输入/图表 |
| C-02 | **P0** | EP 深色未接通（无 `html.dark`，手工补丁覆盖不足） | `.el-range-separator` 实测 **1.28:1**；暗色下 `--el-text-color-primary #303133`、`--el-border-color #dcdfe6` 保持浅色 | 全部 EP 组件的暗色表现，尤以日期/表格/分页/上传为重 |
| C-03 | **P0** | EP 语义变量名错误导致覆盖失效 | `tokens.css` 定义 `--el-success/--el-warning/--el-danger/--el-info`，EP 读 `--el-color-*`；ElMessage 四类 **2.04–2.80:1** | 全部提示/消息/标签/告警 |
| C-04 | **P1** | 语义色三套并行、取值不一致、且组件层用的是未适配模式的一套 | 成功三值 `#16a34a/#4ade80/#64ffda`；`--qc-state-warning` 2.15:1、`--qc-state-error`（暗）3.47、`--qc-state-info`（暗）3.24 | `.qc-text-success`(15) / `.qc-text-warning`(3) / `.qc-status-dot`(6) |
| C-05 | **P1** | 涨跌"填充色"当文字色用 + 暗色填充未适配 | `.qc-stock-change` 暗色 4.02/3.27:1；K 线暗色填充 3.27:1 | 涨跌幅、K 线、市场卡片 |
| C-06 | **P1** | 焦点环亮色不达 3:1 | `--qc-ring` 金 1.80 / 绿 1.67（16 处 `outline`） | 全站键盘可达性 |
| C-07 | **P1** | 表单控件边界 1.84–2.15:1（需 ≥3） | `--qc-input`/`--qc-border` 12 套实测 | 表单、搜索、下拉 |
| C-08 | **P1** | `--text-link` 未走求解器 | 亮色金 3.27 / 绿 2.93；暗色紫 4.43 | 链接文本 |
| C-09 | **P1** | 渐变求解目标（`#0b1220`）与实际前景（`#101014`）不一致 | 暗色金实测 4.48 < 4.5 | 激活页签/编号徽标/K 线页签/统计图标 |
| C-10 | **P1** | 图表：同色相 6 档分类色板 + 画布底色与卡片不一致 | `echarts-theme.js` color 数组；`--chart-bg #101a2e` | 全部图表 |
| C-11 | **P2** | 美林阶段色来自后端、不随主题，前景固定深字；幽灵段斜纹用 `c + '44'` 拼 alpha（仅 6 位 hex 成立） | 幽灵段实测 **3.81:1**（暗色绿）；阶段名实测 2.5–2.9:1 | 美林时钟页 |
| C-12 | **P2** | 导航徽标 / plain 按钮边缘未达 AA | 徽标 3.08(亮绿)/3.49(亮金)/3.88(暗紫)；plain 3.93(暗紫) | 侧栏徽标、次级按钮 |
| C-13 | **P2** | 装饰性使用功能色 | `.stat-card.info/success/gold/warning`、`.stat-icon-success/info` 等 | 统计卡片 |
| C-14 | **P2** | token 治理：61 死 token（修正口径）/ 45 双源 / 明暗不对称 / 硬编码分散 | §2.9 | 可维护性 |
| C-15 | **P2** | PWA `theme-color #667eea` 与品牌无关且不随主题更新 | `index.html`、`manifest.json` | 移动端状态栏/启动屏 |
| C-16 | **P2** | `system` 模式无 `matchMedia` 监听 | `themes.js` 仅 `.matches` 读取 | 跟随系统体验 |
| C-17 | **P2** | 配色门禁失效（2 个测试引用已删除主题；不校验运行期 12 套） | `pytest` 实测 2 failed | 回归防线 |

---

## 4. 改进方案（目标配色规范）

### 4.1 命名与分层契约（新增约束，写入 CONTRIBUTING/README）

1. **只有两处可以出现字面量颜色**：`tokens.css` 的 Layer 1 原始色阶、`themes.js` 的求解器输出。其余文件只允许 `var(--…)`；例外须带 `/* qc-allow-hardcode */`。
2. **每个 L2 语义 token 必须在明暗两侧都有定义**（当前 12 个违反）。
3. **语义槽位固定为 4 + 2**：`success / warning / danger / info` + `market-up / market-down`；禁止把功能色用于装饰（`.stat-card.info` 这类"彩色卡片"应改用品牌色或中性色）。
4. **每个语义必须有四个变体**，替代当前三套并行：
   `--state-{k}-text`（文字，对卡片/画布 ≥4.5）、`--state-{k}-solid`（实底，其上文字 ≥4.5）、`--state-{k}-tint`（浅底）、`--state-{k}-border`。
5. **每个 token 只能在明暗之一出现**的例外必须显式注释（如 `--scrollbar-thumb` 需两侧都有）。

### 4.2 中性面：唯一的明暗配对表（替换海军蓝残留）

| 角色 | 浅色 | 深色 | 用途 |
|---|---|---|---|
| `--surface-canvas` | `hsl(h,18%,98%)` | `hsl(h,10%,8%)` | 页面底 |
| `--surface-card` | `#fff` | `hsl(h,11%,11%)` | 卡片 / 图表画布 / 对话框（**`--chart-bg` 直接别名到此**） |
| `--surface-raised` | `#fff` | `hsl(h,12%,14%)` | 浮层 / 下拉 / 菜单（**`--glass-bg` 别名到此**） |
| `--surface-sunken` | `hsl(h,16%,96%)` | `hsl(h,12%,9%)` | 输入框 / 代码块（**`--bg-input` / `--bg-code` 别名到此**） |
| `--surface-hover` | `hsl(h,26%,94%)` | `hsl(h,12%,15%)` | 悬浮 |
| `--border-subtle` | `hsl(h,14%,88%)` | `hsl(h,13%,18%)` | 分隔/描边 |
| `--border-default` | `hsl(h,14%,78%)` | `hsl(h,14%,30%)` | 控件边界（目标 ≥3:1，需按色相求解，非固定值） |
| `--border-strong` | `hsl(h,22%,72%)` | `hsl(h,16%,42%)` | 强分隔（替代 `#3a4a6a`） |
| `--border-focus` | 求解 ≥3:1（对 canvas 与 card 取最差） | `hsl(h,85%,65%)` | 焦点环 |
| `--text-primary/secondary/tertiary` | 当前值保持 | 当前值保持 | 已达标 |
| `--overlay` | `rgba(31,29,26,.5)` | `rgba(0,0,0,.6)` | 遮罩（统一 `--mask-bg`，当前 `rgba(15,35,55,.55)` 是海蓝色残留） |

> 动作：删除 `dark-pro` 块中 `#0b1220/#101a2e/#16233b/#23344f/#0d1526/#3a4a6a/#111827/#0f172a/#2c4060/#4f6b99` 等硬编码面，全部别名到上表；`--scrollbar-thumb`、`--bg-page-rgb` 两侧补齐或改为颜色无关实现（`rgba(var(--surface-canvas-rgb), .8)`）。

### 4.3 Element Plus：一次性接通，替代 82 条手工补丁

在 `[data-theme="dark-pro"]` 与默认 `:root` 两侧**同时**写入 EP 变量桥（示例，覆盖 EP 2.14.5 全部与颜色相关变量）：

| EP 变量 | 映射到 |
|---|---|
| `--el-color-primary` / `-light-3/5/7/8/9` / `-dark-2` / `-rgb` | `--brand-solid` / 由 `--brand-tint` 与 `--brand-solid` 派生 / `--brand-hover` / `rgb(var(--brand-rgb))` |
| `--el-color-success/warning/danger/error/info`（+`-light-*`/`-dark-2`） | `--state-{k}-solid` 及派生 |
| `--el-text-color-primary/regular/secondary/placeholder/disabled` | `--text-primary/secondary/tertiary/tertiary/disabled` |
| `--el-border-color` / `-light` / `-lighter` / `-extra-light` / `-dark` / `-darker` | `--border-default` / `--border-subtle` 派生 |
| `--el-bg-color` / `-page` / `-overlay` | `--surface-card` / `--surface-canvas` / `--surface-raised` |
| `--el-fill-color` / `-light` / `-lighter` / `-blank` / `-dark` / `-darker` | `--surface-hover` / `--surface-sunken` / `--surface-card` 派生 |
| `--el-mask-color` | `--overlay` |
| `--el-box-shadow*` | 由 `--shadow-*` 派生（暗色已单独定义） |
| `--el-color-white/black` | 保持 |

⚠️ **注意**：本仓库的 `element-plus.css` 是**不含暗色块**的构建。因此**不能**只靠加 `html.dark` 类解决，必须在 `dark-pro` 块里显式桥接全部 EP 变量（或改为引入 `element-plus/theme-chalk/dark/css-vars.css` 并同步加 `dark` 类——二选一，需在实施前确认）。
同时修正变量名错误：`--el-success` → `--el-color-success` 等（或删除这些死别名，统一走 4.1 的语义槽位）。

### 4.4 语义色收敛（消灭三套并行）

1. 以 `--badge-*-bg/text`（已按模式适配、对比度达标）为基准，重命名/提升为 `--state-{k}-text|solid|tint|border`。
2. 删除 `--qc-state-*` 独立定义，改为别名：`--qc-state-success: var(--state-success-solid)`；`--qc-text-success` 改用 `--state-success-text`（修复亮色 3.30 / 暗色 3.47 / 3.24 的潜在失败）。
3. 暗色"成功"统一为绿色系（去掉 `#64ffda` 青绿），保持与亮色同一语义身份。
4. `.qc-stock-change` 改用 `--market-up-text` / `--market-down-text`；新增暗色专用 `--market-up-fill` / `--market-down-fill`（提亮），K 线使用 fill 档。
5. 涨跌除颜色外增加符号通道（`+/-` 已存在则确保始终渲染），满足色觉障碍可达性。

### 4.5 对比度契约（写入自动化门禁，逐项断言）

| 断言对象 | 阈值 |
|---|---|
| `text-primary/secondary/tertiary` on canvas & card | ≥ 4.5 |
| `text-disabled` on card | ≥ 3.0 |
| `text-link`、`brand-text` on card & canvas | ≥ 4.5 |
| `on-brand` vs `brand-solid`（含 hover/active 三态） | ≥ 4.5 |
| `state-{k}-text` on card；`state-{k}-text` on `state-{k}-tint` | ≥ 4.5 |
| `market-{up,down}-text` on card & canvas | ≥ 4.5 |
| `border-focus` vs canvas & card | ≥ 3.0 |
| `border-default`(输入/选择器边界) vs card | ≥ 3.0 |
| 渐变元素：**实际**前景 vs 渐变每一色标（最差档） | ≥ 4.5 / 大字 ≥3.0 |
| chart axis on chart canvas | ≥ 3.0 |
| 覆盖范围 | **明 × 暗 × 6 色相 = 12 套全断言**（当前门禁只测静态 CSS 块，恰好漏掉全部真实失败） |

### 4.6 图表配色

- 分类色板改为 **6–8 色跨色相**、感知亮度接近的 categorical palette（例如按 `hue ± n×60°` + 固定 L/C 生成，或使用已成熟的定性色板），与品牌色相解耦但保持同族饱和度。
- 画布 `--chart-bg` = `--surface-card`；网格/轴线沿用 `--chart-split/--chart-axis`（已达标）。
- K 线涨跌用 `--market-{up,down}-fill`；成交量柱用半透明。
- 图例/tooltip 文字沿用 `--text-secondary/--text-primary`（已达标）。

### 4.7 门禁与治理（让改进不回退）

1. **修好并重写 `tests/test_theme_contrast.py`**：不再解析已删除的 `[data-theme="classic-*"]` 块，改为用 Node 执行 `frontend/js/themes.js`（Node v24 已就绪）导出 12 套 token，逐条跑 §4.5 断言。
2. 新增 `tests/test_color_tokens.py`：① 死 token = 0（白名单除外）② 明暗 token 名对称 ③ 双源 token 收敛到白名单 ④ 非 tokens 文件硬编码色 ≤ 阈值（现状 420 → 目标 ≤ 60，仅 L1 + PWA meta 允许）。
3. 新增 `tests/e2e/test_color_render.py`（现有 Playwright 环境）：6 页面 × 12 配置 DOM 审计，断言"低于阈值文本节点 = 0"。
4. CI（`.github/workflows/ci.yml`）接入上述测试；把本次评估脚本从 `.tmp-qc/` 固化到 `tests/e2e/`。

---

## 5. 实施计划

### 5.0 批准后的冻结决策（2026-09-21，按问卷答复）

| 决策项 | 结论 |
|---|---|
| 实施范围 | **全部 A–E**（含自动化门禁与 ops 同步） |
| 深色中性面 | **延续色相联动暖中性**，统一到该族（删除海军蓝残留面） |
| EP 接通 | **在 `:root` / `[data-theme="dark-pro"]` 显式桥接全部 EP 变量**（不引入官方 dark css-vars、不加 `html.dark`） |
| 语义色收敛 | **以 `--badge-*` 为基准**提升为 `--state-{k}-{text,tint,solid,on-solid,border}`，观感变化最小 |
| 品牌色相 | 保留 6 档，**新增「中性无色相」档** |
| 焦点环 | **按色相求解更深档，单色环 ≥3:1** |
| 涨跌配色 | 保留红涨绿跌，**暗色填充提亮 + 增加符号/形状通道** |
| 图表色板 | **改为跨色相定性色板**，与品牌色相解耦；画布底色对齐卡片 |
| 门禁 | **修好现有测试 + 新增 12 套全断言并接入 CI** |
| token 治理 | 清理影响渲染与一致的项，**硬编码色收敛到 ≤60** |
| 视觉验收 | 对比度达标 + 语义一致 + 关键页面截图复核 |
| 附带项 | 审计脚本固化进 `tests/e2e/`、PWA `theme-color` 动态化、`system` 模式加 `matchMedia` 监听、完成后同步 ops、更新 `HANDOVER.md`/`README.md` |

### 5.1 实施进度

| 批次 | 状态 | 提交 | 验证结果 |
|---|---|---|---|
| **A 深色独立化 + EP 接通** | ✅ 已完成 | `745ddec` | 浅色 ElMessage 四类 6.81/4.84/5.91/6.16（原 2.08/2.04/2.61/2.80）；暗色 11.88/9.22/5.65/7.90 且类型可区分；`.el-range-separator` 1.28:1 → 达标；暗色下拉/浮层/图表画布统一为暖中性族；12 套 × 6 页面 DOM 审计浅色 0 处低于 AA |
| **B 语义收敛 + 可达性** | ✅ 已完成 | `f545805` | §4.5 契约 **24 项 × 12 套配置 全部通过**（焦点环 3.19/3.32、控件边界 3.19/3.32、链接 4.88–5.08、品牌 tag 4.54、文字按钮 4.99、主按钮 4.60、导航徽标 4.58、涨跌 fill 4.17/5.13）；渐变求解目标对齐后 `.status-tab.active/.kline-tab.active/.stat-icon/.count` 由 4.48 → 达标；DOM 审计补充页面 5 页 × 2 套 **0 处**低于 AA；主页面集暗色仅剩美林幽灵段 1.83:1（C 批次） |
| **C 图表 + 阶段色 + 治理** | ✅ 已完成 | `9baa901` | 分类色板改跨色相定性板，对画布 **3.18:1（亮）/ 3.60–3.68:1（暗）**；新增「中性无色相」档并在去彩度后对文字/焦点/边界/渐变/面板**按灰阶重解**；美林阶段文字按底色亮度自适应 + 幽灵段改 `color-mix`；PWA `theme-color` 实测随主题变化；`system` 加 `prefers-color-scheme` 监听；**14 套配置 × 6 页面 DOM 审计全部 0 处低于 AA**；契约 24 项 × 14 套 失败 0；悬空引用 3→**0**、死 token 61→**4**、门禁口径硬编码 **0** |
| **D 门禁 + 文档** | ✅ 已完成 | `ab5ebf1`（+ `621d366` README） | 新增/重写 4 个运行期门禁（`color_probe.js` + `color_gate.py` + 14 套 × 36 项契约 + token 治理 5 项）与 `tests/e2e/color_audit.py`；CI 增加 `actions/setup-node`；门禁抓到并修复真实缺陷（亮色 `--text-disabled` 2.86:1、暗色阴影族错位）；**全量 pytest 3358 passed / 0 failed / 3 skipped**（改造前 20 failed）；`DESIGN-SYSTEM.md`/`HANDOVER.md`/`README.md` 同步 |
| **E 同步 ops** | ✅ 已完成 | ops HEAD = `621d366`（`git fetch <dev> master` + `reset --hard`，保留 `.env`/`data/`） | ops 服务新产物 `assets/index-Dn1HU77H.js` 与全部 CSS 已生效（静态文件按请求读盘）；**ops :8000 复测 e2e DOM 审计 14 套 × 6 页面 0 处低于 AA**（521–522 文本节点/配置）；截图 `evidence-ops/`。注：本次为纯前端改动，后端未变，故无需重启（systemd 用户总线在本沙箱不可达，非代码问题） |

### 5.2 批次与验收（原始计划）

> 每批次独立提交、独立可回滚（`git revert` + 截图回归）。

| 批次 | 范围 | 主要文件 | 验收标准 |
|---|---|---|---|
| **A（P0，深色独立化 + EP 接通）** | 删除海军蓝残留面并别名到 §4.2；EP 变量全量桥接 + 命名修正；修 `.el-range-separator` 类残留 | `frontend/css/themes.css`、`frontend/css/tokens.css`、`frontend/js/themes.js`、`frontend/css/components.css` | 暗色 6 色相下"同屏单一深色面族"断言通过；EP 探针断言（`--el-text-color-primary`、`--el-border-color`、`.el-range-separator`、`.el-message--*` 四类 ≥4.5）；DOM 审计暗色 0 处 <AA |
| **B（P1，语义收敛 + 可达性）** | 语义四变体落地；`--qc-state-*` 别名化；`--text-link`/焦点环/控件边界走求解器；渐变求解目标与实现对齐（`#101014`）；暗色涨跌填充提亮 + 符号通道 | `components.css`、`themes.css`、`themes.js`、`nav.css`、`header.css` | §4.5 全表 12 套断言通过；焦点环 ≥3.0；控件边界 ≥3.0 |
| **C（P1/P2，图表 + 阶段色 + 治理）** | 分类色板跨色相；`--chart-bg` 跟随卡片；K 线 fill 档；美林阶段色主题化；新增「中性无色相」品牌档；PWA `theme-color` 动态化；`system` 加 `matchMedia` 监听；死 token/双源/硬编码收敛 | `echarts-theme.js`、`charts.js`、`strategies-page.js`、`index.html`、`manifest.json`、`themes.js` | 图表配色目视复核 + 截图对比；硬编码色 ≤60；死 token = 0 |
| **D（门禁 + 文档）** | 重写/新增 3 个测试 + CI 接入 + 评估脚本固化 + 更新 `HANDOVER.md`/`README.md` 配色规范 | `tests/test_theme_contrast.py`、`tests/test_color_tokens.py`、`tests/e2e/test_color_render.py`、`.github/workflows/ci.yml`、`docs/` | `pytest` 全绿；故意注入一个低对比度 token 时门禁能失败（负向验证） |
| **E（同步）** | dev 验证通过后按既有流程发布至 ops（`publish-dev-to-ops`），ops 复测 | — | ops :8000 复测同 A–C 断言 |

**风险与回滚**

- `themes.css` 5,063 行、`themes.js` 运行期注入是热点文件，改动面大 → 每批次单独提交、单独截图对比，保留一键 `git revert`。
- EP 变量全量桥接可能改变现有视觉细节（按钮/表格密度已知的样式依赖）→ 先做 A 批次的 EP 桥接，单独出对比截图再进入 B。
- 语义色收敛会改变多处组件观感 → 以"对比度提升 + 语义一致"为验收，不以像素全等为验收。

---

## 6. 复现方式

```bash
# 依赖：Node v24（跑 themes.js）、/home/evergreen/dsh-workspace/.pwenv/bin/python（Playwright）
cd /home/evergreen/dsh-workspace/.tmp-qc/color-audit
/home/evergreen/dsh-workspace/.pwenv/bin/python audit_v2.py      # 12 配置 × 6 页面 DOM 对比度（正确合成）
/home/evergreen/dsh-workspace/.pwenv/bin/python audit_v3.py      # 补充页面（watchlist/backtest/user/…）
/home/evergreen/dsh-workspace/.pwenv/bin/python matrix.py        # token 级对比度矩阵
/home/evergreen/dsh-workspace/.pwenv/bin/python matrix2.py       # 半透明合成修正 + 渐变元素
/home/evergreen/dsh-workspace/.pwenv/bin/python static.py        # token/硬编码静态审计
/home/evergreen/dsh-workspace/.pwenv/bin/python ep_semantic.py   # EP 语义色与 ElMessage 实测
/home/evergreen/dsh-workspace/.pwenv/bin/python ep_probe.py      # EP 组件明暗渲染对照
cd /home/evergreen/dsh-workspace/quant-calendar-dev && python3 -m pytest tests/test_theme_contrast.py tests/test_contrast.py -q   # 现有门禁现状（2 failed）
```

---

## 附录 A：关键实测数字速查

| 项 | 数值 |
|---|---|
| 解析后 CSS 变量 | 亮 410 / 暗 416 / 并集 419 |
| 运行期内联覆盖 | 亮 95 / 暗 69 |
| 文本节点覆盖量 | 主集 12 配置 × 6 页面 = 6,241（520–521/配置）；补集 2 配置 × 5 页面 = 1,029（429–545/配置） |
| 低于 AA 文本节点 | 亮 0–1；暗 2–6 |
| 最低真实文本对比度 | `.el-range-separator` **1.28:1**（暗） |
| 焦点环（亮色） | 金 1.80 / 绿 1.67（需 ≥3.0） |
| 控件边界 | 1.84 – 2.15（需 ≥3.0） |
| EP 消息（亮色） | 2.04 – 2.80（需 ≥4.5） |
| 硬编码色 | 字面量 412 处；按门禁口径（排除 token 源文件/vendor/运行时兜底/局部 token 定义，仅版本化源码）**= 0** |
| 死 token / 双源 / 悬空引用 | 修正口径后 61 → **4**（C 批清理）/ 45（CSS 兜底 + 运行期覆盖，属既定模式） / **0** |
| 现有配色门禁 | 2 个测试失败（引用已删除主题） |

## 附录 B：本报告引用的原始数据文件

- `.tmp-qc/color-audit/tokens.json` — 12 套配置的解析后 token 快照（含 `inlineKeys`）
- `.tmp-qc/color-audit/dom_v2.json`、`dom_v3.json` — DOM 文本对比度审计明细
- `.tmp-qc/color-audit/ep_probe.json` — EP 组件明暗渲染对照
- `.tmp-qc/color-audit/grad_fails.json` — 渐变元素审计
- `.tmp-qc/color-audit/evidence/` — 证据截图（登录页、ElMessage、美林时钟、深色表面）

---

**请审阅本报告。** 批准后我将按 §5 的批次 A → E 顺序实施；若希望调整优先级（例如先只做 P0 的 A 批）、或对 §4 的目标规范有不同取向（如深色改为纯中性灰而非色相联动），请一并告知，我会先更新报告再动代码。
