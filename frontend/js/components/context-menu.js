// quant-calendar: ContextMenu 6.1.4 (D4) — 高频列表右键菜单 (全局委托)
// 触发: 列表行带 data-ctx-code / data-ctx-name / data-ctx-context 属性即可
//       contextmenu(桌面) / 长按 500ms(移动端) → 显示菜单
// 动作: 点击项 dispatch CustomEvent('qc:context-action', {action, payload})
// 键盘: Shift+F10 在焦点元素打开 (元素需带 data-ctx)
(function () {
  if (typeof window === 'undefined' || !window.Vue) return;
  const { ref, onMounted, onBeforeUnmount } = Vue;
  const QCM = window.QuantContextMenu;

  window.__quantComponents = window.__quantComponents || {};

  function closestCtx(el) {
    let n = el;
    while (n && n !== document.body) {
      if (n.hasAttribute && n.hasAttribute('data-ctx-code')) return n;
      n = n.parentElement;
    }
    return null;
  }

  window.__quantComponents.ContextMenu = {
    name: 'qc-context-menu',
    template: `
      <teleport to="body">
        <div v-if="visible" class="qc-ctx" :style="{ left: pos.left + 'px', top: pos.top + 'px' }"
             role="menu" @contextmenu.prevent>
          <div v-if="actions.length === 0" class="qc-ctx-item qc-ctx-empty" role="menuitem" aria-disabled="true">
            <span>无可用操作</span>
          </div>
          <div v-else>
            <div v-for="a in actions" :key="a.key" class="qc-ctx-item" role="menuitem" @click="run(a)">
              <span>{{ a.label }}</span>
            </div>
          </div>
        </div>
      </teleport>
    `,
    setup() {
      const visible = ref(false);
      const pos = ref({ left: 0, top: 0 });
      const actions = ref(QCM ? QCM.getActions() : []);
      const payload = ref({});

      function hide() { visible.value = false; }

      function open(x, y, data) {
        payload.value = data || {};
        if (QCM) {
          const vw = window.innerWidth || document.documentElement.clientWidth;
          const vh = window.innerHeight || document.documentElement.clientHeight;
          // 估算菜单尺寸 (5 项 × 32px + padding)
          const mw = 180, mh = actions.value.length * 32 + 12;
          pos.value = QCM.positionMenu(x, y, mw, mh, vw, vh);
        } else {
          pos.value = { left: x, top: y };
        }
        visible.value = true;
      }

      function run(a) {
        hide();
        window.dispatchEvent(new CustomEvent('qc:context-action', {
          detail: { action: a.key, payload: payload.value },
        }));
      }

      // 桌面: contextmenu 委托 (data-ctx-code 祖先)
      function onCtxMenu(e) {
        const el = closestCtx(e.target);
        if (!el) return;
        e.preventDefault();
        open(e.clientX, e.clientY, {
          code: el.getAttribute('data-ctx-code') || '',
          name: el.getAttribute('data-ctx-name') || '',
          context: el.getAttribute('data-ctx-context') || '',
        });
      }

      // 移动端: 长按 500ms
      let touchTimer = null, touchStart = 0, touchTarget = null;
      function onTouchStart(e) {
        const el = closestCtx(e.target);
        if (!el) return;
        touchTarget = el;
        touchStart = Date.now();
        touchTimer = setTimeout(function () {
          if (QCM && QCM.isLongPress(touchStart, Date.now(), 500)) {
            navigator.vibrate && navigator.vibrate(10);
            const t = e.touches && e.touches[0];
            open(t ? t.clientX : 0, t ? t.clientY : 0, {
              code: el.getAttribute('data-ctx-code') || '',
              name: el.getAttribute('data-ctx-name') || '',
              context: el.getAttribute('data-ctx-context') || '',
            });
          }
        }, 520);
      }
      function onTouchEnd() {
        if (touchTimer) { clearTimeout(touchTimer); touchTimer = null; }
        touchTarget = null;
      }

      function onKey(e) {
        if (e.key === 'Escape') { hide(); return; }
        if (e.shiftKey && e.key === 'F10') {
          const el = closestCtx(document.activeElement);
          if (el) {
            e.preventDefault();
            const r = el.getBoundingClientRect();
            open(r.left + r.width / 2, r.bottom, {
              code: el.getAttribute('data-ctx-code') || '',
              name: el.getAttribute('data-ctx-name') || '',
              context: el.getAttribute('data-ctx-context') || '',
            });
          }
        }
      }

      function onClickOutside(e) {
        if (visible.value && !(e.target && e.target.closest && e.target.closest('.qc-ctx'))) hide();
      }

      onMounted(function () {
        document.addEventListener('contextmenu', onCtxMenu, true);
        document.addEventListener('touchstart', onTouchStart, { passive: true });
        document.addEventListener('touchend', onTouchEnd, true);
        document.addEventListener('keydown', onKey, true);
        document.addEventListener('mousedown', onClickOutside, true);
      });
      onBeforeUnmount(function () {
        document.removeEventListener('contextmenu', onCtxMenu, true);
        document.removeEventListener('touchstart', onTouchStart, true);
        document.removeEventListener('touchend', onTouchEnd, true);
        document.removeEventListener('keydown', onKey, true);
        document.removeEventListener('mousedown', onClickOutside, true);
      });

      return { visible, pos, actions, run };
    },
  };
})();
