# 量化选股日历 v3.10 ~ v4.0 测试计划 (TEST-PLAN)

> **文档版本**: v3.0 | **日期**: 2026-08-12 | **基线**: v3.8.2
> **配套文档**: 需求 → `PRD-v3.10-v4.0.md` | 开发 → `DEV-PLAN-v3.10-v4.0.md`
> **更新规则**: 每个版本测试完成后更新结果列；新增测试用例必须在此登记。
> **v2.0 变更**: v3.11 改为 UI/UX 提质测试（TC-11.1~11.14 + Playwright SM-11.x），后续版本用例编号顺延。
> **v3.0 变更**: v3.13 测试范围随开发计划重新定稿为「术语统一 + 主题体验」（TC-13.1~13.5 + SM-13.1~13.5）；原备份/告警/部署用例顺延。

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-11 | - | 基于 PRD v1.0 + DEV-PLAN v1.0 创建 |
| v1.1 | 2026-08-11 | - | 任务 10.1/10.2/10.3 完成：64 用例全过，merrill 覆盖率 73% |
| v1.2 | 2026-08-11 | - | 任务 10.4/10.5/10.6/10.7 完成：TC-10.9~10.12 全过，v3.10 共 156 用例 |
| v2.0 | 2026-08-11 | - | v3.11 改为 UI/UX 提质：新增 TC-11.1~11.14 + Playwright SM-11.x |

---

## 2. 测试策略总览

### 2.1 测试层级

| 层级 | 工具 | 执行时机 | 负责人 |
|------|------|----------|--------|
| 单元测试 | pytest (76 存量 + 新增) | 每任务完成后 | 开发者 |
| 接口测试 | pytest + requests/httpx | 每版本集成阶段 | 开发者 |
| 覆盖率 | pytest-cov (v3.10 起含门禁) | 每任务 + CI | 开发者 |
| 前端完整性 | SPA 检查脚本 | 每次前端改动后 | 开发者 |
| **前端视觉回归** | **Playwright 截图 diff (v3.11 起)** | **每任务 + CI** | **开发者** |
| 浏览器冒烟 | 手动 (Chrome DevTools) | 每阶段/每版本 | 开发者 |
| 数据管线验证 | pytest + 手动触发 | v3.12 专项 | 开发者 |
| 部署演练 | scripts/deploy.sh + rollback.sh | 顺延（可观测与部署重排期） | 开发者 |
| 回归测试 | 存量 + 新增全量 | 每版本发布前 | 开发者 |

### 2.2 环境

| 环境 | 用途 |
|------|------|
| 开发环境 (dev, :8001) | 日常开发自测 |
| 生产环境 (ops, :8000) | 版本验收测试 |
| Docker | v4.0 部署形态验证 |
| **Playwright** | **本地截图 diff + CI 报告** |

### 2.3 测试数据

- qresult 8 个 CSV (~20MB, 603 交易日, 2472 股票)
- data/ 下真实配置
- 测试专用管理员账号 (admin / admin)
- **美林时钟测试须重定向到临时文件**（`CACHE_FILE`/`HISTORY_FILE`/`SNAPSHOT_FILE` → `tmp_path`），禁止污染 data/ 运行时数据

---

## 3. 存量测试基线 (v3.8.2)

### 3.1 现有用例 (76 个)

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

### 3.2 基线缺口（本计划重点补齐）

- **美林时钟引擎 0 测试** → v3.10 已补（64 用例，覆盖率 73%）
- **前端 0 测试** → v3.11 补：前端逻辑拆域后可单测 + Playwright 视觉回归

---

## 4. v3.10 测试用例

### 4.1 新增单元/接口测试

