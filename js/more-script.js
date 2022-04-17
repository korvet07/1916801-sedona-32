const modalSearch = document.querySelector('.modal-container');
const closeSearchButton = document.querySelector('.modal-close-button');
const openModalButton = document.querySelector('.make-order-link');
openModalButton.onclick = () => {
  modalSearch.classList.remove('modal-container-close');
};
closeSearchButton.onclick = () => {
  modalSearch.classList.add('modal-container-close');
};
