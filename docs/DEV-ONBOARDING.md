# 量化选股日历 — 开发前准备文档 (DEV-ONBOARDING)

> **文档版本**: v1.0 | **日期**: 2026-08-14 | **适用基线**: v3.15.1
> **用途**: 面向新会话 / 新开发者的项目评估结果，梳理「开发 / 运行 / 发布」全流程与逻辑，作为动手前的准备工作。
> **相关文档**: [README](../../README.md) 项目介绍 | [DEPLOYMENT.md](../DEPLOYMENT.md) 部署手册 | [HANDOVER.md](./HANDOVER.md) 交接进度 | [DEV-PLAN-v3.10-v4.0.md](./DEV-PLAN-v3.10-v4.0.md) 版本计划

---

## 1. 项目概览

| 项 | 内容 |
|----|------|
| 定位 | 面向 A 股的量化决策辅助工具：美林时钟 × 多策略选股 × AI 评估，结果集中展示在日历界面 |
| 技术栈 | 后端 FastAPI (Python 3.10+/3.11) · 前端 Vue 3 + Element Plus + ECharts（单文件 SPA，**零构建**）· SQLite + JSON 存储 |
| 数据源 | sxsc-tushare → tushare → akshare 三源热备，自动 fallback |
| AI | OpenAI 兼容协议，多厂商模型（DeepSeek / 豆包 / 通义千问 / GPT / Claude / GLM / Moonshot / CodingPlan） |
| 认证 | JWT (python-jose) + bcrypt，24h 过期，admin / user / guest 三角色 |
| 当前版本 | `3.15.1`（`backend/main_new.py` 中 `APP_VERSION` 为唯一版本源） |
| 下一步版本 | v4.0 开放平台（API v2 / 文档站 / Webhook / 插件，5 任务，未开始） |

---

## 2. 双环境目录模型（核心逻辑）

仓库根目录 `D:\MyCoding\QuantCalendar` 不是 git 仓库，包含两个**物理分离**的应用副本：

| 环境 | 目录 | 端口 | DEBUG | .env | 作用 |
|------|------|:--:|:--:|:--:|------|
| 开发 | `quant-calendar-dev` | 8001 | True | 无（首次需从示例创建） | 唯一 git 操作点，coding + testing |
| 生产 | `quant-calendar-ops` | 8000 | False | 有（真实密钥） | stable release，禁 git 提交 |

**隔离原则**：两套环境的 `.env`、`data/`（运行时用户/配置/缓存）、`.venv/` 严格独立，互不影响。`dev` 下的 `data/` 已有运行数据（`users.json`、`app.db`、`ai_models.json` 等）。

> 注意：ops 目录实际也含 `.git`（状态 `master...origin/master [ahead 16]`），与 DEPLOYMENT.md 中「ops 禁 git / 通过 dev 的 git-dir 检出」的描述存在出入，见 §8。

---

## 3. 开发流程

### 3.1 首次环境准备

```powershell
# 1) 在 dev 目录创建虚拟环境与依赖
cd d:\MyCoding\QuantCalendar\quant-calendar-dev
python -m venv .venv
.venv\Scripts\pip.exe install -r requirements.lock          # 锁定版本（推荐）
# 或 .venv\Scripts\pip.exe install -r requirements.txt       # start-dev.ps1 实际安装的宽松版本

# 2) 创建 .env（start-dev.ps1 强校验 .env 必须存在，缺失直接 throw）
cp .env.example .env
# 编辑 .env：PORT=8001, DEBUG=True；SECRET_KEY 留空会自动生成并写回 .env

# 3) 可选数据源（三源架构，见 DEPLOYMENT.md）
.venv\Scripts\pip.exe install akshare
# sxsc-tushare 需券商安装包离线安装
```

### 3.2 编码规范与约束

