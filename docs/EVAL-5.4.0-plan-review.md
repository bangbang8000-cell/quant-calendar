# 5.4.0 开发计划评审 + 三条补充需求评估（EVAL-5.4.0-plan-review）

- **评估基线**：quant-calendar v5.4.0（dev:8001 / ops:8000 双端运行中，tag v5.4.0）
- **评估日期**：2026-09-08（夜间复核）
- **评估对象**：DEV-PLAN-v5.4.0.md（重点清单 + 多时点评估 + 存储 + 界面 + 推送）
- **用户补充要求**：① 全股票分钟级数据（打开时懒加载，不预加载）② 重点评估支持股票弹窗 + 自选/入池状态（历史含入池/出池时间，按日入池算）③ 重点跟踪界面美化、切合主题颜色
- **结论前置**：**三条补充要求已在 commit be9eac3（FR-5.4.8/5.4.9/5.4.10）实现并双端部署**；但评审发现 **2 处生产可用性问题**（分钟K线 live 失败、入池历史接口恒空），须修复后才能算真正可用。**当前状态 = 已开发未验收，不建议直接发版。**

---

## 0. 现状核对：计划 vs 现实（重要）

| 项 | 计划文档（19:50） | 实际代码（23:31） | 状态 |
|----|------------------|------------------|------|
| 5.4.0 范围（清单/多时点/存储/界面/推送） | 决策锁定，待用户确认后 TDD 实施 | T1~T9 全部落地，commit 链 5c66503→d563789 | ✅ 已实现 |
| 用户要求 ① 分钟级数据懒加载 | 文档未收录（仅 5.4.2 提及 60/15min 另行规划） | be9eac3 FR-5.4.8：15/30/60min 三源 + 弹窗按需加载 | ⚠️ 已实现但 live 失败 |
| 用户要求 ② 弹窗 + 自选/入池状态 + 入池历史 | 文档未收录 | be9eac3 FR-5.4.9：focus_pool_history + /pool 端点 + 徽标 | ⚠️ 已实现但入池历史恒空（bug） |
| 用户要求 ③ 界面美化 + 主题 | 文档未收录 | be9eac3 FR-5.4.10：focus-row 卡片化 + 主题令牌 | ✅ 已实现，令牌齐全 |
| 测试 | 计划含 test_focus_* | test_kline_minute_v540 / test_focus_pool_history / test_focus_api 等 23 项实测通过 | ✅ 单测通过（但 mock 掩盖 2 处 live 缺陷） |
| 服务部署 | 待实施 | dev:8001 + ops:8000 均 v5.4.0 运行中 | ✅ 已部署 |
| Git 推送 | — | dev master **ahead 3**（be9eac3 + 2 修复未 push）；tag v5.4.0 本地存在 | ⚠️ 未推送远端 |

> **说明**：docs（DEV-PLAN/PRD v5.4）未收录 FR-5.4.8/5.4.9/5.4.10 三条用户补充需求，但代码已在 be9eac3 落地。文档与代码不同步，评审后应补写文档。

---

## 1. 用户要求 ①：全股票分钟级数据（打开时懒加载）

### 1.1 需求解读
「给所有股票接入分钟级别数据，但是不提前加载，打开时候再加载」= **按需加载**（on-demand lazy loading）：分钟数据不预载入库，用户打开某只股票的详情弹窗时再实时拉取。

### 1.2 评估结论：方案合理，实现基本到位，但 live 不可用

**合理性（量化视角）**：
- 「不提前加载」正中要害——PRD §0.4 已论证全市场分钟级**预加载**不可行（5min 全市场 ≈ 6480 万行/年 ≈ 1.6GB parquet，拉取受 tushare 每分钟限额约束需数小时）。改为「打开某只股票再拉」= 单股单次请求，数据量/成本收敛到极小。
- 粒度选择 15/30/60min 合理：规避 T+1 制度 + 成本吞噬 + 噪声（分钟级信号的三大否决项）；作为「盘中 K 线展示/参考」而非「日内交易信号」，符合 PRD 边界。1min/5min 刻意不做策略信号，只可能做纯展示（数据源门槛更高：tushare 5min 需积分 ≥5000，1min 更高）。
- 三源热备（sxsc stk_mins / tushare pro_bar / akshare min_em）设计正确，符合项目「三源自动 fallback」惯例。

