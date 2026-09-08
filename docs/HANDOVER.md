# 量化选股日历 — 交接文档 (HANDOVER)

> 最后更新: 2026-09-05 (V5.3.13)
> 当前状态: **v5.3.13 已发布双端**(HEAD `1d78f99`, tag v5.3.13), v5.3 系列(v5.3.0~v5.3.13)收官
> 同步状态: **dev(:8001)/ops(:8000) 均跑 systemd 用户服务**; origin + GitHub release + 群辉 三处均已推送; 三仓库 HEAD 一致
> 数据源架构: **sxsc-tushare 优先**(短线三池/龙虎榜/指数/资金流/业绩), 6 位代码自动规范化, 客户端缺失源不记失败

---

## 1. 项目概况

面向 A 股的量化决策辅助工具：**美林时钟(宏观周期) × 多策略选股 × AI 评估 × 策略研究 × 短线复盘**,结果集中在日历界面。

- 技术栈: FastAPI + SQLite(WAL) + Python 3.13/3.14 / Vue 3 SPA(Vite 构建) / Element Plus / ECharts
- 数据源: sxsc-tushare → tushare → akshare 三源热备(短线东财→同花顺/tushare 兜底)
- 部署: 双环境(dev/ops) + GitHub + 群辉 NAS Git + Docker(ghcr.io 未推)

## 2. 版本里程碑 (V4.0 → V5.2.4 全部完成)

| 版本 | 主题 | 关键成果 | tag |
|---|---|---|---|
| v4.0.x | 完全体平台 | 策略平台/完全体闭环/开放平台/时间轴重设计 | v4.0.0 |
| v4.1.0 | 安全加固 | 敏感端点 deny-by-default / SSRF / JWT 会话 / 口令策略 / 限流实化 | v4.1.0 |
| v4.2.0 | 逻辑通畅 | ops 注入复活 / WS 依赖 / 竞态保护 / 登出双清 / 侧栏持久化 | v4.2.0 |
| v4.3.0 | 首屏分包 | Vite 构建层 / 页面懒加载 / dist 入库 | v4.3.0 |
| v4.4.0 | 体验筑基 | 令牌体系门禁 / dark 令牌层 / WCAG 对比度 / 主题收敛 | v4.4.0 |
| v4.5.0 | 便捷收尾 | 美林快捷入口 / 登录并行 / 按钮反馈 / ai_models 拆分 / CI gate | v4.5.0 |
| v4.6.0 | 美术打磨 | 间距 4px 网格 / 动效统一 / 排版令牌化 / 配色门禁 | v4.6.0 |
| v4.7.x | 数据真实化+并发安全 | 选股池真实轮动 / 年视图 32 倍提速 / 引擎异步化+原子写 | v4.7.0/1 |
| v4.8.x | 时间轴个性化+暗色质感 | 阶段详情弹窗 / dark-pro / 默认活力金 | v4.8.x |
| v4.9.x | 执行看板+稳定修复 | 执行看板/研究概览/回测历史 / 系列修复 | v4.9.x |
| v5.0.x | 稳定性与数据可靠基座 | 数据资产/自愈/回测/风险组合/通知/性能/协作/RBAC | v5.0.11 |
| v5.1.x | 策略研究主线 | 研究基座/因子/回测严谨/组合风险/流程闭环/复盘结构化 | v5.1.5 |
| v5.2.0 | 短线数据基座 | 三池/梯队/龙虎榜/板块资金/交易日历/迁移0004/API/前端/盘后入库 | v5.2.0 |
| v5.2.1 | 派生情绪指标与盘面 | 赚钱效应/晋级率/连板溢价/情绪周期/市场事实/验证条件/热度/板块资金子页 | v5.2.1 |
| v5.2.2 | AI 多视角复盘与闭环 | 多分析师/裁判/反思/盘中核验/样本统计/归档漂移/追问聊天/历史检索/webhook | v5.2.2 |
| v5.2.3 | 数据源兜底+UI 优化+菜单重组 | 同花顺/tushare 兜底/lhb 500 修复/三页 UI/菜单重组/高效加载 | v5.2.3 |
| **v5.2.4** | **联动·风格统一·打磨** | 子页日期共享/弹窗跳日历/核验闭环/状态条/overview 缓存/梯队图过滤/活跃方向联动/摘要条/分页 | **v5.2.4** |
| **v5.3.0** | **工程卫生** | Pydantic V2 迁移/锁上界解除/测试隔离/jobs worker 停机/DDL 收归迁移(0005)/审计日志轮转/i18n 缺词守卫 5 语 | v5.3.0 |
| **v5.3.1** | **体验统一** | 页面头全站统一/空错态收敛/短线 3 步引导/无障碍收尾 | v5.3.1 |
| **v5.3.2** | **视觉设计系统** | 语义配色令牌+涨跌强弱/ECharts 专业图表/信息密度三档/动效令牌统一 | v5.3.2 |
| **v5.3.3** | **命令面板扩展** | DEFAULT_COMMANDS 12 条 + Ctrl+D/E/G | v5.3.3 |
| **v5.3.4** | **性能与容量** | 体积预算/虚拟滚动守护/缓存失效中心/热点索引 0006/CI 性能门禁 | v5.3.4 |
| **v5.3.5** | **智能决策** | AI 归因/今日一屏信号化/胜率趋势/报表 HTML/语义令牌涨跌分档 | v5.3.5 |
| **v5.3.6/7** | **运维发布** | 数据旧了告警/隧道文档/回滚演练/SLO | v5.3.6/7 |
| **v5.3.8** | **短线修复** | K线加载修复(新浪源 fallback)+ 盘中核验抓实时池 | v5.3.8 |
| **v5.3.9** | **token 污染修复** | 测试写真实配置+隔离+回退三缺陷; _is_valid_token 回退 .env | v5.3.9 |
| **v5.3.10** | **sxsc 优先调度** | 涨停/跌停/龙虎榜 sxsc 最先 + 业绩预告/快报展示 | v5.3.10 |
| **v5.3.11** | **6 位代码规范化** | _normalize_ts_code + 5 个 _fetch_* 入口, 修复 K线/因子空数据与三源冷却级联 | v5.3.11 |
| **v5.3.12** | **数据字典补全** | 5 类 26 字段 → 11 类 71 字段, 与真实模块键对拍守护 | v5.3.12 |
| **v5.3.13** | **健康统计优化** | 客户端缺失源不记失败, _source_client_ready + 7 处遍历跳过 | v5.3.13 |

