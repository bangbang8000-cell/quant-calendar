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
.venv\Scripts\pip.exe install -r quant-calendar-dev\requirements.txt

# 4. 配置 .env（复制模板后修改）
cp quant-calendar-dev\.env.example .env
# 编辑 .env：PORT=8000, DEBUG=False

# 5. 启动
.venv\Scripts\python.exe backend\main_new.py
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

检查 `requirements.txt` 变更：

```bash
cd quant-calendar-dev
git diff HEAD~1 -- requirements.txt
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

### Tushare Token

登录后在 **系统配置 → 数据源管理** 页面填入 Tushare Token。

1. 注册 [Tushare Pro](https://tushare.pro) 获取 Token
2. 填入配置页 → 点击**测试连接**
3. 常见错误：`您的token不对` — Token 无效或已过期

### 三源优先级

`sxsc-tushare → tushare → akshare`，按顺序自动 fallback。

| 数据源 | 是否需要 Token | 安装方式 | 备注 |
|--------|:---:|------|------|
| tushare | 是 | `pip install tushare` | 主力数据源 |
| akshare | 否 | `pip install akshare` | 免费开源，备用 |
| sxsc-tushare | 是 | ❌ PyPI 不可用 | 券商定制包，需内部获取 |

---

## 依赖安装参考

```bash
# 基础依赖
.venv\Scripts\pip.exe install -r requirements.txt

# 可选数据源
.venv\Scripts\pip.exe install akshare
```

### 已知问题

- **sxsc-tushare** 不在 PyPI 上，无法通过 pip 安装。不影响 tushare + akshare 双源使用。
- **PowerShell 执行策略** 可能阻止脚本运行。解决方案：
  - 使用完整路径指定可执行文件：`.venv\Scripts\pip.exe` 而非 `pip`
  - 或使用 `git` 命令作为代理（见下文 Q&A）

---

## API Key 配置

首次部署后，以下配置需要通过 Web UI 填入：

| 配置项 | 位置 | 说明 |
|--------|------|------|
| Tushare Token | 系统配置 → 数据源 | 数据源连接必需 |
| AI 模型 API Key | 系统配置 → AI 模型管理 | DeepSeek / 字节 CodingPlan 等 |
| 飞书 Webhook | 系统配置 → 自动评股 | 定时推送（可选） |

所有配置**修改即保存**（`@change` 自动调用保存接口），AI 模型配置需点击 **💾 保存** 按钮。

> 注意：配置文件（`.env`、`data/*.json`）在 `.gitignore` 中，不会随 Git 同步。从 GitHub 拉取新版本后，这些文件不会被覆盖。

---

## 常见问题

### 服务无法启动

```bash
# 检查端口占用
netstat -ano | findstr 8000
taskkill /PID <进程ID> /F

# 清除缓存
cd quant-calendar-ops
Get-ChildItem -Recurse -Directory -Filter __pycache__ | Remove-Item -Recurse -Force
```

### Tushare 测试失败

1. 确认 Token 有效：到 [tushare.pro](https://tushare.pro) 检查
2. 确认网络可达：`ping api.tushare.pro`
3. 查看服务端日志中的具体错误信息

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

---

## 文件结构

```
quant-calendar-ops/
├── .env                    # 环境变量（不入 git）
├── .venv/                  # Python 虚拟环境（不入 git）
├── backend/                # FastAPI 后端
│   ├── main_new.py         # 主入口
│   ├── data_sources.py     # 多数据源管理
│   ├── merrill_clock.py    # 美林时钟引擎
│   ├── merrill_history.py  # 历史周期数据
│   ├── ai_evaluator.py     # AI 多模型评股
│   ├── scheduler.py        # 定时任务
│   └── api/v1/             # REST API 路由
├── frontend/               # Vue 3 SPA
│   ├── index.html          # 单文件应用
│   ├── css/                # tokens.css / themes.css / layout.css
│   └── js/                 # JS 模块
├── data/                   # 运行时数据（不入 git）
│   ├── datasource_config.json
│   ├── ai_models.json
│   ├── users.json
│   └── users/<name>/       # 每用户目录
├── requirements.txt
└── DEPLOYMENT.md
```

---

## 版本历史

| 版本 | 日期 | 关键变更 |
|------|------|----------|
| v3.6.0 | 2026-07 | 前端模块化（app-logic.js 拆分组件）、数据备份恢复、页面热度统计 |
| v3.1.0 | 2026-07 | 美林时钟历史周期数据（14条记录，2008至今） |
| v3.0.0 | 2026-07 | 美林时钟模块解耦、CSS Token 体系 |
| v2.5.0 | 2026-07 | UI 全面升级：侧边栏修复、Token 去重、移动端增强 |
| v2.4.0 | 2026-06 | AI 智能问股：对话式股票分析，流式输出 |
