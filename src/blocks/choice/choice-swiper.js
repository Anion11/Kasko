import Swiper from 'swiper/bundle';

export default function choiceSwiper() {
  const choiceSwiper = new Swiper('.choice .swiper', {
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
