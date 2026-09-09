# 量化日历 V6.2 测试计划（TEST-PLAN 6.2 · 导航与界面细节收口）

- **文档版本**：v1.0（待评审）
- **日期**：2026-09-09
- **产品基线**：V6.1（三栏式布局与视觉系统统一）
- **配套**：PRD-v6.2.md | DEV-PLAN-v6.2.md
- **测试对象**：二级图标 / 页签迁 Header / 搜索框 / 页签 DOM / StockList / 移动端二级入口 / 断点

---

## 0. 测试策略

| 层 | 手段 | 工具 | 覆盖目标 |
|---|---|---|---|
| L1 静态门禁 | 图标映射完整性 / 面包屑移除 / 页签 DOM 无嵌套 / StockList 引用 | pytest（test_frontend_consistency.py 扩展等） | 代码层面 |
| L2 单元 | 二级图标映射 / tabs-core 新纯函数 / StockList 数据映射 | pytest / Node | 纯逻辑 |
| L3 组件行为 | 页签迁 Header / 关闭回退 / 搜索 kbd / StockList 交互 | Playwright CDP | 交互正确性 |
| L4 视觉回归 | Header 一体化 / 中栏图标 / StockList 列表截图对比 | Playwright + 基线 | 视觉一致 |
| L5 回归 | 既有功能全量 + 移动端 smoke | pytest 全量 | 零回归 |

---

## 1. 门禁测试（L1，新增/扩展）

### TC-6.2.1 二级图标映射完整
- **断言**：`SubNav.vue` 的 `SUB_ICONS` 为双层结构（`[page][sp]`）；六个一级页全部 `sp` 均有映射；未命中回退 `circle-dot` 白名单存在。
- **断言**：`AppIcon.vue` 白名单含 `star / message-circle / calendar-days / calendar-range / calendar-check`。
- **状态**：新增/扩展。

### TC-6.2.2 面包屑移除
- **断言**：`Header.vue` 不含 `qc-breadcrumb` / `breadcrumbs`；`index.html` 工作区不含 `<qc-dynamic-tabs>`。
- **状态**：扩展。

### TC-6.2.3 页签 DOM 无嵌套
- **断言**：`DynamicTabs.vue` 模板中 `role="tab"` 元素为 `div`；`qc-dynamic-tab-close` 为 `button`；无 `button[role=tab] > *[role=button]` 结构。
- **状态**：扩展。

### TC-6.2.4 StockList 引用
- **断言**：`main.js` 注册 `StockList`；六个替换入口引用 `qc-stock-list` 组件或类；无新增内联 style。
- **状态**：新增。

---

## 2. 单元测试（L2）

### TC-6.2.5 二级图标映射
- 输入 `(page, sp)` 全组合 → 断言返回图标名；未命中返回 `circle-dot`。
- **状态**：新增（Node 或 py）。

### TC-6.2.6 tabs-core 新增纯函数（F8，若纳入）
- `closeOthers(groups, page, keep)` / `closeAll(groups, page)` → 断言结果与激活回退。
- **状态**：扩展 `tests/tabs_core.test.js`。

### TC-6.2.7 StockList 渲染数据
- 输入 items → 断言行结构（rank/code/name/tags）与 `select` 事件负载。
- **状态**：新增。

---

## 3. 组件行为测试（L3，Playwright CDP）

### TC-6.3.1 页签迁 Header
- 桌面（1440）：断言页签位于 Header 左区（`qc-header-left` 内）；无独立页签行；面包屑不存在。
- 点击页签 → 切换子页、hash 同步；关闭 → 回退相邻（复用 V6.1 用例）。
- 移动端（390）：断言页签横向可滚动；无横向溢出。

### TC-6.3.2 搜索框
- 桌面：断言搜索 480px 居中；kbd 徽标位于输入框内（`#suffix`）。
- 移动端：断言 kbd 隐藏；搜索框满宽。

### TC-6.3.3 二级图标
- 六个一级页逐一断言中栏二级项均含 SVG 图标（`lucide-*`），非文本回退。

### TC-6.3.4 StockList 交互
- 自选股：断言复选/评分/左滑操作保留；点行触发详情。
- 股票池/涨停池/回测历史：断言行渲染一致、hover/选中态可见。

### TC-6.3.5 移动端二级下拉
- 390px：断言 Header 显示「当前二级」下拉；选择二级 → 切换子页并关闭下拉。

### TC-6.3.6 断点
- 1024 / 768 两档：断言中栏宽度 180px / 160px，工作区 margin 联动。

---

## 4. 视觉回归（L4）

### TC-6.4.1 基线截图组
- Header 一体化（含页签）：桌面 1440 / 1280。
- 中栏二级图标：策略总览 / 智能评估 / 短线复盘。
- StockList：股票池 / 涨停池 / 自选股 / 回测历史。
- 移动端：390 页签横滚 + 二级下拉。
- **比对阈值**：像素差 ≤ 0.5%（沿用 V6.0 视觉回归流程）。

---

## 5. 回归测试（L5）

### TC-6.5.1 全量 pytest
- 全仓测试套件全绿（重点：导航 / 主题 / 页签 / 前端一致性 / 无障碍 / i18n / 移动端 smoke）。

### TC-6.5.2 移动端 smoke
- 复用 `tests/e2e/mobile_smoke.py`：底部 TabBar / 抽屉 / 页签横滚 / Header 下拉 / 底部安全区。

### TC-6.5.3 无障碍抽查
- 键盘：页签 Enter/Space 激活、关闭按钮可聚焦；Header 下拉可达。
- ARIA：`role=tablist/tab`、`aria-selected`、关闭按钮 `aria-label`。

---

## 6. 退出条件

1. L1–L5 全部用例通过，无 P0 缺陷残留。
2. 视觉回归基线比对通过（或已确认基线更新）。
3. 六个 StockList 替换入口人工冒烟清单全部打勾。
4. 全量 pytest + 移动端 smoke 绿。
