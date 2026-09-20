// quant-calendar: themes module v6.1
// V6.1 (PRD-6.1 F5): 主题模型收敛 — 模式(light/dark/system) + 主题色色相(hue)
//   - 运行时仅保留「明/暗」两套基底 (themes.css [data-theme=gold / dark-pro] 复用, 不重写 CSS)
//   - 主色由 HSL 生成并以内联 CSS 变量覆盖; 暗色模式同色相提亮保证对比度
//   - 兼容旧调用 applyTheme(legacyThemeName) — 经 LEGACY_MAP 自动迁移
// applyTheme 仍为全局唯一权威 (data-theme / data-theme-mode / 内联 token / localStorage 兜底)
(function () {

  // 色相预设: 金/蓝/红/绿/紫/粉
  const HUES = [45, 220, 0, 140, 270, 320];

  // 旧 8 主题 → (mode, hue) 迁移映射
  const LEGACY_MAP = {
    'tech-blue':      ['light', 220],
    'rose-red':       ['light', 0],
    'vibrant-orange': ['light', 45],
    'classic-white':  ['light', 220],
    'classic-red':    ['light', 0],
    'classic-gold':   ['light', 45],
    'dark-pro':       ['dark', 165],
    'gold':           ['light', 45],
  };

  // legacy 主题展示数据 (users 管理页 user.theme 圆点等展示用途)
  const legacyThemes = {
    'tech-blue':      { name: '科技蓝', color: '#1d4ed8' },
    'rose-red':       { name: '玫瑰红', color: '#E63946' },
    'vibrant-orange': { name: '活力金', color: '#D4A843' },
    'classic-white':  { name: '经典白', color: '#2563eb' },
    'classic-red':    { name: '经典红', color: '#dc2626' },
    'classic-gold':   { name: '经典金', color: '#b8922a' },
    'dark-pro':       { name: '暗色专业', color: '#64ffda' },
    'gold':           { name: '金色', color: '#b8922a' },
  };

  function hsl(hue, sat, light) {
    return 'hsl(' + hue + ', ' + sat + '%, ' + light + '%)';
  }

  // hsl -> 'r, g, b' 字符串 (供 rgba(var(--primary-rgb), …) 使用)
  function hslToRgb(h, s, l) {
    s = s / 100; l = l / 100;
    const k = function (n) { return (n + h / 30) % 12; };
    const a = s * Math.min(l, 1 - l);
    const f = function (n) { return l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))); };
    return Math.round(255 * f(0)) + ', ' + Math.round(255 * f(8)) + ', ' + Math.round(255 * f(4));
  }

  // ===== V5.29: 详情头卡「浅色面板 + 深色文字」的自适应底色求解 =====
  // 仅用于 .detail-header(个股/指数详情头部圆角矩形); 其余 --gradient 使用点保持原样。
  // 固定目标对比度, 反解该色相下**尽可能深**的底色明度: 冷色(蓝/紫)同明度对比更低 → 自动留浅,
  // 暖色(金/红/绿/粉)可更深。调整深浅只需改 PANEL_TARGET(越大越浅)。
  const PANEL_TARGET = 5.0;
  function _panelTuple(h, s, l) {
    return hslToRgb(h, s, l).split(',').map(function (x) { return parseInt(x, 10); });
  }
  function _panelLum(t) {
    const f = function (c) { c = c / 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(t[0]) + 0.7152 * f(t[1]) + 0.0722 * f(t[2]);
  }
  function _panelContrast(a, b) {
    const la = _panelLum(a), lb = _panelLum(b);
    const hi = Math.max(la, lb), lo = Math.min(la, lb);
    return (hi + 0.05) / (lo + 0.05);
  }
  function _panelL(hue, fgSat, fgLight, sat, target) {
    let lo = 38, hi = 76;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (_panelContrast(_panelTuple(hue, sat, mid), _panelTuple(hue, fgSat, fgLight)) >= target) hi = mid;
      else lo = mid;
    }
    return Math.round(hi * 10) / 10;
  }

  // ===== V5.30: 品牌渐变对比度求解 (P0-3) =====
  // 16+4 处渐变元素 (页签激活态/持仓天数/编号徽标/进度条/AI 悬浮球等) 在亮色下用白字、暗色下用深字。
  // 固定目标对比度反解**该色相允许的最亮档**, 保证渐变最浅的一档仍达标 (暖色可深、冷色自动留浅),
  // 再据此外推其余档位, 使渐变保持层次而非退化成实色。
  const GRAD_TARGET = 4.6;
  var _gradFgWhite = [255, 255, 255];
  var _gradFgDark = [11, 18, 32];   // = --bg-page (dark-pro #0b1220)
  function _gradL(hue, sat, fg, lo, hi, wantMax, target) {
    var _t = target || GRAD_TARGET;
    var a = lo, b = hi;
    for (var i = 0; i < 24; i++) {
      var mid = (a + b) / 2;
      var ok = _panelContrast(_panelTuple(hue, sat, mid), fg) >= _t;
      if (wantMax) { if (ok) { a = mid; } else { b = mid; } }
      else { if (ok) { b = mid; } else { a = mid; } }
    }
    return Math.round((wantMax ? a : b) * 10) / 10;
  }

  // 明色模式 token (覆盖在 themes.css [data-theme=gold] 基底之上)
  function generateLightTokens(hue) {
    const rgb = hslToRgb(hue, 75, 42);
    // V5.30: 渐变三档对白字均 >= GRAD_TARGET (原最浅档仅 2.74:1, 14px 白字不达 AA)
    const gL = _gradL(hue, 68, _gradFgWhite, 14, 62, true);
    const gL2 = Math.max(12, gL - 5);
    const gL1 = Math.max(10, gL - 11);
    // V5.31: 品牌文字/实底 —— 文字色对白底 4.8:1, 实底色对白字 >=4.6:1 (原 --primary-color hsl(h,75,42) 仅 2.88:1)
    const _mut = [247, 244, 238];
    const txtL = _gradL(hue, 78, _mut, 10, 58, true, 4.6);   // 对淡底求解 (页面/表格头 #f7f4ee 也达标)
    const navL = _gradL(hue, 80, _mut, 10, 58, true, 4.6);
    // V5.31: 实底色 = 原 32% 与「对白字达标的最亮值」取小 —— 绿/青等亮色相在原 32% 仅 3.99:1, 自动压深
    const solidL = Math.min(32, _gradL(hue, 80, _gradFgWhite, 8, 60, true, 4.6));   // 实底实际用 80% 饱和度, 需按同一饱和度求解
    return {
      '--primary-color': hsl(hue, 75, 42),
      '--primary-rgb': rgb,
      '--color-primary': hsl(hue, 75, 42),
      '--qc-primary': hsl(hue, 75, 42),
      '--qc-primary-50': hsl(hue, 90, 96),
      '--qc-primary-100': hsl(hue, 85, 92),
      '--qc-primary-200': hsl(hue, 80, 84),
      '--qc-primary-300': hsl(hue, 75, 72),
      '--qc-primary-400': hsl(hue, 70, 58),
      '--qc-primary-500': hsl(hue, 75, 48),
      '--qc-primary-600': hsl(hue, 80, 42),
      '--qc-primary-700': hsl(hue, 85, 35),
      '--qc-primary-800': hsl(hue, 88, 28),
      '--qc-primary-900': hsl(hue, 90, 20),
      '--qc-primary-foreground': '#ffffff',
      '--text-link': hsl(hue, 70, 40),
      '--secondary-color': hsl(hue, 70, 55),
      '--card-border': hsl(hue, 22, 80),
      '--bg-selected': 'rgba(' + rgb + ', 0.08)',
      // V5.7.2 (UX-T1): 亮色主按钮对比度达标 — lightness 42%→32% (白字 2.92:1→4.53:1)
      '--btn-primary-bg': hsl(hue, 80, solidL),
      '--btn-primary-border': hsl(hue, 80, solidL),
      '--btn-primary-color': '#ffffff',
      '--btn-primary-hover-bg': hsl(hue, 82, 28),
      '--btn-primary-hover-border': hsl(hue, 82, 28),
      '--btn-primary-active-bg': hsl(hue, 85, 24),
      '--btn-primary-active-border': hsl(hue, 85, 24),
      '--btn-primary-plain-bg': 'rgba(' + rgb + ', 0.08)',
      '--btn-primary-plain-border': 'rgba(' + rgb + ', 0.25)',
      '--btn-primary-plain-color': hsl(hue, 80, txtL),   // V5.31: 原 32% 在页面底仅 4.33:1
      '--btn-primary-plain-hover-bg': 'rgba(' + rgb + ', 0.15)',
      '--btn-primary-plain-hover-border': hsl(hue, 80, 32),
      '--btn-primary-text-color': hsl(hue, 80, txtL),   // V5.31: 原 32% 在页面底仅 4.33:1
      '--gradient': 'linear-gradient(135deg, ' + hsl(hue, 80, gL1) + ' 0%, ' + hsl(hue, 76, gL2) + ' 50%, ' + hsl(hue, 70, gL) + ' 100%)',
      '--gradient-brand': 'linear-gradient(135deg, ' + hsl(hue, 76, gL2) + ' 0%, ' + hsl(hue, 85, gL1) + ' 100%)',
      // V5.29: 详情头卡专用浅色面板 (深色前景), 明度按色相自适应到 PANEL_TARGET
      '--primary-text': hsl(hue, 78, txtL),
      '--primary-solid': 'var(--btn-primary-bg)',
      '--primary-on-solid': 'var(--btn-primary-color)',
      '--gradient-panel': 'linear-gradient(135deg, ' + hsl(hue, 62, Math.min(74, _panelL(hue, 45, 14, 58, PANEL_TARGET) + 5)) + ' 0%, ' + hsl(hue, 58, _panelL(hue, 45, 14, 58, PANEL_TARGET)) + ' 100%)',
      '--panel-fg': hsl(hue, 45, 14),
      // V6.9.2: 导航高亮随 hue 联动 (原 dark-pro/gold 块硬编码, 不随主题切换)
      '--qc-nav-item-active': hsl(hue, 80, navL),   // V5.31: 作为文字色 (侧栏/顶部页签), 对淡底 >=4.6:1 (原 hsl(h,80,35) 对 #fcf3d9 仅 3.47:1)
      '--qc-nav-item-active-bg': hsl(hue, 85, 92),
      '--qc-nav-item-active-border': hsl(hue, 75, 48),
      '--qc-nav-badge-bg': hsl(hue, 85, 92),
      '--qc-nav-badge-text': hsl(hue, 80, 35),
      '--qc-ring': hsl(hue, 70, 58),
    };
  }

  // 暗色模式 token (覆盖在 themes.css [data-theme=dark-pro] 基底之上, 同色相高亮)
  function generateDarkTokens(hue) {
    const rgb = hslToRgb(hue, 85, 65);
    // V5.30: 暗色渐变对深字 (--bg-page) 均 >= GRAD_TARGET (原暗端仅 1.72-4.47:1)
    const dL = _gradL(hue, 80, _gradFgDark, 30, 92, false);
    const dL2 = Math.min(94, dL + 8);
    const dL3 = Math.min(96, dL + 16);
    const _mutDark = [22, 35, 59];    // = --qc-muted (dark-pro) —— 暗色下文字实际落在卡片/浅层底上, 取最亮的参考底
    const navD = _gradL(hue, 85, _mutDark, 45, 96, false, 4.6);
    const txtD = _gradL(hue, 85, _mutDark, 45, 96, false, 4.6);
    return {
      '--primary-color': hsl(hue, 85, 65),
      '--primary-rgb': rgb,
      '--color-primary': hsl(hue, 85, 65),
      '--qc-primary': hsl(hue, 90, 65),
      '--qc-primary-50': hsl(hue, 50, 18),
      '--qc-primary-100': hsl(hue, 55, 22),
      '--qc-primary-200': hsl(hue, 55, 26),
      '--qc-primary-300': hsl(hue, 60, 30),
      '--qc-primary-400': hsl(hue, 65, 38),
      '--qc-primary-500': hsl(hue, 80, 52),
      '--qc-primary-600': hsl(hue, 90, 65),
      '--qc-primary-700': hsl(hue, 92, 72),
      '--qc-primary-800': hsl(hue, 90, 80),
      '--qc-primary-900': hsl(hue, 92, 88),
      '--qc-primary-foreground': '#101014',
      '--text-link': hsl(hue, 85, 65),
      '--secondary-color': hsl(hue, 70, 60),
      '--card-border': hsl(hue, 30, 25),
      '--bg-selected': 'rgba(' + rgb + ', 0.10)',
      '--btn-primary-bg': hsl(hue, 85, 65),
      '--btn-primary-border': hsl(hue, 85, 65),
      '--btn-primary-color': '#101014',
      '--btn-primary-hover-bg': hsl(hue, 80, 72),
      '--btn-primary-hover-border': hsl(hue, 80, 72),
      '--btn-primary-active-bg': hsl(hue, 75, 80),
      '--btn-primary-active-border': hsl(hue, 75, 80),
      '--btn-primary-plain-bg': 'rgba(' + rgb + ', 0.08)',
      '--btn-primary-plain-border': 'rgba(' + rgb + ', 0.25)',
      '--btn-primary-plain-color': hsl(hue, 85, 65),
      '--btn-primary-plain-hover-bg': 'rgba(' + rgb + ', 0.15)',
      '--btn-primary-plain-hover-border': hsl(hue, 85, 65),
      '--btn-primary-text-color': hsl(hue, 85, 65),
      '--gradient': 'linear-gradient(135deg, ' + hsl(hue, 80, dL) + ' 0%, ' + hsl(hue, 85, dL2) + ' 50%, ' + hsl(hue, 85, dL3) + ' 100%)',
      '--gradient-brand': 'linear-gradient(135deg, ' + hsl(hue, 85, dL3) + ' 0%, ' + hsl(hue, 80, dL) + ' 100%)',
      // V5.29: 详情头卡专用浅色面板 (暗色模式同样走面板令牌, 深浅观感一致)
      '--primary-text': hsl(hue, 85, txtD),
      '--primary-solid': 'var(--btn-primary-bg)',
      '--primary-on-solid': 'var(--btn-primary-color)',
      '--gradient-panel': 'linear-gradient(135deg, ' + hsl(hue, 60, Math.min(76, _panelL(hue, 40, 12, 55, PANEL_TARGET) + 5)) + ' 0%, ' + hsl(hue, 55, _panelL(hue, 40, 12, 55, PANEL_TARGET)) + ' 100%)',
      '--panel-fg': hsl(hue, 40, 12),
      // V6.9.2: 导航高亮随 hue 联动 (原 dark-pro 块硬编码 #ffd166, 不随主题切换)
      '--qc-nav-item-active': hsl(hue, 85, navD),   // V5.31: 暗色下作为文字色对卡片底 >=4.6:1 (原 65% 对紫色仅 4.44:1)
      '--qc-nav-item-active-bg': 'rgba(' + rgb + ', 0.10)',
      '--qc-nav-item-active-border': hsl(hue, 85, 65),
      '--qc-nav-badge-bg': 'rgba(' + rgb + ', 0.12)',
      '--qc-nav-badge-text': hsl(hue, 85, 65),
      '--qc-ring': hsl(hue, 85, 65),
    };
  }

  function prefersDark() {
    return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function normalizeHue(h) {
    h = parseInt(h, 10);
    if (isNaN(h)) return 45;
    return Math.max(0, Math.min(359, h));
  }

  // 唯一权威: 应用主题。modeOrLegacy = 'light'|'dark'|'system' 或旧主题名 (legacy 兼容)
  // 返回 { mode, hue } — 解析后的实际模式与色相
  function applyTheme(modeOrLegacy, hue) {
    let mode = modeOrLegacy || 'light';
    let h = (hue == null || hue === '') ? null : hue;
    if (LEGACY_MAP[modeOrLegacy]) {
      const m = LEGACY_MAP[modeOrLegacy];
      mode = m[0];
      if (h == null) h = m[1];
    }
    if (mode === 'system') {
      mode = prefersDark() ? 'dark' : 'light';
    }
    const isDark = mode === 'dark';
    h = normalizeHue(h == null ? 45 : h);
    const root = document.documentElement;
    root.setAttribute('data-theme', isDark ? 'dark-pro' : 'gold');
    root.setAttribute('data-theme-mode', isDark ? 'dark' : 'light');
    const tokens = isDark ? generateDarkTokens(h) : generateLightTokens(h);
    Object.keys(tokens).forEach(function (k) { root.style.setProperty(k, tokens[k]); });
    try {
      localStorage.setItem('quant_theme_mode', isDark ? 'dark' : 'light');
      localStorage.setItem('quant_theme_hue', String(h));
    } catch (e) { /* 存储不可用则仅会话生效 */ }
    return { mode: isDark ? 'dark' : 'light', hue: h };
  }

  // 存量迁移: 检测旧 quant_theme (8 主题名) → 返回 { mode, hue } 或 null
  // 若已存在新色相偏好 (quant_theme_hue / 新模型已写入) 则不重复迁移 (一次写入)
  function migrateLegacyTheme() {
    const saved = localStorage.getItem('quant_theme');
    if (!saved || !LEGACY_MAP[saved]) return null;
    if (localStorage.getItem('quant_theme_hue') !== null) return null;
    const m = LEGACY_MAP[saved];
    return { mode: m[0], hue: m[1] };
  }

  // 启动恢复: 优先 preferences (mode/hue) → 旧 quant_theme 迁移 → 默认金色明色
  function init() {
    const prefs = (window.__quantModules && window.__quantModules.preferences)
      ? window.__quantModules.preferences.getLocal() : {};
    let mode = prefs.theme || 'system';
    let hue = (prefs.theme_hue != null && prefs.theme_hue !== '') ? prefs.theme_hue : null;
    const legacy = migrateLegacyTheme();
    if (hue == null && legacy) { mode = legacy.mode; hue = legacy.hue; }
    if (hue == null) hue = 45;
    return applyTheme(mode, hue);
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.themes = {
    HUES: HUES,
    LEGACY_MAP: LEGACY_MAP,
    legacyThemes: legacyThemes,
    generateLightTokens: generateLightTokens,
    generateDarkTokens: generateDarkTokens,
    migrateLegacyTheme: migrateLegacyTheme,
    applyTheme: applyTheme,
    init: init,
  };

  // 启动立即应用 (首屏样式就绪)
  init();
})();
