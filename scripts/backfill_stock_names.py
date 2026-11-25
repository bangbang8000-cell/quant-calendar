#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-9): 股票中文名幂等回填

自选表 `watchlist` 与持仓表 `portfolio_positions` 中 name 为空（或等于代码）的行，
用本地名称库（stock_info）回填中文名；查不到的保持原样并在输出里列出（不写占位串）。

用法：
    python scripts/backfill_stock_names.py            # 实际写入
    python scripts/backfill_stock_names.py --dry-run  # 只看将改多少
幂等：重复执行，第二次起修改数为 0。
"""
import argparse
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))


def _needs_name(name, code):
    n = (name or '').strip()
    return (not n) or n == code


def backfill(dry_run=False):
    import db
    from stock_info import stock_manager

    stats = {'watchlist': 0, 'positions': 0, 'unresolved': [], 'checked': 0}
    conn = db.get_conn()
    try:
        # (统计键, 表名, 名称列) —— v7.19: 持仓表用 stock_name，不是 name
        tables = (
            ('watchlist', 'watchlist', 'name'),
            ('positions', 'portfolio_positions', 'stock_name'),
        )
        for label, table, name_col in tables:
            sql = f"SELECT username, stock_code, {name_col} AS name FROM {table}"
            try:
                rows = conn.execute(sql).fetchall()
            except Exception as exc:  # noqa: BLE001 — 表不存在时跳过（旧库）
                print(f'[skip] {table}: {exc}')
                continue
            updates = []
            for row in rows:
                code = row['stock_code'] if not isinstance(row, tuple) else row[1]
                name = row['name'] if not isinstance(row, tuple) else row[2]
                username = row['username'] if not isinstance(row, tuple) else row[0]
                stats['checked'] += 1
                if not _needs_name(name, code):
                    continue
                resolved = ''
                try:
                    resolved = stock_manager.get_name(code) or ''
                except Exception:  # noqa: BLE001
                    resolved = ''
                if resolved and resolved != code:
                    updates.append((resolved, username, code))
                elif code not in stats['unresolved']:
                    stats['unresolved'].append(code)
            if updates and not dry_run:
                conn.executemany(
                    f"UPDATE {table} SET {name_col}=? WHERE username=? AND stock_code=?", updates)
            stats[label] = len(updates)
        if not dry_run:
            conn.commit()
    finally:
        conn.close()
    return stats


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dry-run', action='store_true')
    args = ap.parse_args()
    s = backfill(dry_run=args.dry_run)
    print(('（dry-run）' if args.dry_run else '') + '回填完成: '
          f"自选 {s['watchlist']} 行 / 持仓 {s['positions']} 行；"
          f"检查 {s['checked']} 行；未解析 {len(s['unresolved'])} 个代码")
    if s['unresolved']:
        print('未解析代码:', ', '.join(s['unresolved'][:20]))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