- **前端零构建**：修改 `frontend/index.html` 或 `frontend/js/*` 后需**重启后端**，浏览器 **Ctrl+Shift+R** 硬刷新才生效；资源带 `?v={{APP_VERSION}}` 缓存号，版本升级自动失效旧缓存。
- **令牌纪律 (TC-11.9)**：模板/CSS 表面禁止硬编码 hex/rgba，一律用 `var(--...)` 设计令牌；运行时代码用 `getCSSVar()||'#hex'` 兜底并标注 `qc-allow-hardcode`。
- **术语统一 (TC-13.1)**：全站「评股」已统一为「评估」，新增文案不得回退。
- **Vue 组件化约定**：in-DOM 模板必须用成对 `<qc-x></qc-x>` 标签（自闭合会被 HTML 解析器吞掉后续内容）；组件注册到 `window.__quantComponents.<Name>`。
- **版本号单一来源**：改版本只需改 `backend/main_new.py` 的 `APP_VERSION`，前端缓存号随之联动。
- **依赖纪律**：直接依赖只改 `requirements.in`，用 `uv pip compile` 重生成 `requirements.lock`，CI 会校验锁文件未漂移。

### 3.3 验证与测试

```powershell
.venv\Scripts\python.exe -m ruff check backend/ --select=E,F,W --ignore=E501   # Lint
.venv\Scripts\python.exe -m pytest tests/ -v --tb=short -m "not e2e"           # 全量单测（e2e 单独跑）
```

- 每任务验证「改动文件 ≤ 3 个/次，修改后立即验证」。
- 前端改后浏览器冒烟（0 pageerror 为金标准）；e2e 视觉回归在 CI 单独 job 跑（信息性，不阻塞发布）。

### 3.4 提交与版本

- Git 策略：**每任务独立 commit**；每版本完成后创建 tag。
- 提交信息风格（见 git log）：`v3.15 (15.5): 版本 3.15.0 + ...` / `v3.15.1 (bugfix): ...`。
- 版本 tag 语义化：`v3.15.1`；tag 推送到 origin 后触发 Docker 发布（见 §5.2）。

---

## 4. 运行流程

### 4.1 启动方式

| 场景 | 命令 |
|------|------|
| dev 一键启动 | `start-dev.cmd`（→ 调 `start-dev.ps1`：缺 `.venv` 自动建，`requirements.txt` 比 `.deps_installed` 新则重装依赖，最后跑 `backend/main_new.py`） |
| dev 手动启动 | `.venv\Scripts\python.exe backend\main_new.py`（端口取自 `.env` 的 PORT=8001） |
| ops 启动 | `cd quant-calendar-ops; .venv\Scripts\python.exe backend\main_new.py`（PORT=8000） |
| Docker 启动 | `docker compose up -d`（映射 8000:8000，挂载 `quant-calendar-data` 卷） |

> PowerShell 执行策略限制时用完整路径 `.venv\Scripts\python.exe` / `.venv\Scripts\pip.exe`，或 `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`。

### 4.2 后端入口与生命周期

入口 `backend/main_new.py`，`uvicorn.run(app, host=settings.HOST, port=settings.PORT)`（默认 0.0.0.0:8000）：

1. `lifespan` 启动序列：DB 增量迁移（`db.migrate()`）→ schema 校验/初始化（失败拒绝启动）→ 启动调度器 `scheduler.start()`。
2. 中间件：CORS、安全响应头（CSP nonce / HSTS / nosniff）、速率限制、结构化请求日志（trace_id + 耗时 + 指标）。
3. 静态托管：`/static/*`（前端资源，CSS/JS 长期缓存、其余 no-cache）、PWA `/manifest.json`、`/sw.js`、`/`（注入 `{{APP_VERSION}}` 与 `{{NONCE}}`）。
4. 健康检查：`GET /api/health` 返回 `{status, version, message}`；API 文档 `/docs`、`/redoc`。

### 4.3 环境变量（`config.py` 加载）

| 变量 | 默认 | 说明 |
|------|------|------|
| HOST / PORT / DEBUG | 0.0.0.0 / 8000 / True | dev=8001+True，ops=8000+False |
| SECRET_KEY | 空→自动生成写回 .env | JWT 密钥，生产必须改 |
| ALGORITHM / ACCESS_TOKEN_EXPIRE_MINUTES | HS256 / 1440 | JWT 配置 |
| TUSHARE_TOKEN / SXSC_TUSHARE_TOKEN / SXSC_TUSHARE_ENABLED / AKSHARE_ENABLED | 空 / 空 / True / True | 三数据源开关与 Token |
| REDIS_URL | redis://localhost:6379/0 | 可选，限流/缓存 |
| CORS_ORIGINS | localhost:8000,127.0.0.1:8000 | 逗号分隔 |
| FEISHU_WEBHOOK_URL | 空 | 可选飞书推送 |
| QUANT_DATA_DIR | ../qresult | 策略 CSV 目录 |