| # | 用例 | 对应任务 | 类型 | 预期结果 | 结果 |
|:--:|------|:--:|------|------|:--:|
| TC-10.1 | `test_merrill_four_quadrants` | 10.1 | 单元 | 四象限（复苏/过热/滞涨/衰退）各判定一次，阶段名正确 | ✅ |
| TC-10.2 | `test_merrill_confidence_levels` | 10.1 | 单元 | 高/中/低信心度边界值正确 | ✅ |
| TC-10.3 | `test_merrill_next_stage_prediction` | 10.1 | 单元 | 预测阶段在 `STAGES` 内，字段完整 | ✅ |
| TC-10.4 | `test_merrill_early_warnings` | 10.1 | 单元 | 临边界（proximity 高）时返回预警 | ✅ |
| TC-10.5 | `test_merrill_boundary_trigger` | 10.2 | 单元 | 正常切换 `trigger='boundary'`，`reason` 非空 | ✅ |
| TC-10.6 | `test_merrill_time_driven_trigger` | 10.2 | 单元 | 超期+临边界时 `trigger='time_driven'` | ✅ |
| TC-10.7 | `test_merrill_snapshot_persistence` | 10.3 | 单元 | snapshot 写入后读取内容一致 | ✅ |
| TC-10.8 | `test_merrill_no_data_pollution` | 10.3 | 单元 | 测试期间 `data/` 运行文件 mtime/内容不变 | ✅ |

> **TC-10.6 附加**: 测试驱动发现时间驱动切换后 `stage_info['stage']` 未回写（切换前阶段），
> 已修复并断言 `stage/name/next_stage_prediction/boundary_proximity` 与切换后阶段一致。
| TC-10.9 | `test_lockfile_consistent` | 10.4 | 单元 | `requirements.lock` 与 `requirements.in` 无漂移 | ✅ |
| TC-10.10 | `test_data_source_health_metrics` | 10.5 | 接口 | `/api/system/metrics` 含各数据源成功率/延迟 | ✅ |
| TC-10.11 | `test_data_source_degraded_flag` | 10.5 | 单元 | 模拟连续失败后标记 `degraded=True` | ✅ |
| TC-10.12 | `test_frontend_version_injected` | 10.7 | 接口 | index.html 资源 URL 带 `APP_VERSION` 版本号 | ✅ |

> **TC-10.12 实现说明**: 因 main_new import 会启动 FastAPI 应用（副作用较重），采用
> `ast` 提取 APP_VERSION + 渲染模拟：断言 24 处应用资源均带 `?v={{APP_VERSION}}` 占位符、
> 无残留硬编码 `?v=\d`、渲染后版本 === 后端 APP_VERSION、且 root() 的 `.replace` 接线存在。
> dev 冒烟实测 `/` 渲染后 0 处残留占位符、24 处全部注入 `?v=3.8.2`。

### 4.2 覆盖率门禁

| # | 指标 | 目标 |
|:--:|------|:--:|
| TC-10.13 | 美林时钟语句覆盖率 | ≥ 70%（`--cov=merrill_clock --cov-fail-under=70`，实测 73.5%） | ✅ |
| TC-10.14 | CI 覆盖率门禁 | 删用例后 CI 变红（实测 19.6% 时 FAIL） | ✅ |

### 4.3 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-10.15 | 存量 76 用例全量 | 确认无 regression | ✅ |

---

## 5. v3.11 测试用例 (UI/UX 提质)

### 5.1 新增单元/接口测试

