# 量化选股日历 v1.5.0 二级导航实施方案

> **For Hermes:** Use subagent-driven-development skill to implement this plan phase-by-phase.
> 每做完一个 Phase 暂停，测试验证后等我确认再继续。

**Goal:** 将现有 4 页扁平导航重构为 4 主菜单 × 13 子页面的二级导航架构

**Current:** v1.4.0, 单层 4 页 (dashboard/calendar/ai/settings), index.html 6686 行
**Target:** v1.5.0, 二层 13 子页, 全局 header + 二级导航标签栏 + 用户菜单

**Architecture:** 在 main-content 顶部新增全局 header 栏（二级导航标签 + 用户菜单 + 日期选择器），对每个主页面用 `v-if="currentSubPage === 'xxx'"` 拆分子页。移除旧的页面内视图切换按钮和 header 上的退出登录按钮。

**Critical files:**
- `/home/evergreen/.openclaw/workspace/quant-calendar-ops/frontend/index.html` — 唯一的修改目标
- `/home/evergreen/.openclaw/workspace/quant-calendar-ops/frontend/index.html.v140.backup` — v1.4.0 备份

---
## 前置：当前架构

```
模板结构 (line 3354-4149):
├── <div class="sidebar"> (line 3357-3376)
│   ├── .sidebar-logo (标题)
│   ├── .sidebar-nav (4 个 nav-item: dashboard/calendar/ai/settings)
│   └── .sidebar-footer (用户信息)
├── <div class="main-content"> (line 3379-4140)
│   ├── v-if="currentPage === 'dashboard'" → 策略总览 (line 3381-3580)
│   ├── v-if="currentPage === 'calendar'" → 量化日历 (line 3582-3653)
│   │   └── page-header 内含 views 切换按钮 + date-picker + nav buttons
│   ├── v-if="currentPage === 'ai'" → AI评估 (line 3655-3816)
│   │   └── page-header 内含 groupBy 按钮 + 自动评股 + 批量评估
│   └── v-if="currentPage === 'settings'" → 系统配置 (line 3817-4139)
│       └── page-header 内含退出登录按钮 + 全线配置卡片
└── <div class="mobile-nav"> (line 4142-4148)
```

```
状态变量:
  menus = [{ key: 'dashboard'|'calendar'|'ai'|'settings', name, icon }]  // 无 subPages
  currentPage = 'dashboard'
  views = [{ key: 'day'|'week'|'month'|'year', name }]  // 日历内视图
  currentView = 'day'
  (无 currentSubPage)
  (无 user-menu / 修改密码弹窗)
```

```
Div 平衡: 440 <div vs 447 </div> (多 7 个闭标签 — 必须修复)
```

---
## Phase 1: 修复 Div 平衡 + 新增 CSS (~10 min)

**Objective:** 修复 7 个多余的 `</div>` 闭标签，为后续架构升级扫清障碍。然后新增二级导航和全局 header 所需的 CSS。

### Task 1.1: 定位多余的 `</div>`

用脚本精确定位 440 `<div ` 开标签和 447 `</div>` 的差异位置。

```bash
cd ~/.openclaw/workspace/quant-calendar-ops
# 用 Python 解析 div 嵌套深度
python3 -c "
lines = open('frontend/index.html').readlines()
depth = 0
for i, line in enumerate(lines, 1):
    opens = line.count('<div ') + line.count('<div>')
    closes = line.count('</div>')
    depth += opens - closes
    if depth < 0:
        print(f'Line {i}: depth went negative! (opens={opens}, closes={closes})')
        print(f'  Content: {line.rstrip()[:100]}')
"
```

### Task 1.2: 修复多余 `</div>`

根据 1.1 的结果，用 `patch` 工具逐个删除多余的 `</div>`。每删一个后重新检查 div 平衡。

### Task 1.3: 验证修复

```bash
grep -c '<div ' frontend/index.html
grep -c '</div>' frontend/index.html
# 两个数字应相等
```

### Task 1.4: 新增 CSS — 全局 header + 二级导航 + 用户菜单

