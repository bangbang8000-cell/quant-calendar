# 量化选股日历 v3.7 ~ v3.9 开发计划 (DEV-PLAN)

> **文档版本**: v1.0 | **日期**: 2026-08-07 | **基线**: v3.6.0
> **配套文档**: 需求 → `PRD-v3.7-v3.9.md` | 测试 → `TEST-PLAN-v3.7-v3.9.md`
> **更新规则**: 每个任务完成后更新状态列；需求变更必须三文档同步。

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-07 | - | 基于 PRD v1.0 + 六维度评估创建 |

---

## 2. 开发环境与工作流

| 项 | 规定 |
|----|------|
| 开发目录 | `quant-calendar-dev`（coding + testing） |
| 部署目录 | `quant-calendar-ops`（stable release） |
| 同步方式 | dev → ops: `git checkout` 方式，排除 `.env`、`data/`、`.venv/`、`__pycache__/` |
| Git 策略 | 每任务独立 commit；每版本完成后创建 tag |
| 每任务验证 | 改动文件 ≤ 3 个/次，修改后立即验证 |
| 页面验证 | 前端改后硬刷新 (Ctrl+Shift+R) 确认生效 |

---

## 3. 版本总览

| 版本 | 主题 | 任务数 | Bug 修复 | 新功能 | 预估耗时 |
|------|------|:--:|:--:|:--:|:--:|
| v3.7 | 智能与性能 | 14 | 8 | 6 | 2-3 周 |
| v3.8 | 移动与体验 | 14 | 8 | 6 | 2-3 周 |
| v3.9 | 深度与完善 | 13 | 7 | 6 | 2-3 周 |

**总计**: 41 个任务，预估 6-9 周。

---

## 4. v3.7 — 智能与性能

### 4.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 7.1 | SQLite 建复合索引 | FR-3.7.1 | `backend/db.py` | 1h | pytest: 索引存在性 + 查询 EXPLAIN | ⏳ |
| 7.2 | Cache TTL 传参修复 | FR-3.7.2 | `backend/market_data.py` | 0.5h | pytest: 缓存过期时间计算正确 | ⏳ |
| 7.3 | DB 初始化失败熔断 | FR-3.7.3 | `backend/main_new.py` | 0.5h | 手动: 损坏 DB 文件后启动应拒绝 | ⏳ |
| 7.4 | 日历页 viewUnit 修复 | FR-3.7.4 | `frontend/js/components/calendar-page.js` | 0.5h | 浏览器: 按钮显示正确文字 | ⏳ |
| 7.5 | 股票详情空值守卫 | FR-3.7.5 | `frontend/index.html` | 1h | 浏览器: 空数据时不报错 | ⏳ |
| 7.6 | DB 读并发优化 | FR-3.7.6 | `backend/db.py` | 1.5h | pytest: 并发读测试 | ⏳ |
| 7.7 | AI 模型配置内存缓存 | FR-3.7.7 | `backend/ai_evaluator.py` | 1h | pytest: spy 确认无 disk read | ⏳ |
| 7.8 | 静态资源缓存头 | FR-3.7.8 | `backend/main_new.py` | 0.5h | 浏览器 DevTools: Cache-Control 头存在 | ⏳ |
| 7.9 | index.html 内存缓存 | FR-3.7.9 | `backend/main_new.py` | 1h | 单元测试: 首次读磁盘，后续读内存 | ⏳ |
| 7.10 | AI 评估策略归因 | FR-3.7.10 | `backend/ai_evaluator.py`, `backend/prompts/` | 3h | pytest: 归因字段存在 + 浏览器验证 | ⏳ |
| 7.11 | AI 信号解读 | FR-3.7.11 | `backend/ai_evaluator.py`, `frontend/js/components/` | 2h | 浏览器: 入池股票旁显示解读 | ⏳ |
| 7.12 | Prompt 模板化 | FR-3.7.12 | `backend/ai_evaluator.py`, `backend/prompts/evaluate_stock.txt` | 2h | pytest: 模板加载 + 替换结果正确 | ⏳ |
| 7.13 | 美林时钟策略映射 | FR-3.7.13 | `backend/merrill_clock.py`, `frontend/js/merrill.js` | 2h | 浏览器: 详情面板显示策略建议 | ⏳ |
| 7.14 | 评估历史趋势图 | FR-3.7.14 | `frontend/js/components/ai-page.js` | 2h | 浏览器: 趋势图渲染 + 事件标注 | ⏳ |