| # | 用例 | 对应任务 | 类型 | 预期结果 | 结果 |
|:--:|------|:--:|------|------|:--:|
| TC-11.1 | `test_command_panel_state` | 11.1 | 单元 | 命令面板 state（visible/query/items/keyboardIndex）与开关函数行为正确 | ⬜ |
| TC-11.2 | `test_command_panel_search` | 11.1 | 单元 | 股票/菜单/指令三域检索命中与排序正确 | ⬜ |
| TC-11.3 | `test_command_panel_keyboard` | 11.1 | 单元 | ↑↓ 选择、Enter 执行、Esc 关闭逻辑正确 | ⬜ |
| TC-11.4 | `test_global_search_forward` | 11.2 | 单元 | 搜股票直达详情、搜菜单跳页、搜指令触发动作 | ⬜ |
| TC-11.5 | `test_dialog_module_isolated` | 11.4 | 单元 | 拆分后 dialog 组件模板完整、可独立渲染、prop 正确 | ⬜ |
| TC-11.6 | `test_virtual_list_render` | 11.5 | 单元 | 虚拟列表仅渲染可视区行数；滚动位置与索引映射正确 | ✅ |
| TC-11.7 | `test_cache_silent_refresh` | 11.6 | 单元 | 同参数请求命中缓存；后台刷新后数据更新且触发提示 | ✅ |
| TC-11.8 | `test_state_panel_variants` | 11.7 | 单元 | 空/加载/错误/离线四态渲染正确 | ✅ |
| TC-11.9 | `test_tokens_no_hardcode` | 11.9 | 静态 | 模板/CSS 无硬编码色值（`#`/`rgba(` 出现次数为 0，白名单除外） | ✅ |
| TC-11.10 | `test_today_one_screen` | 11.10 | 接口 | 首页聚合数据（美林/情绪/池变动/健康）字段完整 | ✅ |
| TC-11.11 | `test_chart_toolbox` | 11.11 | 单元 | 十字线/MA 图例开关配置正确注入 ECharts option | ✅ |

| TC-11.12 | `test_module_split_boundary` | 11.3 | 静态 | app-logic.js 行数 < 800；各域模块导出的 API 面与调用方契约一致 | ⬜ |
| TC-11.13 | `test_app_logic_regression` | 11.3 | 回归 | 拆分后原逻辑全量回归（现有 pytest 全过 + SPA 完整性） | ⬜ |
| TC-11.14 | `test_e2e_screenshot_diff` | 11.12 | e2e | Playwright 截图对比，产出 diff 报告（不阻塞发布） | ✅ |

> **TC-11.10 实现说明（✅ 2026-08-11）**: 采用接口 + 静态混合验证（`test_today_snapshot.py` 4 例，pytest 195→199）。
> ① `test_metrics_data_sources_fields_complete` 直接驱动 `record_call` 种子 → 断言 `/api/system/metrics` 的
> `data_sources` 每源字段完整（name/calls/successes/failures/success_rate/avg_latency_ms/degraded）、连续 3 失败
> → degraded=True、成功率与均值延迟正确；② `test_metrics_no_calls_returns_empty_sources` 空态；③
> `test_today_snapshot_wiring_frontend` 静态校验 strategies-page 今日一屏聚合（美林时钟/市场情绪/池变动/今日重点/
> 数据健康度 + merrillNext/todayFocus/healthRows + degraded/success_rate 渲染）+ app-logic 消费 `/api/system/metrics`
> 暴露 `healthMetrics`/`loadHealthMetrics`；④ `test_today_snapshot_css_uses_tokens` 校验 FR-3.11.7 区块 CSS 无硬编码
> 色值（TC-11.9 白名单约束延续）。**浏览器实测**：健康卡 3 源真实值（东财 0%/Tushare 0%/AkShare 41.2%，均 degraded）、
> 今日重点 3 项、美林 cell 跳转 + 新入池跳转均通过、0 pageerror。

> **TC-11.14 实现说明（✅ 2026-08-11）**: 采用 Playwright 端到端截图对比（`test_e2e_screenshot_diff.py` + `tests/e2e/visual_regression.py`）。
> ① `@pytest.mark.e2e`（pyproject.toml 注册 marker）—— CI 主测试命令 `-m "not e2e"` 默认排除，独立 `e2e-visual` job（continue-on-error）跑真实浏览器；
> ② 无 dev server 时 skip（信息性检查，不阻塞）；③ 断言 harness `--report` rc==0、报告已产出且含全部 7 个 SM 验收场景
> （login/strategies_desktop/calendar/stock_detail/command_panel/strategies_mobile/dark_theme）；④ 截图确定性：
> 循环关闭登录后初始化向导+新手引导 tour 遮罩、注入 `*{animation:none}` 冻结 CSS 动画、像素稳定等待 + route 拦截冻结
> 4 个实时数据端点（fixture 随基线入库）。**浏览器实测**（admin）：capture + 2×report 连续 3 次运行 7 场景全部 PASS
> （第二次起 diff 0.00% 逐像素一致）、0 pageerror。基线 PNG（`tests/e2e/screenshots/baseline/`）+ 数据 fixture
> （`tests/e2e/fixtures/`）入库，本次运行截图与报告不入库。

