# 存量问题整改报告（V6.9.4 评估）

> 评估日期：2026-09-13 · 范围：6 项用户反馈 + 7 项隐藏问题（含浏览器实证）
> 状态：**待用户评审确认**（确认后进入 PRD + 开发/测试计划编写，批准后执行）

---

## 一、评估总览

| # | 需求/问题 | 根因（实证结论） | 影响面 | 整改建议 | 优先级 |
|---|-----------|------------------|--------|----------|--------|
| 1 | 移除股票列表共识度进度条 | StockList `show-consensus` 渲染「进度条 + %文本 + N策略徽章」三重信息，进度条与百分比数字语义重复 | TOP5 / 共识榜（组件同一处） | 删除进度条渲染，保留「共识 X%」文本 +「N 策略」徽章 + 价格列 | 高 |
| 2 | 下拉按钮过宽/文字箭头换行（复核未修复） | **根因=EP CSS/JS 版本错配**：`frontend/lib/element-plus.css` 为旧版（324,868B，`el-select__wrapper` 规则 0 条），运行时 EP 2.14.5 渲染新 DOM `.el-select__wrapper`（无基础样式）；旧 `.el-select{margin:0 -20px}` 仍作用于根类 | 全局 el-select/日期/输入 | ①`lib/element-plus.css` 替换为 node_modules 2.14.5 `dist/index.css`；②保留 nowrap/省略/防拉伸覆盖；③宽度类收敛统一 | 高 |
| 3 | 导航形态选项精简 + 字体对齐 | 面板 3 项各含「主标签14px + 描述11px」两行，项宽 223px；字体大小不齐 | Header 导航形态面板 | 精简：去掉描述行或压为一行；统一主/副字号与行高，收窄面板 | 中 |
| 4 | 主题面板选深色/跟随按钮不高亮 | `themeMode` 为 computed 读非响应式 `getPreference('theme')`；`changeThemeMode` 写偏好后 computed 不重算 → 高亮停留在初始值（实证：点深色后 data-theme=dark-pro 但按钮仍亮「跟随」） | Header 主题面板 + 功能配置子页（共享状态） | `themeMode` 改响应式 ref，`changeTheme`/`changeThemeMode` 内同步；init 从偏好读取 | 高 |
| 5 | 日期选择器不适配深色 | 实证：dark-pro 下日期输入 `.el-input__wrapper` 背景 `rgb(255,255,255)`；themes.css 暗色块只覆盖 `.el-input__inner`（旧 DOM），未覆盖 `.el-input__wrapper` / `--el-input-bg-color` / `--el-fill-color-blank` | 日历工具栏日期选择器 + 全局 el-input | dark-pro 补 `.el-input__wrapper` 背景/文字 + `--el-input-*` 变量映射（顺带覆盖 select 触发器） | 高 |
| 6 | 策略研究无法加载内容 | 前端**无回归**（V6.9.3 改动仅移除开关占位，页面渲染正常已实证）；数据为 0 因后端找不到策略持仓 CSV（启动日志 `找不到 多因子策略 的任何数据文件`，本环境 `data/` 无 `*持仓*.csv`）且 guest 被 `get_non_guest_user` 拒绝；空数据 UI 静默显示 0 | 策略研究页 + 部署数据 | ①核查部署数据文件；②后端空数据给出明确提示、前端空态提示「未找到策略数据文件」；③修复 5 处 `seq` 未定义导致的因子/对比/导出卡死（隐藏 H3） | 高 |

---

## 二、逐项详细评估

### 1. 移除股票列表共识度进度条

