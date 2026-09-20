# DEV-PLAN v5.12.0 — 界面体验与工程收敛（UX-6）

- 对应 PRD：`docs/PRD-v5.12.0.md`
- 基线：v5.11.1（4cada8b）｜目标：v5.12.0
- 工作方式：dev 仓库开发 → 单测/审计 → 构建 → dev 服务验证 → ops 同步 → 群辉推送

## 0. 决策记录（用户问卷已确认，2026-09）

| # | 决策点 | 结论 |
|---|---|---|
| D1 | 默认密度 | **标准 32px 为默认**，用户可切紧凑（保留"与今天一致"的兜底） |
| D2 | 命中区范围 | **仅按钮/输入框/下拉/链接**；表格标签与胶囊保持紧凑 |
| D3 | 登录页形态 | **双栏（左品牌区 + 右表单）**，窄屏品牌区折叠为顶部品牌条 |
| D4 | KPI 卡装饰 | **移除全部彩色左边框**，图标统一品牌浅底 |
| D5 | 毛玻璃 | **侧栏/头部改实底**，浮层保留 |
| D6 | 工程债 | **保守清理**（删死 token + 断点归一 + 只去重复 `!important`），**单版本 5.12.0** |

## 1. 任务分解（WBS）

### T1 — 密度模式生效与命中区（FR-5.12.1）
| 任务 | 文件 | 说明 |
|---|---|---|
| T1.1 | `js/preferences.js`、`src/main.js`（或 app-logic 启动路径） | 启动即调用 `applyDensity()`，把 `info_density` 落到 `<html data-density>` |
| T1.2 | `js/app-logic.js`、`js/preferences.js` | 状态暴露 `density` + `setDensity(v)`（写入偏好 + 立即应用 + 持久化） |
| T1.3 | `src/components/Header.vue`、`js/locales/*.js` | 外观面板新增「信息密度」三档；i18n key `appearance.density.*` |
| T1.4 | `css/tokens.css` | 新增 `--qc-ctrl-h/-sm/-lg`、`--qc-icon-btn`、`--qc-hit`（三档 + 触控媒体查询），并映射 EP `--el-component-size*` |
| T1.5 | `css/components.css` | 命中区兜底：`.el-button / .el-input__wrapper / .el-select__wrapper / .qc-icon-btn / [role=button]` 最小高度 |
| T1.6 | `css/nav.css`、`css/layout.css` | 三档下行高/卡片间距的既有规则补齐（compact 保持现值，spacious 放宽） |

### T2 — 登录页重塑（FR-5.12.2）
| 任务 | 文件 | 说明 |
|---|---|---|
| T2.1 | `index.html` | 登录区改 `.login-shell` 双栏结构（品牌区 / 表单区），表单绑定与 v-if 不动 |
| T2.2 | `css/themes.css` | `.login-screen/.login-brand-pane/.login-form-pane/.login-brand-bar` 新样式；`≤900px` 折叠为单列 |
| T2.3 | `index.html` | 访客按钮由 `type="primary"` 降级为默认次要按钮 |

### T3 — 视觉降噪（FR-5.12.3）
| 任务 | 文件 | 说明 |
|---|---|---|
| T3.1 | `css/themes.css`、`js/components/strategies-page.js` | KPI 卡去彩色左边框；`.stat-icon-*` 变体统一品牌/中性浅底 |
| T3.2 | `css/themes.css`、`css/layout.css` | `.sidebar`、`.qc-header` 去 `backdrop-filter`，改实底 + 1px 边 |

### T4 — 图表令牌贯通（FR-5.12.4）
| 任务 | 文件 | 说明 |
|---|---|---|
| T4.1 | `js/watchlist.js` | 评分趋势图基础 option 改用 `getEChartsTheme()` 并注册 `registerChart` |
| T4.2 | `js/echarts-theme.js` | 补 `grid`/轴标签字号/暗色对比度；`axisLabel` 与 `splitLine` 走令牌 |
| T4.3 | 验证脚本 | 6 色相 × 明暗实测轴 ≥3:1、网格 ≥1.5:1 |

### T5 — 工程债（FR-5.12.5）
| 任务 | 文件 | 说明 |
|---|---|---|
| T5.1 | `css/tokens.css`、`css/themes.css` | 删除死 token（脚本判定：CSS `var()` + JS `getCSSVar()` 双扫，扣除正则误报） |
| T5.2 | `css/*.css` | 断点归一 480/768/1024/1280（767→768、1100→1024、1279→1280） |
| T5.3 | `css/themes.css` | 删除同选择器同属性的重复 `!important` 声明（228 → ≤160） |

## 2. 里程碑

