import { down, up } from 'slide-element'

export default function SearchPopup() {
  const popup = document.querySelector('.search-popup')
  const popupButtons = document.querySelectorAll('.search__popup-open')
  const input = popup.querySelector('input')
  let count = 0
  function openPopup() {
    count++
    input.value = ''
    input.dispatchEvent(new Event('input'))
    down(popup, { display: 'grid', duration: 0 })
    document.body.style.overflow = 'hidden'
  }
  function closePopup() {
    up(popup, { duration: 0 })
    count--
    if (count === 0) document.body.style.overflow = 'visible'
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
