// Draws a repository block in the navbar (name, latest release, stars, forks),
// the way Material for MkDocs does. Reads the public GitHub API once a day per
// browser and keeps the result in localStorage; falls back to the name alone.
(function () {
  var me = document.currentScript || document.querySelector('script[src$="repo-stats.js"]');
  var full = (me && me.getAttribute("data-repo")) || "atlas-bear/atlas-bear.github.io";
  var owner = full.split("/")[0];
  var repo = full.split("/")[1];
  var key = "atlas-repo-stats:" + owner + "/" + repo;
  var ttl = 24 * 60 * 60 * 1000;

  function icon() {
    return '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';
  }

  function render(stats) {
    // The block sits with the other utilities at the right end of the bar (after the
    // search box, before the colour toggle), where readers expect a repository link.
    var tools = document.querySelector(".navbar .quarto-navbar-tools");
    var nav = document.querySelector("#navbarCollapse .navbar-nav.ms-auto, #navbarCollapse .navbar-nav:last-of-type");
    if ((!tools && !nav) || document.querySelector(".atlas-repo")) return;
    var li = document.createElement(tools ? "div" : "li");
    li.className = tools ? "atlas-repo-wrap" : "nav-item";
    // Octicons, as Material for MkDocs uses: tag, star, repo-forked (MIT, github/octicons).
    var tag = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg>';
    var star = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"/></svg>';
    var fork = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/></svg>';
    var facts = [];
    if (stats.release) facts.push("<span>" + tag + stats.release + "</span>");
    if (typeof stats.stars === "number") facts.push("<span>" + star + stats.stars + "</span>");
    if (typeof stats.forks === "number") facts.push("<span>" + fork + stats.forks + "</span>");
    li.innerHTML =
      '<a class="atlas-repo" href="https://github.com/' + owner + "/" + repo + '" title="' + owner + "/" + repo + ' on GitHub">' +
      icon() +
      '<span><span class="atlas-repo__name">' + repo + "</span>" +
      (facts.length ? '<span class="atlas-repo__facts">' + facts.join("") + "</span>" : "") +
      "</span></a>";
    var github = document.querySelector('#navbarCollapse a[href="https://github.com/' + owner + "/" + repo + '"]');
    if (github && github.closest("li")) github.closest("li").remove();
    if (tools) {
      var toggle = tools.querySelector(".quarto-color-scheme-toggle");
      tools.insertBefore(li, toggle || null);
    } else {
      nav.appendChild(li);
    }
  }

  function load() {
    try {
      var cached = JSON.parse(localStorage.getItem(key) || "null");
      if (cached && Date.now() - cached.at < ttl) return render(cached);
    } catch (e) {}
    var stats = { at: Date.now() };
    fetch("https://api.github.com/repos/" + owner + "/" + repo)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (d) { stats.stars = d.stargazers_count; stats.forks = d.forks_count; }
        return fetch("https://api.github.com/repos/" + owner + "/" + repo + "/releases/latest");
      })
      .then(function (r) { return r && r.ok ? r.json() : null; })
      .then(function (d) {
        if (d && d.tag_name) stats.release = d.tag_name;
        try { localStorage.setItem(key, JSON.stringify(stats)); } catch (e) {}
        render(stats);
      })
      .catch(function () { render(stats); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", load);
  else load();
})();
