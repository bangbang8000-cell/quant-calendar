"""v3.15 智能评估 UI 优化回归 (TC-15.3) — 静态校验前端 JS 源

根因: 智能评估用 3×1800ms 假阶段定时器模拟进度, 失败只弹通用错误无重试;
      结果子界面未展示模型信息, 评分环颜色固定。
方案: 诚实进度(与真实 await 联动 + 已用秒数), 失败原因弹窗内展示+重试,
      模型信息展示, 评分环按等级映射主题变量, 复制报告/重新评估。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    p = os.path.join(BASE, rel)
    assert os.path.exists(p), f'missing {rel}'
    with open(p, encoding='utf-8') as f:
        return f.read()


WATCHLIST = _read('frontend/js/watchlist.js')
STOCK_DETAIL = _read('frontend/js/components/dialogs/stock-detail.js')
AI_JS = _read('frontend/js/ai.js')
APP_LOGIC = _read('frontend/js/app-logic.js')


class TestHonestProgress:
    def test_no_fake_stage_timer(self):
        """移除假阶段定时器: doAiEvaluate 不再使用 STAGE_DELAY / 固定延时切换"""
        seg = WATCHLIST[WATCHLIST.index('async function doAiEvaluate'):]
        seg = seg[:seg.index('async function loadAiHistory')]
        assert 'STAGE_DELAY' not in seg
        assert '1800' not in seg

    def test_elapsed_timer_tied_to_real_await(self):
        """诚实进度: 已用秒数计时器 + 阶段与 await 联动 (fetching→calculating→analyzing)"""
        seg = WATCHLIST[WATCHLIST.index('async function doAiEvaluate'):]
        seg = seg[:seg.index('async function loadAiHistory')]
        assert 'aiEvalElapsed.value = 0' in seg
        assert 'Date.now() - t0' in seg
        # 阶段在 fetch 之后、json 解析后推进 — 非固定定时器
        assert "aiEvalStage.value = 'calculating'" in seg
        assert "aiEvalStage.value = 'analyzing'" in seg

    def test_stage_done_on_success(self):
        """完成即跳 done"""
        assert "aiEvalStage.value = 'done'" in WATCHLIST

    def test_stage_text_mapping_present(self):
        """stock-detail.js 阶段文案映射 (fetching→calculating→analyzing→done)"""
        assert "'正在获取行情数据'" in STOCK_DETAIL
        assert "'正在计算评分'" in STOCK_DETAIL
        assert "'正在生成分析报告'" in STOCK_DETAIL
        assert "'评估完成'" in STOCK_DETAIL


class TestFailureHandling:
    def test_do_ai_evaluate_captures_backend_message(self):
        """失败分支提取后端 message 到 aiEvalError (弹窗内展示 + 重试)"""
        seg = WATCHLIST[WATCHLIST.index('async function doAiEvaluate'):]
        seg = seg[:seg.index('async function loadAiHistory')]
        assert 'aiEvalError.value = data.message || \'评估失败\'' in seg
        assert 'aiEvalError.value' in seg  # catch 分支也写入

    def test_quick_and_watchlist_evaluate_capture_error(self):
        """快捷评估 / 自选评估失败原因写入 aiEvalError"""
        assert 'aiEvalError.value = evalData.message || \'评估失败\'' in WATCHLIST
        assert 'aiEvalError.value = data.message || \'评估失败\'' in WATCHLIST

    def test_retry_button_in_dialog(self):
        """失败提示提供重试按钮 (复用 doAiEvaluate)"""
        assert 'ai-eval-error' in STOCK_DETAIL
        assert '@click="doAiEvaluate"' in STOCK_DETAIL


class TestResultUI:
    def test_model_info_displayed(self):
        """结果头部展示 model_used / model_provider / llm_latency_ms"""
        assert 'aiResult.model_used' in STOCK_DETAIL
        assert 'aiResult.model_provider' in STOCK_DETAIL
        assert 'aiResult.llm_latency_ms' in STOCK_DETAIL

    def test_level_colored_ring(self):
        """评分环颜色按等级映射主题变量 (levelRingColor)"""
        assert 'levelRingColor' in STOCK_DETAIL
        assert ':stroke="levelRingColor"' in STOCK_DETAIL
        # 映射使用主题变量而非硬编码 hex
        assert 'var(--el-success)' in STOCK_DETAIL
        assert 'var(--el-warning)' in STOCK_DETAIL
        assert 'var(--el-danger)' in STOCK_DETAIL

    def test_copy_and_reevaluate_buttons(self):
        """复制报告 / 重新评估按钮"""
        assert 'copyAiReport' in STOCK_DETAIL
        assert '@click="copyAiReport"' in STOCK_DETAIL
        assert "detail.reevaluate" in STOCK_DETAIL, "重新评估按钮应经 t('detail.reevaluate') 渲染"
        assert "重新评估" in _read('frontend/js/locales/zh-CN.js'), "zh 语言包应保留'重新评估'文案"


class TestRefThreading:
    def test_ai_eval_refs_declared_in_ai_js(self):
        """aiEvalElapsed / aiEvalError 在 ai.js 声明并导出"""
        assert 'const aiEvalElapsed = ref(0)' in AI_JS
        assert "const aiEvalError = ref('')" in AI_JS
        assert 'aiEvalElapsed, aiEvalError' in AI_JS

    def test_refs_threaded_through_app_logic(self):
        """app-logic 解构 / watchlist deps / 根返回三处均透传"""
        assert 'aiEvalElapsed, aiEvalError' in APP_LOGIC
        # watchlist.create deps 传参
        m = re.search(r'window\.__quantModules\.watchlist\.create\(\{([^}]*)\}', APP_LOGIC)
        assert m, 'watchlist.create deps not found'
        assert 'aiEvalElapsed' in m.group(1)
        assert 'aiEvalError' in m.group(1)

    def test_watchlist_destructures_refs(self):
        """watchlist.js 解构新 refs"""
        head = WATCHLIST[:WATCHLIST.index('const quickEvalStock')]
        assert 'aiEvalElapsed' in head
        assert 'aiEvalError' in head
