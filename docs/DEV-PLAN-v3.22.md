# v3.22 界面体验优化 (UI/UX Refinement) — 产品需求文档 (PRD)

> 版本: 3.22.0 | 前置: v3.21 (策略纳管/持仓矩阵) | 状态: 评审调整版 v3
> 定位: 收敛界面体验问题(滚动/卡片化/可理解性/数据可视化) + 策略创作能力(基于现有微调 + PTrade 全新策略 + AI 代写迭代)

## 0. 需求背景与动机

v3.21 已实现 P0-8 全部业务功能。用户反馈 5 处问题, 第 3 项经两轮评审最终明确为**两层策略创作模型**。

| # | 反馈 | 本质 | 现状(实测) |
|---|---|---|---|
| 1 | 量化日历有 2 个滚动条且不在最右 | 滚动模型不统一 | document 滚动 + 卡片内 stock-list 滚动 + sub-nav 横向 三处并存 |
| 2 | 用量统计信息分散不都在卡片上 | 信息架构碎片化 | 8 个 section-block, 部分裸露 |
| 3 | 策略创作: 基于现有微调 / 全新PTrade+AI代写 | 策略创作能力缺失 | strategy-write 是空壳; 参数界面/持仓矩阵/PTrade导出/LLM链路均已具备 |
| 4 | 美林时钟要历史周期串联视图 | 数据未可视化 | 后端 13 条历史转换(第1-4轮) 完整, 前端只展示当前阶段 |
| 5 | 评估以上需求合理性 + 方案 | 本 PRD | — |

## 1. 需求评估 (合理性 + 优先级)

### 1.1 需求1: 滚动条统一 — 合理, P0
- 双滚动条+不在最右是滚动模型混乱; 方案: main-content 固定高度 + overflow-y:auto; body 禁滚动
- 风险: 低(纯 CSS), 需三端回归

### 1.2 需求2: 用量统计卡片化 — 合理, P1
- 8 区块到 4 卡片网格(资源监控/数据源健康/AI 用量/运维状态); 纯前端

### 1.3 需求3: 策略创作两层模型 — 合理, P1, 两轮评审后定稿

**路径 A — 基于现有 4 策略微调 (信号层 + AI 交易层)**:
1. 复制一份现有策略到参数配置界面(已有 schema 表单基础) → 改参数
2. 用新参数单独生成持仓矩阵(已有 run-once/_write_holdings_matrix)
3. AI 基于持仓矩阵优选的股票, 编写 PTrade 交易代码(按矩阵调仓), 叠加风控(止损/止盈/最大回撤/仓位)
4. 交易代码导出 → PTrade 直接回测/实盘

**路径 B — 全新策略 (PTrade 兼容 + AI 代写)**:
1. 描述思路 → AI 生成完整 PTrade 代码(选股+交易+风控) → _ALLOWED_APIS 校验
2. 本地回测(PTrade 兼容执行层) + PTrade 内回测(导出代码)
3. AI 迭代: 基于回测表现 → 改进代码 → 再回测 → 多轮收敛

### 1.4 需求4: 美林历史周期视图 — 合理, P0
- 后端 13 条历史转换(第1-4轮)已有, 前端加周期时间轴; 低风险

### 1.5 需求5: 评估 — 本 PRD
- 4 项全部合理; 排序 I1(P0) 到 I4(P0) 到 I2(P1) 到 I3(P1, 两路径)

## 2. 方案设计

### 2.1 滚动条统一 (I1)

现状: main-content 无 height/overflow 使滚动在 document; stock-list/sub-nav 卡片内滚动

目标布局:
```
┌────────┬───────────────────────┐
│ sidebar │ header (固定)          │
│ (fixed) ├───────────────────────┤
│         │ main-content (overflow-y:auto) │
│         │   └ 页面内容           │
└────────┴───────────────────────┘
```

改动 (layout.css + responsive.css):
- body { height: 100vh; overflow: hidden; }
- .main-content { height: calc(100vh - header); overflow-y: auto; }
- 移动端(<768px) 保留 body 滚动
- 验收: 桌面任意页仅 1 垂直滚动条(在 main-content 最右)
### 2.2 用量统计卡片化 (I2)

