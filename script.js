const nav = document.querySelector(".header__nav__wrapper");
const menu = document.querySelector(".mobile__menu");

menu.addEventListener("click", () => {
  if (nav.classList.contains("modal")) {
    nav.classList.remove("modal");
  } else {
    nav.classList.add("modal");
  }
});
