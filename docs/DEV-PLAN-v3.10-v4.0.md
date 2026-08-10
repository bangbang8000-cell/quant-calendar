# 量化选股日历 v3.10 ~ v4.0 开发计划 (DEV-PLAN)

> **文档版本**: v1.0 | **日期**: 2026-08-11 | **基线**: v3.8.2
> **配套文档**: 需求 → `PRD-v3.10-v4.0.md` | 测试 → `TEST-PLAN-v3.10-v4.0.md`
> **更新规则**: 每个任务完成后更新状态列；需求变更必须三文档同步。

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-11 | - | 基于 PRD v1.0 + v3.8.2 代码审查创建 |

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
| 部署方式 | v3.12 起使用 `scripts/deploy.sh`（health-gated + 自动回滚） |

---

## 3. 版本总览

| 版本 | 主题 | 任务数 | Bug 修复 | 新功能 | 预估耗时 |
|------|------|:--:|:--:|:--:|:--:|
| v3.10 | 可靠性加固 | 7 | 3 | 4 | 1-1.5 周 |
| v3.11 | 数据自动化 | 6 | 1 | 5 | 1-2 周 |
| v3.12 | 可观测与部署 | 6 | 1 | 5 | 1-2 周 |
| v3.13 | AI 深化与通知矩阵 | 6 | 0 | 6 | 1.5-2 周 |
| v4.0 | 开放平台 | 5 | 0 | 5 | 2 周+ |

**总计**: 30 个任务，预估 6.5-9.5 周。

---

## 4. v3.10 — 可靠性加固

### 4.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 10.1 | 美林时钟核心逻辑测试 | FR-3.10.1 | `tests/test_merrill_clock.py` | 4h | pytest: 四象限/信心度/预测/预警断言 | ⬜ |
| 10.2 | 美林时钟切换分支测试 | FR-3.10.1 | `tests/test_merrill_clock.py` | 1.5h | pytest: 时间驱动/边界切换 + trigger 断言 | ⬜ |
| 10.3 | 美林时钟快照持久化测试 | FR-3.10.1 | `tests/test_merrill_clock.py` | 1h | pytest: snapshot 读写一致, 不污染 data/ | ⬜ |
| 10.4 | 依赖锁定 (pip-tools) | FR-3.10.2 | `requirements.in`, `requirements.lock`, `Dockerfile` | 1h | 两次构建依赖哈希一致 | ⬜ |
| 10.5 | 数据源健康监控层 | FR-3.10.3 | `backend/data_sources.py`, `backend/system.py` | 3h | metrics 含成功率/延迟; 失败标记 degraded | ⬜ |
| 10.6 | CI 覆盖率门禁 | FR-3.10.4 | `.github/workflows/ci.yml` | 0.5h | 覆盖率<阈值 CI 红 | ⬜ |
| 10.7 | 版本号前后端统一 | FR-3.10.5 | `backend/main_new.py`, `frontend/index.html` | 1h | 前端资源版本号随 APP_VERSION | ⬜ |

### 4.2 验收清单

- [ ] pytest 全量通过（≥ 110 用例，含 merrill_clock 新增）
- [ ] 美林时钟覆盖率 ≥ 70%（pytest-cov 报告）
- [ ] CI 覆盖率门禁生效（删用例即红）
- [ ] 依赖锁文件双端一致
- [ ] `/api/system/metrics` 含数据源健康指标
- [ ] 前端资源版本号随 `APP_VERSION` 联动
- [ ] Git commit + tag `v3.10.0`

---

## 5. v3.11 — 数据自动化

