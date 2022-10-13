import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const ourwork = '.ourwork__slider-js';

if(document.querySelector(ourwork)) {
    const ourworkSlider = new Swiper(ourwork, {
        slidesPerView: 1,
        spaceBetween: 2,
        initialSlide: 1,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.ourwork__next-js',
            prevEl: '.ourwork__prev-js',
        },
    })
}