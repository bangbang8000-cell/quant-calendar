# 量化选股日历 5.2 系列开发计划（DEV-PLAN 5.2.x · 短线复盘主线）

- **文档版本**：v1.0（正式版，待审批）
- **日期**：2026-09-03
- **产品基线**：v5.1.5（APP_VERSION 5.1.5）
- **配套**：PRD-v5.2.md | TEST-PLAN-v5.2.md
- **参考实现**：vibe-astock（`/tmp/vibe-astock`，Apache-2.0）

---

## 0. 开发方法论与纪律（贯穿全系列）

### 0.1 开发节奏（每任务四步 TDD）
① 写失败测试 → ② 跑通失败 → ③ 实现 → ④ 跑通 + commit。提交用 Conventional Commits + 版本前缀（如 `v5.2 (5.2.0-1): feat(shortterm): 涨停池数据接口`）。

### 0.2 硬性纪律
- **版本纪律**：APP_VERSION 单一来源（`backend/main_new.py`）；tag v5.2.N.M ↔ APP_VERSION 由 CI gate 守护；前端 dist 产物入库
- **改动纪律**：每任务改动文件 ≤3 个/次，修改后立即验证；前端冒烟 0 pageerror 为金标准
- **口径纪律**：涨停/跌停/连板判定必须收敛到**单一实现**（从 `scan_engine.py` 提炼纯函数共享），禁止第二套口径（用测试 `test_single_implementation` 锁住）
- **数据诚实性纪律**：PRD §5 十条全部落守卫测试（这是本主线与普通功能最大的不同）
- **令牌/数值/术语/依赖/安全纪律**：沿用 5.1 系列（var(--...) 令牌、数值 ≤2 位小数、术语统一、锁文件不漂移、新端点 deny-by-default）
- **AI 成本纪律**：多分析师+裁判 = 3-4 倍普通复盘 LLM 调用，需用量限制 + 日级同题缓存 + 可配置启用/关闭

### 0.3 开发流程（每版本）
1. 任务按序开发（TDD）→ 2. 全量回归 + 门禁 → 3. tag v5.2.N.M（本地）→ 4. ops 同步 + 重启 + 健康检查 → 5. 冒烟 + 归档报告 + 更新 README/HANDOVER

### 0.4 运行与部署（本主线重要变更）

> **开发在 dev、运行在 ops；开发期间 dev 服务从「我们目录」启动，不在 dsh 目录启动。**

| 环境 | 路径 | 端口 | 说明 |
|---|---|---|---|
| dev（开发实例） | **`/home/evergreen/.openclaw/workspace/quant-calendar-dev`** | :8001 | **5.2 开发期 dev 服务从这里启动**（已同步至 v5.1.5 状态） |
| ops（生产实例） | `/home/evergreen/dsh-workspace/quant-calendar-ops` | :8000 | 维持现有实例，版本发布后同步 |

- **dev 启动**（5.2 开发期）：`cd /home/evergreen/.openclaw/workspace/quant-calendar-dev/backend && PORT=8001 nohup python3 main_new.py ... &`
  - ⚠️ 启动前需在 workspace 副本配置运行环境：`PYTHONPATH`（qc_ws_pkgs）+ `UV_CACHE_DIR` 重定向（沙箱 ~/.local 只读）；若 workspace 副本缺依赖，先 `pip install -r requirements.lock` 或复用 dsh 的 qc_ws_pkgs
  - ⚠️ 启动前确认 :8001 空闲（旧 dsh dev 进程需先停，否则 Errno 98）
- **端口坑**：`python3 main_new.py --port` 无效（端口来自 config.py pydantic-settings 环境变量），必须 `PORT=8001 python3 main_new.py`
- **ops 同步+重启**：版本发布后 `git reset --hard <dev-sha>` 对齐 → 重启 :8000 → curl /api/health + 冒烟
- 参考 [[deploy-dev-ops-workflow]] 完整流程

### 0.5 估时口径
以 5.1 节奏（每版 5-9 天）为基准，短线复盘数据/指标偏重口径与护栏测试，估 **6-8 天/版**，三版总计 **17-22 天**（含测试与发布）。

---

## 1. V5.2.0 短线数据基座（估 6-7 天）

### 1.1 任务分解