当前 master: **v5.3.13**(v5.3 系列收官; 数据源 sxsc 优先架构已稳定, 见 §5.4)

## 3. 环境拓扑与同步

| 环境 | 路径 | 说明 |
|---|---|---|
| dev | /home/evergreen/dsh-workspace/quant-calendar-dev | git 操作点 (:8001), systemd 用户服务 |
| ops | /home/evergreen/dsh-workspace/quant-calendar-ops | 生产 (:8000), fetch+ff-only 同步 |
| workspace 镜像 | /home/evergreen/.openclaw/workspace/quant-calendar-ops | 与 dsh 同源同步镜像(非实跑) |
| GitHub | origin: bangbang8000-cell/quant-calendar | 已推 master + v5.0.1~v5.3.13 tags + GitHub release v5.2.3/v5.2.4/v5.3.10~v5.3.13 |
| 群辉 | synology: ssh://evergreenzhou@192.168.1.2/.../quant-calendar.git | 已推 master + v5 tags(v4.6/v4.7 旧浅克隆 tag 拒绝, 不影响) |

同步链: `git push origin master` → ops `git fetch origin && git reset --hard origin/master` → `git push synology master --tags` → 双端 `systemctl --user restart quant-calendar-dev.service quant-calendar-ops.service`

> 2026-09-03 实测: origin master 在 `ls-remote` 与本地一致(勿信本地 origin/master 陈旧引用, 先 fetch); dev/ops 共享同一 commit 链, 用 ff-only pull 即可, 无需 reset --hard。

## 4. 文档索引 (docs/ 当前 15 份 + archive)

| 文档 | 说明 |
|---|---|
| PRD/DEV-PLAN/TEST-PLAN-v5.2.4.md | **v5.2.4 联动·风格统一·打磨** 三份规划(已批准, 大部分完成) |
| PRD-v5.3.md / DEV&TEST-PLAN-v5.3.md | **v5.3 规划(已批准, v5.3.0~v5.3.13 全部完成)** |
| PRD/DEV-PLAN/TEST-PLAN-v5.2.md | v5.2 短线复盘主线三份规划 |
| PRD/DEV-PLAN/TEST-PLAN-v5.1.md | v5.1 策略研究主线 |
| PRD/DEV-PLAN/TEST-PLAN-v5.0.md | V5.0 稳定性基座 |
| V5-ASSESSMENT.md | V5 系列多维度评估报告 |
| PRD/DEV-PLAN/TEST-PLAN-v4.1-4.5.md / UI-ASSESSMENT-V4.6.md | 旧版规划与 UI 评估 |
| DESIGN-SYSTEM.md / component-contract.md | 设计系统 / 组件契约 |
| HANDOVER.md | 本交接文档 |

