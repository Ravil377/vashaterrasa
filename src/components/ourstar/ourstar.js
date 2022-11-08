import Swiper, { Navigation,EffectFade } from "swiper";

Swiper.use([Navigation, EffectFade]);

const ourstar = '.ourstar__slider-js';

if(document.querySelector(ourstar)) {
    const ourstarSlider = new Swiper(ourstar, {
        slidesPerView: 1,
        spaceBetween: 2,
        initialSlide: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
            nextEl: '.ourstar__next-js',
            prevEl: '.ourstar__prev-js',
        },

    })
}