/* ══════════════════════════════════════════════════════════════════════════
   THE FEDERAL PLAYBOOK — Shared chrome (header + footer)
   Usage: <script src="chrome.js"></script> then in body:
          <header id="fp-site-header"></header>
          <footer id="fp-site-footer"></footer>
   Auto-renders. Respects data-active attr on <body data-active="learn">.
   ══════════════════════════════════════════════════════════════════════════ */

(function () {
  const BASE = "/federal-benefits-playbook";

  /* ─── Wordmark SVG (sub-brand lockup) ─────────────────────────────── */
  const WORDMARK = `
    <svg class="fp-wordmark" viewBox="0 0 260 44" xmlns="http://www.w3.org/2000/svg" aria-label="The Federal Playbook">
      <g font-family="'Source Serif 4', Georgia, serif" fill="currentColor">
        <text x="0" y="22" font-size="20" font-weight="600" letter-spacing="-0.2">The Federal</text>
        <text x="0" y="40" font-size="20" font-weight="600" font-style="italic" letter-spacing="-0.2">Playbook.</text>
      </g>
      <rect x="135" y="8" width="1" height="32" fill="currentColor" opacity="0.22"/>
      <g font-family="'JetBrains Mono', ui-monospace, monospace" fill="currentColor" opacity="0.6">
        <text x="146" y="19" font-size="8" letter-spacing="1.4">A PROPERTY OF</text>
        <text x="146" y="35" font-size="11" font-weight="600" letter-spacing="0.4">CAPITAL WEALTH</text>
      </g>
    </svg>
  `;

  /* ─── Nav structure ───────────────────────────────────────────────── */
  const NAV = [
    { id: "tools",  label: "Tools",       href: `${BASE}/tools/`,  sub: [
      { label: "FERS Retirement Calculator",  href: `${BASE}/tools/fers-calculator/`,       meta: "23k searches / mo" },
      { label: "TSP Growth Projector",         href: `${BASE}/tools/tsp-growth-calculator/`, meta: "Model your balance" },
      { label: "FERS Supplement Estimator",    href: `${BASE}/tools/fers-supplement-estimator/`, meta: "SRS until age 62" },
      { label: "FEGLI Cost Calculator",        href: `${BASE}/tools/fegli-cost-calculator/`, meta: "Compare vs. private" },
      { label: "Retirement Income Estimator",  href: `${BASE}/tools/retirement-income-estimator/`, meta: "FERS + TSP + SS" },
      { label: "Social Security Bridge",       href: `${BASE}/tools/social-security-bridge/`, meta: "Optimal claim age" },
    ]},
    { id: "learn",  label: "Learn",       href: `${BASE}/learn/`,  sub: [
      { label: "TSP 101",                      href: `${BASE}/learn/tsp-101/`,             meta: "The complete guide" },
      { label: "FERS Retirement 101",          href: `${BASE}/learn/fers-retirement-101/`, meta: "Pension + supplement" },
      { label: "FEHB in Retirement",           href: `${BASE}/learn/fehb-in-retirement/`,  meta: "Keep your health plan" },
      { label: "Roth TSP vs. Traditional",     href: `${BASE}/learn/roth-tsp-vs-traditional/`, meta: "The #1 question" },
      { label: "Federal Retirement Taxes",     href: `${BASE}/learn/federal-retirement-taxes/`, meta: "What gets taxed and how" },
    ]},
    { id: "guides", label: "Guides",      href: `${BASE}/guides/`, sub: [
      { label: "5-Year Pre-Retirement Checklist", href: `${BASE}/guides/5-year-pre-retirement-checklist/`, meta: "Free download" },
      { label: "TSP Withdrawal Playbook",      href: `${BASE}/guides/tsp-withdrawal-playbook/`, meta: "Free download" },
      { label: "Complete FERS Retirement Guide", href: `${BASE}/guides/complete-fers-retirement-guide/`, meta: "Free download" },
      { label: "FEHB → Medicare Transition",   href: `${BASE}/guides/fehb-to-medicare-transition/`, meta: "Free download" },
    ]},
    { id: "masterclass", label: "Masterclass", href: `${BASE}/masterclass/` },
    { id: "stories", label: "Client Stories", href: `${BASE}/success-stories/` },
    { id: "team",  label: "Team",        href: `${BASE}/team/` },
  ];

  /* ─── Header ──────────────────────────────────────────────────────── */
  function renderHeader(active) {
    return `
      <div class="fp-site-header" data-active="${active || ''}">
        <div class="fp-header-ribbon">
          <div class="fp-container fp-header-ribbon-inner">
            <span class="fp-header-ribbon-label">The Federal Playbook</span>
            <span class="fp-header-ribbon-sep">·</span>
            <span class="fp-header-ribbon-desc">Education &amp; tools for FERS, CSRS, and TSP participants</span>
            <span class="fp-header-ribbon-spacer"></span>
            <a href="tel:+18015551234" class="fp-header-ribbon-phone">801-555-1234</a>
          </div>
        </div>

        <div class="fp-header-main">
          <div class="fp-container fp-header-main-inner">
            <a href="${BASE}/" class="fp-header-logo" aria-label="The Federal Playbook — home">
              ${WORDMARK}
            </a>

            <nav class="fp-header-nav" aria-label="Primary">
              ${NAV.map(item => `
                <div class="fp-nav-item ${item.sub ? 'has-sub' : ''}" data-nav="${item.id}">
                  <a href="${item.href}" class="fp-nav-link">${item.label}${item.sub ? `<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}</a>
                  ${item.sub ? `
                    <div class="fp-nav-drop">
                      <div class="fp-nav-drop-inner">
                        <div class="fp-nav-drop-head">
                          <span class="fp-eyebrow fp-eyebrow-muted">${item.label}</span>
                          <a href="${item.href}" class="fp-nav-drop-all">View all →</a>
                        </div>
                        <ul class="fp-nav-drop-list">
                          ${item.sub.map(s => `
                            <li>
                              <a href="${s.href}">
                                <span class="fp-nav-drop-label">${s.label}</span>
                                <span class="fp-nav-drop-meta">${s.meta || ''}</span>
                              </a>
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </nav>

            <div class="fp-header-ctas">
              <a href="${BASE}/tools/" class="fp-btn fp-btn-secondary fp-btn-sm">Run the Calculator</a>
              <a href="/book-a-call/" class="fp-btn fp-btn-primary fp-btn-sm">Book a Call</a>
              <button class="fp-mobile-toggle" aria-label="Open menu" aria-expanded="false">
                <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="fp-mobile-sheet" aria-hidden="true">
          <div class="fp-mobile-sheet-head">
            <a href="${BASE}/" class="fp-header-logo">${WORDMARK}</a>
            <button class="fp-mobile-close" aria-label="Close menu">
              <svg width="22" height="22" viewBox="0 0 22 22"><path d="M5 5l12 12M17 5L5 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </div>
          <nav class="fp-mobile-nav" aria-label="Mobile">
            ${NAV.map(item => `
              <a href="${item.href}" class="fp-mobile-link">
                <span>${item.label}</span>
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M5 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            `).join('')}
          </nav>
          <div class="fp-mobile-ctas">
            <a href="${BASE}/tools/" class="fp-btn fp-btn-secondary">Run the Calculator</a>
            <a href="/book-a-call/" class="fp-btn fp-btn-primary">Book a Call</a>
          </div>
          <div class="fp-mobile-foot">
            <a href="tel:+18015551234">801-555-1234</a>
            <span>A property of Capital Wealth</span>
          </div>
        </div>
      </div>
    `;
  }

  /* ─── Footer ──────────────────────────────────────────────────────── */
  function renderFooter() {
    return `
      <div class="fp-site-footer">
        <div class="fp-container">

          <div class="fp-footer-top">
            <div class="fp-footer-brand">
              <div class="fp-footer-wordmark">${WORDMARK}</div>
              <p class="fp-footer-tagline">Private-sector retirement strategy for the federal workforce. Not a government agency. Not a federal website.</p>
              <div class="fp-footer-ctas">
                <a href="/book-a-call/" class="fp-btn fp-btn-primary">Book a Call</a>
                <a href="${BASE}/tools/" class="fp-btn fp-btn-tertiary">Run a calculator →</a>
              </div>
            </div>

            <div class="fp-footer-cols">
              <div class="fp-footer-col">
                <h4 class="fp-footer-col-title">Calculators</h4>
                <ul>
                  <li><a href="${BASE}/tools/fers-calculator/">FERS retirement</a></li>
                  <li><a href="${BASE}/tools/tsp-growth-calculator/">TSP growth</a></li>
                  <li><a href="${BASE}/tools/fers-supplement-estimator/">FERS supplement</a></li>
                  <li><a href="${BASE}/tools/fegli-cost-calculator/">FEGLI cost</a></li>
                  <li><a href="${BASE}/tools/retirement-income-estimator/">Income estimator</a></li>
                  <li><a href="${BASE}/tools/">View all →</a></li>
                </ul>
              </div>
              <div class="fp-footer-col">
                <h4 class="fp-footer-col-title">Learn</h4>
                <ul>
                  <li><a href="${BASE}/learn/tsp-101/">TSP 101</a></li>
                  <li><a href="${BASE}/learn/fers-retirement-101/">FERS 101</a></li>
                  <li><a href="${BASE}/learn/fehb-in-retirement/">FEHB in retirement</a></li>
                  <li><a href="${BASE}/learn/roth-tsp-vs-traditional/">Roth vs. traditional</a></li>
                  <li><a href="${BASE}/learn/federal-retirement-taxes/">Federal retirement taxes</a></li>
                  <li><a href="${BASE}/learn/">View all →</a></li>
                </ul>
              </div>
              <div class="fp-footer-col">
                <h4 class="fp-footer-col-title">Resources</h4>
                <ul>
                  <li><a href="${BASE}/guides/">Free guides</a></li>
                  <li><a href="${BASE}/masterclass/">Masterclass</a></li>
                  <li><a href="${BASE}/success-stories/">Client stories</a></li>
                  <li><a href="${BASE}/team/">Federal team</a></li>
                </ul>
              </div>
              <div class="fp-footer-col">
                <h4 class="fp-footer-col-title">Capital Wealth</h4>
                <ul>
                  <li><a href="/">Main site</a></li>
                  <li><a href="/about/">About the firm</a></li>
                  <li><a href="/contact/">Contact</a></li>
                  <li><a href="/disclosures/">Disclosures</a></li>
                  <li><a href="/privacy/">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="fp-footer-disclosure">
            <p><strong>Not affiliated with the Federal Government, OPM, or any federal agency.</strong> The Federal Playbook is an educational property of Capital Wealth, an SEC-registered investment adviser. The calculators and guides on this site are for educational purposes and do not constitute investment, tax, or legal advice. Results are estimates based on inputs you provide and publicly available federal benefit formulas; actual benefits are determined by OPM, SSA, and your agency.</p>
          </div>

          <div class="fp-footer-bot">
            <div class="fp-footer-copy">
              © <span class="fp-year"></span> Capital Wealth Management, LLC. The Federal Playbook™ is a trademark of Capital Wealth.
            </div>
            <div class="fp-footer-social">
              <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M3.5 3.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-1 5h2v9h-2v-9zm4 0h2v1.3c.5-.8 1.4-1.5 2.7-1.5 2.3 0 3.3 1.4 3.3 3.8v5.4h-2v-4.8c0-1.4-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v4.7h-2v-9z"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M17 5.3c-.2-.9-.8-1.5-1.7-1.7C13.8 3.3 9 3.3 9 3.3s-4.8 0-6.3.3C1.8 3.8 1.2 4.4 1 5.3.7 6.8.7 9 .7 9s0 2.2.3 3.7c.2.9.8 1.5 1.7 1.7 1.5.3 6.3.3 6.3.3s4.8 0 6.3-.3c.9-.2 1.5-.8 1.7-1.7.3-1.5.3-3.7.3-3.7s0-2.2-.3-3.7zM7.5 11.6v-5.2L12 9l-4.5 2.6z"/></svg></a>
              <a href="#" aria-label="Apple Podcasts"><svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M9 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 6c-1.7 0-3 .5-3 2v.5h6V13c0-1.5-1.3-2-3-2z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ─── Mount & behavior ────────────────────────────────────────────── */
  function mount() {
    const active = document.body.getAttribute('data-active') || '';
    const h = document.getElementById('fp-site-header');
    const f = document.getElementById('fp-site-footer');
    if (h) h.innerHTML = renderHeader(active);
    if (f) f.innerHTML = renderFooter();

    // Year
    document.querySelectorAll('.fp-year').forEach(el => el.textContent = new Date().getFullYear());

    // Dropdown hover (desktop)
    document.querySelectorAll('.fp-nav-item.has-sub').forEach(item => {
      let t;
      item.addEventListener('mouseenter', () => { clearTimeout(t); item.classList.add('open'); });
      item.addEventListener('mouseleave', () => { t = setTimeout(() => item.classList.remove('open'), 120); });
    });

    // Mobile sheet
    const toggle = document.querySelector('.fp-mobile-toggle');
    const close  = document.querySelector('.fp-mobile-close');
    const sheet  = document.querySelector('.fp-mobile-sheet');
    if (toggle && sheet) {
      toggle.addEventListener('click', () => {
        sheet.classList.add('open');
        sheet.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      });
    }
    if (close && sheet) {
      close.addEventListener('click', () => {
        sheet.classList.remove('open');
        sheet.setAttribute('aria-hidden', 'true');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    }

    // Active state on nav
    if (active) {
      const el = document.querySelector(`[data-nav="${active}"] .fp-nav-link`);
      if (el) el.classList.add('fp-nav-link-active');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
