# DEV-PLAN v6.3：导航形态配置化与顶部栏容器化

> 版本：v6.3（草稿，待评审）
> 状态：待用户评审
> 前置：PRD-v6.3（本计划唯一需求来源）

---

## 0 基线

- 分支：`refactor/ui-v6`（本地，未 push）
- 当前 HEAD：`ed59d73e`（合并主线 v5.4.3 后）
- 构建：`frontend/` 下 `npm run build`（Vite，dist 输出 `frontend/dist/`）
- 测试：`tests/`（pytest + 前端门禁）；已知 1 项 pre-existing 失败 `test_transition_tokens.py::test_transition_uses_tokens_or_standard`（V6.0 handover 有意设计冲突，**不属于本期回归范围，不触碰**）
- 后端：`main_new.py` 版本号 6.2.0 → 本期 bump **6.3.0**

---

## 1 实施总原则

1. **纯函数先行**：导航形态逻辑抽 `nav-mode-core.js`（UMD，仿 `tabs-core.js` 模式，可单测）。
2. **配置驱动**：`data-navmode` 单一事实源驱动 CSS/组件显隐，不散落 if/else。
3. **零后端改动**：全部前端实现。
4. 每里程碑结束跑对应门禁，最后统一构建 + 全量回归 + 提交。

---

## 2 里程碑与任务

### M0 快速项：样式容器化 + 圆角修复 + 命名修复

> 目标：先交付用户可直接感知的 1/2/5 三点；无架构风险。

| # | 任务 | 验收 |
|---|---|---|
| M0.1 | **F2 圆角实测定位**：启动本地预览，浏览器检查 `.qc-dynamic-tab` 实际生效的 `border-radius` 与来源规则（computed style + 命中规则） | 产出结论：为何显示椭圆（覆盖未生效/顺序/特异性），记录到代码注释 |
| M0.2 | **F2 修复**：将页签圆角收敛为 `--qc-radius-small`(6px)；删除 nav.css `.qc-dynamic-tab` 的 `--qc-radius-full` 分支；统一所有页签形态（含 Header 内与任何残余形态） | 浏览器实测页签为 6px 圆角矩形 |
| M0.3 | **F1 顶部栏容器化**：`.qc-header` 加 `border-radius: var(--qc-radius-large)`；`main-content` 顶部 padding 调整为「12 + 56 + 12」结构（header 上 12 / 下 12 间隙）；`overflow:hidden` 协调渐变遮罩；<768px 归零/收窄 | 桌面 Header 为悬浮圆角条、与工作区 12px 间隙；移动端贴边无溢出 |
| M0.4 | **F5 修复 + 审计**：`subPageNames` 补 `evaluation-analysis`；写审计脚本（或测试用例）以 `allMenuDefs` 全量 subPages diff `subPageNames`，补齐遗漏 | 中栏/页签/移动端下拉/授权对话框 4 处显示「评估分析」；审计用例通过 |
| M0.5 | **M0 门禁**：新增 `tests/test_v63_m0_gates.py`（页签圆角 token、Header 圆角与间隙、subPageNames 完整性） | 门禁通过；`npm run build` 通过 |

### M1 状态层：nav-mode-core + 全局状态接入

> 目标：引入「形态 + 页签开关」状态，不改变任何 UI 行为（默认 subnav/tabs 开 = 现状）。

| # | 任务 | 验收 |
|---|---|---|
| M1.1 | 新增 `frontend/js/nav-mode-core.js`（UMD 挂 `__quantModules.navModeCore`）：`NAV_MODES = ['subnav','tree','toptab']`、`normalizeNavMode(v)`、`tabsVisible(navMode, tabsEnabled)`、`readPrefs()/writePrefs()`（localStorage `nav_mode`/`tabs_enabled`） | 单测覆盖：非法值归一化、`tabsVisible` 矩阵、localStorage 读写 |
| M1.2 | `app-logic.js` 接入：`navMode = ref(navModeCore.readPrefs().navMode)`、`tabsEnabled = ref(...)`；导出到 `state`；根状态返回 | `state.navMode` / `state.tabsEnabled` 可用；默认 `subnav` / `true` |
| M1.3 | `index.html` 根容器绑定 `:data-navmode="navMode"`；CSS 加 `[data-navmode="subnav"]` 等占位规则（当前行为不变化） | 默认形态渲染与现状一致（截图 diff 零差异） |

### M2 tree / subnav 形态条件渲染

> 目标：实现两种形态的真实差异（树状二级 与 中栏二选一）。

| # | 任务 | 验收 |
|---|---|---|
| M2.1 | `Sidebar.vue`：`showChildren = navMode==='tree' && hasChildren(menu)`；subnav/toptab 下不渲染 chevron + children | tree 模式树状展开；subnav 模式侧栏无二级 |
| M2.2 | `SubNav.vue`：`v-if="navMode==='subnav'"`（根 aside 条件渲染） | subnav 显示、tree/toptab 隐藏 |
| M2.3 | `nav.css` 布局联动：`[data-navmode="tree"] .main-content`、`[data-navmode="toptab"] .main-content` 的 `margin-left` 仅含侧栏宽度（`calc(var(--qc-sidebar-width) + ...)` 减中栏）；中栏隐藏时其 fixed 定位元素 `display:none` | 三种形态下 `main-content` 左边距正确，无跳动 |
| M2.4 | 页签联动：`DynamicTabs` 挂载条件 `v-if="(navMode==='subnav'||navMode==='tree') && tabsEnabled"`（Header.vue） | `tabsEnabled=false` 或 toptab 下不渲染页签 |
| M2.5 | **M2 门禁**：`tests/test_v63_navmodes.py` 组件渲染断言（形态→元素显隐）+ 左边距 computed 断言 | 门禁通过 |

