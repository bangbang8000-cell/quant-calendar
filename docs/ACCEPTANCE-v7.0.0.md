# 验收记录 — v7.0.0「全市场数据底座（vendor DuckDB + Parquet）」

| 项 | 结果 |
|---|---|
| 版本 | `APP_VERSION = 7.0.0` |
| 交付 | 14 文件 / 6 交付包 + **1 个 vendor 镜像**（`libs/marketdb/`，25 文件 180K） |
| 测试 | **4157 passed / 0 failed / 1 skipped**（6.9.0 基线 4135） |
| 依赖 | 新增 `duckdb==2.0.0` / `pyarrow==26.0.1`（lock 仅 +2 行，无其它漂移） |

## 真实数据端到端实测（关键证据）

```
全量 dump 下载   173.7 MiB / 241 s
日 K 落库       10,368,988 行 / 5,577 只 / 27.9 s
复权事件落库     57,736 条 → 重算 10,368,988 行因子
DuckDB 体积      569 MB（含因子）
v_daily_qfq      600519 最新 = 1480.0（因子 1.0，与原始收盘一致）✅
v_daily_hfq      600519 最新 = 1826.99（= 1480 × 1.23445）✅
```

> 首次建仓 241+28 ≈ **4.5 分钟**，满足 PRD「≤10 分钟」出口标准。

## 交付包

| 包 | 内容 |
|---|---|
| B4.1 | `libs/marketdb/`（官方 25 文件）+ `VENDOR.md`（来源/许可冲突/决定/回退/依赖超界）+ requirements（duckdb/pyarrow） |
| B4.2 | `dwh/adapter.py`（唯一允许 import vendor 的位置）+ `dwh/native.py`（DDL 复用官方 SQL、落盘/增量/备份/下载） |
| B4.2b | `test_dwh_adapter.py`（8 例：视图/幂等/复权/阈值/备份/归档/回退/禁用） |
| B4.3 | `concepts.py`（100 只/批 + 覆盖率标注 + 北交所判定 + 落库）+ `pit.available_through` |
| B4.4 | `factor_ic.load_panel_from_dwh`（DWH 优先，**永不是唯一路径**） |
| B4.5 | `/api/dwh/status`、`/api/dwh/refresh`（失败如实返回不 500） |

## 本版修掉的缺陷（4 处）

| # | 缺陷 | 后果 |
|---|---|---|
| 1 | 归档/备份写到全局 data 目录而非 DWH 目录 | 测试隔离失败、prod 目录混乱 → 改为按 db_path 作用域 |
| 2 | `concepts.load_concepts` 调 `native.query` 参数顺序颠倒 | SQL 解析错误（`syntax error at or near "/"`） |
| 3 | 北交所代码判定（920xxx 被判成 SH） | 概念反查 404/空 |
| 4 | 2 处静默 `except: pass` | 撞静默异常门禁 → 改为 warning/debug 留痕 |

## 关键决策落地（D22/D23）

- **vendor 已落地**：`libs/marketdb/` + VENDOR.md；但业务代码**禁止**直接 import（`TC-FY-7.0-13` 守护）
- **保留 native 回退**：`dwh.backend=native` 一行切换；`vendor` 不可用自动回退并记 `fallback_reason`
- **存储模型**：单 `data/dwh/market.duckdb` + 仅 1 份最新全量 Parquet 归档；每日备份保留 7 天
- **依赖超界已知**：官方 `pyproject` 要求 `duckdb<2 / pyarrow<25`，实测 2.0.0 / 26.0.1 **可用**（已记入 VENDOR.md）

## 下一版

7.X 系列：v7.1.0 研究看板产品化（行业强度矩阵 + 离线单文件导出 + 口径词表）、
v7.2.0 情绪与资金结构、v7.3.0 财务质量与回测实验室。
