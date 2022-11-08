import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const articles = '.articles__slider-js';

if(document.querySelector(articles)) {
    const articlesSlider = new Swiper(articles, {
        slidesPerView: 'auto',
        spaceBetween: 2,
        initialSlide: 1,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        // centerInsufficientSlides: true,
        // loop: true,
        breakpoints: {
            576: {
                spaceBetween: 10,
            },
            1200: {
                spaceBetween: 40,
                slidesPerView: 3,
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.articles__next-js',
            prevEl: '.articles__prev-js',
        },
    })
}