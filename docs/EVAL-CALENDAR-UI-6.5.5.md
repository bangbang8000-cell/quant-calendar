# 量化日历 — 美术 UI / 操作逻辑 优化迭代评估报告

- 评估对象：quant-calendar `APP_VERSION 6.5.5`（ops 实例 :8000，2026-10-27 实测）
- 评估方式：**真实渲染截图 + 像素级配色测量 + 代码静态审计**（不依赖主观印象）
- 证据文件：`_eval_shots/cal_audit_20261027_viewport.png`（1312×967，亮色/金色主题，全页截图与视口截图字节一致 → document 自身不滚动）
- 审计范围：`frontend/js/components/calendar-page.js`、`frontend/js/app-logic/{data,nav,workspace,keys}.js`、`frontend/js/components/virtual-list.js`、`frontend/js/components/common/StockList.vue`、`frontend/css/{components,themes-pages,responsive,tokens}.css`、`backend/api/v1/views.py`
- 运行时状态：浏览器控制台 **0 条 error**，接口 `/api/view/day/2026-10-27` 正常返回（全部 54 / 入池 0 / 持仓 54 / 出池 0）

---

## 0. 一句话结论

**结构与令牌体系已经正确，问题出在"头部一直在长、身体一直在缩"。**
导航身份被重复表达三级（侧栏二级条 + 面包屑 + h1），工具栏在 1312px 宽度下折成 **3 行**，首屏约 1/3 高度被非数据内容占据；
列表则同时被 **固定 `calc(100vh - 250px)` 高度** 与 **固定 78px 虚拟行高** 双向挤压，产生可目视的**行内容裁切与卡片粘连**。
配色侧则从历史报告的"品牌金超配（均值 33%）"反转成 **"三层近白"**（白 64.5% / #fbfaf9 14.7% / #f6f4ed 5.5%，面与面之间对比仅 1.04–1.10:1），层级完全由 1px 描边承担。
更可惜的是：项目**已经具备**的视觉能力（共识度徽章与进度条、涨跌色、四态面板、虚拟滚动）在日历页大面积闲置——这不是"缺设计"，是"设计没接上"。

### 评分卡（满分 10）

| 维度 | 评分 | 关键证据 |
|---|---|---|
| 首屏信息层级 | **4.5** | 工具栏 3 行（视图切换 / 日期·刷新·导出 / 上一天·下一天·策略对比）；导航身份重复 3 处；长提示文案挤占卡片标题行 |
| 表面与色彩层级 | **5.5** | 近白三色占 84.7%，卡面↔页底 1.04:1、卡面↔次级面 1.10:1；品牌色仅 2.2% 且集中于按钮/FAB |
| 列表与卡片渲染 | **4.0** | `row-height=78` vs 行内涵自然高度 ≈82–88px + `.qc-vrow{overflow:hidden}` → 名称折行、footer 裁切、行间无间距 |
| 布局与栅格 | **5.0** | `.h-calc-250{height:calc(100vh - 250px)}` 与动态换行头部耦合，列表底部溢出视口 |
| 组件一致性 | **7.0** | 已统一 StockList / StatePanel / 双栏；但筛选胶囊、详情按钮胶囊、策略标签三者视觉同构 |
| 状态完整性 | **5.0** | `consensusError` 在日历页未渲染，加载失败被当成"暂无数据"空态（空态还给出"载入示例组合"CTA，语义误导） |
| 交互反馈 | **5.0** | 刷新失败无提示且时间戳卡在"刷新中…"；导出 `window.open` 无任何反馈/禁用态 |
| 可达性 a11y | **5.5** | 筛选页签非 roving tabindex、无方向键、无 `:focus-visible`；视图切换 `role="tablist"` 内是按钮 |
| 响应式 | **6.5** | 移动端 44px 触控与 375px 不溢出已达标（`responsive.css:150-208`），但头部换行在 1024–1312 区间已退化 |
| **综合** | **5.4** | 底子在，缺一次"头部减法 + 高度自适应 + 状态诚实"的收敛 |

---

## 1. 实测基线

### 1.1 首屏垂直预算（1312×967 实测，自上而下）

