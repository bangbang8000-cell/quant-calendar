# 开发 & 测试计划 — 量化日历 v6.6.0「可信数据与可用性收口」

| 项 | 值 |
|---|---|
| 对应 PRD | `docs/PRD-v6.6.md` v1.0 |
| 上游依据 | `docs/EVAL-v6.6-fixes-and-optimization.md` v1.1 |
| 版本 | `APP_VERSION 6.5.8` → `6.6.0` |
| 总工时 | **8.8 人日**（开发 6.3 + 测试 2.5） |
| 基线 | `pytest -m "not e2e"` = **3925 passed / 1 skipped**；ruff 全绿；总覆盖 ≥40% |
| 铁律 | 每任务 **TDD 四步**（先红 → 跑红 → 实现 → 跑绿 + commit）；改动文件 ≤3 个/次；前端改必 rebuild |

---

## 0. 前置准备 T0（0.5 人日，编码前必须完成）

| 任务 | 内容 | 产出 |
|---|---|---|
| **T0-1** | 建分支 `feat/v6.6.0`，记录基线：`pytest -m "not e2e" -q` 与 `ruff` 输出存档 | 基线数字写进 PR 描述 |
| **T0-2** | **P0-1b 最小复现**（0.3d，最高优先）：在 dev 环境按 PRD §1.1 探针构造复现，重点试 ①`qc_split_width` × `qc_detail_mode` 组合 ②slot 内 `getWatchlistScore` 空值路径（`latest.result == null`）③`__quantComponents` 注册时序 | `docs/repro-p0-1b.md`：结论「哪一支被证实/全部排除」 |
| **T0-3** | 备份数据：`data/merrill_history.json`、`data/merrill_snapshots.json`、`data/app.db`、`data/users/*/watchlist*` | `backups/v6.6.0-pre/`（含 sha256） |
| **T0-4** | 环境核对：dev=:8001（PORT=8001，无 .env）、ops=:8000（DEBUG=False）；`PYTHONPATH=/home/evergreen/dsh-workspace/qc_ws_pkgs` 可用 | 双端 `/api/health` = 6.5.8 |
| **T0-5** | 确认前端依赖可装：`cd frontend && npm install --registry=https://registry.npmmirror.com --cache=/home/evergreen/dsh-workspace/.npm-cache --no-audit --no-fund` | `vite build` 能产 dist |

> **T0-2 是 Gate**：若复现成功，FR-6.6.1 按实证根因修；若三种分支全部排除，按防御性方案（去虚拟化 + 自检 + 诊断）实施并在 PR 中记录「根因未定但已兜底」。

---

## 1. M1 — P0-A 自选可用性（1.8 人日：开发 1.3 + 测试 0.5）

### 1.1 任务分解

| ID | 任务 | 文件 | 人日 |
|---|---|---|---|
| **T-6.6.1** | **自选列表去虚拟化**：`items.length <= 50` 直接 `v-for` 渲染 `.watchlist-item`；`>50` 才用 `qc-virtual-list`；两分支共用同一行模板（抽 `<template>` 片段避免双份维护） | `frontend/js/components/ai/view-part2.js` | 0.4 |
| **T-6.6.2** | **渲染自检 + 降级面板**：`onUpdated` 后比对 `sortedWatchlist.length` 与实测行数；不等则置 `listRenderGuard=true` 渲染降级面板（含「重新加载」「导出诊断信息」） | 同上 + `frontend/js/watchlist.js` | 0.3 |
| **T-6.6.3** | **诊断导出**：`exportPageDiagnostics()` 输出 `{dom, state, version, components}`（与 EVAL §3.1.5 探针同构）；挂到降级面板 + 快捷键 | `frontend/js/system.js`（或新 `diagnostics.js`） | 0.2 |
| **T-6.6.4** | **启动自检横幅**：比对 `__quantComponents` 必需清单（含 `DetailSplit`/`VirtualList`/`StockDetailDialog`）与 `/api/health.version`；不一致显示可关闭横幅 | `frontend/js/app-logic/lifecycle.js` + `index.html` | 0.2 |
| **T-6.6.5** | **WS 登录即连**：`handleLogin()`/`handleGuestLogin()` 成功后 `qcState.connectRealtimeQuotes()`；`handleLogout()` 调 `disconnectRealtimeQuotes()` | `frontend/js/app-logic/auth.js` | 0.1 |
| **T-6.6.6** | **状态文案与看门狗**：`idle/connecting/open/closed` 四态文案；`connecting` 8s 看门狗转 `closed`；`visibilitychange` 回前台重连 | `frontend/js/watchlist/realtime.js` + `view-part2.js` | 0.15 |
| **T-6.6.7** | **退避重连 + 登录态监听**：1s→2s→4s…上限 30s；watch token 出现/消失 | `frontend/js/watchlist/realtime.js` | 0.15 |