**实现核对（已实证）**：
- 后端 `data_sources/_manager.py`：`MINUTE_PERIODS = ('15min','30min','60min')`，三源各有分钟分支（stk_mins / pro_bar / stock_zh_a_hist_min_em），`_kline_cache` TTL=300s。
- 前端 `app-logic.js`：`klinePeriods` 含 60/30/15 分钟 + 日/周/月/季/年；`loadStockKline(period)` 仅在弹窗打开 / tab 切换时调用（`markKlineLoaded` 防重复）。
- API：`GET /api/market/kline/{code}?period=60min&limit=60` 已通。

**⚠️ 关键问题：live 调用失败（双端一致）**
- 实测 `curl /api/market/kline/601985.SH?period=60min` → `{"success":false,"message":"获取K线数据失败"}`（dev:8001 与 ops:8000 均如此）。
- 根因（后端直接调用定位）：
  - **sxsc/tushare stk_mins 频率超限**：`您访问接口(stk_mins)频率超限(1次/分钟)` —— tushare 对分钟接口限 **1 次/分钟**，对用户/匿名高频打开多只股票会连续撞限。
  - **akshare 东财源连接被断开**：`('Connection aborted.', RemoteDisconnected(...))` —— 本环境东财反爬拦截。
- 影响：弹窗打开分钟 K 线 → 加载失败 → 前端报「获取K线数据失败」。**功能形同虚设，必须修复。**

### 1.3 修复建议（供评审后执行）
1. **限速适配**：分钟接口命中「1 次/分钟」限频时，后端串行化 + 排队（同进程内按 code 锁 / 延迟重试），或前端打开弹窗时串行加载并提示「分钟数据限频加载中…」。
2. **akshare 备源加固**：东财 min_em 失败时回退新浪源（日线已有新浪回退先例 `_SINA_STOCK_COLUMN_MAP`，分钟可对齐到某单一源如腾讯/新浪分钟）。
3. **失败降级**：分钟数据失败 → 自动降级日线并明确标注「分钟数据暂不可用，展示日线」（不静默失败）。
4. **集成测试补缺**：现有 test_kline_minute_v540 是 mock 数据源验证（纯逻辑），需补 1 个「数据源真实可达」冒烟（或标记 xfail 记录 live 现状），避免测试全绿但线上不可用的落差。

---

## 2. 用户要求 ②：重点评估股票弹窗 + 自选/入池状态（含历史时间，按日入池算）

### 2.1 需求解读
1. 重点评估（重点跟踪）里的股票行支持「打开弹窗」——即点某只股票弹出详情（K线/评估/问股）。
2. 显示该股票是 **自选** 还是 **入池** 状态。
3. **历史**要含 **入池时间、出池时间**，**按日入池算**（= 入池/出池以交易日为粒度记录，连续在池日合并为区间，间断另起新段）。

### 2.2 评估结论：设计正确，接口与 UI 到位，但入池历史有生产 bug

**设计正确性**：
- 「按日入池算」= 从 `views_aggregator.daily_data`（每交易日池股票集合）回溯单股在池区间。`compute_pool_history` 纯函数实现：`first_appear` / `last_appear` / `pooled_days` / `pool_entries[{start,end,days}]`（连续在池合并、间断分段）——口径符合需求，单测逐段验证通过（含 2 段入池区间用例）。
- 弹窗：focus-view 行内「K线详情」按钮 → `openStockDetail(code)` → `state.showStockDetail` → 全局股票详情弹窗（kline/ai/chat 三 tab + 分钟/日/周/月周期切换）。✅ 已通（依赖 app-logic 既有弹窗能力）。
- 状态徽标：行内 ⭐自选 / 🆕入池 / 持仓 三徽标，来源由 `/api/focus/stock/{code}/pool` 返回（`source: watchlist|new_pool|both|none`）。✅ 已通（live 实测 000630.SZ 正确标 new_pool）。

