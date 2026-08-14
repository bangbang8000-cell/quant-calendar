# 量化选股日历 v3.16 开发计划 (DEV-PLAN)

> **文档版本**: v1.0 | **日期**: 2026-08-14 | **基线**: v3.15.1
> **配套文档**: 需求 → `PRD-v3.16.md` | 现状调研 → `UI-AUDIT-v3.15.1.md` | 测试 → 待 `TEST-PLAN-v3.16.md`
> **更新规则**: 每个任务完成后更新状态列；需求变更必须三文档同步。

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-14 | - | 基于 PRD-v3.16 v1.0 创建 |

---

## 2. 开发环境与工作流

| 项 | 规定 |
|----|------|
| 开发目录 | `quant-calendar-dev`（coding + testing） |
| 部署目录 | `quant-calendar-ops`（stable release） |
| 同步方式 | dev → ops: 排除 `.env`、`data/`、`.venv/`、`__pycache__/` |
| Git 策略 | 每任务独立 commit；版本完成后创建 tag `v3.16.0` |
| 每任务验证 | 改动文件 ≤ 3 个/次，修改后立即验证；前端改后硬刷新 (Ctrl+Shift+R) |
| 前端回归 | Playwright 截图 diff（报告产出，不阻塞发布） |
| 部署方式 | dev:8001 / ops:8000 手动部署（改后端需重启） |

---

## 3. 版本总览

| 版本 | 主题 | 任务数 | 说明 |
|------|------|:--:|------|
| v3.15 | 名称解析 + SSE + 智能评估 UI + 暗色走查 | 6 | ✅ 已完成 |
| **v3.16** | **体验打磨与系统完备化** | **8** | 本版本（配置完备化 + 架构收敛 + 一致性 + 无障碍 + 性能 + 视觉） |
| v4.0 | 开放平台 | 5 | 顺延至 v3.16 之后 |

---

## 4. v3.16 任务分解

> 顺序建议：A 配置完备化 → B 架构收敛 → C 一致性 → D 无障碍 → E 状态收敛 → F 性能 → G 视觉 → H 质量。B 为地基，D 依赖 B 的收敛。

### 4.1 任务表

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|:--:|----------|:--:|
| 16.1 | 系统配置完备化 — 通用操作栏（保存全部/重置/导出/导入） | FR-3.16.1 | `frontend/js/components/system-page.js`, `frontend/js/system.js`, `frontend/js/components/dialogs/import-config.js`(新) | 4h | grep 8 函数均有 UI 引用；导入非法 JSON 被拒；浏览器逐项 | ✅ |
| 16.2 | 系统配置完备化 — 数据同步/AI 测试/飞书推送入口 | FR-3.16.1 | `frontend/js/components/system-page.js`, `frontend/js/system.js` | 3h | 浏览器实测三入口；飞书测试发送回调 | ✅ |
| 16.3 | qcState 去重 + watch 合并 + 主题单一实现 + fetch 鉴权统一 | FR-3.16.2 | `frontend/js/app-logic.js`, `core.js`, `themes.js`, `index.html` | 4h | 脚本断言无重复键/watch 唯一；主题三入口一致；全量 pytest | ✅ |
| 16.4 | K线下沉 charts.js + 删除空壳占位模块 | FR-3.16.2 | `frontend/js/app-logic.js`, `charts.js`, `index.html` | 3h | K线十字线/MA/周期不回归；浏览器冒烟 0 pageerror | ✅ |
| 16.5 | 涨跌色语义统一 + 对比度达标 + confirm 统一 + 帮助面板同步 | FR-3.16.3 | `css/tokens.css`, `css/themes.css`, `frontend/js/app-logic.js`, `users.js`, `ai.js` | 3h | grep 断言涨跌色一致；对比度脚本 ≥4.5:1；帮助面板 8 快捷键 | ✅ |
| 16.6 | 无障碍：键盘可达 + aria 补齐 + focus-trap + v-html sanitize | FR-3.16.4 | `components/global-header.js`, `calendar-page.js`, `ai-page.js`, `menu-config.js`, `watchlist.js`, `ai-chat.js`, `index-detail.js`, `stock-detail.js` | 4h | 纯键盘完成切页/切主题/筛选/收藏/折叠；sanitize 注入测试 | ✅ |
| 16.7 | ai-page 三列表虚拟滚动 + error/offline 统一错误态 | FR-3.16.5 | `components/ai-page.js`, `components/state-panel.js`, `app-logic.js` | 3h | 500+ 历史滚动流畅；模拟失败出错误态可重试 | ✅ |
| 16.8 | 池信号并发 + 问股历史惰性加载 + 研究页占位处理 | FR-3.16.6 | `frontend/js/ai.js`, `ai-chat.js`, `components/research-page.js` | 3h | 大池提速且可取消；历史首屏无 N 连发 | ✅ |
| 16.9 | 登录页品牌化 + ai-page 聚合模板去重 + inline style 治理 | FR-3.16.7 | `frontend/index.html`, `components/ai-page.js`, `components/system-page.js`, `css/*.css` | 4h | 7 主题无回归；重复模板收敛；TC-11.9 绿 | ✅ |
| 16.10 | 质量护栏：一致性/无障碍回归测试 + 视觉回归基线更新 | FR-3.16.8 | `tests/test_frontend_consistency.py`(新), `tests/test_theme_walkthrough.py`, `tests/e2e/*` | 2h | 新增用例全绿；视觉回归报告无异常 | ✅ |
| 16.10-fix | 股票详情弹窗性能优化：点击立即弹窗(加载态)+后端行情/均线 TTL 缓存 | FR-3.16.9 | `app-logic.js`, `watchlist.js`, `dialogs/stock-detail.js`, `backend/stock_info.py` | 2h | 弹窗即时出现；同股同日二次请求走缓存 | ✅ |
| 16.10-bugfix | 智能评估三处修复：自选K线不加载(tab重置+销毁旧图)/评估历史展开空白(ref取.value)/问股历史恒空(不再以messages过滤) | FR-3.16.10 | `watchlist.js`, `components/history-record.js`, `ai-chat.js`, `main_new.py`(升版3.16.1) | 2h | 三处复现修复；生产验证通过 | ✅ |

