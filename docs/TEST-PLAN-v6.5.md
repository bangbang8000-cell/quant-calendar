# TEST-PLAN v6.5：短线复盘数据修复与全站界面美化

> 版本：v6.5（草稿，待评审）
> 状态：待用户评审
> 前置：PRD-v6.5 / DEV-PLAN-v6.5

---

## 1 测试策略

| 层 | 手段 | 覆盖对象 |
|---|---|---|
| L1 单元（后端逻辑） | pytest | `_spot_pct_map` 缺 akshare 降级、`_overview_bundle` 兜底、`get_lhb` 字段 |
| L2 门禁（静态/一致性） | pytest | 搜索框宽度 token、弹窗容器圆角/overflow token、emoji 残留扫描、AppIcon 白名单 |
| L3 组件渲染 | pytest + 轻量 DOM（既有模式） | 龙虎榜降级提示条分支、`lhbReason` 状态 |
| L4 视觉回归 | 浏览器实测（桌面/移动视口截图对比） | 搜索框窄宽、弹窗圆角、图标统一、系统配置图标 |
| L5 回归 | 既有 V6.x 门禁 + 全量关键集 | 无新增回归 |

> 已知 pre-existing 失败：`test_transition_tokens.py::test_transition_uses_tokens_or_standard`（V6.0 handover 有意设计冲突，**不属于本期范围**，回归记录中注明即可）。
> 运行环境说明：`.venv` 未安装 akshare —— L1 中「缺 akshare 降级」用例即为**真实环境**用例，无需 mock import。

---

## 2 用例明细

### L1 单元 — `test_v65_m0_gates.py`

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.5.1.1 | 无 akshare 时调用 `_spot_pct_map()` | 返回 `{}` 空映射，不抛 `ModuleNotFoundError` |
| TC-6.5.1.2 | `_overview_bundle(date)` 在任一指标异常时 | 返回部分 bundle + `error` 标记，不整体抛错 |
| TC-6.5.1.3 | `get_lhb` 缓存命中 | 响应含 `available=True`、`reason=None`、`rows` 为列表 |
| TC-6.5.1.4 | `get_lhb` 全源失败 | 响应含 `available=False`、`reason` 非空、`rows=None` |
| TC-6.5.1.5 | `/api/shortterm/overview` 无 akshare 环境 | HTTP 200，各指标含 `available` 字段，无 500 |

### L2 门禁 — `test_v65_m1_gates.py` / `test_v65_m2_icons.py`

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.5.2.1 | 搜索框宽度 | `.qc-header-search` 定义中 `width:220px` 且无 `flex:1` |
| TC-6.5.2.2 | 弹窗容器圆角 | `.el-dialog.kline-dialog` 含 `border-radius: var(--qc-radius-xl)` + `overflow:hidden` |
| TC-6.5.2.3 | detail-header 圆角对齐 | `.detail-header` 含圆角声明，不与容器圆角冲突 |
| TC-6.5.2.4 | emoji 残留扫描 | `frontend/` 下 js/vue 文件**静态模板位** emoji 计数归零（白名单允许列表：`🔄` 等已映射位） |
| TC-6.5.2.5 | AppIcon 白名单 | 新增 name（brain/lightbulb/octagon-x/flag/package/clipboard-list/candle-stick/pin/radio-tower）均有效映射 |

### L3 组件渲染 — `test_v65_lhb_render.py`（或并入 M0 门禁）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.5.3.1 | `lhbReason` 非空（available=false） | 渲染降级提示条，含原因摘要；不渲染空态 |
| TC-6.5.3.2 | `lhbReason` 为空且 rows 为空 | 渲染「该交易日暂无龙虎榜数据」空态 |
| TC-6.5.3.3 | reason 过长 | 折叠显示，仅展示首行，可展开 |

### L4 视觉回归（浏览器实测）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.5.4.1 | 短线复盘-概览（桌面） | 正常加载，无「加载失败」；指标卡显示或标「不可用」 |
| TC-6.5.4.2 | 短线复盘-龙虎榜 | 全源失败显示降级提示条（含原因）；真无数据显示空态 |
| TC-6.5.4.3 | Header 搜索框（1280px） | 固定 ~220px，贴近铃铛图标，不随窗口伸缩 |
| TC-6.5.4.4 | 个股弹窗顶部 | 「📈 股票详情分析」标题区 + 代码/名称头部四角圆润、无直角剪裁 |
| TC-6.5.4.5 | 指数弹窗顶部 | 同上 |
| TC-6.5.4.6 | 个股/指数弹窗内部 | 无彩色 emoji，图标统一为 Lucide 线条 |
| TC-6.5.4.7 | 系统配置二级菜单（强刷） | 12 个子页图标各自区分，无「无图标」 |
| TC-6.5.4.8 | 美林时钟/批量评估/系统页 | emoji 已替换，风格一致 |
| TC-6.5.4.9 | 移动端（375px） | 搜索框/弹窗/图标无溢出，深色模式对比度正常 |

### L5 回归

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.5.5.1 | 既有 V6.x 门禁（v63_gates/navmodes/v62_gates/tabs_core/theme/nav/tokens…） | 通过（除 pre-existing `test_transition_tokens`） |
| TC-6.5.5.2 | 前端 focus / smoke 相关 | 通过 |
| TC-6.5.5.3 | 构建 | `npm run build` 通过；`/api/health` version 6.5.0 |
| TC-6.5.5.4 | 数据源健康 | 双数据源「已连接」状态保持（`.env` token 未变） |

---

## 3 门禁运行命令

```bash
# V6.5 门禁
.venv\Scripts\python.exe -m pytest tests/test_v65_m0_gates.py tests/test_v65_m1_gates.py tests/test_v65_m2_icons.py -q
# 回归集
.venv\Scripts\python.exe -m pytest tests/test_v63_m0_gates.py tests/test_v63_navmodes.py tests/test_v62_gates.py tests/test_tabs_core.py tests/test_frontend_focus.py tests/e2e/smoke_v542.py -q
# 构建
cd frontend && npm run build
```

## 4 通过标准

- L1–L4 全部通过；L5 无新增失败（允许唯一 pre-existing `test_transition_tokens`）。
- 浏览器实测（桌面 + 移动端）：概览正常、龙虎榜降级原因可见、搜索框窄宽、弹窗圆角、全站图标统一、系统配置图标正常。
