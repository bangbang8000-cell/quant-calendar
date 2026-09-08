# 量化选股日历 5.4.0 开发计划（DEV-PLAN 5.4.0 · 重点清单+多时点评估+存储+界面+推送）

- **文档版本**：v1.1（评审决策已锁定）
- **日期**：2026-09-08
- **产品基线**：v5.3.15（APP_VERSION 5.3.15）
- **配套**：PRD-v5.4.md | TEST-PLAN-v5.4.0.md | TEST-CASES-v5.4.0.md
- **状态**：**决策已锁定；待用户最终确认后按 TDD 实施**

已锁定决策：时点=盘前/盘后必做+盘中可选默认关；动作=5 档（买入/持有/观望/减仓/卖出，按持仓派生）；降级=规则快评；推送=飞书 text+card 盘后 20:15；入口=AI 页子 Tab；清单默认全量。

---

## 0. 技术设计决策（定稿）

| # | 决策 | 选择 | 理由 |
|---|------|------|------|
| D1 | 存储 | SQLite 表 focus_evals（migration _0007），**只存客观评估事实（score/level/direction），动作不入库** | 动作 = 评分×持仓 派生，随用户持仓变化；结构化查询/准确性分析共用 |
| D2 | 清单计算 | backend/focus_list.py 纯函数：watchlist ∪ 当日新入池 | 纯函数可单测；watchlist 表 + views_aggregator status=new 均已有 |
| D3 | 调度 | 复用 jobs 队列 + focus 调度任务（09:00/20:00 必做；10:30/14:00 可选开关） | 沿用策略 20:00 调度模式，不另起体系 |
| D4 | 评估执行 | 复用 ai_evaluator.batch_evaluate/stream；AI 失败/清单过大 → 规则因子快评（rule，非 LLM，method=rule） | 成本可控、降级如实 |
| D5 | 推送 | 扩展 FeishuPusher：build_focus_digest(date, session, holdings) 输出 text + interactive 双模 | 已有 webhook 通道与卡片能力 |
| D6 | 界面 | 前端零构建：focus-view 组件挂 AI 页子 Tab | 沿用组件注册约定 window.__quantComponents |
| D7 | 动作派生 | focus_action_map.py 单一实现：f(score, level, holding) → 5 档动作（PRD §1 FR-5.4.7 表） | 推送/界面/API 同一口径，测试守护 |
| D8 | 持仓输入 | 复用 portfolio_positions：按用户名查询持仓集合 → 派生动作；未登记默认未持仓 | 已有持仓模块，零新依赖 |
| D9 | 命中率扩展 | eval_track 增量增加动作兑现率统计，不改既有方向命中率逻辑 | 兼容既有测试，纯增量 |

### D1 存储细节（focus_evals）

- migration _0007：建表 + 双索引（PRD §2 字段表，无 action 列）
- 写入路径：评估完成 → 组装 record → INSERT OR REPLACE（幂等，同 (trade_date, session, stock_code) 唯一）
- 读取路径：按日期/时段/股票查询；聚合统计；动作由 API 层按用户持仓派生
- 数据隔离：沿用 tests/conftest.py 的 patch_data_dir（临时库）

### D4 规则因子快评（降级）

- 输入：重点清单股票最近 N 日行情（日线，现有数据源）
- 输出：同一 record 结构（total_score/level/direction + raw_json 标注 method=rule）
- 规则初版：均线多头/空头、量能、动量反转信号 → score 映射（公式实现时以测试锁定）
- 触发：AI 评估失败（超时/无模型可用）或清单 > 阈值（如 80 只）或盘中可选时点未开 AI

### D7 5 档动作派生（单一实现 focus_action_map.py）

- holding 判定：该用户 portfolio_positions 中是否含该股
- 派生表（level + score 桶 × holding）：
  强烈推荐/推荐(score≥60) × 未持仓 → 买入；× 已持仓 → 持有
  谨慎推荐/中性(40≤score<60) × 未持仓 → 观望；× 已持仓 → 持有
  看空/弱(30≤score<40) × 未持仓 → 观望；× 已持仓 → 减仓
  深看空(score<30) × 未持仓 → 观望；× 已持仓 → 卖出
- direction 由 level 派生（复用 eval_track.parse_level_direction 既有逻辑）
- 前端不重复计算派生逻辑

---

## 1. 任务分解（TDD，每任务独立 commit）

### T-5.4.0.1 focus_evals 表 + 迁移 _0007
- 改动：backend/migrations/_0007_focus_evals.py、backend/db.py（如需）
- 测试：test_focus_store.py
- 验收：迁移可应用可回滚；patch_data_dir 隔离

### T-5.4.0.2 重点清单计算（focus_list.py）
- 改动：backend/focus_list.py、backend/api/v1/focus.py（GET /api/focus/list?scope=all|watchlist|new_pool）
- 测试：test_focus_list.py
- 验收：清单 = watchlist ∪ 当日新入池；来源标注；空态

### T-5.4.0.3 多时点评估编排（focus_scheduler.py）
- 改动：backend/focus_scheduler.py、jobs 队列接入、配置（时点开关/清单上限/AI 开关）
- 测试：test_focus_schedule.py
- 验收：09:00/20:00 必做；10:30/14:00 可选；过点拒绝；幂等

### T-5.4.0.4 评估执行与落库（focus_eval.py）
- 改动：backend/focus_eval.py（调 batch-evaluate + 规则快评降级 + 写 focus_evals）
- 测试：test_focus_eval.py（mock AI；rule 降级；record 组装；幂等写）
- 验收：AI/rule 两路径均落库且 method 标注正确

