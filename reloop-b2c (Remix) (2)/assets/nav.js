/**
 * RE-LOOP — nav enhancer v4
 * Key fix: use document.currentScript.src to derive the exact project root URL,
 * regardless of how deep the server nests project files (e.g. /v1/design/projects/.../serve/).
 * This makes SW registration always point to the right sw.js and scope.
 */

/* Capture currentScript BEFORE the IIFE — it becomes null after async ops */
var __navSrc = (document.currentScript && document.currentScript.src) || '';

(function (navSrc) {
  /* ── Project root URL ────────────────────────────────────────────────────
     nav.js is always at <root>/assets/nav.js.
     So root = navSrc minus "assets/nav.js". Works from any depth. */
  var ROOT = navSrc ? navSrc.replace(/assets\/nav\.js([?#].*)?$/, '') : (location.origin + '/');

  /* ── 1. Service Worker ───────────────────────────────────────────────── */
  if ('serviceWorker' in navigator) {
    var swUrl   = ROOT + 'sw.js';
    var swScope = ROOT;

    navigator.serviceWorker.register(swUrl, { scope: swScope })
      .then(function (reg) {
        /* Tell SW to background-cache all pages once it's active */
        var doCache = function (sw) {
          if (sw && sw.state === 'activated') {
            sw.postMessage({ type: 'CACHE_ALL', root: ROOT });
          }
        };
        if (reg.active) { doCache(reg.active); }
        else {
          var sw = reg.installing || reg.waiting;
          if (sw) sw.addEventListener('statechange', function () { doCache(sw); });
        }
      })
      .catch(function (e) { /* silent — site works without SW */ });
  }

  /* ── 2. View Transitions (Chrome 126+) ───────────────────────────────── */
  if (!document.querySelector('meta[name="view-transition"]')) {
    var m = document.createElement('meta');
    m.name = 'view-transition'; m.content = 'same-origin';
    document.head.appendChild(m);
  }
  var vtStyle = document.createElement('style');
  vtStyle.textContent = '@view-transition{navigation:auto}' +
    '::view-transition-old(root){animation-duration:100ms;animation-timing-function:ease-in}' +
    '::view-transition-new(root){animation-duration:100ms;animation-timing-function:ease-out}';
  document.head.appendChild(vtStyle);

  /* ── 3. Hover/touch prefetch via fetch() — silent, no <link> noise ───── */
  var queued = new Set();
  function prefetchUrl(href) {
    if (!href) return;
    try {
      var abs = new URL(href, location.href).href;
      if (!abs.startsWith(ROOT)) return;
      if (!abs.endsWith('.html')) return;
      if (queued.has(abs)) return;
      queued.add(abs);
      fetch(abs, { credentials: 'same-origin' }).catch(function () {});
    } catch (e) {}
  }

  document.addEventListener('mouseover', function (e) {
    var a = e.target.closest('a[href]');
    if (a) prefetchUrl(a.getAttribute('href'));
  }, { passive: true });

  document.addEventListener('touchstart', function (e) {
    var a = e.target.closest('a[href]');
    if (a) prefetchUrl(a.getAttribute('href'));
  }, { passive: true });

  /* ── 4. Idle prefetch: top-nav tabs + next flow step ─────────────────── */
  var FLOW_NEXT = {
    'orders/new.html':               ['orders/new/tier-s.html','orders/new/tier-b.html','orders/new/tier-c.html','orders/new/tier-h.html'],
    'orders/new/tier-s.html':        ['orders/new/step-2.html'],
    'orders/new/step-2.html':        ['orders/new/step-3.html'],
    'orders/new/step-3.html':        ['orders/new/step-4.html'],
    'orders/new/step-4.html':        ['orders/new/step-5.html'],
    'orders/new/step-5.html':        ['orders/new/step-6.html'],
    'orders/new/step-6.html':        ['orders/new/success.html'],
    'orders/new/tier-b/quote.html':  ['orders/new/tier-b/address.html','orders/new/tier-b/auction.html'],
    'orders/new/tier-b/address.html':['orders/new/tier-b/confirm.html'],
    'orders/new/tier-c/step-2.html': ['orders/new/tier-c/step-3.html'],
    'orders/new/tier-c/step-3.html': ['orders/new/tier-c/step-4.html'],
    'login.html':  ['login/otp.html'],
    'signup.html': ['signup/info.html'],
  };
  var TABS = ['index.html','orders.html','wallet.html','profile.html'];

  function idlePrefetch() {
    TABS.forEach(function (p) { prefetchUrl(ROOT + p); });
    /* Detect current page relative to ROOT */
    var rel = location.href.replace(ROOT, '');
    var nexts = FLOW_NEXT[rel];
    if (!nexts) {
      /* strip trailing query/hash */
      var bare = rel.split('?')[0].split('#')[0];
      nexts = FLOW_NEXT[bare];
    }
    if (nexts) nexts.forEach(function (p) { prefetchUrl(ROOT + p); });
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(idlePrefetch, { timeout: 2000 });
  } else {
    setTimeout(idlePrefetch, 1500);
  }

  /* ── 5. Preconnect Google Fonts ──────────────────────────────────────── */
  ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'].forEach(function (u) {
    if (document.querySelector('link[rel="preconnect"][href="' + u + '"]')) return;
    var l = document.createElement('link');
    l.rel = 'preconnect'; l.href = u; l.crossOrigin = '';
    document.head.insertBefore(l, document.head.firstChild);
  });

})(__navSrc);
