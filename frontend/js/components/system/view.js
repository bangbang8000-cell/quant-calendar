// 6.3.0 (T-6.3.0.5): 系统页模板装配 —— 片段按 + 顺序拼接，等价于拆分前的内联模板
window.__quantModules = window.__quantModules || {};
window.__quantModules.systemPage = window.__quantModules.systemPage || {};
// v7.26: 为守住单文件 700 行上限，拆出 part1b（数据源页前半 + Tushare 表单），拼接顺序不变。
window.__quantModules.systemPage.view = window.__quantModules.systemPage.part1
  + window.__quantModules.systemPage.part1b + window.__quantModules.systemPage.part2;
