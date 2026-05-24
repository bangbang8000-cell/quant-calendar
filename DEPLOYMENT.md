# 量化选股日历 - 部署指南

## ⚠️ 重要：为什么移动后会出问题？

程序包含以下**不跟随打包**或**不能跨环境复用**的内容：

1. **`.env` 隐藏文件** - 包含所有配置（JWT密钥、Tushare token、数据库路径等）
2. **`venv/` 虚拟环境** - 254MB，包含Python依赖，不能跨机器/系统使用
3. **`__pycache__` 缓存文件** - 3800+个编译缓存，不需要打包
4. **`data/` 数据库文件** - SQLite数据库和缓存，需要保留但要注意路径
5. **日志文件 `*.log`** - 运行时生成

---

## 🚀 正确部署步骤

### 1. 解压发布包
```bash
tar -xzf quant-calendar-release-xxx.tar.gz
cd quant-calendar
```

### 2. 创建并激活虚拟环境
```bash
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# 或 Windows: venv\Scripts\activate
```

### 3. 安装依赖
```bash
pip install -r requirements.txt
```

### 4. 配置 `.env` 文件
> **重要：** 发布包中已包含 `.env.example`，请复制为 `.env` 并修改：
```bash
cp .env.example .env
# 编辑 .env，填入你的 TUSHARE_TOKEN 等配置
```

### 5. 启动服务
```bash
cd backend
python main.py
# 或使用 uvicorn:
uvicorn main:app --host 0.0.0.0 --port 8000
```

---

## 📦 发布包结构

```
quant-calendar/
├── backend/              # 后端代码
│   ├── main.py          # 主入口
│   ├── paths.py         # 路径配置（自动计算相对路径）
│   ├── api/             # API路由
│   └── ...
├── frontend/            # 前端静态文件
│   ├── index.html
│   ├── manifest.json
│   └── sw.js
├── data/                # 数据目录（初始为空或包含基础数据）
│   └── quant_calendar.db
├── requirements.txt     # Python依赖
├── .env.example         # 环境配置模板
├── DEPLOYMENT.md        # 本文档
└── README.md
```

---

## 🔧 常见问题解决

### Q1: ModuleNotFoundError: No module named 'xxx'
**A:** 依赖没安装，重新执行：
```bash
pip install -r requirements.txt
```

### Q2: 找不到文件 / FileNotFoundError
**A:** 确保从正确的目录启动，`paths.py` 会自动计算相对路径：
```bash
# 正确：从项目根目录或 backend 目录启动
cd /path/to/quant-calendar/backend
python main.py
```

### Q3: 数据库是空的 / 没有数据
**A:** 需要先运行数据采集脚本，或复制原有的 `data/` 目录。

### Q4: Tushare 数据获取失败
**A:** 检查 `.env` 中的 `TUSHARE_TOKEN` 是否正确。

### Q5: 端口被占用
**A:** 修改 `.env` 中的 `PORT`，或启动时指定：
```bash
uvicorn main:app --port 8080
```

---

## 📝 版本信息

- 版本: v1.3.0 (相对路径版)
- 更新日期: 2026-05-20
- 特性: 全相对路径，可部署到任何目录
