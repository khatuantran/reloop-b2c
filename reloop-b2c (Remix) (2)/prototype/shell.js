/* RE-LOOP prototype shell — controller
 * Full-bleed iframe with a floating dock that drives:
 *   - back/restart/journey progress
 *   - "next step" suggestion based on current journey
 *   - global Frames overview (modal) and Journey picker (modal)
 * No sidebar/topbar — the screens fill the viewport like a real prototype.
 */
(() => {
  const SCREEN_BASE = './';
  const MODULES = window.MODULES;
  const SCREEN_BY_PATH = window.SCREEN_BY_PATH;
  const ALL = window.ALL_SCREENS;
  const JOURNEYS = window.JOURNEYS;
  const JOURNEYS_BY_PATH = window.JOURNEYS_BY_PATH;

  const LS = {
    get(k, d) { try { const v = localStorage.getItem('reloop_p_' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('reloop_p_' + k, JSON.stringify(v)); } catch {} },
  };

  /* ── State ── */
  const state = {
    currentPath: null,         // active screen path
    journeyId:   LS.get('journey_id', null),  // pinned journey (or auto)
    history:     [],           // path[]
    hIdx:       -1,
    dockHidden: false,
  };

  /* ── DOM ── */
  const stage    = document.getElementById('stage');
  const loader   = document.getElementById('loader');
  const dock     = document.getElementById('dock');
  const reveal   = document.getElementById('reveal');
  const welcome  = document.getElementById('welcome');
  const stepBtn  = document.getElementById('step-btn');
  const stepName = document.getElementById('step-name');
  const stepMeta = document.getElementById('step-meta');
  const dots     = document.getElementById('dots');
  const dockEdge = document.getElementById('dock-edge');
  const btnBack    = document.getElementById('btn-back');
  const btnHome    = document.getElementById('btn-home');
  const btnRestart = document.getElementById('btn-restart');
  const btnFrames  = document.getElementById('btn-frames');
  const btnJourney = document.getElementById('btn-journey');
  const btnNext    = document.getElementById('btn-next');
  const btnHide    = document.getElementById('btn-hide');
  const btnReveal  = document.getElementById('reveal');
  const btnStartJ  = document.getElementById('start-journey');
  const btnBrowseAll = document.getElementById('browse-all');

  /* Modals built lazily */
  const modalBg = document.getElementById('modal-bg');
  const modalTitle = document.getElementById('modal-title');
  const modalSub   = document.getElementById('modal-sub');
  const modalBody  = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  /* ── Iframe pool — two iframes for cross-fade transitions ── */
  let frameA = null, frameB = null, activeFrame = null, idleFrame = null;
  function ensureFrames() {
    if (!frameA) {
      frameA = mkFrame(); frameB = mkFrame();
      stage.appendChild(frameA); stage.appendChild(frameB);
      activeFrame = frameA; idleFrame = frameB;
      activeFrame.classList.add('show');
    }
  }
  function mkFrame() {
    const f = document.createElement('iframe');
    f.className = 'frame';
    f.title = 'RE-LOOP screen';
    f.allow = 'fullscreen';
    return f;
  }

  /* ── Navigation ── */
  function urlOf(path) { return SCREEN_BASE + path + '.html'; }

  function navigate(path, opts = {}) {
    if (!SCREEN_BY_PATH.has(path)) {
      console.warn('Unknown screen', path);
      return;
    }
    ensureFrames();
    welcome.classList.add('gone');

    if (state.currentPath === path && !opts.reload) return;

    loader.classList.add('show');
    idleFrame.classList.remove('show');
    idleFrame.onload = () => {
      loader.classList.remove('show');
      // swap
      activeFrame.classList.remove('show');
      activeFrame.classList.add('gone');
      idleFrame.classList.remove('gone');
      idleFrame.classList.add('show');
      const tmp = activeFrame; activeFrame = idleFrame; idleFrame = tmp;
      hookFrameLinks(activeFrame);
    };
    idleFrame.src = urlOf(path);

    state.currentPath = path;
    if (!opts.fromHistory) pushHistory(path);
    syncURL(path);
    updateChrome();
  }

  function pushHistory(path) {
    if (state.history[state.hIdx] === path) return;
    state.history = state.history.slice(0, state.hIdx + 1);
    state.history.push(path);
    state.hIdx = state.history.length - 1;
  }

  function back() {
    if (state.hIdx <= 0) return;
    state.hIdx--;
    navigate(state.history[state.hIdx], { fromHistory: true });
    updateChrome();
  }

  /* When the iframe navigates via its own <a href> click, sync state. */
  function hookFrameLinks(frame) {
    let lastSeen = frame.src;
    const tick = () => {
      if (!frame.contentWindow) return;
      try {
        const href = frame.contentWindow.location.href;
        if (href !== lastSeen) {
          lastSeen = href;
          const path = pathFromUrl(href);
          if (path && path !== state.currentPath) {
            state.currentPath = path;
            pushHistory(path);
            syncURL(path);
            updateChrome();
          }
        }
      } catch {}
    };
    if (frame._poll) clearInterval(frame._poll);
    frame._poll = setInterval(tick, 200);
  }

  function pathFromUrl(href) {
    // Strip origin, leading slash, trailing .html — works for root-served screens.
    try {
      const u = new URL(href);
      const p = u.pathname.replace(/^\/+/, '').replace(/\.html$/, '');
      // Don't treat the prototype shell itself as a screen.
      if (!p || p.toLowerCase().includes('re-loop prototype')) return null;
      return SCREEN_BY_PATH.has(p) ? p : null;
    } catch { return null; }
  }

  /* ── URL hash routing ── */
  function syncURL(path) {
    const h = '#/' + path;
    if (location.hash !== h) try { history.replaceState(null, '', h); } catch {}
  }
  function pathFromHash() {
    const m = (location.hash || '').match(/^#\/(.+)$/);
    return m ? m[1] : null;
  }

  /* ── Journey logic ── */
  function activeJourney() {
    if (state.journeyId) {
      const pinned = JOURNEYS.find(j => j.id === state.journeyId);
      if (pinned && pinned.steps.includes(state.currentPath)) return pinned;
    }
    // auto-pick: a journey containing the current path; prefer earliest index match.
    const candidates = JOURNEYS_BY_PATH.get(state.currentPath) || [];
    if (candidates.length) return candidates[0].journey;
    return null;
  }

  function nextStep() {
    const j = activeJourney();
    if (!j) return null;
    const i = j.steps.indexOf(state.currentPath);
    if (i < 0 || i >= j.steps.length - 1) return null;
    return j.steps[i + 1];
  }

  /* ── Chrome update ── */
  function updateChrome() {
    const path = state.currentPath;
    if (!path) return;
    const screen = SCREEN_BY_PATH.get(path);
    const j = activeJourney();
    const stepIdx = j ? j.steps.indexOf(path) : -1;

    // Step name + meta
    const tier = screen.module.tier;
    const tierChip = tier ? `<span class="tier-chip tier-${tier}">${tier}</span>` : '';
    const stepLabel = screen.step ? `<span class="screen-tile-step" style="margin-right:6px">${screen.step}</span>` : '';
    stepName.innerHTML = `${tierChip}${stepLabel}${escapeHtml(screen.label)}`;
    stepMeta.innerHTML = j
      ? `<span class="label-hide-mobile">${escapeHtml(j.name)} ·</span> bước ${stepIdx + 1}/${j.steps.length}`
      : `<span class="label-hide-mobile">${escapeHtml(screen.module.title)} ·</span> ${escapeHtml(path)}.html`;

    // Dots
    dots.innerHTML = '';
    if (j) {
      j.steps.forEach((p, i) => {
        const d = document.createElement('button');
        d.className = 'dot' + (i === stepIdx ? ' current' : (i < stepIdx ? ' done' : ''));
        d.title = (SCREEN_BY_PATH.get(p)?.label || p) + ' (' + (i + 1) + '/' + j.steps.length + ')';
        d.addEventListener('click', () => navigate(p));
        dots.appendChild(d);
      });
      dockEdge.innerHTML = `<strong>${stepIdx + 1}</strong>/${j.steps.length}`;
    } else {
      dockEdge.innerHTML = `<strong>—</strong>/<span style="opacity:.5">—</span>`;
    }

    // Back button enable
    btnBack.disabled = state.hIdx <= 0;

    // Next: enabled iff there's a next step in active journey
    const nx = nextStep();
    btnNext.disabled = !nx;
    if (nx) {
      const nxScr = SCREEN_BY_PATH.get(nx);
      btnNext.title = 'Tiếp: ' + (nxScr?.step ? nxScr.step + ' ' : '') + (nxScr?.label || nx);
    } else {
      btnNext.title = j ? 'Đã hết journey' : 'Chưa chọn journey';
    }
  }

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  /* ── Modals ── */
  function openModal(kind) {
    if (kind === 'journey') renderJourneyModal();
    else if (kind === 'frames') renderFramesModal();
    modalBg.classList.add('show');
  }
  function closeModal() { modalBg.classList.remove('show'); }
  modalBg.addEventListener('click', (e) => { if (e.target === modalBg) closeModal(); });
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  function renderJourneyModal() {
    modalTitle.textContent = 'Chọn journey';
    modalSub.textContent = 'Có 5 luồng end-to-end theo FIGMA_IMPORT_GUIDE — chọn để khoá thanh tiến trình + nút "Tiếp".';
    modalBody.innerHTML = `<div class="journey-grid">${
      JOURNEYS.map(j => {
        const tier = j.tier ? `<span class="tier-chip tier-${j.tier}">${j.tier}</span>` : '';
        const isActive = state.journeyId === j.id;
        return `<button class="journey-card ${isActive ? 'active' : ''}" data-jid="${j.id}">
          <div class="journey-card-head">${tier}<span class="journey-card-name">${escapeHtml(j.name)}</span></div>
          <div class="journey-card-summary">${escapeHtml(j.summary)}</div>
          <div class="journey-card-meta"><span>${j.steps.length} màn</span><span>·</span><span>${j.id}</span></div>
        </button>`;
      }).join('')
    }</div>`;
    modalBody.querySelectorAll('[data-jid]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.jid;
        state.journeyId = id;
        LS.set('journey_id', id);
        const j = JOURNEYS.find(x => x.id === id);
        closeModal();
        navigate(j.steps[0]);
      });
    });
  }

  function renderFramesModal() {
    modalTitle.textContent = 'Tất cả màn (' + ALL.length + ')';
    modalSub.textContent = 'Lọc theo từ khoá hoặc click để mở. Group theo [Module] đúng theo Figma import guide.';
    modalBody.innerHTML = `
      <input class="search" id="modal-search" type="text" placeholder="Tìm màn, route, từ khoá…" autocomplete="off" />
      <div id="modal-list"></div>
    `;
    const list = modalBody.querySelector('#modal-list');
    const sin  = modalBody.querySelector('#modal-search');
    const draw = (q) => {
      const ql = (q || '').trim().toLowerCase();
      list.innerHTML = MODULES.map(mod => {
        const items = mod.screens.filter(s => {
          if (!ql) return true;
          return (s.label + ' ' + s.path + ' ' + (s.step || '') + ' ' + mod.title + ' ' + mod.tag).toLowerCase().includes(ql);
        });
        if (!items.length) return '';
        const tierChip = mod.tier ? `<span class="tier-chip tier-${mod.tier}">${mod.tier}</span>` : '';
        return `<div class="module">
          <div class="module-head">
            <span class="module-tag">${tierChip}${escapeHtml(mod.tag)}</span>
            <span class="module-title">${escapeHtml(mod.title)}</span>
            <span class="module-count">${items.length}/${mod.screens.length}</span>
          </div>
          <div class="screens">${items.map(s => `
            <button class="screen-tile ${s.path === state.currentPath ? 'active' : ''}" data-path="${s.path}">
              ${s.step ? `<div class="screen-tile-step">${escapeHtml(s.step)}</div>` : ''}
              <div class="screen-tile-label">${escapeHtml(s.label)}</div>
              <div class="screen-tile-path">${escapeHtml(s.path)}.html</div>
            </button>`).join('')}</div>
        </div>`;
      }).join('');
      list.querySelectorAll('[data-path]').forEach(el => {
        el.addEventListener('click', () => {
          const p = el.dataset.path;
          closeModal();
          navigate(p);
        });
      });
    };
    sin.addEventListener('input', () => draw(sin.value));
    draw('');
    setTimeout(() => sin.focus(), 50);
  }

  /* ── Welcome card ── */
  btnStartJ.addEventListener('click', () => openModal('journey'));
  btnBrowseAll.addEventListener('click', () => openModal('frames'));

  /* ── Dock buttons ── */
  btnBack.addEventListener('click', back);
  btnHome.addEventListener('click', () => navigate('index'));
  btnRestart.addEventListener('click', () => {
    const j = activeJourney();
    if (j) navigate(j.steps[0]);
    else navigate('index');
  });
  btnFrames.addEventListener('click', () => openModal('frames'));
  btnJourney.addEventListener('click', () => openModal('journey'));
  btnNext.addEventListener('click', () => { const nx = nextStep(); if (nx) navigate(nx); });
  stepBtn.addEventListener('click', () => openModal('frames'));
  btnHide.addEventListener('click', () => {
    dock.classList.add('hidden'); reveal.classList.add('show');
  });
  reveal.addEventListener('click', () => {
    dock.classList.remove('hidden'); reveal.classList.remove('show');
  });

  /* ── Keyboard ── */
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowRight') { const nx = nextStep(); if (nx) navigate(nx); }
    if (e.key === 'ArrowLeft')  back();
    if (e.key === 'h' || e.key === 'H') navigate('index');
    if (e.key === 'k' || e.key === 'K') openModal('frames');
    if (e.key === 'j' || e.key === 'J') openModal('journey');
  });

  /* ── Hash + boot ── */
  window.addEventListener('hashchange', () => {
    const p = pathFromHash();
    if (p && SCREEN_BY_PATH.has(p) && p !== state.currentPath) navigate(p);
  });

  // Boot: open journey/frames if hash given, else show welcome.
  const initialPath = pathFromHash();
  if (initialPath && SCREEN_BY_PATH.has(initialPath)) {
    navigate(initialPath);
  } else {
    welcome.classList.remove('gone');
  }
})();