### 1.2 测试用例（TDD，先写红）

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-6.6.1.1 | 13 只自选 → 渲染 13 个 `.watchlist-item`，与标题计数一致 | e2e | `tests/e2e/test_v66_watchlist_render.py` |
| TC-6.6.1.2 | 60 只自选 → 走虚拟列表，DOM 行数 < 60 且滚动后可达第 60 行 | e2e | 同上 |
| TC-6.6.1.3 | 注入「计数 13 / 行 0」→ 降级面板出现，含 `.watchlist-render-guard` 与导出按钮 | unit(js) | `tests/watchlist_render_guard.test.js` |
| TC-6.6.1.4 | `exportPageDiagnostics()` 返回 JSON 必含 `dom/state/version/components` 四键 | unit(js) | 同上 |
| TC-6.6.1.5 | 必需组件清单缺 `DetailSplit` → 横幅出现；齐全 → 不出现 | unit(js) | `tests/component_guard.test.js` |
| TC-6.6.1.6 | 组件注册清单完整性守护（防未来新增组件漏注册） | py(源码) | `tests/test_v66_component_registry.py` |
| TC-6.6.2.1 | SPA 登录（不刷新）→ ≤2s 内 WS 建立，13 只全出报价行 | e2e | `tests/e2e/test_v66_ws_lifecycle.py` |
| TC-6.6.2.2 | 登出 → WS 关闭 + 报价清空；再登录 → 重建 | e2e | 同上 |
| TC-6.6.2.3 | 拦截 WS → 8s 内文案 = 「已断开」 | e2e | 同上 |
| TC-6.6.2.4 | 四态文案映射正确（unit：state → text） | unit(js) | `tests/realtime_state_text.test.js` |
| TC-6.6.2.5 | 退避序列 = 1,2,4,8,16,30,30…（不超过上限） | unit(js) | 同上 |
| TC-6.6.2.6 | 登录函数调用 `connectRealtimeQuotes`（源码级委派断言） | py(源码) | `tests/test_v66_auth_ws_wiring.py` |

### 1.3 出口标准

- AC-1/2/3/14/15/16 全绿。
- 真机：SPA 登录 → 我的自选 → 13 行 + 13 报价行 + 「实时」；F5 前后行为一致。
- 前端 rebuild 完成，`dist/assets/index-<新hash>.js` 变更；`frontend/index.html` 与 `frontend/dist/index.html` 双份同步。

---

## 2. M2 — P0-B 美林时钟可信（2.6 人日：开发 1.9 + 测试 0.7）

### 2.1 任务分解

| ID | 任务 | 文件 | 人日 |
|---|---|---|---|
| **T-6.6.8** | **列名兼容链 + 升序 + 脏值跳过**：为 CPI/PPI/GDP/社融/PMI/M2/工业增加值/固投/失业率/进出口/LPR 逐个建 `_pick_col(df, [候选…])`；统一 `sort_values` 升序；`pd.to_numeric(errors='coerce')` 后 `dropna` | `backend/merrill_clock/_indicators.py` | 0.7 |
| **T-6.6.9** | **缺失语义**：`_fetch_real_macro_data()` 返回 `(values, missing, sources)`；**只 update 真实键**；估算值标 `estimated:true` 且不参与 z-score；`quality` 三档 | 同上 | 0.4 |
| **T-6.6.10** | **溯源真实化**：`_data_source` 改为逐项来源表；删「AKShare实时数据」笼统标签 | 同上 | 0.15 |
| **T-6.6.11** | **第二源兜底**：akshare 失败 → 尝试 tushare 宏观；双失败 → `quality=insufficient` + 全量 `missing[]` | 同上 + `backend/data_sources.py` | 0.25 |
| **T-6.6.12** | **阶段防抖**：连续 2 次同象限 + 最短 20 交易日 + 缺失维度不参与打分（滞回状态落盘） | `backend/merrill_clock/_history.py` | 0.4 |
| **T-6.6.13** | **历史去重**：同一交易日内多次评估只记一次；同象限连续不写转换 | 同上 | 0.2 |
| **T-6.6.14** | **历史订正脚本**：扫描 `trigger=='boundary' && duration_days<=3` → 标 `archived/legacy/recomputed_from`；重算快照标 `recomputed_at`；**零删除**；支持 `--dry-run` | `scripts/fix_merrill_history_v660.py`（新增） | 0.3 |
| **T-6.6.15** | **人工锁定（admin）**：`POST /api/market/merrill-clock/lock` `{locked: bool, reason}`；锁定时算法不改阶段；审计日志；非 admin 403 | `backend/api/v1/market.py` + `_history.py` | 0.3 |
| **T-6.6.16** | **订正角标 + 说明抽屉**：前端读 `correction` 字段渲染「数据订正于 YYYY-MM-DD ⓘ」+ 展开说明 | `frontend/js/components/strategies/view-part2.js` | 0.2 |

