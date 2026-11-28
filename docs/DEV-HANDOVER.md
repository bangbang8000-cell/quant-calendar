# 开发交接手册（DEV-HANDOVER）

> 面向「接手继续开发新功能」的实操手册。读完本文你应当能：独立起环境、看懂代码分层、按既有契约新增一个功能域、跑通全部门禁、避开已知的致命坑。
>
> - 当前版本：**v7.11.0**（`backend/main_new.py::APP_VERSION` 为单一来源）
> - 仓库：`/home/evergreen/quant-calendar/quant-calendar-dev`（开发） / `quant-calendar-ops`（运行）
> - 本文与 `docs/HANDOVER.md`（历史变更流水）分工：**本文讲"怎么做"，HANDOVER 讲"做过什么"**
> - 最后更新：2026-11-20

---

## 0. 读完先做三件事

```bash
cd /home/evergreen/quant-calendar/quant-calendar-dev

# ① 静态层 10 秒自检（lint + 版本 + 前端模板编译）
bash scripts/local-ci-gate.sh --fast
# 期望末行: GATE_VERDICT=PASS (fast)

# ② 起一份临时实例, 验证"当前代码真能提供当前版本的功能", 验完自动关停
bash scripts/deploy-smoke.sh --port 8020
# 期望末行: SMOKE_VERDICT=PASS

# ③ 动代码前跑一次全量单测, 建立"改动前是绿的"这个基准
bash scripts/local-ci-gate.sh          # 约 3~4 分钟, 4459 用例
```

三件事都绿了再动手。**如果 ③ 一开始就是红的，先修基准，不要带着红基线开发** —— 否则你无法区分"我弄坏的"和"本来就坏的"。

---

## 1. 五分钟环境速查

### 1.1 关键路径

| 用途 | 路径 |
|---|---|
| 开发仓库 | `/home/evergreen/quant-calendar/quant-calendar-dev` |
| 运行仓库（生产配置） | `/home/evergreen/quant-calendar/quant-calendar-ops` |
| **测试用 Python**（唯一可用 venv） | `/home/evergreen/quant-calendar/quant-calendar-ops/.venv/bin/python` |
| 后端入口 / 版本单一来源 | `backend/main_new.py` |
| 前端构建配置 | `frontend/vite.config.mjs` |
| 构建产物（已入库） | `frontend/dist/` |
| SQLite 库 | `data/app.db` |
| 迁移清单 | `backend/migrations/` |

> **注意**：dev 目录下没有可用 venv，所有 pytest / 脚本一律用 ops 的 venv。`scripts/local-ci-gate.sh` 已自动探测，手动跑时请显式写全路径。

### 1.2 端口约定

| 端口 | 身份 | 配置 |
|---|---|---|
| 8001 | dev | `DEBUG=True` |
| 8000 | ops | `DEBUG=False` |
| 8020 | 冒烟临时实例 | 由 `deploy-smoke.sh` 起停 |

启动命令：

```bash
# dev
cd /home/evergreen/quant-calendar/quant-calendar-dev
PORT=8001 <ops venv>/bin/python -m backend.main_new

# ops
cd /home/evergreen/quant-calendar/quant-calendar-ops
PORT=8000 .venv/bin/python -m backend.main_new
```

`main_new.py` 在 `__main__` 分支会先跑 `startup_guard.preflight()`（端口占用 / 依赖缺失 / 目录不可写 / 库损坏），体检不过直接退出并写 `data/startup_check.json`，不抛裸栈。所以"起不来"先看这个文件。

### 1.3 依赖栈实测版本

```
Python 3.11.16 / Node v26.7.0
fastapi 0.165.0    pydantic 2.14.4    uvicorn 0.54.0
pandas 3.1.1       numpy 2.4.6        duckdb 2.0.0        pytest 9.2.0
```

**不要用 dev 目录的 Python 3.13/3.14 跑测试**，与锁文件不一致会出假失败。

---

## 2. 代码地图

### 2.1 后端（FastAPI，`backend/` 311 个 py）

分层原则：**领域模块（`backend/*.py`）不依赖 API 层，API 层只做参数校验与编排。**

