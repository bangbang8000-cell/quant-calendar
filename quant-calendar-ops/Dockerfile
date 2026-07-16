# 量化选股日历 Docker 镜像
# 构建: cd ~/.openclaw/workspace && docker build -f quant-calendar-ops/Dockerfile -t quant-calendar:2.1.2 .
# 不包含任何 Token/密钥，所有配置通过 Web UI 在容器启动后设置

FROM python:3.11-slim

LABEL org.opencontainers.image.title="quant-calendar"
LABEL org.opencontainers.image.description="基于美林时钟的量化选股日历系统"

# 安装系统依赖
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# 创建非 root 用户
RUN useradd --create-home --shell /bin/bash appuser

# 工作目录
WORKDIR /app

# 安装 Python 依赖（先复制 requirements 以利用 Docker 缓存层）
COPY quant-calendar-ops/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt --break-system-packages

# 复制应用代码
COPY quant-calendar-ops/backend/ ./backend/
COPY quant-calendar-ops/frontend/ ./frontend/
COPY quant-calendar-ops/tests/ ./tests/
COPY quant-calendar-ops/docs/ ./docs/

# 复制策略数据（内置一份，可被 volume 覆盖）
COPY qresult/ /data/qresult/

# 设置权限
RUN mkdir -p /app/data && \
    chown -R appuser:appuser /app /data

# 复制入口脚本
COPY quant-calendar-ops/docker-entrypoint.sh /usr/local/bin/
RUN chmod 755 /usr/local/bin/docker-entrypoint.sh

# 环境变量
ENV QUANT_DATA_DIR=/data/qresult
ENV HOST=0.0.0.0
ENV PORT=8000

# 健康检查
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8000/api/health || exit 1

EXPOSE 8000

USER appuser
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["python", "backend/main_new.py", "--port", "8000"]
