import Swiper from 'swiper/bundle';

export default function choiceSwiper() {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  let choiceSwiper;
  function createSwiper() {
    if (choiceSwiper !== undefined) choiceSwiper.destroy(true, true);
    choiceSwiper = new Swiper('.choice .swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 20,
      speed: 500,
      grabCursor: true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3
      },
      keyboard: {
        enabled: true
      }
    });
  }
  function breakPointCheck() {
    if (mediaQuery.matches) createSwiper();
    else if (choiceSwiper !== undefined) choiceSwiper.destroy(true, true);
  }
  mediaQuery.addEventListener('change', breakPointCheck);
  breakPointCheck();
}