```
backend/
├── main_new.py          入口 + APP_VERSION 单一来源 + 中间件 + /api/health
├── config.py            settings（读 .env）
├── db.py                SQLite 连接（WAL）
├── auth.py              get_current_user / get_active_user / get_admin_user / get_non_guest_user
├── rbac.py              角色权限矩阵
├── api/v1/
│   ├── router.py        路由汇总（52 个 include_router）—— 新路由必须在此登记
│   ├── market.py        行情（673 行，接近 700 上限）
│   ├── timing_api.py    择时（v7.5）
│   ├── pattern.py       形态匹配（v7.6）
│   ├── param_governance.py  参数治理（v7.7）
│   ├── execution.py     执行计划（v7.8）
│   ├── stock_report.py  五维报告（v7.9）
│   └── marketplace.py   策略市场（v7.10）
├── migrations/
│   ├── runner.py        ★ 迁移引擎 + _load_migrations() 显式 import 清单
│   └── _00NN_xxx.py     单条迁移（当前到 _0011）
├── timing/              v7.5 择时策略实现（8 策略 + Overlay + HMM）
├── pattern_match/       v7.6 四维特征 + DTW 匹配 + 案例库
├── shortterm/           短线复盘（三池/天梯/龙虎榜/情绪）
├── data_sources/        四源管理（sxsc-tushare → tushare → akshare → fuyao）
├── dwh/                 DuckDB 面板（唯一允许 import vendor 的地方）
└── strategy_sdk/        策略编写 SDK 与模板
```

### 2.2 前端（Vue 3 SPA，零构建原生 JS + Vite 打包）

**这是最容易踩坑的部分。** 前端不是标准 SFC 项目，而是"全局对象 + 字符串模板 + 运行时编译"。

```
frontend/
├── index.html           模板占位符 {{NONCE}} / {{APP_VERSION}} 由后端注入
├── src/
│   ├── globals.js       挂 window.Vue / window.ElementPlus
│   └── main.js          ★ 副作用 import 清单，顺序有约束
├── js/
│   ├── core.js          ★ apiFetch / withAuthHeaders（鉴权注入唯一实现）
│   ├── nav-merge-core.js ★ 导航结构单一来源（NEW_NAV，可被 node require 单测）
│   ├── command-panel-core.js  DEFAULT_COMMANDS / 快捷键
│   ├── locales/         五语包（zh-CN / zh-TW / en / ja / ko，key 必须一一对应）
│   ├── app-logic/       workspace.js（subPageNames）/ runtime.js（组件补注册）
│   └── components/
│       ├── strategies/view-part1.js + view-part2.js + view.js   页面模板分治
│       ├── research/view-part1.js  + view-part2.js + view.js
│       ├── overlay-radar.js          独立功能组件（qc-timing-radar）
│       └── ...
├── css/
│   ├── tokens.css       设计令牌（颜色/字号/间距，明暗两套）
│   └── themes-pages.css 页面级样式（新样式优先加这里）
└── dist/                构建产物（入库，改源码后必须重建）
```

### 2.3 前端组件生命周期（必须理解）

```
main.js 按顺序副作用 import
  ↓
组件文件执行 → window.__quantComponents.Xxx = { name: 'qc-xxx', template, setup }
  ↓
页面模板里写 <qc-xxx> 标签（字符串模板）
  ↓
runtime.js 在 mount / 切页时遍历 __quantComponents 补注册到 Vue app
  ↓
Vue 运行时编译字符串模板（★ 编译错误在浏览器控制台，构建期查不出来）
```

因为**组件注册对象创建时即取 `template` 的值**，页面模板片段（`view-part1/2.js`）必须先于组件文件加载。`main.js` 的 import 顺序是这个系统的隐藏契约。

---

## 3. 新增一个功能域：逐层落地清单

以下 12 步是一个功能域从后端到前端的完整链路。**少任何一步都会被门禁拦住**（后文第 4 节给了对应关系）。以 v7.11 的「择时雷达」为真实范例。

### 第 1 步：后端领域模块

```
backend/<domain>/            例: backend/timing/
├── __init__.py
├── strategies.py            策略实现
└── engine.py                计算引擎
```

