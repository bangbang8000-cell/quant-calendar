# 开发计划 — 量化日历 v6.4.0

| 项 | 内容 |
|---|---|
| 对应 PRD | `docs/PRD-v6.4.md` |
| 基线 | commit `d45e6c57`（v6.3.6） |
| 目标环境 | dev（`D:\MyCoding\QuantCalendar\quant-calendar-dev`）→ ops（`...\quant-calendar-ops`，:8000） |
| 估算口径 | 单人全职，单位为「人日」，含自测不含等评审 |
| 总量 | 10.5 人日（M1 2.0 / M2 3.5 / M3 3.0 / M4 2.0） |

---

## 0. 前置准备

### T0.1 建立发布分支

```bash
cd D:/MyCoding/QuantCalendar/quant-calendar-dev
git checkout -b release/v6.4 master   # master = d45e6c57
```

### T0.2 固化对照基线

在动代码前，用当前 v6.3.6 拍一组**可直接比对**的截图，覆盖本版会改到的 5 处：

| 截图 | 状态 | 用途 |
|---|---|---|
| 研究概览（进入后 3s / 15s / 25s） | 当前为骨架屏 | T2.1 验收对照 |
| 智能评估顶栏（1440，未 resize） | 只有 3 个页签、无箭头 | T2.2 验收对照 |
| 个股详情头 | 整块金渐变 | T2.3 验收对照 |
| 系统状态 → 新鲜度 | "fresh" 假阳性 | T1.4 验收对照 |
| 启动日志 | `admin/admin123` | T1.1 验收对照 |

存放建议：`tests/e2e/screenshots/before-v6.4/`，**不提交基线**，仅作人工比对。

**产出**：`before-v6.4` 截图组 + 一页对照说明（可并入测试报告）。

---

## 1. M1 后端与运维链路（2.0 人日）

### T1.1 FR-6.4.6 弱口令告警纠正 — 0.3d

| 项 | 内容 |
|---|---|
| 文件 | `backend/user_manager.py`、`backend/main_new.py` |
| 改动 | ① `is_default_password()` 增加返回实际命中的口令（建议新增 `matched_default_password(username) -> str | None`，保留原布尔方法做兼容包装）；② `main_new.py:99` 文案改为使用真实值，格式 `管理员密码仍为默认口令 ({matched})`；③ 访客告警同步 |
| 注意 | 不得在日志中列举未命中的候选口令；不得回传哈希 |
| 验收 | 口令 `admin` → 日志含 `(admin)` 且不含 `admin123`；改强口令后不告警 |
| 风险 | 低。纯文案 + 返回值，无行为变更 |

### T1.2 FR-6.4.2 实时报价通道恢复 — 0.7d

| 项 | 内容 |
|---|---|
| 文件 | `quant-calendar-ops/.venv`（依赖）、`backend/main_new.py`、`backend/api/v1/market_ws.py` |
| 改动 | ① 补齐 `websockets==13.1`、`wsproto==1.3.2`（**已在 2026-10-19 完成并验证**）；② 启动自检新增 WS 依赖检查：`import websockets` 失败或 `/api/market/ws/quotes` 未注册 → 计 fail；③ 依赖缺失时日志给出修复命令 |
| 已验证 | 握手成功；订阅 `['600519','000001']` 后收到 `type=quotes` 帧（15s 周期）；当前 `degraded=true` 因东财出口不可达 |
| 待做 | 前端降级横幅（与 T2.4 合并实现），后端在 `degraded` 时返回 `reason` 字段 |
| 验收 | 卸载 `websockets` 重启 → 自检 fail；装回 → 握手成功 |
| 风险 | 中。自检项新增会改变 fail 计数，需同步运维告警阈值 |

### T1.3 FR-6.4.7 环境一致性门禁 — 0.5d

| 项 | 内容 |
|---|---|
| 文件 | `scripts/upgrade.ps1`、`scripts/verify_chain.sh`、新增 `tests/test_deploy_env.py` |
| 背景 | 当前 `verify_chain.sh:71` 用 `PYTHONPATH=/home/evergreen/dsh-workspace/qc_ws_pkgs` **外部注入** websockets，等于把缺失依赖掩盖成"链上绿"；而 Windows 生产用 `upgrade.ps1` 只做 `/api/health`，根本没有 WS/数据检查 → 404 一直没人发现 |
| 改动 | ① `upgrade.ps1` 部署阶段执行 `pip install -r requirements.lock`，并校验 `websockets`/`wsproto`/`uvicorn` 实际版本；② 把 WS 探测改为调用 `scripts/ws_probe.py`（已存在，直接用 ops 自己的 venv 跑，不再注入 PYTHONPATH）；③ 新增 `tests/test_deploy_env.py` 断言三包版本符合 lock |
| 验收 | 故意 `pip uninstall websockets` 后跑测试必失败；`upgrade.ps1 -DryRun` 输出含 lock 安装步骤 |
| 风险 | 中。`pip install -r requirements.lock` 会带来 21 处补丁级升级，需先在 dev 验证一轮 |

