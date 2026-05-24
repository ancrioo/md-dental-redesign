(function () {
  "use strict";

  window.initSlider = function initSlider() {
    var slider = document.querySelector("[data-slider]");
    if (!slider) return;

    var slides = Array.prototype.slice.call(slider.querySelectorAll(".testimonial"));
    var prev = slider.querySelector("[data-prev]");
    var next = slider.querySelector("[data-next]");
    var index = 0;
    var timer;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === index);
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    function reset() {
      window.clearInterval(timer);
      start();
    }

    if (prev) prev.addEventListener("click", function () { show(index - 1); reset(); });
    if (next) next.addEventListener("click", function () { show(index + 1); reset(); });

    show(0);
    start();
  };
})();
