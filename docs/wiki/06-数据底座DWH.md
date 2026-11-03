# 06 数据底座 DWH（DuckDB + Parquet）

## 这是什么

把"逐票实时取"换成本地一份**全市场面板**：一次落盘，研究/回测/因子都从本地查，不再打接口。

| 项 | 实测值 |
|---|---|
| 全量 dump | 173.7 MiB（10 年日 K） |
| 落库行数 | **10,368,988 行** |
| 覆盖股票 | **5,577 只** |
| 复权事件 | 57,736 条 → 重算 10,368,988 行因子 |
| DuckDB 体积 | 约 542 MB |
| 首次建仓耗时 | 下载 241 s + 落库 28 s ≈ **4.5 分钟** |

## 结构

```
data/dwh/
  market.duckdb     ← 主库（raw 层 + calc 层 + v_* 视图）
  archive/          ← 最新 1 份全量 Parquet（复现用）
  backup/           ← 每日备份，保留 7 天
```

表与视图（复用官方 `marketdb` 的 DDL 语义）：

| 对象 | 说明 |
|---|---|
| `raw_kline_daily` | 原始日 K（主键 `thscode` + `date`，重复合并不产重） |
| `raw_adjustment_events` | 复权事件 |
| `calc_adjust_factor_daily` | 前/后复权因子（官方算法重算） |
| `v_daily` / `v_daily_qfq` / `v_daily_hfq` | 原始 / 前复权 / 后复权视图 |
| `v_symbol` | 证券维表 |
| `dim_stock_concept` | 概念图谱（我们自己建，公式见 04/05 页） |

## 首次建仓

```python
# 需要 FUYAO_API_KEY
from dwh import get_backend
b = get_backend()
b.sync_mode('20261103')        # 本地空 → 'FULL'
b.sync(kind='daily-k')         # 下载 → 落库 → 归档 → 自动备份
b.sync(kind='adjustment-factors')
b.status()
```

或走接口（admin）：`POST /api/dwh/refresh?kind=daily-k`。

## 增量与全量

判定规则（对齐官方 auto-sync）：

| 本地状态 | 模式 |
|---|---|
| 无数据 | `FULL` |
| 落后 ≤ 7 个自然日 | `INCREMENTAL` |
| 落后 > 7 天 | `FULL` |

## 备份与复现

- **每日备份** DuckDB 文件，保留 **7 天**（超过自动清理旧备份）。
- **Parquet 归档** 只留最新 **1 份全量**，用于"这份数据当时长什么样"的复现。
- 备份可直接打开（`duckdb.connect(备份路径)`），不需要还原工具。

## vendor 说明（重要）

`libs/marketdb/` 是官方仓库 `python/marketdb` 的镜像（25 文件），我们只复用：

- `sql/schema.sql`、`sql/views.sql`（DDL 与视图语义）
- `calculations/adjustment.py`（复权因子推导）

**不使用**其 CLI / auth / updaters（那是给 agent 终端的入口，不适合嵌服务端）。

约束与风险都记在 `libs/marketdb/VENDOR.md`：

| 问题 | 现状 |
|---|---|
| 许可冲突 | 仓库 `LICENSE` = MIT，但同仓 `pyproject.toml` 写 `Proprietary` |
| 依赖超界 | 官方要求 `duckdb<2 / pyarrow<25`，本机实测 2.0.0 / 26.0.1 可用 |
| 回退方案 | `dwh.backend=native` 一行切换，当日可退 |

**架构约束**：业务代码**禁止**直接 import vendor 或 `dwh.native`，只能经 `backend/dwh/adapter.py`（有测试守护）。

## 复权视图核对

```
v_daily_qfq  600519 最新 = 1480.0            ← 最新日因子为 1，与原始收盘一致
v_daily_hfq  600519 最新 = 1826.99           ← 1480 × 1.23445（累计后复权因子）
```

## 常见操作

| 想做什么 | 命令 |
|---|---|
| 看库状态 | `GET /api/dwh/status`（admin）或 `get_backend().status()` |
| 查任意 SQL | `get_backend().query("SELECT ... FROM v_daily_qfq")` |
| 手动备份 | `dwh.native.backup(db_path)` |
| 换后端 | 配置 `dwh.backend = "native"` |
| 关掉 DWH | 配置 `dwh.enabled = false`（研究接口回落逐票） |

> 注意：DWH 只做**加速与研究**，**不是唯一路径**。关掉它，产品仍能跑（只是研究接口走逐票，会慢）。