> 所有 Token/密钥也可（更推荐）在 Web UI「系统配置」中填写，落盘到 `data/*.json`，不入 git。

### 4.4 定时任务（`backend/scheduler.py`，lifespan 时全部启动）

| 任务 | 说明 |
|------|------|
| daily_report_task / weekly_report_task | 日报/周报生成与推送 |
| auto_evaluate_task | 定时批量 AI 评估（未启用时每小时检查） |
| data_refresh_task | 定时刷新行情数据 |
| tushare_pull_task | Tushare 日线/财务自动拉取 |
| file_watch_task | 监听 qresult CSV 变更自动重载 |
| daily_backup_task | 每日数据备份 |
| health_check_task | 每 5 分钟健康检查，连续失败飞书告警 |
| error_alert_task | 每 10 分钟错误率监控告警 |

### 4.5 API 概览（`backend/api/v1/router.py`，前缀 `/api`）

auth / market / calendar / views / feishu / ai / backtest / dashboard / user / watchlist / data-refresh / groups / search / setup-wizard / chat / feedback / backup / export / audit / system / analytics，共 20+ 模块。

### 4.6 数据存储

- SQLite：`data/app.db`（用户、watchlist、chat_history、audit_logs 等，带 schema 校验 + 增量迁移）。
- JSON：`data/users.json`、`ai_models.json`、`datasource_config.json`、`groups.json`、缓存文件（`market_cache.json` 损坏会报 `JSONDecodeError`，删除后自动重建）。
- 策略数据：`qresult/*.csv`（4 套策略 × 含/剔除 ST）。
- 日志：`logs/app.log`（按日轮转，保留 30 天）。

---

## 5. 发布流程

### 5.1 本地 ops 部署（dev → ops 同步）

**核心原则：同步代码，保留配置。** 排除 `.env`、`data/`、`.venv/`、`__pycache__/`、`.git/`。

```powershell
# 1) dev 拉取最新
cd d:\MyCoding\QuantCalendar\quant-calendar-dev
git pull origin master

# 2) 同步到 ops
robocopy quant-calendar-dev quant-calendar-ops /MIR /XD ".venv" "__pycache__" ".git" "data" /XF ".env"
# 跨平台备选：git --git-dir="quant-calendar-dev/.git" --work-tree="quant-calendar-ops" checkout -f master -- .

# 3) 依赖变更时安装（git diff HEAD~1 -- requirements.in requirements.lock 确认）
cd quant-calendar-ops
.venv\Scripts\pip.exe install <新包名>

# 4) 重启 + 验证
tasklist | findstr python        # 先停旧进程
.venv\Scripts\python.exe backend\main_new.py
# 验证: http://127.0.0.1:8000/api/health 版本号正确; 浏览器 Ctrl+Shift+R
```

> 历史自动化脚本（`.task-state.json` 引用的 `publish-dev-to-ops.cmd`、ops 的 `start-ops.cmd`）**当前不存在**，发布为手动流程，见 §8。

### 5.2 Docker 镜像发布（GitHub Actions）

- 工作流 [`.github/workflows/docker-publish.yml`](../.github/workflows/docker-publish.yml)：push 版本标签 `v*`（或 `workflow_dispatch` 手动）触发。
- Buildx 多架构构建 → 登录 GHCR → 推送 `ghcr.io/bangbang8000-cell/quant-calendar`，tag 规则：semver（`3.15.1`、`3.15`）+ tag ref + `latest`。
- 镜像内容（[Dockerfile](../Dockerfile)）：`python:3.11-slim` → 装 `requirements.lock` → 复制 backend/frontend/tests/docs/libs → 内置一份 `qresult/`（可被 volume 覆盖）→ 离线装 `sxsc_tushare` → `docker-entrypoint.sh` 初始化 `.env` 后启动。镜像不含任何 Token。
- 本地用法：`docker pull ghcr.io/bangbang8000-cell/quant-calendar:latest` → `docker run -d -p 8000:8000 -v quant-calendar-data:/app/data ...`，登录后走初始化向导配 Token。

### 5.3 CI（[`.github/workflows/ci.yml`](../.github/workflows/ci.yml)）

