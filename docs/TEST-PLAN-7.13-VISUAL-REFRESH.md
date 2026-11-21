# 测试计划 — 7.13 明暗双主题整体美术优化

| 项 | 内容 |
|---|---|
| 对应 PRD | `docs/PRD-7.13-VISUAL-REFRESH.md` |
| 对应开发计划 | `docs/DEV-PLAN-7.13-VISUAL-REFRESH.md` |
| 基线 | `APP_VERSION = 7.12.0` / git HEAD `2d937f3` |
| 测试基数 | `tests/` 下 300+ 测试文件、全量约 4000+ 用例；本轮不新增后端用例 |
| 阶段定位 | 本文件是计划；**未获批准前不执行新增测试与基线刷新** |

---

## 0. 测试策略：不新建体系，扩展现有运行期门禁

现有设施已足够覆盖 14 套配置（明/暗 × 7 色相含中性）：

| 组成 | 文件 | 作用 |
|---|---|---|
| 运行期探针 | `tests/color_probe.js` | Node 执行 `themes.js`，收集运行期内联 token |
| 解析器 | `tests/color_gate.py` | `CONFIGS / resolved() / pair() / color()`，按浏览器级联解析 |
| 对比度契约 | `tests/test_theme_contrast.py` | 文本 4.5 / 非文本 3.0 |
| 表面阶梯 | `tests/test_surface_ladder.py` | 相邻面亮度比 ≥1.18 |
| 暗色残留 | `tests/test_dark_residue.py` | 色相漂移 ≤25°、容器描边 `BORDER_MIN` |
| token 治理 | `tests/test_color_tokens.py`、`test_tokens_no_hardcode.py` | 悬空/死 token/双源上限 98/禁硬编码 |
| 图表 | `tests/test_chart_tokens.py`、`test_chart_theme_unify_611.py` | 图表主题一致 |
| 视觉回归 | `tests/e2e/visual_regression.py` | Playwright 截图 + fixture 冻结 + 像素 diff 报告 |

**硬性原则**：新增断言必须先在**旧实现**上跑出红（M0/T0.3），再让实现变绿；否则门禁与实现同源，等于自证。

---

## 1. 测试分层

| 层 | 类型 | 触发 | 判定 |
|---|---|---|---|
| L0 | 运行期 token 契约（14 套配置） | 每次改 `themes.js` / `tokens.css` / `themes.css` | 硬门禁，红即阻断 |
| L1 | 静态治理（硬编码/双源/明暗对称/令牌消费） | 每次改 CSS | 硬门禁 |
| L2 | 视觉回归（Playwright 截图） | 每个里程碑出口 | 场景断言硬失败；像素 diff 默认信息性，`--strict` 后硬失败 |
| L3 | 全量回归 + CI 等价门禁 | 发布前 | 0 fail，不新增 skip |
| L4 | 人工美术核验 | 发布前 | 清单逐项打勾 |

---

## 2. 新增与修改的测试文件

### 2.1 新增 `tests/test_visual_art_tokens_713.py`（核心，L0）

以 `color_gate.resolved(mode, hue)` 为唯一取值口径，用 `re` 解析 `hsl(h, s%, l%)` 的 s/l。

| # | 断言 | 阈值 | 预期旧实现 |
|---|---|---|---|
| A1 | 深色 `--surface-card/raised/hover/input/nav-bg` 彩度 ∈ [18,20]，`canvas/sunken` ∈ [20,24]（中性档跳过） | 逐令牌 | **红**（现状 10–12） |
| A2 | 亮色 `--surface-canvas/sunken/hover` 彩度 ≤10（中性档跳过） | ≤10 | **红**（现状 16/16/26） |
| A3 | `--qc-border` 对 `--surface-card` 对比度 ∈ [1.8,2.2]（明暗 × 7 色相 + 中性） | 2.0±0.2 | **红**（现状 2.77–2.86） |
| A4 | `--border-control` 对卡片 ≥3.0、`--qc-ring` 对页底 ≥3.0 | 保持 | 绿（防回退） |
| A5 | `--text-secondary` 与 `--text-tertiary` 明度差 ≥8pp，且 tertiary 对卡片 ≥4.5 | 8pp / 4.5 | **红**（现状 5pp） |
| A6 | 亮色 `--primary-text`、`--text-link`、`--btn-primary-text-color` 对**卡片与画布**均 ≥4.8；暗色 `--brand-soft-text` 对 soft 底 ≥4.5 | 4.8 / 4.5 | **红**（金页底现状 4.65） |
| A7 | 中性档 `--primary-text`/`--qc-ring`/`--border-control` HSL 彩度 = 0 | 0 | 绿（防回退） |
| A8 | 暗色 4 个残留令牌色相漂移 ≤25°（复用 `test_dark_residue` 口径） | ≤25° | 绿（防回退） |
| A9 | 图表分类色板至少 4 个不同色相桶（ hue 差 ≥30°） | ≥4 桶 | **红**（同色相明度阶梯） |

> A3 与 `test_dark_residue.BORDER_MIN` 是同一口径的两处表达：一处做精确区间，一处做下界门禁，避免改阈值后无人拦截上界（过弱）。

### 2.2 修改 `tests/test_dark_residue.py`
- `BORDER_MIN = 2.8` → `2.0`，docstring 增加："容器描边为装饰线，强度必须弱于控件边界 3:1；上界由 `test_visual_art_tokens_713.A3` 守护"。
- 旧实现上该断言为红（2.77 > 2.0）。

### 2.3 修改 `tests/test_theme_contrast.py`
- `CHECKS` 中 `("品牌文字/页底", ..., 4.5)` 阈值 → **4.8**；新增 `("文字链接/页底", "--text-link", "--surface-canvas", None, 4.8)`。
- 其余 36 项不动，`--border-control` 与 `--qc-ring` 断言保持 3.0。

