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

---

## 健康巡检与运维（V5.0+）

V5.0 起内置可靠性工程能力，帮助定位部署环境健康度：

### 启动自检报告（startup-report）

服务启动后可用以下接口查看自检结果（需登录，Bearer Token）：

```bash
curl -H "Authorization: Bearer <token>" http://127.0.0.1:8000/api/reliability/startup-report
```

返回 `healthy` 布尔值 + `ok_count / warn_count / fail_count` + 各项检查明细（Python 版本、内部模块导入、数据目录、DB、关键配置等）。部署冒烟金标准：`ok_count=7, warn_count<=1, fail_count=0, healthy=true`。

### 健康巡检与自愈

- `health_check` 定时巡检（数据新鲜度/调度/数据源/备份/磁盘），失败自动触发幂等自愈动作（`reliability/heal.py` 注册表）
- 数据源不可达自动降级/暂停（sxsc→tushare→akshare），恢复后自动重新启用
- 告警分级（critical/warning/info）+ 飞书送达（1h 防抖）

### schema 迁移（V5.0.9）

`backend/migrations/` 提供版本化 schema 迁移：启动时校验版本并执行未应用迁移，失败则**拒绝启动**（避免半迁移状态）；支持回滚。新增字段/表走迁移，勿手工改 SQLite。

### 一键升级 / 回滚（V5.0.9）

`scripts/` 提供一键升级脚本（备份 → 迁移 → 验证 → 失败自动回滚）与 DryRun 模式；升级前请先备份 `data/`。

### systemd 用户服务（Linux）

双环境可注册为 systemd 用户服务（dev: `quant-calendar-dev.service` :8001 / ops: `quant-calendar-ops.service` :8000），`journalctl --user -u quant-calendar-ops.service -n 50` 查看日志。

## 数据源配置

### 三源架构

查询优先级：`sxsc-tushare → tushare → akshare`，自动 fallback。

> **V5.3.10~13 数据源行为**: ①sxsc-tushare 优先调度覆盖 K线/指数/个股资金流/涨停跌停池/龙虎榜/业绩预告快报(短线三池须用 `limit_list_d`); ②6 位代码(如 `000813`)自动补交易所后缀(`_normalize_ts_code`), 无需手动加 .SH/.SZ; ③未配置 Token 的源(客户端缺失)自动跳过且不计失败, 不触发冷却(健康面板干净); ④空数据计一次失败, 连续 3 次冷却 300 秒后自动恢复。

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
│   ├── data_sources/       # 多数据源管理（V5.0.9 拆分子包）
│   ├── merrill_clock.py    # 美林时钟引擎
│   ├── ai_eval/            # AI 多模型评估 + 每日复盘（V5.0.9 拆分子包, ai_evaluator 薄壳）
│   ├── factor_engine.py    # 多因子引擎
│   ├── portfolio.py        # 模拟组合/持仓
│   ├── market_review.py    # AI 每日复盘
│   ├── scan_engine.py      # 异动扫描
│   ├── eval_track.py       # 评估胜率追踪（V5.0.11 命中率持久缓存）
│   ├── backtest.py         # 回测核心
│   ├── api_keys.py         # 开放 API Key（仅存哈希）
│   ├── webhook.py          # Webhook 事件订阅
│   ├── metrics.py          # Prometheus 可观测性
│   ├── scheduler/          # 定时任务（V5.0.9 拆分子包）
│   ├── reliability/        # V5.0 健康巡检/自愈/启动自检/告警分级（startup-report）
│   ├── jobs.py / cache.py  # V5.0.7 异步任务队列 / 两级缓存
│   ├── rbac.py / collaboration.py  # V5.0.8 权限点注册表 / 协作
│   ├── plugin_sdk.py       # V5.0.8 插件 SDK（事件钩子+策略注册）
│   ├── migrations/         # V5.0.9 schema 迁移框架（版本化+回滚+失败不启动）
│   └── api/                # REST API 路由（v1/v2 兼容 + v3 + openapi）
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


---

## 公网隧道方案 (T-5.3.6.3 / FR-5.3.6.3)

本应用部署于内网主机, 公网访问需隧道。两种方案:

### 方案 A: Quick 临时隧道 (演示/调试, 5 分钟)

- 工具: cloudflared quick tunnel (无需注册/域名)
- 用法:
  ```bash
  cloudflared tunnel --url http://127.0.0.1:8000
  ```
- 输出 https://xxx.trycloudflare.com 即公网地址 (随机域名, 进程退出即失效)
- 适用: 临时给他人看效果、快速验证公网可达性
- 注意: 地址随机、无认证 → 仅短期使用, 勿持久化

### 方案 B: 固定域名隧道 (长期使用)

- 工具: cloudflared 命名隧道 + 自有域名 (或 frp + 云服务器)
- 步骤:
  1. cloudflared tunnel login → 绑定 Cloudflare 账户
  2. cloudflared tunnel create quant-calendar → 得 Tunnel ID
  3. DNS 记录: CNAME 指向 <Tunnel-ID>.cfargotunnel.com
  4. 配置 config.yml: ingress 到 http://localhost:8000
  5. 以 systemd 服务常驻运行 (开机自启)
- 前置: 域名托管于 Cloudflare (需 0 元域名也可)
- 安全: 配合本应用已有登录鉴权 + API Key 双重保护

### 决策建议

- 演示/评估阶段 → 方案 A (零成本快速)
- 生产长期对外 → 方案 B (固定域名 + 可上 HTTPS)
- 若无法使用 Cloudflare → frp 内网穿透 (需一台云服务器做中转)

