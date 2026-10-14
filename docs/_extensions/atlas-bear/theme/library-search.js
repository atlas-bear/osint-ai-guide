// A search box in the navigation bar that searches every site in the Library
// at once. It fetches one prebuilt index of documents from the Library site
// (data-index), runs MiniSearch in the browser and lists the results grouped
// by site, with the current site first (data-source). Nothing leaves the page:
// the index is a static file and the query is never sent anywhere.
(function () {
  var me = document.currentScript || document.querySelector('script[src$="library-search.js"]');
  if (!me) return;
  var indexURL = me.getAttribute("data-index") || "https://library.ab-labs.io/search-index.json";
  var here = me.getAttribute("data-source") || "";
  // MiniSearch is published next to the index by the Library site, so a site needs
  // nothing but this script; the copy next to this file is the fallback.
  var engine = indexURL.replace(/[^/]*$/, "") + "minisearch.min.js";
  var local = me.src.replace(/[^/]*$/, "") + "minisearch.min.js";
  var PER_SOURCE = 6, MAX_CHARS = 2, DEBOUNCE = 120;
  var mini = null, byId = {}, sources = [], loading = null;
  var root, form, input, panel, openBtn, items = [], active = -1, lastQuery = "";

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  function loadScript(url) {
    return new Promise(function (resolve, reject) {
      if (window.MiniSearch) return resolve();
      var s = document.createElement("script");
      s.src = url; s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function ensure() {
    if (loading) return loading;
    loading = Promise.all([
      loadScript(engine).catch(function () { return loadScript(local); }),
      fetch(indexURL, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error("index " + r.status); return r.json(); })
    ]).then(function (pair) {
      var data = pair[1];
      sources = data.sources || [];
      mini = new window.MiniSearch({
        fields: ["title", "section", "meta", "text"],
        storeFields: ["source"],
        searchOptions: { boost: { title: 3, section: 2, meta: 1.5 }, prefix: true, fuzzy: 0.2, combineWith: "AND" }
      });
      data.docs.forEach(function (d) { byId[d.id] = d; });
      mini.addAll(data.docs);
    });
    return loading;
  }

  function snippet(text, terms) {
    text = text || "";
    var lower = text.toLowerCase(), at = -1;
    for (var i = 0; i < terms.length && at < 0; i++) at = lower.indexOf(terms[i].toLowerCase());
    var start = at < 0 ? 0 : Math.max(0, at - 70);
    var end = Math.min(text.length, start + 190);
    var out = esc(text.slice(start, end));
    if (start > 0) out = "…" + out;
    if (end < text.length) out = out + "…";
    terms.forEach(function (t) {
      if (t.length < 2) return;
      out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return out;
  }

  function render(query) {
    var hits = mini.search(query);
    var groups = {}, order = [];
    sources.forEach(function (s) { if (s.key === here) order.push(s.key); });
    sources.forEach(function (s) { if (s.key !== here) order.push(s.key); });
    hits.forEach(function (h) {
      (groups[h.source] = groups[h.source] || []).push(h);
    });
    var html = "", n = 0;
    items = [];
    order.forEach(function (key) {
      var list = groups[key];
      if (!list) return;
      var src = sources.filter(function (s) { return s.key === key; })[0] || { title: key };
      html += '<div class="lib-search__source">' + esc(src.title) + (key === here ? " (this site)" : "") + "</div>";
      list.slice(0, PER_SOURCE).forEach(function (h) {
        var d = byId[h.id];
        var crumb = [d.section, d.meta].filter(Boolean).join(" · ");
        html += '<a class="lib-search__item" href="' + esc(d.url) + '" data-i="' + items.length + '">' +
          '<span class="lib-search__title">' + esc(d.title) + "</span>" +
          (crumb ? '<span class="lib-search__crumb">' + esc(crumb) + "</span>" : "") +
          '<span class="lib-search__snippet">' + snippet(d.text, h.terms) + "</span></a>";
        items.push(d.url);
      });
      n += list.length;
    });
    if (!n) html = '<div class="lib-search__empty">Nothing in the Library matches “' + esc(query) + "”.</div>";
    else html += '<div class="lib-search__foot">' + n + (n === 1 ? " result" : " results") + " across the Library · ↑↓ to move, Enter to open, Esc to close</div>";
    panel.innerHTML = html;
    panel.hidden = false;
    active = -1;
  }

  function update() {
    var q = input.value.trim();
    lastQuery = q;
    if (q.length < MAX_CHARS) { panel.hidden = true; return; }
    ensure().then(function () { if (input.value.trim() === q) render(q); })
      .catch(function () { panel.innerHTML = '<div class="lib-search__empty">The search index could not be loaded. Try again in a moment.</div>'; panel.hidden = false; });
  }

  function setActive(i) {
    var nodes = panel.querySelectorAll(".lib-search__item");
    if (!nodes.length) return;
    active = (i + nodes.length) % nodes.length;
    nodes.forEach(function (n, k) { n.classList.toggle("is-active", k === active); });
    nodes[active].scrollIntoView({ block: "nearest" });
  }

  function close() { panel.hidden = true; root.classList.remove("lib-search--open"); }

  function build() {
    var tools = document.querySelector(".navbar .quarto-navbar-tools");
    var navbar = document.querySelector(".navbar .navbar-container");
    if (!navbar || document.querySelector(".lib-search")) return;
    root = document.createElement("div");
    root.className = "lib-search";
    var icon = '<svg class="lib-search__icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"/></svg>';
    root.innerHTML =
      '<button type="button" class="lib-search__open" aria-label="Search the Library">' + icon + "</button>" +
      '<form class="lib-search__form" role="search" autocomplete="off">' + icon +
      '<input type="search" class="lib-search__input" placeholder="Search the Library" aria-label="Search the Library" spellcheck="false">' +
      '<kbd class="lib-search__kbd" aria-hidden="true">/</kbd></form>' +
      '<div class="lib-search__panel" hidden></div>';
    if (tools) tools.insertBefore(root, tools.firstChild); else navbar.appendChild(root);
    form = root.querySelector("form"); input = root.querySelector("input"); panel = root.querySelector(".lib-search__panel"); openBtn = root.querySelector(".lib-search__open");

    var timer;
    input.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(update, DEBOUNCE); });
    input.addEventListener("focus", function () { ensure().catch(function () {}); if (lastQuery.length >= MAX_CHARS && panel.innerHTML) panel.hidden = false; });
    form.addEventListener("submit", function (e) { e.preventDefault(); if (active >= 0 && items[active]) window.location.href = items[active]; else if (items[0]) window.location.href = items[0]; });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
      else if (e.key === "Escape") { close(); input.blur(); }
    });
    openBtn.addEventListener("click", function () { root.classList.add("lib-search--open"); input.focus(); });
    panel.addEventListener("mousedown", function (e) { e.preventDefault(); });
    document.addEventListener("click", function (e) { if (!root.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      var typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
      if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault(); root.classList.add("lib-search--open"); input.focus(); input.select();
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
