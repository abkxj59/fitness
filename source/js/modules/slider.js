const trainers = document.querySelector('.trainers');
const reviews = document.querySelector('.reviews');

if (trainers !== null) {
  trainers.classList.remove('trainers--nojs');

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

  const trainerCards = trainers.querySelectorAll('.trainer-card');

  const setSlidesFocusable = () => {
    trainerCards.forEach((trainerCard) => {
      trainerCard.removeAttribute('tabindex');
    });
    for (let i = 0; i < trainersSlider.params.slidesPerView; i++) {
      trainersSlider.slides[trainersSlider.activeIndex + i].querySelector('.trainer-card').tabIndex = 0;
    }
  };

  setSlidesFocusable();
  trainersSlider.on('slideChange', setSlidesFocusable);
  window.addEventListener('resize', setSlidesFocusable);
}

if (reviews !== null) {
  reviews.classList.remove('reviews--nojs');

  const reviewsSlider = new Swiper('#reviews-slider', {

    watchOverflow: true,

    slidesPerView: 1,
    spaceBetween: 60,

    navigation: {
      nextEl: '.reviews__slider-button--next',
      prevEl: '.reviews__slider-button--prev',
    },
  });
}