**⚠️ 生产 bug：`load_pool_history` 恒返回空**（影响「入池时间/出池时间」展示）
- 根因：`focus_pool_history.py` 里 `import views_aggregator` 拿到的是**模块**，再 `getattr(views_aggregator, 'daily_data', {})` 取**模块级属性**——但 `daily_data` 是模块内**单例实例** `views_aggregator = ViewsAggregator()` 的**实例属性**，模块本身没有 `daily_data`。实测 `hasattr(views_aggregator, 'daily_data') == False` → 永远取到 `{}` → 历史恒空。
- 对照：`focus_list.py` 用 `from views_aggregator import views_aggregator`（拿**单例实例**）→ 新入池判断 live 正常。**同样的入口，一个对、一个错**。
- 实测：`/api/focus/stock/000630.SZ/pool`（当日新入池）返回 `first_appear:null, pooled_dates:[]`；watchlist 股票同样恒空。**用户在弹窗里看不到任何入池/出池历史。**
- 单测为何没抓到：`test_focus_pool_history.py` 只测纯函数 `compute_pool_history`（喂假数据）+ `test_load_pool_history_uses_aggregator` **monkeypatch 掉** 了 `fph.views_aggregator`，从未验证真实 `load_pool_history()` 的模块→实例接线。
- 修复：`load_pool_history` 改为 `from views_aggregator import views_aggregator`（与 focus_list 一致），并补一个**不 mock 接线**的集成测试（实例级 daily_data 非空时能回溯出区间）。

### 2.3 附带建议
- 弹窗内除 K线 tab 外，可在详情区叠加「入池历史」展示（首入/最近在池/区间列表/是否当前在池），与行内徽标呼应（现只在行内展开区显示，弹窗内未显示）。
- 「自选」按用户隔离、「入池」是全局池——弹窗/徽标需明确标注口径（匿名视角=全用户自选 ∪ 新入池；登录=本人自选 ∪ 新入池），避免歧义。当前 API 已含 `user` 字段，前端可展示。

---

## 3. 用户要求 ③：重点跟踪界面美化 + 切合主题颜色

### 3.1 评估结论：✅ 已实现且符合设计系统

- `focus-view.js` 行结构改为**卡片化**：`padding: var(--sp-3)` + `background: var(--surface)` + `border + border-radius: var(--r-md)` + `box-shadow: var(--shadow-sm)`；hover 提亮 `border-color: var(--primary-color-dark)` + `shadow-md`；展开态 `focus-row-expanded` 高亮；方向标签圆角胶囊、徽标间距等。
- **全部使用设计系统令牌**（DESIGN-SYSTEM.md / tokens.css）：`--surface / --border-color / --r-md / --shadow-sm / --shadow-md / --primary-color-dark / --bg-tertiary / --sp-2/3 / --font-* / --transition-fast / --r-full` —— 逐项 grep tokens.css **全部存在**（仅 `--bg-hover` 未定义但新代码已不依赖，旧 hover 样式被替换）。
- 令牌驱动 → 7 套主题（data-theme）自动适配亮暗，符合「令牌纪律 + 主题切合」要求。
- 徽标用 Element Plus el-tag（warning=自选 / success=入池 / danger=持仓），与全站组件风格一致。

### 3.2 建议（锦上添花，非阻塞）
- 今日概览卡的 5 档动作分布可用 el-progress 细条或颜色图例增强视觉层级（现为 tag 平铺）。
- 行内「K线详情」按钮建议改为图标按钮（图表 icon），与 ECharts 弹窗入口语义更贴。

---

## 4. 总体评估结论

### 4.1 计划本身（DEV-PLAN-v5.4.0）评审
- 设计决策 D1~D9 质量高：**只存客观评估事实、动作不入库**（动作=评分×持仓实时派生）是正确架构；纯函数清单/动作/回溯可单测；复用 eval_track/winrate/FeishuPusher/jobs 零新增依赖。
- 边界声明（不做全市场分钟级信号 / 不做 300 人工池 / 不做实盘下单）与量化纪律一致（T+1 + 成本×3 + PIT 样本外）。

### 4.2 三条补充需求的整体评估

| 要求 | 合理性 | 实现程度 | 生产可用性 | 结论 |
|------|--------|---------|-----------|------|
| ① 分钟级数据懒加载 | ★★★★☆（按需加载正确，规避全市场预载） | 代码+UI+API 到位 | ❌ live 失败（限频+断连） | 需修数据源限速/降级 |
| ② 弹窗 + 自选/入池状态 + 入池历史 | ★★★★★（按日入池口径正确） | 弹窗✅ 徽标✅ 历史接口⚠️ | ❌ 入池历史恒空（模块/实例 bug） | 需修 load_pool_history 接线 |
| ③ 界面美化 + 主题 | ★★★★★ | ✅ 令牌化卡片 + 徽标 | ✅ 双端已生效 | 无阻塞项 |

### 4.3 必须处理的问题（评审决策清单）

