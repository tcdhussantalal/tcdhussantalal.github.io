// ===== Navbar Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// ===== Particles.js =====
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "color": { "value": "#00bcd4" },
    "line_linked": {
      "enable": true,
      "color": "#00bcd4",
      "opacity": 0.4
    },
    "move": { "speed": 3 }
  }
});

// ===== Fade-in Sections on Scroll =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 0.8s ease-out';
    }
  });
}, { threshold: 0.1 });

// Apply observer to all sections
document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(40px)';
  observer.observe(sec);
});

// ===== View All Posts Button =====
document.addEventListener("DOMContentLoaded", () => {
  const viewAllBtn = document.getElementById("viewAllBtn");
  if(viewAllBtn) {
    viewAllBtn.addEventListener("click", function () {
      const hiddenArticles = document.querySelectorAll(".article-card.hidden");
      hiddenArticles.forEach(article => {
        article.classList.remove("hidden");
      });
      this.style.display = "none"; // hide button after click
    });
  }
});
