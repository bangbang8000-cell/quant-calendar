# 量化选股日历 v1.9.3 (Quant Calendar)

基于美林时钟经济周期理论 + 多策略选股 + AI 智能评估的量化投资决策辅助工具。

## 核心功能

- 美林时钟 — 五维度宏观评分，实时追踪经济周期阶段（复苏/过热/滞涨/衰退）
- 多策略选股 — 覆盖动量、反转、成长、价值等多因子策略，共识榜 + 股票池
- AI 智能评股 — 支持多模型串行评估（OpenAI / DeepSeek / 本地模型等）
- 量化日历 — 日/周/月/年视图 + 股票池，K线图（MA/成交量/快捷时间范围）
- 飞书推送 — 定时推送选股结果与市场摘要
- Tushare 数据源 — sxsc_tushare + tushare 双数据源，自动故障切换
- 多用户系统 — 用户组权限管理（管理组/用户组/访客组），菜单可见性按组配置
- 主题系统 — 4套主题（科技蓝/玫瑰红/活力橙/暗夜），登录页切换

## 默认账号

| 用户名 | 密码 | 组 | 说明 |
|--------|------|------|------|
| admin | admin | 管理组 | 全部功能权限 |
| guest | guest | 访客组 | 只读查看，独立自选股和历史 |

> 首次登录后建议立即修改 admin 密码。

## 访客模式

- 点击登录页「访客登录」直接进入
- 可查看：美林时钟、策略总览、量化日历、系统状态
- 不可：修改系统配置、管理用户、修改密码
- 访客的自选股和评估历史与 admin 独立，互不影响

## 启动

```bash
cd backend
pip install -r requirements.txt --break-system-packages
python3 main_new.py --port 8000
```

浏览器打开 http://localhost:8000

## 技术栈

- **Backend**: Python 3 / FastAPI / JWT Auth / Tushare Pro
- **Frontend**: Vue 3 SPA (单文件) / Element Plus / ECharts
- **AI**: OpenAI API 兼容协议，支持多模型串行评估
- **数据**: Tushare + sxsc_tushare 双源，JSON 文件存储
- **推送**: 飞书 Webhook 机器人

## 版本

v1.9.3 — 2026-06-02
