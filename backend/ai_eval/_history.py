#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI股票评估模块
v1.7.0: 纯大模型体系，支持多 provider fallback
- 移除内置引擎，所有评估通过 LLM API
- 多模型管理：启用/禁用/优先级/探测
- 评估历史增强：原始数据 + 原始 LLM 响应
"""
import json
import os
import requests
import logging
from typing import Dict, List, Optional
from datetime import datetime

logger = logging.getLogger(__name__)

# ─── 模型配置管理 ──────────────────────────────────────────────

import logging  # noqa: E402

logger = logging.getLogger(__name__)

class AIHistoryMixin:
    """V5.0.9 (T-5.0.91): AIEvaluator 拆分 Mixin (_history)"""
    def _load_history(self) -> List:
        """加载评估历史（已废弃，保留向后兼容）"""
        return self._load_history_for('default')
    def _load_history_for(self, username: str) -> List:
        """加载指定用户的评估历史"""
        try:
            path = self._history_path(username)
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            logger.exception("加载评估历史失败")
            return []
    def _save_history_for(self, username: str, history: List):
        """保存指定用户的评估历史"""
        path = self._history_path(username)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(history, f, ensure_ascii=False, indent=2)
    def _history_path(self, username: str) -> str:
        from paths import DATA_DIR
        return os.path.join(DATA_DIR, "users", username, "ai_evaluation_history.json")
    def evaluate_index(self, index_code: str, index_name: str, current_price: float = None, pct_chg: float = None, force: bool = False) -> Dict:
        """
        评估指数 — 复用 K线数据获取 + 内置评估引擎
        返回前端兼容格式：{ analysis (HTML), suggestion, confidence }
        同日同指数自动缓存，force=True 强制刷新
        """
        # ── 检查缓存 ──
        today = datetime.now().strftime('%Y-%m-%d')
        cache_key = f"{index_code}_{today}"
        if not force and cache_key in self._index_eval_cache:
            cached = self._index_eval_cache[cache_key]
            logger.info(f"📋 指数评估缓存命中: {index_code} ({today})")
            return cached

        # 获取 K 线数据（指数也走同一通道）
        market_data = self._fetch_stock_data(index_code)

        has_data = market_data.get("has_kline", False)
        if not has_data:
            return {
                "analysis": f"<p style='color:#999;'>无法获取 {index_name}({index_code}) 的行情数据，请检查 Tushare 连接。</p>",
                "suggestion": "观望",
                "confidence": 0
            }

        # 用内置引擎跑一次评分
        builtin = self._builtin_evaluate(index_code, index_name, market_data)

        # ── 构建 HTML 分析 ──
        parts = []
        latest_data = market_data.get("latest", {})

        # 行情速览
        parts.append("<div style='margin-bottom:16px;'>")
        parts.append("<h4 style='margin:0 0 8px 0;'>📊 行情速览</h4>")
        parts.append("<table style='width:100%;font-size:13px;border-collapse:collapse;'>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>最新价</td><td style='padding:4px 8px;font-weight:600;'>{latest_data.get('close', '-')}</td>")
        pct = pct_chg if pct_chg is not None else latest_data.get('pct_chg')
        color = '#E63946' if (pct or 0) >= 0 else '#457B9D'
        sign = '+' if (pct or 0) >= 0 else ''
        parts.append(f"<td style='padding:4px 8px;font-weight:600;color:{color};'>{sign}{pct or '-'}%</td></tr>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>MA5 / MA10 / MA20</td><td colspan='2' style='padding:4px 8px;'>{latest_data.get('ma5','-')} / {latest_data.get('ma10','-')} / {latest_data.get('ma20','-')}</td></tr>")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>成交量</td><td colspan='2' style='padding:4px 8px;'>{latest_data.get('volume',0):,} 手</td></tr>")
        parts.append("</table></div>")

        # 技术指标
        parts.append("<div style='margin-bottom:16px;'>")
        parts.append("<h4 style='margin:0 0 8px 0;'>🔬 技术指标</h4>")
        parts.append("<table style='width:100%;font-size:13px;border-collapse:collapse;'>")
        rsi = market_data.get("rsi")
        rsi_color = '#f56c6c' if rsi and rsi >= 70 else '#67c23a' if rsi and rsi <= 30 else '#333'
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>RSI(14)</td><td style='padding:4px 8px;font-weight:600;color:{rsi_color};'>{rsi or '-'}</td>")
        rsi_desc = '超买区域' if rsi and rsi >= 70 else '超卖区域' if rsi and rsi <= 30 else '中性区间' if rsi and 40 <= rsi <= 60 else '正常'
        parts.append(f"<td style='padding:4px 8px;color:#999;font-size:12px;'>{rsi_desc}</td></tr>")
        macd = market_data.get("macd", {})
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>MACD</td><td style='padding:4px 8px;font-weight:600;'>DIF {macd.get('dif','-')} DEA {macd.get('dea','-')}</td>")
        hist = macd.get('hist', 0)
        hist_color = '#E63946' if hist > 0 else '#457B9D'
        parts.append(f"<td style='padding:4px 8px;color:{hist_color};font-size:12px;'>{'多头' if hist>0 else '空头'}</td></tr>")
        ma = market_data.get("ma_alignment", "-")
        parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>均线排列</td><td colspan='2' style='padding:4px 8px;font-weight:600;'>{ma}</td></tr>")
        if market_data.get("volume_analysis"):
            v = market_data["volume_analysis"]
            parts.append(f"<tr><td style='padding:4px 8px;color:#666;'>量比</td><td colspan='2' style='padding:4px 8px;'>{v.get('vol_ratio', '-')}</td></tr>")
        parts.append("</table></div>")

        # 分维度评分
        parts.append("<div style='margin-bottom:16px;'>")
        parts.append("<h4 style='margin:0 0 8px 0;'>📈 各维度评分</h4>")
        dims = builtin.get("dimensions", {})
        for name, score in dims.items():
            bar_color = '#67c23a' if score >= 70 else '#e6a23c' if score >= 50 else '#f56c6c'
            pct_bar = min(100, max(0, score))
            parts.append(f"<div style='display:flex;align-items:center;margin-bottom:6px;font-size:12px;'>"
                         f"<span style='width:80px;color:#666;'>{name}</span>"
                         f"<div style='flex:1;height:6px;background:#eee;border-radius:3px;margin:0 8px;'>"
                         f"<div style='width:{pct_bar}%;height:100%;background:{bar_color};border-radius:3px;'></div></div>"
                         f"<span style='font-weight:600;color:{bar_color};width:30px;text-align:right;'>{score}</span></div>")

        # 总评
        total = builtin.get("total_score", 50)
        total_color = '#67c23a' if total >= 75 else '#e6a23c' if total >= 60 else '#f56c6c'
        parts.append(f"<div style='display:flex;align-items:center;margin-top:8px;padding-top:8px;border-top:1px solid #eee;'>"
                     f"<span style='font-weight:600;color:#333;'>综合评分</span>"
                     f"<span style='margin-left:12px;font-size:22px;font-weight:700;color:{total_color};'>{total}</span>"
                     f"<span style='margin-left:8px;color:#999;font-size:12px;'>/100</span></div>")
        parts.append("</div>")

        # 分析建议
        analysis = builtin.get("analysis", {})
        strengths = analysis.get("strengths", [])
        weaknesses = analysis.get("weaknesses", [])

        if strengths:
            parts.append("<div style='margin-bottom:12px;'>")
            parts.append("<h4 style='margin:0 0 6px 0;color:#67c23a;'>✅ 积极因素</h4>")
            for s in strengths:
                parts.append(f"<div style='font-size:13px;color:#555;padding:2px 0;'>• {s}</div>")
            parts.append("</div>")

        if weaknesses:
            parts.append("<div style='margin-bottom:12px;'>")
            parts.append("<h4 style='margin:0 0 6px 0;color:#f56c6c;'>⚠️ 风险提示</h4>")
            for w in weaknesses:
                parts.append(f"<div style='font-size:13px;color:#555;padding:2px 0;'>• {w}</div>")
            parts.append("</div>")

        # ── 建议映射（5级精确映射）──
        level = builtin.get("level", "观望")
        suggestion_map = {
            "强烈推荐": "买入",
            "推荐": "增持",
            "谨慎推荐": "观望",
            "中性": "减持",
            "观望": "卖出"
        }
        suggestion = suggestion_map.get(level, "观望")

        # 信心指数 = 评分映射
        confidence = min(100, max(0, round(total)))

        # 数据源
        data_src = "📡 Tushare 实时数据" if has_data else "⚠️ 离线模式"
        parts.append(f"<div style='margin-top:12px;font-size:11px;color:#999;text-align:right;'>数据源: {data_src} | 技术指标引擎</div>")

        result = {
            "analysis": "\n".join(parts),
            "suggestion": suggestion,
            "confidence": confidence,
            "eval_date": today
        }
        # ── 写入缓存 ──
        self._index_eval_cache[cache_key] = result
        self._save_index_eval_cache()
        return result
    def get_history(self, username: str = 'default', limit: int = 50, offset: int = 0) -> List[Dict]:
        """获取评估历史 (v3.17.9 FR-3.17.9: 支持 limit/offset 分页; offset 默认 0 兼容旧调用)"""
        history = self._load_history_for(username)
        return history[offset:offset + limit]
    def count_history(self, username: str = 'default') -> int:
        """评估历史总数 (分页 total 用)"""
        return len(self._load_history_for(username))
    def delete_history(self, username: str, record_id: str) -> bool:
        """删除单条评估记录"""
        history = self._load_history_for(username)
        before = len(history)
        history = [r for r in history if r.get("id") != record_id]
        if len(history) < before:
            self._save_history_for(username, history)
            return True
        return False
    def get_last_evaluation(self, username: str, stock_code: str) -> Optional[Dict]:
        """获取某只股票的最近一次评估"""
        history = self._load_history_for(username)
        for r in history:
            if r.get("stock_code") == stock_code:
                return r
        return None
    def test_connection(self) -> Dict:
        """测试API连接"""
        if self.config["provider"] == "codingplan":
            return {"success": True, "message": "Coding Plan内置引擎工作正常"}
        elif self.config["provider"] == "custom" and self.config.get("apiKey"):
            try:
                headers = {
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {self.config['apiKey']}"
                }
                payload = {
                    "model": self.config.get("model", "ark-code-latest"),
                    "messages": [{"role": "user", "content": "你好，请回复'测试成功'"}],
                    "max_tokens": 50
                }
                endpoint = self.config.get("endpoint", "https://ark.cn-beijing.volces.com/api/coding/v3")
                if not endpoint.endswith("/chat/completions"):
                    endpoint = endpoint.rstrip("/") + "/chat/completions"
                response = requests.post(endpoint, headers=headers, json=payload, timeout=30)
                response.raise_for_status()
                result = response.json()
                if "choices" in result:
                    return {"success": True, "message": "OpenClaw大模型API连接测试成功！"}
                else:
                    return {"success": False, "message": f"API返回格式异常: {str(result)[:100]}"}
            except Exception as e:
                return {"success": False, "message": f"API连接测试失败: {str(e)}"}
        return {"success": False, "message": "请先配置API Key"}
    def get_auto_config(self) -> Dict:
        """获取自动评估配置"""
        from paths import AUTO_EVALUATE_CONFIG_FILE
        auto_config_file = AUTO_EVALUATE_CONFIG_FILE
        try:
            with open(auto_config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            logger.exception("加载自动评估配置失败")
            return {
                "enabled": False,
                "schedule_type": "daily",
                "schedule_time": "09:00",
                "selected_strategies": [],
                "selected_stocks": [],
                "push_to_feishu": True
            }
    def save_auto_config(self, config: Dict) -> bool:
        """保存自动评估配置"""
        from paths import AUTO_EVALUATE_CONFIG_FILE
        auto_config_file = AUTO_EVALUATE_CONFIG_FILE
        try:
            with open(auto_config_file, 'w', encoding='utf-8') as f:
                json.dump(config, f, ensure_ascii=False, indent=2)
            return True
        except Exception:
            logger.exception("保存自动评估配置失败")
            return False
