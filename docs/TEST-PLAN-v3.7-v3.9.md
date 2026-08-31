# 量化选股日历 v3.7 ~ v3.9 测试计划 (TEST-PLAN)

> **文档版本**: v1.0 | **日期**: 2026-08-07 | **基线**: v3.6.0
> **配套文档**: 需求 → `PRD-v3.7-v3.9.md` | 开发 → `DEV-PLAN-v3.7-v3.9.md`
> **更新规则**: 每个版本测试完成后更新结果列；新增测试用例必须在此登记。

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-07 | - | 基于 PRD v1.0 + DEV-PLAN v1.0 创建 |
| v1.1 | 2026-08-10 | - | v3.8.0 发布：76 单元测试全过（修复 AI 评估异步化后 5 处调用同步问题）；TC-7.x/8.x 通过 |

---

## 2. 测试策略总览

### 2.1 测试层级

| 层级 | 工具 | 执行时机 | 负责人 |
|------|------|----------|--------|
| 单元测试 | pytest (80 存量 + 新增) | 每任务完成后 | 开发者 |
| 接口测试 | pytest + requests/httpx | 每版本集成阶段 | 开发者 |
| 覆盖率 | pytest-cov (目标 ≥ 70%) | 每版本验收 | 开发者 |
| 前端完整性 | SPA 检查脚本 | 每次前端改动后 | 开发者 |
| 浏览器冒烟 | 手动 (Chrome DevTools) | 每阶段/每版本 | 开发者 |
| 移动端验证 | Chrome DevTools 设备模拟 | v3.8 专项 | 开发者 |
| Lighthouse | Chrome Audits | v3.8/v3.9 专项 | 开发者 |
| 回归测试 | 存量 + 新增全量 | 每版本发布前 | 开发者 |

### 2.2 环境

| 环境 | 用途 |
|------|------|
| 开发环境 (dev, :8001) | 日常开发自测 |
| 生产环境 (ops, :8000) | 版本验收测试 |
| Docker | v3.9 部署形态验证 |

### 2.3 测试数据

- qresult 8 个 CSV (~20MB, 603 交易日, 2472 股票)
- data/ 下真实配置
- 测试专用管理员账号 (admin / admin)

---

## 3. 存量测试基线 (v3.6.0)

### 3.1 现有用例 (80 个)

| 测试文件 | 用例数 | 覆盖范围 |
|----------|:--:|------|
| test_auth.py | 4 | 登录/JWT/权限 |
| test_user_manager.py | 7 | 用户 CRUD |
| test_data_parser.py | 9 | CSV 解析 |
| test_ai_evaluator.py | 13 | AI 评估 |
| test_ai_mock.py | 10+ | AI Mock (无 API Key) |
| test_backtest.py | 9 | 回测引擎 |
| test_scheduler.py | 6 | 调度器 |
| test_db.py | 12+ | SQLite CRUD |
| test_watchlist.py | 4 | 自选股 |

---

## 4. v3.7 测试用例

### 4.1 新增单元测试

| # | 用例 | 对应任务 | 类型 | 预期结果 |
|:--:|------|:--:|------|------|
| TC-7.1 | `test_chat_history_index_exists` | 7.1 | 单元 | `CREATE INDEX` 语句存在，EXPLAIN 显示使用索引 |
| TC-7.2 | `test_watchlist_index_exists` | 7.1 | 单元 | `(username, added_at)` 索引存在 |
| TC-7.3 | `test_cache_ttl_correct` | 7.2 | 单元 | 缓存过期时间基于 `datetime.now()` 计算 |
| TC-7.4 | `test_db_init_fails_exits` | 7.3 | 单元 | 损坏 DB 时 schema 校验失败，服务不启动 |
| TC-7.5 | `test_db_read_lock_free` | 7.6 | 单元 | SELECT 不持有 `_db_lock` |
| TC-7.6 | `test_models_cache_not_read_disk` | 7.7 | 单元 | `get_enabled_models()` 第二次不读磁盘 |
| TC-7.7 | `test_static_files_have_cache_control` | 7.8 | 接口 | 响应对静态文件包含 `Cache-Control` 头 |
| TC-7.8 | `test_index_html_memory_cache` | 7.9 | 单元 | 首次读磁盘，后续从内存返回 |
| TC-7.9 | `test_ai_attribution_fields` | 7.10 | 单元 | 评估结果含 `technical_score`/`fundamental_score`/`sentiment_score` |
| TC-7.10 | `test_prompt_template_loading` | 7.12 | 单元 | 模板文件加载成功，占位符正确替换 |
| TC-7.11 | `test_stage_strategy_mapping` | 7.13 | 单元 | 复苏期返回 `['momentum','quality']` 等 |

