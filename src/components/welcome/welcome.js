import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const welcome = '.welcome-js';

if(document.querySelector(welcome)) {
    const welcomeSlider = new Swiper(welcome, {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        navigation: {
            nextEl: '.welcome__button-next-js',
            prevEl: '.welcome__button-prev-js',
        },
    })
}