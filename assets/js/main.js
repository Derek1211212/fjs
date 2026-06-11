// assets/js/main.js

document.addEventListener("DOMContentLoaded", function () {
  // 1. Set dynamic year in the footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile navigation toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    // Close menu when a link is clicked (optional, nice on mobile)
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  // 3. Handle WhatsApp quote form submission (on Contact page)
  const quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !service || !message) {
        alert("Please fill in all required fields before submitting.");
        return;
      }

      // WhatsApp number in international format without '+'.
      const whatsappNumber = "233249720557";

      const textLines = [
        "New service request from Feni Janitorial Website:",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : "",
        `Service Type: ${service}`,
        "",
        "Details:",
        message
      ].filter(Boolean);

      const whatsappText = encodeURIComponent(textLines.join("\n"));
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

      window.open(whatsappURL, "_blank");
    });
  }
});