### 2.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-6.6.3.1 | CPI 列名 `今值` → 命中；`现值` → 命中；`value` → 命中 | py | `tests/test_v66_merrill_indicators.py` |
| TC-6.6.3.2 | GDP 帧**倒序** → 取到最新季度（非 2006Q1） | py | 同上 |
| TC-6.6.3.3 | 列名含 `-`（`国内生产总值-同比增长`）→ 命中 | py | 同上 |
| TC-6.6.3.4 | 社融无「存量同比」列 → 进 `missing`，**值不为 0** | py | 同上 |
| TC-6.6.3.5 | 全 NaN 帧 → `quality=insufficient`，`missing` 覆盖全部项 | py | 同上 |
| TC-6.6.3.6 | 缺 3 项 → `quality=partial`；其余维度打分不受影响 | py | `tests/test_v66_merrill_scoring.py` |
| TC-6.6.3.7 | 估算值不参与 z-score（对比注入前后维度分不变） | py | 同上 |
| TC-6.6.3.8 | **负向门禁**：任何 `real_data` 值为 0 且来源标注为真实 → 断言失败 | py | `tests/test_v66_no_zero_placeholder.py` |
| TC-6.6.4.1 | 连打 10 次同象限 → 历史记录数不变 | py | `tests/test_v66_merrill_debounce.py` |
| TC-6.6.4.2 | 阶段切换需连续 2 次确认（第 1 次不切） | py | 同上 |
| TC-6.6.4.3 | 未满 20 交易日不切换 | py | 同上 |
| TC-6.6.4.4 | 订正脚本 dry-run 不改文件；实跑后无 `duration<=3` 自动记录 | py | `tests/test_v66_merrill_correction.py` |
| TC-6.6.4.5 | 订正后原始记录仍存在（`archived:true`，未被删） | py | 同上 |
| TC-6.6.4.6 | 锁定后算法评估不改阶段；解锁后恢复 | py | `tests/test_v66_merrill_lock.py` |
| TC-6.6.4.7 | 非 admin 调 lock → 403 | py | 同上 |
| TC-6.6.4.8 | 接口 `stage.current` == 徽标 == 时间轴末节点 | e2e | `tests/e2e/test_v66_merrill_consistency.py` |
| TC-6.6.4.9 | 角标存在且文案含「数据订正于」 | e2e | 同上 |

### 2.3 出口标准

- AC-4/5/6/7/20 全绿。
- dev 环境跑订正脚本 dry-run → 输出待归档条目清单，人工核对后可执行。
- 订正后 dev UI：阶段稳定、无 0/1 天节点、角标可见。

---

## 3. M3 — P0-C 行情展示正确性（2.4 人日：开发 1.8 + 测试 0.6）

### 3.1 任务分解

