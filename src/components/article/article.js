import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const article = '.article-js ';

if(document.querySelector(article)) {
    const articleSlider = new Swiper(article, {
        slidesPerView: 3,
        spaceBetween: 40,
        effect: "fade",
        loop: true,
        fadeEffect: {
          crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.article__button-next-js',
            prevEl: '.article__button-prev-js',
        },
    })
}
