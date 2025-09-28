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
//Form Validation
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

// Validation functions
function validateName() {
  const namePattern = /^[A-Za-z\s]+$/; // sirf alphabets aur space allow

  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("success");
    return false;
  } else if (!namePattern.test(nameInput.value.trim())) {
    nameError.textContent = "Name must contain only letters (no numbers or symbols).";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("success");
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("success");
    return true;
  }
}


function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email (e.g. abc@example.com).";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("success");
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("success");
    return true;
  }
}

function validatePhone() {
  if (phoneInput.value.trim() && !/^\d{10,15}$/.test(phoneInput.value.trim())) {
    phoneError.textContent = "Phone must be 10-15 digits only.";
    phoneInput.classList.add("invalid");
    phoneInput.classList.remove("success");
    return false;
  } else {
    phoneError.textContent = "";
    if (phoneInput.value.trim()) {
      phoneInput.classList.add("success");
    }
    phoneInput.classList.remove("invalid");
    return true;
  }
}

function validateMessage() {
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    messageInput.classList.add("invalid");
    messageInput.classList.remove("success");
    return false;
  } else {
    messageError.textContent = "";
    messageInput.classList.remove("invalid");
    messageInput.classList.add("success");
    return true;
  }
}

// // Real-time event listeners
// nameInput.addEventListener("input", validateName);
// emailInput.addEventListener("input", validateEmail);
// phoneInput.addEventListener("input", validatePhone);
// messageInput.addEventListener("input", validateMessage);

// // On submit
// form.addEventListener("submit", function (e) {
//   if (!(validateName() & validateEmail() & validatePhone() & validateMessage())) {
//     e.preventDefault();
//     alert("Please fix the errors before submitting.");
//   } else {
//     alert("Form submitted successfully!");
//   }
// });


  // CONTACT FORM HANDLER
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Fancy Alert show karo
      showFancyAlert("📩 Your message has been sent successfully!");

      // Form reset
      contactForm.reset();
    });
  }

  // REUSABLE FANCY ALERT FUNCTION
  function showFancyAlert(message) {
    let alertContainer = document.getElementById("fancyAlertContainer");
    if (!alertContainer) {
      alertContainer = document.createElement("div");
      alertContainer.id = "fancyAlertContainer";
      Object.assign(alertContainer.style, {
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#f5b000",
        color: "#1b1b1b",
        padding: "14px 28px",
        fontWeight: "700",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: "11000",
        fontFamily: "'Poppins', sans-serif",
        userSelect: "none",
        opacity: "0",
        transition: "opacity 0.4s ease",
      });
      document.body.appendChild(alertContainer);
    }
    alertContainer.textContent = message;
    alertContainer.style.opacity = "1";
    setTimeout(() => {
      alertContainer.style.opacity = "0";
    }, 1500);
  }


