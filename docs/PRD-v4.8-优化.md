# 量化选股日历 V4.8 优化 PRD（产品需求文档）

- **文档版本**：v0.1（草案，待用户审阅批准）
- **日期**：2026-08-25
- **产品基线**：master 287fd36（V4.8.0，R1+R2 已完成）
- **状态**：✅ 用户已批准 · R1+R2 已实现（V4.8.0 发布中），R3 待开发（V4.8.1）
- **配套**：DEV-PLAN-v4.8-优化.md | TEST-PLAN-v4.8-优化.md

---

## 1. 需求背景与目标

基于用户对现有产品的使用反馈，提出三项优化需求。整体目标：**提升信息呈现的精准性（只给用户当时需要的）、统一产品默认体验、深化专业主题品质**。

### 需求总览

| # | 需求 | 模块 | 优先级 | 状态 |
|---|------|------|:--:|:--:|
| R1 | 美林时钟历史周期时间轴：小阶段弹窗内容个性化 | 策略总览页 · 美林时钟时间轴 | **P0** | ⏳ 待开发 |
| R2 | 默认主题统一为「活力金」，修改后按修改生效 | 全局主题系统 | **P0** | ⏳ 待开发 |
| R3 | 暗色专业主题（dark-pro）持续迭代优化 | 全局主题 · dark-pro | P1 | ⏳ 待开发 |

---

## 2. R1：美林时钟时间轴小阶段弹窗个性化

### 2.1 现状与问题

**现状**（V4.0.3-V4.0.8 已建成）：
- 历史时间轴（第1-4轮周期）每阶段是一个 **merrill-stage-chip**，hover 显示 **tl-tip**（已做精简：名称/年份/时长 + essence 或当前实时指标）
- **点击 chip → showTimelineStage(stage) → showStageDetail(stage)**，弹出的是**完整阶段详情弹窗**（merrill-detail 弹窗，展示该阶段的全部配置：指标得分、维度分析、预测、历史案例等「大而全」信息）

**问题**：
1. **点击与 hover 信息不一致**：hover 看的是「这个小阶段发生了什么」（essence/trigger），点击却跳到大而全的阶段分析弹窗，**丢失了该小阶段的独特性**
2. **信息过载**：用户想快速回顾「第3轮 2020-03 复苏期」当时发生了什么，却被要求进入完整阶段分析页
3. **内容空白**：当前阶段的 essence 字段未填充（只有历史转换有 essence），tooltip 无当前阶段凝练要点

### 2.2 需求描述

**核心诉求**：时间轴上**每个小阶段的弹出框（点击与 hover）仅展示该小阶段的独特信息**，不展示大而全的阶段分析。

### 2.3 功能设计

#### 2.3.1 小阶段信息模型（持久化存储与更新机制）

后端 `merrill_history.py` 建立**每阶段独有信息**的完整数据模型（数据为静态历史事实，随代码版本维护）：

```python
# 阶段独有信息 (每阶段一条, 用于时间轴弹窗)
STAGE_BRIEFS = {
    # key: (cycle_label, stage_key)
    ("第3轮", "recovery"): {
        "essence": "疫情冲击后 V 型修复，特别国债稳增长",   # 本周期本阶段凝练要点
        "trigger": "新冠疫情冲击（GDP单季-6.8%）→ 央行紧急降息+特别国债",
        "key_indicators": {"gdp_growth": -6.8, "cpi": 4.3, "pmi": 35.7},  # 该阶段关键指标
        "highlight": "本轮复苏仅持续 1.6 个月即转向过热（政策急刺激+补库存）",  # 独特性亮点
    },
    ...
}
```

**更新机制**：
- 数据集中在 `backend/merrill_history.py` 的 `STAGE_BRIEFS` 常量（随代码版本维护，非运行时数据）
- `build_timeline()` 输出每阶段时合并注入 `essence` / `highlight` / `key_indicators`（**来源优先级**：STAGE_BRIEFS > HISTORICAL_TRANSITIONS 已有 essence > 阶段通用描述）
- **当前阶段**也纳入（"第4轮"+"recovery"），解决 essence 空白
- API 透传：`/api/market/merrill-clock/timeline` 响应每阶段含完整独有信息（现有接口，仅字段扩充，**无新端点**）

#### 2.3.2 弹窗交互设计（点击与 hover 统一）

| 交互 | 现状 | 目标 |
|------|------|------|
| **hover chip** | tl-tip 精简（essence/实时指标） | 保持精简，补充 highlight（若存在） |
| **点击 chip** | 打开大而全的 showStageDetail 弹窗 | **改为时间轴内嵌紧凑详情弹窗**（类似 tl-tip 放大版），仅展示该阶段独有信息 |

