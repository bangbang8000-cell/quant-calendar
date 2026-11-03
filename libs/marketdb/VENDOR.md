# vendor: marketdb（同花顺官方 Financial-API）

| 项 | 值 |
|---|---|
| 上游仓库 | <https://gitee.com/HiThink-Tech/Financial-API>（GitHub 同名仓库 API 404，以 Gitee 为准） |
| 抓取路径 | `python/marketdb/`（25 个文件：`marketdb/*.py` + `marketdb/sql/*.sql` + 子包） |
| 抓取日期 | 2026-11-03 |
| 上游许可 | 仓库根 `LICENSE` = **MIT**（Copyright (c) 2026 HiThink-Tech） |
| ⚠️ 冲突事实 | 同一仓库 `python/pyproject.toml` 声明 `license = { text = "Proprietary" }`（专有）。**两处声明矛盾** |
| 决策 | 用户 2026-11-03 拍板：**接受风险，直接 vendor**（PRD D22） |
| 风险缓解 | ① 仅经 `backend/dwh/adapter.py` 调用 ② 保留 `dwh/native.py` 最小回退 ③ 本文件留证 ④ 若官方书面要求，切 `dwh.backend=native` 当日可退 |
| 依赖实测 | 其 `pyproject` 要求 `duckdb>=1.1,<2` 与 `pyarrow>=16,<25`；本机实际为 **duckdb 2.0.0 / pyarrow 26.0.1**，**超出其声明上界**。实测导入与 DDL/因子重算可用，但升级需重跑 `test_dwh_adapter.py` |
| 复用范围 | 仅 `sql/schema.sql`、`sql/views.sql`（DDL 与视图语义）与 `calculations/adjustment.py`（复权因子推导）；**不使用**其 CLI / auth / updaters |

## 升级流程

1. 重新抓取 `python/marketdb/` 覆盖本目录
2. 跑 `pytest tests/test_dwh_adapter.py -q`（视图语义 / 因子 / 增量阈值 / 备份）
3. 记录新的抓取日期与提交信息到本文件