### 5.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 11.1 | Tushare 日线自动拉取任务 | FR-3.11.1 | `backend/data_sources.py`, `backend/scheduler.py` | 4h | 手动触发生成 qresult 新数据 | ⬜ |
| 11.2 | 财务数据拉取 | FR-3.11.1 | `backend/data_sources.py` | 3h | 财务字段入库 | ⬜ |
| 11.3 | qresult 自动导入触发 | FR-3.11.1 | `backend/data_pipeline.py` | 1h | CSV 更新后自动 reload | ⬜ |
| 11.4 | 数据源配置界面 | FR-3.11.1 | `frontend/js/components/system-page.js` | 2h | 配置股票池/频率/开关 | ⬜ |
| 11.5 | 数据新鲜度看板 | FR-3.11.2 | `backend/api/v1/dashboard.py`, `backend/system.py`, `frontend/js/components/dashboard-page.js` | 3h | 首页显示各源新鲜度+超期标黄 | ⬜ |
| 11.6 | 拉取失败补偿 | FR-3.11.3 | `backend/data_sources.py`, `backend/scheduler.py` | 2h | 3次退避后停止; 告警入队 | ⬜ |

### 5.2 验收清单

- [ ] 手动触发后 qresult 目录出现新数据且自动入库
- [ ] 定时任务按配置执行（日志可见每次批次）
- [ ] 首页数据源状态卡显示新鲜度，超期标黄
- [ ] 模拟连续失败 3 次后停止重试，告警队列有记录
- [ ] pytest 全量通过（≥ 115 用例）
- [ ] Git commit + tag `v3.11.0`

---

## 6. v3.12 — 可观测与部署

### 6.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 12.1 | 备份列表 + 一键恢复 API | FR-3.12.1 | `backend/api/v1/system.py`, `backend/backup.py` | 2h | API 列出备份, 恢复成功 | ⬜ |
| 12.2 | 恢复 dry-run 演练 | FR-3.12.1 | `backend/backup.py` | 1h | 演练校验通过 | ⬜ |
| 12.3 | 异常告警通知 | FR-3.12.2 | `backend/scheduler.py`, `backend/feishu_push.py` | 2h | 制造错误→飞书告警+收敛 | ⬜ |
| 12.4 | deploy.sh 一键部署 | FR-3.12.3 | `scripts/deploy.sh` | 2h | 部署成功+health-gated | ⬜ |
| 12.5 | rollback.sh 自动回滚 | FR-3.12.3 | `scripts/rollback.sh` | 1.5h | 模拟失败自动回滚 | ⬜ |
| 12.6 | 监控面板 UI 完善 | FR-3.12.4 | `frontend/js/components/system-page.js`, `backend/api/v1/system.py` | 3h | 面板显示全指标+自动刷新 | ⬜ |

### 6.2 验收清单

- [ ] 备份列表可见，一键恢复后数据一致
- [ ] dry-run 演练通过，损坏备份被拒绝
- [ ] 制造错误后飞书收到告警，同主题合并
- [ ] deploy.sh 部署成功且 health-gated
- [ ] 模拟失败部署自动回滚，服务不中断
- [ ] 监控面板显示 CPU/内存/延迟/错误率并自动刷新
- [ ] pytest 全量通过（≥ 120 用例）
- [ ] Git commit + tag `v3.12.0`

---

## 7. v3.13 — AI 深化与通知矩阵

### 7.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 13.1 | 多模型并行评估 | FR-3.13.1 | `backend/ai_evaluator.py` | 3h | 单股耗时 ÷3 | ⬜ |
| 13.2 | 并行失败降级 | FR-3.13.1 | `backend/ai_evaluator.py` | 1.5h | 部分失败不影响整体 | ⬜ |
| 13.3 | 通知适配器抽象 | FR-3.13.2 | `backend/notify/`（新目录） | 3h | 企微/钉钉/邮件适配 | ⬜ |
| 13.4 | 通知模板化 | FR-3.13.2 | `backend/notify/` | 1.5h | 模板替换正确 | ⬜ |
| 13.5 | 日报/周报多通道 | FR-3.13.2 | `backend/scheduler.py` | 1.5h | 日报达多通道 | ⬜ |
| 13.6 | RAG 问股（第一阶段） | FR-3.13.3 | `backend/chat.py`, `backend/search.py` | 4h | 问股引用历史报告 | ⬜ |

### 7.2 验收清单

- [ ] 单股 AI 评估耗时 ÷3（并行 + 超时保护）
- [ ] 部分模型失败不影响整体结果
- [ ] 企微/钉钉/邮件配置后日报与告警可达
- [ ] 问股回答引用历史报告片段
- [ ] pytest 全量通过（≥ 125 用例）
- [ ] Git commit + tag `v3.13.0`

