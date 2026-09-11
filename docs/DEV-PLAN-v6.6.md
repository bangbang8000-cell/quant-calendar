# DEV-PLAN v6.6：界面美术打磨收尾

> 版本：v6.6（草稿，待评审）
> 状态：待用户评审
> 前置：PRD-v6.6（本计划唯一需求来源）

---

## 0 基线

- 分支：refactor/ui-v6（本地）
- 当前版本：6.5.1（`main_new.py` APP_VERSION）
- 构建：`frontend/` 下 `npm run build`（Vite）
- 测试：`tests/`（pytest + 前端门禁）；既有 V6.5 门禁 `test_v65_m0_gates.py` / `test_v65_m2_icons.py` 为本期回归基准
- 运行：`http://localhost:8001`（uvicorn 后台进程，改后端需重启；改前端 CSS/JS 构建后即生效）

---

## 1 实施总原则

1. **纯前端改动**：不触碰后端业务逻辑与数据结构。
2. **emoji 替换以 AppIcon 白名单为唯一出口**：先扩白名单/改回退，再替换。
3. **token 迁移分期**：保留 tokens.css 兼容层，按「themes.css 高频 → layout/responsive/animations」顺序推进，每步构建+视觉抽查。
4. **内联样式按数据源区分**：固定阶段色→class，服务端实时色→保留内联（PRD §3.3 `[待确认]`）。
5. 每里程碑结束跑对应门禁，最后统一构建 + 全量回归 + 提交。

---

## 2 里程碑与任务

### M0 快速项：AppIcon 回退 + 状态指示 + 暗色收尾

> 目标：低风险组件/样式项先落地。

| # | 任务 | 验收 |
|---|---|---|
| M0.1 | **F2 AppIcon 回退**：`AppIcon.vue` 的 `comp()` 改 `ICON_MAP[name] || ICON_MAP['circle-dot']`；`v-else` 文本回退分支删除或改静默 | 非白名单 name 渲染 circle-dot；无文本外泄 |
| M0.2 | **F2 白名单补全**：按 F1 替换需要补 `star-off`/`upload`/`gem`/`folder-open`/`link`/`save`/`trash-2`/`pause`/`help-circle`/`play-circle` 等（确认 lucide 存在后加入） | 新 name 均映射成功 |
| M0.3 | **F6 状态指示**：system-page 数据源健康/self-heal 的 `✓/✗` → `<qc-icon name="check"/x>`；等级点 → `.qc-status-dot` | 状态区无文本 ✓/✗，图标化 |
| M0.4 | **F4 暗色语义色**：`themes.css` dark-pro 覆盖 `--color-success/warning/danger/info` 对齐 `--el-*`；`--bg-hover` 收敛 `--qc-nav-item-hover-bg`；`--qc-muted-foreground` 提亮 `#a0aec8` | 暗色下语义色/hover/muted 对比度达标 |
| M0.5 | **F4 弹窗实底**：dark-pro 下 `--el-dialog-bg-color`/`--el-dropdown-bg-color`/`--el-popover-bg-color` 设不透明 `--qc-card` 值 | 暗色弹窗/下拉无玻璃透底 |
| M0.6 | **M0 门禁**：`tests/test_v66_m0_gates.py`（AppIcon 回退、状态图标、暗色 token、弹窗实底） | 门禁通过 |

### M1 全站 emoji 清理（核心）

> 目标：F1 清零剩余约 78 处 emoji。

| # | 任务 | 验收 |
|---|---|---|
| M1.1 | **research-page.js**（~29 处）：概览标题/快捷入口/策略运行区 emoji → qc-icon 或彩色 dot + 文字 | 无装饰 emoji |
| M1.2 | **ai-page.js**（~21 处）：KPI 图标/批量操作/聊天视图按钮 → qc-icon | 无装饰 emoji |
| M1.3 | **calendar-page.js**（~10 处）：标题/股票行标记 → qc-icon | 无装饰 emoji |
| M1.4 | **focus-view.js**（~6 处）：等级映射（🔥🟢🟡⚪🔵）→ `.qc-status-dot` 彩色 dot + 文字标签 | 无装饰 emoji |
| M1.5 | **history-record.js**（~5 处）/ **command-panel.js**（~5 处）/ **global-header.js**（~2 处）/ **index.html**（~1 处） | 无装饰 emoji |
| M1.6 | **M1 门禁**：扩展 `test_v65_m2_icons.py` 扫描范围覆盖上述文件（语义标记白名单保留） | 装饰 emoji 计数 = 0 |

