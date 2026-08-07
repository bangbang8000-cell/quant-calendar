# 量化选股日历 — 交接文档 (HANDOVER)

> 生成时间: 2026-08-07 | 当前版本: v3.5.0 (v3.6.0 开发中)
> 用途: 会话交接, 记录当前进度/未完成工作/已知问题/下一步计划

---

## 1. 项目概况

- **定位**: 个人/小团队 A 股决策操作系统 (美林时钟 × 策略选股 × AI 评估)
- **技术栈**: FastAPI + Vue3 单文件 (零构建) + SQLite + ECharts + Element Plus
- **GitHub**: bangbang8000-cell/quant-calendar
- **路线图**: v3.2.0~v3.9.0 八版本 (见 dev/docs/ROADMAP-v3.X.X.md)

## 2. 目录结构 (仅 dev + ops 两目录)

```
~/.openclaw/workspace/
├── quant-calendar-dev/    # 开发目录 (唯一 git 操作点)
│   ├── backend/           # FastAPI 后端
│   ├── frontend/          # 前端 (index.html 单文件 + js/)
│   │   ├── index.html     # 主页面 (当前 6800 行, 目标 ≤1800)
│   │   ├── css/           # themes.css / tokens.css / layout.css / responsive.css
│   │   └── js/            # 模块 + components/ (v3.6.0 新增)
│   ├── docs/              # 三文档 + ROADMAP + DESIGN-SYSTEM + component-contract
│   ├── tests/             # pytest 测试 (80 个)
│   └── scripts/           # migrate.py 等
└── quant-calendar-ops/    # 测试/部署目录 (真实密钥, 禁 git)
```

## 3. 版本历史 (已完成里程碑)

| 版本 | 内容 | git commit | 测试数 |
|------|------|-----------|--------|
| v3.2.0 | UI 升级 (快捷键/拼音搜索/浮动AI/回测UI/引导/反馈/设计系统) | 4d4cd25 + 3d8fdab | 52 |
| v3.3.0 | 数据可靠层 (SQLite迁移/备份恢复/schema校验/数据管线/导出导入/错误码) | 5513f81 | 67 |
| v3.4.0 | 可观测层 (审计/结构化日志/监控面板/飞书告警/日志轮转/热度统计) | b54e812 | 72 |
| v3.5.0 | AI深化层 (日报周报/RAG/策略推荐/成本控制/模块拆分/mock测试) | 92ee0eb | 80 |

三端一致: GitHub = 群辉 = dev = **92ee0eb** (v3.5.0 里程碑)

## 4. v3.6.0 前端渐进式组件化 — 当前进度

**目标**: index.html 6887 → ≤1800 行, 零构建 Vue3 全局组件

### 已完成
- **T1** ✅ 组件契约文档 `dev/docs/component-contract.md`
- **T2** ✅ provide/inject 共享状态机制 (qcState, 18+ 字段)
- **T3 Sidebar** ✅ 组件化完成并验证:
  - `frontend/js/components/sidebar.js` (Vue3 全局组件, 模板字符串)
  - 浏览器实测: logo/4导航/折叠按钮渲染正常, 折叠/展开/导航切换交互正常
- **T3 GlobalHeader** ✅ 组件化完成并验证 (2026-08-07):
  - 根因: in-DOM 模板中自闭合自定义标签 `<qc-sidebar />`/`<qc-global-header />` 被 HTML 解析器当作未闭合标签, 吞掉后续 main-content 全部内容作为 sidebar 的 slot, 而 Sidebar 无 `<slot/>` 出口 → 主内容区整体消失且零 JS 错误
  - 修复: 改为 `<qc-sidebar></qc-sidebar>` 成对写法 (index.html 78/84 行)
  - 验证: sidebar/global-header/main-content/stat-cards/二级导航/搜索(600519→茅台)/日期选择/用户菜单/主题切换 全部正常, console 零错误, SPA 完整性 template=0 div=-10 dual=0