---

## 8. v4.0 — 开放平台

### 8.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 4.1 | API v2 版本前缀 | FR-4.0.1 | `backend/router.py`, `backend/main_new.py` | 2h | /api/v2 可用, v1 兼容 | ⬜ |
| 4.2 | 文档站点 | FR-4.0.1 | `docs/`, `backend/main_new.py` | 2h | 文档站可浏览 | ⬜ |
| 4.3 | 出站 Webhook 订阅 | FR-4.0.2 | `backend/notify/`, `backend/scheduler.py` | 3h | 订阅回调 | ⬜ |
| 4.4 | Webhook 签名校验 | FR-4.0.2 | `backend/notify/` | 1.5h | 非法签名拒绝 | ⬜ |
| 4.5 | 插件机制（样例） | FR-4.0.3 | `backend/plugins/`（新目录） | 3h | 样例插件加载 | ⬜ |

### 8.2 验收清单

- [ ] `/api/v2` 新契约可用，v1 接口全部向后兼容
- [ ] 文档站点可浏览，含示例代码
- [ ] Webhook 订阅回调带签名，非法签名被拒
- [ ] 样例插件可加载并出现在策略/AI 模型列表
- [ ] pytest 全量通过（≥ 130 用例）
- [ ] Git commit + tag `v4.0.0`

---

## 9. 关键文件依赖图

```
v3.10:
  tests/test_merrill_clock.py ← 10.1, 10.2, 10.3 (独立, 不碰业务代码)
  requirements.in/lock        ← 10.4 (独立)
  backend/data_sources.py     ← 10.5 (被 merrill_clock 引用)
  backend/system.py           ← 10.5
  .github/workflows/ci.yml    ← 10.6 (独立)
  backend/main_new.py         ← 10.7 (依赖 frontend/index.html)

v3.11:
  backend/data_sources.py     ← 11.1, 11.2, 11.6 (核心)
  backend/scheduler.py        ← 11.1, 11.6
  backend/data_pipeline.py    ← 11.3
  backend/api/v1/dashboard.py ← 11.5 (独立)
  backend/system.py           ← 11.5
  frontend/dashboard-page.js  ← 11.5
  frontend/system-page.js     ← 11.4

v3.12:
  backend/backup.py           ← 12.1, 12.2
  backend/api/v1/system.py    ← 12.1, 12.6
  backend/scheduler.py        ← 12.3 (消费 11.6 告警队列)
  backend/feishu_push.py      ← 12.3
  scripts/deploy.sh           ← 12.4 (独立)
  scripts/rollback.sh         ← 12.5 (独立)
  frontend/system-page.js     ← 12.6

v3.13:
  backend/ai_evaluator.py     ← 13.1, 13.2
  backend/notify/ (新)        ← 13.3, 13.4
  backend/scheduler.py        ← 13.5
  backend/chat.py, search.py  ← 13.6

v4.0:
  backend/router.py           ← 4.1
  backend/main_new.py         ← 4.1, 4.2
  backend/notify/             ← 4.3, 4.4
  backend/plugins/ (新)       ← 4.5
```

### 9.1 并行执行建议

**v3.10 可并行**：10.1+10.2+10.3（测试，独立）、10.4+10.6（构建/CI，独立）、10.5（后端独立）、10.7（前后端联动，依赖 10.5 完成后的 APP_VERSION 基线）

**v3.11 可并行**：11.1+11.2+11.6（data_sources 核心，顺序推进）、11.3（依赖 11.1 产出的 CSV）、11.4+11.5（前端，可并行）、11.5 后端部分与 11.4 无依赖

**v3.12 可并行**：12.1+12.2（备份恢复，独立）、12.3（依赖 11.6 告警队列）、12.4+12.5（部署脚本，独立）、12.6（前端，独立）

**v3.13 可并行**：13.1+13.2（AI 评估）、13.3+13.4（通知抽象）、13.5（依赖 13.3）、13.6（RAG，独立）

**v4.0 可并行**：4.1+4.2（API 契约）、4.3+4.4（Webhook）、4.5（插件，独立）
