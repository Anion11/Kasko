import { up, down } from 'slide-element'

export default function menuPopupNav() {
  menuPopup()
}

function menuPopup() {
  const breakPoint = window.matchMedia('(max-width: 1440px)')
  const navItems = document.querySelectorAll('.menu-popup__info-item')
  const popupNav = document.querySelector('.menu-popup-nav')
  const popupClose = document.querySelector('.menu-popup-nav__close')
  const popupBack = document.querySelector('.menu-popup-nav__back')
  const popupDrag = document.querySelector('.menu-popup-nav__drag')
  let touchStart
  let touchPosition
  let currentPosition
  function openMenuNav(event) {
    if (event.target === document.querySelector('.menu-popup__info-item')) {
      if (popupNav.style.display === 'none' || popupNav.style.display === '') popupNav.style.display = 'grid'
      else down(popupNav, { delay: 250, duration: 0 })
      down(popupNav.firstElementChild, { duration: 300 })
    }
  }
  function closeMenuNav() {
    up(popupNav, { delay: 250, duration: 0 })
    up(popupNav.firstElementChild, { duration: 300 })
  }
  function TouchStart(event) {
    popupNav.firstElementChild.style.transition = 'transform 0s'
    touchStart = event.changedTouches[0].clientY
  }
  function TouchMove(event) {
    touchPosition = event.changedTouches[0].clientY
    currentPosition = touchPosition - touchStart
    if (currentPosition > 0) popupNav.firstElementChild.style.transform = 'translateY(' + currentPosition + 'px)'
  }
  function TouchEnd() {
    if (currentPosition < 400) {
      popupNav.firstElementChild.style.transition = 'transform .3s'
      popupNav.firstElementChild.style.transform = 'translateY(' + 0 + 'px)'
      currentPosition = undefined
      touchStart = undefined
      touchPosition = undefined
    } else {
      closeMenuNav()
      setTimeout(() => {
        popupNav.firstElementChild.style.transform = 'translateY(' + 0 + 'px)'
      }, 300)
    }
  }
  popupNav.addEventListener('click', (event) => {
    if (event.target === popupNav) closeMenuNav()
  })
  popupBack.addEventListener('click', closeMenuNav)
  popupClose.addEventListener('click', closeMenuNav)
  popupDrag.addEventListener('touchstart', (event) => {
    TouchStart(event)
  })
  popupDrag.addEventListener('touchmove', (event) => {
    TouchMove(event)
  })
  popupDrag.addEventListener('touchend', () => {
    TouchEnd()
  })
  for (const navItem of navItems) {
    navItem.addEventListener('click', (event) => {
      openMenuNav(event)
    })
  }
  breakPoint.addEventListener('change', closeMenuNav)
}
