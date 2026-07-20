# UI 全面焕新 v3.0 实施计划

> **For agentic workers:** Use `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 对 quant-calendar-dev 前端进行全面 UI 焕新：CSS 系统化、JS Composables、侧边栏折叠、页面过渡、骨架屏、响应式、dark-pro 主题。

**Architecture:** 新建 tokens.css / layout.css / responsive.css / animations.css + icons.js + 8 Composables；重写 themes.css (4300→600行) 和 themes.js；精简 index.html 的 setup() 为组合入口。CDN 模式，不引入构建工具。

**Tech Stack:** Vue 3 CDN + Element Plus CDN + ECharts CDN + 原生 CSS + 原生 JS

**Working Directory:** `d:\mycoding\quant-calendar\quant-calendar-dev`

**Static Base:** `/static/css/` → `frontend/css/`, `/static/js/` → `frontend/js/`

---

## 文件结构总览

```
frontend/
├── index.html                          # 修改：精简 setup()，更新模板
├── css/
│   ├── themes.css.bak                  # 新建：原版备份
│   ├── tokens.css                      # 新建：三层 Token 定义
│   ├── themes.css                      # 重写：7 主题语义变量
│   ├── layout.css                      # 新建：布局、侧边栏、Header
│   ├── responsive.css                  # 新建：3 级响应式断点
│   └── animations.css                  # 新建：过渡、骨架屏、微交互
├── js/
│   ├── core.js                         # 修改：增强 API 封装
│   ├── icons.js                        # 新建：SVG 图标库
│   ├── themes.js                       # 重写：精简+消除重复
│   └── composables/                    # 新建目录
│       ├── useAuth.js
│       ├── useTheme.js
│       ├── useNavigation.js
│       ├── useCalendar.js
│       ├── useDashboard.js
│       ├── useAI.js
│       ├── useWatchlist.js
│       └── useSystem.js
```

---

### Task 1: 备份 + 创建 tokens.css

**Files:**
- Create: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\css\tokens.css`
- Copy: `themes.css` → `themes.css.bak`

- [ ] **Step 1: 备份 themes.css**

```powershell
Copy-Item "d:\mycoding\quant-calendar\quant-calendar-dev\frontend\css\themes.css" "d:\mycoding\quant-calendar\quant-calendar-dev\frontend\css\themes.css.bak"
```

- [ ] **Step 2: 创建 tokens.css**

写入文件 `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\css\tokens.css`，内容包含：

- 间距阶梯 9 级 (--sp-1 到 --sp-12)
- 圆角阶梯 5 级 (--r-sm 到 --r-full)
- 字号阶梯 8 级 (--fs-xs 到 --fs-3xl)
- 字重阶梯 (--fw-normal 到 --fw-bold)
- 行高 (--lh-tight / --lh-normal / --lh-relaxed)
- 字体族 (--font-sans / --font-mono)
- 阴影阶梯 4 级 (--shadow-xs 到 --shadow-lg)
- 过渡时间 (--transition-fast / --transition-base / --transition-slow)
- 语义色：--color-success / --color-warning / --color-danger / --color-info / --color-up / --color-down
- 徽章色：--badge-success-bg/text 等
- 组件 Token：--sidebar-width / --sidebar-collapsed-width / --header-height / --card-padding / --card-radius / --dialog-radius / --nav-item-height / --mobile-nav-height

（完整 CSS 代码见 spec 文档第 2 节）

- [ ] **Step 3: 在 index.html 的 head 中引入 tokens.css**

在 `index.html` 第 28 行 `<link rel="stylesheet" href="/static/css/themes.css">` **之前**插入：

```html
<link rel="stylesheet" href="/static/css/tokens.css">
```

- [ ] **Step 4: 验证 — 启动 dev 服务**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

打开 `http://localhost:8001`，验证：
- 页面正常加载，无白屏
- F12 → Network 确认 tokens.css 返回 200
- 5 个页面都能正常切换

---

### Task 2: 重写 themes.css — 7 主题

**Files:**
- Rewrite: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\css\themes.css`

- [ ] **Step 1: 写入全新的 themes.css**

完全替换文件内容。每个主题定义 18 个语义 Token。7 个主题：tech-blue / rose-red / vibrant-orange / classic-white / classic-red / classic-gold / dark-pro。

（完整 CSS 代码见 spec 文档第 3 节）

- [ ] **Step 2: 验证 — 刷新页面，切换所有主题**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

打开 `http://localhost:8001`，逐一验证：
- tech-blue（默认）：正常显示
- 切换到 rose-red、vibrant-orange 等 6 个主题，每个正常
- 切换到 dark-pro：深色主题渲染正确
- 5 个页面下的卡片、表格、按钮颜色均跟随主题

---

### Task 3: 创建 layout.css — 布局、侧边栏、Header

