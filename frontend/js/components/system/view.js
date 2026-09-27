// 6.3.0 (T-6.3.0.5): 系统页模板装配 —— 片段按 + 顺序拼接，等价于拆分前的内联模板
window.__quantModules = window.__quantModules || {};
window.__quantModules.systemPage = window.__quantModules.systemPage || {};
window.__quantModules.systemPage.view = window.__quantModules.systemPage.part1 + window.__quantModules.systemPage.part2;
