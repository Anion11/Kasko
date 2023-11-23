import { toggle, up } from 'slide-element';

export default function tabBarMenu() {
  const breakPoint = window.matchMedia('(max-width: 1440px)');
  const buttonMenu = document.querySelector('.tab-bar__main');
  const popup = document.querySelector('.menu-popup');
  function toggleMenu() {
    toggle(popup, { display: 'grid', direction: 'normal' });
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'visible' : 'hidden';
  }
  function closeMenu() {
    up(popup);
    document.body.style.overflow = 'visible';
  }
  buttonMenu.addEventListener('click', toggleMenu);
  breakPoint.addEventListener('change', closeMenu);
}
