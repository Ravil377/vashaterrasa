import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const also = '.also-slider-js';

if(document.querySelector(also)) {
    const alsoSlider = new Swiper(also, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        effect: "fade",
        loop: true,
        // centeredSlides: true,
        centeredSlidesBounds: true,
        fadeEffect: {
          crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            576: {
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 40,  
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        },
        navigation: {
            nextEl: '.also__button-next-js',
            prevEl: '.also__button-prev-js',
        },
    })
}