- **T4 System 页** ✅ 组件化完成并验证 (2026-08-07):
  - `frontend/js/components/system-page.js` (6 子页: status/autoeval/datasource/feature/user/about)
  - index.html 1143-1806 (664 行) → `<qc-system-page></qc-system-page>`, 行数 6802 → 6140
  - **qcState 提升**: setup 整个 return 状态对象 (200+ 字段) 提升为 `qcState` 一次性 provide, T5-T7 无需再扩展
  - 验证: 4 页面导航循环无回归, 6 子页标签齐全, status/autoeval/datasource/feature 内容渲染正常 (AI模型/数据源/策略筛选), console 零错误, SPA 完整性 template=0 div=-3 dual=0
  - ⚠️ 发现原始 bug (非组件化引入, 原始 v3.5.0 实测同样): **user/about 子页永远显示根级配置区, 用户管理/关于内容不可见** — 根因: 原始代码 user/about 的 v-else-if 是 system 根 div 的兄弟节点 (挂在 v-if="currentPage === 'system'" 链上), currentPage 恒为 'system' 时 v-else-if 永不评估。待用户决定是否修复

- **T5 Strategies 页** ✅ 组件化完成并验证 (2026-08-07):
  - `frontend/js/components/strategies-page.js` (4 子页: overview/merrill/market/consensus)
  - index.html → `<qc-strategies-page></qc-strategies-page>`, 行数 6140 → 5876
  - ⚠️ **跨行 div 标签陷阱**: 原始模板 merrill 区域有跨行 div 标签 (属性跨行), 用逐行正则 `re.finditer(r'<div\b[^>]*>')` 会漏计标签导致 div 配对误判, 曾误删 3 个必要闭合标签致 v-else-if 链断裂 (VUE_ERR_CODE 30)。正确做法: 跨行感知追踪 (`full.find('>')` 逐字符扫描) 或 DOMParser 验证
  - 真实结构: 单根 div 含全部 4 子页 v-if 链 (非三兄弟游离结构), 与 System 页不同!
  - 验证: 4 子页全部渲染 (概览统计/美林时钟四阶段/市场行情指数/共识榜), 4 页面导航循环无回归, console 零错误, SPA 完整性 template=0 div=-3 dual=0

- **T6 Calendar 页** ✅ 组件化完成并验证 (2026-08-07):
  - `frontend/js/components/calendar-page.js` (根 div + 2 template 分支: 日/周/月/年视图 + 股票池管理)
  - index.html → `<qc-calendar-page></qc-calendar-page>`, 行数 5876 → 5765
  - 该页结构干净: div 平衡 0、template 3/3 配对、无跨行 div 问题 (与 System/Strategies 不同, 无结构缺陷)
  - 验证: 日视图 (状态筛选 193/70/57/66 + 股票列表 193 只)、股票池管理 (4 统计卡 + 策略分布), 子页切换正常, 4 页面导航循环无回归, console 零错误

- **T7 AI 页** ✅ 组件化完成并验证 (2026-08-07):
  - `frontend/js/components/ai-page.js` (单根 div + 4 子页 v-if 链: overview/history/chat_history/watchlist, 602 行模板)
  - index.html → `<qc-ai-page></qc-ai-page>`, 行数 5765 → 5166
  - 该页结构干净: div 平衡 0、template 4/4 配对、无跨行 div、无结构缺陷
  - 验证: 概览 (5 统计卡 + 策略推荐 3 个 + 快捷操作)、我的自选 (11 只列表)、评估历史/问股历史 (空状态), 子页切换正常, 4 页面导航循环无回归, console 零错误
  - ⚠️ 注意: 页面恢复上次导航位置 (登录后直接显示 AI 页), 测试时先确认当前页再点击

