import { toggle, up } from 'slide-element'

export default function menuPopup() {
  const breakPoint = window.matchMedia('(max-width: 1440px)')
  const buttonMenu = document.querySelector('.tab-bar__main')
  const popup = document.querySelector('.menu-popup')
  const popupCloseCross = document.querySelector('.menu-popup__close-cross')
  function toggleMenu() {
    if (popup.style.display === 'none' || popup.style.display === '') popup.style.display = 'grid'
    else toggle(popup, { delay: 250, duration: 0 })
    toggle(popup.firstElementChild, { duration: 300 })
    document.body.classList.toggle("popup-active");
  }
  function closeMenu() {
    up(popup, { delay: 250, duration: 0 })
    up(popup.firstElementChild, { duration: 300 })
    document.body.classList.remove("popup-active");
  }
  popup.addEventListener('click', (event) => {
    if (event.target === popup) closeMenu()
  })
  popupCloseCross.addEventListener('click', closeMenu)
  buttonMenu.addEventListener('click', toggleMenu)
  breakPoint.addEventListener('change', closeMenu)
}
