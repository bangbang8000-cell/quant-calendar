# 量化选股日历 — 交接文档 (HANDOVER)

> 最后更新: 2026-09-03 (V5.2.0)
> 当前状态: **v5.2.0 已发布**(dev 实例), 短线复盘·数据基座完成 (一级菜单「短线复盘」/ 三池 / 龙虎榜 / 板块资金 / 交易日历 / 迁移 0004 / 6 端点 / 盘后自动入库)
> 同步状态: **dev 已从 workspace 副本运行**(systemd `quant-calendar-dev.service` 指向 `.openclaw/workspace/quant-calendar-dev`); ops(:8000) 维持 dsh 实例; tag v5.2.0 本地待推送

---

## 1. 项目概况

面向 A 股的量化决策辅助工具：**美林时钟(宏观周期) × 多策略选股 × AI 评估 × 策略研究**,结果集中在日历界面。

- 技术栈: FastAPI + SQLite(WAL) + Python 3.13/3.14 / Vue 3 SPA(Vite 构建) / Element Plus / ECharts
- 数据源: sxsc-tushare → tushare → akshare 三源热备
- 部署: 双环境(dev/ops) + GitHub + 群辉 NAS Git + Docker(ghcr.io)

## 2. 版本里程碑 (V4.0 → V5.1 全部完成)

| 版本 | 主题 | 关键成果 | tag |
|---|---|---|---|
| v4.0.x | 完全体平台 | 策略平台/完全体闭环/开放平台/时间轴重设计 | v4.0.0 |
| v4.1.0 | 安全加固 | 敏感端点 deny-by-default / SSRF / JWT 会话 / 口令策略 / 限流实化 | v4.1.0 |
| v4.2.0 | 逻辑通畅 | ops 注入复活 / WS 依赖 / 竞态保护 / 登出双清 / 侧栏持久化 | v4.2.0 |
| v4.3.0 | 首屏分包 | Vite 构建层 / 页面懒加载(577→367KB) / dist 入库 | v4.3.0 |
| v4.4.0 | 体验筑基 | 令牌体系门禁 / dark 令牌层 / WCAG 对比度 / 主题收敛 / 可访问性 | v4.4.0 |
| v4.5.0 | 便捷收尾 | 美林快捷入口 / 登录并行 / 按钮反馈 / ai_models 拆分 / CI gate / 流程脚本 | v4.5.0 |
| v4.6.0 | 美术打磨 | 间距 4px 网格 / 动效统一 / 排版令牌化 / 配色门禁 / 图标系统回归 | v4.6.0 |
| v4.7.x | 数据真实化+并发安全 | 选股池真实轮动 / 年视图 32 倍提速(8.7s→0.27s) / 引擎异步化+原子写 | v4.7.0 / v4.7.1 |
| v4.8.x | 时间轴个性化+暗色质感 | 阶段详情弹窗 / dark-pro 令牌化 / 默认主题活力金 | v4.8.0 / v4.8.1 / v4.8.2 |
| v4.9.x | 执行看板+稳定修复 | 执行看板/研究概览/回测历史 / 串股/日视图空/日历可用性 系列修复 | v4.9.0 ~ v4.9.5 |
| v5.0.x | 稳定性与数据可靠基座 | 数据资产/健康自愈/启动自检/故障注入/原子化/数据中台/专业回测/风险组合/通知/报表/引导/性能/协作/RBAC/架构现代化 | v5.0.0 ~ v5.0.11 |
| v5.1.x | 策略研究主线 | 研究基座/因子深化/回测严谨/组合风险/流程闭环/复盘结构化 | v5.1.5 |
| v5.2.x | 短线复盘主线 | **5.2.0 数据基座**: 三池/连板梯队/龙虎榜/板块资金/交易日历定稿/涨跌幅制度/迁移0004/API/前端两子页/盘后入库 | **v5.2.0** |

当前 master: **v5.2.0**(短线复盘·数据基座, dev 实例已运行; 后续 5.2.1 派生情绪指标 / 5.2.2 AI 复盘与闭环)

## 3. 环境拓扑与同步

| 环境 | 路径 | 说明 |
|---|---|---|
| dev | /home/evergreen/dsh-workspace/quant-calendar-dev | 唯一 git 操作点 (:8001) |
| ops | /home/evergreen/dsh-workspace/quant-calendar-ops | 生产 (:8000), fetch+reset 同步 |
| GitHub | origin: bangbang8000-cell/quant-calendar | 代理绕过: git -c http.proxy= -c https.proxy= push |
| 群辉 | synology: ssh://evergreenzhou@192.168.1.2/.../quant-calendar.git | 局域网 ssh (GIT_SSH_COMMAND 绕 config) |