在 `</style>` 前（大约 line 2900-3000 之间，`.view-btn` 等样式附近）新增：

```css
/* ===== v1.5.0: 全局 Header ===== */
.global-header {
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 0 24px;
    margin-bottom: 20px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    gap: 16px;
}

/* ===== v1.5.0: 二级导航标签栏 ===== */
.sub-nav-wrapper {
    display: flex;
    gap: 4px;
    height: 100%;
    align-items: center;
}
.sub-nav-tab {
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    color: #666;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    user-select: none;
}
.sub-nav-tab:hover {
    background: rgba(102,126,234,0.1);
    color: var(--primary-color);
}
.sub-nav-tab.active {
    background: var(--gradient);
    color: white;
    box-shadow: 0 2px 8px rgba(102,126,234,0.3);
}

/* ===== v1.5.0: 用户菜单 ===== */
.user-menu-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 4px 12px;
    border-radius: 10px;
    transition: background 0.2s;
    flex-shrink: 0;
}
.user-menu-wrapper:hover {
    background: rgba(102,126,234,0.08);
}
.user-menu-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--gradient);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
}
.user-menu-name {
    font-size: 13px;
    font-weight: 500;
    color: #333;
}
.user-menu-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    min-width: 160px;
    z-index: 200;
    overflow: hidden;
}
.user-menu-item {
    padding: 12px 16px;
    cursor: pointer;
    font-size: 13px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.15s;
}
.user-menu-item:hover {
    background: rgba(102,126,234,0.08);
}
.user-menu-item.danger {
    color: #e74c3c;
}

/* ===== v1.5.0: Header 日期选择器区域 ===== */
.header-date-area {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}
.header-date-area .el-date-editor {
    width: 170px;
}

/* ===== v1.5.0: 移动端 Header 适配 ===== */
@media (max-width: 768px) {
    .global-header {
        padding: 0 8px;
        height: auto;
        min-height: 48px;
        flex-wrap: wrap;
        gap: 6px;
        border-radius: 12px;
        margin-bottom: 12px;
    }
    .sub-nav-wrapper {
        order: 1;
        width: 100%;
        overflow-x: auto;
        gap: 2px;
        padding: 4px 0;
    }
    .sub-nav-tab {
        padding: 6px 12px;
        font-size: 12px;
    }
    .user-menu-wrapper {
        order: 2;
        margin-left: auto;
    }
    .user-menu-name { display: none; }
    .header-date-area {
        order: 3;
        width: 100%;
        justify-content: flex-end;
        padding: 4px 0;
    }
}
```

---
## Phase 2: JS 状态重构 + 全局 Header HTML (~15 min)

**Objective:** 重构 menus 数据结构，添加 currentSubPage 状态，添加全局 header 和用户菜单 HTML。

### Task 2.1: 重构 menus 和新增状态变量

定位到 line 5394 (`const menus = ref([`) 的位置，替换 menus 定义：

```javascript
// 旧 (line 5394-5399):
const menus = ref([
    { key: 'dashboard', name: '策略总览', icon: '📈' },
    { key: 'calendar', name: '量化日历', icon: '🗓️' },
    { key: 'ai', name: '智能评股', icon: '🤖' },
    { key: 'settings', name: '系统配置', icon: '⚙️' }
]);

// 新:
const menus = ref([
    { key: 'strategies', name: '策略总览', icon: '📈', subPages: ['overview'] },
    { key: 'calendar', name: '量化日历', icon: '🗓️', subPages: ['daily', 'weekly', 'monthly', 'yearly', 'pool'] },
    { key: 'ai', name: '智能评股', icon: '🤖', subPages: ['overview', 'history', 'settings'] },
    { key: 'system', name: '系统配置', icon: '⚙️', subPages: ['status', 'datasource', 'feature', 'user'] }
]);
```

同时修改 `currentPage` 默认值：`const currentPage = ref('strategies');`

新增状态变量（在 `const currentPage` 下一行）：