- **T8 壳瘦身** ✅ 完成并验证 (2026-08-07), 行数 5166 → **1106** (目标 ≤1800 达成):
  - 策略研究页组件化: `frontend/js/components/research-page.js` (单根 div + 4 子页 v-if 链), 行数 -52
  - **主 script setup() body 提取至 `frontend/js/app-logic.js`** (215KB, 4013 行逻辑): setup() 缩为 4 行 (`const qcState = window.createAppLogic(); provide('qcState', qcState); return qcState;`), 行数 -4010
  - ⚠️ **陷阱: 提取函数体必须显式 `return qcState;`** — 首次遗漏导致 createAppLogic 返回 undefined, 页面白屏 (Vue 报 "Cannot read properties of undefined")。body 原以 `};` (qcState 定义) 结尾, 函数无 return 时返回 undefined
  - ⚠️ 主 script 剩余部分 (app.use ElementPlus/click-outside 指令/组件注册/app.mount) 保留在 index.html
  - 验证: 登录页+4 页面导航循环无回归 (策略/日历/AI/系统), 股票详情弹窗正常 (000088.SZ 盐田港 84分强势), console 零 JS 错误, SPA 完整性 template=0 div=-3 dual=0

- **T9 全量冒烟对比** ✅ 完成 (2026-08-07), 组件化后功能无差异:
  - **策略总览** 4 子页: 概览(统计卡+数据概览)/美林时钟(四阶段+描述)/市场行情(指数行情)/策略共识榜(共识排行) 全部渲染 ✅
  - **量化日历** 5 子页: 日(5101字)/周(6096)/月(12132)/年(107)/股票池管理 全部渲染 ✅, «上一/下一» 日期导航按钮可点击 ✅
  - **智能评股** 4 子页: 概览(5统计卡+策略推荐)/我的自选(11只)/评估历史/问股历史 全部渲染 ✅
  - **系统配置** 6 子页: 系统状态/自动评股/数据源/功能配置/用户与权限/关于 全部渲染 ✅ (注: user/about 仍显示根级配置区 = T4 记录的原始 bug, 非回归)
  - **全局搜索**: 输入 600519 → 建议"600519.SH 贵州茅台" → 点击 → 股票详情弹窗打开 ✅ (证明 qcState provide/inject 全链路正常)
  - **侧边栏折叠**: sidebar → collapsed 类切换 ✅
  - **用户菜单**: 重新运行初始化向导/修改密码/切换主题(6种)/退出登录 ✅
  - **主题切换**: 点击"土豪金" html data-theme → vibrant-orange ✅
  - **股票详情弹窗**: 000088.SZ 盐田港 84分强势, 持仓105天 ✅
  - console 零 JS 错误 (仅 DEBUG 日志), SPA 完整性 template=0 div=-3 dual=0

- **⚠️ 用户报告的 System 页配置 bug 已修复** (2026-08-07, T4 记录的原始 bug 修复):
  - **现象**: ① 配置页每个子项目都显示 美林时钟/策略数据刷新/策略研究菜单 三个根级配置卡; ② 用户与权限/关于 子页不显示自己的内容 (永远显示根级配置区)
  - **根因**: system-page.js 模板结构缺陷 — ① 三个根级配置卡(原行 376-452)位于 feature 子页的 v-else-if 之外、根 div 之内 → 所有子页都显示; ② user(原 456)/about(原 568)的 v-else-if 游离在根 div 外 → 挂在 `v-if="currentPage === 'system'"` 的 else 链上, currentPage 恒为 system 时永不评估
  - **修复**: 重新拼接模板 — 根级配置区移入 feature 子页内(美林时钟/数据刷新/策略研究 归入功能配置), user/about 移入根 div 内形成完整 6 子页 v-if 链; ⚠️ 注意 feature 的 `</div>` 闭合必须移到配置区之后 (首次拼接保留了 feature 闭合在配置区前 → VUE_ERR_CODE 30)
  - **验证**: 6 子页各自显示自己的内容 (功能配置含 3 配置卡, 用户与权限显示用户列表 2 人+分组 3 个, 关于显示简介/版本/反馈/组件), 4 页面导航无回归, 组件版本号 bump 至 ?v=3.6.0-t9b

