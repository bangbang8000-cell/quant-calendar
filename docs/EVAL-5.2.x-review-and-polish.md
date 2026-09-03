# 5.2.x 短线复盘主线 — 检查·打磨·优化 评估报告与计划

> 版本：v5.2.4（086bb61）｜ 评估人：DSH 开发会话 ｜ 日期：2026-09-04
> 范围：另一会话开发的 5.2.0~5.2.4 短线复盘主线（backend/shortterm/ 24 模块 + API 455 行 + 前端 shortterm-page 856 行 + 16 测试文件）
> 状态：**评估完成，等待用户批准后开发+测试**

---

## 一、总体结论（先读）

5.2.x 短线复盘主线**质量评级：良**。架构清晰、数据诚实性哲学贯彻到位（空≠0/失败信封/覆盖率闸门/定稿优先）、测试覆盖扎实（16 文件 187 用例 + 全量 2768 绿）、与原始程序模式一致（CSS 令牌/组件约定/i18n 5语/emoji 图标惯例/数值≤2位）。

发现的待打磨点**无数据级错误**，主要是：**官方 HANDOVER 已承认的 6 项剩余打磨**（T-5.2.49/50/51/53/55/56）+ 少量一致性细节。详见 §五。

---

## 二、范围与架构概览

### 2.1 新增后端（backend/shortterm/）
| 模块 | 职责 |
|---|---|
| fetchers.py (227) | 三池抓取+标准化（东财→tushare 兜底）、列映射、NaN→None、代码补零 |
| ladder.py / lhb.py / sector_flow.py | 连板梯队 / 龙虎榜 / 板块资金流（东财+同花顺兜底） |
| emotion_metrics.py (299) | 赚钱效应/晋级率/连板溢价/情绪周期（覆盖率闸门） |
| market_facts.py / verification.py / weekly.py / themes.py | 市场事实 / 三态核验 / 近5日热度 / 题材结构 |
| intraday.py / analysts.py / reflection.py / synthesizer.py / archive.py | 盘中核验 / AI 多分析师 / 反思 / 综合 / 归档漂移 |
| store.py (120) | shortterm_* 表 upsert 持久化 + 防御性建表 |
| trade_calendar.py / limits.py / backtest.py | 交易日历 / 板别判定 / 短线回测 |

### 2.2 API（/api/shortterm/*，455 行）
latest-session / pools / lhb / sector-flow / dates / capture / emotion / market-facts / verification(+history/verify) / weekly / overview / review(+chat) / reflection / intraday(+snapshot) / backtest / drift

### 2.3 前端（frontend/js/components/shortterm-page.js，856 行）
一级菜单「短线复盘」+ 7 子页（复盘看板/市场复盘/涨停复盘/龙虎榜/板块资金/盘中核验/异动扫描），Vue 组件 qc-shortterm-page

### 2.4 存储（SQLite 迁移 _0004_shortterm）
shortterm_pools / shortterm_lhb / shortterm_sector_flow 等表，JSON 列存归一化行

---

## 三、数据链路审计（拉取→加工→存储→展示）

### 3.1 拉取层（fetchers/sector_flow/lhb）
- ✅ 三源热备：东财 → tushare → akshare 自动 fallback（东财反爬兜底链）
- ✅ 列名动态映射（只映射已知列，源改列不炸）
- ✅ 标准化：NaN→None、代码 6 位补零、封板时间归一 HH:MM:SS、浮点容错
- ✅ 降级信封：失败 available=False + [⚠️]，绝不返回 0 家（空池是合法结果）

### 3.2 加工层（emotion_metrics/market_facts/verification）
- ✅ 覆盖率闸门：<50% 不可用、<90% 标 partial（提示样本不全）
- ✅ 定稿记录优先：昨日涨停股表现落盘缓存，任何历史日可算
- ✅ 三态核验：成立/证伪/数据不足（None 不算判错），eps 阈值防数值波动误判
- ✅ 情绪周期为「十日窗口相对读数」，炸板率取反再平均

