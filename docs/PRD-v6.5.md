# PRD v6.5：短线复盘数据修复与全站界面美化

> 版本：v6.5（草稿，待评审）
> 状态：待用户评审
> 关联：PRD-v6.3 / PRD-v6.4（V6 导航与视觉体系延续；V6.4 评估报告为需求来源之一）

---

## 1 概述

### 1.1 背景

V6.4 评估报告交付后，用户基于实测使用提出了 7 项迭代需求，经「代码定位 + 后端复现 + 浏览器走查」三路交叉验证，确认以下现状：

1. **短线复盘-概览加载失败**（阻断）：[emotion_metrics.py](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/shortterm/emotion_metrics.py#L101-L111) 的 `_spot_pct_map()` 硬 `import akshare`，而运行环境 `requirements.txt` **未声明 akshare 依赖**，导致 `money_effect` 实时兜底路径抛 `ModuleNotFoundError` → `_overview_bundle` 整体 500 → 前端「加载失败」。
2. **龙虎榜无数据**：`lhb.py` 三级数据源降级（sxsc→东财→tushare）失败后返回 `{'available': False, 'reason': ...}`，但 API 层 `_load_or_fetch` 只透出 `rows=None`，前端把 `None` 当「暂无数据」渲染空表，降级原因不可见。
3. **搜索框过宽**：`header.css` 中 `.qc-header-search` 为 `flex:1 + max-width:320px` 弹性布局，仍显宽。
4. **个股/指数弹窗顶部信息框**：截图实测 `.detail-header` 已带圆角，但「股票详情分析」标题区与「代码+名称」头部区域在弹窗容器内存在剪裁/直角感，需确认弹窗容器 overflow 与圆角对齐。
5. **个股/指数弹窗界面美化**：与 #7 emoji 清理合并处理。
6. **系统配置二级菜单图标**：代码层 `SYSTEM_GROUPS` 每项 icon 均不同且 `AppIcon` 白名单全覆盖，走查实测图标正常区分；用户环境显示「无图标」高度疑似浏览器缓存旧版构建产物。
7. **全站 emoji 图标**：约 47 处彩色 emoji 硬编码散落在个股/指数弹窗、美林时钟、批量评估、系统页、短线复盘统计卡等模板中，与 Lucide 线条图标体系风格不一致。

### 1.2 目标

- 修复短线复盘-概览加载失败，任意指标异常不得拖垮整个看板（P0）。
- 龙虎榜数据源降级时，前端明确展示原因而非静默空表（P1）。
- 搜索框改为固定窄宽，贴近右侧铃铛图标（P2）。
- 个股/指数弹窗顶部信息区圆角矩形化、与容器对齐无剪裁（P2）。
- 全站 emoji 统一替换为 Lucide 线条图标，视觉风格一致（P0，工作量最大）。
- 核对系统配置二级菜单图标并解决缓存导致的「无图标」误报（P2）。

### 1.3 已确认决策（用户评审已拍板）

| # | 决策点 | 结论 |
|---|---|---|
| D1 | 搜索框形态 | **固定较窄宽度**（不随窗口弹性伸缩） |
| D2 | 弹窗顶部信息框圆角 | 特指「📈 股票详情分析」标题区 + 「股票代码+名称」头部 2 处改为圆角矩形并消除剪裁 |
| D3 | emoji 替换范围 | **全站清理**，静态渲染位全部替换为 Lucide 图标（动态/语义文本保留 emoji） |
| D4 | 系统配置二级菜单图标 | 以「代码已正确」为前提，先做缓存刷新验证；若仍异常再排查渲染 |

---

## 2 功能概览

| ID | 功能 | 类型 | 优先级 |
|---|---|---|---|
| F1 | 概览接口容错：`_spot_pct_map` 降级 + `_overview_bundle` 兜底 | Bug 修复 | P0 |
| F2 | 龙虎榜降级原因透出与前端提示条 | 功能 | P1 |
| F3 | 搜索框固定窄宽 | 样式 | P2 |
| F4 | 弹窗顶部信息框圆角矩形化 | 样式 | P2 |
| F5 | 全站 emoji → Lucide 图标 | 样式/架构 | P0 |
| F6 | 系统配置二级菜单图标核对（含缓存刷新） | 核对/修复 | P2 |

---

## 3 模块详述

### 3.1 F1 概览接口容错（核心，P0）

#### 3.1.1 根因

`emotion_metrics.py` 的 `_spot_pct_map()`（L101-L111）直接 `import akshare as ak` 并调用 `ak.stock_zh_a_spot_em()`。调用链：

```
money_effect() → _money_effect_realtime() → _spot_pct_map() → import akshare ✗
```

当 `money_effect` 未命中定稿记录（`fetch_prev_pool` 无数据）时走实时兜底路径，此时若环境缺 akshare（`requirements.txt` 未声明），直接抛 `ModuleNotFoundError`，穿透至 `_overview_bundle` → `/overview` 返回 500 → 前端显示「加载失败 数据获取出错，请稍后重试」。

**复现证据**：后端直接调用 `_overview_bundle('2026-09-10')` 抛 `ModuleNotFoundError: No module named 'akshare'`。

#### 3.1.2 修复逻辑

- `_spot_pct_map()` 内部 `try/except Exception` 包裹：import 失败或请求失败时 `return {}`（空映射）。`_money_effect_realtime` 已有「覆盖率不足」降级分支（`_coverage < _COVERAGE_MIN` → `{'available': False, 'reason': ...}`），空映射自然走该分支，不再抛错。
- `_overview_bundle()` 整体包 `try/except` 兜底：任一指标异常时返回带 `error` 标记的部分 bundle（已成功的指标照常返回），杜绝整体 500。
- 依赖核对：`requirements.txt` 是否需要补 akshare 属运维决策（见 §5 风险 R1），本期代码层面必须做到「无 akshare 也不崩」。

#### 3.1.3 交互与边界

- 正常路径：定稿记录命中 → 指标 `source: settled`，与现状一致。
- 降级路径：无定稿 + akshare 缺失/失败 → `money_effect` 返回 `{'available': False, 'reason': '[⚠️ ...]'}`，前端显示「数据不可用」而非报错。
- 异常路径：`_overview_bundle` 内其他指标抛错 → 返回部分 bundle + `error` 字段，`/overview` 仍 200。

### 3.2 F2 龙虎榜降级原因可见（P1）

#### 3.2.1 根因

`lhb.fetch_lhb()`（[lhb.py](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/shortterm/lhb.py#L140-L168)）三级源失败返回 `{'available': False, 'reason': '[⚠️ 龙虎榜｜... 数据获取失败已降级：...]'}`，但 `get_lhb`（[shortterm.py](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/api/v1/shortterm.py#L64-L68)）经 `_load_or_fetch` 只得到 `rows=None`，API 响应不含 `available`/`reason`。前端 [shortterm-page.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/shortterm-page.js#L431-L432) 将 `rows=null` 归入「暂无数据」空态（L241），无法区分「真无数据」与「获取失败」。

#### 3.2.2 修复逻辑

- 后端 `get_lhb` 保留 `lhb.fetch_lhb()` 原始返回，透出 `available` 与 `reason` 字段：
  - 缓存命中：`{'available': True, 'reason': None, 'rows': cached}`
  - 实时抓取：`{'available': out['available'], 'reason': out.get('reason'), 'rows': out['rows'] if out['available'] else None}`
- 前端 `loadLhb` 增加 `lhbReason` ref 存储 `res.reason`；模板在表格上方条件渲染黄色降级提示条（复用现有情绪指标降级样式），空态文案区分：
  - 有 `reason` → 提示「龙虎榜数据获取失败已降级」+ 原因摘要
  - 无 `reason` 且 rows 为空 → 「该交易日暂无龙虎榜数据」（真无数据）

#### 3.2.3 边界

- `available=False` 且 `reason` 含三个源错误摘要（长度较大）→ 前端折叠显示，仅展示首行摘要，详情可展开。
- 缓存命中时 `reason` 必须为 `None`，避免旧失败原因污染新数据。

### 3.3 F3 搜索框固定窄宽（P2）

**现状**：`.qc-header-search { flex: 1; min-width: 0; max-width: 320px; }`（[header.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/header.css#L220-L225)）。

**目标**：固定较窄宽度，贴近右侧铃铛图标。改为 `width: 220px; max-width: 220px;`（去掉 `flex:1` 弹性），使搜索框不再撑开中区、与铃铛图标间距自然。

**边界**：
- 桌面 ≥1280px：固定 220px。
- 1024–1279px：保持 220px（不随窗口缩放）。
- <768px：现有移动端逻辑（搜索框隐藏或收窄）不变。

### 3.4 F4 弹窗顶部信息框圆角矩形化（P2）

**现状**：`.detail-header`（[themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L1089-L1098)）已带渐变与圆角，但弹窗容器 `.el-dialog.kline-dialog` 的 overflow/圆角未与头部对齐，「📈 股票详情分析」标题区（弹窗 title 区域）与「代码+名称」头部存在直角剪裁感。

**目标**：
- 弹窗容器 `.kline-dialog` 补 `border-radius` 与 `overflow: hidden`（[components.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/components.css#L122-L129) 既有 `--qc-radius-xl`，需确认应用到位）。
- `.detail-header` 圆角与容器圆角对齐，四角圆润、无直角裁切。
- 弹窗 title（「📈 股票详情分析」）区域随容器圆角正确显示。
- 指数弹窗（`index-detail.js`）同步处理。

**边界**：滚动时内容不得溢出圆角；深色模式对比度正常。

### 3.5 F5 全站 emoji → Lucide 图标（核心，P0）

#### 3.5.1 现状

前端图标体系已由 [AppIcon.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/common/AppIcon.vue) 封装 Lucide 白名单映射。约 47 处硬编码 emoji 分布：

| 文件 | 处数 | 示例 |
|---|---|---|
| `js/components/dialogs/stock-detail.js` | ~27 | 🧠⚡📈🔬⚠💡📊🎯🛑🏁👤📦📋 |
| `js/components/dialogs/index-detail.js` | ~6 | 📈💹🕯🤖📌🔬 |
| `js/components/dialogs/merrill-detail.js` | ~10 | 美林时钟象限标签 |
| `js/components/dialogs/batch-evaluate.js` / `setup-wizard.js` | 各 ~2 | 按钮/步骤 |
| `js/components/shortterm-page.js` / `system-page.js` | 少量 | 📊🏦🔥📡 |

#### 3.5.2 修复逻辑

**第一步：扩展 AppIcon 白名单映射**（约 10-15 个 Lucide 图标）：

```
🧠→Brain   💡→Lightbulb   🛑→OctagonX   🏁→Flag
📦→Package  📋→ClipboardList  🕯→CandleStick  📌→Pin  📡→RadioTower
（⚡📈📊🎯🔬👤🤖⭐⚠💹 已存在：Zap/TrendingUp/BarChart3/Target/SearchCheck/User/Bot/Star/AlertTriangle/LineChart）
```

**第二步：替换各文件静态位置的 emoji**：
- Vue options JS 中静态模板位置直接插入 `<AppIcon name="xxx" :size="16"/>`，组件 `components` 注册 AppIcon。
- 仅替换**静态渲染位**；动态文本（如 AI 生成内容、状态文案语义）保留 emoji 或转为纯文本（低侵入）。

**第三步：构建版本号参数刷新缓存**：随本轮更新前端 `?v=` 参数（见项目既有约定），解决 #6 的缓存误报。

#### 3.5.3 边界与一致性

- AppIcon 白名单未匹配的 name 回退纯文本渲染（既有行为），替换时逐一核对图标存在。
- emoji 语义（如 🔄 刷新按钮）若已有 Lucide 对应（`RefreshCw`），一并替换。
- 替换后整站图标风格统一为 Lucide 线条体系。

### 3.6 F6 系统配置二级菜单图标核对（P2）

- 代码层已正确（`SYSTEM_GROUPS` 12 项 icon 各不相同 + AppIcon 白名单全覆盖 + 走查实测区分正常）。
- 处理：随 F5 的 `?v=` 版本刷新强制客户端重新拉取构建产物；走查确认强刷后 12 个二级菜单均显示各自图标。
- 若强刷后仍有个别项异常，补查 AppIcon 对应 SVG 映射与渲染分支。

---

## 4 影响面

| 域 | 影响 |
|---|---|
| `backend/shortterm/emotion_metrics.py` | `_spot_pct_map` 加 try/except 降级 |
| `backend/api/v1/shortterm.py` | `_overview_bundle` 兜底；`get_lhb` 透出 available/reason |
| `frontend/js/components/shortterm-page.js` | 龙虎榜降级提示条 + `lhbReason` 状态；统计卡 emoji 替换 |
| `frontend/css/header.css` | `.qc-header-search` 固定窄宽 |
| `frontend/css/components.css` / `themes.css` | 弹窗容器圆角/overflow、`detail-header` 圆角对齐 |
| `frontend/src/components/common/AppIcon.vue` | 新增约 10-15 个 Lucide 图标白名单 |
| `frontend/js/components/dialogs/*.js` | emoji → `<AppIcon>` 替换（约 5-8 个文件） |
| `frontend/js/components/system-page.js` 等 | emoji 清理 |
| `frontend/index.html` 或构建配置 | `?v=` 版本参数刷新 |
| `backend/main_new.py` | 版本号 bump 6.5.0 |

## 5 风险

1. **akshare 依赖缺失（R1，高）**：`requirements.txt` 未声明 akshare。本期代码层保证「无 akshare 不崩」（F1），但若希望实时兜底路径真正可用，需运维侧评估是否补装 akshare（其依赖较重，可能引入 pandas 版本冲突）——**本期默认不补装**，以降级提示为准。`[待确认]`。
2. **emoji 替换遗漏与风格不一致（R2，中）**：约 47 处分散 8 文件，逐一替换工作量大；以「静态渲染位」为界，动态文本保留，避免过度改造引入回归。
3. **弹窗圆角修改影响既有视觉（R3，低）**：`.el-dialog` 全局圆角 token 改动可能波及其他弹窗（批量评估/问股等），需回归走查。
4. **龙虎榜 reason 字段长度（R4，低）**：降级 reason 含多源错误摘要，前端需折叠展示防撑破布局。
5. **缓存误报（R5，低）**：#6 高度疑似缓存问题，`?v=` 刷新后需实测确认；若仍异常再深入排查。

## 6 验收标准（摘要，详见 TEST-PLAN）

- AC1 无 akshare 环境下 `/api/shortterm/overview` 返回 200，各指标带 `available` 字段，前端不显示「加载失败」。
- AC2 龙虎榜数据源全失败时，页面显示降级原因提示条（非纯空表）；真无数据时显示「暂无数据」。
- AC3 搜索框固定 220px，贴近铃铛图标，不随窗口伸缩。
- AC4 个股/指数弹窗顶部「📈 股票详情分析」标题区 + 代码/名称头部四角圆润、无直角剪裁。
- AC5 全站静态 emoji 替换为 Lucide 图标，风格统一；AppIcon 白名单无遗漏。
- AC6 强刷后系统配置 12 个二级菜单图标正常区分。
- AC7 既有 V6.x 门禁回归通过；版本 bump 6.5.0。

## 7 里程碑（详见 DEV-PLAN-v6.5）

| 里程碑 | 内容 |
|---|---|
| M0 | 快速项：F1 概览容错 + F2 龙虎榜降级透出（后端）+ F3 搜索框窄宽 |
| M1 | F6 缓存刷新核对 + F4 弹窗圆角 |
| M2 | F5 全站 emoji 替换（AppIcon 扩展 + 8 文件替换） |
| M3 | 构建 + 版本 bump + 全量回归 + 提交 |
