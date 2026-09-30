// V6.3.6 (安全) Service Worker 缓存分区纯函数 Node 断言 (由 test_sw_api_cache_guard_636.py 调用)
// 守护: ① 敏感端点判定; ② 身份分区派生 (跨身份不可命中 / 同用户换 token 仍同分区);
//       ③ 分区粒度与「匿名」兜底。
'use strict';
const assert = require('assert');
const path = require('path');
const core = require(path.join(__dirname, '..', 'frontend', 'js', 'sw-cache-core.js'));

const { isSensitiveApi, identityKey, ANON } = core;

// ─── ① 敏感端点: 一律不缓存/不回放 ─────────────────────────────
const SENSITIVE = [
  '/api/ai/models',                        // 厂商密钥 (列表为掩码)
  '/api/ai/models?full=1',                 // 明文密钥
  '/api/market/tushare/config',            // 明文 Tushare Token (V6.3.6 修复端点)
  '/api/market/datasource/config',         // 数据源 token 配置
  '/api/users',
  '/api/users/admin',
  '/api/system/execution-history',
  '/api/system/reveal-secret',
  '/api/feishu/config',
  '/api/openapi/keys',
  '/api/backup/download',
  '/api/login',
  '/api/auth/change-password',
  // 任意端点带 full=1 都算敏感 (显式取明文)
  '/api/anything?full=1',
  '/api/anything?x=1&full=1&y=2',
  // 防御未来新增端点: 路径含凭据词
  '/api/new/secret-thing',
  '/api/new/api_key/list'
];
SENSITIVE.forEach(u => assert.strictEqual(isSensitiveApi(u), true, '应判敏感: ' + u));

// ─── ② 业务只读数据: 必须保持可缓存 (离线可读能力不回归) ────────
const CACHEABLE = [
  '/api/view/day/2026-09-30?status=all',
  '/api/view/month/2026-09-30?status=all',
  '/api/view/week/2026-09-30?status=all',
  '/api/view/year/2026-09-30?status=all',
  '/api/dashboard',
  '/api/dates',
  '/api/calendar/2026-09-30/summary',
  '/api/calendar/stock/600519.SH/score?date=2026-09-30',
  '/api/market/kline/600519.SH?period=daily&limit=60',
  '/api/market/datasource/status',
  '/api/meta/freshness',
  '/api/jobs?limit=20',
  '/api/ai/usage-stats',
  '/api/health'
];
CACHEABLE.forEach(u => assert.strictEqual(isSensitiveApi(u), false, '应可缓存: ' + u));

// URL 对象形态同样支持
assert.strictEqual(isSensitiveApi(new URL('http://x/api/ai/models?full=1')), true);
assert.strictEqual(isSensitiveApi(new URL('http://x/api/dashboard')), false);

// ─── ③ 身份分区 ───────────────────────────────────────────────
function token(sub, extra) {
  const payload = Buffer.from(JSON.stringify(Object.assign({ sub: sub }, extra || {})))
    .toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return 'header.' + payload + '.sig';
}

// 无凭据 → 匿名分区
assert.strictEqual(identityKey(''), ANON);
assert.strictEqual(identityKey(null), ANON);
assert.strictEqual(identityKey('Basic abc'), ANON);
assert.strictEqual(identityKey('Bearer '), ANON);

const adminTok1 = token('admin', { jti: 'a' });
const adminTok2 = token('admin', { jti: 'b', iat: 123 });
const guestTok = token('guest');

const kAdmin1 = identityKey('Bearer ' + adminTok1);
const kAdmin2 = identityKey('Bearer ' + adminTok2);
const kGuest = identityKey('Bearer ' + guestTok);

// 不同身份 → 不同分区 (核心安全性质: 管理员缓存不可能被访客命中)
assert.notStrictEqual(kAdmin1, kGuest, 'admin/guest 必须落到不同分区');
assert.notStrictEqual(kAdmin1, ANON, '有凭据不得落到匿名分区');
assert.notStrictEqual(kGuest, ANON, '有凭据不得落到匿名分区');

// 同一用户换 token (重新登录) → 同一分区 (离线数据不因重新登录丢失)
assert.strictEqual(kAdmin1, kAdmin2, '同一 sub 的不同 token 应命中同一分区');

// 大小写/前后空格不影响解析, 但不同书写不改变分区
assert.strictEqual(kAdmin1, identityKey('bearer ' + adminTok1));
assert.strictEqual(kAdmin1, identityKey('  Bearer ' + adminTok1 + '  '));

// 不可解析的 token → 每个 token 独立分区 (绝不与 anon/他人共用)
const opaqueA = identityKey('Bearer opaque-token-a');
const opaqueB = identityKey('Bearer opaque-token-b');
assert.notStrictEqual(opaqueA, opaqueB, '不可解析 token 必须彼此隔离');
assert.notStrictEqual(opaqueA, ANON, '不可解析 token 不得落到匿名分区');
// 同一不可解析 token 稳定
assert.strictEqual(opaqueA, identityKey('Bearer opaque-token-a'));

// 分区键形态: 非空、无路径分隔符/空格 (用于拼进缓存名)
[kAdmin1, kGuest, opaqueA, ANON].forEach(k => {
  assert.ok(/^[A-Za-z0-9_-]+$/.test(k), '分区键应为安全字符: ' + k);
});

console.log('all assertions passed');
