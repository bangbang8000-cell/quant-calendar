# 量化选股日历 v2.5.0 — 开发计划

> 基于：PRD [2026-07-24-ui-prd-v2.5.0.md](./2026-07-24-ui-prd-v2.5.0.md)  
> 审计：[2026-07-24-ui-audit-v2.4.1.md](./2026-07-24-ui-audit-v2.4.1.md)  
> 总工时估算：前端 ~5 天 | 后端 ~0 天

---

## 总体策略

**三阶段递进，每阶段结束时手动验证回归**：
1. 阶段一：关键修复（P0/P1）—— 消除阻塞性 bug 和架构债务
2. 阶段二：体验升级（P2）—— 提升交互流畅度和专业感
3. 阶段三：移动端增强（P3）—— 完善移动端体验

**安全原则**：
- 每次修改前备份原始文件
- 每完成一个 Task 手动验证核心功能
- 禁止一次性大规模重写，采用增量修改

---

## 阶段一：关键修复（2-3 天）

### Task 1.1: 修复平板端侧边栏图标（P0，30 min）

**文件**：`frontend/css/responsive.css`

**问题**：Tablet 模式下 `.sidebar .nav-item span` 隐藏所有 span（包括图标 span）

**修改**：
```css
/* 修改前 */
.sidebar .nav-item span { display: none; }

/* 修改后 */
.sidebar .nav-item > span:not(.nav-icon) { display: none; }
.sidebar .nav-icon { display: inline-flex !important; }
```

**验证**：Chrome DevTools 模拟 iPad（768×1024），侧边栏显示图标，点击导航正常

---

### Task 1.2: 清理 Composables 死代码（P0，3-4 h）

**文件**：`frontend/js/composables/*.js`、`frontend/index.html`

**策略**：8 个 Composables 中，目前仅 `icons.js` 和 `themes.js`（独立模块）被实际使用。Composables 有两个选择：
- **方案 A（推荐）**：删除所有 8 个未使用的 Composables，保留 setup() 中的现有逻辑
- **方案 B**：将 setup() 中的逻辑迁移到 Composables，接入 setup()

**推荐方案 A**，理由：
1. 当前 setup() 逻辑已经过生产验证，稳定可靠
2. 迁移风险高（4400 行代码），容易引入 bug
3. 保持现状不会影响功能，仅消除死代码减少维护负担

