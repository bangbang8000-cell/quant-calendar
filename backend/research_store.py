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

import db

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


_id_seq = [0]


def _new_id() -> str:
    """生成唯一实验 id: 时间戳 + 毫秒取模 + 进程内递增序号。

    序号保证同毫秒连续多次保存不碰撞 (INSERT OR REPLACE 会覆盖同 id)。
    """
    _id_seq[0] += 1
    return 'exp_%s_%04d_%04d' % (
        time.strftime('%Y%m%d%H%M%S'),
        int(time.time() * 1000) % 10000,
        _id_seq[0] % 10000)


# T-5.1.41: 可编辑研究元字段 (白名单, 拒绝未知键)
META_FIELDS = ('hypothesis', 'conclusion', 'tags', 'notes')


def normalize_meta_fields(exp: dict) -> dict:
    """规范化研究元字段: 假设/结论/标签/备注。

    - tags: 过滤空/None/空白, 保留非空字符串
    - 其余字段 strip 空白字符串
    返回新 dict (不就地修改)。仅规范化白名单字段, 其余原样保留。
    """
    out = dict(exp or {})
    tags = out.get('tags') or []
    out['tags'] = [t.strip() for t in tags if isinstance(t, str) and t.strip()]
    for key in ('hypothesis', 'conclusion', 'notes'):
        val = out.get(key)
        if val is None:
            out[key] = ''
        else:
            out[key] = str(val).strip()
    return out


def save_experiment(exp: dict) -> str:
    """保存一条实验记录, 返回 id。exp 至少含 type; subject/params/date_range/
    app_version/summary/result 可选, 缺失时补默认值。自动注入 created_at。"""
    exp = normalize_meta_fields(exp)
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


# ─── T-5.1.44 / FR-5.1.4.4: 研究日志 (按日期浏览活动) ───

from datetime import datetime, timedelta


def _date_of(created_at: str) -> str:
    """created_at (YYYY-MM-DD[T...]) → 日期 YYYY-MM-DD。"""
    return str(created_at or '')[:10]


def activity_log(days: int = 30, include_experiments: bool = False) -> list:
    """研究日志: 按日期倒序聚合活动 [{date, count, by_type, experiments?}]。

    days: 回溯天数, 以最近一次实验日期为基准 (保证测试与时间无关)。
    include_experiments: 附带当日实验简要列表。
    """
    exps = list_experiments(limit=500)
    if not exps:
        return []
    # 基准 = 最近实验日期
    latest = max(_date_of(e.get('created_at', '')) for e in exps)
    try:
        cutoff = (datetime.strptime(latest, '%Y-%m-%d') - timedelta(days=int(days)))
    except ValueError:
        cutoff = None
    by_date = {}
    for e in exps:
        d = _date_of(e.get('created_at', ''))
        if not d:
            continue
        if cutoff is not None:
            try:
                if datetime.strptime(d, '%Y-%m-%d') < cutoff:
                    continue
            except ValueError:
                pass
        day = by_date.setdefault(d, {'count': 0, 'by_type': {}})
        day['count'] += 1
        etype = e.get('type', '')
        day['by_type'][etype] = day['by_type'].get(etype, 0) + 1
        if include_experiments:
            day.setdefault('experiments', []).append({
                'id': e.get('id'), 'type': etype,
                'subject': e.get('subject', ''),
                'created_at': e.get('created_at', ''),
            })
    return [{'date': d, 'count': v['count'], 'by_type': v['by_type'],
             **({'experiments': v.get('experiments', [])} if include_experiments else {})}
            for d, v in sorted(by_date.items(), reverse=True)]


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


# ─── T-5.1.43 / FR-5.1.4.3: 实验对比雷达图数据 (统一指标归一化) ───

# 雷达图优先展示的数值指标 (顺序稳定)
_RADAR_METRIC_ORDER = ('ic_mean', 'icir', 'win_rate', 'annual_return',
                       'sharpe_ratio', 'max_drawdown', 'total_return')


def _numeric_summary(summary: dict) -> dict:
    """提取 summary 中的数值指标 (排除非数值/布尔)。"""
    return {k: float(v) for k, v in (summary or {}).items()
            if isinstance(v, (int, float)) and not isinstance(v, bool)}


def radar_data(ids: list) -> dict:
    """多实验雷达图数据: {indicators, series}。

    - indicators: 统一指标集 (有数值的 summary 键, 稳定顺序)
    - series: [{name, values: 归一化 [0,1]}] (缺失指标补 0)
    归一化: (v - min) / (max - min); min==max 时取 1.0。
    """
    exps = []
    for eid in (ids or []):
        exp = get_experiment(eid)
        if exp:
            exps.append(exp)
    if not exps:
        return {'indicators': [], 'series': []}
    # 收集指标 (按稳定顺序 + 其余键)
    keys = []
    for k in _RADAR_METRIC_ORDER:
        if any(k in _numeric_summary(e.get('summary') or {}) for e in exps):
            keys.append(k)
    all_nums = {k: [_numeric_summary(e.get('summary') or {}).get(k)
                    for e in exps] for k in keys}
    # 归一化
    series = []
    for e in exps:
        nums = _numeric_summary(e.get('summary') or {})
        values = []
        for k in keys:
            v = nums.get(k)
            if v is None:
                values.append(0.0)
                continue
            col = all_nums[k]
            colv = [x for x in col if x is not None]
            mn, mx = (min(colv), max(colv)) if colv else (0.0, 1.0)
            if mx == mn:
                values.append(1.0)
            else:
                values.append(round((v - mn) / (mx - mn), 4))
        series.append({'name': e.get('subject', '') or e.get('id', ''),
                       'values': values})
    return {'indicators': keys, 'series': series}


def build_radar_data(ids: list) -> dict:
    """按 id 列表构建雷达图数据 (radar_data 的别名入口, 语义化命名)。"""
    return radar_data(ids)


def delete_experiment(eid: str) -> bool:
    """删除一条实验, 返回是否删除。"""
    conn = db.get_conn()
    cur = conn.execute("DELETE FROM research_experiments WHERE id = ?", (eid,))
    conn.commit()
    deleted = cur.rowcount > 0
    conn.close()
    return deleted


def update_experiment(eid: str, fields: dict) -> bool:
    """编辑实验记录 (T-5.1.41 / FR-5.1.4.1): 更新白名单元字段。

    仅允许 hypothesis/conclusion/tags/notes; 未知键忽略 (deny-by-default)。
    返回是否找到并更新。
    """
    exp = get_experiment(eid)
    if not exp:
        return False
    patch = normalize_meta_fields(
        {k: v for k, v in (fields or {}).items() if k in META_FIELDS})
    exp.update(patch)
    # 重新持久化 (复用 save 的校验/注入)
    save_experiment(exp)
    return True


def _clear_all_for_test() -> None:
    """测试专用: 清空全部实验记录。"""
    with db._db_lock:
        conn = db.get_conn()
        conn.execute("DELETE FROM research_experiments")
        conn.commit()
        conn.close()