| 里程碑 | 内容 | 出口条件 |
|---|---|---|
| M1 | T1 完成 | dev 上三档密度可切、`data-density` 生效、命中区断言通过 |
| M2 | T2+T3 完成 | 登录页截图复核 + KPI 卡/毛玻璃实测为 0 |
| M3 | T4 完成 | 图表主题覆盖率 100%，暗色轴/网格达门禁 |
| M4 | T5 完成 | 死 token 0、断点 4 档、`!important` ≤160 |
| M5 | 回归与发布 | 对比度审计 0、测试基线不变、dev/ops/群辉三方一致 |

## 3. 依赖与约束

- 无新增 npm/pip 依赖；不触碰后端 API 契约。
- 每次改 CSS/JS 后必须 `cd frontend && ./node_modules/.bin/vite build`，再重启 dev 服务验证。
- 主题/密度相关断言沿用既有门禁脚本（`test_tokens_*` / `test_theme_contrast` / `test_components_tokens`）。

## 4. 交付物

1. 代码：上述文件改动 + `dist` 构建产物
2. 文档：本文件、`docs/PRD-v5.12.0.md`、`docs/TEST-PLAN-v5.12.0.md`
3. 证据：三档密度截图、登录页（宽/窄屏）截图、KPI 卡对比、图表明暗对比、审计输出

---

## 5. 执行结果与偏差记录

### 5.1 完成情况
| 任务 | 状态 | 说明 |
|---|---|---|
| T1 密度生效与命中区 | ✅ | preferences.applyDensity 接入启动路径；app-logic 新增 density/changeDensity；Header 外观面板新增三档；tokens/components/header CSS 三档令牌 + 命中区下限 |
| T2 登录页双栏 | ✅ | index.html 重构为 .login-shell(品牌区/表单区)；访客按钮降级；≤900px 折叠；.login-desc 由 .login-tagline 取代 |
| T3 视觉降噪 | ✅ | KPI 彩边清零（themes.css 与 components.css 两处来源都改）；图标统一品牌浅底；sidebar/page-header/global-header 去毛玻璃 |
| T4 图表令牌贯通 | ✅ | 趋势图接入 getEChartsTheme() + registerChart；轴/网格改用 --chart-axis/--chart-split；修正涨跌标记色为 A 股口径 |
| T5 工程债 | ⚠️ 部分 | T5.1 部分完成（见 5.2）；T5.2 完成；T5.3 放弃（见 5.3） |

### 5.2 T5.1 偏差：死 token 50 → 33 删除 / 17 保留
最初判定「死 token 50 个」。删除前做全仓库引用扫描时发现，其中 17 个被 4 个门禁测试**显式保护**，属刻意的量表成员或兼容层，不能删：

- tests/test_v66_m2_tokens.py::test_compat_layer_preserved → --sp-1 / --r-sm（及整个 sp/r 兼容量表）
- tests/test_theme_shadows_v482.py → --shadow-sm / --shadow-md / --shadow-lg（暗色必须递增覆盖）
- tests/test_semantic_tokens_v532.py → --color-up/down-strong/weak、--sem-neutral、--sem-warning
- tests/test_motion_tokens_v532.py → --easing-exit

因此实际删除 33 个（--bg-dialog / --bg-dialog-header / --bg-sidebar / --card-padding / --dialog-radius / --header-height / --nav-item-height / --mobile-nav-height / --subnav-width / --content-max-width / --transition-slow / --lh-tight / --qc-card-foreground 等孤儿令牌）。

**过程事故与修复**：首次删除把同行多声明的一整行一起删掉，误删了仍在使用的 --lh-normal / --lh-relaxed —— 被 test_tokens_defined 捕获，已恢复并按行安全重做。

### 5.3 T5.3 放弃：!important 保守去重不可行
实测「同选择器同属性完全重复」的 !important 仅 10 处（251 → 241），且去重实现会重排块内空白，破坏依赖按行解析的门禁（test_tokens_no_hardcode / test_theme_contrast 立即失败）。
按决策 D6「保守清理」的原则，**本轮不动 !important**，已回滚该改动；真正降到 ≤160 需要重构覆盖层级（属被否决的激进项），列入后续专项。

### 5.4 随实现同步更新的契约测试（3 处，均为实现变更的必要同步）
| 测试 | 变更 |
|---|---|
| test_frontend_consistency::test_login_branded | .login-desc → .login-tagline，并新增 .login-brand-pane/.login-form-pane/.login-brand-bar |
| test_v63_navmodes::test_breakpoint_overrides_present | 断点 767 → 768 |
| test_theme_walkthrough::test_trend_chart_theme_aware | --color-success → --qc-market-up/--qc-market-down（A 股口径） |