### 4.2 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-7.12 | 存量 80 用例全量 | 确认无 regression |
| TC-7.13 | 浏览器冒烟 SM-1 ~ SM-15 | 全部正常 |

### 4.3 浏览器冒烟 (v3.7 专项)

| # | 检查项 | 预期 |
|:--:|------|------|
| SM-7.1 | 日历页切换日/周/月/年 | 按钮文字正常，无 `{{ viewUnit }}` |
| SM-7.2 | 股票详情弹窗 → K 线 | 数据为空时不报错，显示 "—" |
| SM-7.3 | AI 评估结果 | 归因维度出现三个得分柱 |
| SM-7.4 | 策略页 → 美林时钟详情 | 策略建议卡片显示 |
| SM-7.5 | AI 页 → 评估历史 | 趋势折线图渲染 |
| SM-7.6 | 页面首次加载 | < 1.5s (DevTools Network) |

---

## 5. v3.8 测试用例

### 5.1 新增单元测试

| # | 用例 | 对应任务 | 类型 | 预期结果 |
|:--:|------|:--:|------|------|
| TC-8.1 | `test_navigate_to_consistent` | 8.2 | 单元(前端) | 4 处导航调用同一函数 |
| TC-8.2 | `test_no_empty_catch_exists` | 8.3 | 代码审查 | grep `catch\s*\(\s*e?\s*\)\s*\{\s*\}` 结果 = 0 |
| TC-8.3 | `test_css_no_667eea` | 8.7 | 代码审查 | grep `#667eea` themes.css 结果 = 0 |

### 5.2 浏览器冒烟 (v3.8 专项)

| # | 检查项 | 预期 |
|:--:|------|------|
| SM-8.1 | 移动端 (375px) 字体大小 | 正文、标题、标签字体正确渲染 |
| SM-8.2 | 键盘 Tab 遍历 | `.nav-item`、`.theme-item` 等有 2px 焦点环 |
| SM-8.3 | 骨架屏 | 加载时显示一套（非两套交替） |
| SM-8.4 | 移动端底部导航 | 图标 + 文字，高亮态明显 |
| SM-8.5 | 触觉反馈 | 切换页面/收藏/评股完成时振动 |
| SM-8.6 | 安全区 | iPhone X 模拟器底部不被手势栏遮挡 |
| SM-8.7 | 系统开启动效减弱 | 页面无动画 |
| SM-8.8 | 离线访问 | 断网后页面可打开，缓存数据可见 |
| SM-8.9 | 股票详情 (移动端) | Sheet 从底部滑入，K 线可缩放 |

### 5.3 PWA / Lighthouse

| # | 指标 | 目标 |
|:--:|------|:--:|
| TC-8.4 | Lighthouse PWA 评分 | ≥ 85 |
| TC-8.5 | Lighthouse Performance | ≥ 80 |
| TC-8.6 | Service Worker 注册 | 正常，无 console error |

### 5.4 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-8.7 | 存量 + v3.7 新增用例全量 | 无 regression |
| TC-8.8 | 浏览器冒烟 SM-1 ~ SM-15 | 全部正常 |

---

## 6. v3.9 测试用例

### 6.1 新增单元测试

| # | 用例 | 对应任务 | 类型 | 预期结果 |
|:--:|------|:--:|------|------|
| TC-9.1 | `test_weekly_report_generation` | 9.1 | 单元 | `generate_weekly_report()` 返回非空 Markdown |
| TC-9.2 | `test_async_batch_evaluate` | 9.2 | 单元 | `asyncio.iscoroutinefunction` 返回 True |
| TC-9.3 | `test_akshare_timeout_fallback` | 9.3 | 单元 | 超时后返回默认值，不抛异常 |
| TC-9.4 | `test_mock_data_deterministic` | 9.4 | 单元 | 同种子同日期返回相同数据 |
| TC-9.5 | `test_csp_no_unsafe_inline` | 9.5 | 接口 | CSP 头不含 `unsafe-inline` / `unsafe-eval` |
| TC-9.6 | `test_page_state_persisted` | 9.6 | 单元(前端) | 刷新后 `lastPage`/`lastSubPage` 从 localStorage 恢复 |
| TC-9.7 | `test_no_empty_catch_remaining` | 9.7 | 代码审查 | 全部 catch 有日志或反馈 |
| TC-9.8 | `test_filter_preset_crud` | 9.9 | 接口 | 创建/读取/删除筛选预设 |
| TC-9.9 | `test_export_pdf_content` | 9.13 | 单元 | PDF 含 K 线图 |
| TC-9.10 | `test_export_excel_sheets` | 9.13 | 单元 | Excel 多 sheet 结构正确 |