### 2.4 修改 `tests/test_chart_tokens.py`
- 新增 A9 对应断言：从 `frontend/js/echarts-theme.js` 的分类色定义中解析色相，断言不同桶 ≥4；`--chart-bg == --surface-card` 旧断言保留。

### 2.5 不修改但必须保持绿的门禁
`test_surface_ladder.py`、`test_color_tokens.py`、`test_contrast.py`、`test_tokens_no_hardcode.py`、`test_components_tokens.py`、`test_glass_tokens_622.py`、`test_transition_tokens.py`、`test_chart_theme_unify_611.py`、`test_v66_m2_tokens.py`。

---

## 3. 执行命令

在 WSL 内、项目根目录执行；使用项目 venv 解释器（全局 python 会误报环境类失败）：

```bash
PY=/home/evergreen/quant-calendar/quant-calendar-dev/.venv/bin/python
BASE=/home/evergreen/quant-calendar/quant-calendar-dev

# L0 新增契约（先红后绿）
$PY -m pytest $BASE/tests/test_visual_art_tokens_713.py -q
$PY -m pytest $BASE/tests/test_dark_residue.py $BASE/tests/test_theme_contrast.py -q

# L1 治理门禁
$PY -m pytest $BASE/tests/test_color_tokens.py $BASE/tests/test_tokens_no_hardcode.py \
  $BASE/tests/test_components_tokens.py $BASE/tests/test_glass_tokens_622.py \
  $BASE/tests/test_transition_tokens.py $BASE/tests/test_surface_ladder.py -q

# 图表
$PY -m pytest $BASE/tests/test_chart_tokens.py $BASE/tests/test_chart_theme_unify_611.py -q

# L3 全量（CI 等价）
bash $BASE/scripts/local-ci-gate.sh

# L2 视觉回归（服务用 PORT=8010，避开常占用的 8000–8004）
python3 $BASE/tests/e2e/visual_regression.py --report --base-url http://127.0.0.1:8010/
python3 $BASE/tests/e2e/visual_regression.py --strict  --base-url http://127.0.0.1:8010/
```

> 注意：本机的 `wsl bash -lc` 会吞掉 shell 变量，落盘脚本中一律使用绝对路径；上面的 `PY` / `BASE` 仅用于阅读，实际执行请展开为绝对路径。

---

## 4. 视觉回归与基线管理

- **不覆盖旧基线做对照**：before 截图放 `tests/e2e/screenshots/before-7.13/`，不入库为正式基线。
- **正式 re-baseline** 在 M4 执行：`--capture --base-url http://127.0.0.1:8010/`，同时提交 `tests/e2e/fixtures/`（冻结 `/api/dashboard` 等 4 个实时端点）。
- 场景期望状态（page/tab/title/theme）断言失败 → 记 MISMATCH 且**拒绝产图**，先修场景再重采；不得绕过。
- 差异阈值：亮度 >20 视为差异像素、差异占比 >0.5% 判为视觉变更；re-baseline 前 `--strict` 保持关闭。

覆盖场景（亮/暗 × 默认金/蓝/中性）：

| 场景 | 关注点 |
|---|---|
| 策略总览（今日一屏） | 卡片层级、KPI 数字、装饰线弱化后是否可辨 |
| 日历页 | 表头 muted / 涨跌文字 / 密集表格弱线 |
| 个股详情 | 头卡、图表 tooltip 与分类色板 |
| 系统配置浮层 | 下拉/日期选择器/对话框的 raised 面与阴影 |
| 深色主屏 | 面层染色是否仍读成灰、强调点是否唯一 |
| 亮色主屏 | 画布是否仍偏黄、白卡是否浮起 |

---

## 5. L4 人工美术核验清单

逐项打勾，任一不通过则回退对应里程碑：

- [ ] 深色默认金：四级面层可辨且带可感知暖色倾向，不再"灰蒙蒙"。
- [ ] 深色蓝/中性：色相切换有差异；中性档仍为纯灰且层级可辨。
- [ ] 深色选中项：仅 1–2 处品牌强调，无新增大面积色块。
- [ ] 亮色：画布不再偏旧米黄，白卡通过阴影浮起而非灰线框。
- [ ] 亮色选中态：浅底彩字仍清晰，未回到荧光黄块。
- [ ] 表格密集页：弱化描边后控件边界与 hover 态仍明确。
- [ ] 涨跌：红涨绿跌语义不变，文字档可读，图表多序列可区分。
- [ ] 状态完整：hover/focus/active/disabled/loading 五态明暗一致。
- [ ] 减动效：`prefers-reduced-motion` 下无背景循环动画。
- [ ] dev/ops：`diff -rq` 两份 `frontend/css`、`frontend/js` 无输出。

---

## 6. 出口条件与缺陷处理

| 出口 | 条件 |
|---|---|
| M0 | 新断言在旧实现上全红，原因符合预期 |
| M1 | A1/A3/A5/A6 与 `BORDER_MIN` 全绿；品牌文字 14 套 ≥4.8 |
| M2 | A2/A9 与图表门禁全绿；人工核验前 6 项通过 |
| M3 | L1/L3 全绿；dev/ops 一致 |
| M4 | 视觉基线 re-baseline 完成，`--strict` 0 mismatch；L4 清单全勾 |

缺陷分级：P0 = 对比度破线 / 场景断言失败 / 涨跌语义错误（阻断发布）；P1 = 层级不可辨、强调点失控（阻断人工验收）；P2 = 观感细节（记录并排期）。

**未获本计划批准前不执行任何测试命令，也不刷新视觉基线。**