> docs/archive/ 存旧版本文档(本地保留)。

### 4.1 V5.2.4 交付详情 (2026-09-03, HEAD 099987c9, tag v5.2.4)

**联动 (T-5.2.41~46 已完成 41/42/43/44/45/46)**:
- 41 短线 7 子页共享 `shortDate`(原 4 日期 ref 合并), 任一子页改日期全同步
- 42 个股详情弹窗加「📅 跳转日历」(5 语 i18n detail.gotoCalendar)
- 43 AI 盘面研判活跃方向 chip 点击 → 跳板块资金并预选搜索(sectorKeyword + 搜索框)
- 44 `/verification/verify` 次日三态核验 + reflection 记分板落盘
- 45 梯队条形图点击 → 涨停池按连板档过滤(ztBoardFilter + 高亮 + 清除 chip)
- 46 `/overview` 返回 session_status + 复盘看板顶部状态条(已收盘/盘中/历史)

**风格统一 (T-5.2.47/48/54 已完成)**: 市场复盘(复盘总数/最新) / 异动扫描(命中/日期) / 量化研究(策略总数/当前) 摘要条; 龙虎榜/板块资金 >200 行 el-pagination 分页(每页 50)。新增 `stat-value-lg` 令牌类(替代内联 font-size, 满足无内联样式守卫)。

**打磨 (T-5.2.52 已完成)**: `/overview` 服务端 TTL 缓存(今日 10min/历史 1h, refresh 强制)。

### 4.3 V5.3 系列交付详情 (v5.3.0 ~ v5.3.13, 全量 2937 用例)

**规划**: docs/PRD-v5.3.md + docs/DEV&TEST-PLAN-v5.3.md(已批准)。v5.3 系列分三阶段: 打磨(v5.3.0~7) → 短线修复(v5.3.8/9) → 数据源优先调度与健全(v5.3.10~13)。

- **v5.3.0 工程卫生**: Pydantic V2 迁移 / requirements 锁上界解除 / 测试隔离 / jobs worker 停机事件 / 4 处 ad-hoc ALTER TABLE 收归迁移 0005 / 审计日志按日轮转(env 可配) / i18n 缺词守卫扩展至 5 语严格一一对应
- **v5.3.1 体验统一**: 页面头全站统一(ai/calendar/system 三页补 page-header, 与 research/shortterm/strategies 5.2.5 基线一致) / 空错态/加载态收敛 qc-state-panel(ai/stock-detail/index-detail/merrill) / 短线复盘 3 步新手引导(硬指标→AI研判→核验) / 无障碍收尾(纯图标按钮 aria-label + dialog 语义)
- **v5.3.2 视觉设计系统**: 语义配色令牌 `--sem-opportunity/risk/neutral/warning`(alias 行情涨跌) + 涨跌强弱分档 / ECharts 专业图表(净值+回撤双轴 / IC 分位带 / 情绪趋势带, 纯函数可测) / 信息密度三档 +spacious / 动效令牌统一(`--duration-*`/`--easing-*`)
- **v5.3.3 命令面板**: DEFAULT_COMMANDS 扩至 12 条(今日一屏/组合/系统/数据源/短线/研究/日历) + Ctrl+D/E/G
- **v5.3.4 性能与容量**: 前端源码体积预算(主逻辑≤80KB/总量≤1.3MB) / 长表虚拟滚动守护 / run_pipeline 刷新后缓存失效中心(invalidate_stale) / 迁移 0006 热点索引 / CI performance-gate 必跑
- **v5.3.5 智能决策**: AI 评估归因(命中/未命中因子清单 + 模型一致性提示, 空数据诚实降级) / 今日一屏信号化(美林/池变动/情绪/数据源 → 机会/风险角标纯计算) / 评估分析胜率趋势按周分桶+样本量 / 报表 HTML 导出(_md_to_html 自包含 UTF-8) / 信号角标语义令牌+4px 合规
- **v5.3.6/7 运维发布**: 健康面板数据旧了告警条(stale/missing 资产计数) / DEPLOYMENT 公网隧道方案 / 升级回滚演练 / SLO
- **v5.3.8 短线修复**: 个股弹窗 K线无法加载(data_sources `__all__` 漏 `_SINA_STOCK_COLUMN_MAP` → 新浪源 fallback NameError) / 盘中核验无数据(改抓实时池)
- **v5.3.9 token 污染修复**: 测试写真实配置 + conftest 隔离漏洞 + 回退缺陷三缺陷叠加(用户判断正确, 非 token 失效) / conftest 重定向 `DATASOURCE_CONFIG_FILE` / `_is_valid_token`(32-64 hex)无效回退 .env
- **v5.3.10 sxsc 优先调度**: 涨停/跌停池 sxsc `limit_list_d` 最先(`up_stat 'X/Y'` 解析连板数, U 类封单如实空) / 龙虎榜 sxsc `top_list`(含 reason) / 个股业绩预告/快报 tab(forecast/express, 5 语 i18n) / 用户提供山证Tushare文档实测网关能力确认功能与实效性更高
- **v5.3.11 6 位代码规范化**: `_normalize_ts_code`(6 位补 .SH/.SZ/.BJ) + 5 个 `_fetch_*` 入口统一, 修复涨停池 6 位代码 → sxsc/tushare 空数据 → 三源冷却级联(K线/因子/资金流/基本面全部恢复)
- **v5.3.12 数据字典补全**: 5 类 26 字段 → 11 类 71 字段(短线三池/龙虎榜/板块资金流/个股资金流/业绩/盘中快照), 每字段完整九要素 + 数据源特性口径, 与真实模块输出键对拍守护
- **v5.3.13 健康统计优化**: `_source_client_ready` + 7 处路由遍历跳过客户端缺失源, 不 record_call 不冷却(dev 无 sxsc token 场景健康面板零假失败)
### 4.2 V5.2.0~5.2.3 增量能力速览

