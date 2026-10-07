document.addEventListener('DOMContentLoaded', () => {
  /* ==================================================
     1. STATS COUNT-UP ANIMATION
     ================================================== */
  const statItems = document.querySelectorAll('.stat-item');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function formatValue(current, decimals, suffix) {
    return current.toFixed(decimals) + suffix;
  }

  function startCountUp() {
    statItems.forEach((item, i) => {
      const target = parseFloat(item.dataset.target);
      const suffix = item.dataset.suffix || '';
      const decimals = parseInt(item.dataset.decimals || '0', 10);
      const valueEl = item.querySelector('.stat-value');

      if (!valueEl) return;

      if (prefersReducedMotion) {
        valueEl.textContent = formatValue(target, decimals, suffix);
        return;
      }

      const duration = 1500 + i * 80;
      const startOffset = 480 + i * 90;

      setTimeout(() => {
        let startTime = null;

        function animate(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const eased = easeOutCubic(progress);
          const current = eased * target;

          valueEl.textContent = formatValue(current, decimals, suffix);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            valueEl.textContent = formatValue(target, decimals, suffix);
          }
        }

        requestAnimationFrame(animate);
      }, startOffset);
    });
  }

  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCountUp();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(statsSection);
    } else {
      startCountUp();
    }
  }

  /* ==================================================
     2. STICKY HEADER SCROLL EFFECT
     ================================================== */
  const headerWrapper = document.querySelector('.header-wrapper');
  function onScrollHeader() {
    if (window.scrollY > 40) {
      headerWrapper?.classList.add('scrolled');
    } else {
      headerWrapper?.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ==================================================
     3. SCROLL SPY FOR NAVIGATION
     ================================================== */
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-pill .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 180;
    let currentId = 'hero';

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    desktopLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileNavLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ==================================================
     4. NAVIGATION CLICKS & SMOOTH SCROLL
     ================================================== */
  const allNavAnchors = document.querySelectorAll('a[href^="#"]');
  allNavAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId) return;

      if (targetId === '#') {
        e.preventDefault();
        closeMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        closeMenu();
        targetEl.scrollIntoView({ behavior: 'smooth' });

        desktopLinks.forEach((l) => {
          if (l.getAttribute('href') === targetId) l.classList.add('active');
          else l.classList.remove('active');
        });
        mobileNavLinks.forEach((l) => {
          if (l.getAttribute('href') === targetId) l.classList.add('active');
          else l.classList.remove('active');
        });

        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  /* ==================================================
     4. MOBILE MENU INTERACTIVITY
     ================================================== */
  const burgerBtn = document.getElementById('burger-btn');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-sign-in-btn');

  function openMenu() {
    if (!burgerBtn || !mobileOverlay || !mobileMenu) return;
    burgerBtn.setAttribute('aria-expanded', 'true');
    mobileOverlay.removeAttribute('hidden');
    mobileMenu.removeAttribute('hidden');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!burgerBtn || !mobileOverlay || !mobileMenu) return;
    burgerBtn.setAttribute('aria-expanded', 'false');
    mobileOverlay.setAttribute('hidden', '');
    mobileMenu.setAttribute('hidden', '');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    const isExpanded = burgerBtn?.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && burgerBtn?.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burgerBtn?.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  /* ==================================================
     5. WHATSAPP FAST INQUIRY FORM
     ================================================== */
  const inquiryForm = document.getElementById('inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value.trim() || '';
      const phone = document.getElementById('phone')?.value.trim() || '';
      const projectType = document.getElementById('projectType')?.value || '';
      const message = document.getElementById('message')?.value.trim() || '';

      const lines = [
        `*ApexGen Project Inquiry*`,
        ``,
        `*Name:* ${name}`,
        `*Phone / Contact:* ${phone}`,
        `*Scope:* ${projectType}`,
      ];

      if (message) {
        lines.push(`*Project Details:* ${message}`);
      }

      const encodedText = encodeURIComponent(lines.join('\n'));
      const whatsappUrl = `https://wa.me/94789656969?text=${encodedText}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