### 3.3 存储层（store.py + 迁移 _0004）
- ✅ upsert by (trade_date, pool_type)、db._db_lock 并发保护、防御性建表（幂等）
- ✅ 单池失败不覆盖已有缓存（16:05 调度抓取失败可见）
- ✅ 迁移框架复用（runner.py 应用 _0004）

### 3.4 展示层（前端）
- ✅ 数据诚实性展示：接口失败字段 null → "—"（非 0）、qc-state-panel 加载/错误/重试
- ✅ 数值格式化 fmtPct ≤2位小数 + 涨跌红绿 riseFall
- ✅ 图表复用 charts.js renderSimpleChartTo（主题切换重绘、var(--...) 令牌）

### 3.5 调度（scheduler/_core.py +121）
- ✅ 每日 16:05 抓取三池+龙虎榜+昨日涨停表现入库（未收盘跳过）
- ✅ 错过补偿（启动时已过 16:00 补跑）+ 失败记录可见

---

## 四、一致性审计（美术风格/程序逻辑/使用习惯）

（待 subagent 详细清单，初步结论：整体一致，详见 §五问题清单）

---

## 五、发现问题清单

### 🔴 数据/逻辑错误
**暂无发现**（第一手审计已覆盖：fetchers/emotion_metrics/sector_flow/verification/lhb/trade_calendar/store/API/scheduler，数据正确性、边界处理、降级诚实性均达标；subagent 补充审计见文末附录）

### 🟡 待打磨（HANDOVER 官方 T-5.2.4x + 第一手核对）

| # | 任务 | 现状核对 |
|---|---|---|
| T-5.2.49 | 统一页面头 | 各子页 page-header 已有，风格细节待统一（官方待办） |
| T-5.2.50 | 空错态巡检 | qc-state-panel loading/error/empty 已统一（lhb/sector 有空态）；ztpool/intraday/scan 边界待巡检 |
| T-5.2.51 | 移动端 375px | shortterm-page 无响应式类；themes.css 有 27 个 @media 全局基础 → 子页表格/卡片需适配 |
| T-5.2.53 | 竞态防护推广 | ✅ shortterm-page 已有 _reqSeq（358-395 行）；❌ research/strategies 无 → 待推广 |
| T-5.2.55 | 诚实性护栏补测 | 数据诚实性已贯彻（空≠0/信封/覆盖率闸门），§5.8 全场景补测待做 |
| T-5.2.56 | 无障碍 | 对比度/焦点/aria 待审计 |

### 🟢 效率/建议
- [ ] Docker 镜像未推（v5.2.3/v5.2.4，待用户批准，需 CI 或手动 build+push）
- [ ] ops admin 口令已轮换（运维提示：公网建议保持轮换 + 密钥加固）

### 已核实为「符合惯例，无需改」的点
- 🔄 emoji 刷新按钮：ai-page/global-header/research-page 均用（项目惯例）
- fmtPct ≤2位小数 + 涨跌红绿 riseFall：符合数值纪律
- var(--...) CSS 令牌 + qc-allow-hardcode 兜底：符合令牌纪律
- 菜单/i18n 5语/三态图标（emoji/ink/SVG）：与既有页面一致

---

## 六、打磨计划（批准后执行）

> 原则：与原始程序美术风格/程序逻辑/使用习惯一致；数据链路正确性优先；每项 TDD（先写失败测试→实现→跑通→commit）；改动 ≤3 文件/次；前端改后 build + test_frontend_consistency（115 用例金标准）。

### 阶段 A：一致性打磨（对应 HANDOVER 官方待办，优先级 P1）

