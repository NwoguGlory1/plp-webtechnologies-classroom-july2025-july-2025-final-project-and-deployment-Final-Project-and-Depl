// script.js

// === Mobile Menu Toggle ===
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// === Scroll Reveal Animation ===
const revealElements = document.querySelectorAll('.section-title, .project-card, .skill-card');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// === Simple Form Validation (for collaborate.html) ===
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert("⚠️ Please fill in all fields before submitting.");
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      e.preventDefault();
      alert("⚠️ Please enter a valid email address.");
    }
  });
}