import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);

const welcome = '.main-slider__slider-js';

if(document.querySelector(welcome)) {
    const welcomeSlider = new Swiper(welcome, {
        slidesPerView: 1,
        spaceBetween: 5,
        initialSlide: 1,
        pagination: {
            el: '.swiper-pagination',
        },
    })
}