**步骤**：
1. 删除 `frontend/js/composables/` 目录下所有 8 个文件
2. 删除 [index.html](file:///d:/mycoding/quant-calendar/quant-calendar-dev/frontend/index.html) 第 38-46 行的 `<script src="...composables/...">` 引用
3. 删除 [index.html](file:///d:/mycoding/quant-calendar/quant-calendar-dev/frontend/index.html) 第 3664-3667 行重复的 `ICON_MAPS` 初始化（已在 setup() 中定义）

**验证**：应用正常启动，所有页面功能正常

---

### Task 1.3: Token 定义去重（P1，2-3 h）

**文件**：`frontend/css/tokens.css`、`frontend/css/themes.css`

**步骤**：
1. 审计 themes.css 中 `:root` 块（第 1-81 行），列出所有与 tokens.css 重复的变量
2. 将 tokens.css 缺失的变量补充到 tokens.css
3. 从 themes.css 的 `:root` 块中删除重复定义
4. themes.css 的 `:root` 块仅保留需要默认值的主题色变量（`--primary-color`、`--bg-page` 等）

**重复变量清单**（预估）：
- `--font-sans`、`--font-mono`（与 tokens.css 重复）
- `--font-xs` ~ `--font-3xl`（tokens.css 无，需迁移）
- `--font-normal` ~ `--font-bold`（tokens.css 无，需迁移）
- `--lh-tight` ~ `--lh-relaxed`（与 tokens.css 重复）
- `--radius-sm` ~ `--radius-xl`（与 tokens.css 的 `--r-sm` ~ `--r-xl` 重复）
- `--color-*` 语义色（与 tokens.css 重复）
- `--badge-*` 徽章色（与 tokens.css 重复）
- `--text-*`、`--bg-*`、`--border-*`、`--shadow-*`（主题相关，保留）
- `--primary-color`、`--secondary-color`、`--gradient`（主题相关，保留）

**验证**：所有 7 个主题视觉无变化，CSS 变量无重复定义

---

### Task 1.4: 移动端底部导航优化（P1，1-2 h）

**文件**：`frontend/index.html`（模板部分）、`frontend/css/themes.css`（`.mobile-nav` 样式）

**修改**：
1. 在模板中底部导航栏添加文字标签
2. 调整 `.mobile-nav-item` 样式支持 icon + 文字垂直布局
3. 使用图标系统（iconSystem）切换底部导航图标

**模板修改**（在 `</div> <!-- 主界面 -->` 前添加）：
```html
<div class="mobile-nav">
    <div v-for="menu in menus" :key="menu.key" class="mobile-nav-item"
         :class="{active: currentPage === menu.key}"
         @click="currentPage = menu.key; currentSubPage = menu.subPages[0] || ''">
        <div class="mobile-nav-icon" v-html="menu.icon"></div>
        <div class="mobile-nav-label">{{ menu.name }}</div>
    </div>
</div>
```

**CSS 修改**：
```css
.mobile-nav-item {
    flex: 1; text-align: center; padding: 8px 4px 6px 4px;
    font-size: var(--font-xs); color: var(--text-secondary);
    cursor: pointer; display: flex; flex-direction: column;
    align-items: center; gap: 2px;
}
.mobile-nav-label { font-size: 10px; line-height: 1; }
```

**验证**：移动端浏览器底部导航栏显示 icon + 文字，点击切换正常

---

### Task 1.5: 字体硬编码消除（P1，2-3 h）

**文件**：`frontend/css/themes.css`

**策略**：批量替换 themes.css 中所有 `font-size: <数字>px` 为 CSS 变量引用

**映射表**：
| 硬编码值 | CSS 变量 |
|----------|----------|
| `font-size: 10px` | `var(--font-xs)` |
| `font-size: 11px` | `var(--font-xs)` |
| `font-size: 12px` | `var(--font-sm)` |
| `font-size: 13px` | `var(--font-sm)` |
| `font-size: 14px` | `var(--font-base)` |
| `font-size: 15px` | `var(--font-base)` |
| `font-size: 16px` | `var(--font-md)` |
| `font-size: 18px` | `var(--font-lg)` |
| `font-size: 20px` | `var(--font-xl)` |
| `font-size: 22px` | `var(--font-xl)` |
| `font-size: 24px` | `var(--font-xl)` |
| `font-size: 26px` | `var(--font-2xl)` |
| `font-size: 28px` | `var(--font-2xl)` |
| `font-size: 32px` | `var(--font-3xl)` |
| `font-size: 36px` | `var(--font-3xl)` |

**步骤**：
1. 使用 grep 列出所有 `font-size:` 硬编码行
2. 按映射表批量替换
3. 保留 Element Plus 组件覆盖（如 `.el-*` 选择器）中的 `font-size`（这些是库组件覆盖，非业务样式）

**验证**：`grep -c "font-size: [0-9]" themes.css` 返回 0（排除 `.el-*` 选择器）

---

## 阶段二：体验升级（1-2 周）

### Task 2.1: 键盘导航（P2，2-3 h）

**文件**：`frontend/index.html`（模板部分）

**修改**：
1. 侧边栏 `.nav-item` 添加 `tabindex="0"` 和 `@keydown.enter` 事件
2. 子导航 `.sub-nav-tab` 添加 `tabindex="0"` 和 `@keydown.enter`
3. 对话框添加 `@keydown.escape` 关闭

**验证**：Tab 键聚焦菜单项，Enter 键切换页面，Esc 关闭弹窗

---

### Task 2.2: 面包屑导航（P2，2-3 h）

**文件**：`frontend/index.html`（模板 + JS）、`frontend/css/themes.css`

**新增组件**：
```html
<div class="breadcrumb">
    <span class="breadcrumb-item" @click="currentPage = 'strategies'; currentSubPage = 'overview'">首页</span>
    <span class="breadcrumb-sep">/</span>
    <span class="breadcrumb-item active">{{ currentPageName }}</span>
    <template v-if="currentSubPage && currentSubPage !== 'overview'">
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-item active">{{ subPageNames[currentSubPage] || currentSubPage }}</span>
    </template>
</div>
```

**CSS**：
```css
.breadcrumb { display: flex; align-items: center; gap: 6px; padding: 8px 0; font-size: var(--font-sm); }
.breadcrumb-item { color: var(--text-tertiary); cursor: pointer; }
.breadcrumb-item:hover { color: var(--primary-color); }
.breadcrumb-item.active { color: var(--text-primary); font-weight: var(--font-medium); cursor: default; }
.breadcrumb-sep { color: var(--text-tertiary); }
```

**验证**：面包屑正确反映当前页面层级，点击可跳转

---

### Task 2.3: 骨架屏加载（P2，2-3 h）

**文件**：`frontend/index.html`（模板部分）

**CSS 已有**：`animations.css` 定义了 `.skeleton`、`.skeleton-text`、`.skeleton-card`、`.skeleton-chart`

**修改**：在数据加载区域添加骨架屏模板
```html
<div v-if="loading" class="card-grid">
    <div class="card skeleton skeleton-card" v-for="i in 4" :key="i"></div>
</div>
```

**验证**：数据加载时显示骨架屏，数据到达后消失

---

### Task 2.4: 操作确认对话框（P2，1-2 h）

**文件**：`frontend/index.html`（JS 部分）

**修改**：登出、删除等操作添加确认框
```javascript
async function handleLogout() {
    try {
        await ElementPlus.ElMessageBox.confirm('确定要退出登录吗？', '确认退出', {
            confirmButtonText: '退出',
            cancelButtonText: '取消',
            type: 'warning'
        });
        // 原有登出逻辑
    } catch { /* 用户取消 */ }
}
```

**验证**：点击登出后弹出确认框，确认后退出，取消后留

---

### Task 2.5: 页面状态缓存（P2，2-3 h）

**文件**：`frontend/index.html`（模板部分）

**修改**：将 `<Transition>` 包裹的内容区改为 `<keep-alive>` + `<Transition>`
```html
<router-view v-slot="{ Component }">
    <transition name="fade-slide" mode="out-in">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </transition>
</router-view>
```

**注意**：由于当前未使用 Vue Router（页面切换通过 `v-if`），需要评估是否引入 Router 或使用 `<component :is>` 动态组件。

**替代方案**（更安全）：使用 `v-show` 替代 `v-if` 保持 DOM 状态
```html
<div v-show="currentPage === 'strategies'">...</div>
```

**验证**：切换页面后返回，滚动位置和表单数据保留

---

### Task 2.6: 主题系统优化（P2，3-4 h）

**文件**：`frontend/css/themes.css`、`frontend/js/themes.js`

**步骤**：
1. 合并 classic-white/red/gold 为 `classic` 主题，通过 `--classic-hue` 变量控制色相
2. 将 Element Plus 按钮覆盖从每主题重复改为 CSS 变量继承
3. 更新 themes.js 中的主题定义

**CSS 重构示例**：
```css
/* 合并后的 classic 主题 */
[data-theme="classic"] {
    --primary-color: var(--classic-hue, #2563eb);
    --secondary-color: var(--classic-hue-light, #60a5fa);
    --gradient: linear-gradient(135deg, var(--bg-page) 0%, #f1f5f9 100%);
    --gradient-brand: linear-gradient(135deg, var(--primary-color) 0%, var(--classic-hue-dark, #1d4ed8) 100%);
    /* ...其余变量 */
}
[data-theme="classic"][data-accent="red"] {
    --classic-hue: #dc2626;
    --classic-hue-light: #f87171;
    --classic-hue-dark: #b91c1c;
}
```

**验证**：classic 主题 3 种色相视觉与原来一致

---

### Task 2.7: 主题切换过渡动画（P2，30 min）

**文件**：`frontend/css/tokens.css`

**修改**：
```css
:root {
    --theme-transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
body, .sidebar, .card, .nav-item, .sub-nav-tab, .el-button, .el-table, .el-dialog, .el-input__inner {
    transition: var(--theme-transition);
}
```

**验证**：切换主题时颜色平滑过渡

---

### Task 2.8: 内容区最大宽度（P2，30 min）

**文件**：`frontend/css/layout.css`

**修改**：
```css
.main-content {
    max-width: 1400px;
    margin: 0 auto;
    /* 保持现有 margin-left: 220px */
}
```

**验证**：2560px 宽屏下内容区居中

---

## 阶段三：移动端增强（3-5 天）

### Task 3.1: 触摸手势（P3，3-4 h）

**文件**：`frontend/index.html`（JS 部分）

**实现**：监听 `touchstart` / `touchend` 事件，判断滑动方向
```javascript
let touchStartX = 0;
function onTouchStart(e) { touchStartX = e.touches[0].clientX; }
function onTouchEnd(e) {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 80) {
        // 滑动切换页面
        const menuKeys = menus.value.map(m => m.key);
        const idx = menuKeys.indexOf(currentPage.value);
        if (diff > 0 && idx < menuKeys.length - 1) {
            currentPage.value = menuKeys[idx + 1];
        } else if (diff < 0 && idx > 0) {
            currentPage.value = menuKeys[idx - 1];
        }
    }
}
```

**验证**：移动端左右滑动切换页面

---

### Task 3.2: 表格滚动优化（P3，1-2 h）

**文件**：`frontend/css/themes.css`

**修改**：
```css
.table-container {
    -webkit-overflow-scrolling: touch;
    position: relative;
}
/* 滚动阴影指示器 */
.table-container::after {
    content: '';
    position: absolute;
    right: 0; top: 0; bottom: 0;
    width: 20px;
    background: linear-gradient(to right, transparent, var(--bg-card));
    pointer-events: none;
}
```

**验证**：移动端表格可流畅横向滚动，右侧有渐变阴影

---

### Task 3.3: 安全区域适配（P3，30 min）

**文件**：`frontend/css/responsive.css`

**修改**：
```css
@media (max-width: 768px) {
    .global-header {
        padding-top: env(safe-area-inset-top, 0px);
    }
    .mobile-nav {
        padding-bottom: env(safe-area-inset-bottom, 8px);
    }
}
```

**验证**：iPhone 刘海屏顶部和底部不被遮挡

---

## 任务依赖关系

```
阶段一（可并行）
├── Task 1.1 平板侧边栏 ────────── 无依赖
├── Task 1.2 Composables 清理 ──── 无依赖
├── Task 1.3 Token 去重 ────────── 无依赖
├── Task 1.4 底部导航 ──────────── 无依赖
└── Task 1.5 字体硬编码 ────────── 依赖 Task 1.3（变量统一后）

阶段二（部分并行）
├── Task 2.1 键盘导航 ──────────── 无依赖
├── Task 2.2 面包屑 ────────────── 无依赖
├── Task 2.3 骨架屏 ────────────── 无依赖
├── Task 2.4 确认对话框 ────────── 无依赖
├── Task 2.5 页面缓存 ──────────── 无依赖
├── Task 2.6 主题优化 ──────────── 依赖 Task 1.3（Token 统一后）
├── Task 2.7 过渡动画 ──────────── 依赖 Task 2.6
└── Task 2.8 最大宽度 ──────────── 无依赖

阶段三（阶段二完成后）
├── Task 3.1 触摸手势 ──────────── 无依赖
├── Task 3.2 表格滚动 ──────────── 无依赖
└── Task 3.3 安全区域 ──────────── 无依赖
```

---

## 验证清单

每个阶段完成后执行：

### 阶段一验证
- [ ] 所有 7 个主题切换正常
- [ ] 登录/登出正常
- [ ] 侧边栏折叠/展开正常
- [ ] 平板端侧边栏显示图标
- [ ] 移动端底部导航显示文字
- [ ] 策略总览、日历、评股、研究、配置页面正常
- [ ] 无 CSS 控制台警告

### 阶段二验证
- [ ] Tab 键导航正常
- [ ] Enter 键切换页面
- [ ] 面包屑显示正确
- [ ] 骨架屏加载/消失正常
- [ ] 登出确认框正常
- [ ] 页面缓存生效
- [ ] 主题切换有过渡动画
- [ ] 超宽屏内容居中

### 阶段三验证
- [ ] 移动端左右滑动切换页面
- [ ] 表格横向滚动有阴影指示
- [ ] 刘海屏适配正常

---

## 版本规划

| 版本 | 内容 | 预计时间 |
|------|------|----------|
| v2.5.0 | 阶段一：关键修复 | 2-3 天 |
| v2.5.1 | 阶段二：体验升级 | 1-2 周 |
| v2.5.2 | 阶段三：移动端增强 | 3-5 天 |
| v2.6.0 | 代码架构重构（可选） | 另行评估 |