| 区块 | 实测高度 | 归属 | 价值密度 |
|---|---|---|---|
| 面包屑「量化日历 / 日历视图」 | ~28px | 全局壳 `index.html:154-160` | 中（硬约束，保留） |
| h1「日历视图」 | ~40px | 全局壳（硬约束） | 中 |
| **工具栏（3 行）** | **~120px** | `calendar-page.js:24-57` | **低**（8 个控件换 3 行） |
| 卡片标题「策略共识度股票池」+ 沿用手持提示 | ~40px（提示把标题行拉宽） | `calendar-page.js:59-64` | 中 |
| 状态筛选 4 页签 | ~48px | `calendar-page.js:69-74` | 高 |
| **首屏非数据总占用** | **≈280px / 967px（29%）** | — | — |
| 列表可视区 | `calc(100vh - 250px)` = 717px 起算 | `themes-pages.css:645` | — |

> 头部实际占用 ≈280px，而列表高度仍按 **扣除 250px** 计算 → 列表下沿超出视口约 30px 且 document 不滚动（全页截图高度 = 视口高度即证）。**换行工具栏是这条链的触发点。**

### 1.2 配色像素测量（截图全幅 1312×967）

| 指标 | 实测 | 说明 |
|---|---|---|
| 中性色像素占比 | **93.9%** | HSV S<8% |
| 品牌金占比（H 25–55° / S>15%） | **2.2%** | 仅主按钮、选中态、FAB |
| 其它彩色占比 | 3.9% | 涨跌/语义色 |
| 主色 Top3 | `#ffffff` 64.5% / `#fbfaf9` 14.7% / `#f6f4ed` 5.5% | 三者合计 **84.7%** |

推导对比度：卡面 `#ffffff` 与页底 `#fbfaf9` ≈ **1.04:1**；卡面与次级面 `#f6f4ed` ≈ **1.10:1**。
→ 结论：**层级不可由色阶承担**，全部压力转移到 `--qc-border`（`tokens.css:59` → `--qc-neutral-300`）的 1px 描边上。
这不是"配色难看"，而是"界面没有灰度台阶"：所有面在同一亮度带里，用户只能靠线条判断容器边界。

---

## 2. 美术层问题（按优先级）

### 2.1 【P0】工具栏三行 → 首屏 29% 让位给控件

`calendar-page.js:24-57` 把工具区拆成 3 个 flex 分组（视图切换 / 日期·刷新·导出·时间 / 上一天·下一天·策略对比），
父容器 `.qc-page-tools`（`layout.css:23-30`）是 `justify-content: space-between; flex-wrap: wrap;`——**没有断点策略，靠自然换行**。
实测 1312px 下即折成 3 行（截图第 2–4 行区域）：

```
[日视图][周视图][月视图][年视图]
[2026-10-27] [刷新] [导出] 19:13:45
[« 上一天] [下一天 »] [策略对比]
```

三处具体浪费：
1. 日期选择器承担了 `el-date-picker` 默认宽度（约 250px）+ 刷新/导出双按钮 + 时间戳，单组即超半宽；
2. 上一/下一已被「日期选择器 + 视图切换」语义覆盖（可直接用日期选择器跳任意日，也可用 ← →）；
3. 时间戳 `lastLoadTime`（`calendar-page.js:50`）与"数据新鲜度"横幅（`qc-page-stale-bar`）**双重表达新鲜度**。

**建议（合并为一行 3 段）**
```text
[日|周|月|年 分段控件]  [日期选择器 180px]  …  [‹] [›]  [刷新]  [导出]  [策略对比]
```
- 视图切换改 `el-radio-group`/分段控件（省 ~60px 且语义更准，见 3.4）；
- 上一/下一改**图标按钮**（`qc-icon` 已有 chevron-left/right），去掉「上一天/下一天」文字；
- 导出移入「更多 ⋯」或保留图标态；时间戳并入卡片标题右侧（与 `viewNote` 同区）；
- 断点：`≥1200px` 单行 / `768–1200px` 两行 / `<768px` 保留三行（触控优先）。

### 2.2 【P0】固定 78px 行高 → 行内容裁切与卡片粘连（可直接目视）

证据链完整，三处共同致因：

