import { up, down } from 'slide-element'

export default function menuPopupNav() {
  menuPopup()
}
function menuPopup() {
  const navItems = document.querySelectorAll('.menu-popup__info-item')
  const popupNavs = document.querySelectorAll('.menu-popup-nav')
  for (const popupItem of popupNavs) {
    let touchStart
    let touchPosition
    let currentPosition
    const popupClose = popupItem.querySelector('.menu-popup-nav__close')
    const popupBack = popupItem.querySelector('.menu-popup-nav__back')
    const popupDrag = popupItem.querySelector('.menu-popup-nav__drag')
    function openMenuNav() {
      if (popupItem.style.display === 'none' || popupItem.style.display === '') popupItem.style.display = 'grid'
      else down(popupItem, { delay: 250, duration: 0 })
      down(popupItem.firstElementChild, { duration: 300 })
    }
    function closeMenuNav() {
      up(popupItem, { delay: 250, duration: 0 })
      up(popupItem.firstElementChild, { duration: 300 })
    }
    function TouchStart(event) {
      popupItem.firstElementChild.style.transition = 'transform 0s'
      touchStart = event.changedTouches[0].clientY
    }
    function TouchMove(event) {
      touchPosition = event.changedTouches[0].clientY
      currentPosition = touchPosition - touchStart
      if (currentPosition > 0) popupItem.firstElementChild.style.transform = 'translateY(' + currentPosition + 'px)'
    }
    function TouchEnd() {
      if (currentPosition < 400) {
        popupItem.firstElementChild.style.transition = 'transform .3s'
        popupItem.firstElementChild.style.transform = 'translateY(' + 0 + 'px)'
        currentPosition = undefined
        touchStart = undefined
        touchPosition = undefined
      } else {
        closeMenuNav()
        setTimeout(() => {
          popupItem.firstElementChild.style.transform = 'translateY(' + 0 + 'px)'
        }, 300)
      }
    }
    popupItem.addEventListener('click', (event) => {
      if (event.target === popupItem) closeMenuNav()
    })
    popupBack.addEventListener('click', (event) => {
      if (event.target !== popupBack) closeMenuNav()
    })
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
      if (popupItem.dataset.namePopup === navItem.dataset.openPopup) {
        navItem.addEventListener('click', openMenuNav)
      }
    }
  }
}
