import { down, up } from 'slide-element'

export default function SearchPopup() {
  const popup = document.querySelector('.search-popup')
  const popupButtons = document.querySelectorAll('.search__popup-open')
  const input = popup.querySelector('input')
  let flag = false
  function checkOpenPopup() {
    return document.body.classList.value === "popup-active"
  }
  function openPopup() {
    input.value = ''
    input.dispatchEvent(new Event('input'))
    down(popup, { display: 'grid', duration: 0 })
    !checkOpenPopup ? document.body.classList.add("popup-active") : flag = true;
  }
  function closePopup() {
    up(popup, { duration: 0 })
    !flag && document.body.classList.remove("popup-active")
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