1. 日历列表声明 `:row-height="78"`（`calendar-page.js:101`）；
2. 虚拟列表把每行**绝对定位 + 固定高度 + 裁切**：`.qc-vrow{position:absolute;height:rowHeight;overflow:hidden}`（`virtual-list.js:38`）；
3. 行内涵自然高度 ≈ **82–88px**：`.qc-stock-row` 上下 padding 12+12（`components.css:568`）+ 代码行（`--qc-font-mono` 600 字重）+ 名称行（`--qc-font-size-sm` + 2px margin，`components.css:603-607`）+ footer 信号行（bot/trending-up 图标 + 文本）。

截图现象与之完全吻合：第 2 行 `600000.SH` 的股票名被压成**竖排折行**（"浦/发/银…"），第 1、3 行卡片边缘**直接相接无间距**（因为绝对定位按 78px 平移，`.qc-stock-list` 的 8px gap 不参与定位）。
这同时解释了"为什么看起来像列表错位"——不是网格算错，是**行高预算小于内容**。

**建议**：把行高从"魔法数"改为"内容驱动"
- 方案 A（推荐，改动最小）：`row-height` 提高到实测自然高度并同步补 CSS 常量，例如 `:row-height="88"` 且把 footer 行限定为单行 `line-height:16px`；
- 方案 B：`virtual` 关闭，日历池 <=200 行时用常规 `v-for`（`.qc-stock-list` gap 恢复，行高自适应）；超过 200 行再启用虚拟滚动并显式标注 `--qc-stock-row-h`；
- 无论 A/B，**必须把 `row-height` 与 CSS 行高常量绑定为单一来源**（目前 `test_virtual_coverage_631.py` 覆盖了短线/复盘列表却**未覆盖日历页**，所以这个偏差没有被门禁拦住）。

### 2.3 【P1】三层近白 → 层级只剩 1px 描边

实测 `#ffffff` 64.5% 是卡面（`--qc-card: --qc-neutral-0`），`#fbfaf9` 14.7% 是页底（`--qc-background: --qc-neutral-50`），`#f6f4ed` 5.5% 是次级面（`--qc-muted / --bg-card-header`）。三者相对亮度差 1.04–1.10:1，**低于肉眼可辨阈值（通常需 ≥1.25:1）**。

`--qc-neutral-50` 与 `--qc-neutral-0` 在本主题（hue 45）下几乎同值，这是色阶设计问题而非页面问题。

**建议（三选一，不改动主题全局时优先 A）**
- A. 页面内引入"面上浮"阶梯：列表容器用 `--qc-muted` 打底 + 行卡 `--qc-card` 提亮（现在恰好相反：行卡与页底同白）；
- B. 卡片用极浅描边 + 极浅内阴影（`--shadow-sm` 已有），以阴影替代色阶；
- C. 校正 `--qc-neutral-50` 使其与 0 档拉开 ≥1.25:1（影响全局，需回归全部页面，成本最高）。

> 注：项目硬约束要求"组件必须实底 + 清晰边框 + 阴影"，因此**不建议**用半透明/毛玻璃糊层级，只做灰度阶梯。

### 2.4 【P1】强调色失焦 + 胶囊同构

- 品牌金 2.2%，但落点分散在：主按钮「策略对比」、日期控件 focus、选中筛选页签、右下 FAB、侧栏选中态。
  → 读者无法回答"这一屏最该看哪里"。
- **同构问题**：`状态筛选页签`（`calendar-page.js:69-74`）、`详情面板 7 个胶囊按钮`（K线图表/评估结果/AI 问询/多因子体检/业绩/智能评估/加入自选）、`策略标签`（`.qc-stock-tag`）三者都是"圆角胶囊 + 浅底"，视觉权重相同。其中「加入自选」是**动作**，却和 6 个**视图切换**混排在一行，属于语义层级错误。

**建议**
1. 强调色收敛为**唯一主 CTA**（建议「策略对比」在某视图下的主操作位）；FAB 降为次级色或加 `--qc-shadow-md` 让其"浮"而非"亮"；
2. 详情面板按钮分两行语义：**Tab 组（K线/评估/AI/体检/业绩）** 用分段控件样式（无边框、选中态实底），**动作（加入自选）** 独立为次级按钮；
3. 策略标签去胶囊化，改为纯文字 + 分隔符（`多因子 · 资金流 · 行业轮动`），降低对胶囊语汇的稀释。