### T-5.4.0.5 5 档动作派生（focus_action_map.py）
- 改动：backend/focus_action_map.py（f(score, level, holding) → 5 档；direction 派生）
- 测试：test_focus_action_map.py（全组合：5 档 × 持仓/未持仓 × 边界分 29/30/40/60/80）
- 验收：与 PRD FR-5.4.7 表逐格一致

### T-5.4.0.6 digest 渲染 + 推送（focus_digest.py + FeishuPusher 扩展）
- 改动：backend/focus_digest.py（text 渲染，5 档动作）、feishu_push.py（build_focus_digest + text 模式）、api/v1/focus.py（POST /api/focus/push）
- 测试：test_focus_digest.py（逐字模板/emoji/计数/排序/行数上限）
- 验收：与 PRD §3 模板逐字一致；发送结果可感知

### T-5.4.0.7 界面：重点跟踪视图（focus-view 组件，AI 页子 Tab）
- 改动：frontend/js/components/focus-view.js、ai-page.js 子 Tab、index.html 挂载
- 测试：test_frontend_focus.py（组件注册/字段契约/空态）
- 验收：四块可用；动作由 /api/focus 按当前用户持仓返回

### T-5.4.0.8 效果块接入（复用 eval_track/winrate）
- 改动：focus-view 效果块调用 winrate 数据 + 样本量/免责展示
- 测试：test_focus_effect.py（mock winrate；样本量标注）
- 验收：n5/10/20 命中率 + 样本量 + 免责

### T-5.4.0.9 出口与发布
- APP_VERSION 5.3.15 → 5.4.0；tag v5.4.0；dev/ops 双端部署重启；文档同步
- 全量回归 + ruff + 覆盖率门禁 + 前端一致性门禁 + 双端冒烟 0 pageerror

---

## 2. TDD 节奏与提交纪律

1. 每任务先写失败测试（命名带 v540，如 test_focus_list_v540）→ 实现 → 跑绿 → commit
2. 每任务改动文件 ≤ 3 个/次；独立 commit（feat(5.4.0): T-5.4.0.x ...）
3. 依赖变更走 requirements.in → uv compile 纪律（本版预计零新增依赖）
4. 前端改动后重启 dev 服务 + 硬刷新验证（零构建 SPA 纪律）
5. 每任务跑一次全量（-m not e2e）确认零回归

---

## 3. 出口与门禁（5.4.0 发布标准）

- [ ] python3 -m pytest tests/ -m "not e2e" 全绿（含新增 test_focus_*）
- [ ] ruff check backend/ --select=E,F,W --ignore=E501 全绿
- [ ] 覆盖率总门禁 ≥ 40%，focus 相关模块 ≥ 70%
- [ ] 前端一致性门禁全绿
- [ ] 双端（dev:8001 / ops:8000）重启冒烟 0 pageerror；/api/health 版本 5.4.0
- [ ] 推送文本人工比对 §3 模板通过（5 档动作）
- [ ] tag v5.4.0 + GitHub push（经用户确认后）+ Docker 发布（如有）

---

## 4. 依赖与风险

- 依赖：eval_track / watchlist / views_aggregator / portfolio_positions / FeishuPusher / jobs 队列——全部既有，本版零新增第三方依赖
- 风险：AI 评估延迟（180s 超时 + 网络重试已修）→ 规则快评兜底；盘中时点成本 → 开关默认关；持仓数据缺失 → 默认未持仓并在界面/推送提示
- 边界：本版不做 5.4.1 准确性面板与 5.4.2 分钟数据管道（另行规划）


---

## 5. 5.4.1 修复段（R1~R5，用户评审通过 2026-09-09，已完成 R1-R3）

> 背景：v5.4.0 三条补充需求（FR-5.4.8/5.4.9/5.4.10）实现后评审发现 2 处生产可用性问题
> （分钟K线 live 失败、入池历史恒空）。用户问卷确认先修 P0 再发版 5.4.1。

| # | 任务 | 改动 | 状态 |
|---|------|------|------|
| R1 | 分钟K线 live 可用化：券商版优先(可配置 minute.priority) + 同源限频冷却(60s) + 列名归一化(trade_time/中文→trade_date) + 全源失败降级日线(degraded_from) + 前端 el-alert 提示 | data_sources/_constants.py, _manager.py, api/v1/market.py, app-logic.js, stock-detail.js, test_kline_minute_v540.py | ✅ 37aab87 + 3c4d08d |
| R2 | 修复 load_pool_history 接线（import 模块→from import 单例实例）+ 非 mock 接线集成测试 | focus_pool_history.py, test_focus_pool_history.py | ✅ f7e0149 |
| R3 | 界面视觉增强：5档动作分布堆叠条+图例 / K线详情图标按钮 / 弹窗入池历史区块 | focus-view.js, stock-detail.js, layout.css | ✅ 82c68bb |
| R4 | 文档同步（本文 + PRD §10 回填 FR-5.4.8/9/10 + EVAL-5.4.0-plan-review.md） | docs/*.md | 🔄 本文档 |
| R5 | bump 5.4.1 + 全量回归 + ruff + 覆盖率门禁 + 双端重启冒烟 + push + tag v5.4.1 | main_new.py | ⏳ |

**已锁定的分钟数据源配置（用户 Q2）**：
```json
"minute": {
  "priority": ["sxsc_tushare", "tushare", "akshare"],
  "interval_seconds": 60,
  "degrade_to_daily": true
}
```
可在系统页数据源配置中修改 priority（券商版 tushare 默认优先），保存后即时生效（重启后仍保留）。