```javascript
const currentSubPage = ref('overview');  // 当前子页面
const showUserMenu = ref(false);         // 用户菜单 dropdown
```

新增修改密码相关状态（在合适位置，如登录状态附近 line 5415+）：

```javascript
// ===== v1.5.0: 修改密码 =====
const showChangePassword = ref(false);
const changePasswordForm = ref({ oldPassword: '', newPassword: '', confirmPassword: '' });
const changingPassword = ref(false);
```

### Task 2.2: 更新侧边栏导航点击逻辑

定位到 line 3362 (桌面端 nav-item 点击) 和 line 4144 (移动端 nav-item 点击)，将 `@click="currentPage = menu.key"` 改为：

```javascript
@click="currentPage = menu.key; currentSubPage = menu.subPages[0]"
```

### Task 2.3: 新增全局 header HTML

在 `<div class="main-content">` 内部、第一个页面 `<div v-if="...">` 之前（即 line 3379 之后，大约插入在 line 3380 之前），插入全局 header：

```html
<!-- v1.5.0: 全局 Header — 二级导航 + 用户菜单 -->
<div class="global-header">
    <!-- 二级导航标签 -->
    <div class="sub-nav-wrapper">
        <template v-for="menu in menus" :key="menu.key">
            <template v-if="currentPage === menu.key">
                <div v-for="sp in menu.subPages" :key="sp"
                     class="sub-nav-tab" :class="{active: currentSubPage === sp}"
                     @click="currentSubPage = sp">
                    {{ subPageNames[sp] || sp }}
                </div>
            </template>
        </template>
    </div>

    <!-- 日期选择器 (仅日历页显示) -->
    <div class="header-date-area" v-if="currentPage === 'calendar'">
        <el-date-picker v-if="currentSubPage === 'daily'"
            v-model="selectedDate" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD"
            placeholder="选择日期" @change="onDateChange" :disabled-date="disabledDate" size="small" />
        <el-date-picker v-else-if="currentSubPage === 'weekly'"
            v-model="selectedDate" type="week" format="YYYY 第w周" value-format="YYYY-MM-DD"
            placeholder="选择周" @change="onDateChange" :disabled-date="disabledDate" size="small" />
        <el-date-picker v-else-if="currentSubPage === 'monthly'"
            v-model="selectedDate" type="month" format="YYYY-MM" value-format="YYYY-MM-DD"
            placeholder="选择月份" @change="onDateChange" :disabled-date="disabledDate" size="small" />
        <el-date-picker v-else-if="currentSubPage === 'yearly'"
            v-model="selectedDate" type="year" format="YYYY" value-format="YYYY-MM-DD"
            placeholder="选择年份" @change="onDateChange" :disabled-date="disabledDate" size="small" />
    </div>

    <!-- 用户菜单 (右上角) -->
    <div class="user-menu-wrapper" @click="showUserMenu = !showUserMenu" v-click-outside="() => showUserMenu = false">
        <div class="user-menu-avatar">{{ currentUser?.username?.charAt(0)?.toUpperCase() }}</div>
        <span class="user-menu-name">{{ currentUser?.username }}</span>
        <span style="font-size: 10px; color: #999;">▼</span>
        <div class="user-menu-dropdown" v-if="showUserMenu" @click.stop>
            <div class="user-menu-item" @click="showUserMenu = false; showChangePassword = true">
                🔑 修改密码
            </div>
            <div class="user-menu-item danger" @click="handleLogout">
                🚪 退出登录
            </div>
        </div>
    </div>
</div>
```

### Task 2.4: 新增修改密码弹窗 HTML

在 `</template>` (line 4149) 之前、最后一个现有弹窗之后（找一个合适位置，如 line 4500 附近现有弹窗后面）插入：