| 任务 | 内容 | 涉及文件 | 估时 | 前置 |
|---|---|---|---|---|
| T-5.2.01 | 涨停/炸板/跌停三池 akshare 接口适配 + 列名映射 + 代码补零 + 降级 fallback | `backend/data_sources/_manager.py`、`backend/data_sources/_akshare.py`、`backend/data_portal2.py` | 1.5d | - |
| T-5.2.02 | 涨跌幅制度判定纯函数提炼（复用 scan_engine，统一单一实现） | `backend/shortterm/limits.py`（新）、`scan_engine.py` 改引用 | 1d | T-5.2.01 |
| T-5.2.03 | 连板梯队 + 断层检测（纯函数） | `backend/shortterm/ladder.py`（新） | 1d | T-5.2.02 |
| T-5.2.04 | 龙虎榜全市场接口 + 游资/机构席位归类 | `backend/shortterm/lhb.py`（新） | 1d | T-5.2.01 |
| T-5.2.05 | 行业/概念资金流接口（今日/5日/10日三窗口） | `backend/shortterm/sector_flow.py`（新） | 1d | T-5.2.01 |
| T-5.2.06 | 交易日历 + 定稿判据（借鉴 vibe-astock trade_calendar.py） | `backend/shortterm/trade_calendar.py`（新） | 1d | - |
| T-5.2.07 | SQLite 迁移 `_0004_shortterm`（pools/lhb/sector_flow/reviews 表） | `backend/migrations/_0004_shortterm.py`、`backend/db.py` | 0.5d | - |
| T-5.2.08 | 后端 API：三池/梯队/龙虎榜/板块资金/历史场次端点 | `backend/api/v1/shortterm.py`（新）、`backend/api/v1/router.py` | 1d | T-5.2.03~07 |
| T-5.2.09 | 前端：菜单注册 + `shortterm-page.js`（涨停复盘 + 龙虎榜两子页，懒加载）+ vite build | `frontend/js/app-logic.js`、`frontend/js/components/shortterm-page.js`、`frontend/src/main.js`、`frontend/js/icons.js` | 2d | T-5.2.08 |
| T-5.2.10 | scheduler 盘后抓取入库（三池/龙虎榜/资金流）+ 降级重试 | `backend/scheduler/_shortterm.py`（新） | 0.5d | T-5.2.07 |

### 1.2 里程碑
- M1（1-3d）：数据源适配 + 纯函数（T-5.2.01~06）
- M2（4-5d）：迁移 + API（T-5.2.07~08）
- M3（6-7d）：前端 + scheduler（T-5.2.09~10）

### 1.3 出口标准
全量测试绿（新增 ~60 用例）+ 涨停判定单一实现守护 + 双端冒烟 0 pageerror + tag v5.2.0（本地）+ 数据诚实性护栏 §5.1/5.2/5.6/5.8 落测试。

---

## 2. V5.2.1 派生情绪指标与盘面（估 5-7 天）

### 2.1 任务分解

| 任务 | 内容 | 涉及文件 | 估时 | 前置 |
|---|---|---|---|---|
| T-5.2.11 | 赚钱效应（均值/中位数/翻红率/再涨停率 + 定稿优先 + 覆盖率闸门） | `backend/shortterm/emotion_metrics.py`（新） | 1.5d | T-5.2.03/06 |
| T-5.2.12 | 晋级率（1进2/2进3/3板+）+ 连板溢价 | 同上 | 1d | T-5.2.11 |
| T-5.2.13 | 情绪周期（近10日 minmax 三分取均 + 相对读数标注） | 同上 | 1.5d | T-5.2.11 |
| T-5.2.14 | 市场事实表（封板质量/亏钱效应/反馈矩阵/题材结构/事件账本） | `backend/shortterm/market_facts.py`（新） | 1d | T-5.2.11 |
| T-5.2.15 | 明日验证条件（固定指标集 + eps + 三态核验 + 基准发生率 + 用户自设） | `backend/shortterm/verification.py`（新） | 1d | T-5.2.13 |
| T-5.2.16 | 近5日热度 + 龙头谱系 | `backend/shortterm/weekly.py`（新） | 1d | T-5.2.11 |
| T-5.2.17 | API：情绪指标/市场事实/验证条件/热度端点 | `backend/api/v1/shortterm.py` 扩展 | 0.5d | T-5.2.14~16 |
| T-5.2.18 | 前端：复盘看板硬指标层（五卡 + 事实面板 + 热度图）+ 板块资金子页 + 验证条件卡 | `frontend/js/components/shortterm-page.js` 扩展 | 2d | T-5.2.17 |

### 2.2 里程碑
- M1（1-4d）：核心指标纯函数（T-5.2.11~14）
- M2（5-6d）：验证条件 + 热度 + API（T-5.2.15~17）
- M3（7d）：前端（T-5.2.18）

### 2.3 出口标准
全量测试绿 + 指标口径专项测试（均值vs中位数、覆盖率高、情绪周期相对读数）+ 双端冒烟 0 pageerror + tag v5.2.1 + 护栏 §5.3/5.4/5.7/5.8 落测试。

---

## 3. V5.2.2 AI 多视角复盘与闭环（估 6-8 天）

### 3.1 任务分解

