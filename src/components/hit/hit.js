import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const hit = '.hit-slider-js';

if(document.querySelector(hit)) {
    const hitSlider = new Swiper(hit, {
        slidesPerView: 3,
        spaceBetween: 40,
        effect: "fade",
        loop: true,
        fadeEffect: {
          crossFade: true
        },
        navigation: {
            nextEl: '.hit__button-next-js',
            prevEl: '.hit__button-prev-js',
        },
    })
}

const hitContainer = document.querySelector(hit);
hitContainer.addEventListener('click', (e) => {
    const target = e.target;
    const num = target.closest('.card__calc-js') && target.closest('.card__calc-js').querySelector('.card__calc-num-js');
    if(target.classList.contains('card__add-js')) {
        num.textContent = Number(num.textContent) + 1;
    }
    if(target.classList.contains('card__remove-js') && Number(num.textContent) != 1) {
        num.textContent = Number(num.textContent) - 1;
    }
})