| ID | 任务 | 文件 | 人日 |
|---|---|---|---|
| **T-6.6.17** | **成交额归一后端化**：新增 `amount_yuan`/`vol_shares` 计算（千元×1000、手×100），指数与个股同一函数 | `backend/market_data.py` | 0.2 |
| **T-6.6.18** | **`GET /api/market/quote-summary/{code}`**：price/prev_close/change/5 周期 pct/vol/amount/total_mv/circ_mv/turnover/quality/missing/sources，带缓存（盘中 15s，盘后当日） | `backend/api/v1/market.py` + 新 `backend/quote_summary.py` | 0.9 |
| **T-6.6.19** | **自然周期基准计算**：`_period_base(code, 'week'\|'month'\|'quarter'\|'year')`，处理停牌/新股/跨年；不可得 → `null` | `backend/quote_summary.py` | 0.35 |
| **T-6.6.20** | **指数详情改造**：成交额除数 `10000`→`100000`（或直接用 `amount_yuan`）；新增 5 周期涨跌幅；总市值位显示「指数不适用」 | `frontend/js/components/dialogs/index-detail.js` | 0.2 |
| **T-6.6.21** | **个股详情改造**：新增成交额/总市值/5 周期涨跌幅；`fmtY` 统一 2 位 | `frontend/js/components/dialogs/stock-detail.js` | 0.2 |
| **T-6.6.22** | **K 线 tooltip 补全**：涨跌幅/成交额(亿)/换手率/总市值；无值不显示该行 | `frontend/js/charts.js` | 0.25 |
| **T-6.6.23** | **前端字段消费与降级**：拿不到新接口时回退且不显示 `--` | 上述 3 个前端文件 | 0.1 |

### 3.2 测试用例

| TC | 断言 | 类型 | 文件 |
|---|---|---|---|
| TC-6.6.5.1 | 上证 `amount 715620694.9063`（千元）→ `amount_yuan` ≈ 7.156e12 → 显示 ≈7,156 亿 | py | `tests/test_v66_units.py` |
| TC-6.6.5.2 | 个股成交额与 `vol_shares × price` 互校误差 <1% | py | 同上 |
| TC-6.6.5.3 | `last_trade_dates('week')` 基准 = 上周最后交易日收盘 | py | `tests/test_v66_period_pct.py` |
| TC-6.6.5.4 | 新股无上年末收盘 → `pct_year=null` 且在 `missing` | py | 同上 |
| TC-6.6.5.5 | 停牌股 → 用最近可得交易日，`as_of` 正确 | py | 同上 |
| TC-6.6.6.1 | 指数 `total_mv_yuan=null` + `missing:["total_mv_yuan"]` | py | `tests/test_v66_quote_summary.py` |
| TC-6.6.6.2 | 接口 schema 快照（键集合、单位、类型） | py | 同上 |
| TC-6.6.6.3 | 指数详情显示「指数不适用」且无亿级数字 | e2e | `tests/e2e/test_v66_detail_fields.py` |
| TC-6.6.6.4 | 个股详情 5 周期 + 市值齐备 | e2e | 同上 |
| TC-6.6.7.1 | tooltip formatter 含涨跌幅/成交额/换手率/总市值 | unit(js) | `tests/kline_tooltip_v66.test.js` |
| TC-6.6.7.2 | 缺市值时该行不渲染（无 `--`） | unit(js) | 同上 |
| TC-6.6.7.3 | 浏览器 hover 实测文本命中 | e2e | `tests/e2e/test_v66_tooltip.py` |

### 3.3 出口标准

- AC-8/9/10/19 全绿。
- 交叉验算脚本通过：指数与个股成交额、市值、涨跌幅三组互校。

---

## 4. M4 — P1 一致性与口径（1.5 人日：开发 1.1 + 测试 0.4）

### 4.1 任务分解

| ID | 任务 | 文件 | 人日 |
|---|---|---|---|
| **T-6.6.24** | 一级菜单改名 + 二级「概览」：`nav-merge-core.js`、`workspace.js:267`、5 语言包 | 3 文件 | 0.3 |
| **T-6.6.25** | S1 符号叠加修复：`+-1.11` → `-1.11`（模板加号仅在 >0 时渲染，或后端给带符号字符串） | `strategies/view-part1.js` | 0.15 |
| **T-6.6.26** | S2 涨速隐藏（D9）：无 `rise_speed` 时整项不渲染；后端补 `prev_price` 后自动恢复 | `ai/view-part2.js` + `realtime_quotes.py` | 0.25 |
| **T-6.6.27** | S3/S4 单位与小数统一：成交量「万手」2 位；`fmtY` 亿/万均 2 位 | `stock-detail.js`、`index-detail.js` | 0.2 |
| **T-6.6.28** | D10 评分取整：`Math.round` 后无小数 | `ai/view-part2.js` | 0.05 |
| **T-6.6.29** | 术语与文案守护：新增文案入 5 语言包 | `locales/*.js` | 0.15 |

### 4.2 测试用例