**P0（阻塞验收，须修复后重测）**
1. 分钟 K 线 live 失败：tushare stk_mins 1 次/分钟限频 + akshare 东财断连 → 需限速排队 / 备源回退 / 失败降级日线，并补真实数据源冒烟测试。
2. `load_pool_history` 模块级引用 bug → 入池历史恒空 → 改为实例引用 + 补非 mock 接线测试。

**P1（发布前）**
3. Git 未推送：dev master ahead 3（be9eac3 + 5d96878 + fd112d6），tag v5.4.0 未 push → 评审通过后 push + 打 tag。
4. 文档不同步：DEV-PLAN/PRD v5.4 未收录 FR-5.4.8/5.4.9/5.4.10 → 补写文档（本评审通过后回填）。
5. ops 副本 git 元数据混乱（ahead 20/behind 293，cross-tree checkout 所致）——文件已同步，但建议统一走 `git fetch + reset --hard origin/master` 规范化（ops 本身禁提交）。

**P2（可选增强）**
6. 弹窗内叠加「入池历史」展示（现仅在行内展开区）。
7. 概览卡动作分布可视化增强（进度条/图例）。
8. 1min/5min 纯展示（更高数据源门槛，需用户明确要才做）。

---

## 5. 后续开发建议（评审通过后按序执行）

按 TDD + 每任务独立 commit（沿用 5.4.0 纪律，本次为 5.4.0 修复段，版本建议 bump 到 **5.4.1**）：

| # | 任务 | 改动 | 测试 | 门禁 |
|---|------|------|------|------|
| R1 | 分钟K线 live 可用化（限速排队 + akshare 回退 + 失败降级日线） | `_manager.py` / `market_data.py` | test_kline_minute_v540 扩展 + 真实可达冒烟 | focus 模块 ≥70% |
| R2 | 修复 load_pool_history 接线（实例引用）+ 非 mock 集成测试 | `focus_pool_history.py` / test_focus_pool_history.py | 实例级 daily_data 回溯 | focus 模块 ≥70% |
| R3 | 弹窗内叠加入池历史展示 + 概览卡动作分布可视化 | `focus-view.js` / app-logic.js / layout.css | test_frontend_focus.py 扩展 | 前端 0 pageerror |
| R4 | 文档同步（DEV-PLAN/PRD 回填 FR-5.4.8/9/10 + 本评审结论） | docs/*.md | — | — |
| R5 | bump 5.4.1 + 全量回归 + ruff + 覆盖率门禁 + 双端重启冒烟 + push + tag | main_new.py | 全量 -m not e2e 全绿 | ≥40% 总 / focus ≥70% |

---

## 6. 请用户确认的评审点

1. **是否同意先修 P0 两项（分钟K线 live + 入池历史）再发版 5.4.1**？（不建议在 2 处 live 缺陷下直接交付）
2. **分钟级粒度**：15/30/60min 是否满足预期？是否需要再上 5min（更高数据源门槛，仅展示）？1min 建议不做。
3. **入池历史口径**：按日入池（交易日粒度，连续合并分段）是否符合「入池时间/出池时间」预期？是否需要跨年回溯（受 consensus 数据文件历史深度限制，现随文件长度而定）？
4. **界面美化方向**：卡片化 + 主题令牌 + 徽标是否满意？如需更重的视觉效果（渐变/进度条/图表化概览）可在 P2 追加。
5. **确认后**：按 §5 顺序执行（R1→R5），每步独立 commit + 测试 + 门禁，完成后推送 v5.4.1。

---

## 7. 评审决策记录（2026-09-09 问卷确认，已批准开发）

| # | 决策项 | 锁定结论 |
|---|--------|---------|
| Q1 | P0 缺陷处理 | **先修 P0 两项（分钟K线 live 可用化 + 入池历史接线），再发版 5.4.1** |
| Q2 | 分钟粒度与数据源 | **优先试券商版 tushare（sxsc-tushare）拉分钟线；15/30/60min 全档保留；数据源选择做成项目配置项可切换** |
| Q3 | 入池历史口径 | **按日入池、连续在池日合并分段**（首入/最近在池/多段区间），随共识数据文件历史长度 |
| Q4 | 界面美化 | **要更重的视觉增强**（概览卡动作分布可视化、弹窗叠加入池历史、行内图标按钮等） |
| Q5 | 执行方式 | **R1→R5 全量执行，bump 5.4.1，每任务独立 commit + TDD + 门禁** |

**状态**：用户已批准，按 §5 R1→R5 顺序开发。

