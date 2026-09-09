# 量化日历 V6.0 开发计划（DEV-PLAN 6.0 · 导航与菜单系统重构）

- **文档版本**：v1.0（正式版）
- **日期**：2026-09-09
- **产品基线**：v5.4.1（refactor/ui-v6 分支）
- **配套**：PRD-v6.0.md | TEST-PLAN-v6.0.md
- **开发分支**：`refactor/ui-v6`（本地，不 push 主线）

---

## 0. 开发原则

1. **先地基后组件**：Token / 主题 / Lucide / SFC 基线 → 导航组件。
2. **零回归**：每里程碑结束跑全量测试 + 手动冒烟，确保既有功能不破。
3. **渐进替换**：旧 token 通过别名兜底，绝不一夜全改。
4. **单组件 ≤30KB**：SFC 组件超限即拆分。
5. **每次提交可回滚**：小步提交，注释中文。

---

## M0 地基（设计系统 + 构建）

### M0-1 Token 全量迁移（`frontend/css/tokens.css`）
- 从 `quant-calendar-ui-redesign/colors_and_type.css` 全量引入 `--qc-*` 体系（primary/neutral/semantic/market/aliases/nav/radius/shadow/space/font/layout + `.dark`）。
- **兼容别名**：为现有 `--sp-*`/`--font-*`/`--radius-*`/`--sidebar-width`/`--sidebar-collapsed-width`/`--header-height`/`--mobile-nav-height`/`--shadow-*` 等全部旧 token 添加 `var(--qc-*)` 别名映射。
- 检查 `themes.css`/`layout.css` 中被引用但未定义的 token，补齐别名。
- **验收**：现有页面样式零变化（截图对比）；门禁 `test_tokens_defined` 全绿。

### M0-2 金色主题落地（`frontend/js/themes.js` + `themes.css`）
- 新增 `gold` 主题（key：`gold`，name：`金色`），色板对齐 colors_and_type.css 金色 scale。
- `applyTheme(saved || 'gold')` 改为默认 gold（保留已保存主题优先）。
- themes.css 增加 `[data-theme="gold"]` 主色变量段（基于现有 vibrant-orange/classic-gold 收敛）。
- **验收**：新用户默认金色；老用户偏好保留；CDP 4 主题截图对比正常。

### M0-3 Lucide 图标接入（`package.json` + 入口）
- `npm i lucide-vue-next`（Vue3 原生组件版）或 `lucide` UMD CDN（按 D1 决方案）。
- 建立 `src/components/common/` 图标封装（`AppIcon.vue`，name prop → Lucide 组件映射 + emoji 回退）。
- **验收**：构建通过；AppIcon 在示例中正常渲染。

### M0-4 构建 SFC 基线升级（`vite.config.mjs` + `package.json`）
- `npm i vue @vitejs/plugin-vue`（若 D1 为 npm 引入）。
- vite.config.mjs 增加 `vue()` 插件 + `build.rollupOptions.output.manualChunks` 分包（vue/lucide 独立 chunk）。
- src/main.js 保留现有副作用导入顺序（组件 SFC 化后逐步替换对应 import）。
- **验收**：`npm run build` 通过；dist 产物正常；后端 serve dist 冒烟。

---

## M1 一级侧边栏（Sidebar SFC）

### M1-1 菜单分组元数据（`app-logic.js`）
- `allMenuDefs` 增加 `group: 'research' | 'platform'` 字段。
- 保留 menus computed 的过滤逻辑（groupsConfig / researchMenuEnabled / guest）。
- **验收**：menus 输出带 group 字段，原有过滤不回归。

### M1-2 `Sidebar.vue`（`src/components/Sidebar.vue`）
- 模板结构：Logo 区 → 分组标签(2) → 一级项（icon/name/badge/chevron）→ 底部折叠按钮。
- 折叠态：仅图标 + Tooltip（300ms）；子菜单折叠态隐藏。
- 子菜单展开：展开态显示 children；`@click` 父级跳转首子项；Chevron 旋转。
- 交互：`Ctrl+B` 折叠；`localStorage.sidebar_collapsed` 持久化。
- 无障碍：`<a>` + `aria-current`；展开按钮 `aria-expanded/controls`；focus 可见。
- 保持通过 `inject('qcState')` 读取 menus/currentPage/sidebarCollapsed 等。
- **验收**：桌面展开/折叠/子菜单/徽标/Tooltip 全状态可用；键盘可走通。

### M1-3 `nav.css`（`frontend/css/nav.css`）
- 全部导航样式用 `--qc-*` token；折叠/展开 250ms 过渡；四态样式；徽标 pill；Tooltip。
- **验收**：样式门禁通过（无硬编码色值，qc-allow-hardcode 例外清单内）。

---

## M2 顶部 Header（Header SFC）

### M2-1 面包屑派生（`app-logic.js`）
- `breadcrumbs` computed：当前页父级 + 当前子页；基于 currentPage/currentSubPage/menu defs。
- **验收**：面包屑随导航变化正确。

