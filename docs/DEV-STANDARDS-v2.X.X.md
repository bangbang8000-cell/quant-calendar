# 量化选股日历 — 开发规范 v2.X.X

> **生效范围**: 所有 v2.X.X 系列开发 | **修订日期**: 2026-07-15 | **强制执行**: v2.1.0 起

---

## 0. 安全开发铁律（优先级最高）

> **v2.2.0/v2.3.0 失败教训。违反任一条 = 禁止提交。**

| # | 规则 | 违反后果 |
|---|------|----------|
| 0.1 | **每版本只做一件事** | 多项混合导致回滚范围过大 |
| 0.2 | **单次改动 ≤ 50 行** | 超过则拆分，便于 bisect 定位 |
| 0.3 | **禁止批量正则替换 HTML** | re.sub 可能匹配 script 块破坏 JS |
| 0.4 | **每次前端改动后必须浏览器验证** | 登录页+策略总览+日历 三项通过 |
| 0.5 | **CDN 版本零破坏** | 任何改动不得导致 CDN index.html 渲染异常 |
| 0.6 | **操作数据文件前先备份** | `cp -r data/ data.backup/` |
| 0.7 | **stash/git 操作后检查冲突** | `grep '<<<<<<<' ` 确认零冲突 |
| 0.8 | **CSS 不与 CDN 内联 style 冲突** | 新 CSS 规则必须确认 CDN 版本不受影响 |
| 0.9 | **每改必 commit** | 不攒批，方便独立 revert |
| 0.10 | **发布前全量冒烟** | 登录→日历→AI评估→回测 四项通过 |

---

## 1. 代码组织

### 1.1 后端目录结构

```
backend/
├── main_new.py              # 应用入口 (禁止新增业务逻辑)
├── config.py                # 配置 (pydantic-settings)
├── paths.py                 # 路径常量 (唯一来源)
├── auth.py                  # JWT 认证
├── rate_limit.py            # 限流
├── user_manager.py          # 用户 CRUD
├── group_manager.py         # 用户组管理
├── data_parser.py           # 策略 CSV 解析
├── data_sources.py          # 多数据源统一管理
├── data_refresh_config.py   # 刷新配置
├── market_data.py           # 市场行情 + K线
├── merrill_clock.py         # 美林时钟引擎
├── stock_info.py            # 股票信息库
├── scheduler.py             # 异步定时任务 (asyncio)
├── feishu_push.py           # 飞书推送
├── ai_evaluator.py          # AI 评股引擎
├── backtest.py              # 回测引擎
├── dashboard_api.py         # 仪表盘业务逻辑 ← 计划合并到 api/v1/dashboard.py
├── views_aggregator.py      # 多视图股票池聚合
└── api/v1/
    ├── router.py            # 路由汇总
    ├── market.py            # 市场/美林时钟/K线
    ├── auth.py              # 认证/用户
    ├── calendar.py          # 日历视图
    ├── views.py             # 多视图聚合
    ├── feishu.py            # 飞书配置
    ├── ai.py                # AI 评估
    ├── backtest.py          # 回测
    ├── dashboard.py         # 仪表盘
    ├── user_config.py       # 用户配置
    ├── watchlist.py         # 自选股
    ├── data_refresh.py      # 数据刷新
    ├── groups.py            # 用户组
    ├── search.py            # 全局搜索
    └── ai_config_persist.py # AI 配置持久化
```

### 1.2 前端目录结构 (v2.2.0 目标)

