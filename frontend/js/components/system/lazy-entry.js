// v7.18 (FR-501): 系统域懒加载入口 — 一个域一个 chunk, 一次网络往返。
// 内部顺序不可调换: 片段(view-part*) 必须先于装配(view.js),
// 装配必须先于注册(page.js) —— 注册对象在创建时即读取 template 值。
// (原静态 import 顺序自 main.js 原样迁移, 语义不变)
import './view-part1.js'
// v7.26 (FR-15): 拆分出 part1b 以守住单文件 700 行; 拼接顺序在 view.js 中保持一致
import './view-part1b.js'
import './view-part2.js'
import './view.js'
import '../system-page.js'