### 2.5 【P2】长提示文案挤占标题行

`calendar-page.js:59-64` 把 `viewNote`（如「2026-10-27 沿用 2026-10-26 持仓（当日尚未生成新持仓矩阵, 20:00 定时运行后自动更新）」）以 `role="status"` 内联进卡片标题。
`themes-pages.css:506-507` 用 `:has()` 让标题行 `flex-wrap`——结果标题与提示**抢同一行宽度**，标题加粗层级被稀释。
同时 `qc-page-stale-bar`（陈旧横幅）与这条 note 表达的是同一类"数据不是最新"信息。

**建议**：`viewNote` 折叠为标题行右侧的**图标 + tooltip**（告警三角 + "沿用上一交易日"），全文放 tooltip/popover；或与 stale-bar 合并为**单条数据新鲜度条**（只留一个入口）。

### 2.6 【P2】已有的数据视觉能力闲置

`StockList.vue` 已实现 `showConsensus`（`% 共识` + 迷你进度条 + `N 策略` 徽章，`:92-101`）与 `showPrice`（价格 + 涨跌色），但日历页只传了 `show-rank / virtual / copy-code`（`calendar-page.js:97-106`），**两者均未启用**。
而「策略共识度股票池」这个名字里，"共识度"恰恰是这一屏最该被看见的字段。

**建议**：日历列表启用 `show-price`（真实渲染数据已具备涨跌字段则显示，缺则优雅隐藏），并至少露出共识度数值；右栏详情已有的涨跌红绿（截图中 `-2.81%`）应统一下沉到列表级别，形成"列表扫读 → 右栏细看"的既定路径。

### 2.7 【P2】次级字号下沉

列表名称 `--qc-font-size-sm`(13px)、标签 `--qc-font-size-xs`(12px)、footer 信号同样 12px。
在 78px 行内挤 3 行文字时，12/13px 既牺牲可读性又不足以撑满行高——**这正是 2.2 的行高矛盾在排版侧的另一半**。
建议：行内保留 **2 行**（代码+名称）为主信息，footer 信号改为**行尾图标**（不占独占行），字号回升到 13/14px。

---

## 3. 操作逻辑问题（按优先级）

### 3.1 【P0】列表高度预算硬编码，与动态头部耦合

`themes-pages.css:645` `.h-calc-250{height:calc(100vh - 250px)}` 是一个**全局魔法数**，被日历页复用（`calendar-page.js:98`）。
头部一旦因换行变高（本屏 3 行工具栏 ≈ +80px），列表下沿即溢出视口，且 `.main-content` 不滚动 → 最后一行被裁、无法滚动看到。

**建议**：改为**弹性填充**，不参与魔法数：
```css
/* 日历页卡片容器 */
.cal-workbench { display: flex; flex-direction: column; min-height: 0; flex: 1; }
.cal-workbench .stock-pool-body { flex: 1; min-height: 0; }
/* 虚拟列表容器 */
.cal-list-scroll { flex: 1; min-height: 0; overflow-y: auto; }
```
删除 `.h-calc-250` 在日历页的使用；其余页面独立治理（不在本报告范围）。

### 3.2 【P0】加载失败被渲染成"空数据"

- `data.js:147` 置 `consensusError = true`（主接口 + 降级接口都失败时）；
- 但 `consensusError` **只在策略共识页渲染**（`strategies/view-part2.js:48`），日历模板只有 `loading` / `empty` 两态（`calendar-page.js:84-93`）；
- 结果：后端不可达 → 页面显示「暂无数据」+「载入示例组合（6 只）」「去配置数据池」两个 CTA。
  **这是最坏的一种错误语义**：用户在"数据源挂了"的现场，被引导去"载入示例"，可能直接污染真实池。

**建议**：在日历模板补第三态
```html
<qc-state-panel v-else-if="consensusError" type="error"
                :title="t('state.consensusError')"
                :desc="t('state.descNetworkOrService')"
                @retry="loadConsensusData"></qc-state-panel>
```
并把「载入示例组合」CTA 从空态里移除（或降级为文本链接 + 二次确认），空态主行动改为「去配置数据池」。