### T1.4 FR-6.4.5 新鲜度体系双向判定 — 0.5d

| 项 | 内容 |
|---|---|
| 文件 | `backend/reliability/freshness.py`、`backend/api/v1/reliability.py`、`backend/api/v1/freshness.py` |
| 根因 | `freshness.py:171 expected_latest_date()` 取 `parser.get_available_dates()` 最大值（=2026-07-16）；`:203 evaluate_asset()` 只算 `expected_latest - latest_d` 的单边差，负值被 `max(…,0)` 吃掉 → 基准失效时全部判 `fresh` |
| 改动 | ① `expected_latest_date` 增加第二返回值或旁路函数 `calendar_age_days()`；② `evaluate_asset` 增加基准健康入参，基准落后 >5 交易日时返回 `unknown`（不改 `fresh/stale/missing` 语义，避免下游枚举破裂）；③ `status_summary` 返回 `calendar_stale` + `expected_latest` 原值；④ `/api/meta/freshness` 的 `last_success=null` 项标记 `never_succeeded: true` |
| 兼容 | `unknown` 是新状态，需同步前端与 `heal.py:135`、`scheduler/_core_health.py:62` 的格式化逻辑 |
| 验收 | 构造 `expected_latest = today-30d`，断言无资产判 `fresh`；真实环境返回 `calendar_stale=true` |
| 风险 | 中高。状态枚举扩张，需全量搜 `"fresh"` 使用点后再改 |

**M1 出口条件**：三处后端点均有单测覆盖；`pytest tests/` 全绿；dev 环境 WS 探测通过。

---

## 2. M2 前端（3.5 人日）

### T2.1 FR-6.4.1 研究概览加载态 — 1.0d

| 项 | 内容 |
|---|---|
| 文件 | `frontend/js/components/research-page.js` |
| 根因 | `:18` 定义单个 `_seq = { n: 0 }`，被 5 个加载器共用（`:63 / :241 / :371 / :492 / :570`）；`:94` 的 `finally { if (seq === _seq.n) strategiesLoading.value = false }` 在任意后续加载器递增后恒不成立 → loading 永不复位 |
| 改动 | ① 序号按加载器隔离：`const _seq = { strategies: 0, runs: 0, variants: 0, customs: 0, btHistory: 0 }`，或每函数持有自己的 `let localSeq = 0`；② **加载态复位移出序号守卫**——`finally` 中无条件复位，序号只保护 `strategies.value = list` 这类数据写入；③ 每个加载器补 `try/catch` 错误态 + 15s 超时（`AbortController`）；④ 统一为一个 `createLoader()` 工厂，避免 5 处重复代码（可选但推荐） |
| 注意 | 5 个加载器语义独立，"最后一次请求胜出"的语义只应作用于**同一种数据**，不能跨数据源 |
| 验收 | 进入后 ≤3s 出现 4 个策略；快速切换 5 个子页签往返不卡死；接口 500 显示错误态 + 重试 |
| 风险 | 低。改动集中在一个文件，但需逐一回归 5 个加载器的正常路径 |

### T2.2 FR-6.4.3 页签溢出控件激活 — 1.0d

| 项 | 内容 |
|---|---|
| 文件 | `frontend/src/components/TopTabs.vue` |
| 根因 | `hasOverflow` 只在 `onMounted`（`:138`）、容器 ResizeObserver、`window.resize` 三处计算。首屏落在「策略总览」（该一级页 `subPages=['overview','merrill','market','consensus']` 但顶栏不渲染页签）时 `tabs.length===0` → 内层 `div` 不渲染 → `scrollRef=null` → `updateOverflow()` 提前 return，且 `ro.observe` 也未执行 → 之后切到「智能评估」永不重算 |
| 实测 | 切换后 `scrollWidth=780 / clientWidth=516`（溢出 264px），`btns=0 / more=false`；手动 resize 一次后立刻变为 `btns=3 / more=true` |
| 改动 | ① `watch(tabs, () => nextTick(updateOverflow), { flush: 'post' })`；② `scrollRef` 为空时在 `nextTick` 后重试挂载观察器；③ 溢出时右侧加 24px `mask-image` 渐隐；④ 激活页签变化时 `scrollIntoView({ inline: 'nearest' })` |
| 注意 | `hiddenTabs` computed 依赖 `scrollRef`（非响应式 ref 之外的 DOM），需在 `updateOverflow` 后触发一次重算（可用一个 `tickRef` 自增） |
| 验收 | 1440×900 不 resize：智能评估 7/7、系统配置 7/7、短线复盘 6/6、策略研究 5/5 全部可达；键盘 ←/→/Enter 可用 |
| 风险 | 低。组件独立，不影响业务逻辑 |

