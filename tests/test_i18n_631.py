# -*- coding: utf-8 -*-
"""6.3.1 (T-6.3.1.5): i18n 收敛门禁 — 本轮新增文案走翻译函数、五语键对齐

守三件事：

1. **五语齐备**：T-6.3.1.1~.4 新增的 51 个文案键在 zh-CN / en / ja / ko / zh-TW
   中均存在且非空（缺词/空串即失败）。
2. **无死键**：每个新键都被源码真实引用（``t('key'`` 或 ``.t('key'``），
   防止「加了键没人用」的假收敛。
3. **无裸中文**：本轮触及的视图/逻辑文件里，四态面板的 ``title`` / ``desc``、
   长列表的 ``aria-label`` 与站内消息不再残留中文裸字面量（须走 t(key)）。

占位符一致性（``{code}`` / ``{name}`` / ``{date}`` / ``{msg}`` 在五语同名）另测。
"""
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import page_source  # noqa: E402

ALL_LOCALES = ("zh-CN", "en", "ja", "ko", "zh-TW")

# ─── 本轮新增文案键（T-6.3.1.5 收口清单）────────────────────────
STATE_KEYS = [
    "state.overviewError", "state.merrillError", "state.marketError", "state.consensusError",
    "state.strategiesError", "state.strategiesManageError", "state.backtestError",
    "state.intradayError", "state.freshnessError", "state.healthDetailError",
    "state.factCheckError", "state.notificationError", "state.featureConfigError",
    "state.usageError",
    "state.emptyMarket", "state.emptyFocus", "state.emptyFreshness", "state.emptyPool",
    "state.emptyStrategyResearch", "state.emptyStrategyManage", "state.emptyStrategy",
    "state.emptyDictField",
    "state.descNetworkOrService", "state.descNetwork", "state.descService", "state.descBacktest",
    "state.descEmptyMarket", "state.descEmptyFocus", "state.descEmptyFreshness",
    "state.descEmptyPool", "state.descEmptyStrategyResearch", "state.descEmptyStrategyManage",
    "state.descEmptyStrategy", "state.descEmptyDictField", "state.descRetryDict",
    "state.descRetryHealth", "state.descAiModels",
]
A11Y_KEYS = [
    "a11y.watchlistList", "a11y.reviewDateList", "a11y.dailyReviewList", "a11y.shorttermDateList",
    "a11y.selectWatchStock", "a11y.viewMarketReview",
]
MSG_KEYS = [
    "msg.runFailed", "msg.exportFailed", "msg.factorIcFailed", "msg.layerBacktest",
    "msg.layerBacktestFailed", "msg.factorDetail", "msg.factorDetailFailed", "msg.noData",
]
NEW_KEYS = STATE_KEYS + A11Y_KEYS + MSG_KEYS

# 本轮新增文案的原始中文（收敛后不应再以裸字面量出现在属性/消息中）
RAW_LITERALS = [
    "总览数据加载失败", "美林时钟数据加载失败", "行情数据加载失败", "共识榜加载失败",
    "策略研究数据加载失败", "策略加载失败", "回测失败", "盘中快照加载失败",
    "数据新鲜度加载失败", "调度任务数据加载失败", "事实护栏数据加载失败",
    "通知中心数据加载失败", "功能配置数据加载失败", "用量统计数据加载失败",
    "暂无行情数据", "暂无重点跟踪数据", "暂无数据新鲜度记录", "暂无涨跌停池数据",
    "暂无策略研究数据", "暂无可管理的策略", "暂无策略", "暂无字段数据",
    "请检查网络或服务后重试", "请检查网络后重试", "请检查服务后重试",
    "请检查策略与日期范围后重试", "当前无指数行情返回，可稍后重试",
    "当前日期/时段暂无评估结果，可切换日期或时段", "接口未返回任何数据表，可点击刷新重试",
    "当前交易日三池为空，可切换交易日或刷新重试",
    "先去「量化研究」加载策略注册表，或创建自定义策略",
    "先复制母本创建微调策略，或用 AI 代写全新策略",
    "策略注册表为空，请检查后端策略目录或创建自定义策略",
    "当前分类没有字典字段，可切换分类或点击刷新",
    "点击重试重新加载数据字典", "点击重试重新加载健康与可靠性数据",
    "厂商模型配置获取失败，可重试",
    "自选股列表", "复盘日期列表", "每日复盘列表", "复盘日历日期列表",
    "运行失败: ", "导出失败: ", "因子 IC 分析失败: ", "分层回测: ", "分层回测失败: ",
    "因子详情: ", "因子详情失败: ",
]
MSG_RAW = ["运行失败: ", "导出失败: ", "因子 IC 分析失败: ", "分层回测: ",
           "分层回测失败: ", "因子详情: ", "因子详情失败: "]

# 本轮触及的文件（拆分产物；t() 经 qcState 展开对模板可用）
VIEW_FILES = [
    "js/components/ai/view-part2.js",
    "js/components/research/view-part1.js",
    "js/components/research/view-part2.js",
    "js/components/shortterm/view-part1.js",
    "js/components/shortterm/view-part2.js",
    "js/components/strategies/view-part1.js",
    "js/components/strategies/view-part2.js",
    "js/components/system/view-part1.js",
    "js/components/system/view-part2.js",
]
MSG_FILES = ["js/components/research-page.js", "js/components/research/logic-factor.js"]

