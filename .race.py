import re
path = 'frontend/js/components/research-page.js'
src = open(path, encoding='utf-8').read()

# 1. setup 声明 _reqSeq
src = src.replace(
    "      const variantSaving = Vue.ref(false);\n",
    "      const variantSaving = Vue.ref(false);\n      // V5.2.8 (T-5.2.53): 竞态防护推广 — 页面级请求序号\n      let _reqSeq = 0;\n",
    1)

# 2. 加载函数加 seq 防护
fns = [
    r'async function loadMarketReviews\(\) \{',
    r'async function loadMarketReviewDetail\([^)]*\) \{',
    r'async function loadScan\(\) \{',
    r'async function loadEvents\(\) \{',
    r'async function loadStrategies\(\) \{',
    r'async function loadRuns\(\) \{',
    r'async function loadVariants\(\) \{',
    r'async function loadCustoms\(\) \{',
    r'async function loadBtHistory\(\) \{',
    r'async function loadResearchHistory\(\) \{',
]

def add_race(fn_sig, src):
    m = re.search(fn_sig, src)
    if not m:
        return src, False
    start = m.start()
    nxt = src.find('\n      async function', start + 5)
    end = nxt if nxt != -1 else len(src)
    block = src[start:end]
    # 函数头加 seq
    brace = block.index('{')
    block = block[:brace+1] + '\n        const seq = ++_reqSeq;' + block[brace+1:]
    # await 完成后加检查 (第一个 const res = await 行后)
    am = re.search(r'(const res = await[^\n]*\n)', block)
    if am:
        block = block[:am.end()] + '        if (seq !== _reqSeq) return;\n' + block[am.end():]
    # finally loading 清除加检查
    fm = re.search(r'(\n        [a-zA-Z_][\w]*Loading\.value = false;\n)', block)
    if fm:
        line = fm.group(1).strip()
        block = block[:fm.start()] + '\n        if (seq === _reqSeq) ' + line + '\n' + block[fm.end():]
    src = src[:start] + block + src[end:]
    return src, True

for fn in fns:
    src, ok = add_race(fn, src)
    print(fn[:40], 'OK' if ok else 'MISS')

open(path, 'w', encoding='utf-8').write(src)
print('written')