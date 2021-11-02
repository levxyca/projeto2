const menu = document.querySelector(".header__menu-mobile-img");
const items = document.querySelector(".header__menu-mobile-itens");
const btnModal = document.querySelector(".login");
const modal = document.querySelector(".modal");

menu.addEventListener("click", () => {
  items.classList.toggle("none");
});

btnModal.addEventListener("click", () => {
  modal.classList.toggle("none");
});
