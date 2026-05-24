(function () {
  "use strict";

  window.initFaq = function initFaq() {
    var questions = document.querySelectorAll(".faq-list details");

    questions.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        questions.forEach(function (other) {
          if (other !== item) other.removeAttribute("open");
        });
      });
    });
  };
})();