目标: usage 子页重构为 4 卡片网格:
```
┌─ 资源监控 ─────┐ ┌─ 数据源健康 ─────┐
│ CPU 45% ███    │ │ sxsc 98% 12ms  │
│ 内存 62% ████  │ │ tushare 95% 18ms│
│ 磁盘 38% ██    │ │ akshare 88% 40ms│
│ 运行 12.4h     │ │                 │
└──────────────┘ └──────────────────┘
┌─ AI 用量 ───────┐ ┌─ 运维状态 ──────┐
│ 今日 34 次      │ │ 护栏通过率 92%  │
│ 模型Top: deepseek│ │ 调度任务 3 正常 │
│ 峰值 8次/时     │ │ 最近备份 今天   │
└──────────────┘ └──────────────────┘
```

改动: system-page.js usage 子页重构(纯前端) + layout.css 补卡片类; 数据源不变

### 2.3 策略编写页增强 (I3) — 两层策略创作模型 (两轮评审定稿)

#### 2.3.0 策略形态分层
- **4 基础策略**(多因子/行业轮动/资金流/指数增强): 保持现状(信号层, 参数化), 作为路径 A 的母本
- **基于现有微调的策略**(路径 A 产物): 复制母本 + 新参数 + AI 交易代码(叠加风控)
- **全新策略**(路径 B 产物): 纯 PTrade 兼容代码, AI 代写 + 迭代

#### 2.3.1 路径 A — 基于现有策略微调 (信号层 + AI 交易层) — 评审v3: AI 可微调选股

**流程**:
```
复制母本策略 ─→ 参数配置界面(改参数) ─→ 生成新持仓矩阵(独立, 信号层母池)
                                          │
                                          ▼
        AI 交易层: 读取持仓矩阵优选股 + 按 SelectionSpec 微调选股
                                          │  (AI 可增删: 数量/行业/市值/ST/指数成分)
                                          │  → 生成 PTrade 交易代码
                                          │  (get_history + order_target 按最终持仓调仓
                                          │   + 风控: 止损/止盈/最大回撤/仓位)
                                          ▼
                    导出 → PTrade 直接回测/实盘
```

**SelectionSpec — AI 可微调选股参数协议** (用户可定义, 作为 AI 交易层输入约束):
| 参数 | 类型 | 说明 | 现状 |
|---|---|---|---|
| stock_count | int | 最终持仓数量 (top N) | 已有 top_n |
| industry_scope | list[enum] | 行业偏好(白名单/黑名单) | 新增 |
| market_cap_range | [min,max] 亿 | 市值范围筛选 | 新增 |
| exclude_st | bool | 是否剔除 ST | 已有 st_filter |
| index_membership | enum | 限定沪深300/中证500/中证1000 成分股 | 已有 index_code/benchmark |
| turnover_range | [min,max] % | 换手率范围(可选) | 部分 |
| rebalance_cycle | int | 调仓周期(交易日) | 已有 |

> AI 在矩阵优选股基础上**应用 SelectionSpec 二次筛选**(可增删标的), 输出最终调仓清单。

**复用**(已具备): 复制(profile clone) + 参数配置界面(schema 表单) + 持仓矩阵生成(run-once/_write_holdings_matrix) + PTrade 导出(ptrade-code) + 部分筛选参数(top_n/st_filter/index_code)

**新增**:
- 复制策略 → 独立 sid + 参数(策略副本库, 存 strategy_defs type=variant)
- SelectionSpec 参数协议(schema 扩展: industry_scope/market_cap_range 等)
- AI 交易层端点: POST /api/strategies/{sid}/ai-trade-code — 输入持仓矩阵(抽样 topN) + SelectionSpec → LLM 生成 PTrade 交易代码(含微调选股+风控) → _ALLOWED_APIS 校验 → 返回代码
- 前端: 微调流程向导(复制 → 改参数 → 生成持仓 → 配置 SelectionSpec → AI 交易码 → 导出/回测)

#### 2.3.2 路径 B — 全新策略 (PTrade 兼容 + AI 代写)