### 3.3 【P1】刷新失败无反馈 + 时间戳永久卡死

`data.js:70-82`：

```js
lastLoadTime.value = '刷新中...';       // 进入
await fetch('/api/data-refresh/reload', { method: 'POST' });
...
catch(e) { console.error('数据刷新失败', e); }   // 仅打日志，未复位 lastLoadTime
```

- 失败后工具栏右侧**永久显示"刷新中..."**（用户会一直等）；
- 无 `ElMessage`，用户不知道失败；
- 且 `fetch` 不校验 `res.ok`——后端返回 500 也会走成功分支。

**建议**：`try/catch/finally` + `res.ok` 校验 + 失败 toast + `lastLoadTime` 回落为上次成功时间（并在失败时标红/加叹号）。

### 3.4 【P1】导出无反馈、无禁用态

`data.js:84-89` 用 `window.open(url, '_blank')` 直接触发后端 CSV。
问题：① 无 loading、无成功提示（部分浏览器拦截弹窗时**完全静默失败**）；② 未考虑 `selectedDate` 为空时的禁用（当前只 `return`）；③ 导出**忽略当前搜索关键字**，只带 `status` 参数——用户看到 13 条却导出 54 条，是容易踩的信任问题。

**建议**：改为 `fetch → blob → a.download`（可控 loading/toast/错误）；导出参数带上 `keyword`；搜索框非空时按钮显示条数角标。

### 3.5 【P1】键盘可达性缺两处关键能力

1. **没有日期翻页快捷键**：`keys.js:142-155` 只处理 `refresh / export / batch / ai / sidebar`，全项目 `grep ArrowLeft|ArrowRight` **0 命中**。日历是这个应用里唯一"天然按左右翻"的页面，却没有 ← → 支持。
2. **筛选页签不具备 tabs 键盘契约**：`calendar-page.js:69-74` 四个 `div` 全部 `tabindex="0"`（非 roving），只绑了 Enter/Space，`role="tablist"` 缺方向键切换与 `aria-controls` 指向面板；且 `.status-tab` 在全部 CSS 中**没有任何 `:focus-visible` 规则**（对比 `.qc-stock-row:focus-visible` 已有，`components.css:583`）→ 键盘用户看不到焦点。

**建议**
- 全局：`←/→` 在日历页映射 `navigateDate(∓1)`（输入框内不触发，复用 `isTypingTarget`，`keys.js:159`）；
- 筛选页签：roving tabindex（仅选中项 `0`，其余 `-1`）+ ArrowLeft/Right 移动并激活 + `aria-controls` 指向列表容器；
- 补 `.status-tab:focus-visible{outline:2px solid var(--qc-ring); outline-offset:-2px;}`。

### 3.6 【P1】视图切换的 ARIA 语义错误

`calendar-page.js:26` `<div class="flex-c-gap-6" role="tablist" aria-label="视图切换">` 内是 4 个 `el-button`（渲染为 `role="button"`）。
WAI-ARIA 要求 `tablist` 的子元素必须是 `tab`；当前结构会被读屏读成"选项卡列表，内含 4 个按钮"，语义冲突。
**建议**：改 `role="group"`（或直接去掉 role，用 `el-radio-group` 自带语义），选中态用 `aria-pressed`。

### 3.7 【P2】筛选联动会自动改选股

`calendar-page.js:320-341` 的 watch：`detailSplitEnabled` 且"当前股不在过滤结果里"时**自动打开首条**。这段逻辑包含一个难以理解的守卫：

```js
if (_autoOpened === v.first && cur && inList === false && v.n > 1) return;
```

行为后果：用户从「全部」切到「已出池」，右栏内容被**静默替换**为另一只股票，用户可能误以为自己点错了。
**建议**：筛选变化时**保留右栏但显示"该股不在当前筛选结果中"占位 + 一个"查看首条"次按钮**；自动打开仅保留在"首次进入且无选中"场景。

### 3.8 【P2】手势与滚动/刷新的优先级

