const controllerFavoriteButton = document.querySelector('.favorite > .nav-link');
const successMessage = document.querySelector('.newsletter-success');
const formNewsletter = document.querySelector('.newsletter-form');
const inputNewsletter = document.querySelector('#newsletter-email');
controllerFavoriteButton.onclick = () => {
  const popoverFavorite = document.querySelector('.popover-favorite');
  popoverFavorite.classList.toggle('popover-close-button');
};
formNewsletter.onsubmit = (evt) => {
  evt.preventDefault();
  successMessage.style.display = 'block';
  successMessage.textContent = `E-mail ${inputNewsletter.value} добавлен в рассылку`;
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);
};