> **TC-11.11 实现说明（✅ 2026-08-11）**: 采用静态单元验证（`test_chart_toolbox.py` 5 例，pytest 199→204）。
> ① `test_chart_crosshair_read_price` 校验 charts.js 十字线读价配置注入 ECharts option：`type:'cross'`、
> 跨价格/成交量双盘联动（`link:[{xAxisIndex:'all'}]`）、`triggerOn:'mousemove|click'`（悬停跟读 + 点击锁定）、
> `snap:true` 吸附 + 轴标签气泡；② `test_chart_legend_ma_toggle_injected` 校验 legend.data 含 K线+MA5..60、
> `selectedMode:'multiple'`、`selected` 默认全开、tooltip formatter 经 `showMA`/`getOption` 过滤已关闭均线；
> ③ `test_toggle_wiring_app_logic` 校验 app-logic `toggleKlineMa`/`klineMaVisible`/`MA_LINES`/`legendToggleSelect`/
> `legendselectchanged` 及按当前对话框定位图表实例；④ `test_ma_toggle_ui_in_dialogs` 校验两弹窗均线开关按钮行接线；
> ⑤ `test_ma_toggle_css_uses_tokens` 校验 FR-3.11.8 区块 CSS 无硬编码色值（TC-11.9 白名单约束延续）。
> **附带测试基建修复**：conftest `patch_data_dir` 补 `db.DATA_DIR/db.DB_FILE` 临时库重定向 —— 修复 db.py 导入时捕获
> 路径导致测试写入真实 `data/app.db` 的跨会话污染（`test_add_and_delete`/`test_empty` 全量回归由 2 红 → 204 全绿）。
> **浏览器实测**：十字线 option 注入 + 均线按钮点击 → 图例取消选中/按钮失高亮/MA5 保持 + showTip 后 tooltip
> 含 MA5 不含 MA20（formatter 过滤生效）、0 pageerror。

### 5.2 Playwright 视觉回归 (v3.11 专项)

| # | 检查项 | 预期 |
|:--:|------|------|
| SM-11.1 | 登录页截图 | 渲染正常，无布局溢出 |
| SM-11.2 | 策略总览截图（桌面 + 375px） | 卡片布局一致，无横向滚动 |
| SM-11.3 | 量化日历截图（日视图） | 股票列表渲染正常 |
| SM-11.4 | 股票详情弹窗截图 | K线/AI 评估/问股三 Tab 正常 |
| SM-11.5 | 命令面板打开截图 | 三域检索 UI 完整 |
| SM-11.6 | 深色主题截图 | 主题切换无遗漏（硬编码色已消除） |

> Playwright 测试产出截图 diff 报告（HTML），纳入 CI 作为信息性检查，不阻塞发布；
> 人工审阅 diff 报告确认无意外 UI 变更。

### 5.3 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-11.15 | 存量 + v3.10 用例全量 | 无 regression |

---

## 6. v3.12 测试用例

### 6.1 新增单元/接口测试

| # | 用例 | 对应任务 | 类型 | 预期结果 |
|:--:|------|:--:|------|------|
| TC-12.1 | `test_tushare_daily_pull` | 12.1 | 单元 | ✅ 手动触发后 qresult 目录出现新数据 |
| TC-12.2 | `test_scheduler_pull_job` | 12.1 | 单元 | ✅ 拉取任务注册且按配置时间执行 |
| TC-12.3 | `test_financial_data_pull` | 12.2 | 单元 | ✅ 财务字段入库且映射正确 |
| TC-12.4 | `test_csv_auto_reload` | 12.3 | 单元 | ✅ CSV 变更触发 `data_pipeline` reload |
| TC-12.5 | `test_freshness_api` | 12.5 | 接口 | ✅ 各源 `last_success`/`data_age` 计算正确 |
| TC-12.6 | `test_freshness_stale_flag` | 12.5 | 单元 | ✅ 超期数据返回 stale 标志 |
| TC-12.7 | `test_pull_retry_backoff` | 12.6 | 单元 | ✅ 连续失败 3 次后停止重试（指数退避） |
| TC-12.8 | `test_alert_queue_recorded` | 12.6 | 单元 | ✅ 连续失败写入告警队列 |

