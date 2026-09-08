# 量化选股日历 股票池逻辑修复 开发计划 (DEV-PLAN v5.3.14)

- **文档版本**: v1.0(正式版, 待审批)
- **日期**: 2026-09-07
- **产品基线**: v5.3.13(HEAD 1d78f99, APP_VERSION 5.3.13, 全量 2937 用例)
- **配套**: TEST-PLAN-STOCKPOOL-v5.3.14.md(测试计划, 独立文档) / EVAL-STOCKPOOL-v5.3.13.md(评估报告)
- **开发纪律**: TDD 四步(先写失败测试 → 实现 → 跑绿 → commit); Conventional Commits + v5.3.14 前缀; 单任务改动 ≤3 文件/次; 前端一致性门禁 + 全量回归

---

## 0. 基线事实(2026-09-07 实测)

| 项 | 值 |
|---|---|
| 全量测试 | 2937 collected(-m not e2e) |
| 核心数据流 | data_parser(单一源) → views_aggregator(日/周/月/年视图+状态) → API(/api/view/*, /calendar/*/compare) → 前端 |
| 已知缺陷 | P0×2(compare 500 / 周视图口径不一致) + P1×2(节假日污染 / 年视图截断) + P2×2(周末运行 / 滞后提示) |
| 交易日判断 | 前向填充仅 weekday()<5, 不识别节假日(缺陷根因之一) |
| 策略数据 | 4 策略(data_parser STRATEGY_CONFIG) + 引擎持仓 overlay(data/holdings/{date}/*.csv) |

---

## 1. 任务分解(T-STOCKPOOL.x)

> 任务编号规则: T-SP.<严重度>.<序号>; 按 P0→P1→P2 顺序实施, 每个修复独立可测可发布。

### 1.1 P0-1 修复多策略并集/交集对比 (T-SP.P0.1)

**根因**: /calendar/{date}/compare 的 stock_sets = {s: set(data[stocks])}, 而 get_holdings_by_date 返回 stocks 为 [{code,name}] dict 列表, set(dict) 不可哈希 → TypeError。前端无任何 compare 调用点。

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-SP.P0.1.1 | 后端修复: stock_sets 改 {s: set(x[code] for x in data[stocks] if x.get(code))}; 空策略集合防护(set.intersection 空参安全); 返回含代码列表 | backend/api/v1/calendar.py | 0.5d |
| T-SP.P0.1.2 | 前端「策略对比」入口: 日历页加按钮(仅日/周视图可用), 弹窗展示 4 策略两两交集/并集/独有 + 全量交集(表格 + 计数 + 空态) | frontend/js/components/calendar-page.js、i18n 5 语 | 1.5d |

**验收**: /compare 返回 200 且交集/并集/独有计数正确; 前端弹窗可选策略、空态友好; 全量回归绿。

### 1.2 P0-2 统一周视图「上一周」口径 (T-SP.P0.2)

**根因**: get_week_view 用 prev_week_end = curr_idx - len(week_dates) - 1 且 prev_week_start = max(0, prev_week_end - 5), 而 calculate_status(week) 用 prev_week_start = max(0, curr_idx - len(week_dates) - 5) 且 prev_week_end = curr_idx - len(week_dates)(切片到 +1) — 两公式对同一 date 产生不同 prev 集合(实测 8/20~27 vs 8/21~28)。

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-SP.P0.2.1 | 抽取单一辅助 _prev_week_dates(date) -> List[str](内部统一公式: 当前周长度 N → 前 N+1 个交易日窗口), get_week_view 与 calculate_status(week) 共用; 删除两处内联公式 | backend/views_aggregator.py | 0.5d |

**验收**: 周视图已出池列表 = calculate_status(week)=='out' 的集合; 两处 prev 一致(守护测试断言)。

### 1.3 P1-3 前向填充识别法定节假日 (T-SP.P1.3)

**根因**: _carry_forward_to_today 仅 d.weekday() < 5 判断工作日, 不识别 A 股法定节假日 → 国庆/春节等休市日被填充为可看日期; 长假 > CARRY_FORWARD_MAX_GAP_DAYS(10) 则完全不填充。

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-SP.P1.3.1 | 交易日历接入: 新增 backend/stock_calendar.py, is_trade_day(date) -> bool(优先三源 trade_cal/交易日历, 缓存按年, 故障回退 weekday); _carry_forward_to_today 只在真实交易日填充 | backend/data_parser.py、backend/stock_calendar.py(新) | 1d |
| T-SP.P1.3.2 | 长假超限降级: 当 gap > 上限时, get_holdings_by_date 对目标日期返回 {inherited:false, reason:数据未更新} + 前端 note 提示数据未更新(超过 10 天) | backend/data_parser.py、frontend data.js | 0.5d |
| T-SP.P1.3.3 | 交易日缓存 TTL: 结果按年缓存(内存), 数据源不可达时回退 weekday 判断 + 明确标注降级 | backend/stock_calendar.py | 0.5d |

**验收**: 国庆期间(10/1~10/8)不填充; 春节长假后首日有提示; 缓存 TTL 正确; 数据源故障降级不抛错。

### 1.4 P1-4 年视图已出池不截断 (T-SP.P1.4)

**根因**: get_year_view 用 for code in sorted(out_codes)[:200] 硬截断, 前端计数基于截断列表 → out 真实数失真。

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-SP.P1.4.1 | 移除 [:200] 截断, 年视图出池全量返回; 前端长列表分页(el-pagination, 复用板块资金分页模式); total=真实总数 | backend/views_aggregator.py、frontend calendar-page.js | 1d |

**验收**: 年视图 out 全量返回且分页; total=真实 out 数; CSV 导出完整。

### 1.5 P2-5 引擎周末运行防护 (T-SP.P2.5)

**根因**: 策略引擎周末也运行, 写入按今天建的目录(data/holdings/2026-09-05/ 等), 但生成数据内容日期滞后(7/7/7/8) → 目录名与内容日期错位 + 历史被覆盖风险。

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-SP.P2.5.1 | strategy_governance._generate_holdings 入口: 非交易日(周末/节假日, 复用 T-SP.P1.3.1 is_trade_day)跳过或 as_of=最近交易日; 写目录用 as_of 日期而非 datetime.now() | backend/strategy_governance.py | 0.5d |
| T-SP.P2.5.2 | 数据修复: 清理 data/holdings/ 周末残留目录(9/5、9/6); 校验历史无错位 | data/holdings 清理(运维) | 0.5d |

**验收**: 周末运行不产生新目录或按 as_of 写; 残留目录已清理; 7 月历史无异常覆盖。

### 1.6 P2-6 部分策略滞后降级提示 (T-SP.P2.6)

**根因**: _resolve_holdings_date 对部分策略数据滞后时静默继承最近持仓, 无任何提示 → 用户误以为当日全策略已更新。

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-SP.P2.6.1 | get_holdings_by_date 返回每策略 inherited_from 字段(继承的真实日期); API /calendar/{date} 透出; 前端日视图 note 显示多因子策略继承 2026-08-28 持仓 | backend/data_parser.py、backend/api/v1/calendar.py、frontend data.js | 1d |

**验收**: 部分策略滞后时前端明确提示继承日期; 全策略就绪时无冗余提示。

---

## 2. 实施顺序与版本

| 阶段 | 任务 | 目标 | 估时 |
|---|---|---|---|
| 阶段1 (P0) | T-SP.P0.1 + T-SP.P0.2 | 功能正确性修复 | 2d |
| 阶段2 (P1) | T-SP.P1.3 + T-SP.P1.4 | 数据完整性修复 | 2d |
| 阶段3 (P2) | T-SP.P2.5 + T-SP.P2.6 | 健壮性+体验 | 2d |

> 全部完成后 bump APP_VERSION 5.3.13 → 5.3.14, tag v5.3.14, 双端发布 + GitHub release。

## 3. 出口标准

1. 全量回归 2937+ 新增用例全绿(-m not e2e)
2. TDD 每个修复: 先红(新守护测试失败) → 实现 → 绿 → commit
3. prepush gate 通过(无真实 token / 令牌/间距/一致性门禁)
4. 双端重启 + /api/health 版本 5.3.14
5. 线上 API 实测: /compare 200, 周视图口径一致, 节假日不填充, 年视图全量
6. README 版本历史 + HANDOVER + 数据字典(如涉及字段)同步更新