```html
<!-- v1.5.0: 修改密码弹窗 -->
<el-dialog v-model="showChangePassword" title="🔑 修改密码" width="420px">
    <el-form label-width="100px" @submit.prevent="doChangePassword">
        <el-form-item label="当前密码">
            <el-input v-model="changePasswordForm.oldPassword" type="password" placeholder="输入当前密码" show-password />
        </el-form-item>
        <el-form-item label="新密码">
            <el-input v-model="changePasswordForm.newPassword" type="password" placeholder="至少6位" show-password />
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input v-model="changePasswordForm.confirmPassword" type="password" placeholder="再次输入新密码" show-password />
        </el-form-item>
    </el-form>
    <template #footer>
        <el-button @click="showChangePassword = false">取消</el-button>
        <el-button type="primary" @click="doChangePassword" :loading="changingPassword">确认修改</el-button>
    </template>
</el-dialog>
```

### Task 2.5: 新增 v-click-outside 指令 + 修改密码函数 + subPageNames

在 JS 区域（setup 函数内，合适位置）新增：

```javascript
// ===== v1.5.0: subPageNames 映射 =====
const subPageNames = {
    'overview': '概览',
    'daily': '日视图', 'weekly': '周视图', 'monthly': '月视图', 'yearly': '年视图', 'pool': '股票池',
    'history': '历史记录', 'settings': '评股设置',
    'status': '系统状态', 'datasource': '数据源', 'feature': '功能配置', 'user': '用户管理'
};

// ===== v1.5.0: 清空日历旧视图 =====
// 当切换到日历页时，同步 currentSubPage → old currentView 兼容
watch([currentPage, currentSubPage], ([page, sub]) => {
    if (page === 'calendar' && ['daily','weekly','monthly','yearly'].includes(sub)) {
        // 映射新子页到旧视图
        const viewMap = { daily: 'day', weekly: 'week', monthly: 'month', yearly: 'year' };
        if (viewMap[sub] && currentView.value !== viewMap[sub]) {
            currentView.value = viewMap[sub];
            selectedDate.value = dates.value[dates.value.length - 1] || '';
            setTimeout(loadConsensusData, 50);
        }
    }
    // 子页切换时刷新对应数据
    if (page === 'ai' && sub === 'history') {
        loadAiHistory();
    }
    if (page === 'system') {
        if (sub === 'status' && currentUser.value?.role === 'admin') {
            loadSystemStatus();
            checkTushareConnection();
        }
        if (sub === 'datasource' && currentUser.value?.role === 'admin') {
            loadTushareConfig();
        }
        if (sub === 'feature' && currentUser.value?.role === 'admin') {
            loadFeishuConfig(); loadAiConfig(); loadRateLimit();
        }
        if (sub === 'user' && currentUser.value?.role === 'admin') {
            loadUsers();
        }
    }
});

// ===== v1.5.0: 修改密码 =====
async function doChangePassword() {
    if (!changePasswordForm.value.oldPassword) {
        ElementPlus.ElMessage.warning('请输入当前密码');
        return;
    }
    if (!changePasswordForm.value.newPassword || changePasswordForm.value.newPassword.length < 6) {
        ElementPlus.ElMessage.warning('新密码至少6位');
        return;
    }
    if (changePasswordForm.value.newPassword !== changePasswordForm.value.confirmPassword) {
        ElementPlus.ElMessage.warning('两次输入的新密码不一致');
        return;
    }
    changingPassword.value = true;
    try {
        const res = await fetch('/api/auth/change-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                old_password: changePasswordForm.value.oldPassword,
                new_password: changePasswordForm.value.newPassword
            })
        });
        const data = await res.json();
        if (res.ok) {
            ElementPlus.ElMessage.success('密码修改成功，请重新登录');
            showChangePassword.value = false;
            changePasswordForm.value = { oldPassword: '', newPassword: '', confirmPassword: '' };
            handleLogout();
        } else {
            ElementPlus.ElMessage.error(data.detail || '修改失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('修改失败，请重试');
    } finally {
        changingPassword.value = false;
    }
}
```

### Task 2.6: 更新 return 导出

在 return 块中 (line 6626-6666)，新增导出：

```javascript
currentSubPage, showUserMenu, subPageNames,
showChangePassword, changePasswordForm, changingPassword, doChangePassword,
```

### Task 2.7: 更新 onMounted 中的 currentPage 引用

