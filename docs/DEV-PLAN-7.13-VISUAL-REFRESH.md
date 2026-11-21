# 开发计划 — 7.13 明暗双主题整体美术优化

| 项 | 内容 |
|---|---|
| 对应 PRD | `docs/PRD-7.13-VISUAL-REFRESH.md`（待最终确认） |
| 前置调研 | `docs/EVAL-VISUAL-REFRESH-7.13.md` |
| 基线 | `APP_VERSION = 7.12.0` / git HEAD `2d937f3` / 调研日期 2026-11-21 |
| 目标环境 | dev（`quant-calendar-dev`，PORT=8001）→ 验证用 PORT=8010 → ops（`quant-calendar-ops`）同步 |
| 估算口径 | 单人，单位为「人日」，含自测、不含评审等待 |
| 总量 | **6.5 人日**（M0 0.5 / M1 2.5 / M2 2.0 / M3 1.0 / M4 0.5） |
| 阶段定位 | 本文件是计划；**未获批准前不得开始编码** |

> **未决事项按推荐取值写入（编码前须最终确认）**：目标版本 `7.13.0`；`BORDER_MIN` 由 2.8 下调为 2.0；图表定性色板（FR-6）纳入本轮但作为最后一个可裁减里程碑。

---

## 0. M0 前置准备（0.5 人日）

### T0.1 工作区清理与分支
- dev 仓库当前有 9 个 shell 脚本处于 modified（仅可执行位变化，属已知历史问题）：`docker-entrypoint.sh` + `scripts/*.sh`。提交前用 `chmod +x` 恢复，确保本轮 diff 只含视觉相关文件。
- 从 `2d937f3` 建发布分支；ops 目录保持不动直到 M4。

### T0.2 建立"改动前"视觉对照
- 用 `tests/e2e/visual_regression.py --capture` 的现有基线**不覆盖**，另存一组 before 截图到 `tests/e2e/screenshots/before-7.13/`（不入库为正式基线）。
- 覆盖：策略总览（亮/暗）、日历页（亮/暗）、深色默认金 + 蓝 + 中性，共 6 组；记录数据 fixture 冻结状态。
- 产出：`before-7.13/` 截图 + 对照清单（人工核验用）。

### T0.3 门禁先红（与测试计划联动）
- 在新代码落地前，先按测试计划新增 T1–T5 断言并执行，确认它们在旧实现上**红**；否则门禁与实现同源，等于自证。
- 已完成 `BORDER_MIN` 修改的测试文件也必须在旧实现上红。

**M0 出口**：before 截图就位；新门禁全部为红且失败原因与预期一致。

---

## 1. M1 P0：面层、描边、品牌文字（2.5 人日）

### T1.1 FR-1 深色面层染色与单点强调 — 1.0d
| 项 | 内容 |
|---|---|
| 文件 | `frontend/js/themes.js`（`_neutralRamp` 暗色分支）、`frontend/css/tokens.css` `[data-theme=dark-pro]` 兜底、`frontend/css/themes.css` `[data-theme=dark-pro]` 兜底 |
| 改动 | ① 暗色面层彩度：canvas/sunken 20%、card/raised/hover/nav/input 18%，明度沿用候选（6/15/22/5/19/9）；② 保持 `_borderL` 的色相求解与 `--qc-border` 同名契约；③ 强调点复用已有 `--qc-nav-item-active` / `--brand-soft-text` 等 token，不新增大面积渐变；④ 中性档 `_neutralizeTokens` 不回退 |
| 注意 | 运行期覆盖 CSS 兜底，**三处必须同步**；不得新增双源令牌（`test_color_tokens.py` 上限 98） |
| 验收 | `test_surface_ladder.py` 14 套 ≥1.18；新增面层彩度断言通过；`test_dark_residue.py` 色相漂移 ≤25° |
| 风险 | 中。暖色相（金/红）高彩度易偏棕，需逐色相目视确认 |

