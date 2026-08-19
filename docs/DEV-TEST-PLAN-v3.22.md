# v3.22 界面体验优化 — 测试计划 (TEST-PLAN)

> 前置: PRD + DETAILED | 测试基线: 当前 907 passed + 覆盖率 57.91% + 前端一致性 103

## 1. 测试范围

| 阶段 | 测试内容 | 类型 | 关键用例 |
|---|---|---|---|
| I1 滚动 | 布局回归 | 手动(CDP)+单元 | 桌面单滚动条/移动body滚动/各页无叠加 |
| I2 用量 | 卡片化 | 单元(前端一致性)+手动 | 4卡片/无裸露指标/降级/移动1列 |
| I3 策略编写 | 后端API | pytest | custom保存/copy/ai-optimize/无key降级 |
| I4 美林 | timeline端点 | pytest | 结构/4轮/阶段序列/空降级 |
| I5 发布 | 全量回归 | pytest+ruff | 门禁全绿/版本/冒烟 |

## 2. 单元测试 (新增)

### I3 策略编写 (tests/test_strategy_custom.py)
- [ ] 保存自定义策略: POST /api/strategies/custom → 201 + strategy_defs 可查
- [ ] 校验: 缺 name/params 非 dict → 400
- [ ] copy: POST /api/strategies/{sid}/copy → 新 sid 含"-副本" + 参数隔离
- [ ] copy 不存在 sid → 404
- [ ] ai-optimize: 有 key mock LLM → 返回 {suggestions:[{param,value,reason}]}
- [ ] ai-optimize 无 key → 降级提示(非500)

### I4 美林 timeline (tests/test_merrill_timeline.py)
- [ ] GET /api/merrill-clock/timeline → {success, data:{cycles:[...]}}
- [ ] cycles ≤4 (最近4轮)
- [ ] 每 cycle: label + stages 序列(从→到+日期+时长+trigger)
- [ ] stages 顺序按日期升序
- [ ] 空 HISTORICAL_TRANSITIONS → 降级空 cycles(非500)

## 3. 前端一致性 (tests/test_frontend_consistency.py 守护)

- [ ] 新增 class(usage-card-grid/usage-stat-card/merrill-timeline/cycle-stage 等) 全部在 CSS 定义
- [ ] 零硬编码色(新样式全 var(--))
- [ ] 术语: 不引入旧词(评股等)

## 4. 手动回归清单 (CDP + 浏览器)

### I1 滚动 (CDP 自动化检测)
- [ ] 策略总览/量化日历/智能评估/策略研究/系统配置 5 页: 桌面 1440x900 垂直滚动条 ≤1
- [ ] 量化日历 stock-list 卡片内滚动保留(虚拟列表)
- [ ] sub-nav 横向滚动保留(信息多)
- [ ] 移动 375px: body 滚动正常, 无固定 header 冲突

### I2 用量统计
- [ ] 资源监控 6 指标入卡(CPU/内存/磁盘/运行/延迟/错误率)
- [ ] 数据源健康各源成功/延迟入卡
- [ ] AI 用量(今日/模型Top/峰值)入卡
- [ ] 运维状态(护栏/调度/备份)合并入卡
- [ ] 无数据源调用时显示降级(-- 或 暂无)

### I3 策略编写
- [ ] 新建策略 → 保存 → 策略列表出现 → 可运行/导出PTrade
- [ ] 复制 → "-副本"独立 → 调参不影响原策略
- [ ] AI优化 → 有key返回建议 → 一键应用 → 参数表单更新
- [ ] 无key → 提示未配置AI(非崩溃)

### I4 美林时钟
- [ ] 时间轴显示最近 4 轮(第1-4轮)
- [ ] 每轮阶段序列正确(衰→复→过→滞...)
- [ ] 点击阶段 → 详情弹窗(时长/触发/关键指标)
- [ ] 当前阶段高亮标识

## 5. 门禁验收

- [ ] ruff backend/ --select=E,F,W --ignore=E501 → All checks passed
- [ ] pytest tests/ -m "not e2e" --cov-fail-under=40 → 全绿 + cov≥40
- [ ] 前端一致性 → 全绿
- [ ] pre-push 门禁(0 token/无运行数据) + push GitHub
- [ ] ops 同步 + 重启 + health 3.22.0

## 6. 测试数据与工具

- CDP 滚动检测: chromium --remote-debugging-port + node WebSocket 脚本(本会话已建 scroll_probe)
- AI mock: pytest monkeypatch ai_evaluator._call_llm 返回固定建议
- 美林历史: 使用现有 HISTORICAL_TRANSITIONS(13条/4轮), 不新增数据

