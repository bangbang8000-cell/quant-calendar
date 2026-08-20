# 量化选股日历 — 部署指南

## 架构概览

本项目的开发和部署环境**物理分离**：

| 环境 | 目录 | 端口 | DEBUG |
|------|------|------|-------|
| 开发 | `quant-calendar-dev` | 8001 | True |
| 生产 | `quant-calendar-ops` | 8000 | False |

两套环境各自的 `.env`、`data/`、`.venv` **严格独立**，互不影响。

---

## 快速部署（首次）

```bash
# 1. 克隆仓库
git clone https://github.com/bangbang8000-cell/quant-calendar.git quant-calendar-dev
cd quant-calendar-dev

# 2. 创建生产目录并复制文件（首次）
mkdir ../quant-calendar-ops
# 方法一：robocopy（Windows）
robocopy quant-calendar-dev quant-calendar-ops /E /XD ".venv" "__pycache__" ".git" ".github" /XF ".env" ".gitignore"

# 方法二：git checkout（跨平台）
git --git-dir="quant-calendar-dev/.git" --work-tree="quant-calendar-ops" checkout -f master -- .

# 3. 创建 Python 虚拟环境
cd quant-calendar-ops
python -m venv .venv
.venv\Scripts\pip.exe install -r quant-calendar-dev\requirements.lock

# 4. 配置 .env（复制模板后修改）
cp quant-calendar-dev\.env.example .env
# 编辑 .env：PORT=8000, DEBUG=False

# 5. 启动
.venv\Scripts\python.exe backend\main_new.py
> **前端构建（V4.3+）**：`frontend/dist/` 构建产物已入库（后端优先 serve `dist/index.html`），直接部署无需 Node 环境。仅开发/前端改动时需重建：
> ```bash
> cd frontend && npm install && npm run build   # 产物更新到 dist/
> ```
> 前端源码改动后必须 `npm run build` 再重启后端，浏览器强刷（Ctrl+Shift+R）验证。

```

---

## 版本更新（已有 ops 环境）

从 GitHub 拉取最新版本并同步到 ops，保留本地配置和数据。

### 步骤 1：拉取最新代码

```bash
cd quant-calendar-dev
git pull origin master
```

### 步骤 2：同步文件到 ops

**关键原则：同步代码，保留配置。** 排除以下内容：
- `.env` — 环境变量（含 API Key、端口）
- `data/` — 运行时数据（用户、配置、缓存）
- `.venv/` — Python 虚拟环境
- `__pycache__/` — 编译缓存
- `.git/` — 版本控制

```bash
# Windows（需要 admin 权限）
robocopy quant-calendar-dev quant-calendar-ops /MIR /XD ".venv" "__pycache__" ".git" "data" /XF ".env"

# 跨平台方案（利用 git）
git --git-dir="quant-calendar-dev/.git" --work-tree="quant-calendar-ops" checkout -f master -- .
```

> `.env` 和 `data/` 在 `.gitignore` 中，git checkout 方式天然不会覆盖它们。

### 步骤 3：安装新依赖

检查依赖锁文件变更（v3.10 起依赖版本锁定，直接依赖修改走 `requirements.in`，重新编译锁文件）：

```bash
cd quant-calendar-dev
git diff HEAD~1 -- requirements.in requirements.lock
```

根据差异安装：

```bash
cd quant-calendar-ops
.venv\Scripts\pip.exe install <新包名>
```

### 步骤 4：重启服务

```bash
# 停止旧服务（Ctrl+C 或终止进程）
tasklist | findstr python

# 启动新服务
cd quant-calendar-ops
.venv\Scripts\python.exe backend\main_new.py
```

浏览器访问 http://127.0.0.1:8000，**强制刷新（Ctrl+Shift+R）** 加载新版本。

---

## 数据源配置

### 三源架构

查询优先级：`sxsc-tushare → tushare → akshare`，自动 fallback。

| 数据源 | 是否需要 Token | 安装方式 | 备注 |
|--------|:---:|------|------|
| sxsc-tushare | 是 | 离线安装（见下方） | 券商版，优先级最高 |
| tushare | 是 | `pip install tushare` | 标准版 Pro |
| akshare | 否 | `pip install akshare` | 免费开源，兜底 |

### sxsc-tushare 离线安装

该模块不在 PyPI 上，需从券商获取安装包后手动安装：