```
frontend/
├── index.html               # 外壳 (仅 <head>, <div id="app">, 脚本加载)
├── lib/                     # 第三方库 (Vue, ElementPlus, ECharts — CDN 不可变)
├── static/
│   ├── css/
│   │   └── themes.css      # 全部主题样式 (禁止内联 style)
│   └── js/
│       ├── core.js          # API 封装, 工具函数
│       └── themes.js        # 主题切换
├── src/                     # (v2.2.0 新增) Vue SFC 组件
│   ├── App.vue
│   ├── components/
│   │   ├── LoginPage.vue
│   │   ├── Sidebar.vue
│   │   ├── GlobalHeader.vue
│   │   ├── StrategyOverview.vue
│   │   ├── MerrillClock.vue
│   │   ├── DashboardDecision.vue
│   │   ├── CalendarDaily.vue
│   │   ├── CalendarWeekly.vue
│   │   ├── CalendarMonthly.vue
│   │   ├── CalendarYearly.vue
│   │   ├── AIEvaluation.vue
│   │   ├── BacktestPanel.vue
│   │   ├── SystemConfig.vue
│   │   ├── UserManagement.vue
│   │   ├── WatchlistPanel.vue
│   │   └── SearchBar.vue
│   └── composables/
│       ├── useAuth.js
│       ├── useTheme.js
│       ├── useApi.js
│       └── useCalendar.js
```

### 1.3 文件大小限制

| 文件类型 | 最大行数 | 说明 |
|----------|----------|------|
| Python 模块 | 500 | 超过拆分为子模块 |
| Vue SFC 组件 | 500 | 超过拆分为子组件。过渡期组件可适当放宽 |
| JavaScript 工具 | 200 | 纯函数/工具类 |
| CSS 文件 | 1000 | 按组件/module 拆分 |

---

## 2. Python 编码规范

### 2.1 日志

```python
# ✅ 正确 — 使用 logging
import logging
logger = logging.getLogger(__name__)
logger.info("数据加载完成: %d 条记录", count)
logger.error("连接失败", exc_info=True)

# ❌ 禁止 — print()
print("数据加载完成")  # 无时间戳、无级别、无结构化
```

**强制规则**: 所有后端模块禁止使用 `print()`。现有的 `views_aggregator.py` 和 `feishu_push.py` 中的 print 在 v2.1.0 清理。

### 2.2 异常处理

```python
# ✅ 正确 — 至少记录日志
try:
    result = api.call()
except Exception as e:
    logger.exception("API 调用失败")  # 自动包含 traceback
    raise

# ✅ 正确 — 吞掉异常但至少记录
try:
    cache_data = load_optional_cache()
except FileNotFoundError:
    logger.debug("缓存文件尚未创建，跳过")
    cache_data = {}

# ❌ 禁止 — 裸 except 吞一切
try:
    result = api.call()
except:  # 连 KeyboardInterrupt 都吞
    pass
```

### 2.3 类型注解

```python
# ✅ 新代码必须带类型注解
def get_kline_data(ts_code: str, period: str = 'daily', limit: int = 60) -> list[dict] | None:
    ...

# ✅ 复杂类型使用 typing
from typing import Dict, List, Optional
```

### 2.4 导入顺序

```python
# 1. 标准库
import json, os, logging
from datetime import datetime

# 2. 第三方库
import pandas as pd
from fastapi import APIRouter

# 3. 项目内部
from config import settings
from data_parser import parser
```

### 2.5 配置管理

- **唯一来源**: `config.py` 中的 `Settings` 类
- **路径常量**: `paths.py` — 禁止在其他文件硬编码路径
- **密钥**: 只通过环境变量或 `.env` 读取，禁止配置文件明文存储
- **字符串常量**: 在 `data_parser.py` 的 `STRATEGY_CONFIG` 或各自模块顶部定义

---

## 3. 前端编码规范

### 3.1 样式规范

```html
<!-- ❌ 禁止 — 内联 style -->
<div style="color: red; font-size: 14px;">...</div>

<!-- ✅ 正确 — CSS class -->
<div class="stat-card positive">...</div>
```

**强制规则**: 所有样式在 `themes.css` 中定义，使用 CSS 变量引用主题色。

```css
/* themes.css 中的 CSS 变量命名规范 */
:root {
  /* 颜色 */
  --color-text-primary: #303133;
  --color-text-secondary: #606266;
  --color-bg-card: #ffffff;
  --color-bg-page: #f5f7fa;
  --color-border-base: #ebeef5;
  --color-accent: #409eff;
  --color-success: #67c23a;
  --color-warning: #e6a23c;
  --color-danger: #f56c6c;

  /* 间距 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* 字体 */
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 20px;
  --font-size-title: 24px;

  /* 圆角 */
  --radius-sm: 4px;
  --radius-base: 8px;
  --radius-lg: 12px;

  /* 阴影 */
  --shadow-card: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-dropdown: 0 4px 12px rgba(0,0,0,0.1);
}

.stat-card {
  color: var(--color-text-primary);
  background: var(--color-bg-card);
  padding: var(--spacing-md);
  border-radius: var(--radius-base);
}
```

