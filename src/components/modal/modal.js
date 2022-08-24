const modalOpenBtns = document.querySelectorAll('[data-modal="1"]');
const modalCloseBtns = document.querySelectorAll('.modal__close-js');
const modal = document.querySelector('.modal-js');
const title = modal.querySelector('.modal__title');

const closeModal = () => {
    const form = document.querySelector('.modal__form').reset();
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
  
const openModal = (e) => {
    e.preventDefault();
    const equipment = e.target.dataset.more;
    if(equipment) modal.classList.add('modal_equipment')
    modal.classList.add('modal_opened');
    
}

modalCloseBtns.forEach(btn=>btn.addEventListener('click', closeModal));

document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalOpenBtns.forEach(btn => btn.addEventListener('click', openModal));