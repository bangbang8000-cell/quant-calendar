// quant-calendar: install-prompt 6.1.3 (C4) — PWA 安装引导条
// 捕获 beforeinstallprompt → 显示可关闭引导条 (localStorage qc_install_dismissed 记忆)
// appinstalled 后自动移除
(function () {
  if (typeof window === 'undefined') return;
  let deferredPrompt = null;

  function dismissed() {
    try { return !!localStorage.getItem('qc_install_dismissed'); } catch (e) { return false; }
  }

  function dismiss() {
    try { localStorage.setItem('qc_install_dismissed', '1'); } catch (e) { /* 忽略 */ }
  }

  function showBar() {
    if (document.getElementById('qc-install-bar')) return;
    var bar = document.createElement('div');
    bar.id = 'qc-install-bar';
    bar.className = 'qc-install-bar';
    bar.setAttribute('role', 'status');
    var text = document.createElement('span');
    text.textContent = '安装「量化日历」到桌面，随时查看行情与评估';
    var actions = document.createElement('span');
    actions.className = 'qc-install-actions';
    var ok = document.createElement('button');
    ok.className = 'qc-install-btn';
    ok.type = 'button';
    ok.textContent = '安装';
    var close = document.createElement('button');
    close.className = 'qc-install-close';
    close.type = 'button';
    close.setAttribute('aria-label', '关闭');
    close.textContent = '×';
    actions.appendChild(ok);
    actions.appendChild(close);
    bar.appendChild(text);
    bar.appendChild(actions);
    document.body.appendChild(bar);

    ok.addEventListener('click', function () {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt = null;
      }
      bar.remove();
    });
    close.addEventListener('click', function () {
      dismiss();
      bar.remove();
    });
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    if (!dismissed()) showBar();
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    var bar = document.getElementById('qc-install-bar');
    if (bar) bar.remove();
  });
})();