| 检查 | 内容 |
|------|------|
| 锁文件漂移校验 | `uv pip compile` 重编译后与入库锁文件 diff（跳过头部 3 行） |
| Lint | `ruff check backend/ --select=E,F,W --ignore=E501` |
| 测试 + 总覆盖率护栏 | pytest 全量 `-m "not e2e"`，总覆盖 ≥20% |
| 核心覆盖率门禁 | merrill_clock / data_sources ≥70% |
| e2e 视觉回归 | 独立 job，Playwright 截图 diff，`continue-on-error`（信息性，产出 HTML 报告工件，不阻塞发布） |

---

## 6. 依赖管理

| 文件 | 用途 |
|------|------|
| `requirements.in` | 直接依赖清单（修改入口） |
| `requirements.lock` | uv 锁定版本（Docker / CI / DEPLOYMENT 使用） |
| `requirements-dev.in` / `.lock` | 开发依赖（pytest / playwright / ruff 等） |
| `requirements.txt` | 旧版宽松清单（**仅 start-dev.ps1 使用**，与锁定流程不一致） |

重新生成：

```bash
uv pip compile --universal --python-version 3.11 requirements.in -o requirements.lock
uv pip compile --universal --python-version 3.11 -c requirements.lock requirements-dev.in -o requirements-dev.lock
```

---

## 7. 已知状态与注意事项（动手前必读）

1. **dev 目录当前没有 `.env`**：而 `start-dev.ps1` 强校验 `.env` 存在，否则直接 throw——首次本地跑 dev 必须先 `cp .env.example .env`（并把 PORT 改 8001）。
2. **`docker-entrypoint.sh` 有未提交修改**（dev 与 ops 均为 `M`）：版本号/日志提示与实际版本可能有出入，提交前先确认差异。
3. **历史自动化脚本缺失**：`.task-state.json` 引用的 `publish-dev-to-ops.cmd`、ops 的 `start-ops.cmd` 均不存在，dev→ops 发布需手动执行（§5.1）。
4. **ops 是独立 git 仓库**（ahead origin 16 个提交）：DEPLOYMENT.md 描述的「git-dir 检出同步」在此目录结构下可能不适用，建议以 robocopy `/MIR` 为准，且**不要直接在 ops 提交/推送**。
5. **测试数据隔离**：pytest 已通过 conftest 的 `patch_data_dir` 将 DB 重定向到临时库，避免污染真实 `data/app.db`；本地手跑测试时如发现写入真实 data 需排查该 fixture。
6. **覆盖率门禁**：全量护栏当前仅 ≥20%，核心模块（美林时钟）≥70%；v3.10+ 规划门槛随版本递增（v4.0 目标 ≥60%）。
7. **e2e 视觉回归**基线截图已入库（`tests/e2e/screenshots/baseline/`），`current/` 与 `reports/` 为生成物不入库。

---

## 8. 常用操作速查

```powershell
# 启动 dev（先确保 .env 存在）
.\start-dev.cmd

# 启动 ops
cd ..\quant-calendar-ops; .venv\Scripts\python.exe backend\main_new.py

# 验证版本/健康
curl http://127.0.0.1:8001/api/health     # dev
curl http://127.0.0.1:8000/api/health     # ops

# 查看数据源状态（无鉴权）
curl http://127.0.0.1:8000/api/market/datasource/status

# 全量测试
.venv\Scripts\python.exe -m pytest tests/ -v --tb=short -m "not e2e"

# 依赖锁重编（改 requirements.in 后）
uv pip compile --universal --python-version 3.11 requirements.in -o requirements.lock

# 端口占用排查
netstat -ano | findstr 8000
```

---

## 9. 下一步建议

1. 补齐 dev 的 `.env`（PORT=8001）并完成一次 dev 本地启动冒烟。
2. 确认/提交 `docker-entrypoint.sh` 的本地改动，避免版本提示与代码不符。
3. 若要恢复一键发布，可重建 `publish-dev-to-ops.cmd`（按 §5.1 逻辑封装 robocopy + 重启 + 健康检查）。
4. 后续开发按 [DEV-PLAN-v3.10-v4.0.md](./DEV-PLAN-v3.10-v4.0.md) v4.0 开放平台章节推进。
