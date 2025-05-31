// Navigation SPA logic
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function showPage(hash) {
  pages.forEach(page => {
    if (page.id === hash) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1) || 'home';
  showPage(hash);
});

// On page load, show initial section
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1) || 'home';
  showPage(hash);
});

// Contact Form (Dummy submission)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'Thank you for your message! We will get back to you soon.';
  this.reset();
});
