// Applies the saved theme before first paint (separate file: the CSP forbids inline scripts).
(function () {
  try {
    var t = JSON.parse(localStorage.getItem("guide.theme") || "null");
    if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