将 onMounted 中 `currentPage.value === 'dashboard'` 改为 `currentPage.value === 'strategies'`（line 6587）。

将 watch 中 `val === 'settings'` 改为 `val === 'system'`（line 6599）。

---
## Phase 3: 页面拆分 — 策略总览 + 日历页 (~20 min)

**Objective:** 将 dashboard→strategies 改名，日历页拆分为 5 个子页。

### Task 3.1: 策略总览改名

- 将 `<!-- 页面0: 策略总览 -->` (line 3380) 的 `v-if="currentPage === 'dashboard'"` 改为 `v-if="currentPage === 'strategies'"`
- 去掉 `<div class="page-header">` 整个块（全局 header 已包含标题）
- 策略总览只有一个 `overview` 子页，内容保持不变

### Task 3.2: 日历页拆分为 5 个子页

定位到 line 3582 (`<!-- 页面1: 量化日历 -->`)。

**新结构：**
```html
<!-- 页面1: 量化日历 -->
<div v-if="currentPage === 'calendar'">
    <!-- 日视图子页 -->
    <div v-if="currentSubPage === 'daily'">
        <!-- 原来的日视图内容：股票池共识卡片 -->
        <div class="card">...</div>
    </div>

    <!-- 周视图子页 -->
    <div v-else-if="currentSubPage === 'weekly'">
        <!-- 原来周视图的筛选+列表 -->
        <div class="card">...</div>
    </div>

    <!-- 月视图子页 -->
    <div v-else-if="currentSubPage === 'monthly'">
        <div class="card">...</div>
    </div>

    <!-- 年视图子页 -->
    <div v-else-if="currentSubPage === 'yearly'">
        <div class="card">...</div>
    </div>

    <!-- 股票池子页 (原页面内同一套内容，作为独立子页) -->
    <div v-else-if="currentSubPage === 'pool'">
        <div class="card">
            <div class="card-title">💎 策略共识度股票池</div>
            ... (相同的 statusFilter + searchBox + stockList)
        </div>
    </div>
</div>
```

**关键点：** 日历页的 page-header（line 3584-3612）完全删除——日期选择器和视图切换已移到全局 header 的二级导航中。

**pool 子页：** 将原来 calendar 页面内的 status-tabs + search-box + stock-list 保留在 pool 子页中，daily/weekly/monthly/yearly 各复制一份轻量版（仅列表，无筛选切换，因为筛选在全局层面）。

**兼容处理：** 原来 `currentView` 逻辑暂时保留，通过 Phase 2 的 watch 做 `currentSubPage` → `currentView` 映射。等全部测试通过后，Phase 7 再清理。

---
## Phase 4: AI 页面拆分 (~15 min)

**Objective:** 将 AI 评估页面拆分为 3 个子页。

### Task 4.1: AI 页面重构

定位到 line 3655 (`<!-- 页面2: AI评估 -->`)。

**新结构：**
```html
<!-- 页面2: AI评估 -->
<div v-if="currentPage === 'ai'">
    <!-- 概览子页: 统计卡片 + 评估历史概述 -->
    <div v-if="currentSubPage === 'overview'">
        <!-- 统计卡片 (line 3676-3707) -->
        <div class="dashboard-grid">...</div>
        <!-- 批量操作工具栏 (line 3710-3722) -->
        <!-- 评估历史按时间线展示 -->
        <div class="card">
            <div class="card-title">📋 评估历史记录</div>
            ... (原有内容)
        </div>
    </div>

    <!-- 历史记录子页: 按时间/按股票视图切换 -->
    <div v-else-if="currentSubPage === 'history'">
        <div class="card">
            <div class="card-title">📋 评估历史记录</div>
            <!-- 视图切换按钮 (从原 page-header 移过来) -->
            <div style="display: flex; gap: 8px; margin-bottom: 16px;">
                <el-button size="small" @click="aiViewGroupBy = 'time'" :type="aiViewGroupBy === 'time' ? 'primary' : ''">🕐 按时间</el-button>
                <el-button size="small" @click="aiViewGroupBy = 'stock'" :type="aiViewGroupBy === 'stock' ? 'primary' : ''">📈 按股票</el-button>
            </div>
            ... (原有按时间/按股票历史列表内容)
        </div>
    </div>

    <!-- 评股设置子页: 自动评股配置 + 批量评估入口 -->
    <div v-else-if="currentSubPage === 'settings'">
        <div class="card">
            <div class="card-title">⚙️ 自动评股设置</div>
            ... (将 showAutoEvaluateSettings 弹窗内容内联到这里)
        </div>
        <div class="card">
            <div class="card-title">✨ 批量评估</div>
            <el-button type="primary" @click="showBatchEvaluate = true">开始批量评估</el-button>
        </div>
    </div>
</div>
```