---

## 升级与回滚演练 (T-5.3.6.4 / FR-5.3.6.4)

### 标准升级流程

```bash
cd ~/quant-calendar-ops
git pull --ff-only          # 拉取最新
bash scripts/upgrade.sh     # 备份 + 迁移 + 重启 (systemd user)
curl -sf http://127.0.0.1:8000/api/health   # 健康检查
```

### 回滚流程

```bash
cd ~/quant-calendar-ops
git log --oneline -3                        # 确认回滚目标 commit
git reset --hard <前一版本 commit>
bash scripts/rollback.sh                    # 自动备份当前 + 恢复上一版本
curl -sf http://127.0.0.1:8000/api/health   # 健康检查
```

### 数据库回滚 (迁移 0006 演示)

迁移框架支持版本化回滚:
```bash
/usr/bin/python3 -c "from migrations import upgrade, rollback; import db; c=db.get_conn(); rollback(c, 5); c.commit()"
```
- 回滚仅撤销 schema 变更 (索引/表), 业务数据保留
- 降级场景: 新版本有问题 → 回滚代码 + 回滚迁移版本到匹配基线

### SLO 归档

- 升级目标: 10 分钟内完成 (含备份/迁移/验证)
- 回滚目标: 5 分钟内恢复到上一可用版本
- 每次发布: git tag v5.3.N ↔ APP_VERSION 一致, CI 版本纪律门禁强制

## 版本历史

| 版本 | 日期 | 关键变更 |
|------|------|----------|
| v5.0.11 | 2026-09 | 执行看板空修复 / 策略回测移入策略研究 / sub.datadict 菜单中文 / 评估历史拆分(评估历史+评估分析, 命中率持久缓存) / 2260 测试全绿 / `APP_VERSION=5.9.0`(未 bump, 补丁级) |
| v5.0.10 | 2026-09 | 修复日/周/月/年视图无股票列表(模板引用未定义 state + onboarding UMD 双写) + dist 重建 |
| v5.0.9 | 2026-09 | 架构现代化：后端拆分子包(ai_eval/scheduler/data_sources/merrill_clock) / schema 迁移框架 backend/migrations(启动失败不启动+回滚) / 一键升级回滚脚本(scripts/) / 观测性 2.0(SLO+结构化日志) / 启动回归守卫 / 2251 测试全绿 / 双端 startup-report 7/1/0 healthy |
| v5.0.8 | 2026-09 | RBAC 2.0 / 协作 / API v3 / Python SDK / 插件 SDK 2.0 / +130 用例 |
| v5.0.7 | 2026-09 | 两级缓存 / 异步任务队列(jobs) / 全市场分块+LTTB 降采样 / 前端虚拟滚动 / 性能门禁入 CI / +86 用例 |
| v5.0.6 | 2026-09 | 新手引导 / 空态错误态体系化 / 命令面板+全局快捷键 / 信息密度 / 可访问性 2.0 / +80 用例 |
| v5.0.5 | 2026-09 | 报表中心：模板化+PDF/Excel 导出+订阅投递 / 首页今日要点聚合卡 |
| v5.0.4 | 2026-09 | 通知通道抽象(7 通道)+事件引擎 2.0+自定义预警规则 / WS 行情 2.0(增量推送) / 通知中心页 |
| v5.0.3 | 2026-09 | 组合风险指标 / 仓位建议 / 风控规则引擎 / 风险预警事件总线 |
| v5.0.2 | 2026-09 | 成本模型 2.0 / 基准对比 / walk-forward 滚动回测 / 参数稳定性 / 绩效归因 / 回测报告导出 |
| v5.0.1 | 2026-09 | 质量规则引擎 / PIT 防前视+幸存者偏差治理 / 数据血缘(batch_id) / 数据字典子页 |
| v5.0.0 | 2026-09 | 稳定性基座：健康巡检+自愈 / 启动自检+启动报告 API / 故障注入测试套件 / 写路径原子化 / 健康面板+告警分级 |
| v4.7.1 | 2026-08 | 并发安全：策略 run-once 异步化(to_thread) / 持仓文件原子写入 / save_state 部分更新保留 universe / 1028 测试全绿 |
| v4.7.0 | 2026-08 | 数据真实化：引擎全市场批量取数 / 日视图选股池真实轮动 / 年视图性能 32 倍提速 |
| v3.17 | 2026-08 | 全版交付：AI 复盘/多因子体检/回测/胜率追踪/模拟组合/异动扫描；架构拆分/内联治理/鉴权收敛/可观测性/多用户隔离；移动端 PWA/性能优化/个性化/盘中增强；开放 API（API Key + Swagger + Webhook）/i18n。`APP_VERSION=3.17.3`，719 测试全绿 |
| v3.15.1 | 2026-08 | 视觉回归基线、UI 审计修复 |
| v3.14.0 | 2026-08 | 前端组件化拆分、备份恢复、页面热度 |
| v3.10.0 | 2026-08 | 前端模块化、版本注入、依赖锁定 |
| v3.6.0 | 2026-07 | 前端模块化（app-logic.js 拆分组件）、数据备份恢复、页面热度统计 |
| v3.1.0 | 2026-07 | 美林时钟历史周期数据（14条记录，2008至今） |
| v3.0.0 | 2026-07 | 美林时钟模块解耦、CSS Token 体系 |
| v2.5.0 | 2026-07 | UI 全面升级：侧边栏修复、Token 去重、移动端增强 |
| v2.4.0 | 2026-06 | AI 智能问股：对话式股票分析，流式输出 |
