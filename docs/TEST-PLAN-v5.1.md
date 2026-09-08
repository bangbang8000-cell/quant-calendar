# 量化选股日历 5.1 系列测试计划（TEST-PLAN 5.1.x · 策略研究主线）

- **文档版本**：v1.0（正式版）
- **日期**：2026-09-02
- **产品基线**：v5.0.11（2304 用例全绿，覆盖 71.97%）
- **配套**：PRD-v5.1.md | DEV-PLAN-v5.1.md

---

## 0. 测试策略总览

### 0.1 测试金字塔（5.1 目标形态）

| 层 | 现状 | 5.1 目标 | 执行 |
|---|---|---|---|
| 单元（纯函数） | 主体 | 新研究模块（截面处理/成本/风险/组合）**全量覆盖** | pytest，随开发 |
| 集成（DB/API） | 主体 | 研究历史/因子/回测/复盘 API 集成 | pytest，随开发 |
| 数据纪律 | 有 | 样本外/前视/成本 fixture + 断言（防偏差核心） | pytest 自定义 fixture |
| 契约（前端字段） | 有 | 研究页新指标字段 ↔ 后端一致性守护 | test_frontend_consistency 延续 |
| e2e（视觉） | continue-on-error | 研究页关键子页人工验收 + 截图 | playwright（信息性） |

### 0.2 环境与执行

- 本机 dev 用系统 python3（3.13，与 CI 一致）；单元/集成全量 + e2e 分开跑。
- 命令基线：
  - `python3 -m ruff check backend/ --select=E,F,W --ignore=E501`
  - `python3 -m pytest tests/ -v --tb=short --cov=backend --cov-report=term --cov-fail-under=40 -m "not e2e"`
  - 模块门禁：factor_ic ≥70%（延续）；新增 factor_preprocess/factor_composite/portfolio_builder/metrics/risk ≥70%
  - e2e：`python3 -m pytest tests/e2e -m e2e`（信息性）
- 隔离纪律：tests/conftest.py 的 patch_data_dir 重定向 DB；新测试一律隔离。

### 0.3 门禁增量原则

- 每个 5.1 版本新增自己的门禁（下表），**不得放宽既有门禁**。
- 新模块（research_store/factor_preprocess/factor_composite/portfolio_builder/position_sizing/report_export）纳入对应模块覆盖门禁（目标 ≥70%）。
- 数值纪律 gate：研究页模板禁止裸浮点插值（守护 2 位小数修复不回归）。
- 版本纪律 gate（tag ↔ APP_VERSION）延续；锁文件防漂移延续。

---

## 1. V5.1.0 研究基座 —— 测试计划

### 1.1 新增测试资产（目标 +60 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_research_store.py | 实验数据模型/写入/查询/对比/导出 | ~30 |
| tests/test_research_history_api.py | 实验列表/详情/对比 API + 鉴权 | ~15 |
| tests/test_frontend_research_consistency.py | 研究页新子页/实验面板模板字段 ↔ return 一致性 | ~15 |

### 1.2 专项验证
- 实验写入含快照（策略ID+参数+区间+版本），可复现。
- 两次实验对比视图字段正确；无实验时空态。
- 前端研究台 8 子页冒烟 0 pageerror。

### 1.3 回归范围
factor_ic / strategy_research 既有用例全量 + 前端一致性测试 + e2e 冒烟。

---

## 2. V5.1.1 因子研究深化 —— 测试计划

### 2.1 新增测试资产（目标 +90 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_factor_preprocess.py | 去极值（MAD/winsorize）/中性化回归/标准化，边界与 NaN | ~30 |
| tests/test_factor_ic_decay.py | IC 随 1/5/10/20 日衰减曲线、最优持有期 | ~20 |
| tests/test_factor_turnover.py | 分层/组合年化换手、成本敏感性 | ~15 |
| tests/test_factor_composite.py | 等权/IC加权/ICIR加权合成 + 合成后重评价 | ~25 |

### 2.2 专项验证
- 截面处理顺序固定（去极值→中性化→标准化），参数可选且输出可复现。
- 覆盖 2015 股灾/2018 熊市/2020 疫情/2022 熊市的因子表现专测（fixture 数据）。

### 2.3 回归范围
factor_ic 既有用例全量 + walkforward 稳定性用例 + 前端 IC 面板冒烟。

---

## 3. V5.1.2 回测严谨性 —— 测试计划