| 任务 | 内容 | 涉及文件 | 估时 | 前置 |
|---|---|---|---|---|
| T-5.2.21 | 多分析师编排器（角色注册中心 + 串行图 + 降级信封 + 并行调用） | `backend/shortterm/analysts.py`（新）、`ai_eval/_eval.py` 扩展 `multi_analyst_evaluate` | 1.5d | T-5.2.14 |
| T-5.2.22 | 复盘裁判（JSON 骨架 + pydantic + markdown 渲染三件套，`TomorrowFocus` 风格 schema） | `backend/shortterm/synthesizer.py` + `schemas.py`（新） | 1.5d | T-5.2.21 |
| T-5.2.23 | 反思闭环（次日自动核验 + 三路投票 + 战绩记分板 + 经验注入） | `backend/shortterm/reflection.py`（新） | 1d | T-5.2.22 |
| T-5.2.24 | 盘中核验（6 时点快照 + 过点 8 分钟拒绝 + 历史日不现抓 + 上海时区后台调度） | `backend/shortterm/intraday.py`（新）+ `scheduler` | 1.5d | T-5.2.01 |
| T-5.2.25 | 涨停样本统计（20/30/60/90 日窗口分情绪环境 + 样本偏差声明） | `backend/shortterm/backtest.py`（新） | 1d | T-5.2.13 |
| T-5.2.26 | 原始归档 + 字段漂移 + 结构漂移 + 制度日历人工登记 | `backend/shortterm/archive.py` + `drift.py`（新） | 1d | T-5.2.14 |
| T-5.2.27 | API：复盘运行/状态/取结果 + 盘中核验 + 样本统计 + 归档漂移 + 追问聊天 | `backend/api/v1/shortterm.py` 扩展 | 1d | T-5.2.22~26 |
| T-5.2.28 | 前端：AI 盘面研判展示 + 盘中核验子页 + 样本统计子页 + 追问聊天 | `frontend/js/components/shortterm-page.js` 扩展 | 2d | T-5.2.27 |
| T-5.2.29 | scheduler 盘后自动跑 + 降级重试 + 飞书推送 + webhook 事件 + 复盘检索 | `backend/scheduler/_shortterm.py` 扩展 | 0.5d | T-5.2.27 |

### 3.2 里程碑
- M1（1-3d）：AI 编排核心（T-5.2.21~23）
- M2（4-6d）：盘中核验 + 样本统计 + 归档漂移（T-5.2.24~26）
- M3（7-8d）：API + 前端 + 调度（T-5.2.27~29）

### 3.3 出口标准
全量测试绿 + 护栏 §5 十条全部落测试 + 无前视/个人数据不进 prompt 守卫 + AI 成本限制生效 + 双端冒烟 0 pageerror + tag v5.2.2 + README/HANDOVER 同步。

---

## 4. 跨版本任务（贯穿全程）

| 任务 | 内容 | 节奏 |
|---|---|---|
| T-5.2.X1 | 数据诚实性守卫测试维护（覆盖率高/定稿优先/实时不冒充/unavailable） | 每版本 |
| T-5.2.X2 | 前端一致性（菜单注册/令牌/i18n/懒加载 chunk）回归 | 每版本 |
| T-5.2.X3 | README/DEPLOYMENT/HANDOVER/技能文档同步 | 每版本 |
| T-5.2.X4 | akshare 反爬与降级巡检（东财被反爬→同花顺兜底→tushare） | 每版本 |

---

## 5. 里程碑总览与发布计划

| 版本 | 主题 | 估时 | 目标 tag |
|---|---|---|---|
| 5.2.0 | 短线数据基座 | 6-7 天 | v5.2.0 |
| 5.2.1 | 派生情绪指标与盘面 | 5-7 天 | v5.2.1 |
| 5.2.2 | AI 多视角复盘与闭环 | 6-8 天 | v5.2.2 |

总计约 **17-22 天**（含测试、发布、ops 同步）。每版本独立可发布，逻辑依赖不阻塞独立运行。

## 6. 主要风险与缓解

| 风险 | 等级 | 缓解 |
|---|---|---|
| akshare 东财接口反爬/不稳定 | 高 | 三源 fallback（东财→同花顺→tushare 标准版）；本地缓存降级；T-5.2.X4 巡检 |
| 全市场数据性能（三池/资金流） | 中 | 批量接口 + 盘后预生成 + 内存缓存；前端按需加载 + 懒加载 |
| tushare 短线接口积分权限（limit_list/top_list 需 2000+） | 中 | 优先 akshare（免费），tushare 仅兜底；先验证 token 权限 |
| 涨停/连板口径歧义 | 中 | 单一实现纯函数 + 边界测试（ST/科创/北交所/一字板）锁住 |
| AI 多角色成本 3-4 倍 | 低 | 用量限制 + 日级同题缓存 + 可配置启用/关闭 |
| workspace 副本运行环境未就绪 | 中 | 启动前配置 qc_ws_pkgs/UV_CACHE_DIR/依赖；dev 首任务含启动验证（见 §0.4） |