### 4.2 验收清单

- [ ] pytest 全量通过（≥ 90 用例）
- [ ] SPA 完整性检查通过
- [ ] 浏览器冒烟 SM-1 ~ SM-15
- [ ] DB 索引 EXPLAIN 确认无全表扫描
- [ ] 页面首次加载 < 1.5s
- [ ] Git commit + tag `v3.7.0`

---

## 5. v3.8 — 移动与体验

### 5.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 8.1 | 移动端字体 Token 修复 | FR-3.8.1 | `frontend/css/responsive.css`, `animations.css` | 0.5h | 浏览器: 移动端字体大小正确 | ⏳ |
| 8.2 | 统一导航入口 | FR-3.8.2 | `frontend/js/app-logic.js`, `index.html`, 组件 | 1.5h | 浏览器: 4 种导航行为一致 | ⏳ |
| 8.3 | 异常处理规范化 | FR-3.8.3 | `frontend/js/app-logic.js` | 2h | 代码审查: 0 空 catch | ⏳ |
| 8.4 | 骨架屏系统合并 | FR-3.8.4 | `frontend/css/animations.css`, `themes.css` | 1h | 浏览器: 骨架屏只显示一套 | ⏳ |
| 8.5 | pulse 动画合并 | FR-3.8.5 | `frontend/css/animations.css`, `themes.css` | 0.5h | 浏览器: 动画一致 | ⏳ |
| 8.6 | 键盘焦点指示器 | FR-3.8.6 | `frontend/css/themes.css` | 1h | 浏览器: Tab 遍历可见焦点环 | ⏳ |
| 8.7 | 硬编码色值 Token 化 | FR-3.8.7 | `frontend/css/themes.css` | 1h | grep: `#667eea` 出现 0 次 | ⏳ |
| 8.8 | CSS 死代码清理 | FR-3.8.8 | `frontend/css/layout.css`, `themes.css` | 0.5h | SPA 完整性: 无破坏 | ⏳ |
| 8.9 | PWA 离线缓存 | FR-3.8.9 | `frontend/sw.js` | 3h | Lighthouse PWA 评分 ≥ 85 | ⏳ |
| 8.10 | 底部安全区适配 | FR-3.8.10 | `frontend/css/responsive.css` | 0.5h | DevTools 模拟 iPhone X | ⏳ |
| 8.11 | 触觉反馈 | FR-3.8.11 | `frontend/js/app-logic.js` | 0.5h | 移动设备: 操作时微震 | ⏳ |
| 8.12 | 移动端导航重构 | FR-3.8.12 | `frontend/index.html`, `responsive.css` | 1.5h | 移动设备: 图标+文字布局 | ⏳ |
| 8.13 | 股票详情移动端优化 | FR-3.8.13 | `frontend/index.html`, `responsive.css` | 2h | 移动设备: Sheet 滑入 + 缩放 | ⏳ |
| 8.14 | reduced-motion 适配 | FR-3.8.14 | `frontend/css/animations.css` | 0.5h | 系统动效减弱: 动画暂停 | ⏳ |

### 5.2 验收清单

- [ ] pytest 全量通过（≥ 100 用例）
- [ ] SPA 完整性检查通过
- [ ] 浏览器冒烟 SM-1 ~ SM-15
- [ ] Lighthouse PWA 评分 ≥ 85
- [ ] iPhone X 模拟器: 底部不遮挡
- [ ] 键盘 Tab 遍历: 焦点环可见
- [ ] `#667eea` grep 结果为 0
- [ ] Git commit + tag `v3.8.0`

---

## 6. v3.9 — 深度与完善