| TC | 断言 | 类型 |
|---|---|---|
| TC-6.6.8.1 | 一级名 = 「策略概览」；二级首项 = 「概览」；面包屑无重复 | e2e |
| TC-6.6.8.2 | 5 语言包 key 齐全（复用既有 i18n 用例） | py |
| TC-6.6.8.3 | 深链 `#strategies/...` 仍可达 | e2e |
| TC-6.6.9.1 | 负数不出现 `+-`；正数带 `+`；零为 `0.00` | unit(js) |
| TC-6.6.9.2 | 无涨速时不渲染该项（不含「涨速」文本、不含 `--%`） | e2e |
| TC-6.6.9.3 | 评分匹配 `^\d+$` | e2e |
| TC-6.6.9.4 | 全站小数位 ≤2（既有门禁 + 新断言） | py |

### 4.3 出口标准

- AC-11/12/17/18 全绿；无新增令牌硬编码（令牌门禁仍绿）。

---

## 5. M5 — P2 收口（1.0 人日：开发 0.8 + 测试 0.2）

| ID | 任务 | 文件 | 人日 |
|---|---|---|---|
| **T-6.6.30** | **EP 弃用改造 21 处 / 5 文件**：`el-radio`/`el-radio-button` 的 `label=` → `value=`（system/view-part2 ×8、system/view-part1 ×2、research/view-part2 ×5、ai/view-part2 ×4、dialogs/auto-evaluate ×2） | 5 文件 | 0.4 |
| **T-6.6.31** | 未登录不请求鉴权端点（消除 401 噪声）：鉴权前置判断 | `app-logic/lifecycle.js` 等 | 0.15 |
| **T-6.6.32** | 右栏空态引导（不展示无关个股） | `ai/view-part2.js` | 0.15 |
| **T-6.6.33** | 数据契约门禁用例集（宏观不得为 0、单位互校、`missing[]` 必填） | `tests/test_v66_contract_gates.py` | 0.2 |
| **T-6.6.34** | 设置可发现性：自选页/详情区加「双栏/弹窗」快捷入口或提示 | `ai/view-part2.js` | 0.1 |

**测试**：TC-6.6.10.1 运行期无 EP 弃用警告；TC-6.6.10.2 未登录 Network 无 401；TC-6.6.10.3 空态文案存在；TC-6.6.10.4 门禁**负向校验**（回退旧代码必红）。

**出口**：AC-16 与 P2 各项验收；既有 RTL/EP 控件用例全绿。

---

## 6. 测试策略总览

### 6.1 分层与责任

| 层 | 工具 | 覆盖目标 | 责任批次 |
|---|---|---|---|
| 单元（后端） | pytest | 取数兼容链、债券防抖、单位换算、周期基准 | M2/M3 |
| 单元（前端） | Node 直跑 `.test.js` | tooltip formatter、状态文案、退避、降级判定 | M1/M3 |
| 源码级守护 | pytest 读源码断言 | 组件注册完整性、登录接线、文案无回退 | M1/M4/M5 |
| 集成 | pytest + FastAPI TestClient | `/quote-summary`、`/merrill-clock`、lock 权限 | M2/M3 |
| e2e | Playwright（Chromium） | 登录即连、13 行渲染、详情字段、tooltip | M1/M3/M4 |

### 6.2 关键旅程 E2E（每批必跑）

1. 登录 → 我的自选 → **13 行 + 13 报价行 + 「实时」**
2. 我的自选 → 点股票 → 详情含 5 周期 + 市值 + 成交额
3. 设定 K 线周期 → hover → tooltip 字段齐备
4. 策略概览 → 面包屑「策略概览 / 概览」
5. 美林时钟 → 阶段稳定 + 订正角标 + （admin）锁定

### 6.3 测试环境

| 项 | 值 |
|---|---|
| Python | 系统 `python3`（3.13.12，与 CI 一致） |
| WS 依赖 | `PYTHONPATH=/home/evergreen/dsh-workspace/qc_ws_pkgs` |
| 浏览器 | `/home/evergreen/.agent-browser/browsers/chrome-150.0.7871.46/chrome`（Playwright 需显式 `executable_path`） |
| SW | e2e mock 场景必须 `service_workers="block"` |
| 登录 | ops admin 口令 `Abcd@2026`；dev 用 guest 或 dev 专属口令，**不要猜** |

### 6.4 回归范围（每次提交必跑）

