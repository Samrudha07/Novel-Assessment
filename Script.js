const header = document.getElementById("header");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const portfolioGrid = document.getElementById("portfolioGrid");
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
