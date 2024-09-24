const openRegButtons = document.querySelectorAll('.button-reg');
const modalReg = document.querySelector('.modals-reg');
const mobileRegClose = document.querySelector('.mobile-reg-close');

const disableRegScroll = () => {
  const pagePosition = window.scrollY;
  document.body.classList.add('disable-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = `${-pagePosition}px`;
};

const enableRegScroll = () => {
  const pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('disable-scroll');
  window.scroll({ top: pagePosition, left: 0 });
  document.body.removeAttribute('data-position');
};

const openRegModalMobile = () => {
  modalReg.classList.add('is-open');
  disableRegScroll();
  setTimeout(() => {
    modalReg.querySelector('.modal').classList.add('visible');
  }, 300);
};

const closeRegModalMobile = () => {
  modalReg.querySelector('.modal').classList.remove('visible');
  setTimeout(() => {
    modalReg.classList.remove('is-open');
    enableRegScroll();
  }, 400);
};

openRegButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openRegModalMobile();
  });
});

mobileRegClose.addEventListener('swiped-down', () => {
  closeRegModalMobile();
});