### T1.2 FR-2 装饰线与控件边界分层 — 0.5d
| 项 | 内容 |
|---|---|
| 文件 | `frontend/js/themes.js`（`_borderL` 目标值 / `_neutralResolve` 灰阶分支）、`tests/test_dark_residue.py`（`BORDER_MIN`） |
| 改动 | ① 暗色 `--qc-border` 目标 2.9 → **2.0**；② 亮色 `--qc-border` 目标 2.85 → **2.0**；③ `--border-control` 的 3.2 目标保持不变；④ `BORDER_MIN` 改为 2.0 并在 docstring 注明"装饰线弱于控件边界" |
| 注意 | 只降 `--qc-border` / `--card-border`，不得连带降焦点环或控件边界 |
| 验收 | `test_theme_contrast.py` 控件边界/焦点环仍绿；`test_dark_residue.py` 新阈值绿 |
| 风险 | 中。密集表格弱线可能融合，M3 视觉回归重点看表格页 |

### T1.3 FR-3 品牌文字双基准求解 — 1.0d
| 项 | 内容 |
|---|---|
| 文件 | `frontend/js/themes.js`（`generateLightTokens` 的 `txtL` / `_neutralResolve` 的亮色分支）、`tests/test_theme_contrast.py`（`品牌文字/页底` 阈值 4.5 → 4.8，并新增 `--text-link` 对页底断言） |
| 改动 | ① 亮色 `--primary-text`、`--text-link`、`--btn-primary-text-color` 求解基准改为"白卡与页面底色双取严"，目标 ≥4.8:1；② 暗色 `--brand-soft-text` 在 soft 底变化后重解，保持 ≥4.5:1；③ CSS 兜底值同步为求解后的近似值 |
| 验收 | 14 套配置下品牌文字对卡片/页底均 ≥4.8:1；中性档仍为灰阶且满足新阈值 |
| 风险 | 中。金色相原本仅 4.65:1，双取严会压深品牌文字，需目视确认不过重 |

**M1 出口**：P0 门禁全绿；亮/暗各 3 色相的截图对照通过人工初验。

---

## 2. M2 P1：亮色去黄、文字层级、图表语言（2.0 人日）

### T2.1 FR-4 亮色画布去黄与浮起感 — 0.8d
| 项 | 内容 |
|---|---|
| 文件 | `frontend/js/themes.js`（`_neutralRamp` 亮色分支）、`frontend/css/tokens.css`、`frontend/css/themes.css`、`frontend/css/components.css`（阴影消费点） |
| 改动 | ① 亮色 canvas/sunken/hover 彩度 16/16/26% → 10/10/10%（明度不动，保持 1.20:1 阶梯）；② `--qc-shadow-sm/md/lg` alpha 0.05 → 0.10/0.12/0.14，颜色保持暖中性 `rgba(31,29,26,…)`；③ `--glass-sheen` 结构层高光仅保留浮层使用，结构层用 1px 顶部边界 |
| 注意 | 不改激活底饱和度（维持 ≤60%）以免回到"荧光黄选中" |
| 验收 | 亮色画布彩度断言通过；视觉回归中凸起面可区分；`test_glass_tokens_622.py` 不回退 |

### T2.2 FR-5 文字层级拉开 — 0.4d
| 项 | 内容 |
|---|---|
| 文件 | `frontend/js/themes.js`（明暗 `_neutralRamp` 的 tertiary / muted-foreground） |
| 改动 | 亮色 tertiary L37 → 40、muted-foreground L38 → 40；暗色 tertiary L62 → 66、muted-foreground L64 → 66；secondary 不动，形成 ≥8pp 明度差 |
| 验收 | `test_contrast.py` 与 `test_theme_contrast.py` 全部 ≥4.5:1；新增明度差断言通过 |

