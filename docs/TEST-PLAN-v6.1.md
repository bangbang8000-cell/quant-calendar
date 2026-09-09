# 量化日历 V6.1 测试计划（TEST-PLAN 6.1 · 三栏式布局与视觉系统统一）

- **文档版本**：v1.0（待评审）
- **日期**：2026-09-09
- **产品基线**：V6.0（refactor/ui-v6 分支）
- **配套**：PRD-v6.1.md | DEV-PLAN-v6.1.md
- **测试对象**：三栏式布局 / 页面组件去重 / 图标与主题统一 / Logo / 股票列表 / 动态页签

---

## 0. 测试策略

| 层 | 手段 | 工具 | 覆盖目标 |
|---|---|---|---|
| L1 静态门禁 | 令牌纪律 / 图标系统收敛 / 主题 key 收敛 / 无 1400px 限制 / v-html | pytest（tests/test_nav_tokens.py、test_frontend_consistency.py 等） | 代码层面无残留 |
| L2 单元 | 页签状态机 / 主题 HSL 生成 / 旧主题迁移映射 / hash 解析 | pytest（Node 或 py） | 纯函数正确性 |
| L3 组件行为 | 三栏布局 / 中栏二级 / 动态页签 / 主题切换 / Logo / 列表 | Playwright CDP | 交互正确性 |
| L4 视觉回归 | 三栏 / 页签 / 明暗主题 / 股票列表截图对比 | Playwright + 基线图 | 视觉一致 |
| L5 回归 | 既有功能全量测试 + 移动端 smoke | pytest 全量 | 零回归 |

---

## 1. 门禁测试（L1，新增/扩展）

### TC-6.1.1 三栏布局令牌纪律
- **断言**：`layout.css` / `nav.css` 无硬编码色值与固定像素宽度（`220px`/`200px`/`1400px` 必须走 token）；`--qc-sidebar-width` / `--qc-subnav-width` / `--qc-work-*` 有定义。
- **断言**：`themes.css` 中不再存在 `.main-content { max-width: min(1400px, …) }`。
- **状态**：扩展 `test_nav_tokens.py`。

### TC-6.1.2 图标系统收敛
- **断言**：全仓 grep 无 `iconSystem` / `icon_system` / `icon-system` / `switchIconSystem` 残留；`js/icons.js` 已删除。
- **断言**：菜单数据无 `icon` 字段（仅 `iconName`）。
- **状态**：新增测试文件 `tests/test_icons_single_system.py`。

### TC-6.1.3 主题模型收敛
- **断言**：`themes.js` 无 8 个具体主题定义，仅含 `generateLightTokens` / `generateDarkTokens` 与 hue 预设表。
- **断言**：`preferences.js` 含 `theme_hue` 键且默认 45。
- **状态**：新增/扩展。

### TC-6.1.4 页面组件去重
- **断言**：六个页面组件模板无 `.page-header` / 内部二级 Tab 切换 UI；中栏 SubNav 为唯一二级入口。
- **状态**：扩展 `test_frontend_consistency.py`。

---

## 2. 单元测试（L2）

### TC-6.2.1 页签状态机（对应 M5-1 纯函数）
- `openTab`：新开追加并激活；同 `(page, subPage)` 去重仅激活；超 8 淘汰最早未激活页签。
- `closeTab`：关闭激活页签 → 激活右侧相邻，无右侧则左侧；关闭组内最后一个 → 重建默认页签（首子页）。
- `getDefaultTab`：返回一级首个子页。
- 边界：空组、单页签组、满 8 上限、首子页关闭。
- **状态**：新增 `tests/test_tabs_core.py`。

### TC-6.2.2 主题 HSL 生成
- `generateLightTokens(hue)` / `generateDarkTokens(hue)`：主色系列随 hue 变化；暗色主色亮度 > 明色同阶；token 键集合完整（`--qc-primary-50…900` / 背景 / 边框 / 文字）。
- 边界：hue 0 / 359 / 非法值（越界钳制或回退默认 45）。
- **状态**：新增。

### TC-6.2.3 旧主题迁移映射
- 输入旧 `quant_theme` 各 key（dark-pro / classic-white / tech-blue / classic-red / rose-red / gold / classic-gold / vibrant-orange）→ 断言输出 mode/hue 与 PRD 2.4 表一致；无旧键时输出默认（light / 45）。
- 断言迁移"一次写入"：已存在 `theme_hue` 时不再覆盖。
- **状态**：新增。

