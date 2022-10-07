const trainers = document.querySelector('.trainers');
const reviews = document.querySelector('.reviews');

trainers.classList.remove('trainers--nojs');
reviews.classList.remove('reviews--nojs');

const trainersSlider = new Swiper('#trainers-slider', {
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 47,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  grid: {
    rows: 1,
  },

  navigation: {
    nextEl: '.trainers__slider-button--next',
    prevEl: '.trainers__slider-button--prev',
  },
});

const reviewsSlider = new Swiper('#reviews-slider', {
  // loop: false,
  watchOverflow: true,

  slidesPerView: 1,
  spaceBetween: 60,

  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
});
