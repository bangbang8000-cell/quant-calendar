# 量化日历 V6.0 测试计划（TEST-PLAN 6.0 · 导航与菜单系统重构）

- **文档版本**：v1.0（正式版）
- **日期**：2026-09-09
- **产品基线**：v5.4.1（refactor/ui-v6 分支）
- **配套**：PRD-v6.0.md | DEV-PLAN-v6.0.md
- **测试对象**：导航与菜单系统（Sidebar / Header / SubNav / MobileNav）+ 设计系统地基

---

## 0. 测试策略

| 层 | 手段 | 工具 | 覆盖目标 |
|---|---|---|---|
| L1 静态门禁 | 令牌纪律 / 术语 / 一致性 / v-html | pytest（tests/test_frontend_consistency.py 等） | Token 无硬编码、组件结构一致、无 XSS 风险 |
| L2 单元 | 菜单分组/面包屑/折叠状态/二级映射纯函数 | pytest（Node 或 py） | 逻辑正确性 |
| L3 组件 | 导航组件行为（展开/折叠/子菜单/抽屉） | Playwright CDP | 交互正确性 |
| L4 视觉回归 | 导航页截图对比 | Playwright + 基线图 | 视觉一致 |
| L5 回归 | 既有功能全量测试 | pytest 全量 | 零回归 |

---

## 1. 门禁测试（L1，新增/扩展）

### TC-6.1 令牌纪律门禁
- **前置**：tokens.css 全量迁移 `--qc-*`。
- **断言**：
  1. `nav.css` / `header.css` 无硬编码色值（`#hex`/`rgb(` 必须 qc-allow-hardcode 例外清单内）。
  2. `--qc-*` 全 token 有定义（tokens.css 或 themes.css）。
  3. 旧 token 别名完整（`--sidebar-width` 等 var 引用存在）。
- **状态**：新增测试文件 `tests/test_nav_tokens.py`。

### TC-6.2 组件结构一致性门禁
- **断言**：Sidebar/Header/SubNav/MobileNav SFC 模板包含必需类名（`qc-sidebar`/`qc-header`/`qc-subnav`/`qc-mobile-nav`）、ARIA 属性（`aria-current`/`aria-expanded`）、`--qc-*` token 引用。
- **状态**：扩展 `test_frontend_consistency.py`。

### TC-6.3 图标系统门禁
- **断言**：导航组件模板不出现裸 emoji 图标（页面内 emoji 豁免清单除外）；使用 AppIcon/Lucide 组件。
- **状态**：新增。

---

## 2. 单元测试（L2）

### TC-6.4 菜单分组
- 输入 allMenuDefs → 断言 6 项分组正确（research 5 + platform 1）；分组标签「量化投研」「平台管理」。
- 断言 groupsConfig 过滤 / researchMenuEnabled / guest 角色过滤仍生效（复用现有用例）。
- **状态**：扩展现有菜单测试。

### TC-6.5 面包屑派生
- 输入 (currentPage, currentSubPage) → 断言面包屑数组（父级 + 子级标签）。
- 边界：无子页（策略总览 overview）、未知子页。
- **状态**：新增。

### TC-6.6 二级形态映射
- 断言映射表：strategies/calendar/ai/shortterm → top-tab；research/system → left-subnav。
- 断言系统配置 4 组 12 项叶节点 → 现有 9 个 subPage 映射（health/schedule→status，usage→usage，guard→autoeval）。
- **状态**：新增。

### TC-6.7 折叠状态持久化
- 折叠 true/false → localStorage `sidebar_collapsed` 读写正确；启动恢复。
- **状态**：复用/扩展现有。

### TC-6.8 移动端 Tab 映射
- 桌面一级 → 移动 Tab 5 项映射（strategies→首页，calendar→日历，ai→AI，research→研究，shortterm→研究抽屉，system→我的）。
- **状态**：新增。

---

## 3. 组件行为测试（L3，Playwright CDP）

