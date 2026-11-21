# 验收记录 — 7.13 明暗双主题整体美术优化

| 项 | 内容 |
|---|---|
| 依据 | `PRD-7.13-VISUAL-REFRESH.md` / `DEV-PLAN-7.13-VISUAL-REFRESH.md` / `TEST-PLAN-7.13-VISUAL-REFRESH.md` |
| 基线 | git HEAD `2d937f3`，`APP_VERSION=7.12.0`（版本号按开发计划未自行修改，由版本治理流程处理） |
| 完成日期 | 2026-11-21 |
| 结论 | **通过**：全量门禁 PASS，视觉基线已重采，`--strict` 0 mismatch，dev/ops 前端一致 |

---

## 1. 交付改动

| 文件（dev） | 改动 |
|---|---|
| `frontend/js/themes.js` | 暗色面层彩度 10~12% → 18~20%（画布/凹陷 20%）；亮色面层 16/26% → 10%；装饰线目标 2.85/2.9 → 2.12（实际 2.10~2.13）；品牌文字新增「白卡 + 页底双取严」求解器（目标 4.9，实际 ≥4.8）；文字三级明度差拉开至 8~10pp；中性档按灰阶重解 |
| `frontend/css/tokens.css` | 明暗表面兜底同步；阴影 alpha 0.05 → 0.10/0.12/0.14；装饰线兜底 2.1:1 |
| `frontend/css/themes.css` | `[data-theme=dark-pro]` / `[data-theme=gold]` 兜底色同步（卡片 `#2d2a1f`、凸起 `#423d2e`、页底 `#eae9e6` 等） |
| `frontend/css/components.css` | 主卡片取消整面 sheen，改 1px 顶边高光 + 轻阴影承载浮起感 |
| `frontend/js/echarts-theme.js` | tooltip 背景由 `--bg-card` 改为 `--surface-raised` |
| `tests/test_visual_art_tokens_713.py`（新增） | A1–A9 运行期美术令牌契约，覆盖 14 套配置 |
| `tests/test_dark_residue.py` | `BORDER_MIN` 2.8 → 2.0，注明上界由 A3 守护 |
| `tests/test_theme_contrast.py` | 品牌文字/页底 4.5 → 4.8；新增文字链接/页底 4.8 |
| `tests/test_chart_tokens.py` | 新增色相桶多样性断言 |
| `tests/parity_golden/frontend_components_630.json` | 修复既有快照漂移（见 §4） |

ops 副本已同步上述 5 个前端文件与 1 个指纹快照；`diff -rq` 两份 `frontend/css`、`frontend/js` 均无输出。

## 2. 关键数值（运行期探针实测）

| 配置 | 画布 / 卡片 / 凸起 | 装饰线/卡片 | 控件边界/卡片 | 焦点环/页底 |
|---|---|---|---|---|
| 亮色·金 45 | `#eae9e6` / `#ffffff` / `#ffffff` | 2.11:1 | 3.88:1 | 3.22:1 |
| 暗色·金 45 | `#12110c` / `#2d2a1f` / `#423d2e` | 2.11:1 | 3.20:1 | 12.17:1 |
| 暗色·蓝 220 | `#0c0e12` / `#1f242d` / `#2e3542` | 2.13:1 | 3.19:1 | 5.96:1 |
| 暗色·中性 | 纯灰 6/15/22% | 2.10:1 | 3.20:1 | 4.02:1 |

亮色品牌文字对白卡/页底最低 ≥4.8:1；14 套配置的层间比、文字对比、色相漂移均通过门禁。

## 3. 测试结果

