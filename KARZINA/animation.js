const headerBtn = document.querySelector(".header-btn"),
  slidebar = document.querySelector(".slidebar");

headerBtn.addEventListener("click", () => {
  slidebar.classList.toggle("hide");
});