**关键点：** 原 page-header 里的 AI 操作按钮（按时间/按股票/自动评股/批量评估）全部移除，分散到对应子页中。

---
## Phase 5: 系统配置页面拆分 (~15 min)

**Objective:** 将 settings 页面拆分为 4 个子页。

### Task 5.1: 系统配置重构

定位到 line 3817 (`<!-- 页面3: 系统配置 -->`)。

**新结构：**
```html
<!-- 页面3: 系统配置 -->
<div v-if="currentPage === 'system'">
    <!-- 全局配置状态栏（保留） -->
    <div class="config-top-toolbar">...</div>

    <!-- 系统状态子页 -->
    <div v-if="currentSubPage === 'status'">
        <div class="card system-status-card">
            (原 system-status-card 内容, line 3844-3909)
        </div>
    </div>

    <!-- 数据源子页 -->
    <div v-else-if="currentSubPage === 'datasource'">
        <div class="card">
            (原 Tushare 配置, line 3912-3934)
        </div>
    </div>

    <!-- 功能配置子页 -->
    <div v-else-if="currentSubPage === 'feature'">
        <div class="card">
            (原 AI API 配置, line 3937-3997)
        </div>
        <div class="card">
            (原 飞书推送配置, line 3999-4034)
        </div>
        <div class="card">
            (原 策略筛选过滤, line 4036-4065)
        </div>
        <div class="card">
            (原 访问限速配置, line 4068-4076)
        </div>
        <div class="card">
            (原 主题选择, line 4078-4086)
        </div>
    </div>

    <!-- 用户管理子页 (仅 admin 可见) -->
    <div v-else-if="currentSubPage === 'user'">
        <div class="card" v-if="currentUser?.role === 'admin'">
            (原 用户管理, line 4088-4138)
        </div>
    </div>
</div>
```

**关键点：**
- 原 page-header 中的"退出登录"按钮删除（已移到全局 header 用户菜单）
- 原 `<div v-if="currentUser?.role === 'admin'">` 保留在 user 子页中
- 配置工具栏 `config-top-toolbar` 保留在页面顶部，跨所有 system 子页

---
## Phase 6: 更新所有 currentPage 引用 (~5 min)

**Objective:** 全局搜索替换旧 page key。

### Task 6.1: 搜索替换

```bash
cd ~/.openclaw/workspace/quant-calendar-ops

# 检查所有旧的 currentPage 引用
grep -n "dashboard\|'settings'" frontend/index.html | grep -v "dashboardData\|dashboardDate\|dashboard-grid\|dashboard_" 
```

手动更新所有残留引用：
- `currentPage.value === 'dashboard'` → `'strategies'`
- `currentPage === 'dashboard'` → `'strategies'` (模板中)
- `currentPage === 'settings'` → `'system'` (模板中)
- `currentPage.value === 'settings'` → `'system'`
- `val === 'settings'` → `'system'` (watch 中)

### Task 6.2: 更新 test connection 中的 refresh

如果 watch 中有 `val === 'settings'` 触发 loadUsers 等操作，改为 `val === 'system'`。

---
## Phase 7: 清理 + 发布 (~10 min)

### Task 7.1: 删除旧 views 切换按钮和 page-header