约束：单个 `.py` **≤ 700 行**（`tests/test_module_size_630.py` 硬门禁）。超了就按职责拆。

### 第 2 步：数据库迁移（需要新表时）

新建 `backend/migrations/_00NN_<name>.py`，四要素缺一不可：

```python
VERSION = 12                    # 递增整数，不能跳号
NAME = "xxx"                    # 表名/主题
DESCRIPTION = "..."             # 中文说明

_SQL = (
    ("CREATE TABLE IF NOT EXISTS xxx ("
     " id TEXT PRIMARY KEY,"
     " created_at TEXT NOT NULL)"),
    ("CREATE INDEX IF NOT EXISTS idx_xxx_created ON xxx(created_at)"),
)

def upgrade(conn):
    for sql in _SQL:
        conn.execute(sql)

def downgrade(conn):
    conn.execute("DROP TABLE IF EXISTS xxx")
```

**关键：必须在 `backend/migrations/runner.py::_load_migrations()` 的 import 清单与元组里登记**，否则迁移根本不会被执行（而且不会报错，你只会发现表不存在）。

### 第 3 步：API 路由

新建 `backend/api/v1/<domain>.py`：

```python
from fastapi import APIRouter, Depends, HTTPException
from auth import get_non_guest_user          # 普通业务：拒绝访客
# from auth import get_admin_user            # 管理操作：仅管理员

router = APIRouter(prefix="/timing", tags=["择时研究"])

@router.get("/strategies")
async def list_strategies(_: dict = Depends(get_non_guest_user)):
    ...
```

**鉴权依赖不能省**。漏了会导致裸访问返回 200，`deploy-smoke.sh` 第 4 组会直接报错，五维审计的 L 维（逻辑清晰）也会扣分。

然后在 `backend/api/v1/router.py` 登记：

```python
from .timing_api import router as timing_router   # v7.5 择时研究
...
api_router.include_router(timing_router)
```

### 第 4 步：导航注册（前端入口的门票）

编辑 `frontend/js/nav-merge-core.js` 的 `NEW_NAV`：

```js
{
  key: 'research', name: '策略研究', iconName: 'flask-conical', group: 'research',
  members: [
    // ... 已有成员
    { key: 'pattern-lab', page: 'research', sub: 'pattern-lab' },   // 新成员加在末尾
  ],
},
```

三条硬约束，改错直接红：

1. **一级恰为 7 个**，键序固定 `strategies / calendar / shortterm / ai / research / ops / system`
2. **单域成员 ≤ 7**（`MAX_VISIBLE_SUBS`），超了顶部标签条会溢出
3. **二级总数变动要同步改断言数量**（`tests/test_release_650_nav.py` 里的 `total === 41`）

### 第 5 步：中文兜底（i18n 缺词时不露 raw key）

同一文件的 `SUB_NAMES`（或等价映射）里补一行：

```js
'research.pattern-lab': '形态匹配',
```

### 第 6 步：页面模板分支

在对应域的 `view-part2.js` 里加分支（`v-else-if` 链，必须在最后一个 `v-else` 之前）：

```html
<div v-else-if="currentSubPage === 'pattern-lab'" class="card">
    <qc-pattern-lab></qc-pattern-lab>
</div>
```

> 为什么放 part2：`view-part1.js` 与 `view-part2.js` 是同一模板的两个片段，`view.js` 做 `part1 + part2` 字符串拼接。新子页追加在末尾，不要插到中间打乱既有顺序。

### 第 7 步：功能组件

新建 `frontend/js/components/<name>.js`：

```js
// 注释写清：消费哪个端点、产出什么、边界在哪
(function () {
  const { ref, computed, onMounted } = Vue;
  const S = () => window.__quantModules.v711;      // 共享层（可选）

  window.__quantComponents = window.__quantComponents || {};
  window.__quantComponents.PatternLab = {
    name: 'qc-pattern-lab',                         // 必须 qc- 前缀
    template: `
      <div class="qc711-panel">
        <qc-state-panel v-if="error" type="error" title="加载失败" :desc="error" @retry="load"></qc-state-panel>
        <template v-else> ... </template>
      </div>`,
    setup() {
      const error = ref('');
      // ...
      onMounted(load);
      return { error, load };                       // ★ 模板用到的每个标识符都必须 return
    },
  };
})();
```

