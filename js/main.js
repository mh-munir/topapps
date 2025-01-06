// Cache DOM elements
const asids = document.querySelector('.aside');
const navOpen = document.querySelector('.mobile-nav--open');
const navClose = document.querySelector('.mobile-nav--close');
const navbarOpen = document.querySelector('.nav-content');

// Scroll event for sticky aside
window.addEventListener('scroll', () => {
  asids?.classList.toggle('sticky', window.scrollY > 10);
});

// Toggle navigation menu
const toggleNav = (isOpen) => {
  navbarOpen.classList.toggle('nav-content--open', isOpen);
  navOpen.classList.toggle('d-none', isOpen);
  navClose.classList.toggle('d-none', !isOpen);
};

navOpen?.addEventListener('click', () => toggleNav(true));
navClose?.addEventListener('click', () => toggleNav(false));



