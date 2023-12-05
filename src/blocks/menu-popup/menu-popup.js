import { toggle, up, down } from 'slide-element'

export default function menuPopup() {
  const breakPoint = window.matchMedia('(max-width: 1440px)')
  const buttonMenu = document.querySelector('.tab-bar__main')
  const popup = document.querySelector('.menu-popup')
  const popupCloseCross = document.querySelector('.menu-popup__close-cross')
  const popupCloseDrag = document.querySelector('.menu-popup__close-drag')
  var touchStart = null;
  var touchPosition = null;
  let currentPosition = null
  function toggleMenu() {
    if (popup.style.display === 'none' || popup.style.display === '') popup.style.display = 'grid'
    else toggle(popup, { delay: 250, duration: 0 })
    toggle(popup.firstElementChild, { duration: 300 })
    document.body.classList.toggle('popup-active')
  }
  function closeMenu() {
    up(popup, { delay: 250, duration: 0 })
    up(popup.firstElementChild, { duration: 300 })
    document.body.classList.remove('popup-active')
  }
  function TouchStart(e) {
    touchStart = e.changedTouches[0].clientY;
  }
  function TouchMove(e) {
    touchPosition = e.changedTouches[0].clientY;
    currentPosition = touchPosition - touchStart
    if (currentPosition > 0) popup.firstElementChild.style.transform = 'translateY(' + currentPosition + 'px)'
  }
  function TouchEnd() {
    if (currentPosition < 300) {
      popup.firstElementChild.style.transform = 'translateY(' + 0 + 'px)'
      currentPosition = null
      touchStart = null;
      touchPosition = null;
    }
    else {
      closeMenu()
      setTimeout(()=>{
        popup.firstElementChild.style.transform = 'translateY(' + 0 + 'px)' 
      }, 1000)
    }
  }
  popup.addEventListener('click', (event) => {
    if (event.target === popup) closeMenu()
  })
  popupCloseCross.addEventListener('click', closeMenu)
  popupCloseDrag.addEventListener("touchstart", function (e) { TouchStart(e) });
  popupCloseDrag.addEventListener("touchmove", function (e) { TouchMove(e) });
  popupCloseDrag.addEventListener("touchend", function (e) { TouchEnd() });
  buttonMenu.addEventListener('click', toggleMenu)
  breakPoint.addEventListener('change', closeMenu)
}
