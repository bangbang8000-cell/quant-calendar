# ACCEPTANCE — v7.6.0「形态匹配实验室」

| 项 | 值 |
|---|---|
| 版本 | v7.6.0（APP_VERSION / README / HANDOVER 三处对齐，bump_version --check 通过） |
| 基线 | v7.5.0（commit d244c7f） |
| 日期 | 2026-11-20 |
| 上游依据 | PRD v1.2 §9、DEV-TEST-PLAN v1.0 |
| 状态 | 本地门禁全绿；部署冒烟见下；**远程 GitHub CI 因 origin 无 push 凭证未触发** |

## 1. 交付内容（FR 对应）

| FR | 需求 | 实现 | 状态 |
|---|---|---|---|
| FR-7.6-1 | 四维特征提取（趋势/KDJ/量能/价格形态） | `backend/pattern_match/features.py`：移植 KHunter `pattern_feature_extractor`，入口改为 T1 OHLCV；修正"25 日窗口算 MA114 全 NaN"上游缺陷（全量预热+窗口取形） | ✅ |
| FR-7.6-2 | 加权 DTW + 可解释 breakdown | `pattern_match/matcher.py`：权重 30/20/25/25 强制和为 1；fastdtw 0.3.4 优先、确定性降级；输出 `total_score` + 四项百分制 `breakdown` + `missing_dimensions` + `engine` | ✅ |
| FR-7.6-3 | 案例库 CRUD | migration 0008 `pattern_cases` 表；`pattern_match/store.py` 幂等 CRUD；`GET/POST/DELETE /api/pattern/cases`；导入导出走 features_json | ✅（后端；实验室页面属 y.1） |
| FR-7.6-4 | 形态匹配实验室页面 | `POST /api/pattern/match`：候选池 → 逐股四维匹配 → 相似度排行 + 四项 breakdown；前端页面/异步进度属 y.1/y.2 | ✅（后端） |
| FR-7.6-5 | 研究历史 | `VALID_TYPES` 追加 `pattern_match`；记录案例集/权重/阈值/候选池，可复现 | ✅ |
| FR-7.6-6 | 二级菜单满 7 处理 | 属 y.2 前端范围，本中版本不触碰菜单 | ⏸ 按 PRD §6.4 |

> Y 小版本口径：v7.6.0 = 特征提取 + DTW + 可解释 breakdown；v7.6.1 = 案例库 CRUD + 实验室页面；v7.6.2 = 菜单合并 + 导出 + 性能收口。本中版本按"每次一个 X 中版本"要求交付 y.0 核心并把案例库后端提前完成，前端页面留 y.1/y.2。

## 2. 关键设计决策

- **修正上游数值缺陷**：KHunter 先截 25 日再算 MA114，多空线必为 NaN；本实现以至少 115 根 K 线预热计算指标，仅在最近 `lookback_days` 窗口汇总形态，特征真实可用。
- **缺维诚实**：任一维度缺失取中性 0.5 并记入 `missing_dimensions`，不猜数、不把缺维当 0 分拉低总分。
- **权重纪律**：可配置但强制归一化，末项吸收 6 位舍入残差，保证四个权重精确和为 1（可诊断）。
- **产物是分数**：匹配结果显式 `holdings_matrix=None`、`calendar_opt_in=False`；仅在调用方显式 `materialize=True` 时给等权持仓建议，不自动入日历（PRD §6.5.1 铁律）。
- **DTW 可复现**：fastdtw 优先，缺失/异常时走线性插值 + 欧氏距离的确定性降级，输出 `engine` 让调用方知晓路径。
- **测试契约动态化**：修掉 v7.5 遗留的 `"7.5.0"` 与迁移 `==7` 硬编码，改与 `APP_VERSION` 同源 / 下界断言，避免逐版本手改。

## 3. 测试结果

| 项目 | 结果 |
|---|---|
| 新增 `test_pattern_match_v76.py`（10）+ `test_pattern_api_v76.py`（7） | ✅ 17 passed |
| 全量回归 `pytest tests/ -m "not e2e and not network"` | ✅ 4371 passed, 4 deselected, 0 failed |
| 门禁专项（module_size/rbac/pit/split-parity/frontend×2/coverage_gate） | ✅ 252 passed |
| ruff / bump_version --check / lockfile diff | ✅ 全过（runtime 213/213 行、dev 57/57 行一致） |

## 4. 依赖变更

`requirements.in` 新增 `fastdtw>=0.3.4`；按 CI 固定 uv 0.11.7 + `--python-version 3.11` 重编译两份锁文件。探针确认运行期 `HAS_FASTDTW=True`、`engine=fastdtw`。

## 5. 部署冒烟

待填。

## 6. 五维护栏验收

- A（美观）：实验室页面属 y.1，本版本沿用既有设计。✅ 不破坏
- C（便捷）：案例可导入导出（features_json），匹配 API 支持 inline cases 与库案例两种模式。✅
- E（高效）：案例预存特征避免重复取历史行情；fastdtw 加速 DTW。✅
- L（逻辑清晰）：四维 breakdown 可解释、缺维标注、权重归一、产物分流。✅ 重点达标
- O（方便运维）：migration 0008 幂等、测试契约动态化、版本三处对齐。✅ 重点达标

## 7. 远程 CI 状态

**未触发**：GitHub origin 无 push 凭证（用户自行配置中）。本地已完整复现阻塞门禁，配置凭证后需补跑远程 CI。
