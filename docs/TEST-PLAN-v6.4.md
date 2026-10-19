# 测试计划 — 量化日历 v6.4.0

| 项 | 内容 |
|---|---|
| 对应文档 | `docs/PRD-v6.4.md`、`docs/DEV-PLAN-v6.4.md` |
| 测试对象 | v6.4.0 发布候选（基于 `d45e6c57`） |
| 环境 | dev `:8000`（Windows / Chromium）→ ops `:8000` |
| 账号 | 管理员 `admin`（生产实际口令为 `admin`，非 `admin123`）；访客 `guest/guest` |
| 测试类型 | 单元 / 接口 / E2E / 视觉回归 / 兼容性 / 性能 / 部署验收 |
| 总量 | 61 个用例（P0 阻断 21 / P1 28 / P2 12） |

---

## 1. 测试范围

### 1.1 纳入

| 需求 | 重点 |
|---|---|
| FR-6.4.1 研究概览加载态 | 序号隔离后 5 个加载器的交错场景 |
| FR-6.4.2 实时报价通道 | 依赖缺失/存在两态、握手、订阅、帧、degraded |
| FR-6.4.3 页签溢出 | 4 个一级页 × 4 档宽度 × 键盘可达 |
| FR-6.4.4 详情头降噪 | 三档宽度单行、对比度、暗色 |
| FR-6.4.5 新鲜度双向判定 | 基准过期、从未成功、真实陈旧三态 |
| FR-6.4.6 告警文案 | 弱口令 / 强口令两态 |
| FR-6.4.7 依赖门禁 | lock 一致性、自检 fail 计数 |
| FR-6.4.8 视觉回归 | 场景有效性、基线可信 |

### 1.2 不纳入（回归覆盖即可）

策略计算逻辑、回测引擎、数据采集任务、AI 评估口径、移动端布局重构（v6.6）、一级导航合并（v6.5）。

---

## 2. 测试策略

| 层级 | 手段 | 覆盖目标 | 执行时机 |
|---|---|---|---|
| 单元 | `pytest` | 业务函数、状态机、纯函数 | 每次提交 |
| 接口 | `pytest` + `httpx` / `curl` | 状态码、字段、降级 | 每次提交 |
| E2E | Playwright（`tests/e2e/`） | 5 条真实用户路径 | 合入前 |
| 视觉 | `visual_regression.py` | 11 场景像素比对 | 合入前 + 发布前 |
| 兼容 | 4 档宽度 × 2 主题 | 布局与对比度 | 发布前 |
| 部署 | 手工清单 + 脚本 | ops 真实环境 | 发布时 |

原则：**每个 P0 必须有"改前必失败、改后必通过"的用例**，否则视为无用例。

---

## 3. 单元与接口用例

### 3.1 FR-6.4.1 加载态（4 例）

| ID | 用例 | 步骤 | 期望 | 级别 |
|---|---|---|---|---|
| U-101 | 单加载器正常复位 | 调 `loadStrategies()`，mock 200 | `strategiesLoading=false`，列表 4 条 | P0 |
| U-102 | 交错触发不卡死 | 依次触发 strategies → variants → customs，再让 strategies 后返回 | strategies 的 loading 必须复位（**改前此项必失败**） | P0 |
| U-103 | 失败落错误态 | mock 500 | `strategiesError=true`，`loading=false` | P0 |
| U-104 | 超时退出 | mock 挂起 20s | ≤15s 退出加载态并给超时文案 | P1 |

### 3.2 FR-6.4.5 新鲜度（5 例）

| ID | 用例 | 步骤 | 期望 | 级别 |
|---|---|---|---|---|
| U-201 | 基准过期不判 fresh | `expected_latest = today-30d`，资产日期 = `today-30d` | 状态 `unknown`，`calendar_stale=true`（**改前判 fresh**） | P0 |
| U-202 | 真实陈旧 | 资产日期 = `today-95d` | `stale` | P0 |
| U-203 | 从未成功 | `record={}` 或 `last_success=null` | `missing` + `never_succeeded=true` | P1 |
| U-204 | 正常新鲜 | 资产日期 = 最近交易日 | `fresh` | P1 |
| U-205 | 日期解析容错 | `20260716` / `2026/07/16` / `null` | 分别解析成功 / 成功 / `missing`，不抛异常 | P2 |

### 3.3 FR-6.4.6 告警（2 例）

