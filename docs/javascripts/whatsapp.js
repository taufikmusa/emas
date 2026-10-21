/* Icon WhatsApp dalam header (pautan diambil daripada butang floating, satu sumber sahaja)
   dan tajuk header yang boleh diklik untuk pergi ke home. */
(function () {
  function injectWhatsApp() {
    var inner = document.querySelector(".md-header__inner");
    var float = document.querySelector(".wa-float");
    if (!inner || !float || inner.querySelector(".wa-head")) return;
    var a = document.createElement("a");
    a.className = "md-header__button md-icon wa-head";
    a.href = float.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "WhatsApp Taufik");
    a.innerHTML = float.innerHTML;
    inner.appendChild(a);
  }

  function injectTelegram() {
    var inner = document.querySelector(".md-header__inner");
    var src = document.querySelector(".tg-src");
    if (!inner || !src || inner.querySelector(".tg-head")) return;
    var a = document.createElement("a");
    a.className = "md-header__button md-icon tg-head";
    a.href = src.href;
    a.setAttribute("aria-label", "Telegram Taufik");
    a.innerHTML = src.innerHTML;
    var wa = inner.querySelector(".wa-head");
    inner.insertBefore(a, wa || null);
  }

  /* Pada telefon logo disembunyikan, jadi tajuk tapak perlu jadi pautan ke home. */
  function homeFromTitle(e) {
    var topic = e.target.closest && e.target.closest(".md-header__topic:first-child");
    if (!topic) return;
    var logo = document.querySelector(".md-header a.md-logo");
    if (logo) logo.click();
    else window.location.href = "/";
  }

  function init() {
    injectWhatsApp();
    injectTelegram();
    var title = document.querySelector(".md-header__title");
    if (title && !title.dataset.homeLink) {
      title.dataset.homeLink = "1";
      title.setAttribute("role", "link");
      title.setAttribute("tabindex", "0");
      title.addEventListener("click", homeFromTitle);
      title.addEventListener("keydown", function (e) {
        if (e.key === "Enter") homeFromTitle(e);
      });
    }
  }

  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
