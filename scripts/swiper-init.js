const mediaQuery = window.matchMedia("(max-width: 768px)");
window.addEventListener("DOMContentLoaded", () => {
  let swiper;
  function createSwiper() {
    if (swiper !== undefined) swiper.destroy(true, true);
    swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: false,
      spaceBetween: 20,
      speed: 500,
      grabCursor: true,
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      keyboard: {
        enabled: true,
      },
    });
  }
  function breakPointCheck() {
    if (mediaQuery.matches) createSwiper();
    else if (swiper !== undefined) swiper.destroy(true, true);
  }
  mediaQuery.addEventListener("change", breakPointCheck);
  breakPointCheck();
});
