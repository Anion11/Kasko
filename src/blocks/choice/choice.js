import Swiper from 'swiper/bundle'

export default function choice() {
  choiceSwiper()
}

function choiceSwiper() {
  const breakPoint = window.matchMedia('(max-width: 768px)')
  let choiceSwiper
  function createSwiper() {
    if (choiceSwiper !== undefined) choiceSwiper.destroy(true, true)
    choiceSwiper = new Swiper('.choice .swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 20,
      speed: 500,
      grabCursor: true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination'
      },
      keyboard: {
        enabled: true
      }
    })
  }
  function breakPointCheck() {
    if (breakPoint.matches) createSwiper()
    else if (choiceSwiper !== undefined) choiceSwiper.destroy(true, true)
  }
  breakPoint.addEventListener('change', breakPointCheck)
  breakPointCheck()
}
