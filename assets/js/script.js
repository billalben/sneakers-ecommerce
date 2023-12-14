//  ================= PRELOADER =================
onload = () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 3000);
};