### 6.2 浏览器冒烟 (v3.12 专项)

| # | 检查项 | 预期 | 结果 |
|:--:|------|------|:--:|
| SM-12.1 | 数据源配置页 | 股票池/频率/开关保存并生效 | ✅ 定时拉取日线卡渲染（开关/时间/频率/周几/股票池），手动拉取按钮可用 |
| SM-12.2 | Dashboard 数据源状态卡 | 各源新鲜度显示，超期标黄 | ✅ 东财/Tushare ⏳ 超期标黄，AkShare 显示 刚刚；无 pageerror |

### 6.3 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-12.9 | 存量 + v3.10/v3.11 用例全量 | ✅ 232 单元 + 1 e2e 全绿，无 regression |

---

## 7. v3.13 测试用例（术语统一与主题体验）

### 7.1 新增单元/接口测试

| # | 用例 | 对应任务 | 类型 | 预期结果 |
|:--:|------|:--:|------|------|
| TC-13.1 | `test_no_pinggu_leftover_in_active_sources` + `test_theme_names_consistent_frontend_backend` | 13.1 / 13.2 | 静态守卫 | ✅ 活动源码 0 × 「评股」；前端 themes.js 与后端 user_manager.THEMES 主题显示名一致（新增 `tests/test_terminology_unified.py`） |
| TC-13.2 | `test_tokens_no_hardcode` | 13.2 | 静态守卫 | ✅ CSS 使用面无硬编码 hex（TC-11.9 回归，按钮令牌化后仍通过） |
| TC-13.3 | `test_version_injection` | 13.0 | 接口 | ✅ `/api/health` 注入 `3.13.0` |
| TC-13.4 | `test_command_panel` | 13.1 | 单元 | ✅ 命令面板「智能评估 / 自动评估」字面量镜像同步 |

### 7.2 浏览器冒烟 (v3.13 专项)

| # | 检查项 | 预期 | 结果 |
|:--:|------|------|:--:|
| SM-13.1 | 侧栏导航 + AI 评估页 | 入口与页面文案为「智能评估 / 快速评估 / 批量评估」 | |
| SM-13.2 | 系统状态 / 配置工具栏 / 批量栏 / 美林面板 | tech-blue / rose-red 下无米黄色卡片 | |
| SM-13.3 | 主题切换菜单 | 显示 活力金 / 经典红 / 经典金 | |
| SM-13.4 | 顶栏 | 无「首页/…」面包屑 | |
| SM-13.5 | 主按钮六态 | 各主题六态视觉一致，dark-pro 深色文字保留 | |

### 7.3 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-13.5 | 存量 + v3.10/v3.11/v3.12 用例全量 | ✅ 235 用例全绿（含 e2e 截图），无 regression |

---

## 8. v3.14 测试用例（AI 模型管理厂商化）

### 8.1 新增单元测试

| # | 用例 | 对应任务 | 类型 | 预期结果 |
|:--:|------|:--:|------|------|
| TC-14.1 | `test_vendor_catalog.py::TestVendorCatalog`（5 项） | 14.4 | 单元 | 目录非空/vendor_key+name 唯一/字段合法/不含 api_key/国内优先排序/get_catalog 一致 |
| TC-14.2 | `test_vendor_catalog.py::TestVendorDataclass`（4 项） | 14.4 | 单元 | VendorModel/VendorConfig roundtrip、纯字符串模型名兼容、默认值 |
| TC-14.3 | `test_vendor_catalog.py::TestSeedDefaultVendors`（2 项） | 14.4 | 单元 | 默认启用链 = deepseek-v4-pro + ark-code-latest；seed 与目录对齐 |
| TC-14.4 | `test_api_ai_models.py::TestModelsRoutes`（5 项） | 14.4 | 接口 | GET/POST /models 往返、厂商+模型两级 locked 保留、明文 key roundtrip、新厂商可保存 |
| TC-14.5 | `test_api_ai_models.py::TestTestRoute`（3 项） | 14.4 | 接口 | /models/test body 传含 / 模型名不 404；未知厂商/模型快速失败 |
| TC-14.6 | `test_api_ai_models.py::TestListRoute`（5 项） | 14.4 | 接口 | /models/list 解析 data[].id、非 2xx 报错、空 key/无 key 短路不发请求 |
| TC-14.7 | `test_api_ai_models.py::TestCatalogRoute`（1 项） | 14.4 | 接口 | GET /catalog 与 VENDOR_CATALOG 一致 |

