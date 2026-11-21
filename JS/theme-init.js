/* JS/theme-init.js — Pre-paint initialization (theme, view mode, view-transition). Runs synchronously in <head>. */
document.documentElement.classList.add("js");
try {
  const t = localStorage.getItem("linux_lighthouse_theme");
  if (t) document.documentElement.dataset.theme = t;
  const v = localStorage.getItem("escbash_roadmaps_view_v1");
  if (v === "list" || v === "grid") document.documentElement.dataset.rmView = v;
} catch (e) {}
if ("onpagereveal" in window) {
  window.addEventListener(
    "pagereveal",
    function (e) {
      if (e.viewTransition) document.documentElement.classList.add("vt-active");
    },
    { once: true }
  );
}