### 6.2 浏览器冒烟 (v3.9 专项)

| # | 检查项 | 预期 |
|:--:|------|------|
| SM-9.1 | 周报推送 | 手动触发后飞书收到报告 |
| SM-9.2 | Mock 数据 | 同一天两次调用的 K 线数据相同 |
| SM-9.3 | 页面刷新 | 恢复到上次访问的页面和子页 |
| SM-9.4 | 股票对比 | 选 3 只股票 → K 线叠加 + 雷达图 |
| SM-9.5 | 自定义筛选 | 创建 PE < 30 筛选 → 应用 → 结果正确 |
| SM-9.6 | 策略归因 | 策略收益曲线 + 夏普比率显示 |
| SM-9.7 | 行业热力图 | 矩阵渲染，hover 显示详情 |
| SM-9.8 | Dashboard | 首页概览数据实时加载 |
| SM-9.9 | PDF 导出 | 下载 PDF 含图表和文字 |
| SM-9.10 | Excel 导出 | 多 sheet 数据表正确 |

### 6.3 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-9.11 | 存量 + v3.7 + v3.8 新增用例全量 | 无 regression |
| TC-9.12 | 浏览器冒烟 SM-1 ~ SM-15 | 全部正常 |
| TC-9.13 | Docker 部署验证 | 镜像构建 + 健康检查 |

---

## 7. 测试用例统计

| 版本 | 存量 | 新增单元 | 新增接口 | 浏览器专项 | 总用例 |
|------|:--:|:--:|:--:|:--:|:--:|
| v3.7 | 80 | 11 | 1 | 6 | 98 |
| v3.8 | ~91 | 3 | - | 11 | ~105 |
| v3.9 | ~96 | 10 | - | 10 | ~116 |

---

## 8. 浏览器冒烟检查清单 (全版本统一)

### SM-1 ~ SM-15 基础检查

| # | 页面 | 操作 | 预期 |
|:--:|------|------|------|
| SM-1 | 登录 | admin/admin 登录 | 进入策略总览页 |
| SM-2 | 策略总览 | 查看各项数据 | 美林时钟、策略计数、共识榜渲染 |
| SM-3 | 策略总览 | 点击美林时钟阶段 | 弹窗显示详情 + 历史 |
| SM-4 | 策略总览 | 切换子页 (merrill/consensus) | 数据正常加载 |
| SM-5 | 日历 | 切换日/周/月/年 | 数据正常 |
| SM-6 | 日历 | 点击 K 线 | K 线图 + MA 均线渲染 |
| SM-7 | 日历 | 收藏/取消股票 | watchlist 更新 |
| SM-8 | AI | 快速评股 | 评估结果返回，得分/建议显示 |
| SM-9 | AI | 切换子页 (history/chat_history) | 历史列表、对话历史渲染 |
| SM-10 | 系统配置 | 切换子页 (status/autoeval/datasource) | 各页数据正常 |
| SM-11 | 系统配置 | AI 模型测试连接 | 返回成功/失败提示 |
| SM-12 | 主题 | 切换 7 套主题 | 颜色/字体即时生效 |
| SM-13 | 图标 | 切换 4 套图标系统 | 图标即时切换 |
| SM-14 | 侧边栏 | 折叠/展开 | 页面无白屏 |
| SM-15 | 移动端 | 375px 宽度 | 无横向滚动，布局正常 |

---

## 9. 覆盖率目标

| 指标 | 基线 (v3.6.0) | v3.7 | v3.8 | v3.9 |
|------|:--:|:--:|:--:|:--:|
| 后端覆盖率 | ~50% | ≥ 60% | ≥ 65% | ≥ 70% |
| 用例总数 | 80 | ≥ 91 | ≥ 96 | ≥ 106 |
| 致命 Bug | 5 | 0 | 0 | 0 |
| CI 通过 | ✓ | ✓ | ✓ | ✓ |