### 8.2 浏览器冒烟 (v3.14 专项)

| # | 检查项 | 预期 |
|:--:|------|------|
| SM-14.1 | 厂商卡片渲染 | 国内/CodingPlan/国外 tag 正确，locked 卡片禁删，tier 套餐标签 + 官网链接 |
| SM-14.2 | 新增厂商 + 获取模型列表 | 目录下拉出预置厂商；新增 DeepSeek → 填 key → 获取模型列表追加 enabled:false 行 |
| SM-14.3 | 探测 + 保存重载 | 单模型测试 / 探测全部；保存后刷新重载一致；无 pageerror |

### 8.3 v1→v2 迁移冒烟（数据侧）

| # | 检查项 | 预期 |
|:--:|------|------|
| TC-14.8 | 迁移 | 停 dev → 备份 ai_models.json → 启动 → 自动变 `{"version":2,"vendors":[...]}`；DeepSeek 多条按 provider 并一厂商；模型/启用/优先级/api_key 保留；二次加载幂等 |

### 8.4 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-14.9 | 存量 + 全新增用例 | ✅ 269 用例全绿（v3.13 235 + v3.14 新增 32 + v3.14.1 回归 2），无 regression |
| TC-14.10 | v3.14.2 评估完成性回归（+4） | ✅ 273 用例全绿（269 + 4）：reasoning_content 兜底 / 无 JSON 明确报错 / 名称解析（含裸代码后缀推断）/ 批量名称透传，无 regression |

### 8.5 v3.14.2 浏览器冒烟（评估完成性专项）

| # | 检查项 | 预期 |
|:--:|------|------|
| SM-14.3 | 智能评估单只 | 全新评估数秒~1 分钟内完成，不再「无法解析为 JSON」/长时间冻结 |
| SM-14.4 | 自选批量评估 | 弹窗显示「评估中 0/N · 已用时 Ns」计时与进度条，N 只全部完成并出分 |
| SM-14.5 | 自选列表 / 评估历史 | 显示真实股票中文名（如 同仁堂/中国联通），不再只有代码 |

---

## 9. v4.0 测试用例

### 9.1 新增单元/接口测试

| # | 用例 | 对应任务 | 类型 | 预期结果 |
|:--:|------|:--:|------|------|
| TC-4.1 | `test_api_v2_prefix` | 4.1 | 接口 | `/api/v2/*` 路由可用 |
| TC-4.2 | `test_api_v1_backward_compat` | 4.1 | 接口 | v1 全部接口保持兼容（抽样回归） |
| TC-4.3 | `test_docs_site` | 4.2 | 接口 | 文档站点可访问，示例代码展示 |
| TC-4.4 | `test_webhook_delivery` | 4.3 | 接口 | 订阅回调送达配置 URL |
| TC-4.5 | `test_webhook_signature` | 4.4 | 单元 | 非法签名被拒绝，合法签名通过 |
| TC-4.6 | `test_plugin_loading` | 4.5 | 单元 | 样例插件加载并出现在列表 |

### 9.2 回归确认

| # | 用例 | 说明 |
|:--:|------|------|
| TC-4.7 | 存量 + 全新增用例 | 无 regression |
| TC-4.8 | v1/v2 双版本全量接口 | 兼容性验证 |

---

