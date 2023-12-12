import { toggle, up } from 'slide-element'

export default function menuPopup() {
  const breakPoint = window.matchMedia('(max-width: 1440px)')
  const buttonMenu = document.querySelector('.tab-bar__main')
  const popup = document.querySelector('.menu-popup')
  const popupCloseCross = document.querySelector('.menu-popup__close-cross')
  const popupCloseDrag = document.querySelector('.menu-popup__close-drag')
  const popupNav = document.querySelector('.menu-popup-nav')
  let touchStart
  let touchPosition
  let currentPosition
  function toggleMenu() {
    closeMenuNav()
    if (popup.style.display === 'none' || popup.style.display === '') popup.style.display = 'grid'
    else toggle(popup, { delay: 250, duration: 0 })
    toggle(popup.firstElementChild, { duration: 300 })
    document.body.classList.toggle('popup-active')
  }
  function closeMenuNav() {
    up(popupNav, { delay: 250, duration: 0 })
    up(popupNav.firstElementChild, { duration: 300 })
  }
  function closeMenu() {
    up(popup, { delay: 250, duration: 0 })
    up(popup.firstElementChild, { duration: 300 })
    document.body.classList.remove('popup-active')
  }
  function TouchStart(event) {
    popup.firstElementChild.style.transition = 'transform 0s'
    touchStart = event.changedTouches[0].clientY
  }
  function TouchMove(event) {
    touchPosition = event.changedTouches[0].clientY
    currentPosition = touchPosition - touchStart
    if (currentPosition > 0) popup.firstElementChild.style.transform = 'translateY(' + currentPosition + 'px)'
  }
  function TouchEnd() {
    if (currentPosition < 200) {
      popup.firstElementChild.style.transition = 'transform .3s'
      popup.firstElementChild.style.transform = 'translateY(' + 0 + 'px)'
      currentPosition = undefined
      touchStart = undefined
      touchPosition = undefined
    } else {
      closeMenu()
      setTimeout(() => {
        popup.firstElementChild.style.transform = 'translateY(' + 0 + 'px)'
      }, 300)
    }
  }
  popup.addEventListener('click', (event) => {
    if (event.target === popup) closeMenu()
  })
  popupCloseCross.addEventListener('click', closeMenu)
  popupCloseDrag.addEventListener('touchstart', (event) => {
    TouchStart(event)
  })
  popupCloseDrag.addEventListener('touchmove', (event) => {
    TouchMove(event)
  })
  popupCloseDrag.addEventListener('touchend', () => {
    TouchEnd()
  })
  buttonMenu.addEventListener('click', toggleMenu)
  breakPoint.addEventListener('change', closeMenuNav)
  breakPoint.addEventListener('change', closeMenu)
}