### M3 toptab 形态：Header 二级横向标签

> 目标：第三种形态落地。

| # | 任务 | 验收 |
|---|---|---|
| M3.1 | 新增 `frontend/src/components/TopTabs.vue`：读 `state.menus` 当前一级页 subPages 横排渲染（icon + label + 激活高亮），点击 `state.openTab(currentPage, sp)`；样式复用 `.qc-dynamic-tab` 视觉（不可关闭、无右键） | toptab 形态下 Header 显示二级 tab 并可切换 |
| M3.2 | `Header.vue`：`v-if="navMode==='toptab'"` 渲染 `<qc-top-tabs>`，替换动态页签位；注册组件（main.js `__quantComponents.TopTabs`） | toptab 下无动态页签、有二级 tab |
| M3.3 | `app-logic.js` 键盘导航（Ctrl+Tab）与 hash 联动在 toptab 下仍可用（tab 点击走 openTab 即天然兼容） | toptab 下 Ctrl+Tab 正常 |
| M3.4 | **M3 门禁**：toptab 渲染/隐藏规则 + `tabsVisible` 联动断言 | 门禁通过 |

### M4 配置入口：功能配置页「界面与导航」

| # | 任务 | 验收 |
|---|---|---|
| M4.1 | 系统配置 → 功能配置（feature）页新增「界面与导航」区块：导航形态下拉（3 选项，label 用 i18n）+ 动态页签开关（toptab 下 disabled + 提示） | UI 可操作 |
| M4.2 | 事件接线：变更 → `navMode.value` / `tabsEnabled.value` 更新 + `navModeCore.writePrefs` + 即时生效（无需刷新） | 切换即时生效；刷新后保持 |
| M4.3 | i18n：zh-CN / en 语言包补 `navMode.*` / `tabsEnabled.*` key | 双语显示正常 |
| M4.4 | **M4 门禁**：配置写入 localStorage + 状态同步断言 | 门禁通过 |

### M5 响应式 + 构建 + 回归 + 发布

| # | 任务 | 验收 |
|---|---|---|
| M5.1 | 移动端三形态：<768px 侧栏抽屉（现有）、`subnav` 中栏隐藏 + 下拉、`tree` 抽屉树状、`toptab` 二级 tab 窄屏折叠为下拉（复用 `qc-subnav-picker`）；1024–1279px toptab 横向滚动 + 遮罩 | 三形态在 375/768/1280 视口可用 |
| M5.2 | `responsive.css` 补充 `[data-navmode]` 断点规则；Header 圆角在 <768 归零 | 无溢出/无横向滚动条 |
| M5.3 | 版本 bump：`main_new.py` `APP_VERSION = "6.3.0"`（保留本地版本线）；`npm run build` | 构建通过，`/api/health` version 6.3.0 |
| M5.4 | 全量回归：新增 V6.3 门禁 + 既有 V6.x 门禁 + 前端相关用例；`tests/` 关键集通过（除 pre-existing `test_transition_tokens`） | 无新增失败 |
| M5.5 | 本地提交（不 push）：按 M0–M5 分次提交，消息含 v6.3 前缀 | `git log` 干净、工作区仅余 `_shots/` |

---

## 3 涉及文件清单

| 文件 | 操作 |
|---|---|
| `frontend/js/nav-mode-core.js` | **新增** |
| `frontend/src/components/TopTabs.vue` | **新增** |
| `frontend/src/components/Sidebar.vue` | 改（tree 条件渲染） |
| `frontend/src/components/SubNav.vue` | 改（subnav v-if） |
| `frontend/src/components/Header.vue` | 改（toptab 区 + 页签 v-if） |
| `frontend/src/main.js` | 改（TopTabs 注册） |
| `frontend/js/app-logic.js` | 改（navMode/tabsEnabled 状态、subPageNames 补齐） |
| `frontend/index.html` | 改（data-navmode 绑定） |
| `frontend/css/nav.css` / `header.css` / `responsive.css` | 改（形态规则、Header 圆角、页签圆角） |
| `frontend/js/locales/zh-CN.js` / `en.js` | 改（新增 key） |
| `frontend/js/components/system-page.js` 或 feature 配置模块 | 改（配置入口） |
| `backend/main_new.py` | 改（版本号 6.3.0） |
| `tests/test_v63_m0_gates.py` / `test_v63_navmodes.py` | **新增** |
| `tests/tabs_core.test.js` 或新增 `tests/nav_mode_core.test.js` | **新增**（纯函数单测） |

## 4 不做的事（本期明确排除）

- 每页独立导航形态（D1 已定全局）。
- 页签在 toptab 形态下的显示（D2 语义，二级 tab 承担）。
- 后端用户组配置新增字段（授权与形态解耦）。
- `test_transition_tokens.py` pre-existing 失败修复（独立于本期的历史设计冲突）。
