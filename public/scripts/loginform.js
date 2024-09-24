const openLoginButtons = document.querySelectorAll('.button-login');
const modalLogin = document.querySelector('.modals-login');
const mobileLoginClose = document.querySelector('.mobile-login-close');

const disableLoginScroll = () => {
  const pagePosition = window.scrollY;
  document.body.classList.add('disable-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = `${-pagePosition}px`;
};

const enableLoginScroll = () => {
  const pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('disable-scroll');
  window.scroll({ top: pagePosition, left: 0 });
  document.body.removeAttribute('data-position');
};

const openLoginModalMobile = () => {
  modalLogin.classList.add('is-open');
  disableLoginScroll();
  setTimeout(() => {
    modalLogin.querySelector('.modal').classList.add('visible');
  }, 300);
};

const closeLoginModalMobile = () => {
  modalLogin.querySelector('.modal').classList.remove('visible');
  setTimeout(() => {
    modalLogin.classList.remove('is-open');
    enableLoginScroll();
  }, 400);
};

openLoginButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openLoginModalMobile();
  });
});

mobileLoginClose.addEventListener('swiped-down', () => {
  closeLoginModalMobile();
});