```bash
# 1. lint
python3 -m ruff check backend/ --select=E,F,W --ignore=E501
# 2. 全量（不含 e2e）
PYTHONPATH=/home/evergreen/dsh-workspace/qc_ws_pkgs \
  python3 -m pytest tests/ -q -m "not e2e"
# 3. 覆盖率门禁（CI 同款）
python3 -m pytest tests/ -q -m "not e2e" --cov=backend --cov-fail-under=40
# 4. 美林专项（≥70%）
python3 -m pytest tests/test_merrill_clock.py tests/test_v66_merrill_indicators.py \
  --cov=merrill_clock --cov-fail-under=70 -q
```

**每批出口必须**：`0 failed`；覆盖率不低于基线；新增用例全部通过；**负向校验**（把修复回退后用例必须变红）。

---

## 7. 数据订正执行手册（M2 必读）

### 7.1 执行顺序（不可颠倒）

```
① 备份 data/merrill_history.json + merrill_snapshots.json（含 sha256）
② dev 执行 --dry-run，输出待归档清单
③ 人工核对清单（确认全是 2026 boundary 抖动，人工记录不入选）
④ dev 实跑 → 校验 AC-6（无 <=3 天自动阶段）
⑤ dev UI 验收（阶段/时间轴/角标/锁定）
⑥ ops 重复 ①②④⑤（先备份！）
```

### 7.2 脚本契约

```bash
python3 scripts/fix_merrill_history_v660.py --dry-run          # 只报不写
python3 scripts/fix_merrill_history_v660.py --apply            # 写 archive 字段 + 重算快照
python3 scripts/fix_merrill_history_v660.py --verify           # 断言 AC-6
```

- **零删除**：只加 `archived/legacy/recomputed_from/recomputed_at`。
- 幂等：重复 `--apply` 不重复标记。
- 退出码：0 = 成功；1 = 校验失败；2 = 参数错误。

### 7.3 回滚

```bash
cp backups/v6.6.0-pre/merrill_history.json data/
cp backups/v6.6.0-pre/merrill_snapshots.json data/
# 重启服务
```

---

## 8. 部署验收与回滚

### 8.1 标准发布流程

```bash
# 0) 版本号（单一来源，不需重建 dist）
#    backend/main_new.py: APP_VERSION = "6.6.0"
#    同步两处版本门禁测试断言

# 1) 前端构建（仅当前端源码变更时）
cd frontend
npm install --registry=https://registry.npmmirror.com \
            --cache=/home/evergreen/dsh-workspace/.npm-cache --no-audit --no-fund
./node_modules/.bin/vite build
# 注意：frontend/index.html 与 frontend/dist/index.html 双份同步提交

# 2) 测试门禁
python3 -m pytest tests/ -q -m "not e2e"    # 必须 0 failed

# 3) 提交 + tag
git commit -m "release(6.6.0): ..."
git tag -a v6.6.0 -m "v6.6.0 可信数据与可用性收口"

# 4) 重启双服务（D-Bus，systemctl --user 在本沙箱失效）
export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/$(id -u)/bus
dbus-send --session --print-reply --dest=org.freedesktop.systemd1 /org/freedesktop/systemd1 \
  org.freedesktop.systemd1.Manager.RestartUnit \
  string:"quant-calendar-dev.service" string:"replace"

# 5) 验收
curl -s --noproxy '*' http://127.0.0.1:8001/api/health   # version 6.6.0
curl -s --noproxy '*' http://127.0.0.1:8000/api/health
```

### 8.2 发布检查清单

- [ ] dev `/api/health` = 6.6.0，UI 版本一致
- [ ] SPA 登录 → 自选 13 行 + 13 报价行
- [ ] `/api/market/quote-summary/000001.SH` 返回完整、单位正确
- [ ] 上证成交额 ≈7,156 亿
- [ ] 美林 `quality` 与 `missing[]` 合理，阶段稳定
- [ ] 订正角标可见；admin 锁定可用
- [ ] 菜单「策略概览 / 概览」
- [ ] 无 EP 弃用警告、无 401 噪声
- [ ] ops 同步后同上（先备份数据）

### 8.3 回滚

| 场景 | 动作 |
|---|---|
| 代码回归 | `git revert` 到 v6.5.8 tag → 重建 dist → 重启 |
| 数据订正出错 | 恢复 `backups/v6.6.0-pre/` → 重启 |
| 仅前端问题 | 切回上一 `index-<hash>.js`（保留旧 dist 备份） |