### M2-2 `Header.vue`（`src/components/Header.vue`）
- 三区：左（折叠按钮/汉堡 + 面包屑）、中（全局搜索 320px + Ctrl+K）、右（通知红点 + 主题切换 + 用户头像菜单）。
- **移除**二级 Tab（迁 M3）；**迁移**日历日期选择/刷新/导出到日历页面操作区（需在日历页组件内补渲染点，保持功能）。
- 用户菜单：保留重置向导/修改密码/主题选择/退出，样式新 token。
- 通知：红点徽标（现有通知数据源若无则先 UI 占位 + 注释 TODO）。
- **验收**：Header 三区完成；日历操作不丢；移动端汉堡触发抽屉。

### M2-3 `header.css`（`frontend/css/header.css`）
- Header 56px、面包屑、搜索框（muted 圆角 full + focus ring）、工具按钮、用户头像。
- **验收**：样式门禁通过。

---

## M3 页面级二级导航（SubNav SFC）

### M3-1 `SubNav.vue`（`src/components/SubNav.vue`）
- 双形态：
  - **顶部 Tab 式**（strategies/calendar/ai/shortterm）：Tab 容器 + 2px 主色底边 + 指示器滑动 200ms + fade 150ms。
  - **左侧子导航式**（research/system）：分组标签 + 二级项(36px) + 三级项(缩进28px/32px) + 分组折叠。
- 页面标题 + 操作区 slot（日历操作区挂载点）。
- 移动端：segmented control / 下拉（按项数）。
- 与现有 `currentSubPage` 状态双向绑定；点击更新子页 + `localStorage.quant_last_subpage`。
- **验收**：6 页二级形态正确；子页切换/KeepAlive 不回归。

### M3-2 系统配置分组映射（`app-logic.js` 或 SubNav 配置）
- 系统配置子导航 4 组 12 项（见 PRD 1.2.3），叶节点映射现有 9 个 subPage（数据源健康/调度任务→status；AI 用量→usage；AI 事实护栏→autoeval）。
- **验收**：系统配置左侧子导航分组显示，点击正确切页。

### M3-3 global-header.js 瘦身
- 移除其二级 Tab + 日历操作区（迁 Header.vue / SubNav）；保留搜索/用户菜单逻辑（已被 Header.vue 接管后逐步废弃）。
- **验收**：无重复渲染；功能不丢。

---

## M4 移动端导航（MobileNav SFC）

### M4-1 `MobileNav.vue`（`src/components/MobileNav.vue`）
- 底部 TabBar：5 项（首页/日历/AI/研究/我的），图标 22px + 文字 11px，active 主色，safe-area。
- 抽屉：280px；Logo+品牌+关闭 / 一级菜单（分组）/ 底部主题+语言+退出；遮罩点击关闭；300ms 滑入。
- 焦点管理：开→首元素，关→触发按钮；`aria-expanded/controls`。
- 断点联动：<768 TabBar+抽屉；768-1279 侧边栏折叠；≥1280 侧边栏展开。
- **验收**：三档断点切换正确；抽屉键盘可关。

### M4-2 `responsive.css` 导航断点段
- 移动端隐藏侧边栏/Header 精简；平板默认折叠侧边栏。
- **验收**：三档断点无横向溢出。

---

## M5 收尾

### M5-1 无障碍补全（导航）
- 对比度检查（WCAG AA）：nav token 色值对比度验证（金色 700 vs 50 底等）。
- 键盘完整走通：Tab / Enter / Space / Esc / 方向键（子菜单）。
- **验收**：axe 或人工检查零 A 级问题。

### M5-2 未保存提示（系统配置表单页）
- 表单 dirty 检测（现有 system-page 表单）→ 导航离开确认对话框（离开/留在当前页）。
- **验收**：修改未保存时切导航弹确认。

### M5-3 全量回归 + 冒烟
- 全量 pytest 全绿；前端门禁（令牌/术语/一致性/v-html）全绿。
- 双端（dev/ops）启动冒烟 0 pageerror；CDP 截图导航 6 页。
- **验收**：测试计划全绿。

### M5-4 文档同步
- README / DEPLOYMENT / component-contract 更新导航组件契约。
- APP_VERSION bump 6.0.0（backend/main_new.py）+ dist 重建入库。
- **验收**：文档与代码一致。

---

## 任务依赖图

```
M0-1 → M0-2 → M0-3 → M0-4
                ↓
M1-1 → M1-2 → M1-3
M2-1 → M2-2 → M2-3
M3-1 → M3-2 → M3-3
M4-1 → M4-2
M5-1 → M5-2 → M5-3 → M5-4
```

---

## 里程碑出口检查表

| 里程碑 | 出口 |
|---|---|
| M0 | 现有功能零回归；构建通过；gold 默认生效 |
| M1 | 桌面侧边栏全状态可用；键盘走通 |
| M2 | Header 三区 + 面包屑 + 日历操作不丢 |
| M3 | 6 页二级形态正确；系统配置分组 |
| M4 | 三档断点正确 |
| M5 | 全量测试绿 + 冒烟 0 error + 文档同步 + 6.0.0 |