## 10. 浏览器冒烟检查清单 (全版本统一)

沿用 v3.7-v3.9 的 **SM-1 ~ SM-15 基础检查**（登录、策略总览、美林时钟详情、日历日/周/月/年、K线、收藏、AI评股、系统配置、主题/图标切换、侧边栏、移动端 375px），每个版本发布前全量走查。各版本专项冒烟见对应章节（SM-11.x / SM-12.x / SM-13.x / SM-14.x）。

---

## 11. 测试用例统计

| 版本 | 存量 | 新增单元 | 新增接口 | 浏览器专项 | 总用例 |
|------|:--:|:--:|:--:|:--:|:--:|
| v3.10 | 76 | 12 | 2 | - | 156* |

> *v3.10 实测 156 用例（含 merrill_clock 64、data_sources 9、version_injection 4、lockfile 3 及存量），高于计划表 88 的预估。

| 版本 | 存量 | 新增单元 | 新增接口 | 浏览器专项(Playwright) | 总用例 |
|------|:--:|:--:|:--:|:--:|:--:|
| v3.11 | 156 | 12 | 2 | 6 | 176* |

> *v3.11 新增 TC-11.1~11.14（含静态检查 1、e2e 1）共 14 项 + TC-11.15 回归，Playwright 专项 6 项另计；
> 前端逻辑拆域后部分 TC 为对新增 JS 模块的单测。

| 版本 | 存量 | 新增单元 | 新增接口 | 浏览器专项(Playwright) | 总用例 |
|------|:--:|:--:|:--:|:--:|:--:|
| v3.12 | 176 | 6 | 2 | 2 | 184 |
| v3.13 | 233 | 2 | 0 | 5 | 235* |
| v3.14 | 235 | 32 | 0 | 3 | 267* |
| v3.14.1 | 267 | 2 | 0 | 0 | 269 |
| v3.14.2 | 269 | 4 | 0 | 3 | 273* |
| v4.0 | 269 | 3 | 3 | - | 275 |

> *v3.13 实测 235 用例（234 单元 + 1 e2e 截图 diff），新增 `test_terminology_unified.py` 评股残留 + 前后端主题名一致性 2 项静态守卫，全绿无回归；
> 原计划的备份/告警/部署用例随「可观测与部署」顺延未实现，浏览器专项 5 项另计。
> *v3.14 实测 267 用例 = 存量 235 + 新增 32（`test_vendor_catalog.py` 15 + `test_api_ai_models.py` 17，其中含 FastAPI 请求层校验 2 例：body 数字 timeout 不 422 回归），浏览器专项 3 项另计；原计划的并行评估/通知/ RAG 用例随该方向顺延。
> *v3.14.1 评估修复补丁 +2 回归（`test_ai_evaluator.py`：缓存命中统一 record 形状、批量评估统一 `{stock_code,success,result}`），浏览器专项 0 项另计。
> *v3.14.2 评估完成性修复 +4 回归（`test_ai_evaluator.py`：reasoning_content 兜底 / 无 JSON 明确报错 / `_resolve_stock_name` 名称解析含裸代码后缀推断 / 批量评估名称透传），浏览器专项 3 项（SM-14.3~14.5）另计。

---

## 12. 覆盖率与质量目标

| 指标 | 基线 (v3.8.2) | v3.10 | v3.11 | v3.12 | v3.13 | v3.14 | v4.0 |
|------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 美林时钟覆盖率 | 0 | ≥ 70% | ≥ 70% | ≥ 70% | ≥ 75% | ≥ 75% | ≥ 75% |
| 后端总覆盖率 | ~50% | ≥ 60% | ≥ 65% | ≥ 65% | ≥ 70% | ≥ 70% | ≥ 70% |
| 用例总数 | 76 | 156 | ≥ 176 | ≥ 184 | ≥ 235 | ≥ 269 | ≥ 275 |
| 致命 Bug | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| CI 通过（含覆盖率门禁） | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 前端视觉回归 (Playwright) | - | - | 报告产出 | 报告产出 | 报告产出 | 报告产出 | 报告产出 |