```bash
# 1. 解压安装包（假设放在 soft/ 目录下）
unzip soft/sxsc-tushare.20231213.zip -d soft/sxsc/

# 2. 安装（setup.py 在解压后的子目录中，注意嵌套层级）
.venv\Scripts\pip.exe install soft/sxsc/sxsc-tushare.20231213/
```

> 注意：安装时可能需要降级 `websocket-client` 到 `0.57.0`（与当前 `1.9.0` 冲突），pip 会自动处理。

### Tushare Token 配置

1. 注册 [Tushare Pro](https://tushare.pro) 获取 Token
2. 打开 http://127.0.0.1:8000 → 系统配置 → 数据源管理
3. 分别填入 sxsc-tushare 和 tushare 的 Token
4. 点击各自卡片中的 **测试连接**

### 验证数据源状态

通过 API 直接查看（无鉴权）：

```bash
curl http://127.0.0.1:8000/api/market/datasource/status
```

返回示例：
```json
{
  "success": true,
  "status": {
    "sxsc_tushare": { "enabled": true, "connected": true, "error": null },
    "tushare":       { "enabled": true, "connected": true, "error": null },
    "akshare":       { "enabled": true, "connected": true, "error": null }
  }
}
```

若 `connected: false`，查看 `error` 字段定位原因。

---

## 依赖安装参考

```bash
# 基础依赖
.venv\Scripts\pip.exe install -r requirements.lock

# 可选数据源
.venv\Scripts\pip.exe install akshare

# sxsc-tushare（券商版，离线安装）
.venv\Scripts\pip.exe install <解压目录>/sxsc-tushare.20231213/
```

### 已知依赖冲突

- **akshare** 安装时会引入大量子依赖（curl_cffi、mini-racer、openpyxl 等约 11 个包）
- **sxsc-tushare** 依赖 `websocket-client~=0.57.0`，若系统已安装更新版本（如 1.9.0），pip 会自动降级
- **PowerShell 执行策略** 可能阻止脚本运行。解决方案：
  - 使用完整路径指定可执行文件：`.venv\Scripts\pip.exe` 而非 `pip`
  - 或临时绕过：`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

---

## API Key 配置

首次部署后，以下配置需要通过 Web UI 填入：

| 配置项 | 位置 | 说明 |
|--------|------|------|
| Tushare Token | 系统配置 → 数据源 | 数据源连接必需 |
| AI 模型 API Key | 系统配置 → AI 模型管理 | DeepSeek / 字节 CodingPlan 等 |
| 飞书 Webhook | 系统配置 → 自动评估 | 定时推送（可选） |

所有配置**修改即保存**（`@change` 自动调用保存接口），AI 模型配置需点击 **💾 保存** 按钮。

> 注意：配置文件（`.env`、`data/*.json`）在 `.gitignore` 中，不会随 Git 同步。从 GitHub 拉取新版本后，这些文件不会被覆盖。

---

## 常见问题

### 服务无法启动

```bash
# 检查端口占用
netstat -ano | findstr 8000
taskkill /PID <进程ID> /F

# 清除编译缓存
cd quant-calendar-ops
Get-ChildItem -Recurse -Directory -Filter __pycache__ | Remove-Item -Recurse -Force
```

### Tushare 测试失败

1. 确认 Token 有效：到 [tushare.pro](https://tushare.pro) 检查
2. 确认网络可达：`ping api.tushare.pro`
3. 查看服务端日志中的具体错误信息
4. 常见错误：`您的token不对` — Token 无效或已过期

### 数据源状态异常

```bash
# 直接查看数据源连接状态
curl http://127.0.0.1:8000/api/market/datasource/status
```

| connected | error | 含义 |
|:--:|------|------|
| `false` | `No module named 'xxx'` | 模块未安装，需 pip install |
| `false` | `数据源 xxx 未初始化` | 模块已安装但 Token 为空，需填入 Token |
| `true` | `null` | 正常 |

### K 线数据加载异常

启动日志出现 `JSONDecodeError` 时，说明 `data/market_cache.json` 损坏：

```bash
del quant-calendar-ops\data\market_cache.json
# 重启服务后自动重建
```

> 此缓存是 K 线行情数据的本地快照，删除后下次请求会从数据源重新拉取，无数据丢失风险。

### 页面修改后不生效

- 前端是单文件 SPA，修改 `index.html` 或 `js/` 后需重启后端
- 浏览器缓存：**Ctrl+Shift+R** 强制刷新
- CSS/JS 引用带版本参数 `?v=X.Y.Z`，版本升级后自动失效旧缓存

### PowerShell 无法运行脚本

如果遇到 `running scripts is disabled on this system`：

```powershell
# 针对当前会话
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

或者使用完整路径调用可执行文件（绕过 `pip`/`python` 别名）：

```bash
.venv\Scripts\pip.exe install pypinyin          # 安装包
.venv\Scripts\python.exe backend\main_new.py    # 启动服务
```

### sxsc-tushare 模块找不到

确认安装成功：

```bash
.venv\Scripts\pip.exe show sxsc-tushare
```

若显示 `WARNING: Package(s) not found`，检查：
1. 是否使用的是 ops 的 `.venv`（不是系统 Python）
2. 安装时路径是否正确（注意 ZIP 解压后的嵌套目录）

---

## 文件结构

```
quant-calendar-ops/
├── .env                    # 环境变量（不入 git）
├── .venv/                  # Python 虚拟环境（不入 git）
├── backend/                # FastAPI 后端
│   ├── main_new.py         # 主入口（APP_VERSION 单一来源）
│   ├── data_sources.py     # 多数据源管理
│   ├── merrill_clock.py    # 美林时钟引擎
│   ├── ai_evaluator.py     # AI 多模型评估 + 每日复盘
│   ├── factor_engine.py    # 多因子引擎
│   ├── portfolio.py        # 模拟组合/持仓
│   ├── market_review.py    # AI 每日复盘
│   ├── scan_engine.py      # 异动扫描
│   ├── eval_track.py       # 评估胜率追踪
│   ├── backtest.py         # 回测核心
│   ├── api_keys.py         # 开放 API Key（仅存哈希）
│   ├── webhook.py          # Webhook 事件订阅
│   ├── metrics.py          # Prometheus 可观测性
│   ├── scheduler.py        # 定时任务
│   └── api/v1/             # REST API 路由（含 /api/openapi）
├── frontend/               # Vue 3 SPA（V4.3 起 Vite 构建层）
│   ├── index.html          # 应用入口模板（含 {{APP_VERSION}}/{{NONCE}} 注入占位）
│   ├── src/main.js         # Vite 构建入口（业务 JS 顺序打包）
│   ├── dist/               # 构建产物（已入库，Docker/部署免 Node 构建；后端优先 serve）
│   ├── css/                # tokens.css / themes.css / layout.css（设计令牌体系）
│   ├── js/                 # 源码模块（含 locales/ 中英语言包、sw.js PWA）
│   └── lib/                # Element Plus / ECharts（vendor 不打包）
├── data/                   # 运行时数据（不入 git）
│   ├── datasource_config.json
│   ├── ai_models.json
│   ├── users.json
│   ├── users/<name>/       # 每用户目录
│   └── app.db              # SQLite（组合/持仓/自选等写路径）
├── requirements.in / requirements.lock
└── DEPLOYMENT.md
```

---

## 版本历史

| 版本 | 日期 | 关键变更 |
|------|------|----------|
| v3.17 | 2026-08 | 全版交付：AI 复盘/多因子体检/回测/胜率追踪/模拟组合/异动扫描；架构拆分/内联治理/鉴权收敛/可观测性/多用户隔离；移动端 PWA/性能优化/个性化/盘中增强；开放 API（API Key + Swagger + Webhook）/i18n。`APP_VERSION=3.17.3`，719 测试全绿 |
| v3.15.1 | 2026-08 | 视觉回归基线、UI 审计修复 |
| v3.14.0 | 2026-08 | 前端组件化拆分、备份恢复、页面热度 |
| v3.10.0 | 2026-08 | 前端模块化、版本注入、依赖锁定 |
| v3.6.0 | 2026-07 | 前端模块化（app-logic.js 拆分组件）、数据备份恢复、页面热度统计 |
| v3.1.0 | 2026-07 | 美林时钟历史周期数据（14条记录，2008至今） |
| v3.0.0 | 2026-07 | 美林时钟模块解耦、CSS Token 体系 |
| v2.5.0 | 2026-07 | UI 全面升级：侧边栏修复、Token 去重、移动端增强 |
| v2.4.0 | 2026-06 | AI 智能问股：对话式股票分析，流式输出 |
