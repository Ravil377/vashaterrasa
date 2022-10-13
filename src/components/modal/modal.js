const modalOpenBtns = document.querySelectorAll('[data-id="callme"]');
const modalCloseBtns = document.querySelectorAll('.modal__close-js');
const modal = document.querySelector('.modal-js');
const title = modal.querySelector('.modal__title');

const closeModal = () => {
    document.querySelector('.modal__form-js').reset();
    modal.classList.remove('modal_opened');
}

const checkKeyPress = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
};
  
const checkPressOverlay = (e) => {
    if (e.target === modal) {
        closeModal();
    }
};
  
const openModal = () => {
    modal.classList.add('modal_opened');
    
}

modalCloseBtns.forEach(btn=>btn.addEventListener('click', closeModal));

document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalOpenBtns.forEach(btn => btn.addEventListener('click', openModal));

const loc = document.querySelector('.location');
const location = loc.querySelector('.location__title-js');
const locationCloseBtn = document.querySelector('.location__close-js');


location && location.addEventListener('click', () => {
    loc.classList.toggle('_active');
})
locationCloseBtn && locationCloseBtn.addEventListener('click', () => {
    loc.classList.remove('_active');
})