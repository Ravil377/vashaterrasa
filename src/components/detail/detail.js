const tabsColor = document.querySelector('.color-tabs-js');
const textColor = document.querySelector('.color-text-js');

if(tabsColor) {
    tabsColor.addEventListener('click', (e) => {
        const color = e.target.closest('LI');
        if(color) {
            tabsColor.querySelector('._active').classList.remove('_active');
            textColor.textContent = color.dataset.color;
            color.classList.add('_active');
        }
    })
    
    const initialisationColor = () => {
        if(tabsColor) {
            tabsColor.querySelector('LI').classList.add('_active');
            textColor.textContent = tabsColor.querySelector('LI').dataset.color;
        }
    }
    initialisationColor();
}


import Swiper, { Navigation, Thumbs } from "swiper";
Swiper.use([Navigation, Thumbs]);

const detail = '.detail__slider-js';

if(document.querySelector(detail)) {
    const detailThumbs= new Swiper(".detail__thumbnail-js", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
    });
    const detailSlider = new Swiper(detail, {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        thumbs: {
            swiper: detailThumbs,
        },
        navigation: {
            nextEl: '.detail__button-next-js',
            prevEl: '.detail__button-prev-js',
        },
    })
}

const detailTabs = document.querySelector('.detailtabs-js');

if(detailTabs) {
    const detailtabsList = detailTabs.querySelector('ul');
    detailtabsList.addEventListener('click', (e) => {
        const id = e.target.dataset.tab;
        if(id) {
            detailtabsList.querySelector('._active-tab').classList.remove('_active-tab');
            e.target.classList.add('_active-tab');
            detailTabs.querySelector('._active').classList.remove('_active');
            // console.log(detailTabs.querySelector(`[data-tab='${id}']`));
            detailTabs.querySelector(`[data-content='${id}']`).classList.add('_active');
        }
    })
}