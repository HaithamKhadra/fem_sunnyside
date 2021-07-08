const btnHambuger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const arrow = document.querySelector('.arrow');
const slogan = document.querySelector('.slogan');
const menu = document.querySelector('.translateY-menu');

btnHambuger.addEventListener('click', () => {
  if (header.classList.contains('mobile-hamburger')) {
    header.classList.remove('mobile-hamburger');
    arrow.style.visibility = 'visible';
    slogan.style.visibility = 'visible';
    // menu.style.transform = 'translateY(-150%)'
    menu.classList.add('menu-slide-up');
    menu.classList.remove('menu-slide-down');
  } else {
    header.classList.add('mobile-hamburger');
    arrow.style.visibility = 'hidden'
    slogan.style.visibility = 'hidden'
    // menu.style.transform = 'translateY(0%)'
    menu.classList.add('menu-slide-down');
    menu.classList.remove('menu-slide-up');
  }
})