- **⚠️ AI 模型管理 API Key 加密失效问题已修复 (2026-08-07, 用户报告)**:
  - **现象**: AI 模型管理配置 API Key 后无法使用 (请求 401)
  - **根因**: ai_models.json 的 api_key 用 Fernet 加密存储; 当 FERNET_KEY 与加密时不一致 (如 .env 重建/迁移) 时, `decrypt_value` 解密失败**原样返回密文** → AI 请求用 gAAAA... 密文当 key → 401; 且前端保存时会把密文再次回传, 后端再次加密 → 双重加密
  - **修复 (按用户建议取消加密)**: `_save_models` 不再加密直接存明文; `_load_models` 对历史密文 (gAAAA 开头) 尝试解密, 失败则置空提示重填; 现有 ops 密文 key 已置空 (密钥丢失无法恢复, 需在界面重新填写)
  - **验证**: 14 个测试全过 (新增 test_save_load_plaintext_roundtrip), 前端填写→保存→明文落盘→加载 roundtrip 正常, 模型管理界面 7 模型密钥框正常显示
  - ⚠️ 注意: 取消加密是安全降级 (PRD S1 原为 Fernet 加密), 已记录; crypto_utils.py 保留用于兼容迁移

### 已创建文件
- `frontend/js/components/sidebar.js` — Sidebar 组件 ✅
- `frontend/js/components/global-header.js` — GlobalHeader 组件 (含二级导航/搜索/日期选择/用户菜单/面包屑)
- `docs/component-contract.md` — 组件契约
- index.html 改动: 引入组件脚本 / provide qcState / Sidebar 模板→`<qc-sidebar />` / Header 模板→`<qc-global-header />`

### 待完成
- T3 GlobalHeader bug 修复 (见 §5)
- T4 System 页组件化 (5h)
- T5 Strategies 页组件化 (6h)
- T6 Calendar 页组件化 (8h)
- T7 AI 页组件化 (6h)
- T8 壳瘦身 ≤1800 行 (3h)
- T9 全量冒烟对比 (4h)
- T10 merrill_clock 模块拆分 (6h)
- T11 前端组件测试 Vitest (6h)
- T12 ADR 决策记录 (2h)
- 验证: 80+ 测试全过 + 里程碑推送

## 5. 已修复 BUG (2026-08-07) ✅

### 原现象
- **侧边栏 (qc-sidebar) 渲染成功**, 图标系统 div 存在
- **global-header 不存在, main-content 不存在, stat-cards 全无** (主内容区整体消失)
- Vue console 零 JS 错误

### 根因 (已定位, 浏览器实测铁证)
**in-DOM 模板 + 自闭合自定义标签**: index.html 的模板直接写在 #app 里 (in-DOM), 浏览器先解析 HTML 再交给 Vue。HTML 解析器不认自定义元素的自闭合写法:
```
输入:  <qc-sidebar /><div class="main-content">X</div><qc-global-header />
解析后: <qc-sidebar><div class="main-content">X</div><qc-global-header></qc-global-header></qc-sidebar>
```
`<qc-sidebar />` 被解析成未闭合的开始标签, 把 main-content (含 global-header 和全部页面) 吞进内部作为 slot 内容; Sidebar 组件无 `<slot/>` 出口 → 内容被静默丢弃。纯 HTML 解析问题, 因此 Vue console 零错误。

### 修复
- index.html 行 78/84: `<qc-sidebar />` → `<qc-sidebar></qc-sidebar>`, `<qc-global-header />` → `<qc-global-header></qc-global-header>`
- ⚠️ 教训: **in-DOM 模板中自定义组件标签必须写成对形式, 禁止自闭合写法** (JS 模板字符串不受此限)

### 验证结果 (浏览器实测)
- sidebar / global-header / main-content / stat-cards 全部渲染
- 二级导航 (日/周/月/年/股票池) 切换正常, 日历页数据完整 (193池/70新入/57持仓)
- 全局搜索 600519 → 贵州茅台 ✓, 日期选择器 ✓, 用户菜单 ✓, 主题切换 ✓
- console 零 JS 错误; SPA 完整性 template=0 div=-10 dual=0

