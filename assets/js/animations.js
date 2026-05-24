(function () {
  "use strict";

  window.initAnimations = function initAnimations() {
    var items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    items.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index % 4, 3) * 70 + "ms";
      observer.observe(item);
    });
  };
})();
