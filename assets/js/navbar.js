(function () {
  "use strict";

  window.initNavbar = function initNavbar() {
    var header = document.querySelector("[data-header]");
    var toggle = document.querySelector("[data-nav-toggle]");
    var mobileToggle = document.querySelector("[data-mobile-nav-toggle]");
    var panel = document.querySelector("[data-nav-panel]");
    var links = document.querySelectorAll(".nav-panel a[href^='#']");

    function setScrolled() {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }

    function setMenuState(open) {
      if (!panel) return;
      panel.classList.toggle("is-open", open);
      if (toggle) {
        toggle.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
      }
      if (mobileToggle) {
        mobileToggle.classList.toggle("is-open", open);
        mobileToggle.setAttribute("aria-expanded", String(open));
      }
    }

    function handleToggle() {
      if (!panel) return;
      setMenuState(!panel.classList.contains("is-open"));
    }

    if (panel) {
      if (toggle) toggle.addEventListener("click", handleToggle);
      if (mobileToggle) mobileToggle.addEventListener("click", handleToggle);

      links.forEach(function (link) {
        link.addEventListener("click", function () {
          setMenuState(false);
        });
      });
    }

    window.addEventListener("scroll", setScrolled, { passive: true });
    setScrolled();
  };
})();