### TC-6.2.4 hash 路由解析（回归）
- `#page` / `#page/sub` / `#page/invalid-sub` / 空 hash → 断言状态回写行为与 V6.0 一致（无效子页忽略）。
- **状态**：复用/扩展现有。

### TC-6.2.5 菜单结构（回归）
- `allMenuDefs` 断言：六个一级项、`group` 分组正确、无 `icon` 字段、`iconName` 均命中 AppIcon 白名单。
- **状态**：扩展现有菜单测试。

---

## 3. 组件行为测试（L3，Playwright CDP）

### TC-6.3.1 三栏布局渲染
- 桌面（≥1280）：断言 Sidebar 220px、SubNav 中栏 200px、Work Area 填满右侧（右缘贴屏，无 1400px 空白带）。
- 折叠：点击折叠按钮 → 中栏左移 64px，Work Area 左缘随动。
- 平板（1024）/ 移动（390）：断言断点形态（中栏隐藏 / TabBar 显示 / 工作区全宽）。

### TC-6.3.2 中栏二级全量
- 六个一级页面逐一进入：断言中栏显示该页二级项；点击切换子页 → 内容区更新、hash 变更为 `#page/sub`、中栏高亮跟随。
- 系统配置：断言 4 组三级可展开/收起，三级点击正确。

### TC-6.3.3 动态页签行为
- 打开：依次点击多个二级项 → 页签逐个追加并激活。
- 去重：重复点击已开页签 → 不重复追加，仅激活。
- 关闭：点 × → 激活邻接页签；关闭最后页签 → 重建默认页签。
- 上限：打开第 9 个 → 最早未激活页签被关闭（或默认页签不被淘汰）。
- 一级切换：切到另一级 → 页签栏刷新为该级页签；切回 → 恢复该级上次页签。
- 前进/后退：浏览器 back/forward → 页签激活与 hash 一致；hash 直接指向未开子页 → 自动加入并激活。
- 刷新：刷新后按 hash 恢复单个激活页签。

### TC-6.3.4 主题切换
- 明/暗/跟随系统三态；预设 6 色 + 自定义色相即时生效；`data-theme-mode` 属性正确。
- 老用户迁移：预置旧 `quant_theme` 后刷新 → 断言迁移后的 mode/hue 与界面一致。
- ECharts 图表随主题重绘（颜色更新）。

### TC-6.3.5 Logo 与股票列表
- 桌面侧边栏 / 移动抽屉 Logo 为彩色 K 线（取样像素含蓝/黄/红），登录页一致；切主题不变色。
- 替换清单页面（股票池 / 涨停池 / 策略列表 / 回测历史）行元素 class 含 `qc-stock-row`；hover / 选中态可见。

---

## 4. 视觉回归（L4）

### TC-6.4.1 基线截图组
- 三栏布局：策略总览（含页签栏）/ 量化日历 / 短线复盘 / 系统配置，桌面 1440 与 1280。
- 主题：明色金 / 明色蓝 / 暗色金，同一页面三张。
- 股票列表：股票池 / 涨停池 / 自选股 / 回测历史。
- 折叠态 + 移动端 TabBar / 抽屉。
- **比对阈值**：与基线像素差 ≤ 0.5%（沿用 V6.0 视觉回归流程，`tests/e2e/visual_regression.py` 扩展）。

---

## 5. 回归测试（L5）

### TC-6.5.1 全量 pytest
- 全仓测试套件全绿（重点：导航 / 主题 / 菜单 / 前端一致性 / 无障碍 / i18n / 移动端 smoke）。
- 页面组件去重后：各子页数据加载相关测试（日历 / AI / 系统配置 / 短线复盘）无回归。

### TC-6.5.2 移动端 smoke
- 复用 `tests/e2e/mobile_smoke.py`：底部 TabBar / 抽屉 / 二级可达 / 页签可滚动 / 底部安全区留白。

### TC-6.5.3 无障碍抽查
- 键盘：一级/中栏菜单 ↑↓ + Enter 可达；页签 Ctrl+Tab 切换；焦点可见。
- ARIA：中栏 `aria-label`、页签 `aria-selected`、关闭按钮 `aria-label`、Logo `aria-label`。

---

## 6. 退出条件

1. L1–L5 全部用例通过，无 P0 缺陷残留。
2. 视觉回归基线比对通过（或已确认的基线更新）。
3. 六个一级页面人工冒烟清单全部打勾。
4. 全量 pytest + 移动端 smoke 绿。
