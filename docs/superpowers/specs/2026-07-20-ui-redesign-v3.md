# 量化选股日历 UI 全面焕新设计规范

> 版本：v3.0.0 | 日期：2026-07-20 | 状态：已确认，待实施

## 1. 概述

### 1.1 目标

对 `quant-calendar-ops` 项目前端进行全面 UI 焕新，覆盖配色系统、布局导航、视觉质感、响应式、代码结构、文案排版六大方向，确保优化后的界面美观、便捷、舒适、高效。

### 1.2 约束

- 保留 CDN 模式，不引入构建工具（Vue 3 + Element Plus + ECharts 均通过 CDN 加载）
- 所有优化在 `quant-calendar-dev` 中进行，不影响 `quant-calendar-ops` 运行环境
- 每步可独立验证、可回滚，确保不产生白屏
- 不破坏现有功能，渐进式改进

### 1.3 当前基线

| 指标 | 当前值 |
|------|--------|
| index.html | 6514 行单文件 SPA |
| themes.css | 4300 行，400+ !important，~900 行重复 |
| setup() | 3125 行单一函数 |
| 主题数 | 6 个 |
| 响应式断点 | 5 个碎片化值 |
| 页面过渡 | 无 |
| 图标系统 | 4 套 emoji/SVG 混用 |

### 1.4 设计决策

| 决策项 | 选择 |
|--------|------|
| 侧边栏 | 支持折叠（220px ↔ 56px） |
| 图标系统 | 精简为 2 套（现代简约 SVG 默认 + 经典 emoji 保留） |
| 主题 | 保留 6 个 + 新增暗色专业版（dark-pro） |
| 响应式策略 | 桌面端与移动端均衡支持（3 级断点） |

---

## 2. 设计 Token 体系

### 2.1 三层架构

```
Layer 1: 原始 Token（原子值，不可直接用于组件）
  → 色板 · 间距阶梯 · 字号阶梯 · 圆角阶梯 · 阴影阶梯 · 字重阶梯

Layer 2: 语义 Token（场景化，主题可切换）
  → --color-primary / --text-primary / --bg-page / --border-base ...

Layer 3: 组件 Token（组件级一致性）
  → --sidebar-width / --card-padding / --dialog-radius / --transition-fast ...
```

### 2.2 间距阶梯

| Token | 值 | 用途 |
|-------|-----|------|
| --sp-1 | 4px | 紧密间距 |
| --sp-2 | 8px | 小间距 |
| --sp-3 | 12px | 常规间距 |
| --sp-4 | 16px | 卡片内边距 |
| --sp-5 | 20px | 区块间距 |
| --sp-6 | 24px | 大区块间距 |
| --sp-8 | 32px | 页面边距 |
| --sp-10 | 40px | 大页面边距 |
| --sp-12 | 48px | 超大街区 |

### 2.3 圆角阶梯

| Token | 值 | 用途 |
|-------|-----|------|
| --r-sm | 6px | 按钮/标签/输入框 |
| --r-md | 8px | 小卡片/下拉菜单 |
| --r-lg | 12px | 卡片/表格 |
| --r-xl | 16px | 弹窗/大卡片 |
| --r-full | 9999px | 胶囊/头像 |

### 2.4 阴影阶梯

| Token | 用途 |
|-------|------|
| --shadow-xs | 卡片悬停微提 |
| --shadow-sm | 下拉菜单/弹窗 |
| --shadow-md | 模态弹窗 |
| --shadow-lg | 侧边栏抽屉 |

### 2.5 字号阶梯

| Token | 值 | 用途 |
|-------|-----|------|
| --fs-xs | 11px | 辅助文字 |
| --fs-sm | 12px | 次要文字 |
| --fs-base | 14px | 正文 |
| --fs-md | 16px | 小标题 |
| --fs-lg | 18px | 标题 |
| --fs-xl | 22px | 大标题 |
| --fs-2xl | 26px | 超大标题 |
| --fs-3xl | 32px | 数据展示 |

### 2.6 过渡时间

| Token | 值 | 用途 |
|-------|-----|------|
| --transition-fast | 150ms ease | 按钮/链接 hover |
| --transition-base | 250ms ease | 页面切换/弹窗/侧边栏 |
| --transition-slow | 400ms ease | 大区域动画 |

---

## 3. 配色系统与主题

### 3.1 主题列表

