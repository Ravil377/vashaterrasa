import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const article = '.article-js ';

if(document.querySelector(article)) {
    const articleSlider = new Swiper(article, {
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
                slidesPerView: 3,
                spaceBetween: 40,
            }
        },
        navigation: {
            nextEl: '.article__button-next-js',
            prevEl: '.article__button-prev-js',
        },
    })
}


const article1 = '.article1-js ';

if(document.querySelector(article1)) {
    const article1Slider = new Swiper(article1, {
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
            992: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        },
        navigation: {
            nextEl: '.article1__button-next-js',
            prevEl: '.article1__button-prev-js',
        },
    })
}