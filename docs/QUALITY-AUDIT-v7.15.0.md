# 五维质量护栏复检报告 (v7.15.0)

- 综合得分: **90.0 / 100**
- 结论: **FAIL**（FAIL 1 项，WARN 0 项）
- 生成方式: `python3 scripts/five_dim_audit.py`（静态审计，幂等可复跑）

## 维度得分

| 维度 | 名称 | 得分 | 检查项 |
|---|---|---|---|
| A | 美观 | 100.0 | 3 |
| C | 便捷 | 100.0 | 2 |
| E | 高效 | 50.0 | 2 |
| L | 逻辑清晰 | 100.0 | 2 |
| O | 方便运维 | 100.0 | 2 |

## 检查明细

| 编号 | 检查项 | 结果 | 说明 |
|---|---|---|---|
| A1 | 设计令牌覆盖率 | ✅ pass | var(--*) 3848 处 / 裸色值 180 处, 令牌化率 95.5% |
| A2 | 明暗主题完整性 | ✅ pass | light=✓ dark=✓ |
| A3 | 前端产物体积 | ✅ pass | 最大文件 index-DhY6QjSy.js 1167KB (上限 1464KB) |
| C1 | 新功能前端可达性 | ✅ pass | 前端已接入 7/7 个新域 [五维评分 v7.4←/api/strategies/scores/auto(前缀); 择时 v7.5←/api/timing/evaluate(前缀); 形态匹配 v7.6←/api/pattern/cases(前缀); 参数锁定 v7.7←/lock/audit(尾段); 执行计划 v7.8←/api/execution/plans(前缀); 五维报告 v7.9←/api/reports/stock(前缀); 策略市场 v7.10←/api/marketplace/items(前缀)] |
| C2 | 端点说明覆盖率 | ✅ pass | 322/386 个端点带说明(docstring) |
| E1 | 模块体积 | ❌ fail | backend/backtest.py(722) |
| E2 | 索引覆盖 | ✅ pass | 迁移内 CREATE INDEX 15 条 |
| L1 | 路由重复 | ✅ pass | 共 380 条路由, 无重复 |
| L2 | 迁移连续性 | ✅ pass | 12 个迁移, 最新 12, 无缺号 |
| O1 | 版本三处对齐 | ✅ pass |   ✓ 5 类来源一致 (tag 为发布时校验项) |
| O2 | 启动自检项 | ✅ pass | 自检函数 10 个 |

## 结论与后续

存在 FAIL 项，需在发布前修复；详见上表。
