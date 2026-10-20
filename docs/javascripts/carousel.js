/* Carousel galeri: scroll-snap, anak panah, dots, autoplay perlahan (berhenti bila disentuh atau tidak kelihatan). */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function init() {
    document.querySelectorAll(".gallery").forEach(function (root) {
      if (root.dataset.ready) return;
      root.dataset.ready = "1";
      var track = root.querySelector(".gallery-track");
      var slides = root.querySelectorAll(".gallery-slide");
      var dotsBox = root.querySelector(".gallery-dots");
      var prev = root.querySelector(".gallery-nav.prev");
      var next = root.querySelector(".gallery-nav.next");
      if (!track || !slides.length) return;

      var dots = [];
      slides.forEach(function (_, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.addEventListener("click", function () { go(i); });
        dotsBox.appendChild(b);
        dots.push(b);
      });

      function index() { return Math.round(track.scrollLeft / track.clientWidth); }
      function go(i) {
        var n = slides.length;
        i = (i + n) % n;
        track.scrollTo({ left: i * track.clientWidth, behavior: reduce ? "auto" : "smooth" });
      }
      function mark() {
        var i = index();
        dots.forEach(function (d, k) { d.classList.toggle("active", k === i); });
      }

      var ticking = false;
      track.addEventListener("scroll", function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () { mark(); ticking = false; });
      }, { passive: true });
      prev.addEventListener("click", function () { go(index() - 1); });
      next.addEventListener("click", function () { go(index() + 1); });
      track.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { e.preventDefault(); go(index() - 1); }
        if (e.key === "ArrowRight") { e.preventDefault(); go(index() + 1); }
      });
      window.addEventListener("resize", function () { track.scrollTo({ left: index() * track.clientWidth }); });
      mark();

      if (reduce) return;
      var timer = null, visible = false, hold = false;
      function tick() { if (visible && !hold && !document.hidden) go(index() + 1); }
      function start() { if (!timer) timer = setInterval(tick, 4500); }
      ["pointerenter", "focusin", "touchstart"].forEach(function (ev) {
        root.addEventListener(ev, function () { hold = true; }, { passive: true });
      });
      ["pointerleave", "focusout", "touchend"].forEach(function (ev) {
        root.addEventListener(ev, function () { setTimeout(function () { hold = false; }, 2500); }, { passive: true });
      });
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0.4 }).observe(root);
      } else { visible = true; }
      start();
    });
  }

  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
