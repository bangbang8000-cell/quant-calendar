# PRD v6.9.4：存量问题整改（下拉/主题/深色适配 · 策略研究可诊断）

> 版本：v1.0（待用户终审授权）
> 状态：待批准
> 创建日期：2026-09-13
> 需求来源：《EVAL-v6.9.4.md》评估报告（6 项用户反馈 + 7 项隐藏问题）
> 前置：EVAL-v6.9.4.md

---

## 0 版本目标

基于 v6.9.3 复核反馈，围绕 **下拉控件基础样式（EP CSS 错配根因）、主题系统响应式、深色适配完整性、策略研究可诊断性** 4 个维度修复 6 项需求并治理 6 项隐藏问题。目标版本 **6.9.4**。

## 1 功能需求

### F1 移除股票列表共识度进度条（需求 1 + H7）

**目标**：TOP5 / 共识榜行内去除语义重复的迷你进度条。

**需求**
- F1.1 [StockList.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/common/StockList.vue) `show-consensus` 分支删除 `.qc-stock-consensus-bar/fill`（虚拟 + 非虚拟两处）。
- F1.2 保留「共识 X%」文本与「N 策略」徽章；`.qc-stock-consensus` 布局改为单行 `X%`，与徽章、价格列并存。
- F1.3 CSS 清理 `.qc-stock-consensus-bar/.qc-stock-consensus-fill` 规则。

**边界**：仅影响 `show-consensus` 调用点（TOP5、共识榜）；日历股票池（show-rank）不受影响。

### F2 下拉控件基础样式修复（需求 2 + H1）

**目标**：根治 el-select 过宽/换行/不居中——替换错配的 EP 样式表。

**需求**
- F2.1 将 [frontend/lib/element-plus.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/lib/element-plus.css) 替换为 `node_modules/element-plus/dist/index.css`（2.14.5 与运行时对齐；含 `.el-select__wrapper` 25 条基础样式）。
- F2.2 保留 V6.9.3 自有覆盖（`.el-select__wrapper{flex-wrap:nowrap!important}`、选中项省略、工具栏 `flex:0 0 auto`），并补充 `.el-select__wrapper` 的 `height/min-height` 与 `.el-select__selection` 溢出处理，确保短/长文本均单行居中。
- F2.3 移除旧 `.el-select{margin:0 -20px}` 残留影响（替换新样式表后自然消除，回归确认）。

**边界**：替换后需全量视觉回归（按钮/表格/表单/弹层/分页）；若出现个别组件样式漂移，以自有覆盖在 components.css 兜底，不修改 node_modules。

### F3 导航形态面板精简 + 字体对齐（需求 3）

