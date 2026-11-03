# 验收记录 — v6.8.0「短线数据正式化」

| 项 | 结果 |
|---|---|
| 版本 | `APP_VERSION = 6.8.0` |
| 交付 | 12 文件 / 6 交付包（B2.1 → B2.5 收口） |
| 测试 | **4100 passed / 0 failed / 1 skipped**（6.7.0 基线 4093） |
| 前端 | 一致性 + 令牌门禁 **124 passed**；dist 重建 `index-DOgKWlqS.js` |
| 部署 | dev(:8001) / ops(:8000) 均 `version=6.8.0` |

## 线上实测（2026-11-03，ops）

```
GET /api/shortterm/pools?date=2026-11-03
  zt: rows=52  source=fuyao+eastmoney  include_st=True   daily_basic_enriched=4
  zb: rows=34  source=store
  dt: rows=17  source=fuyao+eastmoney  include_st=True
```

- 涨停 52 家 = Fuyao 含 ST（东财 48 不含 ST），**reason 覆盖 100%**
- 4 只 ST 的市值经 `daily_basic` 兜底补齐 → **市值缺失率 0%**
- 龙虎榜：88 条 → `range_days=1` 过滤后 **60 条**（排除 28 条 3 日榜重复）
- 官方情绪：`seal_rate=0.5926`、开板 33、逐档晋级率 `[1板33, 2板12(0.11), 3板1(0.17), 4板2(0.67)]`
- 天梯：近 30 交易日矩阵可用（`board_caps` 已返回）

## 本版修掉的真实缺陷（2 处）

| # | 缺陷 | 后果 |
|---|---|---|
| 1 | `dragon-tiger-list` 的 `date` 必须 `yyyy-MM-dd` | 传 `yyyyMMdd` 被上游判 `1001`（我方 bug 分类器正确报警） |
| 2 | **空池缓存阻断实时抓取** | 历史上取数失败把 `[]` 写库，之后永远返回 0 家（线上实测 zt/dt 显示 0）→ 改为"空列表不信任" |

## 口径纪律落地

- 顶层 `include_st` 标注 + 前端角标（家数与徽标同源 `pools.meta.zt`）
- 晋级率标注「样本内估算，不是全市场晋级率」
- `exact_boards` 与涨停池家数**不可混用**（前者默认排除 ST）
- 涨停原因只使用接口返回值，不自行扩写

## 下一版

v6.9.0：集合竞价 / 热榜 / 异动解读 / 事件流 provider + 两个前端块（13 文件 / 7 包）。
