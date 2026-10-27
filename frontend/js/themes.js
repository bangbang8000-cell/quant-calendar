// quant-calendar: themes module v6.1
// V6.1 (PRD-6.1 F5): 主题模型收敛 — 模式(light/dark/system) + 主题色色相(hue)
//   - 运行时仅保留「明/暗」两套基底 (themes.css [data-theme=gold / dark-pro] 复用, 不重写 CSS)
//   - 主色由 HSL 生成并以内联 CSS 变量覆盖; 暗色模式同色相提亮保证对比度
//   - 兼容旧调用 applyTheme(legacyThemeName) — 经 LEGACY_MAP 自动迁移
// applyTheme 仍为全局唯一权威 (data-theme / data-theme-mode / 内联 token / localStorage 兜底)
(function () {

  // 色相预设: 金/蓝/红/绿/紫/粉 + 青/橙/靛 (6.2.1 F11 扩展)
  const HUES = [45, 220, 0, 140, 270, 320, 180, 25, 250];

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
  // V5.12.2 (FR-5.12.2.1): 按目标相对亮度反解明度
  function _lumL(hue, sat, targetLum) {
    var lo = 8, hi = 92;
    for (var i = 0; i < 26; i++) {
      var mid = (lo + hi) / 2;
      if (_panelLum(_panelTuple(hue, sat, mid)) < targetLum) lo = mid; else hi = mid;
    }
    return Math.round(hi * 10) / 10;
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

  // ===== V5.12.1 (UX-7): 中性族随色相联动 =====
  // 问题: [data-theme=gold] / :root 里的 13 个「表面/描边/文字中性」令牌是硬编码暖色
  //   (hsl 36~48°), themes.js 只联动品牌色 —— 换到蓝/绿/紫等色相后画布、卡片头、表头、
  //   标签底、悬浮态、金描边仍是米黄, 与冷色主色冲突。
  // 解法: 中性能量梯度按「同色相 + 低饱和」生成 (明度沿用原值), 于是
  //   - 金色(hue=45) 仍是暖米色, 只是黄味略降;
  //   - 蓝/绿/紫/红/粉 得到各自色相的中性面, 不再有米黄框。
  // 语义色底 (--badge-success/info/warning-bg) 不参与联动 —— 它们承载语义, 与色相无关。
  function _neutralRamp(hue, mode) {
    var out = {};
    if (mode === 'light') {
      // 6.5.6 (A1): 画布/凹陷面下拉, 使相邻表面亮度比 >= 1.18 (原 1.04:1 面层级不可辨)
      out['--qc-neutral-50']  = hsl(hue, 16, 91);
      out['--qc-neutral-100'] = hsl(hue, 16, 90);
      out['--qc-neutral-200'] = hsl(hue, 14, 90);
      out['--qc-neutral-300'] = hsl(hue, 12, 83);
      out['--qc-neutral-400'] = hsl(hue, 10, 68);
      out['--qc-neutral-500'] = hsl(hue, 10, 53);
      out['--qc-neutral-600'] = hsl(hue, 10, 40);
      out['--qc-neutral-700'] = hsl(hue, 10, 30);
      out['--qc-neutral-800'] = hsl(hue, 10, 20);
      out['--qc-neutral-900'] = hsl(hue, 10, 12);
      out['--qc-background'] = hsl(hue, 16, 91);
      out['--qc-muted'] = hsl(hue, 16, 90);
      // 6.5.6 (A2): 容器描边按色相求解至 >=2.85:1 (对卡片白); 取满足目标的最深(最轻)明度
      out['--qc-border'] = _borderL(hue, 13, _gradFgWhite, 2.85, 'max');
      out['--chart-axis'] = hsl(hue, 12, 55);
      out['--chart-split'] = hsl(hue, 10, 88);
      out['--qc-foreground'] = hsl(hue, 10, 12);
      out['--qc-muted-foreground'] = hsl(hue, 9, 38);
      out['--qc-nav-item-default'] = hsl(hue, 9, 38);
      out['--qc-nav-item-hover'] = hsl(hue, 10, 12);
      out['--qc-nav-group-label'] = hsl(hue, 9, 40);
      out['--qc-nav-bg'] = '#ffffff';
      out['--bg-page'] = hsl(hue, 20, 91);
      out['--bg-stripe'] = hsl(hue, 20, 91);
      out['--bg-card-header'] = hsl(hue, 24, 96);
      out['--card-gradient-header'] = 'linear-gradient(135deg, ' + hsl(hue, 24, 96) + ' 0%, #ffffff 100%)';
      out['--bg-hover'] = hsl(hue, 26, 94);
      out['--bg-tertiary'] = hsl(hue, 14, 93);
      out['--badge-gold-bg'] = hsl(hue, 26, 96);
      out['--gold-bg'] = hsl(hue, 20, 91);
      out['--border-light'] = hsl(hue, 22, 89);
      out['--border-base'] = hsl(hue, 24, 79);
      out['--border-color'] = hsl(hue, 14, 88);
      out['--text-primary'] = hsl(hue, 12, 12);
      out['--text-secondary'] = hsl(hue, 12, 32);
      out['--text-tertiary'] = hsl(hue, 14, 37);
      out['--text-disabled'] = hsl(hue, 9, _gradL(hue, 9, _rgbTuple(hue, 16, 91), 25, 70, true, 3.2));
      // 与暗色分支保持键集一致 (applyTheme 只覆盖不清理, 缺键会导致跨模式残留)
      out['--qc-card'] = '#ffffff';
      out['--qc-popover'] = '#ffffff';
      out['--qc-nav-border'] = hsl(hue, 12, 72);
      out['--qc-nav-item-hover-bg'] = hsl(hue, 16, 95);
      out['--qc-overlay'] = 'rgba(31, 29, 26, 0.5)';
      out['--bg-card'] = '#ffffff';
      out['--surface'] = '#ffffff';
      out['--border-heavy'] = hsl(hue, 22, 72);
      // V6.10 (配色专项·A): 表面角色令牌 — 明暗同名契约, 消除「CSS 硬编码面 vs 运行期生成面」双面族
      out['--surface-canvas'] = hsl(hue, 16, 91);
      out['--surface-card'] = '#ffffff';
      out['--surface-raised'] = '#ffffff';
      out['--surface-sunken'] = hsl(hue, 16, 90);
      out['--surface-input'] = '#ffffff';
      out['--surface-hover'] = hsl(hue, 26, 94);
      out['--border-strong'] = hsl(hue, 22, 72);
      out['--scrollbar-thumb'] = 'rgba(' + hslToRgb(hue, 12, 72) + ', 0.5)';
      out['--bg-page-rgb'] = hslToRgb(hue, 20, 91);
    } else {
      // 暗色: 色相联动「极低饱和暖中性」基调 (6.5.6 Gate0-D1a: 取代原固定海军蓝 #0b1220/#101a2e;
      //   原方案在运行期从未生效, 实测 hue45 产出暖黑 #161512)
      out['--qc-background'] = hsl(hue, 10, 6);
      out['--qc-card'] = hsl(hue, 11, 14);
      out['--qc-popover'] = hsl(hue, 11, 14);
      out['--qc-muted'] = hsl(hue, 12, 18);
      // 6.5.6 (A2): 容器描边按色相求解至 >=2.9:1 (冷色相同明度下亮度更低, 固定 L 无法跨色相一致)
      out['--qc-border'] = _borderL(hue, 14, _rgbTuple(hue, 11, 14), 2.9);
      out['--chart-axis'] = hsl(hue, 16, 52);
      out['--chart-split'] = hsl(hue, 14, 26);
      out['--qc-nav-bg'] = hsl(hue, 10, 9);
      out['--qc-nav-border'] = hsl(hue, 13, 22);
      out['--qc-nav-item-hover-bg'] = hsl(hue, 12, 14);
      out['--bg-page'] = hsl(hue, 10, 6);
      out['--bg-card'] = hsl(hue, 11, 14);
      out['--bg-card-header'] = hsl(hue, 12, 18);
      out['--bg-stripe'] = hsl(hue, 10, 9);
      out['--bg-hover'] = hsl(hue, 12, 18);
      out['--bg-tertiary'] = hsl(hue, 12, 18);
      out['--border-light'] = hsl(hue, 13, 18);
      out['--border-base'] = hsl(hue, 14, 26);
      out['--border-heavy'] = hsl(hue, 16, 38);
      out['--border-color'] = hsl(hue, 13, 22);
      out['--surface'] = hsl(hue, 11, 14);
      // V6.10 (配色专项·A): 表面角色令牌 — 统一到色相联动暖中性族, 替代海军蓝硬编码面
      //   (#0b1220/#101a2e/#16233b/#0d1526/#3a4a6a 等运行时未被覆盖的残留面)
      out['--surface-canvas'] = hsl(hue, 10, 6);
      out['--surface-card'] = hsl(hue, 11, 14);
      out['--surface-raised'] = hsl(hue, 12, 20);
      out['--surface-sunken'] = hsl(hue, 12, 4);
      out['--surface-input'] = hsl(hue, 12, 9);
      out['--surface-hover'] = hsl(hue, 12, 19);
      out['--border-strong'] = hsl(hue, 16, 42);
      // 6.5.6 (A3): 曾回落到 themes.css 海军蓝硬编码的 4 个令牌, 改为运行期提供
      //   --card-border(#1a2a44 1.16:1) / --bg-code(#0f172a 1.07:1) / --text-disabled(#64748b 冷灰)
      out['--card-border'] = out['--qc-border'];
      out['--bg-code'] = hsl(hue, 12, 4);
      out['--text-disabled'] = hsl(hue, 9, 58);
      out['--qc-muted-foreground'] = hsl(hue, 8, 64);
      // 6.5.6 (A3): 暗色文字原为 CSS 冷蓝灰 (#e6f1ff/#a0aec8/#8b9bb5), 压在暖底上发蓝;
      //   改为色相联动暖中性并保持三级明度序 (primary > secondary > tertiary)
      out['--qc-foreground'] = hsl(hue, 8, 93);
      out['--text-primary'] = hsl(hue, 8, 93);
      out['--text-secondary'] = hsl(hue, 8, 72);
      out['--text-tertiary'] = hsl(hue, 8, 62);
      out['--scrollbar-thumb'] = 'rgba(' + hslToRgb(hue, 16, 52) + ', 0.5)';
      out['--bg-page-rgb'] = hslToRgb(hue, 10, 6);
      out['--qc-overlay'] = 'rgba(0, 0, 0, 0.6)';
    }
    return out;
  }

  // ===== V5.30: 品牌渐变对比度求解 (P0-3) =====
  // 16+4 处渐变元素 (页签激活态/持仓天数/编号徽标/进度条/AI 悬浮球等) 在亮色下用白字、暗色下用深字。
  // 固定目标对比度反解**该色相允许的最亮档**, 保证渐变最浅的一档仍达标 (暖色可深、冷色自动留浅),
  // 再据此外推其余档位, 使渐变保持层次而非退化成实色。
  const GRAD_TARGET = 4.6;
  var _gradFgWhite = [255, 255, 255];
  // V6.10 (配色专项·B): 暗色渐变文字的实际颜色是 --bg-page = hsl(hue,10%,8%) (随色相变化),
  //   原常量 [11,18,32](#0b1220 旧海军蓝) 比它更深 → 求解器校验值虚高, 实测 4.48 < 4.5。
  //   改为按色相取真实前景色, 求解值与渲染值一致。
  function _gradFgDarkOf(hue) {
    return _rgbTuple(hue, 10, 6);
  }
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
  function _rgbTuple(hue, sat, light) {
    return hslToRgb(hue, sat, light).split(',').map(function (x) { return parseInt(x, 10); });
  }
  // 6.5.6 (A2): 容器描边按目标对比度反解明度。
  //   同一明度在不同色相下的相对亮度差异很大 (暗色下 hue270 仅 2.47:1 而同档 hue45 为 3.44:1),
  //   固定 L 无法跨色相保持一致的边界强度 → 与品牌色求解器 (GRAD_TARGET) 同一套思路。
  //   dir='min' 用于暗色 (底色深, 明度越高对比越强, 取满足目标的最小明度避免过亮);
  //   dir='max' 用于亮色 (底色浅, 明度越低对比越强, 取满足目标的最大明度避免过深)。
  function _borderL(hue, sat, fg, target, dir) {
    var wantMax = (dir === 'max');
    return hsl(hue, sat, _gradL(hue, sat, fg, 10, 82, wantMax, target));
  }

  // 明色模式 token (覆盖在 themes.css [data-theme=gold] 基底之上)
  function generateLightTokens(hue) {
    // V5.12.2: 主色/色阶按感知亮度求解 (消除「蓝暗绿亮」)
    const pL = _lumL(hue, 75, 0.18);
    const pL5 = _lumL(hue, 75, 0.26);
    const pL4 = _lumL(hue, 70, 0.30);
    const pL7 = _lumL(hue, 85, 0.12);
    const rgb = hslToRgb(hue, 75, pL);
    // V5.12.1: 中性面/描边/文字中性随色相 (见 _neutralRamp)
    // V5.30: 渐变三档对白字均 >= GRAD_TARGET (原最浅档仅 2.74:1, 14px 白字不达 AA)
    const gL = _gradL(hue, 68, _gradFgWhite, 14, 62, true);
    const gL2 = Math.max(12, gL - 5);
    const gL1 = Math.max(10, gL - 11);
    // V5.31: 品牌文字/实底 —— 文字色对白底 4.8:1, 实底色对白字 >=4.6:1 (原 --primary-color hsl(h,75,42) 仅 2.88:1)
    const _mut = hslToRgb(hue, 16, 90).split(',').map(function (x) { return parseInt(x, 10); });
    const _navActiveBg = hslToRgb(hue, 85, 92).split(',').map(function (x) { return parseInt(x, 10); });
    const txtL = _gradL(hue, 78, _mut, 10, 58, true, 4.6);   // 对淡底求解 (页面/表格头也达标)
    // V5.12.1: 导航激活文字落在「激活底色 hsl(hue,85,92)」上 (比 muted 更暗), 必须对它求解
    const navL = _gradL(hue, 80, _navActiveBg, 10, 58, true, 4.6);
    // V5.31: 实底色 = 原 32% 与「对白字达标的最亮值」取小 —— 绿/青等亮色相在原 32% 仅 3.99:1, 自动压深
    const solidL = Math.min(32, _gradL(hue, 80, _gradFgWhite, 8, 60, true, 4.6));   // 实底实际用 80% 饱和度, 需按同一饱和度求解
    return {
      ..._neutralRamp(hue, 'light'),
      '--primary-color': hsl(hue, 75, pL),
      '--primary-rgb': rgb,
      '--color-primary': hsl(hue, 75, pL),
      '--qc-primary': hsl(hue, 75, pL),
      '--qc-primary-50': hsl(hue, 90, 96),
      '--qc-primary-100': hsl(hue, 85, 92),
      '--qc-primary-200': hsl(hue, 80, 84),
      '--qc-primary-300': hsl(hue, 75, 72),
      '--qc-primary-400': hsl(hue, 70, pL4),
      '--qc-primary-500': hsl(hue, 75, pL5),
      '--qc-primary-600': hsl(hue, 80, pL),
      '--qc-primary-700': hsl(hue, 85, pL7),
      '--qc-primary-800': hsl(hue, 88, 28),
      '--qc-primary-900': hsl(hue, 90, 20),
      '--text-link': hsl(hue, 78, txtL),   // V6.10 (B): 原 hsl(h,70,40) 亮色金 3.27:1 / 绿 2.93:1, 与品牌文字同求解器
      '--secondary-color': hsl(hue, 70, 55),
      '--card-border': hsl(hue, 22, 80),
      '--bg-selected': 'rgba(' + rgb + ', 0.08)',
      // V5.7.2 (UX-T1): 亮色主按钮对比度达标 — lightness 42%→32% (白字 2.92:1→4.53:1)
      // 6.5.7 (B1): 实心组 7 个令牌收敛为单一 --primary-solid —— 主按钮已改「浅底彩字」,
      //   原 --btn-primary-bg/color/hover-*/active-* 无 CSS 消费方 (死令牌) 已删除;
      //   --primary-solid 现仅作 EP 主色桥 (Switch/Progress/Slider 填充) 与页面级实底 CTA 用。
      '--primary-solid': hsl(hue, 80, solidL),
      '--btn-primary-plain-bg': 'rgba(' + rgb + ', 0.08)',
      '--btn-primary-plain-border': 'rgba(' + rgb + ', 0.25)',
      '--btn-primary-plain-color': hsl(hue, 80, txtL),   // V5.31: 原 32% 在页面底仅 4.33:1
      '--btn-primary-plain-hover-bg': 'rgba(' + rgb + ', 0.15)',
      '--btn-primary-plain-hover-border': hsl(hue, 80, 32),
      '--btn-primary-text-color': hsl(hue, 80, txtL),   // V5.31: 原 32% 在页面底仅 4.33:1
      '--gradient-brand': 'linear-gradient(135deg, ' + hsl(hue, 76, gL2) + ' 0%, ' + hsl(hue, 85, gL1) + ' 100%)',
      // V5.29: 详情头卡专用浅色面板 (深色前景), 明度按色相自适应到 PANEL_TARGET
      '--primary-text': hsl(hue, 78, txtL),

      '--gradient-panel': 'linear-gradient(135deg, ' + hsl(hue, 62, Math.min(74, _panelL(hue, 45, 14, 58, PANEL_TARGET) + 5)) + ' 0%, ' + hsl(hue, 58, _panelL(hue, 45, 14, 58, PANEL_TARGET)) + ' 100%)',
      '--panel-fg': hsl(hue, 45, 14),
      // V6.9.2: 导航高亮随 hue 联动 (原 dark-pro/gold 块硬编码, 不随主题切换)
      '--qc-nav-item-active': hsl(hue, 80, navL),   // V5.31: 作为文字色 (侧栏/顶部页签), 对淡底 >=4.6:1 (原 hsl(h,80,35) 对 #fcf3d9 仅 3.47:1)
      '--qc-nav-item-active-bg': hsl(hue, 85, 92),
      '--qc-nav-item-active-border': hsl(hue, 75, 48),
      '--qc-nav-badge-bg': hsl(hue, 85, 92),
      '--qc-nav-badge-text': hsl(hue, 80, navL),   // V6.10 (B): 原固定 35% 压在激活底色上仅 3.08:1(绿)/3.49:1(金)
      // V6.10 (配色专项·B): 焦点环/控件边界按对比度求解 (原 --qc-ring hsl(h,70,58) 对页底仅 1.67:1;
      //   --qc-input hsl(h,12,72) 对卡片仅 ~2.0:1, 均低于 WCAG 1.4.11 的 3:1 组件边界要求)
      '--qc-ring': hsl(hue, 75, _gradL(hue, 75, _rgbTuple(hue, 16, 91), 25, 70, true, 3.2)),
      // V6.11 (需求轮4): 浅底彩字按钮/头像/分段控件的文字 —— 对最浅的 soft 底 (--qc-primary-200) 求解
      '--brand-soft-text': hsl(hue, 80, _gradL(hue, 80, _rgbTuple(hue, 80, 84), 10, 58, true, 4.6)),
      '--border-control': hsl(hue, 16, _gradL(hue, 16, _rgbTuple(hue, 16, 91), 30, 80, true, 3.2)),
    };
  }

  // 暗色模式 token (覆盖在 themes.css [data-theme=dark-pro] 基底之上, 同色相高亮)
  function generateDarkTokens(hue) {
    // V5.12.2: 暗色主色同样归一 (目标 0.34)
    const pLd = _lumL(hue, 85, 0.34);
    const pLd5 = _lumL(hue, 85, 0.46);
    const rgb = hslToRgb(hue, 85, pLd);
    // V5.12.1: 暗色中性面同样按色相做极低饱和倾斜
    // V5.30: 暗色渐变对深字 (--bg-page) 均 >= GRAD_TARGET (原暗端仅 1.72-4.47:1)
    // V6.10 (配色专项·B): 渐变前景取该色相真实的 --bg-page (hsl(hue,10%,8%))
    const dL = _gradL(hue, 80, _gradFgDarkOf(hue), 30, 92, false);
    const dL2 = Math.min(94, dL + 8);
    const dL3 = Math.min(96, dL + 16);
    const _mutDark = [22, 35, 59];    // = 旧 --qc-muted (dark-pro) —— 导航激活面参考底
    const _p100Dark = _rgbTuple(hue, 55, 22);
    // V6.10 (B): 品牌文字档改为对「暗色下最亮的品牌淡底」(--qc-primary-100 hsl(h,55,22%)) 求解。
    //   原参考底 [22,35,59] 比实际淡底更暗, 导致品牌 tag / 文字按钮在蓝红粉等色相仅 4.40:1。
    // V6.10 (B): 导航激活/徽标底 = 品牌色 12% 叠在 --qc-nav-bg 上 (比 _mutDark 更亮),
    //   原参考底偏差使蓝/粉等色相的徽标文字仅 4.41:1。改为对真实复合底求解。
    const _navBgDark = _rgbTuple(hue, 10, 9);
    const _rgbArr = rgb.split(',').map(function (x) { return parseInt(x, 10); });
    const _navTintDark = [0, 1, 2].map(function (i) { return Math.round(_rgbArr[i] * 0.12 + _navBgDark[i] * 0.88); });
    const navD = _gradL(hue, 85, _navTintDark, 45, 96, false, 4.6);
    const txtD = _gradL(hue, 85, _p100Dark, 45, 96, false, 4.6);
    // V6.10 (配色专项·B): 700/800 在暗色下作为「文字色」使用 (文字按钮/金色 chip/导航徽标),
    //   实际落在 --qc-primary-100 (hsl(h,55,22%)) 这类浅色块上 —— 原固定 72%/80% 在紫色相仅 4.44:1。
    //   改为对该背景求解, 保证 12 色相全部 >=4.6:1。
    const p700d = Math.min(94, _gradL(hue, 92, _p100Dark, 45, 96, false, 4.6));
    const p800d = Math.min(96, p700d + 6);
    return {
      ..._neutralRamp(hue, 'dark'),
      '--primary-color': hsl(hue, 85, pLd),
      '--primary-rgb': rgb,
      '--color-primary': hsl(hue, 85, pLd),
      '--qc-primary': hsl(hue, 90, pLd),
      '--qc-primary-50': hsl(hue, 50, 18),
      '--qc-primary-100': hsl(hue, 55, 22),
      '--qc-primary-200': hsl(hue, 55, 26),
      '--qc-primary-300': hsl(hue, 60, 30),
      '--qc-primary-400': hsl(hue, 65, 38),
      '--qc-primary-500': hsl(hue, 85, pLd5),
      '--qc-primary-600': hsl(hue, 90, pLd),
      '--qc-primary-700': hsl(hue, 92, p700d),
      '--qc-primary-800': hsl(hue, 90, p800d),
      '--qc-primary-900': hsl(hue, 92, Math.min(98, p800d + 8)),
      '--text-link': hsl(hue, 85, txtD),   // V6.10 (B): 原固定 65% 在紫色相 4.43:1, 改用品牌文字求解档
      '--secondary-color': hsl(hue, 70, 60),
      '--card-border': hsl(hue, 30, 25),
      '--bg-selected': 'rgba(' + rgb + ', 0.10)',
      // 6.5.7 (B1/B3): 实心组收敛为单一 --primary-solid; 暗色档去高亮 ——
      //   原 hsl(h,85,65) 相对卡片 4.09~10.46:1 是屏上最亮元素 (过曝), 收敛到 hsl(h,45,40)
      //   (相对卡片 1.9~3.9:1), 既不再刺眼也仍可作为 Switch/Progress/Slider 的填充色。
      '--primary-solid': hsl(hue, 45, 39),
      '--btn-primary-plain-bg': 'rgba(' + rgb + ', 0.08)',
      '--btn-primary-plain-border': 'rgba(' + rgb + ', 0.25)',
      '--btn-primary-plain-color': hsl(hue, 85, txtD),   // V6.10 (B): 文字按钮落在卡片上, 原固定 65% 紫色仅 4.44:1
      '--btn-primary-plain-hover-bg': 'rgba(' + rgb + ', 0.15)',
      '--btn-primary-plain-hover-border': hsl(hue, 85, 65),
      '--btn-primary-text-color': hsl(hue, 85, txtD),   // V6.10 (B): 文字按钮 (.el-button--primary.is-text) 对卡片 >=4.6:1
      '--gradient-brand': 'linear-gradient(135deg, ' + hsl(hue, 85, dL3) + ' 0%, ' + hsl(hue, 80, dL) + ' 100%)',
      // V5.29: 详情头卡专用浅色面板 (暗色模式同样走面板令牌, 深浅观感一致)
      '--primary-text': hsl(hue, 85, txtD),

      '--gradient-panel': 'linear-gradient(135deg, ' + hsl(hue, 60, Math.min(76, _panelL(hue, 40, 12, 55, PANEL_TARGET) + 5)) + ' 0%, ' + hsl(hue, 55, _panelL(hue, 40, 12, 55, PANEL_TARGET)) + ' 100%)',
      '--panel-fg': hsl(hue, 40, 12),
      // V6.9.2: 导航高亮随 hue 联动 (原 dark-pro 块硬编码 #ffd166, 不随主题切换)
      '--qc-nav-item-active': hsl(hue, 85, navD),   // V5.31: 暗色下作为文字色对卡片底 >=4.6:1 (原 65% 对紫色仅 4.44:1)
      '--qc-nav-item-active-bg': 'rgba(' + rgb + ', 0.10)',
      '--qc-nav-item-active-border': hsl(hue, 85, 65),
      '--qc-nav-badge-bg': 'rgba(' + rgb + ', 0.12)',
      '--qc-nav-badge-text': hsl(hue, 85, navD),   // V6.10 (B): 原固定 65% 在紫色相仅 3.88:1
      // V6.10 (B): 暗色控件边界 —— 对卡片底求解 >=3:1 的最「收敛」档 (WCAG 1.4.11)
      '--border-control': hsl(hue, 16, _gradL(hue, 16, _rgbTuple(hue, 11, 14), 25, 70, false, 3.2)),
      // V6.11 (需求轮4): 浅底彩字文字 —— 暗色下 soft 底是 hsl(h,55%,22~26%), 需单独求解
      '--brand-soft-text': hsl(hue, 85, _gradL(hue, 85, _rgbTuple(hue, 55, 26), 45, 96, false, 4.6)),
      '--qc-ring': hsl(hue, 85, 65),
    };
  }

  // V5.12.1: 记录上一次由 applyTheme 写入的内联变量, 用于切换时清理残留
  var _appliedKeys = [];
  // V6.10 (配色专项·C): 原始主题偏好 (保留 'system' 以支持系统主题实时跟随)
  var _pref = { mode: 'light', hue: 45 };
  var _mqBound = false;

  // V6.10 (配色专项·C): PWA/浏览器 UI 色随主题更新 (原 index.html 硬编码 #667eea 靛蓝, 与品牌金/色相无关)
  function _syncBrowserChrome(tokens, isDark) {
    try {
      var meta = document.querySelector('meta[name="theme-color"]');
      if (!meta) return;
      var c = isDark
        ? (tokens['--surface-canvas'] || tokens['--qc-background'])
        : (tokens['--primary-solid'] || tokens['--qc-primary']);
      if (c) meta.setAttribute('content', c);
    } catch (e) { /* 无 meta 或受限环境忽略 */ }
  }

  // V6.10 (配色专项·C): 监听系统明暗变化 —— 原实现只在切换/启动时读取一次, 选「跟随系统」后不实时生效
  function _watchSystemTheme() {
    if (_mqBound || typeof window === 'undefined' || !window.matchMedia) return;
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var handler = function () {
      if (_pref.mode === 'system') applyTheme('system', _pref.hue);
    };
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq.addListener) mq.addListener(handler);
    _mqBound = true;
  }

  function prefersDark() {
    return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // V6.10 (配色专项·C): 「中性无色相」品牌档 —— NEUTRAL_HUE(-1) 表示去彩度, 仅保留明度层次
  var NEUTRAL_HUE = -1;
  function normalizeHue(h) {
    h = parseInt(h, 10);
    if (isNaN(h)) return 45;
    if (h < 0) return NEUTRAL_HUE;
    return Math.max(0, Math.min(359, h));
  }

  // 把整套 token 的彩度归零 (hsl 的 S=0; rgba/三元组按感知亮度取灰)
  function _neutralizeTokens(out) {
    Object.keys(out).forEach(function (k) {
      var v = out[k];
      if (typeof v !== 'string') return;
      if (v.indexOf('hsl(') >= 0) {
        v = v.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g, function (m, hh) { return 'hsl(' + hh + ', 0%'; });
      }
      var m = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(v);
      if (m) {
        var g = Math.round(0.2126 * (+m[1]) + 0.7152 * (+m[2]) + 0.0722 * (+m[3]));
        v = 'rgba(' + g + ', ' + g + ', ' + g + (m[4] || '') + ')';
      }
      if (/^\d+,\s*\d+,\s*\d+$/.test(v)) {
        var p = v.split(',').map(function (x) { return parseInt(x, 10); });
        var g2 = Math.round(0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]);
        v = g2 + ', ' + g2 + ', ' + g2;
      }
      out[k] = v;
    });
    return out;
  }

  // 去彩度会改变同一明度下的感知亮度, 关键文字/焦点/边界令牌需按灰阶重新求解 (契约不降级)
  function _neutralResolve(out, isDark) {
    var tint = _rgbTuple(45, 0, isDark ? 18 : 90);
    var canvas = _rgbTuple(45, 0, isDark ? 6 : 91);
    var card = _rgbTuple(45, 0, isDark ? 14 : 100);
    var txtL = isDark ? _gradL(45, 0, tint, 45, 96, false, 4.6) : _gradL(45, 0, tint, 10, 58, true, 4.6);
    // 导航激活/徽标文字落在 --qc-nav-item-active-bg (亮色 hsl(45,0,92%)) 上, 比通用淡底更暗 → 单独求解
    var navTint = _rgbTuple(45, 0, isDark ? 22 : 92);
    var navL = isDark ? _gradL(45, 0, navTint, 45, 96, false, 4.6) : _gradL(45, 0, navTint, 10, 58, true, 4.6);
    var ringL = isDark ? _gradL(45, 0, canvas, 45, 96, false, 3.2) : _gradL(45, 0, canvas, 25, 70, true, 3.2);
    var bcL = isDark ? _gradL(45, 0, card, 25, 70, false, 3.2) : _gradL(45, 0, canvas, 30, 80, true, 3.2);
    // 6.5.6 (A2): 容器描边在灰阶档单独求解 (去彩度会改变同明度下的感知亮度, 原值回落至 2.69:1)
    var bdL = isDark ? _gradL(45, 0, card, 25, 70, false, 3.0)
                     : _gradL(45, 0, canvas, 20, 80, true, 2.9);
    out['--qc-border'] = 'hsl(45, 0%, ' + bdL + '%)';
    if (isDark) { out['--card-border'] = out['--qc-border']; }
    // V6.11 (需求轮4): soft 变体的文字同样按灰阶重解 (去彩度会改变同明度下的感知亮度)
    var softL = isDark ? _gradL(45, 0, _rgbTuple(45, 0, 26), 45, 96, false, 4.6)
                       : _gradL(45, 0, _rgbTuple(45, 0, 84), 10, 58, true, 4.6);
    out['--brand-soft-text'] = 'hsl(45, 0%, ' + softL + '%)';
    var txt = 'hsl(45, 0%, ' + txtL + '%)';
    out['--primary-text'] = txt;
    out['--text-link'] = txt;
    out['--btn-primary-text-color'] = txt;
    out['--btn-primary-plain-color'] = txt;
    out['--qc-nav-item-active'] = 'hsl(45, 0%, ' + navL + '%)';
    out['--qc-nav-badge-text'] = 'hsl(45, 0%, ' + navL + '%)';
    out['--qc-ring'] = 'hsl(45, 0%, ' + ringL + '%)';
    out['--border-control'] = 'hsl(45, 0%, ' + bcL + '%)';
    // 渐变族与详情头卡面板: 去彩度会显著改变同一明度下的感知亮度 (黄色系尤甚), 必须按灰阶重解,
    //   否则暗色渐变文字 2.55:1、明暗两模式的面板文字 3.38–3.42:1。
    if (isDark) {
      var dL = _gradL(45, 0, _rgbTuple(45, 0, 8), 30, 92, false, 4.6);
      var dL2 = Math.min(94, dL + 8), dL3 = Math.min(96, dL + 16);
      out['--gradient-brand'] = 'linear-gradient(135deg, hsl(45, 0%, ' + dL3 + '%) 0%, hsl(45, 0%, ' + dL + '%) 100%)';
    } else {
      var gL = _gradL(45, 0, _gradFgWhite, 14, 62, true, 4.6);
      var gL2 = Math.max(12, gL - 5), gL1 = Math.max(10, gL - 11);
      out['--gradient-brand'] = 'linear-gradient(135deg, hsl(45, 0%, ' + gL2 + '%) 0%, hsl(45, 0%, ' + gL1 + '%) 100%)';
    }
    var panelL = _panelL(45, 0, 14, 0, PANEL_TARGET);
    out['--gradient-panel'] = 'linear-gradient(135deg, hsl(45, 0%, ' + Math.min(74, panelL + 5) + '%) 0%, hsl(45, 0%, ' + panelL + '%) 100%)';
    out['--panel-fg'] = 'hsl(45, 0%, 14%)';
    return out;
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
    const neutral = (h === NEUTRAL_HUE);
    const root = document.documentElement;
    root.setAttribute('data-theme', isDark ? 'dark-pro' : 'gold');
    root.setAttribute('data-theme-mode', isDark ? 'dark' : 'light');
    root.setAttribute('data-theme-neutral', neutral ? 'true' : 'false');
    let tokens = isDark ? generateDarkTokens(neutral ? 45 : h) : generateLightTokens(neutral ? 45 : h);
    if (neutral) tokens = _neutralResolve(_neutralizeTokens(tokens), isDark);
    // V5.12.1 (关键修复): 应用前先清掉「上一次写入但本次不再提供」的内联变量。
    // 否则明↔暗或不同色相切换时, 上一套的 inline 变量会残留 (实测: 亮色下卡片/头部变暗、
    // 暗色下侧栏文字变深色, 全站对比度崩塌)。
    var keys = Object.keys(tokens);
    for (var _i = 0; _i < _appliedKeys.length; _i++) {
      if (keys.indexOf(_appliedKeys[_i]) === -1) root.style.removeProperty(_appliedKeys[_i]);
    }
    keys.forEach(function (k) { root.style.setProperty(k, tokens[k]); });
    _appliedKeys = keys;
    _pref.mode = (typeof modeOrLegacy === 'string' && modeOrLegacy) ? modeOrLegacy : 'light';
    _pref.hue = h;
    _syncBrowserChrome(tokens, isDark);
    try {
      localStorage.setItem('quant_theme_mode', isDark ? 'dark' : 'light');
      localStorage.setItem('quant_theme_hue', String(h));
    } catch (e) { /* 存储不可用则仅会话生效 */ }
    return { mode: isDark ? 'dark' : 'light', hue: h };
  }

  // V6.11 (需求轮2·批次2·R2-11): 读取「已持久化的色相」—— 旧主题名应用时必须带上传,
  //   否则 LEGACY_MAP 会回退到该主题的默认色相 (gold→45), 把用户选的色相静默覆盖。
  //   实测: 登录/会话恢复路径 applyTheme('gold') 会在主题正确应用 ~120ms 后再覆盖成金色。
  function persistedHue() {
    try {
      var v = localStorage.getItem('quant_theme_hue');
      if (v !== null && v !== '') return normalizeHue(v);
    } catch (e) { /* 存储不可用 */ }
    var P = (typeof window !== 'undefined' && window.__quantModules) ? window.__quantModules.preferences : null;
    if (P && P.getPreference) {
      var h = P.getPreference('theme_hue');
      if (h != null && h !== '') return normalizeHue(h);
    }
    return null;
  }

  // 应用旧主题名 (兼容路径): 保留已持久化色相
  function applyLegacyTheme(name) {
    var h = persistedHue();
    return applyTheme(name, h == null ? undefined : h);
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
    _watchSystemTheme();   // V6.10 (C): 「跟随系统」实时生效
    return applyTheme(mode, hue);
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.themes = {
    HUES: HUES,
    LEGACY_MAP: LEGACY_MAP,
    legacyThemes: legacyThemes,
    NEUTRAL_HUE: NEUTRAL_HUE,
    generateLightTokens: generateLightTokens,
    generateDarkTokens: generateDarkTokens,
    migrateLegacyTheme: migrateLegacyTheme,
    persistedHue: persistedHue,
    applyLegacyTheme: applyLegacyTheme,
    applyTheme: applyTheme,
    init: init,
  };

  // 启动应用主题 (首屏样式就绪)。
  // V6.11: 推迟到微任务 —— preferences.js 与本文件在同一个 bundle 内紧随其后导入,
  //   同步 init() 读不到偏好, 会先用默认金色并把错误的色相写进 localStorage (首屏闪烁 + 状态污染)。
  if (typeof queueMicrotask === 'function') queueMicrotask(init);
  else init();
})();