| ID | 用例 | 期望 | 级别 |
|---|---|---|---|
| U-301 | 弱口令 `admin` | 文案 `管理员密码仍为默认口令 (admin)`，**不含** `admin123` | P0 |
| U-302 | 强口令 | 不产生告警 | P1 |

### 3.4 FR-6.4.2 / 6.4.7 环境与 WS（5 例）

| ID | 用例 | 期望 | 级别 |
|---|---|---|---|
| U-401 | `websockets` 缺失 | 自检 fail +1，日志给修复命令 | P0 |
| U-402 | 依赖齐全 | 自检 ok，WS 路由已注册 | P0 |
| U-403 | `test_deploy_env` | 三包版本与 lock 一致 | P0 |
| U-404 | `ws_probe.py` 真实探测 | 输出 `OK {...}` | P0 |
| U-405 | 非法订阅 | `{"subscribe":[]}` → `{"type":"error"}`，连接不断 | P1 |

### 3.5 接口回归（8 例，抽样）

| ID | 接口 | 断言 |
|---|---|---|
| A-01 | `GET /api/health` | 200，`version=6.4.0` |
| A-02 | `POST /api/login` | 200，`data.access_token` 存在 |
| A-03 | `GET /api/strategies` | 200，4 条，含 `multi_factor` |
| A-04 | `GET /api/strategies/variants` | 200 |
| A-05 | `GET /api/strategies/custom` | 200 |
| A-06 | `GET /api/meta/freshness` | 200，`count=15`，字段含 `never_succeeded` |
| A-07 | `GET /api/reliability/freshness` | 200，含 `calendar_stale` |
| A-08 | `GET /api/system/keys`（无密码） | 401/403，不得 200 |

---

## 4. E2E 用例

统一前置：1440×900，Chromium，管理员登录（`.login-btn:not(.login-guest-btn)`）。

### E-01 研究概览可用（P0）

```
登录 → 侧栏「策略研究」 → 断言无骨架屏
断言 1：t+3s 内渲染 4 个策略项
断言 2：文档中 [class*="skeleton"] 数量 = 0
断言 3：可点击第一个策略，参数面板出现
```

**改前实测**：t+25s 仍有 9 个骨架节点；三接口均 200 且耗时 7/13/14ms。

### E-02 加载态不因切页卡死（P0）

```
进入研究概览 → 依次点「研究概览 / 量化研究 / 策略管理 / 策略回测 / 回测记录」
→ 每步停留 800ms → 返回「研究概览」
断言：出现策略列表，无骨架屏残留
```

### E-03 页签溢出可达（P0）

```
登录后不缩放窗口
对每个一级页断言：
  智能评估：.qc-top-tab 数量 7；.qc-top-tabs-btn 数量 ≥2；.qc-top-tabs-more 存在
  系统配置：7；短线复盘：6；策略研究：5
点击「更多 ▾」→ 下拉列出被裁页签 → 点最后一项 → 断言该页签 is-active
```

**改前实测**：切换后 `btns=0 / more=false`（溢出 264px）；手动 resize 后立刻 `btns=3 / more=true` —— 改后此用例必须在**不 resize** 的情况下通过。

### E-04 键盘可达（P1）

```
聚焦第一个页签 → 按 → → 断言容器 scrollLeft > 0
按 Tab 遍历 → 断言焦点可到「更多」按钮 → Enter 展开
```

### E-05 详情头降噪（P0）

```
策略总览 → 量化日历 → 点首条 → 详情弹窗
断言 1：.detail-header 的 background-image 为 none（或非 linear-gradient）
断言 2：标题色对比度 ≥4.5:1
断言 3：.dh-meta 单行（无折行元素，逐项 clientHeight 一致）
```

### E-06 陈旧横幅（P0）

```
登录进入首页
断言 1：顶部存在陈旧横幅
断言 2：横幅文案匹配 /数据停在 \d{4}-\d{2}-\d{2}，已 \d+ 天/
断言 3：横幅日期与 /api/reliability/freshness 的 expected_latest 一致
```

**改前实测**：`expected_latest=2026-07-16`，`calendar_views` 却判 `fresh`；`/api/meta/freshness` 15/15 全 stale。

### E-07 WS 实时帧（P0，脚本级）

```bash
python scripts/ws_probe.py http://127.0.0.1:8000/ <token>
# 期望: OK {"type":"quotes",...}
```

补充界面断言：盘中打开量化日历，数据区无"延迟数据"角标；断开 WS 后角标出现。

### E-08 旧功能回归（P1）

