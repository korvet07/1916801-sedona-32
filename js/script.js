// index.js
const openFavorite = document.querySelector('.favorite > .nav-link');
openFavorite.onclick = function () {
  const popoverFavorite = document.querySelector('.popover');
  popoverFavorite.classList.toggle('popover-close-button');
};
const modalSerch = document.querySelector('.modal-container');
const openSearch = document.querySelector('.make-order-link');
openSearch.onclick = function () {
  modalSerch.classList.remove('modal-container-close');
};
const closeSearch = document.querySelector('.modal-close-button');
closeSearch.onclick = function () {
  modalSerch.classList.add('modal-container-close');
};
const formNewsletter = document.querySelector('.newsletter-form');
formNewsletter.onsubmit = function () {
  const input = document.querySelector('.field');
  alert(`Адрес ${  input.value  } добавлен в рассылку`);
};
const favorite = document.querySelector('.hotel-card-button');
const valueFavorite = document.querySelector('.value-favorite');
valueFavorite.textContent = 18;
function myFunc() {
  if (favorite.classList.contains('added-button')) {
    valueFavorite.textContent--;
    favorite.classList.remove('added-button');
    favorite.classList.add('primary-button');
    favorite.textContent = 'В избранное';
  } else {
    valueFavorite.textContent++;
    favorite.classList.add('added-button');
    favorite.classList.remove('primary-button');
    favorite.textContent = 'В избранном';
  }
}
favorite.addEventListener('click', myFunc);
