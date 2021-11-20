// index.js
let openFavorite = document.querySelector(".favorite>.nav-link");
let popoverFavorite = document.querySelector(".popover");
openFavorite.onclick = function () {
  popoverFavorite.classList.toggle("popover-close-button");
};
let modalSerch = document.querySelector(".modal-container");
let openSearch = document.querySelector(".make-order-link");
openSearch.onclick = function () {
  modalSerch.classList.remove("modal-container-close");
};
let closeSearch = document.querySelector(".modal-close-button");
closeSearch.onclick = function () {
  modalSerch.classList.add("modal-container-close");
};
