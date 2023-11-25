import { toggle, up } from 'slide-element';

export default function tabBarMenu() {
  const breakPoint = window.matchMedia('(max-width: 1440px)');
  const buttonMenu = document.querySelector('.tab-bar__main');
  const popup = document.querySelector('.menu-popup');
  function toggleMenu() {
    if (popup.style.display === 'none' || popup.style.display === '') popup.style.display = 'grid';
    else toggle(popup, { delay: 250, duration: 0 });
    toggle(popup.firstElementChild, { duration: 300 });
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'visible' : 'hidden';
  }
  function closeMenu() {
    up(popup);
    document.body.style.overflow = 'visible';
  }
  buttonMenu.addEventListener('click', toggleMenu);
  breakPoint.addEventListener('change', closeMenu);
}
