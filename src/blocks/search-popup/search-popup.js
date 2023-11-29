import { down, up } from 'slide-element'

export default function SearchPopup() {
  const popup = document.querySelector('.search-popup')
  const buttonSearch = document.querySelectorAll('.searchButton')
  const popupCloseCross = document.querySelector('.search-popup__close-cross')
  const inputSearch = document.querySelector('#search-popup')
  function closePopup() {
    up(popup, { duration: 0 })
    inputSearch.value = ''
    inputSearch.dispatchEvent(new Event('input'))
    document.body.style.overflow = 'visible'
  }
  function openPopup() {
    down(popup, { display: 'flex', duration: 0 })
    document.body.style.overflow = 'hidden'
  }
  popup.addEventListener('click', (event) => {
    if (event.target === popup) closePopup()
  })
  popupCloseCross.addEventListener('click', closePopup)
  if (buttonSearch) {
    for (const buttonSearchItem of buttonSearch) {
      buttonSearchItem.addEventListener('click', openPopup)
    }
  }
}
