// quant-calendar: 移动端手势核心 (v3.17.8 / FR-3.17.8)
// 移动端一等公民 — 手势判定纯函数 + 浏览器 DOM 装配（委托式，零模板侵入）。
// UMD 导出:
//   - 浏览器: window.__quantModules.gestures（initGestures() 装配左滑露出/长按复制）
//   - Node:   require(...)（供 pytest 调 node 单元测试 TC-3.17.8）
// 纯判定函数（可单测）:
//   judgeSwipe(startX, startY, endX, endY, opts) -> 'left' | 'right' | 'none'
//   judgePullToRefresh(startY, endY, opts)       -> boolean
//   judgeLongPress(pressMs, opts)                -> boolean
// 不含 Vue 依赖；DOM 装配仅依赖原生 touch/pointer 事件。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.__quantModules = root.__quantModules || {};
    root.__quantModules.gestures = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ─── 默认阈值（与 responsive.css 滑动面板宽度/单测对齐）──────────────
  var SWIPE_THRESHOLD = 40;        // 横向滑动判定最小位移(px)
  var SWIPE_DIRECTION_BIAS = 1.2;  // 横向须 > 纵向 × 系数 才判为横向滑（防误触）
  var PULL_THRESHOLD = 60;         // 下拉刷新最小纵向位移(px)
  var LONG_PRESS_MS = 500;         // 长按判定时长(ms)
  var LONG_PRESS_MOVE_SLOP = 10;   // 长按期间允许的最大位移(px)
  var REVEAL_WIDTH = 88;           // 左滑露出的操作面板宽度(px) — 与 CSS 对齐
  var CLICK_SUPPRESS_MS = 350;     // 手势结束后抑制紧随 click 的时间窗(ms)

  // ─── 纯判定函数 ─────────────────────────────────────────────
  // 方向判定: 横向位移 ≥ threshold 且 横向 > 纵向 × bias → left/right，否则 none
  function judgeSwipe(startX, startY, endX, endY, opts) {
    opts = opts || {};
    var threshold = typeof opts.threshold === 'number' ? opts.threshold : SWIPE_THRESHOLD;
    var bias = typeof opts.bias === 'number' ? opts.bias : SWIPE_DIRECTION_BIAS;
    var dx = endX - startX;
    var dy = endY - startY;
    if (Math.abs(dx) < threshold) return 'none';
    if (Math.abs(dx) < Math.abs(dy) * bias) return 'none';
    return dx < 0 ? 'left' : 'right';
  }

  // 下拉刷新判定: 纵向位移 ≥ threshold（向下拉为正向）
  function judgePullToRefresh(startY, endY, opts) {
    opts = opts || {};
    var threshold = typeof opts.threshold === 'number' ? opts.threshold : PULL_THRESHOLD;
    return (endY - startY) >= threshold;
  }

  // 长按判定: 按压时长 ≥ threshold(ms)
  function judgeLongPress(pressMs, opts) {
    opts = opts || {};
    var threshold = typeof opts.threshold === 'number' ? opts.threshold : LONG_PRESS_MS;
    return pressMs >= threshold;
  }

  // ─── 浏览器 DOM 装配（node 下无 document 时静默跳过）─────────────────
  var _initialized = false;

  function _closest(el, selector) {
    return el && typeof el.closest === 'function' ? el.closest(selector) : null;
  }

  function _codeFromRow(row) {
    if (!row) return '';
    var node = row.querySelector('.consensus-code, .watchlist-code, [data-copy-code]');
    if (node) {
      var v = node.getAttribute && node.getAttribute('data-copy-code');
      if (v) return v.trim();
      // .consensus-code 内含状态徽标文本，取首个连续 6 位数字段（含可选 .SH/.SZ）
      var m = (node.textContent || '').match(/\d{6}(?:\.(?:SH|SZ))?/);
      if (m) return m[0];
    }
    var dataAttr = row.getAttribute && row.getAttribute('data-copy-code');
    if (dataAttr) return dataAttr.trim();
    return '';
  }

  function _copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; })
        .catch(function () { return _copyFallback(text); });
    }
    return Promise.resolve(_copyFallback(text));
  }

  function _copyFallback(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    } catch (e) { return false; }
  }

  function _toast(msg) {
    if (typeof ElementPlus !== 'undefined' && ElementPlus.ElMessage) {
      ElementPlus.ElMessage.success(msg);
    }
  }

  function _vibrate() {
    if (navigator.vibrate) { try { navigator.vibrate(15); } catch (e) { /* ignore */ } }
  }

  // ─── 手势 DOM 装配（统一 capture 阶段管道）────────────────────────
  // 关键: 在 document 上以 capture 阶段监听，命中 .swipe-reveal / 长按行时
  // stopPropagation —— 否则触摸事件会继续冒泡到 main-content 的 @touchend
  // （横向滑动会切换页面），导致左滑行时整页跳走。
  // 同时在此管道内完成长按判定（两者互斥，避免双管道冒泡顺序问题）。
  function _wireGestures() {
    var reveal = null;   // 左滑进行中的行 { el, x, y, moved }
    var longPress = null; // 长按进行中 { el, x, y, timer }
    var _clickSuppressed = null; // 当前被抑制点击的行

    function _cancelLongPress() {
      if (longPress) {
        if (longPress.timer) clearTimeout(longPress.timer);
        longPress = null;
      }
    }

    // 最近一次被手势消费的元素与时间（用于抑制其后的 click）
    function _markSuppress(el) {
      _clickSuppressed = { el: el, until: Date.now() + CLICK_SUPPRESS_MS };
    }

    function _closeReveal(exceptEl) {
      document.querySelectorAll('.swipe-reveal.swipe-open').forEach(function (el) {
        if (el !== exceptEl) el.classList.remove('swipe-open');
      });
      if (reveal && reveal.el !== exceptEl) reveal = null;
    }

    function onTouchStart(e) {
      var t = e.touches && e.touches[0];
      if (!t) return;
      var revealRow = _closest(e.target, '.swipe-reveal');
      if (revealRow) {
        reveal = { el: revealRow, x: t.clientX, y: t.clientY, moved: false };
        // 行级横向手势与页面横滑互斥 → 阻断冒泡（阻止 main-content 切页）
        e.stopPropagation();
      }
      var lpRow = _closest(e.target, '.consensus-item, .watchlist-item, .market-review-row, [data-copy-code]');
      if (lpRow) {
        _cancelLongPress();
        longPress = {
          el: lpRow, x: t.clientX, y: t.clientY,
          timer: setTimeout(function () {
            var code = _codeFromRow(lpRow);
            longPress = null;
            if (code) {
              _markSuppress(lpRow);
              _copyText(code).then(function () {
                _vibrate();
                _toast('已复制代码 ' + code);
              });
            }
          }, LONG_PRESS_MS),
        };
      }
    }

    function onTouchMove(e) {
      if (!reveal) return;
      var t = e.touches && e.touches[0];
      if (!t) return;
      var dx = t.clientX - reveal.x;
      var dy = t.clientY - reveal.y;
      // 横向主导才拦截滚动并跟手
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        if (e.cancelable) e.preventDefault();
        reveal.moved = true;
        var main = reveal.el.querySelector('.swipe-reveal-main') || reveal.el;
        var off = Math.max(-REVEAL_WIDTH, Math.min(0, dx));
        main.style.transition = 'none';
        main.style.transform = 'translateX(' + off + 'px)';
        e.stopPropagation();
      }
      // 长按期间位移超过容差 → 取消长按
      if (longPress) {
        var ldx = t.clientX - longPress.x;
        var ldy = t.clientY - longPress.y;
        if (Math.abs(ldx) > LONG_PRESS_MOVE_SLOP || Math.abs(ldy) > LONG_PRESS_MOVE_SLOP) {
          _cancelLongPress();
        }
      }
    }

    function onTouchEnd(e) {
      _cancelLongPress();
      if (!reveal) return;
      var el = reveal.el;
      var t = e.changedTouches && e.changedTouches[0];
      var sx = reveal.x, sy = reveal.y;
      var dir = 'none';
      if (t) dir = judgeSwipe(sx, sy, t.clientX, t.clientY);
      var wasMoved = reveal.moved;
      reveal = null;
      // 复位内联 transform（样式由 .swipe-open 类接管过渡）
      var main = el.querySelector('.swipe-reveal-main') || el;
      main.style.transform = '';
      main.style.transition = '';
      if (dir === 'left') {
        _closeReveal(el);
        el.classList.add('swipe-open');
        _markSuppress(el);
      } else if (dir === 'right') {
        el.classList.remove('swipe-open');
      } else if (wasMoved) {
        // 位移不足: 若当前已展开则收起
        el.classList.remove('swipe-open');
      }
      // 消费了手势 → 阻断后续冒泡（页面横滑/日历翻日期均不响应）
      e.stopPropagation();
    }

    function onTouchCancel() {
      _cancelLongPress();
      reveal = null;
    }

    function onCaptureClick(e) {
      if (_clickSuppressed && Date.now() < _clickSuppressed.until) {
        var inRow = _clickSuppressed.el.contains(e.target) || e.target === _clickSuppressed.el;
        var inReveal = e.target.closest && e.target.closest('.swipe-reveal-actions');
        if (inRow && !inReveal) {
          e.preventDefault();
          e.stopPropagation();
          _clickSuppressed = null;
        }
      }
    }

    document.addEventListener('touchstart', onTouchStart, true);
    document.addEventListener('touchmove', onTouchMove, true);
    document.addEventListener('touchend', onTouchEnd, true);
    document.addEventListener('touchcancel', onTouchCancel, true);
    document.addEventListener('click', onCaptureClick, true);
  }

  // ─── 装配入口（幂等）───────────────────────────────────────
  function initGestures() {
    if (_initialized) return;
    if (typeof document === 'undefined') return;
    _initialized = true;
    _wireGestures();
  }

  return {
    // 纯判定（供 node/pytest 单测）
    judgeSwipe: judgeSwipe,
    judgePullToRefresh: judgePullToRefresh,
    judgeLongPress: judgeLongPress,
    // 阈值常量（供测试对齐 CSS）
    SWIPE_THRESHOLD: SWIPE_THRESHOLD,
    SWIPE_DIRECTION_BIAS: SWIPE_DIRECTION_BIAS,
    PULL_THRESHOLD: PULL_THRESHOLD,
    LONG_PRESS_MS: LONG_PRESS_MS,
    LONG_PRESS_MOVE_SLOP: LONG_PRESS_MOVE_SLOP,
    REVEAL_WIDTH: REVEAL_WIDTH,
    // DOM 装配
    initGestures: initGestures,
    // 内部工具（供集成测试探针）
    _codeFromRow: _codeFromRow,
  };
});