| 路径 | 断言 |
|---|---|
| 登录 / 访客登录 | 均可进入；访客只见 5 个菜单 |
| 量化日历 → 股票池 | 列表加载，K 线渲染 |
| 智能评估 → 概览 | KPI 卡、最近评估有数据 |
| 短线复盘 → 概览 | 10s 内出数据或显式降级 |
| 系统状态 → 状态概览 | 自检区块可读，无"尚未生成"矛盾 |
| Ctrl+K 命令面板 | 可打开、可搜索、可跳转 |

---

## 5. 视觉回归

| 项 | 要求 |
|---|---|
| 场景数 | 11（login / strategies_desktop / calendar / stock_detail / command_panel / strategies_mobile / dark_theme / ai_overview / research / ops_status / system_config） |
| 有效性前置 | 每场景截图前断言目标页签 `is-active`；`dark_theme` 断言 `dataset.theme === 'dark-pro'` |
| 基线 | 修正脚本后重拍；旧基线归档 `baseline-v6.3.6/` |
| 判定 | 像素差 >0.5% 判失败，需人工确认后更新基线 |
| 人工抽检 | 11 张逐一比对，**必须确认无重复图、无主题错配** |

> 当前脚本产出的 `calendar.png` 与策略总览同图、`dark_theme.png` 为浅色 —— 这属于**门禁失效**，本版必须先修脚本再谈基线。

---

## 6. 兼容性矩阵

| 宽度 | 场景 | 判定点 |
|---|---|---|
| 1920 | 全页面 | 无过度拉伸，内容最大宽生效 |
| 1440 | 全页面 | **页签溢出控件必须已激活**；详情头元信息单行 |
| 1280 | 全页面 | 同上；确认溢出控件在更窄下仍可达 |
| 1024 | 关键页（总览/研究/系统） | 布局不重叠、无横向滚动条 |
| 390 | 登录 / 总览 / 日历 | 导航可用、卡片不溢出（移动重构留 v6.6，此处只保不破） |

主题：`gold`（默认）+ `dark-pro`，两套下均检查对比度与重色块。

---

## 7. 性能基线

| 指标 | 采集方式 | 基线（v6.3.6 实测） | v6.4 门槛 |
|---|---|---|---|
| `/api/health` | curl `time_total` | <10ms | ≤50ms |
| `/api/strategies` | curl | 7ms | ≤100ms |
| `/api/strategies/variants` | curl | 13ms | ≤150ms |
| `/api/strategies/custom` | curl | 14ms | ≤150ms |
| 研究概览可用时间 | Playwright | 永不（骨架屏） | ≤3s |
| 首页可交互 | Playwright | 未测 | ≤2s |
| 页签重算开销 | Performance API | 无 | 单次 <16ms |

> 注意：研究页修复后"可用时间"从"无穷"变为"≤3s"，是本版最显著的用户体感变化。

---

## 8. 安全与权限

| ID | 检查 | 期望 |
|---|---|---|
| S-01 | 未登录访问 `/api/strategies` | 401 |
| S-02 | 访客访问管理员接口 | 403 |
| S-03 | 启动日志不含明文口令 | 只含用户名字与"默认口令"标识 |
| S-04 | 启动日志不含密钥 | 检查 `KEY_VIEW_PASSWORD` / token 不落日志 |
| S-05 | WS 无 token 握手 | 拒绝（403/4401），不得接受订阅 |

---

## 9. 部署验收（ops）

按序执行，任一失败即阻断发布：

| # | 检查 | 命令 | 期望 |
|---|---|---|---|
| 1 | 版本 | `curl --noproxy 127.0.0.1 :8000/api/health` | `version=6.4.0` |
| 2 | 自检 | 启动日志 | `fail=0`，`warn` 逐条有解释 |
| 3 | 依赖 | `.venv/Scripts/python.exe -m pip list \| grep -E "websockets\|wsproto"` | 13.1 / 1.3.2 |
| 4 | WS | `python scripts/ws_probe.py http://127.0.0.1:8000/ <token>` | `OK` |
| 5 | 研究页 | 浏览器 | ≤3s 出 4 策略 |
| 6 | 页签 | 1440 不 resize | 7/7 可达 |
| 7 | 陈旧横幅 | 首页 | 出现且数字正确 |
| 8 | 详情头 | 打开个股详情 | 无实心金 |
| 9 | 回滚演练 | 回退 `d45e6c57` + 重启 | 5 分钟内恢复 |

### 9.1 验收记录（2026-10-19 实测，ops = `quant-calendar-ops`）

