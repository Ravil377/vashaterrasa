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
