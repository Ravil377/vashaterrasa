import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const feedback = '.feedback-js';

if(document.querySelector(feedback)) {
    const feedbackSlider = new Swiper(feedback, {
        slidesPerView: 'auto',
        spaceBetween: 15,
        effect: "fade",
        loop: true,
        // centeredSlides: true,
        centeredSlidesBounds: true,
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
            992: {
                spaceBetween: 40,  
            },
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.feedback__button-next-js',
            prevEl: '.feedback__button-prev-js',
        },
    })
}