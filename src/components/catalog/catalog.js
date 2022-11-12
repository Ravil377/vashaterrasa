import Swiper, { Navigation, Thumbs } from "swiper";
Swiper.use([Navigation, Thumbs]);
var detailSlider;
const detail = '.detail__slider-js';
const catalog = document.querySelector('.catalog-js');

if(document.querySelector(detail)) {
    const detailThumbs= new Swiper(".detail__thumbnail-js", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        direction: 'vertical',
        // breakpoints: {
        //     768: {
        //         slidesPerView: 4,
        //         spaceBetween: 20,
        //     }
        // },
    });
    detailSlider = new Swiper(detail, {
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        thumbs: {
            swiper: detailThumbs,
        },
    })
}


catalog && catalog.addEventListener('click', (e) => {
    const targ = e.target;
    const prod = targ.closest('.product-js');
    const isColor = targ.closest('.product__colors-js');
    const isLength = targ.closest('.product__length-list-js');
    const isAmount = targ.closest('.product__amount-js');

    const changeAddCartBtn = (btn, qty = 1) => {
        const cartBtn = prod.querySelector('.product__buy-btn-js');
        if(btn) cartBtn.dataset.product_id = btn.dataset.id;
        cartBtn.dataset.quantity = qty;
        if(qty == 1) resetInput();
    }

    const createSpan = (text) => {
        var span = document.createElement("span");
        span.textContent = numberWithSpaces(text) + '₽';
        return span;
    };

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const changePrice = (btn) => {
        const priceNew = btn.dataset.pricenew;
        const priceOld = btn.dataset.priceold;
        const price = prod.querySelector('.product__price-js');
        price.textContent = numberWithSpaces(priceNew) + '₽';
        price.append(createSpan(priceOld));
    }

    const activeLengthBtn = (color) => {
        const lengthList = prod.querySelector('.product__length-list-js');
        const lengthBtns = lengthList.querySelectorAll('li');
        let isFirst = false;
        lengthBtns.forEach(li => {
            if(li.dataset.color == color && li.classList.contains('_none') && isFirst == false) {
                isFirst = true;
                changeLengthBtn(li);
                li.classList.remove('_none');
            } else if(li.dataset.color == color && li.classList.contains('_none') && isFirst == true) {
                li.classList.remove('_none');
            } else if(!li.classList.contains('_none') && li.dataset.color != color){
                li.classList.add('_none');
            }
        })
    }
    const resetInput = () => {
        prod.querySelector('input').value = 1;
    }
    const changeLengthBtn = (btn) => {
        const lengthList = prod.querySelector('.product__length-list-js');
        lengthList.querySelector('._active').classList.remove('_active');
        btn.classList.add('_active');
        changePrice(btn);
        changeAddCartBtn(btn);
    }

    const changeColor = () => {
        if(prod.querySelector('.product__image-js')) {
            prod.querySelector('.product__image-js').src="http://localhost:3000/images/loading.gif";
            prod.querySelector('.product__image-js').classList.add('_loader');
            let img = document.createElement('img');
            img.src = targ.dataset.img;
            img.onload = function () {
                setTimeout(function () {
                    prod.querySelector('.product__image-js').src=img.src;
                    prod.querySelector('.product__image-js').classList.remove('_loader');
                }, 500);
            }
        }
        if(prod.querySelector('.product__image-slider-js')) {
            // console.log(targ.closest('.product__color').querySelector('div'));
            detailSlider.slideTo(targ.closest('.product__color').querySelector('div').dataset.image);
        }
        isColor.querySelector('._active').classList.remove('_active');
        targ.closest('.product__color').classList.add('_active');
        
        const textColor = prod.querySelector('.product__name-color-js');
        textColor.textContent = targ.dataset.color;
        
        activeLengthBtn(targ.dataset.color);
    }

    if(isColor && targ.dataset.img != undefined) changeColor();
    if(isLength && targ.tagName == "LI") changeLengthBtn(targ);
    if(isAmount) {
        const input = isAmount.querySelector('input');
        let count = input.value;
        if(targ.classList.contains('product__amount-plus-js')) {
            count++;
        }
        if(targ.classList.contains('product__amount-minus-js') & count != 1) {
            count--;            
        }

        input.value = count;
        changeAddCartBtn('', count);
    }

})

