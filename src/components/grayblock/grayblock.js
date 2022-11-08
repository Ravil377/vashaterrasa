import Swiper, { Navigation, Pagination, EffectFade  } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade]);

const grayslider = '.grayblock__list-js';

if(document.querySelector(grayslider)) {
    const sliders = document.querySelector(grayslider).querySelectorAll('.grayblock__slider-js');
    sliders.forEach((item, idx) => {        
        new Swiper(item, {
            slidesPerView: 1,
            spaceBetween: 2,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
            },
            fadeEffect: {
              crossFade: true
            },
            navigation: {
                nextEl: '.grayblock__next-js',
                prevEl: '.grayblock__prev-js',
            },
    
        })
    })
    
}