**两条铁律：**

1. **模板里引用的每个标识符，`setup` 的 `return` 里必须存在**。漏一个 → Vue 在 render 期抛错 → **静默丢弃整棵子树**，页面标题正常、内容区全空白、控制台可能没红字。这个坑在历史上造成过「自选列表不渲染」的 P0 故障。
2. **四态（加载 / 空 / 错误 / 有数据）必须有 `qc-state-panel`**，否则 `tests/test_four_state_631.py` 红。

### 第 8 步：main.js 接线

在 `frontend/src/main.js` 的合适位置加 import（页面片段在前，组件在后，都在 `app-logic` 之前）：

```js
import '../js/v711-shared.js'
// ...
import '../js/components/research-page.js'
import '../js/components/pattern-lab.js'      // ← 新增组件放这一带
```

### 第 9 步：子页中文名（回退映射）

`frontend/js/app-logic/workspace.js` 的 `subPageNames`：

```js
'pattern-lab': '形态匹配',
```

漏了会被 `tests/test_v63_m0_gates.py::test_subpage_names_complete` 精确点名。

### 第 10 步：命令面板直达

两处都要加，缺一则 `tests/test_convenience_631.py` 红：

```js
// frontend/js/command-panel-core.js 的 DEFAULT_COMMANDS
{ key: 'open-pattern-lab', label: '打开形态匹配', icon: 'flask-conical', keywords: 'pattern 形态 匹配' },
```

```js
// frontend/js/components/command-panel.js 的 runCommand
if (key === 'open-pattern-lab') { goTab('research', 'pattern-lab'); return; }
```

判据是「7 个一级页的全部子页均有一条命令可直达」。

### 第 11 步：五语包

`frontend/js/locales/{zh-CN,zh-TW,en,ja,ko}.js` 各补同名 key（key 必须五者一一对应，缺词守卫会校验）：

```js
'sub.pattern-lab': '形态匹配',
```

### 第 12 步：样式

优先加到 `frontend/css/themes-pages.css` 末尾，**全部走令牌**：

```css
.qc711-panel { background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-2); }
.qc711-hint  { font-size: var(--qc-font-size-xs); color: var(--text-secondary); }
```

两条硬线：

- **禁止裸 `font-size: 13px`**，必须用 `var(--qc-font-size-xs|sm|base|md|lg|xl|2xl|3xl)`（`test_type_scale.py` + `test_typography_scale_620.py`）
- **禁止新增裸色值**（`#fff` / `rgb(...)`），令牌化率门禁 A1 要求 ≥ 75%，当前 95.5%，别往下拉

### 第 13 步：补测试

新增 `tests/test_<domain>_v<ver>.py`，至少覆盖：

| 类型 | 内容 |
|---|---|
| 纯逻辑 | 核心算法/特征提取的输入输出（离线、无网络、无 DB） |
| API 契约 | 用 `TestClient` 打端点，断言状态码与关键字段 |
| 边界 | 参数非法 → 400；取不到数据 → 422 且**不落脏数据** |

参考实现：`tests/test_pattern_case_v711.py`（4 项，含"提不到特征时不留空壳"）。

---

## 4. 门禁体系：13 道关卡

**跑法**：`bash scripts/local-ci-gate.sh`（全量） / `--fast`（只 L1）。

