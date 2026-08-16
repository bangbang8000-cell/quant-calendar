#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SQLite 接入层 (v3.3.0-T1)
易变数据 (users/chat_history/watchlist/groups) 从 JSON 迁移到 SQLite
- 原子事务
- 启动 schema 校验 (FR-3.3.4)
- WAL 模式提升并发
"""
import json
import os
import sqlite3
import threading
from datetime import datetime, timedelta

from paths import DATA_DIR

DB_FILE = os.path.join(DATA_DIR, "app.db")

# 全局连接锁 (sqlite3 连接非线程安全; RLock 允许 restore→backup 嵌套)
_db_lock = threading.RLock()

SCHEMA = """
CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    data TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS chat_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    stock_code TEXT NOT NULL,
    stock_name TEXT NOT NULL DEFAULT '',
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_chat_history_username_stock
    ON chat_history(username, stock_code, id);
CREATE TABLE IF NOT EXISTS watchlist (
    username TEXT NOT NULL,
    stock_code TEXT NOT NULL,
    name TEXT NOT NULL DEFAULT '',
    added_at TEXT NOT NULL,
    PRIMARY KEY (username, stock_code)
);
CREATE INDEX IF NOT EXISTS idx_watchlist_username_added
    ON watchlist(username, added_at);
CREATE TABLE IF NOT EXISTS groups (
    group_id TEXT PRIMARY KEY,
    data TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS meta (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
);
"""

# v3.17.8 (FR-3.17.5): 组合/模拟持仓 — 持仓 + 调仓记录 (per-user 隔离)
PORTFOLIO_SCHEMA = """
CREATE TABLE IF NOT EXISTS portfolio_positions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    stock_code TEXT NOT NULL,
    stock_name TEXT NOT NULL DEFAULT '',
    cost_price REAL NOT NULL DEFAULT 0,
    quantity REAL NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_portfolio_positions_user
    ON portfolio_positions(username, stock_code);
CREATE TABLE IF NOT EXISTS portfolio_trades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    stock_code TEXT NOT NULL,
    stock_name TEXT NOT NULL DEFAULT '',
    action TEXT NOT NULL,
    price REAL NOT NULL DEFAULT 0,
    quantity REAL NOT NULL DEFAULT 0,
    trade_date TEXT NOT NULL DEFAULT '',
    note TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_portfolio_trades_user_time
    ON portfolio_trades(username, id);
"""

SCHEMA += PORTFOLIO_SCHEMA


def get_conn() -> sqlite3.Connection:
    """获取数据库连接 (每线程独立)"""
    os.makedirs(DATA_DIR, exist_ok=True)
    conn = sqlite3.connect(DB_FILE, timeout=15)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> bool:
    """初始化 schema + 校验 (FR-3.3.4: 损坏自动告警而非静默)"""
    try:
        with _db_lock:
            conn = get_conn()
            conn.execute("PRAGMA journal_mode=WAL")
            conn.executescript(SCHEMA)
            conn.commit()
            # 校验: 尝试查询 meta 表
            conn.execute("SELECT COUNT(*) FROM meta").fetchone()
            conn.close()
        return True
    except Exception as e:
        print(f"[db] 数据库初始化/校验失败: {e}")
        return False


def schema_ok() -> bool:
    """启动 schema 校验 — 检查核心表是否存在且可查询"""
    try:
        conn = get_conn()
        tables = [r[0] for r in conn.execute(
            "SELECT name FROM sqlite_master WHERE type='table'").fetchall()]
        conn.close()
        required = {'users', 'chat_history', 'watchlist', 'groups', 'meta',
                    'portfolio_positions', 'portfolio_trades'}
        missing = required - set(tables)
        if missing:
            print(f"[db] schema 校验失败, 缺少表: {missing}")
            return False
        return True
    except Exception as e:
        print(f"[db] schema 校验异常: {e}")
        return False


def migrate() -> None:
    """DB schema 增量迁移 (v3.14.2: watchlist.name; v3.15: chat_history.stock_name; v3.17.8: portfolio 表)"""
    try:
        with _db_lock:
            conn = get_conn()
            # v3.17.8 (FR-3.17.5): 组合/模拟持仓表 (幂等建表)
            conn.executescript(PORTFOLIO_SCHEMA)
            conn.commit()
            print("[db] migrate: portfolio_positions/portfolio_trades 表就绪")
            # v3.14.2: watchlist 增加 name 列
            cols = [r['name'] for r in conn.execute("PRAGMA table_info(watchlist)").fetchall()]
            if cols and 'name' not in cols:
                conn.execute("ALTER TABLE watchlist ADD COLUMN name TEXT NOT NULL DEFAULT ''")
                conn.commit()
                print("[db] migrate: watchlist 增加 name 列")
            # v3.15: chat_history 增加 stock_name 列 (问股历史缺股票名)
            chat_cols = [r['name'] for r in conn.execute("PRAGMA table_info(chat_history)").fetchall()]
            if chat_cols and 'stock_name' not in chat_cols:
                conn.execute("ALTER TABLE chat_history ADD COLUMN stock_name TEXT NOT NULL DEFAULT ''")
                conn.commit()
                print("[db] migrate: chat_history 增加 stock_name 列")
            conn.close()
    except Exception as e:
        print(f"[db] migrate 失败: {e}")


# ─── 通用 KV 存取 (users/groups 存 JSON 串) ───────────────────────

def kv_set(table: str, key: str, value: dict):
    """写入一行 (table: users|groups), value 序列化为 JSON"""
    with _db_lock:
        conn = get_conn()
        conn.execute(
            f"INSERT OR REPLACE INTO {table} (username, data) VALUES (?, ?)"
            if table == 'users' else
            f"INSERT OR REPLACE INTO {table} (group_id, data) VALUES (?, ?)",
            (key, json.dumps(value, ensure_ascii=False))
        )
        conn.commit()
        conn.close()


def kv_get(table: str, key: str) -> dict | None:
    conn = get_conn()
    col = 'username' if table == 'users' else 'group_id'
    row = conn.execute(f"SELECT data FROM {table} WHERE {col} = ?", (key,)).fetchone()
    conn.close()
    if not row:
        return None
    return json.loads(row[0])


def kv_all(table: str) -> dict:
    """返回 {key: value_dict} 全量"""
    col = 'username' if table == 'users' else 'group_id'
    with _db_lock:
        conn = get_conn()
        rows = conn.execute(f"SELECT {col}, data FROM {table}").fetchall()
        conn.close()
    result = {}
    for r in rows:
        try:
            result[r[col]] = json.loads(r['data'])
        except Exception:
            print("[warn] 操作异常 (v3.4.0-T8)")
            pass
    return result


def kv_delete(table: str, key: str):
    col = 'username' if table == 'users' else 'group_id'
    with _db_lock:
        conn = get_conn()
        conn.execute(f"DELETE FROM {table} WHERE {col} = ?", (key,))
        conn.commit()
        conn.close()


# ─── chat_history ─────────────────────────────────────────────

def chat_append(username: str, stock_code: str, role: str, content: str, stock_name: str = '') -> int:
    """追加一条聊天记录, 返回 id (v3.15: 存入股票中文名, 修复问股历史缺名)"""
    with _db_lock:
        conn = get_conn()
        cur = conn.execute(
            "INSERT INTO chat_history (username, stock_code, stock_name, role, content, created_at) VALUES (?,?,?,?,?,?)",
            (username, stock_code, stock_name or '', role, content, datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        )
        conn.commit()
        new_id = cur.lastrowid
        conn.close()
    return new_id


def chat_list(username: str, stock_code: str, limit: int = 50) -> list:
    with _db_lock:
        conn = get_conn()
        rows = conn.execute(
            "SELECT id, role, content, created_at FROM chat_history "
            "WHERE username=? AND stock_code=? ORDER BY id DESC LIMIT ?",
            (username, stock_code, limit)
        ).fetchall()
        conn.close()
    return [dict(r) for r in reversed(rows)]


def chat_clear(username: str, stock_code: str = None):
    with _db_lock:
        conn = get_conn()
        if stock_code:
            conn.execute("DELETE FROM chat_history WHERE username=? AND stock_code=?", (username, stock_code))
        else:
            conn.execute("DELETE FROM chat_history WHERE username=?", (username,))
        conn.commit()
        conn.close()


def chat_all(username: str = None) -> list:
    with _db_lock:
        conn = get_conn()
        if username:
            rows = conn.execute("SELECT * FROM chat_history WHERE username=? ORDER BY id", (username,)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM chat_history ORDER BY id").fetchall()
        conn.close()
    return [dict(r) for r in rows]


def chat_update_name(chat_id: int, stock_name: str) -> bool:
    """回填单条聊天记录股票名 (v3.15 回填脚本用)"""
    with _db_lock:
        conn = get_conn()
        cur = conn.execute(
            "UPDATE chat_history SET stock_name=? WHERE id=?",
            (stock_name or '', chat_id)
        )
        conn.commit()
        ok = cur.rowcount > 0
        conn.close()
    return ok


# ─── watchlist ────────────────────────────────────────────────

def watchlist_set(username: str, stock_code: str, name: str = '', added_at: str = None):
    """写入自选 — v3.14.2: 存储股票中文名 (修复自选/历史缺名)"""
    added_at = added_at or datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    with _db_lock:
        conn = get_conn()
        conn.execute(
            "INSERT OR REPLACE INTO watchlist (username, stock_code, name, added_at) VALUES (?,?,?,?)",
            (username, stock_code, name or '', added_at)
        )
        conn.commit()
        conn.close()


def watchlist_get(username: str) -> list:
    """返回 [{stock_code, name, added_at}] (v3.14.2: 含股票名)"""
    with _db_lock:
        conn = get_conn()
        rows = conn.execute(
            "SELECT stock_code, name, added_at FROM watchlist WHERE username=? ORDER BY added_at DESC",
            (username,)
        ).fetchall()
        conn.close()
    return [dict(r) for r in rows]


def watchlist_remove(username: str, stock_code: str):
    with _db_lock:
        conn = get_conn()
        conn.execute("DELETE FROM watchlist WHERE username=? AND stock_code=?", (username, stock_code))
        conn.commit()
        conn.close()


def watchlist_all() -> list:
    with _db_lock:
        conn = get_conn()
        rows = conn.execute("SELECT * FROM watchlist ORDER BY username, added_at").fetchall()
        conn.close()
    return [dict(r) for r in rows]


# ─── portfolio (v3.17.8 / FR-3.17.5): 组合/模拟持仓 ──────────────

def _portfolio_merge(conn, username: str, stock_code: str, stock_name: str,
                     cost_price: float, quantity: float) -> None:
    """内部: 同股累加 — 数量相加, 成本按加权平均 (供新增持仓/买入调仓共用)"""
    now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    row = conn.execute(
        "SELECT id, cost_price, quantity FROM portfolio_positions WHERE username=? AND stock_code=?",
        (username, stock_code)
    ).fetchone()
    if row:
        old_qty = row['quantity'] or 0
        old_cost = row['cost_price'] or 0
        new_qty = old_qty + (quantity or 0)
        new_cost = (old_qty * old_cost + (quantity or 0) * (cost_price or 0)) / new_qty if new_qty > 0 else (cost_price or 0)
        conn.execute(
            "UPDATE portfolio_positions SET stock_name=?, cost_price=?, quantity=?, updated_at=? WHERE id=?",
            (stock_name or '', round(new_cost, 4), round(new_qty, 4), now, row['id'])
        )
    else:
        conn.execute(
            "INSERT INTO portfolio_positions (username, stock_code, stock_name, cost_price, quantity, created_at, updated_at) "
            "VALUES (?,?,?,?,?,?,?)",
            (username, stock_code, stock_name or '', round(cost_price or 0, 4), round(quantity or 0, 4), now, now)
        )


def portfolio_upsert_position(username: str, stock_code: str, stock_name: str = '',
                              cost_price: float = 0, quantity: float = 0) -> None:
    """新增/更新持仓: 同股累加, 加权平均成本"""
    with _db_lock:
        conn = get_conn()
        _portfolio_merge(conn, username, stock_code, stock_name, cost_price, quantity)
        conn.commit()
        conn.close()


def portfolio_get_positions(username: str) -> list:
    """返回 [{id, stock_code, stock_name, cost_price, quantity, created_at, updated_at}]"""
    with _db_lock:
        conn = get_conn()
        rows = conn.execute(
            "SELECT id, stock_code, stock_name, cost_price, quantity, created_at, updated_at "
            "FROM portfolio_positions WHERE username=? ORDER BY updated_at DESC",
            (username,)
        ).fetchall()
        conn.close()
    return [dict(r) for r in rows]


def portfolio_delete_position(username: str, stock_code: str) -> bool:
    with _db_lock:
        conn = get_conn()
        cur = conn.execute(
            "DELETE FROM portfolio_positions WHERE username=? AND stock_code=?",
            (username, stock_code)
        )
        conn.commit()
        ok = cur.rowcount > 0
        conn.close()
    return ok


def portfolio_apply_trade(username: str, stock_code: str, stock_name: str,
                          action: str, price: float, quantity: float) -> str:
    """按调仓动作更新持仓:
    - buy: 数量累加, 成本按成交价加权平均
    - sell: 数量减少, 减至 ≤0 自动删除持仓
    返回 'buy'|'sell'|'sold_out' (供记录调仓语义/提示)
    """
    action = (action or 'buy').lower()
    with _db_lock:
        conn = get_conn()
        if action == 'sell':
            row = conn.execute(
                "SELECT id, quantity FROM portfolio_positions WHERE username=? AND stock_code=?",
                (username, stock_code)
            ).fetchone()
            if not row:
                conn.commit()
                conn.close()
                return 'sell'  # 无持仓仍记录调仓, 持仓不变化
            new_qty = (row['quantity'] or 0) - (quantity or 0)
            if new_qty <= 0:
                conn.execute("DELETE FROM portfolio_positions WHERE id=?", (row['id'],))
                conn.commit()
                conn.close()
                return 'sold_out'
            now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            conn.execute(
                "UPDATE portfolio_positions SET quantity=?, updated_at=? WHERE id=?",
                (round(new_qty, 4), now, row['id'])
            )
            conn.commit()
            conn.close()
            return 'sell'
        # buy: 与新增持仓同语义 (以成交价加权累加)
        _portfolio_merge(conn, username, stock_code, stock_name, price, quantity)
        conn.commit()
        conn.close()
        return 'buy'


def portfolio_add_trade(username: str, stock_code: str, stock_name: str = '', action: str = 'buy',
                        price: float = 0, quantity: float = 0, trade_date: str = '',
                        note: str = '') -> int:
    """记录一条调仓流水, 返回 id"""
    trade_date = (trade_date or '').strip() or datetime.now().strftime('%Y-%m-%d')
    with _db_lock:
        conn = get_conn()
        cur = conn.execute(
            "INSERT INTO portfolio_trades (username, stock_code, stock_name, action, price, quantity, trade_date, note, created_at) "
            "VALUES (?,?,?,?,?,?,?,?,?)",
            (username, stock_code, stock_name or '', action, round(price or 0, 4), round(quantity or 0, 4),
             trade_date, note or '', datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        )
        conn.commit()
        new_id = cur.lastrowid
        conn.close()
    return new_id


def portfolio_list_trades(username: str, limit: int = 200) -> list:
    """调仓记录按时间倒序 (created_at 同秒时按 id 倒序)"""
    with _db_lock:
        conn = get_conn()
        rows = conn.execute(
            "SELECT id, stock_code, stock_name, action, price, quantity, trade_date, note, created_at "
            "FROM portfolio_trades WHERE username=? ORDER BY created_at DESC, id DESC LIMIT ?",
            (username, limit)
        ).fetchall()
        conn.close()
    return [dict(r) for r in rows]


# ─── 备份 (FR-3.3.2) ─────────────────────────────────────────

def backup_db() -> str | None:
    """备份数据库到 data/backups/, 保留 30 天, 返回备份文件名"""
    try:
        os.makedirs(os.path.join(DATA_DIR, "backups"), exist_ok=True)
        # 文件名含毫秒, 避免同一秒内多次备份互相覆盖 (restore 安全网场景)
        ts = datetime.now().strftime('%Y%m%d_%H%M%S_%f')[:-3]
        backup_path = os.path.join(DATA_DIR, "backups", f"app_backup_{ts}.db")
        with _db_lock:
            conn = get_conn()
            # 先 checkpoint WAL, 确保备份包含全部已提交数据
            conn.execute("PRAGMA wal_checkpoint(PASSIVE)")
            conn.commit()
            # SQLite 在线备份 API
            dest = sqlite3.connect(backup_path)
            conn.backup(dest)
            dest.close()
            conn.close()
        # 清理 30 天前备份
        cutoff = datetime.now() - timedelta(days=30)
        for f in os.listdir(os.path.join(DATA_DIR, "backups")):
            if f.startswith("app_backup_"):
                try:
                    t = datetime.strptime(f, 'app_backup_%Y%m%d_%H%M%S_%f.db')
                    if t < cutoff:
                        os.remove(os.path.join(DATA_DIR, "backups", f))
                except ValueError:
                    try:
                        t = datetime.strptime(f, 'app_backup_%Y%m%d_%H%M%S.db')
                        if t < cutoff:
                            os.remove(os.path.join(DATA_DIR, "backups", f))
                    except ValueError:
                        print("[warn] 操作异常 (v3.4.0-T8)")
                        pass
        return os.path.basename(backup_path)
    except Exception as e:
        print(f"[db] 备份失败: {e}")
        return None


def list_backups() -> list:
    """返回 [{name, size, time}] 按时间倒序"""
    backup_dir = os.path.join(DATA_DIR, "backups")
    if not os.path.isdir(backup_dir):
        return []
    result = []
    for f in sorted(os.listdir(backup_dir), reverse=True):
        if f.startswith("app_backup_") and f.endswith(".db"):
            path = os.path.join(backup_dir, f)
            result.append({
                "name": f,
                "size": os.path.getsize(path),
                "time": f.replace("app_backup_", "").replace(".db", "").replace("_", " "),
            })
    return result


def restore_backup(name: str) -> bool:
    """从备份恢复 (FR-3.3.3)"""
    backup_path = os.path.join(DATA_DIR, "backups", name)
    if not os.path.isfile(backup_path):
        return False
    try:
        with _db_lock:
            # 先备份当前库 (安全网)
            backup_db()
            # 确保所有连接关闭并检查点
            conn = get_conn()
            conn.execute("PRAGMA wal_checkpoint(PASSIVE)")
            conn.commit()
            conn.close()
            # 替换数据库文件 (用 copy 兼容跨设备/临时目录场景)
            import shutil
            shutil.copy2(backup_path, DB_FILE)
            # 清理 WAL
            for suffix in ('-wal', '-shm'):
                p = DB_FILE + suffix
                if os.path.exists(p):
                    os.remove(p)
        return init_db()
    except Exception as e:
        print(f"[db] 恢复失败: {e}")
        return False


# 初始化
init_db()