### T2.3 FR-6.4.4 详情头降噪 — 1.0d

| 项 | 内容 |
|---|---|
| 文件 | `frontend/css/themes.css`、`frontend/css/responsive.css` |
| 根因 | `themes.css:212` 定义 `--gradient-panel: linear-gradient(135deg,#dccb85 0%,#c3a83f 100%)`，`:979` 的 `.detail-header` 直接 `background: var(--gradient-panel)` |
| 改动 | ① `.detail-header` 改为 `background: var(--qc-card)` + `border: 1px solid var(--border-light)`，`color: var(--qc-foreground)`；② `.detail-subtitle` 的 `opacity: .9` 改为显式色值（浅底上 opacity 会发灰）；③ `.dh-meta .dh-item` 数值加 `white-space: nowrap`（修 `50.43` 折行）；④ `--gradient-panel` **保留变量不动**，仅解除本处依赖；⑤ 暗色主题单独确认（`themes.css:139-140` 的金色 scale） |
| 前置 | 先 `grep -rn "gradient-panel" frontend/` 确认调用点，逐个判断是否保留 |
| 验收 | 详情头纯色浅底；正文对比度 ≥4.5:1；1440/1280/1024 元信息单行；暗色无重色块 |
| 风险 | 低。纯样式，但需确认没有 JS 内联样式覆盖 |

### T2.4 FR-6.4.5 前端陈旧横幅 + 降级角标 — 0.5d

| 项 | 内容 |
|---|---|
| 文件 | 新增 `frontend/src/components/DataStaleBanner.vue`、`frontend/src/components/Header.vue`（挂载点） |
| 数据源 | `GET /api/reliability/freshness`（返回 `calendar_stale` / `expected_latest` / `stale_count`） |
| 改动 | ① 顶部 36px 横幅：`数据停在 2026-07-16，已 95 天未更新 · 查看数据源状态 →`；② 支持 `sessionStorage` 本次会话关闭；③ 数据区域角标"延迟数据 / 上游不可达"（WS `degraded` 时） |
| 注意 | 横幅文案的日期与天数必须来自接口，不得前端写死；无陈旧时完全不占位 |
| 验收 | 真实环境出现横幅且数字与接口一致；接口 `calendar_stale=false` 时不显示 |
| 风险 | 低 |

**M2 出口条件**：4 处前端改动在 dev 环境逐条走查通过；`npm run build` 成功；1440/1280/1024 三档无新溢出。

---

## 3. M3 测试资产（3.0 人日）

### T3.1 新增回归用例 — 1.5d

| 用例 | 文件 | 断言 |
|---|---|---|
| `test_research_loading_resets` | `tests/test_research_loading.py` | 5 个加载器交错触发后，各 loading 均复位 |
| `test_freshness_double_sided` | `tests/test_freshness_guard.py` | 基准落后 30 天 → 无 `fresh`，返回 `unknown`；`calendar_stale=true` |
| `test_default_password_message` | `tests/test_startup_warning.py` | 弱口令 `admin` → 文案含 `admin`、不含 `admin123` |
| `test_deploy_env` | `tests/test_deploy_env.py` | `websockets/wsproto/uvicorn` 版本符合 lock |
| `test_ws_dependency_check` | `tests/test_ws_selfcheck.py` | mock `import websockets` 失败 → 自检 fail |

### T3.2 视觉回归可信化 + 基线重建 — 1.5d

| 项 | 内容 |
|---|---|
| 文件 | `tests/e2e/visual_regression.py` |
| 现状问题 | `:230-250` 场景用 `_click_nav(p,'策略')` / `'日历'` 这类前缀模糊匹配；`dark_theme` 依赖点击 `.user-menu-wrapper` 再点主题行。实测结果：`calendar.png` 与策略总览同图、`dark_theme.png` 实为浅色 |
| 改动 | ① 导航改 `get_by_role('tab', name=…)` 精确定位；② 每场景截图前断言目标页签 `is-active`，否则 fail（不产图）；③ `dark_theme` 改为断言 `document.documentElement.dataset.theme === 'dark-pro'`；④ 场景结束校验页面标题/激活页签名与期望一致 |
| 基线 | 修正后重拍全部 11 场景作为新基线；旧基线归档到 `baseline-v6.3.6/` |
| 验收 | 11 张图逐一人工比对无重复、无主题错配；故意改错断言时用例失败 |