**现状（实证）**：[StockList.vue:84-89 / 134-139](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/common/StockList.vue#L84) `show-consensus` 同时渲染：
- 迷你进度条（`.qc-stock-consensus-bar` + `.qc-stock-consensus-fill`）
- 百分比文本（`.qc-stock-consensus-pct`，`pctOf(item)` = `consensus_level*100`）
- 「N 策略」徽章（`.qc-stock-badge`，`strategy_count`）

使用处（[strategies-page.js:177](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/strategies-page.js#L177)、[:452](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/strategies-page.js#L452)）：TOP5 与共识榜。

**评估**：进度条与右侧百分比数字表达同一信息，属于重复装饰；且 `consensus_level` 未对齐时条宽恒定 0% 更显"无意义"。**同意删除进度条**，保留「共识 X%」文本（有数值意义）与「N 策略」徽章（信息维度不同），配合价格列与标签列已足够丰满。

**整改**：StockList 移除 bar/fill 两个 div（虚拟/非虚拟两分支）；CSS 清理 `.qc-stock-consensus-bar/.qc-stock-consensus-fill`；`.qc-stock-consensus` 改单行 `X% · N 策略` 或保留双元素布局。

### 2. 下拉按钮过宽 / 文字与箭头换行（复核未修复）

**现状**：V6.9.3 已加 `.el-select__wrapper{flex-wrap:nowrap!important}` + 省略号 + `flex:0 0 auto`（served CSS 已确认生效），但用户复核仍存在宽/错位。

**实证根因（本次新发现）**：
- `frontend/lib/element-plus.css` = 324,868B，`el-select__wrapper` 规则 **0 条**、`el-select__caret` 6 条、`.el-select .el-input .el-input__wrapper` 引用存在 → **旧版 EP（约 2.3 时代）样式**。
- `frontend/node_modules/element-plus/dist/index.css` = 361,258B，`el-select__wrapper` **25 条**、`--el-fill-color-blank` 55 处 → 2.14.5 样式。
- 运行时 `window.ElementPlus.version` = **2.14.5**（渲染 `.el-select__wrapper` 新 DOM）→ 旧 CSS 对 select 触发器**基础样式全部缺失**（无高度/内边距/背景/圆角/焦点环），仅靠 components.css 的 `box-shadow` 兜底；旧 `.el-select{display:inline-block;margin:0 -20px;line-height:32px}` 仍作用于根类 → 观感"很宽/不居中/错位"。

**整改**：
1. `frontend/lib/element-plus.css` 替换为 `node_modules/element-plus/dist/index.css`（2.14.5 对齐）；或构建时由 Vite 引入 node_modules 版本，删除 lib 静态引用。
2. 保留并强化自有覆盖：`.el-select__wrapper` nowrap + `.el-select__selected-item` 省略 + `.qc-page-tools/.flex-c-gap-*` 内 `flex:0 0 auto` + 统一高度 `--el-component-size-small`。
3. 宽度工具类收敛：`w-90/100/110/120/140/160/180/200/220`、`w-100px`、`w-select-xs/sm/lg` 三套并存 → 统一为 `w-select*` 语义类（全局替换）。

### 3. 导航形态快捷按钮选项精简 + 字体对齐

**现状（实证）**：[Header.vue:283-295](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/Header.vue#L283) 面板 3 项，每项 `主标签(14px) + 描述(11px)` 两行；项宽 223px；容器背景已不透明（`rgb(16,26,46)`，V6.9.3 已修）。描述文案：「左侧一级 + 中栏常驻二级」等，信息冗余（用户已知三种形态）。

**整改**：选项精简为单行「标签 + ✓」；描述行删除（或压缩为一行 12px 弱化文案）；统一字号（主标签 13px 中黑、副 12px 次级色）与行高；面板 min-width 收窄至 ~200px。

### 4. 主题面板选「深色/跟随」按钮不高亮

**实证**：点「深色」后 `data-theme=dark-pro` 已切换，但 `.qc-theme-mode` 三个按钮仍 `跟随=is-active`。
**代码根因**：[app-logic.js:461-464](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L461)

```js
const themeMode = Vue.computed(() => {
  const P = window.__quantModules?.preferences;
  return (P?.getPreference?.('theme')) || 'system';   // 非响应式数据源
});
```
`changeThemeMode` → `changeTheme` → `_persistThemePref` 只写偏好（localStorage/后端），**没有任何响应式 ref 被更新** → computed 不重算，恒返回初始值。

**整改**：`themeMode` 改为 `ref`：
- init：读偏好（`getPreference('theme') || 'system'`）；
- `changeTheme(modeOrLegacy, hue)` 内：解析最终模式（legacy→`LEGACY_MAP`；system→实际解析值）后 `themeMode.value = 最终模式`；
- Header 与功能配置子页共用同一 `state.themeMode`，一处修复两处生效。

### 5. 量化日历日期选择器未适配深色

**实证**：dark-pro 下日历工具栏日期输入 `.el-input__wrapper` 计算背景 = `rgb(255,255,255)`（白）。
**代码根因**：themes.css 暗色块（[:504-508](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L504)）只覆盖 `.el-input__inner` 与 `.el-select .el-input__inner`（旧 EP DOM）；EP 2.14.5 输入框可见盒子是 `.el-input__wrapper`，背景取自 `--el-input-bg-color`（旧 CSS 默认 `#fff`），**暗色未重映射**。选择器弹层本身已有暗色覆盖（themes.css:553+），主要问题是**输入框**。

**整改**：dark-pro 块补充：

```css
[data-theme="dark-pro"] {
  --el-input-bg-color: var(--bg-card);
  --el-fill-color-blank: var(--bg-card);
  --el-fill-color-light: var(--border-base);
  --el-input-text-color: var(--text-primary);
  --el-input-placeholder-color: var(--text-disabled);
  --el-input-border-color: var(--border-heavy);
}
```
并在 `.el-input__wrapper` / `.el-select__wrapper` 显式设 `background: var(--bg-card); color: var(--text-primary)`（双保险）。同时覆盖 select 触发器与 el-date-editor 窄屏形态。

### 6. 策略研究无法加载内容

**实证结论**：
- 前端**无回归**：V6.9.3 对 research-page.js 的改动仅为移除开关占位（[git diff 已核对](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/components/research-page.js#L13)），页面渲染正常（浏览器实测进入研究概览、卡片/快捷入口均显示）。
- 数据为空根因（本环境）：`data/` 无 `多因子策略持仓*.csv` 等 4 个策略文件（[data_parser.py:20-41](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/data_parser.py#L20)），启动日志明确警告；`/api/strategies` 依赖数据文件产出 → 返回空 → 概览全部 0。
- guest 角色被 `get_non_guest_user` 拒绝（[strategy_research.py:35](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/api/v1/strategy_research.py#L35)）→ 静默 0 而非错误态。

**整改**：
1. 部署侧核查 4 个策略持仓 CSV 是否在 `data/`（缺失即复现"无法加载内容"）。
2. 后端：`/api/strategies` 在数据文件缺失时返回明确 `detail: "未找到策略持仓数据文件…"`；前端 `loadStrategies` 对非数组响应设置 `strategiesError` 并展示错误卡（含重试）。
3. 前端空态文案：概览 0 项时提示"未检测到策略数据文件，请检查 data 目录"。
4. **修复 H3（同页 5 处 `seq` ReferenceError）**。

---

## 三、隐藏问题清单（本次新增，含实证）

| # | 问题 | 位置 | 影响 | 证据 |
|---|------|------|------|------|
| H1 | **EP CSS/JS 版本错配**（lib 旧版 324,868B vs 运行时 2.14.5 361,258B，`el-select__wrapper` 0 vs 25 条） | `frontend/lib/element-plus.css` | 全局 el-select/input/日期 基础样式缺失/错位；问题 2、5 根因 | 文件字节数 + 规则计数对比 |
| H2 | `themeMode` computed 非响应式（共享状态） | `app-logic.js:461` | Header 主题面板 + 功能配置子页模式按钮均不高亮 | 浏览器实证 |
| H3 | 5 处 `finally { if (seq === _reqSeq) … }` 引用**未定义 `seq`** → ReferenceError | research-page.js `runFactorIc/runFactorLayer/runFactorDetail/runResearchCompare/exportResearchHistory` | 点击因子IC/分层/详情/对比/导出 → 加载态永久卡死 | 代码审查 |
| H4 | 空数据静默无提示 | `loadStrategies`/共识/研究历史 | 数据缺失时界面显示 0 而非可诊断提示 | 浏览器实证（guest 全 0） |
| H5 | 宽度工具类三套并存（`w-90…w-220` / `w-100px` / `w-select-*`） | 各页面模板 + components.css | 样式维护漂移，宽度不一致 | grep 统计 |
| H6 | 契约门禁遗留失败未清（`🧭 界面与导航` 断言、`--qc-success` 未定义、dark-pro 对比度、spacing 等） | tests/*.py | 回归基线不干净，掩盖新回归 | 全量回归 34 失败清单 |
| H7 | 共识信息三重冗余（bar+%+徽章） | StockList | 信息密度失衡 | 问题 1 |

---

## 四、版本与范围建议

- 版本号：`6.9.4`（增量修复，不涉及破坏性变更）。
- 建议范围：问题 1-6 全部纳入 + 隐藏问题 H1-H5（H6 顺带修复门禁断言使其回归干净，不扩大功能范围）。
- 前置依赖：问题 6 的部署数据核查需用户侧确认 `data/` 数据文件；H1 需在验证环境确认替换 EP CSS 后无视觉回退。

> 请评审以上评估与整改建议。确认后我将输出 PRD + DEV-PLAN + TEST-PLAN，再经您批准后开始编码。
