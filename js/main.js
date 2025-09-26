const swipers = new Swiper(".mySwipers", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1.5, // Shows 1 full + 1 half image
  centeredSlides: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 900,
  grabCursor: true,
});

// Initialize the NEW Testimonial Swiper
var testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testimonial-swiper-button-next",
    prevEl: ".testimonial-swiper-button-prev",
  },
});

// Navbar Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerMenu");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

let menuToggle = document.querySelector(".menu");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
};
// Paralex Effect in Toggle
const nav = document.getElementById("navLinks");

nav.addEventListener("mousemove", function (e) {
  const x = (window.innerWidth - e.pageX * 2) / 100;
  const y = (window.innerHeight - e.pageY * 2) / 100;
  nav.style.transform = `translateX(0%) rotateY(${x}deg) rotateX(${y}deg)`;
});

nav.addEventListener("mouseleave", function () {
  nav.style.transform = "translateX(0%) rotateY(0deg) rotateX(0deg)";
});

const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeIcon.src = isDark ? "assets/images/icons/night.png" : "assets/images/icons/day.png";
});
