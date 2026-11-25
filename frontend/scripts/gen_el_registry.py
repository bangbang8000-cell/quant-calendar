#!/usr/bin/env python3
"""生成 src/el-registry.js —— Element Plus 按需注册表。

背景（v7.18 / FR-802）：
  原实现 src/globals.js 全量 import ElementPlus 后 app.use(ElementPlus)，
  产物 vendor-ep 907.4 KB，占首屏 JS 39.1%，其中绝大部分组件从未被使用。

为什么必须"生成"而不是手写：
  全站 1,892 处 el-* 引用、30+ 种标签。手写清单必然漏；漏了不会构建报错，
  只会在运行期渲染成空元素（表格无行 / 弹窗空白），是最难定位的一类事故。

为什么用"深度路径"而不是 `import { ElButton } from 'element-plus'`：
  实测从 barrel 具名导入**不 tree-shake**（首版实现：vendor-ep 反而 907.4→905.9 KB）。
  element-plus 的 es/index.mjs 是 235 行 barrel，逐个 import 各组件 index.mjs，
  rollup 在 barrel 层保留了副作用，未用组件仍被打进产物。
  深度导入 es/components/<x>/index.mjs 才有独立模块边界，sideEffects 声明也放行。

用法：
    python3 scripts/gen_el_registry.py          # 生成
    python3 scripts/gen_el_registry.py --check   # 仅校验（CI 用，不一致则 exit 1）
"""
import re
import sys
import os
import glob

HERE = os.path.dirname(os.path.abspath(__file__))
FE = os.path.dirname(HERE)
OUT = os.path.join(FE, "src", "el-registry.js")
EP_ES = os.path.join(FE, "node_modules", "element-plus", "es")
EP_INDEX = os.path.join(EP_ES, "index.mjs")
# locale 全局注入的官方内部路径（make-installer.mjs 自身也从这里取）
CFG_HOOK = "element-plus/es/components/config-provider/src/hooks/use-global-config"

# 非公开组件（EP 不导出，写在模板里靠父组件内部注册；本项目当前未使用）
INTERNAL_TAGS = {"el-tab-bar", "el-upload-dragger"}

# 指令：源码里以 v-xxx 出现，必须 app.directive 注册，漏了不报错只是静默失效
DIRECTIVE_MAP = {
    "loading": "ElLoading",
    "infinite-scroll": "ElInfiniteScroll",
}


def scan():
    """返回 (tags:set[str], hint:dict[tag,list[str]])"""
    tags, hint = set(), {}
    roots = [os.path.join(FE, "js"), os.path.join(FE, "src"), os.path.join(FE, "index.html")]
    for root in roots:
        paths = [root] if os.path.isfile(root) else glob.glob(os.path.join(root, "**", "*.*"), recursive=True)
        for p in paths:
            if not p.endswith((".js", ".vue", ".html")) or os.path.basename(p) == "el-registry.js":
                continue
            try:
                s = open(p, encoding="utf-8", errors="ignore").read()
            except OSError:
                continue
            for t in set(re.findall(r"<(el-[a-z0-9-]+)", s)):
                tags.add(t)
                hint.setdefault(t, []).append(os.path.relpath(p, FE))
    return tags, hint


def ep_index_map():
    """解析 element-plus/es/index.mjs 的 import 行，得到 符号名 -> 深度模块路径。

    形如：import { ElButton, ElButtonGroup } from "./components/button/index.mjs";
    """
    s = open(EP_INDEX, encoding="utf-8").read()
    m = {}
    for names, path in re.findall(r'import \{([^}]*)\} from "\./([^"]+)"', s):
        # ./components/button/index.mjs -> element-plus/es/components/button/index
        mod = "element-plus/es/" + path[:-4] if path.endswith(".mjs") else "element-plus/es/" + path
        for n in names.split(","):
            n = n.strip().split(" as ")[-1].strip()
            if n:
                m.setdefault(n, mod)
    return m


def pascal(tag):
    return "".join(p.capitalize() for p in tag.split("-"))