| # | 门禁 | 判据 | 典型报错 | 修复动作 |
|---|---|---|---|---|
| 1 | `test_bundle_budget_v534` | 首屏静态源码 ≤ **1,400,000 B**；`app-logic.js` ≤ **104 KB**；全量 dist 由 `scripts/report_bundle_size.py --gate` 兜底 | `首屏源码 JS 超预算` | **优先拆包/按需 import，不要直接提数字**。提数字须在注释写明"只降不升"并列入审核判断点 |
| 2 | 同上 `test_no_generated_bundle_in_src` | 文件名 basename 含 `min` 或 `vendor` 即判为构建产物 | `疑似把构建产物提交进 src` | **改文件名**。别改判据（对真 min.js 仍有效）。已踩过：`timing-radar.js` 因 "ti**min**g" 被误判，改名 `overlay-radar.js` |
| 3 | `test_module_size_630` | 单 py **≤ 700 行** | `超过 700 行` | 按职责拆文件 |
| 4 | `test_type_scale` / `test_typography_scale_620` | 禁止 CSS 裸 `font-size: Npx` | `硬编码字号` | 映射到 `var(--qc-font-size-*)` |
| 5 | `test_four_state_631` | `PAGES` 里每个子页必须有空态+错误态标记 | `模板新增分支未登记` | 补 `PAGES`；若四态由子组件承载，登记到 `STATIC_SUBPAGES` 并写明原因 |
| 6 | `test_convenience_631` | 每个子页有命令直达 + 每条命令有 `runCommand` 分支 | `以下子页无命令面板直达入口` | 第 10 步 |
| 7 | `test_release_650_nav` | 一级 7 个、键序固定、`MAX_VISIBLE_SUBS=7`、二级总数 | `38 个旧二级页应全部登记, 实际 41` | 同步改断言数量（这是**允许**改的，因为二级页数量本就该增长） |
| 8 | `test_v63_m0_gates` | `subPageNames` 覆盖全部子页 | `subPageNames 漏配: [...]` | 第 9 步 |
| 9 | `test_behavior_parity_630` | 组件指纹（`template_len` / `template_sha` / `classes` / `icons`）与基线一致 | `frontend_components_630 指纹变更` | `QC_PARITY_REGEN=1 pytest tests/test_behavior_parity_630.py` 重建基线，并在提交信息里说明"只新增未改动" |
| 10 | `test_frontend_consistency` | 样式一致性 / 未定义类 / 令牌无硬编码 | 见具体断言 | 按提示改 |
| 11 | `test_version_governance_610` + `bump_version --check` | 5 类来源版本一致（APP_VERSION / README / HANDOVER / tag / 提交前缀） | `版本不一致` | `python scripts/bump_version.py <新版本>` |
| 12 | `scripts/five_dim_audit.py` | A/C/E/L/O 五维，无 FAIL | `C1 新功能前端可达性 fail` | 补前端消费（`FRONTEND_MARKERS` 里的路由片段必须在 `frontend/js` 或 `frontend/src` 出现） |
| 13 | `frontend/scripts/check-templates.js` | 每个组件模板能被 `@vue/compiler-dom` 编译 | `failed=1` | 检查标签闭合 / 属性引号（这是唯一能在构建期发现"静默白屏"的手段） |

### 4.1 五维审计怎么用

```bash
<ops venv>/bin/python scripts/five_dim_audit.py            # 终端输出
<ops venv>/bin/python scripts/five_dim_audit.py --md docs/QUALITY-AUDIT-v<ver>.md   # 写报告
```

五维与权重：**美观 A / 便捷 C / 高效 E / 逻辑清晰 L / 方便运维 O，各 0.2**。
当前基线：**100.0 / PASS（FAIL 0 / WARN 0）**。任何一维掉 FAIL 都必须在本版修完，不能带着 FAIL 发版。

关键检查项（改动前先知道）：
- `A1` 设计令牌覆盖率 ≥ 75%（现 95.5%）
- `C1` 新功能前端可达性 ≥ 60%（现 7/7 = 100%）
- `L2` 迁移连续性（版本号不许跳号/重复）
- `O2` 启动自检项数

### 4.2 上线前必跑

```bash
# 全量门禁
bash scripts/local-ci-gate.sh

# 部署冒烟（独立端口，验完自动关停）
bash scripts/deploy-smoke.sh --port 8020

# 五维复检
<ops venv>/bin/python scripts/five_dim_audit.py --md docs/QUALITY-AUDIT-v<ver>.md
```

三项全绿 + 验收文档写完，才算交付。

---

## 5. 九个坑（踩了就白干）

### 坑 1：模板写错标签 = 整块静默消失

构建期（vite）**不校验字符串模板语法**。写错一个闭合标签，Vue 在运行时静默丢弃整棵子树：页面标题在、内容区空白、可能没有任何红色报错。

