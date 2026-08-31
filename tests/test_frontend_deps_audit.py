"""
前端域模块依赖完整性回归 (TC-14.11, v3.14.3) — 防止缺失 dep 导致 ReferenceError 永久转圈

背景: watchlist.js 的 doAiEvaluate 引用 `aiResult` 但 create(deps) 未传入/未解构 →
第 91 行 `aiResult.value = null` 抛 ReferenceError (位于 try 之前) →
aiLoading 永久 true → UI 永久转圈, 且后端日志无任何 /api/ai/evaluate 请求。
同类 bug: `stockKlineChart` 未传入 (watchlistEvaluate/viewAiResult 均崩)。

本测试对每个 `__quantModules.<name>.create(deps)` 域模块做静态审计:
  1. 收集"已声明"标识符 = deps 解构 + Vue 解构 + 本地 const/let/var + 函数参数
     + 捕获参数 + for-of 解构 + 内置全局白名单
  2. 提取所有 `IDENT.xxx` 基标识符引用 (剥除字符串字面量)
  3. 断言: 无引用落在声明集合之外

若缺失 → 该模块存在 ReferenceError 隐患 (与 v3.14.3 修复同一类)。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_DIR = os.path.join(BASE, 'frontend', 'js')

# 内置全局 + 运行时注入 (CDN/插件/浏览器 API)
ALLOWED = {
    'window', 'document', 'Object', 'Array', 'console', 'Vue', 'ElementPlus',
    'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'JSON', 'Math',
    'Date', 'fetch', 'localStorage', 'encodeURIComponent', 'decodeURIComponent',
    'parseInt', 'parseFloat', 'nextTick', 'requestAnimationFrame', 'RegExp',
    'String', 'Number', 'Boolean', 'Promise', 'Map', 'Set', 'Error', 'Symbol',
    'undefined', 'null', 'true', 'false', 'isNaN', 'getComputedStyle', 'navigator',
    'location', 'history', 'URL', 'FormData', 'customElements', 'globalThis',
    'confirm', 'alert', 'location', 'encodeURI', 'decodeURI', 'escape', 'unescape',
    'Infinity', 'NaN', 'WeakMap', 'Proxy', 'Reflect',
    # CDN / 运行时全局
    '__quantModules', 'echarts', 'ElMessage', 'ElMessageBox', 'ElMessage', 'ElLoading',
    'ECharts', 'Vue', 'ElementPlus',
}


def _domain_module_files():
    """含 __quantModules + create(deps) 工厂模式的域模块 (排除 app-logic 编排层/组件)"""
    out = []
    for f in sorted(os.listdir(JS_DIR)):
        if not f.endswith('.js'):
            continue
        p = os.path.join(JS_DIR, f)
        src = open(p, encoding='utf-8').read()
        if 'window.__quantModules' in src and 'create(deps)' in src:
            out.append((f, src))
    return out


def _add_params(declared, params):
    """函数参数串 → 声明的参数名 (含解构 {a,b} / 默认值 a=1)"""
    for p in re.split(r',(?![^{}]*\})', params):
        p = p.strip()
        if not p:
            continue
        if p.startswith('{'):
            for x in re.findall(r'[A-Za-z_$][\w$]*', p):
                declared.add(x)
        else:
            declared.add(p.split('=')[0].strip())


def _declared(src):
    """收集模块内已声明的标识符"""
    declared = set()
    # const 解构: const { a, b, ...rest } = X; (任意 RHS, 含 rest 元素)
    for m in re.finditer(r'\bconst\s*\{([^}]*)\}\s*=', src):
        for part in m.group(1).split(','):
            part = part.strip()
            if not part:
                continue
            if part.startswith('...'):
                declared.add(part[3:].strip())
            else:
                # 元素可含默认值 a=1 / 别名 a: b; 全收集 (过量声明仅致假阴性, 本审计安全)
                declared.update(re.findall(r'[A-Za-z_$][\w$]*', part))
    # 参数对象解构: ({ code, name }) => / function f({a,b})
    for m in re.finditer(r'\(\s*\{([^}]*)\}\s*\)', src):
        for x in re.findall(r'[A-Za-z_$][\w$]*', m.group(1)):
            declared.add(x)
    # 命名声明
    for m in re.finditer(r'\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=', src):
        declared.add(m.group(1))
    # 函数声明/表达式参数
    for m in re.finditer(r'\bfunction\s+[A-Za-z_$][\w$]*\s*\(([^)]*)\)', src):
        _add_params(declared, m.group(1))
    # 匿名函数参数: function (params) { ... }
    for m in re.finditer(r'\bfunction\s*\(([^)]*)\)', src):
        _add_params(declared, m.group(1))
    # 箭头函数 (x, y) => / (x) =>
    for m in re.finditer(r'\(\s*([^()]*?)\s*\)\s*=>', src):
        _add_params(declared, m.group(1))
    # 箭头单参: x => x.xxx (排除比较符/赋值)
    for m in re.finditer(r'([A-Za-z_$][\w$]*)\s*=>\s*[^=]', src):
        declared.add(m.group(1))
    # catch (e)
    for m in re.finditer(r'catch\s*\(\s*([A-Za-z_$][\w$]*)\s*\)', src):
        declared.add(m.group(1))
    # for (const x of / const [a,b] of
    for m in re.finditer(r'for\s*\(\s*const\s+(\[[^\]]*\]|[A-Za-z_$][\w$]*)\s+of', src):
        g = m.group(1)
        if g.startswith('['):
            declared.update(re.findall(r'[A-Za-z_$][\w$]*', g))
        else:
            declared.add(g)
    return declared


def _strip_comments(src):
    """剥除注释 (行 // 与块 /* */) — 注释里的 v1.10 / 文档文本不算引用"""
    src = re.sub(r'/\*.*?\*/', ' ', src, flags=re.S)
    src = re.sub(r'//[^\n]*', ' ', src)
    return src


def _strip_strings(src):
    """剥除字符串字面量; 模板串只保留 ${...} 内的代码"""
    src = re.sub(r"'[^'\\]*(?:\\.[^'\\]*)*'|\"[^\"\\]*(?:\\.[^\"\\]*)*\"", ' ', src)
    src = re.sub(
        r'`([^`]*)`',
        lambda m: ' '.join(re.findall(r'\$\{([^}]*)\}', m.group(1))),
        src,
    )
    return src


# 保留字不能作成员链基 (const/return/of 后跟 `[...]` 是数组字面量/解构, 非下标)
_JS_KEYWORDS = (
    'const|let|var|return|of|new|typeof|instanceof|delete|void|if|else|for|while|'
    'do|switch|case|default|function|class|in'
)


def _refs(src):
    """提取成员访问链的基标识符: `a.b.c`→{a}; `a[sn].codes`→{a}; `a?.b`→{a}

    顺序必须 先剥字符串 再剥注释: 行注释 `//[^\\n]*` 会吞掉 URL 字符串里的 `//`
    (如 'https://...') 留下未闭合引号, 使后续字符串剥离失效。
    """
    src = _strip_comments(_strip_strings(src))
    seg = r'(?:\.\s*[A-Za-z_$][\w$]*|\?\.\s*[A-Za-z_$][\w$]*|\[\s*[^\]]*?\s*\])'
    return set(re.findall(
        r'\b(?!(?:' + _JS_KEYWORDS + r')\b)([A-Za-z_$][\w$]*)\s*(?:' + seg + r')+',
        src,
    ))


def _audit(fname, src):
    declared = _declared(src)
    refs = _refs(src)
    missing = refs - declared - ALLOWED
    return sorted(missing)


def _test_cases():
    for fname, src in _domain_module_files():
        yield fname, src


def test_domain_modules_no_missing_deps():
    """每个 create(deps) 域模块: 所有 `IDENT.xxx` 引用均有声明 (零 ReferenceError 隐患)"""
    failures = []
    for fname, src in _domain_module_files():
        missing = _audit(fname, src)
        if missing:
            failures.append((fname, missing))
    assert not failures, (
        "以下域模块存在未声明标识符引用 (缺失 dep, 会像 v3.14.3 修复前的 aiResult/"
        "stockKlineChart 一样在运行时 ReferenceError):\n" +
        '\n'.join(f"  {f}: {m}" for f, m in failures)
    )