同步链: push GitHub → ops reset → push 群辉 (git push synology master --tags)

> ⚠️ **工作区过期副本警示**: `/home/evergreen/.openclaw/workspace/quant-calendar-*` 是**过期独立克隆**(历史已分叉, 曾停在 v4.7.2 / v3.17.7), 不是运行实例。2026-09-03 已用 `git fetch <dsh路径> + reset --hard` 对齐到 v5.1.5 (备份分支 `ws-old-v4.7.2-backup` / `ws-old-v3.17.7-backup`)。若再次 reset, 临时文件 `.commit-msg551v.txt` / `tmp_survey5.py` 会因仍在 git 跟踪树而**复原**, 需重新删除。

## 4. 文档索引 (docs/ 当前 12 份 + archive)

| 文档 | 说明 |
|---|---|
| PRD-v5.1.md | 产品需求 — 5.1 策略研究主线 |
| DEV-PLAN-v5.1.md | 开发计划 — 5.1.0~5.1.5 (43 任务全部完成) |
| TEST-PLAN-v5.1.md | 测试计划 — 5.1 系列 (出口: 全量绿 + 门禁) |
| PRD-v5.0.md / DEV-PLAN-v5.0.md / TEST-PLAN-v5.0.md | V5.0 稳定性与数据可靠基座 |
| V5-ASSESSMENT.md | V5 系列多维度系统评估报告 (8 视角 × 7 目标) |
| PRD-v4.1-4.5-优化打磨.md | 产品需求(含 V4.1-V4.6 增量能力清单) |
| DEV-PLAN-v4.1-4.5-优化打磨.md | 开发计划(51 任务全部完成 + V4.6 段) |
| TEST-PLAN-v4.1-4.5-优化打磨.md | 测试计划 |
| UI-ASSESSMENT-V4.6.md | UI 全面评估报告 + 优化计划 |
| DESIGN-SYSTEM.md / component-contract.md | 设计系统 / 组件契约 |
| HANDOVER.md | 本交接文档 |

> docs/archive/ 存旧版本文档(本地保留, gitignore 不同步 GitHub)

### 4.1 V5.0 增量能力 (2026-09, v5.0.0 ~ v5.0.11)

| 模块 | 变更 | 收益 |
|---|---|---|
| 数据可靠基座 | 数据资产注册+新鲜度模型 / 健康巡检+自愈注册表 / 启动自检 / 故障注入测试(5 类) / 写路径原子化(tmp+rename+锁) | 运行状态可观测、可自愈、可回滚 |
| 数据中台 | 质量规则引擎(5 规则+ABCD) / PIT 防前视四路径 / 幸存者偏差治理 / 数据血缘+批次 / 数据字典 | 数据准确性硬约束 |
| 专业回测 | 成本模型 2.0 / 基准对比(300/500/1000) / walk-forward / 参数稳定性 / 绩效归因(Brinson+因子) / 回测报告导出 | 回测可信度提升 |
| 风险与组合 | 组合风险指标(VaR/CVaR/回撤/夏普等) / 仓位建议(Kelly/风险平价) / 风控规则引擎 / 风险预警总线 | 风控闭环 |
| 通知/报表/引导 | 6 通道通知抽象+事件引擎 2.0 / 报表模板化+PDF/Excel 导出+订阅 / 新手引导+命令面板+无障碍 2.0 | 可用性/便捷性 |
| 规模化与协作 | 两级缓存 / 异步任务队列 / LTTB 降采样 / RBAC 2.0 / 共享协作 / API v3 + Python SDK + 插件 SDK 2.0 | 性能/开放 |
| 架构现代化 | 大模块拆分子包 / schema 迁移框架 / 一键升级回滚 / 观测性 2.0(SLO) / 契约属性测试 | 可维护性 |

**测试规模**: v4.9.5 1124 用例 → v5.0.11 **2304 用例(覆盖 71.97%)**

### 4.2 V5.1 增量能力 — 策略研究主线 (2026-09-02 ~ 09-03, 43 commits)

| 子版本 | 变更 | 收益 |
|---|---|---|
| 5.1.0 研究基座 | 研究历史持久化 / 列表详情对比删除 API / 前端研究台重构 / CSV 导出 / CI 数据中台覆盖率门禁(≥70%) | 研究可积累、可回看 |
| 5.1.1 因子深化 | 截面三步(MAD/中性化/z-score) / IC 衰减 / 换手率 / 多因子合成(等权/IC/ICIR) / 多重检验 / 因子详情面板 | 因子有效性可检验 |
| 5.1.2 回测严谨 | 成本模型升级(×3 压力) / 前视守卫(t日信号/t+1成交) / 样本外纪律(70/30) / walk-forward 报告 / 可信度清单 / 分年度基准 | 回测不骗人 |
| 5.1.3 组合风险 | portfolio_builder / 净值反推防复利误差 / 风险报告(尾部风险) / 仓位合规标注 / 容量流动性提示(1% 限仓) | 组合落地约束 |
| 5.1.4 流程闭环 | 实验记录扩展(假设/结论/标签) / Markdown 报告导出 / 实验对比雷达图 / 研究日志 | 研究 SOP 完整 |
| 5.1.5 复盘结构化 | 复盘结构化字段(板块/风格/因子/要点/策略启示) / 复盘→策略关联 / 复盘检索 | 知识沉淀可检索 |