### T2.3 FR-6 图表与数据语言统一 — 0.8d
| 项 | 内容 |
|---|---|
| 文件 | `frontend/js/echarts-theme.js`、`frontend/css/tokens.css`（图表令牌兜底） |
| 改动 | ① 分类色板改为跨色相 6 档（至少 4 个色相桶），不再同一色相明度阶梯；② tooltip 背景取 `--surface-raised`、轴线/网格沿用 `--chart-axis/-split`；③ 涨跌填充/文字档引用保持分离，不回退到 `--color-up/-color-down` 作文字 |
| 注意 | A 股红涨绿跌固定；不引入新图表库 |
| 验收 | `test_chart_tokens.py` / `test_chart_theme_unify_611.py` 通过；新增色相多样性断言通过；人工核对 2 张多序列图 |

**M2 出口**：P0+P1 门禁全绿；6 组 before/after 截图对照无层级回退。

---

## 3. M3 P2：组件质感收敛（1.0 人日）

### T3.1 FR-7 圆角/阴影/玻璃/状态 — 0.6d
- 圆角仅用 `6/8/12/16` 标尺（`--qc-radius-*`、`--el-border-radius-*`）；清理越标尺值但不改页面结构。
- 浮层三档阴影统一引用 `--qc-shadow-{sm,md,lg}`；结构层不新增 blur。
- hover/focus/active/disabled/loading 五态在明暗两侧逐项检查，过渡仍 0.2s 且尊重 `prefers-reduced-motion`。
- 验收：`test_components_tokens.py`、`test_glass_tokens_622.py`、`test_tokens_no_hardcode.py`、`test_transition_tokens.py` 全绿。

### T3.2 FR-8 dev/ops 同步 — 0.4d
- 把 dev 的 `frontend/css/`、`frontend/js/` 变更同步到 ops 对应目录，`diff -rq` 校验无差异。
- 文档（PRD/计划/报告）仍只在 dev/docs，不复制。
- 验收：`diff -rq <dev>/frontend/css <ops>/frontend/css` 与 js 均无输出。

**M3 出口**：全部门禁 + 视觉回归报告通过；ops 目录一致。

---

## 4. M4 回归、基线与交付（0.5 人日）

### T4.1 全量回归
- `bash scripts/local-ci-gate.sh`（全量，含 lint / 版本 / 全量 pytest / 覆盖率 / 专项门禁）。
- 若 red：按 `docs/wiki/12-CI与门禁.md` 的定位流程处理，不通过改阈值掩盖真实回归。

### T4.2 视觉基线 re-baseline
- 旧基线是旧 UI 的，`--strict` 尚未启用；本轮改动会大面积改变像素，属**正式 re-baseline** 时机。
- `python3 tests/e2e/visual_regression.py --capture --base-url http://127.0.0.1:8010/`，随基线一并提交 `tests/e2e/fixtures/`；随后 `--report` 与 `--strict` 各跑一次，确认 0 mismatch。
- 场景状态断言（expect.title/theme）失败一律拒绝产图，先修场景再重采。

### T4.3 交付清单
- 变更文件清单、门禁输出摘要、视觉回归报告路径、人工核验清单打勾结果、ops 一致性校验结果。

---

## 5. 风险与回退

| 风险 | 应对 |
|---|---|
| 三源不同步导致"改了不生效" | M1/M2 每个任务都同时改 `themes.js` + `tokens.css` + `themes.css`，并在 gate 中校验双源计数 |
| 装饰线过弱导致表格融合 | 保留 `--border-control` 3:1 与 hover 面；M3 视觉回归覆盖表格页 |
| 亮色阴影产生脏边 | alpha ≤0.14，暖中性色；before/after 对照 |
| 品牌文字压深后观感过重 | 以 4.8:1 为下限而非越高越好；人工核验默认金色相 |
| 视觉基线大面积变更掩盖真 bug | 先跑场景断言再 capture；`--strict` 在 re-baseline 后才启用 |

**回退策略**：每个里程碑单独提交；任何门禁 red 不进入下一里程碑；必要时按提交逐项回退到 `2d937f3`。

## 6. 明确不做

- 不改后端、不改数据、不改导航结构/字号阶梯标尺。
- 不改涨跌语义，不引入新 UI 库或图表库。
- 不提前提交/推送；不自行改版本号（版本治理由 `bump_version.py --check` 守护）。
- **未获本计划批准前不执行任何上述任务**。
