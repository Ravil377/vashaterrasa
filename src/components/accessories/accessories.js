import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const accessories = '.accessories-js';

if(document.querySelector(accessories)) {
    const accessoriesSlider = new Swiper(accessories, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlidesBounds: true,
        effect: "fade",
        loop: true,
        fadeEffect: {
          crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
        navigation: {
            nextEl: '.accessories__button-next-js',
            prevEl: '.accessories__button-prev-js',
        },
    })
}