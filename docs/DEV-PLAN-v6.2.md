# 量化日历 V6.2 开发计划（DEV-PLAN 6.2 · 导航与界面细节收口）

- **文档版本**：v1.0（待评审）
- **日期**：2026-09-09
- **产品基线**：V6.1（三栏式布局与视觉系统统一）
- **配套**：PRD-v6.2.md | TEST-PLAN-v6.2.md
- **开发分支**：沿用分支纪律，本地开发，不 push 主线

---

## 0. 开发原则

1. **先视觉后结构**：图标/搜索（低风险）→ Header 页签迁移 → StockList 组件化（回归面最大放后）。
2. **零回归**：每里程碑结束跑全量相关测试 + 手动冒烟；StockList 逐入口替换并保留交互。
3. **桌面先行**：页签迁 Header 先在桌面验证，再处理移动端收窄。
4. **先改测试后改代码**：涉及门禁断言（SubNav 图标、面包屑移除、页签 DOM 结构）时先更新测试（红→绿）。
5. **无新依赖**：不新增 npm 依赖。

---

## M0 二级图标补全

### M0-1 `AppIcon.vue` 白名单扩展
- 新增 import：`Star, MessageCircle, CalendarDays, CalendarRange, CalendarCheck`。
- `ICON_MAP` 注册：`star / message-circle / calendar-days / calendar-range / calendar-check`。
- **验收**：五个图标按 name 正常渲染；tree-shaking 生效（构建体积不显著增长）。

### M0-2 `SubNav.vue` 双层图标映射
- `SUB_ICONS` 改为 `{ [page]: { [subPage]: iconName } }`。
- `subIcon(page, sp)` 查找，未命中 `circle-dot`。
- 模板调用改 `subIcon(currentPage, sp)`；系统配置 `SYSTEM_GROUPS` 图标不变。
- **验收**：六个一级页二级项均显示语义图标；无 `circle-dot` 回退。

---

## M1 页签迁 Header + 关闭按钮 HTML 修复

### M1-1 `DynamicTabs.vue` 结构重构（F4）
- `button[role=tab]` → `div[role=tab]`（`tabindex=0`，Enter/Space 激活）。
- 关闭改为独立 `button[class=qc-dynamic-tab-close]`，`@click.stop` + `aria-label`。
- 移除组件自身的顶部边框/占位样式（交由 Header 容器控制）。
- **验收**：DOM 无嵌套交互元素；键盘可聚焦/激活/关闭；门禁断言更新（见 TEST-PLAN）。

### M1-2 桌面迁入 Header（F2）
- `Header.vue` 左区：汉堡 + `<qc-dynamic-tabs class="qc-header-tabs">`；删除面包屑模板与 `breadcrumbs` computed。
- `index.html`：从 `.qc-work-area-content` 删除 `<qc-dynamic-tabs>`。
- `nav.css` / `header.css`：`.qc-header-tabs` 横向滚动 + 渐变遮罩 + 28px 页签、激活态 `--qc-muted`；Header 左/中/右比例重排。
- **验收**：桌面页签位于 Header，无独立页签行；工作区内容从 Header 下直接开始。

### M1-3 移动端收窄（F2）
- <768px：页签横滚 + 渐变遮罩；允许只显示少量；搜索收缩（见 M2）。
- **验收**：375px 视口下页签可横滚、无横向溢出。

---

## M2 搜索框升级

### M2-1 宽度与居中
- `header.css`：`.qc-header-center` 最大 640px 居中；`.qc-header-search` 满宽 + `max-width: 480px`。

### M2-2 Ctrl+K 内置（suffix slot）
- `Header.vue`：`el-autocomplete` 增加 `#suffix` 渲染 kbd 徽标；删除独立 `.qc-header-search-kbd` span。
- 徽标样式：`border + --qc-radius-small + --qc-muted-foreground`。
- **验收**：kbd 显示于输入框内右侧；聚焦态描边不冲突。

### M2-3 占位符与移动端
- 语言包（zh-CN/en/ja/ko/zh-TW）搜索占位符缩短为「搜索股票、策略…」。
- <768px：`max-width:none`、隐藏 kbd、margin 适配。
- **验收**：五语言无缺词；375px 下搜索框正常。

---

## M3 StockList.vue 组件化

### M3-1 组件（`src/components/common/StockList.vue`）
- props：`items / showRank / activeCode / emptyText / loading`。
- 结构：`.qc-stock-list` → `.qc-stock-row`（rank / code+status / name / tags / `#extra` / `#actions`）。
- 事件：`select(item)`；选中态 `.is-active`；空态用 `qc-state-panel`（非 emoji）。
- 注册：`main.js` 写入 `__quantComponents.StockList`。
- **验收**：组件单测/冒烟渲染正确。

### M3-2 六入口替换
- 量化日历股票池（保留虚拟滚动，行渲染改用 StockList 行结构）。
- 策略总览共识排名 / 今日一屏。
- 智能评估自选股（保留复选/左滑到 `#actions/#extra`）、重点跟踪、评估历史。
- 短线复盘涨停池、龙虎榜卡片型条目（多字段表保留 el-table）。
- 策略研究策略列表、回测历史。
- **验收**：逐入口冒烟——交互（收藏/评估/K线/复选/左滑）零回归；视觉与 `.qc-stock-row` 一致。

---

## M4 移动端二级下拉 + 断点细化

### M4-1 Header「当前二级」下拉（F6）
- `Header.vue`：移动端汉堡旁增加「当前二级」按钮（当前 `subPage` 名 + chevron），点击弹下拉列出该一级全部二级项，选择后 `activateTab`。
- 下拉数据复用 `menus` + `subPageNames`。
- **验收**：移动端可通过下拉直达任意二级；选择后切换子页。

### M4-2 断点细化（F7）
- `nav.css`：`@media (1024-1279px)` `--qc-subnav-width: 180px`；`@media (768-1023px)` 160px + 超长 Tooltip。
- 工作区 `margin-left` 联动（`calc(sidebar + subnav)` 已用变量，自动生效）。
- **验收**：四档断点下中栏宽度与工作区位置正确。

---

## M5 页签交互增强（P3，按评审确认）

### M5-1 右键菜单
- 页签 `contextmenu` 弹出「关闭其他 / 全部关闭 / 刷新当前」。
- **验收**：菜单项行为正确；`tabs-core` 提供对应纯函数（`closeOthers` 等）。

### M5-2 未保存提示
- 页签内表单脏标记（复用 `configChanged` 机制）→ 关闭前确认。
- **验收**：脏页签关闭弹确认；取消不关闭。

### M5-3 拖拽排序
- 指针拖拽调整页签顺序，写入 `tabGroups`。
- **验收**：拖拽后顺序保持；激活态正确。

---

## 依赖与风险（开发侧）

| 项 | 说明 |
|---|---|
| 依赖 | 无新依赖；页签状态机复用 V6.1 `tabs-core.js` |
| 风险 | StockList 替换回归面最大（自选复选/左滑）；页签迁 Header 移动端拥挤。对策见 PRD §3 |
| 提交纪律 | 每任务独立提交；M1 桌面/移动端分步；StockList 逐入口提交 |
