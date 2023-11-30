import { down, up } from 'slide-element'

export default function SearchPopup() {
  const popup = document.querySelector('.search-popup')
  const popupButtons = document.querySelectorAll('.search__popup-open')
  function openPopup() {
    down(popup, { display: 'grid', duration: 0 })
    document.body.style.overflow = 'hidden'
  }
  function closePopup() {
    up(popup, { duration: 0 })
    document.body.style.overflow = 'visible'
  }
  for (const popupButton of popupButtons) {
    popupButton.addEventListener('click', () => {
      openPopup()
    })
  }
  popup.addEventListener('click', (event) => {
    if (event.target === popup) closePopup()
  })
  const popupCloseCross = popup.querySelector('.search-popup__close')
  popupCloseCross.addEventListener('click', closePopup)
}