---

## 9. 提交拆分与版本治理

| 提交 | 内容 |
|---|---|
| `feat(6.6.0): T-6.6.1/2/3 自选去虚拟化+渲染自检+诊断导出` | M1 前半 |
| `feat(6.6.0): T-6.6.5/6/7 自选 WS 登录即连+四态文案+退避` | M1 后半 |
| `feat(6.6.0): T-6.6.8/9/10/11 美林取数兼容链+缺失语义+双源` | M2 前半 |
| `feat(6.6.0): T-6.6.12/13/14/15/16 美林防抖+订正+锁定+角标` | M2 后半 |
| `fix(6.6.0): T-6.6.17/20/21 成交额单位归一+详情字段` | M3 前半 |
| `feat(6.6.0): T-6.6.18/19/22 quote-summary+多周期+tooltip` | M3 后半 |
| `feat(6.6.0): T-6.6.24~29 菜单改名+口径统一` | M4 |
| `chore(6.6.0): T-6.6.30~34 EP 改造+噪声+空态+门禁` | M5 |
| `release(6.6.0): 版本号+dist+文档` | M6 |

**规范**：Conventional Commits + 版本前缀；每任务独立 commit；`docs/` 变更不触发 CI。

---

## 10. 工时汇总

| 批次 | 开发 | 测试 | 合计 |
|---|---|---|---|
| T0 前置 | 0.3 | 0.2 | **0.5** |
| M1 P0-A 自选 | 1.3 | 0.5 | **1.8** |
| M2 P0-B 美林 | 1.9 | 0.7 | **2.6** |
| M3 P0-C 行情 | 1.8 | 0.6 | **2.4** |
| M4 P1 一致性 | 1.1 | 0.4 | **1.5** |
| M5 P2 收口 | 0.8 | 0.2 | **1.0** |
| M6 发布 | — | — | **0.5** |
| **合计** | **7.2** | **2.6** | **9.8** |

> 与评估报告 8.8 人日的差异说明：报告口径未含 T0 前置（0.5）与发布验收（0.5），且 M5 因 EP 实测为 21 处（报告写 4 处）由 0.8 增至 1.0。**以本计划 9.8 人日为准**，报告中数字作废并由本表取代。

**并行口径**：M2（后端为主）与 M3（前后端各半）可由两人并行，关键路径 = T0 → M1 → M6，最短约 **6.5 人日**（单人串行 9.8）。

---

## 11. 前置依赖与阻塞

| 项 | 状态 | 阻塞影响 |
|---|---|---|
| D1–D11 决策 | ✅ 已确认（PRD §1.2） | 无 |
| P0-1b 最小复现 | ⏳ T0-2 待做 | 若失败 → 走防御性方案，不阻塞 |
| AKShare 列名现状 | ⏳ T0 需实测一次真实返回 | 影响 T-6.6.8 具体候选列 |
| tushare 宏观可用性 | ⏳ 需验证 | 不可用 → 第二源降级为「仅标记」，不影响主链路 |
| dev admin 口令 | ✅ 已知可用 guest 登录 | 无 |
| ops admin 口令 | ✅ `Abcd@2026` | 无 |
| 前端 npm 依赖 | ⏳ T0-5 验证 | 装不上 → 无法 rebuild，M1/M3/M4 前端部分阻塞 |
| GitHub 可达性 | ⚠️ 历史上不稳定 | 仅影响推送，不影响开发 |

---

## 12. 评审后启动清单（暂停点）

审批通过后，按此顺序启动，**每一步完成后回报，不跳步**：

1. ☐ 建 `feat/v6.6.0` 分支 + 记录基线（T0-1）
2. ☐ 做 P0-1b 最小复现并出结论（T0-2）→ **回报后再动代码**
3. ☐ 备份数据（T0-3）
4. ☐ M1 开发 + 测试 + 真机验证 → 回报
5. ☐ M2 开发 + 测试 + 订正 dry-run → **回报后再实跑**
6. ☐ M3 开发 + 测试 + 交叉验算 → 回报
7. ☐ M4 + M5 → 回报
8. ☐ 版本号 + 全量门禁 + 发布 dev → **回报后再同步 ops**

> **红线**：不一次改多个域；不跳过负向校验；不在未备份时执行数据订正；不在未通过全量测试时提交。
