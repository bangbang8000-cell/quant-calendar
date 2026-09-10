# TEST-PLAN v6.3：导航形态配置化与顶部栏容器化

> 版本：v6.3（草稿，待评审）
> 状态：待用户评审
> 前置：PRD-v6.3 / DEV-PLAN-v6.3

---

## 1 测试策略

| 层 | 手段 | 覆盖对象 |
|---|---|---|
| L1 单元（纯函数） | pytest + node（仿 `tests/tabs_core.test.js`） | `nav-mode-core.js` 状态机 |
| L2 门禁（静态/一致性） | pytest | token/圆角/间距/`subPageNames` 完整性 |
| L3 组件渲染 | pytest + 轻量 DOM（既有模式） | Sidebar/SubNav/Header/TopTabs 形态显隐 |
| L4 视觉回归 | 浏览器实测（桌面/移动视口截图对比） | Header 圆角/间隙/页签圆角/三形态布局 |
| L5 回归 | 既有 V6.x 门禁 + 全量关键集 | 无新增回归 |

> 已知 pre-existing 失败：`test_transition_tokens.py::test_transition_uses_tokens_or_standard`（V6.0 handover 有意设计冲突，**不属于本期范围**，回归记录中注明即可）。

---

## 2 用例明细

### L1 单元 — `nav_mode_core.test.js`（node）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.3.1.1 | `normalizeNavMode('subnav'/'tree'/'toptab')` | 原样返回 |
| TC-6.3.1.2 | `normalizeNavMode('invalid'/'undefined'/null)` | 归一回退 `'subnav'` |
| TC-6.3.1.3 | `tabsVisible` 真值表：`(subnav,T)` `(tree,T)` `(toptab,*)` `(subnav,F)` | 前两者 true，后两者 false |
| TC-6.3.1.4 | `readPrefs`（localStorage 无值） | `{ navMode:'subnav', tabsEnabled:true }` |
| TC-6.3.1.5 | `readPrefs`（localStorage 非法值） | 归一化不抛错 |
| TC-6.3.1.6 | `writePrefs` 往返 | 读回一致 |

### L2 门禁 — `test_v63_m0_gates.py`

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.3.2.1 | 页签圆角 | 所有 `.qc-dynamic-tab` 定义中 `border-radius` 均收敛为 `--qc-radius-small`；不存在 `--qc-radius-full` 分支 |
| TC-6.3.2.2 | Header 圆角 | `.qc-header` 含 `--qc-radius-large` |
| TC-6.3.2.3 | Header 与工作区间隙 | `main-content`/header 相关间距 token 生效（≥8px） |
| TC-6.3.2.4 | subPageNames 完整性 | 以 `allMenuDefs` 全量 subPages 为基准，逐一存在于 `subPageNames`，零遗漏 |
| TC-6.3.2.5 | i18n key | `navMode.*` / `tabsEnabled.*` 在 zh-CN/en 均存在 |

### L3 组件渲染 — `test_v63_navmodes.py`

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.3.3.1 | `navMode=subnav` | SubNav 渲染；Sidebar 无 chevron/children；`main-content` 左边距含中栏 |
| TC-6.3.3.2 | `navMode=tree` | SubNav 隐藏；Sidebar 渲染树状 children；左边距仅侧栏 |
| TC-6.3.3.3 | `navMode=toptab` | SubNav 隐藏；Header 渲染二级 tab；动态页签隐藏 |
| TC-6.3.3.4 | `tabsEnabled=false`（subnav） | 页签隐藏，中栏/导航仍可用 |
| TC-6.3.3.5 | `tabsEnabled=false`（toptab） | 依旧隐藏（tab 承担） |
| TC-6.3.3.6 | 形态切换持久化 | 改 `navMode` 后刷新保持 |

### L4 视觉回归（浏览器实测）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.3.4.1 | 桌面（≥1280）Header 圆角与 12px 间隙 | 截图比对：悬浮圆角条、无贴死 |
| TC-6.3.4.2 | 页签圆角实测 | computed style 为 6px，非椭圆 |
| TC-6.3.4.3 | 三形态切换 | 无横向跳动、`main-content` 左对齐稳定 |
| TC-6.3.4.4 | toptab 二级 tab 交互 | 点击切换、激活高亮、hash 同步 |
| TC-6.3.4.5 | 移动端（375px）三形态 | 无溢出、抽屉/下拉可用 |

### L5 回归

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.3.5.1 | 既有 V6.x 门禁（v62_gates/tabs_core/theme/nav/tokens…） | 通过（除 pre-existing `test_transition_tokens`） |
| TC-6.3.5.2 | 前端 focus 相关（`test_frontend_focus`、`smoke_v542`） | 通过 |
| TC-6.3.5.3 | 构建 | `npm run build` 通过；`/api/health` version 6.3.0 |
| TC-6.3.5.4 | 路由 hash 深链 | `#ai/evaluation-analysis` 直达且标题中文 |

---

## 3 门禁运行命令

```bash
# 纯函数单测
node tests/nav_mode_core.test.js
# V6.3 门禁
.venv\Scripts\python.exe -m pytest tests/test_v63_m0_gates.py tests/test_v63_navmodes.py -q
# 回归集
.venv\Scripts\python.exe -m pytest tests/test_v62_gates.py tests/test_tabs_core.py tests/test_frontend_focus.py tests/e2e/smoke_v542.py -q
# 构建
cd frontend && npm run build
```

## 4 通过标准

- L1–L4 全部通过；L5 无新增失败（允许唯一 pre-existing `test_transition_tokens`）。
- 浏览器实测（桌面 + 移动端）三形态可用、顶部栏容器化生效。