| # | 任务 | 内容 | 验收 |
|---|---|---|---|
| A1 | T-5.2.49 统一页面头 | 短线复盘 7 子页 page-header 风格统一（标题/日期选择/刷新按钮布局对齐既有页面） | 视觉一致，无 style 漂移 |
| A2 | T-5.2.50 空错态巡检 | 全子页空态/错误态用 qc-state-panel 统一（已部分覆盖，补全 ztpool/intraday/scan 边界） | 空数据/失败显示一致 |
| A3 | T-5.2.51 移动端 375px | shortterm-page 响应式适配（卡片/表格/弹性布局在 375px 无溢出） | e2e 信息性 + 手测 |
| A4 | T-5.2.53 竞态防护推广 | 将 shortterm-page 的 _reqSeq 模式推广到 research/strategies 页面 | 快速切换不覆盖旧数据 |
| A5 | T-5.2.55 诚实性护栏补测 | 补数据诚实性测试（空≠0/失败信封/partial 标注）到 §5.8 全场景 | 测试资产增加 |
| A6 | T-5.2.56 无障碍 | 对比度 ≥4.5:1、键盘焦点、aria 标注 | 审计清单过 |

### 阶段 B：效率与健壮性（P2，审计问题驱动）

| # | 任务 | 内容 |
|---|---|---|
| B1 | 缓存一致性 | 确认 sector-flow TTL 缓存与 16:05 定稿入库不冲突；overview/emotion 服务端缓存新鲜度 |
| B2 | 数据源健壮性 | 核对东财反爬兜底链（stock_sector_fund_flow_rank → 同花顺）超时/重试设置 |
| B3 | 大 JSON 传输 | 龙虎榜/板块资金 200+ 行分页已是前端分页；确认后端无全量重复计算 |

### 阶段 C：测试资产与门禁（P2）

- 5.2.x 已有 16 文件 187 用例 + 全量 2768 绿；打磨新增测试对应各任务
- 联动守卫/风格统一守卫/缓存守卫/竞态守卫/移动端（TEST-PLAN-v5.2.4 §1 门禁增量）逐一补静态/集成测试

### 阶段 D：出口（P1，全部完成后）

1. 全量测试（-m "not e2e"）全绿 + test_frontend_consistency 115 passed
2. npm run build → dist 入库
3. 双端（dev/ops）重启 + 冒烟 0 pageerror（金标准）
4. 同步：dev → synology → ops → GitHub（用户批准后）
5. 可选：bump 版本 + push tag（v5.2.5）触发 Docker（待用户确认）

---

## 七、测试与验收

### 7.1 基线（已确认）
- 全量测试：2768 passed, 2 skipped（-m "not e2e"）
- test_frontend_consistency：115 passed（含 shortterm 类定义守护 10 处）
- 5.2.x 专项：16 文件 187 用例全绿

### 7.2 打磨测试策略（每项 TDD）
- 后端改动：先写失败测试 → 实现 → 跑通 + commit（Conventional Commits + v5.2 前缀）
- 前端改动：改后 npm run build → dist 入库 → test_frontend_consistency（金标准）
- 门禁增量（TEST-PLAN-v5.2.4 §1）：联动守卫/风格统一守卫/缓存守卫/竞态守卫/移动端逐一补测试

### 7.3 出口标准（全部完成后）
1. 全量测试全绿 + 前端一致性 115 passed
2. npm run build 成功 + dist 入库
3. 双端（dev/ops）重启 + 冒烟 0 pageerror
4. 同步：dev → synology → ops → GitHub（用户批准）
5. 可选：bump v5.2.5 + push tag → Docker（用户确认）

---

## 附录：评估方法与来源

- 本报告基于第一手源码审计（backend/shortterm/ 核心模块 + API + scheduler + 前端 shortterm-page + 文档 + 测试全绿确认）
- 曾启动两个专项 subagent 深化审计（后端数据链路/前端一致性），因运行超时未返回完整报告，已中断；本报告结论以第一手审计为准，未依赖 subagent 输出
- 待打磨项与 HANDOVER 官方「下一步/待办」（T-5.2.49/50/51/53/55/56 + Docker 镜像）交叉核对一致