`calendar-page.js:251-272` 移动端 `touchend` 判定顺序：下拉刷新 → 横向翻日 → 否则放行。
现状可用，但有两个边界：① `window.scrollY <= 0` 判断在"内部滚动容器"（虚拟列表）场景不可靠，容易误触发刷新；② 横向阈值 `|dx|>50 且 |dx|>|dy|*1.2` 与浏览器返回手势竞争。
**建议**：先判断 `e.target.closest('.qc-virtual-list')` 存在则直接放行；阈值改为按视口宽度比例（如 `>= 0.15*vw`）。

### 3.9 已达标项（作为回归基线，勿回退）

- 移动端触控目标 ≥44px、375px 不横向溢出、筛选页签横向滚动（`responsive.css:150-208`）；
- 双栏/弹窗自动切换（`workspace.js:186-196`，≤1024px 强制弹窗）；
- 中栏宽度可拖拽并持久化（`workspace.js:198-215`，默认 35%）；
- 请求级缓存 + 后台静默刷新（`data.js:113-126`），命中缓存不闪烁；
- 列表行 `role="button"` + `aria-label` + Enter/Space（`StockList.vue:76-80`）；
- 虚拟列表 `role="list"/listitem` + `aria-setsize/posinset`（`virtual-list.js:34-38`）。

---

## 4. 迭代路线建议

### 批次 A — 结构性 P0（建议单独发版，风险可控、收益最大）

| # | 改动 | 文件 | 验收 |
|---|---|---|---|
| A1 | 工具栏合并为单行 3 段，视图切换改分段控件，上/下一天改图标按钮 | `js/components/calendar-page.js:24-57`、`css/layout.css:23-30` | 1312px 下工具区高度 ≤52px；1024px 下 ≤2 行 |
| A2 | 日历工作区改 flex 弹性高度，移除 `.h-calc-250` 依赖 | `calendar-page.js:59-123`、新增 `.cal-workbench` 样式 | 任意视口下最后一行完整可见、无底部裁切 |
| A3 | 行高"内容驱动"：`row-height` 与 `--qc-stock-row-h` 单源绑定（88px 或关闭虚拟） | `calendar-page.js:97-106`、`StockList.vue`、`css/components.css:562-607` | 名称不折行、footer 不裁切、行间有明确间距 |
| A4 | 补 `error` 三态 + 空态 CTA 纠正（移除"载入示例组合"主行动） | `calendar-page.js:84-93`、`state-panel.js` | 断开后端时显示错误面板与"重试"，不再显示"暂无数据" |
| A5 | 刷新失败反馈 + `res.ok` 校验 + 时间戳复位 | `js/app-logic/data.js:70-82` | 失败出现 toast，时间戳回落到上次成功值 |

### 批次 B — 视觉层级收敛（美术）

| # | 改动 | 验收 |
|---|---|---|
| B1 | 灰阶台阶：列表容器 `--qc-muted` 打底、行卡 `--qc-card`；或阴影替代 | 卡面↔页底对比 ≥1.25:1，截图复测 |
| B2 | 强调色收敛：唯一主 CTA；FAB 改次级色 + 阴影 | 品牌色落点 ≤3 类，主 CTA 唯一 |
| B3 | 详情面板按钮按"Tab 组 / 动作"分行；策略标签去胶囊 | 同屏胶囊语汇 ≤2 种 |
| B4 | `viewNote` + stale-bar 合并为单一新鲜度入口 | 卡片标题行单行、不折行 |
| B5 | 启用 `show-price` / 共识度露出 | 列表具备"一眼扫共识"能力 |

### 批次 C — 交互与可达性

| # | 改动 | 验收 |
|---|---|---|
| C1 | ←/→ 翻日期（`isTypingTarget` 保护） | 键盘可全程操作日期 |
| C2 | 筛选页签 roving tabindex + 方向键 + `:focus-visible` | 键盘焦点可见、Tab 一次只停一处 |
| C3 | 视图切换 `role` 修正为 group / radio 语义 | axe 无 tablist 子元素违规 |
| C4 | 导出改 blob 下载 + 参数带 keyword + toast | 无静默失败；导出条数与可见条数一致 |
| C5 | 筛选变更不静默换股，改占位 + 次按钮 | 右栏内容不被无声替换 |