### M2 token 化 + 旧 token 迁移

> 目标：F3 内联样式 + F5 旧 token。

| # | 任务 | 验收 |
|---|---|---|
| M2.1 | **F3 工具类**：`css/components.css` 或新增 `css/utilities.css` 加 `.qc-text-*`/`.qc-bg-*-subtle`/`.qc-status-dot.is-*`/`.qc-merrill-*`（V6.2 评估 8.2 节） | 工具类可用 |
| M2.2 | **F3 strategies-page**（~12 处）：美林时钟 badge/阶段色改 class（`merrillData.color` 实时色保留内联） | 固定色项 token 化 |
| M2.3 | **F3 system-page**（~22 处）：状态色/健康度色 → 语义 class；实时/必要内联保留 | 固定色项 token 化 |
| M2.4 | **F3 ai-page**（~8 处）：评分/命中率色 → `.score-high/medium/low` class | 固定色项 token 化 |
| M2.5 | **F5 themes.css 高频迁移**：字号/间距/圆角/阴影旧 token → `--qc-*`（保留兼容层） | 高频区块旧 token 引用 -60% |
| M2.6 | **F5 layout/responsive/animations 迁移**：同类旧 token → `--qc-*` | 全站旧 token -40% |
| M2.7 | **M2 门禁**：`tests/test_v66_m2_tokens.py`（工具类存在、旧 token 引用计数下降、关键页面无 `var(--font-` 新增） | 门禁通过 |

### M3 构建 + 回归 + 发布

| # | 任务 | 验收 |
|---|---|---|
| M3.1 | 版本 bump：`main_new.py` `APP_VERSION = "6.6.0"` | `/api/health` version 6.6.0 |
| M3.2 | `npm run build` | 构建通过 |
| M3.3 | 全量回归：V6.6 门禁 + V6.5 门禁 + 既有 V6.x 门禁 + 前端相关用例 | 无新增失败 |
| M3.4 | 浏览器走查（桌面 1440 + 移动 375 + 暗色 dark-pro）：各页无 emoji 残留、图标统一、暗色可读、无布局回归 | 逐项截图存档 `dogfood-output/screenshots/` |
| M3.5 | 本地提交（不 push）：按 M0–M3 分次提交，消息含 v6.6 前缀 | `git log` 干净 |

---

## 3 涉及文件清单

| 文件 | 操作 |
|---|---|
| `frontend/src/components/common/AppIcon.vue` | 改（回退默认图标、白名单补全） |
| `frontend/js/components/research-page.js` | 改（emoji 替换） |
| `frontend/js/components/ai-page.js` | 改（emoji + 内联样式 token 化） |
| `frontend/js/components/calendar-page.js` | 改（emoji 替换） |
| `frontend/js/components/focus-view.js` | 改（等级 dot 化） |
| `frontend/js/components/history-record.js` / `command-panel.js` / `global-header.js` | 改（emoji 替换） |
| `frontend/js/components/system-page.js` / `strategies-page.js` | 改（内联样式 token 化、状态图标化） |
| `frontend/index.html` | 改（AI FAB 加载态） |
| `frontend/css/components.css` 或新增 `utilities.css` | 改/新增（语义工具类） |
| `frontend/css/tokens.css` / `themes.css` / `layout.css` / `responsive.css` / `animations.css` | 改（暗色收尾、旧 token 迁移） |
| `backend/main_new.py` | 改（版本号 6.6.0） |
| `tests/test_v66_m0_gates.py` / `test_v66_m2_tokens.py` / 扩展 `test_v65_m2_icons.py` | **新增/改** |

## 4 不做的事（本期明确排除）

- 后端任何改动（数据/API/权限）。
- 动态文本/AI 生成内容中的 emoji 替换。
- 一次性全站旧 token 重写（分期迁移，保留兼容层）。
- 动态页签重新引入（V6.4 用户决策已移除）。
- 服务端返回实时颜色的强制 class 化（保留内联，见 PRD §3.3 `[待确认]`）。
