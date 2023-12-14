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
