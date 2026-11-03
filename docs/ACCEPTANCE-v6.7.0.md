# 验收记录 — v6.7.0「Fuyao 接入地基 + 可拔离保障」

| 项 | 结果 |
|---|---|
| 版本 | `APP_VERSION = 6.7.0`（bump_version.py 同步 README/HANDOVER） |
| 提交 | 9 个交付包（B1.1 → B1.7 收口），分支 `release/v6.7` 已快进合并 master |
| 基线 | 6.6.0：**4061 passed**（`PYTHONPATH=qc_ws_pkgs -m "not e2e"`） |
| 本版终态 | **4093 passed / 0 failed / 1 skipped**（+32 用例） |
| lint | 新增/改动文件全部 `ruff check --select=E,F,W` 干净 |
| 部署 | dev(:8001) 与 ops(:8000) 均 `version=6.7.0`，自检 fail=0 |
| 真实取数 | 快照 ok；`capital-flow` → `capability_unavailable`（2004 不计失败） |
| 核心隔离 | `get_kline_data('600519.SH')` 的 `data_source = **tushare**`（非 fuyao）✅ |

## 交付清单（18 文件 / 10 交付包）

| 包 | 文件 | 内容 |
|---|---|---|
| B1.1 | `backend/data_sources/_fuyao.py`、`tests/test_fuyao_client.py` | 信封解析/错误码语义/令牌桶/退避（20 例） |
| B1.1b | `backend/config.py`（改）、`tests/test_fuyao_client.py` | Settings 声明两种 Key 名（否则 extra=forbid 启动失败） |
| B1.7 | `backend/data_tier.py`、`backend/data_sources/_manager_fetch.py`（改）、`tests/test_data_tier_guard.py` | T1/T2/T3 分层 + 分钟回退剔除（7 例） |
| B1.2 | `_constants.py`（改）、`_manager.py`（改）、`tests/test_fuyao_switches.py` | 第 4 源注册/能力开关/T1 路由剔除（9 例） |
| B1.2b | `tests/test_data_source_routing.py`（改） | 路由用例对齐 SOURCE_ORDER |
| B1.3 | `api/v1/market.py`、`api/v1/system.py`、`tests/test_fuyao_secret_guard.py`、`_manager.py` | 掩码/reveal 验密/永不落盘 + 配置深合并（6 例） |
| B1.4 | `backend/fuyao_shadow.py`、`tests/test_fuyao_shadow_diff.py` | 三池/日K 同口径比对（10 例） |
| B1.5 | `_fuyao.py`（单位/配额）、`api/v1/market.py`、`tests/test_fuyao_units.py` | 股→手/元→千元/毫秒→日；日配额（7 例） |
| B1.5b | `api/v1/market_fuyao.py`、`api/v1/router.py`、`api/v1/market.py` | 状态与对拍接口拆出（market.py 728→668 行） |
| B1.6 | `DEPLOYMENT.md`、`backend/freshness.py`、README/HANDOVER、`tests/test_version_governance_610.py`、`tests/test_kline_minute_v540.py` | 运维章节 + 新鲜度 + 版本门禁 |

## 顺带修复的真实缺陷（3 处）

1. **`Settings` extra=forbid**：`.env` 新增 `FUYAO_API_KEY` 会让**整个应用启动失败**（两条既有测试转红）→ 显式声明两个字段。
2. **`_load_config` 未深拷贝**：运行时改配置会**污染模块级 `DEFAULT_CONFIG`**（新源开关被永久改掉）。
3. **`_load_config` 不合并默认值**：用户既有 `datasource_config.json` 早于新源时**缺整块 fuyao** → 改为深合并。

## 未完成 / 下一版

- G1 影子对拍需**连续 5 个交易日**真实数据（2026-11-03 起累积），达标后放行 v6.8.0
- v6.8.0：三池字段合并、涨停原因、情绪指标、龙虎榜、天梯对拍（12 文件 / 6 包）
