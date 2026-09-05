#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
市场行情 API 路由
"""
from fastapi import APIRouter, Depends
from typing import Dict, Any, Optional
import logging
from auth import get_admin_user, get_current_active_user
from market_data import market_data, get_kline_data
from merrill_clock import merrill_clock

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/market", tags=["市场行情"])


@router.get("/overview")
async def get_market_overview(date: Optional[str] = None):
    """获取市场概览 - 各主要指数行情"""
    return market_data.get_market_overview(date)


@router.get("/merrill-clock")
async def get_merrill_clock():
    """获取美林时钟 - 当前经济周期判断"""
    return merrill_clock.determine_stage()


@router.get("/merrill-clock/stages")
async def get_merrill_stages():
    """v3.0: 获取美林时钟四阶段配置（统一数据源）"""
    from merrill_clock import STAGES
    return {"success": True, "data": STAGES}


@router.get("/merrill-clock/stage/{stage_name}")
async def get_merrill_stage_detail(stage_name: str):
    """获取指定经济周期阶段的详细信息"""
    detail = merrill_clock.get_stage_detail(stage_name)
    if detail:
        return {"success": True, "data": detail}
    return {"success": False, "message": f"未知阶段名称: {stage_name}"}


@router.get("/merrill-clock/history")
async def get_merrill_history():
    """获取美林时钟历史阶段切换记录"""
    try:
        import json
        from paths import MERRILL_HISTORY_FILE
        with open(MERRILL_HISTORY_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return {"success": True, "data": data}
    except Exception as e:
        return {"success": False, "message": str(e)}


@router.get("/merrill-clock/timeline")
async def get_merrill_timeline():
    """v3.22-I4: 美林时钟历史周期时间轴(最近4轮, 每轮阶段序列可点击看详情)
    数据源 = 内置完整历史(13条/4轮) + 运行时新增转换(按 transition_date 去重) + 当前阶段补全"""
    try:
        import json
        import os
        from paths import MERRILL_HISTORY_FILE
        from merrill_history import build_timeline, HISTORICAL_TRANSITIONS
        transitions = list(HISTORICAL_TRANSITIONS)
        data = {}
        if os.path.exists(MERRILL_HISTORY_FILE):
            with open(MERRILL_HISTORY_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
        # 合并运行时新增(去重: 同日期+同 to_stage 视为同一条)
        seen = {(t.get('transition_date'), t.get('to_stage')) for t in transitions}
        for t in (data.get('transitions') or []):
            key = (t.get('transition_date'), t.get('to_stage'))
            if key not in seen:
                transitions.append(t)
                seen.add(key)
        current_stage = data.get('current_stage') or ''
        current_start = data.get('current_stage_start') or ''
        return {"success": True, "data": build_timeline(transitions, current_stage, current_start)}
    except Exception as exc:
        return {"success": False, "message": str(exc)}


@router.post("/merrill-clock/reevaluate")
async def reevaluate_merrill(_: Dict = Depends(get_admin_user)):
    """强制重评估美林时钟（忽略缓存）"""
    try:
        result = merrill_clock.reevaluate(force=True)
        result['success'] = True
        result['message'] = '重评估完成'
        return result
    except Exception as e:
        logger.error(f"美林时钟重评估失败: {e}")
        return {"success": False, "message": f"重评估失败: {str(e)}"}


@router.get("/performance/{ts_code}")
async def get_performance(ts_code: str, user: dict = Depends(get_current_active_user)):
    """V5.3.10: 个股业绩预告/快报 (sxsc 优先: forecast/express)

    返回 {'success', 'ts_code', 'forecast': [...], 'express': [...]} —
    forecast: 业绩预告 (预告类型/净利润变动区间/上年同期净利)
    express:  业绩快报 (营收/营业利润/净利润)
    sxsc 客户端缺失或接口失败 → 各自降级为空列表 (诚实性)。
    """
    from data_sources import data_source_manager
    from typing import List
    api = data_source_manager._clients.get('sxsc_tushare')
    out = {'forecast': [], 'express': []}
    if api is None:
        return {'success': True, 'ts_code': ts_code, **out}
    try:
        df = api.query('forecast', ts_code=ts_code, limit=5)
        if df is not None and len(df):
            cols = list(df.columns)
            for _, r in df.head(5).iterrows():
                d = dict(r)
                out['forecast'].append({
                    'ann_date': _fmt(d.get('ann_date')), 'end_date': _fmt(d.get('end_date')),
                    'type': d.get('type'), 'p_change_min': d.get('p_change_min'),
                    'p_change_max': d.get('p_change_max'),
                    'net_profit_min': d.get('net_profit_min'), 'net_profit_max': d.get('net_profit_max'),
                    'last_parent_net': d.get('last_parent_net'),
                })
    except Exception as e:  # noqa: BLE001
        logger.warning('performance forecast(%s) 失败: %s', ts_code, e)
    try:
        df = api.query('express', ts_code=ts_code, limit=5)
        if df is not None and len(df):
            for _, r in df.head(5).iterrows():
                d = dict(r)
                out['express'].append({
                    'ann_date': _fmt(d.get('ann_date')), 'end_date': _fmt(d.get('end_date')),
                    'revenue': d.get('revenue'), 'operate_profit': d.get('operate_profit'),
                    'total_profit': d.get('total_profit'), 'n_income': d.get('n_income'),
                })
    except Exception as e:  # noqa: BLE001
        logger.warning('performance express(%s) 失败: %s', ts_code, e)
    return {'success': True, 'ts_code': ts_code, **out}


def _fmt(v):
    """YYYYMMDD int → YYYY-MM-DD str; 其余原样"""
    if isinstance(v, (int, float)) and v and not (isinstance(v, float) and v != v):
        s = str(int(v))
        if len(s) == 8 and s.isdigit():
            return f"{s[:4]}-{s[4:6]}-{s[6:]}"
    if v is None or (isinstance(v, float) and v != v):  # None / NaN → None (JSON 安全)
        return None
    if isinstance(v, (int, float)):
        f = float(v)
        if f != f or f in (float('inf'), float('-inf')):
            return None
    return v



@router.get("/kline/{ts_code}")
async def get_kline(ts_code: str, period: str = "daily", limit: int = 60):
    """获取K线数据（支持股票和指数）

    Args:
        ts_code: 股票/指数代码
        period: 周期: daily=日线, weekly=周线, monthly=月线
        limit: 返回条数
    """
    import asyncio
    data = await asyncio.to_thread(get_kline_data, ts_code, period, limit)
    if data:
        return {"success": True, "data": data, "period": period}
    return {"success": False, "message": "获取K线数据失败"}


# v1.8.0: 多数据源配置 API
@router.get('/datasource/config')
async def get_datasource_config(_: Dict = Depends(get_admin_user)):
    """获取所有数据源配置（token 掩码展示; 完整值经 /api/system/reveal-secret 验密获取）"""
    from data_sources import data_source_manager
    from config import settings
    from secret_utils import mask_secret
    config = data_source_manager.get_config()
    # 回填 config.py 中的 token（若 datasource_config.json 中为空）
    if config.get('sources', {}).get('tushare', {}).get('token', '') == '':
        config['sources']['tushare']['token'] = settings.TUSHARE_TOKEN or ''
    if config.get('sources', {}).get('sxsc_tushare', {}).get('token', '') == '':
        config['sources']['sxsc_tushare']['token'] = settings.SXSC_TUSHARE_TOKEN or ''
    # V4.0 需求2: 掩码展示 (首尾露真实字符, 中间打 *)
    for src_name in ('tushare', 'sxsc_tushare'):
        token = config.get('sources', {}).get(src_name, {}).get('token', '') or ''
        config['sources'][src_name]['token'] = mask_secret(token)
    return {"success": True, "config": config}


@router.post('/datasource/config')
async def save_datasource_config(req: Dict[str, Any], _: Dict = Depends(get_admin_user)):
    """保存数据源配置（空 token 或掩码形式保留原值, 避免掩码覆盖真实 key）"""
    from data_sources import data_source_manager
    from secret_utils import is_masked_form
    try:
        sources = req.get('sources', {})
        existing = data_source_manager.config.get('sources', {})
        for src_name in ['sxsc_tushare', 'tushare']:
            src_cfg = sources.get(src_name, {})
            existing_token = existing[src_name].get('token', '') if src_name in existing else ''
            submitted_token = src_cfg.get('token', '') or ''
            # V4.7.2 兜底: token 为 56 位十六进制, 绝不含 '*'; 含 '*' 且非掩码形式一律拒绝写入
            if submitted_token == '' or is_masked_form(submitted_token, existing_token):
                src_cfg['token'] = existing_token
            elif '*' in submitted_token:
                return {"success": False,
                        "message": f"{src_name} Token 含掩码字符(*), 请点击 🔓 编辑解锁后输入完整 Token 再保存"}
        data_source_manager.save_config(req)
        return {"success": True, "message": "数据源配置已保存"}
    except Exception as e:
        return {"success": False, "message": f"保存失败: {str(e)}"}


@router.post('/datasource/test/{source}')
async def test_datasource(source: str, _: Dict = Depends(get_admin_user)):
    """测试指定数据源连接"""
    from data_sources import data_source_manager
    result = data_source_manager.test_connection(source)
    return result


@router.get('/datasource/status')
async def get_datasource_status():
    """获取数据源状态"""
    from data_sources import data_source_manager
    status = {}
    for src in ['sxsc_tushare', 'tushare', 'akshare']:
        cfg = data_source_manager._get_source_config(src)
        status[src] = {
            "enabled": cfg.get('enabled', True),
            "connected": src in data_source_manager._clients,
            "error": data_source_manager._errors.get(src, None),
        }
    return {"success": True, "status": status, "source_order": ["sxsc_tushare", "tushare", "akshare"]}


# v1.3.0: Tushare 数据源配置 API
@router.get('/tushare/config')
async def get_tushare_config(_: Dict = Depends(get_admin_user)):
    """获取 Tushare 配置"""
    from config import settings
    return {
        "success": True,
        "config": {
            "token": settings.TUSHARE_TOKEN if settings.TUSHARE_TOKEN else "",
            "endpoint": settings.TUSHARE_ENDPOINT,
            "timeout": settings.TUSHARE_TIMEOUT
        }
    }

@router.post('/tushare/config')
async def save_tushare_config(req: Dict[str, Any], _: Dict = Depends(get_admin_user)):
    """保存 Tushare 配置"""
    from config import settings

    if 'token' in req:
        # 如果提交的 token 以 *** 结尾，说明是掩码版本，保留原值
        submitted = req['token']
        if submitted.endswith('***') and settings.TUSHARE_TOKEN and submitted.startswith(settings.TUSHARE_TOKEN[:8]):
            pass  # 保留原 token
        elif submitted:
            settings.TUSHARE_TOKEN = submitted
    if 'endpoint' in req:
        settings.TUSHARE_ENDPOINT = req['endpoint']
    if 'timeout' in req:
        settings.TUSHARE_TIMEOUT = req['timeout']

    # 同步更新 market_data 的 token
    try:
        from market_data import market_data
        market_data.update_tushare_token(settings.TUSHARE_TOKEN)
    except Exception:
        logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
        pass

    return {
        "success": True,
        "message": "配置已保存"
    }

@router.post('/tushare/test')
async def test_tushare_config(_: Dict = Depends(get_admin_user)):
    """测试 Tushare 连接"""
    try:
        from market_data import market_data
        result = market_data.test_tushare_connection()
        return result
    except Exception as e:
        return {
            "success": False,
            "message": f"测试失败: {e}"
        }

# v3.3.0-T11: 数据管线 (tushare 拉取 + 解析器刷新)
@router.post('/pipeline/run')
async def run_data_pipeline(_: Dict = Depends(get_admin_user)):
    """执行完整数据管线: tushare 行情拉取 → 缓存更新 → 解析器 reload"""
    try:
        from data_pipeline import run_pipeline
        result = run_pipeline()
        return {"success": result.get("success", False), "steps": result.get("steps", [])}
    except Exception as e:
        return {"success": False, "message": f"数据管线执行失败: {e}"}

@router.post('/tushare/sync')
async def sync_tushare_data(_: Dict = Depends(get_admin_user)):
    """从 Tushare 同步股票基础信息（股票代码、名称等）"""
    try:
        from stock_info import stock_manager
        success = stock_manager.fetch_from_tushare()
        if success:
            return {
                "success": True,
                "message": f"同步成功，共 {len(stock_manager.stock_map)} 只股票"
            }
        else:
            return {
                "success": False,
                "message": "同步失败"
            }
    except Exception:
        return {
            "success": False,
            "message": "同步异常"
        }


# ─── v3.9.11: 行业热力图 ───────────────────────────────────────

# 行业分类映射 (申万一级行业)
INDUSTRY_KEYWORDS = {
    "银行": ["银行", "金融", "保险"],
    "食品饮料": ["食品", "饮料", "白酒", "乳业", "调味品"],
    "医药生物": ["医药", "制药", "生物", "医疗", "药"],
    "电子": ["电子", "半导体", "芯片", "集成电路"],
    "计算机": ["计算机", "软件", "IT", "信息"],
    "电力设备": ["电力", "电气", "新能源", "光伏", "风电", "锂电", "储能"],
    "汽车": ["汽车", "整车", "新能源车", "零部件"],
    "机械设备": ["机械", "设备", "制造", "机器人"],
    "通信": ["通信", "5G", "光缆"],
    "有色金属": ["有色", "黄金", "铜", "铝", "稀土", "矿产"],
    "基础化工": ["化工", "化学", "石化", "材料"],
    "房地产": ["地产", "房产", "物业"],
    "建筑装饰": ["建筑", "装饰", "基建", "工程"],
    "交通运输": ["交通", "运输", "物流", "港口", "航空", "机场"],
    "国防军工": ["军工", "航天", "航空", "兵器"],
    "传媒": ["传媒", "广告", "影视", "游戏", "出版"],
    "农林牧渔": ["农业", "林业", "牧业", "渔业", "种业"],
    "钢铁": ["钢铁", "钢材"],
    "煤炭": ["煤炭", "煤"],
    "石油石化": ["石油", "油气", "石化"],
    "纺织服装": ["纺织", "服装", "服饰"],
    "商贸零售": ["商业", "零售", "百货", "超市"],
    "社会服务": ["旅游", "酒店", "餐饮", "教育"],
    "公用事业": ["公用", "水务", "燃气", "环保"],
    "家用电器": ["家电", "电器"],
}

def _classify_industry(stock_name: str) -> str:
    """根据股票名称关键词归类到申万一级行业"""
    for industry, keywords in INDUSTRY_KEYWORDS.items():
        for kw in keywords:
            if kw in stock_name:
                return industry
    return "其他"


@router.get("/industry-heatmap")
async def get_industry_heatmap():
    """
    行业热力图数据 — 各行业在当前策略池中的表现
    """
    try:
        from data_parser import parser as dp

        dates = dp.get_available_dates()
        if not dates:
            return {"success": False, "message": "无可用数据"}

        latest = dates[-1]
        holdings = dp.get_holdings_by_date(latest) or {}

        # 按行业汇总
        industry_stats: Dict[str, Dict] = {}

        for sid, data in holdings.items():
            stocks = data.get("stocks", [])
            strategy_name = data.get("strategy_name", sid)

            for s in stocks:
                if isinstance(s, dict):
                    code = s.get("code", "")
                    name = s.get("name", code)
                else:
                    code = str(s)
                    name = code

                industry = _classify_industry(name)
                if industry not in industry_stats:
                    industry_stats[industry] = {
                        "name": industry,
                        "stock_count": 0,
                        "strategy_count": 0,
                        "stocks": [],
                        "strategies": set(),
                    }

                stats = industry_stats[industry]
                stats["stock_count"] += 1
                stats["strategies"].add(strategy_name)
                if len(stats["stocks"]) < 10:  # 最多保留10个示例
                    stats["stocks"].append({"code": code, "name": name})

        # 计算热力值 (基于股票数量)
        result = []
        for ind, stats in industry_stats.items():
            result.append({
                "name": stats["name"],
                "value": stats["stock_count"],
                "strategy_count": len(stats["strategies"]),
                "stocks": stats["stocks"],
            })

        # 按股票数量降序排列
        result.sort(key=lambda x: x["value"], reverse=True)

        # 计算热力等级 (前25%为hot, 中50%为warm, 后25%为cool)
        if result:
            max_val = result[0]["value"]
            min_val = result[-1]["value"]
            val_range = max(max_val - min_val, 1)
            for item in result:
                normalized = (item["value"] - min_val) / val_range
                if normalized >= 0.75:
                    item["heat"] = "hot"
                elif normalized >= 0.25:
                    item["heat"] = "warm"
                else:
                    item["heat"] = "cool"

        return {
            "success": True,
            "data": {
                "date": latest,
                "industries": result,
                "total_stocks": sum(r["value"] for r in result),
                "total_industries": len(result),
            }
        }
    except Exception as e:
        logger.error(f"行业热力图生成失败: {e}")
        return {"success": False, "message": str(e)}


# ─── v3.17.2: AI 每日市场复盘 (只读端点) ──────────────────────

@router.get("/reviews")
async def get_market_reviews(limit: int = 30):
    """获取市场复盘报告列表 (按日期倒序)"""
    from market_review import list_reviews
    return {"success": True, "data": list_reviews(limit=limit)}


@router.get("/review")
async def get_market_review(date: Optional[str] = None):
    """获取指定日期 (YYYY-MM-DD, 可省则取最近一份) 的市场复盘报告"""
    from market_review import get_review
    data = get_review(date=date)
    if data is None:
        return {"success": False, "message": "未找到市场复盘报告"}
    return {"success": True, "data": data}


@router.get("/factor-ic")
async def factor_ic_report(user: dict = Depends(get_current_active_user)):
    """FR-3.18.7: 因子有效性检验 IC/IR 报告 (数据不可达优雅降级为空)

    V4.7.4: 真实取数可能 10-30s, 用 asyncio.to_thread 避免阻塞事件循环
    (与 V4.7 kline/stock_history 的 to_thread 修复一致)。
    """
    import asyncio
    from factor_ic import get_factor_ic_report
    try:
        data = await asyncio.to_thread(get_factor_ic_report)
        return {"success": True, "data": data}
    except Exception as e:
        logger.warning("因子 IC 报告失败 (降级): %s", e)
        return {"success": False, "message": str(e), "data": {}}


# ─── v3.17.7 (FR-3.17.7): 盘中增强 — 异动扫描 + 事件提醒（离线日线级） ──────

@router.get("/scan")
async def market_scan(date: Optional[str] = None, pool: str = "all",
                      user: dict = Depends(get_current_active_user)):
    """异动扫描（离线日线级）

    Args:
        date: 扫描日期 YYYY-MM-DD（可选；指定时异动以该日为准）
        pool: all | strategies | watchlist（watchlist 需登录用户自选）
    """
    from scan_engine import run_scan, resolve_scan_pool
    codes = resolve_scan_pool(pool, user.get("username") if user else None)
    result = run_scan(date=date, pool=codes)
    result['pool'] = pool
    # v3.17.15 (FR-3.17.15): Webhook — anomaly_scan_done 事件 (扫描完成即触发, 失败仅日志)
    try:
        from webhook import dispatch as webhook_dispatch
        webhook_dispatch("anomaly_scan_done", {
            "date": result.get('date'),
            "moves_count": len(result.get('moves') or []),
            "pool": pool,
        })
    except Exception as we:
        logger.warning("webhook anomaly_scan_done 投递失败 (忽略): %s", we)
    return {"success": True, "data": result}


@router.get("/events")
async def market_events(scope: str = "watchlist",
                        user: dict = Depends(get_current_active_user)):
    """事件提醒（离线）— 自选/持仓关联事件（业绩预告/解禁/分红/龙虎榜/两融）

    Args:
        scope: watchlist | portfolio（按用户隔离）
    """
    from event_alert import build_events, get_alertable_codes
    codes = get_alertable_codes(user.get("username"), scope=scope)
    result = build_events([c['code'] for c in codes])
    result['scope'] = scope
    result['tracked_count'] = len(codes)
    return {"success": True, "data": result}
