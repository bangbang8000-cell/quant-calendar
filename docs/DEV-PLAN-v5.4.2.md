# DEV-PLAN v5.4.2 — 体验优化段（用户评审 2026-09-09）

> 背景：v5.4.1 上线后用户四项体验诉求：①取消向导弹窗机制 ②重点跟踪默认加载最近一次
> ③重点跟踪按推荐档位排序+归类 ④入池状态标记（当日新入池 / 历史在池 / 已出池）。

## 1. 需求与实现

| # | 需求 | 实现 | 改动文件 | 状态 |
|---|------|------|---------|------|
| T1 | 评估并取消向导弹窗机制 | 三套自动弹窗（首次使用 tour v3.11 / 5 步 onboarding V5.0.6 / 短线复盘 3 步引导 V5.3.0）默认全部不弹：index.html 移除 onboarding 挂载；ops.js maybeShowTour 与 shortterm-page maybeShowShorttermTour 加全局门禁（`window.__quantGuideModalsEnabled !== true` 直接 return，默认取消）；组件与状态机保留供未来手动入口 | frontend/index.html, frontend/js/app-logic/ops.js, frontend/js/components/shortterm-page.js | ✅ |
| T2 | 重点跟踪默认加载最近的一次评估 | 新增 `focus_store.query_latest_eval()`（trade_date DESC + 时段权重 DESC）+ API `GET /api/focus/latest`；前端挂载先请求 /latest 解析最近日期+时段，再拉 results/history/track（当天无数据不再空白，卡片标题提示「已加载最近一次评估: date · session」） | backend/focus_store.py, backend/api/v1/focus.py, frontend/js/components/focus-view.js | ✅ |
| T3 | 重点跟踪打分排序 + 按推荐档位归类 | results 返回 rows 按推荐档位（level: 强烈推荐→观望）排序 + 组内评分降序；新增 `focus_digest.sort_rows_by_level / group_rows_by_level / LEVEL_ORDER / LEVEL_EMOJI`；缺省 level 由评分回填（`focus_eval.score_to_level`）；返回 `groups` 按档位归类；前端 focus-tier-header 分组渲染 + 每档计数 | backend/focus_digest.py, backend/api/v1/focus.py, frontend/js/components/focus-view.js, frontend/css/layout.css | ✅ |
| T4 | 入池状态标记：当日新入池 / 历史在池 / 已出池 | 新增 `focus_pool_history.derive_pool_state()`（new_pool > in_pool > exited > never）+ `POOL_STATE_LABELS`；/focus/stock/{code}/pool 返回 `pool_state` + `pool_state_label`；前端行徽标 🆕新入池/📍在池/🚪已出池 + 展开行入池历史（首入/最近在池/段数） | backend/focus_pool_history.py, backend/api/v1/focus.py, frontend/js/components/focus-view.js | ✅ |

## 2. 版本与门禁

- APP_VERSION 5.4.1 → 5.4.2（backend/main_new.py 单一来源）
- dist 重建（vite build，index chunk index-CouRcbmd.js）
- 测试：新增 tests/test_focus_v542.py（14 例：latest/store/排序/分组/level 回填/pool_state 纯函数+端点/路由）+ tests/test_guide_modal_disabled.py（4 例：index 无 onboarding 挂载 + 双端门禁 + 组件保留）+ test_frontend_focus.py 追加 3 例（latest 请求/档位渲染/入池徽标）
- 全量：3185 passed / 1 失败（test_shortterm_facts::test_industry_heat_and_leaders，**预先存在**，stash 验证与本次改动无关）
- ruff：All checks passed（backend --select=E,F,W --ignore=E501）

## 3. 验证记录（2026-09-09）

- 后端 API：/api/focus/latest → 2026-09-08 after_close（dev）/ 2026-09-09 pre_open（ops）；/results?date=2026-09-08&session=after_close → rows 按档位+评分排序、groups {推荐:[70,70,70,70,70,62], 谨慎推荐:[55,...,45], 中性:[30]} ✅
- 入池状态：000807.SZ → new_pool/新入池 ✅
- 前端：node --check 全过；bundle 含 /api/focus/latest、新入池、focus-tier-header、已加载最近一次评估；served HTML qc-onboarding 计数 0 ✅
- 双端重启：dev:8001 / ops:8000 /api/health 均 5.4.2，服务 active ✅
- 冒烟截图：focus-smoke-v542.png（待补 0 pageerror 结论）

## 4. 边界与说明

- 向导弹窗保留组件/状态机（onboarding-core.js 等），未来如需手动入口（如设置页「重新引导」）置 `window.__quantGuideModalsEnabled = true` 即可恢复
- 推荐档位口径与 focus_eval.SCORE_LEVEL_MAP 一致（80/60/40/30 阈值）；未知 level 排最后、空 level 由评分回填
- 入池状态优先级：当日新入池 > 当前在池 > 已出池 > 从未入池；「在池」= 最新交易日池内（views_aggregator.all_dates[-1]）
- 本版未做：评估准确性面板、分钟数据管道（5.4.1 边界外另行规划）
