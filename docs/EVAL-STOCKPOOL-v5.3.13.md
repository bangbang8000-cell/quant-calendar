# 股票池逻辑系统评估报告 (v5.3.13 基线)

> 评估日期: 2026-09-07 | 范围: 日/周/月/年视图 · 新入/当前/已出池 · 策略并集/交集 · 非交易日前后
> 方法: 代码逐行审查 + 运行期实测验证(dev 环境实时数据) + 线上 API 验证

## 1. 架构全景(当前实现)

- 数据: data/holdings/{YYYY-MM-DD}/{策略名}持仓.csv (策略引擎每日20:00生成, qresult矩阵: 行=日期列=股票值=1)
- data_parser.DataParser: 单一数据源; holdings_data[strategy][date]=set(代码); date_list=真实交易日; carried_dates=前向填充日(工作日无数据→继承, 上限10天)
- views_aggregator.ViewsAggregator: daily_data[date]; get_day/week/month/year_view; calculate_status→new/current/out; get_prev_trading_date/is_inherited_day
- API: /api/view/{view}/{date} + /api/calendar/{date}/compare + /api/calendar/{date}/consensus
- 前端 calendar-page.js: 状态Tab(新入/当前/出池)+计数+徽标; /api/view 全量获取前端过滤

## 2. 缺陷清单(按严重度)

### P0-1 多策略并集/交集对比功能完全损坏 (500)
- 位置: backend/api/v1/calendar.py /calendar/{date}/compare (line 137)
- 根因: stock_sets = {s: set(data['stocks'])}; get_holdings_by_date 返回 stocks 是 [{code,name}] dict列表; set(dict) 不可哈希 → TypeError
- 线上实证: GET /api/calendar/2026-09-04/compare → HTTP 500 cannot use dict as set element
- 连带: 前端无任何 compare 调用 → 并集/交集功能后端损坏且无UI入口, 从未可用
- 对照: scan_engine._strategy_pool_codes 正确 isinstance(s, dict) 处理, 证明漏改

### P0-2 周视图「已出池展示」与「状态标记」上一周口径不一致
- 位置: views_aggregator.get_week_view vs calculate_status('week')
- 实证(2026-09-04): get_week_view prev=8/20~8/27(6天); calculate_status prev=8/21~8/28(6天, 多8/28少8/20)
- 影响: 同一股票出现在已出池列表但徽标判 current/new, 或反之 → 周视图已出池与状态筛选矛盾
- 根因: 两处上一周切片公式不同 (prev_week_end=curr_idx-len-1 vs prev_week_start=curr_idx-len-5)

### P1-3 前向填充不识别法定节假日 (非交易日污染)
- 位置: data_parser._carry_forward_to_today (line 287)
- 根因: 仅 d.weekday()<5 判断工作日, 不识别A股法定节假日
- 实证(模拟2026国庆): 9/30→10/9 前向填充出 10/1 10/2 10/5 10/6 10/7 10/8 10/9 七个节假日日期, 全标记可看(实为9/30继承)
- 影响: 日历出现不存在的交易日; 节假日日期的新入/出池把真实调仓错标; 长假>10天(9/30→10/12)超限→长假后首日无数据

### P1-4 年视图「已出池」截断至200只, total虚高/计数失真
- 位置: views_aggregator.get_year_view (out_codes[:200])
- 实证: year 2026 total=400(2025出池>200), 前端计数基于截断列表 → out真实数远大于显示
- 影响: 年视图已出池不完整, 导出CSV也缺; 月视图491全量无截断 → 口径不一致

### P2-5 周末目录残留 + 引擎周末运行日期错位
- 位置: data/holdings/2026-09-05/2026-09-06(周末)目录, 内容日期为7/7 7/8
- 根因: 策略引擎周末也运行(按今天建目录), 生成数据内容日期滞后 → 目录名与内容日期错位
- 影响: 当前用文件内容日期解析不产生日期污染; 但7/7 7/8历史持仓被周末结果覆盖(若异常数据会污染7月历史)

### P2-6 部分策略滞后的降级提示缺失
- 位置: data_parser._resolve_holdings_date/_nearest_prior
- 影响: 某策略数据滞后时日历显示继承但无提示; carried日内策略数据缺失无降级标记


## 3. 已验证正常的场景(防误改)

- 日视图 total=stocks数, status计数和=total (9/4: 30+12+14=56)
- 月视图月初/月末边界正常, total=全量(6月491)
- carried日(9/7) daily_data 42条, day视图 prev=9/4 全部current + note提示沿用
- 数据起点(2024-01-16)无prev正常降级
- scan_engine策略池并集正确 dict/str 处理
- 日视图状态对比基准已核验正确: calculate_status('day') 用 all_dates[curr_idx-1], 因 all_dates 含 carried 日且有序, 对 carried 日(9/7)前一项=9/4 与 get_prev_trading_date 一致 (原 P2-7 疑点已排除)
- 前端状态Tab/计数/徽标齐全

## 4. 修复计划(待授权)

### R1 (P0-1) 修复多策略并集/交集对比 [backend+前端]
- calendar.py compare: stock_sets 改 {s: set(x['code'] for x in data['stocks'])}
- 前端补「策略对比」入口+弹窗: 4策略两两交集/并集/独有 + 全量交集
- 守护测试: compare 200 且交集并集计数正确

### R2 (P0-2) 统一周视图上一周口径 [backend]
- 抽取单一 _prev_week_dates(date), get_week_view 与 calculate_status('week') 共用
- 守护测试: 两处 prev_week 集合一致

### R3 (P1-3) 前向填充识别法定节假日 [backend]
- 方案A(推荐): 用 sxsc/tushare/akshare 交易日历API(已有三源)判断真实交易日
- 方案B(兜底): 维护节假日表(近3年A股休市日)
- 长假超限(>10天)时前端返回数据未更新提示
- 守护测试: 国庆期间不填充; 长假后首日有提示

### R4 (P1-4) 年视图已出池不截断/正确分页 [backend]
- 移除 out_codes[:200] 硬截断改全量(或前端分页); total=真实总数
- 守护测试: year total=真实out数

### R5 (P2-5) 引擎周末运行防护 [backend]
- strategy_governance._generate_holdings: 非交易日跳过或按 as_of 交易日写目录
- 守护测试: 周末运行时 as_of=最近交易日

### R6 (P2-6) 部分策略滞后降级提示 [backend+前端]
- _resolve_holdings_date 返回继承时附 inherited_from, 前端note显示xx策略继承8/28

### R7 (P2-7) 日视图状态对比基准统一 [backend]
- calculate_status('day') 改 get_prev_trading_date 与 get_day_view 一致

## 5. 建议实施顺序

1. P0先行(R1+R2): 对比修复+周视图口径 — 功能正确性
2. P1(R3+R4): 节假日识别+年视图截断 — 数据完整性
3. P2(R5+R6+R7): 周末防护+滞后提示+基准统一 — 体验健壮性

> 全部改动遵循 TDD(先红后绿) + 全量回归 + 版本纪律(v5.3.14)。评估完成, 请审阅授权。