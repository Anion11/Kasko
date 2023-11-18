import Swiper from 'swiper/bundle';

export default function bannerSwiper() {
  const bannerSwiper = new Swiper('.banner .swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 500,
    grabCursor: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}
