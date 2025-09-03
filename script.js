// menubar----------------->
const menuBar = document.querySelector('#only-bar');
const fasolid = document.querySelector('.fa-solid');
const menu = document.querySelector('#menu');

menuBar.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    fasolid.classList.toggle('fa-xmark');
});

// Odometer
function animateCount(el) {
  if (el.__counted) return;
  el.__counted = true;

  const target = +el.dataset.target;
  const duration = 2000;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value.toLocaleString();
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.odometer').forEach(animateCount);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Back to Top Button
const backToTop = document.getElementById("backToTop");
const water = document.getElementById("water");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;

  if (scrollTop > 100) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }

  water.style.height = `${scrollPercent}%`;
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ----------- Scroll Animations ----------- //
const animatedElements = document.querySelectorAll('.reveal, .slide-left, .slide-right, .fade-in');

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      animationObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => animationObserver.observe(el));

