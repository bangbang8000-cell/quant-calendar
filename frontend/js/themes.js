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

  // 明色模式 token (覆盖在 themes.css [data-theme=gold] 基底之上)
  function generateLightTokens(hue) {
    const rgb = hslToRgb(hue, 75, 42);
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
      '--card-border': hsl(hue, 55, 82),
      '--bg-selected': 'rgba(' + rgb + ', 0.08)',
      '--btn-primary-bg': hsl(hue, 80, 42),
      '--btn-primary-border': hsl(hue, 80, 42),
      '--btn-primary-color': '#ffffff',
      '--btn-primary-hover-bg': hsl(hue, 82, 36),
      '--btn-primary-hover-border': hsl(hue, 82, 36),
      '--btn-primary-active-bg': hsl(hue, 85, 30),
      '--btn-primary-active-border': hsl(hue, 85, 30),
      '--btn-primary-plain-bg': 'rgba(' + rgb + ', 0.08)',
      '--btn-primary-plain-border': 'rgba(' + rgb + ', 0.25)',
      '--btn-primary-plain-color': hsl(hue, 80, 42),
      '--btn-primary-plain-hover-bg': 'rgba(' + rgb + ', 0.15)',
      '--btn-primary-plain-hover-border': hsl(hue, 80, 42),
      '--btn-primary-text-color': hsl(hue, 80, 42),
      '--gradient': 'linear-gradient(135deg, ' + hsl(hue, 80, 30) + ' 0%, ' + hsl(hue, 75, 42) + ' 50%, ' + hsl(hue, 70, 55) + ' 100%)',
      '--gradient-brand': 'linear-gradient(135deg, ' + hsl(hue, 75, 42) + ' 0%, ' + hsl(hue, 85, 30) + ' 100%)',
    };
  }

  // 暗色模式 token (覆盖在 themes.css [data-theme=dark-pro] 基底之上, 同色相高亮)
  function generateDarkTokens(hue) {
    const rgb = hslToRgb(hue, 85, 65);
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
      '--gradient': 'linear-gradient(135deg, ' + hsl(hue, 80, 35) + ' 0%, ' + hsl(hue, 85, 50) + ' 50%, ' + hsl(hue, 85, 65) + ' 100%)',
      '--gradient-brand': 'linear-gradient(135deg, ' + hsl(hue, 85, 65) + ' 0%, ' + hsl(hue, 80, 40) + ' 100%)',
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