**防御**：每次改模板后跑 `node frontend/scripts/check-templates.js`，或直接 `local-ci-gate.sh --fast`。

### 坑 2：`setup` 漏 return 一个标识符

同样表现为整块静默消失。模板里出现的每个 `xxx` 都必须在 `setup` 的 `return` 对象里。

**防御**：新增状态时，先写 `return`，再写模板。

### 坑 3：组件文件名含 `min` / `vendor`

`test_no_generated_bundle_in_src` 按 basename 判定构建产物。`timing-radar.js` 曾因 "ti**min**g" 被拦。

**防御**：新组件名避开 `min` / `vendor` 子串。

### 坑 4：迁移写了但没登记

`backend/migrations/_00NN_x.py` 建好了，忘了加进 `runner.py::_load_migrations()` → 表不存在，且**没有任何报错**。

**防御**：写完跑 `python -m pytest tests/test_migrations.py -q`，它会校验清单一致性。

### 坑 5：改了源码没重建前端

`frontend/dist/` 是入库的，后端直接服务它。改 `frontend/js/**` 后不重建，浏览器拿到的还是旧代码。

```bash
cd frontend && node node_modules/vite/bin/vite.js build
```

首次构建若报 `Permission denied`（vendored 二进制丢失执行位）：

```bash
chmod +x node_modules/.bin/* node_modules/@esbuild/linux-x64/bin/esbuild
```

**验证构建是否成功**：重建后 `git status --short` 应为空 —— 说明产物 hash 与仓库内已跟踪的一致（构建可复现）。若出现 `dist/` 变更，说明源码确实变了，需要一起提交。

### 坑 6：`apiFetch` 只认 JSON

`core.js::apiFetch` 会按 JSON 解析响应体。**text/csv 与 text/html 端点会让它抛解析错**。

**防御**：导出类端点走原生 `fetch` + `blob`。参考 `exec-plans-panel.js`（CSV 导出）与 `stock-report-panel.js`（HTML 报告）。

另外 `apiFetch` 遇 **401 会清 `quant_token` 并 `location.reload()`** —— 调试时看到"页面自己刷新了"通常是这个。

### 坑 7：`wsl bash -lc` 吞变量

在 WorkBuddy 的 `wsl bash -lc '...'` 里，`$var`、`$(...)`、反引号会被外层提前展开/吞掉，表现为循环变量为空、`chmod: cannot access ''`、`unexpected EOF`。

**防御**：多步命令**落盘成 `.sh` 文件**再执行：

```bash
wsl bash -lc 'tr -d "\r" < /tmp/x.sh > /tmp/x2.sh && bash /tmp/x2.sh'
```

`tr -d "\r"` 是为了去掉 Windows 侧写入带进来的 CRLF。

### 坑 8：Edit 工具改 WSL 文件可能"报成功但没落盘"

**防御**：改完必须 `grep` 关键行复核。UNC 路径（`//wsl.localhost/...`）编辑偶发 `ModifyBackup failed`。

### 坑 9：端口 8000/8001 被别的项目占用

本机曾长期被 QuantMind 的 docker 栈占用，导致 `/api/health` 返回的是别的应用。

**防御**：起服务前先确认

```bash
curl -s http://127.0.0.1:8001/api/health | head -c 120
# 应含 "version": "7.11.0"；若返回 {"message":"..."} 就是别人占着
```

---

## 6. 现有能力清单（先查再写，避免重复造）

### 6.1 后端已交付的域（52 个 router）

