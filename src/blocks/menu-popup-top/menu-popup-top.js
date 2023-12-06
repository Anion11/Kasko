import { toggle, up, down } from 'slide-element'

export default function menuPopupTop() {
  const buttonsTop = document.querySelectorAll('.menu-popup__info-item')
  const popup = document.querySelector('.menu-popup-top')
  const popupCloseCross = document.querySelector('.menu-popup-top__close-cross')
  const popupCloseDrag = document.querySelector('.menu-popup-top__close-drag')
  const popupBack = document.querySelector('.menu-popup-top__close-back')
  let touchStart
  let touchPosition
  let currentPosition
  function openMenuTop() {
    down(popup, { display: 'grid', delay: 250, duration: 0 })
    toggle(popup.firstElementChild, { duration: 300 })
  }
  function closeMenuTop() {
    up(popup, { delay: 250, duration: 0 })
    up(popup.firstElementChild, { duration: 300 })
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
      closeMenuTop()
      setTimeout(() => {
        popup.firstElementChild.style.transform = 'translateY(' + 0 + 'px)'
      }, 300)
    }
  }
  popup.addEventListener('click', (event) => {
    if (event.target === popup) closeMenuTop()
  })
  // popupCloseCross.addEventListener('click', closeMenu)
  popupCloseDrag.addEventListener('touchstart', (event) => {
    TouchStart(event)
  })
  popupCloseDrag.addEventListener('touchmove', (event) => {
    TouchMove(event)
  })
  popupCloseDrag.addEventListener('touchend', () => {
    TouchEnd()
  })
  popupBack.addEventListener('click', closeMenuTop)
  for (const button of buttonsTop) {
    button.addEventListener('click', openMenuTop)
  }
}