| # | 检查 | 实测证据 | 结论 |
|---|---|---|---|
| 1 | 版本 | `{"status":"ok","version":"6.4.0","message":"量化选股日历服务运行中"}` | ✅ |
| 2 | 自检 | `启动自检通过: ok=9 warn=1 fail=0`；唯一 warn 为「feishu 未配置 webhook（可选）」；两条弱口令告警回传**真实值**（admin 命中 `admin`、guest 命中 `guest`） | ✅ |
| 3 | 依赖 | `websockets 13.1` / `wsproto 1.3.2` / `uvicorn 0.53.0` / `pydantic 2.13.5` / `anyio 4.15.1`；`pip check` 无冲突 | ✅ |
| 4 | WS | `scripts/ws_probe.py` → `OK type=quotes degraded=False {...600519.SH 贵州茅台...}` | ✅ |
| 5 | 研究页 | `research-overview ready 1.81s`，卡片 `策略总数:4 / 微调策略:0 / 自定义策略:0 / 市场复盘:4 / 研究历史:0` | ✅ ≤3s，4 策略 |
| 6 | 页签 | 1440 不 resize：`total=7 visible=4 overflow=True more=['用户与权限','通知中心','关于'] reachable=7/7` | ✅ |
| 7 | 陈旧横幅 | 文案 `行情数据停在 2026-07-16，已 95 天未更新`，高度 `36px`；API `expected_latest=2026-07-16 / expected_age_days=95 / calendar_stale=true / unknown_count=3 / stale_count=6 / expected_source=calendar` | ✅ |
| 8 | 详情头 | `bgImage=none / bgColor=rgb(255,255,255) / color=rgb(34,32,28) / border=1px rgb(233,230,221) / noWrap=nowrap` | ✅ |
| 9 | 回滚演练 | `scripts/rollback_drill.py` 两轮：回滚→6.3.6 **54.453s / 39.215s**，恢复→6.4.0 **56.001s / 45.548s**；两端健康响应分别为 `version=6.3.6`、`version=6.4.0`；演练后 ops=6.4.0 且 8000 在监听 | ✅ 最差 56.0s，预算 300s 的 1/5 |

第 9 项取证说明：首轮手工演练只有日志时间戳（16:50:12 回滚完成、17:02:57 恢复完成），
只能证到「往返约 13 分钟」，证不到单段秒数；且当时用 `cp -r` 到已存在目录，
产生了 `backend/backend`、`frontend/frontend`、`docs/docs` 三层嵌套（目录里躺着的
还是旧版拷贝）。现固化为 `scripts/rollback_drill.py`：白名单目录 + `robocopy /MIR`
镜像、`finally` 无条件恢复、秒级耗时与健康响应写入
`ops/logs/rollback_drill_<ts>.json`。

---

## 10. 缺陷分级与出口

| 级别 | 定义 | 处理 |
|---|---|---|
| Blocker | 核心任务不可用 / 数据错判 | 必须修复，否则不发布 |
| Critical | 主要功能受损、无绕过 | 必须修复 |
| Major | 功能可用但明显异常 | 本版修复或书面接受 |
| Minor | 视觉/文案瑕疵 | 可延至 v6.5 |

**发布出口条件**：

- [ ] P0 用例 21 条全通过，且每条都有"改前失败"的证据
- [ ] `pytest tests/` 全绿（含新增 5 个用例）
- [ ] 视觉回归 11 场景有效，基线已重建
- [ ] 兼容性矩阵 4 档 × 2 主题无 Blocker/Critical
- [ ] 部署验收 9 项全通过
- [ ] 遗留 Major 缺陷 ≤2 条且有书面接受记录

---

## 11. 测试数据与注意事项

1. **管理员口令是 `admin`**（不是 `admin123`）。任何按 `admin123` 写的脚本都会静默失败——本次走查已踩过。
2. 交易日历停在 **2026-07-16**，构造"新鲜"场景需注入 `calendar` 参数，不要依赖真实数据。
3. 报价源东财 `82.push2.eastmoney.com` 在本机不可达（代理/直连均失败），WS 帧会 `degraded=true`；**这是环境限制，判 WS 通过看"是否收到帧"，不看 data 是否非空**。
4. 生产库 `data/app.db` 全程只读，测试不得写入；需要构造数据用临时库。
5. `scripts/` 下存在 `_dbg3.py`、`_tmp*.py` 等临时脚本，测试时不要误引用。
