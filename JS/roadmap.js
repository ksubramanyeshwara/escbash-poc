/* JS/roadmap.js — Roadmaps hub grid/list toggle and status tracking. */
/* Roadmaps hub Grid/List layout toggle & status tracking */
      (function () {
        const STORAGE_KEY = "escbash_roadmaps_hub_v1";
        const VIEW_STORAGE_KEY = "escbash_roadmaps_view_v1";
        const ORDER = ["in_progress", "completed"];
        const STATUS_ICONS = {
          completed: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
          in_progress: `<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 2a6 6 0 0 1 0 12V2z"/></svg>`,
        };
        const STATUS_LABELS = {
          completed: "Completed",
          in_progress: "In progress",
        };
        const STATUS_CLASSES = {
          completed: "is-completed",
          in_progress: "is-progress",
        };

        const grid = document.getElementById("roadmapsGrid");
        const viewBtns = Array.from(document.querySelectorAll(".vs-btn"));
        if (!grid) return;

        function loadSavedStatuses() {
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
          } catch (e) {
            return {};
          }
        }

        function saveStatuses(map) {
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
          } catch (e) {}
        }

        function renderCardStatus(card, status) {
          const btn = card.querySelector(".rm-status-btn");
          if (!btn) return;
          if (status === "completed" || status === "in_progress") {
            const label = STATUS_LABELS[status];
            const cls = STATUS_CLASSES[status];
            card.dataset.status = status;
            btn.style.display = "inline-flex";
            btn.className = `rm-status-btn ${cls}`;
            btn.innerHTML = STATUS_ICONS[status];
            btn.title = `Status: ${label} (click to toggle)`;
            btn.setAttribute(
              "aria-label",
              `Toggle ${card.dataset.title || "roadmap"} status (currently ${label})`
            );
          } else {
            card.dataset.status = "";
            btn.style.display = "none";
          }
        }

        const saved = loadSavedStatuses();
        grid.querySelectorAll(".rm-card").forEach((card) => {
          const id = card.dataset.roadmapId;
          const initial =
            id && saved[id] && STATUS_LABELS[saved[id]]
              ? saved[id]
              : card.dataset.status || "planned";
          renderCardStatus(card, initial);
        });

        function loadSavedView() {
          try {
            const v = localStorage.getItem(VIEW_STORAGE_KEY);
            return v === "list" || v === "grid" ? v : "grid";
          } catch (e) {
            return "grid";
          }
        }

        function saveView(mode) {
          try {
            localStorage.setItem(VIEW_STORAGE_KEY, mode);
          } catch (e) {}
        }

        function setView(mode, persist = true) {
          const nextMode = mode === "list" ? "list" : "grid";
          const isList = nextMode === "list";
          document.documentElement.dataset.rmView = nextMode;
          grid.classList.toggle("is-list", isList);
          viewBtns.forEach((btn) => {
            const active = btn.dataset.view === nextMode;
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", active ? "true" : "false");
          });
          if (persist) saveView(nextMode);
          if (typeof window.__refreshReveals === "function") {
            requestAnimationFrame(() => window.__refreshReveals(true));
          }
        }

        setView(loadSavedView(), false);

        viewBtns.forEach((btn) => {
          btn.addEventListener("click", () => setView(btn.dataset.view || "grid", true));
        });

        grid.querySelectorAll(".rm-status-btn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const card = btn.closest(".rm-card");
            if (!card) return;
            const current = card.dataset.status || "in_progress";
            const next = current === "completed" ? "in_progress" : "completed";
            const store = loadSavedStatuses();
            if (card.dataset.roadmapId) {
              store[card.dataset.roadmapId] = next;
              saveStatuses(store);
            }
            renderCardStatus(card, next);
            toast(`${card.dataset.title || "Roadmap"} marked ${STATUS_LABELS[next]}.`);
          });
        });

        function openCard(card) {
          const href = card.dataset.href;
          if (href) {
            if (typeof window.__escbashGo === "function") window.__escbashGo(href);
            else location.href = href;
          } else {
            const title = card.dataset.title || "This";
            toast(`${title} roadmap coming soon.`);
          }
        }

        grid.querySelectorAll(".rm-card").forEach((card) => {
          card.addEventListener("click", (e) => {
            if (e.target.closest(".rm-status-btn, a")) return;
            openCard(card);
          });
          card.addEventListener("keydown", (e) => {
            if (e.target.closest(".rm-status-btn, a")) return;
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openCard(card);
            }
          });
        });
      })();