---

## 5. 改动约束与测试影响（务必同步）

| 约束/门禁 | 位置 | 影响 |
|---|---|---|
| 日历模板必须保留 `role="tab"`、`aria-selected`、`keyClick` | `tests/test_frontend_consistency.py:243` | C2 改 roving tabindex 时**保留**这三个特征，否则门禁报错 |
| 组件行为指纹（含 `qc-page-tools`、`status-tab(s)`、`qc-calendar-page`） | `tests/parity_golden/frontend_components_630.json:470-560` | A1/A4 改模板后需**重建指纹**，预期差异属正常 |
| 虚拟列表行高门禁**未覆盖日历页** | `tests/test_virtual_coverage_631.py:26-60` | 建议把日历池纳入 `LONG_LISTS`，令 `item_height + gap == row_height`，从门禁层根治 2.2 |
| 主题样式聚合读取（5 文件 join） | `tests/test_a11y_631.py` | 新增 CSS 需落在既有 5 文件体内，勿另开新文件 |
| 硬约束：每页唯一 `h1.qc-page-h1` + 上方 `.qc-breadcrumb` | `frontend/index.html:153-161` | **不得删除**面包屑/h1；本报告的"层级重复"只能靠工具栏与卡片标题做减法 |
| 硬约束：组件实底 + 边框 + 阴影 | 项目记忆 | B1 不得用透明/毛玻璃方案 |
| 硬约束：顶部搜索框固定 220px、二级标签 ≤12 个 | `css/header.css:281-282`、`nav-merge-core.js` | 与本次改动无冲突，勿回退 |
| i18n | `calendar-page.js:89-90`（"载入示例组合（6 只）""去配置数据池"）、`:152`（`action-text="刷新数据"`）、`:280`（策略名硬编码表） | 新文案必须走 `t()`；顺带补齐上述 4 处 |

---

## 6. 验收清单（DoD）

**视觉**
- [ ] 1312×967 下工具区 ≤52px，首屏非数据占用 ≤220px
- [ ] 列表最后一行完整可见，无任何裁切/粘连；名称单行不折行
- [ ] 卡面与页底对比 ≥1.25:1（截图复测，脚本同本报告 1.2 口径）
- [ ] 同屏胶囊语汇 ≤2 种；主 CTA 唯一
- [ ] 亮/暗双主题下 `--qc-border` 描边仍可辨（暗色沿用统一蓝底约束）

**交互**
- [ ] 后端不可达 → 显示错误态 + 重试，**不出现**"暂无数据/载入示例组合"
- [ ] 刷新失败 → toast + 时间戳回到上次成功时间
- [ ] 导出 → 有 loading 与完成提示；导出条数 = 当前筛选+搜索后的条数
- [ ] ←/→ 可翻日期；筛选页签键盘焦点可见、方向键可切换
- [ ] 筛选变更后右栏不被静默替换

**工程**
- [ ] `tests/test_frontend_consistency.py`、`test_virtual_coverage_631.py`、`test_a11y_631.py`、i18n 全绿
- [ ] 重建 `parity_golden` 指纹并说明差异
- [ ] 前端构建 + Service Worker 缓存清理 + 版本参数刷新（防旧资源）
- [ ] 版本号同步 `APP_VERSION` / README / HANDOVER 三处

---

## 7. 本次未覆盖（建议下一轮补）

1. **暗色主题**（项目硬约束要求暗底统一蓝）——本轮仅测亮色/金色主题，暗色下 `--qc-muted` 与 `--qc-card` 相对关系可能反向，需单独截图核验。
2. **移动端 390×844 实机**：本轮仅做代码级复核（44px 触控、375px 溢出规则已存在），未出图。
3. **逐点对比度**：只测了面与面的层级对比，未逐文本节点测 AA（4.5:1）。
4. **性能**：`loadConsensusData` 有请求级缓存 + 静默刷新，未做首屏 TTI 测量；A3 若关闭虚拟滚动需先补 200 行以上的渲染耗时基线。

---

*报告生成：2026-10-27 · 依据 6.5.5 实测渲染与源码审计 · 证据截图 `_eval_shots/cal_audit_20261027_viewport.png`*