**点击弹窗内容结构**（新组件，替代跳转 showStageDetail）：
1. **头部**：阶段名 + 周期轮次 + 年份区间（如「复苏期 · 第3轮 · 2020-03~2021-07」）+ 当前徽标（若当前）
2. **时长**：约 N 个月 / N 天（当前阶段含已 N 天/剩 N 天）
3. **本阶段凝练要点（essence）**：1 段话（核心）
4. **触发原因（trigger）**：历史阶段显示；当前阶段显示实时核心指标（PMI/GDP/CPI/PPI/M2）
5. **关键指标（key_indicators）**：该阶段当时的 GDP/CPI/PMI/PPI 数值卡片
6. **独特性亮点（highlight）**：本阶段不同于其他阶段的事件/特征（如「仅持续 1.6 个月」「PPI 飙至 13.5%」）

**UI 设计原则**：
- 紧凑玻璃浮层（复用 V4.0.2 --glass-* 令牌），**不跨全宽覆盖周期图**（延续 V4.0.3 设计约束）
- 点击弹窗 = hover tooltip 的扩展版，信息层级：名称/时间（头部）> essence（主内容）> trigger/指标/亮点（次级）
- 关闭：点击外部 / ESC / 关闭按钮

#### 2.3.3 需求 R1 不做（明确边界）
- **不改**完整阶段详情弹窗（showStageDetail）——那是"进入该阶段的完整分析"的入口，仍保留（例如从日历页/其他入口访问）
- **不新增**后端端点（复用 timeline 接口字段扩充）
- **不做**阶段独有信息的运行时编辑（数据是历史事实，随代码维护即可）

### 2.4 R1 验收标准
1. 时间轴点击任意历史阶段 chip，弹出**该阶段独有信息**（essence/trigger/指标/亮点），不含大而全的阶段分析
2. hover 与点击信息一致且精简
3. 当前阶段（第4轮 recovery）点击有 essence 与实时指标，无空白
4. 弹窗不遮挡整个周期图（紧凑布局）
5. 数据降级：essence/trigger 缺失时优雅回落（显示阶段通用描述），不报错

---

## 3. R2：默认主题统一为「活力金」

### 3.1 现状与问题（双体系混乱）

| 位置 | 当前默认 | 说明 |
|------|---------|------|
| `backend/user_manager.py` (93/107/117/185) | `tech-blue` | 新用户/内置用户 theme 字段默认 |
| `backend/api/v1/user_config.py` (36) | `tech-blue` | 用户配置默认 |
| `frontend/js/app-logic/auth.js` (98/144) | `applyTheme(data.user.theme || 'tech-blue')` | 登录后主题 fallback |
| `frontend/js/preferences.js` (37-40) | light→`classic-white` / dark→`dark-pro` | 模式制映射 |
| `frontend/js/app-logic.js` (15) | 语言默认 zh-CN, theme 恢复走偏好 | 启动恢复 |

**问题**：
1. **默认不一致**：新用户默认 tech-blue（科技蓝），但用户期望**活力金（vibrant-orange）**
2. **双体系冲突**：preferences 用「模式制」（light/dark/system），user_manager 用「具体主题名制」（tech-blue/vibrant-orange...），登录后 `applyTheme(data.user.theme)` 直接应用具体名，与模式制切换（changeTheme 存模式）不一致
3. **修改后持久化链路**：用户改主题 → changeTheme → PUT /api/users/{username} → user.theme 更新，但**未登录/游客**与**登录后**的主题来源可能打架（localStorage quant_theme vs 后端 user.theme）

### 3.2 需求描述

**核心诉求**：**默认（未设置/新用户/游客）统一使用「活力金」主题**；用户修改后，**按修改后的主题持久化生效**（登录用户存后端，游客存 localStorage）。

### 3.3 功能设计

#### 3.3.1 默认值统一（单点修改）

| 位置 | 修改 |
|------|------|
| `user_manager.py` THEMES 相关默认（add_user/内置用户） | `tech-blue` → `vibrant-orange` |
| `user_config.py` 用户配置默认 theme | `tech-blue` → `vibrant-orange` |
| `auth.js` 登录 fallback | `'tech-blue'` → `'vibrant-orange'` |
| `themes.js` 启动兜底（无 saved 时） | 显式默认 `vibrant-orange`（当前未显式设置时浏览器默认无 data-theme） |

#### 3.3.2 主题生效优先级（唯一权威链）