### 4.2 任务依赖与并行

- **串行**：16.1 → 16.2（同文件域，顺序提交）；16.3 → 16.4 → 16.6（架构收敛是无障碍/一致性前提）。
- **可并行**：16.5（一致性，独立）可与 16.3 并行；16.7 / 16.8 / 16.9（体验与性能）互相独立可并行；16.10（质量）收尾。

---

## 5. 验收清单

- [ ] 8 个幽灵功能全部可达（grep + 浏览器逐项）
- [ ] qcState 无重复键 / watch(currentPage) 唯一 / 主题单一实现 / fetch 鉴权统一 / 空壳模块移除
- [ ] 涨跌色全站统一（红涨绿跌）/ `--text-tertiary` 对比度 ≥4.5:1 / confirm 统一 / 帮助面板含 8 快捷键
- [ ] 关键交互元素键盘可达 + aria 补齐 + 弹窗 focus-trap + v-html sanitize
- [ ] ai-page 三列表虚拟滚动 + error/offline 统一错误态可重试
- [ ] 池信号并发 + 问股历史惰性加载
- [ ] 登录页品牌化 + 聚合模板去重 + inline style 治理
- [ ] 全量 pytest ≥ 现状 323 用例 + 新增用例全绿
- [ ] Git commit + tag `v3.16.0`；dev:8001 / ops:8000 双端 `/api/health` = 3.16.0；ops 发布冒烟通过

---

## 6. 关键文件依赖图

```
v3.16:
  frontend/js/system.js + components/system-page.js   ← 16.1, 16.2 (配置完备化)
  frontend/js/app-logic.js, core.js, themes.js        ← 16.3 (状态/主题/fetch 收敛)
  frontend/js/charts.js, app-logic.js                 ← 16.4 (K线下沉)
  css/tokens.css, themes.css, app-logic.js            ← 16.5 (语义/对比度/帮助)
  components/*.js, ai-chat.js, index-detail.js        ← 16.6 (无障碍+sanitize)
  components/ai-page.js, state-panel.js, app-logic.js ← 16.7 (状态/列表收敛)
  js/ai.js, ai-chat.js, research-page.js              ← 16.8 (性能)
  index.html, ai-page.js, system-page.js, css/*.css   ← 16.9 (视觉)
  tests/*                                             ← 16.10 (质量护栏)
```

---

## 7. 风险与注意事项

| 风险 | 应对 |
|------|------|
| 架构收敛（16.3/16.4）改动面大 | 每项独立 commit + 全量 pytest + 浏览器冒烟 0 pageerror；改动 ≤3 文件/次 |
| 涨跌色统一涉及全站 | 先加令牌再分批替换；TC-11.9 + 视觉回归截图兜底 |
| 无障碍改造易遗漏 | 16.10 自动化断言（aria 计数 / focusable 检查）纳入 CI |
| 配置完备化新增 UI 回归 | 复用既有 dialog 组件模式 + 既有 API，不引大状态 |
| 与 v4.0 边界 | v3.16 不做新业务；v4.0 开放平台需求保持冻结 |
