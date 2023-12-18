//  ================= PRELOADER =================
window.onload = () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 3000);
};

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
});
