//  ================= PRELOADER =================
window.onload = () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 3000);
};

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
const shoeSizes = document.querySelectorAll(".home__size");

shoeSizes.forEach((e) => {
  e.addEventListener("click", function () {
    shoeSizes.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
  });
});

//  =========== home increment & decrement button ===========
const plusButton = document.querySelector(".home__amounts .bx-plus");
const minusButton = document.querySelector(".home__amounts .bx-minus");
const homeAmountNumber = document.querySelector(
  ".home__amounts .home__amount-num"
);
let a = 1;

plusButton.addEventListener("click", () => {
  a++;
  homeAmountNumber.innerText = a;
});

minusButton.addEventListener("click", () => {
  if (a >= 1) {
    a--;
    homeAmountNumber.innerText = a;
  }
});