### 3.1 新增测试资产（目标 +110 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_backtest_cost_model.py | 佣金/滑点/印花税可配、默认保守、成本×3 压力测试 | ~30 |
| tests/test_backtest_lookahead.py | 前视偏差审计：检测 t 日 close 成交违规、t+1 成交合规 | ~30 |
| tests/test_backtest_oos.py | 70/30 样本外切分、OOS「未触碰」标注、参数训练段限定 | ~25 |
| tests/test_backtest_walkforward.py | 滚动 OOS 各段指标 + CV 稳定性诊断（复用 stability_report） | ~25 |

### 3.2 专项验证
- 交易次数<20/样本期短/无基准/成本过低时可信度清单警示触发。
- 分年度收益 + 沪深300/中证500 基准对比正确。

### 3.3 回归范围
test_backtest / test_backtest_report / test_backtest_benchmark 既有全量 + 回测工作台前端冒烟。

---

## 4. V5.1.3 组合与风险 —— 测试计划

### 4.1 新增测试资产（目标 +100 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_portfolio_builder.py | top N 选股、等权/市值加权、组合净值、容量限仓 | ~35 |
| tests/test_risk_metrics.py | 回撤/波动/Sharpe/Sortino/Calmar/VaR95，净值反推防复利误差 | ~40 |
| tests/test_position_sizing.py | Kelly/风险平价参考仓位 + 「参考非投资建议」标注 | ~25 |

### 4.2 专项验证
- 风险指标与手工复算一致（浮点误差断言放宽容差）。
- 极端段（股灾/熊市）尾部风险专测。

### 4.3 回归范围
metrics.py 既有用例全量 + 前端风险面板冒烟。

---

## 5. V5.1.4 研究流程闭环 —— 测试计划

### 5.1 新增测试资产（目标 +70 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_research_record.py | 假设/结论/标签/备注字段 CRUD | ~20 |
| tests/test_report_export.py | Markdown 报告导出（指标表/结论/净值图引用） | ~25 |
| tests/test_research_compare.py | 多实验对比 API + 雷达图数据 | ~25 |

### 5.2 专项验证
- 导出报告含关键指标表与结论；可下载。
- 对比视图至少 3 实验指标并列正确。

### 5.3 回归范围
research_store 既有用例 + 前端研究历史/对比冒烟。

---

## 6. V5.1.5 市场复盘结构化 —— 测试计划

### 6.1 新增测试资产（目标 +60 用例）

| 测试文件 | 覆盖 | 用例数 |
|---|---|---|
| tests/test_market_review_struct.py | 结构化字段（日期/板块/风格/因子/要点/启示）CRUD | ~25 |
| tests/test_market_review_link.py | 复盘↔策略实验关联 + 反查 | ~20 |
| tests/test_market_review_search.py | 按日期/板块/标签检索 | ~15 |

### 6.2 专项验证
- 一条复盘可关联一个实验；策略详情反查相关复盘。
- 检索结果排序与过滤正确。

### 6.3 回归范围
market_review 既有用例全量（门禁 ≥60% 延续）+ 前端复盘页冒烟。

---

## 7. 跨版本测试任务（贯穿全程）

| 任务 | 内容 | 节奏 |
|---|---|---|
| T-TEST-X1 | 数值 ≤2 位小数回归（研究页模板扫描 + 守护测试） | 每版本 |
| T-TEST-X2 | 研究域 fixture 维护（样本外/前视/成本/极端段数据） | 每版本 |
| T-TEST-X3 | 前端一致性/依赖审计回归（test_frontend_consistency） | 每版本 |

---

## 8. 测试出口汇总

| 版本 | 新增用例 | 累计规模（估） | 门禁 |
|---|---|---|---|
| 5.1.0 | +60 | ~2360 | research_store ≥70% |
| 5.1.1 | +90 | ~2450 | factor_preprocess/composite ≥70% |
| 5.1.2 | +110 | ~2560 | 成本/前视/OOS/walkforward 全绿 |
| 5.1.3 | +100 | ~2660 | portfolio/risk/position ≥70% |
| 5.1.4 | +70 | ~2730 | export/compare ≥70% |
| 5.1.5 | +60 | ~2790 | market_review ≥60%（延续） |

每版本出口 = 全量测试绿 + 覆盖总门禁 ≥40% + 模块门禁达标 + 双端冒烟 0 pageerror + 数值纪律守护。
