# 量化选股日历 5.4.0 测试计划（TEST-PLAN 5.4.0 · 重点跟踪评估）

- **文档版本**：v1.1（评审决策已锁定）
- **日期**：2026-09-08
- **产品基线**：v5.3.15（2902+ 用例全绿）
- **配套**：PRD-v5.4.md | DEV-PLAN-v5.4.0.md | TEST-CASES-v5.4.0.md
- **状态**：**决策已锁定；待用户最终确认后随 TDD 实施**

已锁定决策影响测试：动作 5 档（买入/持有/观望/减仓/卖出）× 持仓派生需全组合用例；时点=盘前/盘后必做+盘中可选；降级=规则快评标注；推送=飞书 text+card。

---

## 0. 测试策略总览

### 0.1 测试金字塔（5.4.0 目标形态）

| 层 | 现状 | 5.4.0 目标 | 执行 |
|---|---|---|---|
| 单元（纯函数） | 主体 | 清单计算 / 5 档动作派生 / digest 渲染 / 时点判定 **全量覆盖** | pytest，随开发 |
| 集成（DB/API） | 主体 | focus_evals 存储 / focus API / 调度 / 推送 / 持仓派生 | pytest，随开发 |
| 数据诚实性护栏 | 有基础 | **时点口径 / 历史不现抓 / 降级如实 / 幂等 / 派生口径**（本版重点） | pytest fixture |
| 契约（前端字段） | 有 | focus-view 组件注册 / 字段契约 / 空态 | test_frontend_consistency 延续 |
| e2e（视觉） | continue-on-error | 重点跟踪视图人工验收 + 截图 | playwright（信息性） |

### 0.2 环境与执行

- 本机 dev 用系统 python3（3.13，与 CI 一致）；单元/集成全量 + e2e 分开跑
- 命令基线：python3 -m pytest tests/ -m "not e2e"；focus 专项：python3 -m pytest tests/test_focus_*
- **数据隔离**：focus_evals 走 tests/conftest.py 的 patch_data_dir fixture（临时库）；绝不动真实 data/
- **mock 策略**：AI 评估一律 mock；持仓来自 portfolio_positions（fixture 造数）；推送用 mock webhook 响应

### 0.3 新增测试文件（按模块）

| 文件 | 覆盖 |
|---|---|
| tests/test_focus_list.py | 重点清单：watchlist ∪ 新入池、去重、来源标注、开关（scope）持久化、空清单 |
| tests/test_focus_action_map.py | **5 档动作派生：评分×持仓全组合（5 档 × 2 状态）+ 边界分（29/30/40/60/80）+ direction 派生** |
| tests/test_focus_schedule.py | 时点窗口判定、过点拒绝、历史日不现抓、幂等、时点开关配置（盘中默认关） |
| tests/test_focus_store.py | focus_evals 迁移建表、INSERT OR REPLACE 幂等、按日期/时段/股票查询、隔离 |
| tests/test_focus_eval.py | 评估执行：批量评估（mock）、rule 规则快评降级（method 标注）、record 组装、失败兜底 |
| tests/test_focus_digest.py | digest 渲染：**5 档动作**、与 PRD §3 模板逐字一致、emoji/计数/排序/行数上限、免责 |
| tests/test_focus_api.py | focus API：清单/结果/历史/推送端点、鉴权、**持仓派生透传**、降级、错误处理 |
| tests/test_focus_effect.py | 效果块数据：winrate 透传、样本量标注、免责 |
| tests/test_frontend_focus.py | 前端契约：focus-view 组件注册、字段一致、空态 |

### 0.4 数据诚实性护栏（本版重点，逐条守护）

1. 评估只落「今天且当前时段」的数据——历史日绝不现抓（沿用短线过点纪律）
2. 过点 8 分钟后不再补该时点快照
3. 降级路径（rule 快评）必须如实标注 method=rule，不得冒充 AI
4. 同 (日期, 时段, 股票) 幂等——重复调度不产生重复记录
5. 清单口径单一来源（focus_list.py）；**动作派生单一来源（focus_action_map.py）**，前端不重复计算
6. 命中率/样本量如实展示，样本 < 30 标注「样本不足」
7. 免责声明必随推送与效果展示出现
8. 测试隔离：任何 focus 测试不写真实 data/（patch_data_dir 强制）
9. 持仓派生如实：未登记持仓 → 未持仓口径（买入/观望系），不得臆造持有

---

## 1. 关键测试用例索引（明细见 TEST-CASES-v5.4.0.md）

- TC-5.4.0-01 ~ 04：清单计算（并集/去重/来源/空态/开关）
- TC-5.4.0-05 ~ 10：**5 档动作派生（评分×持仓全组合/边界分/direction）**
- TC-5.4.0-11 ~ 16：调度与时点（窗口/过点/历史日/幂等/开关/降级触发）
- TC-5.4.0-17 ~ 20：存储（迁移/幂等写/查询/隔离）
- TC-5.4.0-21 ~ 24：评估执行（AI 路径/rule 降级/失败兜底/落库）
- TC-5.4.0-25 ~ 29：digest 渲染（**5 档**逐字模板/emoji/计数/排序/上限/免责）
- TC-5.4.0-30 ~ 33：API（鉴权/清单/历史/**持仓派生**/推送/降级）
- TC-5.4.0-34 ~ 36：效果块（命中率/样本量/免责）
- TC-5.4.0-37 ~ 39：前端契约（注册/字段/空态）
- TC-5.4.0-40：全量回归零损坏（既有 2900+ 用例）

---

## 2. 回归与门禁

1. 每任务：focus 专项测试绿 + 全量（-m not e2e）零回归
2. 发布前：ruff 全绿 + 覆盖率总门禁 ≥ 40% + focus 模块 ≥ 70% + 前端一致性门禁
3. 双端冒烟（dev/ops）0 pageerror；推送文本人工比对 §3 模板
4. eval_track 既有测试（test_eval_track*）零回归——动作兑现率为增量扩展，不改方向命中率语义
