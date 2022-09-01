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

const hitContainer = document.querySelector(hit);
hitContainer && hitContainer.addEventListener('click', (e) => {
    const target = e.target;
    const num = target.closest('.card__calc-js') && target.closest('.card__calc-js').querySelector('.card__calc-num-js');
    if(target.classList.contains('card__add-js')) {
        num.textContent = Number(num.textContent) + 1;
    }
    if(target.classList.contains('card__remove-js') && Number(num.textContent) != 1) {
        num.textContent = Number(num.textContent) - 1;
    }
})