const burger = document.querySelector('.burger');
const headerList = document.querySelector('.header__list');

if (headerList) {
new TransferElements(
  {
    sourceElement: headerList,
    breakpoints: {
      768: {
        targetElement: document.querySelector('.header__bottom'),
        targetPosition: 1
      }
    }
  }
)
};

burger.addEventListener('click', () => {
  const body = document.body;
  const menu = document.querySelector('.header__bottom');
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__bottom--active');
  body.classList.toggle('stop-scroll');
});



