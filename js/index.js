const menu = document.querySelector(".header__menu-mobile-img");
const items = document.querySelector(".header__menu-mobile-itens");

menu.addEventListener("click", () => {
  items.classList.toggle("none");
});