- **5.2.0 数据基座**: 三池(zt 东财→tushare 兜底) + 龙虎榜 + 板块资金 + 交易日历/is_settled + 迁移 0004 + 单一实现(limits.py 复用 scan_engine) + 16:05 盘后抓取(重试+错过补偿) + 菜单/i18n 修复
- **5.2.1 情绪指标**: emotion_metrics(定稿优先+覆盖率闸门) + market_facts + verification(三态+用户自设+落盘) + weekly 热度 + /overview + 复盘看板落地页 + 板块资金子页
- **5.2.2 AI 复盘**: roles/analysts 多分析师 + synthesizer 裁判 + reflection 三路投票 + intraday 盘中核验 + backtest 样本统计 + archive 漂移 + /review(dates/chat) + AI 盘面研判卡 + webhook shortterm_review_ready
- **5.2.3 兜底+UI+菜单**: 板块资金 同花顺兜底 / 龙虎榜 tushare top_list 兜底 + **「上榜日」date 对象序列化 500 修复(曾致 lhb 一直加载失败)** / 盘中核验抓实时池 / 三页摘要条+红涨绿跌+排序+badge 时间轴 / 菜单重组(市场复盘/异动扫描→短线复盘, 执行看板→系统配置 usage 前, 组件复用渲染) / 短线按需懒加载+客户端 TTL 缓存+竞态防护 / 执行看板空修复(watch immediate)

**测试规模**: v5.0.11 2304 → v5.2.4 **2768 用例**(短线专项 ~190, 模块覆盖 93%)

## 5. 关键技术要点

### 5.1 开发流程 (TDD 纪律)
1. 先写门禁测试 → 跑红 → 改源码 → 跑绿
2. 前端改动: 零构建 SPA — 直接改 frontend/ 源码, 后端 serve 源码实时生效 (无需 vite build)
3. 后端改动: `systemctl --user restart quant-calendar-dev.service quant-calendar-ops.service`(无 --reload)
4. 浏览器强刷(Ctrl+Shift+R) + 冒烟
5. 全量回归: `cd .../quant-calendar-dev && pytest -q -m 'not e2e'`(注意 cwd 必须 dev 根, 否则误收 workspace 其他 tests)
6. **前端 dist/CSS 改动无需重启后端**(静态文件从磁盘实时读)

### 5.2 发布流程
1. bump APP_VERSION(backend/main_new.py) + README 版本历史
2. vite build + 全量回归 + 门禁(令牌/间距/一致性/无内联样式)
3. commit + tag vX.Y.Z + `git push origin master` + `git push origin vX.Y.Z` + `git push synology master --tags`
4. (可选) `gh release create vX.Y.Z`(用户授权后)
5. ops 双副本 ff-only 同步 + 重启 + 双端 curl /api/health 冒烟

