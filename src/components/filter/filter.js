const filterBtn = document.querySelector('.filter__title-js');
const filterMobilBtn = document.querySelector('.filter-btn-js');
const filter = document.querySelector('.filter-js');
const filterBackBtn = document.querySelector('.filter__back-btn-js');

filterBtn && filterBtn.addEventListener('click', () => {
    filterBtn.classList.toggle('_active');
})

$(".js-range-slider").ionRangeSlider({
    onChange: function (data) {
        // Called every time handle position is changed

        console.log(data.from);
    },
});

filterMobilBtn && filterMobilBtn.addEventListener('click', () => {
    filter.classList.add('_active');
    document.querySelector('.category').classList.add('is-active');
})

filterBackBtn && filterBackBtn.addEventListener('click', () => { 
    filter.classList.remove('_active'); 
    document.querySelector('.category').classList.remove('is-active');
})