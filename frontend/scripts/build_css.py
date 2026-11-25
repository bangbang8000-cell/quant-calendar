# -*- coding: utf-8 -*-
"""把 12 个 CSS 合成 1 个（FR-803），顺序由 css/app.manifest.json 决定。

为什么要合并：
  index.html 原有 12 个 <link rel=stylesheet>，全部阻塞首屏渲染（HTTP/1.1 下
  6 连接并行 → 至少 2 个 RTT 批次）。合并后仅 1 个请求。

为什么顺序必须锁死：
  这 12 个文件之间存在覆写关系（themes*.css 覆盖 components.css 里的颜色）。
  顺序错了不会报错，只会在某些主题下颜色不对 —— 用结构快照也未必抓得到。
  因此清单写在 app.manifest.json 里，脚本只按清单拼接，不猜。

为什么不把 element-plus.css 也合进来：
  它是外部库产物，随库版本才变。单独保留可让它在浏览器缓存里长期命中，
  合并进 app.css 会让每次改业务样式都使它失效。

用法: python3 scripts/build_css.py [--check]
"""
import io
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
FE = os.path.dirname(HERE)
CSS = os.path.join(FE, "css")
MANIFEST = os.path.join(CSS, "app.manifest.json")
OUT = os.path.join(CSS, "app.css")


def build():
    order = json.load(io.open(MANIFEST, encoding="utf-8"))
    missing = [f for f in order if not os.path.isfile(os.path.join(CSS, f))]
    if missing:
        raise SystemExit("清单中的文件不存在: %s" % ", ".join(missing))

    parts = [
        "/*! app.css — 由 scripts/build_css.py 从 css/app.manifest.json 拼接生成，请勿手改。",
        " *  源文件顺序即层叠顺序，改动必须同步 app.manifest.json。",
        " *  条数: %d" % len(order),
        " */",
        "",
    ]
    for name in order:
        body = io.open(os.path.join(CSS, name), encoding="utf-8").read()
        parts.append("/* ===== %s ===== */" % name)
        parts.append(body.rstrip("\n"))
        parts.append("")
    return "\n".join(parts), order


def main():
    content, order = build()
    if "--check" in sys.argv:
        cur = io.open(OUT, encoding="utf-8").read() if os.path.isfile(OUT) else ""
        if cur != content:
            print("✗ css/app.css 与源文件不一致（改了 css/*.css 但没重新生成）")
            print("  修复: python3 scripts/build_css.py")
            return 1
        print("✓ css/app.css 与 %d 个源文件一致" % len(order))
        return 0
    io.open(OUT, "w", encoding="utf-8").write(content)
    print("✓ 已生成 css/app.css ← %d 个源文件, %.1f KB"
          % (len(order), len(content.encode("utf-8")) / 1024))
    print("  顺序: " + " → ".join(order))
    return 0


if __name__ == "__main__":
    sys.exit(main())