| 主题键 | 名称 | 类型 | 变更 |
|--------|------|------|------|
| tech-blue | 科技蓝 | 浅色 | 保留（默认） |
| rose-red | 玫瑰红 | 浅色 | 保留 |
| vibrant-orange | 土豪金 | 浅色 | 保留 |
| classic-white | 经典白 | 浅色 | 保留 |
| classic-red | 经典白(红) | 浅色 | 保留 |
| classic-gold | 经典白(金) | 浅色 | 保留 |
| **dark-pro** | **暗色专业版** | **深色** | **🆕 新增** |

### 3.2 暗色专业版（dark-pro）配色

| 语义 | 色值 | 用途 |
|------|------|------|
| --color-primary | #64ffda | 青绿主色，数据强调 |
| --color-secondary | #5e6ad2 | 紫蓝辅色，交互元素 |
| --color-accent | #e94560 | 玫红强调，涨跌/告警 |
| --bg-page | #0f0f23 | 页面背景 |
| --bg-card | #1a1a3e | 卡片背景 |
| --bg-sidebar | rgba(15,15,35,0.98) | 侧边栏背景 |
| --bg-hover | #233554 | 悬停背景 |
| --bg-selected | rgba(100,255,218,0.08) | 选中背景 |
| --border-base | #233554 | 基础边框 |
| --text-primary | #e6f1ff | 主文字 |
| --text-secondary | #8892b0 | 次要文字 |
| --text-tertiary | #506080 | 辅助文字 |

设计理念：灵感来自 Bloomberg Terminal，深色背景降低视觉疲劳，高对比度青绿强调数据。

### 3.3 主题文件结构

每个主题仅定义 18 个语义 Token，不再重复组件样式。7 个主题 × 18 行 = 126 行 + Element Plus 覆盖 ~400 行 = themes.css 总计 ~600 行（从 4300 行压缩）。

---

## 4. 布局与导航

### 4.1 侧边栏

- **展开态**：220px 宽，Logo + 图标 + 文字 + 当前页高亮（左侧 2px 色条 + 背景色）
- **折叠态**：56px 宽，仅图标 + 当前页高亮指示器，hover 显示 tooltip
- **切换方式**：底部按钮 ◀/▶、Logo 点击、快捷键 Ctrl+B、localStorage 持久化
- **动画**：250ms ease 宽度过渡
- **移动端**：侧边栏隐藏，底部导航栏保留

### 4.2 全局 Header

- 二级导航标签：底部色条指示器 + hover 背景变化 + 150ms fade 切换
- 搜索框：Ctrl+K 快捷键聚焦、搜索历史、无结果友好提示
- 用户菜单：头像 + 用户名 + 角色标签 + 主题实时预览缩略图

### 4.3 页面过渡

使用 Vue `<Transition>` 组件，`mode="out-in"`：

| 场景 | 效果 | 时长 |
|------|------|------|
| 页面切换 | fade + slide（Y 8px） | 200ms |
| 子页切换 | fade only | 150ms |
| 弹窗打开 | scale(0.95→1) + fade | 250ms |
| 数据刷新 | 骨架屏闪烁 | 1.5s |

### 4.4 响应式布局

| 断点 | 范围 | 侧边栏 | 卡片列数 | 弹窗 |
|------|------|--------|---------|------|
| Desktop | >1024px | 展开/可折叠 | 4 列 | 居中 |
| Tablet | 768-1024px | 默认折叠 | 2 列 | 90% 宽 |
| Mobile | <768px | 隐藏 | 单列 | 全屏 |

---

## 5. 组件视觉规范

### 5.1 数据卡片

- 圆角：--card-radius（12px）
- 内边距：--card-padding（16px）
- hover：上浮 2px + 阴影增强（--shadow-xs → --shadow-md）
- 右上角装饰渐变（可选）
- 5 种类型：概览卡、排行卡、图表卡、操作卡、状态卡

### 5.2 颜色语义

| 含义 | 色系 | 示例 |
|------|------|------|
| 上涨/买入 | 红色系 | #ef4444 |
| 下跌/卖出 | 绿色系 | #22c55e |
| 中性/观望 | 黄色系 | #f59e0b |
| 信息/链接 | 蓝色系 | #3b82f6 |
| 次要/禁用 | 灰色系 | 主题 text-tertiary |

### 5.3 骨架屏