_ATTR_RE = re.compile(r'(?<![\w:-])(?:title|desc|aria-label)="([^"]*)"')


def _read(rel):
    return page_source.read(rel)


def _locale_src(loc):
    with open(os.path.join(FRONTEND, "js", "locales", loc + ".js"), encoding="utf-8") as f:
        return f.read()


def _locale_values(loc):
    """{key: value}（值取首个单引号字符串字面量）"""
    src = _locale_src(loc)
    out = {}
    for m in re.finditer(r"^\s*'([A-Za-z][A-Za-z0-9.\-]*)':\s*'((?:[^'\\]|\\.)*)'", src, re.M):
        out[m.group(1)] = m.group(2)
    return out


def _all_frontend_src():
    """全前端 js + index.html 源码拼接（用于死键检查）"""
    parts = []
    idx = os.path.join(FRONTEND, "index.html")
    with open(idx, encoding="utf-8") as f:
        parts.append(f.read())
    for root, _dirs, files in os.walk(os.path.join(FRONTEND, "js")):
        for fn in files:
            if fn.endswith(".js"):
                with open(os.path.join(root, fn), encoding="utf-8") as f:
                    parts.append(f.read())
    return "\n".join(parts)


def assert_key_all_locales(key):
    """供其它 6.3.1 门禁复用：断言 key 在五语中齐备且非空"""
    for loc in ALL_LOCALES:
        vals = _locale_values(loc)
        assert key in vals, "%s 语言包缺 key: %s" % (loc, key)
        assert vals[key].strip(), "%s 语言包 %s 为空串" % (loc, key)


# ─── 1. 五语齐备 ────────────────────────────────────────────────

def test_new_keys_defined_in_all_locales():
    """51 个新键在五语齐备且非空"""
    for key in NEW_KEYS:
        assert_key_all_locales(key)
    assert len(NEW_KEYS) == 51, "新键清单长度应为 51（改动清单须同步本门禁）"


def test_new_keys_placeholder_consistency():
    """带占位符的新键：五语 {param} 集合一致（格式不崩）"""
    for key in NEW_KEYS:
        sets = {}
        for loc in ALL_LOCALES:
            val = _locale_values(loc)[key]
            sets[loc] = set(re.findall(r"\{(\w+)\}", val))
        base = sets["zh-CN"]
        for loc in ALL_LOCALES:
            assert sets[loc] == base, \
                "%s %s 占位符不一致: %s ≠ %s" % (loc, key, sets[loc], base)


def test_new_keys_are_referenced():
    """无死键：每个新键都被源码真实引用（t('key' 或 .t('key'）"""
    src = _all_frontend_src()
    dead = []
    for k in NEW_KEYS:
        single = "t('" + k + "'"
        dbl = 't("' + k + '"'
        if single not in src and dbl not in src:
            dead.append(k)
    assert not dead, "新增 i18n 键未被引用（死键）: %s" % dead


# ─── 2. 无裸中文 ────────────────────────────────────────────────

def test_view_files_have_no_raw_literals():
    """本轮触及的视图文件不再残留新增文案的裸中文字面量（属性值）"""
    bad = []
    for rel in VIEW_FILES:
        for m in _ATTR_RE.finditer(_read(rel)):
            val = m.group(1)
            if val in RAW_LITERALS:
                bad.append("%s: %s" % (rel, m.group(0)))
    assert not bad, "四态/无障碍文案仍为裸字面量（须走 t(key)）:\n" + "\n".join(bad)


def test_rewired_attributes_use_t_binding():
    """本轮收敛的属性一律以 t(key) 绑定：state 标题 21 / 描述 32 / a11y 可读名 6"""
    counts = {"title": 0, "desc": 0, "aria": 0}
    for rel in VIEW_FILES:
        src = _read(rel)
        counts["title"] += len(re.findall(r":title=\"t\('state\.", src))
        counts["desc"] += len(re.findall(r":desc=\"t\('state\.", src))
        counts["aria"] += len(re.findall(r":aria-label=\"t\('a11y\.", src))
    assert counts["title"] >= 21, "四态错误态标题 t(key) 绑定过少: %d" % counts["title"]
    assert counts["desc"] >= 32, "四态描述 t(key) 绑定过少: %d" % counts["desc"]
    assert counts["aria"] >= 6, "列表可读名 t(key) 绑定过少: %d" % counts["aria"]


def test_messages_have_no_chinese_concat():
    """站内消息不得再出现「中文字面量 + 拼接」的反模式（须 t(key, {msg: ...})）"""
    bad = []
    for rel in MSG_FILES:
        src = _read(rel)
        for m in re.finditer(r"ElMessage\.\w+\(\s*'[^']*[\u4e00-\u9fff][^']*'\s*\+", src):
            bad.append("%s: %s" % (rel, m.group(0)))
    assert not bad, "站内消息仍是中文拼接（须走翻译函数）:\n" + "\n".join(bad)


def test_msg_keys_used_with_params():
    """带 {msg} 的站内消息键必须传 msg 参数（否则渲染出裸 {msg}）"""
    src = _all_frontend_src()
    for key in MSG_KEYS:
        if key == "msg.noData":
            continue
        vals = _locale_values("zh-CN")
        if "{msg}" not in vals[key]:
            continue
        m = re.search(r"t\('%s',\s*\{\s*msg:" % re.escape(key), src)
        assert m, "%s 调用未传 {msg: ...} 参数" % key