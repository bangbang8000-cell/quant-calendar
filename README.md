<p align="center">
  <h1 align="center">📊 量化选股日历</h1>
  <p align="center">
    <strong>Quant Calendar</strong> — 把宏观经济周期、多因子策略选股和 AI 智能评估<br>整合到一个日历界面的<strong>开源量化投资决策系统</strong>
  </p>
  <p align="center">
    <a href="https://github.com/bangbang8000-cell/quant-calendar/releases"><img src="https://img.shields.io/github/v/release/bangbang8000-cell/quant-calendar?color=blue&label=version" alt="version"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license"></a>
    <a href="#"><img src="https://img.shields.io/badge/python-3.10+-blue" alt="python"></a>
    <a href="#"><img src="https://img.shields.io/badge/vue-3.x-42b883" alt="vue"></a>
    <a href="#"><img src="https://img.shields.io/badge/A股-量化选股-red" alt="a-shares"></a>
    <a href="https://github.com/bangbang8000-cell/quant-calendar/stargazers"><img src="https://img.shields.io/github/stars/bangbang8000-cell/quant-calendar?style=social" alt="stars"></a>
  </p>
</p>

---

## 🎯 这是什么？

**量化选股日历**是一个**开源、全功能、开箱即用**的 A 股量化投资决策辅助系统。它把三个核心能力整合到一起：

| 🕐 宏观经济周期判断 | 📊 多策略自动选股 | 🤖 AI 智能个股评估 |
|:--:|:--:|:--:|
| 美林时钟 × 五维度评分 | 动量/反转/质量/资金流 | DeepSeek / OpenAI / 豆包 |
| 自动识别复苏→过热→滞涨→衰退 | 4 策略交叉验证+共识榜 | 技术指标自动注入+多模型串行 |

> 它不是回测框架，不是数据平台——**它是你的每日选股工作台**。像看天气预报一样看 A 股机会。

---

## ✨ 为什么选择它？

### 🚀 5 分钟上手，零配置依赖

```bash
git clone https://github.com/bangbang8000-cell/quant-calendar.git
cd quant-calendar/quant-calendar-ops/backend
pip install -r requirements.txt
cp .env.example .env   # 填入 Tushare Token（免费注册）
python main_new.py --port 8000
# 浏览器打开 http://localhost:8000，默认账号 admin/admin
```

**不需要** MySQL、Redis、Docker、GPU。一个 Python 进程就跑起来。

### 📈 数据驱动，不是拍脑袋

- **美林时钟**基于 GDP 增速、CPI、PMI、社融、利率**五维度定量评分**，不是手动标注
- **4 大策略**独立运行，每日输出选股结果。动量、反转、行业轮动、资金流——多角度交叉验证
- **共识榜**告诉你哪些股票被多个策略同时看好，≥3 策略共识自动高亮

### 🤖 AI 加持，但你不依赖它

- 支持 **8+ 模型提供商**：DeepSeek、OpenAI、豆包、通义千问、Claude、GLM、Moonshot……
- 技术指标（RSI / MACD / MA / KDJ）**自动注入** prompt，AI 评估有数据支撑
- 多模型**串行评估**同一只股票，综合打分，避免单一模型偏见

### 🎨 好看，也好用

- **4 套主题**：科技蓝 / 玫瑰红 / 活力橙 / 暗夜模式
- **日历式交互**：日、周、月、年视图自由切换
- 内置 **K 线图**（ECharts）+ MA 均线 + 成交量
- 支持**全局搜索**股票、**CSV 一键导出**

---

## 📸 界面预览

<details open>
<summary><b>策略总览</b> — 4 策略共识榜 + 股票池 + 入池/出池统计</summary>
<p align="center">
  <img src="assets/screenshots/策略总览.png" alt="策略总览" width="90%">
</p>
</details>

<details>
<summary><b>量化日历</b> — 日/周/月/年视图 × 股票池 × 内置 K 线</summary>
<p align="center">
  <img src="assets/screenshots/量化日历.png" alt="量化日历" width="90%">
</p>
</details>

<details>
<summary><b>AI 智能评估</b> — 多模型串行评股 × 评估历史追溯</summary>
<p align="center">
  <img src="assets/screenshots/评估历史.png" alt="AI评估" width="90%">
</p>
</details>

<details>
<summary><b>系统配置</b> — 双数据源热备 × 飞书推送 × AI 模型管理</summary>
<p align="center">
  <img src="assets/screenshots/系统配置.png" alt="系统配置" width="90%">
</p>
</details>

---

## 🧩 功能矩阵

| 模块 | 功能 | 技术亮点 |
|------|------|----------|
| 🕐 **美林时钟** | 五维度宏观评分，四阶段自动切换 | 阶段切换历史追溯，可视化时钟面板 |
| 📊 **策略选股** | 4 大策略独立运行，共识榜交叉验证 | 多因子 / 行业轮动 / 资金流 / 指数增强 |
| 🤖 **AI 评股** | 多模型串行评估，技术指标自动注入 | OpenAI 兼容协议，支持 8+ 模型 |
| 📅 **量化日历** | 日/周/月/年视图，K 线图 | ECharts + MA 均线 + 成交量 |
| 🔍 **全局搜索** | 股票代码/名称模糊搜索 | 实时建议，一键跳转详情 |
| 📥 **数据导出** | 视图数据一键导出 CSV | 日/周/月/年视图均可导出 |
| 📨 **飞书推送** | 定时推送每日选股报告 | Webhook 机器人，支持自定义时间 |
| 👥 **多用户系统** | 管理组/用户组/访客组 | 独立自选股和评估历史，权限隔离 |
| 🎨 **主题系统** | 4 套主题 + 暗色模式 | CSS 变量驱动，一键切换 |
| 🔒 **安全** | JWT 认证 + bcrypt 密码 + CSP + HSTS | 7 层安全响应头 |