- 卡片骨架屏：标题 + 数值 + 趋势占位，pulse 动画 1.5s
- 表格骨架屏：行占位，错开 0.15s 延迟
- 图表骨架屏：区域占位 + shimmer 光泽扫过

### 5.4 空状态 / 错误状态

- 空状态：图标 + 标题 + 描述 + 操作按钮引导
- 错误状态：图标 + 错误标题 + 错误描述 + 重试按钮 + 错误码

### 5.5 按钮反馈

| 状态 | 效果 |
|------|------|
| 默认 | 正常样式 |
| hover | 背景色变深 + 微上移 1px |
| active | 缩放 0.97 + 背景色更深 |
| loading | 按钮内旋转图标 + 禁用点击 |
| disabled | 降低透明度 + not-allowed 光标 |

### 5.6 弹窗

- 桌面端：圆角 16px，scale+fade 动画，遮罩 backdrop-filter 模糊
- 移动端：全屏模式，底部滑入，顶部拖动条可下拉关闭
- K 线弹窗：宽度自适应（桌面 800px / 移动全屏），图表区域占 70% 高度

---

## 6. 图标系统

### 6.1 现代简约 SVG（默认）

- Lucide 风格线性图标
- 24x24 viewBox，2px 描边，圆角端点
- 颜色继承 currentColor
- 约 30 个核心图标：策略、日历、AI、研究、设置、搜索、用户、上涨、下跌、刷新、导出、筛选、收藏、通知、关闭、展开、折叠等

### 6.2 经典 Emoji（保留备选）

- 保留原有 emoji 风格作为备选
- 在系统设置中可切换

---

## 7. 微交互定义

### 7.1 动画关键帧

| 动画名 | 用途 |
|--------|------|
| pulse | 骨架屏脉冲 |
| slideUp | 弹窗/Toast 从底部滑入 |
| fadeIn | 元素淡入 |
| scaleIn | 弹窗缩放进入 |
| shimmer | 骨架屏光泽扫过 |
| countUp | 数字跳动 |
| shake | 表单验证错误抖动 |
| spin | 旋转加载 |

### 7.2 Toast 通知

- 4 种类型：成功（绿）、警告（黄）、错误（红）、信息（蓝）
- 顶部居中显示
- 3s 自动消失，支持手动关闭
- 从顶部滑入 + 淡出动画

---

## 8. JS 结构化

### 8.1 Composable 拆分

| Composable | 文件 | 职责 | 估计行数 |
|------------|------|------|----------|
| useAuth | composables/useAuth.js | 登录/登出/密码/Token | ~200 |
| useTheme | composables/useTheme.js | 主题切换/图标系统 | ~80 |
| useNavigation | composables/useNavigation.js | 菜单/页面/侧边栏折叠 | ~120 |
| useDashboard | composables/useDashboard.js | 策略总览/仪表盘 | ~400 |
| useCalendar | composables/useCalendar.js | 日历数据/视图/搜索 | ~350 |
| useAI | composables/useAI.js | AI评估/历史/配置 | ~300 |
| useWatchlist | composables/useWatchlist.js | 自选股 | ~120 |
| useSystem | composables/useSystem.js | 系统配置/用户管理 | ~350 |

### 8.2 CDN 兼容策略

