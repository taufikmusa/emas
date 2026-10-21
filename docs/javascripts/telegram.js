/* Icon Telegram dalam header (pautan dan icon diambil daripada .tg-src dalam footer). */
(function () {
  function injectTelegram() {
    var inner = document.querySelector(".md-header__inner");
    var src = document.querySelector(".tg-src");
    if (!inner || !src || inner.querySelector(".tg-head")) return;
    var a = document.createElement("a");
    a.className = "md-header__button md-icon tg-head";
    a.href = src.href;
    a.setAttribute("aria-label", "Join channel Telegram Taufik");
    a.innerHTML = src.innerHTML;
    var wa = inner.querySelector(".wa-head");
    inner.insertBefore(a, wa || null);
  }

  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(injectTelegram);
  } else {
    document.addEventListener("DOMContentLoaded", injectTelegram);
  }
})();
