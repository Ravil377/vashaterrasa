import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const team = '.team__slider-js';

if(document.querySelector(team)) {
    const teamSlider = new Swiper(team, {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            }
        },
        navigation: {
            nextEl: '.team__prev-js',
            prevEl: '.team__next-js',
        },
    })
}


