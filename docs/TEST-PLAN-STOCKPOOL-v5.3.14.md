# 量化选股日历 股票池逻辑修复 测试计划 (TEST-PLAN-STOCKPOOL v5.3.14)

- **文档版本**: v1.0(正式版, 待审批)
- **日期**: 2026-09-07
- **产品基线**: v5.3.13(全量 2937 用例; -m not e2e)
- **配套**: DEV-PLAN-STOCKPOOL-v5.3.14.md(开发计划, 独立文档) / EVAL-STOCKPOOL-v5.3.13.md(评估报告)
- **测试纪律**: 每个修复 TDD 先写守护测试(先红) → 实现 → 跑绿 → commit; 全量回归 + 覆盖率门禁; 前端一致性门禁

---

## 1. 测试总览

| 修复 | 测试文件 | 用例数 | 级别 |
|---|---|---|---|
| P0-1 compare | tests/test_compare_strategies_v5314.py | +6 | 单元+API |
| P0-2 周视图口径 | tests/test_week_view_consistency_v5314.py | +4 | 单元 |
| P1-3 节假日填充 | tests/test_trade_day_carry_v5314.py | +6 | 单元 |
| P1-4 年视图截断 | tests/test_year_view_full_v5314.py | +3 | 单元 |
| P2-5 周末防护 | tests/test_engine_weekend_v5314.py | +3 | 单元 |
| P2-6 滞后提示 | tests/test_inherited_hint_v5314.py | +3 | 单元+API |
| 合计 | 6 个新文件 | +25 | |

> 预期全量: 2937 + 25 = **2962 用例**全绿。

---

## 2. 守护测试用例明细

### 2.1 P0-1 compare 并集/交集 (T-SP.P0.1)

| # | 用例 | 断言 |
|---|---|---|
| C1 | compare 对 4 策略日数据 | 返回 200; all_intersection = 4 策略共同持仓; 两两 comparison.intersection/union/only_s1/only_s2 计数与集合正确 |
| C2 | 单策略/空策略(某策略当日无数据) | 不抛 500; 空集合交集为空列表; 状态码 200 |
| C3 | compare 返回结构完整性 | 每个 key 含 intersection/union/only_s1/only_s2 + _count 字段 |
| C4 | 全量交集正确性 | 手工构造 2 策略已知持仓, 断言交集=共同代码 |
| C5 | 两两对比无重复 | s1_vs_s2 与 s2_vs_s1 不重复出现(只生成一次) |
| C6 | 前端入口 | (前端一致性门禁) 策略对比按钮/弹窗存在, i18n 5 语 key 齐全 |

### 2.2 P0-2 周视图口径一致 (T-SP.P0.2)

| # | 用例 | 断言 |
|---|---|---|
| C7 | get_week_view 与 calculate_status(week) 的 prev_week 集合一致 | 对多个日期断言两处 prev 完全相同(统一 _prev_week_dates) |
| C8 | 周视图已出池列表 = status==out 集合 | 对 9/4 断言: out 列表代码集合 == 全部 stocks 中 status=out 的代码集合 |
| C9 | 周视图 new/current 语义 | 本周新入=上周不在本周在; 当前=两周都在; 出池=上周在不在本周 |
| C10 | 边界: 月初首周/数据起点周 | 不抛错; 无 prev 时降级合理 |

### 2.3 P1-3 节假日填充 (T-SP.P1.3)

| # | 用例 | 断言 |
|---|---|---|
| C11 | is_trade_day 国庆(10/1~10/7) | 返回 False(非交易日) |
| C12 | is_trade_day 普通工作日(9/10) | 返回 True |
| C13 | _carry_forward_to_today 国庆后首日 | 不填充 10/1~10/8 为可看日期; 只填充真实交易日 |
| C14 | 长假 >10 天 | 不填充; get_holdings_by_date 返回 reason=数据未更新 |
| C15 | is_trade_day 数据源故障 | 回退 weekday 判断, 不抛错, 标记降级 |
| C16 | is_trade_day 缓存 | 同年二次调用命中缓存(不重复请求数据源) |

### 2.4 P1-4 年视图全量 (T-SP.P1.4)

| # | 用例 | 断言 |
|---|---|---|
| C17 | 年视图 out > 200 只 | 全量返回(不截断); total = 真实 out 数 |
| C18 | 年视图 status 计数和 = total | new+current+out = total = stocks 数 |
| C19 | CSV 导出完整 | 行数 = 全量 stocks 数(含全部 out) |

### 2.5 P2-5 周末防护 (T-SP.P2.5)

| # | 用例 | 断言 |
|---|---|---|
| C20 | _generate_holdings 在周末运行时 as_of | = 最近交易日(非周末日期); 写目录用 as_of |
| C21 | 周末运行不产生新目录(或目录=as_of 日) | data/holdings 无周末日期目录 |
| C22 | 数据修复后无错位 | 无 周末目录内容日期 != 目录日期 的残留 |

### 2.6 P2-6 滞后提示 (T-SP.P2.6)

| # | 用例 | 断言 |
|---|---|---|
| C23 | 部分策略滞后 get_holdings_by_date | 返回该策略 inherited_from=真实日期(如 8/28) |
| C24 | 全策略就绪 | 无 inherited_from 字段(或为空) |
| C25 | API /calendar/{date} 透出 inherited_from | 前端 note 可读(API 返回含该字段) |

---

## 3. 回归与质量门禁

| 门禁 | 范围 | 标准 |
|---|---|---|
| 全量回归 | -m not e2e | 2962 全绿 |
| 覆盖率 | 总覆盖 / 核心模块 | 总 ≥40%; views_aggregator/data_parser 核心 ≥60% |
| 前端一致性 | test_frontend_consistency | 120 用例(基准) + 新增 compare/note 相关 |
| 依赖锁定 | requirements.lock | 无漂移 |
| prepush gate | 全仓 | 无真实 token 串/令牌/间距/无内联样式/对比度/版本纪律 |

## 4. 线上验证(发版后)

| # | 验证 | 期望 |
|---|---|---|
| V1 | GET /api/calendar/2026-09-04/compare | 200, 交集/并集计数正确 |
| V2 | GET /api/view/week/2026-09-04 | out 列表与 status=out 一致 |
| V3 | GET /api/view/year/2026 | out 全量(>200) |
| V4 | 日历日期列表 | 无周末/节假日日期(国庆模拟) |
| V5 | /api/calendar/2026-09-04 | 滞后策略带 inherited_from |
| V6 | /api/health | 版本 5.3.14, 双端健康 |

## 5. 测试执行节奏

1. 每修复: 写守护测试 → 跑红(确认测试有效) → 实现 → 跑绿 → commit
2. 每阶段(P0/P1/P2): 该阶段全量回归 + 覆盖率检查
3. 发版前: 全量 2962 + prepush gate + 前端一致性 + 线上 V1~V6
4. 发版后: README/HANDOVER/数据字典更新确认 + 双端重启 + 健康检查