---

## 📦 仓库结构

```
quant-calendar/
├── README.md                    ← 你在这里
├── quant-calendar-ops/          ← 应用代码
│   ├── backend/                 ← FastAPI 后端 (Python)
│   │   ├── main_new.py          ← 主入口
│   │   ├── merrill_clock.py     ← 美林时钟引擎
│   │   ├── ai_evaluator.py      ← AI 多模型评股
│   │   ├── data_sources.py      ← 多数据源管理 (sxsc→tushare→akshare)
│   │   ├── scheduler.py         ← 定时任务调度
│   │   └── api/v1/              ← REST API (搜索/日历/视图/评估/用户...)
│   ├── frontend/                ← Vue 3 SPA 前端
│   │   ├── index.html           ← 单文件应用
│   │   ├── js/                  ← JS 模块
│   │   └── lib/                 ← Element Plus / ECharts
│   └── tests/                   ← 测试
└── qresult/                     ← 策略选股数据 (CSV)
    ├── 多因子策略持仓.csv        ← 动量+反转+质量
    ├── 行业轮动策略持仓.csv      ← 行业轮动
    ├── 资金流策略持仓文件.csv    ← 北向资金+主力
    └── 指数增强策略持仓.csv      ← 沪深300增强
```

---

## 🧪 技术栈

| 层 | 技术选型 | 说明 |
|----|----------|------|
| 后端框架 | **FastAPI** (Python 3.10+) | 异步高性能，自动 OpenAPI 文档 |
| 前端 | **Vue 3** + Element Plus + ECharts | 响应式 SPA，零构建步骤 |
| 认证 | **JWT** (python-jose) + bcrypt | 24h Token 过期，角色权限控制 |
| 数据源 | **Tushare Pro** / sxsc_tushare / akshare | 三源热备自动故障切换 |
| AI | **OpenAI 兼容协议** | DeepSeek / 豆包 / 通义千问 / GPT / Claude 等 |
| 推送 | **飞书 Webhook** | 机器人消息推送 |
| 存储 | **JSON 文件** | 零数据库依赖，备份即拷贝 |

---

## 🚦 快速开始

### 前提条件

- Python 3.10+
- [Tushare Pro](https://tushare.pro/) 账号（免费注册，获取 Token）

### 安装 & 启动

```bash
# 1. 克隆仓库
git clone https://github.com/bangbang8000-cell/quant-calendar.git
cd quant-calendar/quant-calendar-ops/backend

# 2. 安装依赖
pip install -r requirements.txt

# 3. 配置
cp .env.example .env
# 编辑 .env，填入 TUSHARE_TOKEN=你的token

# 4. 启动
python main_new.py --port 8000

# 5. 打开浏览器 → http://localhost:8000
#    默认账号: admin / admin
#    访客账号: guest / guest
```

> ⚠️ **首次登录后请立即修改 admin 密码！**

---

## 🔐 默认账号

| 用户名 | 密码 | 角色 | 权限 |
|--------|------|------|------|
| `admin` | `admin` | 管理员 | 全部功能 + 系统配置 + 用户管理 |
| `guest` | `guest` | 访客 | 只读查看，数据隔离 |

---

## 🗺️ 路线图

- [ ] Docker 一键部署 (`docker-compose up`)
- [ ] PostgreSQL 存储后端（可选替代 JSON）
- [ ] 策略回测收益归因可视化
- [ ] 移动端 PWA 离线支持
- [ ] 实时行情 WebSocket 推送
- [ ] 更多选股策略（均值回归 / 动量突破 / 事件驱动）
- [ ] 更多 AI 模型集成（Gemini / Llama / Qwen3）

---

## 🤝 贡献

欢迎提 Issue、PR、Star ⭐！

- 贡献前请阅读 [DEPLOYMENT.md](quant-calendar-ops/DEPLOYMENT.md) 了解项目结构
- 新功能请先开 Issue 讨论设计思路
- PR 请确保通过安全扫描（无硬编码密钥）

---

## 📄 许可

MIT License — 详见 [LICENSE](quant-calendar-ops/LICENSE)

---

## ⭐ Star History

如果这个项目对你有帮助，请给一个 Star ⭐ 让更多人看到！

<a href="https://star-history.com/#bangbang8000-cell/quant-calendar&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=bangbang8000-cell/quant-calendar&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=bangbang8000-cell/quant-calendar&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=bangbang8000-cell/quant-calendar&type=Date" />
  </picture>
</a>

---

<p align="center">
  <sub>Made with ❤️ for A-share quantitative investors</sub><br>
  <sub>如果对你有帮助，给个 Star ⭐ 就是最大的鼓励</sub>
</p>
