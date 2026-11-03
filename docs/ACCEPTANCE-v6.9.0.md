# 验收记录 — v6.9.0「盘中情绪与事件流」

| 项 | 结果 |
|---|---|
| 版本 | `APP_VERSION = 6.9.0` |
| 交付 | 13 文件 / 7 交付包（B3.1 → B3.6 + 收口） |
| 测试 | **4135 passed / 0 failed / 1 skipped**（6.8.0 基线 4100） |
| 前端 | dist 重建 `index-UH3Vgu9R.js`；一致性/令牌/门禁全绿 |
| 部署 | dev(:8001) / ops(:8000) 均 `version=6.9.0` |

## 线上实测（ops，2026-11-03）

```
GET /api/shortterm/auction?codes=600519.SH   available=True（snapshot/opportunities/dates/benchmark）
GET /api/shortterm/hot-list?period=day&limit=5 available=True（hot + skyrocket）
GET /api/shortterm/anomaly?page=1&size=3      available=True（total=473, pages=24, 附 disclaimer）
GET /api/events/flash?limit=3                 available=True（source=fuyao）
```

- 竞价：快照 2 只 / 机会含 `warn_name=竞价砸盘` / 基准 6 只
- 热榜：day 与 hour 均可取；`300308` 排名趋势 34 点（best=1）
- 异动：**单日 473 条**，24 页（默认 20/页）
- 事件：600519 分时新闻 20 条；快讯 20 条

## 本版修掉的真实缺陷（3 处）

| # | 缺陷 | 后果 |
|---|---|---|
| 1 | **异动解读接口忽略 page/size**（一次返回 473 条且无 pagination） | 若把上游"全量"当"一页"，前端会一次性渲染数百条 → 改为本层切片 + 全量缓存 |
| 2 | 令牌名误用（`--fs-*`/`--fw-*`/`--primary`） | 令牌门禁直接拦下，改用 `--font-*`/`--primary-text` |
| 3 | `shortterm-page.js` 735 行 | 撞 700 行结构门禁 → 新增 `logic-sentiment.js`（沿用 logic-tour 装配模式）拆到 684 行 |

## 口径纪律落地

- 热榜标注「TopN 截断 ≠ 全市场排名」，`rank-trend` 标注「完整走势（非 Top30）」
- 异动 `analysis_content` **逐字保留**，附 AI 生成免责声明；空列表声明"可能为上游降级"
- 事件只给「标题 + 摘要 + 原文跳转」，**不内嵌正文渲染**（D19）
- 非竞价时段仍返回最近结果并标注，不冒充"无数据"

## 下一版

v7.0.0（14 文件 / 6 包）：vendor 官方 marketdb + `dwh/adapter.py`/`native.py` 双实现、
单 DuckDB + 1 份全量 Parquet、概念图谱、回测底座切换、题材因子。