**命名规范**: `--{category}-{property}[-{variant}]`。category 为 color/spacing/font/radius/shadow，property 为功能描述（如 text-primary, bg-card）。

### 3.2 Toast / 通知

```javascript
// ✅ 正确 — 操作结果内联展示（用户偏好）
loading.value = false;
resultText.value = '刷新完成';  // 在页面内展示

// ⚠️ 仅保留 — 写入操作失败时
ElementPlus.ElMessage.error('保存失败: 网络错误');

// ❌ 禁止 — 读取操作弹 toast
ElementPlus.ElMessage.success('数据加载完成');
ElementPlus.ElMessage.info('已切换视图');
```

**原则**: reads 静默 / writes 内联反馈 / errors 弹 ElMessage.error

### 3.3 Vue 模板安全铁律

参见 `quant-calendar-spa-development` skill，遵循以下铁律：

| # | 规则 |
|---|------|
| 1 | card/card-title 不写 inline style |
| 2 | v-for 包在 template v-else |
| 3 | watch 无 sub → watch([p, s]) |
| 4 | ElMessage → ElementPlus.ElMessage |
| 5 | 禁止 sed -i 改 SPA → 只用 patch |
| 6 | execute_code 内 read_file 返回带行号，勿写回 |
| 7 | v-else-if 内加卡片后需补 `</div>` 闭合 |
| 8 | SPA 蓝屏 → 缩到最小再逐项加回 |

### 3.4 SPA → Vue SFC 迁移策略

从 6372 行单文件 index.html 迁移到 Vue SFC 组件的过渡方案：

**阶段 1: 并行环境搭建（不影响现有功能）**

1. 在 `frontend/` 下创建 `src/` 目录，Vite 构建
2. `index.html` 继续可独立运行（CDN 模式），两种模式并存
3. 新建 `frontend/vite.config.js`，输出到 `frontend/dist/`

**阶段 2: 逐组件迁移（每步骤可回滚）**

4. 先拆 LoginPage → 验证登录功能在两套环境都正常
5. 再拆 Sidebar + GlobalHeader → 导航无误
6. 依次拆分核心页面：StrategyOverview → MerrillClock → Calendar → AIEvaluation → BacktestPanel
7. 最后拆分辅助组件：SystemConfig → UserManagement → Watchlist
8. 抽取 composables：useAuth, useTheme, useApi, useCalendar

**阶段 3: 切换与验证**

9. 全部迁移完成后，切换生产入口为 Vite 构建产物
10. 保留 index.html 作为 fallback 方案至少 1 个大版本

**阶段 4: 清理**

11. 确认 Vite 版本稳定运行 2 周后，移除 CDN 模式的 index.html

**关键规则**:
- 每拆一个组件，在两个环境都做功能验证
- 保持 API 调用方式不变（fetch + Bearer token）
- 主题系统保持 CSS 变量驱动，不引入新的主题方案
- SPA 蓝屏时的恢复策略：缩到最小再逐项加回（参见 skill: quant-calendar-spa-development）

### 3.5 console 使用规范

```javascript
// ❌ 禁止 — 调试用 console.log
console.log('data:', data);
console.warn('deprecated');

// ✅ 允许 — 关键异常上报（用于生产环境排查）
console.error('不可恢复的异常:', err);

// 条件编译移除（v2.1.0 清理后，仅保留异常上报）
if (import.meta.env.DEV) {
  console.log('仅开发环境可见');
}
```

**规则**: 生产代码中禁止 `console.log` / `console.warn`。`console.error` 仅保留不可恢复的异常上报（如 API 初始化失败）。v2.1.0 清理现有的 32 处调试日志。

---

## 4. API 规范

