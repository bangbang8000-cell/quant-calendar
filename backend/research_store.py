"""quant-calendar: 研究实验存储 (research_store) — T-5.1.1 / FR-5.1.0.2/5.1.0.3

研究历史持久化: 因子IC/分层/扫描/回测/稳定性每次运行结果存入 SQLite 表
research_experiments, 按「实验」聚合。每条实验含快照:
  type (factor_ic|layer|sweep|backtest|stability) + subject(策略/因子)
  + params(参数) + date_range(数据区间) + app_version + created_at
  + summary(结果摘要/关键指标) + result(完整结果, 可复现)。

存储: 独立 SQLite 表 (id TEXT PK, type, subject, created_at, data JSON 全文),
不依赖 kv 表(其列绑定 users/groups)。幂等建表, 隔离测试用 patch_data_dir。
"""
import json
import time
import threading
import logging

logger = logging.getLogger(__name__)

from backend import db

# 合法实验类型 (拒绝未知类型, 防脏数据)
VALID_TYPES = ('factor_ic', 'layer', 'sweep', 'backtest', 'stability')

_SCHEMA = """
CREATE TABLE IF NOT EXISTS research_experiments (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    subject TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL,
    data TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_research_exp_type ON research_experiments(type);
CREATE INDEX IF NOT EXISTS idx_research_exp_created ON research_experiments(created_at);
"""


def _ensure_table() -> None:
    """幂等建表 (首次导入或迁移时调用)。"""
    with db._db_lock:
        conn = db.get_conn()
        conn.executescript(_SCHEMA)
        conn.commit()
        conn.close()


def _now() -> str:
    return time.strftime('%Y-%m-%dT%H:%M:%S')


def _new_id() -> str:
    return 'exp_%s_%04d' % (time.strftime('%Y%m%d%H%M%S'), int(time.time() * 1000) % 10000)


def save_experiment(exp: dict) -> str:
    """保存一条实验记录, 返回 id。exp 至少含 type; subject/params/date_range/
    app_version/summary/result 可选, 缺失时补默认值。自动注入 created_at。"""
    exp = dict(exp or {})
    etype = exp.get('type', '')
    if etype not in VALID_TYPES:
        raise ValueError('未知实验类型: %r (合法: %s)' % (etype, ', '.join(VALID_TYPES)))
    eid = exp.get('id') or _new_id()
    exp.setdefault('id', eid)
    exp.setdefault('subject', '')
    exp.setdefault('params', {})
    exp.setdefault('date_range', [])
    exp.setdefault('app_version', '')
    exp.setdefault('summary', {})
    exp.setdefault('result', {})
    exp.setdefault('created_at', _now())
    payload = json.dumps(exp, ensure_ascii=False)
    with db._db_lock:
        conn = db.get_conn()
        conn.execute(
            "INSERT OR REPLACE INTO research_experiments (id, type, subject, created_at, data) "
            "VALUES (?, ?, ?, ?, ?)",
            (eid, etype, exp.get('subject', ''), exp.get('created_at', ''), payload))
        conn.commit()
        conn.close()
    return eid


def get_experiment(eid: str) -> dict | None:
    """按 id 取一条实验, 不存在返回 None。"""
    conn = db.get_conn()
    row = conn.execute(
        "SELECT data FROM research_experiments WHERE id = ?", (eid,)).fetchone()
    conn.close()
    if not row:
        return None
    try:
        return json.loads(row['data'])
    except Exception:
        return None


def list_experiments(type: str | None = None, limit: int = 50) -> list:
    """按类型过滤(可选), 按创建时间倒序, 返回最新 limit 条(默认 50)。"""
    limit = max(1, min(int(limit), 500))
    conn = db.get_conn()
    if type:
        rows = conn.execute(
            "SELECT data FROM research_experiments WHERE type = ? "
            "ORDER BY created_at DESC, id DESC LIMIT ?", (type, limit)).fetchall()
    else:
        rows = conn.execute(
            "SELECT data FROM research_experiments "
            "ORDER BY created_at DESC, id DESC LIMIT ?", (limit,)).fetchall()
    conn.close()
    result = []
    for r in rows:
        try:
            result.append(json.loads(r['data']))
        except Exception:
            continue
    return result


def compare_experiments(ids: list) -> list:
    """对比一组实验: 返回按 ids 顺序对齐的 [{id, type, subject, created_at, summary}],
    缺失的 id 跳过。对比视图前端据此并列展示关键指标。"""
    out = []
    for eid in (ids or []):
        exp = get_experiment(eid)
        if not exp:
            continue
        out.append({
            'id': exp['id'],
            'type': exp.get('type', ''),
            'subject': exp.get('subject', ''),
            'created_at': exp.get('created_at', ''),
            'summary': exp.get('summary', {}),
        })
    return out


def delete_experiment(eid: str) -> bool:
    """删除一条实验, 返回是否删除。"""
    conn = db.get_conn()
    cur = conn.execute("DELETE FROM research_experiments WHERE id = ?", (eid,))
    conn.commit()
    deleted = cur.rowcount > 0
    conn.close()
    return deleted


def _clear_all_for_test() -> None:
    """测试专用: 清空全部实验记录。"""
    with db._db_lock:
        conn = db.get_conn()
        conn.execute("DELETE FROM research_experiments")
        conn.commit()
        conn.close()
