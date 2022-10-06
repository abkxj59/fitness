const trainers = document.querySelector('.trainers');

trainers.classList.remove('trainers--nojs');

const trainersSlider = new Swiper('#trainers-slider', {
  // setWrapperSize: true,
  loop: true,

  breakpoints: {
    320: {
      // width: 200,
      slidesPerView: 1,
      spaceBetween: 47,
    },
    768: {
      // width: 600,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      // width: 1200,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  grid: {
    rows: 1,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
