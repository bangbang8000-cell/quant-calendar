# TEST-PLAN v6.9.4：存量问题整改测试计划

> 版本：v1.0（待用户终审授权）
> 状态：待批准
> 创建日期：2026-09-13
> 需求来源：《PRD-v6.9.4.md》/《DEV-PLAN-v6.9.4.md》
> 前置：PRD-v6.9.4.md / DEV-PLAN-v6.9.4.md

---

## 1 测试策略

- **层级**：L1 契约门禁（pytest）+ L2 代码/内容断言 + L3 浏览器实证（关键视觉与交互）。
- **回归口径**：全量 `pytest tests/ -q`，失败数 ≤ 现状基线 **34**，且 5 项门禁项转绿（net ≤ 29）；**无新增失败**。

## 2 用例矩阵

### F1 共识度进度条移除

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T1 | StockList 无进度条渲染 | 代码断言（test_v69x4） | StockList.vue 不包含 `qc-stock-consensus-bar`/`qc-stock-consensus-fill` |
| T2 | CSS 规则清理 | 代码断言 | components.css 无 `.qc-stock-consensus-bar`/`.qc-stock-consensus-fill` 定义 |
| T3 | TOP5/共识榜保留信息 | 浏览器实证（admin 或 mock 数据） | 行内显示「N 策略」+「X%」+ 价格涨跌，无条状图形 |
| T4 | 契约：`qc-stock-consensus-pct`/`qc-stock-badge` 仍存在 | 代码断言 | StockList 保留 pct 文本与徽章 |

### F2 EP 样式表替换

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T5 | lib css 与 node_modules 一致 | 文件断言（新测试） | `frontend/lib/element-plus.css` == `node_modules/element-plus/dist/index.css`（字节一致） |
| T6 | 含 select__wrapper 规则 | 文件断言 | lib css 含 `.el-select__wrapper` 规则（≥10 条） |
| T7 | 自有覆盖保留 | 代码断言 | components.css 仍含 `flex-wrap: nowrap !important` 与 `.el-select__selected-item` 省略 |
| T8 | 下拉单行/居中 | 浏览器实证（策略研究/系统配置各取 1 页） | `.el-select__wrapper` 无换行（wrapper 高度≈`--el-component-size-small`）、文字与箭头同行、垂直居中 |
| T9 | 无新增视觉回退 | 浏览器抽样 | 按钮/表格/弹层/分页/消息盒正常渲染（取 5 页快照对比） |

### F3 导航形态面板精简

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T10 | 描述行移除 | 代码断言 | Header.vue 无 `.qc-navmode-item-desc`；header.css 无对应规则 |
| T11 | 字体对齐 | 浏览器实证 | 3 项主标签计算字号一致（13px）且高度一致 |
| T12 | 选中态 | 浏览器实证 | 当前形态项含 ✓ 且 `is-active`；点击切换后移动 |

### F4 主题模式高亮

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T13 | themeMode 为响应式 ref | 代码断言 | app-logic.js `themeMode` 定义含 `ref(`（非 `computed`）；`changeTheme` 内赋值 `themeMode.value` |
| T14 | 三态高亮联动 | 浏览器实证 | 分别点 浅色/深色/跟随 → 对应按钮 `is-active` 且 `data-theme-mode` 一致 |
| T15 | 功能配置子页同验 | 浏览器实证（admin） | 界面与个性化-外观模式按钮高亮与 Header 面板一致 |
| T16 | 色板不影响模式 | 浏览器实证 | 切换 hue 后模式高亮不变 |

### F5 深色输入框适配

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T17 | 变量映射存在 | 代码断言 | themes.css dark-pro 块含 `--el-input-bg-color`/`--el-fill-color-blank` → `var(--bg-card)` |
| T18 | 输入框深色 | 浏览器实证 | dark-pro 下日期输入 `.el-input__wrapper` 计算背景非 `rgb(255,255,255)` |
| T19 | select 触发器深色 | 浏览器实证 | dark-pro 下 `.el-select__wrapper` 背景深色、文字浅色 |
| T20 | 亮色回归 | 浏览器实证 | light 下输入框背景白/浅、无暗色变量泄漏 |

### F6 策略研究可诊断性 + seq 修复

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T21 | 空数据 warn | 后端测试（mock data_parser 空） | `GET /api/strategies` 返回 200 + `strategies:[]` + `warn` 含「数据文件」 |
| T22 | 前端错误卡 | 浏览器实证（guest 或 mock） | 响应含 warn → 显示「未检测到策略数据文件」错误卡 + 重试 |
| T23 | seq 修复 | 代码断言 | research-page.js 5 个函数均含 `const seq = ++_reqSeq` 且 finally 引用；grep 无裸 `if (seq === _reqSeq)` |
| T24 | 交互不卡死 | 浏览器实证（mock 接口） | 点击因子IC/分层/详情/对比/导出后 loading 均能结束 |
| T25 | 既有用例回归 | pytest | test_shortterm_*/test_research_* 目标集无新增失败 |

### F7 宽度类收敛

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T26 | 语义类定义 | 代码断言 | components.css 定义 `w-select-xs/sm/md/lg` |
| T27 | 旧类清退 | 代码断言 | 模板无 `class="w-90`/`w-100px`（保留别名则仅 2 处）；无 `w-100`~`w-220` 残留（白名单除外） |
| T28 | 渲染宽度 | 浏览器实证 | 抽查 3 页 select 宽度符合语义类（90/110/140/180/220） |

### F8 门禁测试清理

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T29 | 菜单契约 | pytest | `test_v63_m4_config.py::test_feature_page_has_nav_section` 通过（断言更新为 qc-icon 形态） |
| T30 | token 定义 | pytest | `test_tokens_defined.py` 通过（--qc-success 系已定义） |
| T31 | tokens_no_hardcode darkpro | pytest | 若 F5 范围含 `#0b1220` token 化则通过；否则标 known-issue |
| T32 | 版本号 | pytest | `APP_VERSION == "6.9.4"`；`/api/health` 或启动日志 version=6.9.4 |

## 3 回归与发布门禁

1. 全量 `python -m pytest tests/ -q -u`：失败数 ≤ 34 且门禁项 T29-T32 转绿（**净减少 ≥ 4**，理想 29 左右）；无新增失败。
2. `npm run build` 成功；`frontend/dist/index.html` 引入的 CSS/JS 引用与构建产物一致。
3. 后端重启自检 `ok≥7 warn≤1 fail=0`，启动日志 version=6.9.4。
4. 浏览器实证清单（T3/T8/T9/T11/T12/T14-T16/T18-T20/T22/T24/T28）逐项通过并截图留档。
5. 提交 git（`feat(v6.9.4): ... [skip ci]` 惯例）。

## 4 通过标准

- 全部 L1/L2 用例通过；L3 实证用例无阻塞缺陷（P1 级）。
- 回归基线：34 失败 → ≤29（5 项门禁修复）且无新增。
- 用户侧验收：下拉控件观感、深色输入框、主题模式高亮、策略研究错误提示 4 项人工复核通过。
