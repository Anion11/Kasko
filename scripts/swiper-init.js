const mediaQuery = window.matchMedia("(max-width: 768px)");
window.addEventListener("DOMContentLoaded", () => {
  let choice__swiper;
  function createSwiper() {
    if (choice__swiper !== undefined) choice__swiper.destroy(true, true);
    choice__swiper = new Swiper(".choice__content", {
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
    else if (choice__swiper !== undefined) choice__swiper.destroy(true, true);
  }
  mediaQuery.addEventListener("change", breakPointCheck);
  breakPointCheck();
});