- 使用全局函数模式：`window.useXxx = function() { ... }`
- 每个文件自执行注册
- 不依赖构建工具，不加 ES Module import/export
- 加载顺序：core.js → composables/*.js → index.html

### 8.3 渐进迁移

- 第一步：提取独立模块（useAuth、useTheme）
- 第二步：提取有依赖的模块（useNavigation、useCalendar）
- 第三步：提取剩余模块（useDashboard、useAI、useWatchlist、useSystem）
- 每步验证：登录 → 导航 → 数据加载 → 弹窗全流程

---

## 9. 文案与术语统一

| 类别 | 当前问题 | 统一方案 |
|------|----------|----------|
| 页面名称 | "策略总览"/"概览" 混用 | 统一为"策略总览" |
| 页面名称 | "量化日历"/"日历" 混用 | 统一为"量化日历" |
| 操作按钮 | "刷新" 含义模糊 | "刷新数据" |
| 操作按钮 | "确定"/"确认" 混用 | 统一为"确认" |
| 操作按钮 | "取消"/"关闭" 混用 | 表单用"取消"，弹窗用"关闭" |
| 状态提示 | "加载中..."/"正在加载..." 混用 | 统一为"加载中..." |
| 错误提示 | 技术性错误信息直接展示 | 用户友好提示 + 错误码（可展开详情） |
| 空状态 | 仅"暂无数据" | 图标 + 标题 + 描述 + 引导操作 |
| 中英文混用 | "AI"/"API"/"Token" 与中文混合 | 保留行业通用缩写，其余全中文 |

---

## 10. 文件变更清单

### 10.1 新建文件（14 个）

| 文件 | 说明 |
|------|------|
| frontend/css/tokens.css | 三层 Token 定义（~150 行） |
| frontend/css/layout.css | 布局、侧边栏、Header（~300 行） |
| frontend/css/responsive.css | 3 级响应式断点（~200 行） |
| frontend/css/animations.css | 过渡、骨架屏、微交互（~150 行） |
| frontend/js/icons.js | SVG 图标库 2 套（~200 行） |
| frontend/js/composables/useAuth.js | 认证模块 |
| frontend/js/composables/useTheme.js | 主题模块 |
| frontend/js/composables/useNavigation.js | 导航模块 |
| frontend/js/composables/useCalendar.js | 日历模块 |
| frontend/js/composables/useDashboard.js | 仪表盘模块 |
| frontend/js/composables/useAI.js | AI 评估模块 |
| frontend/js/composables/useWatchlist.js | 自选股模块 |
| frontend/js/composables/useSystem.js | 系统配置模块 |

### 10.2 重写文件（3 个）

| 文件 | 变更 |
|------|------|
| frontend/css/themes.css | 4300 → ~600 行，基于 Token 体系 |
| frontend/js/themes.js | 精简重复代码 |
| frontend/index.html | 模板更新 + setup() 精简为组合入口 |

### 10.3 增强文件（1 个）

| 文件 | 变更 |
|------|------|
| frontend/js/core.js | API 封装增强、错误处理、Toast |

### 10.4 备份文件（1 个）

| 文件 | 说明 |
|------|------|
| frontend/css/themes.css.bak | 原版备份，可随时回滚 |

---

## 11. 实施计划

### 阶段一：CSS 系统化（1-2 天）

1. 新建 tokens.css（三层 Token 定义）
2. 重写 themes.css（7 主题语义变量，消除 !important）
3. 新建 layout.css（侧边栏/Header/布局）
4. 新建 animations.css（过渡/骨架屏/微交互）
5. 新建 responsive.css（3 级断点）

**验证：** 每个新文件加载后，刷新浏览器对比 5 个页面 + 弹窗。

### 阶段二：JS 结构化（1-2 天）

1. 提取 useAuth.js + useTheme.js（独立模块）
2. 提取 useNavigation.js + useCalendar.js
3. 提取 useDashboard.js + useAI.js + useWatchlist.js + useSystem.js

**验证：** 每个 Composable 提取后，登录→导航→数据加载→弹窗全流程验证。

### 阶段三：视觉焕新（2-3 天）

1. 新建 icons.js（SVG 图标库，2 套风格）
2. 更新 index.html 模板（侧边栏折叠 + 页面过渡 + 卡片精致化）
3. 添加骨架屏和空状态/错误态组件

**验证：** 逐个页面检查视觉效果、过渡动画、加载态、空态。

### 阶段四：响应式 + 移动端（1-2 天）

1. 应用 3 级断点，修复移动端弹窗和 K 线图
2. 触摸优化（侧滑、双指缩放、下拉关闭）

**验证：** Chrome DevTools 模拟 3 种设备尺寸，逐页检查。

### 阶段五：文案 + 打磨（1 天）

1. 统一术语和按钮文案
2. 整体视觉走查（间距、对齐、对比度）

**验证：** 完整冒烟测试：登录→导航→数据加载→弹窗→切换主题→移动端。

---

## 12. 安全机制

| 机制 | 说明 |
|------|------|
| 双轨并行 | dev 环境开发，ops 不受影响 |
| 备份回滚 | 每个阶段开始前备份 .bak 文件 |
| 逐页验证 | 5 个页面 + 所有弹窗逐个检查 |
| Feature Flag | 高风险改动可通过 URL 参数或 localStorage 一键切回旧版 |

---

## 13. 不做的内容

- 不引入构建工具（Webpack/Vite）
- 不迁移到 Vue SFC 组件
- 不添加 vue-router
- 不更换 UI 框架（保留 Element Plus）
- 不修改后端 API
- 不改变现有数据流