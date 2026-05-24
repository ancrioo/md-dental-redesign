(function () {
  "use strict";

  function initAppointmentForm() {
    var form = document.querySelector("[data-form]");
    var status = document.querySelector("[data-form-status]");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var phone = String(data.get("phone") || "").trim();
      var treatment = String(data.get("treatment") || "General consultation");

      if (!name || !phone) {
        if (status) status.textContent = "Please add your name and phone number.";
        return;
      }

      var message = "Appointment request from " + name + "%0APhone: " + phone + "%0ATreatment: " + encodeURIComponent(treatment);
      if (status) status.textContent = "Thanks, " + name + ". Opening WhatsApp with your appointment request.";
      window.open("https://wa.me/919082965269?text=" + message, "_blank", "noopener");
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.initNavbar) window.initNavbar();
    if (window.initAnimations) window.initAnimations();
    if (window.initSlider) window.initSlider();
    if (window.initFaq) window.initFaq();
    initAppointmentForm();
  });
})();