**M3 出口条件**：新增 5 个用例全绿；视觉回归 11 场景可信；基线重建完成并提交。

---

## 4. M4 发布（2.0 人日）

### T4.1 构建与预发验证 — 0.5d

```bash
cd frontend && npm run build     # 产出 dist/
```
检查：`dist/index.html` 引用的 assets hash 已更新；无构建告警新增。

### T4.2 同步到 ops — 0.5d

沿用已验证的方式（保留 `.env` / `data/` / `logs/` / `.venv`）：

```bash
cd D:/MyCoding/QuantCalendar
BK="_deploy_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BK" && cp -r quant-calendar-ops/data "$BK/data" && cp quant-calendar-ops/.env "$BK/.env"
git --git-dir=quant-calendar-dev/.git --work-tree=quant-calendar-ops checkout -f <v6.4-commit> -- .
```

### T4.3 依赖与服务 — 0.5d

```bash
cd quant-calendar-ops
.venv/Scripts/python.exe -m pip install -r requirements.lock   # 含 21 处补丁升级，需确认
taskkill //PID <8000占用PID> //F
.venv/Scripts/python.exe backend/main_new.py
```

### T4.4 验收与回滚演练 — 0.5d

| 检查 | 命令 / 方法 | 期望 |
|---|---|---|
| 版本 | `curl --noproxy 127.0.0.1 :8000/api/health` | `version=6.4.0` |
| 自检 | 启动日志 | `fail=0` |
| WS | `python scripts/ws_probe.py http://127.0.0.1:8000/ <token>` | `OK {...}` |
| 研究页 | 浏览器进入研究概览 | ≤3s 出 4 个策略 |
| 页签 | 1440 不 resize | 7/7 可达 |
| 陈旧 | 首页顶部 | 出现横幅且天数正确 |
| 回滚 | 恢复到 `d45e6c57` + 重启 | 5 分钟内恢复 |

**M4 出口条件**：上表 7 项全通过；发布记录归档。

---

## 5. 提交与评审拆分

为便于审查，按"一个 P0 一个提交"拆分，禁止混提：

| 序号 | 提交信息 | 涉及文件 |
|---|---|---|
| 1 | `fix(auth): 启动弱口令告警回传真实命中口令` | `user_manager.py`, `main_new.py` |
| 2 | `fix(freshness): 期望日期双向判定 + 基准过期自检` | `reliability/freshness.py`, `api/v1/reliability.py`, `api/v1/freshness.py` |
| 3 | `fix(research): 加载器序号隔离, 修复永久骨架屏` | `js/components/research-page.js` |
| 4 | `fix(nav): 页签溢出控件在 tabs 变化时重算` | `src/components/TopTabs.vue` |
| 5 | `style(detail): 详情头去实心渐变, 元信息不折行` | `themes.css`, `responsive.css` |
| 6 | `feat(ui): 数据陈旧横幅与降级角标` | `DataStaleBanner.vue`, `Header.vue` |
| 7 | `chore(deploy): lock 安装 + WS 依赖自检 + 环境断言` | `upgrade.ps1`, `verify_chain.sh`, `tests/test_deploy_env.py` |
| 8 | `test(e2e): 视觉回归场景精确定位与基线重建` | `tests/e2e/visual_regression.py` |

提交 1、2、7 属后端，可并行；3、4、5、6 属前端，可并行；8 最后做。

---

## 6. 回滚预案

| 层级 | 触发条件 | 动作 |
|---|---|---|
| 代码 | 任一 P0 修复引入新故障 | `git --git-dir=... --work-tree=... checkout -f d45e6c57 -- .` + 重启 |
| 依赖 | lock 升级导致启动失败 | `pip install -r _deploy_backup_*/pip-freeze-before-ws.txt`（已留存） |
| 数据 | 新鲜度改动误伤数据 | 不回滚 `data/`，仅回滚代码；`data/` 全程只读 |
| 前端 | dist 构建异常 | 回退 `frontend/dist/` 整个目录 |

回滚目标：**5 分钟内恢复 v6.3.6 可用状态**。

---

## 7. 工时汇总

| 阶段 | 任务 | 人日 |
|---|---|---|
| M0 | 分支 + 对照基线 | 0.5 |
| M1 | T1.1 0.3 / T1.2 0.7 / T1.3 0.5 / T1.4 0.5 | 2.0 |
| M2 | T2.1 1.0 / T2.2 1.0 / T2.3 1.0 / T2.4 0.5 | 3.5 |
| M3 | T3.1 1.5 / T3.2 1.5 | 3.0 |
| M4 | 构建 / 部署 / 验收 / 回滚演练 | 2.0 |
| **合计** | | **11.0** |

并行口径（1 前端 + 1 后端）：**约 6 个工作日**。
