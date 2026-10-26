/*
 * NessaHub Guide — app.
 * No libraries, no network requests. All content is inserted as text nodes (never
 * innerHTML), which is what lets the site run under a strict Content-Security-Policy.
 */
(function () {
  "use strict";

  var APP_URL = "https://nessahub.com";
  var CHAPTERS = (window.GUIDE && window.GUIDE.chapters) || [];
  var GROUP_ORDER = ["Start here", "For patients & clients", "Features everyone uses", "For clinicians", "For partners", "For NessaHub teams", "Trust"];

  // ------------------------------------------------------------------ icons
  var ICONS = {
    spark: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1",
    rocket: "M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2M9 18l-3-3M14.5 4.5c2-2 5.5-1.5 5.5-1.5s.5 3.5-1.5 5.5L12 15l-3-3 5.5-7.5zM15 9h.01",
    heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z",
    stethoscope: "M6 3v6a4 4 0 0 0 8 0V3M10 13v2a5 5 0 0 0 10 0v-2M20 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    brain: "M9.5 3A3.5 3.5 0 0 0 6 6.5 3.5 3.5 0 0 0 3 10a3.5 3.5 0 0 0 1.5 5A3.5 3.5 0 0 0 9 20.5c1 0 2-.5 3-1.5V5c-.6-1.2-1.6-2-2.5-2zM14.5 3A3.5 3.5 0 0 1 18 6.5 3.5 3.5 0 0 1 21 10a3.5 3.5 0 0 1-1.5 5 3.5 3.5 0 0 1-4.5 5.5c-1 0-2-.5-3-1.5",
    scale: "M12 3v18M7 21h10M5 7h14M5 7l-3 7a3.5 3.5 0 0 0 6 0L5 7zM19 7l-3 7a3.5 3.5 0 0 0 6 0l-3-7z",
    home: "M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10",
    pill: "M10.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 0 1-7-7l7-7zM7 10l7 7",
    flask: "M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7.5 15h9",
    card: "M2 6h20v12H2zM2 10h20M6 15h4",
    bot: "M12 3v3M5 9h14v10H5zM9 14h.01M15 14h.01M9 19v2M15 19v2M2 13v2M22 13v2",
    chat: "M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z",
    doctor: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0M12 15v4M10 17h4",
    users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M16 3.1a4 4 0 0 1 0 7.8M22 21a7 7 0 0 0-5-6.7",
    pharmacy: "M4 21V8l8-5 8 5v13H4zM12 10v6M9 13h6",
    microscope: "M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2zM10 2v4",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    hospital: "M3 21V7h18v14H3zM8 21v-4h8v4M12 9v5M9.5 11.5h5M7 7V3h10v4",
    settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
    badge: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.2 13.9 7 22l5-3 5 3-1.2-8.1",
    lock: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4M12 15v2",
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5",
    lifebuoy: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.9 4.9l4.3 4.3M14.8 14.8l4.3 4.3M14.8 9.2l4.3-4.3M4.9 19.1l4.3-4.3",
    search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
    sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
    moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
    menu: "M3 6h18M3 12h18M3 18h18",
    arrow: "M5 12h14M13 6l6 6-6 6",
    external: "M14 3h7v7M10 14 21 3M21 14v7H3V3h7",
    info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
    alert: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01",
    link: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
    file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5",
    hash: "M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"
  };

  function icon(name, cls) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", "icon" + (cls ? " " + cls : ""));
    svg.setAttribute("aria-hidden", "true");
    var p = document.createElementNS(ns, "path");
    p.setAttribute("d", ICONS[name] || ICONS.file);
    svg.appendChild(p);
    return svg;
  }

  // ------------------------------------------------------------------ DOM helpers
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === "class") el.className = attrs[k];
      else if (k === "text") el.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), attrs[k]);
      else el.setAttribute(k, attrs[k]);
    }
    append(el, kids);
    return el;
  }
  function append(el, kids) {
    if (kids == null) return el;
    if (!Array.isArray(kids)) kids = [kids];
    kids.forEach(function (c) {
      if (c == null || c === false) return;
      if (Array.isArray(c)) append(el, c);
      else el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }
  /** "**bold**" → <strong>, everything else plain text. */
  function rich(text) {
    return String(text).split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map(function (part) {
      return /^\*\*[^*]+\*\*$/.test(part) ? h("strong", { text: part.slice(2, -2) }) : document.createTextNode(part);
    });
  }
  function plain(text) { return String(text).replace(/\*\*/g, ""); }
  function slug(s) { return plain(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key) || "null");
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }

  // ------------------------------------------------------------------ data
  var ARTICLES = []; // flat, in reading order
  CHAPTERS.sort(function (a, b) { return GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group); });
  CHAPTERS.forEach(function (c) {
    c.articles.forEach(function (a) { a.chapter = c; ARTICLES.push(a); });
  });
  function chapter(id) { return CHAPTERS.find(function (c) { return c.id === id; }); }
  function article(cid, aid) {
    var c = chapter(cid);
    return c && c.articles.find(function (a) { return a.id === aid; });
  }
  function href(c, a, s) { return "#/" + c.id + (a ? "/" + a.id : "") + (s ? "/" + s : ""); }

  function blockText(b) {
    switch (b[0]) {
      case "p": case "h": case "note": case "warn": return plain(b[1]);
      case "ul": case "steps": return b[1].map(plain).join(" ");
      case "table": return b[1].join(" ") + " " + b[2].map(function (r) { return r.join(" "); }).join(" ");
      case "links": return b[1].map(function (l) { return l[0]; }).join(" ");
      case "faq": return b[1].map(function (q) { return q[0] + " " + q[1]; }).join(" ");
      default: return "";
    }
  }

  // ------------------------------------------------------------------ search index
  var INDEX = [];
  CHAPTERS.forEach(function (c) {
    INDEX.push({ kind: "chapter", c: c, title: c.title, sub: c.tagline, kw: c.group, text: c.tagline, path: c.group });
    c.articles.forEach(function (a) {
      INDEX.push({
        kind: "article", c: c, a: a, title: a.title, sub: a.summary, kw: a.keywords || "",
        text: a.summary + " " + a.body.map(blockText).join(" "), path: c.title
      });
      // Every sub-heading is its own result, so a search lands on the exact section.
      var cur = null;
      a.body.forEach(function (b) {
        if (b[0] === "h") { cur = { kind: "section", c: c, a: a, s: slug(b[1]), title: b[1], sub: "", kw: "", text: "", path: c.title + " › " + a.title }; INDEX.push(cur); }
        else if (cur) cur.text += " " + blockText(b);
      });
      // Each FAQ question too.
      a.body.forEach(function (b) {
        if (b[0] === "faq") b[1].forEach(function (q) {
          INDEX.push({ kind: "section", c: c, a: a, s: "faq-" + slug(q[0]), title: q[0], sub: "", kw: "faq question", text: q[1], path: c.title + " › " + a.title });
        });
      });
    });
  });
  INDEX.forEach(function (e) {
    e._t = e.title.toLowerCase(); e._k = e.kw.toLowerCase(); e._s = e.sub.toLowerCase(); e._x = e.text.toLowerCase();
    e._words = (e._t + " " + e._k).split(/[^a-z0-9]+/).filter(Boolean);
  });

  function lev1(a, b) {
    // true when edit distance <= 1 (cheap typo tolerance)
    if (Math.abs(a.length - b.length) > 1) return false;
    var i = 0, j = 0, edits = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++edits > 1) return false;
      if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
    }
    return edits + (a.length - i) + (b.length - j) <= 1;
  }

  function termScore(e, t) {
    var s = 0;
    if (e._t.indexOf(t) >= 0) s += 14 + (e._t.indexOf(t) === 0 ? 6 : 0);
    if (e._words.some(function (w) { return w.indexOf(t) === 0; })) s += 6;
    if (e._k.indexOf(t) >= 0) s += 6;
    if (e._s.indexOf(t) >= 0) s += 4;
    var n = e._x.split(t).length - 1;
    if (n) s += 1 + Math.min(n, 5);
    if (!s && t.length >= 5 && e._words.some(function (w) { return lev1(t, w) || (w.length > t.length && lev1(t, w.slice(0, t.length))); })) s += 3;
    return s;
  }

  function search(q) {
    var query = q.trim().toLowerCase();
    if (!query) return [];
    var terms = query.split(/\s+/).filter(Boolean);
    var res = [];
    INDEX.forEach(function (e) {
      var total = 0, all = true;
      terms.forEach(function (t) { var s = termScore(e, t); if (!s) all = false; total += s; });
      if (!all) return;
      if (terms.length > 1 && e._t.indexOf(query) >= 0) total += 25;
      if (e.kind === "chapter") total += 2;
      if (e.kind === "section") total -= 1;
      res.push({ e: e, score: total, terms: terms });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    return res.slice(0, 40);
  }

  /** Text with every search term wrapped in <mark>, as nodes. */
  function highlight(text, terms) {
    var lower = text.toLowerCase(), marks = [];
    terms.forEach(function (t) {
      var i = 0;
      while (t && (i = lower.indexOf(t, i)) >= 0) { marks.push([i, i + t.length]); i += t.length; }
    });
    marks.sort(function (a, b) { return a[0] - b[0]; });
    var out = [], pos = 0;
    marks.forEach(function (m) {
      if (m[0] < pos) return;
      out.push(text.slice(pos, m[0]));
      out.push(h("mark", { text: text.slice(m[0], m[1]) }));
      pos = m[1];
    });
    out.push(text.slice(pos));
    return out;
  }
  function snippet(e, terms) {
    var src = e.sub && terms.some(function (t) { return e._s.indexOf(t) >= 0; }) ? e.sub : e.text;
    var lower = src.toLowerCase(), at = -1;
    terms.some(function (t) { at = lower.indexOf(t); return at >= 0; });
    if (at < 0) return (e.sub || e.text).slice(0, 140);
    var start = Math.max(0, at - 60), end = Math.min(src.length, at + 110);
    return (start ? "…" : "") + src.slice(start, end).trim() + (end < src.length ? "…" : "");
  }

  // ------------------------------------------------------------------ theme
  var themeBtn = document.getElementById("theme-btn");
  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paintThemeBtn() {
    clear(themeBtn).appendChild(icon(currentTheme() === "dark" ? "sun" : "moon"));
    themeBtn.setAttribute("aria-label", currentTheme() === "dark" ? "Use light theme" : "Use dark theme");
  }
  themeBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store("guide.theme", next);
    paintThemeBtn();
  });
  paintThemeBtn();

  // ------------------------------------------------------------------ sidebar
  var side = document.getElementById("side");
  var layout = document.getElementById("layout");
  document.getElementById("menu-btn").addEventListener("click", function () { side.classList.toggle("open"); });

  function renderSide(cur) {
    clear(side);
    GROUP_ORDER.forEach(function (g) {
      var chs = CHAPTERS.filter(function (c) { return c.group === g; });
      if (!chs.length) return;
      var grp = h("div", { class: "side-group" }, h("h4", { text: g }));
      chs.forEach(function (c) {
        var active = cur.c === c;
        grp.appendChild(h("a", { class: "side-chapter" + (active ? " active" : ""), href: href(c) }, [icon(c.icon), c.title]));
        if (active) {
          grp.appendChild(h("div", { class: "side-articles" }, c.articles.map(function (a) {
            return h("a", { href: href(c, a), class: cur.a === a ? "active" : "", text: a.title });
          })));
        }
      });
      side.appendChild(grp);
    });
  }

  // ------------------------------------------------------------------ pages
  var main = document.getElementById("main");

  function renderBody(a) {
    var out = [];
    a.body.forEach(function (b) {
      switch (b[0]) {
        case "p": out.push(h("p", null, rich(b[1]))); break;
        case "h": out.push(h("h2", { id: slug(b[1]) }, rich(b[1]))); break;
        case "ul": out.push(h("ul", null, b[1].map(function (i) { return h("li", null, rich(i)); }))); break;
        case "steps": out.push(h("ol", { class: "steps" }, b[1].map(function (i) { return h("li", null, rich(i)); }))); break;
        case "note": out.push(h("div", { class: "callout note", role: "note" }, [icon("info"), h("p", null, rich(b[1]))])); break;
        case "warn": out.push(h("div", { class: "callout warn", role: "note" }, [icon("alert"), h("p", null, rich(b[1]))])); break;
        case "table":
          out.push(h("div", { class: "tbl-wrap" }, h("table", null, [
            h("thead", null, h("tr", null, b[1].map(function (c) { return h("th", { text: c }); }))),
            h("tbody", null, b[2].map(function (r) { return h("tr", null, r.map(function (c) { return h("td", null, rich(c)); })); }))
          ])));
          break;
        case "links":
          out.push(h("div", { class: "link-list" }, b[1].map(function (l) {
            return h("a", { href: l[1], target: "_blank", rel: "noopener" }, [h("span", { text: l[0] }), icon("external")]);
          })));
          break;
        case "faq":
          out.push(h("div", { class: "faq" }, b[1].map(function (q) {
            return h("details", { id: "faq-" + slug(q[0]) }, [h("summary", { text: q[0] }), h("p", null, rich(q[1]))]);
          })));
          break;
      }
    });
    return out;
  }

  function renderHome() {
    var popular = ["Pickup code", "Couples therapy", "Two-step sign-in", "Open prescriptions", "Payouts", "Insurance claims", "Lab results", "Home care nurse"];
    var audiences = [
      { who: "Patients & families", title: "Getting care", text: "Therapy, medical care, psychiatry, second opinions and home care.", to: "therapy", icon: "heart" },
      { who: "Clinicians", title: "Doctors & therapists", text: "Your whole practice: patients, prescribing, tests and earnings.", to: "doctors", icon: "doctor" },
      { who: "Partners", title: "Pharmacies, labs & scans", text: "Receive orders digitally, verify codes, dispense and report.", to: "pharmacies", icon: "pharmacy" },
      { who: "Payers & facilities", title: "Insurers & clinics", text: "Claims, pre-authorisations, members, visits and payments.", to: "insurers", icon: "shield" },
      { who: "Team & applicants", title: "Admins & joining", text: "Running NessaHub, and how providers apply.", to: "administrators", icon: "settings" }
    ];
    var hero = h("section", { class: "hero" }, h("div", { class: "hero-inner" }, [
      h("span", { class: "eyebrow" }, [h("span", { class: "dot" }), "The complete NessaHub guide"]),
      h("h1", null, ["Everything NessaHub does, ", h("em", { text: "explained." })]),
      h("p", { class: "lead", text: "Therapy, medical care, psychiatry, second opinions, home care, prescriptions, labs, scans, insurance — and every dashboard behind them. Find any feature in seconds." }),
      h("button", { class: "hero-search", type: "button", onclick: function () { openPalette(); } }, [icon("search"), h("span", { text: "Search the guide — try “pickup code” or “couples”" }), h("span", { class: "go", text: "Search" })]),
      h("div", { class: "chips" }, popular.map(function (p) { return h("button", { class: "chip", type: "button", text: p, onclick: function () { openPalette(p); } }); }))
    ]));
    var stats = h("div", { class: "stats" }, [
      ["4", "types of care"], ["10", "kinds of users served"], [String(ARTICLES.length), "guides in this site"], ["37", "published policies"]
    ].map(function (s) { return h("div", { class: "stat" }, [h("b", { text: s[0] }), h("span", { text: s[1] })]); }));

    var aud = h("section", { class: "section" }, [
      h("div", { class: "section-head" }, h("div", null, [h("span", { class: "kicker", text: "Start with your role" }), h("h2", { text: "Who are you?" }), h("p", { class: "sub", text: "Jump straight to the part of NessaHub you use." })])),
      h("div", { class: "grid aud" }, audiences.map(function (a, i) {
        return h("a", { class: "card rise", href: "#/" + a.to, style: null }, [
          h("span", { class: "ico-tile" }, icon(a.icon)), h("span", { class: "who", text: a.who }), h("h3", { text: a.title }), h("p", { text: a.text }),
          h("span", { class: "meta" }, ["Open", icon("arrow")])
        ]);
      }))
    ]);

    var steps = [["Choose your care", "Therapy, medical, psychiatry or second opinion — and who it’s for."], ["Tell us about you", "A short intake questionnaire."], ["Get matched", "A licensed provider who fits your needs."], ["Book & pay", "Mobile money, card or insurance."], ["Meet securely", "Video, voice or chat."], ["Stay connected", "Prescriptions, tests and follow-ups in one place."]];
    var journey = h("section", { class: "section" }, [
      h("div", { class: "section-head" }, h("div", null, [h("span", { class: "kicker", text: "How it works" }), h("h2", { text: "From first click to follow-up" })])),
      h("ol", { class: "journey" }, steps.map(function (s) { return h("li", null, [h("b", { text: s[0] }), h("span", { text: s[1] })]); }))
    ]);

    var chaptersSection = h("section", { class: "section" }, [
      h("div", { class: "section-head" }, h("div", null, [h("span", { class: "kicker", text: "Every chapter" }), h("h2", { text: "Explore the whole platform" }), h("p", { class: "sub", text: CHAPTERS.length + " chapters covering every service, dashboard and policy." })])),
      h("div", { class: "grid ch" }, CHAPTERS.map(function (c) {
        return h("a", { class: "card", href: href(c) }, [
          h("span", { class: "ico-tile" }, icon(c.icon)), h("h3", { text: c.title }), h("p", { text: c.tagline }),
          h("span", { class: "meta" }, [c.articles.length + (c.articles.length === 1 ? " guide" : " guides"), icon("arrow")])
        ]);
      }))
    ]);

    var band = h("div", { class: "band" }, [
      h("div", null, [h("h3", { text: "Ready to get care?" }), h("p", { text: "Open NessaHub on the web or in the app — the same account everywhere." })]),
      h("a", { class: "cta", href: APP_URL, target: "_blank", rel: "noopener" }, ["Open NessaHub", icon("arrow")])
    ]);

    return [hero, stats, h("div", { class: "page" }, [aud, journey, chaptersSection, band])];
  }

  function crumbs(parts) {
    var out = [h("a", { href: "#/", text: "Guide" })];
    parts.forEach(function (p) { out.push(h("span", { class: "sep", text: "›" })); out.push(p[1] ? h("a", { href: p[1], text: p[0] }) : h("span", { text: p[0] })); });
    return h("nav", { class: "crumbs", "aria-label": "Breadcrumb" }, out);
  }

  function renderChapter(c) {
    return h("div", { class: "page" }, [
      crumbs([[c.title]]),
      h("header", { class: "ch-head" }, [h("span", { class: "ico-tile" }, icon(c.icon)), h("div", null, [h("span", { class: "pill", text: c.group }), h("h1", { text: c.title }), h("p", { text: c.tagline })])]),
      h("div", { class: "ch-list" }, c.articles.map(function (a) {
        return h("a", { class: "card", href: href(c, a) }, [h("h3", { text: a.title }), h("p", { text: a.summary }), h("span", { class: "meta" }, ["Read", icon("arrow")])]);
      }))
    ]);
  }

  function renderArticle(c, a) {
    var i = ARTICLES.indexOf(a), prev = ARTICLES[i - 1], next = ARTICLES[i + 1];
    var heads = a.body.filter(function (b) { return b[0] === "h"; });
    var toc = h("aside", { class: "toc" }, [
      heads.length ? h("h4", { text: "On this page" }) : null,
      heads.map(function (b) { return h("a", { href: href(c, a, slug(b[1])), "data-sec": slug(b[1]), text: plain(b[1]) }); }),
      h("button", { class: "copy", type: "button", onclick: function (ev) {
        var btn = ev.currentTarget, url = location.href;
        var done = function () { clear(btn); append(btn, [icon("link"), "Link copied"]); setTimeout(function () { clear(btn); append(btn, [icon("link"), "Copy link"]); }, 1800); };
        if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () {}); else done();
      } }, [icon("link"), "Copy link"])
    ]);
    return h("div", { class: "page" }, [
      crumbs([[c.title, href(c)], [a.title]]),
      h("div", { class: "art-wrap" }, [
        h("article", { class: "art" }, [
          h("span", { class: "audience pill", text: c.title }),
          h("h1", { text: a.title }),
          h("p", { class: "lead", text: a.summary }),
          h("div", { class: "body" }, renderBody(a)),
          h("nav", { class: "pager", "aria-label": "More guides" }, [
            prev ? h("a", { href: href(prev.chapter, prev) }, [h("small", { text: "← Previous" }), prev.title]) : null,
            next ? h("a", { class: "next", href: href(next.chapter, next) }, [h("small", { text: "Next →" }), next.title]) : null
          ])
        ]),
        toc
      ])
    ]);
  }

  // ------------------------------------------------------------------ router
  var spy = null;
  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    var c = parts[0] && chapter(parts[0]);
    var a = c && parts[1] && article(c.id, parts[1]);
    var sec = parts[2];
    side.classList.remove("open");
    if (spy) { spy.disconnect(); spy = null; }
    clear(main);

    if (!c) {
      layout.classList.add("home");
      append(main, renderHome());
      document.title = "NessaHub Guide — everything NessaHub does, explained";
      renderSide({});
      window.scrollTo(0, 0);
      return;
    }
    layout.classList.remove("home");
    renderSide({ c: c, a: a });
    if (a) {
      main.appendChild(renderArticle(c, a));
      document.title = plain(a.title) + " · " + c.title + " · NessaHub Guide";
      watchToc();
    } else {
      main.appendChild(renderChapter(c));
      document.title = c.title + " · NessaHub Guide";
    }
    var target = sec && document.getElementById(sec);
    if (target) {
      if (target.tagName === "DETAILS") target.open = true;
      target.scrollIntoView({ block: "start" });
    } else window.scrollTo(0, 0);
    var active = side.querySelector(".side-chapter.active");
    if (active && active.scrollIntoView) active.scrollIntoView({ block: "nearest" });
  }

  function watchToc() {
    var links = main.querySelectorAll(".toc a[data-sec]");
    if (!links.length || !("IntersectionObserver" in window)) return;
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("data-sec") === e.target.id); });
      });
    }, { rootMargin: "-80px 0px -70% 0px" });
    main.querySelectorAll(".body h2[id]").forEach(function (el) { spy.observe(el); });
  }

  window.addEventListener("hashchange", route);

  // ------------------------------------------------------------------ search palette
  var backdrop = document.getElementById("palette");
  var input = document.getElementById("palette-input");
  var results = document.getElementById("palette-results");
  var items = [], cursor = 0, lastFocus = null;

  function openPalette(q) {
    lastFocus = document.activeElement;
    backdrop.classList.add("open");
    backdrop.setAttribute("aria-hidden", "false");
    input.value = q || "";
    renderResults();
    setTimeout(function () { input.focus(); input.select(); }, 0);
  }
  function closePalette() {
    backdrop.classList.remove("open");
    backdrop.setAttribute("aria-hidden", "true");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function go(entry, q) {
    if (q) {
      var recent = (store("guide.recent") || []).filter(function (r) { return r !== q; });
      recent.unshift(q);
      store("guide.recent", recent.slice(0, 6));
    }
    closePalette();
    location.hash = href(entry.c, entry.a, entry.s);
  }

  function renderResults() {
    var q = input.value;
    clear(results);
    items = []; cursor = 0;
    if (!q.trim()) {
      var recent = store("guide.recent") || [];
      if (recent.length) {
        results.appendChild(h("div", { class: "p-group", text: "Recent searches" }));
        recent.forEach(function (r) { addItem({ title: r, path: "Search again", icon: "search", run: function () { input.value = r; renderResults(); } }); });
      }
      results.appendChild(h("div", { class: "p-group", text: "Jump to" }));
      CHAPTERS.forEach(function (c) { addItem({ title: c.title, path: c.group, icon: c.icon, run: function () { go({ c: c }); } }); });
      highlightCursor();
      return;
    }
    var found = search(q);
    if (!found.length) {
      results.appendChild(h("div", { class: "p-empty" }, [h("b", { text: "No results for “" + q + "”." }), h("div", { text: "Try fewer or different words — for example “prescription”, “insurance” or “video”." })]));
      return;
    }
    var lastPath = null;
    found.forEach(function (r) {
      var e = r.e;
      var group = e.c.title;
      if (group !== lastPath) { results.appendChild(h("div", { class: "p-group", text: group })); lastPath = group; }
      addItem({
        titleNodes: highlight(plain(e.title), r.terms),
        path: e.kind === "chapter" ? "Chapter" : e.kind === "section" ? e.path : e.c.group + " › " + e.c.title,
        snip: highlight(snippet(e, r.terms), r.terms),
        icon: e.kind === "chapter" ? e.c.icon : e.kind === "section" ? "hash" : "file",
        run: function () { go(e, q.trim()); }
      });
    });
    highlightCursor();
  }
  function addItem(it) {
    var idx = items.length;
    var btn = h("button", { class: "p-item", type: "button", role: "option", onclick: it.run, onmousemove: function () { if (cursor !== idx) { cursor = idx; highlightCursor(); } } }, [
      h("span", { class: "ico" }, icon(it.icon)),
      h("span", null, [h("span", { class: "p-title" }, it.titleNodes || it.title), h("span", { class: "p-path", text: it.path }), it.snip ? h("span", { class: "p-snip" }, it.snip) : null])
    ]);
    items.push({ el: btn, run: it.run });
    results.appendChild(btn);
  }
  function highlightCursor() {
    items.forEach(function (it, i) {
      it.el.classList.toggle("active", i === cursor);
      it.el.setAttribute("aria-selected", i === cursor ? "true" : "false");
    });
    var cur = items[cursor];
    if (cur && cur.el.scrollIntoView) cur.el.scrollIntoView({ block: "nearest" });
  }

  input.addEventListener("input", renderResults);
  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); cursor = Math.min(items.length - 1, cursor + 1); highlightCursor(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); cursor = Math.max(0, cursor - 1); highlightCursor(); }
    else if (e.key === "Enter") { e.preventDefault(); if (items[cursor]) items[cursor].run(); }
    else if (e.key === "Escape") { e.preventDefault(); closePalette(); }
  });
  backdrop.addEventListener("click", function (e) { if (e.target === backdrop) closePalette(); });
  document.getElementById("search-btn").addEventListener("click", function () { openPalette(); });
  document.addEventListener("keydown", function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName || "");
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); backdrop.classList.contains("open") ? closePalette() : openPalette(); }
    else if (e.key === "/" && !typing && !backdrop.classList.contains("open")) { e.preventDefault(); openPalette(); }
    else if (e.key === "Escape" && side.classList.contains("open")) side.classList.remove("open");
  });
  var mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  document.getElementById("kbd-hint").textContent = mac ? "⌘ K" : "Ctrl K";

  document.getElementById("year").textContent = String(new Date().getFullYear());
  route();
})();