**出口标准**: 全量测试绿 + 双端冒烟 0 pageerror + 数值纪律(≤2 位小数)。规划累计 ~2790 用例(基线 v5.0.11 2304)。

## 5. 关键技术要点

### 5.1 开发流程 (TDD 纪律)
1. 先写门禁测试 → 跑红 → 改源码 → 跑绿
2. 前端改动: cd frontend && npx vite build (npm_config_cache 指向 workspace)
3. 重启双端: bash /home/evergreen/dsh-workspace/restart_ws2.sh (PYTHONPATH 前缀 qc_ws_pkgs)
4. 浏览器强刷(Ctrl+Shift+R) + 冒烟 0 pageerror
5. 全量回归: pytest -q -m 'not e2e' (基线 v5.0.11 2304 用例)

### 5.2 发布流程
1. bump APP_VERSION (backend/main_new.py)
2. vite build + 全量回归
3. commit + tag vX.Y.Z + push origin (代理绕过) + push synology
4. ops: fetch + reset --hard origin/master
5. 重启双端 + 双主题冒烟 + README/HANDOVER 同步

### 5.3 已知事项
- **沙箱**: ~/.local 只读 → WS 依赖 qc_ws_pkgs(workspace) + UV_CACHE_DIR 重定向
- urllib 沙箱内 502(环境问题), 验证用 curl
- 前端源码改动必须 vite build(后端 serve dist/), 勿直接改 dist
- admin 默认口令 admin/admin123(私域部署, 未轮换; 启动自检告警为提示)
- **误提交的临时文件**: commit `e225bf5` 的跟踪树里含 `.commit-msg551v.txt` / `tmp_survey5.py`(提交信息草稿+调研脚本)。dsh 工作区另有无跟踪 `tmp_start_ops.py`/`tmp_svc_check.py`/`tmp_svc_state.py`。任何 `reset --hard` 会从跟踪树复原前两个 → 建议后续提交剔除(根治), 本地工作区已手工删除。
- **测试隔离坑 (v3.13 排查确认)**: `tests/test_today_snapshot.py` 顶层 import 使 DATA_FILE 绑死真实路径, 全量 pytest 会污染真实 data/, 与运行中 dev 服务互相污染。跑全量前停 dev 或等根治(未做)。
- **v5.1.5 发布物未推送**: tag v5.1.5 已打(本地), GitHub release / 群辉 / Docker ghcr.io:5.1.5 尚未推送; README 下载区 zip/tar.gz/Docker 链接仍指向 v5.0.11, 推送后需同步 bump。

## 6. 测试体系 (v5.0.11 基线 2304 用例 / 覆盖 71.97%)

- 门禁测试: test_tokens_defined / test_contrast / test_accessibility / test_spacing_grid / test_transition_tokens / test_typography / test_theme_contrast / test_tokens_no_hardcode / test_no_unauthed_sensitive / 版本纪律(tag↔APP_VERSION) / 覆盖率门禁(总≥40% + 模块分档)
- 功能测试: 策略/日历/AI/美林/开放平台/回测/数据源/研究/风险/复盘 全覆盖
- 前端一致性: test_frontend_consistency(令牌/类定义/注入/i18n) + test_frontend_deps_audit(域模块依赖审计)
- 可靠性: 故障注入(5 类) / 原子并发写 / 契约属性测试
- e2e(视觉/移动): continue-on-error(信息性)

## 7. 下一步 / 待办

- [ ] 推送 v5.1.5: tag + GitHub release + 群辉 + Docker(ghcr.io:5.1.5), 推送后 bump README 下载链接区
- [ ] 根治误提交临时文件: 从 git 跟踪树剔除 `.commit-msg551v.txt` / `tmp_survey5.py`(含 dsh 工作区 3 个未跟踪 tmp 脚本)
- [ ] 观察引擎每日 20:00 持续产持仓(日历 overlay 数据)
- [ ] 如启用公网: 轮换 admin 密码 + 密钥加固
- [ ] 新版本发布后: push 群辉 + SKILL §7 快照更新
