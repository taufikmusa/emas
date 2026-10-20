/* Icon WhatsApp dalam header, ambil pautan daripada butang floating supaya satu sumber sahaja */
(function () {
  function inject() {
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
  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(inject);
  } else {
    document.addEventListener("DOMContentLoaded", inject);
  }
})();