### 4.1 URL 命名

```
GET    /api/market/overview           # 市场概览
GET    /api/calendar/{date}           # 获取某日数据
POST   /api/ai/evaluate               # AI 评估（写操作）
PUT    /api/users/{username}          # 更新用户
DELETE /api/users/{username}          # 删除用户
```

### 4.2 响应格式

```json
// 成功
{ "success": true, "data": { ... } }

// 列表
{ "success": true, "data": [...], "total": 42 }

// 错误
{ "success": false, "error": { "code": "AUTH_EXPIRED", "message": "登录已过期" } }
```

### 4.3 认证

- 所有 API 默认需要 `Authorization: Bearer <token>`（通过 `get_current_active_user` 依赖）
- 公开端点: `/api/login`、`/api/health`、前端静态资源
- 可选认证: `get_current_user` 返回 None 而非 401
- 角色隔离: `get_admin_user`、`get_non_guest_user`

### 4.4 版本策略

- 当前 API 前缀 `/api`（相当于 v1）
- 破坏性变更时新增 `/api/v2`
- v1 保持向后兼容至少 2 个大版本
- 新路由全部走 `/api`，在 `api/v1/router.py` 注册

---

## 5. 测试规范

### 5.1 覆盖率要求

| 模块 | 最低覆盖率 |
|------|-----------|
| `auth.py` | 90% |
| `data_parser.py` | 80% |
| `ai_evaluator.py` | 80% |
| `scheduler.py` | 70% |
| `backtest.py` | 70% |
| `data_sources.py` | 70% |
| `views_aggregator.py` | 70% |
| API 路由 | 60% (集成测试) |

### 5.2 测试结构

```
tests/
├── conftest.py              # fixtures, mocks
├── test_auth.py
├── test_user_manager.py
├── test_data_parser.py      # (v2.1.0 新增)
├── test_ai_evaluator.py     # (v2.1.0 新增)
├── test_backtest.py         # (v2.1.0 新增)
├── test_scheduler.py        # (v2.1.0 新增)
└── test_api/                # (v2.1.0 新增) 集成测试
    ├── test_market.py
    └── test_auth_routes.py
```

### 5.3 命名规范

```python
def test_login_success():
def test_login_wrong_password():
def test_login_disabled_user():
def test_batch_evaluate_empty_stocks():
def test_batch_evaluate_api_error():
```

---

## 6. Git 工作流

### 6.1 分支策略

```
master    ← 生产就绪（仅通过 PR 合入）
  └── feat/v2.1-security     ← 功能分支
  └── fix/toast-cleanup      ← 修复分支
  └── chore/deps-cleanup     ← 维护分支
```

### 6.2 提交信息

```
<type>: <简短描述>

[可选的详细说明]

type: feat | fix | refactor | test | docs | chore | security
```

示例:
```
security: 加密存储 AI API Key

- 使用 cryptography.fernet 加密
- 密钥从环境变量 FERNET_KEY 读取
- 向后兼容读取明文配置
```

### 6.3 发布流程

1. dev 分支 → 功能开发
2. 提 PR → code review
3. 合入 master → CI 通过
4. `gh release create v2.X.Y` → 生成 release notes
5. rsync → staging 验证

---

## 7. 安全 Checklist

每次 PR 合入前检查：

- [ ] 无新增硬编码密钥/Token
- [ ] 用户输入有适当校验
- [ ] 异常有日志记录（无裸 except pass）
- [ ] 新 API 有适当权限检查
- [ ] .env 未被提交（git diff --cached 检查）
- [ ] 依赖无已知漏洞（pip-audit / safety check）

---

## 8. 工具链

| 工具 | 用途 | 状态 |
|------|------|------|
| ruff | Python lint + format | v2.1.0 引入 |
| pytest + pytest-cov | 测试 + 覆盖率 | 已有 |
| GitHub Actions | CI/CD | v2.1.0 搭建 |
| pip-audit | 依赖安全扫描 | v2.1.0 引入 |

---

*本规范基于 v2.0.0 代码库审计中的实际问题制定，所有规则均为可执行、可检查。*