**流程**:
```
描述思路 ─→ AI 生成完整 PTrade 代码(选股+交易+风控) ─→ _ALLOWED_APIS 校验
                                                  ▼
              本地回测(PTrade 兼容执行层) ◄─┐   导出 PTrade 代码
                      │                      │    ↓
                      ▼                      │  PTrade 内回测
              回测表现(收益/回撤/夏普)        │    ↓
                      │                      │  AI 迭代(改进代码)
                      └── AI 分析 → 改进 ──┘
```

**复用**: PTrade 模板/校验(_ALLOWED_APIS/render_ptrade_code) + 导出 + LLM 链路

**新增**:
- POST /api/strategies/custom (AI 代写: prompt → LLM → 校验 → 存 code 到 strategy_defs)
- POST /api/strategies/{sid}/ai-optimize (LLM 分析代码+回测 → 改进代码建议)
- **PTrade 兼容回测执行层**(解析代码 initialize/handle_data/get_history/order → 逐日执行 → 持仓矩阵)
- backtest_engine 识别 custom 策略(STRATEGY_CONFIG 扩展)
- 前端: 3 tab(AI 新建/复制微调/AI 优化) + 代码编辑区 + 一键回测/导出

### 2.4 美林时钟历史周期视图 (I4)

目标: 美林时钟页新增周期时间轴(默认最近 4 轮):
```
2009 ──── 2012 ──── 2016 ──── 2020 ──── 2024 ──── 今
 [第1轮]  [第2轮]  [第3轮]  [第4轮]
 衰→复→过→滞  衰→复→过→衰   ...
 ── 每阶段点击 → 详情弹窗(时长/触发/指标)
```

后端: GET /api/merrill-clock/timeline (聚合 HISTORICAL_TRANSITIONS → {cycles:[{label,stages:[...]}], 最近 4 轮)
前端: merrill.js 新增时间轴渲染(纯 CSS 横向), 点击弹详情(复用 stage detail)

## 3. 需求优先级与排期

| 阶段 | 内容 | 优先级 | 预计规模 |
|---|---|---|---|
| I1 | 滚动条统一 | P0 | 0.5d (纯CSS) |
| I4 | 美林历史视图 | P0 | 1d (后端聚合+前端时间轴) |
| I2 | 用量统计卡片化 | P1 | 1d (纯前端) |
| I3 | 策略创作两层模型 | P1 | 4d (路径A: 复制+AI交易码2d; 路径B: 代写+回测适配+迭代2d) |

## 4. 非目标 (Out of Scope)

- 不新增选股/回测业务逻辑(仅适配自定义策略接入)
- 自定义策略不支持 Python 编辑器断点调试(以回测驱动迭代)
- 不做按需加载重构(维持 P2)
- 不改移动端布局骨架(仅滚动收敛)

## 5. 验收标准

1. 桌面端任意页滚动条 <=1 个垂直(在 main-content 最右)
2. 用量统计 4 卡片, 信息全部入卡, 无裸露指标
3. **路径 A**: 复制母本 → 改参数 → 生成新持仓矩阵 → AI 基于优选股写交易码(含风控) → 导出 PTrade 可用
4. **路径 B**: 描述思路 → AI 代写完整 PTrade 代码 → 本地回测 + 导出 PTrade 回测 → AI 迭代多轮收敛
5. 美林时钟页展示最近 4 轮历史时间轴, 每阶段点击可看详情
6. 全量测试绿(907+新增) + 覆盖率 >=40 + 前端一致性 103+ 绿

## 6. 风险与依赖

- **滚动改动**: 三端回归; 若破坏回退"仅隐藏页面级滚动条"
- **AI 交易码/代写**: 依赖 AI key; 无 key 降级(提示未配置); 生成代码需 _ALLOWED_APIS 静态校验防非法 API/注入
- **PTrade 兼容回测执行层**: 覆盖常用 API(get_history/order/order_target 等); 不支持的返回明确错误
- **AI 迭代**: 建议为参考, 用户确认后应用
- **持仓矩阵规模**: 全池矩阵列多, AI 输入需抽样/聚合(取优选 topN, 避免 token 超限)