1. 用户显式修改（changeTheme） → 写 localStorage(quant_theme) + 登录用户 PUT 后端 user.theme
2. 登录后 → applyTheme(user.theme || 'vibrant-orange')   (后端持久化优先)
3. 启动恢复 → themes.js 读 localStorage(quant_theme)，无则 vibrant-orange
4. 游客 → localStorage 持久化

**关键约束**：任何路径都收敛到 themes.js 的 applyTheme（现有唯一权威，不另起实现）。

#### 3.3.3 双体系调和（模式制 vs 具体主题名）

**现状评估**：系统页主题选择器（system-page.js 110-116 行）直接列 7 套具体主题（themes.js），changeTheme(key) 存具体名到 user.theme；而 preferences 的 theme 模式（light/dark/system）是另一套（可能用于"跟随系统"）。**建议**：
- 保持系统页 7 套主题选择器为主入口（改具体主题名）
- preferences 的 mode 制作为"跟随系统/深浅"辅助（resolveTheme 仅在未显式选具体主题时生效）
- **本轮 R2 只做默认值统一**（不重构双体系，避免范围膨胀）；双体系调和作为 R3/后续项

### 3.4 R2 验收标准
1. 全新浏览器访问（无 localStorage）→ 默认活力金主题
2. 新注册用户 → 默认活力金
3. 用户修改为暗色专业 → 刷新/重登后保持暗色专业
4. 游客修改主题 → 刷新后保持
5. 登录用户修改主题 → 后端持久化，其他设备登录同账号同步

---

## 4. R3：暗色专业主题（dark-pro）持续迭代优化

### 4.1 现状

- dark-pro 令牌覆盖：themes.css 102 处（V4.4 dark 令牌层已建成），layout.css 1 处
- 对比度门禁：tests/test_contrast.py（dark 核心令牌 WCAG 4.5/3.0）、test_theme_contrast.py 已守护
- V4.4-V4.6 已完成：令牌补全、去 !important、对比度门禁、主题收敛

### 4.2 需求描述

**核心诉求**：持续优化 dark-pro 的视觉品质与覆盖完整性，目标为**专业级暗色体验**（非简单反色）。

### 4.3 迭代方向（评估后建议范围）

| 方向 | 内容 | 优先级 |
|------|------|:--:|
| D1 | **覆盖审计**：扫描 dark-pro 下未令牌化/硬编码色值（重点：第三方组件、图表、时间轴、弹窗） | P1 |
| D2 | **对比度补强**：dark-pro 次级文本/边框/占位符的 WCAG 达标审计（现有门禁仅核心令牌，扩展覆盖面） | P1 |
| D3 | **层级质感**：暗色下的阴影/浮层/玻璃效果统一（--glass-*、--shadow-md 的暗色变体），卡片层级更分明 | P2 |
| D4 | **图表适配**：ECharts 暗色主题（echarts-theme.js）与 dark-pro 令牌联动，网格线/标签/图例对比度 | P2 |
| D5 | **时间轴/新组件适配**：V4.0 时间轴（tl-tip、chip、连接线）在 dark-pro 下的可读性审计 | P1 |

### 4.4 R3 验收标准
1. dark-pro 下无硬编码亮色残留（令牌纪律测试覆盖新增区域）
2. 核心文本/图表标签/时间轴 tooltip 对比度 ≥ WCAG AA（4.5/3.0）
3. 暗色浮层/阴影层级可辨识（卡片>页面、弹窗>卡片）
4. 亮色主题无回归（对比度门禁双主题全绿）

---

## 5. 范围与优先级

| 版本 | 内容 | 估时 |
|------|------|:--:|
| **V4.8.0** | R1（时间轴弹窗）+ R2（默认活力金） | 2-3 天 |
| **V4.8.1** | R3-D1/D2/D5（覆盖审计+对比度+时间轴适配） | 2-3 天 |
| **V4.8.2**（可选） | R3-D3/D4（层级质感+图表适配） | 2 天 |

## 6. 风险与依赖

| 风险 | 影响 | 缓解 |
|------|------|------|
| 时间轴弹窗改动影响 V4.0.3-4.0.8 时间轴回归 | 高 | 前端冒烟 0 pageerror + 时间轴专项回归 |
| 默认主题改动影响现有用户观感 | 中 | 仅改"默认值"（未设置才生效），已设用户不受影响 |
| dark-pro 覆盖审计工作量大 | 中 | 分批迭代（D1/D2 优先） |

## 7. 术语

- **essence**：本周期本阶段的凝练要点（一段话）
- **highlight**：该阶段独特性亮点（区别于其他阶段的事件/特征）
- **模式制**：light/dark/system 三态偏好（跟随系统）
- **具体主题名制**：7 套具体主题（tech-blue/vibrant-orange/dark-pro...）
