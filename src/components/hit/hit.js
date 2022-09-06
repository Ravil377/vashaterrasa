import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const hit = '.hit-slider-js';

if(document.querySelector(hit)) {
    const hitSlider = new Swiper(hit, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        effect: "fade",
        loop: true,
        // centeredSlides: true,
        centeredSlidesBounds: true,
        fadeEffect: {
          crossFade: true
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
            nextEl: '.hit__button-next-js',
            prevEl: '.hit__button-prev-js',
        },
    })
}

const calcs = document.querySelectorAll('.calc-js');




if(calcs) {
    calcs.forEach(calc => {
        calc.addEventListener('click', (e) => {
            console.log(calc);
            const target = e.target;
            console.log(target);
            const num = target.closest('.card__calc') && target.closest('.card__calc').querySelector('.card__calc-num-js');
            if(target.classList.contains('card__add-js')) {
                num.textContent = Number(num.textContent) + 1;
            }
            if(target.classList.contains('card__remove-js') && Number(num.textContent) != 1) {
                num.textContent = Number(num.textContent) - 1;
            }
        })
    })

    
}