## 6. 关键命令与验证

```bash
# 测试 (必须绕过 conda 崩溃)
cd ~/.openclaw/workspace/quant-calendar-ops
env -i HOME="$HOME" PATH="/usr/bin:/bin" CONDA_NO_PLUGINS=true /usr/bin/python3 -m pytest tests/ -q

# SPA 完整性检查 (template=0, -15<div<-5, dual=0)
python3 -c "
import re
h = open('frontend/index.html').read()
tpl = len(re.findall(r'<template\b', h)) - len(re.findall(r'</template>', h))
div = len(re.findall(r'<div ', h)) - len(re.findall(r'</div>', h))
dual = len(re.findall(r'v-else-if.*v-if\b', h))
print(f'template={tpl} div={div} dual={dual}')"

# 同步 dev → ops (排除密钥)
rsync -a quant-calendar-dev/frontend/ quant-calendar-ops/frontend/
rsync -a quant-calendar-dev/backend/ quant-calendar-ops/backend/ --exclude='__pycache__'

# 重启服务
cd ~/.openclaw/workspace/quant-calendar-ops/backend && fuser -k 8000/tcp; python3 main_new.py --port 8000

# 健康检查
curl -s http://localhost:8000/api/health
```

## 7. 其他重要信息

- **登录**: admin/admin (bcrypt 匹配, 初始化向导已跑过 data/.setup_done)
- **token**: 登录返回 data.access_token (dict)
- **git 推送策略**: 仅里程碑实现或确认无问题后推送 (用户明确要求, 勿频繁推送)
- **前端 js 占位空壳**: ai.js/calendar.js/strategies.js/system.js/users.js 是 10 行占位 (可扩展)
- **后端大模块**: ai_evaluator.py (~1600 行, 已拆指标到 ai_indicators.py), merrill_clock.py (982 行, T10 待拆)
- **测试环境**: conftest.py 用 temp dir 隔离数据
- **v3.6.0 组件化模式** (已验证可用):
  ```js
  // 组件文件 (js/components/xxx.js)
  window.__quantComponents = window.__quantComponents || {};
  window.__quantComponents.Xxx = { name: 'qc-xxx', template: `...`, setup() { const state = inject('qcState'); ... } };
  // 主应用: provide('qcState', {...}) → app.component(comp.name, comp) → 模板 <qc-xxx />
  ```
- **三文档铁律**: PRD/DEV-PLAN/TEST-PLAN 的 FR-x ↔ 3.x-Tn ↔ TC-x 编号互对应, 变更三处同改

## 8. 下一步行动清单

- [x] 修复 GlobalHeader 组件集成 bug (§5) — 2026-08-07 完成, 根因=in-DOM模板自闭合标签
- [x] T4 System 页组件化 — 2026-08-07 完成 (见 §4), 附带发现 user/about 子页原始 bug (待决策)
- [x] T5 Strategies 页组件化 — 2026-08-07 完成 (见 §4), 4 子页全渲染验证通过
- [x] T6 Calendar 页组件化 — 2026-08-07 完成 (见 §4), 视图+股票池管理验证通过
- [x] T7 AI 页组件化 — 2026-08-07 完成 (见 §4), 4 子页全渲染验证通过
- [x] T8 壳瘦身 — 2026-08-07 完成 (见 §4), 行数 5166 → 1106 (目标 ≤1800 达成, research页组件化 + setup body 提取至 app-logic.js)
- [x] T9 全量冒烟对比 — 2026-08-07 完成 (见 §4), 4页×19子页+搜索+主题+折叠+弹窗全通过
- [ ] T10 merrill 拆分 + T11 组件测试 + T12 ADR
- [ ] 三文档 v3.6.0 状态标记 + 里程碑推送 (GitHub + 群辉)