| 项 | 结果 |
|---|---|
| 新增门禁先红 | 旧实现上 A1/A2/A3/A5/A6 与测试阈值共 6 项失败；A4/A7/A8/A9 为防回退项，旧实现本应绿；`BORDER_MIN` 是下界，旧值偏强由上界 A3 拦截 |
| 定向门禁 | 68 passed（`test_visual_art_tokens_713` + 配色/治理/组件/图表/文字/表面共 13 个文件） |
| 全量 CI 等价门禁 | **GATE_VERDICT=PASS**，4658 passed / 1 skipped / 4 deselected，覆盖率 78.20%（要求 40%），日志 `/tmp/qc_gate_20261121-181333.log` |
| 视觉回归 | `--capture` 重采 11 场景 + 3 个数据 fixture；`--report` 与 `--strict` 各跑一次，11 场景全 PASS，最大差异 0.12%（阈值 0.5%），报告 `tests/e2e/reports/visual-diff.html` |
| dev/ops 一致性 | `diff -rq` 两份 `frontend/css`、`frontend/js` 无差异 |

## 4. 既有缺陷处理（非本轮引入）

首次全量门禁发现 `test_behavior_parity_630.py::test_frontend_component_fingerprints_unchanged` 失败：6 个组件的 `template_len/template_sha` 漂移。用 HEAD 原始文件在临时副本复跑，**同样失败**，确认与本轮配色改动无关。根因是 HEAD 提交 `2d937f3`（六组件 `slot-scope → #default` 修复）未同步指纹快照。已校验漂移仅限 `template_len/template_sha` 两个模板字段后重建该快照，并在 ops 同步；未修改任何测试阈值。

## 5. L4 人工核验清单

- [x] 深色默认金：四级面层可辨且带可感知暖色倾向，不再"灰蒙蒙"（对照 `after-7.13/dark-gold-strategies.png`）。
- [x] 深色蓝/中性：蓝色相明显冷调；中性档仍为纯灰且层级可辨（对照 `dark-blue-strategies.png` / `dark-neutral-strategies.png`）。
- [x] 深色选中项：沿用既有 3px 品牌左边框强调，未新增大面积色块。
- [x] 亮色：画布不再偏旧米黄，白卡通过轻阴影浮起而非灰线框（对照 `light-strategies.png`）。
- [x] 亮色选中态：浅底彩字仍清晰，未回到荧光黄块；品牌文字对页底 ≥4.8:1。
- [x] 表格密集页：弱化描边后控件边界与 hover 态仍明确（对照 `dark-gold-calendar.png`）。
- [x] 涨跌：红涨绿跌语义不变，文字档可读；图表分类色板跨色相。
- [x] 状态完整：hover/focus/active/disabled 由 `test_four_state_631.py`、transition/组件令牌门禁覆盖；loading 由既有组件门禁覆盖。
- [x] 减动效：`test_glass_tokens_622.py` 的降级路径断言通过。
- [x] dev/ops：`diff -rq` 无输出。

## 6. 与计划的偏差（均已量化验证）

| 计划值 | 实际值 | 原因 |
|---|---|---|
| 亮色 secondary/tertiary 32/40pp | 31/39pp | tertiary L40 对新页底仅 4.38:1；改 31/39 同时满足 8pp 层级与 ≥4.5:1 |
| 亮色 muted-foreground L38 → 40 | 保持 L37 | L40 对表头淡底仅 4.32:1；L37 为 4.87:1 |
| 暗色 secondary 不动（72） | 76 | 与 tertiary 66 拉开 ≥8pp，且对卡片 8.27:1 |
| 装饰线目标 2.0 | 求解目标 2.12（实测 2.10~2.13） | 求解器 0.1% 取整会让 2.0 目标落到 1.98~1.99，低于门禁；仍在 1.8~2.2 区间 |
| A9 预期旧实现为红 | 旧实现为绿 | 跨色相 `CATEGORICAL_HUES` 在基线已存在，故 A9 转为防回退断言 |
| 版本命名 7.13.0 | `APP_VERSION` 仍 7.12.0 | 开发计划明确不自行改版本号，`bump_version.py --check` 通过 |

## 7. 产物路径

- 改动前截图：`tests/e2e/screenshots/before-7.13/`（11 张回归 + 6 组对照）
- 改动后截图：`tests/e2e/screenshots/after-7.13/`（6 组对照）
- 新视觉基线：`tests/e2e/screenshots/baseline/` + `tests/e2e/fixtures/`
- 视觉 diff 报告：`tests/e2e/reports/visual-diff.html`
- 全量门禁日志：`/tmp/qc_gate_20261121-181333.log`
