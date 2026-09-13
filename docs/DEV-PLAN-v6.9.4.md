# DEV-PLAN v6.9.4：存量问题整改开发计划

> 版本：v1.0（待用户终审授权）
> 状态：待批准
> 创建日期：2026-09-13
> 需求来源：《PRD-v6.9.4.md》/《EVAL-v6.9.4.md》
> 前置：PRD-v6.9.4.md（本计划独立可评审）

---

## 1 开发范围与任务分解

### A 组 · UI 修复（需求 1-5）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| A1 | 移除共识度进度条 | frontend/src/components/common/StockList.vue、frontend/css/components.css | show-consensus 分支删 `.qc-stock-consensus-bar/fill`（虚拟+非虚拟）；`.qc-stock-consensus` 改单行；清理 CSS 规则 |
| A2 | EP 样式表替换 + select 覆盖强化 | frontend/lib/element-plus.css、frontend/css/components.css | lib css ← node_modules/element-plus/dist/index.css（2.14.5）；补 `.el-select__wrapper` 高度/`--el-component-size-small`；保留 nowrap/省略/防拉伸 |
| A3 | 导航形态面板精简 | frontend/src/components/Header.vue、frontend/css/header.css | 删除 desc 行；单行标签+✓；统一 13px 字号/行高 36px；面板 min-width ~200px |
| A4 | themeMode 响应式修复 | frontend/js/app-logic.js | computed → ref；init 读偏好；`changeTheme/changeThemeMode` 同步 `themeMode.value`（含 legacy 解析） |
| A5 | 深色输入框适配 | frontend/css/themes.css | dark-pro 补 `--el-input-*`/`--el-fill-color-*` 映射 + `.el-input__wrapper/.el-select__wrapper` 显式背景/文字 |

### B 组 · 策略研究与配置

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| B1 | 策略研究可诊断性 | backend/api/v1/strategy_research.py、frontend/js/components/research-page.js | /api/strategies 空数据返回 `warn`；loadStrategies 处理 warn→错误卡；5 处 `seq` ReferenceError 修复（runFactorIc/Layer/Detail/Compare/ExportHistory） |
| B2 | 宽度类收敛 | frontend/css/components.css、frontend/js/components/*.js、frontend/js/components/dialogs/*.js | 统一 `w-select-xs/sm/md/lg` 语义类；模板替换 `w-100~w-220/w-100px`；删除旧类定义（保留 w-100px 别名） |

### C 组 · 门禁与收尾

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| C1 | 版本提升 | backend/main_new.py | 6.9.3 → 6.9.4 |
| C2 | 门禁测试修复 | tests/test_v63_m4_config.py、tests/test_tokens_defined.py、（test_tokens_no_hardcode/theme 若在 F5 范围内） | 🧭 断言更新；--qc-success 系 token 补齐定义；dark-pro 硬编码 #0b1220 token 化 |
| C3 | 契约/一致性测试同步 | tests/test_frontend_consistency.py（若 key 数变化）、tests/test_v69x4_*.py（新增） | 见 TEST-PLAN |
| C4 | dist 重建 | frontend/（npm run build） | 全量构建；确认 index.html 仍引用新 lib css |
| C5 | 全量回归 | — | pytest 门禁 + 目标集，失败数 ≤ 34 且门禁 5 项转绿 |

## 2 关键设计决策

1. **EP 样式表对齐**：直接以 `node_modules/element-plus/dist/index.css` 覆盖 `frontend/lib/element-plus.css`（2.14.5 与运行时一致）；不升级/不降级依赖，避免连锁风险。替换后用 HTTP 校验文件字节数与 `el-select__wrapper` 规则数。
2. **themeMode 单一响应式源**：`ref` + 在 `changeTheme`（唯一写路径）内同步，Header/功能配置子页共享 `state.themeMode`，杜绝 computed 依赖非响应式偏好。
3. **深色变量作用域**：EP 变量映射与显式覆盖全部置于 `[data-theme="dark-pro"]` 块内，亮色零影响。
4. **seq 竞态防护修复**：5 个函数入口补 `const seq = ++_reqSeq;`，与既有 `loadStrategies` 等模式一致（`_reqSeq` 已在 setup 作用域声明）。
5. **空数据提示向后兼容**：`/api/strategies` 保持 200 + `strategies: []`，新增 `warn` 字段；旧前端忽略未知字段，无破坏。
6. **宽度类收敛策略**：一次替换模板全部调用点；`.w-100px` 保留为别名（美林时钟两处），其余旧 `w-*` 删除定义（若确无外部依赖）。

## 3 风险与规避

| 风险 | 规避 |
|------|------|
| EP 样式表替换引发其他组件样式漂移 | 替换后全量视觉回归；差异以 components.css 自有覆盖兜底，不动 node_modules |
| themeMode 改 ref 破坏功能配置子页 | 两处共用 `state.themeMode`；契约测试断言存在性；浏览器实证三态高亮 |
| F5 变量映射影响亮色 | 仅 dark-pro 作用域；亮色模式截图/取样式回归 |
| seq 修复遗漏其余 finally | grep `if (seq === _reqSeq)` 全量排查 research-page.js（5 处） |
| 宽度类收敛遗漏调用点 | grep `class="w-` 全量替换清单先行输出，验收逐页抽查 |
| 门禁修复范围蔓延 | 仅修 PRD F8 列明 5 项；dark-pro 对比度超范围则标 known-issue 不动 |