def render(components, directives):
    """components: [(name, tag, module)]  directives: [(name, dirname, module)]"""
    by_mod = {}
    for name, _tag, mod in components:
        by_mod.setdefault(mod, []).append(name)
    for name, _d, mod in directives:
        by_mod.setdefault(mod, []).append(name)
    by_mod.setdefault(CFG_HOOK, []).append("provideGlobalConfig")

    out = [
        "// ⚠ 本文件由 scripts/gen_el_registry.py 生成 — 请勿手改。",
        "// 模板里新增 el-* 组件后必须重新生成：python3 scripts/gen_el_registry.py",
        "// 否则该组件不会注册，运行期渲染为空元素（不报错，只在 console 留 warn）。",
        "//",
        "// v7.18 (FR-802): Element Plus 按需注册，替代 app.use(ElementPlus) 全量安装。",
        "// 1) 页面模板是运行期字符串模板，无法被 unplugin-vue-components 编译期解析 → 只能全局注册；",
        "// 2) 深度导入（es/components/x/index.mjs）才能 tree-shake，从 barrel 具名导入实测无效。",
    ]
    for mod in sorted(by_mod):
        out.append("import { %s } from '%s'" % (", ".join(sorted(by_mod[mod])), mod))
    out += ["", "const COMPONENTS = ["]
    for name, tag, _mod in components:
        out.append("  [%r, %s]," % (name, name))
    out += [
        "]",
        "",
        "export function installEl(app, locale) {",
        "  COMPONENTS.forEach(([name, comp]) => app.component(name, comp))",
    ]
    for name, dirname, _mod in directives:
        out.append("  app.use(%s)" % name)
    out += [
        "  // locale 注入：与原 app.use(ElementPlus, {locale}) 等效，但不触发全量组件安装。",
        "  if (locale) provideGlobalConfig({ locale }, app, true)",
        "}",
        "",
        "export const EL_REGISTRY_META = {",
        "  components: %d," % len(components),
        "  directives: %r," % [d for _n, d, _m in directives],
        "  tags: %r," % [t for _n, t, _m in components],
        "}",
        "",
    ]
    return "\n".join(out)


def main():
    check = "--check" in sys.argv
    tags, hint = scan()
    name2mod = ep_index_map()

    components, unknown = [], []
    for tag in sorted(tags):
        if tag in INTERNAL_TAGS:
            continue
        name = pascal(tag)
        mod = name2mod.get(name)
        if not mod:
            unknown.append((tag, hint.get(tag, [])))
            continue
        components.append((name, tag, mod))

    src_all = ""
    for root in (os.path.join(FE, "js"), os.path.join(FE, "src"), os.path.join(FE, "index.html")):
        paths = [root] if os.path.isfile(root) else glob.glob(os.path.join(root, "**", "*.*"), recursive=True)
        for p in paths:
            if p.endswith((".js", ".vue", ".html")) and os.path.basename(p) != "el-registry.js":
                src_all += open(p, encoding="utf-8", errors="ignore").read()

    directives = []
    for d, name in sorted(DIRECTIVE_MAP.items()):
        if re.search(r"\bv-%s\b" % re.escape(d), src_all):
            directives.append((name, d, name2mod[name]))

    if unknown:
        print("✗ 以下标签无法映射到 element-plus 导出（不能注册成分量组件）：")
        for tag, files in unknown:
            print("   %-24s %s" % (tag, ", ".join(files[:3])))
        print("   处理方式：改用公开组件，或加入 INTERNAL_TAGS 并确认由父组件内部注册。")
        return 1

    content = render(components, directives)
    old = open(OUT, encoding="utf-8").read() if os.path.exists(OUT) else ""
    if check:
        if old != content:
            print("✗ el-registry.js 与源码不一致，请重新生成")
            return 1
        print("✓ el-registry.js 与源码一致（组件 %d / 指令 %d）" % (len(components), len(directives)))
        return 0

    open(OUT, "w", encoding="utf-8").write(content)
    print("✓ 已生成 src/el-registry.js：组件 %d 个 / 指令 %d 个 / 模块 %d 个"
          % (len(components), len(directives), len({c[2] for c in components})))
    print("  组件: " + " ".join(t for _, t, _ in components))
    if directives:
        print("  指令: " + " ".join("v-" + d for _n, d, _m in directives))
    return 0


if __name__ == "__main__":
    sys.exit(main())
