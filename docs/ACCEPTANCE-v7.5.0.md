# ACCEPTANCE — v7.5.0「择时与市场认知」

| 项 | 值 |
|---|---|
| 版本 | v7.5.0（APP_VERSION / README / HANDOVER 三处对齐，bump_version --check 通过） |
| 基线 | v7.4.0（commit 33fee95） |
| 日期 | 2026-11-20 |
| 上游依据 | PRD v1.2 §8、DEV-TEST-PLAN v1.0 |
| 状态 | 本地门禁全绿；部署冒烟见下；**远程 GitHub CI 因 origin 无 push 凭证未触发** |

## 1. 交付内容（FR 对应）

| FR | 需求 | 实现 | 状态 |
|---|---|---|---|
| FR-7.5-1 | 8 个择时策略统一契约 + 仓位 Overlay | `backend/timing/base.py` 定义 `TimingSignal`/`TimingStrategy`；`strategies.py` 实现布林/RSI/支撑/海龟/低位海龟/海龟plus/趋势回调缩量/顺势宝 8 策略；`overlay.py` 输出 0–1 仓位系数 | ✅ |
| FR-7.5-1（落地） | Overlay 注入回测、共用单一引擎 | `strategy_sdk/backtest.py::backtest_holdings` 新增 `timing_exposure` 参数；`build_exposure_series` 实现"信号次日生效"；不新增执行引擎 | ✅ |
| FR-7.5-2 | 择时研究 API | `api/v1/timing_api.py`：`GET /api/timing/strategies`、`POST /api/timing/evaluate`（买卖点序列 + 研究预览绩效）、`POST /api/timing/state`；逐日切片只用 `[:i+1]` 防前视。前端子页属 y.2 | ✅（后端） |
| FR-7.5-3 | HMM 四状态 + 迁移概率 + 历史时间轴 | `market_state.py`：`GaussianHMM` 优先（hmmlearn 0.3.3 锁定），依赖缺失/样本退化降级启发式；四状态语义一致，数据不足诚实 `unknown` | ✅ |
| FR-7.5-4 | ADX 档位 + 市场温度 | `adx_tier`（clear/emerging/ranging）、`market_temperature`（0–100）→ `exposure_cap` / `temperature_exposure` | ✅ |
| FR-7.5-5 | 研究历史 + 样本外 | `VALID_TYPES` 追加 `timing` / `market_state`；新增 `backend_info.py` 轻量版本代理，修复 v7.4 遗留的"backend_info 不存在导致研究记录静默失败" | ✅ |
| FR-7.5-6 | 异步性能 / P95 | 属 y.2 范围，本中版本不做 | ⏸ 按 PRD §6.4 |

> Y 小版本口径：PRD §6.4 定义 v7.5.0 = 8 策略 + 契约 + Overlay，v7.5.1 = HMM/温度/ADX，v7.5.2 = 择时研究子页 + 异步性能。本中版本按用户"每次一个 X 中版本"的要求，在后端一次性交付 y.0+y.1 能力；前端子页与异步化留 y.2，与 v7.4 前端延后先例一致。

## 2. 关键设计决策

- **择时是 Overlay，不是第二个执行引擎**：`TimingSignal` 只输出 `{action, strength, target_exposure}`，经 `build_exposure_series` 转成逐日仓位系数，作为 `backtest_holdings(timing_exposure=...)` 注入既有回测路径——直接消除 KHunter "择时与回测两套执行逻辑"的反模式。
- **不产矩阵、不进日历**：所有择时/市场状态 API 响应显式携带 `overlay_only=True`、`holdings_matrix=None`、`calendar_opt_in=False`，与 PRD §6.5.1 产物分流铁律一致。
- **T-1 防前视双层**：策略层 `_signal_bar` 回测取倒数第二根 K 线；API 层逐日评估只用 `asc.iloc[:i+1]` 切片；Overlay 层信号次日生效。
- **HMM 务实降级**：优先 `GaussianHMM`（random_state=42 保证可复现），依赖缺失或协方差奇异时降级"收益均值×波动率"启发式；状态语义与置信度口径统一，输出 `engine` 字段让调用方知晓当前路径。
- **参数合并修真 bug**：`TimingStrategy.__init__(**defaults)` + `_params()` 合并构造期默认值与调用期覆盖；此前测试 `RSITiming(oversold=100)` 靠"构造参数不生效"假通过，已改为末日腰斩构造真实 T-1 差异。
- **版本代理修复**：`backend_info` 此前从未存在，`strategy_scores.py` / `strategy_research.py` 的研究记录静默失败；新增轻量代理从 `main_new.py` 正则读取，保持版本单一来源。

## 3. 测试结果

| 项目 | 结果 |
|---|---|
| 新增 `test_timing_v75.py`（24）+ `test_timing_api_v75.py`（9） | ✅ 33 passed |
| 全量回归 `pytest tests/ -m "not e2e and not network"` | ✅ 4354 passed, 4 deselected, 0 failed |
| 门禁专项（module_size/rbac/pit/split-parity/frontend×2/coverage_gate） | ✅ 252 passed |
| ruff（`--select=E,F,W --ignore=E501`，全 backend） | ✅ All checks passed |
| bump_version --check | ✅ 三处一致（tag 6.6.0 早于 7.5.0，开发中正常） |
| lockfile 一致性（CI 同参重编 diff） | ✅ runtime 209/209 行、dev 57/57 行一致 |

## 4. 依赖变更

`requirements.in` 新增 `hmmlearn>=0.3.0`；按 CI 固定 uv 0.11.7 + `--python-version 3.11` + 干净缓存重编译 `requirements.lock` / `requirements-dev.lock`：

- `hmmlearn==0.3.3`
- `scikit-learn==1.9.1`、`scipy==1.17.1 (<3.12)` / `1.18.1 (>=3.12)`
- `numpy==2.4.6 (<3.12)` / `2.5.5 (>=3.12)`

Docker 镜像直接 `pip install -r requirements.lock`，新依赖随镜像生效。

## 5. 部署冒烟

待填。

## 6. 五维护栏验收

- A（美观）：本版本无新页面（择时子页列 y.2），沿用既有设计系统。✅ 不破坏
- C（便捷）：三条 REST API 可直接调用，策略清单自带 Overlay 映射说明。✅
- E（高效）：逐日评估支持 `warmup` 控制；HMM 拟合固定 random_state 可复现。✅
- L（逻辑清晰）：单一回测引擎、产物分流、T-1 三层防前视、诚实降级。✅ 重点达标
- O（方便运维）：版本三处对齐、轻量版本代理修复研究历史静默失败、ACCEPTANCE 文档、依赖锁定。✅ 重点达标

## 7. 远程 CI 状态

**未触发**：GitHub origin 未配置 push 凭证（用户选择自行配置）。已用本地等价门禁完整复现阻塞项；用户配置凭证后需补跑远程 CI 并核对结果。
