# 验收记录 — v7.3.0「财务质量 · 审计 · 回测实验室」（收尾版）

| 项 | 结果 |
|---|---|
| 版本 | `APP_VERSION = 7.3.0` |
| 交付 | 14 文件 / 9 交付包（B7.1 → B7.7 + 收口） |
| 测试 | **4263 passed / 0 failed / 1 skipped**（7.2.0 基线 4224） |
| 零 Fuyao 演练 | **通过**（进程内 6 例 + ops 实机 14 端点） |
| 部署 | dev(:8001) / ops(:8000) 均 `version=7.3.0` |

## 线上实测（ops）

```
GET /api/research/pit-audit        passed=True  failed=0/5  target=2026-11-03
GET /api/research/fin-quality      covered=2  top=600519.SH  composite=66.7  ROE=32.4%
GET /api/research/backtest-lab     panel_rows=1,099,796
  全样本 +1.96%  年化 +2.77%  Sharpe 0.301  最大回撤 -31.21%
  样本内 +0.19%  →  样本外 -23.0%（动量在该窗口失效，如实呈现）
```

## 零 Fuyao 实机演练（关闭全部能力域后逐端点验证）

| 类别 | 结果 |
|---|---|
| 核心行情 / 日历 | ✓ 照常（T1 本就不允许走 Fuyao） |
| 热榜 / 异动 / 快讯 / 财务 | ✓ 诚实降级 `capability_disabled`（带 reason） |
| 三池 / 龙虎榜 / 行业强度 / 脉冲 / 审计 | ✓ 本地兜底仍可用 |
| 本地 DWH | ✓ 不受影响 |

演练后已还原配置并重启，`hot-list` 恢复 `available=True`。

## 交付包

| 包 | 内容 |
|---|---|
| B7.1 | `fin_quality.py`：六项指标 + **样本内分位**（明标不是全市场）+ 综合分 |
| B7.2 | `pit_audit.py`：**五项可执行检查**（库新鲜度/因子滞后/未来字段/入参日期/导出尾注），"跳过≠通过" |
| B7.3 | `backtest_lab.py`：lag=1 无前视 + 双边成本 + 样本内外**同参** |
| B7.4 | 三个 `/api/research/*` 端点 |
| B7.5 | 前端「回测与审计」卡（审计结论 + 全样本 + 样本内外） |
| B7.6 | dist + 对拍快照 + 版本收口 |
| B7.7 | 零 Fuyao 演练（进程内 pytest + ops 可执行脚本） |

## 本版修掉的缺陷（4 处）

| # | 缺陷 | 后果 |
|---|---|---|
| 1 | 演练脚本路径错误（`/api/market/kline`、`/api/calendar`） | 404 被误判为"核心不可用" → 修正为真实路径 |
| 2 | 403（admin 端点）被判失败 | operator 演练会假报警 → 改为"跳过" |
| 3 | 三池响应无 `available` 字段被误判"降级缺 reason" | 假失败 → 按形状检查 |
| 4 | `backtest-lab` 用 `rows` 表示行数 | 与 `fin-quality` 的 `rows`（列表）语义冲突 → 改名 `panel_rows` |

## 交付完成度

7 个版本全部上线：v6.7.0 → v7.3.0；53 个交付包；测试从 4061 → **4263**。