| 域 | 主要端点 | 交付版本 |
|---|---|---|
| 行情 | `/api/market/*`（K线/大盘/数据源/WS） | v6.x |
| 日历 | `/api/calendar/*`、`/api/views/*` | v6.x |
| 自选 | `/api/watchlist/*`、`/api/groups/*` | v6.x |
| AI 评估 | `/api/ai/*`、`/api/chat/*` | v6.x |
| 短线 | `/api/shortterm/*`（三池/天梯/龙虎榜/竞价/热榜/异动） | v5.2 / v6.9 |
| 研究 | `/api/research/*`（行业强度/情绪脉冲/拓扑/共振/财务/PIT/回测） | v7.0~v7.3 |
| DWH | `/api/dwh/*`（DuckDB 面板） | v7.0 |
| 五维评分 | `/api/strategies/*/score` | v7.4 |
| 择时 | `/api/timing/*`（策略/评估/市场状态） | v7.5 |
| 形态匹配 | `/api/pattern/*`（案例库/四维匹配/从标的提特征） | v7.6 |
| 参数治理 | `/api/strategies/*/lock`、`/lock/audit` | v7.7 |
| 执行 | `/api/execution/plans*`、`/api/strategy-execution/*` | v7.8 |
| 五维报告 | `/api/reports/stock/{symbol}` | v7.9 |
| 策略市场 | `/api/marketplace/*` | v7.10 |
| 运维 | `/api/health`、`/metrics`、`/api/system/*`、`/api/jobs/*`、`/api/audit/*` | v4.x~v6.x |

### 6.2 前端已建的能力基座

- **导航**：7 域 41 二级页（`nav-merge-core.js`）
- **命令面板**：40+ 条命令 + 快捷键（`command-panel-core.js`）
- **四态**：`qc-state-panel`
- **虚拟滚动**：`virtual-list.js`（长列表必须用）
- **设计令牌**：`tokens.css`（颜色/字号/间距/圆角，明暗双套）
- **i18n**：五语包 + 缺词守卫
- **共享取数层**：`v711-shared.js`（`api()` / `post()` / `pct()` / `num()` / `stateLabel()`）
- **撤销栈**：`undo-core.js`（破坏性操作 5s 可撤）
- **请求竞态治理**：`request-core.js`（stale guard / dedupe / abort）

---

## 7. 技术债与建议的下一步

### 7.1 已登记、待处理

| 项 | 性质 | 建议 |
|---|---|---|
| 源码 JS 预算已上调至 1.70 MB（v7.3 后唯一一次） | **架构债** | 下一版起新面板走**按需 import / 路由分包**，预算只降不升 |
| 五维 C1 用字符串包含判定前端可达性 | **误报源**（v7.9 已误报一次） | 改成"从前端源码抽真实请求路径再与后端路由表比对" |
| 组件指纹基线 `frontend_components_630.json` 全量重建 | 可追溯性弱 | 改增量记录（只记变更项） |
| `guest/guest` 默认口令告警 | 安全 | 改密 / 禁用访客 / 显式接受 |
| 远程 GitHub CI 未触发（本地等价门禁为准） | 流程 | 凭证配好后补跑一次，确认与本地一致 |
| `e2e` / `network` 用例未跑（4 deselected） | 覆盖缺口 | 有浏览器环境时跑 `-m e2e` |

### 7.2 建议的功能方向（PRD 无后续规划，需先补 PRD）

1. **按需分包**（先还债再加功能）：把六个 v7.11 面板改成 `defineAsyncComponent` + 路由级 chunk，预算回落到 1.5 MB 以下。
2. **执行域接券商**：目前只做计划与回填，不接实盘通道（刻意保守）。接之前先补风控与幂等。
3. **因子库扩容**：在 `backtest_lab` 加因子注册，而不是调参（README 路线图已列）。
4. **PostgreSQL 存储后端**：README 路线图已列，可选替代 SQLite。
5. **形态匹配扩维**：v7.6 是四维（趋势结构 / KDJ 状态 / 量能形态 / 价格形态），可加"资金流 / 板块联动"维度。

---

## 8. 命令速查

