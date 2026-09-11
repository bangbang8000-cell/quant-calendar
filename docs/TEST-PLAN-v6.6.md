# TEST-PLAN v6.6：界面美术打磨收尾

> 版本：v6.6（草稿，待评审）
> 状态：待用户评审
> 前置：PRD-v6.6 / DEV-PLAN-v6.6

---

## 1 测试策略

| 层 | 手段 | 覆盖对象 |
|---|---|---|
| L1 门禁（静态/一致性） | pytest | AppIcon 回退、emoji 残留扫描、状态图标、暗色 token、工具类 |
| L2 单元（纯函数） | pytest + node | AppIcon 映射逻辑（若有抽函数） |
| L3 视觉回归 | 浏览器实测（桌面/移动/暗色截图对比） | 无 emoji 残留、图标统一、暗色可读、布局无回归 |
| L4 回归 | 既有 V6.5/V6.x 门禁 + 全量关键集 | 无新增回归 |

> 已知 pre-existing 失败：`test_transition_tokens.py::test_transition_uses_tokens_or_standard`（V6.0 handover 有意设计冲突，**不属于本期范围**，回归记录中注明即可）。

---

## 2 用例明细

### L1 门禁 — `test_v66_m0_gates.py` / `test_v66_m2_tokens.py` / 扩展 `test_v65_m2_icons.py`

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.6.1.1 | AppIcon 非白名单 name | 渲染默认 `circle-dot`，模板无文本回退分支 |
| TC-6.6.1.2 | AppIcon 白名单 | 新增 name（star-off/upload/gem/folder-open/link/save/trash-2/pause/help-circle/play-circle）均有效映射 |
| TC-6.6.1.3 | emoji 残留扫描 | `research/ai/calendar/focus-view/history-record/command-panel/global-header` + `index.html` 装饰性 emoji 计数 = 0（语义白名单 ⭐☆✓✗● 保留） |
| TC-6.6.1.4 | 状态指示图标 | system-page 数据源健康/self-heal 无 `✓/✗` 文本，用 check/x 图标或 status-dot |
| TC-6.6.1.5 | 暗色语义色 | dark-pro 块含 `--color-success` 等对齐 `--el-*` 覆盖；`--qc-muted-foreground` 提亮值 |
| TC-6.6.1.6 | 弹窗实底 | dark-pro 下 `--el-dialog-bg-color`/`--el-dropdown-bg-color` 为不透明 `--qc-card` 值 |
| TC-6.6.1.7 | 语义工具类 | `utilities.css` 或 `components.css` 含 `.qc-text-*`/`.qc-bg-*-subtle`/`.qc-status-dot.is-*`/`.qc-merrill-*` |
| TC-6.6.1.8 | 旧 token 引用下降 | themes.css 高频区块 `var(--font-`/`--sp-`/`--r-`/`--shadow-` 引用较基线（759/92/227/39）下降 ≥60%/40%（分层断言） |
| TC-6.6.1.9 | 兼容层保留 | tokens.css 旧别名映射至 `--qc-*` 仍存在 |

### L2 单元（若 AppIcon 映射抽为纯函数）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.6.2.1 | `resolveIcon('star')` | 返回 Star 组件 |
| TC-6.6.2.2 | `resolveIcon('unknown-name')` | 返回 circle-dot 默认组件 |

### L3 视觉回归（浏览器实测）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.6.3.1 | 策略研究页（桌面） | 概览/快捷入口/策略运行区无 emoji，图标统一 |
| TC-6.6.3.2 | 智能评估页（桌面） | KPI 卡/批量操作/聊天视图无 emoji |
| TC-6.6.3.3 | 量化日历页（桌面） | 标题/股票行标记无 emoji |
| TC-6.6.3.4 | 重点跟踪/评估历史/命令面板/全局菜单 | 无 emoji，等级点彩色 dot 化 |
| TC-6.6.3.5 | 暗色主题（dark-pro）全站抽查 | 语义色/hover/muted 对比度可读，弹窗/下拉实底 |
| TC-6.6.3.6 | 移动端（375px）抽查 | 无横向溢出，图标与文字对齐 |
| TC-6.6.3.7 | 策略总览美林时钟 | 阶段色 class 化后视觉与改造前一致（实时色保留内联项除外） |

### L4 回归

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.6.4.1 | V6.5 门禁（test_v65_m0/m2）+ V6.3/V6.2 门禁 | 通过（除 pre-existing `test_transition_tokens`） |
| TC-6.6.4.2 | 前端 focus/smoke 相关 | 通过 |
| TC-6.6.4.3 | 构建 | `npm run build` 通过；`/api/health` version 6.6.0 |
| TC-6.6.4.4 | 数据源健康 | 双数据源「已连接」状态保持（`.env` token 未变） |

---

## 3 门禁运行命令

```bash
# V6.6 门禁
.venv\Scripts\python.exe -m pytest tests/test_v66_m0_gates.py tests/test_v66_m2_tokens.py tests/test_v65_m2_icons.py -q
# 回归集
.venv\Scripts\python.exe -m pytest tests/test_v65_m0_gates.py tests/test_v63_m0_gates.py tests/test_v63_navmodes.py tests/test_v62_gates.py tests/test_tabs_core.py tests/test_frontend_focus.py tests/e2e/smoke_v542.py -q
# 构建
cd frontend && npm run build
```

## 4 通过标准

- L1–L3 全部通过；L4 无新增失败（允许唯一 pre-existing `test_transition_tokens`）。
- 浏览器实测（桌面 + 移动 + 暗色）：全站无装饰性 emoji、图标统一、暗色可读、布局无回归。