### 5.3 已知事项
- **沙箱**: ~/.local 只读 → 依赖 qc_ws_pkgs + UV_CACHE_DIR 重定向; urllib 502, 验证用 curl
- **前端零构建 SPA**: 后端 serve frontend/ 源码(非 dist), 前端源码改立即生效(浏览器强刷即可); 仅首次/打包需要构建
- **admin 口令**: dev 为 admin; **ops(:8000) 已轮换**(admin/admin123 失效)。公网 qc.evergreenzhou.com 建议保持轮换 + 密钥加固
- **测试隔离坑 (已根治 v5.3.9)**: conftest patch_data_dir 现重定向 `DATASOURCE_CONFIG_FILE`; test_today_snapshot 顶层 import 已延迟到 fixture
- **锁文件漂移**: test_lockfile_consistent 用默认 uv 缓存重编译比对; 漂移时用同条件 `uv pip compile` 重新生成
- **jobs_queue 测试偶发失败**: 全量顺序敏感(单独跑过), 与功能无关
- **数据源架构 (v5.3.10~13)**: sxsc-tushare 优先(K线/指数/个股资金流/涨停跌停池/龙虎榜/业绩), akshare 兜底; 6 位代码自动 `_normalize_ts_code` 补后缀; 客户端缺失源 `_source_client_ready` 跳过不记失败; 空数据记失败 → 连续 3 次冷却 300s
- **sxsc 涨停池必须用 `limit_list_d`**(44 行), `limit_list` 返回 0 行; sxsc `up_stat` 是 `'X/Y'` 字符串需解析 X=连板数; U 类封单金额网关不填如实空
- **测试用合成 token**: prepush gate 拦截真实 token 片段 → 测试/脚本用合成 hex(如 deadbeef...f)
- **v4.6/v4.7 旧 tag**: 群辉浅克隆拒绝推送(预存问题, 不影响 v5 tags)

## 6. 测试体系 (v5.3.13 基线 2937 用例)

- 门禁: test_tokens_defined / contrast / accessibility / spacing_grid(4px) / typography / theme_contrast / tokens_no_hardcode / **market_review/scan 无内联样式** / 版本纪律 / 覆盖率门禁(短线模块 93%)
- 前端一致性: test_frontend_consistency(令牌/类/注入/i18n/menu) + deps_audit + lockfile
- 功能: 策略/日历/AI/美林/开放平台/回测/数据源/研究/风险/复盘/短线 全覆盖
- e2e(视觉/移动): continue-on-error(信息性)

## 7. 下一步 / 待办

- [x] **v5.3 系列 (v5.3.0~v5.3.13) 全部完成**: 工程卫生 / 体验统一 / 视觉设计系统 / 命令面板 / 性能容量 / 智能决策 / 运维发布 / 短线修复 / token 污染修复 / sxsc 优先调度 / 6 位代码规范化 / 数据字典补全 / 健康统计优化 — 全部 tag v5.3.N ↔ APP_VERSION + 双端推送 + GitHub release(v5.3.10~13)
- [x] **Docker ghcr.io 镜像实际推送 (v5.3.7 验证完成)**: tag v5.3.6 推送自动触发 CI 构建, ghcr.io/bangbang8000-cell/quant-calendar:v5.3.6 + latest 已可拉取并运行健康 (version 5.3.6)
- [x] **测试隔离坑根治 (v5.3.9)**: conftest 重定向 `DATASOURCE_CONFIG_FILE` + test_today_snapshot 顶层 import 延迟到 fixture
- [ ] (可选) 配置 IWENCAI_API_KEY 点亮涨停原因/题材串
- [ ] 观察短线 16:05 抓取: 每日验证三池/龙虎榜/prev_zt 入库 + AI 复盘生成
- [ ] (可选) dev 环境配置 SXSC_TUSHARE_TOKEN 验证 sxsc 全链(当前 dev 无 token, sxsc 客户端缺失自动跳过; ops 已配置真实 token)
- [ ] 旧版 v5.1.5/v5.2.0/v5.2.1/v5.2.2 未建 GitHub release(仅 v5.2.3/v5.2.4/v5.3.10~13 有); 如需补齐历史 release 可 gh release create

> v5.3 系列(工程打磨 + 短线修复 + 数据源优先调度)已收官; 后续主攻方向见 PRD-v5.3.md §2(数据源功能完整性与时效性深化)。