### 6.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 9.1 | 周报任务实现 | FR-3.9.1 | `backend/scheduler.py` | 1.5h | pytest: 报告生成 + 推送 | ⏳ |
| 9.2 | AI 评估异步化 | FR-3.9.2 | `backend/ai_evaluator.py` | 2h | pytest: 不阻塞事件循环 | ⏳ |
| 9.3 | AKShare 请求超时 | FR-3.9.3 | `backend/merrill_clock.py` | 0.5h | pytest: timeout 触发后 fallback | ⏳ |
| 9.4 | Mock 数据确定性 | FR-3.9.4 | `backend/market_data.py` | 0.5h | pytest: 同日期结果相同 | ⏳ |
| 9.5 | CSP nonce 改造 | FR-3.9.5 | `backend/main_new.py`, `frontend/index.html` | 3h | 浏览器: CSP 不报 unsafe-inline | ⏳ |
| 9.6 | 页面状态持久化 | FR-3.9.6 | `frontend/js/app-logic.js` | 1h | 浏览器: 刷新后恢复到上次页面 | ⏳ |
| 9.7 | 空白 catch 消除 | FR-3.9.7 | `frontend/js/app-logic.js` | 1h | 代码审查: 0 空 catch | ⏳ |
| 9.8 | 股票对比 | FR-3.9.8 | `frontend/index.html`, `js/components/` | 4h | 浏览器: 对比视图渲染 | ⏳ |
| 9.9 | 自定义筛选器 | FR-3.9.9 | `frontend/js/components/`, `backend/api/v1/` | 3h | 浏览器: 创建+应用筛选 | ⏳ |
| 9.10 | 策略归因看板 | FR-3.9.10 | `frontend/js/components/`, `backend/backtest.py` | 3h | 浏览器: 收益曲线+热力图 | ⏳ |
| 9.11 | 行业热力图 | FR-3.9.11 | `frontend/js/components/`, `backend/api/v1/` | 2h | 浏览器: 热力图渲染 | ⏳ |
| 9.12 | 数据看板 (Dashboard) | FR-3.9.12 | `frontend/index.html`, `js/components/` | 3h | 浏览器: 首页数据展示 | ⏳ |
| 9.13 | 导出增强 (PDF/Excel) | FR-3.9.13 | `backend/api/v1/export.py`, `backend/report_generator.py` | 2h | pytest: PDF/Excel 内容验证 | ⏳ |

### 6.2 验收清单

- [ ] pytest 全量通过（≥ 110 用例）
- [ ] SPA 完整性检查通过
- [ ] 浏览器冒烟 SM-1 ~ SM-15
- [ ] 致命 Bug 数 = 0
- [ ] CSP 无 unsafe-inline/unsafe-eval
- [ ] 刷新后恢复到上次页面状态
- [ ] Git commit + tag `v3.9.0`

---

## 7. 关键文件依赖图

```
v3.7:
  backend/db.py          ← 7.1, 7.6 (独立)
  backend/market_data.py ← 7.2 (独立)
  backend/main_new.py    ← 7.3, 7.8, 7.9 (独立)
  backend/ai_evaluator.py← 7.7, 7.10, 7.11, 7.12
  backend/prompts/       ← 7.12 (被 ai_evaluator 引用)
  frontend/js/components/← 7.4, 7.14

v3.8:
  frontend/css/*         ← 8.1, 8.4, 8.5, 8.6, 8.7, 8.8 (可并行)
  frontend/js/app-logic.js← 8.2, 8.3, 8.11
  frontend/sw.js         ← 8.9 (独立)
  frontend/index.html    ← 8.2, 8.12, 8.13 (依赖 app-logic.js)

v3.9:
  backend/scheduler.py   ← 9.1 (独立)
  backend/ai_evaluator.py← 9.2 (独立)
  backend/merrill_clock.py← 9.3 (独立)
  backend/main_new.py    ← 9.5 (依赖 frontend/index.html)
  frontend/js/app-logic.js← 9.6, 9.7
  frontend/新建组件      ← 9.8, 9.9, 9.10, 9.11, 9.12
  backend/export.py      ← 9.13 (独立)
```

### 7.1 并行执行建议

**v3.7 可并行**：7.1+7.2+7.3（后端独立）、7.4+7.5（前端独立）、7.6+7.7+7.8+7.9（互不依赖）、7.10~7.14（依赖 7.7 完成后）

**v3.8 可并行**：8.1+8.4+8.5+8.6+8.7+8.8（纯 CSS）、8.2+8.3（前端逻辑）、8.9+8.10+8.14（独立）、8.11+8.12+8.13（依赖 8.2）

**v3.9 可并行**：9.1~9.4（后端独立）、9.6+9.7（前端独立）、9.8~9.12（新组件，需先完成 9.6）
