import Swiper, { Navigation, EffectFade  } from "swiper";
Swiper.use([Navigation, EffectFade]);

const underwelcome = '.underwelcome__slider-js';

if(document.querySelector(underwelcome)) {
    const underwelcomeSlider = new Swiper(underwelcome, {
        slidesPerView: 1,
        spaceBetween: 2,
        initialSlide: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
            nextEl: '.underwelcome__next-js',
            prevEl: '.underwelcome__prev-js',
        },

    })
}