**需求**
- F3.1 [Header.vue](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/src/components/Header.vue#L283) 选项改为单行「标签 + ✓」：删除 `.qc-navmode-item-desc` 描述行。
- F3.2 统一字号：主标签 13px 中黑（`--qc-font-size-sm` + `--qc-font-weight-medium`），无副行；面板 `min-width` 收窄（~200px），行高对齐（36px）。
- F3.3 选中态保持 ✓ 图标 + `is-active` 高亮。

### F4 主题模式按钮高亮修复（需求 4 + H2）

**需求**
- F4.1 [app-logic.js:461](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/app-logic.js#L461) `themeMode` 由非响应式 computed 改为 `ref`：
  - init 读 `preferences.getPreference('theme') || 'system'`；
  - `changeTheme(modeOrLegacy, hue)` 内解析最终模式（legacy 经 `LEGACY_MAP`；system 取解析后实际模式）并同步 `themeMode.value`。
- F4.2 Header 主题面板与功能配置-界面与个性化 子页共用 `state.themeMode`，一处修复两处高亮生效。
- F4.3 回归：浅色/深色/跟随三态切换后按钮高亮与 `data-theme` 一致；切换色板不影响模式高亮。

### F5 日期选择器与输入框深色适配（需求 5）

**需求**
- F5.1 [themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css) dark-pro 块补充 EP 变量映射：
  `--el-input-bg-color / --el-fill-color-blank / --el-fill-color-light / --el-input-text-color / --el-input-placeholder-color / --el-input-border-color` → `--bg-card / --border-base / --text-primary / --text-disabled / --border-heavy`。
- F5.2 显式覆盖 `.el-input__wrapper`、`.el-select__wrapper` 背景/文字（`background:var(--bg-card); color:var(--text-primary)`），双保险覆盖 el-date-editor 输入框与 select 触发器。
- F5.3 亮色模式回归：不引入暗色变量泄漏（仅作用于 `[data-theme="dark-pro"]` 作用域）。

### F6 策略研究可诊断性 + 交互卡死修复（需求 6 + H3/H4）

**需求**
- F6.1 后端 [strategy_research.py:34](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/api/v1/strategy_research.py#L34) `GET /api/strategies`：数据文件缺失（`data_parser.holdings_data` 为空）时返回 `200` + `{ "strategies": [], "warn": "未找到策略持仓数据文件（多因子策略持仓*.csv 等），请检查 data 目录" }`（保持向后兼容）。
- F6.2 前端 `loadStrategies`：响应含 `warn` 字段时设置 `strategiesError` 文案为「未检测到策略数据文件」并展示错误卡（含重试）；纯数组空时保持空态。
- F6.3 修复 5 处 `finally` 中 `seq` 未定义 ReferenceError（`runFactorIc / runFactorLayer / runFactorDetail / runResearchCompare / exportResearchHistory`）：各函数入口 `const seq = ++_reqSeq;`，`finally` 恢复正确释放 loading。

**边界**：不改变策略数据结构；guest 被拒逻辑保持。

### F7 宽度工具类收敛（H5）

**需求**：将模板中 `w-100/w-110/w-120/w-160/w-180/w-200/w-220/w-100px` 与 `w-select-xs/sm/lg` 收敛为统一语义类：`w-select-xs(90) / w-select-sm(110) / w-select(140) / w-select-md(180) / w-select-lg(220)`，按控件语义替换并删除旧类定义（保留 `w-100px` 别名兼容美林时钟等两处）。

### F8 门禁测试清理（H6）

**需求**：修复遗留失败门禁使其干净通过：
- `test_v63_m4_config.py`：「🧭 界面与导航」断言更新为现行 `<qc-icon name="layout-dashboard"/> 界面与导航` 形态。
- `test_tokens_defined.py`：`--qc-success/--qc-warning/--qc-error/--qc-info` 及 `-50/-100/-700` 系在 themes.css/tokens.css 补齐定义（或改引已定义 token）。
- `test_tokens_no_hardcode.py::test_darkpro_usage`、`test_theme_shadows_v482`、`test_contrast`：dark-pro 硬编码 `#0b1220` 与对比度不达标按 token 化修复（若涉及本次 F5 范围外，标记 known-issue 不做扩大）。

---

## 2 非功能约束

- 版本号：`6.9.4`（[main_new.py](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/backend/main_new.py) `APP_VERSION`）。
- 兼容：F2 EP 样式表替换不改任何模板/逻辑；F4/F6 仅响应式/错误态增强；无数据迁移。
- 性能：无新增请求；策略空提示仅后端拼接字符串。

## 3 验收口径

1. TOP5/共识榜无进度条，保留「N 策略 + 共识% + 价格涨跌」。
2. 任意页面 el-select：宽度贴合内容、文字单行省略、箭头同行不换行、垂直居中。
3. 深色模式：日期选择器输入框/select 触发器为深色背景、浅色文字；浅色模式不变。
4. 主题面板点「浅色/深色/跟随」对应按钮即时高亮；功能配置子页同验。
5. 策略研究在数据缺失时展示「未检测到策略数据文件」错误卡（可重试）；因子IC/分层/详情/对比/导出点击后 loading 正常结束。
6. 全量回归无新增失败（遗留失败数 ≤ 现状基线 34，门禁项 5 个修复后下降）。