```bash
DEV=/home/evergreen/quant-calendar/quant-calendar-dev
OPS=/home/evergreen/quant-calendar/quant-calendar-ops
PY=$OPS/.venv/bin/python

# ---------- 质量 ----------
bash $DEV/scripts/local-ci-gate.sh --fast     # L1 静态（10s）
bash $DEV/scripts/local-ci-gate.sh            # 全量（5~6min）
bash $DEV/scripts/local-ci-gate.sh --no-cov   # 全量不统计覆盖率
bash $DEV/scripts/deploy-smoke.sh --port 8020 # 部署冒烟
bash $DEV/scripts/deploy-smoke.sh --base http://127.0.0.1:8000  # 只验已运行实例
$PY $DEV/scripts/five_dim_audit.py            # 五维审计
$PY $DEV/scripts/five_dim_audit.py --md docs/QUALITY-AUDIT-v<ver>.md

# ---------- 单点排查 ----------
$PY -m pytest tests/test_<x>.py -q            # 单个测试文件
$PY -m pytest tests/ -k "pattern" -q          # 按关键字
$PY -m pytest tests/ -m "not e2e and not network" -q   # CI 同口径
QC_PARITY_REGEN=1 $PY -m pytest tests/test_behavior_parity_630.py  # 重建指纹基线
node $DEV/frontend/scripts/check-templates.js  # 模板编译（checked=N failed=0）

# ---------- 前端构建 ----------
cd $DEV/frontend && node node_modules/vite/bin/vite.js build

# ---------- 启动 ----------
cd $DEV && PORT=8001 $PY -m backend.main_new          # dev
cd $OPS && PORT=8000 .venv/bin/python -m backend.main_new   # ops

# ---------- 版本 ----------
$PY scripts/bump_version.py --check           # 校验 5 类来源一致
$PY scripts/bump_version.py 7.12.0            # 升版本（连带 README / HANDOVER）

# ---------- 同步 ----------
cd $DEV && git add -A && git commit -m "..." && git push origin master
cd $OPS && git fetch ../quant-calendar-dev master -q && git reset --hard FETCH_HEAD -q
```

---

## 9. 交付一个版本的完整动作序列

按 v7.4~v7.11 的实际做法，一个中版本（`v7.X.0`）的收尾是这样的：

1. **功能落地** —— 按第 3 节的 13 步逐层实现
2. **补测试** —— 新域至少 3 类用例（纯逻辑 / API 契约 / 边界）
3. **全量门禁** —— `local-ci-gate.sh`，把红的一项项修到全绿
4. **前端重建** —— 确认 `git status` 干净（产物可复现）
5. **部署冒烟** —— `deploy-smoke.sh --port <临时端口>`，必须 PASS
6. **五维复检** —— 生成 `docs/QUALITY-AUDIT-v<ver>.md`，必须 PASS
7. **写验收文档** —— `docs/ACCEPTANCE-v<ver>.0.md`，含：本版定位 / FR 对应 / 测试结果 / 连带暴露的问题 / 部署冒烟证据 / 终态门禁证据 / 交审判断点
8. **提交** —— 代码一个 commit，验收证据一个 commit（便于回溯）
9. **同步 ops** —— `git fetch` + `reset --hard`，确认 0 脏文件
10. **交审** —— 汇报时把"没做到的"和"需要裁定的"明确列出来，不虚报

**纪律**：验收文档里凡是没跑的项目，明确写"未触发，原因 X"，不要留空让人误以为跑过了。

---

## 10. 找谁 / 看哪里

| 想了解 | 去处 |
|---|---|
| 版本历史明细 | `docs/CHANGELOG.md` |
| 各版怎么验收的（含实测数字） | `docs/ACCEPTANCE-v<ver>.0.md` |
| v7.5~v7.11 七版审核入口 | `docs/REVIEW-PACKAGE-v7.5-v7.11.md` |
| 设计系统（字号/颜色/间距/组件规范） | `docs/DESIGN-SYSTEM.md` |
| 回测口径为何改、影响面 | `docs/BACKTEST-RECALIB-v7.11.0.md` |
| 部署与故障排查 | `DEPLOYMENT.md` |
| 产品迭代规划（v7.4~v7.10） | `docs/PRD-7.X.X.md` |
| 架构与数据源说明 | `README.md` + `docs/wiki/` |

---

## 附：一句话总结这个项目的开发范式

> **契约先行，门禁兜底。** 导航结构、组件注册、鉴权注入、迁移清单、i18n key —— 每一层都只有一个"单一来源"，改动必须顺着单一来源走；而 13 道门禁的作用是：**当你不小心绕过了单一来源，它会在本地就把你拦住，而不是等用户打开页面看到白屏。**
