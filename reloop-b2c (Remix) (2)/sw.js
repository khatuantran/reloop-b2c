/**
 * RE-LOOP Service Worker v2
 * ROOT is sent via postMessage from nav.js (which knows the exact serve URL).
 * Strategy: cache-first for all HTML + assets → zero server round-trips after first visit.
 */
const CACHE = 'reloop-v2';

const SHARED_ASSETS = [
  'assets/fonts.css',
  'assets/tailwind.css',
  'assets/icons.css',
  'assets/figma.css',
  'assets/nav.js',
  'sw.js',
];

const HTML_PAGES = [
  'index.html','orders.html','wallet.html','profile.html',
  'notifications.html','disputes.html','help.html','impact.html',
  'rewards.html','share.html','easy.html','onboarding.html',
  'login.html','signup.html','404.html',
  'login/otp.html',
  'wallet/policy.html',
  'profile/edit.html',
  'signup/info.html','signup/address.html','signup/otp.html','signup/done.html',
  'help/chat.html',
  'disputes/new.html','disputes/D-2026-0042.html','disputes/D-2026-0030.html','disputes/D-2026-0038.html',
  'orders/new.html',
  'orders/new/tier-s.html','orders/new/tier-b.html','orders/new/tier-c.html','orders/new/tier-h.html',
  'orders/new/step-2.html','orders/new/step-3.html','orders/new/step-4.html',
  'orders/new/step-5.html','orders/new/step-6.html','orders/new/success.html',
  'orders/new/tier-b/quote.html','orders/new/tier-b/address.html',
  'orders/new/tier-b/confirm.html','orders/new/tier-b/success.html',
  'orders/new/tier-b/auction.html','orders/new/tier-b/auction-live.html',
  'orders/new/tier-b/auction-address.html','orders/new/tier-b/auction-confirm.html','orders/new/tier-b/auction-success.html',
  'orders/new/tier-c/step-2.html','orders/new/tier-c/step-3.html','orders/new/tier-c/step-4.html',
  'orders/new/tier-c/step-5.html','orders/new/tier-c/step-6.html','orders/new/tier-c/success.html',
  'orders/new/tier-h/items.html','orders/new/tier-h/confirm.html','orders/new/tier-h/success.html',
  'orders/RL-2026-001234.html','orders/RL-2026-001235.html','orders/RL-2026-001236.html',
  'orders/RL-2026-001237.html','orders/RL-2026-001239.html','orders/RL-2026-001240.html',
  'orders/RL-2026-001241.html','orders/RL-2026-001242.html','orders/RL-2026-001243.html',
  'orders/RL-H-2026-000086.html','orders/RL-H-2026-000087.html',
  'orders/RL-2026-001234/track.html','orders/RL-2026-001234/chat.html','orders/RL-2026-001234/transaction.html',
  'orders/RL-2026-001235/track.html','orders/RL-2026-001235/chat.html','orders/RL-2026-001235/transaction.html',
  'orders/RL-2026-001236/track.html','orders/RL-2026-001236/chat.html','orders/RL-2026-001236/transaction.html',
  'orders/RL-2026-001237/track.html','orders/RL-2026-001237/chat.html','orders/RL-2026-001237/transaction.html',
  'orders/RL-2026-001239/track.html','orders/RL-2026-001239/chat.html','orders/RL-2026-001239/transaction.html',
  'orders/RL-2026-001240/track.html','orders/RL-2026-001240/chat.html','orders/RL-2026-001240/transaction.html',
  'orders/RL-2026-001241/track.html','orders/RL-2026-001241/chat.html','orders/RL-2026-001241/transaction.html',
  'orders/RL-2026-001242/track.html','orders/RL-2026-001242/chat.html','orders/RL-2026-001242/transaction.html',
  'orders/RL-2026-001243/track.html','orders/RL-2026-001243/chat.html','orders/RL-2026-001243/transaction.html',
  'orders/RL-H-2026-000086/track.html','orders/RL-H-2026-000086/chat.html','orders/RL-H-2026-000086/transaction.html',
  'orders/RL-H-2026-000087/track.html','orders/RL-H-2026-000087/chat.html','orders/RL-H-2026-000087/transaction.html',
  'orders/transaction-flow/tier-s/weighing.html','orders/transaction-flow/tier-s/weight-reveal.html',
  'orders/transaction-flow/tier-s/price.html','orders/transaction-flow/tier-s/otp.html','orders/transaction-flow/tier-s/done.html',
  'orders/transaction-flow/tier-c/weighing.html','orders/transaction-flow/tier-c/weight-reveal.html',
  'orders/transaction-flow/tier-c/peek-check.html','orders/transaction-flow/tier-c/hold.html',
  'orders/transaction-flow/tier-c/otp.html','orders/transaction-flow/tier-c/done.html',
];

/* ── Install: precache shared assets using SW's own base URL ── */
self.addEventListener('install', function (e) {
  var base = self.location.href.replace('sw.js', '');
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.all(
        SHARED_ASSETS.map(function (p) {
          return cache.add(base + p).catch(function () {});
        })
      );
    }).then(function () { return self.skipWaiting(); })
  );
});

/* ── Activate: delete old caches ── */
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE; })
          .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

/* ── Fetch: cache-first, background revalidate ── */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = e.request.url;
  /* Only cache HTML pages and our assets */
  var isHtml  = url.endsWith('.html');
  var isAsset = url.includes('/assets/') || url.endsWith('/sw.js');
  if (!isHtml && !isAsset) return;

  e.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(e.request).then(function (cached) {
        var network = fetch(e.request).then(function (res) {
          if (res && res.status === 200) {
            cache.put(e.request, res.clone());
          }
          return res;
        }).catch(function () { return cached; });
        /* Serve cache instantly if available; refresh in background */
        return cached || network;
      });
    })
  );
});

/* ── Message: CACHE_ALL — batch-cache all HTML pages using ROOT from client ── */
self.addEventListener('message', function (e) {
  if (!e.data || e.data.type !== 'CACHE_ALL') return;
  var root = e.data.root || self.location.href.replace('sw.js', '');

  caches.open(CACHE).then(function (cache) {
    var i = 0;
    function next() {
      var batch = HTML_PAGES.slice(i, i + 6);
      if (!batch.length) return;
      i += 6;
      Promise.all(batch.map(function (p) {
        var url = root + p;
        return cache.match(url).then(function (hit) {
          if (!hit) return fetch(url).then(function (res) {
            if (res && res.status === 200) cache.put(url, res.clone());
          }).catch(function () {});
        });
      })).then(function () { setTimeout(next, 400); });
    }
    next();
  });
});