**Files:**
- Create: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\css\layout.css`
- Modify: `index.html` head 中引入 layout.css

- [ ] **Step 1: 在 index.html 的 head 中引入**

在 `themes.css` 之后添加：

```html
<link rel="stylesheet" href="/static/css/layout.css">
```

- [ ] **Step 2: 创建 layout.css**

包含：应用容器、侧边栏（展开/折叠两态）、主内容区、全局 Header、卡片基础样式、统计卡片网格、移动端底部导航、空状态、错误状态、弹窗增强、表格增强。

（完整 CSS 代码见 spec 文档第 4 节）

- [ ] **Step 3: 验证 — 检查布局**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

打开 `http://localhost:8001`，检查：
- 侧边栏正常显示 220px
- 卡片 hover 上浮效果
- 5 个页面布局正常

---

### Task 4: 创建 animations.css — 过渡、骨架屏、微交互

**Files:**
- Create: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\css\animations.css`
- Modify: `index.html` head 中引入

- [ ] **Step 1: 在 head 中引入**

在 `layout.css` 之后添加：

```html
<link rel="stylesheet" href="/static/css/animations.css">
```

- [ ] **Step 2: 创建 animations.css**

包含：关键帧动画（pulse / shimmer / slideUp / fadeIn / scaleIn / shake / spin / countUp / flashColor）、页面过渡类（page-fade / sub-fade / dialog-scale）、骨架屏样式、Toast 通知样式、数字变化闪烁、按钮交互。

（完整 CSS 代码见 spec 文档第 7 节）

- [ ] **Step 3: 验证**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

打开 `http://localhost:8001`，F12 确认 animations.css 返回 200。

---

### Task 5: 创建 responsive.css — 3 级响应式

**Files:**
- Create: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\css\responsive.css`
- Modify: `index.html` head 中引入

- [ ] **Step 1: 在 head 中引入**

在 `animations.css` 之后添加：

```html
<link rel="stylesheet" href="/static/css/responsive.css">
```

- [ ] **Step 2: 创建 responsive.css**

3 级断点：Tablet (≤1024px) / Mobile (≤768px) / 超小屏 (≤480px)。

（完整 CSS 代码见 spec 文档第 4.4 节）

- [ ] **Step 3: 验证 — DevTools 模拟**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

F12 → Toggle Device Toolbar：
- iPhone 12 (390px)：侧边栏隐藏，底部导航可见，卡片单列
- iPad (768px)：侧边栏折叠仅图标，卡片两列
- Desktop (1024px+)：侧边栏展开，卡片四列

---

### Task 6: 精简 themes.js — 消除重复

**Files:**
- Rewrite: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\js\themes.js`
- Modify: `index.html` — 删除重复的 ICON_MAPS 定义

- [ ] **Step 1: 重写 themes.js**

精简为只包含：iconSystem / switchIconSystem / researchMenuEnabled / toggleResearchMenu / themes / currentTheme / applyTheme / changeTheme。移除 ICON_MAPS（图标改由 icons.js 统一管理）。

（完整 JS 代码见 spec 文档第 8 节）

- [ ] **Step 2: 从 index.html 删除重复代码**

在 `index.html` 中搜索并删除 `ICON_MAPS` 对象定义（约 27 行，从 emoji 映射到 crystal 映射结束）以及重复的 `iconSystem` / `switchIconSystem` / `researchMenuEnabled` / `toggleResearchMenu` 声明。

- [ ] **Step 3: 验证**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

打开 `http://localhost:8001`，确认：
- 页面无 JS 错误
- 侧边栏图标正常显示
- 主题切换正常

---

### Task 7: 创建 icons.js — SVG 图标库

**Files:**
- Create: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\js\icons.js`
- Modify: `index.html` head 中引入

- [ ] **Step 1: 在 head 中引入**

在 `themes.js` 之后、`core.js` 之前添加：

```html
<script src="/static/js/icons.js"></script>
```

- [ ] **Step 2: 创建 icons.js**

包含 ~25 个 SVG 图标（Lucide 风格，24x24，2px 描边）+ Emoji 备选映射。关键图标：strategies / calendar / ai / research / system / search / user / refresh / export / filter / star / bell / close / chevronLeft / chevronRight / trendUp / trendDown / check / alert / info / more / menu / clock / lock / eye / eyeOff。

注册到 `window.__quantModules.icons`。

（完整 JS 代码见 spec 文档第 6 节）

- [ ] **Step 3: 验证**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

打开 `http://localhost:8001`，确认：
- 侧边栏图标使用 SVG 渲染
- 切换到 emoji 风格正常
- 所有图标可见

---

### Task 8: 增强 core.js — API 封装