### TC-6.9 Sidebar
- 展开态：分组标签可见；6 一级项；点击切页（currentPage 更新 + 懒加载）。
- 折叠态：仅图标；Tooltip hover 300ms 出现；`Ctrl+B` 切换。
- 子菜单：智能评估展开显示 6 子项；Chevron 旋转；父级点击跳首子项。
- 徽标：badge 渲染（若有数据源）。
- 键盘：Tab 聚焦 → Enter 激活 → aria-current 正确。

### TC-6.10 Header
- 三区渲染（面包屑/搜索/工具区）。
- 面包屑随页面变化；父级 hover 变色。
- 搜索：输入触发建议；Ctrl+K 打开命令面板。
- 用户菜单：打开/关闭/点击外部关闭；主题切换生效。
- 日历操作区：日期选择/刷新/导出已迁至日历页且功能正常。

### TC-6.11 SubNav
- 顶部 Tab：量化日历 5 Tab；选中态 2px 底边；切换更新 currentSubPage + KeepAlive 保留。
- 左侧子导航：系统配置 4 组展开/收起；三级项映射正确切页；内容区独立滚动。
- 策略研究 6 项左侧子导航。

### TC-6.12 MobileNav
- <768：底部 TabBar 5 项显示；文字标签可见；active 高亮。
- 抽屉：汉堡打开 → 遮罩点击关闭；焦点转移；Esc 关闭。
- 平板 768-1279：侧边栏默认折叠；无 TabBar。
- 桌面 ≥1280：侧边栏展开；无 TabBar/汉堡。

---

## 4. 视觉回归（L4）

### TC-6.13 导航视觉基线
- 截图基线：桌面展开/折叠侧边栏、Header、顶部 Tab、左侧子导航、移动 TabBar、抽屉（浅色 + 金色）。
- 断言：重构后截图与基线 diff < 阈值。
- **状态**：复用现有 e2e-visual harness。

### TC-6.14 主题切换
- gold / 其他主题切换 → 导航组件颜色随 token 变化；截图对比。

---

## 5. 回归测试（L5）

### TC-6.15 既有功能全量
- 全量 pytest 全绿（基线 v5.4.1 既有测试 + 新增）。
- 覆盖率门禁不降。
- 令牌/术语/一致性/v-html 门禁全绿。

### TC-6.16 双端冒烟
- dev/ops 双端启动 → 登录 → 6 个一级菜单逐一切换 → 0 pageerror。
- 移动端视口冒烟（375px）：导航 + 抽屉可用。

---

## 6. 验收清单（DoD 对齐 PRD 1.6）

| # | PRD DoD | 测试覆盖 |
|---|---|---|
| 1 | 侧边栏全状态 + 数据驱动不回归 | TC-6.4/6.7/6.9 |
| 2 | Header 三区 + Tab 迁出 | TC-6.10 |
| 3 | 二级导航双形态 + 系统配置分组 | TC-6.6/6.11 |
| 4 | 移动端 TabBar + 抽屉 + 断点 | TC-6.8/6.12 |
| 5 | 金色默认 + token 驱动 | TC-6.1/6.14 |
| 6 | SFC 化构建通过 | 构建 + TC-6.2 |
| 7 | 无障碍 | TC-6.9/6.12 键盘 + axe |
| 8 | 零回归 | TC-6.15/6.16 |
| 9 | 不 push 主线 | 流程检查（git 状态） |

---

## 7. 缺陷分级

| 级别 | 定义 | 出口要求 |
|---|---|---|
| P0 | 页面白屏/导航不可用/数据丢失 | 阻塞发布，必须修复 |
| P1 | 功能缺失或错误（Tab 不切页、抽屉不关） | 阻塞发布，必须修复 |
| P2 | 视觉/体验问题（对不齐、色差、动效不顺） | 可带发布，下个点版本修 |
| P3 | 微瑕（文案、间距） | 可带发布 |
