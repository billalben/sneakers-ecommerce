//  ================= PRELOADER =================
window.onload = () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 3000);
};

/* ================= show & remove menu ================= */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

/* ================= remove menu when click on nav links ================= */
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((n) => {
  n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

// ================= change header background =================
const header = document.getElementById("header");
window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

//  =========== change home shapes when click on color buttons ===========
const colorButtons = document.querySelector(".home__color-buttons");

colorButtons.addEventListener("click", (e) => {
  if (e.target.classList.contains("home__color-button")) {
    colorButtons.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    document.querySelector(".home__shape.active").classList.remove("active");
    document
      .querySelector(`.home__shape.${e.target.id}`)
      .classList.add("active");
  }
});

//  =========== change shoe sizes on home section ===========
const sizeButtons = document.querySelectorAll(".home__size");

sizeButtons.forEach((e) => {
  e.addEventListener("click", function () {
    sizeButtons.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
  });
});

//  =========== home increment & decrement button ===========
const incrementBtn = document.querySelector(".home__amounts .bx-plus");
const decrementBtn = document.querySelector(".home__amounts .bx-minus");
const amountDisplay = document.querySelector(
  ".home__amounts .home__amount-num"
);
let amount = 1;

function displayAmount(amount) {
  amountDisplay.innerText = amount;
}

incrementBtn.addEventListener("click", () => {
  amount++;
  displayAmount(amount);
});

decrementBtn.addEventListener("click", () => {
  if (amount >= 1) {
    amount--;
    displayAmount(amount);
  }
});

//  =========== show scrollup ===========
window.addEventListener("scroll", scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById("scrollup");
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scrollup");
  } else {
    scrollUp.classList.remove("show-scrollup");
  }
}

//  =========== swiper js.com ===========
const featuredSwiper = new Swiper(".featured__swiper", {
  spaceBetween: 20,
  loop: "true",
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    578: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    365: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
  },
});

const womenSwiper = new Swiper(".women__swiper", {
  spaceBetween: 20,
  loop: "true",
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    578: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    365: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
  },
});

//  =========== scroll reveal js org ===========
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 300,
});

sr.reveal(`.swiper , .home__container`);
sr.reveal(
  `.new__card ,.footer__content ,.footer__social ,.sale__card ,.pages`,
  {
    interval: 200,
  }
);
sr.reveal(`.collection__data ,.offer__data ,.newsletter__data`, {
  origin: "left",
});
sr.reveal(`.collection__img ,.offer__img ,.newsletter__form`, {
  origin: "right",
});