**Files:**
- Modify: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\js\core.js`

- [ ] **Step 1: 增强 core.js**

在现有 `apiFetch` / `getToday` / `formatDate` / `withTimeout` 基础上，新增：

- `showToast(message, type, duration)` — Toast 通知（支持 success/warning/error/info）
- `debounce(fn, delay)` — 防抖函数
- `throttle(fn, delay)` — 节流函数

并将 Toast 注册到 `window.__quantModules.core`。

- [ ] **Step 2: 验证**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

打开 `http://localhost:8001`，F12 Console 执行：
```javascript
window.__quantModules.core.showToast('测试消息', 'success')
```
确认 Toast 出现并 3s 后消失。

---

### Task 9-16: 创建 8 个 Composables

**目录:** `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\js\composables/`

每个 Composable 遵循统一的 CDN 兼容模式：

```javascript
// quant-calendar: useXxx composable
(function() {
  const { ref, computed, watch } = Vue;
  window.useXxx = function() {
    // ... 状态和方法
    return { ... };
  };
})();
```

- [ ] **Task 9: useAuth.js** — 登录/登出/密码/Token（~200行）
- [ ] **Task 10: useTheme.js** — 主题切换/图标系统（~80行）
- [ ] **Task 11: useNavigation.js** — 菜单/页面/侧边栏折叠（~120行）
- [ ] **Task 12: useCalendar.js** — 日历数据/视图/搜索（~350行）
- [ ] **Task 13: useDashboard.js** — 策略总览/仪表盘（~400行）
- [ ] **Task 14: useAI.js** — AI评估/历史/配置（~300行）
- [ ] **Task 15: useWatchlist.js** — 自选股（~120行）
- [ ] **Task 16: useSystem.js** — 系统配置/用户管理（~350行）

**加载顺序（在 index.html 中）：**
```html
<script src="/static/js/composables/useAuth.js"></script>
<script src="/static/js/composables/useTheme.js"></script>
<script src="/static/js/composables/useNavigation.js"></script>
<script src="/static/js/composables/useCalendar.js"></script>
<script src="/static/js/composables/useDashboard.js"></script>
<script src="/static/js/composables/useAI.js"></script>
<script src="/static/js/composables/useWatchlist.js"></script>
<script src="/static/js/composables/useSystem.js"></script>
```

**验证：** 每个 Composable 创建后，刷新页面验证登录→导航→数据加载→弹窗全流程无 JS 错误。

---

### Task 17: 精简 index.html — setup() 重构为组合入口

**Files:**
- Modify: `d:\mycoding\quant-calendar\quant-calendar-dev\frontend\index.html`

- [ ] **Step 1: 用 Composables 替换内联 setup() 逻辑**

将 setup() 中对应模块的代码（约 3125 行）替换为 Composable 调用：

```javascript
setup() {
  const auth = useAuth();
  const theme = useTheme();
  const nav = useNavigation();
  const dashboard = useDashboard();
  const calendar = useCalendar();
  const ai = useAI();
  const watchlist = useWatchlist();
  const system = useSystem();

  return {
    ...auth, ...theme, ...nav,
    ...dashboard, ...calendar, ...ai,
    ...watchlist, ...system,
  };
}
```

- [ ] **Step 2: 更新模板**

- 替换侧边栏模板：添加折叠按钮和 sidebar.collapsed 类绑定
- 替换页面切换：用 `<Transition name="page-fade" mode="out-in">` 包裹页面内容
- 替换登录页图标：emoji → SVG
- 统一标题：`<title>量化选股日历</title>`
- 替换空状态：使用 `.empty-state` 统一组件

- [ ] **Step 3: 统一文案**

全局替换：
- "策略总览"/"概览" → "策略总览"
- "量化日历"/"日历" → "量化日历"
- "刷新" → "刷新数据"
- "加载中..."/"正在加载..." → "加载中..."
- "确定"/"确认" → "确认"

- [ ] **Step 4: 验证 — 完整冒烟测试**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-dev
.\.venv\Scripts\python.exe .\backend\main_new.py
```

完整流程验证：
1. 登录页 → 登录（账号密码 + 访客）
2. 5 个页面逐一切换，确认过渡动画
3. 侧边栏折叠/展开
4. 数据加载、弹窗、AI 评估
5. 切换所有 7 个主题
6. 移动端模拟（DevTools 3 种设备）

---

### Task 18: 发布到 ops 运行环境

**Files:**
- 运行: `d:\mycoding\quant-calendar\publish-dev-to-ops.cmd`

- [ ] **Step 1: 执行发布**

```powershell
cmd /c "d:\mycoding\quant-calendar\publish-dev-to-ops.cmd"
```

- [ ] **Step 2: 验证 ops 环境**

```powershell
cd d:\mycoding\quant-calendar\quant-calendar-ops
.\.venv\Scripts\python.exe .\backend\main_new.py
```

打开 `http://localhost:8000`，重复完整冒烟测试。