确认日历页的旧 page-header（含 views 切换器、nav buttons、date pickers）已完全删除。
确认 AI 页的旧 page-header（含 groupBy/自动评股/批量评估按钮）已完全删除。
确认 settings 页的旧 page-header（含退出登录按钮）已完全删除。

### Task 7.2: 清理不再使用的变量（可选，低优先级）

- `views` 变量和 `switchView` 函数暂时保留（作为兼容桥接），后期可清理
- `viewUnit`, `datePickerType`, `dateFormat`, `canNavPrev`, `canNavNext` 保留（日历页仍需要）

### Task 7.3: Div 平衡最终检查

```bash
grep -c '<div ' frontend/index.html
grep -c '</div>' frontend/index.html
# 差应为 0
```

### Task 7.4: 功能清单逐项验证

在浏览器中打开 `http://localhost:8000/` 并验证：

- [ ] 侧边栏 4 项中文名正确："策略总览/量化日历/智能评股/系统配置"
- [ ] 点击侧边栏"量化日历"→ 二级导航显示：日视图 | 周视图 | 月视图 | 年视图 | 股票池
- [ ] 点击"日视图"→ 日期选择器出现在 header 右侧，日历数据加载
- [ ] 点击"周视图"→ 日期选择器变为周选择器
- [ ] 点击"月视图/年视图"同样正常
- [ ] 点击"股票池"→ 无日期选择器，显示完整股票池列表
- [ ] 点击侧边栏"智能评股"→ 二级导航：概览 | 历史记录 | 评股设置
- [ ] "概览"显示统计卡片 + 评估历史
- [ ] "历史记录"显示完整历史，可切换按时间/按股票
- [ ] "评股设置"显示自动评股配置 + 批量评估按钮
- [ ] 点击侧边栏"系统配置"→ 二级导航：系统状态 | 数据源 | 功能配置 | 用户管理
- [ ] 4 个子页各自显示正确内容
- [ ] 右上角用户菜单：显示头像+用户名，点击弹出 dropdown
- [ ] dropdown 有"修改密码"和"退出登录"
- [ ] 点击"修改密码"→ 弹窗打开，表单正常
- [ ] 点击"退出登录"→ 清除登录状态，回到登录页
- [ ] 侧边栏"策略总览"正常显示（单子页）
- [ ] 移动端布局：底部导航 + header 适配正常
- [ ] JavaScript Console 无错误
- [ ] 无空白页/白屏

### Task 7.5: 发布

```bash
cd ~/.openclaw/workspace/quant-calendar-ops
bash release.sh 1.5.0
```

---
## 风险与注意事项

1. **Div 平衡是硬前提** — 当前 7 个多余 `</div>` 必须在拆分前修复，否则 `v-if`/`v-else-if` 链会触发 Vue 编译错误导致空白页
2. **兼容桥接** — `currentView` 和 `switchView` 暂时保留，通过 watch 同步 `currentSubPage` → `currentView`，避免大规模重写数据加载逻辑
3. **用户菜单 logout** — 全局 header 的用户菜单复用 `handleLogout`，原 settings 页的退出登录按钮删除
4. **移动端** — 全局 header 在移动端的 flex-wrap 布局已在 CSS 中定义，需要实测验证
5. **修改密码 API** — 需要确认后端 `/api/auth/change-password` 是否存在，若不存在需先实现后端接口
6. **备份** — v1.4.0 备份在 `index.html.v140.backup`，可随时回滚

## 估算总工时

| Phase | 内容 | 预计时间 |
|-------|------|---------|
| Phase 1 | 修复 Div 平衡 + 新增 CSS | 10 min |
| Phase 2 | JS 状态重构 + Header HTML | 15 min |
| Phase 3 | 策略总览改名 + 日历 5 子页拆分 | 20 min |
| Phase 4 | AI 3 子页拆分 | 15 min |
| Phase 5 | 系统配置 4 子页拆分 | 15 min |
| Phase 6 | 更新引用 | 5 min |
| Phase 7 | 清理 + 验证 + 发布 | 10 min |
| **合计** | | **~90 min** |