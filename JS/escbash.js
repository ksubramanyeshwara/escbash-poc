/* escbash.js — vanilla rebuild of the escbash home page interactions.
   The markup is pre-rendered; this file only ports the behaviours that used
   to live in the design-component runtime (menus, theme, reveal, hero, steps). */
(function () {
  'use strict';

  var DATA = window.__escbashData || {};
  var JOURNEY_STEPS = [
    { title: 'Pick a path or course', duration: 3600 },
    { title: 'Read lesson, Run commands', duration: 4600 },
    { title: 'Complete tasks, Get graded', duration: 4600 },
    { title: 'Complete quizzes', duration: 3600 },
    { title: 'Earn certificate', duration: 3600 }
  ];
  var JOURNEY_COUNT = JOURNEY_STEPS.length;
  var COURSE_HREFS = {
    Linux: 'linux-course.html',
    Networking: 'linux-course.html',
    'Shell Scripting': 'linux-course-v1.html',
    Docker: 'course-complete.html'
  };

  function EscbashApp() {
    this.state = {
      courseOpen: false,
      roadmapOpen: false,
      courseTab: 'devops',
      roadmapTab: 'all',
      step: 0,
      tick: 0,
      panelLeft: '0px',
      panelWidth: '640px',
      rmPanelLeft: '0px',
      rmPanelWidth: '640px'
    };

    this._rafId = null;
    this._journeyVisible = false;
    this._heroVisible = false;
    this._elapsed = 0;
    this._lastTs = null;
    this._duration = 6000;
    this._toastTimer = null;
  }

  /* ---------------------------------------------------------------- toast */

  EscbashApp.prototype.showToast = function (msg) {
    var e = document.getElementById('toast');
    if (!e) {
      e = document.createElement('div');
      e.id = 'toast';
      e.className = 'toast';
      e.setAttribute('role', 'status');
      document.body.appendChild(e);
    }
    e.textContent = msg;
    e.hidden = false;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(function () {
      e.hidden = true;
    }, 2400);
  };

  /* ---------------------------------------------------------------- theme */

  EscbashApp.prototype.toggleTheme = function () {
    var r = document.documentElement;
    var dark = r.dataset.theme
      ? r.dataset.theme === 'dark'
      : (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches);
    var next = dark ? 'light' : 'dark';
    r.dataset.theme = next;
    try {
      localStorage.setItem('linux_lighthouse_theme', next);
    } catch (e) {}
    this.syncHeroVideos(true);
    this.syncJourneyVideos();
  };

  /* -------------------------------------------------------------- menus */

  EscbashApp.prototype.computePanelPos = function (btnId, prefix) {
    btnId = btnId || 'courseMenuBtn';
    prefix = prefix || 'panel';
    var leftKey = prefix + 'Left';
    var widthKey = prefix + 'Width';
    var out = {};
    if (window.innerWidth <= 768) {
      out[leftKey] = '12px';
      out[widthKey] = 'auto';
      return out;
    }
    var headerInner = document.querySelector('.header-inner');
    var btn = document.getElementById(btnId);
    if (!headerInner || !btn) {
      out[leftKey] = '0px';
      out[widthKey] = '640px';
      return out;
    }
    var hRect = headerInner.getBoundingClientRect();
    var bRect = btn.getBoundingClientRect();
    var lastLink = headerInner.querySelector('.nav-links > :last-child');
    var lRect = lastLink ? lastLink.getBoundingClientRect() : bRect;
    var maxW = Math.max(320, hRect.width - 24);
    var left = Math.round(bRect.left - hRect.left);
    var width = Math.round(lRect.right - bRect.left);
    if (width < 600) width = Math.min(640, maxW);
    if (left + width > hRect.width - 12) {
      left = Math.max(12, Math.round(hRect.width - width - 12));
    }
    out[leftKey] = left + 'px';
    out[widthKey] = width + 'px';
    return out;
  };

  EscbashApp.prototype.applyMenu = function (kind) {
    var isCourse = kind === 'course';
    var open = isCourse ? this.state.courseOpen : this.state.roadmapOpen;
    var panel = document.getElementById(isCourse ? 'courseMenuDropdown' : 'roadmapMenuDropdown');
    var btn = document.getElementById(isCourse ? 'courseMenuBtn' : 'roadmapMenuBtn');
    if (!panel || !btn) return;
    panel.classList.toggle('open', open);
    panel.style.left = isCourse ? this.state.panelLeft : this.state.rmPanelLeft;
    panel.style.width = isCourse ? this.state.panelWidth : this.state.rmPanelWidth;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  EscbashApp.prototype.setMenu = function (kind, open) {
    if (kind === 'course') {
      this.state.courseOpen = open;
      if (open) {
        this.state.roadmapOpen = false;
        var pos = this.computePanelPos('courseMenuBtn', 'panel');
        this.state.panelLeft = pos.panelLeft;
        this.state.panelWidth = pos.panelWidth;
        this.applyMenu('roadmap');
      }
    } else {
      this.state.roadmapOpen = open;
      if (open) {
        this.state.courseOpen = false;
        var rm = this.computePanelPos('roadmapMenuBtn', 'rmPanel');
        this.state.rmPanelLeft = rm.rmPanelLeft;
        this.state.rmPanelWidth = rm.rmPanelWidth;
        this.applyMenu('course');
      }
    }
    this.applyMenu(kind);
  };

  EscbashApp.prototype.toggleCourseMenu = function () {
    this.setMenu('course', !this.state.courseOpen);
  };

  EscbashApp.prototype.toggleRoadmapMenu = function () {
    this.setMenu('roadmap', !this.state.roadmapOpen);
  };

  EscbashApp.prototype.selectCourseTab = function (tab) {
    this.state.courseTab = tab;
    var panel = document.getElementById('courseMenuDropdown');
    if (panel && DATA.course && DATA.course[tab]) panel.innerHTML = DATA.course[tab];
  };

  EscbashApp.prototype.selectRoadmapTab = function (tab) {
    this.state.roadmapTab = tab;
    var panel = document.getElementById('roadmapMenuDropdown');
    if (panel && DATA.roadmap && DATA.roadmap[tab]) panel.innerHTML = DATA.roadmap[tab];
  };

  EscbashApp.prototype.openCourseItem = function (name) {
    this.setMenu('course', false);
    var href = COURSE_HREFS[name];
    if (href) {
      if (window.__escbashGo) window.__escbashGo(href, { fromMenu: true });
      else window.location.href = href;
    } else {
      this.showToast(name + ' course coming soon.');
    }
  };

  EscbashApp.prototype.openRoadmapItem = function (name) {
    this.setMenu('roadmap', false);
    var href = DATA.roadmapHrefs && DATA.roadmapHrefs[name];
    if (href) {
      if (window.__escbashGo) window.__escbashGo(href, { fromMenu: true });
      else window.location.href = href;
    } else {
      this.showToast(name + ' roadmap coming soon.');
    }
  };

  EscbashApp.prototype.initCourseMenuListeners = function () {
    var self = this;
    var menus = [
      { key: 'courseOpen', btnId: 'courseMenuBtn', dropId: 'courseMenuDropdown', kind: 'course' },
      { key: 'roadmapOpen', btnId: 'roadmapMenuBtn', dropId: 'roadmapMenuDropdown', kind: 'roadmap' }
    ];
    this._onDocClick = function (e) {
      menus.forEach(function (m) {
        if (!self.state[m.key]) return;
        var drop = document.getElementById(m.dropId);
        var btn = document.getElementById(m.btnId);
        if (drop && btn && !drop.contains(e.target) && !btn.contains(e.target)) {
          self.setMenu(m.kind, false);
        }
      });
    };
    this._onDocKey = function (e) {
      if (e.key !== 'Escape') return;
      menus.forEach(function (m) {
        if (self.state[m.key]) {
          self.setMenu(m.kind, false);
          var btn = document.getElementById(m.btnId);
          if (btn) btn.focus();
        }
      });
    };
    this._onWinResize = function () {
      menus.forEach(function (m) {
        if (self.state[m.key]) {
          if (m.kind === 'course') {
            var pos = self.computePanelPos('courseMenuBtn', 'panel');
            self.state.panelLeft = pos.panelLeft;
            self.state.panelWidth = pos.panelWidth;
          } else {
            var rm = self.computePanelPos('roadmapMenuBtn', 'rmPanel');
            self.state.rmPanelLeft = rm.rmPanelLeft;
            self.state.rmPanelWidth = rm.rmPanelWidth;
          }
          self.applyMenu(m.kind);
        }
      });
    };
    document.addEventListener('click', this._onDocClick);
    document.addEventListener('keydown', this._onDocKey);
    window.addEventListener('resize', this._onWinResize);
  };

  /* ---------------------------------------------------------- scroll reveal */

  EscbashApp.prototype.initScrollAnimations = function () {
    var self = this;
    this._scrollRafId = null;
    var SHIFT = 28;
    var reduced = function () {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    var updateReveals = function () {
      self._scrollRafId = null;
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var items = document.querySelectorAll('.fade-up');
      if (reduced()) {
        items.forEach(function (el) {
          el.classList.remove('from-top');
          el.classList.add('visible');
        });
        return;
      }
      var enterBottom = vh - 32;
      var enterTop = 32;
      var exitMargin = 24;
      items.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var isVisible = el.classList.contains('visible');
        if (isVisible) {
          if (rect.bottom <= -exitMargin) {
            el.classList.remove('visible');
            el.classList.add('from-top');
          } else if (rect.top >= vh + exitMargin) {
            el.classList.remove('visible', 'from-top');
          }
        } else {
          var offset = el.classList.contains('from-top') ? -SHIFT : SHIFT;
          var restTop = rect.top - offset;
          var restBottom = rect.bottom - offset;
          if (restTop < enterBottom && restBottom > enterTop) {
            el.classList.add('visible');
          } else if (restBottom <= -exitMargin) {
            el.classList.add('from-top');
          } else if (restTop >= vh + exitMargin) {
            el.classList.remove('from-top');
          }
        }
      });
      self.setJourneyVisible(self.checkJourneyFocus());
    };

    var scheduleReveal = function () {
      if (self._scrollRafId !== null) return;
      self._scrollRafId = requestAnimationFrame(updateReveals);
    };

    this._onScrollReveal = scheduleReveal;
    window.addEventListener('scroll', scheduleReveal, { passive: true });
    window.addEventListener('resize', scheduleReveal, { passive: true });

    var observer = new IntersectionObserver(function () {
      scheduleReveal();
    }, {
      threshold: [0, 0.05]
    });
    this._scrollObserver = observer;
    document.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });

    updateReveals();
    requestAnimationFrame(updateReveals);
  };

  /* -------------------------------------------------------------- journey */

  var STEP_CHECK_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  EscbashApp.prototype.syncJourneyVideos = function () {
    /* Kept as a no-op compatibility hook for theme toggles. */
  };

  EscbashApp.prototype.checkJourneyFocus = function () {
    var deckEl = document.getElementById('journeyDeck') || document.getElementById('journeyTerminal') || document.getElementById('journey');
    if (!deckEl) return false;
    var rect = deckEl.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var visibleHeight = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
    var ratio = rect.height > 0 ? (visibleHeight / rect.height) : 0;
    return ratio >= 0.35 || (rect.height > vh && (visibleHeight / vh) >= 0.35);
  };

  EscbashApp.prototype.setJourneyVisible = function (visible) {
    if (visible) {
      if (!this._journeyVisible) {
        this._journeyVisible = true;
        this._lastTs = null;
        this.startRaf();
      }
    } else {
      if (this._journeyVisible) {
        this._journeyVisible = false;
        this._lastTs = null;
        this.stopRaf();
      }
    }
  };

  EscbashApp.prototype.initJourneyObserver = function () {
    var self = this;
    this._journeyHoverPaused = false;
    setTimeout(function () {
      var deckEl = document.getElementById('journeyDeck');
      var observeTarget = deckEl || document.getElementById('journeyTerminal') || document.getElementById('journey');
      if (!observeTarget) return;

      if (deckEl) {
        deckEl.addEventListener('mouseenter', function () {
          self._journeyHoverPaused = true;
          self._lastTs = null;
        });
        deckEl.addEventListener('mouseleave', function () {
          self._journeyHoverPaused = false;
          self._lastTs = null;
        });
        deckEl.addEventListener('click', function () {
          if (window.innerWidth <= 820) {
            self._journeyHoverPaused = !self._journeyHoverPaused;
            self._lastTs = null;
          }
        });
      }

      var observer = new IntersectionObserver(function () {
        var isAtLeast = self.checkJourneyFocus();
        self.setJourneyVisible(isAtLeast);
      }, {
        threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.35, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      });

      self._journeyObserver = observer;
      observer.observe(observeTarget);

      self.setJourneyVisible(self.checkJourneyFocus());
    }, 120);
  };

  EscbashApp.prototype.applyStepUI = function (i) {
    var leftCol = this._leftCol;
    if (!leftCol) return;
    var rows = leftCol.children;
    for (var idx = 0; idx < rows.length; idx++) {
      var row = rows[idx];
      var btn = row.querySelector('.req-step-btn');
      if (!btn) continue;
      var active = idx === i;
      var done = idx < i;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('is-active', active);
      btn.classList.toggle('is-done', done);

      var icon = row.querySelector('[class^="req-step-icon-"]');
      if (icon) {
        var stepNum = icon.getAttribute('data-step-num') || String(idx + 1);
        if (done) {
          icon.className = 'req-step-icon-done';
          icon.style.background = 'var(--lamp-soft)';
          icon.style.color = 'var(--lamp)';
          icon.innerHTML = STEP_CHECK_SVG;
        } else if (active) {
          icon.className = 'req-step-icon-active';
          icon.style.background = 'var(--lamp-soft)';
          icon.style.color = 'var(--lamp)';
          icon.innerHTML = '<span class="sc-interp">' + stepNum + '</span>';
        } else {
          icon.className = 'req-step-icon-inactive';
          icon.style.background = 'var(--step-icon-bg)';
          icon.style.color = 'var(--mute)';
          icon.innerHTML = '<span class="sc-interp">' + stepNum + '</span>';
        }
      }

      var title = row.querySelector('[class^="req-step-title-"]');
      if (title) {
        if (active) {
          title.className = 'req-step-title-active';
          title.style.color = 'var(--ink)';
        } else if (done) {
          title.className = 'req-step-title-done';
          title.style.color = 'var(--ink)';
        } else {
          title.className = 'req-step-title-inactive';
          title.style.color = 'var(--mute)';
        }
      }

      var acc = row.querySelector('.req-acc-wrap');
      if (acc) acc.className = 'req-acc-wrap ' + (active ? 'req-acc-open' : 'req-acc-closed');

      var divider = row.querySelector(':scope > div') || row.nextElementSibling;
      if (divider) {
        var hideDiv = active || idx === i - 1 || idx === rows.length - 1;
        divider.style.background = hideDiv ? 'transparent' : 'var(--line)';
      }
    }
  };

  EscbashApp.prototype.renderJourney = function () {
    var i = this.state.step || 0;
    this.applyStepUI(i);

    var cards = document.querySelectorAll('#journeyDeck [data-jcard]');
    if (cards && cards.length) {
      cards.forEach(function (card) {
        var idx = parseInt(card.getAttribute('data-jcard'), 10);
        card.classList.toggle('is-active', idx === i);
        if (card.hasAttribute('data-phase')) {
          card.setAttribute('data-phase', '0');
        }
      });
    }
  };

  EscbashApp.prototype.stopRaf = function () {
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  };

  EscbashApp.prototype.resetBars = function () {
    document.querySelectorAll('[data-step-bar]').forEach(function (b) {
      b.style.transform = 'scaleX(0)';
    });
  };

  EscbashApp.prototype.startRaf = function () {
    var self = this;
    if (this._rafId !== null || !this._journeyVisible) return;
    this._lastTs = null;

    var frame = function (now) {
      if (!self._journeyVisible) {
        self._rafId = null;
        self._lastTs = null;
        return;
      }

      if (self._journeyHoverPaused) {
        self._lastTs = now;
        self._rafId = requestAnimationFrame(frame);
        return;
      }

      if (self._lastTs === null) {
        self._lastTs = now;
      }
      var dt = Math.min(100, Math.max(0, now - self._lastTs));
      self._lastTs = now;
      self._elapsed = (self._elapsed || 0) + dt;

      var i = self.state.step || 0;
      var stepInfo = JOURNEY_STEPS[i] || { duration: 3600 };
      var duration = stepInfo.duration || 3600;

      if (self._elapsed >= duration) {
        self._elapsed = 0;
        self.resetBars();
        self.state.step = (i + 1) % JOURNEY_COUNT;
        self.state.tick = (self.state.tick || 0) + 1;
        self.renderJourney();
        i = self.state.step;
      }

      var stepDuration = (JOURNEY_STEPS[i] && JOURNEY_STEPS[i].duration) || 3600;
      var stepProgress = Math.min(1, Math.max(0, self._elapsed / stepDuration));
      var activeBar = document.querySelector('[data-step-bar="' + i + '"]');
      if (activeBar) {
        activeBar.style.transform = 'scaleX(' + stepProgress + ')';
      }

      var activeCard = document.querySelector('#journeyDeck [data-jcard="' + i + '"]');
      if (activeCard && activeCard.hasAttribute('data-phase')) {
        var phase = stepProgress >= 0.5 ? '1' : '0';
        if (activeCard.getAttribute('data-phase') !== phase) {
          activeCard.setAttribute('data-phase', phase);
        }
      }

      self._rafId = requestAnimationFrame(frame);
    };

    this._rafId = requestAnimationFrame(frame);
  };

  EscbashApp.prototype.selectStep = function (i) {
    if (i < 0 || i >= JOURNEY_COUNT) return;
    this._elapsed = 0;
    this._lastTs = null;
    this.resetBars();
    this.state.step = i;
    this.state.tick = (this.state.tick || 0) + 1;
    this.renderJourney();
    if (this._journeyVisible && this._rafId === null) {
      this.startRaf();
    }
  };

  /* ----------------------------------------------------------------- hero */

  EscbashApp.prototype.checkHeroFocus = function () {
    var heroEl = document.getElementById('labScreenContainer') || document.getElementById('lab-window');
    if (!heroEl) return false;
    var rect = heroEl.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var visibleHeight = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
    var ratio = rect.height > 0 ? (visibleHeight / rect.height) : 0;
    return ratio >= 0.8 || (rect.height > vh && (visibleHeight / vh) >= 0.8);
  };

  EscbashApp.prototype.getHeroClips = function () {
    return [
      {
        darkId: 'labVideoDark',
        lightId: 'labVideoLight',
        splashTitle: 'Lesson',
        splashSub: 'The shell & first commands',
        caption: 'Interactive Linux playground · real commands on a dedicated Ubuntu machine'
      },
      {
        darkId: 'labTaskVideoDark',
        lightId: 'labTaskVideoLight',
        splashTitle: 'Task',
        splashSub: 'Create a workspace',
        caption: 'Hands-on task assessment · instant checks, hints, solutions & verification'
      },
      {
        darkId: 'labQuizVideoDark',
        lightId: 'labQuizVideoLight',
        splashTitle: 'Quiz',
        splashSub: 'Redirecting output',
        caption: 'Quick knowledge checks · confirm every concept before moving on'
      }
    ];
  };

  EscbashApp.prototype.isHeroDark = function () {
    var dt = document.documentElement.getAttribute('data-theme');
    if (dt === 'dark') return true;
    if (dt === 'light') return false;
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  };

  EscbashApp.prototype.clearHeroTimers = function () {
    if (this._heroSplashTimer) {
      clearTimeout(this._heroSplashTimer);
      this._heroSplashTimer = null;
    }
    if (this._heroSwapTimer) {
      clearTimeout(this._heroSwapTimer);
      this._heroSwapTimer = null;
    }
  };

  EscbashApp.prototype.updateHeroSplashContent = function (idx) {
    var clips = this.getHeroClips();
    var clip = clips[idx];
    if (!clip) return;
    document.querySelectorAll('[data-splash-icon]').forEach(function (el) {
      var isAct = parseInt(el.getAttribute('data-splash-icon'), 10) === idx;
      el.classList.toggle('is-active', isAct);
    });
    var spTitle = document.getElementById('heroSplashTitle');
    if (spTitle) spTitle.textContent = clip.splashTitle;
    var spSub = document.getElementById('heroSplashSub');
    if (spSub) spSub.textContent = clip.splashSub;
    var capEl = document.getElementById('heroCaption');
    if (capEl) capEl.textContent = clip.caption;
  };

  EscbashApp.prototype.activateHeroClipDOM = function (idx) {
    var clips = this.getHeroClips();
    this._activeHeroClip = idx;
    document.querySelectorAll('[data-hero-clip]').forEach(function (el) {
      var isAct = parseInt(el.getAttribute('data-hero-clip'), 10) === idx;
      el.classList.toggle('is-active', isAct);
    });
    clips.forEach(function (c) {
      [document.getElementById(c.darkId), document.getElementById(c.lightId)].forEach(function (v) {
        if (!v) return;
        try { v.pause(); } catch (e) {}
        try { v.currentTime = 0; } catch (e) {}
      });
    });
  };

  EscbashApp.prototype.revealActiveHeroVideo = function () {
    var splashEl = document.getElementById('heroSplash');
    this._heroSplashing = false;
    this.syncHeroVideos(false);
    if (splashEl) {
      splashEl.classList.add('leaving');
      splashEl.classList.remove('show');
    }
  };

  EscbashApp.prototype.transitionToHeroClip = function (idx, fromVideoEnd) {
    var self = this;
    var clips = this.getHeroClips();
    var nextIdx = ((idx % clips.length) + clips.length) % clips.length;
    var splashEl = document.getElementById('heroSplash');
    this.clearHeroTimers();
    this._heroSplashing = true;

    if (fromVideoEnd && splashEl) {
      this.updateHeroSplashContent(nextIdx);
      splashEl.classList.remove('leaving');
      void splashEl.offsetWidth;
      splashEl.classList.add('show');

      this._heroSwapTimer = setTimeout(function () {
        self._heroSwapTimer = null;
        self.activateHeroClipDOM(nextIdx);
        if (self._heroVisible) {
          self._heroSplashTimer = setTimeout(function () {
            self._heroSplashTimer = null;
            self.revealActiveHeroVideo();
          }, 1150);
        }
      }, 680);
    } else {
      this.activateHeroClipDOM(nextIdx);
      this.updateHeroSplashContent(nextIdx);
      if (splashEl) {
        splashEl.classList.remove('leaving');
        splashEl.classList.add('show');
      }
      if (this._heroVisible) {
        this._heroSplashTimer = setTimeout(function () {
          self._heroSplashTimer = null;
          self.revealActiveHeroVideo();
        }, 1200);
      }
    }
  };

  EscbashApp.prototype.syncHeroVideos = function (themeChanged) {
    var clips = this.getHeroClips();
    var activeIdx = this._activeHeroClip || 0;
    var isDark = this.isHeroDark();

    clips.forEach(function (c, i) {
      if (i === activeIdx) return;
      [document.getElementById(c.darkId), document.getElementById(c.lightId)].forEach(function (v) {
        if (v && !v.paused) {
          try { v.pause(); } catch (e) {}
        }
      });
    });

    var cur = clips[activeIdx];
    var vidDark = document.getElementById(cur.darkId);
    var vidLight = document.getElementById(cur.lightId);
    if (!vidDark || !vidLight) return;
    vidDark.muted = true;
    vidLight.muted = true;
    var activeVid = isDark ? vidDark : vidLight;
    var inactiveVid = isDark ? vidLight : vidDark;

    if (themeChanged && inactiveVid && inactiveVid.currentTime && !isNaN(inactiveVid.currentTime) && inactiveVid.currentTime > 0) {
      try { activeVid.currentTime = inactiveVid.currentTime; } catch (e) {}
    }
    if (inactiveVid && !inactiveVid.paused) {
      try { inactiveVid.pause(); } catch (e) {}
    }

    if (this._heroVisible && !this._heroSplashing) {
      if (activeVid && activeVid.paused) {
        activeVid.play().catch(function () {});
      }
    } else {
      if (activeVid && !activeVid.paused) {
        activeVid.pause();
      }
    }
  };

  EscbashApp.prototype.setHeroVisible = function (visible) {
    var self = this;
    if (this._heroVisible === visible) return;
    this._heroVisible = visible;

    if (visible && !this._heroStarted) {
      this._heroStarted = true;
      this.transitionToHeroClip(0, false);
      return;
    }

    if (visible && this._heroSplashing && !this._heroSplashTimer && !this._heroSwapTimer) {
      this._heroSplashTimer = setTimeout(function () {
        self._heroSplashTimer = null;
        self.revealActiveHeroVideo();
      }, 950);
      return;
    }

    this.syncHeroVideos(false);
  };

  EscbashApp.prototype.initHeroObserver = function () {
    var self = this;
    this._heroVisible = false;
    this._heroStarted = false;
    this._heroSplashing = true;
    this._activeHeroClip = 0;

    setTimeout(function () {
      var clips = self.getHeroClips();

      clips.forEach(function (c, idx) {
        [document.getElementById(c.darkId), document.getElementById(c.lightId)].forEach(function (v) {
          if (!v) return;
          /* React rendered these as muted properties; outerHTML capture drops the
             attribute, so restore it before the first play() call. */
          v.muted = true;
          v.defaultMuted = true;
          v.addEventListener('ended', function () {
            if ((self._activeHeroClip || 0) !== idx || self._heroSplashing) return;
            var isDark = self.isHeroDark();
            var expectedId = isDark ? c.darkId : c.lightId;
            if (v.id !== expectedId) return;
            self.transitionToHeroClip((idx + 1) % clips.length, true);
          });
        });
      });

      self._themeObserver = new MutationObserver(function () {
        self.syncHeroVideos(true);
        self.syncJourneyVideos();
      });
      self._themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

      /* Start the demo immediately on load instead of waiting until 80% of
         the hero is visible. */
      self.setHeroVisible(true);
    }, 120);
  };

  /* -------------------------------------------------------------- wiring */

  EscbashApp.prototype.bindClicks = function () {
    var self = this;
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.closest) return;

      if (t.closest('#theme')) {
        self.toggleTheme();
        return;
      }
      if (t.closest('#courseMenuBtn')) {
        self.toggleCourseMenu();
        return;
      }
      if (t.closest('#roadmapMenuBtn')) {
        self.toggleRoadmapMenu();
        return;
      }

      var courseTab = t.closest('#courseMenuDropdown [data-cm-tab]');
      if (courseTab) {
        self.selectCourseTab(courseTab.getAttribute('data-cm-tab'));
        return;
      }
      var roadmapTab = t.closest('#roadmapMenuDropdown [data-cm-tab]');
      if (roadmapTab) {
        self.selectRoadmapTab(roadmapTab.getAttribute('data-cm-tab'));
        return;
      }

      var courseCard = t.closest('#courseMenuDropdown [data-course-name]');
      if (courseCard) {
        self.openCourseItem(courseCard.getAttribute('data-course-name'));
        return;
      }
      var roadmapCard = t.closest('#roadmapMenuDropdown [data-roadmap-name]');
      if (roadmapCard) {
        self.openRoadmapItem(roadmapCard.getAttribute('data-roadmap-name'));
        return;
      }

      if (t.closest('#rmAllLink')) {
        var alreadyHandled = e.defaultPrevented;
        e.preventDefault();
        self.setMenu('roadmap', false);
        if (!alreadyHandled) {
          if (window.__escbashGo) window.__escbashGo('roadmap.html', { fromMenu: true });
          else window.location.href = 'roadmap.html';
        }
        return;
      }
      if (t.closest('#cmAllLink')) {
        e.preventDefault();
        self.setMenu('course', false);
        if (window.__escbashGo) window.__escbashGo('courses.html', { fromMenu: true });
        else window.location.href = 'courses.html';
        return;
      }

      var stepBtn = t.closest('#journey .req-step-btn');
      if (stepBtn && self._leftCol) {
        var rows = self._leftCol.children;
        for (var i = 0; i < rows.length; i++) {
          if (rows[i].contains(stepBtn)) {
            self.selectStep(i);
            break;
          }
        }
      }
    });
  };

  EscbashApp.prototype.init = function () {
    var firstBtn = document.querySelector('#journey .req-step-btn');
    this._leftCol = firstBtn ? firstBtn.parentElement.parentElement : null;

    this.renderJourney();
    this.initScrollAnimations();
    this.initJourneyObserver();
    this.initHeroObserver();
    this.initCourseMenuListeners();
    this.bindClicks();
  };

  function boot() {
    var app = new EscbashApp();
    app.init();
    window.__escbashApp = app;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

// --- Merged from nav.js ---
/* JS/nav.js — extracted from index.html on 2026-11-18. Same-origin smooth navigation + bfcache restore. */
    /* Smooth cross-page navigation & bfcache restore */
    (function () {
      if (window.__escbashNavBound) return;
      window.__escbashNavBound = true;
      const reducedMotion = () =>
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isSameOrigin = (u) =>
        location.protocol === "file:" ? u.protocol === "file:" : u.origin === location.origin;

      window.__escbashGo = function (dest, opts) {
        if (!dest) return;
        let url;
        try {
          url = new URL(dest, location.href);
        } catch (e) {
          location.href = dest;
          return;
        }
        if (url.pathname === location.pathname && url.hash) {
          location.href = url.href;
          return;
        }
        const openPanels = document.querySelectorAll(".cm-panel.open");
        const menuOpen = (opts && opts.fromMenu) || openPanels.length > 0;
        openPanels.forEach((p) => p.classList.remove("open"));
        document.querySelectorAll('.nav-link.course-trigger[aria-expanded="true"]').forEach((b) => {
          b.setAttribute("aria-expanded", "false");
        });

        if (reducedMotion()) {
          location.href = url.href;
          return;
        }
        const hasNativeVT =
          "onpagereveal" in window &&
          typeof CSS !== "undefined" &&
          CSS.supports &&
          CSS.supports("view-transition-name", "top-header");
        if (hasNativeVT) {
          if (menuOpen) {
            setTimeout(() => { location.href = url.href; }, 90);
          } else {
            location.href = url.href;
          }
          return;
        }
        document.documentElement.classList.add("page-leaving");
        setTimeout(() => { location.href = url.href; }, 140);
      };

      document.addEventListener("click", (e) => {
        if (e.defaultPrevented) return;
        const menuHashLink = e.target.closest(".top-header a[href^=\"#\"]");
        if (menuHashLink && menuHashLink.getAttribute("href") === "#") {
          e.preventDefault();
          return;
        }
        const a = e.target.closest("a[href]");
        if (!a || a.target || a.hasAttribute("download") || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        const rawHref = a.getAttribute("href") || "";
        if (!rawHref || rawHref.startsWith("#")) return;
        let url;
        try { url = new URL(a.href, location.href); } catch (err) { return; }
        if (!isSameOrigin(url) || !/\.html?$/i.test(url.pathname)) return;
        if (url.pathname === location.pathname && url.hash) return;
        e.preventDefault();
        window.__escbashGo(url.href);
      });

      window.addEventListener("pageshow", () => {
        document.documentElement.classList.remove("page-leaving");
        document.querySelectorAll(".cm-panel.open").forEach((p) => p.classList.remove("open"));
        document.querySelectorAll('.nav-link.course-trigger[aria-expanded="true"]').forEach((b) => {
          b.setAttribute("aria-expanded", "false");
        });
      });
    })();

// --- Merged from lab-hero-watch.js ---
/* JS/lab-hero-watch.js — extracted from index.html on 2026-11-18. Smooth-scrolls the lab hero watch button to #lab-window. */
    /* Lab hero watch button smooth scrolling */
    (function initLabHeroWatch() {
      document.addEventListener("click", function (e) {
        const btnWatch = e.target.closest("#heroWatchRunBtn, a[href='#lab-window']");
        if (btnWatch) {
          e.preventDefault();
          const target = document.getElementById("lab-window");
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      });
    })();

    (function initLandingMobileNav() {
      const header = document.querySelector(".top-header");
      const headerInner = header && header.querySelector(".header-inner");
      const navLinks = headerInner && headerInner.querySelector(".nav-links");
      const topActions = headerInner && headerInner.querySelector(".top-actions");

      const syncHeaderHeight = () => {
        if (!header) return;
        const h = Math.round(header.getBoundingClientRect().height);
        if (h > 0) document.documentElement.style.setProperty("--header-h", h + "px");
      };
      syncHeaderHeight();
      if (header && typeof ResizeObserver !== "undefined") {
        new ResizeObserver(syncHeaderHeight).observe(header);
      }
      window.addEventListener("resize", syncHeaderHeight);

      if (!headerInner || !navLinks || !topActions || document.getElementById("mobileMenuBtn")) return;

      const burger = document.createElement("button");
      burger.type = "button";
      burger.className = "nav-hamburger";
      burger.id = "mobileMenuBtn";
      burger.setAttribute("aria-label", "Open navigation menu");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-controls", "mobileNavDrawer");
      burger.innerHTML =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
        '<line x1="3" y1="6" x2="21" y2="6"></line>' +
        '<line x1="3" y1="12" x2="21" y2="12"></line>' +
        '<line x1="3" y1="18" x2="21" y2="18"></line>' +
        "</svg>";
      topActions.appendChild(burger);

      const backdrop = document.createElement("div");
      backdrop.className = "mob-drawer-backdrop";
      backdrop.id = "mobileNavBackdrop";

      const drawer = document.createElement("aside");
      drawer.className = "mob-drawer";
      drawer.id = "mobileNavDrawer";
      drawer.setAttribute("aria-label", "Mobile Navigation");
      drawer.setAttribute("aria-hidden", "true");

      const head = document.createElement("div");
      head.className = "mob-drawer-head";
      const title = document.createElement("span");
      title.className = "mob-drawer-title";
      title.textContent = "Navigation";
      const closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "mob-drawer-close";
      closeBtn.setAttribute("aria-label", "Close navigation menu");
      closeBtn.innerHTML =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
        '<line x1="18" y1="6" x2="6" y2="18"></line>' +
        '<line x1="6" y1="6" x2="18" y2="18"></line>' +
        "</svg>";
      head.appendChild(title);
      head.appendChild(closeBtn);
      drawer.appendChild(head);

      const list = document.createElement("nav");
      list.className = "mob-nav-list";
      list.setAttribute("aria-label", "Mobile Navigation Links");

      const setDrawerOpen = (open) => {
        drawer.classList.toggle("open", open);
        backdrop.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        drawer.setAttribute("aria-hidden", open ? "false" : "true");
        document.documentElement.style.overflow = open ? "hidden" : "";
        if (open) closeBtn.focus();
        else burger.focus();
      };

      const syncAccordion = (srcDrop, accPanel) => {
        if (!srcDrop || !accPanel) return;
        accPanel.innerHTML = "";
        const top = srcDrop.querySelector(".cm-top");
        const grid = srcDrop.querySelector(".cm-grid");
        const foot = srcDrop.querySelector(".cm-foot");
        if (top) accPanel.appendChild(top.cloneNode(true));
        if (grid) accPanel.appendChild(grid.cloneNode(true));
        if (foot) accPanel.appendChild(foot.cloneNode(true));
      };

      Array.from(navLinks.children).forEach((item) => {
        if (item.classList.contains("course-trigger")) {
          const targetId = item.getAttribute("aria-controls");
          const srcDrop = targetId && document.getElementById(targetId);
          const accBtn = document.createElement("button");
          accBtn.type = "button";
          accBtn.className = "mob-acc-btn";
          accBtn.setAttribute("aria-expanded", "false");
          accBtn.innerHTML =
            '<span></span><svg class="mob-acc-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>';
          accBtn.querySelector("span").textContent = item.textContent.trim();

          const accPanel = document.createElement("div");
          accPanel.className = "mob-acc-panel";

          accBtn.addEventListener("click", () => {
            const next = !accPanel.classList.contains("open");
            if (next) syncAccordion(srcDrop, accPanel);
            accPanel.classList.toggle("open", next);
            accBtn.setAttribute("aria-expanded", next ? "true" : "false");
          });

          accPanel.addEventListener("click", (e) => {
            if (!srcDrop) return;
            const tab = e.target.closest(".cm-tab");
            if (tab) {
              const origTab = srcDrop.querySelector('.cm-tab[data-cm-tab="' + tab.dataset.cmTab + '"]');
              if (origTab) origTab.click();
              syncAccordion(srcDrop, accPanel);
              return;
            }
            const card = e.target.closest(".cm-card");
            if (card) {
              const name = card.dataset.courseName || card.dataset.roadmapName || "";
              const origCard = Array.from(srcDrop.querySelectorAll(".cm-card")).find(
                (c) => (c.dataset.courseName || c.dataset.roadmapName || "") === name,
              );
              setDrawerOpen(false);
              if (origCard) origCard.click();
              return;
            }
            const allBtn = e.target.closest(".cm-all");
            if (allBtn) {
              e.preventDefault();
              const origAll = srcDrop.querySelector(".cm-all");
              setDrawerOpen(false);
              if (origAll) origAll.click();
            }
          });

          list.appendChild(accBtn);
          list.appendChild(accPanel);
        } else if (item.tagName === "A") {
          const a = document.createElement("a");
          a.className = "mob-nav-link" + (item.classList.contains("active") ? " active" : "");
          a.href = item.getAttribute("href") || "#";
          a.textContent = item.textContent.trim();
          a.addEventListener("click", () => setDrawerOpen(false));
          list.appendChild(a);
        }
      });

      drawer.appendChild(list);
      document.body.appendChild(backdrop);
      document.body.appendChild(drawer);

      burger.addEventListener("click", () => setDrawerOpen(true));
      closeBtn.addEventListener("click", () => setDrawerOpen(false));
      backdrop.addEventListener("click", () => setDrawerOpen(false));
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("open")) {
          setDrawerOpen(false);
        }
      });
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && drawer.classList.contains("open")) {
          setDrawerOpen(false);
        }
      });
    })();
